import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { campValidationSchema } from 'validationSchema/camps';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getCamps();
    case 'POST':
      return createCamp();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCamps() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.camp
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'camp'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createCamp() {
    await campValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.attendance?.length > 0) {
      const create_attendance = body.attendance;
      body.attendance = {
        create: create_attendance,
      };
    } else {
      delete body.attendance;
    }
    if (body?.registration?.length > 0) {
      const create_registration = body.registration;
      body.registration = {
        create: create_registration,
      };
    } else {
      delete body.registration;
    }
    if (body?.staff?.length > 0) {
      const create_staff = body.staff;
      body.staff = {
        create: create_staff,
      };
    } else {
      delete body.staff;
    }
    if (body?.transportation?.length > 0) {
      const create_transportation = body.transportation;
      body.transportation = {
        create: create_transportation,
      };
    } else {
      delete body.transportation;
    }
    const data = await prisma.camp.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
