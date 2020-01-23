import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiFacility } from './api-facility.model';
import { StationDetailsModule } from '../station-details.module';

@Injectable({
  providedIn: StationDetailsModule
})
export class StationDetailsApiService {
  constructor(private http: HttpClient) {}

  getStationFacilitiesBy(id: string) {
    // TODO Interceptor schreiben
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${environment.token}`);

    // TODO Es wird immer mit einem Limit von 20 und "*" vor und nach dem Suchstring gesucht
    return this.http.get<ApiFacility>(
      `https://api.deutschebahn.com/fasta/v2/stations/${id}`,
      { headers }
    );
  }
}
