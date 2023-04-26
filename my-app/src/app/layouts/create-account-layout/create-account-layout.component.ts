import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-create-account-layout',
  templateUrl: './create-account-layout.component.html',
  styleUrls: ['./create-account-layout.component.css'],
})
export class CreateAccountLayoutComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  createAccount() {
    if (this.email == '') {
      alert('please enter email');
    }
    if (this.password == '') {
      alert('please enter password');
    }
    this.auth.createAccount(this.email, this.password);
  }
}
