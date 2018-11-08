(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Badge.js";





var Badge =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        pill = _this$props.pill,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "variant", "pill", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, bsPrefix, pill && bsPrefix + "-pill", variant && bsPrefix + "-" + variant),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  };

  return Badge;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Badge.propTypes = {
  /** @default 'badge' */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /**
   * The visual style of the badge
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info|'light'|'dark')}
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Add the `pill` modifier to make badges more rounded with
   * some additional horizontal padding
   */
  pill: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
};
Badge.defaultProps = {
  pill: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__[/* createBootstrapComponent */ "a"])(Badge, 'badge'));

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Table.js";





var Table =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Table, _React$Component);

  function Table() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        striped = _this$props.striped,
        bordered = _this$props.bordered,
        hover = _this$props.hover,
        size = _this$props.size,
        variant = _this$props.variant,
        responsive = _this$props.responsive,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "className", "striped", "bordered", "hover", "size", "variant", "responsive"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, className, variant && bsPrefix + "-" + variant, size && bsPrefix + "-" + size, striped && bsPrefix + "-striped", bordered && bsPrefix + "-bordered", hover && bsPrefix + "-hover");
    var table = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));

    if (responsive) {
      var responsiveClass = bsPrefix + "-responsive";

      if (typeof responsive === 'string') {
        responsiveClass = responsiveClass + "-" + responsive;
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: responsiveClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, table);
    }

    return table;
  };

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Table.propTypes = {
  /**
   * @default 'table'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Adds zebra-striping to any table row within the `<tbody>`.
   */
  striped: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Adds borders on all sides of the table and cells.
   */
  bordered: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Enable a hover state on table rows within a `<tbody>`.
   */
  hover: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Make tables more compact by cutting cell padding in half by setting
   * size as `sm`.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Invert the colors of the table — with light text on dark backgrounds
   * by setting variant as `dark`.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Responsive tables allow tables to be scrolled horizontally with ease.
   * Across every breakpoint, use `responsive` for horizontally
   * scrolling tables. Responsive tables are wrapped automatically in a `div`.
   * Use `responsive="sm"`, `responsive="md"`, `responsive="lg"`, or
   * `responsive="xl"` as needed to create responsive tables up to
   * a particular breakpoint. From that breakpoint and up, the table will
   * behave normally and not scroll horizontally.
   */
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string])
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__[/* createBootstrapComponent */ "a"])(Table, 'table'));

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var src_namespaceObject = {};
__webpack_require__.r(src_namespaceObject);
__webpack_require__.d(src_namespaceObject, "Alert", function() { return src_Alert; });
__webpack_require__.d(src_namespaceObject, "Badge", function() { return Badge["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Breadcrumb", function() { return src_Breadcrumb; });
__webpack_require__.d(src_namespaceObject, "BreadcrumbItem", function() { return src_BreadcrumbItem; });
__webpack_require__.d(src_namespaceObject, "Button", function() { return Button["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "ButtonGroup", function() { return src_ButtonGroup; });
__webpack_require__.d(src_namespaceObject, "ButtonToolbar", function() { return src_ButtonToolbar; });
__webpack_require__.d(src_namespaceObject, "Card", function() { return src_Card; });
__webpack_require__.d(src_namespaceObject, "CardColumns", function() { return CardColumns; });
__webpack_require__.d(src_namespaceObject, "CardDeck", function() { return CardDeck; });
__webpack_require__.d(src_namespaceObject, "CardImg", function() { return src_CardImg; });
__webpack_require__.d(src_namespaceObject, "CardGroup", function() { return CardGroup; });
__webpack_require__.d(src_namespaceObject, "Carousel", function() { return src_Carousel; });
__webpack_require__.d(src_namespaceObject, "CarouselItem", function() { return src_CarouselItem; });
__webpack_require__.d(src_namespaceObject, "CloseButton", function() { return src_CloseButton; });
__webpack_require__.d(src_namespaceObject, "Col", function() { return Col["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Collapse", function() { return Collapse["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Dropdown", function() { return src_Dropdown; });
__webpack_require__.d(src_namespaceObject, "DropdownButton", function() { return src_DropdownButton; });
__webpack_require__.d(src_namespaceObject, "Fade", function() { return Fade["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Form", function() { return src_Form; });
__webpack_require__.d(src_namespaceObject, "FormControl", function() { return FormControl["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "FormCheck", function() { return src_FormCheck; });
__webpack_require__.d(src_namespaceObject, "FormGroup", function() { return src_FormGroup; });
__webpack_require__.d(src_namespaceObject, "FormLabel", function() { return src_FormLabel; });
__webpack_require__.d(src_namespaceObject, "FormText", function() { return src_FormText; });
__webpack_require__.d(src_namespaceObject, "Container", function() { return Container["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Image", function() { return src_Image; });
__webpack_require__.d(src_namespaceObject, "Figure", function() { return src_Figure; });
__webpack_require__.d(src_namespaceObject, "InputGroup", function() { return src_InputGroup; });
__webpack_require__.d(src_namespaceObject, "Jumbotron", function() { return Jumbotron["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "ListGroup", function() { return src_ListGroup; });
__webpack_require__.d(src_namespaceObject, "ListGroupItem", function() { return src_ListGroupItem; });
__webpack_require__.d(src_namespaceObject, "Media", function() { return src_Media; });
__webpack_require__.d(src_namespaceObject, "Modal", function() { return src_Modal; });
__webpack_require__.d(src_namespaceObject, "ModalBody", function() { return src_ModalBody; });
__webpack_require__.d(src_namespaceObject, "ModalDialog", function() { return src_ModalDialog; });
__webpack_require__.d(src_namespaceObject, "ModalFooter", function() { return src_ModalFooter; });
__webpack_require__.d(src_namespaceObject, "ModalTitle", function() { return src_ModalTitle; });
__webpack_require__.d(src_namespaceObject, "Nav", function() { return Nav["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Navbar", function() { return Navbar["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "NavbarBrand", function() { return NavbarBrand["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "NavDropdown", function() { return src_NavDropdown; });
__webpack_require__.d(src_namespaceObject, "NavItem", function() { return NavItem["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Overlay", function() { return Overlay["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "OverlayTrigger", function() { return OverlayTrigger["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "PageItem", function() { return PageItem; });
__webpack_require__.d(src_namespaceObject, "Pagination", function() { return src_Pagination; });
__webpack_require__.d(src_namespaceObject, "Popover", function() { return src_Popover; });
__webpack_require__.d(src_namespaceObject, "ProgressBar", function() { return src_ProgressBar; });
__webpack_require__.d(src_namespaceObject, "ResponsiveEmbed", function() { return src_ResponsiveEmbed; });
__webpack_require__.d(src_namespaceObject, "Row", function() { return Row["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "SafeAnchor", function() { return SafeAnchor["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "SplitButton", function() { return src_SplitButton; });
__webpack_require__.d(src_namespaceObject, "Tab", function() { return src_Tab; });
__webpack_require__.d(src_namespaceObject, "TabContainer", function() { return src_TabContainer; });
__webpack_require__.d(src_namespaceObject, "TabContent", function() { return src_TabContent; });
__webpack_require__.d(src_namespaceObject, "Table", function() { return Table["a" /* default */]; });
__webpack_require__.d(src_namespaceObject, "TabPane", function() { return src_TabPane; });
__webpack_require__.d(src_namespaceObject, "Tabs", function() { return src_Tabs; });
__webpack_require__.d(src_namespaceObject, "ThemeProvider", function() { return ThemeProvider["b" /* default */]; });
__webpack_require__.d(src_namespaceObject, "ToggleButton", function() { return src_ToggleButton; });
__webpack_require__.d(src_namespaceObject, "ToggleButtonGroup", function() { return src_ToggleButtonGroup; });
__webpack_require__.d(src_namespaceObject, "Tooltip", function() { return Tooltip["a" /* default */]; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(646);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(647);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(22);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(38);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/css-literal-loader/styled.js
var styled = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/dom-helpers/query/querySelectorAll.js
var querySelectorAll = __webpack_require__(648);
var querySelectorAll_default = /*#__PURE__*/__webpack_require__.n(querySelectorAll);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(30);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var esm_inheritsLoose = __webpack_require__(273);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var node_modules_classnames = __webpack_require__(274);
var node_modules_classnames_default = /*#__PURE__*/__webpack_require__.n(node_modules_classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var node_modules_prop_types = __webpack_require__(268);
var node_modules_prop_types_default = /*#__PURE__*/__webpack_require__.n(node_modules_prop_types);

// EXTERNAL MODULE: ../node_modules/prop-types-extra/lib/index.js
var lib = __webpack_require__(303);

// EXTERNAL MODULE: ../node_modules/uncontrollable/lib/index.js
var uncontrollable_lib = __webpack_require__(329);
var uncontrollable_lib_default = /*#__PURE__*/__webpack_require__.n(uncontrollable_lib);

// CONCATENATED MODULE: ../src/utils/divWithClassName.js

var _jsxFileName = "/Users/jason/src/react-bootstrap/src/utils/divWithClassName.js";


/* harmony default export */ var divWithClassName = (function (className) {
  return react_default.a.forwardRef(function (p, ref) {
    return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, p, {
      ref: ref,
      className: node_modules_classnames_default()(p.className, className),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }));
  });
});
// EXTERNAL MODULE: ../src/utils/createWithBsPrefix.js
var createWithBsPrefix = __webpack_require__(326);

// EXTERNAL MODULE: ../src/ThemeProvider.js
var ThemeProvider = __webpack_require__(275);

// EXTERNAL MODULE: ../src/Fade.js
var Fade = __webpack_require__(347);

// CONCATENATED MODULE: ../src/CloseButton.js

var CloseButton_jsxFileName = "/Users/jason/src/react-bootstrap/src/CloseButton.js";


var propTypes = {
  label: node_modules_prop_types_default.a.string.isRequired,
  onClick: node_modules_prop_types_default.a.func
};
var defaultProps = {
  label: 'Close'
};

var CloseButton_CloseButton =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(CloseButton, _React$Component);

  function CloseButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CloseButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        onClick = _this$props.onClick;
    return react_default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: onClick,
      __source: {
        fileName: CloseButton_jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react_default.a.createElement("span", {
      "aria-hidden": "true",
      __source: {
        fileName: CloseButton_jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "\xD7"), react_default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: CloseButton_jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, label));
  };

  return CloseButton;
}(react_default.a.Component);

CloseButton_CloseButton.propTypes = propTypes;
CloseButton_CloseButton.defaultProps = defaultProps;
/* harmony default export */ var src_CloseButton = (CloseButton_CloseButton);
// EXTERNAL MODULE: ../src/SafeAnchor.js
var SafeAnchor = __webpack_require__(328);

// CONCATENATED MODULE: ../src/Alert.js



var Alert_jsxFileName = "/Users/jason/src/react-bootstrap/src/Alert.js";











/**
 * @property {AlertHeading} Heading
 * @property {AlertLink} Link
 */

var Alert_Alert =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Alert, _React$Component);

  function Alert() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClose = function (e) {
      _this.props.onClose(false, e);
    };

    return _this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        show = _this$props.show,
        closeLabel = _this$props.closeLabel,
        className = _this$props.className,
        children = _this$props.children,
        variant = _this$props.variant,
        dismissible = _this$props.dismissible,
        Transition = _this$props.transition,
        _ = _this$props.onClose,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "dismissible", "transition", "onClose"]);

    var alert = react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
      role: "alert"
    }, Transition ? props : undefined, {
      className: node_modules_classnames_default()(className, bsPrefix, variant && bsPrefix + "-" + variant, dismissible && bsPrefix + "-dismissible"),
      __source: {
        fileName: Alert_jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), dismissible && react_default.a.createElement(src_CloseButton, {
      onClick: this.handleClose,
      label: closeLabel,
      __source: {
        fileName: Alert_jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), children);
    if (!Transition) return show ? alert : null;
    return react_default.a.createElement(Transition, Object(esm_extends["a" /* default */])({
      unmountOnExit: true
    }, props, {
      in: show,
      __source: {
        fileName: Alert_jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), alert);
  };

  return Alert;
}(react_default.a.Component);

Alert_Alert.propTypes = {
  /**
   * @default 'alert'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * The Alert visual variant
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}
   */
  variant: node_modules_prop_types_default.a.string,

  /**
   * Renders a properly aligned dismiss button, as well as
   * adding extra horizontal padding to the Alert.
   */
  dismissible: node_modules_prop_types_default.a.bool,

  /**
   * Controls the visual state of the Alert.
   *
   * @controllable onClose
   */
  show: node_modules_prop_types_default.a.bool,

  /**
   * Callback fired when alert is closed.
   *
   * @controllable show
   */
  onClose: node_modules_prop_types_default.a.func,

  /**
   * Sets the text for alert close button.
   */
  closeLabel: node_modules_prop_types_default.a.string,

  /** A `react-transition-group` Transition component used to animate the Alert on dismissal. */
  transition: lib["elementType"]
};
Alert_Alert.defaultProps = {
  show: true,
  transition: Fade["a" /* default */],
  closeLabel: 'Close alert'
};
var DecoratedAlert = uncontrollable_lib_default()(Object(ThemeProvider["a" /* createBootstrapComponent */])(Alert_Alert, 'alert'), {
  show: 'onClose'
});
var DivStyledAsH4 = divWithClassName('h4');
DecoratedAlert.Link = Object(createWithBsPrefix["a" /* default */])('alert-link', {
  Component: SafeAnchor["a" /* default */]
});
DecoratedAlert.Heading = Object(createWithBsPrefix["a" /* default */])('alert-heading', {
  Component: DivStyledAsH4
});
/* harmony default export */ var src_Alert = (DecoratedAlert);
// EXTERNAL MODULE: ../src/Badge.js
var Badge = __webpack_require__(314);

// CONCATENATED MODULE: ../src/BreadcrumbItem.js



var BreadcrumbItem_jsxFileName = "/Users/jason/src/react-bootstrap/src/BreadcrumbItem.js";







var BreadcrumbItem_BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadcrumbItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "active", "className", "as"]);

    var href = props.href,
        title = props.title,
        target = props.target,
        elementProps = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["href", "title", "target"]);

    var linkProps = {
      href: href,
      title: title,
      target: target
    };
    return react_default.a.createElement(Component, {
      className: node_modules_classnames_default()(bsPrefix, className, {
        active: active
      }),
      "aria-current": active ? 'page' : undefined,
      __source: {
        fileName: BreadcrumbItem_jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, active ? react_default.a.createElement("span", Object(esm_extends["a" /* default */])({}, elementProps, {
      className: node_modules_classnames_default()({
        active: active
      }),
      __source: {
        fileName: BreadcrumbItem_jsxFileName,
        lineNumber: 53
      },
      __self: this
    })) : react_default.a.createElement(SafeAnchor["a" /* default */], Object(esm_extends["a" /* default */])({}, elementProps, linkProps, {
      __source: {
        fileName: BreadcrumbItem_jsxFileName,
        lineNumber: 55
      },
      __self: this
    })));
  };

  return BreadcrumbItem;
}(react_default.a.Component);

BreadcrumbItem_BreadcrumbItem.propTypes = {
  /**
   * @default 'breadcrumb-item'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Adds a visual "active" state to a Breadcrumb
   * Item and disables the link.
   */
  active: node_modules_prop_types_default.a.bool,

  /**
   * `href` attribute for the inner `a` element
   */
  href: node_modules_prop_types_default.a.string,

  /**
   * `title` attribute for the inner `a` element
   */
  title: node_modules_prop_types_default.a.node,

  /**
   * `target` attribute for the inner `a` element
   */
  target: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
BreadcrumbItem_BreadcrumbItem.defaultProps = {
  active: false,
  as: 'li'
};
/* harmony default export */ var src_BreadcrumbItem = (Object(ThemeProvider["a" /* createBootstrapComponent */])(BreadcrumbItem_BreadcrumbItem, 'breadcrumb-item'));
// CONCATENATED MODULE: ../src/Breadcrumb.js



var Breadcrumb_jsxFileName = "/Users/jason/src/react-bootstrap/src/Breadcrumb.js";







var Breadcrumb_Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Breadcrumb, _React$Component);

  function Breadcrumb() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Breadcrumb.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        listProps = _this$props.listProps,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "listProps", "children", "label", "as"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
      "aria-label": label,
      className: className
    }, props, {
      __source: {
        fileName: Breadcrumb_jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react_default.a.createElement("ol", Object(esm_extends["a" /* default */])({
      role: "navigation"
    }, listProps, {
      className: node_modules_classnames_default()(bsPrefix, listProps.className),
      __source: {
        fileName: Breadcrumb_jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), children));
  };

  return Breadcrumb;
}(react_default.a.Component);

Breadcrumb_Breadcrumb.propTypes = {
  /**
   * @default 'breadcrumb'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * ARIA label for the nav element
   * https://www.w3.org/TR/wai-aria-practices/#breadcrumb
   */
  label: node_modules_prop_types_default.a.string,

  /**
   * Additional props passed as-is to the underlying `<ul>` element
   */
  listProps: node_modules_prop_types_default.a.object,
  as: lib["elementType"]
};
Breadcrumb_Breadcrumb.defaultProps = {
  label: 'breadcrumb',
  listProps: {},
  as: 'nav'
};
var DecoratedBreadcrumb = Object(ThemeProvider["a" /* createBootstrapComponent */])(Breadcrumb_Breadcrumb, 'breadcrumb');
DecoratedBreadcrumb.Item = src_BreadcrumbItem;
/* harmony default export */ var src_Breadcrumb = (DecoratedBreadcrumb);
// EXTERNAL MODULE: ../src/Button.js
var Button = __webpack_require__(333);

// CONCATENATED MODULE: ../src/ButtonGroup.js



var ButtonGroup_jsxFileName = "/Users/jason/src/react-bootstrap/src/ButtonGroup.js";






var ButtonGroup_ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ButtonGroup, _React$Component);

  function ButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        toggle = _this$props.toggle,
        vertical = _this$props.vertical,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);

    var baseClass = bsPrefix;
    if (vertical) baseClass = bsPrefix + "-vertical";
    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, baseClass, size && bsPrefix + "-" + size, toggle && bsPrefix + "-toggle"),
      __source: {
        fileName: ButtonGroup_jsxFileName,
        lineNumber: 64
      },
      __self: this
    }));
  };

  return ButtonGroup;
}(react_default.a.Component);

ButtonGroup_ButtonGroup.propTypes = {
  /**
   * @default 'btn-group'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Sets the size for all Buttons in the group.
   *
   * @type ('sm'|'lg')
   */
  size: node_modules_prop_types_default.a.string,

  /** Make the set of Buttons appear vertically stacked. */
  vertical: node_modules_prop_types_default.a.bool,

  /**
   * Display as a button toggle group.
   *
   * (Generally it's better to use `ToggleButtonGroup` directly)
   */
  toggle: node_modules_prop_types_default.a.bool,

  /**
   * An ARIA role describing the button group. Usually the default
   * "group" role is fine. An `aria-label` or `aria-labelledby`
   * prop is also recommended.
   */
  role: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
ButtonGroup_ButtonGroup.defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  as: 'div'
};
/* harmony default export */ var src_ButtonGroup = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ButtonGroup_ButtonGroup, 'btn-group'));
// CONCATENATED MODULE: ../src/ButtonToolbar.js



var ButtonToolbar_jsxFileName = "/Users/jason/src/react-bootstrap/src/ButtonToolbar.js";





var ButtonToolbar_ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className"]);

    return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: ButtonToolbar_jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  };

  return ButtonToolbar;
}(react_default.a.Component);

ButtonToolbar_ButtonToolbar.propTypes = {
  /**
   * @default 'btn-toolbar'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * The ARIA role describing the button toolbar. Generally the default
   * "toolbar" role is correct. An `aria-label` or `aria-labelledby`
   * prop is also recommended.
   */
  role: node_modules_prop_types_default.a.string
};
ButtonToolbar_ButtonToolbar.defaultProps = {
  role: 'toolbar'
};
/* harmony default export */ var src_ButtonToolbar = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ButtonToolbar_ButtonToolbar, 'btn-toolbar'));
// EXTERNAL MODULE: ../src/CardContext.js
var CardContext = __webpack_require__(449);

// CONCATENATED MODULE: ../src/CardImg.js



var CardImg_jsxFileName = "/Users/jason/src/react-bootstrap/src/CardImg.js";






var CardImg_CardImg =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(CardImg, _React$Component);

  function CardImg() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CardImg.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        variant = _this$props.variant,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "variant", "as"]);

    var baseClass = variant ? bsPrefix + "-" + variant : bsPrefix;
    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
      className: node_modules_classnames_default()(baseClass, className)
    }, props, {
      __source: {
        fileName: CardImg_jsxFileName,
        lineNumber: 42
      },
      __self: this
    }));
  };

  return CardImg;
}(react_default.a.Component);

CardImg_CardImg.propTypes = {
  /**
   * @default 'card-img'
   */
  bsPrefix: node_modules_prop_types_default.a.string.isRequired,

  /**
   * Defines image position inside
   * the card.
   *
   * @type {('top'|'bottom')}
   */
  variant: node_modules_prop_types_default.a.oneOf(['top', 'bottom', null]),
  as: lib["elementType"]
};
CardImg_CardImg.defaultProps = {
  as: 'img',
  variant: null
};
/* harmony default export */ var src_CardImg = (Object(ThemeProvider["a" /* createBootstrapComponent */])(CardImg_CardImg, 'card-img'));
// CONCATENATED MODULE: ../src/Card.js



var Card_jsxFileName = "/Users/jason/src/react-bootstrap/src/Card.js";









var CardBody = Object(createWithBsPrefix["a" /* default */])('card-body');

var Card_Card =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Card, _React$Component);

  function Card() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    return _this;
  }

  Card.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var bsPrefix = _ref.bsPrefix;
    return {
      cardContext: {
        cardHeaderBsPrefix: bsPrefix + "-header"
      }
    };
  };

  var _proto = Card.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        bg = _this$props.bg,
        text = _this$props.text,
        border = _this$props.border,
        body = _this$props.body,
        children = _this$props.children,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "as", "bg", "text", "border", "body", "children"]);

    var classes = node_modules_classnames_default()(className, bsPrefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border);
    return react_default.a.createElement(CardContext["a" /* default */].Provider, {
      value: this.state.cardContext,
      __source: {
        fileName: Card_jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
      className: classes
    }, props, {
      __source: {
        fileName: Card_jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), body ? react_default.a.createElement(CardBody, {
      __source: {
        fileName: Card_jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, children) : children));
  };

  return Card;
}(react_default.a.Component);

Card_Card.propTypes = {
  /**
   * @default 'card'
   */
  bsPrefix: node_modules_prop_types_default.a.string.isRequired,

  /**
   * Sets card background
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
  bg: node_modules_prop_types_default.a.string,

  /**
   * Sets card text color
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'|'white'|'muted')}
   */
  text: node_modules_prop_types_default.a.string,

  /**
   * Sets card border color
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
  border: node_modules_prop_types_default.a.string,

  /**
   * When this prop is set, it creates a Card with a Card.Body inside
   * passing the children directly to it
   */
  body: node_modules_prop_types_default.a.bool,
  as: lib["elementType"]
};
Card_Card.defaultProps = {
  as: 'div',
  body: false
};
var DivStyledAsH5 = divWithClassName('h5');
var DivStyledAsH6 = divWithClassName('h6');
var DecoratedCard = Object(ThemeProvider["a" /* createBootstrapComponent */])(Card_Card, 'card');
DecoratedCard.Img = src_CardImg;
DecoratedCard.Title = Object(createWithBsPrefix["a" /* default */])('card-title', {
  Component: DivStyledAsH5
});
DecoratedCard.Subtitle = Object(createWithBsPrefix["a" /* default */])('card-subtitle', {
  Component: DivStyledAsH6
});
DecoratedCard.Body = CardBody;
DecoratedCard.Link = Object(createWithBsPrefix["a" /* default */])('card-link', {
  Component: 'a'
});
DecoratedCard.Text = Object(createWithBsPrefix["a" /* default */])('card-text', {
  Component: 'p'
});
DecoratedCard.Header = Object(createWithBsPrefix["a" /* default */])('card-header');
DecoratedCard.Footer = Object(createWithBsPrefix["a" /* default */])('card-footer');
DecoratedCard.ImgOverlay = Object(createWithBsPrefix["a" /* default */])('card-img-overlay');
/* harmony default export */ var src_Card = (DecoratedCard);
// CONCATENATED MODULE: ../src/CardColumns.js

/* harmony default export */ var CardColumns = (Object(createWithBsPrefix["a" /* default */])('card-columns'));
// CONCATENATED MODULE: ../src/CardDeck.js

/* harmony default export */ var CardDeck = (Object(createWithBsPrefix["a" /* default */])('card-deck'));
// CONCATENATED MODULE: ../src/CardGroup.js

/* harmony default export */ var CardGroup = (Object(createWithBsPrefix["a" /* default */])('card-group'));
// EXTERNAL MODULE: ../node_modules/dom-helpers/style/index.js
var dom_helpers_style = __webpack_require__(357);
var style_default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style);

