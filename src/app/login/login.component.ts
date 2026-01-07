import { Component } from '@angular/core';

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


  }



}
