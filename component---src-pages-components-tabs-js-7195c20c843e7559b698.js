(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony import */ var _components_AriaAbbr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(439);
/* harmony import */ var _components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(302);
/* harmony import */ var _components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(319);
/* harmony import */ var _examples_Tabs_Controlled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(902);
/* harmony import */ var _examples_Tabs_Controlled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_examples_Tabs_Controlled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _examples_Tabs_LeftTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(903);
/* harmony import */ var _examples_Tabs_LeftTabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_examples_Tabs_LeftTabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _examples_Tabs_NoAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(904);
/* harmony import */ var _examples_Tabs_NoAnimation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_examples_Tabs_NoAnimation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _examples_Tabs_Uncontrolled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(905);
/* harmony import */ var _examples_Tabs_Uncontrolled__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_examples_Tabs_Uncontrolled__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(304);










/* harmony default export */ __webpack_exports__["default"] = (Object(_withLayout__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(function TabsSection(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    h: "2",
    id: "tabs"
  }, "Tabbed components"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Dynamic tabbed interfaces"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    h: "2",
    id: "tabs-examples"
  }, "Examples"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Create dynamic tabbed interfaces, as described in the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.w3.org/TR/wai-aria-practices/#tabpanel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr", {
    title: "Web Accessibility Initiative"
  }, "WAI"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AriaAbbr__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), ' ', "Authoring Practices"), ". ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Tabs"), " is a higher-level component for quickly creating a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Nav"), " matched with a set of ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "TabPane"), "s."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Tabs_Uncontrolled__WEBPACK_IMPORTED_MODULE_8___default.a,
    exampleClassName: "bs-example-tabs"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    h: "2",
    id: "tabs-controlled"
  }, "Controlled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Tabs"), " can be controlled directly when you want to handle the selection logic personally."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Tabs_Controlled__WEBPACK_IMPORTED_MODULE_5___default.a,
    exampleClassName: "bs-example-tabs"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    h: "2",
    id: "tabs-no-animation"
  }, "No animation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Set the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "transition"), " prop to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "false")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Tabs_NoAnimation__WEBPACK_IMPORTED_MODULE_7___default.a,
    exampleClassName: "bs-example-tabs"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    h: "2",
    id: "tabs-with-dropdown"
  }, "Dropdowns?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab\u2019s trigger element is not immediately visible (as it\u2019s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "That said, it Dropdowns do work technically (sans focus management), but we don't make any claims about support."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    h: "2",
    id: "tabs-custom-layout"
  }, "Custom Tab Layout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For more complex layouts the flexible ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "TabContainer"), ",", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "TabContent"), ", and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "TabPane"), " components along with any style of ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Nav"), " allow you to quickly piece together your own Tabs component with additional markup needed."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Create a set of NavItems each with an ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "eventKey"), ' ', "corresponding to the eventKey of a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "TabPane"), ". Wrap the whole thing in a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "TabContainer"), " and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactPlayground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    codeText: _examples_Tabs_LeftTabs__WEBPACK_IMPORTED_MODULE_6___default.a,
    exampleClassName: "bs-example-tabs"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LinkedHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    h: "2",
    id: "tabs-api"
  }, "API"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.Tabs
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.Tab
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.TabContainer
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.TabContent
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ComponentApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    metadata: data.TabPane
  }));
}));
var query = "268054633";

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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AriaAbbr; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AriaAbbr() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr", {
    title: "Accessible Rich Internet Applications"
  }, "ARIA");
}

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "class ControlledTabs extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = {\n      key: 'home',\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        id=\"controlled-tab-example\"\n        activeKey={this.state.key}\n        onSelect={key => this.setState({ key })}\n      >\n        <Tab eventKey=\"home\" title=\"Home\">\n          <Sonnet />\n        </Tab>\n        <Tab eventKey=\"profile\" title=\"Profile\">\n          <Sonnet />\n        </Tab>\n        <Tab eventKey=\"contact\" title=\"Contact\" disabled>\n          <Sonnet />\n        </Tab>\n      </Tabs>\n    );\n  }\n}\n\nrender(<ControlledTabs />);\n";

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<Tab.Container id=\"left-tabs-example\" defaultActiveKey=\"first\">\n  <Row>\n    <Col sm={3}>\n      <Nav variant=\"pills\" className=\"flex-column\">\n        <Nav.Item>\n          <Nav.Link eventKey=\"first\">Tab 1</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey=\"second\">Tab 2</Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </Col>\n    <Col sm={9}>\n      <Tab.Content>\n        <Tab.Pane eventKey=\"first\">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey=\"second\">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n";

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "<Tabs defaultActiveKey=\"home\" transition={false} id=\"noanim-tab-example\">\n  <Tab eventKey=\"home\" title=\"Home\">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey=\"profile\" title=\"Profile\">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey=\"contact\" title=\"Contact\" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n";

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "<Tabs defaultActiveKey=\"profile\" id=\"uncontrolled-tab-example\">\n  <Tab eventKey=\"home\" title=\"Home\">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey=\"profile\" title=\"Profile\">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey=\"contact\" title=\"Contact\" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-components-tabs-js-7195c20c843e7559b698.js.map