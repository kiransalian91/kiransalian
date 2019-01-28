import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import 'rxjs/add/observable/of';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/code.module';
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'kiransalian' }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
