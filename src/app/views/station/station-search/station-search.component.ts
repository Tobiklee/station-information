import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StationsApiService } from './stations-api.service';
import { map } from 'rxjs/operators';
import { Station } from './station.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station-search',
  templateUrl: './station-search.component.html',
  styleUrls: ['./station-search.component.scss']
})
export class StationSearchComponent implements OnInit {
  stations$: Observable<Station[]>;

  constructor(
    private stationsApiService: StationsApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  searchStation(searchString: string) {
    this.stations$ = this.stationsApiService.getStationBy(searchString).pipe(
      map(data => {
        return data.result;
      })
    );
  }

  navigateTo(id: string) {
    this.router.navigate(['/station/', id]);
  }
}
