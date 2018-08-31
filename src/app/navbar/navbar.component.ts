import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var require: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = 'Oficina Raudel';
  bgPerfil = require('../imgs/bgperfil.jpg');
  isConected = false;

  //Coisas do Usuario
  img = require('../imgs/user.jpg');
  usuario = "Leduar Araujo";
  email = "leduar.teste@email.com";

  constructor() { }

  ngOnInit() {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
  }

  itMenu = ['Sobre','Contato', 'Parceiros'];
}