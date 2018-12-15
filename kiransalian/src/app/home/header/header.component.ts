import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeLink = 'home';
  constructor() { }

  ngOnInit() {
  }

  goToPage(link) {
    console.log('d', link);
    this.activeLink = link;
  }

}