// EXTERNAL MODULE: ../node_modules/dom-helpers/transition/index.js
var dom_helpers_transition = __webpack_require__(709);
var transition_default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition);

// CONCATENATED MODULE: ../src/CarouselCaption.js



var CarouselCaption_jsxFileName = "/Users/jason/src/react-bootstrap/src/CarouselCaption.js";





var CarouselCaption_propTypes = {
  /**
   * @default 'carousel-caption'
   */
  bsPrefix: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
var CarouselCaption_defaultProps = {
  as: 'div'
};

var CarouselCaption_CarouselCaption =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(CarouselCaption, _React$Component);

  function CarouselCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["as", "className", "bsPrefix"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: CarouselCaption_jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  return CarouselCaption;
}(react_default.a.Component);

CarouselCaption_CarouselCaption.propTypes = CarouselCaption_propTypes;
CarouselCaption_CarouselCaption.defaultProps = CarouselCaption_defaultProps;
/* harmony default export */ var src_CarouselCaption = (Object(ThemeProvider["a" /* createBootstrapComponent */])(CarouselCaption_CarouselCaption, 'carousel-caption'));
// CONCATENATED MODULE: ../src/CarouselItem.js



var CarouselItem_jsxFileName = "/Users/jason/src/react-bootstrap/src/CarouselItem.js";




var CarouselItem_propTypes = {
  /**
   * @default 'carousel-item'
   */
  bsPrefix: node_modules_prop_types_default.a.string
};

var CarouselItem_CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(CarouselItem, _React$Component);

  function CarouselItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        children = _this$props.children,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "children", "className"]);

    return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: CarouselItem_jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), children);
  };

  return CarouselItem;
}(react_default.a.Component);

