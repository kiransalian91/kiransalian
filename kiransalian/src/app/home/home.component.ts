import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow';
import { ScrollToService } from 'ng2-scroll-to-el';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  showMenu: Boolean = false;
  constructor() {
  }

  ngOnInit() {
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
