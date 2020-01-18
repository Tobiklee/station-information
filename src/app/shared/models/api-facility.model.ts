import { Facility } from './facility.model';

export interface ApiFacility {
  name: string;
  facilities: Array<Facility>;
}
