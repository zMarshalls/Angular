import {Injectable} from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
    providedIn: 'root'
  })
export class GenericService{
    genRef: AngularFireList<any>;

    constructor(private db:AngularFireDatabase){
    }

    setEntity(entity:string){
        this.genRef = this.db.list(entity);
    }

    register(any:any){
        return this.genRef.push(any);
    }

    delete(){
        this.genRef.remove();
    }

    update(any:any){
        this.genRef.update(any,any);
    }

    search(any:any){
        return this.genRef;
    }
}