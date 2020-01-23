import { Component, Input, OnInit } from '@angular/core';
import { Station } from '../station.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() station: Station;

  constructor() {}

  ngOnInit() {}
}
