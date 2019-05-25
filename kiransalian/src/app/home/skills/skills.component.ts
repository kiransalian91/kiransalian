import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  showMenu: Boolean = false;
  constructor() { }

  ngOnInit() {
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
