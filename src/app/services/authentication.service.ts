import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fbAth: AngularFireAuth,private svUser: UserService) { 

   }

   register(user:User){
     this.fbAth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(newUser => {
      console.log('usuario criado')

        this.svUser.register(user);
      }).catch(err => {
        console.log(err)
      }
     );
   }

}
