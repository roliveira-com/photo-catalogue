import {Component,Input,EventEmitter, Output} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})

export class BotaoComponent {

    @Input() nome: string = 'OK'
    @Input() estilo: string = 'btn-default'
    @Input() tipo: string = 'button'
    @Input() disable: boolean = false
    @Output() comando = new EventEmitter();
    @Input() confirmacao: boolean

    execute() {

        if(this.confirmacao){
            if(confirm('Deseja excluir?')){
                this.comando.emit(null);
            }
            return
        } 
        this.comando.emit(null);

    }

}