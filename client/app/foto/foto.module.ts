import {NgModule} from '@angular/core';
import { fotoComponent } from './foto.component';
import {FiltroPorTitulo} from './foto.pipe';

@NgModule({
    declarations: [fotoComponent, FiltroPorTitulo], //aqui declaro queis componentes/módulos que serão usados neste componente...
    exports: [fotoComponent,FiltroPorTitulo] //...e aqui declaro quais módulos/componentes serão exportados
})

export class fotoModule {}