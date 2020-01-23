import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { StationModule } from '../station.module';
import { ApiStation } from './api-station.model';

@Injectable({
  providedIn: StationModule
})
export class StationsApiService {
  constructor(private http: HttpClient) {}

  getStationBy(searchString: string) {
    // TODO Interceptor schreiben
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${environment.token}`);

    // TODO Es wird immer mit einem Limit von 20 und "*" vor und nach dem Suchstring gesucht
    // TODO String als Konstante
    return this.http.get<ApiStation>(
      `https://api.deutschebahn.com/stada/v2/stations?limit=20&searchstring=*${searchString}*`,
      { headers }
    );
  }
}
