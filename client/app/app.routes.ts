// Importando o módulo de rotas
import {RouterModule,Routes} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';

// Definindo a constante que armazenará as rotas e os componentes/views que serão carregados
const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    //usando rotas com parâmetros
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', component: ListagemComponent}
];

// Exportando a constante routing que abrigará as rotas compiladas. Para o processo de compilação...
// ...é necessário aplicar o método forRoot() da classe RouterModule que havíamos importado acima...
export const routing = RouterModule.forRoot(appRoutes);
// ...e ainda é necessário importar estas rotas no app.module

//Com a diretiva <router-outlet></router-outlet> marcamos na view/componente o local onde a rota...
// ...renderizará cada view/componente especificado acima. Neste caso, será a app.component