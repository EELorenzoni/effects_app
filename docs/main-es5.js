(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container p-3\">\r\n    <router-outlet></router-outlet>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">effects</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/usuario/1']\" routerLinkActive=\"active\">Usuario</a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"form-inline my-2 my-lg-0\">\r\n            <input #txtInput (keyup.enter)=\"irUsuario(txtInput.value)\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\">\r\n            <button (click)=\"irUsuario(txtInput.value)\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"bottom\">Search</button>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/usuarios/lista/lista.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/usuarios/lista/lista.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading\">\r\n    <div class=\"col\">\r\n        <div class=\"alert alert-info text-center\">\r\n            <i class=\"fa fa-sync fa-spin fa-2x\">\r\n                <h1>Espere...</h1>\r\n            </i>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"error\">\r\n    <div class=\"col\">\r\n        <div class=\"alert alert-danger text-center\">\r\n            <i class=\"fa fa-sync fa-times fa-2x\">\r\n                <h2>Error: {{error.status}}</h2>\r\n                <p>\r\n                    {{error.message}}\r\n                    <br><br>\r\n                    {{error.url}}\r\n                </p>\r\n            </i>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card-columns\" *ngIf=\"!error && !loading\">\r\n    <div class=\"card\" *ngFor=\"let user of usuarios\">\r\n        <img [src]=\"user.avatar\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{user.first_name}} {{user.last_name}}</h5>\r\n            <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content.\r\n            </p>\r\n            <p class=\"card-text\">\r\n                <span class=\"text-muted\">Id:{{user.id}}</span>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/usuarios/usuario/usuario.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/usuarios/usuario/usuario.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading\">\r\n    <div class=\"col\">\r\n        <div class=\"alert alert-info text-center\">\r\n            <i class=\"fa fa-sync fa-spin fa-2x\">\r\n                <h1>Espere...</h1>\r\n            </i>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"error\">\r\n    <div class=\"col\">\r\n        <div class=\"alert alert-danger text-center\">\r\n            <i class=\"fa fa-sync fa-times fa-2x\">\r\n                <h2>Error: {{error.status}}</h2>\r\n                <p>\r\n                    {{error.message}}\r\n                    <br><br>\r\n                    {{error.url}}\r\n                </p>\r\n            </i>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"!error && !loading\">\r\n    <div class=\"col-3\">\r\n        <img [src]=\"usuario.avatar\" class=\"img-thumbnail\">\r\n    </div>\r\n    <div class=\"col\">\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-groupitem\">\r\n                <strong>ID</strong> {{usuario.id}}\r\n            </li>\r\n        </ul>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-groupitem\">\r\n                <strong>Nombre</strong> {{usuario.first_name}}\r\n            </li>\r\n        </ul>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-groupitem\">\r\n                <strong>Apellido</strong> {{usuario.last_name}}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios/lista/lista.component */ "./src/app/usuarios/lista/lista.component.ts");
/* harmony import */ var _usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios/usuario/usuario.component */ "./src/app/usuarios/usuario/usuario.component.ts");





