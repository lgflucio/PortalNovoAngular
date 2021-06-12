
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { AuthLogin } from "../models/auth-login-model";
import { AuthReturn } from "../models/auth-return-model";
// import { Http } from "./http.service";

@Injectable()
export class SecurityDataService {
    constructor(private http: HttpClient) { }

    public authenticate(Login: AuthLogin):Observable<AuthReturn>{
        
        return this.http.post<AuthReturn>(environment.API+'Authenticate/',Login);
    }
}