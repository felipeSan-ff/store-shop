import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  resultOnClickButton: string = '';
  errorMessage: string = '';
  errorMessaagePassword: string = '';
  successMessage: string = '';


  constructor(private router: Router) {}

  onButtonClick() {

    if (!this.email.includes('@')) {

      this.errorMessage = 'Invalid Email, please enter a valid Email Address.';
      return;
    }
    
    this.errorMessage = '';

    if(!this.password) {

      this.errorMessaagePassword = 'Invalid Password, please enter a valid Password.'
      return;
    }

    this.errorMessaagePassword = '';

    this.successMessage = 'Login successful!';

    

    this.router.navigate(['/home']);

  


  }



}
