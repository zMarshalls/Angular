import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

declare var $: any;
declare var require: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = 'Oficina Raudel';
  bgPerfil = require('../../imgs/bgperfil.jpg');
  isConected = false;
  usuario: string;
  email: string;

  //Coisas do Usuario
  img = require('../../imgs/user.jpg');

  constructor(private auth: AuthenticationService, private service: UserService) { }

  ngOnInit() {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();

    this.auth.isLogged()
      .subscribe(user => {
        if (user){
          this.isConected = true;
          this.email = user.email;
          this.service.search(user.email);
        }
      })

  }

  itMenu = ['Sobre','Contato', 'Parceiros'];
}