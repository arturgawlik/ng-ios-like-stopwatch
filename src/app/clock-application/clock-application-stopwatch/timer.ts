export class Timer {
  private startTime = 0;
  private waitValue = 0;
  private idleStart = 0;
  state = TimerState.Fresh;
  get value(): number {
    if (this.state !== TimerState.Fresh) {
      return Date.now() + this.waitValue + this.actualIdleTime - this.startTime;
    }
    else {
      return 0;
    }
  }
  start(): void {
    this.startTime = Date.now();
    this.state = TimerState.Running;
  }
  idle(): void {
    this.idleStart = Date.now();
    this.state = TimerState.Idle;
  }
  idleStop(): void {
    this.waitValue += (this.idleStart - Date.now());
    this.idleStart = 0;
    this.state = TimerState.Running;
  }
  get actualIdleTime(): number {
    if (this.state === TimerState.Idle) {
      return this.idleStart - Date.now();
    } else {
      return 0;
    }
  }
  restart(): void {
    this.startTime = 0;
    this.waitValue = 0;
    this.idleStart = 0;
    this.state = TimerState.Fresh;
  }
}

export enum TimerState {
  Fresh,
  Running,
  Idle
}
