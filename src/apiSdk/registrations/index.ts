import axios from 'axios';
import queryString from 'query-string';
import { RegistrationInterface, RegistrationGetQueryInterface } from 'interfaces/registration';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRegistrations = async (
  query?: RegistrationGetQueryInterface,
): Promise<PaginatedInterface<RegistrationInterface>> => {
  const response = await axios.get('/api/registrations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRegistration = async (registration: RegistrationInterface) => {
  const response = await axios.post('/api/registrations', registration);
  return response.data;
};

export const updateRegistrationById = async (id: string, registration: RegistrationInterface) => {
  const response = await axios.put(`/api/registrations/${id}`, registration);
  return response.data;
};

export const getRegistrationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/registrations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRegistrationById = async (id: string) => {
  const response = await axios.delete(`/api/registrations/${id}`);
  return response.data;
};
