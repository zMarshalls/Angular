import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fbAth: AngularFireAuth) { 

   }

  register(email: string, password: string){
    return this.fbAth.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string){
    return this.fbAth.auth.signInWithEmailAndPassword(email, password);
  }

  changePassword(email: string, password: string){
    return this.fbAth.auth.confirmPasswordReset(email, password);
  }

  logout(){
    return this.fbAth.auth.signOut();
  }

  isLogged() {
    return this.fbAth.user;
  }

}
