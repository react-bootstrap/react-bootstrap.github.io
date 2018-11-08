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

    _this2.componentDidUpdate = function (prevProps) {
      if (prevProps.live.element !== _this2.props.live.element) _this2.runHolder();
    };

    _this2.handleClick = function (e) {
      if (e.target.tagName === 'A') e.preventDefault();
    };

    _this2.attachRef = function (ref) {
      _this2.example = ref;

      _this2.runHolder();
    };

    _this2.example = null;
    __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, 937, 7)).then(function (_ref) {
      var hjs = _ref.default;
      _this2.hjs = hjs;
      hjs.addTheme('gray', {
        bg: background,
        fg: foreground,
        font: 'Helvetica',
        fontweight: 'normal'
      });

      _this2.runHolder();
    });
    return _this2;
  }

  var _proto2 = _class2.prototype;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy05MmY4N2FhY2Q3YjRkMDVkZjQ0OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9zcmMvQmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL2RpdldpdGhDbGFzc05hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9DbG9zZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0FsZXJ0LmpzIiwid2VicGFjazovLy8uLi9zcmMvQnJlYWRjcnVtYkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9CcmVhZGNydW1iLmpzIiwid2VicGFjazovLy8uLi9zcmMvQnV0dG9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9CdXR0b25Ub29sYmFyLmpzIiwid2VicGFjazovLy8uLi9zcmMvQ2FyZEltZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9DYXJkQ29sdW1ucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0NhcmREZWNrLmpzIiwid2VicGFjazovLy8uLi9zcmMvQ2FyZEdyb3VwLmpzIiwid2VicGFjazovLy8uLi9zcmMvQ2Fyb3VzZWxDYXB0aW9uLmpzIiwid2VicGFjazovLy8uLi9zcmMvQ2Fyb3VzZWxJdGVtLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvRWxlbWVudENoaWxkcmVuLmpzIiwid2VicGFjazovLy8uLi9zcmMvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Ecm9wZG93bk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Ecm9wZG93blRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0Ryb3Bkb3duSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi9zcmMvRHJvcGRvd25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Gb3JtQ2hlY2tJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0Zvcm1DaGVja0xhYmVsLmpzIiwid2VicGFjazovLy8uLi9zcmMvRm9ybUNoZWNrLmpzIiwid2VicGFjazovLy8uLi9zcmMvRm9ybUxhYmVsLmpzIiwid2VicGFjazovLy8uLi9zcmMvRm9ybVRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Gb3JtLmpzIiwid2VicGFjazovLy8uLi9zcmMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9GaWd1cmVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0ZpZ3VyZUNhcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9GaWd1cmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9JbnB1dEdyb3VwLmpzIiwid2VicGFjazovLy8uLi9zcmMvTGlzdEdyb3VwSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0xpc3RHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL01lZGlhLmpzIiwid2VicGFjazovLy8uLi9zcmMvTW9kYWxCb2R5LmpzIiwid2VicGFjazovLy8uLi9zcmMvTW9kYWxEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Nb2RhbEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL01vZGFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL01vZGFsSGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvTW9kYWxUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL0Jvb3RzdHJhcE1vZGFsTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL01vZGFsLmpzIiwid2VicGFjazovLy8uLi9zcmMvTmF2RHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9QYWdlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Qb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9SZXNwb25zaXZlRW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9TcGxpdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1RhYkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1RhYkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9UYWJQYW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvVGFiLmpzIiwid2VicGFjazovLy8uLi9zcmMvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1RvZ2dsZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1RvZ2dsZUJ1dHRvbkdyb3VwLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1BsYWNlaG9sZGVySW1hZ2UuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1Nvbm5ldC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUmVhY3RQbGF5Z3JvdW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvSnVtYm90cm9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlYWN0UGxheWdyb3VuZC1TdHlsZWRFcnJvci5tb2R1bGUuc2Nzcz8wYWUwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlYWN0UGxheWdyb3VuZC1TdHlsZWRQcm92aWRlci5tb2R1bGUuc2Nzcz84MjUyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlYWN0UGxheWdyb3VuZC1TdHlsZWRFZGl0b3IubW9kdWxlLnNjc3M/M2IyMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWFjdFBsYXlncm91bmQtRWRpdG9ySW5mb01lc3NhZ2UubW9kdWxlLnNjc3M/MzFlOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWFjdFBsYXlncm91bmQtU3R5bGVkRXhhbXBsZS5tb2R1bGUuc2Nzcz9jYjg3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlYWN0UGxheWdyb3VuZC0ubW9kdWxlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcblxuY2xhc3MgQmFkZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBAZGVmYXVsdCAnYmFkZ2UnICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2aXN1YWwgc3R5bGUgb2YgdGhlIGJhZGdlXG4gICAgICpcbiAgICAgKiBAdHlwZSB7KCdwcmltYXJ5J3wnc2Vjb25kYXJ5J3wnc3VjY2Vzcyd8J2Rhbmdlcid8J3dhcm5pbmcnfCdpbmZvfCdsaWdodCd8J2RhcmsnKX1cbiAgICAgKi9cbiAgICB2YXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBgcGlsbGAgbW9kaWZpZXIgdG8gbWFrZSBiYWRnZXMgbW9yZSByb3VuZGVkIHdpdGhcbiAgICAgKiBzb21lIGFkZGl0aW9uYWwgaG9yaXpvbnRhbCBwYWRkaW5nXG4gICAgICovXG4gICAgcGlsbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBpbGw6IGZhbHNlLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJzUHJlZml4LCB2YXJpYW50LCBwaWxsLCBjbGFzc05hbWUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBic1ByZWZpeCxcbiAgICAgICAgICBwaWxsICYmIGAke2JzUHJlZml4fS1waWxsYCxcbiAgICAgICAgICB2YXJpYW50ICYmIGAke2JzUHJlZml4fS0ke3ZhcmlhbnR9YCxcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoQmFkZ2UsICdiYWRnZScpO1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcblxuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICd0YWJsZSdcbiAgICAgKi9cbiAgICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgemVicmEtc3RyaXBpbmcgdG8gYW55IHRhYmxlIHJvdyB3aXRoaW4gdGhlIGA8dGJvZHk+YC5cbiAgICAgKi9cbiAgICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYm9yZGVycyBvbiBhbGwgc2lkZXMgb2YgdGhlIHRhYmxlIGFuZCBjZWxscy5cbiAgICAgKi9cbiAgICBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgYSBob3ZlciBzdGF0ZSBvbiB0YWJsZSByb3dzIHdpdGhpbiBhIGA8dGJvZHk+YC5cbiAgICAgKi9cbiAgICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIHRhYmxlcyBtb3JlIGNvbXBhY3QgYnkgY3V0dGluZyBjZWxsIHBhZGRpbmcgaW4gaGFsZiBieSBzZXR0aW5nXG4gICAgICogc2l6ZSBhcyBgc21gLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnQgdGhlIGNvbG9ycyBvZiB0aGUgdGFibGUg4oCUIHdpdGggbGlnaHQgdGV4dCBvbiBkYXJrIGJhY2tncm91bmRzXG4gICAgICogYnkgc2V0dGluZyB2YXJpYW50IGFzIGBkYXJrYC5cbiAgICAgKi9cbiAgICB2YXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogUmVzcG9uc2l2ZSB0YWJsZXMgYWxsb3cgdGFibGVzIHRvIGJlIHNjcm9sbGVkIGhvcml6b250YWxseSB3aXRoIGVhc2UuXG4gICAgICogQWNyb3NzIGV2ZXJ5IGJyZWFrcG9pbnQsIHVzZSBgcmVzcG9uc2l2ZWAgZm9yIGhvcml6b250YWxseVxuICAgICAqIHNjcm9sbGluZyB0YWJsZXMuIFJlc3BvbnNpdmUgdGFibGVzIGFyZSB3cmFwcGVkIGF1dG9tYXRpY2FsbHkgaW4gYSBgZGl2YC5cbiAgICAgKiBVc2UgYHJlc3BvbnNpdmU9XCJzbVwiYCwgYHJlc3BvbnNpdmU9XCJtZFwiYCwgYHJlc3BvbnNpdmU9XCJsZ1wiYCwgb3JcbiAgICAgKiBgcmVzcG9uc2l2ZT1cInhsXCJgIGFzIG5lZWRlZCB0byBjcmVhdGUgcmVzcG9uc2l2ZSB0YWJsZXMgdXAgdG9cbiAgICAgKiBhIHBhcnRpY3VsYXIgYnJlYWtwb2ludC4gRnJvbSB0aGF0IGJyZWFrcG9pbnQgYW5kIHVwLCB0aGUgdGFibGUgd2lsbFxuICAgICAqIGJlaGF2ZSBub3JtYWxseSBhbmQgbm90IHNjcm9sbCBob3Jpem9udGFsbHkuXG4gICAgICovXG4gICAgcmVzcG9uc2l2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHJpcGVkLFxuICAgICAgYm9yZGVyZWQsXG4gICAgICBob3ZlcixcbiAgICAgIHNpemUsXG4gICAgICB2YXJpYW50LFxuICAgICAgcmVzcG9uc2l2ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgIGJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdmFyaWFudCAmJiBgJHtic1ByZWZpeH0tJHt2YXJpYW50fWAsXG4gICAgICBzaXplICYmIGAke2JzUHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHN0cmlwZWQgJiYgYCR7YnNQcmVmaXh9LXN0cmlwZWRgLFxuICAgICAgYm9yZGVyZWQgJiYgYCR7YnNQcmVmaXh9LWJvcmRlcmVkYCxcbiAgICAgIGhvdmVyICYmIGAke2JzUHJlZml4fS1ob3ZlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IHRhYmxlID0gPHRhYmxlIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc2VzfSAvPjtcblxuICAgIGlmIChyZXNwb25zaXZlKSB7XG4gICAgICBsZXQgcmVzcG9uc2l2ZUNsYXNzID0gYCR7YnNQcmVmaXh9LXJlc3BvbnNpdmVgO1xuICAgICAgaWYgKHR5cGVvZiByZXNwb25zaXZlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXNwb25zaXZlQ2xhc3MgPSBgJHtyZXNwb25zaXZlQ2xhc3N9LSR7cmVzcG9uc2l2ZX1gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Jlc3BvbnNpdmVDbGFzc30+e3RhYmxlfTwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFibGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KFRhYmxlLCAndGFibGUnKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NOYW1lID0+XG4gIFJlYWN0LmZvcndhcmRSZWYoKHAsIHJlZikgPT4gKFxuICAgIDxkaXYgey4uLnB9IHJlZj17cmVmfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMocC5jbGFzc05hbWUsIGNsYXNzTmFtZSl9IC8+XG4gICkpO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnQ2xvc2UnLFxufTtcblxuY2xhc3MgQ2xvc2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntsYWJlbH08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbkNsb3NlQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNsb3NlQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VCdXR0b247XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcbmltcG9ydCB1bmNvbnRyb2xsYWJsZSBmcm9tICd1bmNvbnRyb2xsYWJsZSc7XG5pbXBvcnQgZGl2V2l0aENsYXNzTmFtZSBmcm9tICcuL3V0aWxzL2RpdldpdGhDbGFzc05hbWUnO1xuXG5pbXBvcnQgY3JlYXRlV2l0aEJzUHJlZml4IGZyb20gJy4vdXRpbHMvY3JlYXRlV2l0aEJzUHJlZml4JztcbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgRmFkZSBmcm9tICcuL0ZhZGUnO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xuaW1wb3J0IFNhZmVBbmNob3IgZnJvbSAnLi9TYWZlQW5jaG9yJztcblxuLyoqXG4gKiBAcHJvcGVydHkge0FsZXJ0SGVhZGluZ30gSGVhZGluZ1xuICogQHByb3BlcnR5IHtBbGVydExpbmt9IExpbmtcbiAqL1xuY2xhc3MgQWxlcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdhbGVydCdcbiAgICAgKi9cbiAgICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbGVydCB2aXN1YWwgdmFyaWFudFxuICAgICAqXG4gICAgICogQHR5cGUgeydwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZGFyaycgfCAnbGlnaHQnfVxuICAgICAqL1xuICAgIHZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgcHJvcGVybHkgYWxpZ25lZCBkaXNtaXNzIGJ1dHRvbiwgYXMgd2VsbCBhc1xuICAgICAqIGFkZGluZyBleHRyYSBob3Jpem9udGFsIHBhZGRpbmcgdG8gdGhlIEFsZXJ0LlxuICAgICAqL1xuICAgIGRpc21pc3NpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHRoZSB2aXN1YWwgc3RhdGUgb2YgdGhlIEFsZXJ0LlxuICAgICAqXG4gICAgICogQGNvbnRyb2xsYWJsZSBvbkNsb3NlXG4gICAgICovXG4gICAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIGFsZXJ0IGlzIGNsb3NlZC5cbiAgICAgKlxuICAgICAqIEBjb250cm9sbGFibGUgc2hvd1xuICAgICAqL1xuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGV4dCBmb3IgYWxlcnQgY2xvc2UgYnV0dG9uLlxuICAgICAqL1xuICAgIGNsb3NlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKiogQSBgcmVhY3QtdHJhbnNpdGlvbi1ncm91cGAgVHJhbnNpdGlvbiBjb21wb25lbnQgdXNlZCB0byBhbmltYXRlIHRoZSBBbGVydCBvbiBkaXNtaXNzYWwuICovXG4gICAgdHJhbnNpdGlvbjogZWxlbWVudFR5cGUsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93OiB0cnVlLFxuICAgIHRyYW5zaXRpb246IEZhZGUsXG4gICAgY2xvc2VMYWJlbDogJ0Nsb3NlIGFsZXJ0JyxcbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9IGUgPT4ge1xuICAgIHRoaXMucHJvcHMub25DbG9zZShmYWxzZSwgZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGJzUHJlZml4LFxuICAgICAgc2hvdyxcbiAgICAgIGNsb3NlTGFiZWwsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHZhcmlhbnQsXG4gICAgICBkaXNtaXNzaWJsZSxcbiAgICAgIHRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gICAgICBvbkNsb3NlOiBfLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGFsZXJ0ID0gKFxuICAgICAgPGRpdlxuICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICB7Li4uKFRyYW5zaXRpb24gPyBwcm9wcyA6IHVuZGVmaW5lZCl9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgYnNQcmVmaXgsXG4gICAgICAgICAgdmFyaWFudCAmJiBgJHtic1ByZWZpeH0tJHt2YXJpYW50fWAsXG4gICAgICAgICAgZGlzbWlzc2libGUgJiYgYCR7YnNQcmVmaXh9LWRpc21pc3NpYmxlYCxcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2Rpc21pc3NpYmxlICYmIChcbiAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0gbGFiZWw9e2Nsb3NlTGFiZWx9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBpZiAoIVRyYW5zaXRpb24pIHJldHVybiBzaG93ID8gYWxlcnQgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmFuc2l0aW9uIHVubW91bnRPbkV4aXQgey4uLnByb3BzfSBpbj17c2hvd30+XG4gICAgICAgIHthbGVydH1cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IERlY29yYXRlZEFsZXJ0ID0gdW5jb250cm9sbGFibGUoXG4gIGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChBbGVydCwgJ2FsZXJ0JyksXG4gIHtcbiAgICBzaG93OiAnb25DbG9zZScsXG4gIH0sXG4pO1xuXG5jb25zdCBEaXZTdHlsZWRBc0g0ID0gZGl2V2l0aENsYXNzTmFtZSgnaDQnKTtcblxuRGVjb3JhdGVkQWxlcnQuTGluayA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnYWxlcnQtbGluaycsIHtcbiAgQ29tcG9uZW50OiBTYWZlQW5jaG9yLFxufSk7XG5cbkRlY29yYXRlZEFsZXJ0LkhlYWRpbmcgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2FsZXJ0LWhlYWRpbmcnLCB7XG4gIENvbXBvbmVudDogRGl2U3R5bGVkQXNINCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZWNvcmF0ZWRBbGVydDtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgU2FmZUFuY2hvciBmcm9tICcuL1NhZmVBbmNob3InO1xuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcblxuY2xhc3MgQnJlYWRjcnVtYkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdicmVhZGNydW1iLWl0ZW0nXG4gICAgICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHZpc3VhbCBcImFjdGl2ZVwiIHN0YXRlIHRvIGEgQnJlYWRjcnVtYlxuICAgICAqIEl0ZW0gYW5kIGRpc2FibGVzIHRoZSBsaW5rLlxuICAgICAqL1xuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogYGhyZWZgIGF0dHJpYnV0ZSBmb3IgdGhlIGlubmVyIGBhYCBlbGVtZW50XG4gICAgICovXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBgdGl0bGVgIGF0dHJpYnV0ZSBmb3IgdGhlIGlubmVyIGBhYCBlbGVtZW50XG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIGB0YXJnZXRgIGF0dHJpYnV0ZSBmb3IgdGhlIGlubmVyIGBhYCBlbGVtZW50XG4gICAgICovXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBhczogJ2xpJyxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBic1ByZWZpeCwgYWN0aXZlLCBjbGFzc05hbWUsIGFzOiBDb21wb25lbnQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBocmVmLCB0aXRsZSwgdGFyZ2V0LCAuLi5lbGVtZW50UHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IGxpbmtQcm9wcyA9IHsgaHJlZiwgdGl0bGUsIHRhcmdldCB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGJzUHJlZml4LCBjbGFzc05hbWUsIHsgYWN0aXZlIH0pfVxuICAgICAgICBhcmlhLWN1cnJlbnQ9e2FjdGl2ZSA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cbiAgICAgID5cbiAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICA8c3BhbiB7Li4uZWxlbWVudFByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmUgfSl9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFNhZmVBbmNob3Igey4uLmVsZW1lbnRQcm9wc30gey4uLmxpbmtQcm9wc30gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KEJyZWFkY3J1bWJJdGVtLCAnYnJlYWRjcnVtYi1pdGVtJyk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcblxuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCBCcmVhZGNydW1iSXRlbSBmcm9tICcuL0JyZWFkY3J1bWJJdGVtJztcblxuY2xhc3MgQnJlYWRjcnVtYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQGRlZmF1bHQgJ2JyZWFkY3J1bWInXG4gICAgICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQVJJQSBsYWJlbCBmb3IgdGhlIG5hdiBlbGVtZW50XG4gICAgICogaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy8jYnJlYWRjcnVtYlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgcHJvcHMgcGFzc2VkIGFzLWlzIHRvIHRoZSB1bmRlcmx5aW5nIGA8dWw+YCBlbGVtZW50XG4gICAgICovXG4gICAgbGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWw6ICdicmVhZGNydW1iJyxcbiAgICBsaXN0UHJvcHM6IHt9LFxuICAgIGFzOiAnbmF2JyxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsaXN0UHJvcHMsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGxhYmVsLFxuICAgICAgYXM6IENvbXBvbmVudCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudCBhcmlhLWxhYmVsPXtsYWJlbH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30+XG4gICAgICAgIDxvbFxuICAgICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgICB7Li4ubGlzdFByb3BzfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhic1ByZWZpeCwgbGlzdFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvb2w+XG4gICAgICA8L0NvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IERlY29yYXRlZEJyZWFkY3J1bWIgPSBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoQnJlYWRjcnVtYiwgJ2JyZWFkY3J1bWInKTtcbkRlY29yYXRlZEJyZWFkY3J1bWIuSXRlbSA9IEJyZWFkY3J1bWJJdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBEZWNvcmF0ZWRCcmVhZGNydW1iO1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGVsZW1lbnRUeXBlIH0gZnJvbSAncHJvcC10eXBlcy1leHRyYSc7XG5cbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBAZGVmYXVsdCAnYnRuLWdyb3VwJ1xuICAgICAqL1xuICAgIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2l6ZSBmb3IgYWxsIEJ1dHRvbnMgaW4gdGhlIGdyb3VwLlxuICAgICAqXG4gICAgICogQHR5cGUgKCdzbSd8J2xnJylcbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqIE1ha2UgdGhlIHNldCBvZiBCdXR0b25zIGFwcGVhciB2ZXJ0aWNhbGx5IHN0YWNrZWQuICovXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBhcyBhIGJ1dHRvbiB0b2dnbGUgZ3JvdXAuXG4gICAgICpcbiAgICAgKiAoR2VuZXJhbGx5IGl0J3MgYmV0dGVyIHRvIHVzZSBgVG9nZ2xlQnV0dG9uR3JvdXBgIGRpcmVjdGx5KVxuICAgICAqL1xuICAgIHRvZ2dsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBBUklBIHJvbGUgZGVzY3JpYmluZyB0aGUgYnV0dG9uIGdyb3VwLiBVc3VhbGx5IHRoZSBkZWZhdWx0XG4gICAgICogXCJncm91cFwiIHJvbGUgaXMgZmluZS4gQW4gYGFyaWEtbGFiZWxgIG9yIGBhcmlhLWxhYmVsbGVkYnlgXG4gICAgICogcHJvcCBpcyBhbHNvIHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBhczogZWxlbWVudFR5cGUsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgdG9nZ2xlOiBmYWxzZSxcbiAgICByb2xlOiAnZ3JvdXAnLFxuICAgIGFzOiAnZGl2JyxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnNQcmVmaXgsXG4gICAgICBzaXplLFxuICAgICAgdG9nZ2xlLFxuICAgICAgdmVydGljYWwsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBhczogQ29tcG9uZW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBiYXNlQ2xhc3MgPSBic1ByZWZpeDtcbiAgICBpZiAodmVydGljYWwpIGJhc2VDbGFzcyA9IGAke2JzUHJlZml4fS12ZXJ0aWNhbGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICAgIHNpemUgJiYgYCR7YnNQcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAgICAgIHRvZ2dsZSAmJiBgJHtic1ByZWZpeH0tdG9nZ2xlYCxcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoQnV0dG9uR3JvdXAsICdidG4tZ3JvdXAnKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNsYXNzIEJ1dHRvblRvb2xiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdidG4tdG9vbGJhcidcbiAgICAgKi9cbiAgICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUklBIHJvbGUgZGVzY3JpYmluZyB0aGUgYnV0dG9uIHRvb2xiYXIuIEdlbmVyYWxseSB0aGUgZGVmYXVsdFxuICAgICAqIFwidG9vbGJhclwiIHJvbGUgaXMgY29ycmVjdC4gQW4gYGFyaWEtbGFiZWxgIG9yIGBhcmlhLWxhYmVsbGVkYnlgXG4gICAgICogcHJvcCBpcyBhbHNvIHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICByb2xlOiAndG9vbGJhcicsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYnNQcmVmaXgsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChCdXR0b25Ub29sYmFyLCAnYnRuLXRvb2xiYXInKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5jbGFzcyBDYXJkSW1nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBAZGVmYXVsdCAnY2FyZC1pbWcnXG4gICAgICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgaW1hZ2UgcG9zaXRpb24gaW5zaWRlXG4gICAgICogdGhlIGNhcmQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7KCd0b3AnfCdib3R0b20nKX1cbiAgICAgKi9cbiAgICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJywgbnVsbF0pLFxuXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXM6ICdpbWcnLFxuICAgIHZhcmlhbnQ6IG51bGwsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdmFyaWFudCxcbiAgICAgIGFzOiBDb21wb25lbnQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYmFzZUNsYXNzID0gdmFyaWFudCA/IGAke2JzUHJlZml4fS0ke3ZhcmlhbnR9YCA6IGJzUHJlZml4O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhiYXNlQ2xhc3MsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChDYXJkSW1nLCAnY2FyZC1pbWcnKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGNyZWF0ZVdpdGhCc1ByZWZpeCBmcm9tICcuL3V0aWxzL2NyZWF0ZVdpdGhCc1ByZWZpeCc7XG5pbXBvcnQgZGl2V2l0aENsYXNzTmFtZSBmcm9tICcuL3V0aWxzL2RpdldpdGhDbGFzc05hbWUnO1xuaW1wb3J0IENhcmRDb250ZXh0IGZyb20gJy4vQ2FyZENvbnRleHQnO1xuaW1wb3J0IENhcmRJbWcgZnJvbSAnLi9DYXJkSW1nJztcblxuY29uc3QgQ2FyZEJvZHkgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtYm9keScpO1xuXG5jbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBAZGVmYXVsdCAnY2FyZCdcbiAgICAgKi9cbiAgICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBjYXJkIGJhY2tncm91bmRcbiAgICAgKlxuICAgICAqIEB0eXBlIHsoJ3ByaW1hcnknfCdzZWNvbmRhcnknfCdzdWNjZXNzJ3wnZGFuZ2VyJ3wnd2FybmluZyd8J2luZm8nfCdkYXJrJ3wnbGlnaHQnKX1cbiAgICAgKi9cbiAgICBiZzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgY2FyZCB0ZXh0IGNvbG9yXG4gICAgICpcbiAgICAgKiBAdHlwZSB7KCdwcmltYXJ5J3wnc2Vjb25kYXJ5J3wnc3VjY2Vzcyd8J2Rhbmdlcid8J3dhcm5pbmcnfCdpbmZvJ3wnZGFyayd8J2xpZ2h0J3wnd2hpdGUnfCdtdXRlZCcpfVxuICAgICAqL1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGNhcmQgYm9yZGVyIGNvbG9yXG4gICAgICpcbiAgICAgKiBAdHlwZSB7KCdwcmltYXJ5J3wnc2Vjb25kYXJ5J3wnc3VjY2Vzcyd8J2Rhbmdlcid8J3dhcm5pbmcnfCdpbmZvJ3wnZGFyayd8J2xpZ2h0Jyl9XG4gICAgICovXG4gICAgYm9yZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGlzIHByb3AgaXMgc2V0LCBpdCBjcmVhdGVzIGEgQ2FyZCB3aXRoIGEgQ2FyZC5Cb2R5IGluc2lkZVxuICAgICAqIHBhc3NpbmcgdGhlIGNoaWxkcmVuIGRpcmVjdGx5IHRvIGl0XG4gICAgICovXG4gICAgYm9keTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICBhczogZWxlbWVudFR5cGUsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhczogJ2RpdicsXG4gICAgYm9keTogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGUgPSB7fTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHsgYnNQcmVmaXggfSkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJkQ29udGV4dDoge1xuICAgICAgICBjYXJkSGVhZGVyQnNQcmVmaXg6IGAke2JzUHJlZml4fS1oZWFkZXJgLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYXM6IENvbXBvbmVudCxcbiAgICAgIGJnLFxuICAgICAgdGV4dCxcbiAgICAgIGJvcmRlcixcbiAgICAgIGJvZHksXG4gICAgICBjaGlsZHJlbixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGJzUHJlZml4LFxuICAgICAgYmcgJiYgYGJnLSR7Ymd9YCxcbiAgICAgIHRleHQgJiYgYHRleHQtJHt0ZXh0fWAsXG4gICAgICBib3JkZXIgJiYgYGJvcmRlci0ke2JvcmRlcn1gLFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlLmNhcmRDb250ZXh0fT5cbiAgICAgICAgPENvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5wcm9wc30+XG4gICAgICAgICAge2JvZHkgPyA8Q2FyZEJvZHk+e2NoaWxkcmVufTwvQ2FyZEJvZHk+IDogY2hpbGRyZW59XG4gICAgICAgIDwvQ29tcG9uZW50PlxuICAgICAgPC9DYXJkQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IERpdlN0eWxlZEFzSDUgPSBkaXZXaXRoQ2xhc3NOYW1lKCdoNScpO1xuY29uc3QgRGl2U3R5bGVkQXNINiA9IGRpdldpdGhDbGFzc05hbWUoJ2g2Jyk7XG5cbmNvbnN0IERlY29yYXRlZENhcmQgPSBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoQ2FyZCwgJ2NhcmQnKTtcbkRlY29yYXRlZENhcmQuSW1nID0gQ2FyZEltZztcblxuRGVjb3JhdGVkQ2FyZC5UaXRsZSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC10aXRsZScsIHtcbiAgQ29tcG9uZW50OiBEaXZTdHlsZWRBc0g1LFxufSk7XG5EZWNvcmF0ZWRDYXJkLlN1YnRpdGxlID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLXN1YnRpdGxlJywge1xuICBDb21wb25lbnQ6IERpdlN0eWxlZEFzSDYsXG59KTtcblxuRGVjb3JhdGVkQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5EZWNvcmF0ZWRDYXJkLkxpbmsgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtbGluaycsIHtcbiAgQ29tcG9uZW50OiAnYScsXG59KTtcbkRlY29yYXRlZENhcmQuVGV4dCA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC10ZXh0Jywge1xuICBDb21wb25lbnQ6ICdwJyxcbn0pO1xuRGVjb3JhdGVkQ2FyZC5IZWFkZXIgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtaGVhZGVyJyk7XG5EZWNvcmF0ZWRDYXJkLkZvb3RlciA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1mb290ZXInKTtcbkRlY29yYXRlZENhcmQuSW1nT3ZlcmxheSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1pbWctb3ZlcmxheScpO1xuXG5leHBvcnQgZGVmYXVsdCBEZWNvcmF0ZWRDYXJkO1xuIiwiaW1wb3J0IGNyZWF0ZVdpdGhCc1ByZWZpeCBmcm9tICcuL3V0aWxzL2NyZWF0ZVdpdGhCc1ByZWZpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1jb2x1bW5zJyk7XG4iLCJpbXBvcnQgY3JlYXRlV2l0aEJzUHJlZml4IGZyb20gJy4vdXRpbHMvY3JlYXRlV2l0aEJzUHJlZml4JztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLWRlY2snKTtcbiIsImltcG9ydCBjcmVhdGVXaXRoQnNQcmVmaXggZnJvbSAnLi91dGlscy9jcmVhdGVXaXRoQnNQcmVmaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtZ3JvdXAnKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQGRlZmF1bHQgJ2Nhcm91c2VsLWNhcHRpb24nXG4gICAqL1xuICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXM6IGVsZW1lbnRUeXBlLFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2RpdicsXG59O1xuXG5jbGFzcyBDYXJvdXNlbENhcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhczogQ29tcG9uZW50LCBjbGFzc05hbWUsIGJzUHJlZml4LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgYnNQcmVmaXgpfSAvPjtcbiAgfVxufVxuXG5DYXJvdXNlbENhcHRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQ2Fyb3VzZWxDYXB0aW9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KENhcm91c2VsQ2FwdGlvbiwgJ2Nhcm91c2VsLWNhcHRpb24nKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAZGVmYXVsdCAnY2Fyb3VzZWwtaXRlbSdcbiAgICovXG4gIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY2xhc3MgQ2Fyb3VzZWxJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYnNQcmVmaXgsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhcm91c2VsSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChDYXJvdXNlbEl0ZW0sICdjYXJvdXNlbC1pdGVtJyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICogYnV0IG9ubHkgbWFwcyBvdmVyIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgZWxlbWVudHNcIi5cbiAqXG4gKiBUaGUgbWFwRnVuY3Rpb24gcHJvdmlkZWQgaW5kZXggd2lsbCBiZSBub3JtYWxpc2VkIHRvIHRoZSBjb21wb25lbnRzIG1hcHBlZCxcbiAqIHNvIGFuIGludmFsaWQgY29tcG9uZW50IHdvdWxkIG5vdCBpbmNyZWFzZSB0aGUgaW5kZXguXG4gKlxuICovXG5mdW5jdGlvbiBtYXAoY2hpbGRyZW4sIGZ1bmMpIHtcbiAgbGV0IGluZGV4ID0gMDtcblxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKFxuICAgIGNoaWxkcmVuLFxuICAgIGNoaWxkID0+IChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgPyBmdW5jKGNoaWxkLCBpbmRleCsrKSA6IGNoaWxkKSxcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgZWxlbWVudHNcIi5cbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZCB3aXRoIHRoZSBpbmRleCByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChjaGlsZHJlbiwgZnVuYykge1xuICBsZXQgaW5kZXggPSAwO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgZnVuYyhjaGlsZCwgaW5kZXgrKyk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBtYXAsIGZvckVhY2ggfTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdkb20taGVscGVycy9zdHlsZSc7XG5pbXBvcnQgdHJhbnNpdGlvbiBmcm9tICdkb20taGVscGVycy90cmFuc2l0aW9uJztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVuY29udHJvbGxhYmxlIGZyb20gJ3VuY29udHJvbGxhYmxlJztcblxuaW1wb3J0IENhcm91c2VsQ2FwdGlvbiBmcm9tICcuL0Nhcm91c2VsQ2FwdGlvbic7XG5pbXBvcnQgQ2Fyb3VzZWxJdGVtIGZyb20gJy4vQ2Fyb3VzZWxJdGVtJztcbmltcG9ydCBTYWZlQW5jaG9yIGZyb20gJy4vU2FmZUFuY2hvcic7XG5pbXBvcnQgeyBtYXAsIGZvckVhY2ggfSBmcm9tICcuL3V0aWxzL0VsZW1lbnRDaGlsZHJlbic7XG5pbXBvcnQgdHJpZ2dlckJyb3dzZXJSZWZsb3cgZnJvbSAnLi91dGlscy90cmlnZ2VyQnJvd3NlclJlZmxvdyc7XG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5jb25zdCBjb3VudENoaWxkcmVuID0gYyA9PlxuICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGMpLmZpbHRlcihSZWFjdC5pc1ZhbGlkRWxlbWVudCkubGVuZ3RoO1xuXG4vLyBUT0RPOiBgc2xpZGVgIHNob3VsZCBiZSBgYW5pbWF0ZWAuXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBkZWZhdWx0ICdjYXJvdXNlbCdcbiAgICovXG4gIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBFbmFibGVzIGFuaW1hdGlvbiBvbiB0aGUgQ2Fyb3VzZWwgYXMgaXQgdHJhbnNpdGlvbnMgYmV0d2VlbiBzbGlkZXMuXG4gICAqL1xuICBzbGlkZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIENyb3NzIGZhZGUgc2xpZGVzIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgc2xpZGUgYW5pbWF0aW9uICovXG4gIGZhZGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBTbGlkZXMgd2lsbCBsb29wIHRvIHRoZSBzdGFydCB3aGVuIHRoZSBsYXN0IG9uZSB0cmFuc2l0aW9ucyAqL1xuICB3cmFwOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogU2hvdyBhIHNldCBvZiBzbGlkZSBwb3NpdGlvbiBpbmRpY2F0b3JzXG4gICAqL1xuICBpbmRpY2F0b3JzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiB0aW1lIHRvIGRlbGF5IGJldHdlZW4gYXV0b21hdGljYWxseSBjeWNsaW5nIGFuIGl0ZW0uXG4gICAqIElmIGBudWxsYCwgY2Fyb3VzZWwgd2lsbCBub3QgYXV0b21hdGljYWxseSBjeWNsZS5cbiAgICovXG4gIGludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBDYXJvdXNlbCBwcmV2aW91cyBhbmQgbmV4dCBhcnJvd3MgZm9yIGNoYW5naW5nIHRoZSBjdXJyZW50IHNsaWRlXG4gICAqL1xuICBjb250cm9sczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRlbXBvcmFyaWx5IHB1YXNlIHRoZSBzbGlkZSBpbnRlcnZhbCB3aGVuIHRoZSBtb3VzZSBob3ZlcnMgb3ZlciBhIHNsaWRlLlxuICAgKi9cbiAgcGF1c2VPbkhvdmVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogRW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb24gdmlhIHRoZSBBcnJvdyBrZXlzIGZvciBjaGFuZ2luZyBzbGlkZXMgKi9cbiAga2V5Ym9hcmQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBhY3RpdmUgaXRlbSBjaGFuZ2VzLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAoZXZlbnRLZXk6IGFueSwgZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsID9ldmVudDogT2JqZWN0KSA9PiBhbnlcbiAgICogYGBgXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgYWN0aXZlSW5kZXhcbiAgICovXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQSBjYWxsYmFjayBmaXJlZCBhZnRlciBhIHNsaWRlIHRyYW5zaXRpb25zIGluICovXG4gIG9uU2xpZGVFbmQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDb250cm9scyB0aGUgY3VycmVudCB2aXNpYmxlIHNsaWRlXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgb25TZWxlY3RcbiAgICovXG4gIGFjdGl2ZUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBidXR0b24gaWNvbiBmb3IgdGhlIFwicHJldmlvdXNcIiBjb250cm9sICovXG4gIHByZXZJY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogTGFiZWwgc2hvd24gdG8gc2NyZWVuIHJlYWRlcnMgb25seSwgY2FuIGJlIHVzZWQgdG8gc2hvdyB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgKiBpbiB0aGUgY2Fyb3VzZWwuXG4gICAqIFNldCB0byBudWxsIHRvIGRlYWN0aXZhdGUuXG4gICAqL1xuICBwcmV2TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJ1dHRvbiBpY29uIGZvciB0aGUgXCJuZXh0XCIgY29udHJvbCAqL1xuICBuZXh0SWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIExhYmVsIHNob3duIHRvIHNjcmVlbiByZWFkZXJzIG9ubHksIGNhbiBiZSB1c2VkIHRvIHNob3cgdGhlIG5leHQgZWxlbWVudFxuICAgKiBpbiB0aGUgY2Fyb3VzZWwuXG4gICAqIFNldCB0byBudWxsIHRvIGRlYWN0aXZhdGUuXG4gICAqL1xuICBuZXh0TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHNsaWRlOiB0cnVlLFxuICBmYWRlOiBmYWxzZSxcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gIHdyYXA6IHRydWUsXG4gIGluZGljYXRvcnM6IHRydWUsXG4gIGNvbnRyb2xzOiB0cnVlLFxuICBhY3RpdmVJbmRleDogMCxcblxuICBwcmV2SWNvbjogPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiAvPixcbiAgcHJldkxhYmVsOiAnUHJldmlvdXMnLFxuXG4gIG5leHRJY29uOiA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIC8+LFxuICBuZXh0TGFiZWw6ICdOZXh0Jyxcbn07XG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJldkNsYXNzZXM6ICcnLFxuICAgICAgY3VycmVudENsYXNzZXM6ICdhY3RpdmUnLFxuICAgIH07XG4gICAgdGhpcy5pc1VubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jYXJvdXNlbCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jeWNsZSgpO1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhcbiAgICBuZXh0UHJvcHMsXG4gICAgeyBhY3RpdmVJbmRleDogcHJldmlvdXNBY3RpdmVJbmRleCB9LFxuICApIHtcbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0FjdGl2ZUluZGV4KSB7XG4gICAgICBjb25zdCBsYXN0UG9zc2libGVJbmRleCA9IGNvdW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuKSAtIDE7XG5cbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IE1hdGgubWF4KFxuICAgICAgICAwLFxuICAgICAgICBNYXRoLm1pbihuZXh0UHJvcHMuYWN0aXZlSW5kZXgsIGxhc3RQb3NzaWJsZUluZGV4KSxcbiAgICAgICk7XG5cbiAgICAgIGxldCBkaXJlY3Rpb247XG4gICAgICBpZiAoXG4gICAgICAgIChuZXh0SW5kZXggPT09IDAgJiYgcHJldmlvdXNBY3RpdmVJbmRleCA+PSBsYXN0UG9zc2libGVJbmRleCkgfHxcbiAgICAgICAgcHJldmlvdXNBY3RpdmVJbmRleCA8PSBuZXh0SW5kZXhcbiAgICAgICkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJlY3Rpb24gPSAncHJldic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgcHJldmlvdXNBY3RpdmVJbmRleCxcbiAgICAgICAgYWN0aXZlSW5kZXg6IG5leHRJbmRleCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKF8sIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgYnNQcmVmaXgsIHNsaWRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChcbiAgICAgICFzbGlkZSB8fFxuICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gcHJldlN0YXRlLmFjdGl2ZUluZGV4IHx8XG4gICAgICB0aGlzLl9pc1NsaWRpbmdcbiAgICApXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCB7IGFjdGl2ZUluZGV4LCBkaXJlY3Rpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgb3JkZXJDbGFzc05hbWUgPSBgJHtic1ByZWZpeH0taXRlbS1uZXh0YDtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gYCR7YnNQcmVmaXh9LWl0ZW0tbGVmdGA7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgb3JkZXJDbGFzc05hbWUgPSBgJHtic1ByZWZpeH0taXRlbS1wcmV2YDtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gYCR7YnNQcmVmaXh9LWl0ZW0tcmlnaHRgO1xuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG5cbiAgICB0aGlzLnBhdXNlKCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZShcbiAgICAgIHsgcHJldkNsYXNzZXM6ICdhY3RpdmUnLCBjdXJyZW50Q2xhc3Nlczogb3JkZXJDbGFzc05hbWUgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmNhcm91c2VsLmN1cnJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gaXRlbXNbYWN0aXZlSW5kZXhdO1xuICAgICAgICB0cmlnZ2VyQnJvd3NlclJlZmxvdyhuZXh0RWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJldkNsYXNzZXM6IGNsYXNzTmFtZXMoJ2FjdGl2ZScsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKSxcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzOiBjbGFzc05hbWVzKG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgdHJhbnNpdGlvbi5lbmQobmV4dEVsZW1lbnQsICgpID0+XG4gICAgICAgICAgICAgIHRoaXMuc2FmZVNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHsgcHJldkNsYXNzZXM6ICcnLCBjdXJyZW50Q2xhc3NlczogJ2FjdGl2ZScgfSxcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlRW5kLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMuaXNVbm1vdW50ZWQgPSB0cnVlO1xuICB9XG5cbiAgaGFuZGxlU2xpZGVFbmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGVuZGluZ0luZGV4ID0gdGhpcy5fcGVuZGluZ0luZGV4O1xuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3BlbmRpbmdJbmRleCA9IG51bGw7XG5cbiAgICBpZiAocGVuZGluZ0luZGV4ICE9IG51bGwpIHRoaXMudG8ocGVuZGluZ0luZGV4KTtcbiAgICBlbHNlIHRoaXMuY3ljbGUoKTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZU91dCA9ICgpID0+IHtcbiAgICB0aGlzLmN5Y2xlKCk7XG4gIH07XG5cbiAgaGFuZGxlTW91c2VPdmVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlT25Ib3ZlcikgdGhpcy5wYXVzZSgpO1xuICB9O1xuXG4gIGhhbmRsZUtleURvd24gPSBldmVudCA9PiB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQcmV2KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOZXh0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlTmV4dFdoZW5WaXNpYmxlID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmlzVW5tb3VudGVkICYmXG4gICAgICAhZG9jdW1lbnQuaGlkZGVuICYmXG4gICAgICBzdHlsZXModGhpcy5jYXJvdXNlbC5jdXJyZW50LCAndmlzaWJpbGl0eScpICE9PSAnaGlkZGVuJ1xuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVOZXh0KCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZU5leHQgPSBlID0+IHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHdyYXAsIGFjdGl2ZUluZGV4IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGluZGV4ID0gYWN0aXZlSW5kZXggKyAxO1xuICAgIGNvbnN0IGNvdW50ID0gY291bnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIGlmIChpbmRleCA+IGNvdW50IC0gMSkge1xuICAgICAgaWYgKCF3cmFwKSByZXR1cm47XG5cbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdChpbmRleCwgZSwgJ25leHQnKTtcbiAgfTtcblxuICBoYW5kbGVQcmV2ID0gZSA9PiB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykgcmV0dXJuO1xuXG4gICAgY29uc3QgeyB3cmFwLCBhY3RpdmVJbmRleCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBpbmRleCA9IGFjdGl2ZUluZGV4IC0gMTtcblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGlmICghd3JhcCkgcmV0dXJuO1xuICAgICAgaW5kZXggPSBjb3VudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4pIC0gMTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdChpbmRleCwgZSwgJ3ByZXYnKTtcbiAgfTtcblxuICBzYWZlU2V0U3RhdGUoc3RhdGUsIGNiKSB7XG4gICAgaWYgKHRoaXMuaXNVbm1vdW50ZWQpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCAoKSA9PiAhdGhpcy5pc1VubW91bnRlZCAmJiBjYigpKTtcbiAgfVxuXG4gIC8vIFRoaXMgbWlnaHQgYmUgYSBwdWJsaWMgQVBJLlxuICBwYXVzZSgpIHtcbiAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWU7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICB9XG5cbiAgY3ljbGUoKSB7XG4gICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5oYW5kbGVOZXh0V2hlblZpc2libGUgOiB0aGlzLmhhbmRsZU5leHQsXG4gICAgICAgIHRoaXMucHJvcHMuaW50ZXJ2YWwsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHRvKGluZGV4LCBldmVudCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdJbmRleCA9IGluZGV4O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0KGluZGV4LCBldmVudCk7XG4gIH1cblxuICBzZWxlY3QoaW5kZXgsIGV2ZW50LCBkaXJlY3Rpb24pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zZWxlY3RUaHJvdHRsZSk7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnBlcnNpc3QpIGV2ZW50LnBlcnNpc3QoKTtcblxuICAgIC8vIFRoZSB0aW1lb3V0IHRocm90dGxlcyBmYXN0IGNsaWNrcywgaW4gb3JkZXIgdG8gZ2l2ZSBhbnkgcGVuZGluZyBzdGF0ZVxuICAgIC8vIGEgY2hhbmNlIHRvIHVwZGF0ZSBhbmQgcHJvcGFnYXRlIGJhY2sgdGhyb3VnaCBwcm9wc1xuICAgIHRoaXMuc2VsZWN0VGhyb3R0bGUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgICBjb25zdCB7IGFjdGl2ZUluZGV4LCBvblNlbGVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXggfHwgdGhpcy5faXNTbGlkaW5nIHx8IHRoaXMuaXNVbm1vdW50ZWQpIHJldHVybjtcblxuICAgICAgb25TZWxlY3QoXG4gICAgICAgIGluZGV4LFxuICAgICAgICBkaXJlY3Rpb24gfHwgKGluZGV4IDwgYWN0aXZlSW5kZXggPyAncHJldicgOiAnbmV4dCcpLFxuICAgICAgICBldmVudCxcbiAgICAgICk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgcmVuZGVyQ29udHJvbHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYnNQcmVmaXggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgd3JhcCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgYWN0aXZlSW5kZXgsXG4gICAgICBwcmV2SWNvbixcbiAgICAgIG5leHRJY29uLFxuICAgICAgcHJldkxhYmVsLFxuICAgICAgbmV4dExhYmVsLFxuICAgIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgY29uc3QgY291bnQgPSBjb3VudENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICAgIHJldHVybiBbXG4gICAgICAod3JhcCB8fCBhY3RpdmVJbmRleCAhPT0gMCkgJiYgKFxuICAgICAgICA8U2FmZUFuY2hvclxuICAgICAgICAgIGtleT1cInByZXZcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YnNQcmVmaXh9LWNvbnRyb2wtcHJldmB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQcmV2fVxuICAgICAgICA+XG4gICAgICAgICAge3ByZXZJY29ufVxuICAgICAgICAgIHtwcmV2TGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntwcmV2TGFiZWx9PC9zcGFuPn1cbiAgICAgICAgPC9TYWZlQW5jaG9yPlxuICAgICAgKSxcblxuICAgICAgKHdyYXAgfHwgYWN0aXZlSW5kZXggIT09IGNvdW50IC0gMSkgJiYgKFxuICAgICAgICA8U2FmZUFuY2hvclxuICAgICAgICAgIGtleT1cIm5leHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YnNQcmVmaXh9LWNvbnRyb2wtbmV4dGB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0fVxuICAgICAgICA+XG4gICAgICAgICAge25leHRJY29ufVxuICAgICAgICAgIHtuZXh0TGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntuZXh0TGFiZWx9PC9zcGFuPn1cbiAgICAgICAgPC9TYWZlQW5jaG9yPlxuICAgICAgKSxcbiAgICBdO1xuICB9XG5cbiAgcmVuZGVySW5kaWNhdG9ycyhjaGlsZHJlbiwgYWN0aXZlSW5kZXgpIHtcbiAgICBjb25zdCB7IGJzUHJlZml4IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpbmRpY2F0b3JzID0gW107XG5cbiAgICBmb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpbmRpY2F0b3JzLnB1c2goXG4gICAgICAgIDxsaVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpbmRleCA9PT0gYWN0aXZlSW5kZXggPyAnYWN0aXZlJyA6IG51bGx9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLnRvKGluZGV4LCBlKX1cbiAgICAgICAgLz4sXG5cbiAgICAgICAgLy8gRm9yY2Ugd2hpdGVzcGFjZSBiZXR3ZWVuIGluZGljYXRvciBlbGVtZW50cy4gQm9vdHN0cmFwIHJlcXVpcmVzXG4gICAgICAgIC8vIHRoaXMgZm9yIGNvcnJlY3Qgc3BhY2luZyBvZiBlbGVtZW50cy5cbiAgICAgICAgJyAnLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiA8b2wgY2xhc3NOYW1lPXtgJHtic1ByZWZpeH0taW5kaWNhdG9yc2B9PntpbmRpY2F0b3JzfTwvb2w+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGJzUHJlZml4LFxuICAgICAgc2xpZGUsXG4gICAgICBmYWRlLFxuICAgICAgaW5kaWNhdG9ycyxcbiAgICAgIGNvbnRyb2xzLFxuICAgICAgd3JhcCxcbiAgICAgIHByZXZJY29uLFxuICAgICAgcHJldkxhYmVsLFxuICAgICAgbmV4dEljb24sXG4gICAgICBuZXh0TGFiZWwsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGtleWJvYXJkLFxuICAgICAgYWN0aXZlSW5kZXg6IF81LFxuICAgICAgcGF1c2VPbkhvdmVyOiBfNCxcbiAgICAgIGludGVydmFsOiBfMyxcbiAgICAgIG9uU2VsZWN0OiBfMixcbiAgICAgIG9uU2xpZGVFbmQ6IF8xLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNBY3RpdmVJbmRleCxcbiAgICAgIHByZXZDbGFzc2VzLFxuICAgICAgY3VycmVudENsYXNzZXMsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9uc1xuICAgICAgPGRpdlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgYnNQcmVmaXgsXG4gICAgICAgICAgc2xpZGUgJiYgJ3NsaWRlJyxcbiAgICAgICAgICBmYWRlICYmIGAke2JzUHJlZml4fS1mYWRlYCxcbiAgICAgICAgKX1cbiAgICAgICAgb25LZXlEb3duPXtrZXlib2FyZCA/IHRoaXMuaGFuZGxlS2V5RG93biA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMuaGFuZGxlTW91c2VPdmVyfVxuICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLmhhbmRsZU1vdXNlT3V0fVxuICAgICAgPlxuICAgICAgICB7aW5kaWNhdG9ycyAmJiB0aGlzLnJlbmRlckluZGljYXRvcnMoY2hpbGRyZW4sIGFjdGl2ZUluZGV4KX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YnNQcmVmaXh9LWlubmVyYH0gcmVmPXt0aGlzLmNhcm91c2VsfT5cbiAgICAgICAgICB7bWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gaW5kZXggPT09IGFjdGl2ZUluZGV4O1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXMgPSBpbmRleCA9PT0gcHJldmlvdXNBY3RpdmVJbmRleDtcblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGAke2JzUHJlZml4fS1pdGVtYCxcbiAgICAgICAgICAgICAgICBjdXJyZW50ICYmIGN1cnJlbnRDbGFzc2VzLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzICYmIHByZXZDbGFzc2VzLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtjb250cm9scyAmJlxuICAgICAgICAgIHRoaXMucmVuZGVyQ29udHJvbHMoe1xuICAgICAgICAgICAgd3JhcCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXgsXG4gICAgICAgICAgICBwcmV2SWNvbixcbiAgICAgICAgICAgIHByZXZMYWJlbCxcbiAgICAgICAgICAgIG5leHRJY29uLFxuICAgICAgICAgICAgbmV4dExhYmVsLFxuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuQ2Fyb3VzZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuQ2Fyb3VzZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5jb25zdCBEZWNvcmF0ZWRDYXJvdXNlbCA9IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChcbiAgdW5jb250cm9sbGFibGUoQ2Fyb3VzZWwsIHsgYWN0aXZlSW5kZXg6ICdvblNlbGVjdCcgfSksXG4gICdjYXJvdXNlbCcsXG4pO1xuXG5EZWNvcmF0ZWRDYXJvdXNlbC5DYXB0aW9uID0gQ2Fyb3VzZWxDYXB0aW9uO1xuRGVjb3JhdGVkQ2Fyb3VzZWwuSXRlbSA9IENhcm91c2VsSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgRGVjb3JhdGVkQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcbmltcG9ydCBCYXNlRHJvcGRvd25NZW51IGZyb20gJ3JlYWN0LW92ZXJsYXlzL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgTmF2YmFyQ29udGV4dCBmcm9tICcuL05hdmJhckNvbnRleHQnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5jb25zdCB3cmFwUmVmID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJlZiB9ID0gcHJvcHM7XG4gIHByb3BzLnJlZiA9IHJlZi5fX3dyYXBwZWQgfHwgKHJlZi5fX3dyYXBwZWQgPSByID0+IHJlZihmaW5kRE9NTm9kZShyKSkpO1xuICByZXR1cm4gcHJvcHM7XG59O1xuXG5jbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdkcm9wZG93bi1tZW51J1xuICAgICAqL1xuICAgIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqIENvbnRyb2xzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBEcm9wZG93biBtZW51ICAqL1xuICAgIHNob3c6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqIEFsaWducyB0aGUgRHJvcGRvd24gbWVudSB0byB0aGUgcmlnaHQgb2YgaXQncyBjb250YWluZXIuICovXG4gICAgYWxpZ25SaWdodDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGljaCBldmVudCB3aGVuIGZpcmVkIG91dHNpZGUgdGhlIGNvbXBvbmVudCB3aWxsIGNhdXNlIGl0IHRvIGJlIGNsb3NlZFxuICAgICAqXG4gICAgICogKk5vdGU6IEZvciBjdXN0b20gZHJvcGRvd24gY29tcG9uZW50cywgeW91IHdpbGwgaGF2ZSB0byBwYXNzIHRoZVxuICAgICAqIGByb290Q2xvc2VFdmVudGAgdG8gYDxSb290Q2xvc2VXcmFwcGVyPmAgaW4geW91ciBjdXN0b20gZHJvcGRvd24gbWVudVxuICAgICAqIGNvbXBvbmVudCAoW3NpbWlsYXJseSB0byBob3cgaXQgaXMgaW1wbGVtZW50ZWQgaW4gYDxEcm9wZG93bi5NZW51PmBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2Jsb2IvdjAuMzEuNS9zcmMvRHJvcGRvd25NZW51LmpzI0wxMTUtTDExOSkpLipcbiAgICAgKi9cbiAgICByb290Q2xvc2VFdmVudDogUHJvcFR5cGVzLm9uZU9mKFsnY2xpY2snLCAnbW91c2Vkb3duJ10pLFxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbCB0aGUgcmVuZGVyaW5nIG9mIHRoZSBEcm9wZG93bk1lbnUuIEFsbCBub24tbWVudSBwcm9wc1xuICAgICAqIChsaXN0ZWQgaGVyZSkgYXJlIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBgYXNgIENvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIElmIHByb3ZpZGluZyBhIGN1c3RvbSwgbm9uIERPTSwgY29tcG9uZW50LiB0aGUgYHNob3dgLCBgY2xvc2VgIGFuZCBgYWxpZ25SaWdodGAgcHJvcHNcbiAgICAgKiBhcmUgYWxzbyBpbmplY3RlZCBhbmQgc2hvdWxkIGJlIGhhbmRsZWQgYXBwcm9wcmlhdGVkbHkuXG4gICAgICovXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWxpZ25SaWdodDogZmFsc2UsXG4gICAgYXM6ICdkaXYnLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGFsaWduUmlnaHQsXG4gICAgICByb290Q2xvc2VFdmVudCxcbiAgICAgIHNob3c6IHNob3dQcm9wcyxcbiAgICAgIGFzOiBDb21wb25lbnQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxOYXZiYXJDb250ZXh0PlxuICAgICAgICB7aXNOYXZiYXIgPT4gKFxuICAgICAgICAgIDxCYXNlRHJvcGRvd25NZW51XG4gICAgICAgICAgICBzaG93PXtzaG93UHJvcHN9XG4gICAgICAgICAgICBhbGlnbkVuZD17YWxpZ25SaWdodH1cbiAgICAgICAgICAgIHVzZVBvcHBlcj17IWlzTmF2YmFyfVxuICAgICAgICAgICAgcm9vdENsb3NlRXZlbnQ9e3Jvb3RDbG9zZUV2ZW50fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoeyBwbGFjZW1lbnQsIHNob3csIGFsaWduRW5kLCBjbG9zZSwgcHJvcHM6IG1lbnVQcm9wcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHdyYXBSZWYobWVudVByb3BzKTtcbiAgICAgICAgICAgICAgLy8gRm9yIGN1c3RvbSBjb21wb25lbnRzIHByb3ZpZGUgYWRkaXRpb25hbCwgbm9uLURPTSwgcHJvcHM7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG1lbnVQcm9wcy5zaG93ID0gc2hvdztcbiAgICAgICAgICAgICAgICBtZW51UHJvcHMuY2xvc2UgPSBjbG9zZTtcbiAgICAgICAgICAgICAgICBtZW51UHJvcHMuYWxpZ25SaWdodCA9IGFsaWduRW5kO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBzdHlsZSA9IHByb3BzLnN0eWxlO1xuICAgICAgICAgICAgICBpZiAocGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgZGVmYXVsdCBwb3BwZXIgc3R5bGUsXG4gICAgICAgICAgICAgICAgLy8gbWVudXMgYXJlIGRpc3BsYXk6IG5vbmUgd2hlbiBub3Qgc2hvd24uXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5tZW51UHJvcHMuc3R5bGUgfTtcbiAgICAgICAgICAgICAgICBwcm9wc1sneC1wbGFjZW1lbnQnXSA9IHBsYWNlbWVudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgIHsuLi5tZW51UHJvcHN9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYnNQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIHNob3cgJiYgJ3Nob3cnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblJpZ2h0ICYmIGAke2JzUHJlZml4fS1yaWdodGAsXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvQmFzZURyb3Bkb3duTWVudT5cbiAgICAgICAgKX1cbiAgICAgIDwvTmF2YmFyQ29udGV4dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChEcm9wZG93bk1lbnUsICdkcm9wZG93bi1tZW51Jyk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaXNSZXF1aXJlZEZvckExMXkgZnJvbSAncHJvcC10eXBlcy1leHRyYS9saWIvaXNSZXF1aXJlZEZvckExMXknO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcbmltcG9ydCBCYXNlRHJvcGRvd25Ub2dnbGUgZnJvbSAncmVhY3Qtb3ZlcmxheXMvL0Ryb3Bkb3duVG9nZ2xlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcblxuY29uc3Qgd3JhcFJlZiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByZWYgfSA9IHByb3BzO1xuICBwcm9wcy5yZWYgPSByZWYuX193cmFwcGVkIHx8IChyZWYuX193cmFwcGVkID0gciA9PiByZWYoZmluZERPTU5vZGUocikpKTtcbiAgcmV0dXJuIHByb3BzO1xufTtcblxuY2xhc3MgRHJvcGRvd25Ub2dnbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdkcm9wZG93bi10b2dnbGUnXG4gICAgICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBbiBodG1sIGlkIGF0dHJpYnV0ZSwgbmVjZXNzYXJ5IGZvciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBzdWNoIGFzIHNjcmVlbiByZWFkZXJzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqIEByZXF1aXJlZFxuICAgICAqL1xuICAgIGlkOiBpc1JlcXVpcmVkRm9yQTExeShQcm9wVHlwZXMuYW55KSxcblxuICAgIHNwbGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGFzOiBlbGVtZW50VHlwZSxcblxuICAgIC8qKlxuICAgICAqIHRvIHBhc3N0aHJvdWdoIHRvIHRoZSB1bmRlcmx5aW5nIGJ1dHRvbiBvciB3aGF0ZXZlciBmcm9tIERyb3Bkb3duQnV0dG9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjaGlsZEJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXM6IEJ1dHRvbixcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnNQcmVmaXgsXG4gICAgICBzcGxpdCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2hpbGRCc1ByZWZpeCxcbiAgICAgIGFzOiBDb21wb25lbnQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gVGhpcyBpbnRlbnRpb25hbGx5IGZvcndhcmRzIHNpemUgYW5kIHZhcmlhbnQgKGlmIHNldCkgdG8gdGhlXG4gICAgLy8gdW5kZXJseWluZyBjb21wb25lbnQsIHRvIGFsbG93IGl0IHRvIHJlbmRlciBzaXplIGFuZCBzdHlsZSB2YXJpYW50cy5cbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2VEcm9wZG93blRvZ2dsZT5cbiAgICAgICAgeyh7IHRvZ2dsZSwgcHJvcHM6IHRvZ2dsZVByb3BzIH0pID0+IChcbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICAgICAgICBic1ByZWZpeD17Y2hpbGRCc1ByZWZpeH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBic1ByZWZpeCxcbiAgICAgICAgICAgICAgc3BsaXQgJiYgYCR7YnNQcmVmaXh9LXNwbGl0YCxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Li4ud3JhcFJlZih0b2dnbGVQcm9wcyl9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvQ29tcG9uZW50PlxuICAgICAgICApfVxuICAgICAgPC9CYXNlRHJvcGRvd25Ub2dnbGU+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoRHJvcGRvd25Ub2dnbGUsICdkcm9wZG93bi10b2dnbGUnKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGVsZW1lbnRUeXBlIH0gZnJvbSAncHJvcC10eXBlcy1leHRyYSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hcENvbnRleHRUb1Byb3BzIGZyb20gJ3JlYWN0LWNvbnRleHQtdG9vbGJveC9saWIvbWFwQ29udGV4dFRvUHJvcHMnO1xuXG5pbXBvcnQgY2hhaW4gZnJvbSAnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IFNhZmVBbmNob3IgZnJvbSAnLi9TYWZlQW5jaG9yJztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tICcuL05hdkNvbnRleHQnO1xuXG5jbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBAZGVmYXVsdCAnZHJvcGRvd24nICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodCB0aGUgbWVudSBpdGVtIGFzIGFjdGl2ZS5cbiAgICAgKi9cbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSB0aGUgbWVudSBpdGVtLCBtYWtpbmcgaXQgdW5zZWxlY3RhYmxlLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFZhbHVlIHBhc3NlZCB0byB0aGUgYG9uU2VsZWN0YCBoYW5kbGVyLCB1c2VmdWwgZm9yIGlkZW50aWZ5aW5nIHRoZSBzZWxlY3RlZCBtZW51IGl0ZW0uXG4gICAgICovXG4gICAgZXZlbnRLZXk6IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBIVE1MIGBocmVmYCBhdHRyaWJ1dGUgY29ycmVzcG9uZGluZyB0byBgYS5ocmVmYC5cbiAgICAgKi9cbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgbWVudSBpdGVtIGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBtZW51IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBgYGBqc1xuICAgICAqIChldmVudEtleTogYW55LCBldmVudDogT2JqZWN0KSA9PiBhbnlcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICBhczogZWxlbWVudFR5cGUsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhczogU2FmZUFuY2hvcixcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgb25TZWxlY3QsIG9uQ2xpY2ssIGV2ZW50S2V5LCBocmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGtleSA9IG1ha2VFdmVudEtleShldmVudEtleSwgaHJlZik7XG4gICAgLy8gU2FmZUFuY2hvciBoYW5kbGVzIHRoZSBkaXNhYmxlZCBjYXNlLCBidXQgYmUgaGFuZGxlIGl0IGhlcmVcbiAgICAvLyBmb3Igb3RoZXIgY29tcG9uZW50c1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcbiAgICBpZiAob25TZWxlY3QpIG9uU2VsZWN0KGtleSwgZXZlbnQpO1xuICAgIGlmIChrZXkgIT09IG51bGwgJiYgdGhpcy5jb250ZXh0U2VsZWN0KSB0aGlzLmNvbnRleHRTZWxlY3Qoa2V5LCBldmVudCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGJzUHJlZml4LFxuICAgICAgYWN0aXZlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBldmVudEtleTogXyxcbiAgICAgIG9uU2VsZWN0OiBfMSxcbiAgICAgIGFzOiBDb21wb25lbnQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgIGJzUHJlZml4LFxuICAgICAgICAgIGFjdGl2ZSAmJiAnYWN0aXZlJyxcbiAgICAgICAgICBwcm9wcy5kaXNhYmxlZCAmJiAnZGlzYWJsZWQnLFxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENvbnRleHRUb1Byb3BzKFxuICBbU2VsZWN0YWJsZUNvbnRleHQsIE5hdkNvbnRleHRdLFxuICAob25TZWxlY3QsIG5hdkNvbnRleHQsIHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmVLZXkgfSA9IG5hdkNvbnRleHQgfHwge307XG4gICAgY29uc3Qga2V5ID0gbWFrZUV2ZW50S2V5KHByb3BzLmV2ZW50S2V5LCBwcm9wcy5ocmVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgb25TZWxlY3Q6IGNoYWluKHByb3BzLm9uU2VsZWN0LCBvblNlbGVjdCksXG4gICAgICBhY3RpdmU6XG4gICAgICAgIHByb3BzLmFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsXG4gICAgICAgICAgPyBtYWtlRXZlbnRLZXkoYWN0aXZlS2V5KSA9PT0ga2V5XG4gICAgICAgICAgOiBwcm9wcy5hY3RpdmUsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KERyb3Bkb3duSXRlbSwgJ2Ryb3Bkb3duLWl0ZW0nKSxcbik7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1hcENvbnRleHRUb1Byb3BzIGZyb20gJ3JlYWN0LWNvbnRleHQtdG9vbGJveC9saWIvbWFwQ29udGV4dFRvUHJvcHMnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcbmltcG9ydCBCYXNlRHJvcGRvd24gZnJvbSAncmVhY3Qtb3ZlcmxheXMvRHJvcGRvd24nO1xuXG5pbXBvcnQgY2hhaW4gZnJvbSAnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IERyb3Bkb3duVG9nZ2xlIGZyb20gJy4vRHJvcGRvd25Ub2dnbGUnO1xuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tICcuL0Ryb3Bkb3duSXRlbSc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQgZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQgY3JlYXRlV2l0aEJzUHJlZml4IGZyb20gJy4vdXRpbHMvY3JlYXRlV2l0aEJzUHJlZml4JztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKiogQGRlZmF1bHQgJ2Ryb3Bkb3duJyAqL1xuICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGRpcmVjdGlvbiBhbmQgbG9jYXRpb24gb2YgdGhlIE1lbnUgaW4gcmVsYXRpb24gdG8gaXQncyBUb2dnbGUuXG4gICAqL1xuICBkcm9wOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2Rvd24nXSksXG5cbiAgYXM6IGVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBbGlnbiB0aGUgbWVudSB0byB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgRHJvcGRvd24gdG9nZ2xlXG4gICAqL1xuICBhbGlnblJpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIERyb3Bkb3duIGlzIHZpc2libGUuXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgb25Ub2dnbGVcbiAgICovXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbGxvdyBEcm9wZG93biB0byBmbGlwIGluIGNhc2Ugb2YgYW4gb3ZlcmxhcHBpbmcgb24gdGhlIHJlZmVyZW5jZSBlbGVtZW50LiBGb3IgbW9yZSBpbmZvcm1hdGlvbiByZWZlciB0b1xuICAgKiBQb3BwZXIuanMncyBmbGlwIFtkb2NzXShodHRwczovL3BvcHBlci5qcy5vcmcvcG9wcGVyLWRvY3VtZW50YXRpb24uaHRtbCNtb2RpZmllcnMuLmZsaXAuZW5hYmxlZCkuXG4gICAqXG4gICAqL1xuICBmbGlwOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBEcm9wZG93biB3aXNoZXMgdG8gY2hhbmdlIHZpc2liaWxpdHkuIENhbGxlZCB3aXRoIHRoZSByZXF1ZXN0ZWRcbiAgICogYHNob3dgIHZhbHVlLCB0aGUgRE9NIGV2ZW50LCBhbmQgdGhlIHNvdXJjZSB0aGF0IGZpcmVkIGl0OiBgJ2NsaWNrJ2AsYCdrZXlkb3duJ2AsYCdyb290Q2xvc2UnYCwgb3IgYCdzZWxlY3QnYC5cbiAgICpcbiAgICogYGBganNcbiAgICogZnVuY3Rpb24oXG4gICAqICAgaXNPcGVuOiBib29sZWFuLFxuICAgKiAgIGV2ZW50OiBTeW50aGV0aWNFdmVudCxcbiAgICogICBtZXRhZGF0YToge1xuICAgKiAgICAgc291cmNlOiAnc2VsZWN0JyB8ICdjbGljaycgfCAncm9vdENsb29zZScgfCAna2V5ZG93bidcbiAgICogICB9XG4gICAqICk6IHZvaWRcbiAgICogYGBgXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgc2hvd1xuICAgKi9cbiAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIChldmVudEtleTogYW55LCBldmVudDogT2JqZWN0KSA9PiBhbnlcbiAgICogYGBgXG4gICAqL1xuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIG5hdmJhcjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnZGl2JyxcbiAgbmF2YmFyOiBmYWxzZSxcbn07XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlU2VsZWN0ID0gKGtleSwgZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkgdGhpcy5wcm9wcy5vblNlbGVjdChrZXksIGV2ZW50KTtcblxuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKGZhbHNlLCBldmVudCwgJ3NlbGVjdCcpO1xuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSA9IChzaG93LCBldmVudCwgc291cmNlID0gZXZlbnQudHlwZSkgPT4ge1xuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0ID09PSBkb2N1bWVudCkgc291cmNlID0gJ3Jvb3RDbG9zZSc7XG5cbiAgICB0aGlzLnByb3BzLm9uVG9nZ2xlKHNob3csIGV2ZW50LCB7IHNvdXJjZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnNQcmVmaXgsXG4gICAgICBkcm9wLFxuICAgICAgc2hvdyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGFzOiBDb21wb25lbnQsXG4gICAgICBhbGlnblJpZ2h0LFxuICAgICAgb25TZWxlY3Q6IF8xLFxuICAgICAgb25Ub2dnbGU6IF8zLFxuICAgICAgbmF2YmFyOiBfNCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBkZWxldGUgcHJvcHMub25Ub2dnbGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLmhhbmRsZVNlbGVjdH0+XG4gICAgICAgIDxCYXNlRHJvcGRvd24uQ29udHJvbGxlZENvbXBvbmVudFxuICAgICAgICAgIGRyb3A9e2Ryb3B9XG4gICAgICAgICAgc2hvdz17c2hvd31cbiAgICAgICAgICBhbGlnbkVuZD17YWxpZ25SaWdodH1cbiAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgaXRlbVNlbGVjdG9yPXtgLiR7YnNQcmVmaXh9LWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZClgfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IHByb3BzOiBkcm9wZG93blByb3BzIH0pID0+IChcbiAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICB7Li4uZHJvcGRvd25Qcm9wc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBzaG93ICYmICdzaG93JyxcbiAgICAgICAgICAgICAgICAoIWRyb3AgfHwgZHJvcCA9PT0gJ2Rvd24nKSAmJiBic1ByZWZpeCxcbiAgICAgICAgICAgICAgICBkcm9wID09PSAndXAnICYmICdkcm9wdXAnLFxuICAgICAgICAgICAgICAgIGRyb3AgPT09ICdyaWdodCcgJiYgJ2Ryb3ByaWdodCcsXG4gICAgICAgICAgICAgICAgZHJvcCA9PT0gJ2xlZnQnICYmICdkcm9wbGVmdCcsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQmFzZURyb3Bkb3duLkNvbnRyb2xsZWRDb21wb25lbnQ+XG4gICAgICA8L1NlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuRHJvcGRvd24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuRHJvcGRvd24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5jb25zdCBVbmNvbnRyb2xsZWREcm9wZG93biA9IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChcbiAgQmFzZURyb3Bkb3duLmRlZmVyQ29udHJvbFRvKERyb3Bkb3duKSxcbiAgJ2Ryb3Bkb3duJyxcbik7XG5cbmNvbnN0IERlY29yYXRlZERyb3Bkb3duID0gbWFwQ29udGV4dFRvUHJvcHMoXG4gIFNlbGVjdGFibGVDb250ZXh0LFxuICAob25TZWxlY3QsIHByb3BzKSA9PiAoe1xuICAgIG9uU2VsZWN0OiBjaGFpbihwcm9wcy5vblNlbGVjdCwgb25TZWxlY3QpLFxuICB9KSxcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXG4pO1xuXG5EZWNvcmF0ZWREcm9wZG93bi5Ub2dnbGUgPSBEcm9wZG93blRvZ2dsZTtcbkRlY29yYXRlZERyb3Bkb3duLk1lbnUgPSBEcm9wZG93bk1lbnU7XG5EZWNvcmF0ZWREcm9wZG93bi5JdGVtID0gRHJvcGRvd25JdGVtO1xuXG5EZWNvcmF0ZWREcm9wZG93bi5IZWFkZXIgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2Ryb3Bkb3duLWhlYWRlcicsIHtcbiAgZGVmYXVsdFByb3BzOiB7IHJvbGU6ICdoZWFkaW5nJyB9LFxufSk7XG5EZWNvcmF0ZWREcm9wZG93bi5EaXZpZGVyID0gY3JlYXRlV2l0aEJzUHJlZml4KCdkcm9wZG93bi1kaXZpZGVyJywge1xuICBkZWZhdWx0UHJvcHM6IHsgcm9sZTogJ3NlcGFyYXRvcicgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZWNvcmF0ZWREcm9wZG93bjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEFuIGh0bWwgaWQgYXR0cmlidXRlIGZvciB0aGUgVG9nZ2xlIGJ1dHRvbiwgbmVjZXNzYXJ5IGZvciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBzdWNoIGFzIHNjcmVlbiByZWFkZXJzLlxuICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cbiAgICogQHJlcXVpcmVkXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLmFueSxcblxuICAvKiogQW4gYGhyZWZgIHBhc3NlZCB0byB0aGUgVG9nZ2xlIGNvbXBvbmVudCAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBBbiBgb25DbGlja2AgaGFuZGxlciBwYXNzZWQgdG8gdGhlIFRvZ2dsZSBjb21wb25lbnQgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqIFRoZSBjb250ZW50IG9mIHRoZSBub24tdG9nZ2xlIEJ1dHRvbi4gICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKiBEaXNhYmxlcyBib3RoIEJ1dHRvbnMgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQW4gQVJJQSBhY2Nlc3NpYmxlIHJvbGUgYXBwbGllZCB0byB0aGUgTWVudSBjb21wb25lbnQuIFdoZW4gc2V0IHRvICdtZW51JywgVGhlIGRyb3Bkb3duICovXG4gIG1lbnVSb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiAgV2hpY2ggZXZlbnQgd2hlbiBmaXJlZCBvdXRzaWRlIHRoZSBjb21wb25lbnQgd2lsbCBjYXVzZSBpdCB0byBiZSBjbG9zZWQuXG4gICAqXG4gICAqIF9zZWUgW0Ryb3Bkb3duTWVudV0oI21lbnUtcHJvcHMpIGZvciBtb3JlIGRldGFpbHNfXG4gICAqL1xuICByb290Q2xvc2VFdmVudDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQGlnbm9yZSAqL1xuICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBjb21wb25lbnQgZm9yIHNpbXBsZSBvciBnZW5lcmFsIHVzZSBkcm9wZG93bnMuIFJlbmRlcnMgYSBgQnV0dG9uYCB0b2dnbGUgYW5kIGFsbCBgY2hpbGRyZW5gXG4gKiBhcmUgcGFzc2VkIGRpcmVjdGx5IHRvIHRoZSBkZWZhdWx0IGBEcm9wZG93bi5NZW51YC5cbiAqXG4gKiBfQWxsIHVua25vd24gcHJvcHMgYXJlIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBgRHJvcGRvd25gIGNvbXBvbmVudC5fIE9ubHlcbiAqIHRoZSBCdXR0b24gYHZhcmlhbnRgLCBgc2l6ZWAgYW5kIGBic1ByZWZpeGAgcHJvcHMgYXJlIHBhc3NlZCB0byB0aGUgdG9nZ2xlLFxuICogYWxvbmcgd2l0aCBtZW51IHJlbGF0ZWQgcHJvcHMgYXJlIHBhc3NlZCB0byB0aGUgYERyb3Bkb3duLk1lbnVgXG4gKi9cbmNsYXNzIERyb3Bkb3duQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBic1ByZWZpeCxcbiAgICAgIHJvb3RDbG9zZUV2ZW50LFxuICAgICAgdmFyaWFudCxcbiAgICAgIHNpemUsXG4gICAgICBtZW51Um9sZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaHJlZixcbiAgICAgIGlkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd24gey4uLnByb3BzfT5cbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdmFyaWFudD17dmFyaWFudH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgY2hpbGRCc1ByZWZpeD17YnNQcmVmaXh9XG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxuICAgICAgICA8RHJvcGRvd24uTWVudSByb2xlPXttZW51Um9sZX0gcm9vdENsb3NlRXZlbnQ9e3Jvb3RDbG9zZUV2ZW50fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgKTtcbiAgfVxufVxuXG5Ecm9wZG93bkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duQnV0dG9uO1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGb3JtQ29udGV4dCBmcm9tICcuL0Zvcm1Db250ZXh0JztcbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBkZWZhdWx0ICdmb3JtLWdyb3VwJ1xuICAgKi9cbiAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgYXM6IGVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBTZXRzIGBpZGAgb24gYDxGb3JtQ29udHJvbD5gIGFuZCBgaHRtbEZvcmAgb24gYDxGb3JtR3JvdXAuTGFiZWw+YC5cbiAgICovXG4gIGNvbnRyb2xJZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIEZvcm1Hcm91cCBgcmVmYCB3aWxsIGJlIGZvcndhcmRlZCB0byB0aGUgdW5kZXJseWluZyBlbGVtZW50LlxuICAgKiBVbmxlc3MgdGhlIEZvcm1Hcm91cCBpcyByZW5kZXJlZCBgYXNgIGEgY29tcG9zaXRlIGNvbXBvbmVudCxcbiAgICogaXQgd2lsbCBiZSBhIERPTSBub2RlLCB3aGVuIHJlc29sdmVkLlxuICAgKlxuICAgKiBAdHlwZSB7UmVhY3RSZWZ9XG4gICAqIEBhbGlhcyByZWZcbiAgICovXG4gIGlubmVyUmVmOiBQcm9wVHlwZXMuYW55LFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2RpdicsXG59O1xuXG5mdW5jdGlvbiBGb3JtR3JvdXAoe1xuICBic1ByZWZpeCxcbiAgaW5uZXJSZWYsXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIGNvbnRyb2xJZCxcbiAgYXM6IENvbXBvbmVudCxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29udHJvbElkIH19PlxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGJzUHJlZml4KX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db21wb25lbnQ+XG4gICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuRm9ybUdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkZvcm1Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChGb3JtR3JvdXAsICdmb3JtLWdyb3VwJyk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IEZvcm1Db250ZXh0IGZyb20gJy4vRm9ybUNvbnRleHQnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAZGVmYXVsdCAnZm9ybS1jaGVjay1pbnB1dCdcbiAgICovXG4gIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBBIEhUTUwgaWQgYXR0cmlidXRlLCBuZWNlc3NhcnkgZm9yIHByb3BlciBmb3JtIGFjY2Vzc2liaWxpdHkuICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBUaGUgdHlwZSBvZiBjaGVja2FibGUuICovXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3JhZGlvJywgJ2NoZWNrYm94J10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCBzaG9ydGN1dCBmb3IgYWRkaW5nIGBwb3NpdGlvbi1zdGF0aWNgIHRvIHRoZSBpbnB1dCwgZm9yXG4gICAqIGNvcnJlY3Qgc3R5bGluZyB3aGVuIHVzZWQgd2l0aG91dCBhbiBGb3JtQ2hlY2tMYWJlbFxuICAgKi9cbiAgaXNTdGF0aWM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBNYW51YWxseSBzdHlsZSB0aGUgaW5wdXQgYXMgdmFsaWQgKi9cbiAgaXNWYWxpZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKiogTWFudWFsbHkgc3R5bGUgdGhlIGlucHV0IGFzIGludmFsaWQgKi9cbiAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5hbnksXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdjaGVja2JveCcsXG59O1xuXG5mdW5jdGlvbiBGb3JtQ2hlY2tJbnB1dCh7XG4gIGlkLFxuICBic1ByZWZpeCxcbiAgY2xhc3NOYW1lLFxuICBpc1ZhbGlkLFxuICBpc0ludmFsaWQsXG4gIGlubmVyUmVmLFxuICBpc1N0YXRpYyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7KHsgY29udHJvbElkIH0pID0+IChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgICAgaWQ9e2lkIHx8IGNvbnRyb2xJZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICBic1ByZWZpeCxcbiAgICAgICAgICAgIGlzVmFsaWQgJiYgJ2lzLXZhbGlkJyxcbiAgICAgICAgICAgIGlzSW52YWxpZCAmJiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgICBpc1N0YXRpYyAmJiAncG9zaXRpb24tc3RhdGljJyxcbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0Zvcm1Db250ZXh0LkNvbnN1bWVyPlxuICApO1xufVxuXG5Gb3JtQ2hlY2tJbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Gb3JtQ2hlY2tJbnB1dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChGb3JtQ2hlY2tJbnB1dCwgJ2Zvcm0tY2hlY2staW5wdXQnKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgRm9ybUNvbnRleHQgZnJvbSAnLi9Gb3JtQ29udGV4dCc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBkZWZhdWx0ICdmb3JtLWNoZWNrLWlucHV0J1xuICAgKi9cbiAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbm5lclJlZjogUHJvcFR5cGVzLmFueSxcblxuICAvKiogVGhlIEhUTUwgZm9yIGF0dHJpYnV0ZSBmb3IgYXNzb2NpYXRpbmcgdGhlIGxhYmVsIHdpdGggYW4gaW5wdXQgKi9cbiAgaHRtbEZvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ2NoZWNrYm94Jyxcbn07XG5cbmZ1bmN0aW9uIEZvcm1DaGVja0xhYmVsKHsgYnNQcmVmaXgsIGNsYXNzTmFtZSwgaW5uZXJSZWYsIGh0bWxGb3IsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7KHsgY29udHJvbElkIH0pID0+IChcbiAgICAgICAgPGxhYmVsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgICAgIGh0bWxGb3I9e2h0bWxGb3IgfHwgY29udHJvbElkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGJzUHJlZml4KX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9Gb3JtQ29udGV4dC5Db25zdW1lcj5cbiAgKTtcbn1cblxuRm9ybUNoZWNrTGFiZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuRm9ybUNoZWNrTGFiZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoRm9ybUNoZWNrTGFiZWwsICdmb3JtLWNoZWNrLWxhYmVsJyk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IEZvcm1Db250ZXh0IGZyb20gJy4vRm9ybUNvbnRleHQnO1xuaW1wb3J0IEZlZWRiYWNrIGZyb20gJy4vRmVlZGJhY2snO1xuaW1wb3J0IEZvcm1DaGVja0lucHV0IGZyb20gJy4vRm9ybUNoZWNrSW5wdXQnO1xuaW1wb3J0IEZvcm1DaGVja0xhYmVsIGZyb20gJy4vRm9ybUNoZWNrTGFiZWwnO1xuXG5jbGFzcyBGb3JtQ2hlY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdmb3JtLWNoZWNrJ1xuICAgICAqL1xuICAgIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIEZvcm1DaGVjayBgcmVmYCB3aWxsIGJlIGZvcndhcmRlZCB0byB0aGUgdW5kZXJseWluZyBpbnB1dCBlbGVtZW50LFxuICAgICAqIHdoaWNoIG1lYW5zIGl0IHdpbGwgYmUgYSBET00gbm9kZSwgd2hlbiByZXNvbHZlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtSZWFjdFJlZn1cbiAgICAgKiBAYWxpYXMge3JlZn1cbiAgICAgKi9cbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKiBBIEhUTUwgaWQgYXR0cmlidXRlLCBuZWNlc3NhcnkgZm9yIHByb3BlciBmb3JtIGFjY2Vzc2liaWxpdHkuICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlIGEgZnVuY3Rpb24gY2hpbGQgdG8gbWFudWFsbHkgaGFuZGxlIHRoZSBsYXlvdXQgb2YgdGhlIEZvcm1DaGVjaydzIGlubmVyIGNvbXBvbmVudHMuXG4gICAgICpcbiAgICAgKiBgYGBgXG4gICAgICogPEZvcm1DaGVjaz5cbiAgICAgKiAgIDxGb3JtQ2hlY2suSW5wdXQgaXNJbnZhbGlkIHR5cGU9e3JhZGlvfSAvPlxuICAgICAqICAgPEZvcm1DaGVjay5MYWJlbD5BbGxvdyB1cyB0byBjb250YWN0IHlvdT88L0Zvcm1DaGVjay5MYWJlbD5cbiAgICAgKiAgIDxGZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPllvIHRoaXMgaXMgcmVxdWlyZWQ8L0ZlZWRiYWNrPlxuICAgICAqIDwvRm9ybUNoZWNrPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKiBUaGUgdHlwZSBvZiBjaGVja2FibGUuICovXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsncmFkaW8nLCAnY2hlY2tib3gnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKiBNYW51YWxseSBzdHlsZSB0aGUgaW5wdXQgYXMgdmFsaWQgKi9cbiAgICBpc1ZhbGlkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqIE1hbnVhbGx5IHN0eWxlIHRoZSBpbnB1dCBhcyBpbnZhbGlkICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqIEEgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlIGlucHV0IGlzIGluIGEgdmFsaWRhdGlvbiBzdGF0ZSAqL1xuICAgIGZlZWRiYWNrOiBQcm9wVHlwZXMubm9kZSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgaW5saW5lOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNWYWxpZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiBmYWxzZSxcbiAgICB0aXRsZTogJycsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgYnNQcmVmaXgsXG4gICAgICBpbmxpbmUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzVmFsaWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBmZWVkYmFjayxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICB0aXRsZSxcbiAgICAgIHR5cGUsXG4gICAgICBsYWJlbCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGhhc0xhYmVsID0gbGFiZWwgIT0gbnVsbCAmJiBsYWJlbCAhPT0gZmFsc2UgJiYgIWNoaWxkcmVuO1xuXG4gICAgY29uc3QgaW5wdXQgPSAoXG4gICAgICA8Rm9ybUNoZWNrSW5wdXRcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICBpc1ZhbGlkPXtpc1ZhbGlkfVxuICAgICAgICBpc0ludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgaXNTdGF0aWM9eyFoYXNMYWJlbH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtQ29udGV4dC5UcmFuc2Zvcm1cbiAgICAgICAgbWFwVG9WYWx1ZT17KHsgY29udHJvbElkIH0pID0+ICh7IGNvbnRyb2xJZDogaWQgfHwgY29udHJvbElkIH0pfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIGJzUHJlZml4LFxuICAgICAgICAgICAgaW5saW5lICYmIGAke2JzUHJlZml4fS1pbmxpbmVgLFxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW4gfHwgKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7aW5wdXR9XG4gICAgICAgICAgICAgIHtoYXNMYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPEZvcm1DaGVja0xhYmVsIHRpdGxlPXt0aXRsZX0+e2xhYmVsfTwvRm9ybUNoZWNrTGFiZWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHsoaXNWYWxpZCB8fCBpc0ludmFsaWQpICYmIChcbiAgICAgICAgICAgICAgICA8RmVlZGJhY2sgdHlwZT17aXNWYWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCd9PlxuICAgICAgICAgICAgICAgICAge2ZlZWRiYWNrfVxuICAgICAgICAgICAgICAgIDwvRmVlZGJhY2s+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtQ29udGV4dC5UcmFuc2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgRGVjb3JhdGVkRm9ybUNoZWNrID0gY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KEZvcm1DaGVjaywge1xuICBmb3J3YXJkUmVmQXM6ICdpbnB1dFJlZicsXG4gIHByZWZpeDogJ2Zvcm0tY2hlY2snLFxufSk7XG5cbkRlY29yYXRlZEZvcm1DaGVjay5JbnB1dCA9IEZvcm1DaGVja0lucHV0O1xuRGVjb3JhdGVkRm9ybUNoZWNrLkxhYmVsID0gRm9ybUNoZWNrTGFiZWw7XG5cbmV4cG9ydCBkZWZhdWx0IERlY29yYXRlZEZvcm1DaGVjaztcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcblxuaW1wb3J0IG1hcENvbnRleHRUb1Byb3BzIGZyb20gJ3JlYWN0LWNvbnRleHQtdG9vbGJveC9saWIvbWFwQ29udGV4dFRvUHJvcHMnO1xuaW1wb3J0IENvbCBmcm9tICcuL0NvbCc7XG5pbXBvcnQgRm9ybUNvbnRleHQgZnJvbSAnLi9Gb3JtQ29udGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAZGVmYXVsdCAnZm9ybS1sYWJlbCdcbiAgICovXG4gIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBVc2VzIGBjb250cm9sSWRgIGZyb20gYDxGb3JtR3JvdXA+YCBpZiBub3QgZXhwbGljaXRseSBzcGVjaWZpZWQuXG4gICAqL1xuICBodG1sRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBGb3JtTGFiZWwgYXMgYSBgPENvbD5gIGNvbXBvbmVudCAoYWNjZXB0aW5nIGFsbCB0aGUgc2FtZSBwcm9wcyksXG4gICAqIGFzIHdlbGwgYXMgYWRkaW5nIGFkZGl0aW9uYWwgc3R5bGluZyBmb3IgaG9yaXpvbnRhbCBmb3Jtcy5cbiAgICovXG4gIGNvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBGb3JtTGFiZWwgYHJlZmAgd2lsbCBiZSBmb3J3YXJkZWQgdG8gdGhlIHVuZGVybHlpbmcgZWxlbWVudC5cbiAgICogVW5sZXNzIHRoZSBGb3JtTGFiZWwgaXMgcmVuZGVyZWQgYGFzYCBhIGNvbXBvc2l0ZSBjb21wb25lbnQsXG4gICAqIGl0IHdpbGwgYmUgYSBET00gbm9kZSwgd2hlbiByZXNvbHZlZC5cbiAgICpcbiAgICogQHR5cGUge1JlYWN0UmVmfVxuICAgKiBAYWxpYXMgcmVmXG4gICAqL1xuICBpbm5lclJlZjogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSGlkZXMgdGhlIGxhYmVsIHZpc3VhbGx5IHdoaWxlIHN0aWxsIGFsbG93aW5nIGl0IHRvIGJlXG4gICAqIHJlYWQgYnkgYXNzaXN0aXZlIHRlY2hub2xvZ2llcy5cbiAgICovXG4gIHNyT25seTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbHVtbjogZmFsc2UsXG4gIHNyT25seTogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiBGb3JtTGFiZWwoe1xuICBic1ByZWZpeCxcbiAgY29sdW1uLFxuICBzck9ubHksXG4gIGNsYXNzTmFtZSxcbiAgaW5uZXJSZWYsXG4gIC4uLnByb3BzXG59KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBic1ByZWZpeCxcbiAgICBzck9ubHkgJiYgJ3NyLW9ubHknLFxuICAgIGNvbHVtbiAmJiAnY29sLWZvcm0tbGFiZWwnLFxuICApO1xuXG4gIGlmIChjb2x1bW4pIHJldHVybiA8Q29sIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc2VzfSBhcz1cImxhYmVsXCIgLz47XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IsIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2xcbiAgcmV0dXJuIDxsYWJlbCB7Li4ucHJvcHN9IHJlZj17aW5uZXJSZWZ9IGNsYXNzTmFtZT17Y2xhc3Nlc30gLz47XG59XG5cbkZvcm1MYWJlbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Gb3JtTGFiZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5jb25zdCBtYXBDb250ZXh0ID0gKHsgY29udHJvbElkIH0sIHsgaHRtbEZvciB9KSA9PiB7XG4gIHdhcm5pbmcoXG4gICAgY29udHJvbElkID09IG51bGwgfHwgIWh0bWxGb3IsXG4gICAgJ2Bjb250cm9sSWRgIGlzIGlnbm9yZWQgb24gYDxGb3JtTGFiZWw+YCB3aGVuIGBodG1sRm9yYCBpcyBzcGVjaWZpZWQuJyxcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBodG1sRm9yOiBodG1sRm9yIHx8IGNvbnRyb2xJZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENvbnRleHRUb1Byb3BzKFxuICBGb3JtQ29udGV4dC5Db25zdW1lcixcbiAgbWFwQ29udGV4dCxcbiAgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KEZvcm1MYWJlbCwgJ2Zvcm0tbGFiZWwnKSxcbik7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKiogQGRlZmF1bHQgJ2Zvcm0tdGV4dCcgKi9cbiAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBGb3JtVGV4dCBgcmVmYCB3aWxsIGJlIGZvcndhcmRlZCB0byB0aGUgdW5kZXJseWluZyBlbGVtZW50LlxuICAgKiBVbmxlc3MgdGhlIEZvcm1UZXh0IGlzIHJlbmRlcmVkIGBhc2AgYSBjb21wb3NpdGUgY29tcG9uZW50LFxuICAgKiBpdCB3aWxsIGJlIGEgRE9NIG5vZGUsIHdoZW4gcmVzb2x2ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtSZWFjdFJlZn1cbiAgICogQGFsaWFzIHJlZlxuICAgKi9cbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCBmb3IgYWRkIHRoZSBgdGV4dC1tdXRlZGAgY2xhc3MsXG4gICAqIHNpbmNlIGl0J3Mgc28gY29tbW9ubHkgdXNlZCBoZXJlLlxuICAgKi9cbiAgbXV0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhczogZWxlbWVudFR5cGUsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnc21hbGwnLFxufTtcblxuZnVuY3Rpb24gRm9ybVRleHQoeyBic1ByZWZpeCwgY2xhc3NOYW1lLCBpbm5lclJlZiwgYXM6IENvbXBvbmVudCwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9XG4gICAgLz5cbiAgKTtcbn1cblxuRm9ybVRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuRm9ybVRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoRm9ybVRleHQsICdmb3JtLXRleHQnKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgY3JlYXRlV2l0aEJzUHJlZml4IGZyb20gJy4vdXRpbHMvY3JlYXRlV2l0aEJzUHJlZml4JztcbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJy4vRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuL0Zvcm1Db250cm9sJztcbmltcG9ydCBGb3JtQ2hlY2sgZnJvbSAnLi9Gb3JtQ2hlY2snO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICcuL0Zvcm1MYWJlbCc7XG5pbXBvcnQgRm9ybVRleHQgZnJvbSAnLi9Gb3JtVGV4dCc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBkZWZhdWx0IHsnZm9ybSd9XG4gICAqL1xuICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIEZvcm0gYHJlZmAgd2lsbCBiZSBmb3J3YXJkZWQgdG8gdGhlIHVuZGVybHlpbmcgZWxlbWVudCxcbiAgICogd2hpY2ggbWVhbnMsIHVubGVzcyBpdCdzIHJlbmRlcmVkIGBhc2AgYSBjb21wb3NpdGUgY29tcG9uZW50LFxuICAgKiBpdCB3aWxsIGJlIGEgRE9NIG5vZGUsIHdoZW4gcmVzb2x2ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtSZWFjdFJlZn1cbiAgICogQGFsaWFzIHJlZlxuICAgKi9cbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIHNlcmllcyBvZiBsYWJlbHMsIGZvcm0gY29udHJvbHMsXG4gICAqIGFuZCBidXR0b25zIG9uIGEgc2luZ2xlIGhvcml6b250YWwgcm93XG4gICAqL1xuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNYXJrIGEgZm9ybSBhcyBoYXZpbmcgYmVlbiB2YWxpZGF0ZWQuIFNldHRpbmcgaXQgdG8gYHRydWVgIHdpbGxcbiAgICogdG9nZ2xlIGFueSB2YWxpZGF0aW9uIHN0eWxlcyBvbiB0aGUgZm9ybXMgZWxlbWVudHMuXG4gICAqL1xuICB2YWxpZGF0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhczogZWxlbWVudFR5cGUsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGlubGluZTogZmFsc2UsXG4gIGFzOiAnZm9ybScsXG59O1xuXG5mdW5jdGlvbiBGb3JtKHtcbiAgYnNQcmVmaXgsXG4gIGlubGluZSxcbiAgY2xhc3NOYW1lLFxuICBpbm5lclJlZixcbiAgdmFsaWRhdGVkLFxuICBhczogQ29tcG9uZW50LFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgdmFsaWRhdGVkICYmICd3YXMtdmFsaWRhdGVkJyxcbiAgICAgICAgaW5saW5lICYmIGAke2JzUHJlZml4fS1pbmxpbmVgLFxuICAgICAgKX1cbiAgICAvPlxuICApO1xufVxuXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkZvcm0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5jb25zdCBEZWNvcmF0ZWRGb3JtID0gY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KEZvcm0sICdmb3JtJyk7XG5cbkRlY29yYXRlZEZvcm0uUm93ID0gY3JlYXRlV2l0aEJzUHJlZml4KCdmb3JtLXJvdycpO1xuRGVjb3JhdGVkRm9ybS5Hcm91cCA9IEZvcm1Hcm91cDtcbkRlY29yYXRlZEZvcm0uQ29udHJvbCA9IEZvcm1Db250cm9sO1xuRGVjb3JhdGVkRm9ybS5DaGVjayA9IEZvcm1DaGVjaztcbkRlY29yYXRlZEZvcm0uTGFiZWwgPSBGb3JtTGFiZWw7XG5EZWNvcmF0ZWRGb3JtLlRleHQgPSBGb3JtVGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgRGVjb3JhdGVkRm9ybTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBAZGVmYXVsdCAnaW1nJ1xuICAgICAqL1xuICAgIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFNldHMgaW1hZ2UgYXMgZmx1aWQgaW1hZ2UuXG4gICAgICovXG4gICAgZmx1aWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBpbWFnZSBzaGFwZSBhcyByb3VuZGVkLlxuICAgICAqL1xuICAgIHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBpbWFnZSBzaGFwZSBhcyBjaXJjbGUuXG4gICAgICovXG4gICAgcm91bmRlZENpcmNsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGltYWdlIHNoYXBlIGFzIHRodW1ibmFpbC5cbiAgICAgKi9cbiAgICB0aHVtYm5haWw6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZmx1aWQ6IGZhbHNlLFxuICAgIHJvdW5kZWQ6IGZhbHNlLFxuICAgIHJvdW5kZWRDaXJjbGU6IGZhbHNlLFxuICAgIHRodW1ibmFpbDogZmFsc2UsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZmx1aWQsXG4gICAgICByb3VuZGVkLFxuICAgICAgcm91bmRlZENpcmNsZSxcbiAgICAgIHRodW1ibmFpbCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgIGZsdWlkICYmIGAke2JzUHJlZml4fS1mbHVpZGAsXG4gICAgICByb3VuZGVkICYmIGByb3VuZGVkYCxcbiAgICAgIHJvdW5kZWRDaXJjbGUgJiYgYHJvdW5kZWQtY2lyY2xlYCxcbiAgICAgIHRodW1ibmFpbCAmJiBgJHtic1ByZWZpeH0tdGh1bWJuYWlsYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbWcgLy8gZXNsaW50LWRpc2FibGUtbGluZSBqc3gtYTExeS9hbHQtdGV4dFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGNsYXNzZXMpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChJbWFnZSwgJ2ltZycpO1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xuXG5jbGFzcyBGaWd1cmVJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQGRlZmF1bHQgJ2ltZydcbiAgICAgKi9cbiAgICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBTZXRzIGltYWdlIGFzIGZsdWlkIGltYWdlLlxuICAgICAqL1xuICAgIGZsdWlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgaW1hZ2Ugc2hhcGUgYXMgcm91bmRlZC5cbiAgICAgKi9cbiAgICByb3VuZGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgaW1hZ2Ugc2hhcGUgYXMgY2lyY2xlLlxuICAgICAqL1xuICAgIHJvdW5kZWRDaXJjbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBpbWFnZSBzaGFwZSBhcyB0aHVtYm5haWwuXG4gICAgICovXG4gICAgdGh1bWJuYWlsOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0geyBmbHVpZDogdHJ1ZSB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxJbWFnZSB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsICdmaWd1cmUtaW1nJyl9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ3VyZUltYWdlO1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGVsZW1lbnRUeXBlIH0gZnJvbSAncHJvcC10eXBlcy1leHRyYSc7XG5cbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNsYXNzIEZpZ3VyZUNhcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdmaWd1cmUtY2FwdGlvbidcbiAgICAgKi9cbiAgICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhczogZWxlbWVudFR5cGUsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhczogJ2ZpZ2NhcHRpb24nLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFzOiBDb21wb25lbnQsIGJzUHJlZml4LCBjbGFzc05hbWUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChGaWd1cmVDYXB0aW9uLCAnZmlndXJlLWNhcHRpb24nKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5pbXBvcnQgRmlndXJlSW1hZ2UgZnJvbSAnLi9GaWd1cmVJbWFnZSc7XG5pbXBvcnQgRmlndXJlQ2FwdGlvbiBmcm9tICcuL0ZpZ3VyZUNhcHRpb24nO1xuXG5jbGFzcyBGaWd1cmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdmaWd1cmUnXG4gICAgICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBhczogZWxlbWVudFR5cGUsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhczogJ2ZpZ3VyZScsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXM6IENvbXBvbmVudCwgYnNQcmVmaXgsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGJzUHJlZml4KX0gLz47XG4gIH1cbn1cblxuY29uc3QgRGVjb3JhdGVkRmlndXJlID0gY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KEZpZ3VyZSwgJ2ZpZ3VyZScpO1xuXG5EZWNvcmF0ZWRGaWd1cmUuSW1hZ2UgPSBGaWd1cmVJbWFnZTtcbkRlY29yYXRlZEZpZ3VyZS5DYXB0aW9uID0gRmlndXJlQ2FwdGlvbjtcbmV4cG9ydCBkZWZhdWx0IERlY29yYXRlZEZpZ3VyZTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGVsZW1lbnRUeXBlIH0gZnJvbSAncHJvcC10eXBlcy1leHRyYSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY3JlYXRlV2l0aEJzUHJlZml4IGZyb20gJy4vdXRpbHMvY3JlYXRlV2l0aEJzUHJlZml4JztcbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbi8qKlxuICpcbiAqIEBwcm9wZXJ0eSB7SW5wdXRHcm91cEFwcGVuZH0gQXBwZW5kXG4gKiBAcHJvcGVydHkge0lucHV0R3JvdXBQcmVwZW5kfSBQcmVwZW5kXG4gKiBAcHJvcGVydHkge0lucHV0R3JvdXBUZXh0fSBUZXh0XG4gKiBAcHJvcGVydHkge0lucHV0R3JvdXBSYWRpb30gUmFkaW9cbiAqIEBwcm9wZXJ0eSB7SW5wdXRHcm91cENoZWNrYm94fSBDaGVja2JveFxuICovXG5jbGFzcyBJbnB1dEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogQGRlZmF1bHQgJ2lucHV0LWdyb3VwJyAqL1xuICAgIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDb250cm9sIHRoZSBzaXplIG9mIGJ1dHRvbnMgYW5kIGZvcm0gZWxlbWVudHMgZnJvbSB0aGUgdG9wLWxldmVsIC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHsoJ3NtJ3wnbGcnKX1cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXM6ICdkaXYnLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJzUHJlZml4LCBzaXplLCBjbGFzc05hbWUsIGFzOiBDb21wb25lbnQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgIGJzUHJlZml4LFxuICAgICAgICAgIHNpemUgJiYgYCR7YnNQcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IElucHV0R3JvdXBBcHBlbmQgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2lucHV0LWdyb3VwLWFwcGVuZCcpO1xuXG5jb25zdCBJbnB1dEdyb3VwUHJlcGVuZCA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnaW5wdXQtZ3JvdXAtcHJlcGVuZCcpO1xuXG5jb25zdCBJbnB1dEdyb3VwVGV4dCA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnaW5wdXQtZ3JvdXAtdGV4dCcsIHtcbiAgQ29tcG9uZW50OiAnc3BhbicsXG59KTtcblxuY29uc3QgSW5wdXRHcm91cENoZWNrYm94ID0gcHJvcHMgPT4gKFxuICA8SW5wdXRHcm91cFRleHQ+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHsuLi5wcm9wc30gLz5cbiAgPC9JbnB1dEdyb3VwVGV4dD5cbik7XG5cbmNvbnN0IElucHV0R3JvdXBSYWRpbyA9IHByb3BzID0+IChcbiAgPElucHV0R3JvdXBUZXh0PlxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB7Li4ucHJvcHN9IC8+XG4gIDwvSW5wdXRHcm91cFRleHQ+XG4pO1xuXG5jb25zdCBEZWNvcmF0ZWRJbnB1dEdyb3VwID0gY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KElucHV0R3JvdXAsICdpbnB1dC1ncm91cCcpO1xuXG5EZWNvcmF0ZWRJbnB1dEdyb3VwLlRleHQgPSBJbnB1dEdyb3VwVGV4dDtcbkRlY29yYXRlZElucHV0R3JvdXAuUmFkaW8gPSBJbnB1dEdyb3VwUmFkaW87XG5EZWNvcmF0ZWRJbnB1dEdyb3VwLkNoZWNrYm94ID0gSW5wdXRHcm91cENoZWNrYm94O1xuRGVjb3JhdGVkSW5wdXRHcm91cC5BcHBlbmQgPSBJbnB1dEdyb3VwQXBwZW5kO1xuRGVjb3JhdGVkSW5wdXRHcm91cC5QcmVwZW5kID0gSW5wdXRHcm91cFByZXBlbmQ7XG5cbmV4cG9ydCBkZWZhdWx0IERlY29yYXRlZElucHV0R3JvdXA7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcblxuaW1wb3J0IEFic3RyYWN0TmF2SXRlbSBmcm9tICcuL0Fic3RyYWN0TmF2SXRlbSc7XG5pbXBvcnQgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNsYXNzIExpc3RHcm91cEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdsaXN0LWdyb3VwLWl0ZW0nXG4gICAgICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgY29udGV4dHVhbCBjbGFzc2VzIGZvciBsaXN0IGl0ZW1cbiAgICAgKiBAdHlwZSB7KCdwcmltYXJ5J3wnc2Vjb25kYXJ5J3wnc3VjY2Vzcyd8J2Rhbmdlcid8J3dhcm5pbmcnfCdpbmZvJ3wnZGFyayd8J2xpZ2h0Jyl9XG4gICAgICovXG4gICAgdmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBNYXJrcyBhIExpc3RHcm91cEl0ZW0gYXMgYWN0aW9uYWJsZSwgYXBwbHlpbmcgYWRkaXRpb25hbCBob3ZlciwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdHlsZXNcbiAgICAgKiBmb3IgbGlua3MgYW5kIGJ1dHRvbnMuXG4gICAgICovXG4gICAgYWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBTZXRzIGxpc3QgaXRlbSBhcyBhY3RpdmVcbiAgICAgKi9cbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBsaXN0IGl0ZW0gc3RhdGUgYXMgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIHVzZSBhIGN1c3RvbSBlbGVtZW50IHR5cGUgZm9yIHRoaXMgY29tcG9uZW50LiBGb3Igbm9uZSBgYWN0aW9uYCBpdGVtcywgaXRlbXMgcmVuZGVyIGFzIGBsaWAuXG4gICAgICogRm9yIGFjdGlvbnMgdGhlIGRlZmF1bHQgaXMgYW4gYWNob3Igb3IgYnV0dG9uIGVsZW1lbnQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBgaHJlZmAgaXMgcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCB7J2RpdicgfCAnYScgfCAnYnV0dG9uJ31cbiAgICAgKi9cbiAgICBhczogZWxlbWVudFR5cGUsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YXJpYW50OiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgb25DbGljaywgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBic1ByZWZpeCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdmFyaWFudCxcbiAgICAgIGFjdGlvbixcbiAgICAgIGFzLFxuICAgICAgZXZlbnRLZXksXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnN0cmFjdE5hdkl0ZW1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBldmVudEtleT17bWFrZUV2ZW50S2V5KGV2ZW50S2V5LCBwcm9wcy5ocmVmKX1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGFzPXthcyB8fCAoYWN0aW9uID8gKHByb3BzLmhyZWYgPyAnYScgOiAnYnV0dG9uJykgOiAnZGl2Jyl9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgYnNQcmVmaXgsXG4gICAgICAgICAgYWN0aXZlICYmICdhY3RpdmUnLFxuICAgICAgICAgIGRpc2FibGVkICYmICdkaXNhYmxlZCcsXG4gICAgICAgICAgdmFyaWFudCAmJiBgJHtic1ByZWZpeH0tJHt2YXJpYW50fWAsXG4gICAgICAgICAgYWN0aW9uICYmIGAke2JzUHJlZml4fS1hY3Rpb25gLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChMaXN0R3JvdXBJdGVtLCAnbGlzdC1ncm91cC1pdGVtJyk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcbmltcG9ydCB1bmNvbnRyb2xsYWJsZSBmcm9tICd1bmNvbnRyb2xsYWJsZSc7XG5cbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgQWJzdHJhY3ROYXYgZnJvbSAnLi9BYnN0cmFjdE5hdic7XG5pbXBvcnQgTGlzdEdyb3VwSXRlbSBmcm9tICcuL0xpc3RHcm91cEl0ZW0nO1xuXG5jbGFzcyBMaXN0R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0ICdsaXN0LWdyb3VwJ1xuICAgICAqL1xuICAgIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdmFyaWFudCB0byB0aGUgbGlzdC1ncm91cFxuICAgICAqXG4gICAgICogQHR5cGUgeygnZmx1c2gnKX1cbiAgICAgKi9cbiAgICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmbHVzaCcsIG51bGxdKSxcblxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gdXNlIGEgY3VzdG9tIGVsZW1lbnQgdHlwZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICovXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXM6ICdkaXYnLFxuICAgIHZhcmlhbnQ6IG51bGwsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBic1ByZWZpeCwgdmFyaWFudCwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFic3RyYWN0TmF2XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBic1ByZWZpeCxcbiAgICAgICAgICB2YXJpYW50ICYmIGAke2JzUHJlZml4fS0ke3ZhcmlhbnR9YCxcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBEZWNvcmF0ZWRMaXN0R3JvdXAgPSB1bmNvbnRyb2xsYWJsZShcbiAgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KExpc3RHcm91cCwgJ2xpc3QtZ3JvdXAnKSxcbiAge1xuICAgIGFjdGl2ZUtleTogJ29uU2VsZWN0JyxcbiAgfSxcbik7XG5EZWNvcmF0ZWRMaXN0R3JvdXAuSXRlbSA9IExpc3RHcm91cEl0ZW07XG5cbmV4cG9ydCBkZWZhdWx0IERlY29yYXRlZExpc3RHcm91cDtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgY3JlYXRlV2l0aEJzUHJlZml4IGZyb20gJy4vdXRpbHMvY3JlYXRlV2l0aEJzUHJlZml4JztcbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBkZWZhdWx0ICdtZWRpYSdcbiAgICovXG4gIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgYXM6IGVsZW1lbnRUeXBlLFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2RpdicsXG59O1xuXG5jbGFzcyBNZWRpYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJzUHJlZml4LCBjbGFzc05hbWUsIGFzOiBDb21wb25lbnQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9IC8+O1xuICB9XG59XG5cbk1lZGlhLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbk1lZGlhLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuY29uc3QgRGVjb3JhdGVkTWVkaWEgPSBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoTWVkaWEsICdtZWRpYScpO1xuXG5EZWNvcmF0ZWRNZWRpYS5Cb2R5ID0gY3JlYXRlV2l0aEJzUHJlZml4KCdtZWRpYS1ib2R5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IERlY29yYXRlZE1lZGlhO1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGVsZW1lbnRUeXBlIH0gZnJvbSAncHJvcC10eXBlcy1leHRyYSc7XG5cbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNsYXNzIE1vZGFsQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXM6ICdkaXYnLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFzOiBDb21wb25lbnQsIGJzUHJlZml4LCBjbGFzc05hbWUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChNb2RhbEJvZHksICdtb2RhbC1ib2R5Jyk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5jbGFzcyBNb2RhbERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgYSBsYXJnZSBvciBzbWFsbCBtb2RhbC5cbiAgICAgKlxuICAgICAqIEB0eXBlICgnc20nfCdsZycpXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCBiZSB2ZXJ0aWNhbGx5IGNlbnRlcmVkXG4gICAgICovXG4gICAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNlbnRlcmVkLFxuICAgICAgc2l6ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGJzQ2xhc3MgPSBgJHtic1ByZWZpeH0tZGlhbG9nYDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBic0NsYXNzLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBzaXplICYmIGAke2JzUHJlZml4fS0ke3NpemV9YCxcbiAgICAgICAgICBjZW50ZXJlZCAmJiBgJHtic0NsYXNzfS1jZW50ZXJlZGAsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke2JzUHJlZml4fS1jb250ZW50YCl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KE1vZGFsRGlhbG9nLCAnbW9kYWwnKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5jbGFzcyBNb2RhbEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXM6ICdkaXYnLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFzOiBDb21wb25lbnQsIGJzUHJlZml4LCBjbGFzc05hbWUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChNb2RhbEZvb3RlciwgJ21vZGFsLWZvb3RlcicpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTW9kYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7IG9uSGlkZSgpIHt9IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRleHQ7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbic7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4vTW9kYWxDb250ZXh0JztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBic1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogUHJvdmlkZXMgYW4gYWNjZXNzaWJsZSBsYWJlbCBmb3IgdGhlIGNsb3NlXG4gICAqIGJ1dHRvbi4gSXQgaXMgdXNlZCBmb3IgQXNzaXN0aXZlIFRlY2hub2xvZ3kgd2hlbiB0aGUgbGFiZWwgdGV4dCBpcyBub3RcbiAgICogcmVhZGFibGUuXG4gICAqL1xuICBjbG9zZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoZXRoZXIgdGhlIENvbXBvbmVudCBzaG91bGQgY29udGFpbiBhIGNsb3NlIGJ1dHRvblxuICAgKi9cbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNsb3NlIGJ1dHRvbiBpcyBjbGlja2VkLiBJZiB1c2VkIGRpcmVjdGx5IGluc2lkZVxuICAgKiBhIE1vZGFsIGNvbXBvbmVudCwgdGhlIG9uSGlkZSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgcHJvcGFnYXRlZCB1cCB0byB0aGVcbiAgICogcGFyZW50IE1vZGFsIGBvbkhpZGVgLlxuICAgKi9cbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgY2xvc2VMYWJlbDogJ0Nsb3NlJyxcbiAgY2xvc2VCdXR0b246IGZhbHNlLFxufTtcblxuY2xhc3MgTW9kYWxIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnNQcmVmaXgsXG4gICAgICBjbG9zZUxhYmVsLFxuICAgICAgY2xvc2VCdXR0b24sXG4gICAgICBvbkhpZGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge2NvbnRleHQgPT4gKFxuICAgICAgICAgIDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICB7Y2xvc2VCdXR0b24gJiYgKFxuICAgICAgICAgICAgICA8Q2xvc2VCdXR0b25cbiAgICAgICAgICAgICAgICBsYWJlbD17Y2xvc2VMYWJlbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVDaGFpbmVkRnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICBjb250ZXh0ICYmIGNvbnRleHQub25IaWRlLFxuICAgICAgICAgICAgICAgICAgb25IaWRlLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Nb2RhbENvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxufVxuXG5Nb2RhbEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Nb2RhbEhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChNb2RhbEhlYWRlciwgJ21vZGFsLWhlYWRlcicpO1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGVsZW1lbnRUeXBlIH0gZnJvbSAncHJvcC10eXBlcy1leHRyYSc7XG5pbXBvcnQgZGl2V2l0aENsYXNzTmFtZSBmcm9tICcuL3V0aWxzL2RpdldpdGhDbGFzc05hbWUnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5jb25zdCBEaXZTdHlsZWRBc0g0ID0gZGl2V2l0aENsYXNzTmFtZSgnaDQnKTtcblxuY2xhc3MgTW9kYWxUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXM6IERpdlN0eWxlZEFzSDQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXM6IENvbXBvbmVudCwgYnNQcmVmaXgsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGJzUHJlZml4KX0gLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KE1vZGFsVGl0bGUsICdtb2RhbC10aXRsZScpO1xuIiwiaW1wb3J0IHFzYSBmcm9tICdkb20taGVscGVycy9xdWVyeS9xdWVyeVNlbGVjdG9yQWxsJztcbmltcG9ydCBjc3MgZnJvbSAnZG9tLWhlbHBlcnMvc3R5bGUnO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnZG9tLWhlbHBlcnMvdXRpbC9zY3JvbGxiYXJTaXplJztcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSAncmVhY3Qtb3ZlcmxheXMvTW9kYWxNYW5hZ2VyJztcblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIEZJWEVEX0NPTlRFTlQ6ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJyxcbiAgU1RJQ0tZX0NPTlRFTlQ6ICcuc3RpY2t5LXRvcCcsXG4gIE5BVkJBUl9UT0dHTEVSOiAnLm5hdmJhci10b2dnbGVyJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3RzdHJhcE1vZGFsTWFuYWdlciBleHRlbmRzIE1vZGFsTWFuYWdlciB7XG4gIGFkanVzdEFuZFN0b3JlID0gKHByb3AsIGVsZW1lbnQsIGFkanVzdCkgPT4ge1xuICAgIGNvbnN0IGFjdHVhbCA9IGVsZW1lbnQuc3R5bGVbcHJvcF07XG4gICAgZWxlbWVudC5kYXRhc2V0W3Byb3BdID0gYWN0dWFsO1xuICAgIGNzcyhlbGVtZW50LCBwcm9wLCBgJHtwYXJzZUZsb2F0KGNzcyhlbGVtZW50LCBwcm9wKSkgKyBhZGp1c3R9cHhgKTtcbiAgfTtcblxuICByZXN0b3JlID0gKHByb3AsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZGF0YXNldFtwcm9wXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtwcm9wXTtcbiAgICAgIGNzcyhlbGVtZW50LCBwcm9wLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHNldENvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlLCBjb250YWluZXIpIHtcbiAgICBzdXBlci5zZXRDb250YWluZXJTdHlsZShjb250YWluZXJTdGF0ZSwgY29udGFpbmVyKTtcblxuICAgIGlmICghY29udGFpbmVyU3RhdGUub3ZlcmZsb3dpbmcpIHJldHVybjtcbiAgICBjb25zdCBzaXplID0gZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuXG4gICAgcXNhKGNvbnRhaW5lciwgU2VsZWN0b3IuRklYRURfQ09OVEVOVCkuZm9yRWFjaChlbCA9PlxuICAgICAgdGhpcy5hZGp1c3RBbmRTdG9yZSgncGFkZGluZ1JpZ2h0JywgZWwsIHNpemUpLFxuICAgICk7XG4gICAgcXNhKGNvbnRhaW5lciwgU2VsZWN0b3IuU1RJQ0tZX0NPTlRFTlQpLmZvckVhY2goZWwgPT5cbiAgICAgIHRoaXMuYWRqdXN0QW5kU3RvcmUoJ21hcmdpbmdSaWdodCcsIGVsLCAtc2l6ZSksXG4gICAgKTtcbiAgICBxc2EoY29udGFpbmVyLCBTZWxlY3Rvci5OQVZCQVJfVE9HR0xFUikuZm9yRWFjaChlbCA9PlxuICAgICAgdGhpcy5hZGp1c3RBbmRTdG9yZSgnbWFyZ2luZ1JpZ2h0JywgZWwsIHNpemUpLFxuICAgICk7XG4gIH1cblxuICByZW1vdmVDb250YWluZXJTdHlsZShjb250YWluZXJTdGF0ZSwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIucmVtb3ZlQ29udGFpbmVyU3R5bGUoY29udGFpbmVyU3RhdGUsIGNvbnRhaW5lcik7XG5cbiAgICBxc2EoY29udGFpbmVyLCBTZWxlY3Rvci5GSVhFRF9DT05URU5UKS5mb3JFYWNoKGVsID0+XG4gICAgICB0aGlzLnJlc3RvcmUoJ3BhZGRpbmdSaWdodCcsIGVsKSxcbiAgICApO1xuICAgIHFzYShjb250YWluZXIsIFNlbGVjdG9yLlNUSUNLWV9DT05URU5UKS5mb3JFYWNoKGVsID0+XG4gICAgICB0aGlzLnJlc3RvcmUoJ21hcmdpbmdSaWdodCcsIGVsKSxcbiAgICApO1xuICAgIHFzYShjb250YWluZXIsIFNlbGVjdG9yLk5BVkJBUl9UT0dHTEVSKS5mb3JFYWNoKGVsID0+XG4gICAgICB0aGlzLnJlc3RvcmUoJ21hcmdpbmdSaWdodCcsIGVsKSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBldmVudHMgZnJvbSAnZG9tLWhlbHBlcnMvZXZlbnRzJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyRG9jdW1lbnQnO1xuXG5pbXBvcnQgY2FuVXNlRE9NIGZyb20gJ2RvbS1oZWxwZXJzL3V0aWwvaW5ET00nO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnZG9tLWhlbHBlcnMvdXRpbC9zY3JvbGxiYXJTaXplJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VNb2RhbCBmcm9tICdyZWFjdC1vdmVybGF5cy9Nb2RhbCc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgRmFkZSBmcm9tICcuL0ZhZGUnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi9Nb2RhbEJvZHknO1xuaW1wb3J0IE1vZGFsRGlhbG9nIGZyb20gJy4vTW9kYWxEaWFsb2cnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL01vZGFsRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Nb2RhbEhlYWRlcic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9Nb2RhbFRpdGxlJztcbmltcG9ydCBCb290c3RyYXBNb2RhbE1hbmFnZXIgZnJvbSAnLi91dGlscy9Cb290c3RyYXBNb2RhbE1hbmFnZXInO1xuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi9Nb2RhbENvbnRleHQnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBSZW5kZXIgYSBsYXJnZSBvciBzbWFsbCBtb2RhbC5cbiAgICpcbiAgICogQHR5cGUgKCdzbSd8J2xnJylcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIHZlcnRpY2FsbHkgY2VudGVyIHRoZSBEaWFsb2cgaW4gdGhlIHdpbmRvd1xuICAgKi9cbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJbmNsdWRlIGEgYmFja2Ryb3AgY29tcG9uZW50LiBTcGVjaWZ5ICdzdGF0aWMnIGZvciBhIGJhY2tkcm9wIHRoYXQgZG9lc24ndFxuICAgKiB0cmlnZ2VyIGFuIFwib25IaWRlXCIgd2hlbiBjbGlja2VkLlxuICAgKi9cbiAgYmFja2Ryb3A6IFByb3BUeXBlcy5vbmVPZihbJ3N0YXRpYycsIHRydWUsIGZhbHNlXSksXG5cbiAgLyoqXG4gICAqIEFkZCBhbiBvcHRpb25hbCBleHRyYSBjbGFzcyBuYW1lIHRvIC5tb2RhbC1iYWNrZHJvcFxuICAgKiBJdCBjb3VsZCBlbmQgdXAgbG9va2luZyBsaWtlIGNsYXNzPVwibW9kYWwtYmFja2Ryb3AgZm9vLW1vZGFsLWJhY2tkcm9wIGluXCIuXG4gICAqL1xuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2xvc2UgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkXG4gICAqL1xuICBrZXlib2FyZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE9wZW4gYW5kIGNsb3NlIHRoZSBNb2RhbCB3aXRoIGEgc2xpZGUgYW5kIGZhZGUgYW5pbWF0aW9uLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBjc3MgY2xhc3MgdG8gYXBwbHkgdG8gdGhlIE1vZGFsIGRpYWxvZyBET00gbm9kZS5cbiAgICovXG4gIGRpYWxvZ0NsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQSBDb21wb25lbnQgdHlwZSB0aGF0IHByb3ZpZGVzIHRoZSBtb2RhbCBjb250ZW50IE1hcmt1cC4gVGhpcyBpcyBhIHVzZWZ1bFxuICAgKiBwcm9wIHdoZW4geW91IHdhbnQgdG8gdXNlIHlvdXIgb3duIHN0eWxlcyBhbmQgbWFya3VwIHRvIGNyZWF0ZSBhIGN1c3RvbVxuICAgKiBtb2RhbCBjb21wb25lbnQuXG4gICAqL1xuICBkaWFsb2dBczogZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXRcbiAgICogb3BlbnMsIGFuZCByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy5cbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBmYWxzZSBhcyBpdCBtYWtlcyB0aGUgTW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuLXJlYWRlcnMuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCBwcmV2ZW50IGZvY3VzIGZyb20gbGVhdmluZyB0aGUgTW9kYWwgd2hpbGVcbiAgICogb3Blbi4gQ29uc2lkZXIgbGVhdmluZyB0aGUgZGVmYXVsdCB2YWx1ZSBoZXJlLCBhcyBpdCBpcyBuZWNlc3NhcnkgdG8gbWFrZVxuICAgKiB0aGUgTW9kYWwgd29yayB3ZWxsIHdpdGggYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgc3VjaCBhcyBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGVuZm9yY2VGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIHJlc3RvcmUgZm9jdXMgdG8gcHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgb25jZVxuICAgKiBtb2RhbCBpcyBoaWRkZW5cbiAgICovXG4gIHJlc3RvcmVGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIHNob3cgaXRzZWxmLlxuICAgKi9cbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgaGVhZGVyIGNsb3NlQnV0dG9uIG9yIG5vbi1zdGF0aWMgYmFja2Ryb3AgaXNcbiAgICogY2xpY2tlZC4gUmVxdWlyZWQgaWYgZWl0aGVyIGFyZSBzcGVjaWZpZWQuXG4gICAqL1xuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIE1vZGFsIHRyYW5zaXRpb25zIGluXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYXMgdGhlIE1vZGFsIGJlZ2lucyB0byB0cmFuc2l0aW9uIGluXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIE1vZGFsIGZpbmlzaGVzIHRyYW5zaXRpb25pbmcgaW5cbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHJpZ2h0IGJlZm9yZSB0aGUgTW9kYWwgdHJhbnNpdGlvbnMgb3V0XG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhcyB0aGUgTW9kYWwgYmVnaW5zIHRvIHRyYW5zaXRpb24gb3V0XG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgTW9kYWwgZmluaXNoZXMgdHJhbnNpdGlvbmluZyBvdXRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgYXV0b0ZvY3VzOiB0cnVlLFxuICBlbmZvcmNlRm9jdXM6IHRydWUsXG4gIHJlc3RvcmVGb2N1czogdHJ1ZSxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBkaWFsb2dBczogTW9kYWxEaWFsb2csXG4gIG1hbmFnZXI6IG5ldyBCb290c3RyYXBNb2RhbE1hbmFnZXIoKSxcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCByZWFjdC9uby1tdWx0aS1jb21wICovXG5mdW5jdGlvbiBEaWFsb2dUcmFuc2l0aW9uKHByb3BzKSB7XG4gIHJldHVybiA8RmFkZSB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBCYWNrZHJvcFRyYW5zaXRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIDxGYWRlIHsuLi5wcm9wc30gLz47XG59XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IHN0eWxlOiB7fSB9O1xuICAgIHRoaXMubW9kYWxDb250ZXh0ID0ge1xuICAgICAgb25IaWRlOiAoKSA9PiB0aGlzLnByb3BzLm9uSGlkZSgpLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBDbGVhbiB1cCB0aGUgbGlzdGVuZXIgaWYgd2UgbmVlZCB0by5cbiAgICBldmVudHMub2ZmKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKTtcbiAgfVxuXG4gIHNldE1vZGFsUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLl9tb2RhbCA9IHJlZjtcbiAgfTtcblxuICAvLyBXZSBwcmV2ZW50IHRoZSBtb2RhbCBmcm9tIGNsb3NpbmcgZHVyaW5nIGEgZHJhZyBieSBkZXRlY3Rpbmcgd2hlcmUgdGhlXG4gIC8vIHRoZSBjbGljayBvcmlnaW5hdGVzIGZyb20uIElmIGl0IHN0YXJ0cyBpbiB0aGUgbW9kYWwgYW5kIHRoZW4gZW5kcyBvdXRzaWRlXG4gIC8vIGRvbid0IGNsb3NlLlxuICBoYW5kbGVEaWFsb2dNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgdGhpcy5fd2FpdGluZ0Zvck1vdXNlVXAgPSB0cnVlO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlVXAgPSBlID0+IHtcbiAgICBpZiAodGhpcy5fd2FpdGluZ0Zvck1vdXNlVXAgJiYgZS50YXJnZXQgPT09IHRoaXMuX21vZGFsLmRpYWxvZykge1xuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX3dhaXRpbmdGb3JNb3VzZVVwID0gZmFsc2U7XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljayB8fCBlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgfTtcblxuICBoYW5kbGVFbnRlciA9IChub2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLnVwZGF0ZURpYWxvZ1N0eWxlKG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uRW50ZXIpIHRoaXMucHJvcHMub25FbnRlcihub2RlLCAuLi5hcmdzKTtcbiAgfTtcblxuICBoYW5kbGVFbnRlcmluZyA9IChub2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25FbnRlcmluZykgdGhpcy5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIC4uLmFyZ3MpO1xuXG4gICAgLy8gRklYTUU6IFRoaXMgc2hvdWxkIHdvcmsgZXZlbiB3aGVuIGFuaW1hdGlvbiBpcyBkaXNhYmxlZC5cbiAgICBldmVudHMub24od2luZG93LCAncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUpO1xuICB9O1xuXG4gIGhhbmRsZUV4aXRlZCA9IChub2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgaWYgKG5vZGUpIG5vZGUuc3R5bGUuZGlzcGxheSA9ICcnOyAvLyBSSEwgcmVtb3ZlcyBpdCBzb21ldGltZXNcbiAgICBpZiAodGhpcy5wcm9wcy5vbkV4aXRlZCkgdGhpcy5wcm9wcy5vbkV4aXRlZCguLi5hcmdzKTtcblxuICAgIC8vIEZJWE1FOiBUaGlzIHNob3VsZCB3b3JrIGV2ZW4gd2hlbiBhbmltYXRpb24gaXMgZGlzYWJsZWQuXG4gICAgZXZlbnRzLm9mZih3aW5kb3csICdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gIH07XG5cbiAgaGFuZGxlV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlRGlhbG9nU3R5bGUodGhpcy5fbW9kYWwuZGlhbG9nKTtcbiAgfTtcblxuICB1cGRhdGVEaWFsb2dTdHlsZShub2RlKSB7XG4gICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICBjb25zdCB7IG1hbmFnZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjb250YWluZXJJc092ZXJmbG93aW5nID0gbWFuYWdlci5pc0NvbnRhaW5lck92ZXJmbG93aW5nKHRoaXMuX21vZGFsKTtcblxuICAgIGNvbnN0IG1vZGFsSXNPdmVyZmxvd2luZyA9XG4gICAgICBub2RlLnNjcm9sbEhlaWdodCA+IG93bmVyRG9jdW1lbnQobm9kZSkuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OlxuICAgICAgICAgIGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZ1xuICAgICAgICAgICAgPyBnZXRTY3JvbGxiYXJTaXplKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBwYWRkaW5nTGVmdDpcbiAgICAgICAgICAhY29udGFpbmVySXNPdmVyZmxvd2luZyAmJiBtb2RhbElzT3ZlcmZsb3dpbmdcbiAgICAgICAgICAgID8gZ2V0U2Nyb2xsYmFyU2l6ZSgpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJCYWNrZHJvcCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IGJzUHJlZml4LCBiYWNrZHJvcENsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke2JzUHJlZml4fS1iYWNrZHJvcGAsIGJhY2tkcm9wQ2xhc3NOYW1lKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGRpYWxvZ0NsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlhbG9nQXM6IERpYWxvZyxcblxuICAgICAgLyogQmFzZU1vZGFsIHByb3BzICovXG4gICAgICBzaG93LFxuICAgICAgYW5pbWF0aW9uLFxuICAgICAgYmFja2Ryb3AsXG4gICAgICBrZXlib2FyZCxcbiAgICAgIG9uRXNjYXBlS2V5RG93bixcbiAgICAgIG9uU2hvdyxcbiAgICAgIG9uSGlkZSxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGVuZm9yY2VGb2N1cyxcbiAgICAgIHJlc3RvcmVGb2N1cyxcbiAgICAgIG9uRW50ZXJlZCxcbiAgICAgIG9uRXhpdCxcbiAgICAgIG9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiBfLFxuICAgICAgb25FbnRlcmluZzogXzEsXG4gICAgICBvbkVudGVyOiBfNixcbiAgICAgIG9uRW50ZXJpbmc6IF80LFxuICAgICAgYmFja2Ryb3BDbGFzc05hbWU6IF8yLFxuICAgICAgYmFja2Ryb3BTdHlsZTogXzMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gYmFja2Ryb3AgPT09IHRydWUgPyB0aGlzLmhhbmRsZUNsaWNrIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLm1vZGFsQ29udGV4dH0+XG4gICAgICAgIDxCYXNlTW9kYWxcbiAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgIGJhY2tkcm9wLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAga2V5Ym9hcmQsXG4gICAgICAgICAgICBhdXRvRm9jdXMsXG4gICAgICAgICAgICBlbmZvcmNlRm9jdXMsXG4gICAgICAgICAgICByZXN0b3JlRm9jdXMsXG4gICAgICAgICAgICBvbkVzY2FwZUtleURvd24sXG4gICAgICAgICAgICBvblNob3csXG4gICAgICAgICAgICBvbkhpZGUsXG4gICAgICAgICAgICBvbkVudGVyZWQsXG4gICAgICAgICAgICBvbkV4aXQsXG4gICAgICAgICAgICBvbkV4aXRpbmcsXG4gICAgICAgICAgICByZWY6IHRoaXMuc2V0TW9kYWxSZWYsXG4gICAgICAgICAgICBzdHlsZTogeyAuLi5zdHlsZSwgLi4udGhpcy5zdGF0ZS5zdHlsZSB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYnNQcmVmaXgpLFxuICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lOiBgJHtic1ByZWZpeH0tb3BlbmAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbmltYXRpb24gPyBEaWFsb2dUcmFuc2l0aW9uIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uOiBhbmltYXRpb24gPyBCYWNrZHJvcFRyYW5zaXRpb24gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZW5kZXJCYWNrZHJvcDogdGhpcy5yZW5kZXJCYWNrZHJvcCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGNsaWNrSGFuZGxlcixcbiAgICAgICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFbnRlcixcbiAgICAgICAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRW50ZXJpbmcsXG4gICAgICAgICAgICBvbkV4aXRlZDogdGhpcy5oYW5kbGVFeGl0ZWQsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZURpYWxvZ01vdXNlRG93bn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZGlhbG9nQ2xhc3NOYW1lfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgPC9CYXNlTW9kYWw+XG4gICAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbk1vZGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuY29uc3QgRGVjb3JhdGVkTW9kYWwgPSBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoTW9kYWwsICdtb2RhbCcpO1xuXG5EZWNvcmF0ZWRNb2RhbC5Cb2R5ID0gQm9keTtcbkRlY29yYXRlZE1vZGFsLkhlYWRlciA9IEhlYWRlcjtcbkRlY29yYXRlZE1vZGFsLlRpdGxlID0gVGl0bGU7XG5EZWNvcmF0ZWRNb2RhbC5Gb290ZXIgPSBGb290ZXI7XG5cbkRlY29yYXRlZE1vZGFsLkRpYWxvZyA9IE1vZGFsRGlhbG9nO1xuXG5EZWNvcmF0ZWRNb2RhbC5UUkFOU0lUSU9OX0RVUkFUSU9OID0gMzAwO1xuRGVjb3JhdGVkTW9kYWwuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcblxuZXhwb3J0IGRlZmF1bHQgRGVjb3JhdGVkTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nO1xuaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9OYXZJdGVtJztcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4vTmF2TGluayc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEFuIGh0bWwgaWQgYXR0cmlidXRlIGZvciB0aGUgVG9nZ2xlIGJ1dHRvbiwgbmVjZXNzYXJ5IGZvciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBzdWNoIGFzIHNjcmVlbiByZWFkZXJzLlxuICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cbiAgICogQHJlcXVpcmVkXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLmFueSxcblxuICAvKiogQW4gYG9uQ2xpY2tgIGhhbmRsZXIgcGFzc2VkIHRvIHRoZSBUb2dnbGUgY29tcG9uZW50ICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKiBUaGUgY29udGVudCBvZiB0aGUgbm9uLXRvZ2dsZSBCdXR0b24uICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKiogRGlzYWJsZXMgdGhlIHRvZ2dsZSBOYXZMaW5rICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFN0eWxlIHRoZSB0b2dnbGUgTmF2TGluayBhcyBhY3RpdmUgICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFuIEFSSUEgYWNjZXNzaWJsZSByb2xlIGFwcGxpZWQgdG8gdGhlIE1lbnUgY29tcG9uZW50LiBXaGVuIHNldCB0byAnbWVudScsIFRoZSBkcm9wZG93biAqL1xuICBtZW51Um9sZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogIFdoaWNoIGV2ZW50IHdoZW4gZmlyZWQgb3V0c2lkZSB0aGUgY29tcG9uZW50IHdpbGwgY2F1c2UgaXQgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBfc2VlIFtEcm9wZG93bk1lbnVdKCNtZW51LXByb3BzKSBmb3IgbW9yZSBkZXRhaWxzX1xuICAgKi9cbiAgcm9vdENsb3NlRXZlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jbGFzcyBOYXZEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBic1ByZWZpeCxcbiAgICAgIHJvb3RDbG9zZUV2ZW50LFxuICAgICAgbWVudVJvbGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duIHsuLi5wcm9wc30gYXM9e05hdkl0ZW19PlxuICAgICAgICA8RHJvcGRvd24uVG9nZ2xlXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGV2ZW50S2V5PXtudWxsfVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBjaGlsZEJzUHJlZml4PXtic1ByZWZpeH1cbiAgICAgICAgICBhcz17TmF2TGlua31cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG5cbiAgICAgICAgPERyb3Bkb3duLk1lbnUgcm9sZT17bWVudVJvbGV9IHJvb3RDbG9zZUV2ZW50PXtyb290Q2xvc2VFdmVudH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgICk7XG4gIH1cbn1cblxuTmF2RHJvcGRvd24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuTmF2RHJvcGRvd24uSXRlbSA9IERyb3Bkb3duLkl0ZW07XG5OYXZEcm9wZG93bi5EaXZpZGVyID0gRHJvcGRvd24uRGl2aWRlcjtcbk5hdkRyb3Bkb3duLkhlYWRlciA9IERyb3Bkb3duLkhlYWRlcjtcblxuZXhwb3J0IGRlZmF1bHQgTmF2RHJvcGRvd247XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2FmZUFuY2hvciBmcm9tICcuL1NhZmVBbmNob3InO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKiBEaXNhYmxlcyB0aGUgUGFnZUl0ZW0gKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBTdHlsZXMgUGFnZUl0ZW0gYXMgYWN0aXZlLCBhbmQgcmVuZGVycyBhIGA8c3Bhbj5gIGluc3RlYWQgb2YgYW4gYDxhPmAuICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFuIGFjY2Vzc2libGUgbGFiZWwgaW5kaWNhdGluZyB0aGUgYWN0aXZlIHN0YXRlLi4gKi9cbiAgYWN0aXZlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgYWN0aXZlTGFiZWw6ICcoY3VycmVudCknLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUl0ZW0oe1xuICBhY3RpdmUsXG4gIGRpc2FibGVkLFxuICBjbGFzc05hbWUsXG4gIHN0eWxlLFxuICBhY3RpdmVMYWJlbCxcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IGFjdGl2ZSB8fCBkaXNhYmxlZCA/ICdzcGFuJyA6IFNhZmVBbmNob3I7XG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCAncGFnZS1pdGVtJywgeyBhY3RpdmUsIGRpc2FibGVkIH0pfVxuICAgID5cbiAgICAgIDxDb21wb25lbnQgY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgZGlzYWJsZWQ9e2Rpc2FibGVkfSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHthY3RpdmUgJiZcbiAgICAgICAgICBhY3RpdmVMYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2FjdGl2ZUxhYmVsfTwvc3Bhbj59XG4gICAgICA8L0NvbXBvbmVudD5cbiAgICA8L2xpPlxuICApO1xufVxuXG5QYWdlSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5QYWdlSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihuYW1lLCBkZWZhdWx0VmFsdWUsIGxhYmVsID0gbmFtZSkge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IG5hbWU7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGRlbGV0ZSBwcm9wcy5hY3RpdmU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUl0ZW0gey4uLnByb3BzfT5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj57Y2hpbGRyZW4gfHwgZGVmYXVsdFZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9QYWdlSXRlbT5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRmlyc3QgPSBjcmVhdGVCdXR0b24oJ0ZpcnN0JywgJ1xcdTAwYWInKTtcbmV4cG9ydCBjb25zdCBQcmV2ID0gY3JlYXRlQnV0dG9uKCdQcmV2JywgJ1xcdTIwMzknLCAnUHJldmlvdXMnKTtcbmV4cG9ydCBjb25zdCBFbGxpcHNpcyA9IGNyZWF0ZUJ1dHRvbignRWxsaXBzaXMnLCAnXFx1MjAyNicsICdNb3JlJyk7XG5leHBvcnQgY29uc3QgTmV4dCA9IGNyZWF0ZUJ1dHRvbignTmV4dCcsICdcXHUyMDNhJyk7XG5leHBvcnQgY29uc3QgTGFzdCA9IGNyZWF0ZUJ1dHRvbignTGFzdCcsICdcXHUwMGJiJyk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IFBhZ2VJdGVtLCB7IEZpcnN0LCBQcmV2LCBFbGxpcHNpcywgTmV4dCwgTGFzdCB9IGZyb20gJy4vUGFnZUl0ZW0nO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UGFnZUl0ZW19IEl0ZW1cbiAqIEBwcm9wZXJ0eSB7UGFnZUl0ZW19IEZpcnN0XG4gKiBAcHJvcGVydHkge1BhZ2VJdGVtfSBQcmV2XG4gKiBAcHJvcGVydHkge1BhZ2VJdGVtfSBFbGxpcHNpc1xuICogQHByb3BlcnR5IHtQYWdlSXRlbX0gTmV4dFxuICogQHByb3BlcnR5IHtQYWdlSXRlbX0gTGFzdFxuICovXG5jbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogQGRlZmF1bHQgJ3BhZ2luYXRpb24nICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFNldCdzIHRoZSBzaXplIG9mIGFsbCBQYWdlSXRlbXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7KCdzbSd8J2xnJyl9XG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBic1ByZWZpeCwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgc2l6ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBic1ByZWZpeCxcbiAgICAgICAgICBzaXplICYmIGAke2JzUHJlZml4fS0ke3NpemV9YCxcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IERlY29yYXRlZFBhZ2luYXRpb24gPSBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoUGFnaW5hdGlvbiwgJ3BhZ2luYXRpb24nKTtcblxuRGVjb3JhdGVkUGFnaW5hdGlvbi5GaXJzdCA9IEZpcnN0O1xuRGVjb3JhdGVkUGFnaW5hdGlvbi5QcmV2ID0gUHJldjtcbkRlY29yYXRlZFBhZ2luYXRpb24uRWxsaXBzaXMgPSBFbGxpcHNpcztcbkRlY29yYXRlZFBhZ2luYXRpb24uSXRlbSA9IFBhZ2VJdGVtO1xuRGVjb3JhdGVkUGFnaW5hdGlvbi5OZXh0ID0gTmV4dDtcbkRlY29yYXRlZFBhZ2luYXRpb24uTGFzdCA9IExhc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IERlY29yYXRlZFBhZ2luYXRpb247XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGlzUmVxdWlyZWRGb3JBMTF5IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEvbGliL2lzUmVxdWlyZWRGb3JBMTF5JztcbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBkZWZhdWx0ICdwb3BvdmVyJ1xuICAgKi9cbiAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEFuIGh0bWwgaWQgYXR0cmlidXRlLCBuZWNlc3NhcnkgZm9yIGFjY2Vzc2liaWxpdHlcbiAgICogQHR5cGUge3N0cmluZ3xudW1iZXJ9XG4gICAqIEByZXF1aXJlZFxuICAgKi9cbiAgaWQ6IGlzUmVxdWlyZWRGb3JBMTF5KFxuICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgKSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgZGlyZWN0aW9uIHRoZSBQb3BvdmVyIGlzIHBvc2l0aW9uZWQgdG93YXJkcy5cbiAgICpcbiAgICogPiBUaGlzIGlzIGdlbmVyYWxseSBwcm92aWRlZCBieSB0aGUgYE92ZXJsYXlgIGNvbXBvbmVudCBwb3NpdGlvbmluZyB0aGUgcG9wb3ZlclxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdhdXRvLXN0YXJ0JyxcbiAgICAnYXV0bycsXG4gICAgJ2F1dG8tZW5kJyxcbiAgICAndG9wLXN0YXJ0JyxcbiAgICAndG9wJyxcbiAgICAndG9wLWVuZCcsXG4gICAgJ3JpZ2h0LXN0YXJ0JyxcbiAgICAncmlnaHQnLFxuICAgICdyaWdodC1lbmQnLFxuICAgICdib3R0b20tZW5kJyxcbiAgICAnYm90dG9tJyxcbiAgICAnYm90dG9tLXN0YXJ0JyxcbiAgICAnbGVmdC1lbmQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGVmdC1zdGFydCcsXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBBbiBPdmVybGF5IGluamVjdGVkIHNldCBvZiBwcm9wcyBmb3IgcG9zaXRpb25pbmcgdGhlIHBvcG92ZXIgYXJyb3cuXG4gICAqXG4gICAqID4gVGhpcyBpcyBnZW5lcmFsbHkgcHJvdmlkZWQgYnkgdGhlIGBPdmVybGF5YCBjb21wb25lbnQgcG9zaXRpb25pbmcgdGhlIHBvcG92ZXJcbiAgICovXG4gIGFycm93UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcmVmOiBQcm9wVHlwZXMuYW55LFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9KSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHNjaGVkdWxlVXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqIEBwcml2YXRlICovXG4gIG91dE9mQm91bmRhcmllczogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBUaXRsZSBjb250ZW50XG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHBsYWNlbWVudDogJ3JpZ2h0Jyxcbn07XG5cbmZ1bmN0aW9uIFBvcG92ZXIoe1xuICBic1ByZWZpeCxcbiAgaW5uZXJSZWYsXG4gIHBsYWNlbWVudCxcbiAgY2xhc3NOYW1lLFxuICBzdHlsZSxcbiAgdGl0bGUsXG4gIGNoaWxkcmVuLFxuICBhcnJvd1Byb3BzLFxuICBzY2hlZHVsZVVwZGF0ZTogXyxcbiAgb3V0T2ZCb3VuZGFyaWVzOiBfMSxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwidG9vbHRpcFwiXG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgeC1wbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGJzUHJlZml4LCBgYnMtcG9wb3Zlci0ke3BsYWNlbWVudH1gKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93XCIgey4uLmFycm93UHJvcHN9IC8+XG5cbiAgICAgIHt0aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7YnNQcmVmaXh9LWhlYWRlciBoM2B9Pnt0aXRsZX08L2Rpdj59XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtic1ByZWZpeH0tYm9keWB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUG9wb3Zlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KFBvcG92ZXIsICdwb3BvdmVyJyk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL3V0aWxzL0VsZW1lbnRDaGlsZHJlbic7XG5cbmNvbnN0IFJPVU5EX1BSRUNJU0lPTiA9IDEwMDA7XG5cbi8qKlxuICogVmFsaWRhdGUgdGhhdCBjaGlsZHJlbiwgaWYgYW55LCBhcmUgaW5zdGFuY2VzIG9mIGA8UHJvZ3Jlc3NCYXI+YC5cbiAqL1xuZnVuY3Rpb24gb25seVByb2dyZXNzQmFyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBjb25zdCBjaGlsZHJlbiA9IHByb3BzW3Byb3BOYW1lXTtcbiAgaWYgKCFjaGlsZHJlbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGVycm9yID0gbnVsbDtcblxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGFyZSB0eXBlcyBpbiBhIHdheSB0aGF0IHdvcmtzIHdpdGggbGlicmFyaWVzIHRoYXQgcGF0Y2ggYW5kIHByb3h5XG4gICAgICogY29tcG9uZW50cyBsaWtlIHJlYWN0LWhvdC1sb2FkZXIuXG4gICAgICpcbiAgICAgKiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dhZWFyb24vcmVhY3QtaG90LWxvYWRlciNjaGVja2luZy1lbGVtZW50LXR5cGVzXG4gICAgICovXG4gICAgY29uc3QgZWxlbWVudCA9IDxEZWNvcmF0ZWRQcm9ncmVzc0JhciAvPjtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gZWxlbWVudC50eXBlKSByZXR1cm47XG5cbiAgICBjb25zdCBjaGlsZElkZW50aWZpZXIgPSBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZClcbiAgICAgID8gY2hpbGQudHlwZS5kaXNwbGF5TmFtZSB8fCBjaGlsZC50eXBlLm5hbWUgfHwgY2hpbGQudHlwZVxuICAgICAgOiBjaGlsZDtcbiAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIGBDaGlsZHJlbiBvZiAke2NvbXBvbmVudE5hbWV9IGNhbiBjb250YWluIG9ubHkgUHJvZ3Jlc3NCYXIgYCArXG4gICAgICAgIGBjb21wb25lbnRzLiBGb3VuZCAke2NoaWxkSWRlbnRpZmllcn0uYCxcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE1pbmltdW0gdmFsdWUgcHJvZ3Jlc3MgY2FuIGJlZ2luIGZyb21cbiAgICovXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQ3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzc1xuICAgKi9cbiAgbm93OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIHZhbHVlIHByb2dyZXNzIGNhbiByZWFjaFxuICAgKi9cbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBTaG93IGxhYmVsIHRoYXQgcmVwcmVzZW50cyB2aXN1YWwgcGVyY2VudGFnZS5cbiAgICogRUcuIDYwJVxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBIaWRlJ3MgdGhlIGxhYmVsIHZpc3VhbGx5LlxuICAgKi9cbiAgc3JPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVXNlcyBhIGdyYWRpZW50IHRvIGNyZWF0ZSBhIHN0cmlwZWQgZWZmZWN0LlxuICAgKi9cbiAgc3RyaXBlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFuaW1hdGUncyB0aGUgc3RyaXBlcyBmcm9tIHJpZ2h0IHRvIGxlZnRcbiAgICovXG4gIGFuaW1hdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQGRlZmF1bHQgJ3Byb2dyZXNzLWJhcidcbiAgICovXG4gIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBiYWNrZ3JvdW5kIGNsYXNzIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqXG4gICAqIEB0eXBlICgnc3VjY2Vzcyd8J2Rhbmdlcid8J3dhcm5pbmcnfCdpbmZvJylcbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENoaWxkIGVsZW1lbnRzIChvbmx5IGFsbG93cyBlbGVtZW50cyBvZiB0eXBlIDxQcm9ncmVzc0JhciAvPilcbiAgICovXG4gIGNoaWxkcmVuOiBvbmx5UHJvZ3Jlc3NCYXIsXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0NoaWxkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDEwMCxcbiAgYW5pbWF0ZWQ6IGZhbHNlLFxuICBpc0NoaWxkOiBmYWxzZSxcbiAgc3JPbmx5OiBmYWxzZSxcbiAgc3RyaXBlZDogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiBnZXRQZXJjZW50YWdlKG5vdywgbWluLCBtYXgpIHtcbiAgY29uc3QgcGVyY2VudGFnZSA9ICgobm93IC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMDtcbiAgcmV0dXJuIE1hdGgucm91bmQocGVyY2VudGFnZSAqIFJPVU5EX1BSRUNJU0lPTikgLyBST1VORF9QUkVDSVNJT047XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyUHJvZ3Jlc3NCYXIoe1xuICAgIG1pbixcbiAgICBub3csXG4gICAgbWF4LFxuICAgIGxhYmVsLFxuICAgIHNyT25seSxcbiAgICBzdHJpcGVkLFxuICAgIGFuaW1hdGVkLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzdHlsZSxcbiAgICB2YXJpYW50LFxuICAgIGJzUHJlZml4LFxuICAgIC4uLnByb3BzXG4gIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke2JzUHJlZml4fS1iYXJgLCB7XG4gICAgICAgICAgW2BiZy0ke3ZhcmlhbnR9YF06IHZhcmlhbnQsXG4gICAgICAgICAgW2Ake2JzUHJlZml4fS1iYXItYW5pbWF0ZWRgXTogYW5pbWF0ZWQsXG4gICAgICAgICAgW2Ake2JzUHJlZml4fS1iYXItc3RyaXBlZGBdOiBhbmltYXRlZCB8fCBzdHJpcGVkLFxuICAgICAgICB9KX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke2dldFBlcmNlbnRhZ2Uobm93LCBtaW4sIG1heCl9JWAsIC4uLnN0eWxlIH19XG4gICAgICAgIGFyaWEtdmFsdWVub3c9e25vd31cbiAgICAgICAgYXJpYS12YWx1ZW1pbj17bWlufVxuICAgICAgICBhcmlhLXZhbHVlbWF4PXttYXh9XG4gICAgICA+XG4gICAgICAgIHtzck9ubHkgPyA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2xhYmVsfTwvc3Bhbj4gOiBsYWJlbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0NoaWxkLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0NoaWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJQcm9ncmVzc0Jhcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgbWluLFxuICAgICAgbm93LFxuICAgICAgbWF4LFxuICAgICAgbGFiZWwsXG4gICAgICBzck9ubHksXG4gICAgICBzdHJpcGVkLFxuICAgICAgYW5pbWF0ZWQsXG4gICAgICBic1ByZWZpeCxcbiAgICAgIHZhcmlhbnQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIC4uLndyYXBwZXJQcm9wc1xuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHsuLi53cmFwcGVyUHJvcHN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGJzUHJlZml4KX0+XG4gICAgICAgIHtjaGlsZHJlblxuICAgICAgICAgID8gbWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgaXNDaGlsZDogdHJ1ZSB9KSlcbiAgICAgICAgICA6IHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoe1xuICAgICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICAgIG5vdyxcbiAgICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgc3JPbmx5LFxuICAgICAgICAgICAgICBzdHJpcGVkLFxuICAgICAgICAgICAgICBhbmltYXRlZCxcbiAgICAgICAgICAgICAgYnNQcmVmaXgsXG4gICAgICAgICAgICAgIHZhcmlhbnQsXG4gICAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuY29uc3QgRGVjb3JhdGVkUHJvZ3Jlc3NCYXIgPSBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoUHJvZ3Jlc3NCYXIsICdwcm9ncmVzcycpO1xuXG5leHBvcnQgZGVmYXVsdCBEZWNvcmF0ZWRQcm9ncmVzc0JhcjtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBkZWZhdWx0ICdlbWJlZC1yZXNwb25zaXZlJ1xuICAgKi9cbiAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoaXMgY29tcG9uZW50IHJlcXVpcmVzIGEgc2luZ2xlIGNoaWxkIGVsZW1lbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGFzcGVjdCByYXRpb24gb2YgdGhlIGVtYmVkXG4gICAqL1xuICBhc3BlY3RSYXRpbzogUHJvcFR5cGVzLm9uZU9mKFsnMjFieTknLCAnMTZieTknLCAnNGJ5MycsICcxYnkxJ10pLFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBhc3BlY3RSYXRpbzogJzFieTEnLFxufTtcblxuY2xhc3MgUmVzcG9uc2l2ZUVtYmVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYnNQcmVmaXgsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIGFzcGVjdFJhdGlvLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGJzUHJlZml4LFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBhc3BlY3RSYXRpbyAmJiBgJHtic1ByZWZpeH0tJHthc3BlY3RSYXRpb31gLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgYCR7YnNQcmVmaXh9LWl0ZW1gKSxcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlc3BvbnNpdmVFbWJlZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5SZXNwb25zaXZlRW1iZWQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoUmVzcG9uc2l2ZUVtYmVkLCAnZW1iZWQtcmVzcG9uc2l2ZScpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vQnV0dG9uR3JvdXAnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nO1xuXG4vKipcbiAqIEBpbmhlcml0cyBCdXR0b24sIERyb3Bkb3duXG4gKi9cbmNsYXNzIFNwbGl0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBBbiBodG1sIGlkIGF0dHJpYnV0ZSBmb3IgdGhlIFRvZ2dsZSBidXR0b24sIG5lY2Vzc2FyeSBmb3IgYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgc3VjaCBhcyBzY3JlZW4gcmVhZGVycy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIEFjY2Vzc2libGUgbGFiZWwgZm9yIHRoZSB0b2dnbGU7IHRoZSB2YWx1ZSBvZiBgdGl0bGVgIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgdG9nZ2xlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKiogQW4gYGhyZWZgIHBhc3NlZCB0byB0aGUgbm9uLXRvZ2dsZSBCdXR0b24gKi9cbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqIEFuIGFuY2hvciBgdGFyZ2V0YCBwYXNzZWQgdG8gdGhlIG5vbi10b2dnbGUgQnV0dG9uICovXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqIEFuIGBvbkNsaWNrYCBoYW5kbGVyIHBhc3NlZCB0byB0aGUgbm9uLXRvZ2dsZSBCdXR0b24gKi9cbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKiBUaGUgY29udGVudCBvZiB0aGUgbm9uLXRvZ2dsZSBCdXR0b24uICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqIERpc2FibGVzIGJvdGggQnV0dG9ucyAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKiogQW4gQVJJQSBhY2Nlc3NpYmxlIHJvbGUgYXBwbGllZCB0byB0aGUgTWVudSBjb21wb25lbnQuIFdoZW4gc2V0IHRvICdtZW51JywgVGhlIGRyb3Bkb3duICovXG4gICAgbWVudVJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogIFdoaWNoIGV2ZW50IHdoZW4gZmlyZWQgb3V0c2lkZSB0aGUgY29tcG9uZW50IHdpbGwgY2F1c2UgaXQgdG8gYmUgY2xvc2VkLlxuICAgICAqXG4gICAgICogX3NlZSBbRHJvcGRvd25NZW51XSgjbWVudS1wcm9wcykgZm9yIG1vcmUgZGV0YWlsc19cbiAgICAgKi9cbiAgICByb290Q2xvc2VFdmVudDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICB2YXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKiBAaWdub3JlICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRvZ2dsZUxhYmVsOiAnVG9nZ2xlIGRyb3Bkb3duJyxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBic1ByZWZpeCxcbiAgICAgIHNpemUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdGl0bGUsXG4gICAgICB0b2dnbGVMYWJlbCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgb25DbGljayxcbiAgICAgIGhyZWYsXG4gICAgICB0YXJnZXQsXG4gICAgICBtZW51Um9sZSxcbiAgICAgIHJvb3RDbG9zZUV2ZW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd24gey4uLnByb3BzfSBhcz17QnV0dG9uR3JvdXB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICBic1ByZWZpeD17YnNQcmVmaXh9XG4gICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZVxuICAgICAgICAgIHNwbGl0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdmFyaWFudD17dmFyaWFudH1cbiAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgY2hpbGRCc1ByZWZpeD17YnNQcmVmaXh9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e3RvZ2dsZUxhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG5cbiAgICAgICAgPERyb3Bkb3duLk1lbnUgcm9sZT17bWVudVJvbGV9IHJvb3RDbG9zZUV2ZW50PXtyb290Q2xvc2VFdmVudH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsaXRCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGVsZW1lbnRUeXBlIH0gZnJvbSAncHJvcC10eXBlcy1leHRyYSc7XG5pbXBvcnQgdW5jb250cm9sbGFibGUgZnJvbSAndW5jb250cm9sbGFibGUnO1xuXG5pbXBvcnQgVGFiQ29udGV4dCBmcm9tICcuL1RhYkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuXG5jbGFzcyBUYWJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEhUTUwgaWQgYXR0cmlidXRlLCByZXF1aXJlZCBpZiBubyBgZ2VuZXJhdGVDaGlsZElkYCBwcm9wXG4gICAgICogaXMgc3BlY2lmaWVkLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBpZChwcm9wcywgLi4uYXJncykge1xuICAgICAgbGV0IGVycm9yID0gbnVsbDtcblxuICAgICAgaWYgKCFwcm9wcy5nZW5lcmF0ZUNoaWxkSWQpIHtcbiAgICAgICAgZXJyb3IgPSBQcm9wVHlwZXMuc3RyaW5nKHByb3BzLCAuLi5hcmdzKTtcblxuICAgICAgICBpZiAoIWVycm9yICYmICFwcm9wcy5pZCkge1xuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0luIG9yZGVyIHRvIHByb3Blcmx5IGluaXRpYWxpemUgVGFicyBpbiBhIHdheSB0aGF0IGlzIGFjY2Vzc2libGUgJyArXG4gICAgICAgICAgICAgICd0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIChzdWNoIGFzIHNjcmVlbiByZWFkZXJzKSBhbiBgaWRgIG9yIGEgJyArXG4gICAgICAgICAgICAgICdgZ2VuZXJhdGVDaGlsZElkYCBwcm9wIHRvIFRhYkNvbnRhaW5lciBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBkZWZhdWx0IGFuaW1hdGlvbiBzdHJhdGVneSBmb3IgYWxsIGNoaWxkcmVuIGA8VGFiUGFuZT5gcy4gVXNlXG4gICAgICogYGZhbHNlYCB0byBkaXNhYmxlLCBgdHJ1ZWAgdG8gZW5hYmxlIHRoZSBkZWZhdWx0IGA8RmFkZT5gIGFuaW1hdGlvbiBvclxuICAgICAqIGEgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCB2MiBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge3tUcmFuc2l0aW9uIHwgZmFsc2V9fVxuICAgICAqIEBkZWZhdWx0IHtGYWRlfVxuICAgICAqL1xuICAgIHRyYW5zaXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbZmFsc2VdKSwgZWxlbWVudFR5cGVdKSxcbiAgICAvKipcbiAgICAgKiBXYWl0IHVudGlsIHRoZSBmaXJzdCBcImVudGVyXCIgdHJhbnNpdGlvbiB0byBtb3VudCB0YWJzIChhZGQgdGhlbSB0byB0aGUgRE9NKVxuICAgICAqL1xuICAgIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBVbm1vdW50IHRhYnMgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gdGhleSBhcmUgbm8gbG9uZ2VyIHZpc2libGVcbiAgICAgKi9cbiAgICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBgZXZlbnRLZXlgIGFuZCBgdHlwZWAgYW5kIHJldHVybnMgYSB1bmlxdWUgaWQgZm9yXG4gICAgICogY2hpbGQgdGFiIGA8TmF2SXRlbT5gcyBhbmQgYDxUYWJQYW5lPmBzLiBUaGUgZnVuY3Rpb24gX211c3RfIGJlIGEgcHVyZVxuICAgICAqIGZ1bmN0aW9uLCBtZWFuaW5nIGl0IHNob3VsZCBhbHdheXMgcmV0dXJuIHRoZSBfc2FtZV8gaWQgZm9yIHRoZSBzYW1lIHNldFxuICAgICAqIG9mIGlucHV0cy4gVGhlIGRlZmF1bHQgdmFsdWUgcmVxdWlyZXMgdGhhdCBhbiBgaWRgIHRvIGJlIHNldCBmb3IgdGhlXG4gICAgICogYDxUYWJDb250YWluZXI+YC5cbiAgICAgKlxuICAgICAqIFRoZSBgdHlwZWAgYXJndW1lbnQgd2lsbCBlaXRoZXIgYmUgYFwidGFiXCJgIG9yIGBcInBhbmVcImAuXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdFZhbHVlIChldmVudEtleSwgdHlwZSkgPT4gYCR7dGhpcy5wcm9wcy5pZH0tJHt0eXBlfS0ke2V2ZW50S2V5fWBcbiAgICAgKi9cbiAgICBnZW5lcmF0ZUNoaWxkSWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIGEgdGFiIGlzIHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQGNvbnRyb2xsYWJsZSBhY3RpdmVLZXlcbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGV2ZW50S2V5YCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIuXG4gICAgICpcbiAgICAgKiBAY29udHJvbGxhYmxlIG9uU2VsZWN0XG4gICAgICovXG4gICAgYWN0aXZlS2V5OiBQcm9wVHlwZXMuYW55LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0YWJDb250ZXh0OiB7XG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0LFxuICAgICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLnByb3BzLnRyYW5zaXRpb24sXG4gICAgICAgIG1vdW50T25FbnRlcjogdGhpcy5wcm9wcy5tb3VudE9uRW50ZXIsXG4gICAgICAgIHVubW91bnRPbkV4aXQ6IHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCxcbiAgICAgICAgZ2V0Q29udHJvbGxlZElkOiB0aGlzLmdldENvbnRyb2xsZWRJZCxcbiAgICAgICAgZ2V0Q29udHJvbGxlcklkOiB0aGlzLmdldENvbnRyb2xsZXJJZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoXG4gICAgeyBhY3RpdmVLZXksIG1vdW50T25FbnRlciwgdW5tb3VudE9uRXhpdCwgdHJhbnNpdGlvbiB9LFxuICAgIHByZXZTdGF0ZSxcbiAgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYkNvbnRleHQ6IHtcbiAgICAgICAgLi4ucHJldlN0YXRlLnRhYkNvbnRleHQsXG4gICAgICAgIGFjdGl2ZUtleSxcbiAgICAgICAgbW91bnRPbkVudGVyLFxuICAgICAgICB1bm1vdW50T25FeGl0LFxuICAgICAgICB0cmFuc2l0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0S2V5KGtleSwgdHlwZSkge1xuICAgIGNvbnN0IHsgZ2VuZXJhdGVDaGlsZElkLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZ2VuZXJhdGVDaGlsZElkKSByZXR1cm4gZ2VuZXJhdGVDaGlsZElkKGtleSwgdHlwZSk7XG4gICAgcmV0dXJuIGlkID8gYCR7aWR9LSR7dHlwZX0tJHtrZXl9YCA6IG51bGw7XG4gIH1cblxuICBnZXRDb250cm9sbGVkSWQgPSBrZXkgPT4gdGhpcy5nZXRLZXkoa2V5LCAndGFicGFuZScpO1xuXG4gIGdldENvbnRyb2xsZXJJZCA9IGtleSA9PiB0aGlzLmdldEtleShrZXksICd0YWInKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGUudGFiQ29udGV4dH0+XG4gICAgICAgIDxTZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17b25TZWxlY3R9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvVGFiQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVuY29udHJvbGxhYmxlKFRhYkNvbnRhaW5lciwgeyBhY3RpdmVLZXk6ICdvblNlbGVjdCcgfSk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcblxuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcblxuY2xhc3MgVGFiQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQGRlZmF1bHQgJ3RhYi1jb250ZW50J1xuICAgICAqL1xuICAgIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgYXM6IGVsZW1lbnRUeXBlLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXM6ICdkaXYnLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJzUHJlZml4LCBhczogQ29tcG9uZW50LCBjbGFzc05hbWUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCl9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChUYWJDb250ZW50LCAndGFiLWNvbnRlbnQnKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZSB9IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEnO1xuXG5pbXBvcnQgbWFwQ29udGV4dFRvUHJvcHMgZnJvbSAncmVhY3QtY29udGV4dC10b29sYm94L2xpYi9tYXBDb250ZXh0VG9Qcm9wcyc7XG5pbXBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnLi9UYWJDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcblxuaW1wb3J0IEZhZGUgZnJvbSAnLi9GYWRlJztcblxuY2xhc3MgVGFiUGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQGRlZmF1bHQgJ3RhYi1wYW5lJ1xuICAgICAqL1xuICAgIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSBrZXkgdGhhdCBhc3NvY2lhdGVzIHRoZSBgVGFiUGFuZWAgd2l0aCBpdCdzIGNvbnRyb2xsaW5nIGBOYXZMaW5rYC5cbiAgICAgKi9cbiAgICBldmVudEtleTogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgVGFiUGFuZSwgdGhpcyBpcyBnZW5lcmFsbHkgY29udHJvbGxlZCBieSBhXG4gICAgICogVGFiQ29udGFpbmVyLlxuICAgICAqL1xuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBVc2UgYW5pbWF0aW9uIHdoZW4gc2hvd2luZyBvciBoaWRpbmcgYDxUYWJQYW5lPmBzLiBVc2UgYGZhbHNlYCB0byBkaXNhYmxlLFxuICAgICAqIGB0cnVlYCB0byBlbmFibGUgdGhlIGRlZmF1bHQgYDxGYWRlPmAgYW5pbWF0aW9uIG9yXG4gICAgICogYSByZWFjdC10cmFuc2l0aW9uLWdyb3VwIHYyIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQuXG4gICAgICovXG4gICAgdHJhbnNpdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIGVsZW1lbnRUeXBlXSksXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0ICd0YWItcGFuZSdcbiAgICAgKi9cbiAgICBic0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvbkVudGVyIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAgICovXG4gICAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2l0aW9uIG9uRW50ZXJpbmcgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICAgKi9cbiAgICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gb25FbnRlcmVkIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAgICovXG4gICAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gb25FeGl0IGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAgICovXG4gICAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gb25FeGl0aW5nIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAgICovXG4gICAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gb25FeGl0ZWQgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICAgKi9cbiAgICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXYWl0IHVudGlsIHRoZSBmaXJzdCBcImVudGVyXCIgdHJhbnNpdGlvbiB0byBtb3VudCB0aGUgdGFiIChhZGQgaXQgdG8gdGhlIERPTSlcbiAgICAgKi9cbiAgICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVW5tb3VudCB0aGUgdGFiIChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIG5vIGxvbmdlciB2aXNpYmxlXG4gICAgICovXG4gICAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKiogQGlnbm9yZSAqICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKiogQGlnbm9yZSAqICovXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGJzUHJlZml4LFxuICAgICAgYWN0aXZlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQsXG4gICAgICBvbkV4aXQsXG4gICAgICBvbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZCxcbiAgICAgIG1vdW50T25FbnRlcixcbiAgICAgIHVubW91bnRPbkV4aXQsXG4gICAgICB0cmFuc2l0aW9uOiBUcmFuc2l0aW9uLFxuICAgICAgZXZlbnRLZXk6IF8sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFhY3RpdmUgJiYgdW5tb3VudE9uRXhpdCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgcGFuZSA9IChcbiAgICAgIDxkaXZcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICBhcmlhLWhpZGRlbj17IWFjdGl2ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgYnNQcmVmaXgsIHsgYWN0aXZlIH0pfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgaWYgKFRyYW5zaXRpb24pXG4gICAgICBwYW5lID0gKFxuICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIGluPXthY3RpdmV9XG4gICAgICAgICAgb25FbnRlcj17b25FbnRlcn1cbiAgICAgICAgICBvbkVudGVyaW5nPXtvbkVudGVyaW5nfVxuICAgICAgICAgIG9uRW50ZXJlZD17b25FbnRlcmVkfVxuICAgICAgICAgIG9uRXhpdD17b25FeGl0fVxuICAgICAgICAgIG9uRXhpdGluZz17b25FeGl0aW5nfVxuICAgICAgICAgIG9uRXhpdGVkPXtvbkV4aXRlZH1cbiAgICAgICAgICBtb3VudE9uRW50ZXI9e21vdW50T25FbnRlcn1cbiAgICAgICAgICB1bm1vdW50T25FeGl0PXttb3VudE9uRW50ZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7cGFuZX1cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgKTtcblxuICAgIC8vIFdlIHByb3ZpZGUgYW4gZW1wdHkgdGhlIFRhYkNvbnRleHQgc28gYDxOYXY+YHMgaW4gYDxUYWJQYW5lPmBzIGRvbid0XG4gICAgLy8gY29uZmxpY3Qgd2l0aCB0aGUgdG9wIGxldmVsIG9uZS5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e251bGx9PlxuICAgICAgICA8U2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e251bGx9PlxuICAgICAgICAgIHtwYW5lfVxuICAgICAgICA8L1NlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9UYWJDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ29udGV4dFRvUHJvcHMoXG4gIFRhYkNvbnRleHQuQ29uc3VtZXIsXG4gIChjb250ZXh0LCBwcm9wcykgPT4ge1xuICAgIGlmICghY29udGV4dCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBhY3RpdmVLZXksIGdldENvbnRyb2xsZWRJZCwgZ2V0Q29udHJvbGxlcklkLCAuLi5yZXN0IH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHNob3VsZFRyYW5zaXRpb24gPVxuICAgICAgcHJvcHMudHJhbnNpdGlvbiAhPT0gZmFsc2UgJiYgcmVzdC50cmFuc2l0aW9uICE9PSBmYWxzZTtcbiAgICBsZXQga2V5ID0gbWFrZUV2ZW50S2V5KHByb3BzLmV2ZW50S2V5KTtcblxuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmU6XG4gICAgICAgIHByb3BzLmFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsXG4gICAgICAgICAgPyBtYWtlRXZlbnRLZXkoYWN0aXZlS2V5KSA9PT0ga2V5XG4gICAgICAgICAgOiBwcm9wcy5hY3RpdmUsXG4gICAgICBpZDogZ2V0Q29udHJvbGxlZElkKHByb3BzLmV2ZW50S2V5KSxcbiAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBnZXRDb250cm9sbGVySWQocHJvcHMuZXZlbnRLZXkpLFxuICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgc2hvdWxkVHJhbnNpdGlvbiAmJiAocHJvcHMudHJhbnNpdGlvbiB8fCByZXN0LnRyYW5zaXRpb24gfHwgRmFkZSksXG4gICAgICBtb3VudE9uRW50ZXI6XG4gICAgICAgIHByb3BzLm1vdW50T25FbnRlciAhPSBudWxsID8gcHJvcHMubW91bnRPbkVudGVyIDogcmVzdC5tb3VudE9uRW50ZXIsXG4gICAgICB1bm1vdW50T25FeGl0OlxuICAgICAgICBwcm9wcy51bm1vdW50T25FeGl0ICE9IG51bGwgPyBwcm9wcy51bm1vdW50T25FeGl0IDogcmVzdC51bm1vdW50T25FeGl0LFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChUYWJQYW5lLCAndGFiLXBhbmUnKSxcbik7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRhYkNvbnRhaW5lciBmcm9tICcuL1RhYkNvbnRhaW5lcic7XG5pbXBvcnQgVGFiQ29udGVudCBmcm9tICcuL1RhYkNvbnRlbnQnO1xuaW1wb3J0IFRhYlBhbmUgZnJvbSAnLi9UYWJQYW5lJztcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVxdWlyZS1yZW5kZXItcmV0dXJuLCByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1JlYWN0Qm9vdHN0cmFwOiBUaGUgYFRhYmAgY29tcG9uZW50IGlzIG5vdCBtZWFudCB0byBiZSByZW5kZXJlZCEgJyArXG4gICAgICAgIFwiSXQncyBhbiBhYnN0cmFjdCBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHZhbGlkIGFzIGEgZGlyZWN0IENoaWxkIG9mIHRoZSBgVGFic2AgQ29tcG9uZW50LiBcIiArXG4gICAgICAgICdGb3IgY3VzdG9tIHRhYnMgY29tcG9uZW50cyB1c2UgVGFiUGFuZSBhbmQgVGFic0NvbnRhaW5lciBkaXJlY3RseScsXG4gICAgKTtcbiAgfVxufVxuXG5UYWIuQ29udGFpbmVyID0gVGFiQ29udGFpbmVyO1xuVGFiLkNvbnRlbnQgPSBUYWJDb250ZW50O1xuVGFiLlBhbmUgPSBUYWJQYW5lO1xuXG5leHBvcnQgZGVmYXVsdCBUYWI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGVsZW1lbnRUeXBlIH0gZnJvbSAncHJvcC10eXBlcy1leHRyYSc7XG5pbXBvcnQgcmVxdWlyZWRGb3JBMTF5IGZyb20gJ3Byb3AtdHlwZXMtZXh0cmEvbGliL2lzUmVxdWlyZWRGb3JBMTF5JztcbmltcG9ydCB1bmNvbnRyb2xsYWJsZSBmcm9tICd1bmNvbnRyb2xsYWJsZSc7XG5cbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuaW1wb3J0IE5hdkxpbmsgZnJvbSAnLi9OYXZMaW5rJztcbmltcG9ydCBOYXZJdGVtIGZyb20gJy4vTmF2SXRlbSc7XG5pbXBvcnQgVW5jb250cm9sbGVkVGFiQ29udGFpbmVyIGZyb20gJy4vVGFiQ29udGFpbmVyJztcbmltcG9ydCBUYWJDb250ZW50IGZyb20gJy4vVGFiQ29udGVudCc7XG5pbXBvcnQgVGFiUGFuZSBmcm9tICcuL1RhYlBhbmUnO1xuXG5pbXBvcnQgeyBmb3JFYWNoLCBtYXAgfSBmcm9tICcuL3V0aWxzL0VsZW1lbnRDaGlsZHJlbic7XG5cbmNvbnN0IFRhYkNvbnRhaW5lciA9IFVuY29udHJvbGxlZFRhYkNvbnRhaW5lci5Db250cm9sbGVkQ29tcG9uZW50O1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBNYXJrIHRoZSBUYWIgd2l0aCBhIG1hdGNoaW5nIGBldmVudEtleWAgYXMgYWN0aXZlLlxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIG9uU2VsZWN0XG4gICAqL1xuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gc3R5bGVcbiAgICpcbiAgICogQHR5cGUgeygndGFicyd8ICdwaWxscycpfVxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogU2V0cyBhIGRlZmF1bHQgYW5pbWF0aW9uIHN0cmF0ZWd5IGZvciBhbGwgY2hpbGRyZW4gYDxUYWJQYW5lPmBzLiBVc2VcbiAgICogYGZhbHNlYCB0byBkaXNhYmxlLCBgdHJ1ZWAgdG8gZW5hYmxlIHRoZSBkZWZhdWx0IGA8RmFkZT5gIGFuaW1hdGlvbiBvclxuICAgKiBhIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAgdjIgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHR5cGUge1RyYW5zaXRpb24gfCBmYWxzZX1cbiAgICogQGRlZmF1bHQge0ZhZGV9XG4gICAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSksIGVsZW1lbnRUeXBlXSksXG5cbiAgLyoqXG4gICAqIEhUTUwgaWQgYXR0cmlidXRlLCByZXF1aXJlZCBpZiBubyBgZ2VuZXJhdGVDaGlsZElkYCBwcm9wXG4gICAqIGlzIHNwZWNpZmllZC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGlkOiByZXF1aXJlZEZvckExMXkoUHJvcFR5cGVzLnN0cmluZyksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gYSBUYWIgaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGZ1bmN0aW9uIChcbiAgICogICBBbnkgZXZlbnRLZXksXG4gICAqICAgU3ludGhldGljRXZlbnQgZXZlbnQ/XG4gICAqIClcbiAgICogYGBgXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgYWN0aXZlS2V5XG4gICAqL1xuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFdhaXQgdW50aWwgdGhlIGZpcnN0IFwiZW50ZXJcIiB0cmFuc2l0aW9uIHRvIG1vdW50IHRhYnMgKGFkZCB0aGVtIHRvIHRoZSBET00pXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVbm1vdW50IHRhYnMgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gaXQgaXMgbm8gbG9uZ2VyIHZpc2libGVcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiAndGFicycsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFjdGl2ZUtleShjaGlsZHJlbikge1xuICBsZXQgZGVmYXVsdEFjdGl2ZUtleTtcbiAgZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgIGlmIChkZWZhdWx0QWN0aXZlS2V5ID09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRBY3RpdmVLZXkgPSBjaGlsZC5wcm9wcy5ldmVudEtleTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZhdWx0QWN0aXZlS2V5O1xufVxuXG5jbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyVGFiKGNoaWxkKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZXZlbnRLZXksIGRpc2FibGVkLCB0YWJDbGFzc05hbWUgfSA9IGNoaWxkLnByb3BzO1xuICAgIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAgYXM9e05hdkxpbmt9XG4gICAgICAgIGV2ZW50S2V5PXtldmVudEtleX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9e3RhYkNsYXNzTmFtZX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9OYXZJdGVtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBtb3VudE9uRW50ZXIsXG4gICAgICB1bm1vdW50T25FeGl0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhY3RpdmVLZXkgPSBnZXREZWZhdWx0QWN0aXZlS2V5KGNoaWxkcmVuKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYkNvbnRhaW5lclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGFjdGl2ZUtleT17YWN0aXZlS2V5fVxuICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XG4gICAgICAgIG1vdW50T25FbnRlcj17bW91bnRPbkVudGVyfVxuICAgICAgICB1bm1vdW50T25FeGl0PXt1bm1vdW50T25FeGl0fVxuICAgICAgPlxuICAgICAgICA8TmF2IHsuLi5wcm9wc30gcm9sZT1cInRhYmxpc3RcIiBhcz1cIm5hdlwiPlxuICAgICAgICAgIHttYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyVGFiKX1cbiAgICAgICAgPC9OYXY+XG5cbiAgICAgICAgPFRhYkNvbnRlbnQ+XG4gICAgICAgICAge21hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRQcm9wcyA9IHsgLi4uY2hpbGQucHJvcHMgfTtcbiAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFByb3BzLnRpdGxlO1xuICAgICAgICAgICAgZGVsZXRlIGNoaWxkUHJvcHMuZGlzYWJsZWQ7XG4gICAgICAgICAgICBkZWxldGUgY2hpbGRQcm9wcy50YWJDbGFzc05hbWU7XG5cbiAgICAgICAgICAgIHJldHVybiA8VGFiUGFuZSB7Li4uY2hpbGRQcm9wc30gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgIDwvVGFiQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuVGFicy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5UYWJzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgdW5jb250cm9sbGFibGUoVGFicywge1xuICBhY3RpdmVLZXk6ICdvblNlbGVjdCcsXG59KTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBgPGlucHV0PmAgZWxlbWVudCBgdHlwZWBcbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2NoZWNrYm94JywgJ3JhZGlvJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgSFRNTCBpbnB1dCBuYW1lLCB1c2VkIHRvIGdyb3VwIGxpa2UgY2hlY2tib3hlcyBvciByYWRpbyBidXR0b25zIHRvZ2V0aGVyXG4gICAqIHNlbWFudGljYWxseVxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNoZWNrZWQgc3RhdGUgb2YgdGhlIGlucHV0LCBtYW5hZ2VkIGJ5IGA8VG9nZ2xlQnV0dG9uR3JvdXA+YCBhdXRvbWF0aWNhbGx5XG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGRpc2FibGVkIHN0YXRlIG9mIGJvdGggdGhlIGxhYmVsIGFuZCBpbnB1dFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHVuZGVybHlpbmcgaW5wdXQgZWxlbWVudCBjaGFuZ2VzLiBUaGlzIGlzIHBhc3NlZFxuICAgKiBkaXJlY3RseSB0byB0aGUgYDxpbnB1dD5gIHNvIHNoYXJlcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgYSBuYXRpdmUgYG9uQ2hhbmdlYCBldmVudC5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQsIHNob3VsZCBiZSB1bmlxdWUgYW1vdW5nc3QgaXQncyBzaWJsaW5ncyB3aGVuIG5lc3RlZCBpbiBhXG4gICAqIGBUb2dnbGVCdXR0b25Hcm91cGAuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBBIHJlZiBhdHRhY2hlZCB0byB0aGUgYDxpbnB1dD5gIGVsZW1lbnRcbiAgICogQHR5cGUge1JlYWN0UmVmfVxuICAgKi9cbiAgaW5wdXRSZWY6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5hbnksXG59O1xuXG5jbGFzcyBUb2dnbGVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgZm9jdXNlZDogZmFsc2UgfTtcblxuICBoYW5kbGVGb2N1cyA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBuYW1lLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hlY2tlZCxcbiAgICAgIHR5cGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlubmVyUmVmLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvY3VzZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgZm9jdXNlZCAmJiAnZm9jdXMnLFxuICAgICAgICAgIGRpc2FibGVkICYmICdkaXNhYmxlZCcsXG4gICAgICAgICl9XG4gICAgICAgIHR5cGU9e251bGx9XG4gICAgICAgIGFjdGl2ZT17ISFjaGVja2VkfVxuICAgICAgICBhcz1cImxhYmVsXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgY2hlY2tlZD17ISFjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXshIWRpc2FibGVkfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlIHx8IG5vb3B9XG4gICAgICAgIC8+XG5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5Ub2dnbGVCdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXG4gIDxUb2dnbGVCdXR0b24gaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPlxuKSk7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCB1bmNvbnRyb2xsYWJsZSBmcm9tICd1bmNvbnRyb2xsYWJsZSc7XG5cbmltcG9ydCBjaGFpbkZ1bmN0aW9uIGZyb20gJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vdXRpbHMvRWxlbWVudENoaWxkcmVuJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICcuL0J1dHRvbkdyb3VwJztcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnLi9Ub2dnbGVCdXR0b24nO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBbiBIVE1MIGA8aW5wdXQ+YCBuYW1lIGZvciBlYWNoIGNoaWxkIGJ1dHRvbi5cbiAgICpcbiAgICogX19SZXF1aXJlZCBpZiBgdHlwZWAgaXMgc2V0IHRvIGAncmFkaW8nYF9fXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUsIG9yIGFycmF5IG9mIHZhbHVlcywgb2YgdGhlIGFjdGl2ZSAocHJlc3NlZCkgYnV0dG9uc1xuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIG9uQ2hhbmdlXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiBhIGJ1dHRvbiBpcyBwcmVzc2VkLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgYHR5cGVgXG4gICAqIGlzIGAncmFkaW8nYCBvciBgJ2NoZWNrYm94J2AsIGBvbkNoYW5nZWAgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdmFsdWUgb3JcbiAgICogYXJyYXkgb2YgYWN0aXZlIHZhbHVlc1xuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIHZhbHVlc1xuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgYHR5cGVgIG9mIHRoZSByZW5kZXJlZCBidXR0b25zLCBkZXRlcm1pbmVzIHRoZSB0b2dnbGUgYmVoYXZpb3JcbiAgICogb2YgdGhlIGJ1dHRvbnNcbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2NoZWNrYm94JywgJ3JhZGlvJ10pLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdyYWRpbycsXG59O1xuXG5jbGFzcyBUb2dnbGVCdXR0b25Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldFZhbHVlcygpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gW10gOiBbXS5jb25jYXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlKHZhbHVlLCBldmVudCkge1xuICAgIGNvbnN0IHsgdHlwZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG5cbiAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgaWYgKCFpc0FjdGl2ZSkgb25DaGFuZ2UodmFsdWUsIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlcy5maWx0ZXIobiA9PiBuICE9PSB2YWx1ZSksIGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25DaGFuZ2UoWy4uLnZhbHVlcywgdmFsdWVdLCBldmVudCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHR5cGUsIG5hbWUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uQ2hhbmdlO1xuICAgIGRlbGV0ZSBwcm9wcy52YWx1ZTtcblxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG5cbiAgICBpbnZhcmlhbnQoXG4gICAgICB0eXBlICE9PSAncmFkaW8nIHx8ICEhbmFtZSxcbiAgICAgICdBIGBuYW1lYCBpcyByZXF1aXJlZCB0byBncm91cCB0aGUgdG9nZ2xlIGJ1dHRvbnMgd2hlbiB0aGUgYHR5cGVgICcgK1xuICAgICAgICAnaXMgc2V0IHRvIFwicmFkaW9cIicsXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uR3JvdXAgey4uLnByb3BzfSB0b2dnbGU+XG4gICAgICAgIHttYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSB9ID0gY2hpbGQucHJvcHM7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IGUgPT4gdGhpcy5oYW5kbGVUb2dnbGUodmFsdWUsIGUpO1xuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG5hbWU6IGNoaWxkLm5hbWUgfHwgbmFtZSxcbiAgICAgICAgICAgIGNoZWNrZWQ6IHZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEsXG4gICAgICAgICAgICBvbkNoYW5nZTogY2hhaW5GdW5jdGlvbihvbkNoYW5nZSwgaGFuZGxlciksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pfVxuICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICApO1xuICB9XG59XG5cblRvZ2dsZUJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblRvZ2dsZUJ1dHRvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuY29uc3QgVW5jb250cm9sbGVkVG9nZ2xlQnV0dG9uR3JvdXAgPSB1bmNvbnRyb2xsYWJsZShUb2dnbGVCdXR0b25Hcm91cCwge1xuICB2YWx1ZTogJ29uQ2hhbmdlJyxcbn0pO1xuXG5VbmNvbnRyb2xsZWRUb2dnbGVCdXR0b25Hcm91cC5CdXR0b24gPSBUb2dnbGVCdXR0b247XG5cbmV4cG9ydCBkZWZhdWx0IFVuY29udHJvbGxlZFRvZ2dsZUJ1dHRvbkdyb3VwO1xuIiwiZXhwb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnO1xuZXhwb3J0IEJhZGdlIGZyb20gJy4vQmFkZ2UnO1xuZXhwb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi9CcmVhZGNydW1iJztcbmV4cG9ydCBCcmVhZGNydW1iSXRlbSBmcm9tICcuL0JyZWFkY3J1bWJJdGVtJztcbmV4cG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vQnV0dG9uR3JvdXAnO1xuZXhwb3J0IEJ1dHRvblRvb2xiYXIgZnJvbSAnLi9CdXR0b25Ub29sYmFyJztcbmV4cG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5leHBvcnQgQ2FyZENvbHVtbnMgZnJvbSAnLi9DYXJkQ29sdW1ucyc7XG5leHBvcnQgQ2FyZERlY2sgZnJvbSAnLi9DYXJkRGVjayc7XG5leHBvcnQgQ2FyZEltZyBmcm9tICcuL0NhcmRJbWcnO1xuZXhwb3J0IENhcmRHcm91cCBmcm9tICcuL0NhcmRHcm91cCc7XG5leHBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XG5leHBvcnQgQ2Fyb3VzZWxJdGVtIGZyb20gJy4vQ2Fyb3VzZWxJdGVtJztcbmV4cG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcbmV4cG9ydCBDb2wgZnJvbSAnLi9Db2wnO1xuZXhwb3J0IENvbGxhcHNlIGZyb20gJy4vQ29sbGFwc2UnO1xuZXhwb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nO1xuZXhwb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuZXhwb3J0IEZhZGUgZnJvbSAnLi9GYWRlJztcblxuZXhwb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcbmV4cG9ydCBGb3JtQ29udHJvbCBmcm9tICcuL0Zvcm1Db250cm9sJztcbmV4cG9ydCBGb3JtQ2hlY2sgZnJvbSAnLi9Gb3JtQ2hlY2snO1xuZXhwb3J0IEZvcm1Hcm91cCBmcm9tICcuL0Zvcm1Hcm91cCc7XG5leHBvcnQgRm9ybUxhYmVsIGZyb20gJy4vRm9ybUxhYmVsJztcbmV4cG9ydCBGb3JtVGV4dCBmcm9tICcuL0Zvcm1UZXh0JztcblxuZXhwb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5leHBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5leHBvcnQgRmlndXJlIGZyb20gJy4vRmlndXJlJztcbmV4cG9ydCBJbnB1dEdyb3VwIGZyb20gJy4vSW5wdXRHcm91cCc7XG5leHBvcnQgSnVtYm90cm9uIGZyb20gJy4vSnVtYm90cm9uJztcbmV4cG9ydCBMaXN0R3JvdXAgZnJvbSAnLi9MaXN0R3JvdXAnO1xuZXhwb3J0IExpc3RHcm91cEl0ZW0gZnJvbSAnLi9MaXN0R3JvdXBJdGVtJztcbmV4cG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJztcbmV4cG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcbmV4cG9ydCBNb2RhbEJvZHkgZnJvbSAnLi9Nb2RhbEJvZHknO1xuZXhwb3J0IE1vZGFsRGlhbG9nIGZyb20gJy4vTW9kYWxEaWFsb2cnO1xuZXhwb3J0IE1vZGFsRm9vdGVyIGZyb20gJy4vTW9kYWxGb290ZXInO1xuZXhwb3J0IE1vZGFsVGl0bGUgZnJvbSAnLi9Nb2RhbFRpdGxlJztcbmV4cG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuZXhwb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5leHBvcnQgTmF2YmFyQnJhbmQgZnJvbSAnLi9OYXZiYXJCcmFuZCc7XG5leHBvcnQgTmF2RHJvcGRvd24gZnJvbSAnLi9OYXZEcm9wZG93bic7XG5leHBvcnQgTmF2SXRlbSBmcm9tICcuL05hdkl0ZW0nO1xuZXhwb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5JztcbmV4cG9ydCBPdmVybGF5VHJpZ2dlciBmcm9tICcuL092ZXJsYXlUcmlnZ2VyJztcbmV4cG9ydCBQYWdlSXRlbSBmcm9tICcuL1BhZ2VJdGVtJztcbmV4cG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XG5leHBvcnQgUG9wb3ZlciBmcm9tICcuL1BvcG92ZXInO1xuZXhwb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuZXhwb3J0IFJlc3BvbnNpdmVFbWJlZCBmcm9tICcuL1Jlc3BvbnNpdmVFbWJlZCc7XG5leHBvcnQgUm93IGZyb20gJy4vUm93JztcbmV4cG9ydCBTYWZlQW5jaG9yIGZyb20gJy4vU2FmZUFuY2hvcic7XG5leHBvcnQgU3BsaXRCdXR0b24gZnJvbSAnLi9TcGxpdEJ1dHRvbic7XG5leHBvcnQgVGFiIGZyb20gJy4vVGFiJztcbmV4cG9ydCBUYWJDb250YWluZXIgZnJvbSAnLi9UYWJDb250YWluZXInO1xuZXhwb3J0IFRhYkNvbnRlbnQgZnJvbSAnLi9UYWJDb250ZW50JztcbmV4cG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJztcbmV4cG9ydCBUYWJQYW5lIGZyb20gJy4vVGFiUGFuZSc7XG5leHBvcnQgVGFicyBmcm9tICcuL1RhYnMnO1xuZXhwb3J0IFRoZW1lUHJvdmlkZXIgZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmV4cG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnLi9Ub2dnbGVCdXR0b24nO1xuZXhwb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gJy4vVG9nZ2xlQnV0dG9uR3JvdXAnO1xuZXhwb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFBsYWNlaG9sZGVySW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBpbWFnZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogaG9sZGVyanMgfSA9IGF3YWl0IGltcG9ydCgnaG9sZGVyanMnKTtcblxuICAgIGhvbGRlcmpzLnJ1bih7XG4gICAgICBkb21haW46ICdob2xkZXIuanMnLFxuICAgICAgaW1hZ2VzOiB0aGlzLmltYWdlLmN1cnJlbnQsXG4gICAgICBvYmplY3Q6IG51bGwsXG4gICAgICBiZ25vZGVzOiBudWxsLFxuICAgICAgc3R5bGVub2RlczogbnVsbCxcbiAgICB9KTtcbiAgICBob2xkZXJqcy5zZXRSZXNpemVVcGRhdGUodGhpcy5pbWFnZS5jdXJyZW50LCBmYWxzZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0ZXh0LCBiZywgZmcsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3JjID0gYGhvbGRlci5qcy8ke3dpZHRofXgke2hlaWdodH0/dGV4dD0ke3RleHR9JmF1dG89eWVzJmJnPSR7Ymd9JmZnPSR7Zmd9YDtcbiAgICByZXR1cm4gPGltZyByZWY9e3RoaXMuaW1hZ2V9IGRhdGEtc3JjPXtzcmN9IGFsdD17dGV4dH0gey4uLnJlc3R9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlaG9sZGVySW1hZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTb25uZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgaW1wb3J0KCdzaGFrZXNwZWFyZS1kYXRhJykudGhlbihzID0+XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc29ubmV0OiBzLnNvbm5ldHMucmFuZG9tKCkgfSksXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRlID0ge307XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29ubmV0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFzb25uZXQpIHJldHVybiA8cCAvPjtcblxuICAgIHJldHVybiA8cD57c29ubmV0LmxpbmVzLnNsaWNlKDAsIDEwKS5qb2luKCcgJyl9PC9wPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb25uZXQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgY3NzLCBzdHlsZWQgfSBmcm9tICdjc3MtbGl0ZXJhbC1sb2FkZXIvc3R5bGVkJztcbmltcG9ydCBxc2EgZnJvbSAnZG9tLWhlbHBlcnMvcXVlcnkvcXVlcnlTZWxlY3RvckFsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICogYXMgUmVhY3RCb290c3RyYXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAqIGFzIGZvcm1payBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IHtcbiAgTGl2ZVByb3ZpZGVyLFxuICBMaXZlRWRpdG9yLFxuICBMaXZlRXJyb3IsXG4gIExpdmVQcmV2aWV3LFxuICB3aXRoTGl2ZSxcbn0gZnJvbSAncmVhY3QtbGl2ZSc7XG5cbmltcG9ydCBQbGFjZWhvbGRlckltYWdlIGZyb20gJy4vUGxhY2Vob2xkZXJJbWFnZSc7XG5pbXBvcnQgU29ubmV0IGZyb20gJy4vU29ubmV0JztcblxuY29uc3Qgc2NvcGUgPSB7XG4gIC4uLlJlYWN0Qm9vdHN0cmFwLFxuICBSZWFjdERPTSxcbiAgY2xhc3NOYW1lcyxcbiAgUHJvcFR5cGVzLFxuICBTb25uZXQsXG4gIGZvcm1payxcbiAgeXVwLFxuICBQbGFjZWhvbGRlckltYWdlLFxufTtcblxuY29uc3QgU3R5bGVkRXJyb3IgPSBzdHlsZWQoTGl2ZUVycm9yLCBcIlN0eWxlZEVycm9yXCIsIHJlcXVpcmUoXCIuL1JlYWN0UGxheWdyb3VuZC1TdHlsZWRFcnJvci5tb2R1bGUuc2Nzc1wiKSwgXCJzdHlsZWQtZXJyb3JcIiwgXCJzdHlsZWRFcnJvclwiKTtcblxuY29uc3QgU3R5bGVkUHJvdmlkZXIgPSBzdHlsZWQoTGl2ZVByb3ZpZGVyLCBcIlN0eWxlZFByb3ZpZGVyXCIsIHJlcXVpcmUoXCIuL1JlYWN0UGxheWdyb3VuZC1TdHlsZWRQcm92aWRlci5tb2R1bGUuc2Nzc1wiKSwgXCJzdHlsZWQtcHJvdmlkZXJcIiwgXCJzdHlsZWRQcm92aWRlclwiKTtcblxuY29uc3QgU3R5bGVkRWRpdG9yID0gc3R5bGVkKExpdmVFZGl0b3IsIFwiU3R5bGVkRWRpdG9yXCIsIHJlcXVpcmUoXCIuL1JlYWN0UGxheWdyb3VuZC1TdHlsZWRFZGl0b3IubW9kdWxlLnNjc3NcIiksIFwic3R5bGVkLWVkaXRvclwiLCBcInN0eWxlZEVkaXRvclwiKTtcblxuY29uc3QgRWRpdG9ySW5mb01lc3NhZ2UgPSBzdHlsZWQoJ2RpdicsIFwiRWRpdG9ySW5mb01lc3NhZ2VcIiwgcmVxdWlyZShcIi4vUmVhY3RQbGF5Z3JvdW5kLUVkaXRvckluZm9NZXNzYWdlLm1vZHVsZS5zY3NzXCIpLCBcImVkaXRvci1pbmZvLW1lc3NhZ2VcIiwgXCJlZGl0b3JJbmZvTWVzc2FnZVwiKTtcblxuY29uc3QgU3R5bGVkRXhhbXBsZSA9IHN0eWxlZCgnZGl2JywgXCJTdHlsZWRFeGFtcGxlXCIsIHJlcXVpcmUoXCIuL1JlYWN0UGxheWdyb3VuZC1TdHlsZWRFeGFtcGxlLm1vZHVsZS5zY3NzXCIpLCBcInN0eWxlZC1leGFtcGxlXCIsIFwic3R5bGVkRXhhbXBsZVwiKTtcblxubGV0IHVpZCA9IDA7XG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBpZ25vcmVUYWI6IGZhbHNlIH07XG5cbiAgaWQgPSBgZGVzY3JpYmVkLWJ5LSR7Kyt1aWR9YDtcblxuICBoYW5kbGVLZXlEb3duID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcblxuICAgIGlmICh0aGlzLnN0YXRlLmlnbm9yZVRhYiAmJiBrZXkgIT09ICdUYWInICYmIGtleSAhPT0gJ1NoaWZ0Jykge1xuICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJykgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZ25vcmVUYWI6IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc3RhdGUuaWdub3JlVGFiICYmIGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZ25vcmVUYWI6IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlnbm9yZVRhYjogIXRoaXMubW91c2VEb3duLFxuICAgICAga2V5Ym9hcmRGb2N1c2VkOiAhdGhpcy5tb3VzZURvd24sXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlTW91c2VEb3duID0gKCkgPT4ge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGtleWJvYXJkRm9jdXNlZCwgaWdub3JlVGFiIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgIDxTdHlsZWRFZGl0b3JcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICBpZ25vcmVUYWJLZXk9e2lnbm9yZVRhYn1cbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXt0aGlzLmlkfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGNvZGUgZWRpdG9yXCJcbiAgICAgICAgLz5cbiAgICAgICAgeyhrZXlib2FyZEZvY3VzZWQgfHwgIWlnbm9yZVRhYikgJiYgKFxuICAgICAgICAgIDxFZGl0b3JJbmZvTWVzc2FnZSBpZD17dGhpcy5pZH0gYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgICAgICB7aWdub3JlVGFiID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIFByZXNzIDxrYmQ+ZW50ZXI8L2tiZD4gb3IgdHlwZSBhIGtleSB0byBlbmFibGUgdGFiLXRvLWluZGVudFxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgUHJlc3MgPGtiZD5lc2M8L2tiZD4gdG8gZGlzYWJsZSB0YWIgdHJhcHBpbmdcbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRWRpdG9ySW5mb01lc3NhZ2U+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHByZXR0aWVyQ29tbWVudCA9IC8oXFx7XFxzKlxcL1xcKlxccytwcmV0dGllci1pZ25vcmVcXHMrXFwqXFwvXFxzKlxcfSl8KFxcL1xcL1xccytwcmV0dGllci1pZ25vcmUpL2dpbTtcblxuY29uc3QgeyBiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kIH0gPSByZXF1aXJlKCcuL1JlYWN0UGxheWdyb3VuZC0ubW9kdWxlLnNjc3MnKTtcblxuY29uc3QgUHJldmlldyA9IHdpdGhMaXZlKFxuICBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLmV4YW1wbGUgPSBudWxsO1xuXG4gICAgICBpbXBvcnQoJ2hvbGRlcmpzJykudGhlbigoeyBkZWZhdWx0OiBoanMgfSkgPT4ge1xuICAgICAgICB0aGlzLmhqcyA9IGhqcztcbiAgICAgICAgaGpzLmFkZFRoZW1lKCdncmF5Jywge1xuICAgICAgICAgIGJnOiBiYWNrZ3JvdW5kLFxuICAgICAgICAgIGZnOiBmb3JlZ3JvdW5kLFxuICAgICAgICAgIGZvbnQ6ICdIZWx2ZXRpY2EnLFxuICAgICAgICAgIGZvbnR3ZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ydW5Ib2xkZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByZXZQcm9wcyA9PiB7XG4gICAgICBpZiAocHJldlByb3BzLmxpdmUuZWxlbWVudCAhPT0gdGhpcy5wcm9wcy5saXZlLmVsZW1lbnQpIHRoaXMucnVuSG9sZGVyKCk7XG4gICAgfTtcblxuICAgIC8vIHByZXZlbnQgbGlua3MgaW4gZXhhbXBsZXMgZnJvbSBuYXZpZ2F0aW5nXG4gICAgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnQScpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgYXR0YWNoUmVmID0gcmVmID0+IHtcbiAgICAgIHRoaXMuZXhhbXBsZSA9IHJlZjtcbiAgICAgIHRoaXMucnVuSG9sZGVyKCk7XG4gICAgfTtcblxuICAgIHJ1bkhvbGRlcigpIHtcbiAgICAgIGlmICghdGhpcy5oanMgfHwgIXRoaXMuZXhhbXBsZSkgcmV0dXJuO1xuXG4gICAgICB0aGlzLmhqcy5ydW4oe1xuICAgICAgICB0aGVtZTogJ2dyYXknLFxuICAgICAgICBpbWFnZXM6IHFzYSh0aGlzLmV4YW1wbGUsICdpbWcnKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgc2hvd0NvZGUsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFN0eWxlZEV4YW1wbGVcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvZGUgRXhhbXBsZVwiXG4gICAgICAgICAgICByZWY9e3RoaXMuYXR0YWNoUmVmfVxuICAgICAgICAgICAgc2hvd0NvZGU9e3Nob3dDb2RlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaXZlUHJldmlldyAvPlxuICAgICAgICAgIDwvU3R5bGVkRXhhbXBsZT5cbiAgICAgICAgICA8U3R5bGVkRXJyb3IgLz5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfSxcbik7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1tdWx0aS1jb21wXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5Z3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb2RlVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvZGVUZXh0LCBleGFtcGxlQ2xhc3NOYW1lLCBzaG93Q29kZSA9IHRydWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFByb3ZpZGVyXG4gICAgICAgIHNjb3BlPXtzY29wZX1cbiAgICAgICAgY29kZT17Y29kZVRleHQucmVwbGFjZShwcmV0dGllckNvbW1lbnQsICcnKX1cbiAgICAgICAgbW91bnRTdHlsZXNoZWV0PXtmYWxzZX1cbiAgICAgICAgbm9JbmxpbmU9e2NvZGVUZXh0LmluY2x1ZGVzKCdyZW5kZXIoJyl9XG4gICAgICA+XG4gICAgICAgIDxQcmV2aWV3IHNob3dDb2RlPXtzaG93Q29kZX0gY2xhc3NOYW1lPXtleGFtcGxlQ2xhc3NOYW1lfSAvPlxuICAgICAgICB7c2hvd0NvZGUgJiYgPEVkaXRvciBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+fVxuICAgICAgPC9TdHlsZWRQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGUgfSBmcm9tICdwcm9wLXR5cGVzLWV4dHJhJztcblxuaW1wb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBhczogZWxlbWVudFR5cGUsXG4gIC8qKiBNYWtlIHRoZSBqdW1ib3Ryb24gZnVsbCB3aWR0aCwgYW5kIHdpdGhvdXQgcm91bmRlZCBjb3JuZXJzICovXG4gIGZsdWlkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIEBkZWZhdWx0ICdqdW1ib3Ryb24nICovXG4gIGJzUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2RpdicsXG4gIGZsdWlkOiBmYWxzZSxcbn07XG5cbmNsYXNzIEp1bWJvdHJvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFzOiBDb21wb25lbnQsIGNsYXNzTmFtZSwgZmx1aWQsIGJzUHJlZml4LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW2JzUHJlZml4XTogdHJ1ZSxcbiAgICAgIFtgJHtic1ByZWZpeH0tZmx1aWRgXTogZmx1aWQsXG4gICAgfTtcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGNsYXNzZXMpfSAvPjtcbiAgfVxufVxuXG5KdW1ib3Ryb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuSnVtYm90cm9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KEp1bWJvdHJvbiwgJ2p1bWJvdHJvbicpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInN0eWxlZEVycm9yXCI6XCJSZWFjdFBsYXlncm91bmQtU3R5bGVkRXJyb3ItbW9kdWxlLS1zdHlsZWQtZXJyb3ItLUkzeFlxIGFsZXJ0IGFsZXJ0LWRhbmdlciB0ZXh0LW1vbm9zcGFjZVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic3R5bGVkUHJvdmlkZXJcIjpcIlJlYWN0UGxheWdyb3VuZC1TdHlsZWRQcm92aWRlci1tb2R1bGUtLXN0eWxlZC1wcm92aWRlci0tQTNUZmRcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInN0eWxlZEVkaXRvclwiOlwiUmVhY3RQbGF5Z3JvdW5kLVN0eWxlZEVkaXRvci1tb2R1bGUtLXN0eWxlZC1lZGl0b3ItLVR2alRUIHByaXNtLW1vZHVsZS0tcHJpc20tLTItWndsXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlZGl0b3JJbmZvTWVzc2FnZVwiOlwiUmVhY3RQbGF5Z3JvdW5kLUVkaXRvckluZm9NZXNzYWdlLW1vZHVsZS0tZWRpdG9yLWluZm8tbWVzc2FnZS0tM1I2TU8gcC0yIGFsZXJ0IGFsZXJ0LWluZm9cIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInN0eWxlZEV4YW1wbGVcIjpcIlJlYWN0UGxheWdyb3VuZC1TdHlsZWRFeGFtcGxlLW1vZHVsZS0tc3R5bGVkLWV4YW1wbGUtLTEzTndwIGJzLWV4YW1wbGVcIixcInNob3dDb2RlXCI6XCJSZWFjdFBsYXlncm91bmQtU3R5bGVkRXhhbXBsZS1tb2R1bGUtLXNob3ctY29kZS0tclc5bzJcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJhY2tncm91bmRcIjpcIiMzNzM5NDBcIixcImZvcmVncm91bmRcIjpcIiM5OTlcIn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBOztBQXRDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQWZBO0FBREE7QUFvQkE7QUFEQTtBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBOENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsRkE7QUFDQTtBQURBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUExQ0E7QUFtRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7O0FBVkE7QUFDQTtBQVdBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFpREE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBYUE7QUFFQTtBQURBO0FBR0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7O0FBN0ZBO0FBQ0E7QUFEQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBREE7QUE0Q0E7QUFDQTtBQUNBO0FBSEE7QUFvREE7QUFHQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBOztBQW5EQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFBQTs7O0FBR0E7QUFFQTtBQXZCQTtBQURBO0FBNEJBO0FBQ0E7QUFGQTtBQTBCQTs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBeUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBR0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBOztBQWhEQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBOzs7QUFHQTtBQUVBO0FBZkE7QUFEQTtBQW9CQTtBQUNBO0FBQ0E7QUFIQTtBQStCQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUF5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFHQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7O0FBbkVBO0FBQ0E7QUFEQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUVBO0FBOUJBO0FBREE7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQW1DQTs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBdkJBO0FBQ0E7QUFEQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFYQTtBQURBO0FBZ0JBO0FBREE7QUFVQTs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQXVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQXJDQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUVBO0FBZEE7QUFEQTtBQW1CQTtBQUNBO0FBRkE7QUFxQkE7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBOztBQWpGQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFFQTtBQWpDQTtBQURBO0FBc0NBO0FBQ0E7QUFGQTtBQThDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7O0FDeEhBO0FBRUE7O0FDRkE7QUFFQTs7QUNGQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFFQTs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFKQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTs7QUFWQTtBQUNBO0FBV0E7QUFFQTs7QUMxQkE7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBaEZBO0FBbUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWZBO0FBQ0E7QUFpQkE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBc0dBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQTdHQTtBQStHQTtBQUNBO0FBQ0E7QUFqSEE7QUFtSEE7QUFDQTtBQUNBO0FBckhBO0FBdUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBdElBO0FBd0lBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFoSkE7QUFrSkE7QUFEQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaktBO0FBbUtBO0FBREE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3S0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE2RUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQVFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWpDQTtBQTRDQTtBQUNBOztBQXJYQTtBQUNBO0FBcVhBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUF1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBbkNBO0FBd0NBO0FBQ0E7O0FBN0ZBO0FBQ0E7QUFEQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBOUJBO0FBREE7QUFtQ0E7QUFDQTtBQUZBO0FBNkRBOzs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBOEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQWlCQTtBQUNBOztBQS9EQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBdEJBO0FBREE7QUEyQkE7QUFEQTtBQXVDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUdBO0FBTUE7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBOztBQXJGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUVBO0FBdENBO0FBREE7QUEyQ0E7QUFDQTtBQUZBO0FBNkNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BOzs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUF6REE7QUE0REE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFhQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUlBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFpQkE7QUFDQTs7QUF4REE7QUFDQTtBQXlEQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFJQTs7Ozs7O0FDcktBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbkNBO0FBc0NBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTs7QUFsQ0E7QUFDQTtBQW1DQTtBQUVBOzs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBckJBO0FBd0JBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUEzQkE7QUE4QkE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBMkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtCQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7O0FBekhBO0FBQ0E7QUFEQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlDQTtBQURBO0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBd0VBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBOzs7Ozs7OztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOzs7O0FBSUE7QUEvQkE7QUFrQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBbkJBO0FBc0JBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUEzQkE7QUE4QkE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFrQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQU9BO0FBR0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBOztBQTNEQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQXZCQTtBQURBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFrQ0E7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBNkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFqQ0E7QUFDQTtBQURBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUF2QkE7QUFEQTtBQTJCQTtBQUFBO0FBUUE7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQWxCQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUxBO0FBREE7QUFVQTtBQURBO0FBV0E7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFuQkE7QUFDQTtBQURBO0FBRUE7OztBQUdBO0FBRUE7QUFOQTtBQURBO0FBV0E7QUFEQTtBQVdBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7O0FBakNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBRUE7QUFYQTtBQURBO0FBZ0JBO0FBREE7QUFvQkE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBR0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBOztBQXBGQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFoQ0E7QUFEQTtBQXFDQTtBQUNBO0FBQ0E7QUFIQTtBQWtEQTs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQXlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBOztBQXZDQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFoQkE7QUFEQTtBQXFCQTtBQUNBO0FBRkE7QUFxQkE7QUFHQTtBQURBO0FBSUE7QUFFQTs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBRUE7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFmQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFXQTs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUdBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBOztBQTFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQWJBO0FBMkNBOzs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFmQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFXQTs7QUN4QkE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQXBCQTtBQXVCQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFpQkE7QUFDQTs7QUFoQ0E7QUFDQTtBQWlDQTtBQUNBO0FBRUE7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFmQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFXQTs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUNBOztBQTdDQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBaEhBO0FBbUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFlQTtBQUNBO0FBQ0E7QUFqQkE7QUFzQkE7QUFDQTtBQUNBO0FBeEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBL0JBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0E7QUF5Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBakRBO0FBa0RBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF4REE7QUF5REE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFoRUE7QUFrRUE7QUFDQTtBQUNBO0FBcEVBO0FBNEZBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBbkdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFKQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3REE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFnQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQkE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7O0FBckxBO0FBQ0E7QUFzTEE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcldBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQUNBO0FBaUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTs7QUFqQ0E7QUFDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBYkE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7O0FBN0JBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBVEE7QUE4QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBR0E7Ozs7O0FBS0E7QUFDQTtBQWlCQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7OztBQUdBO0FBMURBO0FBNkRBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQTFEQTtBQTZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFhQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBQ0E7O0FBMUVBO0FBQ0E7QUEyRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQzFNQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQWRBO0FBaUJBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBREE7QUFLQTtBQUNBOztBQW5CQTtBQUNBO0FBb0JBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7OztBQWtEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBOztBQWpHQTtBQUNBO0FBREE7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFDQTtBQURBO0FBK0NBO0FBREE7QUFxREE7Ozs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBeUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBcUNBO0FBQUE7QUFDQTtBQXRDQTtBQXVDQTtBQUFBO0FBQ0E7QUFyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTs7QUE3SEE7QUFDQTtBQURBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQXJFQTtBQThIQTtBQUFBO0FBQUE7Ozs7OztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQW5CQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFFQTtBQU5BO0FBREE7QUFXQTtBQURBO0FBV0E7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQThFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaUJBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7O0FBdElBO0FBQ0E7QUFEQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExRUE7QUF1SUE7QUFHQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVhBO0FBY0E7OztBQzNLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFLQTtBQUNBOztBQVpBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBdkRBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOztBQXpEQTtBQUNBO0FBMERBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQzFKQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQUNBO0FBMENBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWdCQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBOztBQXpEQTtBQUNBO0FBMERBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTs7Ozs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7O0FBSUE7QUE1QkE7QUErQkE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBR0E7QUFDQTs7QUFyREE7QUFDQTtBQXNEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFFQTs7Ozs7QUM3R0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFyQkE7QUFDQTtBQXNCQTs7O0FDekJBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFHQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7O0FBakJBO0FBQ0E7QUFrQkE7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBQUE7QUFjQTtBQUNBOztBQTdEQTtBQUNBO0FBOERBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBdUJBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBM0JBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBZEE7QUFlQTtBQUNBO0FBbEJBO0FBQ0E7QUFEQTtBQWtDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQXpDQTtBQTBDQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBYUE7QUFDQTtBQTVEQTtBQUFBO0FBQ0E7QUErREE7Ozs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7O0FBcEJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==