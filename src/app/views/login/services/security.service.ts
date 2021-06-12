import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthReturn } from '../models/auth-return-model';


@Injectable()
export class SecurityService {

    constructor(private router: Router) { }

    public login(authReturn: AuthReturn) {
        localStorage.setItem('GSW_authorizationData', authReturn.token);
        localStorage.setItem('nomeUsuario', authReturn.user.name);
        localStorage.setItem('userName', authReturn.user.login);
        this.router.navigate(['/dashboard']);

    }

    public loged() {
        this.router.navigate(['/dashboard']);
    }

    public getToken() {
        return localStorage.getItem('GSW_authorizationData');
    }

    public logout(){
        localStorage.removeItem('GSW_authorizationData');
        localStorage.removeItem('nomeUsuario');
        localStorage.removeItem('userName');

        this.router.navigate(['/login']);
    }

}
