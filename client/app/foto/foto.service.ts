import {Http, Headers, Response} from '@angular/http';
import {fotoComponent} from './foto.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

// Habilitando esta classe/service para que receba injeção das dependencias
@Injectable()

export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http){

        this.http = http;

        // confirando as informações que serão passadas via header
        // instaciamos o objeto `Headers` que já foi importado acima...
        this.headers = new Headers();
        // ...e adicionamos a informação dando um apend nesta instância
        this.headers.append('Content-Type','application/json');
        this.url;

    }

    cadastra(foto: fotoComponent): Observable<Response>{
    
        return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers });

    }

    lista(): Observable<fotoComponent[]>{

        return this.http.get(this.url).map(res => res.json())

    }

    remove(foto: fotoComponent) {

        return this.http.delete(this.url+'/'+foto._id);

    }
}