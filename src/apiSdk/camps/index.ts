import axios from 'axios';
import queryString from 'query-string';
import { CampInterface, CampGetQueryInterface } from 'interfaces/camp';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCamps = async (query?: CampGetQueryInterface): Promise<PaginatedInterface<CampInterface>> => {
  const response = await axios.get('/api/camps', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCamp = async (camp: CampInterface) => {
  const response = await axios.post('/api/camps', camp);
  return response.data;
};

export const updateCampById = async (id: string, camp: CampInterface) => {
  const response = await axios.put(`/api/camps/${id}`, camp);
  return response.data;
};

export const getCampById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/camps/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCampById = async (id: string) => {
  const response = await axios.delete(`/api/camps/${id}`);
  return response.data;
};
