import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  template: `
    <div class="auth-container">
      <div class="form-container">
        <app-auth-form></app-auth-form>
      </div>
    </div>
  `,
  styles: [`
    .auth-container{
      height: calc(100vh - 100px);
    }
    .form-container{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `]
})
export class LoginPageComponent {

}
