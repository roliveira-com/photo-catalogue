import {Component} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {fotoComponent} from '../foto/foto.component';
import {PainelComponent} from '../painel/painel.component'

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
    service: FotoService;
    mensagem: string;

    constructor(service: FotoService){
        
        this.mensagem = "";
        this.service = service;
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

    remove(foto: fotoComponent, painel: PainelComponent){
        painel.fadeOut(()=>{
            this.service.remove(foto)
            .subscribe(()=>{

                this.mensagem = 'Foto removida com sucesso';
                //atualizando lista de fotos para ser mostrado na view
                let updatedFotos = this.fotos.slice(0);
                let index = updatedFotos.indexOf(foto);
                updatedFotos.splice(index,1);
                this.fotos = updatedFotos;

            },error=>{
                this.mensagem = 'Foto removida com sucesso';
            })
        })
    }

}