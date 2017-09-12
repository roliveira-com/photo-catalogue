import {Component, Input, OnInit, ElementRef} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit{

    @Input() titulo: string;
    element = ElementRef.prototype;

    constructor(element: ElementRef){
        this.element = element;
    }

    ngOnInit(){
        if (this.titulo.length > 7){
            this.titulo = this.titulo.substr(0,7)+'...';
        }else{
            this.titulo = this.titulo;
        }
    }

    fadeOut(cb){
        $(this.element.nativeElement).fadeOut(cb);
    }

}