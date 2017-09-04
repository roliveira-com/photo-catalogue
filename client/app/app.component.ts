import {Component} from '@angular/core';
import {Http} from '@angular/http'

@Component({
    moduleId: module.id, // permite que o angular procure a dependência na pasta onde o componente está
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

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

