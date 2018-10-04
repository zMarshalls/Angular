import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ROTAS } from '../../util/utils'

declare var $: any;
declare var require: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  rotas = ROTAS
  logo = 'Oficina Raudel';
  bgPerfil = require('../../imgs/bgperfil.jpg');
  isConected = false;
  usuario: string;
  email: string;

  //Coisas do Usuario
  img = require('../../imgs/profile.png');

  constructor(private auth: AuthenticationService, private service: UserService, private router: Router) { }

  ngOnInit() {
    $(".dropdown-trigger").dropdown();
    this.validarUsuarioLogado();
  }

  deslogar() {
    this.auth.logout().then(x => {
      this.isConected = false;
      this.router.navigate([this.rotas.login]);
    });
  }

  validarUsuarioLogado() {
    this.auth.isLogged()
      .subscribe(user => {
        if (user) {
          this.isConected = true;
          this.email = user.email;
          this.service.search(user.email);
        }
      });
  }

}