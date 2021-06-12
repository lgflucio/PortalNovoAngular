import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { SecurityService } from "../views/login/services/security.service";

@Injectable()

export class AuthRequestInterceptor implements HttpInterceptor {

  constructor(private controleAcesso: SecurityService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.controleAcesso.getToken();

    if (authToken)
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken
        }
      });
    return next.handle(req);
  }
}