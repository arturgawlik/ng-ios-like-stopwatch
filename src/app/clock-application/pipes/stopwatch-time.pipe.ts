import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stopwatchTime'
})
export class StopwatchTimePipe implements PipeTransform {
  static PLACEHOLDER = '00:00,00';
  transform(duration: number): string {
    if (!duration) {
      return StopwatchTimePipe.PLACEHOLDER;
    }
    const milliseconds = Math.floor((duration % 1000) / 10);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    // const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    // const hoursStr = (hours < 10) ? '0' + hours : hours;
    const minutesStr = (minutes < 10) ? '0' + minutes : minutes;
    const secondsStr = (seconds < 10) ? '0' + seconds : seconds;
    const millisecondsStr = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

    return minutesStr + ':' + secondsStr + ',' + millisecondsStr;
  }
}
