import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-gray-800 h-screen w-screen flex justify-center items-center">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
}
