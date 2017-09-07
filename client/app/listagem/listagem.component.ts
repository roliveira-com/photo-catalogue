import {Component} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {fotoComponent} from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {
    
    // fotos: Array<Object> = []; 
    //tambem é possivel usar outra sintaxe...
    //fotos: Object[] = [];
    // ...ou ainda definir que esta prorpiedade é do tipo `fotoComponent`
    fotos: fotoComponent[] = [];

    constructor(service: FotoService){
        
        // http.get('/v1/fotos')
        //     .subscribe((res) => {
        //         this.fotos = res.json();
        //         console.log(this.fotos);
        //     }); 

        // MOVIDO PARA foto.component.ts
        // http.get('/v1/fotos')
        //     .map(res => res.json())
        //     .subscribe(fotos => {
        //         this.fotos = fotos
        //         console.log(this.fotos);
        //     },erro => console.log(erro)); 

        service.lista()
            .subscribe(fotos => {
                this.fotos = fotos;
            },error=>{
                console.log(error);
            })

    }
}