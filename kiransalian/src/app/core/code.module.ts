import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {LoggerService  } from './services/logger.service';
import { ScrollToModule } from 'ng2-scroll-to-el';
@NgModule({
  declarations: [

  ],
  imports: [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ScrollToModule
  ],

  exports: [
  RouterModule,
  HttpClientModule,
  ScrollToModule
  ],

  providers: [LoggerService]
})
export class CoreModule {}
