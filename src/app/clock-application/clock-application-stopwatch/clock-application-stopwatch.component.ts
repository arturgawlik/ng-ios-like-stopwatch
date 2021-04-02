import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock-application-stopwatch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .font-size {
      font-size: 84px;
    }
    .bg-color {
      background-color: #1C1C1E;
    }
    .bg-color2 {
      background-color: #0C2A12;
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
  `],
  template: `
    <div class="text-white flex flex-col">
      <div class="font-size font-thin mt-28">
        00:00,00
      </div>
      <div class="flex justify-around mt-12">
        <div class="rounded-full border-2 border-color">
          <button class="rounded-full m-1 h-16 w-16 flex items-center justify-center bg-color text-gray-400">
            Runda
          </button>
        </div>
        <div class="flex items-center">
          <span class="rounded-full h-2 w-2 bg-white mx-1"></span>
          <span class="rounded-full h-2 w-2 bg-gray-500 mx-1"></span>
        </div>
        <div class="rounded-full border-2 border-color2">
          <button class="rounded-full m-1 h-16 w-16 flex items-center justify-center bg-color2 text-green-500">
            Start
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

  constructor() { }

  ngOnInit(): void {
  }

}
