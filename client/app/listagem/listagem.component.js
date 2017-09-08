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
var foto_service_1 = require('../foto/foto.service');
var ListagemComponent = (function () {
    function ListagemComponent(service) {
        var _this = this;
        // fotos: Array<Object> = []; 
        //tambem é possivel usar outra sintaxe...
        //fotos: Object[] = [];
        // ...ou ainda definir que esta prorpiedade é do tipo `fotoComponent`
        this.fotos = [];
        this.mensagem = "";
        this.service = service;
        // http.get('/v1/fotos')
        //     .subscribe((res) => {
        //         this.fotos = res.json();
        //         console.log(this.fotos);
        //     }); 
        // MOVIDO PARA foto.component.ts
        // http.get('/v1/fotos')
        //     .map(res => res.json())
        //     .subscribe(fotos => {
        //         this.fotos = fotos
        //         console.log(this.fotos);
        //     },erro => console.log(erro)); 
        service.lista()
            .subscribe(function (fotos) {
            _this.fotos = fotos;
        }, function (error) {
            console.log(error);
        });
    }
    ListagemComponent.prototype.remove = function (foto) {
        var _this = this;
        this.service.remove(foto)
            .subscribe(function () {
            _this.mensagem = 'Foto removida com sucesso';
            //atualizando lista de fotos para ser mostrado na view
            var updatedFotos = _this.fotos.slice(0);
            var index = updatedFotos.indexOf(foto);
            updatedFotos.splice(index, 1);
            _this.fotos = updatedFotos;
        }, function (error) {
            _this.mensagem = 'Foto removida com sucesso';
        });
    };
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagem',
            templateUrl: './listagem.component.html'
        }), 
        __metadata('design:paramtypes', [foto_service_1.FotoService])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map