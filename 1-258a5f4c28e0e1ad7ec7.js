(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBootstrapComponent; });
/* unused harmony export ThemeConsumer */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(273);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_context_toolbox_lib_forwardRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(368);
/* harmony import */ var react_context_toolbox_lib_forwardRef__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_lib_forwardRef__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/jason/src/react-bootstrap/src/ThemeProvider.js";




var _React$createContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext(new Map()),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Provider, {
      value: this.prefixes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, this.props.children);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ThemeProvider.propTypes = {
  prefixes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return react_context_toolbox_lib_forwardRef__WEBPACK_IMPORTED_MODULE_3___default()(function (_ref, ref) {
    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _ref);

    props[forwardRefAs] = ref;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, function (prefixes) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
        bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    });
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}


/* harmony default export */ __webpack_exports__["b"] = (ThemeProvider);

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(54);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../src/Container.js
var Container = __webpack_require__(371);

// EXTERNAL MODULE: ../src/Row.js
var Row = __webpack_require__(400);

// EXTERNAL MODULE: ../src/Col.js
var Col = __webpack_require__(372);

// EXTERNAL MODULE: ./node_modules/css-literal-loader/styled.js
var styled = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/lodash/startCase.js
var startCase = __webpack_require__(503);
var startCase_default = /*#__PURE__*/__webpack_require__.n(startCase);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(38);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../src/Nav.js
var Nav = __webpack_require__(353);

// EXTERNAL MODULE: ../src/FormControl.js
var FormControl = __webpack_require__(369);

// EXTERNAL MODULE: ../src/Button.js
var Button = __webpack_require__(333);

// EXTERNAL MODULE: ../src/Collapse.js
var Collapse = __webpack_require__(370);

// EXTERNAL MODULE: ./node_modules/recompose/withProps.js
var withProps = __webpack_require__(446);
var withProps_default = /*#__PURE__*/__webpack_require__.n(withProps);

// CONCATENATED MODULE: ./src/components/SideNav.js













var MenuButton = withProps_default()({
  variant: 'link'
})(Object(styled["styled"])(Button["a" /* default */], "MenuButton", __webpack_require__(511), "menu-button", "menuButton"));
var SidePanel = Object(styled["styled"])('div', "SidePanel", __webpack_require__(513), "side-panel", "sidePanel");
var OverflowWrapper = Object(styled["styled"])('div', "OverflowWrapper", __webpack_require__(515), "overflow-wrapper", "overflowWrapper");
var TableOfContents = Object(styled["styled"])('nav', "TableOfContents", __webpack_require__(517), "table-of-contents", "tableOfContents");
var TocLink = Object(styled["styled"])(Nav["a" /* default */].Link, "TocLink", __webpack_require__(520), "toc-link", "tocLink");
var TocSubLink = Object(styled["styled"])(TocLink, "TocSubLink", __webpack_require__(522), "toc-sub-link", "tocSubLink");
var gettingStarted = ['introduction', 'theming', 'support'];
var layout = ['grid', 'media'];
var components = ['alerts', 'badge', 'breadcrumb', 'buttons', 'button-group', 'cards', 'carousel', 'dropdowns', 'forms', 'input-group', 'images', 'figures', 'jumbotron', 'list-group', 'modal', 'navs', 'navbar', 'overlays', 'pagination', 'popovers', 'progress', 'table', 'tabs', 'tooltips'];
var utilities = ['transitions', 'responsive-embed', 'react-overlays']; // We need to configure this

function attachSearch(ref) {
  if (ref && window.docsearch) window.docsearch({
    apiKey: '00f98b765b687b91399288e7c4c68ce1',
    indexName: 'react_bootstrap_v4',
    inputSelector: ref,
    debug: "production" !== 'production' // Set debug to true if you want to inspect the dropdown

  });
}

function NavSection(_ref) {
  var heading = _ref.heading,
      pathname = _ref.location.pathname,
      items = _ref.items,
      path = _ref.path;
  var active = pathname.startsWith(path);
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(TocLink, {
    active: active,
    href: items ? path + "/" + items[0] + "/" : path + "/",
    className: classnames_default()('js-search-toc-item', active && 'js-search-active')
  }, heading), items && active && react_default.a.createElement(Nav["a" /* default */], {
    activeKey: pathname,
    onSelect: function onSelect() {},
    className: "d-block"
  }, items.map(function (name) {
    return react_default.a.createElement(Nav["a" /* default */].Item, {
      key: path + "/" + name + "/"
    }, react_default.a.createElement(TocSubLink, {
      href: path + "/" + name + "/"
    }, startCase_default()(name.toLowerCase())));
  })));
}

var SideNav_SideNav =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SideNav, _React$Component);

  function SideNav() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      collapsed: false
    };

    _this.handleCollapse = function () {
      _this.setState(function (s) {
        return {
          collapsed: !s.collapsed
        };
      });
    };

    return _this;
  }

  var _proto = SideNav.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        location = _this$props.location,
        props = objectWithoutPropertiesLoose_default()(_this$props, ["location"]);

    return react_default.a.createElement(SidePanel, props, react_default.a.createElement("form", {
      className: "py-3 d-flex align-items-center"
    }, react_default.a.createElement(FormControl["a" /* default */], {
      type: "text",
      placeholder: "Search\u2026",
      ref: attachSearch
    }), react_default.a.createElement(MenuButton, {
      onClick: this.handleCollapse
    }, react_default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30",
      width: "30",
      height: "30",
      focusable: "false"
    }, react_default.a.createElement("title", null, "Menu"), react_default.a.createElement("path", {
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      d: "M4 7h22M4 15h22M4 23h22"
    })))), react_default.a.createElement(Collapse["a" /* default */], {
      in: this.state.collapsed
    }, react_default.a.createElement(OverflowWrapper, null, react_default.a.createElement(TableOfContents, {
      role: "complementary"
    }, react_default.a.createElement(NavSection, {
      heading: "Getting started",
      path: "/getting-started",
      location: location,
      items: gettingStarted
    }), react_default.a.createElement(NavSection, {
      heading: "Layout",
      location: location,
      items: layout,
      path: "/layout"
    }), react_default.a.createElement(NavSection, {
      heading: "Components",
      location: location,
      items: components,
      path: "/components"
    }), react_default.a.createElement(NavSection, {
      heading: "Utilities",
      location: location,
      items: utilities,
      path: "/utilities"
    }), react_default.a.createElement(NavSection, {
      heading: "Migrating",
      location: location,
      path: "/migrating"
    })))));
  };

  return SideNav;
}(react_default.a.Component);

/* harmony default export */ var components_SideNav = (SideNav_SideNav);
// EXTERNAL MODULE: ./src/components/Toc.js
var Toc = __webpack_require__(102);

// CONCATENATED MODULE: ./src/components/Main.js










var styles = __webpack_require__(531);

var propTypes = {
  location: prop_types_default.a.object.isRequired
};

function Main(_ref) {
  var children = _ref.children,
      props = objectWithoutPropertiesLoose_default()(_ref, ["children"]);

  return react_default.a.createElement(Container["a" /* default */], {
    fluid: true
  }, react_default.a.createElement(Row["a" /* default */], {
    className: "flex-xl-nowrap"
  }, react_default.a.createElement(Toc["b" /* TocProvider */], null, react_default.a.createElement(Col["a" /* default */], {
    as: components_SideNav,
    xs: 12,
    md: 3,
    xl: 2,
    location: props.location
  }), react_default.a.createElement(Col["a" /* default */], {
    as: Toc["c" /* default */],
    className: "d-none d-xl-block",
    xl: 2
  }), react_default.a.createElement(Col["a" /* default */], {
    xs: 12,
    md: 9,
    xl: 8,
    as: "main",
    id: "rb-docs-content",
    className: styles.main
  }, children))));
}

Main.propTypes = propTypes;
/* harmony default export */ var components_Main = (Main);
// EXTERNAL MODULE: ./src/layouts/index.js + 1 modules
var layouts = __webpack_require__(321);

// CONCATENATED MODULE: ./src/layouts/ApiLayout.js





var ApiLayout_propTypes = {
  location: prop_types_default.a.object.isRequired
};

