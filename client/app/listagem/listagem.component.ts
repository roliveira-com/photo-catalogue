import {Component} from '@angular/core';
import {Http} from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {
    fotos: Array<Object> = []; 
    
    //tambem é possivel usar outra sintaxe:
    //fotos: Object[] = [];

    constructor(http: Http){
        
        // http.get('/v1/fotos')
        //     .subscribe((res) => {
        //         this.fotos = res.json();
        //         console.log(this.fotos);
        //     }); 

        http.get('/v1/fotos')
            .map(res => res.json())
            .subscribe(fotos => {
                this.fotos = fotos
                console.log(this.fotos);
            },erro => console.log(erro)); 
    }
}