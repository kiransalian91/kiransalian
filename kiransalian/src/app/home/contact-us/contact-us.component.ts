import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  lat: Number = 51.678418;
  lng: Number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
