import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock-application-alarm',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-white">
      alarm todo
    </div>
  `
})
export class ClockApplicationAlarmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
