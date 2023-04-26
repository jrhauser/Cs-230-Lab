import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-account-layout',
  templateUrl: './create-account-layout.component.html',
  styleUrls: ['./create-account-layout.component.css']
})
export class CreateAccountLayoutComponent {
  email = "";
  password = "";

  constructor(private fireauth: AngularFireAuth,private router: Router) {}

  createAccount() {
    if (this.email == '') {
      alert('please enter email');
    }
    if (this.password == '') {
      alert('please enter password');
    }
    this.fireauth.createUserWithEmailAndPassword(this.email, this.password).then(
      () => {
        alert('Registered');
        this.router.navigate(['/LoginLayout']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/CreateAccount']);
      }
    );
  }
}
