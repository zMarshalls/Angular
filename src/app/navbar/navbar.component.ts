import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = 'Oficina Raudel';

  constructor() { }

  ngOnInit() {
    $('#login').webuiPopover({url:'#login-form'});
  }

  itMenu = ['Sobre','Contato', 'Parceiros'];

  //npm install --save webui-popover
  
}