import {Component, Input} from '@angular/core'    

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
})

export class fotoComponent {

    @Input() titulo: string;
    @Input() url: string;
    descricao: string;

}