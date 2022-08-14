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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Personal-Portfolio-Angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-notification */ "./node_modules/@progress/kendo-angular-notification/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");












const routes = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }
];
const config = {
    useHash: true,
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, config),
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_5__["ProfileModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_8__["NotificationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_5__["ProfileModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_8__["NotificationModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, config),
                    _profile_profile_module__WEBPACK_IMPORTED_MODULE_5__["ProfileModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_8__["NotificationModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 60, vars: 0, consts: [["id", "about", 1, "section"], [1, "container"], ["data-aos", "fade-up", "data-aos-offset", "10", 1, "card"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "card-body"], [1, "h4", "title", "mt-0"], [1, "col-lg-6"], [1, "h4", "mt-0", "title"], [1, "col-sm-3"], [1, "text-uppercase"], [1, "col-sm-8", "DOB"], [1, "row", "mt-4"], [1, "col-sm-4"], [1, "col-sm-8"], [1, "row", "mt-3"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hello, This is Basil T Joy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "From an young age, I've always strived to explore unique opportunities, learning additional skills, or meeting new people.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lover of innovation and tries to improvise everything which will lead to gaining new knowledge, both personally and professionally. Face problems with a smile and tries to solve them as soon as possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "To learn more about me, keep exploring this portfolio or reach out directly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date of Birth :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "December 05, 1996");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "basiltjoy96@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Mobile No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "9497485708");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Thadathil House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Mannathoor PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Muvattupuzha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Kochi, Kerala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Language:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Malayalam, English, Tamil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["span[_ngcontent-%COMP%] {\n  margin-top: 0%;\n}\n\n.DOB[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-left: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9hYm91dC9EOlxcUHJvamVjdHNcXFBlcnNvbmFsX3BvcnRmb2xpby9zcmNcXGFwcFxccHJvZmlsZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbn1cclxuLkRPQntcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG59Iiwic3BhbiB7XG4gIG1hcmdpbi10b3A6IDAlO1xufVxuXG4uRE9CIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EducationComponent {
    constructor() { }
    ngOnInit() {
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 46, vars: 0, consts: [["id", "education", 1, "section"], [1, "container", "cc-education"], [1, "h4", "text-center", "mb-4", "title"], [1, "card"], [1, "row"], ["data-aos", "fade-right", "data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-3"], [1, "card-body", "cc-education-header"], [1, "h5"], ["data-aos", "fade-left", "data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-9"], [1, "card-body"], [1, "category"], [1, "h4"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2021- Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Master's Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Master of Business Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Annamalai University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2021- 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Web Development certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MEARN Stack Web Development Expert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Luminar Techno Lab, Kochi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2015- 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Bachelor's Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Bachelor of Computer Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mount Carmel College, Karukadom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".col-md-3[_ngcontent-%COMP%] {\n  background-color: cadetblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vRDpcXFByb2plY3RzXFxQZXJzb25hbF9wb3J0Zm9saW8vc3JjXFxhcHBcXHByb2ZpbGVcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC0ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XHJcbn0iLCIuY29sLW1kLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 98, vars: 0, consts: [["id", "experience", 1, "section"], [1, "container"], [1, "h4", "text-center", "mb-4", "title"], [1, "col-lg-12"], [1, "timeline"], [1, "timeline-badge", "t2"], [1, "fas", "fa-building"], [1, "timeline-panel", "second"], [1, "row"], [1, "col-lg-9"], [1, "h5", "mt-2", "title"], ["href", "https://www.geojittechnologies.com/"], [1, "h6", "mt-0", "title"], [1, "fas", "fa-briefcase"], [1, "col-lg-4"], [1, "list"], [1, "non_list"], [1, "timeline-badge", "up", "bg-green"], [1, "timeline-panel"], ["href", "https://dentcaredental.com/"], [1, "k-icon", "k-i-user"], [1, "col-lg-5"], [1, "h6", "mt-2", "mx-3", "title"], [1, "col-lg-10"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Geojit Technologies Pvt. Ltd (2022- Present)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Geojit Technologies Pvt. Ltd. (GTL) is a globally focused software solutions provider. GTL provides smart software solutions to help banking and financial enterprises manage change. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Junior Software Engineer- Trainee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "(2022- Present)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Core Functionality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Software Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Technologies and Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "MySql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Git Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "DentCare Dental Lab Pvt. Ltd (2018- 2021)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Dentcare work as a team to provide products and services of superlative quality. Dedicated to elevate the experience of clinicians in the dental fraternity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Administrative associate- All India sales and Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "(2018 - 2020)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Core Functionality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Team Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sales Growth Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Data Analyst- Quality Assurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "(2020 - 2021)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Core Functionality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Data Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Data visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Descriptive and Predictive Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#durationYear[_ngcontent-%COMP%] {\n  margin-top: -5%;\n  margin-left: 79%;\n}\n\n.timeline-panel[_ngcontent-%COMP%] {\n  height: 430px;\n}\n\n.dataAnalyst[_ngcontent-%COMP%] {\n  margin-top: 8%;\n  margin-left: -47%;\n}\n\n.timeline-badge.t2[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n\n#durationYear2[_ngcontent-%COMP%] {\n  margin-top: -5%;\n  margin-left: 72%;\n}\n\n.timeline-panel.second[_ngcontent-%COMP%] {\n  height: 360px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL0Q6XFxQcm9qZWN0c1xcUGVyc29uYWxfcG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9maWxlXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkdXJhdGlvblllYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzklO1xyXG59XHJcblxyXG4udGltZWxpbmUtcGFuZWx7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG59XHJcblxyXG4uZGF0YUFuYWx5c3R7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDclO1xyXG59XHJcblxyXG4udGltZWxpbmUtYmFkZ2UudDJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4jZHVyYXRpb25ZZWFyMntcclxuICAgIG1hcmdpbi10b3A6IC01JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MiU7XHJcbn1cclxuXHJcbi50aW1lbGluZS1wYW5lbC5zZWNvbmR7XHJcbiAgICBoZWlnaHQ6IDM2MHB4O1xyXG59IiwiI2R1cmF0aW9uWWVhciB7XG4gIG1hcmdpbi10b3A6IC01JTtcbiAgbWFyZ2luLWxlZnQ6IDc5JTtcbn1cblxuLnRpbWVsaW5lLXBhbmVsIHtcbiAgaGVpZ2h0OiA0MzBweDtcbn1cblxuLmRhdGFBbmFseXN0IHtcbiAgbWFyZ2luLXRvcDogOCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDclO1xufVxuXG4udGltZWxpbmUtYmFkZ2UudDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4jZHVyYXRpb25ZZWFyMiB7XG4gIG1hcmdpbi10b3A6IC01JTtcbiAgbWFyZ2luLWxlZnQ6IDcyJTtcbn1cblxuLnRpbWVsaW5lLXBhbmVsLnNlY29uZCB7XG4gIGhlaWdodDogMzYwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [[1, "footer"], [1, "container", "text-center"], ["href", "https://www.linkedin.com/in/basil-t-joy-4aa312209", "target", "_blank", 1, "cc-facebook", "btn", "btn-link"], [1, "fab", "fa-linkedin"], ["href", "", "target", "_blank", "title", "Please don't press", 1, "cc-instagram", "btn", "btn-link"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-2x"], ["href", "", "target", "_blank", "title", "Please don't press", 1, "cc-twitter", "btn", "btn-link"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "fa-2x"], ["href", "https://github.com/basiltjoy", "target", "_blank", 1, "cc-github", "btn", "btn-link"], ["aria-hidden", "true", 1, "fa", "fa-github", "fa-2x"], [1, "text-center", "text-muted"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A9 All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cc-instagram[_ngcontent-%COMP%], .cc-twitter[_ngcontent-%COMP%] {\n  position: relative;\n  color: #d40000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9mb290ZXIvRDpcXFByb2plY3RzXFxQZXJzb25hbF9wb3J0Zm9saW8vc3JjXFxhcHBcXHByb2ZpbGVcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2MtaW5zdGFncmFtLC5jYy10d2l0dGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiByZ2IoMjEyLCAwLCAwKTtcclxufVxyXG5cclxuIiwiLmNjLWluc3RhZ3JhbSwgLmNjLXR3aXR0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZDQwMDAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-notification */ "./node_modules/@progress/kendo-angular-notification/__ivy_ngcc__/dist/fesm2015/index.js");



class HeaderComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showNotification();
    }
    ngOnInit() {
    }
    showNotification() {
        this.notificationService.show({
            content: 'Welcome to my Portfolio',
            hideAfter: 600,
            position: { horizontal: 'center', vertical: 'bottom' },
            animation: { type: 'slide', duration: 2500 },
            type: { style: 'info', icon: true }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_1__["NotificationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 25, vars: 0, consts: [[1, "profile-page", "sidebar-collapse"], [1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent", "bg-primary"], [1, "container"], ["scroll_Top", ""], [1, "navbar-expand-lg"], [1, "myname"], ["id", "navigation", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#about", 1, "nav-link", "smooth-scroll"], ["href", "#experience", 1, "nav-link", "smooth-scroll"], ["href", "#projects", 1, "nav-link", "smooth-scroll"], ["href", "#skill", 1, "nav-link", "smooth-scroll"], ["href", "#education", 1, "nav-link", "smooth-scroll"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basil T Joy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".myname[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: white;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  line-height: 3.15;\n  margin-bottom: 3px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9oZWFkZXIvRDpcXFByb2plY3RzXFxQZXJzb25hbF9wb3J0Zm9saW8vc3JjXFxhcHBcXHByb2ZpbGVcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15bmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjE1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ubmF2YmFye1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59IiwiLm15bmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMy4xNTtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4ubmF2YmFyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/hobbies/hobbies.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/hobbies/hobbies.component.ts ***!
  \******************************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HobbiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
HobbiesComponent.ɵfac = function HobbiesComponent_Factory(t) { return new (t || HobbiesComponent)(); };
HobbiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HobbiesComponent, selectors: [["app-hobbies"]], decls: 40, vars: 0, consts: [[1, "section"], ["data-sr-id", "12", 1, "card", 2, "visibility", "visible", "-webkit-transform", "translateY(0) scale(1)", "opacity", "1", "transform", "translateY(0) scale(1)", "opacity", "1", "-webkit-transition", "box-shadow 0.25s ease 0s, -webkit-transform 1.1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1.1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s", "transition", "box-shadow 0.25s ease 0s, transform 1.1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1.1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s"], [1, "h4", "text-center", "mb-2", "title"], [1, "row"], ["data-aos", "fade-right", "data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-6"], [1, "card-body"], [1, "music"], [1, "fas", "fa-music"], ["data-aos", "fade-right", "data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-7", 2, "margin-left", "-30%"], [1, "card-body", 2, "width", "25%"], [1, "travel"], [1, "fas", "fa-bus"], ["data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-6", 2, "margin-left", "-37%"], [1, "card-body", 2, "width", "30%"], [1, "photography"], [1, "fas", "fa-camera"], ["data-aos", "fade-left", "data-aos-offset", "50", "data-aos-duration", "500", 1, "column", 2, "margin-left", "-26%"], [1, "card-body", 2, "width", "130%"], [1, "coding"], [1, "fa", "fa-code", 2, "font-size", "320%"], ["data-aos", "fade-left", "data-aos-offset", "50", "data-aos-duration", "500", 1, "column", 2, "margin-left", "10%"], [1, "card-body", 2, "width", "119%"], [1, "volleyball"], [1, "fas", "fa-volleyball-ball", 2, "font-size", "320%"]], template: function HobbiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Travelling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "volleyball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".section[_ngcontent-%COMP%] {\n  padding: 70px 0;\n  position: relative;\n  background: #FFFFFF;\n  margin-left: 0%;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 929px;\n  margin-left: 103px;\n  height: 180px;\n}\n\nb[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background-color: darkcyan;\n  width: 25%;\n}\n\n.card-body[_ngcontent-%COMP%]   .music[_ngcontent-%COMP%] {\n  margin-left: 6%;\n}\n\n.card-body[_ngcontent-%COMP%]   .music[_ngcontent-%COMP%]   .fa-music[_ngcontent-%COMP%] {\n  font-size: 320%;\n  margin-left: 0%;\n}\n\n.card-body[_ngcontent-%COMP%]   .music[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 6%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background-color: darkcyan;\n}\n\n.card-body[_ngcontent-%COMP%]   .travel[_ngcontent-%COMP%] {\n  margin-left: 0%;\n}\n\n.card-body[_ngcontent-%COMP%]   .travel[_ngcontent-%COMP%]   .fa-bus[_ngcontent-%COMP%] {\n  font-size: 320%;\n  margin-left: 25%;\n}\n\n.card-body[_ngcontent-%COMP%]   .travel[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background-color: darkcyan;\n}\n\n.card-body[_ngcontent-%COMP%]   .photography[_ngcontent-%COMP%] {\n  margin-left: 0%;\n}\n\n.card-body[_ngcontent-%COMP%]   .photography[_ngcontent-%COMP%]   .fa-camera[_ngcontent-%COMP%] {\n  font-size: 320%;\n  margin-left: 25%;\n}\n\n.card-body[_ngcontent-%COMP%]   .photography[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  word-wrap: break-word;\n}\n\n.coding[_ngcontent-%COMP%] {\n  margin-left: 13%;\n}\n\n.volleyball[_ngcontent-%COMP%] {\n  margin-left: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9ob2JiaWVzL0Q6XFxQcm9qZWN0c1xcUGVyc29uYWxfcG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9maWxlXFxob2JiaWVzXFxob2JiaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2hvYmJpZXMvaG9iYmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREFDO0VBQ0csZUFBQTtBQ0VKOztBRERJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNHUjs7QURESTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDR1I7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREFDO0VBQ0csZUFBQTtBQ0VKOztBRERJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxlQUFBO0FDR1I7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREFDO0VBQ0csZUFBQTtBQ0VKOztBRERJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNHUjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9ob2JiaWVzL2hvYmJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbnsgXHJcbiAgICBwYWRkaW5nOiA3MHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIHdpZHRoOiA5MjlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDNweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbmJ7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAubXVzaWN7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiA2JTtcclxuICAgIC5mYS1tdXNpY3tcclxuICAgICAgICBmb250LXNpemU6IDMyMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgYntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gICAgfVxyXG4gfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XHJcbiAudHJhdmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgLmZhLWJ1c3tcclxuICAgICAgICBmb250LXNpemU6IDMyMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIH1cclxuICAgIGJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gfVxyXG59ICBcclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcclxuIC5waG90b2dyYXBoeXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIC5mYS1jYW1lcmF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMjAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcbiAgICBie1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbiB9XHJcbn1cclxuXHJcbi5jb2Rpbmd7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG59XHJcblxyXG4udm9sbGV5YmFsbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XHJcbn1cclxuIiwiLnNlY3Rpb24ge1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA5MjlweDtcbiAgbWFyZ2luLWxlZnQ6IDEwM3B4O1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuICB3aWR0aDogMjUlO1xufVxuLmNhcmQtYm9keSAubXVzaWMge1xuICBtYXJnaW4tbGVmdDogNiU7XG59XG4uY2FyZC1ib2R5IC5tdXNpYyAuZmEtbXVzaWMge1xuICBmb250LXNpemU6IDMyMCU7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cbi5jYXJkLWJvZHkgLm11c2ljIGIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xufVxuLmNhcmQtYm9keSAudHJhdmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuLmNhcmQtYm9keSAudHJhdmVsIC5mYS1idXMge1xuICBmb250LXNpemU6IDMyMCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG4uY2FyZC1ib2R5IC50cmF2ZWwgYiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xufVxuLmNhcmQtYm9keSAucGhvdG9ncmFwaHkge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG4uY2FyZC1ib2R5IC5waG90b2dyYXBoeSAuZmEtY2FtZXJhIHtcbiAgZm9udC1zaXplOiAzMjAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuLmNhcmQtYm9keSAucGhvdG9ncmFwaHkgYiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY29kaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcbn1cblxuLnZvbGxleWJhbGwge1xuICBtYXJnaW4tbGVmdDogMTMlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HobbiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hobbies',
                templateUrl: './hobbies.component.html',
                styleUrls: ['./hobbies.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/intro/intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/intro/intro.component.ts ***!
  \**************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 24, vars: 0, consts: [[1, "profile-page"], [1, "wrapper"], ["filter-color", "orange", 1, "page-header", "page-header-small"], ["data-parallax", "true", 1, "page-header-image", 2, "background-image", "url('assets/images/introduction.jpg')"], [1, "container"], [1, "content-center"], [1, "profile-image"], ["href", ""], ["src", "https://media-exp1.licdn.com/dms/image/C4D03AQFdEGPJda7vRw/profile-displayphoto-shrink_200_200/0/1645970090857?e=1665619200&v=beta&t=D-YlVGNyTIYNNZ8DbrjbTPP-bjfYG-X7t1z_0NjbiDI", "alt", "image"], [1, "h1", "title"], [1, "text-capitalize", "left"], ["href", "https://drive.google.com/file/d/1mJbDLANEo0XOzHOnVeeTj2GZ3CFIqTCp/view?usp=sharing", "target", "_blank", "data-aos", "zoom-in", "data-aos-anchor", "data-aos-anchor", 1, "btn", "btn-primary"], [1, "section"], [1, "button-container"], ["href", "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", "target", "_blank", "rel", "tooltip", "title", "Follow me on Linkedin", 1, "btn", "btn-default", "btn-round", "btn-lg", "btn-icon"], [1, "fa", "fa-linkedin"], ["href", "https://github.com/basiltjoy", "target", "_blank", "rel", "tooltip", "title", "Follow me on Github", 1, "btn", "btn-default", "btn-round", "btn-lg", "btn-icon"], [1, "fa", "fa-github"], ["href", "https://mail.google.com/mail/u/0/#inbox?compose=new", "target", "_blank", "rel", "tooltip", "title", "Connect with me through Mail", 1, "btn", "btn-default", "btn-round", "btn-lg", "btn-icon"], [1, "fas", "fa-envelope"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Basil T Joy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Software Developer & UI/UX Expert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fa-envelope[_ngcontent-%COMP%] {\n  margin-top: 34%;\n  font-size: large;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 240px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9pbnRyby9EOlxcUHJvamVjdHNcXFBlcnNvbmFsX3BvcnRmb2xpby9zcmNcXGFwcFxccHJvZmlsZVxcaW50cm9cXGludHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1lbnZlbG9wZXtcclxuICAgIG1hcmdpbi10b3A6IDM0JTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbn0iLCIuZmEtZW52ZWxvcGUge1xuICBtYXJnaW4tdG9wOiAzNCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyMjVweDtcbiAgaGVpZ2h0OiAyNDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/profile/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "./src/app/profile/hobbies/hobbies.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");












class ProfileComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 2000);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 11, vars: 0, consts: [[1, "page-content"], ["bdColor", "rgba(255,255,255,1)", "size", "medium", "color", "#033d5b", "type", "ball-spin-clockwise"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-spinner", 1);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"], _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__["HobbiesComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/__ivy_ngcc__/fesm2015/ng-snotify.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "./src/app/profile/hobbies/hobbies.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/profile/projects/projects.component.ts");









// import { ContactComponent } from './Projects/contact.component';







class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, providers: [
        { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_2__["ToastDefaults"] },
        ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
        _education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
        _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_12__["HobbiesComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
                ],
                declarations: [
                    _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
                    _education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
                    _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_12__["HobbiesComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"]
                ],
                providers: [
                    { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_2__["ToastDefaults"] },
                    ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/profile/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProjectsComponent_div_20_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_20_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Angular Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_20_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.ToDO = $event; })("change", function ProjectsComponent_div_20_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.ProjectList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Todo Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_20_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.SM = $event; })("change", function ProjectsComponent_div_20_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.ProjectList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Student Management Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_20_div_7_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_20_div_8_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.ToDO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.SM);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ToDO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.SM);
} }
function ProjectsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Javascript Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectsComponent {
    constructor() { }
    ngOnInit() {
        this.sh = 1;
        this.ToDO = true;
    }
    ProjectList(event) {
        if (event.target['name'] == 'ToDo') {
            this.ToDO = true;
            this.SM = false;
        }
        else {
            this.SM = true;
            this.ToDO = false;
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 22, vars: 8, consts: [["id", "projects", 1, "section"], [1, "container"], [1, "h4", "text-center", "mb-4", "title"], [1, "row"], [1, "timeline"], [1, "timeline-panel"], [1, "col-lg-10"], [1, "projects"], ["name", "sh", "type", "radio", 3, "value", "ngModel", "checked", "ngModelChange"], [2, "margin-left", "2%"], [2, "margin-left", "18%"], ["class", "text-center purple", 4, "ngIf"], ["class", "text-center red", 4, "ngIf"], [1, "text-center", "purple"], ["type", "checkbox", "name", "ToDo", "id", "", 3, "ngModel", "ngModelChange", "change"], ["type", "checkbox", "name", "SM", "id", "", 2, "margin-left", "6px", 3, "ngModel", "ngModelChange", "change"], ["class", "ToDoProject", 4, "ngIf"], [4, "ngIf"], [1, "ToDoProject"], ["href", "https://basiltjoy.github.io/ToDo/"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarkrCTO06oUVBBHEBTKC4AloIQDFWisDkXA&usqp=CAU", "alt", "none"], ["href", "https://basiltjoy.github.io/StudentManagement/"], ["src", "https://static.javatpoint.com/blog/images/student-management-system.png", "alt", "none"], [1, "text-center", "red"], ["href", " https://basiltjoy.github.io/Weather/"], ["src", "data:image/jpeg;base64,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", "alt", "none"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.sh = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.sh = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProjectsComponent_div_20_Template, 9, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectsComponent_div_21_Template, 6, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1)("ngModel", ctx.sh)("checked", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0)("ngModel", ctx.sh)("checked", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sh == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sh == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: [".timeline-panel[_ngcontent-%COMP%] {\n  width: calc( 100% - 55px );\n  float: right;\n  border: 1px solid #d4d4d4;\n  border-radius: 22px;\n  padding: 10px;\n  position: relative;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.18);\n}\n\n.timeline-panel[_ngcontent-%COMP%] {\n  width: 950px;\n  height: 500px;\n  scroll-snap-align: center;\n  margin-top: 0%;\n  margin-left: 0%;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  top: 70px;\n  bottom: 170px;\n  position: absolute;\n  width: 0px;\n  background-color: #CCCCCC;\n  left: 25px;\n  margin-left: -1.5px;\n}\n\n#projects[_ngcontent-%COMP%] {\n  margin-top: -32px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 50vh;\n  margin-left: 20px;\n  border-radius: 5px;\n}\n\n.projects[_ngcontent-%COMP%] {\n  margin-left: 330px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9EOlxcUHJvamVjdHNcXFBlcnNvbmFsX3BvcnRmb2xpby9zcmNcXGFwcFxccHJvZmlsZVxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZS1wYW5lbCB7XHJcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDU1cHggKTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYigwIDAgMCAvIDE4JSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiKDAgMCAwIC8gMTglKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLXBhbmVse1xyXG4gICAgd2lkdGg6IDk1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIFxyXG59XHJcbi50aW1lbGluZTpiZWZvcmUge1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgYm90dG9tOiAxNzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XHJcbn1cclxuXHJcbiNwcm9qZWN0c3tcclxuICAgIG1hcmdpbi10b3A6IC0zMnB4O1xyXG59XHJcblxyXG5oNXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOjU1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxufVxyXG5cclxuLnByb2plY3Rze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzMHB4O1xyXG59XHJcbiIsIi50aW1lbGluZS1wYW5lbCB7XG4gIHdpZHRoOiBjYWxjKCAxMDAlIC0gNTVweCApO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi50aW1lbGluZS1wYW5lbCB7XG4gIHdpZHRoOiA5NTBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gIHRvcDogNzBweDtcbiAgYm90dG9tOiAxNzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xuICBsZWZ0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogLTEuNXB4O1xufVxuXG4jcHJvamVjdHMge1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbn1cblxuaDUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogNTUwcHg7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3RzIHtcbiAgbWFyZ2luLWxlZnQ6IDMzMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/skills/skills.component.ts ***!
  \****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 113, vars: 0, consts: [["id", "skill", 1, "section"], [1, "container"], [1, "h3", "text-center", "mb-4", "title", 2, "color", "white"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-bottom", 1, "card"], [1, "card-body"], [1, "h5", "text-center", "text-white", "mb-4", "title"], [1, "row"], [1, "col-md-6"], [1, "progress-container", "progress-primary"], [1, "progress-badge"], [1, "progress"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "85%"], [1, "progress-value"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-primary", 2, "width", "85%"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-primary", 2, "width", "90%"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "75%"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-primary", 2, "width", "75%"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-primary", 2, "width", "80%"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "75%"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "88%"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Microsoft Office Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Power BI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Relational database (SQL) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "HTML,CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Teamwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Creativity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Dedication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "88%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Time MAnagement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Adaptability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  background-color: #7d37b6;\n  padding-bottom: 50px;\n  padding-top: 25px;\n  border-radius: 20px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background-color: #7917c9;\n  border-style: solid;\n}\n\n.progress-container.progress-primary[_ngcontent-%COMP%]   .progress-badge[_ngcontent-%COMP%] {\n  color: #fafafa;\n}\n\n.progress-container.progress-primary[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%] {\n  color: #e5e2e2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9za2lsbHMvRDpcXFByb2plY3RzXFxQZXJzb25hbF9wb3J0Zm9saW8vc3JjXFxhcHBcXHByb2ZpbGVcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDU1LCAxODIpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAyMywgMjAxKTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2dyZXNzLWNvbnRhaW5lci5wcm9ncmVzcy1wcmltYXJ5IC5wcm9ncmVzcy1iYWRnZSB7XHJcbiAgICBjb2xvcjogI2ZhZmFmYTtcclxufVxyXG4ucHJvZ3Jlc3MtY29udGFpbmVyLnByb2dyZXNzLXByaW1hcnkgLnByb2dyZXNzLXZhbHVle1xyXG4gICAgY29sb3I6ICNlNWUyZTI7XHJcbn1cclxuXHJcbiIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QzN2I2O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzkxN2M5O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ucHJvZ3Jlc3MtY29udGFpbmVyLnByb2dyZXNzLXByaW1hcnkgLnByb2dyZXNzLWJhZGdlIHtcbiAgY29sb3I6ICNmYWZhZmE7XG59XG5cbi5wcm9ncmVzcy1jb250YWluZXIucHJvZ3Jlc3MtcHJpbWFyeSAucHJvZ3Jlc3MtdmFsdWUge1xuICBjb2xvcjogI2U1ZTJlMjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/__ivy_ngcc__/fesm2015/ng-snotify.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
    baseUrl: `http://localhost:4200/`,
    snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_0__["SnotifyPosition"].rightTop,
    },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Personal_portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map