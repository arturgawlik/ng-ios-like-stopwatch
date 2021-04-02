import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock-application-world-clocks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-white">
      world clock todo
    </div>
  `
})
export class ClockApplicationWorldClocksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
