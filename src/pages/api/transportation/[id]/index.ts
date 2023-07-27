import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { transportationValidationSchema } from 'validationSchema/transportation';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.transportation
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getTransportationById();
    case 'PUT':
      return updateTransportationById();
    case 'DELETE':
      return deleteTransportationById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getTransportationById() {
    const data = await prisma.transportation.findFirst(convertQueryToPrismaUtil(req.query, 'transportation'));
    return res.status(200).json(data);
  }

  async function updateTransportationById() {
    await transportationValidationSchema.validate(req.body);
    const data = await prisma.transportation.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteTransportationById() {
    const data = await prisma.transportation.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