var routes = [
    { path: 'home', component: _usuarios_lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ListaComponent"] },
    { path: 'usuario/:id', component: _usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'http-effects';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios/usuarios.module */ "./src/app/usuarios/usuarios.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/effects/index */ "./src/app/store/effects/index.ts");











 // Angular CLI environment


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_9__["appReducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production,
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot(_store_effects_index__WEBPACK_IMPORTED_MODULE_13__["effectsArr"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/usuario.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/usuario.model.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(id, first_name, last_name, avatar) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }
    Usuario.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Usuario;
}());



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        this.url = 'https://reqres.in/api';
    }
    UsuarioService.prototype.getUsers = function () {
        return this.http.get(this.url + "/users?per_page=6")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp['data']; }));
    };
    UsuarioService.prototype.getUserById = function (id) {
        return this.http.get(this.url + "/users/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp['data']; }));
    };
    UsuarioService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.irUsuario = function (id) {
        if (!id) {
            return;
        }
        this.router.navigate(['/usuario', id]);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: CARGAR_USUARIOS, CARGAR_USUARIOS_FAIL, CARGAR_USUARIOS_SUCCES, CargarUsuarios, CargarUsuariosFail, CargarUsuariosSucces, CARGAR_USUARIO, CARGAR_USUARIO_FAIL, CARGAR_USUARIO_SUCCES, CargarUsuario, CargarUsuarioFail, CargarUsuarioSucces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usuarios_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.actions */ "./src/app/store/actions/usuarios.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIOS", function() { return _usuarios_actions__WEBPACK_IMPORTED_MODULE_0__["CARGAR_USUARIOS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIOS_FAIL", function() { return _usuarios_actions__WEBPACK_IMPORTED_MODULE_0__["CARGAR_USUARIOS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIOS_SUCCES", function() { return _usuarios_actions__WEBPACK_IMPORTED_MODULE_0__["CARGAR_USUARIOS_SUCCES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargarUsuarios", function() { return _usuarios_actions__WEBPACK_IMPORTED_MODULE_0__["CargarUsuarios"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargarUsuariosFail", function() { return _usuarios_actions__WEBPACK_IMPORTED_MODULE_0__["CargarUsuariosFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargarUsuariosSucces", function() { return _usuarios_actions__WEBPACK_IMPORTED_MODULE_0__["CargarUsuariosSucces"]; });

/* harmony import */ var _usuario_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.actions */ "./src/app/store/actions/usuario.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIO", function() { return _usuario_actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIO_FAIL", function() { return _usuario_actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIO_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIO_SUCCES", function() { return _usuario_actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIO_SUCCES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargarUsuario", function() { return _usuario_actions__WEBPACK_IMPORTED_MODULE_1__["CargarUsuario"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargarUsuarioFail", function() { return _usuario_actions__WEBPACK_IMPORTED_MODULE_1__["CargarUsuarioFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargarUsuarioSucces", function() { return _usuario_actions__WEBPACK_IMPORTED_MODULE_1__["CargarUsuarioSucces"]; });





/***/ }),

/***/ "./src/app/store/actions/usuario.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/actions/usuario.actions.ts ***!
  \**************************************************/
/*! exports provided: CARGAR_USUARIO, CARGAR_USUARIO_FAIL, CARGAR_USUARIO_SUCCES, CargarUsuario, CargarUsuarioFail, CargarUsuarioSucces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIO", function() { return CARGAR_USUARIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIO_FAIL", function() { return CARGAR_USUARIO_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIO_SUCCES", function() { return CARGAR_USUARIO_SUCCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarUsuario", function() { return CargarUsuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarUsuarioFail", function() { return CargarUsuarioFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarUsuarioSucces", function() { return CargarUsuarioSucces; });
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/usuario.model */ "./src/app/models/usuario.model.ts");

var CARGAR_USUARIO = '[Usuario] Cargar usuario';
var CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario FAIL';
var CARGAR_USUARIO_SUCCES = '[Usuario] Cargar usuario SUCCES';
var CargarUsuario = /** @class */ (function () {
    function CargarUsuario(id) {
        this.id = id;
        this.type = CARGAR_USUARIO;
    }
    CargarUsuario.ctorParameters = function () { return [
        { type: String }
    ]; };
    return CargarUsuario;
}());

var CargarUsuarioFail = /** @class */ (function () {
    function CargarUsuarioFail(payload) {
        this.payload = payload;
        this.type = CARGAR_USUARIO_FAIL;
    }
    CargarUsuarioFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return CargarUsuarioFail;
}());

var CargarUsuarioSucces = /** @class */ (function () {
    function CargarUsuarioSucces(usuario) {
        this.usuario = usuario;
        this.type = CARGAR_USUARIO_SUCCES;
    }
    CargarUsuarioSucces.ctorParameters = function () { return [
        { type: _models_usuario_model__WEBPACK_IMPORTED_MODULE_0__["Usuario"] }
    ]; };
    return CargarUsuarioSucces;
}());



/***/ }),

/***/ "./src/app/store/actions/usuarios.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/usuarios.actions.ts ***!
  \***************************************************/
/*! exports provided: CARGAR_USUARIOS, CARGAR_USUARIOS_FAIL, CARGAR_USUARIOS_SUCCES, CargarUsuarios, CargarUsuariosFail, CargarUsuariosSucces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIOS", function() { return CARGAR_USUARIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIOS_FAIL", function() { return CARGAR_USUARIOS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARGAR_USUARIOS_SUCCES", function() { return CARGAR_USUARIOS_SUCCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarUsuarios", function() { return CargarUsuarios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarUsuariosFail", function() { return CargarUsuariosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarUsuariosSucces", function() { return CargarUsuariosSucces; });
var CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
var CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios FAIL';
var CARGAR_USUARIOS_SUCCES = '[Usuarios] Cargar usuarios SUCCES';
var CargarUsuarios = /** @class */ (function () {
    function CargarUsuarios() {
        this.type = CARGAR_USUARIOS;
    }
    return CargarUsuarios;
}());

var CargarUsuariosFail = /** @class */ (function () {
    function CargarUsuariosFail(payload) {
        this.payload = payload;
        this.type = CARGAR_USUARIOS_FAIL;
    }
    CargarUsuariosFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return CargarUsuariosFail;
}());

var CargarUsuariosSucces = /** @class */ (function () {
    function CargarUsuariosSucces(usuarios) {
        this.usuarios = usuarios;
        this.type = CARGAR_USUARIOS_SUCCES;
    }
    CargarUsuariosSucces.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return CargarUsuariosSucces;
}());



/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");

var appReducers = {
    usuarios: _reducers__WEBPACK_IMPORTED_MODULE_0__["usuariosReducer"],
    usuario: _reducers__WEBPACK_IMPORTED_MODULE_0__["usuarioReducer"]
};


/***/ }),

/***/ "./src/app/store/effects/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/effects/index.ts ***!
  \****************************************/
/*! exports provided: effectsArr, UsuariosEffects, UsuarioEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effectsArr", function() { return effectsArr; });
/* harmony import */ var _usuarios_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.effects */ "./src/app/store/effects/usuarios.effects.ts");
/* harmony import */ var _usuario_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.effects */ "./src/app/store/effects/usuario.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuariosEffects", function() { return _usuarios_effects__WEBPACK_IMPORTED_MODULE_0__["UsuariosEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioEffects", function() { return _usuario_effects__WEBPACK_IMPORTED_MODULE_1__["UsuarioEffects"]; });



var effectsArr = [_usuarios_effects__WEBPACK_IMPORTED_MODULE_0__["UsuariosEffects"], _usuario_effects__WEBPACK_IMPORTED_MODULE_1__["UsuarioEffects"]];




/***/ }),

/***/ "./src/app/store/effects/usuario.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/store/effects/usuario.effects.ts ***!
  \**************************************************/
/*! exports provided: UsuarioEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioEffects", function() { return UsuarioEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var UsuarioEffects = /** @class */ (function () {
    function UsuarioEffects(actions$, usuariosService) {
        var _this = this;
        this.actions$ = actions$;
        this.usuariosService = usuariosService;
        this.cargarUsuario$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["CARGAR_USUARIO"]), 
        // el switchmap cancela un observable y devuelve uno nuevo
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.usuariosService.getUserById(action.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return new _actions__WEBPACK_IMPORTED_MODULE_3__["CargarUsuarioSucces"](user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["CargarUsuarioFail"](error)); }));
        }));
    }
    UsuarioEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], UsuarioEffects.prototype, "cargarUsuario$", void 0);
    UsuarioEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UsuarioEffects);
    return UsuarioEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/usuarios.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/store/effects/usuarios.effects.ts ***!
  \***************************************************/
