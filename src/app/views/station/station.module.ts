import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationSearchComponent } from './station-search/station-search.component';
import { StationRoutingModule } from './station-routing.module';
import { SearchResultComponent } from './station-search/search-result/search-result.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    StationSearchComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    StationRoutingModule,
    SharedModule
  ]
})
export class StationModule { }
