"use strict";
// Importando o módulo de rotas
var router_1 = require('@angular/router');
var cadastro_component_1 = require('./cadastro/cadastro.component');
var listagem_component_1 = require('./listagem/listagem.component');
// Definindo a constante que armazenará as rotas e os componentes/views que serão carregados
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: '**', component: listagem_component_1.ListagemComponent }
];
// Exportando a constante routing que abrigará as rotas compiladas. Para o processo de compilação...
// ...é necessário aplicar o método forRoot() da classe RouterModule que havíamos importado acima...
exports.routing = router_1.RouterModule.forRoot(appRoutes);
// ...e ainda é necessário importar estas rotas no app.module
//Com a diretiva <router-outlet></router-outlet> marcamos na view/componente o local onde a rota...
// ...renderizará cada view/componente especificado acima. Neste caso, será a app.component 
//# sourceMappingURL=app.routes.js.map