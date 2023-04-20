import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  private email: string = 'temp@gmail.com';
  private password: string = '12345';

  constructor(private router: Router) {}

  onClickSubmit(data: any) {
    if (data.email === this.email && data.password === this.password) {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/landing-page']);
      return;
    }
    alert('Please enter correct credentials');
  }
}
