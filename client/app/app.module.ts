import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {fotoModule}       from './foto/foto.module';
import {PainelModel} from './painel/painel.module'
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map' //tornando acessivel o metodo 'map' para os observables

@NgModule({
  imports:      [ BrowserModule, fotoModule, HttpModule, PainelModel ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }