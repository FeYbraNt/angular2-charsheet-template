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
var character_service_1 = require('./character.service');
var DashboardComponent = (function () {
    function DashboardComponent(characterService) {
        this.characterService = characterService;
        this.characters = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characterService.getCharacters()
            .then(function (characters) { return _this.characters = characters.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function () { };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            template: '<h3>My Dashboard</h3>',
            templateUrl: 'app/dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map