function ComponentsLayout(_ref) {
  var children = _ref.children,
      props = objectWithoutPropertiesLoose_default()(_ref, ["children"]);

  return react_default.a.createElement(layouts["a" /* default */], props, react_default.a.createElement(components_Main, {
    location: props.location
  }, children));
}

ComponentsLayout.propTypes = ApiLayout_propTypes;
/* harmony default export */ var ApiLayout = __webpack_exports__["a"] = (ComponentsLayout);

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(273);
/* harmony import */ var dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(373);
/* harmony import */ var dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(396);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(402);




var _jsxFileName = "/Users/jason/src/react-bootstrap/src/OverlayTrigger.js";







var RefHolder =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var normalizeDelay = function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
};

var triggerType = prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['click', 'hover', 'focus']);
var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element.isRequired,

  /**
   * Specify which action or actions trigger Overlay visibility
   *
   * @type {'hover' | 'click' |'focus' | Array<'hover' | 'click' |'focus'>}
   */
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([triggerType, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(triggerType)]),

  /**
   * A millisecond delay amount to show and hide the Overlay once triggered
   */
  delay: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    show: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
    hide: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
  })]),

  /**
   * The initial visibility state of the Overlay. For more nuanced visibility
   * control, consider using the Overlay component directly.
   */
  defaultShow: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * An element or text to overlay next to the target.
   */
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element.isRequired]),
  // Overridden props from `<Overlay>`.

  /**
   * @private
   */
  target: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([null]),

  /**
   * @private
   */
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([null]),

  /**
   * @private
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([null])
};
var defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
}; // eslint-disable-next-line react/no-multi-comp

var OverlayTrigger =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(OverlayTrigger, _React$Component2);

  function OverlayTrigger(props, context) {
    var _this;

    _this = _React$Component2.call(this, props, context) || this;

    _this.getTarget = function () {
      return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(_this.trigger.current);
    };

    _this.handleShow = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'show';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.show) {
        _this.show();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'show') _this.show();
      }, delay.show);
    };

    _this.handleHide = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'hide';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.hide) {
        _this.hide();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'hide') _this.hide();
      }, delay.hide);
    };

    _this.handleFocus = function (e) {
      var _this$getChildProps = _this.getChildProps(),
          onFocus = _this$getChildProps.onFocus;

      _this.handleShow(e);

      if (onFocus) onFocus(e);
    };

    _this.handleBlur = function (e) {
      var _this$getChildProps2 = _this.getChildProps(),
          onBlur = _this$getChildProps2.onBlur;

      _this.handleHide(e);

      if (onBlur) onBlur(e);
    };

    _this.handleClick = function (e) {
      var _this$getChildProps3 = _this.getChildProps(),
          onClick = _this$getChildProps3.onClick;

      if (_this.state.show) _this.hide();else _this.show();
      if (onClick) onClick(e);
    };

    _this.handleMouseOver = function (e) {
      _this.handleMouseOverOut(_this.handleShow, e, 'fromElement');
    };

    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleHide, e, 'toElement');
    };

    _this.trigger = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.state = {
      show: !!props.defaultShow
    }; // We add aria-describedby in the case where the overlay is a role="tooltip"
    // for other cases describedby isn't appropriate (e.g. a popover with inputs) so we don't add it.

    _this.ariaModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var popper = data.instance.popper;

        var target = _this.getTarget();

        if (!_this.state.show || !target) return data;
        var role = popper.getAttribute('role') || '';

        if (popper.id && role.toLowerCase() === 'tooltip') {
          target.setAttribute('aria-describedby', popper.id);
        }

        return data;
      }
    };
    return _this;
  }

  var _proto2 = OverlayTrigger.prototype;

  _proto2.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this._timeout);
  };

  _proto2.getChildProps = function getChildProps() {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(this.props.children).props;
  };

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  _proto2.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_4___default()(target, related)) {
      handler(e);
    }
  };

  _proto2.hide = function hide() {
    this.setState({
      show: false
    });
  };

  _proto2.show = function show() {
    this.setState({
      show: true
    });
  };

  _proto2.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        overlay = _this$props.overlay,
        children = _this$props.children,
        _this$props$popperCon = _this$props.popperConfig,
        popperConfig = _this$props$popperCon === void 0 ? {} : _this$props$popperCon,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this$props, ["trigger", "overlay", "children", "popperConfig"]);

    delete props.delay;
    delete props.defaultShow;
    var child = react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(children);
    var triggerProps = {};
    var triggers = trigger == null ? [] : [].concat(trigger);

    if (triggers.indexOf('click') !== -1) {
      triggerProps.onClick = this.handleClick;
    }

    if (triggers.indexOf('focus') !== -1) {
      triggerProps.onFocus = this.handleShow;
      triggerProps.onBlur = this.handleHide;
    }

    if (triggers.indexOf('hover') !== -1) {
       false ? undefined : void 0;
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RefHolder, {
      ref: this.trigger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(child, triggerProps)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      popperConfig: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, popperConfig, {
        modifiers: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, popperConfig.modifiers, {
          ariaModifier: this.ariaModifier
        })
      }),
      show: this.state.show,
      onHide: this.handleHide,
      target: this.getTarget,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }), overlay));
  };

  return OverlayTrigger;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

OverlayTrigger.propTypes = propTypes;
OverlayTrigger.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (OverlayTrigger);

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(352);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(275);


var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Tooltip.js";





var propTypes = {
  /**
   * @default 'tooltip'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5___default()(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number])),

  /**
   * Sets the direction the Tooltip is positioned towards.
   *
   * > This is generally provided by the `Overlay` component positioning the tooltip
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']),

  /**
   * An Overlay injected set of props for positioning the tooltip arrow.
   *
   * > This is generally provided by the `Overlay` component positioning the tooltip
   *
   * @type {{ ref: ReactRef, style: Object }}
   */
  arrowProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    ref: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  }),

  /** @private */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /** @private */
  scheduleUpdate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
var defaultProps = {
  placement: 'right'
};

function Tooltip(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: innerRef,
    style: style,
    role: "tooltip",
    "x-placement": placement,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, "bs-tooltip-" + placement)
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: "arrow"
  }, arrowProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: bsPrefix + "-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, children));
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__[/* createBootstrapComponent */ "a"])(Tooltip, 'tooltip'));

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/@mdx-js/tag/dist/index.js
var dist = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__(533);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(52);

// EXTERNAL MODULE: ../src/Navbar.js + 2 modules
var Navbar = __webpack_require__(443);

// EXTERNAL MODULE: ../src/Nav.js
var Nav = __webpack_require__(353);

// EXTERNAL MODULE: ../src/Tooltip.js
var Tooltip = __webpack_require__(308);

// EXTERNAL MODULE: ../src/OverlayTrigger.js
var OverlayTrigger = __webpack_require__(307);

// EXTERNAL MODULE: ./node_modules/css-literal-loader/styled.js
var styled = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/recompose/withProps.js
var withProps = __webpack_require__(446);
var withProps_default = /*#__PURE__*/__webpack_require__.n(withProps);

// EXTERNAL MODULE: ./src/assets/logo.svg
var logo = __webpack_require__(534);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./src/components/NavMain.js












var StyledNavbar = withProps_default()({
  as: 'header',
  variant: 'dark',
  role: 'banner'
})(Object(styled["styled"])(Navbar["a" /* default */], "StyledNavbar", __webpack_require__(535), "styled-navbar", "styledNavbar"));
var SkipToContentLink = Object(styled["styled"])('a', "SkipToContentLink", __webpack_require__(537), "skip-to-content-link", "skipToContentLink");
var StyledNavLink = Object(styled["styled"])(Nav["a" /* default */].Link, "StyledNavLink", __webpack_require__(539), "styled-nav-link", "styledNavLink");
var NAV_LINKS = [{
  link: '/',
  title: 'Home',
  exact: true
}, {
  link: '/getting-started/introduction',
  title: 'Getting Started'
}, {
  link: '/components/alerts',
  title: 'Components'
}];
var propTypes = {
  activePage: prop_types_default.a.string
};

