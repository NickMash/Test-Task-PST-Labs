(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NicholasGrand\WebstormProjects\Test-Task-PST-Labs\src\main.ts */"zUnb");


/***/ }),

/***/ "3s+D":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/news.service */ "Ado8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article-card/article-card.component */ "lk93");





function FavoritesComponent_div_0_app_article_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-article-card", 4);
} if (rf & 2) {
    const article_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", article_r3 == null ? null : article_r3.id)("title", article_r3 == null ? null : article_r3.title)("body", article_r3 == null ? null : article_r3.body)("isFavorites", true);
} }
function FavoritesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clearMemory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DELETE ALL FAVORITES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavoritesComponent_div_0_app_article_card_3_Template, 1, 4, "app-article-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const favorites_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", favorites_r1);
} }
class FavoritesComponent {
    constructor(newsService) {
        this.newsService = newsService;
    }
    clearMemory() {
        this.newsService.favorites = [];
        this.newsService.favorite$.next([]);
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 2, vars: 3, consts: [["class", "favorites__container", 4, "ngIf"], [1, "favorites__container"], [1, "delete_favorites_button", 3, "click"], [3, "id", "title", "body", "isFavorites", 4, "ngFor", "ngForOf"], [3, "id", "title", "body", "isFavorites"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FavoritesComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.newsService.favorite$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_3__["ArticleCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".favorites__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  margin: 140px auto;\n  position: relative;\n}\n.delete_favorites_button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 210px;\n  height: 22px;\n  border: #e8f5ff 2px solid;\n  color: #e8f5ff;\n  border-radius: 30px;\n  font-family: Calibri;\n  font-size: 110%;\n  text-decoration: none;\n  transition: all 0.05s ease;\n  opacity: 0.6;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: -23px auto;\n  z-index: 1;\n}\n.delete_favorites_button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: white;\n  border: white 2px solid;\n  transform: scale(1.02);\n  opacity: 1;\n  z-index: 1;\n}\n@media (max-width: 1193px) {\n  .favorites__container[_ngcontent-%COMP%] {\n    max-width: 784px;\n  }\n}\n@media (max-width: 800px) {\n  .favorites__container[_ngcontent-%COMP%] {\n    max-width: 784px;\n    justify-content: center;\n  }\n}\n@media (max-width: 500px) {\n  .favorites__container[_ngcontent-%COMP%] {\n    margin: 200px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2b3JpdGVzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDE0MHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZWxldGVfZmF2b3JpdGVzX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyOiAjZThmNWZmIDJweCBzb2xpZDtcbiAgY29sb3I6ICNlOGY1ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xuICBmb250LXNpemU6IDExMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDVzIGVhc2U7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAtMjNweCBhdXRvO1xuICB6LWluZGV4OiAxO1xufVxuLmRlbGV0ZV9mYXZvcml0ZXNfYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTNweCkge1xuICAuZmF2b3JpdGVzX19jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzg0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZmF2b3JpdGVzX19jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzg0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZmF2b3JpdGVzX19jb250YWluZXIge1xuICAgIG1hcmdpbjogMjAwcHggYXV0bztcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.css']
            }]
    }], function () { return [{ type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "7ZA2":
/*!***************************************************!*\
  !*** ./src/app/services/authorization.service.ts ***!
  \***************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AuthorizationService {
    constructor() {
        this.users = [
            {
                name: 'admin',
                password: 'admin',
                role: 'admin'
            },
            {
                name: 'user',
                password: 'user',
                role: 'user'
            }
        ];
        this.isAuthorized$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isAdmin$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isAuthError$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    findUser(username, password) {
        this.userName = username;
        return this.users.find(item => (item.password === password && item.name === username));
    }
    setCredentials(username, password) {
        const currentUser = this.findUser(username, password);
        if (currentUser) {
            this.isAuthorized$.next(true);
            if (currentUser.role === 'admin') {
                this.isAdmin$.next(true);
            }
        }
        else {
            this.isAuthError$.next(true);
        }
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(); };
AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ado8":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class NewsService {
    constructor(http) {
        this.http = http;
        this.favorite$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.news$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.news = [];
        this.favorites = [];
    }
    setData() {
        this.http.get('assets/data.json').subscribe(data => {
            this.news$.next(data['articleList']);
            this.news = data['articleList'];
        });
    }
    deleteNewsById(id) {
        this.news = this.news.filter(item => item.id !== id);
        this.updateData(this.news);
        this.favorites = this.favorites.filter(item => item.id !== id);
        this.favorite$.next(this.favorites);
    }
    updateData(data) {
        this.news$.next(data);
    }
    addToFavorites(id) {
        const article = this.news.find(item => (item.id === id));
        this.favorites.push(article);
        this.favorite$.next(this.favorites);
    }
    checkFavorites(id) {
        return this.favorites.find(item => (item.id === id));
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "AzdA":
/*!**********************************************************!*\
  !*** ./src/app/authorization/authorization.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function() { return AuthorizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authorization.service */ "7ZA2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AuthorizationComponent_div_6_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthorizationComponent_div_6_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The minimum length is ", ctx_r4.minLength, " characters. ");
} }
function AuthorizationComponent_div_6_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The maximum length is ", ctx_r5.maxLength, " characters. ");
} }
function AuthorizationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthorizationComponent_div_6_small_1_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthorizationComponent_div_6_small_2_Template, 2, 1, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthorizationComponent_div_6_small_3_Template, 2, 1, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("username").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("username").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("username").hasError("maxlength"));
} }
function AuthorizationComponent_div_9_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthorizationComponent_div_9_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The minimum length for this field is ", ctx_r7.minLength, " characters. ");
} }
function AuthorizationComponent_div_9_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The maximum length for this field is ", ctx_r8.maxLength, " characters. ");
} }
function AuthorizationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthorizationComponent_div_9_small_1_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthorizationComponent_div_9_small_2_Template, 2, 1, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthorizationComponent_div_9_small_3_Template, 2, 1, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").hasError("maxlength"));
} }
function AuthorizationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Incorrect username or password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthorizationComponent {
    constructor(fb, authorizationService, router) {
        this.fb = fb;
        this.authorizationService = authorizationService;
        this.router = router;
        this.maxLength = 20;
        this.minLength = 4;
        this.hideShow = true;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minLength), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLength)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minLength), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLength)]]
        });
    }
    changeValue() {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        this.authorizationService.setCredentials(username, password);
    }
    navigateToHomepage() {
        this.authorizationService.isAuthorized$.subscribe((value) => {
            if (value) {
                this.router.navigateByUrl('/homepage');
            }
        });
    }
}
AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) { return new (t || AuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthorizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizationComponent, selectors: [["app-authorization"]], decls: 15, vars: 7, consts: [[1, "authorization", 3, "formGroup"], [1, "inset"], ["type", "text", "formControlName", "username", "id", "email", "placeholder", "Username", 3, "keyup.enter", "click"], [4, "ngIf"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 3, "keyup.enter", "click"], [1, "p-container"], [1, "submit_button", 3, "disabled", "click"], ["class", "text-danger_username", 4, "ngIf"], [1, "text-danger_username"], ["class", "text-danger_password", 4, "ngIf"], [1, "text-danger_password"], [1, "text-danger_incorrect"]], template: function AuthorizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOG IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AuthorizationComponent_Template_input_keyup_enter_5_listener() { ctx.changeValue(); ctx.navigateToHomepage(); return ctx.hideShow = true; })("click", function AuthorizationComponent_Template_input_click_5_listener() { return ctx.hideShow = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthorizationComponent_div_6_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AuthorizationComponent_Template_input_keyup_enter_8_listener() { ctx.changeValue(); ctx.navigateToHomepage(); return ctx.hideShow = true; })("click", function AuthorizationComponent_Template_input_click_8_listener() { return ctx.hideShow = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AuthorizationComponent_div_9_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AuthorizationComponent_div_10_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_13_listener() { ctx.changeValue(); ctx.navigateToHomepage(); return ctx.hideShow = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Authorize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("username").invalid && ctx.loginForm.get("username").errors && (ctx.loginForm.get("username").dirty || ctx.loginForm.get("username").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").invalid && ctx.loginForm.get("password").errors && (ctx.loginForm.get("password").dirty || ctx.loginForm.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx.authorizationService.isAuthError$) && ctx.hideShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Audiowide);\n\n[_ngcontent-%COMP%]::selection {\n  background: #0022ff;\n  text-shadow: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], .authorization[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #1b1b1b;\n  color: #FFF;\n  font-family: \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 12px;\n  line-height: 1;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  cursor: default;\n  outline: none;\n}\n\n.authorization[_ngcontent-%COMP%] {\n  background: #000004;\n  border: 1px solid #232324;\n  border-radius: .4em;\n  bottom: 0;\n  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);\n  height: 296px;\n  left: 0;\n  margin: 200px auto 0 auto;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 300px;\n}\n\n.authorization[_ngcontent-%COMP%]:after {\n  background: linear-gradient(to right, #181819, #404042, #b6b6b8, #515153, #2F2F2F, #272727);\n  content: \"\";\n  display: block;\n  height: 1px;\n  left: 50px;\n  position: absolute;\n  top: 0;\n  width: 150px;\n}\n\n.authorization[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n  box-shadow: 0 0 6px 4px #fff;\n  content: \"\";\n  display: block;\n  height: 5px;\n  left: 34%;\n  position: absolute;\n  top: -7px;\n  width: 8px;\n}\n\n.inset[_ngcontent-%COMP%] {\n  border-top: 1px solid #19191a;\n  padding: 20px;\n}\n\n.authorization[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: 'Audiowide';\n  border-bottom: 1px solid #000000;\n  font-size: 18px;\n  padding: 15px 0;\n  position: relative;\n  text-align: center;\n  text-shadow: 0 1px 0 #000;\n}\n\n.authorization[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #0022ff;\n  font-family: Audiowide;\n  font-weight: normal;\n}\n\n.authorization[_ngcontent-%COMP%]   h1.poweron[_ngcontent-%COMP%] {\n  color: #ffffff;\n  transition: all 0.5s;\n  animation: flicker 1s ease-in-out 1 alternate, neon 1.5s ease-in-out infinite alternate;\n  animation-delay: 0s, 1s;\n}\n\n.authorization[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after {\n  position: absolute;\n  width: 250px;\n  height: 180px;\n  content: \"\";\n  display: block;\n  pointer-events: none;\n  top: 0;\n  margin-left: 138px;\n  transform-style: flat;\n  transform: skew(20deg);\n  background: -ms-linear-gradient(top, hsla(0,0%,100%,0.1) 0%,hsla(0,0%,100%,0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#42ffffff', endColorstr='#00ffffff',GradientType=0 );\n  background: linear-gradient(to bottom, hsla(0,0%,100%,0.1) 0%,hsla(0,0%,100%,0) 100%);\n\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  background: linear-gradient(#1f2124,#27292c);\n  border: 1px solid #222;\n  border-radius: .3em;\n  box-shadow: 0 1px 0 rgba(255,255,255,0.1);\n  color: #FFF;\n  font-size: 13px;\n  margin-bottom: 40px;\n  padding: 8px 5px;\n  width: 100%;\n}\n\ninput[type=password][_ngcontent-%COMP%] {\n  background: linear-gradient(#1f2124,#27292c);\n  border: 1px solid #222;\n  border-radius: .3em;\n  box-shadow: 0 1px 0 rgba(255,255,255,0.1);\n  color: #FFF;\n  font-size: 13px;\n  margin-bottom: 20px;\n  padding: 8px 5px;\n  width: 100%;\n}\n\ninput[type=text][_ngcontent-%COMP%]:disabled, input[type=password][_ngcontent-%COMP%]:disabled {\n  color: #999;\n}\n\nlabel[for=remember][_ngcontent-%COMP%] {\n  color: #bbb;\n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  vertical-align: top;\n  padding: 0 0 0 5px;\n}\n\n.p-container[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n  margin-top: 15px;\n}\n\n.p-container[_ngcontent-%COMP%]:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.p-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0d93ff;\n  display: block;\n  float: left;\n  padding-top: 8px;\n}\n\n.submit_button[_ngcontent-%COMP%] {\n  background: #000000;\n  border: 1px solid rgba(0,0,0,0.4);\n  border-radius: .3em;\n  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 10px 10px rgba(255,255,255,0.1);\n  color: #8e8e8e;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: bold;\n  height: 40px;\n  padding: 5px 20px;\n  width: 100%;\n  transition: all 0.05s ease;\n}\n\n.submit_button[_ngcontent-%COMP%]:disabled {\n  background: #8b8b8b;\n  border: 1px solid rgba(70, 70, 70, 0.4);\n  border-radius: .3em;\n  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 10px 10px rgba(255,255,255,0.1);\n  color: #e9e9e9;\n  cursor: not-allowed;\n  font-size: 13px;\n  font-weight: bold;\n  height: 40px;\n  padding: 5px 20px;\n  width: 100%;\n  transition: all 0.05s ease;\n}\n\n.submit_button[_ngcontent-%COMP%]:disabled:hover, .submit_button[_ngcontent-%COMP%]:disabled:focus {\n  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 10px 10px rgba(255,255,255,0.1);\n}\n\n.denied[_ngcontent-%COMP%] {\n  color: white !important;\n  text-shadow: 0 0 1px black;\n  background: #002cee !important;\n}\n\n.submit_button[_ngcontent-%COMP%]:hover, .submit_button[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -10px 10px rgba(255,255,255,0.1);\n}\n\ninput[type=text][_ngcontent-%COMP%]:hover:not([disabled]), input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:hover:not([disabled]), input[type=password][_ngcontent-%COMP%]:focus, label[_ngcontent-%COMP%]:hover    ~ input[type=text][_ngcontent-%COMP%], label[_ngcontent-%COMP%]:hover    ~ input[type=password][_ngcontent-%COMP%] {\n  background: #27292c;\n}\n\n@keyframes neon {\n  from {\n    text-shadow:\n      0 0 2.5px #fff,\n      0 0 5px #fff,\n      0 0 7.5px #fff,\n      0 0 10px #B6FF00,\n      0 0 17.5px #B6FF00,\n      0 0 20px #B6FF00,\n      0 0 25px #B6FF00,\n      0 0 37.5px #B6FF00;\n  }\n\n  to {\n    text-shadow:\n      0 0 3px #fff,\n      0 0 7px  #fff,\n      0 0 13px  #fff,\n      0 0 17px  #B6FF00,\n      0 0 33px  #B6FF00,\n      0 0 38px  #B6FF00,\n      0 0 48px #B6FF00,\n      0 0 63px #B6FF00;\n  }\n}\n\n@keyframes flicker {\n  0% {\n    text-shadow:\n      0 0 2.5px #fff,\n      0 0 5px #fff,\n      0 0 7.5px #fff,\n      0 0 10px #B6FF00,\n      0 0 17.5px #B6FF00,\n      0 0 20px #B6FF00,\n      0 0 25px #B6FF00,\n      0 0 37.5px #B6FF00;\n  }\n\n  2% {\n    text-shadow: none;\n  }\n\n  8% {\n    text-shadow:\n      0 0 2.5px #fff,\n      0 0 5px #fff,\n      0 0 7.5px #fff,\n      0 0 10px #B6FF00,\n      0 0 17.5px #B6FF00,\n      0 0 20px #B6FF00,\n      0 0 25px #B6FF00,\n      0 0 37.5px #B6FF00;\n  }\n\n  10% {\n    text-shadow: none;\n  }\n\n  20% {\n    text-shadow:\n      0 0 2.5px #fff,\n      0 0 5px #fff,\n      0 0 7.5px #fff,\n      0 0 10px #B6FF00,\n      0 0 17.5px #B6FF00,\n      0 0 20px #B6FF00,\n      0 0 25px #B6FF00,\n      0 0 37.5px #B6FF00;\n  }\n\n  22% {\n    text-shadow: none;\n  }\n\n  24% {\n    text-shadow:\n      0 0 2.5px #fff,\n      0 0 5px #fff,\n      0 0 7.5px #fff,\n      0 0 10px #B6FF00,\n      0 0 17.5px #B6FF00,\n      0 0 20px #B6FF00,\n      0 0 25px #B6FF00,\n      0 0 37.5px #B6FF00;\n  }\n\n  28% {\n    text-shadow: none;\n  }\n\n  32% {\n    text-shadow:\n      0 0 2.5px #fff,\n      0 0 5px #fff,\n      0 0 7.5px #fff,\n      0 0 10px #B6FF00,\n      0 0 17.5px #B6FF00,\n      0 0 20px #B6FF00,\n      0 0 25px #B6FF00,\n      0 0 37.5px #B6FF00;\n  }\n\n  34% {\n    text-shadow: none;\n  }\n\n  36% {\n    text-shadow: none;\n  }\n\n  42% {\n    text-shadow: none;\n  }\n\n  100% {\n    text-shadow:\n      0 0 2.5px #fff,\n      0 0 5px #fff,\n      0 0 7.5px #fff,\n      0 0 10px #B6FF00,\n      0 0 17.5px #B6FF00,\n      0 0 20px #B6FF00,\n      0 0 25px #B6FF00,\n      0 0 37.5px #B6FF00;\n  }\n}\n\n.text-danger_username[_ngcontent-%COMP%] {\n  width: 258px;\n  height: 5px;\n  color: red;\n  font-family: Arial;\n  font-size: 80%;\n  position: absolute;\n  margin-top: -35px;\n}\n\n.text-danger_password[_ngcontent-%COMP%] {\n  width: 258px;\n  height: 5px;\n  color: red;\n  font-family: Arial;\n  font-size: 80%;\n  position: absolute;\n  margin-top: -15px;\n}\n\n.text-danger_incorrect[_ngcontent-%COMP%] {\n  width: 258px;\n  height: 5px;\n  color: red;\n  font-family: Arial;\n  font-size: 80%;\n  position: absolute;\n  margin-top: 15px;\n}\n\n@media (max-width: 500px) {\n  .authorization[_ngcontent-%COMP%] {\n    margin: 170px auto 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQ7O0FBTzlEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0dBQW9HO0VBQ3BHLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYixPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyRkFBMkY7RUFDM0YsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHVGQUF1RjtFQUN2Rix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFNdEIsbUZBQW1GO0VBQ25GLHVIQUF1SDtFQUN2SCxxRkFBcUY7O0FBRXZGOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLHdGQUF3RjtFQUN4RixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBR1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsd0ZBQXdGO0VBQ3hGLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFHWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3RkFBd0Y7QUFDMUY7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlGQUF5RjtBQUMzRjs7QUFFQTs7Ozs7O0VBTUUsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0U7SUFDRTs7Ozs7Ozs7d0JBUW9CO0VBQ3RCOztFQUVBO0lBQ0U7Ozs7Ozs7O3NCQVFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRTs7Ozs7Ozs7d0JBUW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0U7Ozs7Ozs7O3dCQVFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFOzs7Ozs7Ozt3QkFRb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTs7Ozs7Ozs7d0JBUW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0U7Ozs7Ozs7O3dCQVFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFOzs7Ozs7Ozt3QkFRb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoiYXV0aG9yaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUF1ZGlvd2lkZSk7XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMDAyMmZmO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMDAyMmZmO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuaHRtbCxib2R5LGRpdixzcGFuLGFwcGxldCxvYmplY3QsaWZyYW1lLGgxLGgyLGgzLGg0LGg1LGg2LHAsYmxvY2txdW90ZSxwcmUsYSxhYmJyLGFjcm9ueW0sYWRkcmVzcyxiaWcsY2l0ZSxjb2RlLGRlbCxkZm4sZW0saW1nLGlucyxrYmQscSxzLHNhbXAsc21hbGwsc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHR0LHZhcixiLHUsaSxjZW50ZXIsZGwsZHQsZGQsb2wsdWwsbGksZmllbGRzZXQsLmF1dGhvcml6YXRpb24sbGFiZWwsbGVnZW5kLHRhYmxlLGNhcHRpb24sdGJvZHksdGZvb3QsdGhlYWQsdHIsdGgsdGQsYXJ0aWNsZSxhc2lkZSxjYW52YXMsZGV0YWlscyxlbWJlZCxmaWd1cmUsZmlnY2FwdGlvbixmb290ZXIsaGVhZGVyLGhncm91cCxtZW51LG5hdixvdXRwdXQscnVieSxzZWN0aW9uLHN1bW1hcnksdGltZSxtYXJrLGF1ZGlvLHZpZGVvIHtcbiAgYm9yZGVyOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWVudSxuYXYsc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxYjFiMWI7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmF1dGhvcml6YXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDA0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjMyMzI0O1xuICBib3JkZXItcmFkaXVzOiAuNGVtO1xuICBib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiAyOTZweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAyMDBweCBhdXRvIDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5hdXRob3JpemF0aW9uOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTgxODE5LCAjNDA0MDQyLCAjYjZiNmI4LCAjNTE1MTUzLCAjMkYyRjJGLCAjMjcyNzI3KTtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBsZWZ0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uYXV0aG9yaXphdGlvbjpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4ICNmZmY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDVweDtcbiAgbGVmdDogMzQlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgd2lkdGg6IDhweDtcbn1cblxuLmluc2V0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxOTE5MWE7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hdXRob3JpemF0aW9uIGgxIHtcbiAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjMDAwO1xufVxuXG4uYXV0aG9yaXphdGlvbiBoMSB7XG4gIGNvbG9yOiAjMDAyMmZmO1xuICBmb250LWZhbWlseTogQXVkaW93aWRlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYXV0aG9yaXphdGlvbiBoMS5wb3dlcm9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBhbmltYXRpb246IGZsaWNrZXIgMXMgZWFzZS1pbi1vdXQgMSBhbHRlcm5hdGUsIG5lb24gMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogMHMsIDFzO1xufVxuXG4uYXV0aG9yaXphdGlvbiBoMTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDEzOHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIHRyYW5zZm9ybTogc2tldygyMGRlZyk7XG5cbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCBoc2xhKDAsMCUsMTAwJSwwLjEpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxoc2xhKDAsMCUsMTAwJSwwLjIpKSwgY29sb3Itc3RvcCgxMDAlLGhzbGEoMCwwJSwxMDAlLDApKSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgaHNsYSgwLDAlLDEwMCUsMC4xKSAwJSxoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgaHNsYSgwLDAlLDEwMCUsMC4xKSAwJSxoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIGhzbGEoMCwwJSwxMDAlLDAuMSkgMCUsaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNDJmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MCApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBoc2xhKDAsMCUsMTAwJSwwLjEpIDAlLGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpO1xuXG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzFmMjEyNCwjMjcyOTJjKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmc6IDhweCA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMWYyMTI0LCMyNzI5MmMpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogOHB4IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06ZGlzYWJsZWQsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmRpc2FibGVkIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmxhYmVsW2Zvcj1yZW1lbWJlcl0ge1xuICBjb2xvcjogI2JiYjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5wLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucC1jb250YWluZXI6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5wLWNvbnRhaW5lciBzcGFuIHtcbiAgY29sb3I6ICMwZDkzZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnN1Ym1pdF9idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjMpLCBpbnNldCAwIDEwcHggMTBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGNvbG9yOiAjOGU4ZThlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjA1cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4wNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDVzIGVhc2U7XG59XG5cbi5zdWJtaXRfYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzhiOGI4YjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3MCwgNzAsIDcwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4zKSwgaW5zZXQgMCAxMHB4IDEwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBjb2xvcjogI2U5ZTllOTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMDVzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjA1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4wNXMgZWFzZTtcbn1cblxuLnN1Ym1pdF9idXR0b246ZGlzYWJsZWQ6aG92ZXIsIC5zdWJtaXRfYnV0dG9uOmRpc2FibGVkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMyksIGluc2V0IDAgMTBweCAxMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbn1cblxuLmRlbmllZCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCBibGFjaztcbiAgYmFja2dyb3VuZDogIzAwMmNlZSAhaW1wb3J0YW50O1xufVxuXG4uc3VibWl0X2J1dHRvbjpob3ZlciwgLnN1Ym1pdF9idXR0b246Zm9jdXMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4zKSwgaW5zZXQgMCAtMTBweCAxMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpob3Zlcjpub3QoW2Rpc2FibGVkXSksXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06aG92ZXI6bm90KFtkaXNhYmxlZF0pLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsXG5sYWJlbDpob3ZlciB+IGlucHV0W3R5cGU9dGV4dF0sXG5sYWJlbDpob3ZlciB+IGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYmFja2dyb3VuZDogIzI3MjkyYztcbn1cbkBrZXlmcmFtZXMgbmVvbiB7XG4gIGZyb20ge1xuICAgIHRleHQtc2hhZG93OlxuICAgICAgMCAwIDIuNXB4ICNmZmYsXG4gICAgICAwIDAgNXB4ICNmZmYsXG4gICAgICAwIDAgNy41cHggI2ZmZixcbiAgICAgIDAgMCAxMHB4ICNCNkZGMDAsXG4gICAgICAwIDAgMTcuNXB4ICNCNkZGMDAsXG4gICAgICAwIDAgMjBweCAjQjZGRjAwLFxuICAgICAgMCAwIDI1cHggI0I2RkYwMCxcbiAgICAgIDAgMCAzNy41cHggI0I2RkYwMDtcbiAgfVxuXG4gIHRvIHtcbiAgICB0ZXh0LXNoYWRvdzpcbiAgICAgIDAgMCAzcHggI2ZmZixcbiAgICAgIDAgMCA3cHggICNmZmYsXG4gICAgICAwIDAgMTNweCAgI2ZmZixcbiAgICAgIDAgMCAxN3B4ICAjQjZGRjAwLFxuICAgICAgMCAwIDMzcHggICNCNkZGMDAsXG4gICAgICAwIDAgMzhweCAgI0I2RkYwMCxcbiAgICAgIDAgMCA0OHB4ICNCNkZGMDAsXG4gICAgICAwIDAgNjNweCAjQjZGRjAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmxpY2tlciB7XG4gIDAlIHtcbiAgICB0ZXh0LXNoYWRvdzpcbiAgICAgIDAgMCAyLjVweCAjZmZmLFxuICAgICAgMCAwIDVweCAjZmZmLFxuICAgICAgMCAwIDcuNXB4ICNmZmYsXG4gICAgICAwIDAgMTBweCAjQjZGRjAwLFxuICAgICAgMCAwIDE3LjVweCAjQjZGRjAwLFxuICAgICAgMCAwIDIwcHggI0I2RkYwMCxcbiAgICAgIDAgMCAyNXB4ICNCNkZGMDAsXG4gICAgICAwIDAgMzcuNXB4ICNCNkZGMDA7XG4gIH1cblxuICAyJSB7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICA4JSB7XG4gICAgdGV4dC1zaGFkb3c6XG4gICAgICAwIDAgMi41cHggI2ZmZixcbiAgICAgIDAgMCA1cHggI2ZmZixcbiAgICAgIDAgMCA3LjVweCAjZmZmLFxuICAgICAgMCAwIDEwcHggI0I2RkYwMCxcbiAgICAgIDAgMCAxNy41cHggI0I2RkYwMCxcbiAgICAgIDAgMCAyMHB4ICNCNkZGMDAsXG4gICAgICAwIDAgMjVweCAjQjZGRjAwLFxuICAgICAgMCAwIDM3LjVweCAjQjZGRjAwO1xuICB9XG5cbiAgMTAlIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgdGV4dC1zaGFkb3c6XG4gICAgICAwIDAgMi41cHggI2ZmZixcbiAgICAgIDAgMCA1cHggI2ZmZixcbiAgICAgIDAgMCA3LjVweCAjZmZmLFxuICAgICAgMCAwIDEwcHggI0I2RkYwMCxcbiAgICAgIDAgMCAxNy41cHggI0I2RkYwMCxcbiAgICAgIDAgMCAyMHB4ICNCNkZGMDAsXG4gICAgICAwIDAgMjVweCAjQjZGRjAwLFxuICAgICAgMCAwIDM3LjVweCAjQjZGRjAwO1xuICB9XG5cbiAgMjIlIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIDI0JSB7XG4gICAgdGV4dC1zaGFkb3c6XG4gICAgICAwIDAgMi41cHggI2ZmZixcbiAgICAgIDAgMCA1cHggI2ZmZixcbiAgICAgIDAgMCA3LjVweCAjZmZmLFxuICAgICAgMCAwIDEwcHggI0I2RkYwMCxcbiAgICAgIDAgMCAxNy41cHggI0I2RkYwMCxcbiAgICAgIDAgMCAyMHB4ICNCNkZGMDAsXG4gICAgICAwIDAgMjVweCAjQjZGRjAwLFxuICAgICAgMCAwIDM3LjVweCAjQjZGRjAwO1xuICB9XG5cbiAgMjglIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIDMyJSB7XG4gICAgdGV4dC1zaGFkb3c6XG4gICAgICAwIDAgMi41cHggI2ZmZixcbiAgICAgIDAgMCA1cHggI2ZmZixcbiAgICAgIDAgMCA3LjVweCAjZmZmLFxuICAgICAgMCAwIDEwcHggI0I2RkYwMCxcbiAgICAgIDAgMCAxNy41cHggI0I2RkYwMCxcbiAgICAgIDAgMCAyMHB4ICNCNkZGMDAsXG4gICAgICAwIDAgMjVweCAjQjZGRjAwLFxuICAgICAgMCAwIDM3LjVweCAjQjZGRjAwO1xuICB9XG5cbiAgMzQlIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIDM2JSB7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICA0MiUge1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdGV4dC1zaGFkb3c6XG4gICAgICAwIDAgMi41cHggI2ZmZixcbiAgICAgIDAgMCA1cHggI2ZmZixcbiAgICAgIDAgMCA3LjVweCAjZmZmLFxuICAgICAgMCAwIDEwcHggI0I2RkYwMCxcbiAgICAgIDAgMCAxNy41cHggI0I2RkYwMCxcbiAgICAgIDAgMCAyMHB4ICNCNkZGMDAsXG4gICAgICAwIDAgMjVweCAjQjZGRjAwLFxuICAgICAgMCAwIDM3LjVweCAjQjZGRjAwO1xuICB9XG59XG5cbi50ZXh0LWRhbmdlcl91c2VybmFtZSB7XG4gIHdpZHRoOiAyNThweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG59XG5cbi50ZXh0LWRhbmdlcl9wYXNzd29yZCB7XG4gIHdpZHRoOiAyNThweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4udGV4dC1kYW5nZXJfaW5jb3JyZWN0IHtcbiAgd2lkdGg6IDI1OHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5hdXRob3JpemF0aW9uIHtcbiAgICBtYXJnaW46IDE3MHB4IGF1dG8gMCBhdXRvO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authorization',
                templateUrl: './authorization.component.html',
                styleUrls: ['./authorization.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Ef5z":
/*!**************************************************!*\
  !*** ./src/app/menu-item/menu-item.component.ts ***!
  \**************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MenuItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) { return new (t || MenuItemComponent)(); };
MenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItemComponent, selectors: [["app-menu-item"]], inputs: { itemName: "itemName" }, decls: 2, vars: 1, consts: [[1, "nav_hover", "nav_menu_item"]], template: function MenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemName);
    } }, styles: [".nav_menu_item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  width: 130px;\n  height: 65px;\n  font-size: 110%;\n  font-weight: bold;\n  font-family: Calibri;\n  color: #464f6a;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.1s ease;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  user-select: none;\n}\n[_nghost-%COMP%]:link, [_nghost-%COMP%]:visited, [_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus, [_nghost-%COMP%]:active {\n  outline: none;\n}\n.nav_menu_item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #848a94;\n}\n.toggle_underline[_ngcontent-%COMP%] {\n  color: white;\n  border-bottom: 3px #1242a8 solid;\n}\n.toggle_underline[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.active[_nghost-%COMP%]   .nav_menu_item[_ngcontent-%COMP%] {\n  color: white;\n  border-bottom: 3px #1242a8 solid;\n}\n[_nghost-%COMP%] {\n  width: 130px;\n}\n@media  (max-width: 500px) {\n  .nav_menu_item[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBR25CLHlCQUF5QjtFQUN6Qix3Q0FBd0M7RUFHeEMseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUNBOzs7OztFQUtFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJtZW51LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZfbWVudV9pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNjVweDtcbiAgZm9udC1zaXplOiAxMTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IENhbGlicmk7XG4gIGNvbG9yOiAjNDY0ZjZhO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuOmhvc3Q6bGluayxcbjpob3N0OnZpc2l0ZWQsXG46aG9zdDpob3Zlcixcbjpob3N0OmZvY3VzLFxuOmhvc3Q6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXZfbWVudV9pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzg0OGE5NDtcbn1cbi50b2dnbGVfdW5kZXJsaW5lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAzcHggIzEyNDJhOCBzb2xpZDtcbn1cbi50b2dnbGVfdW5kZXJsaW5lOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QuYWN0aXZlIC5uYXZfbWVudV9pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAzcHggIzEyNDJhOCBzb2xpZDtcbn1cbjpob3N0IHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuQG1lZGlhICAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubmF2X21lbnVfaXRlbSB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-item',
                templateUrl: './menu-item.component.html',
                styleUrls: ['./menu-item.component.css']
            }]
    }], function () { return []; }, { itemName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/news.service */ "Ado8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article-card/article-card.component */ "lk93");





function HomepageComponent_div_0_app_article_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-article-card", 4);
} if (rf & 2) {
    const article_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", article_r3 == null ? null : article_r3.id)("title", article_r3 == null ? null : article_r3.title)("body", article_r3 == null ? null : article_r3.body);
} }
function HomepageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clearMemory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DELETE ALL FAVORITES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomepageComponent_div_0_app_article_card_3_Template, 1, 3, "app-article-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const articles_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", articles_r1);
} }
class HomepageComponent {
    constructor(newsService) {
        this.newsService = newsService;
    }
    ngOnInit() {
        this.newsService.setData();
    }
    clearMemory() {
        this.newsService.favorites = [];
        this.newsService.favorite$.next([]);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 2, vars: 3, consts: [["class", "articles__container", 4, "ngIf"], [1, "articles__container"], [1, "delete_favorites_button", 3, "click"], [3, "id", "title", "body", 4, "ngFor", "ngForOf"], [3, "id", "title", "body"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomepageComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.newsService.news$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_3__["ArticleCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".articles__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  margin: 140px auto;\n  position: relative;\n}\n.delete_favorites_button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 210px;\n  height: 22px;\n  border: #e8f5ff 2px solid;\n  color: #e8f5ff;\n  border-radius: 30px;\n  font-family: Calibri;\n  font-size: 110%;\n  text-decoration: none;\n  transition: all 0.05s ease;\n  opacity: 0.6;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: -23px auto;\n  z-index: 1;\n}\n.delete_favorites_button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: white;\n  border: white 2px solid;\n  transform: scale(1.02);\n  opacity: 1;\n  z-index: 1;\n}\n@media (max-width: 1193px) {\n  .articles__container[_ngcontent-%COMP%] {\n    max-width: 784px;\n  }\n}\n@media (max-width: 800px) {\n  .articles__container[_ngcontent-%COMP%] {\n    max-width: 784px;\n    justify-content: center;\n  }\n}\n@media (max-width: 500px) {\n  .articles__container[_ngcontent-%COMP%] {\n    margin: 200px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGVzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDE0MHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZWxldGVfZmF2b3JpdGVzX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyOiAjZThmNWZmIDJweCBzb2xpZDtcbiAgY29sb3I6ICNlOGY1ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xuICBmb250LXNpemU6IDExMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDVzIGVhc2U7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAtMjNweCBhdXRvO1xuICB6LWluZGV4OiAxO1xufVxuLmRlbGV0ZV9mYXZvcml0ZXNfYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTNweCkge1xuICAuYXJ0aWNsZXNfX2NvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3ODRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5hcnRpY2xlc19fY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc4NHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmFydGljbGVzX19jb250YWluZXIge1xuICAgIG1hcmdpbjogMjAwcHggYXV0bztcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return [{ type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "black_strip"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".black_strip[_ngcontent-%COMP%] {\n  top:0;\n  position: fixed;\n  z-index: 2;\n  width: 100%;\n  height: 115px;\n  background: linear-gradient(to bottom, #000000 73%, transparent);\n}\n@media  (max-width: 500px) {\n  .black_strip[_ngcontent-%COMP%] {\n    height: 180px;\n    background: linear-gradient(to bottom, #000000 80%, transparent);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsS0FBSztFQUNMLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixnRUFBZ0U7QUFDbEU7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGdFQUFnRTtFQUNsRTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrX3N0cmlwIHtcbiAgdG9wOjA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDAgNzMlLCB0cmFuc3BhcmVudCk7XG59XG5AbWVkaWEgIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5ibGFja19zdHJpcCB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwIDgwJSwgdHJhbnNwYXJlbnQpO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-card/article-card.component */ "lk93");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "Ef5z");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favorites/favorites.component */ "3s+D");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authorization/authorization.component */ "AzdA");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/authorization.service */ "7ZA2");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/news.service */ "Ado8");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");
/* harmony import */ var _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login-box/login-box.component */ "bLfI");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_authorization_service__WEBPACK_IMPORTED_MODULE_12__["AuthorizationService"], _services_news_service__WEBPACK_IMPORTED_MODULE_13__["NewsService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_6__["ArticleCardComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
        _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_8__["MenuItemComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
        _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_10__["FavoritesComponent"],
        _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_11__["AuthorizationComponent"],
        _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_15__["LoginBoxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_6__["ArticleCardComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                    _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_8__["MenuItemComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                    _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_10__["FavoritesComponent"],
                    _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_11__["AuthorizationComponent"],
                    _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_15__["LoginBoxComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ],
                providers: [_services_authorization_service__WEBPACK_IMPORTED_MODULE_12__["AuthorizationService"], _services_news_service__WEBPACK_IMPORTED_MODULE_13__["NewsService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bLfI":
/*!**************************************************!*\
  !*** ./src/app/login-box/login-box.component.ts ***!
  \**************************************************/
/*! exports provided: LoginBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBoxComponent", function() { return LoginBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authorization.service */ "7ZA2");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/news.service */ "Ado8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginBoxComponent {
    constructor(authorizationService, newsService, router) {
        this.authorizationService = authorizationService;
        this.newsService = newsService;
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToAuthorizationPage() {
        this.authorizationService.isAuthorized$.subscribe((value) => {
            if (value) {
                this.router.navigateByUrl('');
            }
        });
    }
    hideItems() {
        this.authorizationService.isAuthorized$.next(false);
        this.authorizationService.isAdmin$.next(false);
        this.authorizationService.isAuthError$.next(false);
    }
    clearMemory() {
        this.newsService.favorites = [];
    }
}
LoginBoxComponent.ɵfac = function LoginBoxComponent_Factory(t) { return new (t || LoginBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginBoxComponent, selectors: [["app-login-box"]], decls: 6, vars: 1, consts: [[1, "login_box"], [1, "guest_name"], [1, "guest"], [1, "avatar", 3, "click"]], template: function LoginBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginBoxComponent_Template_div_click_5_listener() { ctx.navigateToAuthorizationPage(); ctx.hideItems(); return ctx.clearMemory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authorizationService.userName.toUpperCase());
    } }, styles: [".login_box[_ngcontent-%COMP%] {\n  display: flex;\n  height: 70px;\n  margin-right: 15px;\n  z-index: 2;\n  right: 0;\n  top: 0;\n}\n\n.guest_name[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  color: #a6adb7;\n  font-family: Calibri;\n  font-size: 100%;\n  font-weight: bold;\n}\n\n.guest[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Calibri;\n  font-size: 140%;\n  font-weight: bold;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin: 10px 0 0 10px;\n  background: url('/assets/images/log_out_button.png') center;\n  background-size: 102%;\n  border-radius: 50%;\n  transition: all 0.1s ease;\n}\n\n.avatar[_ngcontent-%COMP%]:hover {\n  content: 'LOG OUT';\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\n@media (max-width: 500px) {\n  .login_box[_ngcontent-%COMP%] {\n    margin-right: -3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsMkRBQTJEO0VBQzNELHFCQUFxQjtFQUNyQixrQkFBa0I7RUFHbEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6ImxvZ2luLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiAyO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uZ3Vlc3RfbmFtZSB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGNvbG9yOiAjYTZhZGI3O1xuICBmb250LWZhbWlseTogQ2FsaWJyaTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmd1ZXN0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogQ2FsaWJyaTtcbiAgZm9udC1zaXplOiAxNDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweCAwIDAgMTBweDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9sb2dfb3V0X2J1dHRvbi5wbmcnKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAyJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG59XG4uYXZhdGFyOmhvdmVyIHtcbiAgY29udGVudDogJ0xPRyBPVVQnO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmxvZ2luX2JveCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtM3B4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-box',
                templateUrl: './login-box.component.html',
                styleUrls: ['./login-box.component.css']
            }]
    }], function () { return [{ type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"] }, { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authorization.service */ "7ZA2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authorizationService.isAuthorized$;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authorization.service */ "7ZA2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-item/menu-item.component */ "Ef5z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-box/login-box.component */ "bLfI");







function NavigationComponent_app_menu_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-item", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemName", "AUTHORIZATION");
} }
function NavigationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AUTHORIZATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_app_menu_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-item", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemName", "HOMEPAGE");
} }
function NavigationComponent_app_menu_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-item", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemName", "FAVORITES");
} }
function NavigationComponent_app_login_box_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-box");
} }
class NavigationComponent {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 10, vars: 13, consts: [["id", "navigation__container", 1, "navigation__container"], ["routerLink", "authorization", "routerLinkActive", "active", 3, "itemName", 4, "ngIf"], ["class", "nav_menu_item", 4, "ngIf"], ["routerLink", "homepage", "routerLinkActive", "active", 3, "itemName", 4, "ngIf"], ["routerLink", "favorites", "routerLinkActive", "active", 3, "itemName", 4, "ngIf"], [4, "ngIf"], ["routerLink", "authorization", "routerLinkActive", "active", 3, "itemName"], [1, "nav_menu_item"], ["routerLink", "homepage", "routerLinkActive", "active", 3, "itemName"], ["routerLink", "favorites", "routerLinkActive", "active", 3, "itemName"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_app_menu_item_1_Template, 1, 1, "app-menu-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavigationComponent_app_menu_item_4_Template, 1, 1, "app-menu-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationComponent_app_menu_item_6_Template, 1, 1, "app-menu-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationComponent_app_login_box_8_Template, 1, 0, "app-login-box", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.authorizationService.isAuthorized$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.authorizationService.isAuthorized$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx.authorizationService.isAuthorized$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.authorizationService.isAuthorized$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__["MenuItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _login_box_login_box_component__WEBPACK_IMPORTED_MODULE_5__["LoginBoxComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".navigation__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  width: 90%;\n  max-width: 1030px;\n  margin: auto;\n  position: fixed;\n  z-index: 4;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n@media  (max-width: 500px) {\n  .navigation__container[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n}\n.nav_menu_item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  max-width: 130px;\n  height: 65px;\n  font-size: 110%;\n  font-weight: bold;\n  font-family: Calibri;\n  color: #464f6a;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.1s ease;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0FBQ1I7QUFDQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFHbkIseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUd4Qyx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEwMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5AbWVkaWEgIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5uYXZpZ2F0aW9uX19jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4ubmF2X21lbnVfaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBmb250LXNpemU6IDExMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogQ2FsaWJyaTtcbiAgY29sb3I6ICM0NjRmNmE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"] }]; }, null); })();


/***/ }),

/***/ "lk93":
/*!********************************************************!*\
  !*** ./src/app/article-card/article-card.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCardComponent", function() { return ArticleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authorization.service */ "7ZA2");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/news.service */ "Ado8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ArticleCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleCardComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteNews(ctx_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArticleCardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleCardComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addArticle(ctx_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArticleCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
} }
class ArticleCardComponent {
    constructor(authorizationService, newsService) {
        this.authorizationService = authorizationService;
        this.newsService = newsService;
        this.isFavorites = false;
    }
    deleteNews(id) {
        this.newsService.deleteNewsById(id);
    }
    addArticle(id) {
        this.newsService.addToFavorites(id);
    }
}
ArticleCardComponent.ɵfac = function ArticleCardComponent_Factory(t) { return new (t || ArticleCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"])); };
ArticleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleCardComponent, selectors: [["app-article-card"]], inputs: { id: "id", title: "title", body: "body", isFavorites: "isFavorites" }, decls: 11, vars: 8, consts: [[1, "article_card"], ["class", "close_article", 3, "click", 4, "ngIf"], [1, "article_title"], [1, "article_body"], [1, "shine"], ["class", "favorites_button", 3, "click", 4, "ngIf"], ["class", "favorites_button_clicked", 4, "ngIf"], [1, "favorites_button_clicked_2"], [1, "close_article", 3, "click"], [1, "favorites_button", 3, "click"], [1, "favorites_button_clicked"]], template: function ArticleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleCardComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ArticleCardComponent_div_8_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ArticleCardComponent_div_9_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.authorizationService.isAdmin$) && !ctx.isFavorites);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.id, " ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFavorites && !ctx.newsService.checkFavorites(ctx.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFavorites && ctx.newsService.checkFavorites(ctx.id));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".article_card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  margin: 15px;\n  padding: 20px;\n  max-width: 320px;\n  min-height: 229px;\n  color: #c2c2c2;\n  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.5), 12px 12px 12px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(255,255,255,0.05);\n  background:-webkit-linear-gradient(top,rgba(255,255,255,0.1),transparent);\n  border:1px solid rgba(150,150,150,0.05);\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n  flex: 0 0 320px;\n}\n.article_title[_ngcontent-%COMP%] {\n  display: inline;\n  color: #c2c2c2;\n  text-transform: uppercase;\n  margin: 0.4em;\n}\n.article_body[_ngcontent-%COMP%] {\n  color: #c2c2c2;\n  white-space: normal;\n  text-align: justify;\n  margin: 0.4em 0.4em 2.5em 0.4em;\n}\n.shine[_ngcontent-%COMP%] {\n  width: 1000px;\n  height: 100px;\n  margin-left: -100px;\n  transform: rotate(30deg);\n  background: -webkit-linear-gradient(top, transparent, rgba(200,200,200,0.07),transparent);\n  position: absolute;\n  animation: shine 10s ease-in-out infinite;\n}\n@keyframes shine{\n  0%,100%{\n    margin-top: 1000px;\n\n  }\n  50%{\n    margin-top: -1150px;\n  }\n}\n.close_article[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 20px;\n  top: 20px;\n  background: #c2c2c2;\n  z-index: 1;\n  margin-right: -20px;\n  margin-top: -20px;\n  opacity: 0.2;\n  transition: all 0.15s ease;\n}\n.close_article[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.close_article[_ngcontent-%COMP%]:before, .close_article[_ngcontent-%COMP%]:after {\n  position: absolute;\n  left: 10px;\n  content: ' ';\n  height: 22px;\n  width: 2px;\n  margin-left: -1px;\n  margin-top: -1px;\n  background-color: #333;\n}\n.close_article[_ngcontent-%COMP%]:before {\n  transform: rotate(45deg);\n}\n.close_article[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n}\n.favorites_button[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background-image: url('/assets/images/favorites_black_button.png');\n  background-size: cover;\n  position: absolute;\n  z-index: 0;\n  left: 50%;\n  transform:translate(-50%, -50%);\n  bottom: 0;\n  transition: all 0.15s ease;\n}\n.favorites_button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translate(-46%, -46%);\n  cursor: pointer;\n}\n.favorites_button_clicked[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background-image: url('/assets/images/favorites_color_button.png');\n  background-size: cover;\n  position: absolute;\n  z-index: 0;\n  left: 50%;\n  transform:translate(-50%, -50%);\n  bottom: 0;\n  transition: all 0.15s ease;\n}\n.favorites_button_clicked_2[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background-image: url('/assets/images/favorites_color_button.png');\n  background-size: cover;\n  position: absolute;\n  z-index: -2;\n  left: 50%;\n  transform:translate(-50%, -50%);\n  bottom: 0;\n  transition: all 0.15s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwySEFBMkg7RUFDM0gseUVBQXlFO0VBQ3pFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHlGQUF5RjtFQUN6RixrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjs7RUFFcEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBR1osMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsU0FBUztFQUdULDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsU0FBUztFQUdULDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULCtCQUErQjtFQUMvQixTQUFTO0VBR1QsMEJBQTBCO0FBQzVCIiwiZmlsZSI6ImFydGljbGUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGVfY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWluLWhlaWdodDogMjI5cHg7XG4gIGNvbG9yOiAjYzJjMmMyO1xuICBib3gtc2hhZG93OiAxMnB4IDEycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuNSksIDEycHggMTJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC41KSwgaW5zZXQgNXB4IDVweCAyMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gIGJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMjU1LDI1NSwyNTUsMC4xKSx0cmFuc3BhcmVudCk7XG4gIGJvcmRlcjoxcHggc29saWQgcmdiYSgxNTAsMTUwLDE1MCwwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDAgMCAzMjBweDtcbn1cbi5hcnRpY2xlX3RpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjb2xvcjogI2MyYzJjMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwLjRlbTtcbn1cbi5hcnRpY2xlX2JvZHkge1xuICBjb2xvcjogI2MyYzJjMjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiAwLjRlbSAwLjRlbSAyLjVlbSAwLjRlbTtcbn1cbi5zaGluZSB7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCB0cmFuc3BhcmVudCwgcmdiYSgyMDAsMjAwLDIwMCwwLjA3KSx0cmFuc3BhcmVudCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYW5pbWF0aW9uOiBzaGluZSAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNoaW5le1xuICAwJSwxMDAle1xuICAgIG1hcmdpbi10b3A6IDEwMDBweDtcblxuICB9XG4gIDUwJXtcbiAgICBtYXJnaW4tdG9wOiAtMTE1MHB4O1xuICB9XG59XG4uY2xvc2VfYXJ0aWNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogI2MyYzJjMjtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIG9wYWNpdHk6IDAuMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuLmNsb3NlX2FydGljbGU6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2xvc2VfYXJ0aWNsZTpiZWZvcmUsIC5jbG9zZV9hcnRpY2xlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBjb250ZW50OiAnICc7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4uY2xvc2VfYXJ0aWNsZTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY2xvc2VfYXJ0aWNsZTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uZmF2b3JpdGVzX2J1dHRvbiB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZmF2b3JpdGVzX2JsYWNrX2J1dHRvbi5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuLmZhdm9yaXRlc19idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlKC00NiUsIC00NiUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2b3JpdGVzX2J1dHRvbl9jbGlja2VkIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9mYXZvcml0ZXNfY29sb3JfYnV0dG9uLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG4uZmF2b3JpdGVzX2J1dHRvbl9jbGlja2VkXzIge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Zhdm9yaXRlc19jb2xvcl9idXR0b24ucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTI7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-card',
                templateUrl: './article-card.component.html',
                styleUrls: ['./article-card.component.css']
            }]
    }], function () { return [{ type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"] }, { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFavorites: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorization/authorization.component */ "AzdA");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites/favorites.component */ "3s+D");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");








const routes = [
    { path: '', component: _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_3__["AuthorizationComponent"] },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map