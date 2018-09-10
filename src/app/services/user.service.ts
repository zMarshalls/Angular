import {Injectable} from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { GenericService } from "./generic.service";


@Injectable({
    providedIn: 'root'
  })
export class UserService{
    userRef: AngularFireList<any>;

    constructor(private db:AngularFireDatabase, private service:GenericService){
        this.service.setEntity("user");
    }


    register(user:any){
        return this.service.register(user);
    }

    delete(){
        this.userRef.remove();
    }

    update(user:any){
        this.userRef.update(user,user);
    }

    search(email:string){
        
    }
}