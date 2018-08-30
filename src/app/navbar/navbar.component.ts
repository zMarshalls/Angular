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

  isConected = false;

  //Coisas do Usuario
  img = require('../imgs/user.jpg');
  usuario = "Leduar Araujo";

  constructor() { }

  ngOnInit() {
    console.log($(".dropdown-trigger"))
    $(".dropdown-trigger").dropdown();
    
  }

  itMenu = ['Sobre','Contato', 'Parceiros'];
}