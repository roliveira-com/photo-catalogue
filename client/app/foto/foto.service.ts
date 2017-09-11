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

    cadastra(foto: fotoComponent): Observable<MensagemCadastro>{

        if(foto._id){
            
            return this.http.put(this.url+'/'+foto._id, JSON.stringify(foto), { headers: this.headers })
                .map(() => new MensagemCadastro('Foto Alterada com sucesso', false));
            
        }else{
            
            return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
                .map(() => new MensagemCadastro('Foto Adicionada com sucesso', true));

        }
    
    }

    lista(): Observable<fotoComponent[]>{

        return this.http.get(this.url).map(res => res.json())

    }

    remove(foto: fotoComponent) {

        return this.http.delete(this.url+'/'+foto._id);

    }

    getById(id: string): Observable<fotoComponent>{

        return this.http.get(this.url+'/'+id)
            .map(res => res.json());

    }

}

export class MensagemCadastro {

    // private _mensagem: string;
    // private _inclusao: boolean;
    // Declarando `private` direto no parametro do contrutor não é necessario decelarar as variaveis antes

    constructor(private _mensagem: string, private _inclusao: boolean){
    //...sendo provadas, estas propriedades só pode ser alteradas e lidas pela propria classe
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;

    }

    // Criando metodos exclusivamente para lerem as propriedades de fora da classe... 
    // public getMensagem(){
    //     return this._mensagem;
    // }

    // public isInclusao(){
    //     return this._inclusao;
    // }

    // ...usando os métodos `get` do ES6 para acessar estes letodos de leitura da mesma forma que acessa as propriedades
    get mensagem(): string{
        return this._mensagem;
    }

    get inclusao(): boolean {
        return this._inclusao;
    }

}