CarouselItem_CarouselItem.propTypes = CarouselItem_propTypes;
/* harmony default export */ var src_CarouselItem = (Object(ThemeProvider["a" /* createBootstrapComponent */])(CarouselItem_CarouselItem, 'carousel-item'));
// CONCATENATED MODULE: ../src/utils/ElementChildren.js

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  var index = 0;
  return react_default.a.Children.map(children, function (child) {
    return react_default.a.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  var index = 0;
  react_default.a.Children.forEach(children, function (child) {
    if (react_default.a.isValidElement(child)) func(child, index++);
  });
}


// EXTERNAL MODULE: ../src/utils/triggerBrowserReflow.js
var triggerBrowserReflow = __webpack_require__(399);

// CONCATENATED MODULE: ../src/Carousel.js



var Carousel_jsxFileName = "/Users/jason/src/react-bootstrap/src/Carousel.js";













var Carousel_countChildren = function countChildren(c) {
  return react_default.a.Children.toArray(c).filter(react_default.a.isValidElement).length;
}; // TODO: `slide` should be `animate`.


var Carousel_propTypes = {
  /**
   * @default 'carousel'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Enables animation on the Carousel as it transitions between slides.
   */
  slide: node_modules_prop_types_default.a.bool,

  /** Cross fade slides instead of the default slide animation */
  fade: node_modules_prop_types_default.a.bool,

  /** Slides will loop to the start when the last one transitions */
  wrap: node_modules_prop_types_default.a.bool,

  /**
   * Show a set of slide position indicators
   */
  indicators: node_modules_prop_types_default.a.bool,

  /**
   * The amount of time to delay between automatically cycling an item.
   * If `null`, carousel will not automatically cycle.
   */
  interval: node_modules_prop_types_default.a.number,

  /**
   * Show the Carousel previous and next arrows for changing the current slide
   */
  controls: node_modules_prop_types_default.a.bool,

  /**
   * Temporarily puase the slide interval when the mouse hovers over a slide.
   */
  pauseOnHover: node_modules_prop_types_default.a.bool,

  /** Enable keyboard navigation via the Arrow keys for changing slides */
  keyboard: node_modules_prop_types_default.a.bool,

  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: any, direction: 'prev' | 'next', ?event: Object) => any
   * ```
   *
   * @controllable activeIndex
   */
  onSelect: node_modules_prop_types_default.a.func,

  /** A callback fired after a slide transitions in */
  onSlideEnd: node_modules_prop_types_default.a.func,

  /**
   * Controls the current visible slide
   *
   * @controllable onSelect
   */
  activeIndex: node_modules_prop_types_default.a.number,

  /** Override the default button icon for the "previous" control */
  prevIcon: node_modules_prop_types_default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: node_modules_prop_types_default.a.string,

  /** Override the default button icon for the "next" control */
  nextIcon: node_modules_prop_types_default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: node_modules_prop_types_default.a.string
};
var Carousel_defaultProps = {
  slide: true,
  fade: false,
  interval: 5000,
  keyboard: true,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  activeIndex: 0,
  prevIcon: react_default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon",
    __source: {
      fileName: Carousel_jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }),
  prevLabel: 'Previous',
  nextIcon: react_default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon",
    __source: {
      fileName: Carousel_jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }),
  nextLabel: 'Next'
};

var Carousel_Carousel =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Carousel, _React$Component);

  function Carousel(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleSlideEnd = function () {
      var pendingIndex = _this._pendingIndex;
      _this._isSliding = false;
      _this._pendingIndex = null;
      if (pendingIndex != null) _this.to(pendingIndex);else _this.cycle();
    };

    _this.handleMouseOut = function () {
      _this.cycle();
    };

    _this.handleMouseOver = function () {
      if (_this.props.pauseOnHover) _this.pause();
    };

    _this.handleKeyDown = function (event) {
      if (/input|textarea/i.test(event.target.tagName)) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();

          _this.handlePrev(event);

          break;

        case 'ArrowRight':
          event.preventDefault();

          _this.handleNext(event);

          break;

        default:
          break;
      }
    };

    _this.handleNextWhenVisible = function () {
      if (!_this.isUnmounted && !document.hidden && style_default()(_this.carousel.current, 'visibility') !== 'hidden') {
        _this.handleNext();
      }
    };

    _this.handleNext = function (e) {
      if (_this._isSliding) return;
      var _this$props = _this.props,
          wrap = _this$props.wrap,
          activeIndex = _this$props.activeIndex;
      var index = activeIndex + 1;
      var count = Carousel_countChildren(_this.props.children);

      if (index > count - 1) {
        if (!wrap) return;
        index = 0;
      }

      _this.select(index, e, 'next');
    };

    _this.handlePrev = function (e) {
      if (_this._isSliding) return;
      var _this$props2 = _this.props,
          wrap = _this$props2.wrap,
          activeIndex = _this$props2.activeIndex;
      var index = activeIndex - 1;

      if (index < 0) {
        if (!wrap) return;
        index = Carousel_countChildren(_this.props.children) - 1;
      }

      _this.select(index, e, 'prev');
    };

    _this.state = {
      prevClasses: '',
      currentClasses: 'active'
    };
    _this.isUnmounted = false;
    _this.carousel = react_default.a.createRef();
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.cycle();
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var previousActiveIndex = _ref.activeIndex;

    if (nextProps.activeIndex !== previousActiveIndex) {
      var lastPossibleIndex = Carousel_countChildren(nextProps.children) - 1;
      var nextIndex = Math.max(0, Math.min(nextProps.activeIndex, lastPossibleIndex));
      var direction;

      if (nextIndex === 0 && previousActiveIndex >= lastPossibleIndex || previousActiveIndex <= nextIndex) {
        direction = 'next';
      } else {
        direction = 'prev';
      }

      return {
        direction: direction,
        previousActiveIndex: previousActiveIndex,
        activeIndex: nextIndex
      };
    }

    return null;
  };

  _proto.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var _this2 = this;

    var _this$props3 = this.props,
        bsPrefix = _this$props3.bsPrefix,
        slide = _this$props3.slide;
    if (!slide || this.state.activeIndex === prevState.activeIndex || this._isSliding) return;
    var _this$state = this.state,
        activeIndex = _this$state.activeIndex,
        direction = _this$state.direction;
    var orderClassName, directionalClassName;

    if (direction === 'next') {
      orderClassName = bsPrefix + "-item-next";
      directionalClassName = bsPrefix + "-item-left";
    } else if (direction === 'prev') {
      orderClassName = bsPrefix + "-item-prev";
      directionalClassName = bsPrefix + "-item-right";
    }

    this._isSliding = true;
    this.pause(); // eslint-disable-next-line react/no-did-update-set-state

    this.safeSetState({
      prevClasses: 'active',
      currentClasses: orderClassName
    }, function () {
      var items = _this2.carousel.current.children;
      var nextElement = items[activeIndex];
      Object(triggerBrowserReflow["a" /* default */])(nextElement);

      _this2.safeSetState({
        prevClasses: node_modules_classnames_default()('active', directionalClassName),
        currentClasses: node_modules_classnames_default()(orderClassName, directionalClassName)
      }, function () {
        return transition_default.a.end(nextElement, function () {
          return _this2.safeSetState({
            prevClasses: '',
            currentClasses: 'active'
          }, _this2.handleSlideEnd);
        });
      });
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  _proto.safeSetState = function safeSetState(state, cb) {
    var _this3 = this;

    if (this.isUnmounted) return;
    this.setState(state, function () {
      return !_this3.isUnmounted && cb();
    });
  }; // This might be a public API.


  _proto.pause = function pause() {
    this._isPaused = true;
    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.cycle = function cycle() {
    this._isPaused = false;
    clearInterval(this._interval);
    this._interval = null;

    if (this.props.interval && !this._isPaused) {
      this._interval = setInterval(document.visibilityState ? this.handleNextWhenVisible : this.handleNext, this.props.interval);
    }
  };

  _proto.to = function to(index, event) {
    var children = this.props.children;

    if (index < 0 || index > Carousel_countChildren(children) - 1) {
      return;
    }

    if (this._isSliding) {
      this._pendingIndex = index;
      return;
    }

    this.select(index, event);
  };

  _proto.select = function select(index, event, direction) {
    var _this4 = this;

    clearTimeout(this.selectThrottle);
    if (event && event.persist) event.persist(); // The timeout throttles fast clicks, in order to give any pending state
    // a chance to update and propagate back through props

    this.selectThrottle = setTimeout(function () {
      clearTimeout(_this4.timeout);
      var _this4$props = _this4.props,
          activeIndex = _this4$props.activeIndex,
          onSelect = _this4$props.onSelect;
      if (index === activeIndex || _this4._isSliding || _this4.isUnmounted) return;
      onSelect(index, direction || (index < activeIndex ? 'prev' : 'next'), event);
    }, 50);
  };

  _proto.renderControls = function renderControls(properties) {
    var bsPrefix = this.props.bsPrefix;
    var wrap = properties.wrap,
        children = properties.children,
        activeIndex = properties.activeIndex,
        prevIcon = properties.prevIcon,
        nextIcon = properties.nextIcon,
        prevLabel = properties.prevLabel,
        nextLabel = properties.nextLabel;
    var count = Carousel_countChildren(children);
    return [(wrap || activeIndex !== 0) && react_default.a.createElement(SafeAnchor["a" /* default */], {
      key: "prev",
      className: bsPrefix + "-control-prev",
      onClick: this.handlePrev,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, prevIcon, prevLabel && react_default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, prevLabel)), (wrap || activeIndex !== count - 1) && react_default.a.createElement(SafeAnchor["a" /* default */], {
      key: "next",
      className: bsPrefix + "-control-next",
      onClick: this.handleNext,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, nextIcon, nextLabel && react_default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, nextLabel))];
  };

  _proto.renderIndicators = function renderIndicators(children, activeIndex) {
    var _this5 = this;

    var bsPrefix = this.props.bsPrefix;
    var indicators = [];
    forEach(children, function (child, index) {
      indicators.push(react_default.a.createElement("li", {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this5.to(index, e);
        },
        __source: {
          fileName: Carousel_jsxFileName,
          lineNumber: 404
        },
        __self: this
      }), // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });
    return react_default.a.createElement("ol", {
      className: bsPrefix + "-indicators",
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 416
      },
      __self: this
    }, indicators);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        bsPrefix = _this$props4.bsPrefix,
        slide = _this$props4.slide,
        fade = _this$props4.fade,
        indicators = _this$props4.indicators,
        controls = _this$props4.controls,
        wrap = _this$props4.wrap,
        prevIcon = _this$props4.prevIcon,
        prevLabel = _this$props4.prevLabel,
        nextIcon = _this$props4.nextIcon,
        nextLabel = _this$props4.nextLabel,
        className = _this$props4.className,
        children = _this$props4.children,
        keyboard = _this$props4.keyboard,
        _5 = _this$props4.activeIndex,
        _4 = _this$props4.pauseOnHover,
        _3 = _this$props4.interval,
        _2 = _this$props4.onSelect,
        _1 = _this$props4.onSlideEnd,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props4, ["bsPrefix", "slide", "fade", "indicators", "controls", "wrap", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children", "keyboard", "activeIndex", "pauseOnHover", "interval", "onSelect", "onSlideEnd"]);

    var _this$state2 = this.state,
        activeIndex = _this$state2.activeIndex,
        previousActiveIndex = _this$state2.previousActiveIndex,
        prevClasses = _this$state2.prevClasses,
        currentClasses = _this$state2.currentClasses;
    return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
        className: node_modules_classnames_default()(className, bsPrefix, slide && 'slide', fade && bsPrefix + "-fade"),
        onKeyDown: keyboard ? this.handleKeyDown : undefined,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        __source: {
          fileName: Carousel_jsxFileName,
          lineNumber: 451
        },
        __self: this
      }), indicators && this.renderIndicators(children, activeIndex), react_default.a.createElement("div", {
        className: bsPrefix + "-inner",
        ref: this.carousel,
        __source: {
          fileName: Carousel_jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, map(children, function (child, index) {
        var current = index === activeIndex;
        var previous = index === previousActiveIndex;
        return Object(react["cloneElement"])(child, {
          className: node_modules_classnames_default()(child.props.className, bsPrefix + "-item", current && currentClasses, previous && prevClasses)
        });
      })), controls && this.renderControls({
        wrap: wrap,
        children: children,
        activeIndex: activeIndex,
        prevIcon: prevIcon,
        prevLabel: prevLabel,
        nextIcon: nextIcon,
        nextLabel: nextLabel
      }))
    );
  };

  return Carousel;
}(react_default.a.Component);

Carousel_Carousel.defaultProps = Carousel_defaultProps;
Carousel_Carousel.propTypes = Carousel_propTypes;
var DecoratedCarousel = Object(ThemeProvider["a" /* createBootstrapComponent */])(uncontrollable_lib_default()(Carousel_Carousel, {
  activeIndex: 'onSelect'
}), 'carousel');
DecoratedCarousel.Caption = src_CarouselCaption;
DecoratedCarousel.Item = src_CarouselItem;
/* harmony default export */ var src_Carousel = (DecoratedCarousel);
// EXTERNAL MODULE: ../src/Col.js
var Col = __webpack_require__(372);

// EXTERNAL MODULE: ../src/Collapse.js
var Collapse = __webpack_require__(370);

// EXTERNAL MODULE: ../node_modules/react-context-toolbox/lib/mapContextToProps.js
var mapContextToProps = __webpack_require__(330);
var mapContextToProps_default = /*#__PURE__*/__webpack_require__.n(mapContextToProps);

// EXTERNAL MODULE: ../node_modules/react-overlays/Dropdown.js
var react_overlays_Dropdown = __webpack_require__(710);
var Dropdown_default = /*#__PURE__*/__webpack_require__.n(react_overlays_Dropdown);

// EXTERNAL MODULE: ../src/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__(339);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js + 1 modules
var esm_objectSpread = __webpack_require__(327);

// EXTERNAL MODULE: ../node_modules/react-overlays/DropdownMenu.js
var react_overlays_DropdownMenu = __webpack_require__(499);
var DropdownMenu_default = /*#__PURE__*/__webpack_require__.n(react_overlays_DropdownMenu);

// EXTERNAL MODULE: ../src/NavbarContext.js
var NavbarContext = __webpack_require__(355);

// CONCATENATED MODULE: ../src/DropdownMenu.js




var DropdownMenu_jsxFileName = "/Users/jason/src/react-bootstrap/src/DropdownMenu.js";









var DropdownMenu_wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom["findDOMNode"])(r));
  });

  return props;
};

var DropdownMenu_DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        alignRight = _this$props.alignRight,
        rootCloseEvent = _this$props.rootCloseEvent,
        showProps = _this$props.show,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "alignRight", "rootCloseEvent", "show", "as"]);

    return react_default.a.createElement(NavbarContext["a" /* default */], {
      __source: {
        fileName: DropdownMenu_jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, function (isNavbar) {
      return react_default.a.createElement(DropdownMenu_default.a, {
        show: showProps,
        alignEnd: alignRight,
        usePopper: !isNavbar,
        rootCloseEvent: rootCloseEvent,
        __source: {
          fileName: DropdownMenu_jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, function (_ref) {
        var placement = _ref.placement,
            show = _ref.show,
            alignEnd = _ref.alignEnd,
            close = _ref.close,
            menuProps = _ref.props;
        DropdownMenu_wrapRef(menuProps); // For custom components provide additional, non-DOM, props;

        if (typeof Component !== 'string') {
          menuProps.show = show;
          menuProps.close = close;
          menuProps.alignRight = alignEnd;
        }

        var style = props.style;

        if (placement) {
          // we don't need the default popper style,
          // menus are display: none when not shown.
          style = Object(esm_objectSpread["a" /* default */])({}, style, menuProps.style);
          props['x-placement'] = placement;
        }

        return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, menuProps, {
          style: style,
          className: node_modules_classnames_default()(className, bsPrefix, show && 'show', alignRight && bsPrefix + "-right"),
          __source: {
            fileName: DropdownMenu_jsxFileName,
            lineNumber: 92
          },
          __self: this
        }));
      });
    });
  };

  return DropdownMenu;
}(react_default.a.Component);

DropdownMenu_DropdownMenu.propTypes = {
  /**
   * @default 'dropdown-menu'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /** Controls the visibility of the Dropdown menu  */
  show: node_modules_prop_types_default.a.bool,

  /** Aligns the Dropdown menu to the right of it's container. */
  alignRight: node_modules_prop_types_default.a.bool,
  onSelect: node_modules_prop_types_default.a.func,

  /**
   * Which event when fired outside the component will cause it to be closed
   *
   * *Note: For custom dropdown components, you will have to pass the
   * `rootCloseEvent` to `<RootCloseWrapper>` in your custom dropdown menu
   * component ([similarly to how it is implemented in `<Dropdown.Menu>`](https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.5/src/DropdownMenu.js#L115-L119)).*
   */
  rootCloseEvent: node_modules_prop_types_default.a.oneOf(['click', 'mousedown']),

  /**
   * Control the rendering of the DropdownMenu. All non-menu props
   * (listed here) are passed through to the `as` Component.
   *
   * If providing a custom, non DOM, component. the `show`, `close` and `alignRight` props
   * are also injected and should be handled appropriatedly.
   */
  as: lib["elementType"]
};
DropdownMenu_DropdownMenu.defaultProps = {
  alignRight: false,
  as: 'div'
};
/* harmony default export */ var src_DropdownMenu = (Object(ThemeProvider["a" /* createBootstrapComponent */])(DropdownMenu_DropdownMenu, 'dropdown-menu'));
// EXTERNAL MODULE: ../node_modules/prop-types-extra/lib/isRequiredForA11y.js
var isRequiredForA11y = __webpack_require__(352);
var isRequiredForA11y_default = /*#__PURE__*/__webpack_require__.n(isRequiredForA11y);

// EXTERNAL MODULE: ../node_modules/react-overlays/DropdownToggle.js
var react_overlays_DropdownToggle = __webpack_require__(500);
var DropdownToggle_default = /*#__PURE__*/__webpack_require__.n(react_overlays_DropdownToggle);

// CONCATENATED MODULE: ../src/DropdownToggle.js



var DropdownToggle_jsxFileName = "/Users/jason/src/react-bootstrap/src/DropdownToggle.js";










var DropdownToggle_wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom["findDOMNode"])(r));
  });

  return props;
};

var DropdownToggle_DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(DropdownToggle, _React$Component);

  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        split = _this$props.split,
        className = _this$props.className,
        children = _this$props.children,
        childBsPrefix = _this$props.childBsPrefix,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "split", "className", "children", "childBsPrefix", "as"]); // This intentionally forwards size and variant (if set) to the
    // underlying component, to allow it to render size and style variants.


    return react_default.a.createElement(DropdownToggle_default.a, {
      __source: {
        fileName: DropdownToggle_jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, function (_ref) {
      var toggle = _ref.toggle,
          toggleProps = _ref.props;
      return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
        onClick: toggle,
        bsPrefix: childBsPrefix,
        className: node_modules_classnames_default()(className, bsPrefix, split && bsPrefix + "-split")
      }, DropdownToggle_wrapRef(toggleProps), props, {
        __source: {
          fileName: DropdownToggle_jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), children);
    });
  };

  return DropdownToggle;
}(react_default.a.Component);

DropdownToggle_DropdownToggle.propTypes = {
  /**
   * @default 'dropdown-toggle'
   */
  bsPrefix: node_modules_prop_types_default.a.string,
  title: node_modules_prop_types_default.a.string,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y_default()(node_modules_prop_types_default.a.any),
  split: node_modules_prop_types_default.a.bool,
  as: lib["elementType"],

  /**
   * to passthrough to the underlying button or whatever from DropdownButton
   * @private
   */
  childBsPrefix: node_modules_prop_types_default.a.string
};
DropdownToggle_DropdownToggle.defaultProps = {
  as: Button["a" /* default */]
};
/* harmony default export */ var src_DropdownToggle = (Object(ThemeProvider["a" /* createBootstrapComponent */])(DropdownToggle_DropdownToggle, 'dropdown-toggle'));
// EXTERNAL MODULE: ../src/SelectableContext.js
var SelectableContext = __webpack_require__(331);

// EXTERNAL MODULE: ../src/NavContext.js
var NavContext = __webpack_require__(393);

// CONCATENATED MODULE: ../src/DropdownItem.js



var DropdownItem_jsxFileName = "/Users/jason/src/react-bootstrap/src/DropdownItem.js";











var DropdownItem_DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(DropdownItem, _React$Component);

  function DropdownItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onSelect = _this$props.onSelect,
          onClick = _this$props.onClick,
          eventKey = _this$props.eventKey,
          href = _this$props.href;
      var key = Object(SelectableContext["b" /* makeEventKey */])(eventKey, href); // SafeAnchor handles the disabled case, but be handle it here
      // for other components

      if (disabled) return;
      if (onClick) onClick(event);
      if (onSelect) onSelect(key, event);
      if (key !== null && _this.contextSelect) _this.contextSelect(key, event);
    };

    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        active = _this$props2.active,
        className = _this$props2.className,
        children = _this$props2.children,
        _ = _this$props2.eventKey,
        _1 = _this$props2.onSelect,
        Component = _this$props2.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props2, ["bsPrefix", "active", "className", "children", "eventKey", "onSelect", "as"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix, active && 'active', props.disabled && 'disabled'),
      onClick: this.handleClick,
      __source: {
        fileName: DropdownItem_jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), children);
  };

  return DropdownItem;
}(react_default.a.Component);

DropdownItem_DropdownItem.propTypes = {
  /** @default 'dropdown' */
  bsPrefix: node_modules_prop_types_default.a.string.isRequired,

  /**
   * Highlight the menu item as active.
   */
  active: node_modules_prop_types_default.a.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: node_modules_prop_types_default.a.bool,

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: node_modules_prop_types_default.a.any,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: node_modules_prop_types_default.a.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: node_modules_prop_types_default.a.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: node_modules_prop_types_default.a.func,
  as: lib["elementType"]
};
DropdownItem_DropdownItem.defaultProps = {
  as: SafeAnchor["a" /* default */],
  disabled: false
};
/* harmony default export */ var src_DropdownItem = (mapContextToProps_default()([SelectableContext["a" /* default */], NavContext["a" /* default */]], function (onSelect, navContext, props) {
  var _ref = navContext || {},
      activeKey = _ref.activeKey;

  var key = Object(SelectableContext["b" /* makeEventKey */])(props.eventKey, props.href);
  return {
    onSelect: Object(createChainedFunction["a" /* default */])(props.onSelect, onSelect),
    active: props.active == null && key != null ? Object(SelectableContext["b" /* makeEventKey */])(activeKey) === key : props.active
  };
}, Object(ThemeProvider["a" /* createBootstrapComponent */])(DropdownItem_DropdownItem, 'dropdown-item')));
// CONCATENATED MODULE: ../src/Dropdown.js



var Dropdown_jsxFileName = "/Users/jason/src/react-bootstrap/src/Dropdown.js";













var Dropdown_propTypes = {
  /** @default 'dropdown' */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: node_modules_prop_types_default.a.oneOf(['up', 'left', 'right', 'down']),
  as: lib["elementType"],

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  alignRight: node_modules_prop_types_default.a.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: node_modules_prop_types_default.a.bool,

  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled).
   *
   */
  flip: node_modules_prop_types_default.a.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```js
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   *   metadata: {
   *     source: 'select' | 'click' | 'rootCloose' | 'keydown'
   *   }
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: node_modules_prop_types_default.a.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: node_modules_prop_types_default.a.func,

  /** @private */
  navbar: node_modules_prop_types_default.a.bool
};
var Dropdown_defaultProps = {
  as: 'div',
  navbar: false
};

