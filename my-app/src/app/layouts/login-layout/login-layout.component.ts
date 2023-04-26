import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css'],
})
export class LoginLayoutComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  onLogin() {
    if (this.email == '') {
      alert('please enter email');
    }
    if (this.password == '') {
      alert('please enter password');
    }
    this.auth.login(this.email, this.password);
  }
}
