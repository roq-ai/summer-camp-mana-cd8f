import { UserInterface } from 'interfaces/user';
import { CampInterface } from 'interfaces/camp';
import { GetQueryInterface } from 'interfaces';

export interface RegistrationInterface {
  id?: string;
  details: string;
  user_id?: string;
  camp_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  camp?: CampInterface;
  _count?: {};
}

export interface RegistrationGetQueryInterface extends GetQueryInterface {
  id?: string;
  details?: string;
  user_id?: string;
  camp_id?: string;
}
