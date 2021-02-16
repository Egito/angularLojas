import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { APP_API } from '../app.api';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErrorHandler } from "../app.error";
import { MLoja } from "./loja.model";
import { MenuItem } from "../pedidos/menu-item.model";

@Injectable()

export class LojasService {

    constructor(private http: Http) {}

    lojas(): Observable<MLoja[]> {
        return this.http.get(`${APP_API}/lojas`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    lojaById(id: string): Observable<MLoja> {
        return this.http.get(`${APP_API}/lojas/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    reviewsOfLoja(id: string): Observable<any> {
        return this.http.get(`${APP_API}/lojas/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)

    }

    menuOfLoja(id: string): Observable<MenuItem[]> {
        return this.http.get(`${APP_API}/lojas/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)

    }
}