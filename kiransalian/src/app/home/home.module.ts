import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routingComponents } from './home-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [routingComponents, AboutUsComponent, SkillsComponent, ServicesComponent, ContactUsComponent]
})
export class HomeModule { }
