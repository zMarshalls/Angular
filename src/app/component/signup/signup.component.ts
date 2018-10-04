import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

import { ROTAS } from '../../util/utils'

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  password: string;

  constructor(private auth: AuthenticationService, private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.iniciarElementos();
    this.incluirMascaras();
    this.validarCampoSenha();
  }

  validar(signupForm: NgForm) {
    if (!signupForm.valid) {
      console.log(signupForm.form.controls);
      return;
    }

    this.submeter();
  }

  submeter() {
    this.user.cpf = $('#cpf').unmask().val();
    this.user.fone = $('#fone').unmask().val();
    this.user.cep = $('#cep').unmask().val();
    this.user.isUserConfirmed = false;
    this.user.isAdmin = false;

    this.auth.register(this.user.email, this.password)
      .then(userCredentials => {
        return this.userService.register(this.user);
      })
      .then(newUser => {
        alert("Cadastrado com Sucesso !")
        this.router.navigate([ROTAS.login]);
      }).catch(err => console.log(err));
      this.auth.logout();
  }

  iniciarElementos() {
    // Inicializa os elementos
    $('select').formSelect();
  }

  incluirMascaras() {
    // Inicializa as mascaras
    $('#cpf').mask('000.000.000-00');
    $('#fone').mask('(00) 0 0000-0000');
    $('#cep').mask('00000-000');
  }

  validarCampoSenha() {

    $("#passwordConfirm").on("keyup", function (e) {
      if ($("#password").val() != $(this).val()) {
        $(this).removeClass("valid").addClass("invalid");
      } else {
        $(this).removeClass("invalid").addClass("valid");
      }
    });

    $("#passwordConfirm").on("focusout", function (e) {
      if ($("#password").val() != $(this).val()) {
        $(this).removeClass("valid").addClass("invalid");
      } else {
        $(this).removeClass("invalid").addClass("valid");
      }
    });
  }

}