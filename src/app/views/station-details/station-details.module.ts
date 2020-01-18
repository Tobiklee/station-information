import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { StationRoutingModule } from '../station/station-routing.module';
import { FacilityComponent } from './station-detail/facility/facility.component';



@NgModule({
  declarations: [
    StationDetailComponent,
    FacilityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StationRoutingModule
  ]
})
export class StationDetailsModule { }
