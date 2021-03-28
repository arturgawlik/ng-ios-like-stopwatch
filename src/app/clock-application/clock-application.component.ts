import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-application',
  styles: [`
    @media (min-width: 640px) {
      .wrapper {
        width: 320px;
        height: 568px;
      }
    }
  `],
  template: `
    <div class="bg-black wrapper border relative w-screen h-screen">
      <router-outlet></router-outlet>
      <div class="absolute inset-x-0 bottom-0">
        <app-clock-application-bottom-navigation></app-clock-application-bottom-navigation>
      </div>
    </div>
  `
})
export class ClockApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
