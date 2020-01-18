import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Station } from '../../../shared/models/station.model';
import { StationModule } from '../station.module';
import { map, tap } from 'rxjs/operators';
import { ApiStation } from '../../../shared/models/api-station.model';

@Injectable({
  providedIn: StationModule
})
export class StationsApiService {

  constructor(private http: HttpClient) {
  }

  getStationBy(searchString: string) {
    // TODO Interceptor schreiben
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${environment.token}`);

    return this.http
      .get<ApiStation>(`https://api.deutschebahn.com/stada/v2/stations?limit=20&searchstring=*${searchString}*`, { headers });
  }
}
