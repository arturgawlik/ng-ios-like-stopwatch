import {Component, OnDestroy, OnInit} from '@angular/core';
import {Timer, TimerState} from './timer';

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
  `],
  template: `
    <div class="text-white flex flex-col">
      <div class="font-size font-thin mt-28 text-center tabular-nums">
        {{timerDisplayedValue | stopwatchTime}}
      </div>
      <div class="flex justify-around mt-12">
        <div *ngIf="isTimerFresh || isTimerRunning" class="rounded-full border-2 border-color">
          <button
            [disabled]="isTimerFresh"
            class="rounded-full m-1 h-16 w-16 flex items-center justify-center bg-color text-gray-400">
            Runda
          </button>
        </div>
        <div *ngIf="isTimerIdle" class="rounded-full border-2 border-color">
          <button
            (click)="restartClick()"
            class="rounded-full m-1 h-16 w-16 flex items-center justify-center bg-color text-gray-400">
            Wyzeruj
          </button>
        </div>
        <div class="flex items-center">
          <span class="rounded-full h-2 w-2 bg-white mx-1"></span>
          <span class="rounded-full h-2 w-2 bg-gray-500 mx-1"></span>
        </div>
        <div *ngIf="isTimerFresh || isTimerIdle" class="rounded-full border-2 border-color2">
          <button
            (click)="startClick()"
            class="rounded-full m-1 h-16 w-16 flex items-center justify-center bg-color2 text-green-500">
            Start
          </button>
        </div>
        <div *ngIf="isTimerRunning" class="rounded-full border-2 border-color4">
          <button
            (click)="idleClick()"
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
export class ClockApplicationStopwatchComponent implements OnInit, OnDestroy{
  // timerState = TimerState.Fresh;
  //
  // currentTime = 0;
  // startTime: number | undefined;
  // intervalCancellation: number | undefined;
  //
  // startClick(): void {
  //   this.startTime = Date.now();
  //   this.startRefreshTime();
  // }
  // startRefreshTime(): void {
  //   this.timerState = TimerState.Running;
  //   this.intervalCancellation = setInterval(() => {
  //     if (this.startTime) {
  //       this.currentTime = Date.now() - this.startTime;
  //     }
  //   }, 10);
  // }
  // stopRefreshTime(): void {
  //   this.timerState = TimerState.Idle;
  //   if (this.intervalCancellation) {
  //     clearInterval(this.intervalCancellation);
  //     this.intervalCancellation = undefined;
  //   }
  // }
  private intervalToken: any = null;
  private timer = new Timer();
  timerDisplayedValue = 0;
  startClick(): void {
    if (this.timer.state === TimerState.Fresh) {
      this.timer.start();
    }
    else if (this.timer.state === TimerState.Idle) {
      this.timer.idleStop();
    }
  }
  idleClick(): void {
    if (TimerState.Running === this.timer.state) {
      this.timer.idle();
    }
  }
  restartClick(): void {
    this.timer.restart();
  }
  get isTimerFresh(): boolean {
    return this.timer.state === TimerState.Fresh;
  }
  get isTimerIdle(): boolean {
    return this.timer.state === TimerState.Idle;
  }
  get isTimerRunning(): boolean {
    return this.timer.state === TimerState.Running;
  }

  ngOnInit(): void {
    this.intervalToken = setInterval(() => {
      this.timerDisplayedValue = this.timer.value;
    }, 10);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalToken);
  }
}