function NavMain(_ref) {
  var activePage = _ref.activePage;
  return react_default.a.createElement(StyledNavbar, {
    expand: true,
    collapseOnSelect: true
  }, react_default.a.createElement(SkipToContentLink, {
    href: "#rb-docs-content",
    tabIndex: "0"
  }, "Skip to content"), react_default.a.createElement(Navbar["a" /* default */].Brand, {
    href: "/"
  }, react_default.a.createElement("img", {
    src: logo_default.a,
    alt: "react-bootstrap",
    height: 30
  })), react_default.a.createElement(Nav["a" /* default */], {
    role: "navigation",
    id: "top",
    className: "d-none d-md-flex"
  }, NAV_LINKS.map(function (_ref2) {
    var link = _ref2.link,
        title = _ref2.title,
        exact = _ref2.exact;
    return react_default.a.createElement(StyledNavLink, {
      key: link,
      href: link,
      active: exact ? activePage === link : activePage.startsWith(link)
    }, title);
  })), react_default.a.createElement(Nav["a" /* default */], {
    className: "ml-auto pr-md-5"
  }, react_default.a.createElement(OverlayTrigger["a" /* default */], {
    placement: "bottom",
    delay: {
      show: 200
    },
    overlay: react_default.a.createElement(Tooltip["a" /* default */], {
      id: "t-discord"
    }, "Github")
  }, react_default.a.createElement(StyledNavLink, {
    href: "https://github.com/react-bootstrap/react-bootstrap",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react_default.a.createElement("i", {
    className: "fab fa-github"
  }), react_default.a.createElement("span", {
    className: "sr-only"
  }, "Github"))), react_default.a.createElement(OverlayTrigger["a" /* default */], {
    placement: "bottom",
    delay: {
      show: 200
    },
    overlay: react_default.a.createElement(Tooltip["a" /* default */], {
      id: "t-discord"
    }, "Discord")
  }, react_default.a.createElement(StyledNavLink, {
    href: "https://discord.gg/5PM9hB",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react_default.a.createElement("i", {
    className: "fab fa-discord"
  }), react_default.a.createElement("span", {
    className: "sr-only"
  }, "Discord")))));
}

NavMain.propTypes = propTypes;
/* harmony default export */ var components_NavMain = (NavMain);
// EXTERNAL MODULE: ./src/components/Heading.js
var Heading = __webpack_require__(53);

// EXTERNAL MODULE: ./src/components/CodeBlock.js + 49 modules
var CodeBlock = __webpack_require__(128);

// EXTERNAL MODULE: ./src/components/LinkedHeading.js
var LinkedHeading = __webpack_require__(122);

// CONCATENATED MODULE: ./src/layouts/index.js










var getMode = function getMode(className) {
  if (className === void 0) {
    className = '';
  }

  var _ref = className.match(/language-(\w+)/) || [],
      mode = _ref[1];

  return mode;
};

var components = {
  wrapper: function wrapper(props) {
    return react_default.a.createElement(react_default.a.Fragment, props);
  },
  h1: function h1(props) {
    return react_default.a.createElement(Heading["default"], Object.assign({
      h: "1"
    }, props));
  },
  h2: function h2(props) {
    return react_default.a.createElement(LinkedHeading["default"], Object.assign({
      h: "2"
    }, props));
  },
  h3: function h3(props) {
    return react_default.a.createElement(LinkedHeading["default"], Object.assign({
      h: "3"
    }, props));
  },
  h4: function h4(props) {
    return react_default.a.createElement(LinkedHeading["default"], Object.assign({
      h: "4"
    }, props));
  },
  h5: function h5(props) {
    return react_default.a.createElement(LinkedHeading["default"], Object.assign({
      h: "5"
    }, props));
  },
  pre: function pre(props) {
    return react_default.a.isValidElement(props.children) ? react_default.a.createElement(CodeBlock["default"], {
      codeText: props.children.props.children,
      mode: getMode(props.children.props.props.className) // omg

    }) : react_default.a.createElement("pre", props);
  }
};
var layouts_propTypes = {
  location: prop_types_default.a.object.isRequired
};

function DefaultLayout(_ref2) {
  var children = _ref2.children,
      location = _ref2.location;
  return react_default.a.createElement("div", null, react_default.a.createElement(components_NavMain, {
    activePage: location.pathname
  }), react_default.a.createElement(dist["MDXProvider"], {
    components: components
  }, children));
}

DefaultLayout.propTypes = layouts_propTypes;
/* harmony default export */ var layouts = __webpack_exports__["a"] = (DefaultLayout);

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createWithBsPrefix; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(453);
/* harmony import */ var dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/utils/createWithBsPrefix.js";





var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_5___default()(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _class, _temp2;

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  return Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__[/* createBootstrapComponent */ "a"])((_temp2 = _class =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          bsPrefix = _this$props.bsPrefix,
          _this$props$as = _this$props.as,
          Tag = _this$props$as === void 0 ? Component : _this$props$as,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["className", "bsPrefix", "as"]);

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, defaultProps, props, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    };

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _class.displayName = displayName, _class.propTypes = {
    bsPrefix: function bsPrefix() {},
    as: function as() {}
  }, _temp2), prefix);
}

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(510);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(339);




var _jsxFileName = "/Users/jason/src/react-bootstrap/src/SafeAnchor.js";




var propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  role: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),

  /**
   * this is sort of silly but needed for Button
   */
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"]
};
var defaultProps = {
  as: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this)));
    return _this;
  }

  var _proto = SafeAnchor.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        href = _this$props.href,
        onClick = _this$props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.as,
        disabled = _this$props2.disabled,
        onKeyDown = _this$props2.onKeyDown,
        innerRef = _this$props2.innerRef,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props2, ["as", "disabled", "onKeyDown", "innerRef"]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')

      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (innerRef) props.ref = innerRef;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      onClick: this.handleClick,
      onKeyDown: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this.handleKeyDown, onKeyDown),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }));
  };

  return SafeAnchor;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (SafeAnchor);

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeEventKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SelectableContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var makeEventKey = function makeEventKey(eventKey, href) {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["a"] = (SelectableContext);

/***/ }),

/***/ 333:
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
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(328);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Button.js";







var Button =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Button, _React$Component);

  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        size = _this$props.size,
        active = _this$props.active,
        className = _this$props.className,
        block = _this$props.block,
        type = _this$props.type,
        as = _this$props.as,
        innerRef = _this$props.innerRef,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as", "innerRef"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, active && 'active', bsPrefix + "-" + variant, block && bsPrefix + "-block", size && bsPrefix + "-" + size);

    if (props.href) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
        as: as,
        innerRef: innerRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes, props.disabled && 'disabled'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }));
    }

    var Component = as || 'button';
    if (innerRef) props.ref = innerRef;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      type: type,
      className: classes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }));
  };

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Button.propTypes = {
  /**
   * @default 'btn'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * One or more button variant combinations
   *
   * buttons may be one of a variety of visual variants such as:
   *
   * `'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`
   *
   * as well as "outline" versions (prefixed by 'outline-*')
   *
   * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'`
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Specifies a large or small button.
   *
   * @type ('sm'|'lg')
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** Spans the full width of the Button parent */
  block: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Manually set the visual state of the button to `:active` */
  active: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
  href: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Defines HTML button type attribute.
   *
   * @default 'button'
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['button', 'reset', 'submit', null]),
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"]
};
Button.defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__[/* createBootstrapComponent */ "a"])(Button, {
  prefix: 'btn',
  forwardRefAs: 'innerRef'
}));

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ __webpack_exports__["a"] = (createChainedFunction);

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_context_toolbox_lib_transformContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(524);
/* harmony import */ var react_context_toolbox_lib_transformContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_lib_transformContext__WEBPACK_IMPORTED_MODULE_1__);


var FormContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  controlId: undefined
});
FormContext.Transform = react_context_toolbox_lib_transformContext__WEBPACK_IMPORTED_MODULE_1___default()(FormContext);
/* harmony default export */ __webpack_exports__["a"] = (FormContext);

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(273);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(454);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(398);
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(399);





var _fadeStyles,
    _jsxFileName = "/Users/jason/src/react-bootstrap/src/Fade.js";







var propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired after the has component faded in
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired before the component fades out
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired after the component has faded out
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["ENTERING"]] = 'show', _fadeStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["ENTERED"]] = 'show', _fadeStyles);

