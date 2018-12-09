import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanDeactivate } from '@angular/router';

import { HomeComponent } from './home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent];

