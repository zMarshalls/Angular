import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
    
  }

  signIn(formLogin:NgForm){

    if (!formLogin.valid){
      alert("Preencha os campos.")
      return;
    }

    this.auth.signIn(this.login, this.password)
    .then(signIn =>{
      this.route.navigate(["/"]);
    }).catch(err =>{
      alert("Usuario ou senha errado.")
    });
  }

}