var Fade =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Fade, _React$Component);

  function Fade() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (node) {
      Object(_utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(node);
      if (_this.props.onEnter) _this.props.onEnter(node);
    };

    return _this;
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this$props, ["className", "children"]);

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      addEndListener: dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_8___default.a
    }, props, {
      onEnter: this.handleEnter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), function (status, innerProps) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, innerProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  return Fade;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Fade);

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(447);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(330);
/* harmony import */ var react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(329);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(275);
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(355);
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(449);
/* harmony import */ var _AbstractNav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(448);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(356);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(395);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Nav.js";














var Nav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Nav, _React$Component);

  function Nav() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Nav.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        as = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        navbarBsPrefix = _this$props.navbarBsPrefix,
        cardHeaderBsPrefix = _this$props.cardHeaderBsPrefix,
        variant = _this$props.variant,
        fill = _this$props.fill,
        justify = _this$props.justify,
        navbar = _this$props.navbar,
        className = _this$props.className,
        children = _this$props.children,
        activeKey = _this$props.activeKey,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["as", "bsPrefix", "navbarBsPrefix", "cardHeaderBsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_AbstractNav__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      as: as,
      activeKey: activeKey,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }), children);
  };

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Nav.propTypes = {
  /**
   * @default 'nav'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** @private */
  navbarBsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** @private */
  cardHeaderBsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The visual variant of the nav items.
   *
   * @type {('tabs'|'pills')}
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Marks the NavItem with a matching `eventKey` (or `href` if present) as active.
   *
   * @type {string}
   */
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * Have all `NavItem`s to proportionatly fill all available width.
   */
  fill: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Have all `NavItem`s to evenly fill all available width.
   *
   * @type {boolean}
   */
  justify: prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_6___default()(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, function (_ref2) {
    var justify = _ref2.justify,
        navbar = _ref2.navbar;
    return justify && navbar ? Error('justify navbar `Nav`s are not supported') : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   */
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is "tablist", NavLink focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_5__["elementType"],

  /** @private */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
Nav.defaultProps = {
  justify: false,
  fill: false,
  as: 'ul'
};
var UncontrolledNav = uncontrollable__WEBPACK_IMPORTED_MODULE_9___default()(Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_10__[/* createBootstrapComponent */ "a"])(Nav, 'nav'), {
  activeKey: 'onSelect'
});
var DecoratedNav = react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_8___default()([_NavbarContext__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Consumer, _CardContext__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].Consumer], function (navbarContext, cardContext, _ref) {
  var navbar = _ref.navbar;
  if (!navbarContext && !cardContext) return {};
  if (navbarContext) return {
    navbarBsPrefix: navbarContext.bsPrefix,
    navbar: navbar == null ? true : navbar
  };
  return {
    cardHeaderBsPrefix: cardContext.cardHeaderBsPrefix
  };
}, UncontrolledNav);
DecoratedNav.Item = _NavItem__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"];
DecoratedNav.Link = _NavLink__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"];
DecoratedNav._Nav = Nav; // for Testing until enzyme is working with context

/* harmony default export */ __webpack_exports__["a"] = (DecoratedNav);

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ 356:
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
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/NavItem.js";






var NavItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(NavItem, _React$Component);

  function NavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "className", "children", "as"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), children);
  };

  return NavItem;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

NavItem.propTypes = {
  /**
   * @default 'nav-item'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** The ARIA role of the component */
  role: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"]
};
NavItem.defaultProps = {
  as: 'li'
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__[/* createBootstrapComponent */ "a"])(NavItem, 'nav-item'));

/***/ }),

/***/ 369:
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
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(396);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(330);
/* harmony import */ var react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(451);
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(340);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/FormControl.js";









var propTypes = {
  /**
   * @default {'form-control'}
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The FormControl `ref` will be forwarded to the underlying input element,
   * which means unless `as` is a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias {inputRef}
   */
  ref: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,

  /**
   * Input size variants
   *
   * @type {('sm'|'lg')}
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The underlying HTML element to use when rendering the FormControl.
   *
   * @type {('input'|'textarea'|elementType)}
   */
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"],

  /**
   * Render the input as plain text. Generally used along side `readOnly`.
   */
  plaintext: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Make the control readonly */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Make the control disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The `value` attribute of underlying input
   *
   * @controllable onChange
   * */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** A callback fired when the `value` prop changes */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * The HTML input `type`, which is only relevant if `as` is `'input'` (the default).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** Add "valid" validation styles to the control */
  isValid: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Add "invalid" validation styles to the control and accompanying label */
  isInvalid: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
var defaultProps = {
  as: 'input'
};

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(FormControl, _React$Component);

  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        type = _this$props.type,
        size = _this$props.size,
        id = _this$props.id,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        plaintext = _this$props.plaintext,
        readOnly = _this$props.readOnly,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "type", "size", "id", "inputRef", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"]);

    var classes;

    if (plaintext) {
      var _classes;

      classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
    } else if (type === 'file') {
      var _classes2;

      classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
    } else {
      var _classes3;

      classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + "-" + size] = size, _classes3);
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      type: type,
      id: id,
      ref: inputRef,
      readOnly: readOnly,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes, isValid && "is-valid", isInvalid && "is-invalid"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }));
  };

  return FormControl;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

var mapContext = function mapContext(_ref, _ref2) {
  var controlId = _ref.controlId;
  var id = _ref2.id;
   false ? undefined : void 0;
  return {
    id: id || controlId
  };
};

var DecoratedFormControl = react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_8___default()(_FormContext__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Consumer, mapContext, Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_11__[/* createBootstrapComponent */ "a"])(FormControl, {
  prefix: 'form-control',
  forwardRefAs: 'inputRef'
}));
DecoratedFormControl.Feedback = _Feedback__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (DecoratedFormControl);

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(273);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(357);
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(398);
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(454);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(399);
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(339);





var _collapseStyles,
    _jsxFileName = "/Users/jason/src/react-bootstrap/src/Collapse.js";









var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + parseInt(dom_helpers_style__WEBPACK_IMPORTED_MODULE_5___default()(elem, margins[0]), 10) + parseInt(dom_helpers_style__WEBPACK_IMPORTED_MODULE_5___default()(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_9__["EXITED"]] = 'collapse', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_9__["EXITING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_9__["ENTERING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_9__["ENTERED"]] = 'collapse show', _collapseStyles);
var propTypes = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,

  /**
   * Callback fired before the component expands
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired after the component starts to expand
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired after the component has expanded
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired before the component collapses
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired after the component has collapsed
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  dimension: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['height', 'width']), prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   *
   * @default element.offsetWidth | element.offsetHeight
   */
  getDimensionValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * ARIA role of collapsible element
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Collapse, _React$Component);

  function Collapse() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    };

    _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    _this.handleExit = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      Object(_utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(elem);
    };

    _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  };
  /* -- Expanding -- */


  // for testing
  _proto._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    var scroll = "scroll" + dimension[0].toUpperCase() + dimension.slice(1);
    return elem[scroll] + "px";
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this$props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);

    delete props.dimension;
    delete props.getDimensionValue;
    var handleEnter = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this.handleEnter, onEnter);
    var handleEntering = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this.handleEntering, onEntering);
    var handleEntered = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this.handleEntered, onEntered);
    var handleExit = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this.handleExit, onExit);
    var handleExiting = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this.handleExiting, onExiting);
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      addEndListener: dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_8___default.a
    }, props, {
      "aria-expanded": props.role ? props.in : null,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }), function (state, innerProps) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, innerProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, children.props.className, collapseStyles[state], _this2.getDimension() === 'width' && 'width')
      }));
    });
  };

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Collapse);

/***/ }),

/***/ 371:
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
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Container.js";






var Container =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Container, _React$Component);

  function Container() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        fluid = _this$props.fluid,
        Component = _this$props.as,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "fluid", "as", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, fluid ? bsPrefix + "-fluid" : bsPrefix),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  };

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Container.propTypes = {
  /**
   * @default 'container'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Allow the Container to fill all of it's availble horizontal space.
   */
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * You can use a custom element for this component
   */
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"]
};
Container.defaultProps = {
  as: 'div',
  fluid: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__[/* createBootstrapComponent */ "a"])(Container, 'container'));

/***/ }),

