import {Pipe, PipeTransform} from '@angular/core';
import {fotoComponent} from './foto.component'

@Pipe({
    name: 'filtroPorTitulo'
})

// Usando o conceito de Interface com o `implements`
// Em typescript é possivel usar interfaces para garantir que determindos métodos ou parametros sejam...
// ...corretamente aplicados no momento de implementar determinada classe. Neste caso, Importmos a interface...
// ...`PipeTransform` acima e utilizamos com a sintaxe `implements` para evitar erros ao implementar o método `transform()`
export class FiltroPorTitulo implements PipeTransform{

    // Tipando as variaveis para garantir o correta marcação de erros tanto pelo compilador quanto pela IDE
    // Abaixo, o parâmetro `fotos` foi tipado com o componente `fotoComponent` que por sua vez tambem foi tipado...
    // ...para aplicar a tipagem é necessário import o componente conforme acima
    transform(fotos: fotoComponent[],busca: string){
        busca = busca.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(busca));
    }

}