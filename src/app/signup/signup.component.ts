import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';


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

  validar(signupForm: NgForm){
    if (!signupForm.valid) {
      return;
    }
    
    this.user.cpf = $('#cpf').unmask().val();
    this.user.fone = $('#fone').unmask().val();
    this.user.cep = $('#cep').unmask().val();

    this.auth.register(this.user);
  }
}
