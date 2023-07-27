import { CampInterface } from 'interfaces/camp';
import { GetQueryInterface } from 'interfaces';

export interface TransportationInterface {
  id?: string;
  details: string;
  camp_id?: string;
  created_at?: any;
  updated_at?: any;

  camp?: CampInterface;
  _count?: {};
}

export interface TransportationGetQueryInterface extends GetQueryInterface {
  id?: string;
  details?: string;
  camp_id?: string;
}
