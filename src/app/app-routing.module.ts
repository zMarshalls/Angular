import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./component/home/home.component";
import { SobreComponent } from "./component/sobre/sobre.component";
import { ContatoComponent } from "./component/contato/contato.component";
import { ParceirosComponent } from "./component/parceiros/parceiros.component";
import { LoginComponent } from "./component/login/login.component";
import { SignupComponent } from "./component/signup/signup.component";

const route: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
 {path: 'home', component:HomeComponent},
 {path: 'sobre', component:SobreComponent},
 {path: 'contato', component:ContatoComponent},
 {path: 'parceiros', component:ParceirosComponent},
 {path: 'login', component:LoginComponent},
 {path: 'cadastro', component:SignupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
})
export class AppRoutingModule {  }