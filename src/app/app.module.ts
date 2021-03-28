import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockApplicationComponent } from './clock-application/clock-application.component';
import { ClockApplicationStopwatchComponent } from './clock-application/clock-application-stopwatch/clock-application-stopwatch.component';
import { ClockApplicationBottomNavigationComponent } from './clock-application/clock-application-bottom-navigation/clock-application-bottom-navigation.component';
import {RouterModule} from '@angular/router';
import { SvgComponent } from './clock-application/components/svg/svg.component';
import {HttpClientModule} from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClockApplicationComponent,
    ClockApplicationStopwatchComponent,
    ClockApplicationBottomNavigationComponent,
    SvgComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'clock-application', component: ClockApplicationComponent,
      children: [
        {path: 'stopwatch', component: ClockApplicationStopwatchComponent},
        {path: '', redirectTo: 'stopwatch', pathMatch: 'full'},
      ]},
      {path: '', redirectTo: 'clock-application', pathMatch: 'full'},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