var Dropdown_Dropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Dropdown, _React$Component);

  function Dropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, event) {
      if (_this.props.onSelect) _this.props.onSelect(key, event);

      _this.handleToggle(false, event, 'select');
    };

    _this.handleToggle = function (show, event, source) {
      if (source === void 0) {
        source = event.type;
      }

      if (event.currentTarget === document) source = 'rootClose';

      _this.props.onToggle(show, event, {
        source: source
      });
    };

    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        drop = _this$props.drop,
        show = _this$props.show,
        className = _this$props.className,
        Component = _this$props.as,
        alignRight = _this$props.alignRight,
        _1 = _this$props.onSelect,
        _3 = _this$props.onToggle,
        _4 = _this$props.navbar,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "drop", "show", "className", "as", "alignRight", "onSelect", "onToggle", "navbar"]);

    delete props.onToggle;
    return react_default.a.createElement(SelectableContext["a" /* default */].Provider, {
      value: this.handleSelect,
      __source: {
        fileName: Dropdown_jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react_default.a.createElement(Dropdown_default.a.ControlledComponent, {
      drop: drop,
      show: show,
      alignEnd: alignRight,
      onToggle: this.handleToggle,
      itemSelector: "." + bsPrefix + "-item:not(.disabled):not(:disabled)",
      __source: {
        fileName: Dropdown_jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, function (_ref) {
      var dropdownProps = _ref.props;
      return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, dropdownProps, {
        className: node_modules_classnames_default()(className, show && 'show', (!drop || drop === 'down') && bsPrefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft'),
        __source: {
          fileName: Dropdown_jsxFileName,
          lineNumber: 120
        },
        __self: this
      }));
    }));
  };

  return Dropdown;
}(react_default.a.Component);

Dropdown_Dropdown.propTypes = Dropdown_propTypes;
Dropdown_Dropdown.defaultProps = Dropdown_defaultProps;
var UncontrolledDropdown = Object(ThemeProvider["a" /* createBootstrapComponent */])(Dropdown_default.a.deferControlTo(Dropdown_Dropdown), 'dropdown');
var DecoratedDropdown = mapContextToProps_default()(SelectableContext["a" /* default */], function (onSelect, props) {
  return {
    onSelect: Object(createChainedFunction["a" /* default */])(props.onSelect, onSelect)
  };
}, UncontrolledDropdown);
DecoratedDropdown.Toggle = src_DropdownToggle;
DecoratedDropdown.Menu = src_DropdownMenu;
DecoratedDropdown.Item = src_DropdownItem;
DecoratedDropdown.Header = Object(createWithBsPrefix["a" /* default */])('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
DecoratedDropdown.Divider = Object(createWithBsPrefix["a" /* default */])('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
/* harmony default export */ var src_Dropdown = (DecoratedDropdown);
// CONCATENATED MODULE: ../src/DropdownButton.js



var DropdownButton_jsxFileName = "/Users/jason/src/react-bootstrap/src/DropdownButton.js";



var DropdownButton_propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: node_modules_prop_types_default.a.any,

  /** An `href` passed to the Toggle component */
  href: node_modules_prop_types_default.a.string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: node_modules_prop_types_default.a.func,

  /** The content of the non-toggle Button.  */
  title: node_modules_prop_types_default.a.node.isRequired,

  /** Disables both Buttons  */
  disabled: node_modules_prop_types_default.a.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: node_modules_prop_types_default.a.string,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: node_modules_prop_types_default.a.string,

  /** @ignore */
  bsPrefix: node_modules_prop_types_default.a.string,

  /** @ignore */
  variant: node_modules_prop_types_default.a.string,

  /** @ignore */
  size: node_modules_prop_types_default.a.string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`.
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu related props are passed to the `Dropdown.Menu`
 */

var DropdownButton_DropdownButton =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(DropdownButton, _React$Component);

  function DropdownButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        variant = _this$props.variant,
        size = _this$props.size,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        href = _this$props.href,
        id = _this$props.id,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["title", "children", "bsPrefix", "rootCloseEvent", "variant", "size", "menuRole", "disabled", "href", "id"]);

    return react_default.a.createElement(src_Dropdown, Object(esm_extends["a" /* default */])({}, props, {
      __source: {
        fileName: DropdownButton_jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react_default.a.createElement(src_Dropdown.Toggle, {
      id: id,
      href: href,
      size: size,
      variant: variant,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      __source: {
        fileName: DropdownButton_jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, title), react_default.a.createElement(src_Dropdown.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent,
      __source: {
        fileName: DropdownButton_jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, children));
  };

  return DropdownButton;
}(react_default.a.Component);

DropdownButton_DropdownButton.propTypes = DropdownButton_propTypes;
/* harmony default export */ var src_DropdownButton = (DropdownButton_DropdownButton);
// EXTERNAL MODULE: ../src/FormContext.js
var FormContext = __webpack_require__(340);

// CONCATENATED MODULE: ../src/FormGroup.js


var FormGroup_jsxFileName = "/Users/jason/src/react-bootstrap/src/FormGroup.js";






var FormGroup_propTypes = {
  /**
   * @default 'form-group'
   */
  bsPrefix: node_modules_prop_types_default.a.string,
  as: lib["elementType"],

  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: node_modules_prop_types_default.a.string,

  /**
   * The FormGroup `ref` will be forwarded to the underlying element.
   * Unless the FormGroup is rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  innerRef: node_modules_prop_types_default.a.any
};
var FormGroup_defaultProps = {
  as: 'div'
};

function FormGroup(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      Component = _ref.as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "innerRef", "className", "children", "controlId", "as"]);

  return react_default.a.createElement(FormContext["a" /* default */].Provider, {
    value: {
      controlId: controlId
    },
    __source: {
      fileName: FormGroup_jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: innerRef,
    className: node_modules_classnames_default()(className, bsPrefix),
    __source: {
      fileName: FormGroup_jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), children));
}

FormGroup.propTypes = FormGroup_propTypes;
FormGroup.defaultProps = FormGroup_defaultProps;
/* harmony default export */ var src_FormGroup = (Object(ThemeProvider["a" /* createBootstrapComponent */])(FormGroup, 'form-group'));
// EXTERNAL MODULE: ../src/FormControl.js
var FormControl = __webpack_require__(369);

// EXTERNAL MODULE: ../src/Feedback.js
var Feedback = __webpack_require__(451);

// CONCATENATED MODULE: ../src/FormCheckInput.js


var FormCheckInput_jsxFileName = "/Users/jason/src/react-bootstrap/src/FormCheckInput.js";





var FormCheckInput_propTypes = {
  /**
   * @default 'form-check-input'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /** A HTML id attribute, necessary for proper form accessibility. */
  id: node_modules_prop_types_default.a.string,

  /** The type of checkable. */
  type: node_modules_prop_types_default.a.oneOf(['radio', 'checkbox']).isRequired,

  /**
   * A convenience prop shortcut for adding `position-static` to the input, for
   * correct styling when used without an FormCheckLabel
   */
  isStatic: node_modules_prop_types_default.a.bool,

  /** Manually style the input as valid */
  isValid: node_modules_prop_types_default.a.bool.isRequired,

  /** Manually style the input as invalid */
  isInvalid: node_modules_prop_types_default.a.bool.isRequired,

  /**
   * @private
   */
  innerRef: node_modules_prop_types_default.a.any
};
var FormCheckInput_defaultProps = {
  type: 'checkbox'
};

function FormCheckInput(_ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      innerRef = _ref.innerRef,
      isStatic = _ref.isStatic,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["id", "bsPrefix", "className", "isValid", "isInvalid", "innerRef", "isStatic"]);

  return react_default.a.createElement(FormContext["a" /* default */].Consumer, {
    __source: {
      fileName: FormCheckInput_jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, function (_ref2) {
    var controlId = _ref2.controlId;
    return react_default.a.createElement("input", Object(esm_extends["a" /* default */])({}, props, {
      ref: innerRef,
      id: id || controlId,
      className: node_modules_classnames_default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static'),
      __source: {
        fileName: FormCheckInput_jsxFileName,
        lineNumber: 55
      },
      __self: this
    }));
  });
}

FormCheckInput.propTypes = FormCheckInput_propTypes;
FormCheckInput.defaultProps = FormCheckInput_defaultProps;
/* harmony default export */ var src_FormCheckInput = (Object(ThemeProvider["a" /* createBootstrapComponent */])(FormCheckInput, 'form-check-input'));
// CONCATENATED MODULE: ../src/FormCheckLabel.js


var FormCheckLabel_jsxFileName = "/Users/jason/src/react-bootstrap/src/FormCheckLabel.js";





var FormCheckLabel_propTypes = {
  /**
   * @default 'form-check-input'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * @private
   */
  innerRef: node_modules_prop_types_default.a.any,

  /** The HTML for attribute for associating the label with an input */
  htmlFor: node_modules_prop_types_default.a.string
};
var FormCheckLabel_defaultProps = {
  type: 'checkbox'
};

function FormCheckLabel(_ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      innerRef = _ref.innerRef,
      htmlFor = _ref.htmlFor,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "innerRef", "htmlFor"]);

  return react_default.a.createElement(FormContext["a" /* default */].Consumer, {
    __source: {
      fileName: FormCheckLabel_jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, function (_ref2) {
    var controlId = _ref2.controlId;
    return react_default.a.createElement("label", Object(esm_extends["a" /* default */])({}, props, {
      ref: innerRef,
      htmlFor: htmlFor || controlId,
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: FormCheckLabel_jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  });
}

FormCheckLabel.propTypes = FormCheckLabel_propTypes;
FormCheckLabel.defaultProps = FormCheckLabel_defaultProps;
/* harmony default export */ var src_FormCheckLabel = (Object(ThemeProvider["a" /* createBootstrapComponent */])(FormCheckLabel, 'form-check-label'));
// CONCATENATED MODULE: ../src/FormCheck.js



var FormCheck_jsxFileName = "/Users/jason/src/react-bootstrap/src/FormCheck.js";









var FormCheck_FormCheck =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(FormCheck, _React$Component);

  function FormCheck() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormCheck.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        bsPrefix = _this$props.bsPrefix,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        feedback = _this$props.feedback,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        type = _this$props.type,
        label = _this$props.label,
        children = _this$props.children,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "inputRef", "className", "style", "title", "type", "label", "children"]);

    var hasLabel = label != null && label !== false && !children;
    var input = react_default.a.createElement(src_FormCheckInput, Object(esm_extends["a" /* default */])({}, props, {
      type: type,
      ref: inputRef,
      isValid: isValid,
      isInvalid: isInvalid,
      isStatic: !hasLabel,
      disabled: disabled,
      __source: {
        fileName: FormCheck_jsxFileName,
        lineNumber: 92
      },
      __self: this
    }));
    return react_default.a.createElement(FormContext["a" /* default */].Transform, {
      mapToValue: function mapToValue(_ref) {
        var controlId = _ref.controlId;
        return {
          controlId: id || controlId
        };
      },
      __source: {
        fileName: FormCheck_jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react_default.a.createElement("div", {
      style: style,
      className: node_modules_classnames_default()(className, bsPrefix, inline && bsPrefix + "-inline"),
      __source: {
        fileName: FormCheck_jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, children || react_default.a.createElement(react_default.a.Fragment, {
      __source: {
        fileName: FormCheck_jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, input, hasLabel && react_default.a.createElement(src_FormCheckLabel, {
      title: title,
      __source: {
        fileName: FormCheck_jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, label), (isValid || isInvalid) && react_default.a.createElement(Feedback["a" /* default */], {
      type: isValid ? 'valid' : 'invalid',
      __source: {
        fileName: FormCheck_jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, feedback))));
  };

  return FormCheck;
}(react_default.a.Component);

FormCheck_FormCheck.propTypes = {
  /**
   * @default 'form-check'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * The FormCheck `ref` will be forwarded to the underlying input element,
   * which means it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias {ref}
   */
  inputRef: node_modules_prop_types_default.a.any,

  /** A HTML id attribute, necessary for proper form accessibility. */
  id: node_modules_prop_types_default.a.string,

  /**
   * Provide a function child to manually handle the layout of the FormCheck's inner components.
   *
   * ````
   * <FormCheck>
   *   <FormCheck.Input isInvalid type={radio} />
   *   <FormCheck.Label>Allow us to contact you?</FormCheck.Label>
   *   <Feedback type="invalid">Yo this is required</Feedback>
   * </FormCheck>
   * ```
   */
  children: node_modules_prop_types_default.a.node,
  inline: node_modules_prop_types_default.a.bool,
  disabled: node_modules_prop_types_default.a.bool,
  title: node_modules_prop_types_default.a.string,
  label: node_modules_prop_types_default.a.node,

  /** The type of checkable. */
  type: node_modules_prop_types_default.a.oneOf(['radio', 'checkbox']).isRequired,

  /** Manually style the input as valid */
  isValid: node_modules_prop_types_default.a.bool.isRequired,

  /** Manually style the input as invalid */
  isInvalid: node_modules_prop_types_default.a.bool.isRequired,

  /** A message to display when the input is in a validation state */
  feedback: node_modules_prop_types_default.a.node
};
FormCheck_FormCheck.defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};
var DecoratedFormCheck = Object(ThemeProvider["a" /* createBootstrapComponent */])(FormCheck_FormCheck, {
  forwardRefAs: 'inputRef',
  prefix: 'form-check'
});
DecoratedFormCheck.Input = src_FormCheckInput;
DecoratedFormCheck.Label = src_FormCheckLabel;
/* harmony default export */ var src_FormCheck = (DecoratedFormCheck);
// EXTERNAL MODULE: ../node_modules/warning/warning.js
var warning = __webpack_require__(396);

// CONCATENATED MODULE: ../src/FormLabel.js


var FormLabel_jsxFileName = "/Users/jason/src/react-bootstrap/src/FormLabel.js";








var FormLabel_propTypes = {
  /**
   * @default 'form-label'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: node_modules_prop_types_default.a.string,

  /**
   * Renders the FormLabel as a `<Col>` component (accepting all the same props),
   * as well as adding additional styling for horizontal forms.
   */
  column: node_modules_prop_types_default.a.bool,

  /**
   * The FormLabel `ref` will be forwarded to the underlying element.
   * Unless the FormLabel is rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  innerRef: node_modules_prop_types_default.a.any,

  /**
   * Hides the label visually while still allowing it to be
   * read by assistive technologies.
   */
  srOnly: node_modules_prop_types_default.a.bool
};
var FormLabel_defaultProps = {
  column: false,
  srOnly: false
};

function FormLabel(_ref) {
  var bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      innerRef = _ref.innerRef,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "column", "srOnly", "className", "innerRef"]);

  var classes = node_modules_classnames_default()(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
  if (column) return react_default.a.createElement(Col["a" /* default */], Object(esm_extends["a" /* default */])({}, props, {
    className: classes,
    as: "label",
    __source: {
      fileName: FormLabel_jsxFileName,
      lineNumber: 65
    },
    __self: this
  })); // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control

  return react_default.a.createElement("label", Object(esm_extends["a" /* default */])({}, props, {
    ref: innerRef,
    className: classes,
    __source: {
      fileName: FormLabel_jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
}

FormLabel.propTypes = FormLabel_propTypes;
FormLabel.defaultProps = FormLabel_defaultProps;

var mapContext = function mapContext(_ref2, _ref3) {
  var controlId = _ref2.controlId;
  var htmlFor = _ref3.htmlFor;
   false ? undefined : void 0;
  return {
    htmlFor: htmlFor || controlId
  };
};

/* harmony default export */ var src_FormLabel = (mapContextToProps_default()(FormContext["a" /* default */].Consumer, mapContext, Object(ThemeProvider["a" /* createBootstrapComponent */])(FormLabel, 'form-label')));
// CONCATENATED MODULE: ../src/FormText.js


var FormText_jsxFileName = "/Users/jason/src/react-bootstrap/src/FormText.js";





var FormText_propTypes = {
  /** @default 'form-text' */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * The FormText `ref` will be forwarded to the underlying element.
   * Unless the FormText is rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  innerRef: node_modules_prop_types_default.a.any,

  /**
   * A convenience prop for add the `text-muted` class,
   * since it's so commonly used here.
   */
  muted: node_modules_prop_types_default.a.bool,
  as: lib["elementType"]
};
var FormText_defaultProps = {
  as: 'small'
};

function FormText(_ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      innerRef = _ref.innerRef,
      Component = _ref.as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "innerRef", "as"]);

  return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: innerRef,
    className: node_modules_classnames_default()(className, bsPrefix),
    __source: {
      fileName: FormText_jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}

FormText.propTypes = FormText_propTypes;
FormText.defaultProps = FormText_defaultProps;
/* harmony default export */ var src_FormText = (Object(ThemeProvider["a" /* createBootstrapComponent */])(FormText, 'form-text'));
// CONCATENATED MODULE: ../src/Form.js


var Form_jsxFileName = "/Users/jason/src/react-bootstrap/src/Form.js";











var Form_propTypes = {
  /**
   * @default {'form'}
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  innerRef: node_modules_prop_types_default.a.any,

  /**
   * Display the series of labels, form controls,
   * and buttons on a single horizontal row
   */
  inline: node_modules_prop_types_default.a.bool,

  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: node_modules_prop_types_default.a.bool,
  as: lib["elementType"]
};
var Form_defaultProps = {
  inline: false,
  as: 'form'
};

function Form(_ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      innerRef = _ref.innerRef,
      validated = _ref.validated,
      Component = _ref.as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "inline", "className", "innerRef", "validated", "as"]);

  return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: innerRef,
    className: node_modules_classnames_default()(className, validated && 'was-validated', inline && bsPrefix + "-inline"),
    __source: {
      fileName: Form_jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
}

Form.propTypes = Form_propTypes;
Form.defaultProps = Form_defaultProps;
var DecoratedForm = Object(ThemeProvider["a" /* createBootstrapComponent */])(Form, 'form');
DecoratedForm.Row = Object(createWithBsPrefix["a" /* default */])('form-row');
DecoratedForm.Group = src_FormGroup;
DecoratedForm.Control = FormControl["a" /* default */];
DecoratedForm.Check = src_FormCheck;
DecoratedForm.Label = src_FormLabel;
DecoratedForm.Text = src_FormText;
/* harmony default export */ var src_Form = (DecoratedForm);
// EXTERNAL MODULE: ../src/Container.js
var Container = __webpack_require__(371);

// CONCATENATED MODULE: ../src/Image.js



var Image_jsxFileName = "/Users/jason/src/react-bootstrap/src/Image.js";





var Image_Image =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Image, _React$Component);

  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        fluid = _this$props.fluid,
        rounded = _this$props.rounded,
        roundedCircle = _this$props.roundedCircle,
        thumbnail = _this$props.thumbnail,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);

    var classes = node_modules_classnames_default()(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
    return react_default.a.createElement("img", Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, classes),
      __source: {
        fileName: Image_jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  };

  return Image;
}(react_default.a.Component);

Image_Image.propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Sets image as fluid image.
   */
  fluid: node_modules_prop_types_default.a.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: node_modules_prop_types_default.a.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: node_modules_prop_types_default.a.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: node_modules_prop_types_default.a.bool
};
Image_Image.defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
/* harmony default export */ var src_Image = (Object(ThemeProvider["a" /* createBootstrapComponent */])(Image_Image, 'img'));
// CONCATENATED MODULE: ../src/FigureImage.js



var FigureImage_jsxFileName = "/Users/jason/src/react-bootstrap/src/FigureImage.js";





var FigureImage_FigureImage =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(FigureImage, _React$Component);

  function FigureImage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureImage.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["className"]);

    return react_default.a.createElement(src_Image, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, 'figure-img'),
      __source: {
        fileName: FigureImage_jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  };

  return FigureImage;
}(react_default.a.Component);

FigureImage_FigureImage.propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Sets image as fluid image.
   */
  fluid: node_modules_prop_types_default.a.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: node_modules_prop_types_default.a.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: node_modules_prop_types_default.a.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: node_modules_prop_types_default.a.bool
};
FigureImage_FigureImage.defaultProps = {
  fluid: true
};
/* harmony default export */ var src_FigureImage = (FigureImage_FigureImage);
// CONCATENATED MODULE: ../src/FigureCaption.js



var FigureCaption_jsxFileName = "/Users/jason/src/react-bootstrap/src/FigureCaption.js";






var FigureCaption_FigureCaption =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(FigureCaption, _React$Component);

  function FigureCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["as", "bsPrefix", "className"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: FigureCaption_jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  };

  return FigureCaption;
}(react_default.a.Component);

FigureCaption_FigureCaption.propTypes = {
  /**
   * @default 'figure-caption'
   */
  bsPrefix: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
FigureCaption_FigureCaption.defaultProps = {
  as: 'figcaption'
};
/* harmony default export */ var src_FigureCaption = (Object(ThemeProvider["a" /* createBootstrapComponent */])(FigureCaption_FigureCaption, 'figure-caption'));
// CONCATENATED MODULE: ../src/Figure.js



var Figure_jsxFileName = "/Users/jason/src/react-bootstrap/src/Figure.js";








var Figure_Figure =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Figure, _React$Component);

  function Figure() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Figure.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["as", "bsPrefix", "className"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: Figure_jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  };

  return Figure;
}(react_default.a.Component);

Figure_Figure.propTypes = {
  /**
   * @default 'figure'
   */
  bsPrefix: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
Figure_Figure.defaultProps = {
  as: 'figure'
};
var DecoratedFigure = Object(ThemeProvider["a" /* createBootstrapComponent */])(Figure_Figure, 'figure');
DecoratedFigure.Image = src_FigureImage;
DecoratedFigure.Caption = src_FigureCaption;
/* harmony default export */ var src_Figure = (DecoratedFigure);
// CONCATENATED MODULE: ../src/InputGroup.js



var InputGroup_jsxFileName = "/Users/jason/src/react-bootstrap/src/InputGroup.js";






/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */

var InputGroup_InputGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(InputGroup, _React$Component);

  function InputGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "size", "className", "as"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix, size && bsPrefix + "-" + size),
      __source: {
        fileName: InputGroup_jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  };

  return InputGroup;
}(react_default.a.Component);

InputGroup_InputGroup.propTypes = {
  /** @default 'input-group' */
  bsPrefix: node_modules_prop_types_default.a.string.isRequired,

  /**
   * Control the size of buttons and form elements from the top-level .
   *
   * @type {('sm'|'lg')}
   */
  size: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
InputGroup_InputGroup.defaultProps = {
  as: 'div'
};
var InputGroupAppend = Object(createWithBsPrefix["a" /* default */])('input-group-append');
var InputGroupPrepend = Object(createWithBsPrefix["a" /* default */])('input-group-prepend');
var InputGroupText = Object(createWithBsPrefix["a" /* default */])('input-group-text', {
  Component: 'span'
});

var InputGroup_InputGroupCheckbox = function InputGroupCheckbox(props) {
  return react_default.a.createElement(InputGroupText, {
    __source: {
      fileName: InputGroup_jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react_default.a.createElement("input", Object(esm_extends["a" /* default */])({
    type: "checkbox"
  }, props, {
    __source: {
      fileName: InputGroup_jsxFileName,
      lineNumber: 62
    },
    __self: this
  })));
};

var InputGroup_InputGroupRadio = function InputGroupRadio(props) {
  return react_default.a.createElement(InputGroupText, {
    __source: {
      fileName: InputGroup_jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react_default.a.createElement("input", Object(esm_extends["a" /* default */])({
    type: "radio"
  }, props, {
    __source: {
      fileName: InputGroup_jsxFileName,
      lineNumber: 68
    },
    __self: this
  })));
};

var DecoratedInputGroup = Object(ThemeProvider["a" /* createBootstrapComponent */])(InputGroup_InputGroup, 'input-group');
DecoratedInputGroup.Text = InputGroupText;
DecoratedInputGroup.Radio = InputGroup_InputGroupRadio;
DecoratedInputGroup.Checkbox = InputGroup_InputGroupCheckbox;
DecoratedInputGroup.Append = InputGroupAppend;
DecoratedInputGroup.Prepend = InputGroupPrepend;
/* harmony default export */ var src_InputGroup = (DecoratedInputGroup);
// EXTERNAL MODULE: ../src/Jumbotron.js
var Jumbotron = __webpack_require__(389);

// EXTERNAL MODULE: ../src/AbstractNav.js
var AbstractNav = __webpack_require__(448);

// EXTERNAL MODULE: ../src/AbstractNavItem.js
var AbstractNavItem = __webpack_require__(450);

// CONCATENATED MODULE: ../src/ListGroupItem.js



var ListGroupItem_jsxFileName = "/Users/jason/src/react-bootstrap/src/ListGroupItem.js";








var ListGroupItem_ListGroupItem =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ListGroupItem, _React$Component);

  function ListGroupItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (onClick) onClick(event);
    };

    return _this;
  }

  var _proto = ListGroupItem.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        active = _this$props2.active,
        disabled = _this$props2.disabled,
        className = _this$props2.className,
        variant = _this$props2.variant,
        action = _this$props2.action,
        as = _this$props2.as,
        eventKey = _this$props2.eventKey,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props2, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey"]);

    return react_default.a.createElement(AbstractNavItem["a" /* default */], Object(esm_extends["a" /* default */])({}, props, {
      eventKey: Object(SelectableContext["b" /* makeEventKey */])(eventKey, props.href) // eslint-disable-next-line
      ,
      as: as || (action ? props.href ? 'a' : 'button' : 'div'),
      onClick: this.handleClick,
      className: node_modules_classnames_default()(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action"),
      __source: {
        fileName: ListGroupItem_jsxFileName,
        lineNumber: 77
      },
      __self: this
    }));
  };

  return ListGroupItem;
}(react_default.a.Component);

ListGroupItem_ListGroupItem.propTypes = {
  /**
   * @default 'list-group-item'
   */
  bsPrefix: node_modules_prop_types_default.a.string.isRequired,

  /**
   * Sets contextual classes for list item
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
  variant: node_modules_prop_types_default.a.string,

  /**
   * Marks a ListGroupItem as actionable, applying additional hover, active and disabled styles
   * for links and buttons.
   */
  action: node_modules_prop_types_default.a.bool,

  /**
   * Sets list item as active
   */
  active: node_modules_prop_types_default.a.bool,

  /**
   * Sets list item state as disabled
   */
  disabled: node_modules_prop_types_default.a.bool,

  /**
   * You can use a custom element type for this component. For none `action` items, items render as `li`.
   * For actions the default is an achor or button element depending on whether a `href` is provided.
   *
   * @default {'div' | 'a' | 'button'}
   */
  as: lib["elementType"]
};
ListGroupItem_ListGroupItem.defaultProps = {
  variant: null,
  active: false,
  disabled: false
};
/* harmony default export */ var src_ListGroupItem = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ListGroupItem_ListGroupItem, 'list-group-item'));
// CONCATENATED MODULE: ../src/ListGroup.js



var ListGroup_jsxFileName = "/Users/jason/src/react-bootstrap/src/ListGroup.js";









var ListGroup_ListGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ListGroup, _React$Component);

  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["className", "bsPrefix", "variant"]);

    return react_default.a.createElement(AbstractNav["a" /* default */], Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix, variant && bsPrefix + "-" + variant),
      __source: {
        fileName: ListGroup_jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  };

  return ListGroup;
}(react_default.a.Component);

ListGroup_ListGroup.propTypes = {
  /**
   * @default 'list-group'
   */
  bsPrefix: node_modules_prop_types_default.a.string.isRequired,

  /**
   * Adds a variant to the list-group
   *
   * @type {('flush')}
   */
  variant: node_modules_prop_types_default.a.oneOf(['flush', null]),

  /**
   * You can use a custom element type for this component.
   */
  as: lib["elementType"]
};
ListGroup_ListGroup.defaultProps = {
  as: 'div',
  variant: null
};
var DecoratedListGroup = uncontrollable_lib_default()(Object(ThemeProvider["a" /* createBootstrapComponent */])(ListGroup_ListGroup, 'list-group'), {
  activeKey: 'onSelect'
});
DecoratedListGroup.Item = src_ListGroupItem;
/* harmony default export */ var src_ListGroup = (DecoratedListGroup);
// CONCATENATED MODULE: ../src/Media.js



var Media_jsxFileName = "/Users/jason/src/react-bootstrap/src/Media.js";






var Media_propTypes = {
  /**
   * @default 'media'
   */
  bsPrefix: node_modules_prop_types_default.a.string.isRequired,
  as: lib["elementType"]
};
var Media_defaultProps = {
  as: 'div'
};

var Media_Media =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Media, _React$Component);

  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "as"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: Media_jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  };

  return Media;
}(react_default.a.Component);

Media_Media.propTypes = Media_propTypes;
Media_Media.defaultProps = Media_defaultProps;
var DecoratedMedia = Object(ThemeProvider["a" /* createBootstrapComponent */])(Media_Media, 'media');
DecoratedMedia.Body = Object(createWithBsPrefix["a" /* default */])('media-body');
/* harmony default export */ var src_Media = (DecoratedMedia);
// EXTERNAL MODULE: ../node_modules/dom-helpers/events/index.js
var events = __webpack_require__(712);
var events_default = /*#__PURE__*/__webpack_require__.n(events);

// EXTERNAL MODULE: ../node_modules/dom-helpers/ownerDocument.js
var ownerDocument = __webpack_require__(358);
var ownerDocument_default = /*#__PURE__*/__webpack_require__.n(ownerDocument);

// EXTERNAL MODULE: ../node_modules/dom-helpers/util/inDOM.js
var inDOM = __webpack_require__(325);
var inDOM_default = /*#__PURE__*/__webpack_require__.n(inDOM);

// EXTERNAL MODULE: ../node_modules/dom-helpers/util/scrollbarSize.js
var scrollbarSize = __webpack_require__(438);
var scrollbarSize_default = /*#__PURE__*/__webpack_require__.n(scrollbarSize);

// EXTERNAL MODULE: ../node_modules/react-overlays/Modal.js
var react_overlays_Modal = __webpack_require__(714);
var Modal_default = /*#__PURE__*/__webpack_require__.n(react_overlays_Modal);

// CONCATENATED MODULE: ../src/ModalBody.js



var ModalBody_jsxFileName = "/Users/jason/src/react-bootstrap/src/ModalBody.js";






var ModalBody_ModalBody =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ModalBody, _React$Component);

  function ModalBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["as", "bsPrefix", "className"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: ModalBody_jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  };

  return ModalBody;
}(react_default.a.Component);

ModalBody_ModalBody.propTypes = {
  bsPrefix: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
ModalBody_ModalBody.defaultProps = {
  as: 'div'
};
/* harmony default export */ var src_ModalBody = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ModalBody_ModalBody, 'modal-body'));
// CONCATENATED MODULE: ../src/ModalDialog.js



var ModalDialog_jsxFileName = "/Users/jason/src/react-bootstrap/src/ModalDialog.js";





var ModalDialog_ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ModalDialog, _React$Component);

  function ModalDialog() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        centered = _this$props.centered,
        size = _this$props.size,
        children = _this$props.children,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "centered", "size", "children"]);

    var bsClass = bsPrefix + "-dialog";
    return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(bsClass, className, size && bsPrefix + "-" + size, centered && bsClass + "-centered"),
      __source: {
        fileName: ModalDialog_jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react_default.a.createElement("div", {
      className: node_modules_classnames_default()(bsPrefix + "-content"),
      __source: {
        fileName: ModalDialog_jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, children));
  };

  return ModalDialog;
}(react_default.a.Component);

ModalDialog_ModalDialog.propTypes = {
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Specifies a large or small modal.
   *
   * @type ('sm'|'lg')
   */
  size: node_modules_prop_types_default.a.string,

  /**
   * Specify whether the Component should be vertically centered
   */
  centered: node_modules_prop_types_default.a.bool
};
/* harmony default export */ var src_ModalDialog = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ModalDialog_ModalDialog, 'modal'));
// CONCATENATED MODULE: ../src/ModalFooter.js



var ModalFooter_jsxFileName = "/Users/jason/src/react-bootstrap/src/ModalFooter.js";






var ModalFooter_ModalFooter =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ModalFooter, _React$Component);

  function ModalFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["as", "bsPrefix", "className"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: ModalFooter_jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  };

  return ModalFooter;
}(react_default.a.Component);

ModalFooter_ModalFooter.propTypes = {
  bsPrefix: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
ModalFooter_ModalFooter.defaultProps = {
  as: 'div'
};
/* harmony default export */ var src_ModalFooter = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ModalFooter_ModalFooter, 'modal-footer'));
// CONCATENATED MODULE: ../src/ModalContext.js

var ModalContext = react_default.a.createContext({
  onHide: function onHide() {}
});
/* harmony default export */ var src_ModalContext = (ModalContext);
// CONCATENATED MODULE: ../src/ModalHeader.js



var ModalHeader_jsxFileName = "/Users/jason/src/react-bootstrap/src/ModalHeader.js";







var ModalHeader_propTypes = {
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: node_modules_prop_types_default.a.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: node_modules_prop_types_default.a.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: node_modules_prop_types_default.a.func
};
var ModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};

var ModalHeader_ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ModalHeader, _React$Component);

  function ModalHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        closeLabel = _this$props.closeLabel,
        closeButton = _this$props.closeButton,
        onHide = _this$props.onHide,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);

    return react_default.a.createElement(src_ModalContext.Consumer, {
      __source: {
        fileName: ModalHeader_jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, function (context) {
      return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
        className: node_modules_classnames_default()(className, bsPrefix),
        __source: {
          fileName: ModalHeader_jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), children, closeButton && react_default.a.createElement(src_CloseButton, {
        label: closeLabel,
        onClick: Object(createChainedFunction["a" /* default */])(context && context.onHide, onHide),
        __source: {
          fileName: ModalHeader_jsxFileName,
          lineNumber: 57
        },
        __self: this
      }));
    });
  };

  return ModalHeader;
}(react_default.a.Component);

ModalHeader_ModalHeader.propTypes = ModalHeader_propTypes;
ModalHeader_ModalHeader.defaultProps = ModalHeader_defaultProps;
/* harmony default export */ var src_ModalHeader = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ModalHeader_ModalHeader, 'modal-header'));
// CONCATENATED MODULE: ../src/ModalTitle.js



var ModalTitle_jsxFileName = "/Users/jason/src/react-bootstrap/src/ModalTitle.js";






var ModalTitle_DivStyledAsH4 = divWithClassName('h4');

var ModalTitle_ModalTitle =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ModalTitle, _React$Component);

  function ModalTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["as", "bsPrefix", "className"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: ModalTitle_jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  };

  return ModalTitle;
}(react_default.a.Component);

ModalTitle_ModalTitle.propTypes = {
  bsPrefix: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
ModalTitle_ModalTitle.defaultProps = {
  as: ModalTitle_DivStyledAsH4
};
/* harmony default export */ var src_ModalTitle = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ModalTitle_ModalTitle, 'modal-title'));
// EXTERNAL MODULE: ../node_modules/dom-helpers/query/querySelectorAll.js
var query_querySelectorAll = __webpack_require__(354);
var query_querySelectorAll_default = /*#__PURE__*/__webpack_require__.n(query_querySelectorAll);

// EXTERNAL MODULE: ../node_modules/react-overlays/ModalManager.js
var ModalManager = __webpack_require__(501);
var ModalManager_default = /*#__PURE__*/__webpack_require__.n(ModalManager);

// CONCATENATED MODULE: ../src/utils/BootstrapModalManager.js





var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager_BootstrapModalManager =
/*#__PURE__*/
function (_ModalManager) {
  Object(esm_inheritsLoose["a" /* default */])(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ModalManager.call.apply(_ModalManager, [this].concat(args)) || this;

    _this.adjustAndStore = function (prop, element, adjust) {
      var actual = element.style[prop];
      element.dataset[prop] = actual;
      style_default()(element, prop, parseFloat(style_default()(element, prop)) + adjust + "px");
    };

    _this.restore = function (prop, element) {
      var value = element.dataset[prop];

      if (value !== undefined) {
        delete element.dataset[prop];
        style_default()(element, prop, value);
      }
    };

    return _this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = scrollbarSize_default()();
    query_querySelectorAll_default()(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('paddingRight', el, size);
    });
    query_querySelectorAll_default()(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, -size);
    });
    query_querySelectorAll_default()(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this3 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    query_querySelectorAll_default()(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this3.restore('paddingRight', el);
    });
    query_querySelectorAll_default()(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
    query_querySelectorAll_default()(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
  };

  return BootstrapModalManager;
}(ModalManager_default.a);


// CONCATENATED MODULE: ../src/Modal.js




var Modal_jsxFileName = "/Users/jason/src/react-bootstrap/src/Modal.js";


















var Modal_propTypes = {
  /**
   * Render a large or small modal.
   *
   * @type ('sm'|'lg')
   */
  size: node_modules_prop_types_default.a.string,

  /**
   * vertically center the Dialog in the window
   */
  centered: node_modules_prop_types_default.a.bool,

  /**
   * Include a backdrop component. Specify 'static' for a backdrop that doesn't
   * trigger an "onHide" when clicked.
   */
  backdrop: node_modules_prop_types_default.a.oneOf(['static', true, false]),

  /**
   * Add an optional extra class name to .modal-backdrop
   * It could end up looking like class="modal-backdrop foo-modal-backdrop in".
   */
  backdropClassName: node_modules_prop_types_default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: node_modules_prop_types_default.a.bool,

  /**
   * Open and close the Modal with a slide and fade animation.
   */
  animation: node_modules_prop_types_default.a.bool,

  /**
   * A css class to apply to the Modal dialog DOM node.
   */
  dialogClassName: node_modules_prop_types_default.a.string,

  /**
   * A Component type that provides the modal content Markup. This is a useful
   * prop when you want to use your own styles and markup to create a custom
   * modal component.
   */
  dialogAs: lib["elementType"],

  /**
   * When `true` The modal will automatically shift focus to itself when it
   * opens, and replace it to the last focused element when it closes.
   * Generally this should never be set to false as it makes the Modal less
   * accessible to assistive technologies, like screen-readers.
   */
  autoFocus: node_modules_prop_types_default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while
   * open. Consider leaving the default value here, as it is necessary to make
   * the Modal work well with assistive technologies, such as screen readers.
   */
  enforceFocus: node_modules_prop_types_default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: node_modules_prop_types_default.a.bool,

  /**
   * When `true` The modal will show itself.
   */
  show: node_modules_prop_types_default.a.bool,

  /**
   * A callback fired when the header closeButton or non-static backdrop is
   * clicked. Required if either are specified.
   */
  onHide: node_modules_prop_types_default.a.func,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: node_modules_prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: node_modules_prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: node_modules_prop_types_default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: node_modules_prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: node_modules_prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: node_modules_prop_types_default.a.func,

  /**
   * @private
   */
  container: node_modules_prop_types_default.a.any
};
var Modal_defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: src_ModalDialog,
  manager: new BootstrapModalManager_BootstrapModalManager()
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return react_default.a.createElement(Fade["a" /* default */], Object(esm_extends["a" /* default */])({}, props, {
    __source: {
      fileName: Modal_jsxFileName,
      lineNumber: 151
    },
    __self: this
  }));
}

function BackdropTransition(props) {
  return react_default.a.createElement(Fade["a" /* default */], Object(esm_extends["a" /* default */])({}, props, {
    __source: {
      fileName: Modal_jsxFileName,
      lineNumber: 155
    },
    __self: this
  }));
}
/* eslint-enable no-use-before-define */


var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Modal, _React$Component);

  function Modal(_props, context) {
    var _this;

    _this = _React$Component.call(this, _props, context) || this;

    _this.setModalRef = function (ref) {
      _this._modal = ref;
    };

    _this.handleDialogMouseDown = function () {
      _this._waitingForMouseUp = true;
    };

    _this.handleMouseUp = function (e) {
      if (_this._waitingForMouseUp && e.target === _this._modal.dialog) {
        _this._ignoreBackdropClick = true;
      }

      _this._waitingForMouseUp = false;
    };

    _this.handleClick = function (e) {
      if (_this._ignoreBackdropClick || e.target !== e.currentTarget) {
        _this._ignoreBackdropClick = false;
        return;
      }

      _this.props.onHide();
    };

    _this.handleEnter = function (node) {
      var _this$props;

      if (node) {
        node.style.display = 'block';

        _this.updateDialogStyle(node);
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (_this.props.onEnter) (_this$props = _this.props).onEnter.apply(_this$props, [node].concat(args));
    };

    _this.handleEntering = function (node) {
      var _this$props2;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (_this.props.onEntering) (_this$props2 = _this.props).onEntering.apply(_this$props2, [node].concat(args)); // FIXME: This should work even when animation is disabled.

      events_default.a.on(window, 'resize', _this.handleWindowResize);
    };

    _this.handleExited = function (node) {
      var _this$props3;

      if (node) node.style.display = ''; // RHL removes it sometimes

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      if (_this.props.onExited) (_this$props3 = _this.props).onExited.apply(_this$props3, args); // FIXME: This should work even when animation is disabled.

      events_default.a.off(window, 'resize', _this.handleWindowResize);
    };

    _this.handleWindowResize = function () {
      _this.updateDialogStyle(_this._modal.dialog);
    };

    _this.renderBackdrop = function (props) {
      var _this$props4 = _this.props,
          bsPrefix = _this$props4.bsPrefix,
          backdropClassName = _this$props4.backdropClassName;
      return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
        className: node_modules_classnames_default()(bsPrefix + "-backdrop", backdropClassName),
        __source: {
          fileName: Modal_jsxFileName,
          lineNumber: 257
        },
        __self: this
      }));
    };

    _this.state = {
      style: {}
    };
    _this.modalContext = {
      onHide: function onHide() {
        return _this.props.onHide();
      }
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    events_default.a.off(window, 'resize', this.handleWindowResize);
  };

  _proto.updateDialogStyle = function updateDialogStyle(node) {
    if (!inDOM_default.a) return;
    var manager = this.props.manager;
    var containerIsOverflowing = manager.isContainerOverflowing(this._modal);
    var modalIsOverflowing = node.scrollHeight > ownerDocument_default()(node).documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize_default()() : undefined,
        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize_default()() : undefined
      }
    });
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        bsPrefix = _this$props5.bsPrefix,
        className = _this$props5.className,
        style = _this$props5.style,
        dialogClassName = _this$props5.dialogClassName,
        children = _this$props5.children,
        Dialog = _this$props5.dialogAs,
        show = _this$props5.show,
        animation = _this$props5.animation,
        backdrop = _this$props5.backdrop,
        keyboard = _this$props5.keyboard,
        onEscapeKeyDown = _this$props5.onEscapeKeyDown,
        onShow = _this$props5.onShow,
        onHide = _this$props5.onHide,
        container = _this$props5.container,
        autoFocus = _this$props5.autoFocus,
        enforceFocus = _this$props5.enforceFocus,
        restoreFocus = _this$props5.restoreFocus,
        onEntered = _this$props5.onEntered,
        onExit = _this$props5.onExit,
        onExiting = _this$props5.onExiting,
        _ = _this$props5.onExited,
        _1 = _this$props5.onEntering,
        _6 = _this$props5.onEnter,
        _4 = _this$props5.onEntering,
        _2 = _this$props5.backdropClassName,
        _3 = _this$props5.backdropStyle,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props5, ["bsPrefix", "className", "style", "dialogClassName", "children", "dialogAs", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "onEntered", "onExit", "onExiting", "onExited", "onEntering", "onEnter", "onEntering", "backdropClassName", "backdropStyle"]);

    var clickHandler = backdrop === true ? this.handleClick : null;
    return react_default.a.createElement(src_ModalContext.Provider, {
      value: this.modalContext,
      __source: {
        fileName: Modal_jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, react_default.a.createElement(Modal_default.a, Object(esm_extends["a" /* default */])({
      show: show,
      backdrop: backdrop,
      container: container,
      keyboard: keyboard,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      onEscapeKeyDown: onEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      ref: this.setModalRef,
      style: Object(esm_objectSpread["a" /* default */])({}, style, this.state.style),
      className: node_modules_classnames_default()(className, bsPrefix),
      containerClassName: bsPrefix + "-open",
      transition: animation ? DialogTransition : undefined,
      backdropTransition: animation ? BackdropTransition : undefined,
      renderBackdrop: this.renderBackdrop,
      onClick: clickHandler,
      onMouseUp: this.handleMouseUp,
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onExited: this.handleExited
    }, {
      __source: {
        fileName: Modal_jsxFileName,
        lineNumber: 301
      },
      __self: this
    }), react_default.a.createElement(Dialog, Object(esm_extends["a" /* default */])({}, props, {
      onMouseDown: this.handleDialogMouseDown,
      className: dialogClassName,
      __source: {
        fileName: Modal_jsxFileName,
        lineNumber: 330
      },
      __self: this
    }), children)));
  };

  return Modal;
}(react_default.a.Component);

Modal_Modal.propTypes = Modal_propTypes;
Modal_Modal.defaultProps = Modal_defaultProps;
var DecoratedModal = Object(ThemeProvider["a" /* createBootstrapComponent */])(Modal_Modal, 'modal');
DecoratedModal.Body = src_ModalBody;
DecoratedModal.Header = src_ModalHeader;
DecoratedModal.Title = src_ModalTitle;
DecoratedModal.Footer = src_ModalFooter;
DecoratedModal.Dialog = src_ModalDialog;
DecoratedModal.TRANSITION_DURATION = 300;
DecoratedModal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ var src_Modal = (DecoratedModal);
// EXTERNAL MODULE: ../src/Nav.js
var Nav = __webpack_require__(353);

// EXTERNAL MODULE: ../src/Navbar.js + 2 modules
var Navbar = __webpack_require__(443);

// EXTERNAL MODULE: ../src/NavbarBrand.js
var NavbarBrand = __webpack_require__(401);

// EXTERNAL MODULE: ../src/NavItem.js
var NavItem = __webpack_require__(356);

// EXTERNAL MODULE: ../src/NavLink.js
var NavLink = __webpack_require__(395);

// CONCATENATED MODULE: ../src/NavDropdown.js



var NavDropdown_jsxFileName = "/Users/jason/src/react-bootstrap/src/NavDropdown.js";





var NavDropdown_propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: node_modules_prop_types_default.a.any,

  /** An `onClick` handler passed to the Toggle component */
  onClick: node_modules_prop_types_default.a.func,

  /** The content of the non-toggle Button.  */
  title: node_modules_prop_types_default.a.node.isRequired,

  /** Disables the toggle NavLink  */
  disabled: node_modules_prop_types_default.a.bool,

  /** Style the toggle NavLink as active  */
  active: node_modules_prop_types_default.a.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: node_modules_prop_types_default.a.string,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: node_modules_prop_types_default.a.string,

  /** @ignore */
  bsPrefix: node_modules_prop_types_default.a.string
};

var NavDropdown_NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        active = _this$props.active,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active"]);

    return react_default.a.createElement(src_Dropdown, Object(esm_extends["a" /* default */])({}, props, {
      as: NavItem["a" /* default */],
      __source: {
        fileName: NavDropdown_jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react_default.a.createElement(src_Dropdown.Toggle, {
      id: id,
      eventKey: null,
      active: active,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      as: NavLink["a" /* default */],
      __source: {
        fileName: NavDropdown_jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, title), react_default.a.createElement(src_Dropdown.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent,
      __source: {
        fileName: NavDropdown_jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, children));
  };

  return NavDropdown;
}(react_default.a.Component);

NavDropdown_NavDropdown.propTypes = NavDropdown_propTypes;
NavDropdown_NavDropdown.Item = src_Dropdown.Item;
NavDropdown_NavDropdown.Divider = src_Dropdown.Divider;
NavDropdown_NavDropdown.Header = src_Dropdown.Header;
/* harmony default export */ var src_NavDropdown = (NavDropdown_NavDropdown);
// EXTERNAL MODULE: ../src/Overlay.js
var Overlay = __webpack_require__(402);

// EXTERNAL MODULE: ../src/OverlayTrigger.js
var OverlayTrigger = __webpack_require__(307);

// CONCATENATED MODULE: ../src/PageItem.js



var PageItem_jsxFileName = "/Users/jason/src/react-bootstrap/src/PageItem.js";

/* eslint-disable react/no-multi-comp */




var PageItem_propTypes = {
  /** Disables the PageItem */
  disabled: node_modules_prop_types_default.a.bool,

  /** Styles PageItem as active, and renders a `<span>` instead of an `<a>`. */
  active: node_modules_prop_types_default.a.bool,

  /** An accessible label indicating the active state.. */
  activeLabel: node_modules_prop_types_default.a.string
};
var PageItem_defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
function PageItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);

  var Component = active || disabled ? 'span' : SafeAnchor["a" /* default */];
  return react_default.a.createElement("li", {
    style: style,
    className: node_modules_classnames_default()(className, 'page-item', {
      active: active,
      disabled: disabled
    }),
    __source: {
      fileName: PageItem_jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    className: "page-link",
    disabled: disabled
  }, props, {
    __source: {
      fileName: PageItem_jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), children, active && activeLabel && react_default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: PageItem_jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, activeLabel)));
}
PageItem.propTypes = PageItem_propTypes;
PageItem.defaultProps = PageItem_defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    Object(esm_inheritsLoose["a" /* default */])(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["children"]);

      delete props.active;
      return react_default.a.createElement(PageItem, Object(esm_extends["a" /* default */])({}, props, {
        __source: {
          fileName: PageItem_jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react_default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: PageItem_jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, children || defaultValue), react_default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: PageItem_jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, label));
    };

    return _class;
  }(react_default.a.Component), _class.displayName = name, _temp;
}

var First = createButton('First', "\xAB");
var Prev = createButton('Prev', "\u2039", 'Previous');
var Ellipsis = createButton('Ellipsis', "\u2026", 'More');
var Next = createButton('Next', "\u203A");
var Last = createButton('Last', "\xBB");
// CONCATENATED MODULE: ../src/Pagination.js



var Pagination_jsxFileName = "/Users/jason/src/react-bootstrap/src/Pagination.js";





/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */

var Pagination_Pagination =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        size = _this$props.size,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "children", "size"]);

    return react_default.a.createElement("ul", Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix, size && bsPrefix + "-" + size),
      __source: {
        fileName: Pagination_jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), children);
  };

  return Pagination;
}(react_default.a.Component);

Pagination_Pagination.propTypes = {
  /** @default 'pagination' */
  bsPrefix: node_modules_prop_types_default.a.string.isRequired,

  /**
   * Set's the size of all PageItems.
   *
   * @type {('sm'|'lg')}
   */
  size: node_modules_prop_types_default.a.string
};
var DecoratedPagination = Object(ThemeProvider["a" /* createBootstrapComponent */])(Pagination_Pagination, 'pagination');
DecoratedPagination.First = First;
DecoratedPagination.Prev = Prev;
DecoratedPagination.Ellipsis = Ellipsis;
DecoratedPagination.Item = PageItem;
DecoratedPagination.Next = Next;
DecoratedPagination.Last = Last;
/* harmony default export */ var src_Pagination = (DecoratedPagination);
// CONCATENATED MODULE: ../src/Popover.js


var Popover_jsxFileName = "/Users/jason/src/react-bootstrap/src/Popover.js";





var Popover_propTypes = {
  /**
   * @default 'popover'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y_default()(node_modules_prop_types_default.a.oneOfType([node_modules_prop_types_default.a.string, node_modules_prop_types_default.a.number])),

  /**
   * Sets the direction the Popover is positioned towards.
   *
   * > This is generally provided by the `Overlay` component positioning the popover
   */
  placement: node_modules_prop_types_default.a.oneOf(['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']),

  /**
   * An Overlay injected set of props for positioning the popover arrow.
   *
   * > This is generally provided by the `Overlay` component positioning the popover
   */
  arrowProps: node_modules_prop_types_default.a.shape({
    ref: node_modules_prop_types_default.a.any,
    style: node_modules_prop_types_default.a.object
  }),

  /** @private */
  innerRef: node_modules_prop_types_default.a.any,

  /** @private */
  scheduleUpdate: node_modules_prop_types_default.a.func,

  /** @private */
  outOfBoundaries: node_modules_prop_types_default.a.bool,

  /**
   * Title content
   */
  title: node_modules_prop_types_default.a.node
};
var Popover_defaultProps = {
  placement: 'right'
};

