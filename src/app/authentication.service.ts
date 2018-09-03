import { Injectable } from '@angular/core';
import { User } from './models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fbAth: AngularFireAuth) { 

   }

   register(user:User){
     this.fbAth.auth.createUserWithEmailAndPassword(user.email, user.passw)
     .then()
     .catch();
   }

}
