import { Component } from '@angular/core';

@Component({
  selector: 'app-singin-page',
  template: `
    <div class="form-container">
      <app-auth-form></app-auth-form>
    </div>
  `,
  styles: [`
    .form-container{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `]
})
export class SinginPageComponent {

}
