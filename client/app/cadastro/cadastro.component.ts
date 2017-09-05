import {Component} from '@angular/core';
import {fotoComponent} from '../foto/foto.component'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: fotoComponent = new fotoComponent();

    constructor(){

        this.foto.titulo = 'Este é o título';
        this.foto.url = 'Esta é a Url da imagem';
        this.foto.descricao = 'Esta é a descrição';

    }

    cadastrar (event){

        event.preventDefault();

        console.log(this.foto);

    }

}