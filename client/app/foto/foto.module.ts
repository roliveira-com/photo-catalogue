import {NgModule} from '@angular/core';
import { fotoComponent } from './foto.component';

@NgModule({
    declarations: [fotoComponent], //aqui declaro queis componentes/módulos que serão usados neste componente...
    exports: [fotoComponent] //...e aqui declaro quais módulos/componentes serão exportados
})

export class fotoModule {}