import axios from 'axios';
import queryString from 'query-string';
import { TransportationInterface, TransportationGetQueryInterface } from 'interfaces/transportation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTransportation = async (
  query?: TransportationGetQueryInterface,
): Promise<PaginatedInterface<TransportationInterface>> => {
  const response = await axios.get('/api/transportation', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTransportation = async (transportation: TransportationInterface) => {
  const response = await axios.post('/api/transportation', transportation);
  return response.data;
};

export const updateTransportationById = async (id: string, transportation: TransportationInterface) => {
  const response = await axios.put(`/api/transportation/${id}`, transportation);
  return response.data;
};

export const getTransportationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/transportation/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTransportationById = async (id: string) => {
  const response = await axios.delete(`/api/transportation/${id}`);
  return response.data;
};
