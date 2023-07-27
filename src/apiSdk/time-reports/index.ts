import axios from 'axios';
import queryString from 'query-string';
import { TimeReportInterface, TimeReportGetQueryInterface } from 'interfaces/time-report';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTimeReports = async (
  query?: TimeReportGetQueryInterface,
): Promise<PaginatedInterface<TimeReportInterface>> => {
  const response = await axios.get('/api/time-reports', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTimeReport = async (timeReport: TimeReportInterface) => {
  const response = await axios.post('/api/time-reports', timeReport);
  return response.data;
};

export const updateTimeReportById = async (id: string, timeReport: TimeReportInterface) => {
  const response = await axios.put(`/api/time-reports/${id}`, timeReport);
  return response.data;
};

export const getTimeReportById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/time-reports/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTimeReportById = async (id: string) => {
  const response = await axios.delete(`/api/time-reports/${id}`);
  return response.data;
};
