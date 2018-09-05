import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user';


declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;

  constructor(private auth: AuthenticationService){ 
    this.user = new User();
  }

  ngOnInit() {
    // Inicializa os elementos
    $('select').formSelect();
    $('.datepicker').datepicker();

    // Inicializa as mascaras
    $('#cpf').mask('000.000.000-00');
    $('#fone').mask('(00) 0 0000-0000');
    $('#cep').mask('00000-000');
  }

  validar(){
    if (this.user.name != "") {
      alert("O Nome é Obrigatorio.");
      $( "#name" ).focus();
      return;
    } else if (this.user.cpf != "") {
      alert("O CPF é Obrigatorio.");
      $( "#cpf" ).focus();
      return;
    } else if (this.user.fone != "") {
      alert("O Telefone é Obrigatorio.");
      $( "#fone" ).focus();
      return;
    } else if (this.user.dtNac != "") {
      alert("A Data de Nascimento é Obrigatoria.");
      $( "#dtNac" ).focus();
      return;
    } else if (this.user.email != "") {
      alert("O E-mail é Obrigatorio.");
      $( "#email" ).focus();
      return;
    } else if (this.user.password != "") {
      alert("A Senha é Obrigatoria.");
      $( "#password" ).focus();
      return;
    } else if (this.user.pais != "") {
      alert("Selecione o seu País.");
      $( "#pais" ).focus();
      return;
    } else if (this.user.cep != "") {
      alert("O CEP é Obrigatorio.");
      $( "#cep" ).focus();
      return;
    } else if (this.user.estado != "") {
      alert("Selecione o seu Estado.");
      $( "#estado" ).focus();
      return;
    } else if (this.user.municipio != "") {
      alert("Selecione o seu Município.");
      $( "#municipio" ).focus();
      return;
    } else if (this.user.cidade != "") {
      alert("Selecione a sua Cidade.");
      $( "#cidade" ).focus();
      return;
    } else if (this.user.bairro != "") {
      alert("Selecione o seu Bairro.");
      $( "#bairro" ).focus();
      return;
    } else if (this.user.rua != "") {
      alert("A Rua é Obrigatoria.");
      $( "#rua" ).focus();
      return;
    } else if (this.user.numero != "") {
      alert("O Número é Obrigatorio.");
      $( "#numero" ).focus();
      return;
    } else if (!$("#terms").prop( "checked" )){
      alert("É preciso aceitar os termos.");
      return;
    }

    this.user.cpf = $('#cpf').unmask().val();
    this.user.fone = $('#fone').unmask().val();
    this.user.cep = $('#cep').unmask().val();

    this.auth.register(this.user);
  }
}
