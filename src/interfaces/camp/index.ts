import { AttendanceInterface } from 'interfaces/attendance';
import { RegistrationInterface } from 'interfaces/registration';
import { StaffInterface } from 'interfaces/staff';
import { TransportationInterface } from 'interfaces/transportation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CampInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  attendance?: AttendanceInterface[];
  registration?: RegistrationInterface[];
  staff?: StaffInterface[];
  transportation?: TransportationInterface[];
  user?: UserInterface;
  _count?: {
    attendance?: number;
    registration?: number;
    staff?: number;
    transportation?: number;
  };
}

export interface CampGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
