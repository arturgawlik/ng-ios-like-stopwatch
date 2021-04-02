import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock-application-countdown-timer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-white">
      count down timer todo
    </div>
  `
})
export class ClockApplicationCountdownTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
