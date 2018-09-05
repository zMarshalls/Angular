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
     this.fbAth.auth.createUserWithEmailAndPassword(
       user.email, 
       user.password
      ).then(newUser => {
        console.log(newUser)
      }).catch(err => {
        console.log(err)
      }
     );
   }

}
