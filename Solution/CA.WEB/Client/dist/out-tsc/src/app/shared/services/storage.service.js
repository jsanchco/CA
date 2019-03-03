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
import { Router } from '@angular/router';
var StorageService = /** @class */ (function () {
    function StorageService(router) {
        this.router = router;
        this.currentSession = null;
        this.localStorageService = localStorage;
        this.currentSession = this.loadSessionData();
    }
    StorageService.prototype.setCurrentSession = function (session) {
        this.currentSession = session;
        this.localStorageService.setItem('currentUser', JSON.stringify(session));
    };
    StorageService.prototype.loadSessionData = function () {
        var sessionStr = this.localStorageService.getItem('currentUser');
        return (sessionStr) ? JSON.parse(sessionStr) : null;
    };
    StorageService.prototype.getCurrentSession = function () {
        return this.currentSession;
    };
    StorageService.prototype.removeCurrentSession = function () {
        this.localStorageService.removeItem('currentUser');
        this.currentSession = null;
    };
    StorageService.prototype.getCurrentUser = function () {
        var session = this.getCurrentSession();
        return (session && session.user) ? session.user : null;
    };
    StorageService.prototype.isAuthenticated = function () {
        return (this.getCurrentToken() != null) ? true : false;
    };
    StorageService.prototype.getCurrentToken = function () {
        var session = this.getCurrentSession();
        return (session && session.token) ? session.token : null;
    };
    StorageService.prototype.logout = function () {
        this.removeCurrentSession();
        this.router.navigate(['/login']);
    };
    StorageService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map