/*! exports provided: UsuariosEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosEffects", function() { return UsuariosEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var UsuariosEffects = /** @class */ (function () {
    function UsuariosEffects(actions$, usuariosService) {
        var _this = this;
        this.actions$ = actions$;
        this.usuariosService = usuariosService;
        this.cargarUsuarios$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["CARGAR_USUARIOS"]), 
        // el switchmap cancela un observable y devuelve uno nuevo
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.usuariosService.getUsers()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) { return new _actions__WEBPACK_IMPORTED_MODULE_3__["CargarUsuariosSucces"](users); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["CargarUsuariosFail"](error)); }));
        }));
    }
    UsuariosEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], UsuariosEffects.prototype, "cargarUsuarios$", void 0);
    UsuariosEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UsuariosEffects);
    return UsuariosEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: usuariosReducer, usuarioReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usuarios_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.reducer */ "./src/app/store/reducers/usuarios.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usuariosReducer", function() { return _usuarios_reducer__WEBPACK_IMPORTED_MODULE_0__["usuariosReducer"]; });

/* harmony import */ var _usuario_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.reducer */ "./src/app/store/reducers/usuario.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usuarioReducer", function() { return _usuario_reducer__WEBPACK_IMPORTED_MODULE_1__["usuarioReducer"]; });





