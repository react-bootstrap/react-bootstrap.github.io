(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333);
/* harmony import */ var react_bootstrap_lib_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(371);
/* harmony import */ var react_bootstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(389);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(277);
var _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(277, 1);
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(304);








var MastHead = Object(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__["styled"])(react_bootstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], "MastHead", __webpack_require__(908), "mast-head", "mastHead");
var Content = Object(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__["styled"])('div', "Content", __webpack_require__(910), "content", "content");
var Heading = Object(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__["styled"])('h1', "Heading", __webpack_require__(912), "heading", "heading");
var SubHeading = Object(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__["styled"])('p', "SubHeading", __webpack_require__(914), "sub-heading", "subHeading");
var BrandButton = Object(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__["styled"])(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "BrandButton", __webpack_require__(916), "brand-button", "brandButton");
var FeatureCard = Object(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__["styled"])('div', "FeatureCard", __webpack_require__(918), "feature-card", "featureCard");
/* harmony default export */ __webpack_exports__["default"] = (Object(_withLayout__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(HomePage, _React$Component);

  function HomePage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HomePage.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
      className: "bs-docs-masthead",
      id: "content",
      role: "main"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MastHead, {
      fluid: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, null, "React Bootstrap"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubHeading, null, "The most popular front-end framework", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Rebuilt"), " for React."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BrandButton, {
      size: "lg",
      variant: "brand",
      className: "mr-3 px-5",
      href: "/getting-started"
    }, "Get started"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      size: "lg",
      href: "/components/alerts",
      className: "px-5",
      variant: "outline-light"
    }, "Components")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text-muted mt-3"
    }, "Current version: ", _package_json__WEBPACK_IMPORTED_MODULE_6__.version)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_lib_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      className: "d-flex justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Rebuilt with React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "React bootstrap replaces the Bootstrap javascript. Each component has been built from stratch as a true React components, without uneeded dependencies like jQuery."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "As one of the oldest React libraries, react bootstrap as evolved and grown along-side React, making it an exellent choice as your UI foundation.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Bootstrap at it's core"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the worlds largest UI ecosystem."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "By relying entirely on the Bootstrap stylesheet, React bootstrap, just works with the thousands of bootstrap themes you already love."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Accessible by default"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The React component model gives us more control over form and function of each component."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Each component is implemented with accessibilty in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap."))));
  };

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)));

/***/ }),

/***/ 277:
/***/ (function(module) {

module.exports = {"name":"react-bootstrap","version":"1.0.0-beta.1","description":"Bootstrap 3 components built with React","repository":{"type":"git","url":"react-bootstrap/react-bootstrap"},"homepage":"https://react-bootstrap.github.io/","sideEffects":false,"main":"lib/index.js","jsnext:main":"es/index.js","module":"es/index.js","scripts":{"bootstrap":"yarn && yarn --cwd www","build":"node tools/build.js","build-docs":"yarn --cwd www run build","start":"yarn --cwd www run develop","ci-lint":"eslint --rule 'prettier/prettier: 2'","format":"npm run ci-lint . -- --fix","lint":"npm run ci-lint .","precommit":"lint-staged","release":"rollout","prepublishOnly":"npm run build","tdd":"karma start","test":"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --compilers js:@babel/register test/server/*Spec.js","storybook":"start-storybook -p 6006","build-storybook":"build-storybook"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},"prettier":{"singleQuote":true,"trailingComma":"all"},"files":["CHANGELOG.md","lib","dist","es"],"keywords":["react","ecosystem-react","react-component","bootstrap"],"author":"Stephen J. Collings <stevoland@gmail.com>","license":"MIT","peerDependencies":{"react":"^0.14.9 || >=15.3.0","react-dom":"^0.14.9 || >=15.3.0"},"devDependencies":{"@4c/rollout":"^1.1.0","@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@storybook/react":"^3.4.8","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.0.1","babel-plugin-transform-react-remove-prop-types":"^0.4.15","chai":"^4.1.2","chalk":"^2.3.2","codecov":"^3.1.0","colors":"^1.3.2","create-react-class":"^15.6.3","cross-env":"^5.2.0","enzyme":"^3.6.0","enzyme-adapter-react-16":"^1.5.0","eslint":"^5.5.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.10.0","execa":"^1.0.0","fs-extra":"^7.0.0","husky":"^0.14.3","karma":"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.4","lint-staged":"^7.2.0","lodash":"^4.17.10","mocha":"^5.2.0","prettier":"~1.13.7","react":"^16.5.0","react-dom":"^16.5.0","react-test-renderer":"^16.5.0","release-script":"^1.0.2","sinon":"^6.2.0","sinon-chai":"^3.2.0","webpack":"^4.17.2"},"dependencies":{"@babel/runtime":"^7.0.0","@react-bootstrap/react-popper":"1.2.1","classnames":"^2.2.6","dom-helpers":"^3.2.0","invariant":"^2.2.3","keycode":"^2.1.2","popper.js":"^1.14.3","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^1.2.1","react-overlays":"^1.0.0-beta.17","react-prop-types":"^0.4.0","react-transition-group":"^2.4.0","uncontrollable":"^6.0.0","warning":"^4.0.1"},"release-script":{"bowerRepo":"git@github.com:react-bootstrap/react-bootstrap-bower.git","docsRepo":"git@github.com:react-bootstrap/react-bootstrap.github.io.git","docsRoot":"www/public/"}};

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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Jumbotron.js";





var propTypes = {
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"],

  /** Make the jumbotron full width, and without rounded corners */
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /** @default 'jumbotron' */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
var defaultProps = {
  as: 'div',
  fluid: false
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        fluid = _this$props.fluid,
        bsPrefix = _this$props.bsPrefix,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["as", "className", "fluid", "bsPrefix"]);

    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, classes),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  };

  return Jumbotron;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__[/* createBootstrapComponent */ "a"])(Jumbotron, 'jumbotron'));

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"mastHead":"index-MastHead-module--mast-head--1Njqj"};

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content":"index-Content-module--content---IH1T"};

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"heading":"index-Heading-module--heading--2gtPj"};

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"subHeading":"index-SubHeading-module--sub-heading--n4XOT lead"};

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"brandButton":"index-BrandButton-module--brand-button--3mMb8","focus":"index-BrandButton-module--focus--j1D5K","disabled":"index-BrandButton-module--disabled--3vLzP","active":"index-BrandButton-module--active--1iX6b","show":"index-BrandButton-module--show--134sZ","dropdownToggle":"index-BrandButton-module--dropdown-toggle---Z_bV"};

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"featureCard":"index-FeatureCard-module--feature-card--3ynRH px-4 py-3"};

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-d4f626f76337aa9853cb.js.map