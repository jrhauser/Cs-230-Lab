import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

//TODO: ADD USERNAME?
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['']);
      },
      (err) => {
        alert("Couldn't log in");
        this.router.navigate(['/LoginLayout']);
      }
    );
  }

  createAccount(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        const auth = getAuth();
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
