import { Station } from './station.model';

export interface ApiStation {
  total: number;
  result: Array<Station>;
}
