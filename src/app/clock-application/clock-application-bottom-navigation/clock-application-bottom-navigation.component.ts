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
          <a routerLink="/clock-application/world-clocks" class="mx-auto flex flex-col items-center cursor-pointer" routerLinkActive #rla1="routerLinkActive">
            <app-svg svgPath="/assets/svgs/earth.svg" [svgClass]="rla1.isActive ?'h-7 stroke-current text-yellow-600' : 'h-7'"></app-svg>
            <span class="fontSize mt-1 whitespace-nowrap" [ngClass]="rla1.isActive ? 'text-yellow-600' : 'color'">
              Zegary Świata
            </span>
          </a>
          <a routerLink="/clock-application/alarm" class="mx-auto flex flex-col items-center cursor-pointer" routerLinkActive #rla2="routerLinkActive">
            <app-svg svgPath="/assets/svgs/clock.svg"[svgClass]="rla2.isActive ? 'h-7 fill-current stroke-current text-yellow-600' : 'h-7'"></app-svg>
            <span class="fontSize mt-1 whitespace-nowrap" [ngClass]="rla2.isActive ? 'text-yellow-600' : 'color'">
              Budzik
            </span>
          </a>
          <a routerLink="/clock-application/stopwatch" class="mx-auto flex flex-col items-center cursor-pointer" routerLinkActive #rla3="routerLinkActive">
            <app-svg svgPath="/assets/svgs/stopwatch.svg" [svgClass]="rla3.isActive ? 'h-7 fill-current stroke-current text-yellow-600' : 'h-7'"></app-svg>
            <span class="fontSize mt-1 whitespace-nowrap" [ngClass]="rla3.isActive ? 'text-yellow-600' : 'color'">
              Stoper
            </span>
          </a>
          <a routerLink="/clock-application/countdown-timer" class="mx-auto flex flex-col items-center cursor-pointer" routerLinkActive #rla4="routerLinkActive">
            <app-svg svgPath="/assets/svgs/countdownTimer.svg" [svgClass]="rla4.isActive ? 'h-7 fill-current stroke-current text-yellow-600' : 'h-7'"></app-svg>
            <span class="fontSize mt-1 whitespace-nowrap" [ngClass]="rla4.isActive ? 'text-yellow-600' : 'color'">
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
