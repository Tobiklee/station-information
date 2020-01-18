import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationDetailsApiService } from './station-details-api.service';
import { Observable } from 'rxjs';
import { Facility } from '../../../shared/models/facility.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent implements OnInit {

  facilities$: Observable<Facility[]>;

  constructor(private activatedRoute: ActivatedRoute, private stationDetailsApiService: StationDetailsApiService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.facilities$ = this.stationDetailsApiService.getStationFacilitiesBy(id).pipe(
      map(data => data.facilities)
    );
  }

}