function Popover(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "title", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);

  return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
    role: "tooltip",
    ref: innerRef,
    style: style,
    "x-placement": placement,
    className: node_modules_classnames_default()(className, bsPrefix, "bs-popover-" + placement)
  }, props, {
    __source: {
      fileName: Popover_jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
    className: "arrow"
  }, arrowProps, {
    __source: {
      fileName: Popover_jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), title && react_default.a.createElement("div", {
    className: bsPrefix + "-header h3",
    __source: {
      fileName: Popover_jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, title), react_default.a.createElement("div", {
    className: bsPrefix + "-body",
    __source: {
      fileName: Popover_jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, children));
}

Popover.propTypes = Popover_propTypes;
Popover.defaultProps = Popover_defaultProps;
/* harmony default export */ var src_Popover = (Object(ThemeProvider["a" /* createBootstrapComponent */])(Popover, 'popover'));
// CONCATENATED MODULE: ../src/ProgressBar.js




var ProgressBar_jsxFileName = "/Users/jason/src/react-bootstrap/src/ProgressBar.js";





var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;
  react_default.a.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = react_default.a.createElement(DecoratedProgressBar, {
      __source: {
        fileName: ProgressBar_jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
    if (child.type === element.type) return;
    var childIdentifier = react_default.a.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });
  return error;
}

var ProgressBar_propTypes = {
  /**
   * Minimum value progress can begin from
   */
  min: node_modules_prop_types_default.a.number,

  /**
   * Current value of progress
   */
  now: node_modules_prop_types_default.a.number,

  /**
   * Maximum value progress can reach
   */
  max: node_modules_prop_types_default.a.number,

  /**
   * Show label that represents visual percentage.
   * EG. 60%
   */
  label: node_modules_prop_types_default.a.node,

  /**
   * Hide's the label visually.
   */
  srOnly: node_modules_prop_types_default.a.bool,

  /**
   * Uses a gradient to create a striped effect.
   */
  striped: node_modules_prop_types_default.a.bool,

  /**
   * Animate's the stripes from right to left
   */
  animated: node_modules_prop_types_default.a.bool,

  /**
   * @private
   * @default 'progress-bar'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * Sets the background class of the progress bar.
   *
   * @type ('success'|'danger'|'warning'|'info')
   */
  variant: node_modules_prop_types_default.a.string,

  /**
   * Child elements (only allows elements of type <ProgressBar />)
   */
  children: onlyProgressBar,

  /**
   * @private
   */
  isChild: node_modules_prop_types_default.a.bool
};
var ProgressBar_defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar_ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ProgressBar, _React$Component);

  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.renderProgressBar = function renderProgressBar(_ref) {
    var _classNames;

    var min = _ref.min,
        now = _ref.now,
        max = _ref.max,
        label = _ref.label,
        srOnly = _ref.srOnly,
        striped = _ref.striped,
        animated = _ref.animated,
        className = _ref.className,
        style = _ref.style,
        variant = _ref.variant,
        bsPrefix = _ref.bsPrefix,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"]);

    return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
      role: "progressbar",
      className: node_modules_classnames_default()(className, bsPrefix + "-bar", (_classNames = {}, _classNames["bg-" + variant] = variant, _classNames[bsPrefix + "-bar-animated"] = animated, _classNames[bsPrefix + "-bar-striped"] = animated || striped, _classNames)),
      style: Object(esm_objectSpread["a" /* default */])({
        width: getPercentage(now, min, max) + "%"
      }, style),
      "aria-valuenow": now,
      "aria-valuemin": min,
      "aria-valuemax": max,
      __source: {
        fileName: ProgressBar_jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), srOnly ? react_default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: ProgressBar_jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, label) : label);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isChild = _this$props.isChild,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["isChild"]);

    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min,
        now = props.now,
        max = props.max,
        label = props.label,
        srOnly = props.srOnly,
        striped = props.striped,
        animated = props.animated,
        bsPrefix = props.bsPrefix,
        variant = props.variant,
        className = props.className,
        children = props.children,
        wrapperProps = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"]);

    return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, wrapperProps, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: ProgressBar_jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), children ? map(children, function (child) {
      return Object(react["cloneElement"])(child, {
        isChild: true
      });
    }) : this.renderProgressBar({
      min: min,
      now: now,
      max: max,
      label: label,
      srOnly: srOnly,
      striped: striped,
      animated: animated,
      bsPrefix: bsPrefix,
      variant: variant
    }));
  };

  return ProgressBar;
}(react_default.a.Component);

ProgressBar_ProgressBar.propTypes = ProgressBar_propTypes;
ProgressBar_ProgressBar.defaultProps = ProgressBar_defaultProps;
var DecoratedProgressBar = Object(ThemeProvider["a" /* createBootstrapComponent */])(ProgressBar_ProgressBar, 'progress');
/* harmony default export */ var src_ProgressBar = (DecoratedProgressBar);
// CONCATENATED MODULE: ../src/ResponsiveEmbed.js



var ResponsiveEmbed_jsxFileName = "/Users/jason/src/react-bootstrap/src/ResponsiveEmbed.js";




var ResponsiveEmbed_propTypes = {
  /**
   * @default 'embed-responsive'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * This component requires a single child element
   */
  children: node_modules_prop_types_default.a.element.isRequired,

  /**
   * Set the aspect ration of the embed
   */
  aspectRatio: node_modules_prop_types_default.a.oneOf(['21by9', '16by9', '4by3', '1by1'])
};
var ResponsiveEmbed_defaultProps = {
  aspectRatio: '1by1'
};

var ResponsiveEmbed_ResponsiveEmbed =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        aspectRatio = _this$props.aspectRatio,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "children", "aspectRatio"]);

    var child = react_default.a.Children.only(children);
    return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(bsPrefix, className, aspectRatio && bsPrefix + "-" + aspectRatio),
      __source: {
        fileName: ResponsiveEmbed_jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react_default.a.cloneElement(child, {
      className: node_modules_classnames_default()(child.props.className, bsPrefix + "-item")
    }));
  };

  return ResponsiveEmbed;
}(react_default.a.Component);

ResponsiveEmbed_ResponsiveEmbed.propTypes = ResponsiveEmbed_propTypes;
ResponsiveEmbed_ResponsiveEmbed.defaultProps = ResponsiveEmbed_defaultProps;
/* harmony default export */ var src_ResponsiveEmbed = (Object(ThemeProvider["a" /* createBootstrapComponent */])(ResponsiveEmbed_ResponsiveEmbed, 'embed-responsive'));
// EXTERNAL MODULE: ../src/Row.js
var Row = __webpack_require__(400);

// CONCATENATED MODULE: ../src/SplitButton.js



var SplitButton_jsxFileName = "/Users/jason/src/react-bootstrap/src/SplitButton.js";





/**
 * @inherits Button, Dropdown
 */

var SplitButton_SplitButton =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(SplitButton, _React$Component);

  function SplitButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        variant = _this$props.variant,
        title = _this$props.title,
        toggleLabel = _this$props.toggleLabel,
        children = _this$props.children,
        onClick = _this$props.onClick,
        href = _this$props.href,
        target = _this$props.target,
        menuRole = _this$props.menuRole,
        rootCloseEvent = _this$props.rootCloseEvent,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["id", "bsPrefix", "size", "variant", "title", "toggleLabel", "children", "onClick", "href", "target", "menuRole", "rootCloseEvent"]);

    return react_default.a.createElement(src_Dropdown, Object(esm_extends["a" /* default */])({}, props, {
      as: src_ButtonGroup,
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), react_default.a.createElement(Button["a" /* default */], {
      size: size,
      variant: variant,
      disabled: props.disabled,
      bsPrefix: bsPrefix,
      href: href,
      target: target,
      onClick: onClick,
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, title), react_default.a.createElement(src_Dropdown.Toggle, {
      split: true,
      id: id,
      size: size,
      variant: variant,
      disabled: props.disabled,
      childBsPrefix: bsPrefix,
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react_default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, toggleLabel)), react_default.a.createElement(src_Dropdown.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent,
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, children));
  };

  return SplitButton;
}(react_default.a.Component);

SplitButton_SplitButton.propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: node_modules_prop_types_default.a.any,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: node_modules_prop_types_default.a.string,

  /** An `href` passed to the non-toggle Button */
  href: node_modules_prop_types_default.a.string,

  /** An anchor `target` passed to the non-toggle Button */
  target: node_modules_prop_types_default.a.string,

  /** An `onClick` handler passed to the non-toggle Button */
  onClick: node_modules_prop_types_default.a.func,

  /** The content of the non-toggle Button.  */
  title: node_modules_prop_types_default.a.node.isRequired,

  /** Disables both Buttons  */
  disabled: node_modules_prop_types_default.a.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: node_modules_prop_types_default.a.string,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: node_modules_prop_types_default.a.string,

  /** @ignore */
  bsPrefix: node_modules_prop_types_default.a.string,

  /** @ignore */
  variant: node_modules_prop_types_default.a.string,

  /** @ignore */
  size: node_modules_prop_types_default.a.string
};
SplitButton_SplitButton.defaultProps = {
  toggleLabel: 'Toggle dropdown'
};
/* harmony default export */ var src_SplitButton = (SplitButton_SplitButton);
// EXTERNAL MODULE: ../src/TabContext.js
var TabContext = __webpack_require__(394);

// CONCATENATED MODULE: ../src/TabContainer.js


var TabContainer_jsxFileName = "/Users/jason/src/react-bootstrap/src/TabContainer.js";







