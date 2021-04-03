import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock-application-stopwatch',
  styles: [`
    .font-size {
      font-size: 80px;
    }
    .bg-color {
      background-color: #1C1C1E;
    }
    .bg-color2 {
      background-color: #0C2A12;
    }
    .bg-color3 {
      background-color: #350F0F;
    }
    .border-color {
      border-color: #1C1C1E;
    }
    .border-color2 {
      border-color: #0C2A12;
    }
    .border-color3 {
      border-color: #202020;
    }
    .border-color4 {
      border-color: #350F0F;
    }
    .text-color {
      color: #DA5254;
    }
    .font-monospace {
      font-variant-numeric: tabular-nums;
    }
  `],
  template: `
    <div class="text-white flex flex-col">
      <div class="font-size font-thin mt-28 text-center font-monospace">
        {{currentTime | stopwatchTime}}
      </div>
      <div class="flex justify-around mt-12">
        <div class="rounded-full border-2 border-color">
          <button
            (click)="roundClick()"
            class="rounded-full m-1 h-16 w-16 flex items-center justify-center bg-color text-gray-400">
            Runda
          </button>
        </div>
        <div class="flex items-center">
          <span class="rounded-full h-2 w-2 bg-white mx-1"></span>
          <span class="rounded-full h-2 w-2 bg-gray-500 mx-1"></span>
        </div>
        <div *ngIf="!intervalCancellation" class="rounded-full border-2 border-color2">
          <button
            (click)="startClick()"
            class="rounded-full m-1 h-16 w-16 flex items-center justify-center bg-color2 text-green-500">
            Start
          </button>
        </div>
        <div *ngIf="intervalCancellation" class="rounded-full border-2 border-color4">
          <button
            (click)="stopRefreshTime()"
            class="rounded-full m-1 h-16 w-16 flex items-center justify-center bg-color3 text-color">
            Stop
          </button>
        </div>
      </div>
      <div class="mt-5">
        <div class="border-t mx-4 border-color3 h-12"></div>
        <div class="border-t mx-4 border-color3 h-12"></div>
        <div class="border-t mx-4 border-color3 h-12"></div>
      </div>
    </div>
  `
})
export class ClockApplicationStopwatchComponent implements OnInit {
  currentTime = 0;
  startTime: number | undefined;
  intervalCancellation: number | undefined;
  constructor() {
  }
  ngOnInit(): void {
  }
  startClick(): void {
    this.startTime = Date.now();
    this.startRefreshTime();
  }
  roundClick(): void {
  }
  startRefreshTime(): void {
    this.intervalCancellation = setInterval(() => {
      if (this.startTime) {
        this.currentTime = Date.now() - this.startTime;
      }
    }, 10);
  }
  stopRefreshTime(): void {
    if (this.intervalCancellation) {
      clearInterval(this.intervalCancellation);
      this.intervalCancellation = undefined;
    }
  }
}
