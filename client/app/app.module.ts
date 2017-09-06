import 'rxjs/add/operator/map' //tornando acessivel o metodo 'map' para os observables

import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import {fotoModule}         from './foto/foto.module';
import {PainelModel}        from './painel/painel.module'
import {CadastroComponent}  from './cadastro/cadastro.component';
import {ListagemComponent}  from './listagem/listagem.component';
import {HttpModule}         from '@angular/http';
import {routing}            from './app.routes'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, fotoModule, HttpModule, PainelModel, FormsModule, ReactiveFormsModule, routing ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }