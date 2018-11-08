(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
/* harmony import */ var _components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(122);
/* harmony import */ var _components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(302);
/* harmony import */ var _components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(319);
/* harmony import */ var _examples_Form_Basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(817);
/* harmony import */ var _examples_Form_Basic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_Basic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _examples_Form_TextControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(818);
/* harmony import */ var _examples_Form_TextControls__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_TextControls__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _examples_Form_InputSizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(819);
/* harmony import */ var _examples_Form_InputSizes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_InputSizes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _examples_Form_Plaintext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(820);
/* harmony import */ var _examples_Form_Plaintext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_Plaintext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _examples_Form_Check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(821);
/* harmony import */ var _examples_Form_Check__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_Check__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _examples_Form_CheckInline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(822);
/* harmony import */ var _examples_Form_CheckInline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_CheckInline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _examples_Form_NoLabels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(823);
/* harmony import */ var _examples_Form_NoLabels__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_NoLabels__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _examples_Form_FormGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(824);
/* harmony import */ var _examples_Form_FormGroup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_FormGroup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _examples_Form_GridBasic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(825);
/* harmony import */ var _examples_Form_GridBasic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_GridBasic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _examples_Form_FormRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(826);
/* harmony import */ var _examples_Form_FormRow__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_FormRow__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _examples_Form_GridComplex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(827);
/* harmony import */ var _examples_Form_GridComplex__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_GridComplex__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _examples_Form_Horizontal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(828);
/* harmony import */ var _examples_Form_Horizontal__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_Horizontal__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _examples_Form_ValidationNative__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(829);
/* harmony import */ var _examples_Form_ValidationNative__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_ValidationNative__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _examples_Form_ValidationFormik__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(830);
/* harmony import */ var _examples_Form_ValidationFormik__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_ValidationFormik__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _examples_Form_CheckApi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(831);
/* harmony import */ var _examples_Form_CheckApi__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_examples_Form_CheckApi__WEBPACK_IMPORTED_MODULE_19__);




















/* harmony default export */ __webpack_exports__["default"] = (Object(_withLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function FormControlsSection(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "1",
    id: "forms"
  }, "Forms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<FormControl>'), " component renders a form control with Bootstrap styling. The ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<FormGroup>'), " component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "controlId"), " on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<FormGroup>'), ", and use", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<FormLabel>'), " for the label."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_Basic__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<FormControl>'), " component directly renders the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<input>'), " or other specified component. If you need to access the value of an uncontrolled ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<FormControl>'), ", attach a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ref"), " to it as you would with an uncontrolled input, then call ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ReactDOM.findDOMNode(ref)"), " to get the DOM node. You can then interact with that node as you would with any other uncontrolled input."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If your application contains a large number of form groups, we recommend building a higher-level component encapsulating a complete field group that renders the label, the control, and any other necessary components. We don't provide this out-of-the-box, because the composition of those field groups is too specific to an individual application to admit a good one-size-fits-all solution."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "2",
    id: "forms-controls"
  }, "Form controls"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For textual form controls\u2014like ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "input"), "s, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "select"), "s, and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "textarea"), "s\u2014use the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "FormControl"), " component. FormControl adds some additional styles for general appearance, focus state, sizing, and more."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_TextControls__WEBPACK_IMPORTED_MODULE_6___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-input-sizes"
  }, "Sizing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Use ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size"), " on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<FormControl>'), " to change the size of inputs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_InputSizes__WEBPACK_IMPORTED_MODULE_7___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-input-Plaintext"
  }, "Plaintext"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you want to have elements in your form styled as plain text, use the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "plaintext"), " prop on FormControls to remove the default form field styling and preserve the correct margin and padding."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_Plaintext__WEBPACK_IMPORTED_MODULE_8___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "2",
    id: "forms-form-check"
  }, "Checkboxes and Radios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For the non-textual checkbox and radio controls, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "FormCheck"), ' ', "provides a single component for both types that adds some additional styling and improved layout."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-check-stacked"
  }, "Default (stacked)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with FormCheck."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_Check__WEBPACK_IMPORTED_MODULE_9___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-check-inline"
  }, "Inline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Group checkboxes or radios on the same horizontal row by adding the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "inline"), " prop."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_CheckInline__WEBPACK_IMPORTED_MODULE_10___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-check-inline"
  }, "Without labels"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "When you render a FormCheck without a label (no ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "children"), ") some additional styling is applied to keep the inputs from collapsing.", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Remember to add an ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "aria-label"), " when omitting labels!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_NoLabels__WEBPACK_IMPORTED_MODULE_11___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-check-api"
  }, "Customizing FormCheck rendering"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "When you need tighter control, or want to customize how the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "FormCheck"), " component renders, it may better to use it's constituent parts directly."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "By provided ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "children"), " to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "FormCheck"), " you can forgo the default rendering and handle it yourself. (You can still provide an ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "id"), " to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "FormCheck"), " or", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "FormGroup"), " and have it propogate to the label and input)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_CheckApi__WEBPACK_IMPORTED_MODULE_19___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "2",
    id: "forms-layout"
  }, "Layout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "FormControl and FormCheck both apply ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "display: block"), " with", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "width: 100%"), " to controls, which means they stack vertically by default. Additional components and props can be used to vary this layout on a per-form basis."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-layout-group"
  }, "Form group"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "FormGroup"), " component is the easiest way to add some structure to forms. It provides a flexible container for grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom, but it picks up additional styles in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<Form inline >'), " as needed. Use it with", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "fieldset"), "s, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "div"), "s, or nearly any other element."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You also add the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "controlId"), " prop to accessibly wire the nested label and input together via the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "id"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_FormGroup__WEBPACK_IMPORTED_MODULE_12___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-layout-grid"
  }, "Form grid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "More complex forms can be built using the grid components. Use these for form layouts that require multiple columns, varied widths, and additional alignment options."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_GridBasic__WEBPACK_IMPORTED_MODULE_13___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "4",
    id: "forms-layout-form-row"
  }, "Form row"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You may also swap ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<Row>'), " for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<Form.Row>'), ", a variation of the standard grid row that overrides the default column gutters for tighter and more compact layouts."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_FormRow__WEBPACK_IMPORTED_MODULE_14___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "More complex layouts can also be created with the grid system."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_GridComplex__WEBPACK_IMPORTED_MODULE_15___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-layout-form-row"
  }, "Horizontal forms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You may also swap ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<Row>'), " for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, '<Form.Row>'), ", a variation of the standard grid row that overrides the default column gutters for tighter and more compact layouts."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_Horizontal__WEBPACK_IMPORTED_MODULE_16___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "2",
    id: "forms-validation"
  }, "Validation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Provide valuable, actionable feedback to your users with form validation feedback."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-validation-native"
  }, "Native HTML5 form validation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For native HTML form validation\u2013", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://caniuse.com/#feat=form-validation"
  }, "available in all our supported browsers"), ", the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ":valid"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ":invalid"), " pseudo selectors are used to apply validation styles as well as display feedback messages."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bootstrap scopes the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ":valid"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ":invalid"), ' ', "styles to parent ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".was-validated"), " class, usually applied to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Form"), " (you can use the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "validated"), " prop as a shortcut). Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_ValidationNative__WEBPACK_IMPORTED_MODULE_17___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-validation-libraries"
  }, "Form libraries and server rendered styles."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "It's often beneficial (especially in React) to handle form validation via a library like Formik, or react-formal. In those cases,", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "isValid"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "isInvalid"), " props can be added to form controls to manually apply validation styles. Below is a quick example integrating with", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/jaredpalmer/formik"
  }, "Formik"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Form_ValidationFormik__WEBPACK_IMPORTED_MODULE_18___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "3",
    id: "forms-validation-examples"
  }, "Examples"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: "2",
    id: "forms-api"
  }, "API"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.Form
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.FormRow,
    exportedBy: data.Form
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.FormGroup,
    exportedBy: data.Form
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.FormLabel,
    exportedBy: data.Form
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.FormControl,
    exportedBy: data.Form
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.Feedback,
    exportedBy: data.FormControl
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.FormCheck,
    exportedBy: data.Form
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.FormCheckInput,
    exportedBy: data.FormCheck
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.FormCheckLabel,
    exportedBy: data.FormCheck
  }));
}));
var query = "2840556292";

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(13) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ 277:
/***/ (function(module) {

module.exports = {"name":"react-bootstrap","version":"1.0.0-beta.1","description":"Bootstrap 3 components built with React","repository":{"type":"git","url":"react-bootstrap/react-bootstrap"},"homepage":"https://react-bootstrap.github.io/","sideEffects":false,"main":"lib/index.js","jsnext:main":"es/index.js","module":"es/index.js","scripts":{"bootstrap":"yarn && yarn --cwd www","build":"node tools/build.js","build-docs":"yarn --cwd www run build","start":"yarn --cwd www run develop","ci-lint":"eslint --rule 'prettier/prettier: 2'","format":"npm run ci-lint . -- --fix","lint":"npm run ci-lint .","precommit":"lint-staged","release":"rollout","prepublishOnly":"npm run build","tdd":"karma start","test":"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --compilers js:@babel/register test/server/*Spec.js","storybook":"start-storybook -p 6006","build-storybook":"build-storybook"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},"prettier":{"singleQuote":true,"trailingComma":"all"},"files":["CHANGELOG.md","lib","dist","es"],"keywords":["react","ecosystem-react","react-component","bootstrap"],"author":"Stephen J. Collings <stevoland@gmail.com>","license":"MIT","peerDependencies":{"react":"^0.14.9 || >=15.3.0","react-dom":"^0.14.9 || >=15.3.0"},"devDependencies":{"@4c/rollout":"^1.1.0","@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@storybook/react":"^3.4.8","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.0.1","babel-plugin-transform-react-remove-prop-types":"^0.4.15","chai":"^4.1.2","chalk":"^2.3.2","codecov":"^3.1.0","colors":"^1.3.2","create-react-class":"^15.6.3","cross-env":"^5.2.0","enzyme":"^3.6.0","enzyme-adapter-react-16":"^1.5.0","eslint":"^5.5.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.10.0","execa":"^1.0.0","fs-extra":"^7.0.0","husky":"^0.14.3","karma":"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.4","lint-staged":"^7.2.0","lodash":"^4.17.10","mocha":"^5.2.0","prettier":"~1.13.7","react":"^16.5.0","react-dom":"^16.5.0","react-test-renderer":"^16.5.0","release-script":"^1.0.2","sinon":"^6.2.0","sinon-chai":"^3.2.0","webpack":"^4.17.2"},"dependencies":{"@babel/runtime":"^7.0.0","@react-bootstrap/react-popper":"1.2.1","classnames":"^2.2.6","dom-helpers":"^3.2.0","invariant":"^2.2.3","keycode":"^2.1.2","popper.js":"^1.14.3","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^1.2.1","react-overlays":"^1.0.0-beta.17","react-prop-types":"^0.4.0","react-transition-group":"^2.4.0","uncontrollable":"^6.0.0","warning":"^4.0.1"},"release-script":{"bowerRepo":"git@github.com:react-bootstrap/react-bootstrap-bower.git","docsRepo":"git@github.com:react-bootstrap/react-bootstrap.github.io.git","docsRoot":"www/public/"}};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(116);

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"link":"LinkToSource-Link-module--link--3LrCN"};

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(282)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
var defined = __webpack_require__(28);
var fails = __webpack_require__(10);
var spaces = __webpack_require__(283);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(316),
    baseOrderBy = __webpack_require__(285),
    baseRest = __webpack_require__(292),
    isIterateeCall = __webpack_require__(293);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(115),
    baseIteratee = __webpack_require__(309),
    baseMap = __webpack_require__(286),
    baseSortBy = __webpack_require__(289),
    baseUnary = __webpack_require__(311),
    compareMultiple = __webpack_require__(290),
    identity = __webpack_require__(276);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(287),
    isArrayLike = __webpack_require__(269);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(312),
    createBaseEach = __webpack_require__(288);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(269);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 289:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(291);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(114);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(276),
    overRest = __webpack_require__(317),
    setToString = __webpack_require__(318);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(310),
    isArrayLike = __webpack_require__(269),
    isIndex = __webpack_require__(313),
    isObject = __webpack_require__(305);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"code":"PropTable-Code-module--code--FStF3"};

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"propDescription":"PropTable-PropDescription-module--prop-description--WLXmy"};

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"keyword":"ComponentApi-Keyword-module--keyword--1daqk"};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"code":"ComponentApi-Code-module--code--3OYmz"};

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/lodash/kebabCase.js
var kebabCase = __webpack_require__(278);
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/css-literal-loader/styled.js
var styled = __webpack_require__(17);

// EXTERNAL MODULE: ./src/components/Heading.js
var Heading = __webpack_require__(53);

// EXTERNAL MODULE: ./src/components/Anchor.js
var Anchor = __webpack_require__(80);

// EXTERNAL MODULE: ../src/OverlayTrigger.js
var OverlayTrigger = __webpack_require__(307);

// EXTERNAL MODULE: ../src/Tooltip.js
var Tooltip = __webpack_require__(308);

// EXTERNAL MODULE: ../package.json
var package_0 = __webpack_require__(277);

// CONCATENATED MODULE: ./src/components/LinkToSource.js





var Link = Object(styled["styled"])('a', "Link", __webpack_require__(279), "link", "link");
/* harmony default export */ var LinkToSource = (function (props) {
  var component = props.component;
  var linkToComponentOnGitHub = "//github.com/react-bootstrap/react-bootstrap/tree/v" + package_0["version"] + "/src/" + component + ".js";
  return react_default.a.createElement(OverlayTrigger["a" /* default */], {
    overlay: react_default.a.createElement(Tooltip["a" /* default */], {
      id: "view-" + component + "-source-tooltip"
    }, "View source file")
  }, react_default.a.createElement(Link, {
    href: linkToComponentOnGitHub,
    className: "js-search-exclude"
  }, react_default.a.createElement("i", {
    className: "fas fa-code"
  }), react_default.a.createElement("span", {
    className: "sr-only"
  }, "view source file")));
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.trim.js
var es6_string_trim = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(284);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);

// EXTERNAL MODULE: ./node_modules/lodash/capitalize.js
var capitalize = __webpack_require__(120);
var capitalize_default = /*#__PURE__*/__webpack_require__.n(capitalize);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../src/Badge.js
var Badge = __webpack_require__(314);

// EXTERNAL MODULE: ../src/Table.js
var Table = __webpack_require__(315);

// CONCATENATED MODULE: ./src/components/PropTable.js

















var Code = Object(styled["styled"])('code', "Code", __webpack_require__(294), "code", "code");
var PropDescription = Object(styled["styled"])('div', "PropDescription", __webpack_require__(296), "prop-description", "propDescription");

function cleanDocletValue(str) {
  return str.trim().replace(/^\{/, '').replace(/\}$/, '');
}

function getDisplayTypeName(typeName) {
  if (typeName === 'func') return 'function';
  if (typeName === 'bool') return 'boolean';
  return typeName;
}

function getTypeName(prop) {
  var type = prop.type || {};
  var name = getDisplayTypeName(type.name);
  var doclets = prop.doclets || {};
  if (name === 'custom') return cleanDocletValue(doclets.type || type.raw);
  return name;
}

var PropTable_PropTable =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(PropTable, _React$Component);

  function PropTable() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PropTable.prototype;

  _proto.getType = function getType(prop) {
    var _this = this;

    var type = prop.type || {};
    var name = getDisplayTypeName(type.name);
    var doclets = prop.doclets || {};

    switch (name) {
      case 'object':
        return name;

      case 'union':
        return type.value.reduce(function (current, val, i, list) {
          var item = _this.getType({
            type: val
          });

          if (react_default.a.isValidElement(item)) {
            item = react_default.a.cloneElement(item, {
              key: i
            });
          }

          current = current.concat(item);
          return i === list.length - 1 ? current : current.concat(' | ');
        }, []);

      case 'array':
        {
          var child = this.getType({
            type: type.value
          });
          return react_default.a.createElement("span", null, 'array<', child, '>');
        }

      case 'enum':
        return this.renderEnum(type);

      case 'custom':
        return cleanDocletValue(doclets.type || type.raw);

      default:
        return name;
    }
  };

  _proto._renderRows = function _renderRows(propsData) {
    var _this2 = this;

    return sortBy_default()(propsData, function (_) {
      return _.name === 'bsPrefix' ? 'zzzzzz' : _.name;
    }).filter(function (prop) {
      return prop.type && !prop.doclets.private && !prop.doclets.ignore;
    }).map(function (propData) {
      var name = propData.name,
          description = propData.description,
          doclets = propData.doclets;
      var descHtml = description && description.childMarkdownRemark.html;
      return react_default.a.createElement("tr", {
        key: name,
        className: "prop-table-row"
      }, react_default.a.createElement("td", {
        className: "text-monospace"
      }, name, " ", _this2.renderRequiredBadge(propData)), react_default.a.createElement("td", {
        className: "text-monospace"
      }, react_default.a.createElement("div", null, _this2.getType(propData))), react_default.a.createElement("td", null, _this2.renderDefaultValue(propData)), react_default.a.createElement("td", null, doclets.deprecated && react_default.a.createElement("div", {
        className: "mb-1"
      }, react_default.a.createElement("strong", {
        className: "text-danger"
      }, "Deprecated: " + doclets.deprecated + " ")), _this2.renderControllableNote(propData, name), react_default.a.createElement(PropDescription, {
        dangerouslySetInnerHTML: {
          __html: descHtml
        }
      })));
    });
  };

  _proto.renderDefaultValue = function renderDefaultValue(prop) {
    var value = prop.defaultValue && prop.defaultValue.value;
    if (value == null) return null;
    if (getTypeName(prop) === 'elementType') value = "<" + value.replace(/('|")/g, '') + ">";
    return react_default.a.createElement(Code, null, value);
  };

  _proto.renderControllableNote = function renderControllableNote(prop, propName) {
    var controllable = prop.doclets.controllable;
    var isHandler = getDisplayTypeName(prop.type.name) === 'function';

    if (!controllable) {
      return false;
    }

    var text = isHandler ? react_default.a.createElement("span", null, "controls ", react_default.a.createElement("code", null, controllable)) : react_default.a.createElement("span", null, "controlled by: ", react_default.a.createElement(Code, null, controllable), ", initial prop:", ' ', react_default.a.createElement(Code, null, "default" + capitalize_default()(propName)));
    return react_default.a.createElement("div", {
      className: "mb-2"
    }, react_default.a.createElement("small", null, react_default.a.createElement("em", {
      className: "text-info"
    }, text)));
  };

  _proto.renderEnum = function renderEnum(enumType) {
    var enumValues = enumType.value || [];
    if (!Array.isArray(enumValues)) return enumValues;
    var renderedEnumValues = [];
    enumValues.forEach(function (_ref, i) {
      var value = _ref.value;

      if (i > 0) {
        renderedEnumValues.push(react_default.a.createElement("span", {
          key: i + "c"
        }, " | "));
      }

      renderedEnumValues.push(react_default.a.createElement("code", {
        key: i
      }, value));
    });
    return react_default.a.createElement("span", null, renderedEnumValues);
  };

  _proto.renderRequiredBadge = function renderRequiredBadge(prop) {
    if (!prop.required) {
      return null;
    }

    return react_default.a.createElement(Badge["a" /* default */], null, "required");
  };

  _proto.render = function render() {
    var propsData = this.props.metadata.props || [];

    if (!propsData.length) {
      return react_default.a.createElement("div", {
        className: "text-muted"
      }, react_default.a.createElement("em", null, "There are no public props for this component."));
    }

    return react_default.a.createElement(Table["a" /* default */], {
      bordered: true,
      striped: true,
      className: "bg-white mt-4 mb-5",
      responsive: "sm"
    }, react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, react_default.a.createElement("th", null, "Name"), react_default.a.createElement("th", null, "Type"), react_default.a.createElement("th", null, "Default"), react_default.a.createElement("th", null, "Description"))), react_default.a.createElement("tbody", null, this._renderRows(propsData)));
  };

  return PropTable;
}(react_default.a.Component);

