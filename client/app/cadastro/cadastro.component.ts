import {Component} from '@angular/core';
import {fotoComponent} from '../foto/foto.component'
import {Http, Headers} from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: fotoComponent = new fotoComponent();
    http: Http;

    constructor(http: Http){

        this.foto.titulo = '';
        this.foto.url = '';
        this.foto.descricao = '';

        this.http = http;

    }

    cadastrar (event){

        // evitando que o formulario seja submetido e a página seja recarregada
        event.preventDefault();

        // confirando as infromações que serão passadas via header
        // instaciamos o objeto `Headers` que já foi importado acima...
        let configs = new Headers(); 
        // ...e adicionamos a informação dando um apend nesta instância
        configs.append('Content-Type','application/json');

        // No post, é necssário usar o JSON.stringify() para tranformar o objeto javascript em formato ...
        // ... JSON TXT para ser aceito pelo servidor 
        this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: configs})
                .subscribe(()=>{
                    this.foto = new fotoComponent();
                    console.log('foto-salva');
                },erro => {
                    console.log('Não foi possível salvar a foto');
                })

    }

}