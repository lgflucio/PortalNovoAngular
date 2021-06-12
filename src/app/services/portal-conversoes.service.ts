import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityService } from '../views/login/services/security.service';
import { PortalNfse } from '../models/portal-nfse.model';
import { environment } from '../../environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

const baseUrl = environment.API + 'Conversoes';

@Injectable({ providedIn: 'root' })
export class PortalConversoesService {

    constructor(public http: HttpClient,
        public serviceSecurity: SecurityService) {
        httpOptions.headers = new HttpHeaders({})
    }


    get(): Observable<PortalNfse[]> {
        return this.http.get<PortalNfse[]>(baseUrl);
    }

    getById(id): Observable<any> {
        return this.http.get(`${baseUrl}/${id}`);
    }

    findByDescricao(descricao): Observable<any> {
        return this.http.get(`${baseUrl}/find?descricao=${descricao}`);
    }

    create(data: {}): Observable<any> {
        return this.http.post(baseUrl, data);
    }

    sendConvert(id): Observable<any> {
        return this.http.post(`${baseUrl}/send/${id.toString()}`, id);
    }

    update(id, data): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
    }

    sale(id, data): Observable<any> {
        return this.http.patch(`${baseUrl}/${id}`, data);
    }

    delete(id): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(baseUrl);
    }

    distribuicaoAno(): Observable<any> {
        return this.http.get(`${baseUrl}/distrib_ano`);
    }

}


