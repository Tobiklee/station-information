import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { StationRoutingModule } from '../station/station-routing.module';



@NgModule({
  declarations: [
    StationDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StationRoutingModule
  ]
})
export class StationDetailsModule { }