PropTable_PropTable.propTypes = {
  metadata: prop_types_default.a.object.isRequired
};
var metadataFragment = "442639634";
/* harmony default export */ var components_PropTable = (PropTable_PropTable);
// CONCATENATED MODULE: ./src/components/ComponentApi.js
/* unused harmony export metadataFragment */









var Keyword = Object(styled["styled"])('span', "Keyword", __webpack_require__(298), "keyword", "keyword");
var ComponentApi_Code = Object(styled["styled"])('code', "Code", __webpack_require__(300), "code", "code");
var propTypes = {};

var ComponentApi_Import = function Import(_ref) {
  var name = _ref.name;
  return react_default.a.createElement(ComponentApi_Code, {
    "aria-label": "Import code for the " + name + " component"
  }, react_default.a.createElement(Keyword, null, "import"), " ", name, " ", react_default.a.createElement(Keyword, null, "from"), ' ', "'react-bootstrap/lib/", name, "'");
};

function ComponentApi(_ref2) {
  var heading = _ref2.heading,
      metadata = _ref2.metadata,
      exportedBy = _ref2.exportedBy;
  var description = metadata.description,
      name = metadata.displayName;
  var descHtml = description && description.childMarkdownRemark.html;
  var importName = name;

  if (exportedBy) {
    name = exportedBy.displayName + "." + name.split(exportedBy.displayName).pop();
    importName = exportedBy.displayName;
  }

  var id = kebabCase_default()(name) + "-props";
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Heading["default"], {
    h: heading || '3',
    id: id,
    title: name,
    className: "my-3"
  }, react_default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, react_default.a.createElement(Anchor["a" /* default */], {
    target: id
  }, react_default.a.createElement("span", {
    className: " text-monospace"
  }, name)), react_default.a.createElement("span", {
    className: "ml-auto"
  }), react_default.a.createElement(LinkToSource, {
    component: name
  }))), react_default.a.createElement(ComponentApi_Import, {
    name: importName
  }), descHtml && react_default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: descHtml
    }
  }), react_default.a.createElement(components_PropTable, {
    metadata: metadata
  }));
}

