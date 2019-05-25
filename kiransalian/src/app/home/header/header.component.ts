import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeLink = '/home';
  constructor(private router: Router) { }

  ngOnInit() {
    this.activeLink = this.router.url;
    if (this.activeLink === '/') {
      this.activeLink = '/home';
    }
  }

  goToPage(link) {
    this.activeLink = link;
  }

}
