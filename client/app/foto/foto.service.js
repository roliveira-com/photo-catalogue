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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
// Habilitando esta classe/service seja injetado no modulo e receber injeções
var FotoService = (function () {
    function FotoService(http) {
        this.url = 'v1/fotos';
        this.http = http;
        // confirando as informações que serão passadas via header
        // instaciamos o objeto `Headers` que já foi importado acima...
        this.headers = new http_1.Headers();
        // ...e adicionamos a informação dando um apend nesta instância
        this.headers.append('Content-Type', 'application/json');
        this.url;
    }
    FotoService.prototype.cadastra = function (foto) {
        return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers });
    };
    FotoService.prototype.lista = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    FotoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FotoService);
    return FotoService;
}());
exports.FotoService = FotoService;
//# sourceMappingURL=foto.service.js.map