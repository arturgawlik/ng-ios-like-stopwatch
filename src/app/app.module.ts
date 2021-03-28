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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClockApplicationWorldClocksComponent } from './clock-application/clock-application-world-clocks/clock-application-world-clocks.component';
import { ClockApplicationAlarmComponent } from './clock-application/clock-application-alarm/clock-application-alarm.component';
import { ClockApplicationCountdownTimerComponent } from './clock-application/clock-application-countdown-timer/clock-application-countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockApplicationComponent,
    ClockApplicationStopwatchComponent,
    ClockApplicationBottomNavigationComponent,
    SvgComponent,
    SafePipe,
    ClockApplicationWorldClocksComponent,
    ClockApplicationAlarmComponent,
    ClockApplicationCountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'clock-application', component: ClockApplicationComponent,
      children: [
        {path: 'world-clocks', component: ClockApplicationWorldClocksComponent},
        {path: 'alarm', component: ClockApplicationAlarmComponent},
        {path: 'stopwatch', component: ClockApplicationStopwatchComponent},
        {path: 'countdown-timer', component: ClockApplicationCountdownTimerComponent},
        {path: '', redirectTo: 'stopwatch', pathMatch: 'full'},
      ]},
      {path: '', redirectTo: 'clock-application', pathMatch: 'full'},
    ]),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