ComponentApi.propTypes = propTypes;
/* harmony default export */ var components_ComponentApi = __webpack_exports__["a"] = (ComponentApi);
var ComponentApi_metadataFragment = "1214303309";

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

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<Form>\n  <Form.Group controlId=\"formBasicEmail\">\n    <Form.Label>Email address</Form.Label>\n    <Form.Control type=\"email\" placeholder=\"Enter email\" />\n    <Form.Text className=\"text-muted\">\n      We'll never share your email with anyone else.\n    </Form.Text>\n  </Form.Group>\n\n  <Form.Group controlId=\"formBasicPassword\">\n    <Form.Label>Password</Form.Label>\n    <Form.Control type=\"password\" placeholder=\"Password\" />\n  </Form.Group>\n  <Form.Group id=\"formBasicChecbox\">\n    <Form.Check type=\"checkbox\" label=\"Check me out\" />\n  </Form.Group>\n  <Button variant=\"primary\" type=\"submit\">\n    Submit\n  </Button>\n</Form>;\n";

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<Form>\n  <Form.Group controlId=\"exampleForm.ControlInput1\">\n    <Form.Label>Email address</Form.Label>\n    <Form.Control type=\"email\" placeholder=\"name@example.com\" />\n  </Form.Group>\n  <Form.Group controlId=\"exampleForm.ControlSelect1\">\n    <Form.Label>Example select</Form.Label>\n    <Form.Control as=\"select\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </Form.Control>\n  </Form.Group>\n  <Form.Group controlId=\"exampleForm.ControlSelect2\">\n    <Form.Label>Example multiple select</Form.Label>\n    <Form.Control as=\"select\" multiple>\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </Form.Control>\n  </Form.Group>\n  <Form.Group controlId=\"exampleForm.ControlTextarea1\">\n    <Form.Label>Example textarea</Form.Label>\n    <Form.Control as=\"textarea\" rows=\"3\" />\n  </Form.Group>\n</Form>;\n";

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<>\n  <Form.Control size=\"lg\" type=\"text\" placeholder=\"Large text\" />\n  <br />\n  <Form.Control type=\"text\" placeholder=\"Normal text\" />\n  <br />\n  <Form.Control size=\"sm\" type=\"text\" placeholder=\"Small text\" />\n</>;\n";

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<Form>\n  <Form.Group as={Row} controlId=\"formPlaintextEmail\">\n    <Form.Label column sm=\"2\">\n      Email\n    </Form.Label>\n    <Col sm=\"10\">\n      <Form.Control plaintext readOnly defaultValue=\"email@example.com\" />\n    </Col>\n  </Form.Group>\n\n  <Form.Group as={Row} controlId=\"formPlaintextPassword\">\n    <Form.Label column sm=\"2\">\n      Password\n    </Form.Label>\n    <Col sm=\"10\">\n      <Form.Control type=\"password\" placeholder=\"Password\" />\n    </Col>\n  </Form.Group>\n</Form>;\n";

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<Form>\n  {['checkbox', 'radio'].map(type => (\n    <div key={`default-${type}`} className=\"mb-3\">\n      <Form.Check // prettier-ignore\n        type={type}\n        id={`default-${type}`}\n        label={`default ${type}`}\n      />\n\n      <Form.Check\n        disabled\n        type={type}\n        label={`disabled ${type}`}\n        id={`disabled-default-${type}`}\n      />\n    </div>\n  ))}\n</Form>;\n";

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<Form>\n  {['checkbox', 'radio'].map(type => (\n    <div key={`inline-${type}`} className=\"mb-3\">\n      <Form.Check inline label=\"1\" type={type} id={`inline-${type}-1`} />\n      <Form.Check inline label=\"2\" type={type} id={`inline-${type}-2`} />\n      <Form.Check\n        inline\n        disabled\n        label=\"3 (disabled)\"\n        type={type}\n        id={`inline-${type}-3`}\n      />\n    </div>\n  ))}\n</Form>;\n";

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<>\n  <Form.Check aria-label=\"option 1\" />\n  <Form.Check type=\"radio\" aria-label=\"radio 1\" />\n</>;\n";

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<Form>\n  <Form.Group controlId=\"formGroupEmail\">\n    <Form.Label>Email address</Form.Label>\n    <Form.Control type=\"email\" placeholder=\"Enter email\" />\n  </Form.Group>\n  <Form.Group controlId=\"formGroupPassword\">\n    <Form.Label>Password</Form.Label>\n    <Form.Control type=\"password\" placeholder=\"Password\" />\n  </Form.Group>\n</Form>;\n";

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<Form>\n  <Row>\n    <Col>\n      <Form.Control placeholder=\"First name\" />\n    </Col>\n    <Col>\n      <Form.Control placeholder=\"Last name\" />\n    </Col>\n  </Row>\n</Form>;\n";

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<Form>\n  <Form.Row>\n    <Col>\n      <Form.Control placeholder=\"First name\" />\n    </Col>\n    <Col>\n      <Form.Control placeholder=\"Last name\" />\n    </Col>\n  </Form.Row>\n</Form>;\n";

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<Form>\n  <Form.Row>\n    <Form.Group as={Col} controlId=\"formGridEmail\">\n      <Form.Label>Email</Form.Label>\n      <Form.Control type=\"email\" placeholder=\"Enter email\" />\n    </Form.Group>\n\n    <Form.Group as={Col} controlId=\"formGridPassword\">\n      <Form.Label>Password</Form.Label>\n      <Form.Control type=\"password\" placeholder=\"Password\" />\n    </Form.Group>\n  </Form.Row>\n\n  <Form.Group controlId=\"formGridAddress1\">\n    <Form.Label>Address</Form.Label>\n    <Form.Control placeholder=\"1234 Main St\" />\n  </Form.Group>\n\n  <Form.Group controlId=\"formGridAddress2\">\n    <Form.Label>Address 2</Form.Label>\n    <Form.Control placeholder=\"Apartment, studio, or floor\" />\n  </Form.Group>\n\n  <Form.Row>\n    <Form.Group as={Col} controlId=\"formGridCity\">\n      <Form.Label>City</Form.Label>\n      <Form.Control />\n    </Form.Group>\n\n    <Form.Group as={Col} controlId=\"formGridState\">\n      <Form.Label>State</Form.Label>\n      <Form.Control as=\"select\">\n        <option>Choose...</option>\n        <option>...</option>\n      </Form.Control>\n    </Form.Group>\n\n    <Form.Group as={Col} controlId=\"formGridZip\">\n      <Form.Label>Zip</Form.Label>\n      <Form.Control />\n    </Form.Group>\n  </Form.Row>\n\n  <Form.Group id=\"formGridCheckbox\">\n    <Form.Check type=\"checkbox\" label=\"Check me out\" />\n  </Form.Group>\n\n  <Button variant=\"primary\" type=\"submit\">\n    Submit\n  </Button>\n</Form>;\n";

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<Form>\n  <Form.Group as={Row} controlId=\"formHorizontalEmail\">\n    <Form.Label column sm={2}>\n      Email\n    </Form.Label>\n    <Col sm={10}>\n      <Form.Control type=\"email\" placeholder=\"Email\" />\n    </Col>\n  </Form.Group>\n\n  <Form.Group as={Row} controlId=\"formHorizontalPassword\">\n    <Form.Label column sm={2}>\n      Password\n    </Form.Label>\n    <Col sm={10}>\n      <Form.Control type=\"password\" placeholder=\"Password\" />\n    </Col>\n  </Form.Group>\n  <fieldset>\n    <Form.Group as={Row}>\n      <Form.Label as=\"legend\" column sm={2}>\n        Radios\n      </Form.Label>\n      <Col sm={10}>\n        <Form.Check\n          type=\"radio\"\n          label=\"first radio\"\n          name=\"formHorizontalRadios\"\n          id=\"formHorizontalRadios1\"\n        />\n        <Form.Check\n          type=\"radio\"\n          label=\"second radio\"\n          name=\"formHorizontalRadios\"\n          id=\"formHorizontalRadios2\"\n        />\n        <Form.Check\n          type=\"radio\"\n          label=\"third radio\"\n          name=\"formHorizontalRadios\"\n          id=\"formHorizontalRadios3\"\n        />\n      </Col>\n    </Form.Group>\n  </fieldset>\n  <Form.Group as={Row} controlId=\"formHorizontalCheck\">\n    <Col sm={{ span: 10, offset: 2 }}>\n      <Form.Check label=\"Remember me\" />\n    </Col>\n  </Form.Group>\n\n  <Form.Group as={Row}>\n    <Col sm={{ span: 10, offset: 2 }}>\n      <Button type=\"submit\">Sign in</Button>\n    </Col>\n  </Form.Group>\n</Form>;\n";

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "class FormExample extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.state = { validated: false };\n  }\n\n  handleSubmit(event) {\n    const form = event.currentTarget;\n    if (form.checkValidity() === false) {\n      event.preventDefault();\n      event.stopPropagation();\n    }\n    this.setState({ validated: true });\n  }\n\n  render() {\n    const { validated } = this.state;\n    return (\n      <Form\n        noValidate\n        validated={validated}\n        onSubmit={e => this.handleSubmit(e)}\n      >\n        <Form.Row>\n          <Form.Group as={Col} md=\"4\" controlId=\"validationCustom01\">\n            <Form.Label>First name</Form.Label>\n            <Form.Control\n              required\n              type=\"text\"\n              placeholder=\"First name\"\n              defaultValue=\"Mark\"\n            />\n            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n          </Form.Group>\n          <Form.Group as={Col} md=\"4\" controlId=\"validationCustom02\">\n            <Form.Label>Last name</Form.Label>\n            <Form.Control\n              required\n              type=\"text\"\n              placeholder=\"Last name\"\n              defaultValue=\"Otto\"\n            />\n            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n          </Form.Group>\n          <Form.Group as={Col} md=\"4\" controlId=\"validationCustomUsername\">\n            <Form.Label>Username</Form.Label>\n            <InputGroup>\n              <InputGroup.Prepend>\n                <InputGroup.Text id=\"inputGroupPrepend\">@</InputGroup.Text>\n              </InputGroup.Prepend>\n              <Form.Control\n                type=\"text\"\n                placeholder=\"Username\"\n                aria-describedby=\"inputGroupPrepend\"\n                required\n              />\n              <Form.Control.Feedback type=\"invalid\">\n                Please choose a username.\n              </Form.Control.Feedback>\n            </InputGroup>\n          </Form.Group>\n        </Form.Row>\n        <Form.Row>\n          <Form.Group as={Col} md=\"6\" controlId=\"validationCustom03\">\n            <Form.Label>City</Form.Label>\n            <Form.Control type=\"text\" placeholder=\"City\" required />\n            <Form.Control.Feedback type=\"invalid\">\n              Please provide a valid city.\n            </Form.Control.Feedback>\n          </Form.Group>\n          <Form.Group as={Col} md=\"3\" controlId=\"validationCustom04\">\n            <Form.Label>State</Form.Label>\n            <Form.Control type=\"text\" placeholder=\"State\" required />\n            <Form.Control.Feedback type=\"invalid\">\n              Please provide a valid state.\n            </Form.Control.Feedback>\n          </Form.Group>\n          <Form.Group as={Col} md=\"3\" controlId=\"validationCustom05\">\n            <Form.Label>Zip</Form.Label>\n            <Form.Control type=\"text\" placeholder=\"Zip\" required />\n            <Form.Control.Feedback type=\"invalid\">\n              Please provide a valid zip.\n            </Form.Control.Feedback>\n          </Form.Group>\n        </Form.Row>\n        <Form.Group>\n          <Form.Check\n            required\n            label=\"Agree to terms and conditions\"\n            feedback=\"You must agree before submitting.\"\n          />\n        </Form.Group>\n        <Button type=\"submit\">Submit form</Button>\n      </Form>\n    );\n  }\n}\n\nrender(<FormExample />);\n";

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "const { Formik } = formik;\n\nconst schema = yup.object({\n  firstName: yup.string().required(),\n  lastName: yup.string().required(),\n  username: yup.string().required(),\n  city: yup.string().required(),\n  state: yup.string().required(),\n  zip: yup.string().required(),\n  terms: yup.bool().required(),\n});\n\nfunction FormExample() {\n  return (\n    <Formik\n      validationSchema={schema}\n      onSubmit={console.log}\n      initialValues={{\n        firstName: 'Mark',\n        lastName: 'Otto',\n      }}\n    >\n      {({\n        handleSubmit,\n        handleChange,\n        handleBlur,\n        values,\n        touched,\n        isValid,\n        errors,\n      }) => (\n        <Form noValidate onSubmit={handleSubmit}>\n          <Form.Row>\n            <Form.Group as={Col} md=\"4\" controlId=\"validationFormik01\">\n              <Form.Label>First name</Form.Label>\n              <Form.Control\n                type=\"text\"\n                name=\"firstName\"\n                value={values.firstName}\n                onChange={handleChange}\n                isValid={touched.firstName && !errors.firstName}\n              />\n              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md=\"4\" controlId=\"validationFormik02\">\n              <Form.Label>Last name</Form.Label>\n              <Form.Control\n                type=\"text\"\n                name=\"lastName\"\n                value={values.lastName}\n                onChange={handleChange}\n                isValid={touched.firstName && !errors.lastName}\n              />\n\n              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md=\"4\" controlId=\"validationFormikUsername\">\n              <Form.Label>Username</Form.Label>\n              <InputGroup>\n                <InputGroup.Prepend>\n                  <InputGroup.Text id=\"inputGroupPrepend\">@</InputGroup.Text>\n                </InputGroup.Prepend>\n                <Form.Control\n                  type=\"text\"\n                  placeholder=\"Username\"\n                  aria-describedby=\"inputGroupPrepend\"\n                  name=\"username\"\n                  value={values.username}\n                  onChange={handleChange}\n                  isInvalid={!!errors.username}\n                />\n                <Form.Control.Feedback type=\"invalid\">\n                  {errors.username}\n                </Form.Control.Feedback>\n              </InputGroup>\n            </Form.Group>\n          </Form.Row>\n          <Form.Row>\n            <Form.Group as={Col} md=\"6\" controlId=\"validationFormik03\">\n              <Form.Label>City</Form.Label>\n              <Form.Control\n                type=\"text\"\n                placeholder=\"City\"\n                name=\"city\"\n                value={values.city}\n                onChange={handleChange}\n                isInvalid={!!errors.city}\n              />\n\n              <Form.Control.Feedback type=\"invalid\">\n                {errors.city}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md=\"3\" controlId=\"validationFormik04\">\n              <Form.Label>State</Form.Label>\n              <Form.Control\n                type=\"text\"\n                placeholder=\"State\"\n                name=\"state\"\n                value={values.state}\n                onChange={handleChange}\n                isInvalid={!!errors.state}\n              />\n              <Form.Control.Feedback type=\"invalid\">\n                {errors.state}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md=\"3\" controlId=\"validationFormik05\">\n              <Form.Label>Zip</Form.Label>\n              <Form.Control\n                type=\"text\"\n                placeholder=\"Zip\"\n                name=\"zip\"\n                value={values.zip}\n                onChange={handleChange}\n                isInvalid={!!errors.zip}\n              />\n\n              <Form.Control.Feedback type=\"invalid\">\n                {errors.zip}\n              </Form.Control.Feedback>\n            </Form.Group>\n          </Form.Row>\n          <Form.Group>\n            <Form.Check\n              required\n              name=\"terms\"\n              label=\"Agree to terms and conditions\"\n              onChange={handleChange}\n              isInvalid={!!errors.terms}\n              feedback={errors.terms}\n              id=\"validationFormik0\"\n            />\n          </Form.Group>\n          <Button type=\"submit\">Submit form</Button>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n\nrender(<FormExample />);\n";

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<Form>\n  {['checkbox', 'radio'].map(type => (\n    <div key={type} className=\"mb-3\">\n      <Form.Check id={`check-api-${type}`}>\n        <Form.Check.Input type={type} isValid />\n        <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>\n        <Form.Control.Feedback type=\"valid\">You did it!</Form.Control.Feedback>\n      </Form.Check>\n    </div>\n  ))}\n</Form>;\n";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-components-forms-js-aa05354c5772212c5dea.js.map