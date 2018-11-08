(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(304);



/* harmony default export */ __webpack_exports__["default"] = (Object(_withLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function ReactOverlaysSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    h: "1",
    id: "react-overlays"
  }, "React Overlays"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Low-level components and utilities for building beautiful accessible overlay components"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Often times you may need a more generic or low-level version of a Bootstrap component. Many of the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "react-bootstrap"), " components are built on top of components from", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://react-bootstrap.github.io/react-overlays/"
  }, "react-overlays"), ", if you find yourself at the limit of a Bootstrap component, consider using the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "react-overlays"), " base component directly."));
}));

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withLayout; });
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ApiLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(306);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(321);




function withLayout(Component) {
  return function (props) {
    var pathname = props.location.pathname;
    var Layout = _layouts__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];

    if (pathname.startsWith('/getting-started') || pathname.startsWith('/layout') || pathname.startsWith('/components') || pathname.startsWith('/utilities')) {
      Layout = _layouts_ApiLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
      location: props.location
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, props));
  };
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-utilities-react-overlays-js-e75d26f20b5b4c29b540.js.map