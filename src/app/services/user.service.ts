import {Injectable} from "@angular/core";
import { User } from '../models/user';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
    providedIn: 'root'
  })
export class UserService{
    userRef: AngularFireList<User>;

    constructor(private db:AngularFireDatabase){
        this.userRef = this.db.list('user');
    }


    register(user: User){
        this.userRef.push(user).then(x => console.log('usuario inserido na base'));
    }

    delete(){

    }

    update(){

    }

    search(){

    }

}