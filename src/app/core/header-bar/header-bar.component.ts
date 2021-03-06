import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