/***/ 372:
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
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Col.js";





var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var colSize = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['auto'])]);
var stringOrNumber = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]);
var column = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([colSize, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
  size: colSize,
  order: stringOrNumber,
  offset: stringOrNumber
})]);

var Col =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Col, _React$Component);

  function Col() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "className", "as"]);

    var spans = [];
    var classes = [];
    DEVICE_SIZES.forEach(function (brkPoint) {
      var propValue = props[brkPoint];
      delete props[brkPoint];
      var span, offset, order;

      if (propValue != null && typeof propValue === 'object') {
        var _propValue$span = propValue.span;
        span = _propValue$span === void 0 ? true : _propValue$span;
        offset = propValue.offset;
        order = propValue.order;
      } else {
        span = propValue;
      }

      var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
      if (span != null) spans.push(span === true ? "" + bsPrefix + infix : "" + bsPrefix + infix + "-" + span);
      if (order != null) classes.push("order" + infix + "-" + order);
      if (offset != null) classes.push("offset" + infix + "-" + offset);
    });

    if (!spans.length) {
      spans.push(bsPrefix); // plain 'col'
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default.a.apply(void 0, [className].concat(spans, classes)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }));
  };

  return Col;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Col.propTypes = {
  /**
   * @default 'col'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"],

  /**
   * The number of columns to span on sxtra small devices (<576px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  xs: column,

  /**
   * The number of columns to span on small devices (≥576px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  sm: column,

  /**
   * The number of columns to span on medium devices (≥768px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  md: column,

  /**
   * The number of columns to span on large devices (≥992px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  lg: column,

  /**
   * The number of columns to span on extra large devices (≥1200px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  xl: column
};
Col.defaultProps = {
  as: 'div'
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__[/* createBootstrapComponent */ "a"])(Col, 'col'));

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NavContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["a"] = (NavContext);

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["a"] = (TabContext);

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(328);
/* harmony import */ var _AbstractNavItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(450);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(275);


var _jsxFileName = "/Users/jason/src/react-bootstrap/src/NavLink.js";







var propTypes = {
  /**
   * @default 'nav-link'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The active state of the NavItem item.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The disabled state of the NavItem item.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The ARIA role for the `NavLink`, In the context of a 'tablist' parent Nav,
   * the role defaults to 'tab'
   * */
  role: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** The HTML href attribute for the `NavLink` */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** A callback fired when the `NavLink` is selected.
   *
   * ```js
   * function (eventKey: any, event: SyntheticEvent) {}
   * ```
   */
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Uniquely idenifies the `NavItem` amoungst its siblings,
   * used to determine and control the active state ofthe parent `Nav`
   */
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /** @default 'a' */
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_4__["elementType"],

  /** @private */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
var defaultProps = {
  disabled: false,
  as: _SafeAnchor__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
};

function NavLink(_ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      innerRef = _ref.innerRef,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "innerRef", "as"]);

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AbstractNavItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    href: href,
    ref: innerRef,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, disabled && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
}

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__[/* createBootstrapComponent */ "a"])(NavLink, 'nav-link'));

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return triggerBrowserReflow; });
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Row.js";






var Row =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        noGutters = _this$props.noGutters,
        Component = _this$props.as,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "noGutters", "as", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, noGutters && 'no-gutters'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  };

  return Row;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Row.propTypes = {
  /**
   * @default 'row'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /** Removes the gutter spacing between `Col`s as well as any added negative margins. */
  noGutters: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_5__["elementType"]
};
Row.defaultProps = {
  as: 'div',
  noGutters: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__[/* createBootstrapComponent */ "a"])(Row, 'row'));

/***/ }),

/***/ 401:
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
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/NavbarBrand.js";






var NavbarBrand =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(NavbarBrand, _React$Component);

  function NavbarBrand() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarBrand.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        as = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["bsPrefix", "className", "as"]);

    var Component = as || (props.href ? 'a' : 'span');
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  };

  return NavbarBrand;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

NavbarBrand.propTypes = {
  /** @default 'navbar' */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * An href, when provided the Brand will render as an `<a>` element (unless `as` is provided).
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Set a custom element for this component.
   */
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__[/* createBootstrapComponent */ "a"])(NavbarBrand, 'navbar-brand'));

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(272);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(541);
/* harmony import */ var react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(347);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Overlay.js";







var propTypes = {
  /**
   * A component instance, DOM node, or function that returns either.
   * The `container` element will have the Overlay appended to it via a React portal.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types_extra__WEBPACK_IMPORTED_MODULE_8__["componentOrElement"], prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]),

  /**
   * A component instance, DOM node, or function that returns either.
   * The overlay will be positioned in relation to the `target`
   */
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types_extra__WEBPACK_IMPORTED_MODULE_8__["componentOrElement"], prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]),

  /**
   * Set the visibility of the Overlay
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,

  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Specify event for triggering a "root close" toggle.
   */
  rootCloseEvent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['click', 'mousedown']),

  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Animate the entering and exiting of the Ovelay. `true` will use the `<Fade>` transition,
   * or a custom react-transition-group `<Transition>` component can be provided.
   */
  transition: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, prop_types_extra__WEBPACK_IMPORTED_MODULE_8__["elementType"]]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * The placement of the OVerlay in relation to it's `target`.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'])
};
var defaultProps = {
  transition: _Fade__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(r));
  });
}

function Overlay(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      outerProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, ["children", "transition"]);

  transition = transition === true ? _Fade__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"] : transition || null;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, outerProps, {
    transition: transition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), function (_ref2) {
    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref2, ["props", "arrowProps", "show"]);

    wrapRefs(overlayProps, arrowProps);
    if (typeof overlay === 'function') return overlay(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, overlayProps, {
      show: show,
      arrowProps: arrowProps
    }));
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(overlay, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, overlayProps, {
      arrowProps: arrowProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(overlay.props.className, !transition && show && 'show'),
      style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, overlay.props.style, overlayProps.style)
    }));
  });
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Overlay);

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(273);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(274);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/prop-types-extra/lib/index.js
var lib = __webpack_require__(303);

// EXTERNAL MODULE: ../node_modules/uncontrollable/lib/index.js
var uncontrollable_lib = __webpack_require__(329);
var uncontrollable_lib_default = /*#__PURE__*/__webpack_require__.n(uncontrollable_lib);

// EXTERNAL MODULE: ../src/utils/createWithBsPrefix.js
var createWithBsPrefix = __webpack_require__(326);

// EXTERNAL MODULE: ../src/NavbarBrand.js
var NavbarBrand = __webpack_require__(401);

// EXTERNAL MODULE: ../src/Collapse.js
var Collapse = __webpack_require__(370);

// EXTERNAL MODULE: ../src/ThemeProvider.js
var ThemeProvider = __webpack_require__(275);

// EXTERNAL MODULE: ../src/NavbarContext.js
var NavbarContext = __webpack_require__(355);

// CONCATENATED MODULE: ../src/NavbarCollapse.js



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/NavbarCollapse.js";






var NavbarCollapse_NavbarCollapse =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarCollapse.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["children", "bsPrefix"]);

    return react_default.a.createElement(NavbarContext["a" /* default */].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (context) {
      return react_default.a.createElement(Collapse["a" /* default */], Object(esm_extends["a" /* default */])({
        in: !!(context && context.expanded)
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react_default.a.createElement("div", {
        className: bsPrefix,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, children));
    });
  };

  return NavbarCollapse;
}(react_default.a.Component);

NavbarCollapse_NavbarCollapse.propTypes = {
  /** @default 'navbar-collapse' */
  bsPrefix: prop_types_default.a.string
};
/* harmony default export */ var src_NavbarCollapse = (Object(ThemeProvider["a" /* createBootstrapComponent */])(NavbarCollapse_NavbarCollapse, 'navbar-collapse'));
// CONCATENATED MODULE: ../src/NavbarToggle.js



var NavbarToggle_jsxFileName = "/Users/jason/src/react-bootstrap/src/NavbarToggle.js";







var NavbarToggle_NavbarToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(NavbarToggle, _React$Component);

  function NavbarToggle() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var onToggle = _this.navbarContext.onToggle;
      if (onClick) onClick(e);
      if (onToggle) onToggle();
    };

    return _this;
  }

  var _proto = NavbarToggle.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.as,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["bsPrefix", "className", "children", "label", "as"]);

    if (Component === 'button') {
      props.type = 'button';
    }

    return react_default.a.createElement(NavbarContext["a" /* default */].Consumer, {
      __source: {
        fileName: NavbarToggle_jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, function (context) {
      _this2.navbarContext = context || {};
      return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
        onClick: _this2.handleClick,
        "aria-label": label,
        className: classnames_default()(className, bsPrefix, !!(context && context.expanded) && 'collapsed'),
        __source: {
          fileName: NavbarToggle_jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), children || react_default.a.createElement("span", {
        className: bsPrefix + "-icon",
        __source: {
          fileName: NavbarToggle_jsxFileName,
          lineNumber: 70
        },
        __self: this
      }));
    });
  };

  return NavbarToggle;
}(react_default.a.Component);

