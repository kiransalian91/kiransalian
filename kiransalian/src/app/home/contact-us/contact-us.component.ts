import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  lng = 74.7308;
  lat = 13.3824;
  showMenu: Boolean = false;
  constructor() { }

  ngOnInit() {
    console.log('tet');
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  openMenu() {
    if (this.showMenu) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }

}
