"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var foto_component_1 = require('../foto/foto.component');
var http_1 = require('@angular/http');
var CadastroComponent = (function () {
    function CadastroComponent(http) {
        this.foto = new foto_component_1.fotoComponent();
        this.foto.titulo = '';
        this.foto.url = '';
        this.foto.descricao = '';
        this.http = http;
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        // evitando que o formulario seja submetido e a página seja recarregada
        event.preventDefault();
        // confirando as infromações que serão passadas via header
        // instaciamos o objeto `Headers` que já foi importado acima...
        var configs = new http_1.Headers();
        // ...e adicionamos a informação dando um apend nesta instância
        configs.append('Content-Type', 'application/json');
        // No post, é necssário usar o JSON.stringify() para tranformar o objeto javascript em formato ...
        // ... JSON TXT para ser aceito pelo servidor 
        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: configs })
            .subscribe(function () {
            _this.foto = new foto_component_1.fotoComponent();
            console.log('foto-salva');
        }, function (erro) {
            console.log('Não foi possível salvar a foto');
        });
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map