NavbarToggle_NavbarToggle.propTypes = {
  /** @default 'navbar-toggler' */
  bsPrefix: prop_types_default.a.string,

  /** An accessible ARIA label for the toggler button. */
  label: prop_types_default.a.string,

  /** @private */
  onClick: prop_types_default.a.func,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: prop_types_default.a.node,
  as: lib["elementType"]
};
NavbarToggle_NavbarToggle.defaultProps = {
  label: 'Toggle navigation',
  as: 'button'
};
/* harmony default export */ var src_NavbarToggle = (Object(ThemeProvider["a" /* createBootstrapComponent */])(NavbarToggle_NavbarToggle, 'navbar-toggler'));
// EXTERNAL MODULE: ../src/SelectableContext.js
var SelectableContext = __webpack_require__(331);

// CONCATENATED MODULE: ../src/Navbar.js




var Navbar_jsxFileName = "/Users/jason/src/react-bootstrap/src/Navbar.js";












var propTypes = {
  /** @default 'navbar' */
  bsPrefix: prop_types_default.a.string.isRequired,

  /**
   * The general visual variant a the Navbar.
   * Use in combination with the `bg` prop, `background-color` utilities,
   * or your own background styles.
   *
   * @type {('light'|'dark')}
   */
  variant: prop_types_default.a.string,

  /**
   * The breakpoint, below which, the Navbar will collapse.
   * When `true` the Navbar will always be expanded regardless of screen size.
   */
  expand: prop_types_default.a.oneOf([true, 'sm', 'md', 'lg', 'xl']).isRequired,

  /**
   * A convenience prop for adding `bg-*` utility classes since they are so commonly used here.
   * `light` and `dark` are common choices but any `bg-*` class is supported, including any custom ones you might define.
   *
   * Pairs nicely with the `variant` prop.
   */
  bg: prop_types_default.a.string,

  /**
   * Create a fixed navbar along the top or bottom of the screen, that scrolls with the
   * page. A convenience prop for the `fixed-*` positioning classes.
   */
  fixed: prop_types_default.a.oneOf(['top', 'bottom']),

  /**
   * Position the navbar at the top or bottom of the viewport,
   * but only after scrolling past it. . A convenience prop for the `sticky-*` positioning classes.
   *
   *  __Not supported in <= IE11 and other older browsers without a polyfill__
   */
  sticky: prop_types_default.a.oneOf(['top', 'bottom']),

  /**
   * Set a custom element for this component.
   */
  as: lib["elementType"],

  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: prop_types_default.a.func,

  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * ```js
   * function (
   *  eventKey: mixed,
   *  event?: SyntheticEvent
   * )
   * ```
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: prop_types_default.a.func,

  /**
   * Toggles `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * Manually controlling `expanded` via the onSelect callback is recommended instead,
   * for more complex operations that need to be executed after
   * the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: prop_types_default.a.bool,

  /**
   * Controls the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: prop_types_default.a.bool,

  /**
   * The ARIA role for the navbar, will default to 'navigation' for
   * Navbars whose `as` is something other than `<nav>`.
   *
   * @default 'navigation'
   */
  role: prop_types_default.a.string
};
var defaultProps = {
  as: 'nav',
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar_Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Navbar, _React$Component);

  function Navbar() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleCollapse = function () {
      var _this$props = _this.props,
          onToggle = _this$props.onToggle,
          expanded = _this$props.expanded,
          collapseOnSelect = _this$props.collapseOnSelect,
          onSelect = _this$props.onSelect;
      if (onSelect) onSelect.apply(void 0, arguments);

      if (collapseOnSelect && expanded) {
        onToggle(false);
      }
    };

    _this.handleToggle = function () {
      var _this$props2 = _this.props,
          onToggle = _this$props2.onToggle,
          expanded = _this$props2.expanded;
      onToggle(!expanded);
    };

    _this.state = {
      navbarContext: {
        onToggle: _this.handleToggle
      }
    };
    return _this;
  }

  Navbar.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var bsPrefix = _ref.bsPrefix,
        expanded = _ref.expanded;
    return {
      navbarContext: Object(objectSpread["a" /* default */])({}, prevState.navbarContext, {
        bsPrefix: bsPrefix,
        expanded: expanded
      })
    };
  };

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        bsPrefix = _this$props3.bsPrefix,
        expand = _this$props3.expand,
        variant = _this$props3.variant,
        bg = _this$props3.bg,
        fixed = _this$props3.fixed,
        sticky = _this$props3.sticky,
        className = _this$props3.className,
        children = _this$props3.children,
        Component = _this$props3.as,
        _1 = _this$props3.expanded,
        _2 = _this$props3.onToggle,
        _3 = _this$props3.onSelect,
        _4 = _this$props3.collapseOnSelect,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props3, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]); // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one


    if (props.role === undefined && Component !== 'nav') {
      props.role = 'navigation';
    }

    var expandClass = bsPrefix + "-expand";
    if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
    return react_default.a.createElement(NavbarContext["a" /* default */].Provider, {
      value: this.state.navbarContext,
      __source: {
        fileName: Navbar_jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, react_default.a.createElement(SelectableContext["a" /* default */].Provider, {
      value: this.handleCollapse,
      __source: {
        fileName: Navbar_jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
      className: classnames_default()(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed),
      __source: {
        fileName: Navbar_jsxFileName,
        lineNumber: 192
      },
      __self: this
    }), children)));
  };

  return Navbar;
}(react_default.a.Component);

Navbar_Navbar.propTypes = propTypes;
Navbar_Navbar.defaultProps = defaultProps;
var DecoratedNavbar = Object(ThemeProvider["a" /* createBootstrapComponent */])(uncontrollable_lib_default()(Navbar_Navbar, {
  expanded: 'onToggle'
}), 'navbar');
DecoratedNavbar.Brand = NavbarBrand["a" /* default */];
DecoratedNavbar.Toggle = src_NavbarToggle;
DecoratedNavbar.Collapse = src_NavbarCollapse;
DecoratedNavbar.Text = Object(createWithBsPrefix["a" /* default */])('navbar-text', {
  Component: 'span'
});
/* harmony default export */ var src_Navbar = __webpack_exports__["a"] = (DecoratedNavbar);

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(354);
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(330);
/* harmony import */ var react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(331);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(393);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(394);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/AbstractNav.js";









var noop = function noop() {};

