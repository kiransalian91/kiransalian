import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {LoggerService  } from './services/logger.service';
@NgModule({
  declarations: [

  ],
  imports: [
  CommonModule,
  RouterModule,
  HttpClientModule
  ],

  exports: [
  RouterModule,
  HttpClientModule
  ],

  providers: [LoggerService]
})
export class CoreModule {}