var TabContainer_TabContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(TabContainer, _React$Component);

  function TabContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.getControlledId = function (key) {
      return _this.getKey(key, 'tabpane');
    };

    _this.getControllerId = function (key) {
      return _this.getKey(key, 'tab');
    };

    _this.state = {
      tabContext: {
        onSelect: _this.props.onSelect,
        activeKey: _this.props.activeKey,
        transition: _this.props.transition,
        mountOnEnter: _this.props.mountOnEnter,
        unmountOnExit: _this.props.unmountOnExit,
        getControlledId: _this.getControlledId,
        getControllerId: _this.getControllerId
      }
    };
    return _this;
  }

  TabContainer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var activeKey = _ref.activeKey,
        mountOnEnter = _ref.mountOnEnter,
        unmountOnExit = _ref.unmountOnExit,
        transition = _ref.transition;
    return {
      tabContext: Object(esm_objectSpread["a" /* default */])({}, prevState.tabContext, {
        activeKey: activeKey,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        transition: transition
      })
    };
  };

  var _proto = TabContainer.prototype;

  _proto.getKey = function getKey(key, type) {
    var _this$props = this.props,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    if (generateChildId) return generateChildId(key, type);
    return id ? id + "-" + type + "-" + key : null;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        onSelect = _this$props2.onSelect;
    return react_default.a.createElement(TabContext["a" /* default */].Provider, {
      value: this.state.tabContext,
      __source: {
        fileName: TabContainer_jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react_default.a.createElement(SelectableContext["a" /* default */].Provider, {
      value: onSelect,
      __source: {
        fileName: TabContainer_jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, children));
  };

  return TabContainer;
}(react_default.a.Component);

TabContainer_TabContainer.propTypes = {
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   *
   * @type {string}
   */
  id: function id(props) {
    var error = null;

    if (!props.generateChildId) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      error = node_modules_prop_types_default.a.string.apply(node_modules_prop_types_default.a, [props].concat(args));

      if (!error && !props.id) {
        error = new Error('In order to properly initialize Tabs in a way that is accessible ' + 'to assistive technologies (such as screen readers) an `id` or a ' + '`generateChildId` prop to TabContainer is required');
      }
    }

    return error;
  },

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   *
   * @type {{Transition | false}}
   * @default {Fade}
   */
  transition: node_modules_prop_types_default.a.oneOfType([node_modules_prop_types_default.a.oneOf([false]), lib["elementType"]]),

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: node_modules_prop_types_default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: node_modules_prop_types_default.a.bool,

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${eventKey}`
   */
  generateChildId: node_modules_prop_types_default.a.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: node_modules_prop_types_default.a.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: node_modules_prop_types_default.a.any
};
/* harmony default export */ var src_TabContainer = (uncontrollable_lib_default()(TabContainer_TabContainer, {
  activeKey: 'onSelect'
}));
// CONCATENATED MODULE: ../src/TabContent.js



var TabContent_jsxFileName = "/Users/jason/src/react-bootstrap/src/TabContent.js";






var TabContent_TabContent =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(TabContent, _React$Component);

  function TabContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        Component = _this$props.as,
        className = _this$props.className,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "as", "className"]);

    return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: node_modules_classnames_default()(className, bsPrefix),
      __source: {
        fileName: TabContent_jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  };

  return TabContent;
}(react_default.a.Component);

TabContent_TabContent.propTypes = {
  /**
   * @default 'tab-content'
   */
  bsPrefix: node_modules_prop_types_default.a.string,
  as: lib["elementType"]
};
TabContent_TabContent.defaultProps = {
  as: 'div'
};
/* harmony default export */ var src_TabContent = (Object(ThemeProvider["a" /* createBootstrapComponent */])(TabContent_TabContent, 'tab-content'));
// CONCATENATED MODULE: ../src/TabPane.js



var TabPane_jsxFileName = "/Users/jason/src/react-bootstrap/src/TabPane.js";










var TabPane_TabPane =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(TabPane, _React$Component);

  function TabPane() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabPane.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        className = _this$props.className,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        onExited = _this$props.onExited,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        Transition = _this$props.transition,
        _ = _this$props.eventKey,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "active", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "eventKey"]);

    if (!active && unmountOnExit) return null;
    var pane = react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
      role: "tabpanel",
      "aria-hidden": !active,
      className: node_modules_classnames_default()(className, bsPrefix, {
        active: active
      }),
      __source: {
        fileName: TabPane_jsxFileName,
        lineNumber: 112
      },
      __self: this
    }));
    if (Transition) pane = react_default.a.createElement(Transition, {
      in: active,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      mountOnEnter: mountOnEnter,
      unmountOnExit: mountOnEnter,
      __source: {
        fileName: TabPane_jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
    // conflict with the top level one.

    return react_default.a.createElement(TabContext["a" /* default */].Provider, {
      value: null,
      __source: {
        fileName: TabPane_jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react_default.a.createElement(SelectableContext["a" /* default */].Provider, {
      value: null,
      __source: {
        fileName: TabPane_jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, pane));
  };

  return TabPane;
}(react_default.a.Component);

TabPane_TabPane.propTypes = {
  /**
   * @default 'tab-pane'
   */
  bsPrefix: node_modules_prop_types_default.a.string,

  /**
   * A key that associates the `TabPane` with it's controlling `NavLink`.
   */
  eventKey: node_modules_prop_types_default.a.any,

  /**
   * Toggles the active state of the TabPane, this is generally controlled by a
   * TabContainer.
   */
  active: node_modules_prop_types_default.a.bool,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  transition: node_modules_prop_types_default.a.oneOfType([node_modules_prop_types_default.a.bool, lib["elementType"]]),

  /**
   *
   * @default 'tab-pane'
   */
  bsClass: node_modules_prop_types_default.a.string,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: node_modules_prop_types_default.a.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: node_modules_prop_types_default.a.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: node_modules_prop_types_default.a.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: node_modules_prop_types_default.a.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: node_modules_prop_types_default.a.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: node_modules_prop_types_default.a.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: node_modules_prop_types_default.a.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: node_modules_prop_types_default.a.bool,

  /** @ignore * */
  id: node_modules_prop_types_default.a.string,

  /** @ignore * */
  'aria-labelledby': node_modules_prop_types_default.a.string
};
/* harmony default export */ var src_TabPane = (mapContextToProps_default()(TabContext["a" /* default */].Consumer, function (context, props) {
  if (!context) return null;

  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(context, ["activeKey", "getControlledId", "getControllerId"]);

  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = Object(SelectableContext["b" /* makeEventKey */])(props.eventKey);
  return {
    active: props.active == null && key != null ? Object(SelectableContext["b" /* makeEventKey */])(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || Fade["a" /* default */]),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  };
}, Object(ThemeProvider["a" /* createBootstrapComponent */])(TabPane_TabPane, 'tab-pane')));
// CONCATENATED MODULE: ../src/Tab.js






/* eslint-disable react/require-render-return, react/no-unused-prop-types */

var Tab_Tab =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
  };

  return Tab;
}(react_default.a.Component);

Tab_Tab.propTypes = {
  title: node_modules_prop_types_default.a.node.isRequired
};
Tab_Tab.Container = src_TabContainer;
Tab_Tab.Content = src_TabContent;
Tab_Tab.Pane = src_TabPane;
/* harmony default export */ var src_Tab = (Tab_Tab);
// EXTERNAL MODULE: ../src/Table.js
var Table = __webpack_require__(315);

// CONCATENATED MODULE: ../src/Tabs.js




var Tabs_jsxFileName = "/Users/jason/src/react-bootstrap/src/Tabs.js";












var Tabs_TabContainer = src_TabContainer.ControlledComponent;
var Tabs_propTypes = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: node_modules_prop_types_default.a.any,

  /**
   * Navigation style
   *
   * @type {('tabs'| 'pills')}
   */
  variant: node_modules_prop_types_default.a.string,

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   *
   * @type {Transition | false}
   * @default {Fade}
   */
  transition: node_modules_prop_types_default.a.oneOfType([node_modules_prop_types_default.a.oneOf([false]), lib["elementType"]]),

  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   *
   * @type {string}
   */
  id: isRequiredForA11y_default()(node_modules_prop_types_default.a.string),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   *   Any eventKey,
   *   SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: node_modules_prop_types_default.a.func,

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: node_modules_prop_types_default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: node_modules_prop_types_default.a.bool
};
var Tabs_defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

var Tabs_Tabs =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(Tabs, _React$Component);

  function Tabs() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return react_default.a.createElement(NavItem["a" /* default */], {
      as: NavLink["a" /* default */],
      eventKey: eventKey,
      disabled: disabled,
      className: tabClassName,
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, title);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        onSelect = _this$props.onSelect,
        transition = _this$props.transition,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        children = _this$props.children,
        _this$props$activeKey = _this$props.activeKey,
        activeKey = _this$props$activeKey === void 0 ? getDefaultActiveKey(children) : _this$props$activeKey,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);

    return react_default.a.createElement(Tabs_TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      transition: transition,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit,
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react_default.a.createElement(Nav["a" /* default */], Object(esm_extends["a" /* default */])({}, props, {
      role: "tablist",
      as: "nav",
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), map(children, this.renderTab)), react_default.a.createElement(src_TabContent, {
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, map(children, function (child) {
      var childProps = Object(esm_objectSpread["a" /* default */])({}, child.props);

      delete childProps.title;
      delete childProps.disabled;
      delete childProps.tabClassName;
      return react_default.a.createElement(src_TabPane, Object(esm_extends["a" /* default */])({}, childProps, {
        __source: {
          fileName: Tabs_jsxFileName,
          lineNumber: 144
        },
        __self: this
      }));
    })));
  };

  return Tabs;
}(react_default.a.Component);

Tabs_Tabs.propTypes = Tabs_propTypes;
Tabs_Tabs.defaultProps = Tabs_defaultProps;
/* harmony default export */ var src_Tabs = (uncontrollable_lib_default()(Tabs_Tabs, {
  activeKey: 'onSelect'
}));
// CONCATENATED MODULE: ../src/ToggleButton.js



var ToggleButton_jsxFileName = "/Users/jason/src/react-bootstrap/src/ToggleButton.js";





var noop = function noop() {};

var ToggleButton_propTypes = {
  /**
   * The `<input>` element `type`
   */
  type: node_modules_prop_types_default.a.oneOf(['checkbox', 'radio']),

  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: node_modules_prop_types_default.a.string,

  /**
   * The checked state of the input, managed by `<ToggleButtonGroup>` automatically
   */
  checked: node_modules_prop_types_default.a.bool,

  /**
   * The disabled state of both the label and input
   */
  disabled: node_modules_prop_types_default.a.bool,

  /**
   * A callback fired when the underlying input element changes. This is passed
   * directly to the `<input>` so shares the same signature as a native `onChange` event.
   */
  onChange: node_modules_prop_types_default.a.func,

  /**
   * The value of the input, should be unique amoungst it's siblings when nested in a
   * `ToggleButtonGroup`.
   */
  value: node_modules_prop_types_default.a.any.isRequired,

  /**
   * A ref attached to the `<input>` element
   * @type {ReactRef}
   */
  inputRef: node_modules_prop_types_default.a.any,

  /** @ignore */
  innerRef: node_modules_prop_types_default.a.any
};

var ToggleButton_ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ToggleButton, _React$Component);

  function ToggleButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: true
      });
    };

    _this.handleBlur = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: false
      });
    };

    return _this;
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        name = _this$props.name,
        className = _this$props.className,
        checked = _this$props.checked,
        type = _this$props.type,
        onChange = _this$props.onChange,
        value = _this$props.value,
        disabled = _this$props.disabled,
        inputRef = _this$props.inputRef,
        innerRef = _this$props.innerRef,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef", "innerRef"]);

    var focused = this.state.focused;
    return react_default.a.createElement(Button["a" /* default */], Object(esm_extends["a" /* default */])({}, props, {
      ref: innerRef,
      className: node_modules_classnames_default()(className, focused && 'focus', disabled && 'disabled'),
      type: null,
      active: !!checked,
      as: "label",
      __source: {
        fileName: ToggleButton_jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), react_default.a.createElement("input", {
      name: name,
      type: type,
      value: value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: onChange || noop,
      __source: {
        fileName: ToggleButton_jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), children);
  };

  return ToggleButton;
}(react_default.a.Component);

ToggleButton_ToggleButton.propTypes = ToggleButton_propTypes;
/* harmony default export */ var src_ToggleButton = (react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(ToggleButton_ToggleButton, Object(esm_extends["a" /* default */])({
    innerRef: ref
  }, props, {
    __source: {
      fileName: ToggleButton_jsxFileName,
      lineNumber: 114
    },
    __self: this
  }));
}));
// EXTERNAL MODULE: ../node_modules/invariant/browser.js
var browser = __webpack_require__(392);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ../src/ToggleButtonGroup.js



var ToggleButtonGroup_jsxFileName = "/Users/jason/src/react-bootstrap/src/ToggleButtonGroup.js";








var ToggleButtonGroup_propTypes = {
  /**
   * An HTML `<input>` name for each child button.
   *
   * __Required if `type` is set to `'radio'`__
   */
  name: node_modules_prop_types_default.a.string,

  /**
   * The value, or array of values, of the active (pressed) buttons
   *
   * @controllable onChange
   */
  value: node_modules_prop_types_default.a.any,

  /**
   * Callback fired when a button is pressed, depending on whether the `type`
   * is `'radio'` or `'checkbox'`, `onChange` will be called with the value or
   * array of active values
   *
   * @controllable values
   */
  onChange: node_modules_prop_types_default.a.func,

  /**
   * The input `type` of the rendered buttons, determines the toggle behavior
   * of the buttons
   */
  type: node_modules_prop_types_default.a.oneOf(['checkbox', 'radio']).isRequired
};
var ToggleButtonGroup_defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup_ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(esm_inheritsLoose["a" /* default */])(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var value = this.props.value;
    return value == null ? [] : [].concat(value);
  };

  _proto.handleToggle = function handleToggle(value, event) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) onChange(value, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== value;
      }), event);
    } else {
      onChange(values.concat([value]), event);
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props2, ["children", "type", "name"]);

    delete props.onChange;
    delete props.value;
    var values = this.getValues();
    !(type !== 'radio' || !!name) ?  false ? undefined : browser_default()(false) : void 0;
    return react_default.a.createElement(src_ButtonGroup, Object(esm_extends["a" /* default */])({}, props, {
      toggle: true,
      __source: {
        fileName: ToggleButtonGroup_jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), map(children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler(e) {
        return _this.handleToggle(value, e);
      };

      return react_default.a.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: values.indexOf(value) !== -1,
        onChange: Object(createChainedFunction["a" /* default */])(onChange, handler)
      });
    }));
  };

  return ToggleButtonGroup;
}(react_default.a.Component);

ToggleButtonGroup_ToggleButtonGroup.propTypes = ToggleButtonGroup_propTypes;
ToggleButtonGroup_ToggleButtonGroup.defaultProps = ToggleButtonGroup_defaultProps;
var UncontrolledToggleButtonGroup = uncontrollable_lib_default()(ToggleButtonGroup_ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = src_ToggleButton;
/* harmony default export */ var src_ToggleButtonGroup = (UncontrolledToggleButtonGroup);
// EXTERNAL MODULE: ../src/Tooltip.js
var Tooltip = __webpack_require__(308);

// CONCATENATED MODULE: ../src/index.js
































































































































// EXTERNAL MODULE: ./node_modules/formik/dist/formik.es6.js
var formik_es6 = __webpack_require__(649);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(650);
var yup_lib_default = /*#__PURE__*/__webpack_require__.n(yup_lib);

// EXTERNAL MODULE: ./node_modules/react-live/dist/react-live.es.js
var react_live_es = __webpack_require__(722);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var helpers_objectWithoutPropertiesLoose = __webpack_require__(54);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(helpers_objectWithoutPropertiesLoose);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(704);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(707);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(708);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./src/components/PlaceholderImage.js








var PlaceholderImage_PlaceholderImage =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(PlaceholderImage, _React$Component);

  function PlaceholderImage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.image = react_default.a.createRef();
    return _this;
  }

  var _proto = PlaceholderImage.prototype;

  _proto.componentDidMount =
  /*#__PURE__*/
  function () {
    var _componentDidMount = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var _ref, holderjs;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, 937, 7));

            case 2:
              _ref = _context.sent;
              holderjs = _ref.default;
              holderjs.run({
                domain: 'holder.js',
                images: this.image.current,
                object: null,
                bgnodes: null,
                stylenodes: null
              });
              holderjs.setResizeUpdate(this.image.current, false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function componentDidMount() {
      return _componentDidMount.apply(this, arguments);
    };
  }();

  _proto.render = function render() {
    var _this$props = this.props,
        width = _this$props.width,
        height = _this$props.height,
        text = _this$props.text,
        bg = _this$props.bg,
        fg = _this$props.fg,
        rest = objectWithoutPropertiesLoose_default()(_this$props, ["width", "height", "text", "bg", "fg"]);

    var src = "holder.js/" + width + "x" + height + "?text=" + text + "&auto=yes&bg=" + bg + "&fg=" + fg;
    return react_default.a.createElement("img", Object.assign({
      ref: this.image,
      "data-src": src,
      alt: text
    }, rest));
  };

  return PlaceholderImage;
}(react_default.a.Component);

/* harmony default export */ var components_PlaceholderImage = (PlaceholderImage_PlaceholderImage);
// CONCATENATED MODULE: ./src/components/Sonnet.js



var Sonnet_Sonnet =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Sonnet, _React$Component);

  function Sonnet() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    __webpack_require__.e(/* import() */ 39).then(__webpack_require__.t.bind(null, 938, 7)).then(function (s) {
      return _this.setState({
        sonnet: s.sonnets.random()
      });
    });
    return _this;
  }

  var _proto = Sonnet.prototype;

  _proto.render = function render() {
    var sonnet = this.state.sonnet;
    if (!sonnet) return react_default.a.createElement("p", null);
    return react_default.a.createElement("p", null, sonnet.lines.slice(0, 10).join(' '));
  };

  return Sonnet;
}(react_default.a.Component);

/* harmony default export */ var components_Sonnet = (Sonnet_Sonnet);
// CONCATENATED MODULE: ./src/components/ReactPlayground.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactPlayground_Playground; });






/* eslint-disable react/no-multi-comp */













var scope = objectSpread_default()({}, src_namespaceObject, {
  ReactDOM: react_dom_default.a,
  classNames: classnames_default.a,
  PropTypes: prop_types_default.a,
  Sonnet: components_Sonnet,
  formik: formik_es6,
  yup: yup_lib_default.a,
  PlaceholderImage: components_PlaceholderImage
});

var StyledError = Object(styled["styled"])(react_live_es["b" /* LiveError */], "StyledError", __webpack_require__(742), "styled-error", "styledError");
var StyledProvider = Object(styled["styled"])(react_live_es["d" /* LiveProvider */], "StyledProvider", __webpack_require__(744), "styled-provider", "styledProvider");
var StyledEditor = Object(styled["styled"])(react_live_es["a" /* LiveEditor */], "StyledEditor", __webpack_require__(746), "styled-editor", "styledEditor");
var EditorInfoMessage = Object(styled["styled"])('div', "EditorInfoMessage", __webpack_require__(748), "editor-info-message", "editorInfoMessage");
var StyledExample = Object(styled["styled"])('div', "StyledExample", __webpack_require__(750), "styled-example", "styledExample");
var uid = 0;

var ReactPlayground_Editor =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Editor, _React$Component);

  function Editor() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      ignoreTab: false
    };
    _this.id = "described-by-" + ++uid;

    _this.handleKeyDown = function (event) {
      var key = event.key;

      if (_this.state.ignoreTab && key !== 'Tab' && key !== 'Shift') {
        if (key === 'Enter') event.preventDefault();

        _this.setState({
          ignoreTab: false
        });
      }

      if (!_this.state.ignoreTab && key === 'Escape') {
        _this.setState({
          ignoreTab: true
        });
      }
    };

    _this.handleFocus = function (e) {
      if (e.target !== e.currentTarget) return;

      _this.setState({
        ignoreTab: !_this.mouseDown,
        keyboardFocused: !_this.mouseDown
      });
    };

    _this.handleMouseDown = function () {
      _this.mouseDown = true;
      window.setTimeout(function () {
        _this.mouseDown = false;
      }, 0);
    };

    return _this;
  }

  var _proto = Editor.prototype;

  _proto.render = function render() {
    var _this$state = this.state,
        keyboardFocused = _this$state.keyboardFocused,
        ignoreTab = _this$state.ignoreTab;
    return react_default.a.createElement("div", {
      className: "position-relative"
    }, react_default.a.createElement(StyledEditor, {
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      ignoreTabKey: ignoreTab,
      "aria-describedby": this.id,
      "aria-label": "Example code editor"
    }), (keyboardFocused || !ignoreTab) && react_default.a.createElement(EditorInfoMessage, {
      id: this.id,
      "aria-live": "polite"
    }, ignoreTab ? react_default.a.createElement(react_default.a.Fragment, null, "Press ", react_default.a.createElement("kbd", null, "enter"), " or type a key to enable tab-to-indent") : react_default.a.createElement(react_default.a.Fragment, null, "Press ", react_default.a.createElement("kbd", null, "esc"), " to disable tab trapping")));
  };

  return Editor;
}(react_default.a.Component);

var prettierComment = /(\{\s*\/\*\s+prettier-ignore\s+\*\/\s*\})|(\/\/\s+prettier-ignore)/gim;

var _require = __webpack_require__(752),
    background = _require.background,
    foreground = _require.foreground;

var Preview = Object(react_live_es["e" /* withLive */])(
/*#__PURE__*/
function (_React$Component2) {
  inheritsLoose_default()(_class2, _React$Component2);

  function _class2() {
    var _this2;

    _this2 = _React$Component2.call(this) || this;

    _this2.handleClick = function (e) {
      if (e.target.tagName === 'A') e.preventDefault();
    };

    _this2.attachRef = function (ref) {
      _this2.example = ref;

      _this2.runHolder();
    };

    _this2.example = null;
    return _this2;
  }

  var _proto2 = _class2.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    var _this3 = this;

    __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, 937, 7)).then(function (_ref) {
      var hjs = _ref.default;
      _this3.hjs = hjs;
      hjs.addTheme('gray', {
        bg: background,
        fg: foreground,
        font: 'Helvetica',
        fontweight: 'normal'
      });

      _this3.runHolder();
    });
  };

  _proto2.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.live.element !== this.props.live.element) this.runHolder();
  }; // prevent links in examples from navigating


  _proto2.runHolder = function runHolder() {
    if (!this.hjs || !this.example) return;
    this.hjs.run({
      theme: 'gray',
      images: querySelectorAll_default()(this.example, 'img')
    });
  };

  _proto2.render = function render() {
    var _this$props = this.props,
        showCode = _this$props.showCode,
        className = _this$props.className;
    return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(StyledExample, {
      role: "region",
      "aria-label": "Code Example",
      ref: this.attachRef,
      showCode: showCode,
      className: className,
      onClick: this.handleClick
    }, react_default.a.createElement(react_live_es["c" /* LivePreview */], null)), react_default.a.createElement(StyledError, null));
  };

  return _class2;
}(react_default.a.Component)); // eslint-disable-next-line react/no-multi-comp

var ReactPlayground_Playground =
/*#__PURE__*/
function (_React$Component3) {
  inheritsLoose_default()(Playground, _React$Component3);

  function Playground() {
    return _React$Component3.apply(this, arguments) || this;
  }

  var _proto3 = Playground.prototype;

  _proto3.render = function render() {
    var _this$props2 = this.props,
        codeText = _this$props2.codeText,
        exampleClassName = _this$props2.exampleClassName,
        _this$props2$showCode = _this$props2.showCode,
        showCode = _this$props2$showCode === void 0 ? true : _this$props2$showCode;
    return react_default.a.createElement(StyledProvider, {
      scope: scope,
      code: codeText.replace(prettierComment, ''),
      mountStylesheet: false,
      noInline: codeText.includes('render(')
    }, react_default.a.createElement(Preview, {
      showCode: showCode,
      className: exampleClassName
    }), showCode && react_default.a.createElement(ReactPlayground_Editor, {
      onChange: this.handleChange
    }));
  };

  return Playground;
}(react_default.a.Component);

ReactPlayground_Playground.propTypes = {
  codeText: prop_types_default.a.string.isRequired
};


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

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"styledError":"ReactPlayground-StyledError-module--styled-error--I3xYq alert alert-danger text-monospace"};

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"styledProvider":"ReactPlayground-StyledProvider-module--styled-provider--A3Tfd"};

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"styledEditor":"ReactPlayground-StyledEditor-module--styled-editor--TvjTT prism-module--prism--2-Zwl"};

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"editorInfoMessage":"ReactPlayground-EditorInfoMessage-module--editor-info-message--3R6MO p-2 alert alert-info"};

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"styledExample":"ReactPlayground-StyledExample-module--styled-example--13Nwp bs-example","showCode":"ReactPlayground-StyledExample-module--show-code--rW9o2"};

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"background":"#373940","foreground":"#999"};

/***/ })

}]);
//# sourceMappingURL=3-26038060630ad038f389.js.map