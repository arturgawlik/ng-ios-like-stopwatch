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
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `],
  template: `
    <div class="text-white flex flex-col">
      <div class="font-size font-thin mt-28 text-center tabular-nums">
        <p class="text-white">
          {{timerDisplayedValue | stopwatchTime}}
        </p>
      </div>
      <div class="flex justify-around mt-12">
        <div *ngIf="isTimerFresh || isTimerRunning" class="rounded-full border-2 border-color">
          <button
            (click)="roundClick()"
            [disabled]="isTimerFresh"
            [class.text-gray-600]="isTimerFresh"
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
      <div class="mt-5 overflow-scroll h-36 no-scrollbar">
        <div
          *ngIf="isTimerRunning || isTimerIdle"
          class="border-t mx-4 border-color3 h-12 flex items-center text-xl font-extralight">
          <div>
            Runda {{savedRounds.length + 1}}
          </div>
          <div class="ml-auto tabular-nums">
            {{roundTimerDisplayedValue | stopwatchTime}}
          </div>
        </div>
        <div
          *ngFor="let savedRound of savedRounds; index as i"
          class="border-t mx-4 border-color3 h-12 flex items-center text-xl font-extralight">
          <div>
            Runda {{savedRounds.length - i}}
          </div>
          <div class="ml-auto tabular-nums">
            {{savedRound | stopwatchTime}}
          </div>
        </div>
        <div class="border-t mx-4 border-color3 h-12" *ngIf="isTimerFresh"></div>
        <div class="border-t mx-4 border-color3 h-12" *ngIf="savedRounds.length === 0"></div>
        <div class="border-t mx-4 border-color3 h-12" *ngIf="savedRounds.length <= 1"></div>
      </div>
    </div>
  `
})
export class ClockApplicationStopwatchComponent implements OnInit, OnDestroy{
  private intervalToken: any = null;
  private timer = new Timer();
  private roundTimer = new Timer();
  timerDisplayedValue = 0;
  roundTimerDisplayedValue = 0;
  savedRounds: number[] = [];
  startClick(): void {
    if (this.timer.state === TimerState.Fresh) {
      this.timer.start();
      this.roundTimer.start();
    }
    else if (this.timer.state === TimerState.Idle) {
      this.timer.idleStop();
      this.roundTimer.idleStop();
    }
  }
  idleClick(): void {
    if (TimerState.Running === this.timer.state) {
      this.timer.idle();
      this.roundTimer.idle();
    }
  }
  restartClick(): void {
    this.timer.restart();
    this.roundTimer.restart();
    this.savedRounds = [];
  }
  roundClick(): void {
    const roundTimerValue = this.roundTimer.value;
    this.savedRounds.unshift(roundTimerValue);
    this.roundTimer.restart();
    this.roundTimer.start();
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
      this.roundTimerDisplayedValue = this.roundTimer.value;
    }, 10);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalToken);
  }
}
