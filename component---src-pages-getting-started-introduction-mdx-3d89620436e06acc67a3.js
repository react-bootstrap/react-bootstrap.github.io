(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_frontmatter", function() { return _frontmatter; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(123);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_jason_src_react_bootstrap_www_src_layouts_ApiLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(306);
/* harmony import */ var _components_Callout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(322);
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(128);






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var components = _ref.components,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["components"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "wrapper",
    Layout: _Users_jason_src_react_bootstrap_www_src_layouts_ApiLayout_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    layoutProps: props,
    components: components
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h1",
    components: components,
    props: {
      "id": "introduction"
    }
  }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "lead"
  }, "Learn how to include React Bootstrap in your project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    props: {
      "id": "javascript"
    }
  }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "React-Bootstrap is a complete re-implementation of the Bootstrap\ncomponents using React. It has ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p"
  }, "no dependency on either ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "strong"
  }, "bootstrap.js"), " or jQuery"), ".\nIf you have React setup and React-Bootstrap installed you have everything you need."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "installation"
    }
  }, "Installation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "The best way to consume React Bootstrap is via the npm package which\nyou can install with ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p"
  }, "npm"), " (or yarn if you prefer)."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "If you plan on customizing the Bootstrap Sass files, or don't want\nto use a CDN for the stylesheet, it may helpful to install\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://getbootstrap.com/docs/4.1/getting-started/download/#npm"
    }
  }, "vanilla Bootstrap"), " as well."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "npm install react-bootstrap@next bootstrap\n")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "importing"
    }
  }, "Importing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "You should import individual components from\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p"
  }, "react-bootstrap/lib"), " rather than the entire library.\nDoing so pulls in only the specific components that you use, which\ncan significantly reduce the amount of code you end up sending to\nthe client."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "import Button from 'react-bootstrap/lib/Button';\n\n// or less ideally\nimport { Button } from 'react-bootstrap';\n")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "browser-globals"
    }
  }, "Browser globals"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "We provide ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p"
  }, "react-bootstrap.js"), " and\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p"
  }, "react-bootstrap.min.js"), " bundles with all components\nexported on the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p"
  }, "window.ReactBootstrap"), " object. These\nbundles are available on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://cdnjs.com/libraries/react-bootstrap"
    }
  }, "CDNJS"), ", as\nwell as in the npm package."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-html"
    }
  }, "<script src=\"https://unpkg.com/react/umd/react.production.js\" crossorigin></script>\n<script src=\"https://unpkg.com/react-dom/umd/react-dom.production.js\" crossorigin></script>\n<script src=\"https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js\" crossorigin></script>\n<script>\n  var Alert = ReactBootstrap.Alert;\n</script>\n")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    props: {
      "id": "stylesheets"
    }
  }, "Stylesheets"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "Because React-Bootstrap doesn't depend on a very precise version of\nBootstrap, we don't ship with any included css. However, some\nstylesheet ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p"
  }, "is required"), " to use these components. How\nand which bootstrap styles you include is up to you, but the\nsimplest way is to include the latest styles from the CDN."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-html"
    }
  }, "<!-- Latest compiled and minified CSS -->\n<link\n  rel=\"stylesheet\"\n  href=\"https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css\"\n  integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\"\n  crossorigin=\"anonymous\"\n>\n")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "For more advanced use cases you can also use a bundler like Webpack\nor Browserify to include the css files for you as part of your build\nprocess but that is beyond the scope of this guide. Also see\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://getbootstrap.com/customize/"
    }
  }, "http://getbootstrap.com/customize/"), " for details about customizing stylesheets to match your component\nuse."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "themes"
    }
  }, "Themes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "React-Bootstrap is compatible with existing Bootstrap themes. Just\nfollow the installation instructions for your theme of choice."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Callout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    theme: "danger",
    title: "Watchout!"
  }, "Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    props: {
      "id": "browser-support"
    }
  }, "Browser support"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components
  }, "We aim to support all browsers supported by both\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills"
    }
  }, "React"), "\nand  ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://getbootstrap.com/getting-started/#support"
    }
  }, "Bootstrap")));
});
var _frontmatter = {};

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

/***/ })

}]);
//# sourceMappingURL=component---src-pages-getting-started-introduction-mdx-3d89620436e06acc67a3.js.map