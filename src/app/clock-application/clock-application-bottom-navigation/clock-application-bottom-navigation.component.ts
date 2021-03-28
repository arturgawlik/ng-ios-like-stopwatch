import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-application-bottom-navigation',
  styles: [`
    .backgroundColor {
      background-color: #131313;
    }
    .fontSize {
      font-size: 10px;
    }
    .color {
      color: #7F7F7F;
    }
  `],
  template: `
    <div class="h-14 backgroundColor flex">
        <nav class="flex items-end w-full">
          <a routerLink="/world-clocks" class="mx-auto flex flex-col items-center cursor-pointer">
            <app-svg svgPath="/assets/svgs/earth.svg" containerClass="" svgClass="h-7"></app-svg>
            <span class="fontSize color mt-1">
              Zegary Świata
            </span>
          </a>
          <a routerLink="/alarm" class="mx-auto flex flex-col items-center cursor-pointer">
            <app-svg svgPath="/assets/svgs/clock.svg" containerClass="" svgClass="h-7"></app-svg>
            <span class="fontSize color mt-1">
              Budzik
            </span>
          </a>
          <a routerLink="/stopwatch" class="mx-auto flex flex-col items-center cursor-pointer">
            <app-svg svgPath="/assets/svgs/stopwatch.svg" containerClass="" svgClass="h-7 fill-current text-yellow-600"></app-svg>
            <span class="fontSize mt-1 text-yellow-600">
              Stoper
            </span>
          </a>
          <a routerLink="/countdown-timer" class="mx-auto flex flex-col items-center cursor-pointer">
            <app-svg svgPath="/assets/svgs/countdownTimer.svg" containerClass="" svgClass="h-7"></app-svg>
            <span class="fontSize color mt-1">
              Minutnik
            </span>
          </a>
        </nav>
    </div>
  `
})
export class ClockApplicationBottomNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