var AbstractNav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AbstractNav, _React$Component);

  function AbstractNav() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, event) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          parentOnSelect = _this$props.parentOnSelect;
      if (key == null) return;
      if (onSelect) onSelect(key, event);
      if (parentOnSelect) parentOnSelect(key, event);
    };

    _this.handleKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (onKeyDown) onKeyDown(event);
      var nextActiveChild;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          nextActiveChild = _this.getNextActiveChild(-1);
          break;

        case 'ArrowRight':
        case 'ArrowDown':
          nextActiveChild = _this.getNextActiveChild(1);
          break;

        default:
          return;
      }

      if (!nextActiveChild) return;
      event.preventDefault();

      _this.handleSelect(nextActiveChild.dataset.rbEventKey, event);

      _this._needsRefocus = true;
    };

    _this.attachRef = function (ref) {
      _this.listNode = ref;
    };

    _this.state = {
      navContext: null
    };
    return _this;
  }

  AbstractNav.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var activeKey = _ref.activeKey,
        getControlledId = _ref.getControlledId,
        getControllerId = _ref.getControllerId,
        role = _ref.role;
    return {
      navContext: {
        role: role,
        // used by NavLink to determine it's role
        activeKey: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_8__[/* makeEventKey */ "b"])(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      }
    };
  };

  var _proto = AbstractNav.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (!this._needsRefocus || !this.listNode) return;
    var activeChild = this.listNode.querySelector('[data-rb-event-key].active');
    if (activeChild) activeChild.focus();
  };

  _proto.getNextActiveChild = function getNextActiveChild(offset) {
    if (!this.listNode) return null;
    var items = dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_4___default()(this.listNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = this.listNode.querySelector('.active');
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.as,
        _ = _this$props2.onSelect,
        _0 = _this$props2.parentOnSelect,
        _1 = _this$props2.getControlledId,
        _2 = _this$props2.getControllerId,
        _3 = _this$props2.activeKey,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props2, ["as", "onSelect", "parentOnSelect", "getControlledId", "getControllerId", "activeKey"]);

    if (props.role === 'tablist') {
      props.onKeyDown = this.handleKeyDown;
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Provider, {
      value: this.handleSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Provider, {
      value: this.state.navContext,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      onKeyDown: this.handleKeyDown,
      ref: this.attachRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }))));
  };

  return AbstractNav;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

AbstractNav.propTypes = {
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"],

  /** @private */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
AbstractNav.defaultProps = {
  as: 'ul'
};
/* harmony default export */ __webpack_exports__["a"] = (react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_7___default()([_SelectableContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _TabContext__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]], function (parentOnSelect, tabContext, _ref2) {
  var role = _ref2.role;
  if (!tabContext) return {
    parentOnSelect: parentOnSelect
  };
  var activeKey = tabContext.activeKey,
      getControllerId = tabContext.getControllerId,
      getControlledId = tabContext.getControlledId;
  return {
    activeKey: activeKey,
    parentOnSelect: parentOnSelect,
    role: role || 'tablist',
    // pass these two through to avoid having to listen to
    // both Tab and Nav contexts in NavLink
    getControllerId: getControllerId,
    getControlledId: getControlledId
  };
}, AbstractNav));

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(274);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(393);
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(331);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/AbstractNavItem.js";





var propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  role: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
var defaultProps = {
  disabled: false
};

var AbstractNavItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AbstractNavItem, _React$Component);

  function AbstractNavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AbstractNavItem.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        active = _this$props.active,
        className = _this$props.className,
        tabIndex = _this$props.tabIndex,
        eventKey = _this$props.eventKey,
        onSelect = _this$props.onSelect,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["active", "className", "tabIndex", "eventKey", "onSelect", "as"]);

    var navKey = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_7__[/* makeEventKey */ "b"])(eventKey, props.href);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, function (parentOnSelect) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, function (navContext) {
        var isActive = active;

        if (navContext) {
          if (!props.role && navContext.role === 'tablist') props.role = 'tab';
          props['data-rb-event-key'] = navKey;
          props.id = navContext.getControllerId(navKey);
          props['aria-controls'] = navContext.getControlledId(navKey);
          isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
        }

        if (props.role === 'tab') {
          props.tabIndex = isActive ? tabIndex : -1;
          props['aria-selected'] = isActive;
        }

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, isActive && 'active'),
          onClick: function onClick(e) {
            var onClick = _this.props.onClick;
            if (onClick) onClick(e);
            if (navKey == null) return;
            if (onSelect) onSelect(navKey, e);
            if (parentOnSelect) parentOnSelect(navKey, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }));
      });
    });
  };

  return AbstractNavItem;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

AbstractNavItem.propTypes = propTypes;
AbstractNavItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (AbstractNavItem);

/***/ }),

/***/ 451:
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
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var prop_types_extra__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/jason/src/react-bootstrap/src/Feedback.js";





