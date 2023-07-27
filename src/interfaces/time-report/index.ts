import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TimeReportInterface {
  id?: string;
  details: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TimeReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  details?: string;
  user_id?: string;
}
