import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin(): void {
    // Lógica para realizar login, você pode substituir isso com integração real de autenticação
    if (this.username && this.password) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Por favor, preencha ambos os campos.');
    }
  }
}
