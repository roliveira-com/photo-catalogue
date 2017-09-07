import {Component} from '@angular/core';
import {fotoComponent} from '../foto/foto.component'
import {FotoService} from '../foto/foto.service';
// IMPORTANTE
// Tanto a validação do form, quanto o bind de modelo/view para formulário dependem da importação dos módulos...
// ... `ReactiveFormsModule` e `FormsModule` no modulo principal da aplicação respectivamente.
// Validação no componente/modelo
// Aqui, importamos antes de mais nada as classes `FormBuilder` e `Validators`. A primeira disponibilizará...
// ...o bind entre a view e o modelo e a segunda a validação do form em si
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: fotoComponent = new fotoComponent();

    // Para Validação, fazemos o bind do foem na view com o modelo, usando a variavel `meuForm` e tipando...
    // ...com o FormGroup que expostamos acima 
    meuForm: FormGroup;
    service: FotoService;

    // Com o FormBulder, conseguimos construir parametros para fazer o bind dos campos inputs na view...
    // ...para a validação    
    constructor(service: FotoService, fb: FormBuilder){

        this.service = service;
        this.foto.titulo = '';
        this.foto.url = '';
        this.foto.descricao = '';

        // Chamando o método `group()` em FormBuilder (aqui, representados por `fb`) definimos as propriedades que são as mesmas...
        // ...que usamos em `formControlName` na view e configuramos quais validadores aplicar
        this.meuForm = fb.group({
            titulo: ['',Validators.compose([Validators.required,Validators.minLength(4)])],
            url: ['',Validators.required],
            descricao: ['']
        })

    }

    cadastrar (event){

        // evitando que o formulario seja submetido e a página seja recarregada
        event.preventDefault();

        // CONFIGS MOVIDAS PARA foto.service.ts
        // confirando as informações que serão passadas via header
        // instaciamos o objeto `Headers` que já foi importado acima...
        //let configs = new Headers(); 
        // ...e adicionamos a informação dando um apend nesta instância
        //configs.append('Content-Type','application/json');

        // CODIGO MOVIDO PARA foto.service.ts
        // No post, é necssário usar o JSON.stringify() para tranformar o objeto javascript em formato ...
        // ... JSON TXT para ser aceito pelo servidor 
        // this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: configs})
        //         .subscribe(()=>{
        //             this.foto = new fotoComponent();
        //             console.log('foto-salva');
        //         },erro => {
        //             console.log('Não foi possível salvar a foto');
        //         })

        this.service.cadastra(this.foto)
            .subscribe(()=>{
                console.log('Foto cadastrada com Sucesso');
                this.foto = new fotoComponent();
            }, error => {
                console.log(error);
            })

    }

}