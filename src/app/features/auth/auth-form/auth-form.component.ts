import {Component} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {NavigationEnd, Router} from "@angular/router";
import {UserCredentials} from "../auth.model";
import {AuthService} from "../../../auth/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';

export class AuthErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty
      || control.touched || isSubmitted));
  }

}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent{
  currentRoute: string | undefined;

  matcher = new AuthErrorStateMatcher()

  usernameFormControl = new FormControl<string>('', [
    Validators.required, Validators.minLength(4)]);

  passwordFormControl = new FormControl<string>('', [
    Validators.required, Validators.minLength(4)]);

  form = new FormGroup({
    username: this.usernameFormControl,
    password: this.passwordFormControl
  })

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {
    router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        if(event.urlAfterRedirects){
          this.currentRoute = event.url.slice(1)
          // console.log(this.currentRoute)
        }
      }
    })
  }

  logInUser(user: UserCredentials){
    this.authService.logIn(user.username, user.password).subscribe({
      next: (data)=>{
        // console.log(data)
        this.router.navigate([`/films`]);
      },
      error: (error) => {
        // console.log("ERROR", error)
        this.snackBar.open(error.error.message, 'Close', { duration: 5000 });
      }
    })
  }

  registerUser(user: UserCredentials){
    this.authService.registration(user.username, user.password).subscribe({
      next: (data: any)=>{
        //console.log(data)
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.form.reset()
        // console.log("ERROR", error)
        this.snackBar.open(error.error.message, 'Close', { duration: 5000 });
      }
    })
  }

  onSubmit(): void {
    if(this.form.valid){
      if(this.currentRoute === 'login') this.logInUser(this.form.value as UserCredentials)
      else this.registerUser(this.form.value as UserCredentials)
    }
  }
}
