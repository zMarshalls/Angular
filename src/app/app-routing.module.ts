import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { ContatoComponent } from "./contato/contato.component";
import { ParceirosComponent } from "./parceiros/parceiros.component";

const route: Routes = [
 {path: '', component:HomeComponent},
 {path: 'Sobre', component:SobreComponent},
 {path: 'Contato', component:ContatoComponent},
 {path: 'Parceiros', component:ParceirosComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
})
export class AppRoutingModule {  }