/***/ }),

/***/ "./src/app/store/reducers/usuario.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/usuario.reducer.ts ***!
  \***************************************************/
/*! exports provided: usuarioReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuarioReducer", function() { return usuarioReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");


var estadoInicial = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};
function usuarioReducer(state, action) {
    if (state === void 0) { state = estadoInicial; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIO"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIO_SUCCES"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, user: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.usuario) });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIO_FAIL"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: false, 
                // modifico el error para recibir solo lo que quiero ver
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                } });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/reducers/usuarios.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/usuarios.reducer.ts ***!
  \****************************************************/
/*! exports provided: usuariosReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuariosReducer", function() { return usuariosReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");


var estadoInicial = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};
function usuariosReducer(state, action) {
    if (state === void 0) { state = estadoInicial; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIOS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIOS_SUCCES"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, users: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](action.usuarios) });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["CARGAR_USUARIOS_FAIL"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: false, 
                // modifico el error para recibir solo lo que quiero ver
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                } });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/usuarios/lista/lista.component.ts":
/*!***************************************************!*\
  !*** ./src/app/usuarios/lista/lista.component.ts ***!
  \***************************************************/
/*! exports provided: ListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComponent", function() { return ListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions/index.ts");




var ListaComponent = /** @class */ (function () {
    function ListaComponent(store) {
        this.store = store;
        this.usuarios = [];
    }
    ListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('usuarios')
            .subscribe(function (usuarios) {
            _this.usuarios = usuarios.users;
            _this.loading = usuarios.loading;
            _this.error = usuarios.error;
        });
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["CargarUsuarios"]());
    };
    ListaComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    ListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista',
            template: __webpack_require__(/*! raw-loader!./lista.component.html */ "./node_modules/raw-loader/index.js!./src/app/usuarios/lista/lista.component.html")
        })
    ], ListaComponent);
    return ListaComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/usuario/usuario.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/usuarios/usuario/usuario.component.ts ***!
  \*******************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_usuario_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/usuario.actions */ "./src/app/store/actions/usuario.actions.ts");





var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .subscribe(function (params) {
            var id = params['id'];
            _this.store.dispatch(new _store_actions_usuario_actions__WEBPACK_IMPORTED_MODULE_4__["CargarUsuario"](id));
            _this.store.select('usuario')
                .subscribe(function (usuario) {
                _this.usuario = usuario.user;
                _this.loading = usuario.loading;
                _this.error = usuario.error;
            });
        });
    };
    UsuarioComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! raw-loader!./usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/usuarios/usuario/usuario.component.html")
        })
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "./src/app/usuarios/lista/lista.component.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuarios/usuario/usuario.component.ts");





var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ListaComponent"], _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioComponent"]],
            exports: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ListaComponent"], _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], UsuariosModule);
    return UsuariosModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Edu\proyectos\prueba-ruteo\effects_app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map