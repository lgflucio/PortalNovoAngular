import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { load } from '../../components/load/load.component';
import { AuthLogin } from './models/auth-login-model';
import { SecurityDataService } from './services/security.data.service';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  private authLogin: AuthLogin;

  constructor(private securityDataService: SecurityDataService,
    private securityService: SecurityService,
    private router: Router) {

    this.authLogin = new AuthLogin({
      login: "",
      password: ""
    });
  }

  get username(): string { return this.authLogin.login }
  set username(username: string) { this.authLogin.login = username; }

  get password(): string { return this.authLogin.password }
  set password(password: string) { this.authLogin.password = password; }

  login() {
    debugger;
    load.show();
    this.securityDataService.authenticate(this.authLogin).subscribe((authReturn) => {
      if (authReturn.isAuthenticated) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Autenticado',
          showConfirmButton: false,
          timer: 1500
        })
        this.securityService.login(authReturn);
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Autenticação',
          text: 'Usuário e/ou senha inválidos!'
        })
      }
    }, error => {
      load.hidden();
      error.error != null
        ? ""
        : alert('Ocorreu um erro ao tentar logar')
    });
  }

  registrar() {
    this.router.navigate(['/register']);
  }
}