var Feedback =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Feedback, _React$Component);

  function Feedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Feedback.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        type = _this$props.type,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["as", "className", "type"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, type && type + "-feedback"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }));
  };

  return Feedback;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Feedback.propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  as: prop_types_extra__WEBPACK_IMPORTED_MODULE_6__["elementType"]
};
Feedback.defaultProps = {
  type: 'valid',
  as: 'div'
};
/* harmony default export */ __webpack_exports__["a"] = (Feedback);

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"menuButton":"SideNav-MenuButton-module--menu-button--1QeY5 p-0 d-md-none ml-3"};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sidePanel":"SideNav-SidePanel-module--side-panel--19YKC d-flex flex-column"};

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"overflowWrapper":"SideNav-OverflowWrapper-module--overflow-wrapper--8UzMg"};

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tableOfContents":"SideNav-TableOfContents-module--table-of-contents--3Fc1I pt-2 pb-4"};

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tocLink":"SideNav-TocLink-module--toc-link--lmq6G","active":"SideNav-TocLink-module--active--RY6bM"};

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tocSubLink":"SideNav-TocSubLink-module--toc-sub-link--3rUm5"};

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"nav":"Main-styles-module--nav--2hw03","main":"Main-styles-module--main--2QNBf"};

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTI3Ljk4IDIwMTYuODciIGZpbGw9IiM0MWUwZmQiPgogIDxwYXRoICBkPSJNODg4IDExMTkuMTdjMTYtMzIuNjIgMzIuODQtNjUuMzcgNTAuMTctOTcuMzVsLjE1LS4yNyAxOC4zOS0zNS42OCAyNy4xNi00NSAuMTctLjI5YzEwLjE0LTE3LjI2IDIwLjY2LTM0LjY4IDMxLjI3LTUxLjc4bDE4LjY5LTMwLjg3YzI0Ljg4LTQxLjE5IDQ0Ljg4LTcxLjIzIDc2LjQzLTExNC43NiAxNy0yMy40MyAzMy4xMi00NCA1OC42Ni03NS45MmwuMDYtLjA2IDEuMjYtMS41OS40OS0uNjNjMTAuMzctMTMuMjIgMjAuODQtMjYuMjUgMzEuMTEtMzguNzNsLjM0LS40Mi4yLS4yNWMyMy44My0yOS41MSA0OC4xMi01OS4xMyA3Mi4xOS04OGw5LjU3LTExLjQ4VjM1Ni41NEgxMjY3Yy05LjIzLTguNjgtMTguNjYtMTcuMy0yOC4wOC0yNS42OS03Ni4zMi02Ny43Mi0xNTIuNDMtMTIwLjg1LTIyNi4yNy0xNTcuNzktNzUuNzEtMzcuOTItMTQ1LjYzLTU3LjE0LTIwNy44LTU3LjE0LTQ0LjM5IDAtODQuMDYgOS45NC0xMTcuOTEgMjkuNTMtMzIuNTUgMTguODQtNTkuOSA0Ni45MS04MS4zMSA4My40NC0yMC4wNiAzNC4yMy0zNC44NCA3NS44OS00My45NSAxMjMuODEtMTcuNTQgOTIuMzctMTMuNzQgMjA4IDExIDMzNC4zNCAzLjEyIDE1LjkgNi41NiAzMiAxMC4yNSA0OC0xOS43NCA2LTM4LjkxIDEyLjE4LTU3LjEzIDE4LjUzLTExOS4yNiA0MS41OC0yMTkgOTUuOTEtMjg4LjQyIDE1Ny4xNC0zNiAzMS43MS02My44NCA2NS4yMy04Mi44OSA5OS42Mi0yMC4yNCAzNi41Ny0zMC41MSA3NC4wOC0zMC41MSAxMTEuNDkgMCA3NSA0MS41NSAxNTEgMTIwLjE1IDIxOS45NCA3NCA2NC45MyAxNzguNjUgMTIxLjYyIDMwMi41NSAxNjQgMTEuNTEgMy45MSAyMy4yMiA3LjcxIDM1IDExLjM0LTQuMTIgMTcuOTMtNy45MyAzNi0xMS4zNiA1NC0yMy41NiAxMjQuMDgtMjYuMzEgMjM3LjYyLTggMzI4LjM1IDkuNTEgNDcgMjQuNjEgODcuODkgNDQuODkgMTIxLjU3IDIxLjU2IDM1LjggNDguOTMgNjMuNDQgODEuMzQgODIuMTMgMzQuMTUgMTkuNjkgNzQuMzQgMjkuNjcgMTE5LjQ1IDI5LjY3IDYxLjQyIDAgMTMwLjA5LTE4LjIxIDIwNC4xMS01NC4xMyA3Mi41Ni0zNS4yMSAxNDYuNjMtODUuNjQgMjIwLjEzLTE0OS44OSAxMS4zMy05LjkgMjMtMjAuNDkgMzQuNjYtMzEuNTNoMTcuNDF2LTE3NC4zOWwtNi4zNC03LjgtMy0zLjY3LTc5LjgyLTk4LjU1LTQ0LjM1LTU0Ljc1Yy0yMi4zOS0yNy42NC01OC4yNS03OC43OS0xMDEtMTQ0LTM0LTUxLjg0LTU4Ljc2LTkzLjQ3LTcwLjUtMTEzLjYzbC0xLjI4LTIuMjFjLTIwLjQ5LTM1LjMzLTM1LjcxLTYzLjc5LTQ3LjkzLTg2LjY0LTE1LjMtMjguNjMtMzAuMzktNTcuODctNDQuOTEtODdsMi42Ni01LjE3em0tODAuODYtMTcyLjg5Yy0xMy41My0zNC43LTI1LjkyLTY5LjEzLTM3LTEwMi44MSAzNC41Ny03LjEzIDcwLjUxLTEzLjUzIDEwNy4zMi0xOS4xMS0xMi4yOCAyMC4xMS0yNC4zNCA0MC40MS0zNiA2MC42NHMtMjMuMTIgNDAuNjktMzQuMzIgNjEuMjh6bS0zOC4yNSA0NjIuMWMxMS40NS0zNC44NiAyNC4zMS03MC41NiAzOC4zOS0xMDYuNTkgMTEuMjkgMjAuNyAyMi44NyA0MS4zIDM0LjU4IDYxLjUzIDEyLjI3IDIxLjE5IDI1IDQyLjQ4IDM3Ljk1IDYzLjU4LTM4LjQ2LTUuMzItNzUuNjItMTEuNTMtMTEwLjkyLTE4LjUxek03MDcuMTggMzk3LjE2YzktNjEuNzQgMjkuMTQtMTA1Ljg3IDU1LjM3LTEyMS4wNiAxMC44OS02LjMxIDI1LjM0LTkuNSA0Mi45My05LjUgMzguNDcgMCA4OC4yNCAxNS4xIDE0My45MSA0My42NyA2MC4zNCAzMSAxMjUuNzcgNzcuMTEgMTg5LjIyIDEzMy40NXE1LjkgNS4yNCAxMi4wNyAxMC44OWMtNTUuODEgNjEuNzEtMTEwLjgxIDEzMC4yOC0xNjMuNjggMjA0LjEtOTAuMDggOC44LTE3Ni42OCAyMS45NC0yNTcuNzYgMzkuMTEtMi45My0xMi44NC01LjY4LTI1Ljc1LTguMi0zOC41bC0uMjQtMS4zMmMtMTkuMzMtOTguNzYtMjQuMDQtMTg5LTEzLjYyLTI2MC44NHptMTEuMzEgNzI3Yy0zOC4xIDg0LTcwLjQ4IDE2Ny4xNi05Ni4zNyAyNDcuNDYtOS0yLjgtMTcuODktNS43Mi0yNi42NS04LjctMTAzLTM1LjIxLTE4OC43OS04MC42Ni0yNDguMDgtMTMxLjQzLTQ1LjM3LTM4Ljg1LTcyLjQ1LTc5LjgzLTcyLjQ1LTEwOS42MyAwLTMwLjU5IDI3LjA5LTcwIDc0LjM0LTEwOC4yIDU1LTQ0LjQ3IDEzMy4yNy04NS4xMSAyMjYuMTktMTE3LjUgMTUuNzktNS40OCAzMS44Ny0xMC43MyA0OC0xNS42NCAyNS41MyA3OS4xMyA1Ny40OCAxNjAuOTkgOTUuMDEgMjQzLjYzem0uMTIgNDc0LjkyYzIuODYtMTUgNi0zMC4wOSA5LjQzLTQ1LjA5IDgwIDE2LjM3IDE2Ny41OSAyOC43MSAyNjAuNzUgMzYuNzEgNTMuMzggNzQuMzQgMTA4Ljg0IDE0My4zNyAxNjUuMDUgMjA1LjQ0LTYuOTQgNi4zOS0xMy45NCAxMi42OC0yMC45IDE4Ljc5LTgxLjM3IDcxLjEzLTE2My4wOSAxMjIuNTUtMjM2LjI4IDE0OC43MWwtMS41Mi41NGMtMzIuOCAxMS41OC02Mi4wOSAxNy40NS04NyAxNy40NS0xOC4zOCAwLTMzLjIyLTMuMTgtNDQuMTEtOS40Ni0yNi41MS0xNS4yOS00Ny4xNC01OC40Ni01Ni42LTExOC40NS0xMS4wNi02OS45MS03LjE5LTE1Ny45NyAxMS4xNy0yNTQuNjV6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgaWQ9Il9Hcm91cF8iIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgLz4KICA8cGF0aCBkPSJNMjE5NS4wNyAxMjA1LjFxLTU2LjI2LTEwMy40NS0xNjUuNTQtMTM0LjIzYTIuODUgMi44NSAwIDAgMS0xLjc5LTIuODUgMyAzIDAgMCAxIDEuMzctMi42OGM1NC4yNC0zMC4xNiA5NS45My03My4xMSAxMjUuMTUtMTI3LjlxNDQuMTUtODIuODkgNDQuMTYtMTk5LjQ5YzAtMTI4LjI1LTMyLjQ1LTIyMy42NS05Ny4wNi0yODcuMTFzLTE1MC42Mi05NS0yNTcuNy05NWgtNTc4LjM1Yy0xLjI1IDAtMi4yNyAxLjMxLTIuMjcgMi45M1YxODk0LjNjMCAxLjYyIDEgMi45MyAyLjI3IDIuOTNoNTQ2LjU3cTExNS40MiAwIDE5OS4xMS0zMy42OWM1NS45MS0yMi40MiAxMDEuNC01Mi42OCAxMzcuMjEtOTAuNjhzNjEuOTItODMuMzMgNzguNjYtMTM2YzE2Ljc0LTUyLjIzIDI1LjEtMTA4LjggMjUuMS0xNjkuMjQuMDQtMTA1LjM3LTE5LjA4LTE5Mi41Ny01Ni44OS0yNjIuNTJ6bS03MjIuMzItNjI4YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDMzOS40NmM1Ni45NSAwIDEwMC41MSAxNiAxMzAuNjUgNDcuNTVzNDUuMiA4Ni40IDQ1LjIgMTY0LjE4YzAgNjkuMTgtMTYuNzQgMTIxLjkyLTUwLjI1IDE1OS4wOHMtNzUuMzcgNTUuMzItMTI1LjYzIDU1LjMySDE0NzVjLTEuMjUgMC0yLjI3LTEuMzEtMi4yNy0yLjkzem01MTguMTYgMTAzNS44Yy0zNC44NiA0Mi43Ni04NC40MSA2NC0xNDguMDcgNjRIMTQ3NWMtMS4yNSAwLTIuMjctMS4zMS0yLjI3LTIuOTN2LTQ3Ni40YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDM2Ny44MmM2My42NiAwIDExMi41NyAxOS44OSAxNDguMDcgNjEuMzVzNTIuOTMgOTkuODIgNTIuOTMgMTc2LjNjLjAyIDc3Ljc3LTE3Ljc2IDEzOC4yNy01Mi45MSAxODAuNjF6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgLz48L3N2Zz4K"

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"styledNavbar":"NavMain-StyledNavbar-module--styled-navbar--3Q3h8"};

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"skipToContentLink":"NavMain-SkipToContentLink-module--skip-to-content-link--2GtSs sr-only sr-only-focusable bg-primary text-white px-4 py-2 mr-2"};

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"styledNavLink":"NavMain-StyledNavLink-module--styled-nav-link--3mHGK"};

/***/ })

}]);
//# sourceMappingURL=1-258a5f4c28e0e1ad7ec7.js.map