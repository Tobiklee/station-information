import { Component, Input, OnInit } from '@angular/core';
import { Facility } from '../../../../shared/models/facility.model';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

  @Input() facility: Facility;

  constructor() { }

  ngOnInit() {
  }

}
