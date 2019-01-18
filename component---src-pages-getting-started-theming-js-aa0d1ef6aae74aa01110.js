(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Callout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(322);
/* harmony import */ var _components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(122);
/* harmony import */ var _components_ReactPlayground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(319);
/* harmony import */ var _examples_Theming_Prefixes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(906);
/* harmony import */ var _examples_Theming_Prefixes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_examples_Theming_Prefixes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _examples_Theming_Variants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(907);
/* harmony import */ var _examples_Theming_Variants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_examples_Theming_Variants__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(304);







/* harmony default export */ __webpack_exports__["default"] = (Object(_withLayout__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(function ThemingSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "1",
    id: "custom-styles"
  }, "Theming and Customizing styles."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Generally, if you stick to the bootstrap defined classes and variants, there isn't anything you need to do to use a custom theme with ReactBootstrap, it just works. There are plently of cases tho where you want to color outside the lines and we try to make that easy to do."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "2",
    id: "custom-styles-variants"
  }, "New variants and sizes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Custom variants and sizes to should follow the leapatternd of the default bootstrap variants, and define css classes matching:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "compontent-*"), ". React bootstrap builds the component classNames in a consistent way that you can rely on. For instance this custom Button."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    codeText: _examples_Theming_Variants__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "2",
    id: "custom-styles-prefix"
  }, "Prefixing components"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In some cases you may need to change the base class \"prefix\" of one or more Components. You can control how a Component prefixes it's classes locallyy by changing the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "bsPrefix"), " prop. Or globally via the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ThemeProvider"), " Component."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Callout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    theme: "warning"
  }, "Changing prefixes is an escape hatch and generally shouldn't be used"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    codeText: _examples_Theming_Prefixes__WEBPACK_IMPORTED_MODULE_4___default.a
  }));
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

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_2__);




var styles = __webpack_require__(323);

var propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['danger', 'warning'])
};

function Callout(_ref) {
  var title = _ref.title,
      children = _ref.children,
      theme = _ref.theme;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    role: "note",
    className: styles[theme || 'warning']
  }, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "h5"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, children));
}

Callout.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Callout);

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"callout":"Callout-styles-module--callout--1_K3h","warning":"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h","danger":"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"};

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

module.exports = "<>\n  {/* Hint: inspect the markup to see how the classes differ */}\n  <ThemeProvider prefixes={{ btn: 'my-btn' }}>\n    <Button variant=\"primary\">My Button</Button>\n  </ThemeProvider>{' '}\n  <Button bsPrefix=\"super-btn\" variant=\"primary\">\n    Super button\n  </Button>\n</>;\n";

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "<>\n  <style type=\"text/css\">\n    {`\n    .btn-flat {\n      background-color: purple;\n      color: white;\n    }\n\n    .btn-xxl {\n      padding: 1rem 1.5rem;\n      font-size: 1.5rem;\n    }\n    `}\n  </style>\n\n  <Button variant=\"flat\" size=\"xxl\">\n    flat button\n  </Button>\n</>;\n";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-getting-started-theming-js-aa0d1ef6aae74aa01110.js.map