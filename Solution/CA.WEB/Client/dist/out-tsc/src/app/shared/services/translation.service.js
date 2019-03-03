var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var TranslationSet = /** @class */ (function () {
    function TranslationSet() {
        this.values = {};
    }
    return TranslationSet;
}());
export { TranslationSet };
var TranslationService = /** @class */ (function () {
    function TranslationService() {
        this.languages = ['ger', 'eng', 'spa'];
        this.language = 'spa';
        this.dictionary = {
            'ger': {
                languange: 'ger',
                values: {
                    'example': 'Beispiel'
                }
            },
            'eng': {
                languange: 'eng',
                values: {
                    'example': 'Example',
                    'username': 'Username',
                    'password': 'Password',
                    'incorrectLogin': 'Usuario/Contraseña wrong',
                    'dashboard': 'Dashboard',
                    'blank-page': 'Test',
                    'hello': 'Hola!!!'
                }
            },
            'spa': {
                languange: 'spa',
                values: {
                    'example': 'Ejemplo',
                    'username': 'Usuario',
                    'password': 'Contraseña',
                    'incorrectLogin': 'Usuario/Contraseña incorrectos',
                    'dashboard': 'Escritorio',
                    'blank-page': 'Test',
                    'hello': 'Hello!!!'
                }
            }
        };
    }
    TranslationService.prototype.translate = function (value) {
        if (this.dictionary[this.language] != null) {
            var traduction = this.dictionary[this.language].values[value];
            if (traduction == null || traduction === '' || traduction === undefined) {
                return value;
            }
            else {
                return traduction;
            }
        }
    };
    TranslationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], TranslationService);
    return TranslationService;
}());
export { TranslationService };
//# sourceMappingURL=translation.service.js.map