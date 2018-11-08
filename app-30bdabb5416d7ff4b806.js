(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(155);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.some.js
var es6_array_some = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/@reach/router/lib/utils.js
var utils = __webpack_require__(75);

// CONCATENATED MODULE: ./.cache/strip-prefix.js
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
/* harmony default export */ var strip_prefix = (function (str, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  if (str.substr(0, prefix.length) === prefix) return str.slice(prefix.length);
  return str;
});
// CONCATENATED MODULE: ./.cache/find-page.js


// TODO add tests especially for handling prefixed links.


var pageCache = {};
/* harmony default export */ var find_page = (function (pages, pathPrefix) {
  if (pathPrefix === void 0) {
    pathPrefix = "";
  }

  return function (rawPathname) {
    var pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

    var trimmedPathname = strip_prefix(pathname, pathPrefix); // Remove any hashfragment

    if (trimmedPathname.split("#").length > 1) {
      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
    } // Remove search query


    if (trimmedPathname.split("?").length > 1) {
      trimmedPathname = trimmedPathname.split("?").slice(0, -1).join("");
    }

    if (pageCache[trimmedPathname]) {
      return pageCache[trimmedPathname];
    }

    var foundPage; // Array.prototype.find is not supported in IE so we use this somewhat odd
    // work around.

    pages.some(function (page) {
      var pathToMatch = page.matchPath ? page.matchPath : page.path;

      if (Object(utils["match"])(pathToMatch, trimmedPathname)) {
        foundPage = page;
        pageCache[trimmedPathname] = page;
        return true;
      } // Finally, try and match request with default document.


      if (Object(utils["match"])(page.path + "index.html", trimmedPathname)) {
        foundPage = page;
        pageCache[trimmedPathname] = page;
        return true;
      }

      return false;
    });
    return foundPage;
  };
});
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(9);

// CONCATENATED MODULE: ./.cache/prefetch.js


var support = function support(feature) {
  if (typeof document === "undefined") {
    return false;
  }

  var fakeLink = document.createElement("link");

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === "function") {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }
};

var linkPrefetchStrategy = function linkPrefetchStrategy(url) {
  if (typeof document === "undefined") {
    return;
  }

  var link = document.createElement("link");
  link.setAttribute("rel", "prefetch");
  link.setAttribute("href", url);
  var parentElement = document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode;
  parentElement.appendChild(link);
};

var xhrPrefetchStrategy = function xhrPrefetchStrategy(url) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.withCredentials = true;
  req.send(null);
};

var supportedPrefetchStrategy = support("prefetch") ? linkPrefetchStrategy : xhrPrefetchStrategy;
var preFetched = {};
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var prefetch = function prefetch(url) {
  if (preFetched[url]) {
    return;
  }

  preFetched[url] = true;
  supportedPrefetchStrategy(url);
};

/* harmony default export */ var _cache_prefetch = (prefetch);
// CONCATENATED MODULE: ./.cache/loader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApiRunnerForLoader", function() { return setApiRunnerForLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });















var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

var prefetcher;
var devGetPageData;
var inInitialRender = true;
var hasFetched = Object.create(null);
var syncRequires = {};
var asyncRequires = {};
var jsonDataPaths = {};
var fetchHistory = [];
var fetchingPageResourceMapPromise = null;
var fetchedPageResourceMap = false;
var apiRunner;
var failedPaths = {};
var failedResources = {};
var MAX_HISTORY = 5;
var jsonPromiseStore = {};

if (false) {}
/**
 * Fetch resource map (pages data and paths to json files with results of
 *  queries)
 */


var fetchPageResourceMap = function fetchPageResourceMap() {
  if (!fetchingPageResourceMapPromise) {
    fetchingPageResourceMapPromise = new Promise(function (resolve) {
      asyncRequires.data().then(function (_ref) {
        var pages = _ref.pages,
            dataPaths = _ref.dataPaths;
        // TODO — expose proper way to access this data from plugins.
        // Need to come up with an API for plugins to access
        // site info.
        window.___dataPaths = dataPaths;
        queue.addPagesArray(pages);
        queue.addDataPaths(dataPaths);
        resolve(fetchedPageResourceMap = true);
      });
    });
  }

  return fetchingPageResourceMapPromise;
};

var createJsonURL = function createJsonURL(jsonName) {
  return "" + "/static/d/" + jsonName + ".json";
};

var createComponentUrls = function createComponentUrls(componentChunkName) {
  return window.___chunkMapping[componentChunkName].map(function (chunk) {
    return "" + chunk;
  });
};

var fetchResource = function fetchResource(resourceName) {
  // Find resource
  var resourceFunction;

  if (resourceName.slice(0, 12) === "component---") {
    resourceFunction = asyncRequires.components[resourceName];
  } else {
    if (resourceName in jsonPromiseStore) {
      resourceFunction = function resourceFunction() {
        return jsonPromiseStore[resourceName];
      };
    } else {
      resourceFunction = function resourceFunction() {
        var fetchPromise = new Promise(function (resolve, reject) {
          var url = createJsonURL(jsonDataPaths[resourceName]);
          var req = new XMLHttpRequest();
          req.open("GET", url, true);
          req.withCredentials = true;

          req.onreadystatechange = function () {
            if (req.readyState == 4) {
              if (req.status === 200) {
                resolve(JSON.parse(req.responseText));
              } else {
                reject();
              }
            }
          };

          req.send(null);
        });
        jsonPromiseStore[resourceName] = fetchPromise;
        return fetchPromise;
      };
    }
  } // Download the resource


  hasFetched[resourceName] = true;
  return new Promise(function (resolve) {
    var fetchPromise = resourceFunction();
    var failed = false;
    return fetchPromise.catch(function () {
      failed = true;
    }).then(function (component) {
      fetchHistory.push({
        resource: resourceName,
        succeeded: !failed
      });

      if (!failedResources[resourceName]) {
        failedResources[resourceName] = failed;
      }

      fetchHistory = fetchHistory.slice(-MAX_HISTORY);
      resolve(component);
    });
  });
};

var loader_prefetchResource = function prefetchResource(resourceName) {
  if (resourceName.slice(0, 12) === "component---") {
    createComponentUrls(resourceName).forEach(function (url) {
      return _cache_prefetch(url);
    });
  } else {
    var url = createJsonURL(jsonDataPaths[resourceName]);
    _cache_prefetch(url);
  }
};

var getResourceModule = function getResourceModule(resourceName) {
  return fetchResource(resourceName).then(preferDefault);
};

var appearsOnLine = function appearsOnLine() {
  var isOnLine = navigator.onLine;

  if (typeof isOnLine === "boolean") {
    return isOnLine;
  } // If no navigator.onLine support assume onLine if any of last N fetches succeeded


  var succeededFetch = fetchHistory.find(function (entry) {
    return entry.succeeded;
  });
  return !!succeededFetch;
};

var handleResourceLoadError = function handleResourceLoadError(path, message) {
  if (!failedPaths[path]) {
    failedPaths[path] = message;
  }

  if (appearsOnLine() && window.location.pathname.replace(/\/$/g, "") !== path.replace(/\/$/g, "")) {
    window.location.pathname = path;
  }
}; // Note we're not actively using the path data atm. There
// could be future optimizations however around trying to ensure
// we load all resources for likely-to-be-visited paths.
// let pathArray = []
// let pathCount = {}


var resourcesCount = Object.create(null);

var sortResourcesByCount = function sortResourcesByCount(a, b) {
  if (resourcesCount[a] > resourcesCount[b]) return 1;else if (resourcesCount[a] < resourcesCount[b]) return -1;else return 0;
};

var findPage;
var pathScriptsCache = {};
var prefetchTriggered = {};
var disableCorePrefetching = false;
var queue = {
  addPagesArray: function addPagesArray(newPages) {
    findPage = find_page(newPages, "");
  },
  addDevRequires: function addDevRequires(devRequires) {
    syncRequires = devRequires;
  },
  addProdRequires: function addProdRequires(prodRequires) {
    asyncRequires = prodRequires;
  },
  addDataPaths: function addDataPaths(dataPaths) {
    jsonDataPaths = dataPaths;
  },
  // Hovering on a link is a very strong indication the user is going to
  // click on it soon so let's start prefetching resources for this
  // pathname.
  hovering: function hovering(rawPath) {
    var path = strip_prefix(rawPath, "");
    queue.getResourcesForPathname(path);
  },
  enqueue: function enqueue(rawPath) {
    var path = strip_prefix(rawPath, "");
    if (!apiRunner) console.error("Run setApiRunnerForLoader() before enqueing paths"); // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.

    if (!prefetchTriggered[path]) {
      apiRunner("onPrefetchPathname", {
        pathname: path
      });
      prefetchTriggered[path] = true;
    } // If a plugin has disabled core prefetching, stop now.


    if (disableCorePrefetching.some(function (a) {
      return a;
    })) {
      return false;
    } // Check if the page exists.


    var page = findPage(path); // In production, we lazy load page metadata. If that
    // hasn't been fetched yet, start fetching it now.

    if ("production" === "production" && !page && !fetchedPageResourceMap) {
      // If page wasn't found check and we didn't fetch resources map for
      // all pages, wait for fetch to complete and try find page again
      return fetchPageResourceMap().then(function () {
        return queue.enqueue(rawPath);
      });
    }

    if (!page) {
      return false;
    }

    if (false) {} // Prefetch resources.


    if (true) {
      loader_prefetchResource(page.jsonName);
      loader_prefetchResource(page.componentChunkName);
    }

    return true;
  },
  getPage: function getPage(pathname) {
    return findPage(pathname);
  },
  getResourceURLsForPathname: function getResourceURLsForPathname(path) {
    var page = findPage(path);

    if (page) {
      return createComponentUrls(page.componentChunkName).concat([createJsonURL(jsonDataPaths[page.jsonName])]);
    } else {
      return null;
    }
  },
  getResourcesForPathnameSync: function getResourcesForPathnameSync(path) {
    var page = findPage(path);

    if (page) {
      return pathScriptsCache[page.path];
    } else {
      return null;
    }
  },
  // Get resources (code/data) for a path. Fetches metdata first
  // if necessary and then the code/data bundles. Used for prefetching
  // and getting resources for page changes.
  getResourcesForPathname: function getResourcesForPathname(path) {
    return new Promise(function (resolve, reject) {
      var doingInitialRender = inInitialRender;
      inInitialRender = false; // Production code path

      if (failedPaths[path]) {
        handleResourceLoadError(path, "Previously detected load failure for \"" + path + "\"");
        return reject();
      }

      var page = findPage(path); // In production, we lazy load page metadata. If that
      // hasn't been fetched yet, start fetching it now.

      if (!page && !fetchedPageResourceMap && "production" === "production") {
        // If page wasn't found check and we didn't fetch resources map for
        // all pages, wait for fetch to complete and try to get resources again
        return fetchPageResourceMap().then(function () {
          return resolve(queue.getResourcesForPathname(path));
        });
      }

      if (!page) {
        console.log("A page wasn't found for \"" + path + "\""); // Preload the custom 404 page when running `gatsby develop`

        if (path !== "/404.html" && "production" !== "production") {
          queue.getResourcesForPathname("/404.html");
        }

        return resolve();
      } // Use the path from the page so the pathScriptsCache uses
      // the normalized path.


      path = page.path; // Check if it's in the cache already.

      if (pathScriptsCache[path]) {
        emitter["a" /* default */].emit("onPostLoadPageResources", {
          page: page,
          pageResources: pathScriptsCache[path]
        });
        return resolve(pathScriptsCache[path]);
      } // Nope, we need to load resource(s)


      emitter["a" /* default */].emit("onPreLoadPageResources", {
        path: path
      }); // In development we know the code is loaded already
      // so we just return with it immediately.

      if (false) { var pageResources, _page; } else {
        Promise.all([getResourceModule(page.componentChunkName), getResourceModule(page.jsonName)]).then(function (_ref2) {
          var component = _ref2[0],
              json = _ref2[1];
          var pageResources = {
            component: component,
            json: json,
            page: page
          };
          pageResources.page.jsonURL = createJsonURL(jsonDataPaths[page.jsonName]);
          pathScriptsCache[path] = pageResources;
          resolve(pageResources);
          emitter["a" /* default */].emit("onPostLoadPageResources", {
            page: page,
            pageResources: pageResources
          });

          if (doingInitialRender) {
            // We got all resources needed for first mount,
            // we can fetch resoures for all pages.
            fetchPageResourceMap();
          }
        });
      }
    });
  }
};
var setApiRunnerForLoader = function setApiRunnerForLoader(runner) {
  apiRunner = runner;
  disableCorePrefetching = apiRunner("disableCorePrefetching");
};
var publicLoader = {
  getResourcesForPathname: queue.getResourcesForPathname,
  getResourceURLsForPathname: queue.getResourceURLsForPathname,
  getResourcesForPathnameSync: queue.getResourcesForPathnameSync
};
/* harmony default export */ var loader = __webpack_exports__["default"] = (queue);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(156)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);

__webpack_require__(78);

__webpack_require__(117);

__webpack_require__(52);

var plugins = __webpack_require__(153);

var _require$publicLoader = __webpack_require__(1).publicLoader,
    getResourcesForPathname = _require$publicLoader.getResourcesForPathname,
    getResourcesForPathnameSync = _require$publicLoader.getResourcesForPathnameSync,
    getResourceURLsForPathname = _require$publicLoader.getResourceURLsForPathname;

exports.apiRunner = function (api, args, defaultReturn, argTransform) {
  if (args === void 0) {
    args = {};
  }

  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    args.getResourcesForPathnameSync = getResourcesForPathnameSync;
    args.getResourcesForPathname = getResourcesForPathname;
    args.getResourceURLsForPathname = getResourceURLsForPathname;
    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result,
        plugin: plugin
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else if (defaultReturn) {
    return [defaultReturn];
  } else {
    return [];
  }
};

exports.apiRunnerAsync = function (api, args, defaultReturn) {
  return plugins.reduce(function (previous, next) {
    return next.plugin[api] ? previous.then(function () {
      return next.plugin[api](args, next.options);
    }) : previous;
  }, Promise.resolve());
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(59)('wks');
var uid = __webpack_require__(31);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(24);
var hide = __webpack_require__(15);
var redefine = __webpack_require__(18);
var ctx = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ var mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

// CONCATENATED MODULE: ./.cache/emitter.js

var emitter = mitt_es();
/* harmony default export */ var _cache_emitter = __webpack_exports__["a"] = (emitter);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(85);
var toPrimitive = __webpack_require__(58);
var dP = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(45);
module.exports = __webpack_require__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(179); // eslint-disable-line


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var hide = __webpack_require__(15);
var has = __webpack_require__(19);
var SRC = __webpack_require__(31)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(24).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(33);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54));

var _extends2 = _interopRequireDefault(__webpack_require__(130));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(66));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(46));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(23);

var _gatsby = __webpack_require__(65);

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isCurrent = _ref.isCurrent;

      if (isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    var location = props.location;
    _this.state = {
      IOSupported: IOSupported,
      location: location
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    this.props.innerRef && this.props.innerRef(ref);

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _gatsby.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        location = _this$props.location,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $ref = _this$props.ref,
        $innerRef = _this$props.innerRef,
        state = _this$props.state,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "location", "activeClassName", "activeStyle", "ref", "innerRef", "state"]);
    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        // eslint-disable-line
        _onMouseEnter && _onMouseEnter(e);

        ___loader.hovering((0, _gatsby.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        // eslint-disable-line
        _onClick && _onClick(e);

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Is this link pointing to a hash on the same page? If so,
          // just scroll there.

          var _parsePath = (0, _gatsby.parsePath)(prefixedTo),
              pathname = _parsePath.pathname,
              hash = _parsePath.hash;

          if (pathname === location.pathname || !pathname) {
            var element = hash ? document.getElementById(hash.substr(1)) : null;

            if (element !== null) {
              element.scrollIntoView();
            } else {
              // This is just a normal link to the current page so let's emulate default
              // browser behavior by scrolling now to the top of the page.
              window.scrollTo(0, 0);
            }
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          navigate(prefixedTo, {
            state: state
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  innerRef: _propTypes.default.func,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired // eslint-disable-next-line react/display-name

});

var withLocation = function withLocation(Comp) {
  return function (props) {
    return _react.default.createElement(_router.Location, null, function (_ref2) {
      var location = _ref2.location;
      return _react.default.createElement(Comp, (0, _extends2.default)({
        location: location
      }, props));
    });
  };
};

var _default = withLocation(GatsbyLink);

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(to, options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(to);
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(to);
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"push\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(46);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/warning/browser.js
var browser = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(16);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// EXTERNAL MODULE: ./.cache/create-react-context.js
var create_react_context = __webpack_require__(67);

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(94);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(30);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./node_modules/@reach/router/es/lib/utils.js


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var utils_pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : invariant_browser_default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var utils_match = function match(path, uri) {
  return utils_pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

////////////////////////////////////////////////////////////////////////////////

// CONCATENATED MODULE: ./node_modules/@reach/router/es/lib/history.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

////////////////////////////////////////////////////////////////////////////////
// createHistory(source) - wraps a history source
var getLocation = function getLocation(source) {
  return _extends({}, source.location, {
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  });
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener();
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      state = _extends({}, state, { key: Date.now() + "" });
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (fn) {
        return fn();
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var index = 0;
  var stack = [{ pathname: initialPathname, search: "" }];
  var states = [];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var history_navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////


// CONCATENATED MODULE: ./node_modules/@reach/router/es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return es_Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationProvider", function() { return es_LocationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return es_Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return es_Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return es_Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerLocation", function() { return es_ServerLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRedirect", function() { return isRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* concated harmony reexport createHistory */__webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* concated harmony reexport createMemorySource */__webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return createMemorySource; });
/* concated harmony reexport navigate */__webpack_require__.d(__webpack_exports__, "navigate", function() { return history_navigate; });
var es_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */










////////////////////////////////////////////////////////////////////////////////
// React polyfill
var unstable_deferredUpdates = react_dom_default.a.unstable_deferredUpdates;

if (unstable_deferredUpdates === undefined) {
  unstable_deferredUpdates = function unstable_deferredUpdates(fn) {
    return fn();
  };
}

var es_createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = Object(create_react_context["default"])(defaultValue);
  Ctx.Consumer.displayName = name + ".Consumer";
  Ctx.Provider.displayName = name + ".Provider";
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = es_createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var es_Location = function Location(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react_default.a.createElement(
        es_LocationProvider,
        null,
        children
      );
    }
  );
};

var es_LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        unstable_deferredUpdates(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return react_default.a.createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}(react_default.a.Component);

////////////////////////////////////////////////////////////////////////////////


es_LocationProvider.defaultProps = {
  history: globalHistory
};
 false ? undefined : void 0;
var es_ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;
  return react_default.a.createElement(
    LocationContext.Provider,
    {
      value: {
        location: { pathname: url },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};

////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = es_createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var es_Router = function Router(props) {
  return react_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react_default.a.createElement(
        es_Location,
        null,
        function (locationContext) {
          return react_default.a.createElement(es_RouterImpl, es_extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var es_RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react_default.a.Children.map(children, es_createRoute(basepath));
    var pathname = location.pathname;


    var match = utils_pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = es_extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = react_default.a.cloneElement(element, props, element.props.children ? react_default.a.createElement(
        es_Router,
        { primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? es_FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? es_extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react_default.a.createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        react_default.a.createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(react_default.a.PureComponent);

es_RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = es_createNamedContext("Focus");

var es_FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react_default.a.createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react_default.a.createElement(es_FocusHandlerImpl, es_extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var es_FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return es_extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return es_extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else {
        this.node.focus();
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$role = _props2.role,
        role = _props2$role === undefined ? "group" : _props2$role,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "role", "component", "uri", "location"]);

    return react_default.a.createElement(
      Comp,
      es_extends({
        style: es_extends({ outline: "none" }, style),
        tabIndex: "-1",
        role: role,
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react_default.a.createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}(react_default.a.Component);

Object(react_lifecycles_compat["polyfill"])(es_FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = react_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react_default.a.createElement(
        es_Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = resolve(to, baseuri);
          var isCurrent = location.pathname === href;
          var isPartiallyCurrent = startsWith(location.pathname, href);

          return react_default.a.createElement("a", es_extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                navigate(href, { state: state, replace: replace });
              }
            }
          }));
        }
      );
    }
  );
});

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var es_RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    Promise.resolve().then(function () {
      navigate(insertParams(to, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    if (!noThrow) redirectTo(insertParams(to, props));
    return null;
  };

  return RedirectImpl;
}(react_default.a.Component);

var es_Redirect = function Redirect(props) {
  return react_default.a.createElement(
    es_Location,
    null,
    function (locationContext) {
      return react_default.a.createElement(es_RedirectImpl, es_extends({}, locationContext, props));
    }
  );
};

 false ? undefined : void 0;

////////////////////////////////////////////////////////////////////////////////
var es_Match = function Match(_ref7) {
  var path = _ref7.path,
      children = _ref7.children;
  return react_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref8) {
      var baseuri = _ref8.baseuri;
      return react_default.a.createElement(
        es_Location,
        null,
        function (_ref9) {
          var navigate = _ref9.navigate,
              location = _ref9.location;

          var resolvedPath = resolve(path, baseuri);
          var result = utils_match(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? es_extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var es_createRoute = function createRoute(basepath) {
  return function (element) {
    !(element.props.path || element.props.default || element.type === es_Redirect) ?  false ? undefined : invariant_browser_default()(false) : void 0;

    !!(element.type === es_Redirect && (!element.props.from || !element.props.to)) ?  false ? undefined : invariant_browser_default()(false) : void 0;

    !!(element.type === es_Redirect && !validateRedirect(element.props.from, element.props.to)) ?  false ? undefined : invariant_browser_default()(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === es_Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(10);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(28);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(44)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(158);
} else {}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(20);
var IObject = __webpack_require__(49);
var toObject = __webpack_require__(48);
var toLength = __webpack_require__(42);
var asc = __webpack_require__(151);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(97);
var enumBugKeys = __webpack_require__(71);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return waitForRouteChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resolveRouteChangePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resetRouteChangePromise; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);

var resolve, promise;

var resetRouteChangePromise = function resetRouteChangePromise() {
  promise = new Promise(function (r) {
    resolve = r;
  });
};

resetRouteChangePromise();

var waitForRouteChange = function waitForRouteChange() {
  return promise;
};

var resolveRouteChangePromise = function resolveRouteChangePromise() {
  resolve(window.location);
}; // We need to set this function on the window
// so it's accessible to Cypress for tests.


if (typeof window !== "undefined") {
  window.___waitForRouteChange = waitForRouteChange;
}



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parsePath; });
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__);

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(22);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./.cache/loader.js + 3 modules
var loader = __webpack_require__(1);

// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/* harmony default export */ var es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(3);

// CONCATENATED MODULE: ./.cache/page-renderer.js









 // Pass pathname in as prop.
// component will try fetching resources. If they exist,
// will just render, else will render null.

var page_renderer_PageRenderer =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(PageRenderer, _React$Component);

  function PageRenderer(props) {
    var _this;

    _this = _React$Component.call(this) || this;
    var location = props.location; // Set the pathname for 404 pages.

    var pathname = _this.getPathName(location);

    _this.state = {
      lastPathname: location.pathname,
      pageResources: loader["default"].getResourcesForPathnameSync(pathname)
    };
    return _this;
  }

  PageRenderer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var pageResources = _ref.pageResources,
        location = _ref.location;
    var nextState = {
      lastPathname: location.pathname
    };

    if (false) {}

    if (prevState.lastPathname !== location.pathname) {
      var _pageResources = loader["default"].getResourcesForPathnameSync(location.pathname);

      if (_pageResources) {
        nextState.pageResources = _pageResources;
      }
    }

    return nextState;
  };

  var _proto = PageRenderer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Listen to events so when our page gets updated, we can transition.
    // This is only useful on delayed transitions as the page will get rendered
    // without the necessary page resources and then re-render once those come in.
    emitter["a" /* default */].on("onPostLoadPageResources", function (e) {
      var page = loader["default"].getPage(_this2.props.location.pathname);

      if (page && e.page.path === page.path) {
        _this2.setState({
          pageResources: e.pageResources
        });
      }
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this3 = this;

    if (prevProps === this.props) return;
    var location = this.props.location;
    var pathName = this.getPathName(location);
    if (!loader["default"].getResourcesForPathnameSync(pathName)) // Page resources won't be set in cases where the browser back button
      // or forward button is pushed as we can't wait as normal for resources
      // to load before changing the page.
      loader["default"].getResourcesForPathnameSync(pathName, function (pageResources) {
        // The page may have changed since we started this, in which case doesn't update
        if (_this3.props.location.pathname !== location.pathname) {
          return;
        }

        _this3.setState({
          pageResources: pageResources
        });
      });
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // 404
    if (!nextState.pageResources) {
      return true;
    } // Check if the component or json have changed.


    if (!this.state.pageResources && nextState.pageResources) {
      return true;
    }

    if (this.state.pageResources.component !== nextState.pageResources.component) {
      return true;
    }

    if (this.state.pageResources.json !== nextState.pageResources.json) {
      return true;
    } // Check if location has changed on a page using internal routing
    // via matchPath configuration.


    if (this.props.location.key !== nextProps.location.key && nextState.pageResources.page && (nextState.pageResources.page.matchPath || nextState.pageResources.page.path)) {
      return true;
    }

    return es(this, nextProps, nextState);
  };

  _proto.getPathName = function getPathName(location) {
    return !loader["default"].getPage(location.pathname) ? "/404.html" : location.pathname;
  };

  _proto.render = function render() {
    if (!(this.state.pageResources && this.state.pageResources.json) && "production" === "production") {
      // Try to load the page directly - this should result in a 404 or
      // network offline error.
      var url = new URL(window.location);

      if (url.search) {
        url.search += "&no-cache=1";
      } else {
        url.search = "?no-cache=1";
      }

      window.location.replace(url);
      return null;
    }

    var pathContext =  false ? undefined : this.state.pageResources.json.pageContext;

    var props = objectSpread_default()({}, this.props, this.state.pageResources.json, {
      pathContext: pathContext
    });

    var _apiRunner = Object(api_runner_browser["apiRunner"])("replaceComponentRenderer", {
      props: objectSpread_default()({}, this.props, {
        pageResources: this.state.pageResources
      }),
      loader: loader["publicLoader"]
    }),
        replacementElement = _apiRunner[0];

    var pageElement = replacementElement || Object(react["createElement"])(this.state.pageResources.component, props);
    var wrappedPage = Object(api_runner_browser["apiRunner"])("wrapPageElement", {
      element: pageElement,
      props: props
    }, pageElement, function (_ref2) {
      var result = _ref2.result;
      return {
        element: result,
        props: props
      };
    }).pop();
    return wrappedPage;
  };

  return PageRenderer;
}(react_default.a.Component);

page_renderer_PageRenderer.propTypes = {
  location: prop_types_default.a.object,
  pageResources: prop_types_default.a.object,
  pageContext: prop_types_default.a.object
};
/* harmony default export */ var page_renderer = __webpack_exports__["a"] = (page_renderer_PageRenderer);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(62);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(180);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(15);
var redefine = __webpack_require__(18);
var fails = __webpack_require__(10);
var defined = __webpack_require__(28);
var wks = __webpack_require__(4);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(32);
var global = __webpack_require__(6);
var ctx = __webpack_require__(20);
var classof = __webpack_require__(86);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(33);
var anInstance = __webpack_require__(60);
var forOf = __webpack_require__(61);
var speciesConstructor = __webpack_require__(144);
var task = __webpack_require__(87).set;
var microtask = __webpack_require__(146)();
var newPromiseCapabilityModule = __webpack_require__(89);
var perform = __webpack_require__(147);
var userAgent = __webpack_require__(148);
var promiseResolve = __webpack_require__(149);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(63)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(35)($Promise, PROMISE);
__webpack_require__(90)(PROMISE);
Wrapper = __webpack_require__(24)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(91)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11);
var dPs = __webpack_require__(163);
var enumBugKeys = __webpack_require__(71);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(57)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(88).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(5);
var $map = __webpack_require__(36)(1);

$export($export.P + $export.F * !__webpack_require__(26)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(110);
/* harmony import */ var react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Toc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(102);







var styles = __webpack_require__(209);

var Heading =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Heading, _React$Component);

  function Heading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Heading.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        h = _this$props.h,
        registerNode = _this$props.registerNode,
        id = _this$props.id,
        title = _this$props.title;
    if (!registerNode) return;
    registerNode(parseInt(h, 10), title, id);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        h = _this$props2.h,
        id = _this$props2.id,
        children = _this$props2.children,
        className = _this$props2.className;
    var H = "h" + h;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H, {
      id: id,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, styles.heading)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styles.inner
    }, children));
  };

  return Heading;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (react_context_toolbox_lib_mapContextToProps__WEBPACK_IMPORTED_MODULE_3___default()(_Toc__WEBPACK_IMPORTED_MODULE_5__[/* TocContext */ "a"], function (c) {
  return {
    registerNode: c.registerNode
  };
}, Heading));

/***/ }),
/* 54 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(125);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(44)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(24);
var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(32) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var call = __webpack_require__(141);
var isArrayIter = __webpack_require__(142);
var anObject = __webpack_require__(11);
var toLength = __webpack_require__(42);
var getIterFn = __webpack_require__(143);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(18);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _wait_for_route_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForRouteChange", function() { return _wait_for_route_change__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_5__["a"]; });







var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),
/* 66 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(82);
var step = __webpack_require__(96);
var Iterators = __webpack_require__(34);
var toIObject = __webpack_require__(27);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(69)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(32);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(18);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(34);
var $iterCreate = __webpack_require__(162);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(165);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(59)('keys');
var uid = __webpack_require__(31);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 72 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(31)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(16);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o, visited) {
			var type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = {};
					visited[_.util.objId(o)] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = [];
					visited[_.util.objId(o)] = clone;

					o.forEach(function (v, i) {
						clone[i] = _.util.clone(v, visited);
					});

					return clone;
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(81)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-pages-components-alerts-mdx": function componentSrcPagesComponentsAlertsMdx() {
    return Promise.all(/* import() | component---src-pages-components-alerts-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 235));
  },
  "component---src-pages-components-badge-mdx": function componentSrcPagesComponentsBadgeMdx() {
    return Promise.all(/* import() | component---src-pages-components-badge-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 236));
  },
  "component---src-pages-components-breadcrumb-mdx": function componentSrcPagesComponentsBreadcrumbMdx() {
    return Promise.all(/* import() | component---src-pages-components-breadcrumb-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 237));
  },
  "component---src-pages-components-button-group-mdx": function componentSrcPagesComponentsButtonGroupMdx() {
    return Promise.all(/* import() | component---src-pages-components-button-group-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, 238));
  },
  "component---src-pages-components-buttons-mdx": function componentSrcPagesComponentsButtonsMdx() {
    return Promise.all(/* import() | component---src-pages-components-buttons-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, 239));
  },
  "component---src-pages-components-cards-mdx": function componentSrcPagesComponentsCardsMdx() {
    return Promise.all(/* import() | component---src-pages-components-cards-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, 240));
  },
  "component---src-pages-components-carousel-mdx": function componentSrcPagesComponentsCarouselMdx() {
    return Promise.all(/* import() | component---src-pages-components-carousel-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 241));
  },
  "component---src-pages-components-dropdowns-mdx": function componentSrcPagesComponentsDropdownsMdx() {
    return Promise.all(/* import() | component---src-pages-components-dropdowns-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, 242));
  },
  "component---src-pages-components-figures-js": function componentSrcPagesComponentsFiguresJs() {
    return Promise.all(/* import() | component---src-pages-components-figures-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, 243));
  },
  "component---src-pages-components-forms-js": function componentSrcPagesComponentsFormsJs() {
    return Promise.all(/* import() | component---src-pages-components-forms-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, 244));
  },
  "component---src-pages-components-images-js": function componentSrcPagesComponentsImagesJs() {
    return Promise.all(/* import() | component---src-pages-components-images-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 245));
  },
  "component---src-pages-components-input-group-js": function componentSrcPagesComponentsInputGroupJs() {
    return Promise.all(/* import() | component---src-pages-components-input-group-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, 246));
  },
  "component---src-pages-components-jumbotron-js": function componentSrcPagesComponentsJumbotronJs() {
    return Promise.all(/* import() | component---src-pages-components-jumbotron-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, 247));
  },
  "component---src-pages-components-list-group-mdx": function componentSrcPagesComponentsListGroupMdx() {
    return Promise.all(/* import() | component---src-pages-components-list-group-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, 248));
  },
  "component---src-pages-components-modal-js": function componentSrcPagesComponentsModalJs() {
    return Promise.all(/* import() | component---src-pages-components-modal-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, 249));
  },
  "component---src-pages-components-navbar-js": function componentSrcPagesComponentsNavbarJs() {
    return Promise.all(/* import() | component---src-pages-components-navbar-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, 250));
  },
  "component---src-pages-components-navs-mdx": function componentSrcPagesComponentsNavsMdx() {
    return Promise.all(/* import() | component---src-pages-components-navs-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, 251));
  },
  "component---src-pages-components-overlays-js": function componentSrcPagesComponentsOverlaysJs() {
    return Promise.all(/* import() | component---src-pages-components-overlays-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, 252));
  },
  "component---src-pages-components-pagination-js": function componentSrcPagesComponentsPaginationJs() {
    return Promise.all(/* import() | component---src-pages-components-pagination-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, 253));
  },
  "component---src-pages-components-progress-js": function componentSrcPagesComponentsProgressJs() {
    return Promise.all(/* import() | component---src-pages-components-progress-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, 254));
  },
  "component---src-pages-components-table-js": function componentSrcPagesComponentsTableJs() {
    return Promise.all(/* import() | component---src-pages-components-table-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, 255));
  },
  "component---src-pages-components-tabs-js": function componentSrcPagesComponentsTabsJs() {
    return Promise.all(/* import() | component---src-pages-components-tabs-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, 256));
  },
  "component---src-pages-getting-started-introduction-mdx": function componentSrcPagesGettingStartedIntroductionMdx() {
    return Promise.all(/* import() | component---src-pages-getting-started-introduction-mdx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, 257));
  },
  "component---src-pages-getting-started-support-mdx": function componentSrcPagesGettingStartedSupportMdx() {
    return Promise.all(/* import() | component---src-pages-getting-started-support-mdx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, 258));
  },
  "component---src-pages-getting-started-theming-js": function componentSrcPagesGettingStartedThemingJs() {
    return Promise.all(/* import() | component---src-pages-getting-started-theming-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, 259));
  },
  "component---src-pages-index-js": function componentSrcPagesIndexJs() {
    return Promise.all(/* import() | component---src-pages-index-js */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, 260));
  },
  "component---src-pages-layout-grid-js": function componentSrcPagesLayoutGridJs() {
    return Promise.all(/* import() | component---src-pages-layout-grid-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, 261));
  },
  "component---src-pages-layout-media-js": function componentSrcPagesLayoutMediaJs() {
    return Promise.all(/* import() | component---src-pages-layout-media-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, 262));
  },
  "component---src-pages-migrating-mdx": function componentSrcPagesMigratingMdx() {
    return Promise.all(/* import() | component---src-pages-migrating-mdx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, 263));
  },
  "component---src-pages-utilities-react-overlays-js": function componentSrcPagesUtilitiesReactOverlaysJs() {
    return Promise.all(/* import() | component---src-pages-utilities-react-overlays-js */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, 264));
  },
  "component---src-pages-utilities-responsive-embed-js": function componentSrcPagesUtilitiesResponsiveEmbedJs() {
    return Promise.all(/* import() | component---src-pages-utilities-responsive-embed-js */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, 265));
  },
  "component---src-pages-utilities-transitions-mdx": function componentSrcPagesUtilitiesTransitionsMdx() {
    return Promise.all(/* import() | component---src-pages-utilities-transitions-mdx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, 266));
  }
};

exports.data = function () {
  return __webpack_require__.e(/* import() */ 38).then(__webpack_require__.t.bind(null, 267, 3));
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(5);
var $reduce = __webpack_require__(150);

$export($export.P + $export.F * !__webpack_require__(26)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(68);
var getKeys = __webpack_require__(37);
var redefine = __webpack_require__(18);
var global = __webpack_require__(6);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(34);
var wks = __webpack_require__(4);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_5__);







var styles = __webpack_require__(220);

var Anchor =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Anchor, _React$Component);

  function Anchor() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Anchor.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$as = _this$props.as,
        Tag = _this$props$as === void 0 ? 'span' : _this$props$as,
        className = _this$props.className;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, styles.wrapper)
    }, this.props.children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#" + this.props.target,
      className: styles.anchor,
      "aria-hidden": true
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      "aria-hidden": true
    }, "#")));
  };

  return Anchor;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Anchor.propTypes = {
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Anchor);

/***/ }),
/* 81 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(4)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(15)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(27);
var toLength = __webpack_require__(42);
var toAbsoluteIndex = __webpack_require__(164);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(44)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(57)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var invoke = __webpack_require__(145);
var html = __webpack_require__(88);
var cel = __webpack_require__(57);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(25)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(33);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(13);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

exports.polyfill = function (Component) {
  return Component;
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(161));
} else {}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(27);
var arrayIndexOf = __webpack_require__(83)(false);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(166)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(69)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(5);
var $some = __webpack_require__(36)(3);

$export($export.P + $export.F * !__webpack_require__(26)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDXComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactContext2 = __webpack_require__(67);

var _createReactContext3 = _interopRequireDefault(_createReactContext2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _createReactContext = (0, _createReactContext3.default)({}),
    Provider = _createReactContext.Provider,
    Consumer = _createReactContext.Consumer;

var withMDXComponents = function withMDXComponents(Component) {
  return function (_ref) {
    var components = _ref.components,
        props = _objectWithoutProperties(_ref, ['components']);

    return _react2.default.createElement(
      Consumer,
      null,
      function (contextComponents) {
        return _react2.default.createElement(Component, _extends({ components: components || contextComponents }, props));
      }
    );
  };
};

exports.withMDXComponents = withMDXComponents;
var MDXProvider = function MDXProvider(_ref2) {
  var components = _ref2.components,
      children = _ref2.children;
  return _react2.default.createElement(
    Provider,
    { value: components },
    children
  );
};

MDXProvider.propTypes = {
  components: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = MDXProvider;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TocContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TocProvider; });
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(196);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(202);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony import */ var css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_10__);











var TocContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext();
var SidePanel = Object(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_10__["styled"])('div', "SidePanel", __webpack_require__(205), "side-panel", "sidePanel");
var ListItem = Object(css_literal_loader_styled__WEBPACK_IMPORTED_MODULE_10__["styled"])('li', "ListItem", __webpack_require__(207), "list-item", "listItem");
var propTypes = {};

function toTree(list) {
  var map = {};
  var root = {
    children: []
  };
  var parents = [];
  var last = null; // eslint-disable-next-line

  for (var _iterator = list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var item = _ref;
    if (last && item.level > last.level) parents.push(last);
    if (last && item.level < last.level) parents.pop();
    last = item;
    var parent = parents[parents.length - 1];
    map[item.id] = map[item.id] || [];
    item.children = map[item.id];

    if (parent) {
      map[parent.id] = map[parent.id] || [];
      map[parent.id].push(item);
    } else root.children.push(item);
  }

  return root;
}
/* eslint-disable react/no-unused-state */


var TocProvider =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(TocProvider, _React$Component);

  function TocProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleRegisterNode = function (level, title, id) {
      if (level === 1) return;

      _this.list.set(id, {
        level: level,
        title: title,
        id: id
      });

      cancelAnimationFrame(_this.rafHandle);
      _this.rafHandle = requestAnimationFrame(function () {
        _this.setState({
          tree: toTree(_this.list.values())
        });
      });
    };

    _this.list = new Map();
    _this.state = {
      tree: {
        children: []
      },
      registerNode: _this.handleRegisterNode
    };
    return _this;
  }

  var _proto = TocProvider.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TocContext.Provider, {
      value: this.state
    }, this.props.children);
  };

  return TocProvider;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);
/* eslint-enable react/no-unused-state */

TocProvider.propTypes = propTypes;

function renderNode(root) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, root.title && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
    href: "#" + root.id
  }, root.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
    className: "list-unstyled"
  }, root.children.map(function (item, idx) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ListItem, {
      key: idx,
      level: item.level
    }, renderNode(item));
  })));
}

function Toc(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SidePanel, props, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TocContext.Consumer, null, function (c) {
    return renderNode(c.tree);
  }));
}

/* harmony default export */ __webpack_exports__["c"] = (Toc);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(51);
var createDesc = __webpack_require__(45);
var toIObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(58);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(85);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(24);
var LIBRARY = __webpack_require__(32);
var wksExt = __webpack_require__(106);
var defineProperty = __webpack_require__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(97);
var hiddenKeys = __webpack_require__(71).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(0);

var _setDisplayName = _interopRequireDefault(__webpack_require__(137));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(138));

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };

    if (false) {}

    return MapProps;
  };
};

var _default = mapProps;
exports.default = _default;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mapContextToProps;

var _react = _interopRequireDefault(__webpack_require__(0));

var _forwardRef = _interopRequireDefault(__webpack_require__(178));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDisplayName = function getDisplayName(Component) {
  var name = typeof Component === 'string' ? Component : Component.name || Component.displayName;
  return name ? "ContextTransform(" + name + ")" : 'ContextTransform';
};

function $mapContextToProps(_ref, Component) {
  var maybeArrayOfConsumers = _ref.consumers,
      mapToProps = _ref.mapToProps,
      displayName = _ref.displayName,
      _ref$forwardRefAs = _ref.forwardRefAs,
      forwardRefAs = _ref$forwardRefAs === void 0 ? 'ref' : _ref$forwardRefAs;
  var consumers = maybeArrayOfConsumers;

  if (!Array.isArray(maybeArrayOfConsumers)) {
    consumers = [maybeArrayOfConsumers];
  }

  var SingleConsumer = consumers[0];

  function singleRender(props, ref) {
    var _extends2;

    var propsWithRef = _extends((_extends2 = {}, _extends2[forwardRefAs] = ref, _extends2), props);

    return _react.default.createElement(SingleConsumer, null, function (value) {
      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps(value, props)));
    });
  }

  function multiRender(props, ref) {
    var _extends3;

    var propsWithRef = _extends((_extends3 = {}, _extends3[forwardRefAs] = ref, _extends3), props);

    return consumers.reduceRight(function (inner, Consumer) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _react.default.createElement(Consumer, null, function (value) {
          return inner.apply(void 0, args.concat([value]));
        });
      };
    }, function () {
      for (var _len2 = arguments.length, contexts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        contexts[_key2] = arguments[_key2];
      }

      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps.apply(void 0, contexts.concat([props]))));
    })();
  }

  var contextTransform = consumers.length === 1 ? singleRender : multiRender;
  return (0, _forwardRef.default)(contextTransform, {
    displayName: displayName || getDisplayName(Component)
  });
}

function mapContextToProps(maybeOpts, mapToProps, Component) {
  if (arguments.length === 2) return $mapContextToProps(maybeOpts, mapToProps);
  return $mapContextToProps({
    consumers: maybeOpts,
    mapToProps: mapToProps
  }, Component);
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

var _ScrollBehaviorContext = _interopRequireDefault(__webpack_require__(222));

var _ScrollContainer = _interopRequireDefault(__webpack_require__(232));

exports.ScrollContainer = _ScrollContainer.default;
exports.ScrollContext = _ScrollBehaviorContext.default;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition()
  else {}

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});


/***/ }),
/* 113 */
/***/ (function(module) {

module.exports = [{"fromPath":"/components/tooltips/","isPermanent":true,"redirectInBrowser":true,"toPath":"/components/overlays/#tooltips"},{"fromPath":"/components/popovers/","isPermanent":true,"redirectInBrowser":true,"toPath":"/components/overlays/#popovers"}];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(127),
    isObjectLike = __webpack_require__(126);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(187),
    deburr = __webpack_require__(188),
    words = __webpack_require__(191);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(5);
var $filter = __webpack_require__(36)(2);

$export($export.P + $export.F * !__webpack_require__(26)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(5);
var $forEach = __webpack_require__(36)(0);
var STRICT = __webpack_require__(26)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(44)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(131);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(43),
    upperFirst = __webpack_require__(134);

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(5);

$export($export.S, 'Array', { isArray: __webpack_require__(64) });


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);




function LinkedHeading(_ref) {
  var h = _ref.h,
      id = _ref.id,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    h: h,
    id: id,
    title: children
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Anchor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    target: id
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkedHeading);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdxTag = __webpack_require__(176);

Object.defineProperty(exports, 'MDXTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxTag).default;
  }
});

var _mdxProvider = __webpack_require__(100);

Object.defineProperty(exports, 'MDXProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 124 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(133);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(55),
    getRawTag = __webpack_require__(181),
    objectToString = __webpack_require__(182);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(22);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(54);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/css-literal-loader/styled.js
var styled = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/recompose/mapProps.js
var mapProps = __webpack_require__(108);
var mapProps_default = /*#__PURE__*/__webpack_require__.n(mapProps);

// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-core.js
var prism_core = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-clike.js
var prism_clike = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-javascript.js
var prism_javascript = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-markup.js
var prism_markup = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-jsx.js
var prism_jsx = __webpack_require__(216);

// CONCATENATED MODULE: ./node_modules/common-tags/es/TemplateTag/TemplateTag.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */
var TemplateTag = function () {
  /**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */
  function TemplateTag() {
    var _this = this;

    for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
      transformers[_key] = arguments[_key];
    }

    _classCallCheck(this, TemplateTag);

    this.tag = function (strings) {
      for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        expressions[_key2 - 1] = arguments[_key2];
      }

      if (typeof strings === 'function') {
        // if the first argument passed is a function, assume it is a template tag and return
        // an intermediary tag that processes the template using the aforementioned tag, passing the
        // result to our tag
        return _this.interimTag.bind(_this, strings);
      }

      if (typeof strings === 'string') {
        // if the first argument passed is a string, just transform it
        return _this.transformEndResult(strings);
      }

      // else, return a transformed end result of processing the template with our tag
      strings = strings.map(_this.transformString.bind(_this));
      return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
    };

    // if first argument is an array, extrude it as a list of transformers
    if (transformers.length > 0 && Array.isArray(transformers[0])) {
      transformers = transformers[0];
    }

    // if any transformers are functions, this means they are not initiated - automatically initiate them
    this.transformers = transformers.map(function (transformer) {
      return typeof transformer === 'function' ? transformer() : transformer;
    });

    // return an ES2015 template tag
    return this.tag;
  }

  /**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*}                            ...expressions - Optional list of substitution values.
   * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
   */


  _createClass(TemplateTag, [{
    key: 'interimTag',


    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function interimTag(previousTag, template) {
      for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        substitutions[_key3 - 2] = arguments[_key3];
      }

      return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
    }

    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */

  }, {
    key: 'processSubstitutions',
    value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
      var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
      return ''.concat(resultSoFar, substitution, remainingPart);
    }

    /**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */

  }, {
    key: 'transformString',
    value: function transformString(str) {
      var cb = function cb(res, transform) {
        return transform.onString ? transform.onString(res) : res;
      };
      return this.transformers.reduce(cb, str);
    }

    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */

  }, {
    key: 'transformSubstitution',
    value: function transformSubstitution(substitution, resultSoFar) {
      var cb = function cb(res, transform) {
        return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
      };
      return this.transformers.reduce(cb, substitution);
    }

    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */

  }, {
    key: 'transformEndResult',
    value: function transformEndResult(endResult) {
      var cb = function cb(res, transform) {
        return transform.onEndResult ? transform.onEndResult(res) : res;
      };
      return this.transformers.reduce(cb, endResult);
    }
  }]);

  return TemplateTag;
}();

/* harmony default export */ var TemplateTag_TemplateTag = (TemplateTag);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZW1wbGF0ZVRhZy9UZW1wbGF0ZVRhZy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyYW5zZm9ybWVycyIsInRhZyIsInN0cmluZ3MiLCJleHByZXNzaW9ucyIsImludGVyaW1UYWciLCJiaW5kIiwidHJhbnNmb3JtRW5kUmVzdWx0IiwibWFwIiwidHJhbnNmb3JtU3RyaW5nIiwicmVkdWNlIiwicHJvY2Vzc1N1YnN0aXR1dGlvbnMiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmFuc2Zvcm1lciIsInByZXZpb3VzVGFnIiwidGVtcGxhdGUiLCJzdWJzdGl0dXRpb25zIiwicmVzdWx0U29GYXIiLCJyZW1haW5pbmdQYXJ0Iiwic3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtU3Vic3RpdHV0aW9uIiwic2hpZnQiLCJjb25jYXQiLCJzdHIiLCJjYiIsInJlcyIsInRyYW5zZm9ybSIsIm9uU3RyaW5nIiwib25TdWJzdGl0dXRpb24iLCJlbmRSZXN1bHQiLCJvbkVuZFJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUlxQkEsVztBQUNuQjs7Ozs7O0FBTUEseUJBQTZCO0FBQUE7O0FBQUEsc0NBQWRDLFlBQWM7QUFBZEEsa0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxTQXVCN0JDLEdBdkI2QixHQXVCdkIsVUFBQ0MsT0FBRCxFQUE2QjtBQUFBLHlDQUFoQkMsV0FBZ0I7QUFBaEJBLG1CQUFnQjtBQUFBOztBQUNqQyxVQUFJLE9BQU9ELE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZUFBTyxNQUFLRSxVQUFMLENBQWdCQyxJQUFoQixRQUEyQkgsT0FBM0IsQ0FBUDtBQUNEOztBQUVELFVBQUksT0FBT0EsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQjtBQUNBLGVBQU8sTUFBS0ksa0JBQUwsQ0FBd0JKLE9BQXhCLENBQVA7QUFDRDs7QUFFRDtBQUNBQSxnQkFBVUEsUUFBUUssR0FBUixDQUFZLE1BQUtDLGVBQUwsQ0FBcUJILElBQXJCLE9BQVosQ0FBVjtBQUNBLGFBQU8sTUFBS0Msa0JBQUwsQ0FDTEosUUFBUU8sTUFBUixDQUFlLE1BQUtDLG9CQUFMLENBQTBCTCxJQUExQixRQUFxQ0YsV0FBckMsQ0FBZixDQURLLENBQVA7QUFHRCxLQXpDNEI7O0FBQzNCO0FBQ0EsUUFBSUgsYUFBYVcsTUFBYixHQUFzQixDQUF0QixJQUEyQkMsTUFBTUMsT0FBTixDQUFjYixhQUFhLENBQWIsQ0FBZCxDQUEvQixFQUErRDtBQUM3REEscUJBQWVBLGFBQWEsQ0FBYixDQUFmO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLQSxZQUFMLEdBQW9CQSxhQUFhTyxHQUFiLENBQWlCLHVCQUFlO0FBQ2xELGFBQU8sT0FBT08sV0FBUCxLQUF1QixVQUF2QixHQUFvQ0EsYUFBcEMsR0FBb0RBLFdBQTNEO0FBQ0QsS0FGbUIsQ0FBcEI7O0FBSUE7QUFDQSxXQUFPLEtBQUtiLEdBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7Ozs7Ozs7OytCQVFXYyxXLEVBQWFDLFEsRUFBNEI7QUFBQSx5Q0FBZkMsYUFBZTtBQUFmQSxxQkFBZTtBQUFBOztBQUNsRCxhQUFPLEtBQUtoQixHQUFaLGtCQUFrQmMsOEJBQVlDLFFBQVosU0FBeUJDLGFBQXpCLEVBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3lDQVFxQkEsYSxFQUFlQyxXLEVBQWFDLGEsRUFBZTtBQUM5RCxVQUFNQyxlQUFlLEtBQUtDLHFCQUFMLENBQ25CSixjQUFjSyxLQUFkLEVBRG1CLEVBRW5CSixXQUZtQixDQUFyQjtBQUlBLGFBQU8sR0FBR0ssTUFBSCxDQUFVTCxXQUFWLEVBQXVCRSxZQUF2QixFQUFxQ0QsYUFBckMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBTWdCSyxHLEVBQUs7QUFDbkIsVUFBTUMsS0FBSyxTQUFMQSxFQUFLLENBQUNDLEdBQUQsRUFBTUMsU0FBTjtBQUFBLGVBQ1RBLFVBQVVDLFFBQVYsR0FBcUJELFVBQVVDLFFBQVYsQ0FBbUJGLEdBQW5CLENBQXJCLEdBQStDQSxHQUR0QztBQUFBLE9BQVg7QUFFQSxhQUFPLEtBQUsxQixZQUFMLENBQWtCUyxNQUFsQixDQUF5QmdCLEVBQXpCLEVBQTZCRCxHQUE3QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MENBT3NCSixZLEVBQWNGLFcsRUFBYTtBQUMvQyxVQUFNTyxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsR0FBRCxFQUFNQyxTQUFOO0FBQUEsZUFDVEEsVUFBVUUsY0FBVixHQUNJRixVQUFVRSxjQUFWLENBQXlCSCxHQUF6QixFQUE4QlIsV0FBOUIsQ0FESixHQUVJUSxHQUhLO0FBQUEsT0FBWDtBQUlBLGFBQU8sS0FBSzFCLFlBQUwsQ0FBa0JTLE1BQWxCLENBQXlCZ0IsRUFBekIsRUFBNkJMLFlBQTdCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3VDQU1tQlUsUyxFQUFXO0FBQzVCLFVBQU1MLEtBQUssU0FBTEEsRUFBSyxDQUFDQyxHQUFELEVBQU1DLFNBQU47QUFBQSxlQUNUQSxVQUFVSSxXQUFWLEdBQXdCSixVQUFVSSxXQUFWLENBQXNCTCxHQUF0QixDQUF4QixHQUFxREEsR0FENUM7QUFBQSxPQUFYO0FBRUEsYUFBTyxLQUFLMUIsWUFBTCxDQUFrQlMsTUFBbEIsQ0FBeUJnQixFQUF6QixFQUE2QkssU0FBN0IsQ0FBUDtBQUNEOzs7Ozs7ZUFuSGtCL0IsVyIsImZpbGUiOiJUZW1wbGF0ZVRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIFRlbXBsYXRlVGFnXG4gKiBAY2xhc3NkZXNjIENvbnN1bWVzIGEgcGlwZWxpbmUgb2YgY29tcG9zYWJsZSB0cmFuc2Zvcm1lciBwbHVnaW5zIGFuZCBwcm9kdWNlcyBhIHRlbXBsYXRlIHRhZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVUYWcge1xuICAvKipcbiAgICogY29uc3RydWN0cyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBAY29uc3RydWN0cyBUZW1wbGF0ZVRhZ1xuICAgKiBAcGFyYW0gIHsuLi5PYmplY3R9IFsuLi50cmFuc2Zvcm1lcnNdIC0gYW4gYXJyYXkgb3IgYXJndW1lbnRzIGxpc3Qgb2YgdHJhbnNmb3JtZXJzXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICAgICAgLSBhIHRlbXBsYXRlIHRhZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4udHJhbnNmb3JtZXJzKSB7XG4gICAgLy8gaWYgZmlyc3QgYXJndW1lbnQgaXMgYW4gYXJyYXksIGV4dHJ1ZGUgaXQgYXMgYSBsaXN0IG9mIHRyYW5zZm9ybWVyc1xuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KHRyYW5zZm9ybWVyc1swXSkpIHtcbiAgICAgIHRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVyc1swXTtcbiAgICB9XG5cbiAgICAvLyBpZiBhbnkgdHJhbnNmb3JtZXJzIGFyZSBmdW5jdGlvbnMsIHRoaXMgbWVhbnMgdGhleSBhcmUgbm90IGluaXRpYXRlZCAtIGF1dG9tYXRpY2FsbHkgaW5pdGlhdGUgdGhlbVxuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLm1hcCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nID8gdHJhbnNmb3JtZXIoKSA6IHRyYW5zZm9ybWVyO1xuICAgIH0pO1xuXG4gICAgLy8gcmV0dXJuIGFuIEVTMjAxNSB0ZW1wbGF0ZSB0YWdcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhbGwgdHJhbnNmb3JtZXJzIHRvIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWdnZWQgd2l0aCB0aGlzIG1ldGhvZC5cbiAgICogSWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCBhc3N1bWVzIHRoZSBmdW5jdGlvbiBpcyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBhbmQgYXBwbGllcyBpdCB0byB0aGUgdGVtcGxhdGUsIHJldHVybmluZyBhIHRlbXBsYXRlIHRhZy5cbiAgICogQHBhcmFtICB7KEZ1bmN0aW9ufFN0cmluZ3xBcnJheTxTdHJpbmc+KX0gc3RyaW5ncyAgICAgICAgLSBFaXRoZXIgYSB0ZW1wbGF0ZSB0YWcgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0ZW1wbGF0ZSBzdHJpbmdzIHNlcGFyYXRlZCBieSBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmV4cHJlc3Npb25zIC0gT3B0aW9uYWwgbGlzdCBvZiBzdWJzdGl0dXRpb24gdmFsdWVzLlxuICAgKiBAcmV0dXJuIHsoU3RyaW5nfEZ1bmN0aW9uKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIEVpdGhlciBhbiBpbnRlcm1lZGlhcnkgdGFnIGZ1bmN0aW9uIG9yIHRoZSByZXN1bHRzIG9mIHByb2Nlc3NpbmcgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgdGFnID0gKHN0cmluZ3MsIC4uLmV4cHJlc3Npb25zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCBpcyBhIHRlbXBsYXRlIHRhZyBhbmQgcmV0dXJuXG4gICAgICAvLyBhbiBpbnRlcm1lZGlhcnkgdGFnIHRoYXQgcHJvY2Vzc2VzIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUgYWZvcmVtZW50aW9uZWQgdGFnLCBwYXNzaW5nIHRoZVxuICAgICAgLy8gcmVzdWx0IHRvIG91ciB0YWdcbiAgICAgIHJldHVybiB0aGlzLmludGVyaW1UYWcuYmluZCh0aGlzLCBzdHJpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgc3RyaW5nLCBqdXN0IHRyYW5zZm9ybSBpdFxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRW5kUmVzdWx0KHN0cmluZ3MpO1xuICAgIH1cblxuICAgIC8vIGVsc2UsIHJldHVybiBhIHRyYW5zZm9ybWVkIGVuZCByZXN1bHQgb2YgcHJvY2Vzc2luZyB0aGUgdGVtcGxhdGUgd2l0aCBvdXIgdGFnXG4gICAgc3RyaW5ncyA9IHN0cmluZ3MubWFwKHRoaXMudHJhbnNmb3JtU3RyaW5nLmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUVuZFJlc3VsdChcbiAgICAgIHN0cmluZ3MucmVkdWNlKHRoaXMucHJvY2Vzc1N1YnN0aXR1dGlvbnMuYmluZCh0aGlzLCBleHByZXNzaW9ucykpLFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFuIGludGVybWVkaWFyeSB0ZW1wbGF0ZSB0YWcgdGhhdCByZWNlaXZlcyBhIHRlbXBsYXRlIHRhZyBhbmQgcGFzc2VzIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgcmVjZWl2ZWRcbiAgICogdGVtcGxhdGUgdGFnIHRvIG91ciBvd24gdGVtcGxhdGUgdGFnLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICAgIG5leHRUYWcgICAgICAgICAgLSB0aGUgcmVjZWl2ZWQgdGVtcGxhdGUgdGFnXG4gICAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59ICAgdGVtcGxhdGUgICAgICAgICAtIHRoZSB0ZW1wbGF0ZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgLi4uc3Vic3RpdHV0aW9ucyAtIGBzdWJzdGl0dXRpb25zYCBpcyBhbiBhcnJheSBvZiBhbGwgc3Vic3RpdHV0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gdGhlIGZpbmFsIHByb2Nlc3NlZCB2YWx1ZVxuICAgKi9cbiAgaW50ZXJpbVRhZyhwcmV2aW91c1RhZywgdGVtcGxhdGUsIC4uLnN1YnN0aXR1dGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50YWdgJHtwcmV2aW91c1RhZyh0ZW1wbGF0ZSwgLi4uc3Vic3RpdHV0aW9ucyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBidWxrIHByb2Nlc3Npbmcgb24gdGhlIHRhZ2dlZCB0ZW1wbGF0ZSwgdHJhbnNmb3JtaW5nIGVhY2ggc3Vic3RpdHV0aW9uIGFuZCB0aGVuXG4gICAqIGNvbmNhdGVuYXRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgaW50byBhIHN0cmluZy5cbiAgICogQHBhcmFtICB7QXJyYXk8Kj59IHN1YnN0aXR1dGlvbnMgLSBhbiBhcnJheSBvZiBhbGwgcmVtYWluaW5nIHN1YnN0aXR1dGlvbnMgcHJlc2VudCBpbiB0aGlzIHRlbXBsYXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICByZXN1bHRTb0ZhciAgIC0gdGhpcyBpdGVyYXRpb24ncyByZXN1bHQgc3RyaW5nIHNvIGZhclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgcmVtYWluaW5nUGFydCAtIHRoZSB0ZW1wbGF0ZSBjaHVuayBhZnRlciB0aGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgLSB0aGUgcmVzdWx0IG9mIGpvaW5pbmcgdGhpcyBpdGVyYXRpb24ncyBwcm9jZXNzZWQgc3Vic3RpdHV0aW9uIHdpdGggdGhlIHJlc3VsdFxuICAgKi9cbiAgcHJvY2Vzc1N1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgcmVzdWx0U29GYXIsIHJlbWFpbmluZ1BhcnQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnRyYW5zZm9ybVN1YnN0aXR1dGlvbihcbiAgICAgIHN1YnN0aXR1dGlvbnMuc2hpZnQoKSxcbiAgICAgIHJlc3VsdFNvRmFyLFxuICAgICk7XG4gICAgcmV0dXJuICcnLmNvbmNhdChyZXN1bHRTb0Zhciwgc3Vic3RpdHV0aW9uLCByZW1haW5pbmdQYXJ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCB0cmFuc2Zvcm1lciwgYXBwbHlpbmcgdGhlIHRyYW5zZm9ybWVyJ3MgYG9uU3RyaW5nYCBtZXRob2QgdG8gdGhlIHRlbXBsYXRlXG4gICAqIHN0cmluZ3MgYmVmb3JlIGFsbCBzdWJzdGl0dXRpb25zIGFyZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgc3RyIC0gVGhlIGlucHV0IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAtIFRoZSBmaW5hbCByZXN1bHRzIG9mIHByb2Nlc3NpbmcgZWFjaCB0cmFuc2Zvcm1lclxuICAgKi9cbiAgdHJhbnNmb3JtU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IGNiID0gKHJlcywgdHJhbnNmb3JtKSA9PlxuICAgICAgdHJhbnNmb3JtLm9uU3RyaW5nID8gdHJhbnNmb3JtLm9uU3RyaW5nKHJlcykgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgc3Vic3RpdHV0aW9uIGlzIGVuY291bnRlcmVkLCBpdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIgYW5kIGFwcGxpZXMgdGhlIHRyYW5zZm9ybWVyJ3NcbiAgICogYG9uU3Vic3RpdHV0aW9uYCBtZXRob2QgdG8gdGhlIHN1YnN0aXR1dGlvbi5cbiAgICogQHBhcmFtICB7Kn0gICAgICBzdWJzdGl0dXRpb24gLSBUaGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bHRTb0ZhciAgLSBUaGUgcmVzdWx0IHVwIHRvIGFuZCBleGNsdWRpbmcgdGhpcyBzdWJzdGl0dXRpb24uXG4gICAqIEByZXR1cm4geyp9ICAgICAgICAgICAgICAgICAgIC0gVGhlIGZpbmFsIHJlc3VsdCBvZiBhcHBseWluZyBhbGwgc3Vic3RpdHV0aW9uIHRyYW5zZm9ybWF0aW9ucy5cbiAgICovXG4gIHRyYW5zZm9ybVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgY29uc3QgY2IgPSAocmVzLCB0cmFuc2Zvcm0pID0+XG4gICAgICB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb25cbiAgICAgICAgPyB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb24ocmVzLCByZXN1bHRTb0ZhcilcbiAgICAgICAgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIsIGFwcGx5aW5nIHRoZSB0cmFuc2Zvcm1lcidzIGBvbkVuZFJlc3VsdGAgbWV0aG9kIHRvIHRoZVxuICAgKiB0ZW1wbGF0ZSBsaXRlcmFsIGFmdGVyIGFsbCBzdWJzdGl0dXRpb25zIGhhdmUgZmluaXNoZWQgcHJvY2Vzc2luZy5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbmRSZXN1bHQgLSBUaGUgcHJvY2Vzc2VkIHRlbXBsYXRlLCBqdXN0IGJlZm9yZSBpdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0YWdcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgLSBUaGUgZmluYWwgcmVzdWx0cyBvZiBwcm9jZXNzaW5nIGVhY2ggdHJhbnNmb3JtZXJcbiAgICovXG4gIHRyYW5zZm9ybUVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBjb25zdCBjYiA9IChyZXMsIHRyYW5zZm9ybSkgPT5cbiAgICAgIHRyYW5zZm9ybS5vbkVuZFJlc3VsdCA/IHRyYW5zZm9ybS5vbkVuZFJlc3VsdChyZXMpIDogcmVzO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWVycy5yZWR1Y2UoY2IsIGVuZFJlc3VsdCk7XG4gIH1cbn1cbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/TemplateTag/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZW1wbGF0ZVRhZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL1RlbXBsYXRlVGFnJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js
/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */
var trimResultTransformer = function trimResultTransformer() {
  var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onEndResult: function onEndResult(endResult) {
      if (side === '') {
        return endResult.trim();
      }

      side = side.toLowerCase();

      if (side === 'start' || side === 'left') {
        return endResult.replace(/^\s*/, '');
      }

      if (side === 'end' || side === 'right') {
        return endResult.replace(/\s*$/, '');
      }

      throw new Error('Side not supported: ' + side);
    }
  };
};

/* harmony default export */ var trimResultTransformer_trimResultTransformer = (trimResultTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmltUmVzdWx0VHJhbnNmb3JtZXIvdHJpbVJlc3VsdFRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInNpZGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0EsSUFBTUEsd0JBQXdCLFNBQXhCQSxxQkFBd0I7QUFBQSxNQUFDQyxJQUFELHVFQUFRLEVBQVI7QUFBQSxTQUFnQjtBQUM1Q0MsZUFENEMsdUJBQ2hDQyxTQURnQyxFQUNyQjtBQUNyQixVQUFJRixTQUFTLEVBQWIsRUFBaUI7QUFDZixlQUFPRSxVQUFVQyxJQUFWLEVBQVA7QUFDRDs7QUFFREgsYUFBT0EsS0FBS0ksV0FBTCxFQUFQOztBQUVBLFVBQUlKLFNBQVMsT0FBVCxJQUFvQkEsU0FBUyxNQUFqQyxFQUF5QztBQUN2QyxlQUFPRSxVQUFVRyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDs7QUFFRCxVQUFJTCxTQUFTLEtBQVQsSUFBa0JBLFNBQVMsT0FBL0IsRUFBd0M7QUFDdEMsZUFBT0UsVUFBVUcsT0FBVixDQUFrQixNQUFsQixFQUEwQixFQUExQixDQUFQO0FBQ0Q7O0FBRUQsWUFBTSxJQUFJQyxLQUFKLDBCQUFpQ04sSUFBakMsQ0FBTjtBQUNEO0FBakIyQyxHQUFoQjtBQUFBLENBQTlCOztBQW9CQSxlQUFlRCxxQkFBZiIsImZpbGUiOiJ0cmltUmVzdWx0VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyIHRoYXQgdHJpbXMgd2hpdGVzcGFjZSBvbiB0aGUgZW5kIHJlc3VsdCBvZiBhIHRhZ2dlZCB0ZW1wbGF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBzaWRlID0gJycgLSBUaGUgc2lkZSBvZiB0aGUgc3RyaW5nIHRvIHRyaW0uIENhbiBiZSAnc3RhcnQnIG9yICdlbmQnIChhbHRlcm5hdGl2ZWx5ICdsZWZ0JyBvciAncmlnaHQnKVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciA9IChzaWRlID0gJycpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChzaWRlID09PSAnJykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC50cmltKCk7XG4gICAgfVxuXG4gICAgc2lkZSA9IHNpZGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChzaWRlID09PSAnc3RhcnQnIHx8IHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZSA9PT0gJ2VuZCcgfHwgc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNpZGUgbm90IHN1cHBvcnRlZDogJHtzaWRlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lcjtcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/trimResultTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmltUmVzdWx0VHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQix5QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */
var stripIndentTransformer = function stripIndentTransformer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  return {
    onEndResult: function onEndResult(endResult) {
      if (type === 'initial') {
        // remove the shortest leading indentation from each line
        var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
        var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function (el) {
          return el.length;
        })));
        if (indent) {
          var regexp = new RegExp('^.{' + indent + '}', 'gm');
          return endResult.replace(regexp, '');
        }
        return endResult;
      }
      if (type === 'all') {
        // remove all indentation from each line
        return endResult.replace(/^[^\S\n]+/gm, '');
      }
      throw new Error('Unknown type: ' + type);
    }
  };
};

/* harmony default export */ var stripIndentTransformer_stripIndentTransformer = (stripIndentTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL3N0cmlwSW5kZW50VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInR5cGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIm1hdGNoIiwiaW5kZW50IiwiTWF0aCIsIm1pbiIsIm1hcCIsImVsIiwibGVuZ3RoIiwicmVnZXhwIiwiUmVnRXhwIiwicmVwbGFjZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztBQUtBLElBQU1BLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUSxTQUFSO0FBQUEsU0FBdUI7QUFDcERDLGVBRG9ELHVCQUN4Q0MsU0FEd0MsRUFDN0I7QUFDckIsVUFBSUYsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCO0FBQ0EsWUFBTUcsUUFBUUQsVUFBVUMsS0FBVixDQUFnQixtQkFBaEIsQ0FBZDtBQUNBLFlBQU1DLFNBQVNELFNBQVNFLEtBQUtDLEdBQUwsZ0NBQVlILE1BQU1JLEdBQU4sQ0FBVTtBQUFBLGlCQUFNQyxHQUFHQyxNQUFUO0FBQUEsU0FBVixDQUFaLEVBQXhCO0FBQ0EsWUFBSUwsTUFBSixFQUFZO0FBQ1YsY0FBTU0sU0FBUyxJQUFJQyxNQUFKLFNBQWlCUCxNQUFqQixRQUE0QixJQUE1QixDQUFmO0FBQ0EsaUJBQU9GLFVBQVVVLE9BQVYsQ0FBa0JGLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDtBQUNELGVBQU9SLFNBQVA7QUFDRDtBQUNELFVBQUlGLFNBQVMsS0FBYixFQUFvQjtBQUNsQjtBQUNBLGVBQU9FLFVBQVVVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsRUFBakMsQ0FBUDtBQUNEO0FBQ0QsWUFBTSxJQUFJQyxLQUFKLG9CQUEyQmIsSUFBM0IsQ0FBTjtBQUNEO0FBakJtRCxHQUF2QjtBQUFBLENBQS9COztBQW9CQSxlQUFlRCxzQkFBZiIsImZpbGUiOiJzdHJpcEluZGVudFRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBzdHJpcHMgaW5kZW50YXRpb24gZnJvbSBhIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZSA9ICdpbml0aWFsJyAtIHdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBvciBqdXN0IGxlYWRpbmcgaW5kZW50YXRpb24uIGNhbiBiZSAnYWxsJyBvciAnaW5pdGlhbCdcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAtIGEgVGVtcGxhdGVUYWcgdHJhbnNmb3JtZXJcbiAqL1xuY29uc3Qgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciA9ICh0eXBlID0gJ2luaXRpYWwnKSA9PiAoe1xuICBvbkVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAvLyByZW1vdmUgdGhlIHNob3J0ZXN0IGxlYWRpbmcgaW5kZW50YXRpb24gZnJvbSBlYWNoIGxpbmVcbiAgICAgIGNvbnN0IG1hdGNoID0gZW5kUmVzdWx0Lm1hdGNoKC9eW15cXFNcXG5dKig/PVxcUykvZ20pO1xuICAgICAgY29uc3QgaW5kZW50ID0gbWF0Y2ggJiYgTWF0aC5taW4oLi4ubWF0Y2gubWFwKGVsID0+IGVsLmxlbmd0aCkpO1xuICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeLnske2luZGVudH19YCwgJ2dtJyk7XG4gICAgICAgIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZShyZWdleHAsICcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmRSZXN1bHQ7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBmcm9tIGVhY2ggbGluZVxuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eW15cXFNcXG5dKy9nbSwgJycpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZTogJHt0eXBlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXI7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/stripIndentTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js
/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */
var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
  return {
    onEndResult: function onEndResult(endResult) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceResultTransformer requires at least 2 arguments.');
      }
      return endResult.replace(replaceWhat, replaceWith);
    }
  };
};

/* harmony default export */ var replaceResultTransformer_replaceResultTransformer = (replaceResultTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIkVycm9yIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BLElBQU1BLDJCQUEyQixTQUEzQkEsd0JBQTJCLENBQUNDLFdBQUQsRUFBY0MsV0FBZDtBQUFBLFNBQStCO0FBQzlEQyxlQUQ4RCx1QkFDbERDLFNBRGtELEVBQ3ZDO0FBQ3JCLFVBQUlILGVBQWUsSUFBZixJQUF1QkMsZUFBZSxJQUExQyxFQUFnRDtBQUM5QyxjQUFNLElBQUlHLEtBQUosQ0FDSix5REFESSxDQUFOO0FBR0Q7QUFDRCxhQUFPRCxVQUFVRSxPQUFWLENBQWtCTCxXQUFsQixFQUErQkMsV0FBL0IsQ0FBUDtBQUNEO0FBUjZELEdBQS9CO0FBQUEsQ0FBakM7O0FBV0EsZUFBZUYsd0JBQWYiLCJmaWxlIjoicmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXBsYWNlcyB0YWJzLCBuZXdsaW5lcyBhbmQgc3BhY2VzIHdpdGggdGhlIGNob3NlbiB2YWx1ZSB3aGVuIHRoZXkgb2NjdXIgaW4gc2VxdWVuY2VzXG4gKiBAcGFyYW0gIHsoU3RyaW5nfFJlZ0V4cCl9IHJlcGxhY2VXaGF0IC0gdGhlIHZhbHVlIG9yIHBhdHRlcm4gdGhhdCBzaG91bGQgYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSAgeyp9ICAgICAgICAgICAgICAgcmVwbGFjZVdpdGggLSB0aGUgcmVwbGFjZW1lbnQgdmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChyZXBsYWNlV2hhdCA9PSBudWxsIHx8IHJlcGxhY2VXaXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciByZXF1aXJlcyBhdCBsZWFzdCAyIGFyZ3VtZW50cy4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/replaceResultTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQiw0QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
      }

      // Do not touch if null or undefined
      if (substitution == null) {
        return substitution;
      } else {
        return substitution.toString().replace(replaceWhat, replaceWith);
      }
    }
  };
};

/* harmony default export */ var replaceSubstitutionTransformer_replaceSubstitutionTransformer = (replaceSubstitutionTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIvcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvblN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInJlc3VsdFNvRmFyIiwiRXJyb3IiLCJ0b1N0cmluZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLGlDQUFpQyxTQUFqQ0EsOEJBQWlDLENBQUNDLFdBQUQsRUFBY0MsV0FBZDtBQUFBLFNBQStCO0FBQ3BFQyxrQkFEb0UsMEJBQ3JEQyxZQURxRCxFQUN2Q0MsV0FEdUMsRUFDMUI7QUFDeEMsVUFBSUosZUFBZSxJQUFmLElBQXVCQyxlQUFlLElBQTFDLEVBQWdEO0FBQzlDLGNBQU0sSUFBSUksS0FBSixDQUNKLCtEQURJLENBQU47QUFHRDs7QUFFRDtBQUNBLFVBQUlGLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QixlQUFPQSxZQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0EsYUFBYUcsUUFBYixHQUF3QkMsT0FBeEIsQ0FBZ0NQLFdBQWhDLEVBQTZDQyxXQUE3QyxDQUFQO0FBQ0Q7QUFDRjtBQWRtRSxHQUEvQjtBQUFBLENBQXZDOztBQWlCQSxlQUFlRiw4QkFBZiIsImZpbGUiOiJyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgPSAocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCB0b3VjaCBpZiBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmIChzdWJzdGl0dXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi50b1N0cmluZygpLnJlcGxhY2UocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixrQztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js
var replaceStringTransformer = function replaceStringTransformer(replaceWhat, replaceWith) {
  return {
    onString: function onString(str) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceStringTransformer requires at least 2 arguments.');
      }

      return str.replace(replaceWhat, replaceWith);
    }
  };
};

/* harmony default export */ var replaceStringTransformer_replaceStringTransformer = (replaceStringTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIvcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvblN0cmluZyIsInN0ciIsIkVycm9yIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsMkJBQTJCLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsV0FBRCxFQUFjQyxXQUFkO0FBQUEsU0FBK0I7QUFDOURDLFlBRDhELG9CQUNyREMsR0FEcUQsRUFDaEQ7QUFDWixVQUFJSCxlQUFlLElBQWYsSUFBdUJDLGVBQWUsSUFBMUMsRUFBZ0Q7QUFDOUMsY0FBTSxJQUFJRyxLQUFKLENBQ0oseURBREksQ0FBTjtBQUdEOztBQUVELGFBQU9ELElBQUlFLE9BQUosQ0FBWUwsV0FBWixFQUF5QkMsV0FBekIsQ0FBUDtBQUNEO0FBVDZELEdBQS9CO0FBQUEsQ0FBakM7O0FBWUEsZUFBZUYsd0JBQWYiLCJmaWxlIjoicmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyID0gKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCkgPT4gKHtcbiAgb25TdHJpbmcoc3RyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZShyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcjtcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/replaceStringTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQiw0QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js
var defaults = {
  separator: '',
  conjunction: '',
  serial: false
};

/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 */
var inlineArrayTransformer = function inlineArrayTransformer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      // only operate on arrays
      if (Array.isArray(substitution)) {
        var arrayLength = substitution.length;
        var separator = opts.separator;
        var conjunction = opts.conjunction;
        var serial = opts.serial;
        // join each item in the array into a string where each item is separated by separator
        // be sure to maintain indentation
        var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
        if (indent) {
          substitution = substitution.join(separator + indent[1]);
        } else {
          substitution = substitution.join(separator + ' ');
        }
        // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution
        if (conjunction && arrayLength > 1) {
          var separatorIndex = substitution.lastIndexOf(separator);
          substitution = substitution.slice(0, separatorIndex) + (serial ? separator : '') + ' ' + conjunction + substitution.slice(separatorIndex + 1);
        }
      }
      return substitution;
    }
  };
};

/* harmony default export */ var inlineArrayTransformer_inlineArrayTransformer = (inlineArrayTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2lubGluZUFycmF5VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiIsInNlcmlhbCIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJvcHRzIiwib25TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJyZXN1bHRTb0ZhciIsIkFycmF5IiwiaXNBcnJheSIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiaW5kZW50IiwibWF0Y2giLCJqb2luIiwic2VwYXJhdG9ySW5kZXgiLCJsYXN0SW5kZXhPZiIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxXQUFXO0FBQ2ZDLGFBQVcsRUFESTtBQUVmQyxlQUFhLEVBRkU7QUFHZkMsVUFBUTtBQUhPLENBQWpCOztBQU1BOzs7Ozs7OztBQVFBLElBQU1DLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUUwsUUFBUjtBQUFBLFNBQXNCO0FBQ25ETSxrQkFEbUQsMEJBQ3BDQyxZQURvQyxFQUN0QkMsV0FEc0IsRUFDVDtBQUN4QztBQUNBLFVBQUlDLE1BQU1DLE9BQU4sQ0FBY0gsWUFBZCxDQUFKLEVBQWlDO0FBQy9CLFlBQU1JLGNBQWNKLGFBQWFLLE1BQWpDO0FBQ0EsWUFBTVgsWUFBWUksS0FBS0osU0FBdkI7QUFDQSxZQUFNQyxjQUFjRyxLQUFLSCxXQUF6QjtBQUNBLFlBQU1DLFNBQVNFLEtBQUtGLE1BQXBCO0FBQ0E7QUFDQTtBQUNBLFlBQU1VLFNBQVNMLFlBQVlNLEtBQVosQ0FBa0IsZ0JBQWxCLENBQWY7QUFDQSxZQUFJRCxNQUFKLEVBQVk7QUFDVk4seUJBQWVBLGFBQWFRLElBQWIsQ0FBa0JkLFlBQVlZLE9BQU8sQ0FBUCxDQUE5QixDQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xOLHlCQUFlQSxhQUFhUSxJQUFiLENBQWtCZCxZQUFZLEdBQTlCLENBQWY7QUFDRDtBQUNEO0FBQ0EsWUFBSUMsZUFBZVMsY0FBYyxDQUFqQyxFQUFvQztBQUNsQyxjQUFNSyxpQkFBaUJULGFBQWFVLFdBQWIsQ0FBeUJoQixTQUF6QixDQUF2QjtBQUNBTSx5QkFDRUEsYUFBYVcsS0FBYixDQUFtQixDQUFuQixFQUFzQkYsY0FBdEIsS0FDQ2IsU0FBU0YsU0FBVCxHQUFxQixFQUR0QixJQUVBLEdBRkEsR0FHQUMsV0FIQSxHQUlBSyxhQUFhVyxLQUFiLENBQW1CRixpQkFBaUIsQ0FBcEMsQ0FMRjtBQU1EO0FBQ0Y7QUFDRCxhQUFPVCxZQUFQO0FBQ0Q7QUE1QmtELEdBQXRCO0FBQUEsQ0FBL0I7O0FBK0JBLGVBQWVILHNCQUFmIiwiZmlsZSI6ImlubGluZUFycmF5VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0cyA9IHtcbiAgc2VwYXJhdG9yOiAnJyxcbiAgY29uanVuY3Rpb246ICcnLFxuICBzZXJpYWw6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBzdWJzdGl0dXRpb24gdG8gYSBzdHJpbmcgY29udGFpbmluZyBhIGxpc3RcbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gJyddIC0gdGhlIGNoYXJhY3RlciB0aGF0IHNlcGFyYXRlcyBlYWNoIGl0ZW1cbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuY29uanVuY3Rpb24gPSAnJ10gIC0gcmVwbGFjZSB0aGUgbGFzdCBzZXBhcmF0b3Igd2l0aCB0aGlzXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbb3B0cy5zZXJpYWwgPSBmYWxzZV0gLSBpbmNsdWRlIHRoZSBzZXBhcmF0b3IgYmVmb3JlIHRoZSBjb25qdW5jdGlvbj8gKE94Zm9yZCBjb21tYSB1c2UtY2FzZSlcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgPSAob3B0cyA9IGRlZmF1bHRzKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgLy8gb25seSBvcGVyYXRlIG9uIGFycmF5c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gc3Vic3RpdHV0aW9uLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IG9wdHMuc2VwYXJhdG9yO1xuICAgICAgY29uc3QgY29uanVuY3Rpb24gPSBvcHRzLmNvbmp1bmN0aW9uO1xuICAgICAgY29uc3Qgc2VyaWFsID0gb3B0cy5zZXJpYWw7XG4gICAgICAvLyBqb2luIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgaW50byBhIHN0cmluZyB3aGVyZSBlYWNoIGl0ZW0gaXMgc2VwYXJhdGVkIGJ5IHNlcGFyYXRvclxuICAgICAgLy8gYmUgc3VyZSB0byBtYWludGFpbiBpbmRlbnRhdGlvblxuICAgICAgY29uc3QgaW5kZW50ID0gcmVzdWx0U29GYXIubWF0Y2goLyhcXG4/W15cXFNcXG5dKykkLyk7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5qb2luKHNlcGFyYXRvciArIGluZGVudFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uam9pbihzZXBhcmF0b3IgKyAnICcpO1xuICAgICAgfVxuICAgICAgLy8gaWYgY29uanVuY3Rpb24gaXMgc2V0LCByZXBsYWNlIHRoZSBsYXN0IHNlcGFyYXRvciB3aXRoIGNvbmp1bmN0aW9uLCBidXQgb25seSBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHN1YnN0aXR1dGlvblxuICAgICAgaWYgKGNvbmp1bmN0aW9uICYmIGFycmF5TGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3JJbmRleCA9IHN1YnN0aXR1dGlvbi5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xuICAgICAgICBzdWJzdGl0dXRpb24gPVxuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCkgK1xuICAgICAgICAgIChzZXJpYWwgPyBzZXBhcmF0b3IgOiAnJykgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgY29uanVuY3Rpb24gK1xuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZShzZXBhcmF0b3JJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGlubGluZUFycmF5VHJhbnNmb3JtZXI7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/inlineArrayTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js
var splitStringTransformer = function splitStringTransformer(splitBy) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (splitBy != null && typeof splitBy === 'string') {
        if (typeof substitution === 'string' && substitution.includes(splitBy)) {
          substitution = substitution.split(splitBy);
        }
      } else {
        throw new Error('You need to specify a string character to split by.');
      }
      return substitution;
    }
  };
};

/* harmony default export */ var splitStringTransformer_splitStringTransformer = (splitStringTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwicmVzdWx0U29GYXIiLCJzcGxpdEJ5IiwiaW5jbHVkZXMiLCJzcGxpdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSx5QkFBeUIsU0FBekJBLHNCQUF5QjtBQUFBLFNBQVk7QUFDekNDLGtCQUR5QywwQkFDMUJDLFlBRDBCLEVBQ1pDLFdBRFksRUFDQztBQUN4QyxVQUFJQyxXQUFXLElBQVgsSUFBbUIsT0FBT0EsT0FBUCxLQUFtQixRQUExQyxFQUFvRDtBQUNsRCxZQUFJLE9BQU9GLFlBQVAsS0FBd0IsUUFBeEIsSUFBb0NBLGFBQWFHLFFBQWIsQ0FBc0JELE9BQXRCLENBQXhDLEVBQXdFO0FBQ3RFRix5QkFBZUEsYUFBYUksS0FBYixDQUFtQkYsT0FBbkIsQ0FBZjtBQUNEO0FBQ0YsT0FKRCxNQUlPO0FBQ0wsY0FBTSxJQUFJRyxLQUFKLENBQVUscURBQVYsQ0FBTjtBQUNEO0FBQ0QsYUFBT0wsWUFBUDtBQUNEO0FBVndDLEdBQVo7QUFBQSxDQUEvQjs7QUFhQSxlQUFlRixzQkFBZiIsImZpbGUiOiJzcGxpdFN0cmluZ1RyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciA9IHNwbGl0QnkgPT4gKHtcbiAgb25TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCByZXN1bHRTb0Zhcikge1xuICAgIGlmIChzcGxpdEJ5ICE9IG51bGwgJiYgdHlwZW9mIHNwbGl0QnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gJ3N0cmluZycgJiYgc3Vic3RpdHV0aW9uLmluY2x1ZGVzKHNwbGl0QnkpKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5zcGxpdChzcGxpdEJ5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgc3RyaW5nIGNoYXJhY3RlciB0byBzcGxpdCBieS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/splitStringTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXInO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js
var isValidValue = function isValidValue(x) {
  return x != null && !Number.isNaN(x) && typeof x !== 'boolean';
};

var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
  return {
    onSubstitution: function onSubstitution(substitution) {
      if (Array.isArray(substitution)) {
        return substitution.filter(isValidValue);
      }
      if (isValidValue(substitution)) {
        return substitution;
      }
      return '';
    }
  };
};

/* harmony default export */ var removeNonPrintingValuesTransformer_removeNonPrintingValuesTransformer = (removeNonPrintingValuesTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiaXNWYWxpZFZhbHVlIiwieCIsIk51bWJlciIsImlzTmFOIiwicmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUNuQkMsS0FBSyxJQUFMLElBQWEsQ0FBQ0MsT0FBT0MsS0FBUCxDQUFhRixDQUFiLENBQWQsSUFBaUMsT0FBT0EsQ0FBUCxLQUFhLFNBRDNCO0FBQUEsQ0FBckI7O0FBR0EsSUFBTUcscUNBQXFDLFNBQXJDQSxrQ0FBcUM7QUFBQSxTQUFPO0FBQ2hEQyxrQkFEZ0QsMEJBQ2pDQyxZQURpQyxFQUNuQjtBQUMzQixVQUFJQyxNQUFNQyxPQUFOLENBQWNGLFlBQWQsQ0FBSixFQUFpQztBQUMvQixlQUFPQSxhQUFhRyxNQUFiLENBQW9CVCxZQUFwQixDQUFQO0FBQ0Q7QUFDRCxVQUFJQSxhQUFhTSxZQUFiLENBQUosRUFBZ0M7QUFDOUIsZUFBT0EsWUFBUDtBQUNEO0FBQ0QsYUFBTyxFQUFQO0FBQ0Q7QUFUK0MsR0FBUDtBQUFBLENBQTNDOztBQVlBLGVBQWVGLGtDQUFmIiwiZmlsZSI6InJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1ZhbGlkVmFsdWUgPSB4ID0+XG4gIHggIT0gbnVsbCAmJiAhTnVtYmVyLmlzTmFOKHgpICYmIHR5cGVvZiB4ICE9PSAnYm9vbGVhbic7XG5cbmNvbnN0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgPSAoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJzdGl0dXRpb24pKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmZpbHRlcihpc1ZhbGlkVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaXNWYWxpZFZhbHVlKHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0Isc0M7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXInO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/commaLists/commaLists.js





var commaLists = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',' }), stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ var commaLists_commaLists = (commaLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzL2NvbW1hTGlzdHMuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsImNvbW1hTGlzdHMiLCJzZXBhcmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZ0JBQXhCO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MsMEJBQWxDOztBQUVBLElBQU1DLGFBQWEsSUFBSUosV0FBSixDQUNqQkUsdUJBQXVCLEVBQUVHLFdBQVcsR0FBYixFQUF2QixDQURpQixFQUVqQkosc0JBRmlCLEVBR2pCRSxxQkFIaUIsQ0FBbkI7O0FBTUEsZUFBZUMsVUFBZiIsImZpbGUiOiJjb21tYUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGNvbW1hTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0cztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/commaLists/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsYztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0cyc7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js





var commaListsAnd = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',', conjunction: 'and' }), stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ var commaListsAnd_commaListsAnd = (commaListsAnd);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzQW5kL2NvbW1hTGlzdHNBbmQuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsImNvbW1hTGlzdHNBbmQiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZ0JBQWdCLElBQUlKLFdBQUosQ0FDcEJFLHVCQUF1QixFQUFFRyxXQUFXLEdBQWIsRUFBa0JDLGFBQWEsS0FBL0IsRUFBdkIsQ0FEb0IsRUFFcEJMLHNCQUZvQixFQUdwQkUscUJBSG9CLENBQXRCOztBQU1BLGVBQWVDLGFBQWYiLCJmaWxlIjoiY29tbWFMaXN0c0FuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0c0FuZDtcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/commaListsAnd/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzQW5kL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsaUI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/commaListsOr/commaListsOr.js





var commaListsOr = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',', conjunction: 'or' }), stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ var commaListsOr_commaListsOr = (commaListsOr);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzT3IvY29tbWFMaXN0c09yLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJjb21tYUxpc3RzT3IiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZUFBZSxJQUFJSixXQUFKLENBQ25CRSx1QkFBdUIsRUFBRUcsV0FBVyxHQUFiLEVBQWtCQyxhQUFhLElBQS9CLEVBQXZCLENBRG1CLEVBRW5CTCxzQkFGbUIsRUFHbkJFLHFCQUhtQixDQUFyQjs7QUFNQSxlQUFlQyxZQUFmIiwiZmlsZSI6ImNvbW1hTGlzdHNPci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzT3IgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJywgY29uanVuY3Rpb246ICdvcicgfSksXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hTGlzdHNPcjtcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/commaListsOr/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzT3IvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixnQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0c09yJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/html/html.js







var html = new TemplateTag_TemplateTag(splitStringTransformer_splitStringTransformer('\n'), removeNonPrintingValuesTransformer_removeNonPrintingValuesTransformer, inlineArrayTransformer_inlineArrayTransformer, stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ var html_html = (html);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2h0bWwuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInNwbGl0U3RyaW5nVHJhbnNmb3JtZXIiLCJyZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIiwiaHRtbCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxrQ0FBUCxNQUErQyx1Q0FBL0M7O0FBRUEsSUFBTUMsT0FBTyxJQUFJTixXQUFKLENBQ1hJLHVCQUF1QixJQUF2QixDQURXLEVBRVhDLGtDQUZXLEVBR1hILHNCQUhXLEVBSVhELHNCQUpXLEVBS1hFLHFCQUxXLENBQWI7O0FBUUEsZUFBZUcsSUFBZiIsImZpbGUiOiJodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmltcG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4uL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXInO1xuXG5jb25zdCBodG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcixcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaHRtbDtcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/html/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsUTtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vaHRtbCc7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/codeBlock/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2RlQmxvY2svaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixTO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/source/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2UvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixTO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/safeHtml/safeHtml.js







var safeHtml = new TemplateTag_TemplateTag(splitStringTransformer_splitStringTransformer('\n'), inlineArrayTransformer_inlineArrayTransformer, stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer, replaceSubstitutionTransformer_replaceSubstitutionTransformer(/&/g, '&amp;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/</g, '&lt;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/>/g, '&gt;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/"/g, '&quot;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/'/g, '&#x27;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/`/g, '&#x60;'));

/* harmony default export */ var safeHtml_safeHtml = (safeHtml);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9zYWZlSHRtbC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInNhZmVIdG1sIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLDhCQUFQLE1BQTJDLG1DQUEzQzs7QUFFQSxJQUFNQyxXQUFXLElBQUlOLFdBQUosQ0FDZkksdUJBQXVCLElBQXZCLENBRGUsRUFFZkYsc0JBRmUsRUFHZkQsc0JBSGUsRUFJZkUscUJBSmUsRUFLZkUsK0JBQStCLElBQS9CLEVBQXFDLE9BQXJDLENBTGUsRUFNZkEsK0JBQStCLElBQS9CLEVBQXFDLE1BQXJDLENBTmUsRUFPZkEsK0JBQStCLElBQS9CLEVBQXFDLE1BQXJDLENBUGUsRUFRZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBUmUsRUFTZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBVGUsRUFVZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBVmUsQ0FBakI7O0FBYUEsZUFBZUMsUUFBZiIsImZpbGUiOiJzYWZlSHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi4vc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcic7XG5cbmNvbnN0IHNhZmVIdG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLyYvZywgJyZhbXA7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvPC9nLCAnJmx0OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLz4vZywgJyZndDsnKSxcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC9cIi9nLCAnJnF1b3Q7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvJy9nLCAnJiN4Mjc7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvYC9nLCAnJiN4NjA7JyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzYWZlSHRtbDtcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/safeHtml/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLFk7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3NhZmVIdG1sJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLine/oneLine.js




var oneLine = new TemplateTag_TemplateTag(replaceResultTransformer_replaceResultTransformer(/(?:\n(?:\s*))+/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ var oneLine_oneLine = (oneLine);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lL29uZUxpbmUuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxVQUFVLElBQUlILFdBQUosQ0FDZEUseUJBQXlCLGlCQUF6QixFQUE0QyxHQUE1QyxDQURjLEVBRWRELHFCQUZjLENBQWhCOztBQUtBLGVBQWVFLE9BQWYiLCJmaWxlIjoib25lTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmUgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxuKD86XFxzKikpKy9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLine/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsVztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZSc7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js




var oneLineTrim = new TemplateTag_TemplateTag(replaceResultTransformer_replaceResultTransformer(/(?:\n\s*)/g, ''), trimResultTransformer_trimResultTransformer);

/* harmony default export */ var oneLineTrim_oneLineTrim = (oneLineTrim);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lVHJpbS9vbmVMaW5lVHJpbS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVUcmltIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxjQUFjLElBQUlILFdBQUosQ0FDbEJFLHlCQUF5QixZQUF6QixFQUF1QyxFQUF2QyxDQURrQixFQUVsQkQscUJBRmtCLENBQXBCOztBQUtBLGVBQWVFLFdBQWYiLCJmaWxlIjoib25lTGluZVRyaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lVHJpbSA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXG5cXHMqKS9nLCAnJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVUcmltO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineTrim/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lVHJpbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVUcmltJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js





var oneLineCommaLists = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',' }), replaceResultTransformer_replaceResultTransformer(/(?:\s+)/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ var oneLineCommaLists_oneLineCommaLists = (oneLineCommaLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9vbmVMaW5lQ29tbWFMaXN0cy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lQ29tbWFMaXN0cyIsInNlcGFyYXRvciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyx3QkFBUCxNQUFxQyw2QkFBckM7O0FBRUEsSUFBTUMsb0JBQW9CLElBQUlKLFdBQUosQ0FDeEJDLHVCQUF1QixFQUFFSSxXQUFXLEdBQWIsRUFBdkIsQ0FEd0IsRUFFeEJGLHlCQUF5QixVQUF6QixFQUFxQyxHQUFyQyxDQUZ3QixFQUd4QkQscUJBSHdCLENBQTFCOztBQU1BLGVBQWVFLGlCQUFmIiwiZmlsZSI6Im9uZUxpbmVDb21tYUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnIH0pLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVDb21tYUxpc3RzO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineCommaLists/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLHFCO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js





var oneLineCommaListsOr = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',', conjunction: 'or' }), replaceResultTransformer_replaceResultTransformer(/(?:\s+)/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ var oneLineCommaListsOr_oneLineCommaListsOr = (oneLineCommaListsOr);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL29uZUxpbmVDb21tYUxpc3RzT3IuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwicmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIiwib25lTGluZUNvbW1hTGlzdHNPciIsInNlcGFyYXRvciIsImNvbmp1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxzQkFBc0IsSUFBSUosV0FBSixDQUMxQkMsdUJBQXVCLEVBQUVJLFdBQVcsR0FBYixFQUFrQkMsYUFBYSxJQUEvQixFQUF2QixDQUQwQixFQUUxQkgseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRjBCLEVBRzFCRCxxQkFIMEIsQ0FBNUI7O0FBTUEsZUFBZUUsbUJBQWYiLCJmaWxlIjoib25lTGluZUNvbW1hTGlzdHNPci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZUNvbW1hTGlzdHNPciA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnLCBjb25qdW5jdGlvbjogJ29yJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c09yO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineCommaListsOr/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsdUI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js





var oneLineCommaListsAnd = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',', conjunction: 'and' }), replaceResultTransformer_replaceResultTransformer(/(?:\s+)/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ var oneLineCommaListsAnd_oneLineCommaListsAnd = (oneLineCommaListsAnd);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9vbmVMaW5lQ29tbWFMaXN0c0FuZC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lQ29tbWFMaXN0c0FuZCIsInNlcGFyYXRvciIsImNvbmp1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyx1QkFBdUIsSUFBSUosV0FBSixDQUMzQkMsdUJBQXVCLEVBQUVJLFdBQVcsR0FBYixFQUFrQkMsYUFBYSxLQUEvQixFQUF2QixDQUQyQixFQUUzQkgseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRjJCLEVBRzNCRCxxQkFIMkIsQ0FBN0I7O0FBTUEsZUFBZUUsb0JBQWYiLCJmaWxlIjoib25lTGluZUNvbW1hTGlzdHNBbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVDb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c0FuZDtcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineCommaListsAnd/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLHdCO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0c0FuZCc7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/inlineLists/inlineLists.js





var inlineLists = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer, stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ var inlineLists_inlineLists = (inlineLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmxpbmVMaXN0cy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwiaW5saW5lTGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZ0JBQXhCO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MsMEJBQWxDOztBQUVBLElBQU1DLGNBQWMsSUFBSUosV0FBSixDQUNsQkUsc0JBRGtCLEVBRWxCRCxzQkFGa0IsRUFHbEJFLHFCQUhrQixDQUFwQjs7QUFNQSxlQUFlQyxXQUFmIiwiZmlsZSI6ImlubGluZUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGlubGluZUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVMaXN0cztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/inlineLists/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUxpc3RzJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js





var oneLineInlineLists = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer, replaceResultTransformer_replaceResultTransformer(/(?:\s+)/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ var oneLineInlineLists_oneLineInlineLists = (oneLineInlineLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvb25lTGluZUlubGluZUxpc3RzLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVJbmxpbmVMaXN0cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyx3QkFBUCxNQUFxQyw2QkFBckM7O0FBRUEsSUFBTUMscUJBQXFCLElBQUlKLFdBQUosQ0FDekJDLHNCQUR5QixFQUV6QkUseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRnlCLEVBR3pCRCxxQkFIeUIsQ0FBM0I7O0FBTUEsZUFBZUUsa0JBQWYiLCJmaWxlIjoib25lTGluZUlubGluZUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lSW5saW5lTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIsXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxzKykvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZUlubGluZUxpc3RzO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/oneLineInlineLists/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixzQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZUlubGluZUxpc3RzJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/stripIndent/stripIndent.js




var stripIndent = new TemplateTag_TemplateTag(stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ var stripIndent_stripIndent = (stripIndent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudC9zdHJpcEluZGVudC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJzdHJpcEluZGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsY0FBYyxJQUFJSCxXQUFKLENBQ2xCQyxzQkFEa0IsRUFFbEJDLHFCQUZrQixDQUFwQjs7QUFLQSxlQUFlQyxXQUFmIiwiZmlsZSI6InN0cmlwSW5kZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBzdHJpcEluZGVudCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnQ7XG4iXX0=
// CONCATENATED MODULE: ./node_modules/common-tags/es/stripIndent/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50JztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/stripIndents/stripIndents.js




var stripIndents = new TemplateTag_TemplateTag(stripIndentTransformer_stripIndentTransformer('all'), trimResultTransformer_trimResultTransformer);

/* harmony default export */ var stripIndents_stripIndents = (stripIndents);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudHMvc3RyaXBJbmRlbnRzLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZUFBZSxJQUFJSCxXQUFKLENBQ25CQyx1QkFBdUIsS0FBdkIsQ0FEbUIsRUFFbkJDLHFCQUZtQixDQUFyQjs7QUFLQSxlQUFlQyxZQUFmIiwiZmlsZSI6InN0cmlwSW5kZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgc3RyaXBJbmRlbnRzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyKCdhbGwnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnRzO1xuIl19
// CONCATENATED MODULE: ./node_modules/common-tags/es/stripIndents/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixnQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiJdfQ==
// CONCATENATED MODULE: ./node_modules/common-tags/es/index.js
// core



// transformers


















// tags

































//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIiLCJyZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsInJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIiLCJjb21tYUxpc3RzIiwiY29tbWFMaXN0c0FuZCIsImNvbW1hTGlzdHNPciIsImh0bWwiLCJjb2RlQmxvY2siLCJzb3VyY2UiLCJzYWZlSHRtbCIsIm9uZUxpbmUiLCJvbmVMaW5lVHJpbSIsIm9uZUxpbmVDb21tYUxpc3RzIiwib25lTGluZUNvbW1hTGlzdHNPciIsIm9uZUxpbmVDb21tYUxpc3RzQW5kIiwiaW5saW5lTGlzdHMiLCJvbmVMaW5lSW5saW5lTGlzdHMiLCJzdHJpcEluZGVudCIsInN0cmlwSW5kZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7eUJBQ3dCLGU7eUJBQWpCQSxXOztBQUVQOzttQ0FDa0MseUI7bUNBQTNCQyxxQjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtzQ0FDOEIsNEI7c0NBQTlCQyx3Qjs0Q0FDb0Msa0M7NENBQXBDQyw4QjtzQ0FDOEIsNEI7c0NBQTlCQyx3QjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtnREFDd0Msc0M7Z0RBQXhDQyxrQzs7QUFFUDs7d0JBQ3VCLGM7d0JBQWhCQyxVOzJCQUNtQixpQjsyQkFBbkJDLGE7MEJBQ2tCLGdCOzBCQUFsQkMsWTtrQkFDVSxRO2tCQUFWQyxJO3VCQUNlLGE7dUJBQWZDLFM7b0JBQ1ksVTtvQkFBWkMsTTtzQkFDYyxZO3NCQUFkQyxRO3FCQUNhLFc7cUJBQWJDLE87eUJBQ2lCLGU7eUJBQWpCQyxXOytCQUN1QixxQjsrQkFBdkJDLGlCO2lDQUN5Qix1QjtpQ0FBekJDLG1CO2tDQUMwQix3QjtrQ0FBMUJDLG9CO3lCQUNpQixlO3lCQUFqQkMsVztnQ0FDd0Isc0I7Z0NBQXhCQyxrQjt5QkFDaUIsZTt5QkFBakJDLFc7MEJBQ2tCLGdCOzBCQUFsQkMsWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvcmVcbmV4cG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuL1RlbXBsYXRlVGFnJztcblxuLy8gdHJhbnNmb3JtZXJzXG5leHBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5leHBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXInO1xuZXhwb3J0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuL3JlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcic7XG5leHBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuZXhwb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmV4cG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4vcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcic7XG5cbi8vIHRhZ3NcbmV4cG9ydCBjb21tYUxpc3RzIGZyb20gJy4vY29tbWFMaXN0cyc7XG5leHBvcnQgY29tbWFMaXN0c0FuZCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGNvbW1hTGlzdHNPciBmcm9tICcuL2NvbW1hTGlzdHNPcic7XG5leHBvcnQgaHRtbCBmcm9tICcuL2h0bWwnO1xuZXhwb3J0IGNvZGVCbG9jayBmcm9tICcuL2NvZGVCbG9jayc7XG5leHBvcnQgc291cmNlIGZyb20gJy4vc291cmNlJztcbmV4cG9ydCBzYWZlSHRtbCBmcm9tICcuL3NhZmVIdG1sJztcbmV4cG9ydCBvbmVMaW5lIGZyb20gJy4vb25lTGluZSc7XG5leHBvcnQgb25lTGluZVRyaW0gZnJvbSAnLi9vbmVMaW5lVHJpbSc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHMgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHNPciBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuZXhwb3J0IG9uZUxpbmVDb21tYUxpc3RzQW5kIGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGlubGluZUxpc3RzIGZyb20gJy4vaW5saW5lTGlzdHMnO1xuZXhwb3J0IG9uZUxpbmVJbmxpbmVMaXN0cyBmcm9tICcuL29uZUxpbmVJbmxpbmVMaXN0cyc7XG5leHBvcnQgc3RyaXBJbmRlbnQgZnJvbSAnLi9zdHJpcEluZGVudCc7XG5leHBvcnQgc3RyaXBJbmRlbnRzIGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiJdfQ==
// CONCATENATED MODULE: ./src/components/CodeBlock.js












var CodeBlock_prism = function prism(code, language) {
  if (language === void 0) {
    language = 'jsx';
  }

  return Object(prism_core["highlight"])(code, prism_core["languages"][language]);
};

var CodeBlock = mapProps_default()(function (_ref) {
  var mode = _ref.mode,
      codeText = _ref.codeText,
      props = objectWithoutPropertiesLoose_default()(_ref, ["mode", "codeText"]);

  return objectSpread_default()({}, props, {
    dangerouslySetInnerHTML: {
      __html: mode === null ? codeText : CodeBlock_prism(stripIndent_stripIndent([codeText]), mode || 'jsx')
    }
  });
})(Object(styled["styled"])('pre', "CodeBlock", __webpack_require__(217), "code-block", "codeBlock"));
CodeBlock.propTypes = {
  codeText: prop_types_default.a.string.isRequired
};
/* harmony default export */ var components_CodeBlock = __webpack_exports__["default"] = (CodeBlock);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(175) });


/***/ }),
/* 130 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(8);
var cof = __webpack_require__(25);
var MATCH = __webpack_require__(4)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(120),
    createCompounder = __webpack_require__(116);

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(81)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(183);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(185),
    hasUnicode = __webpack_require__(101),
    unicodeToArray = __webpack_require__(186);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _setStatic = _interopRequireDefault(__webpack_require__(211));

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic.default)('displayName', displayName);
};

var _default = setDisplayName;
exports.default = _default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getDisplayName = _interopRequireDefault(__webpack_require__(212));

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + "(" + (0, _getDisplayName.default)(BaseComponent) + ")";
};

var _default = wrapDisplayName;
exports.default = _default;

/***/ }),
/* 139 */,
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
var fails = __webpack_require__(10);
var defined = __webpack_require__(28);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(34);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(86);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(34);
module.exports = __webpack_require__(24).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(11);
var aFunction = __webpack_require__(33);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 145 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(87).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(25)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(89);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(33);
var toObject = __webpack_require__(48);
var IObject = __webpack_require__(49);
var toLength = __webpack_require__(42);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(152);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var isArray = __webpack_require__(64);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [{
  plugin: __webpack_require__(154),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(171),
  options: {
    "plugins": []
  }
}];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

var _gatsby = __webpack_require__(65);

var _catchLinks = _interopRequireDefault(__webpack_require__(170));

exports.onClientEntry = function () {
  (0, _catchLinks.default)(window, function (href) {
    (0, _gatsby.navigate)(href);
  });
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(92),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");
var z="function"===typeof Symbol&&Symbol.iterator;function A(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,c,e,g,h,f],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);A(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null,currentDispatcher:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];e.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:I.current}}
function M(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function V(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=M(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function W(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,aa,b);R(b)}function ba(a,b){var d=I.currentDispatcher;null===d?B("277"):void 0;return d.readContext(a,b)}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,V,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null,unstable_read:null};a.Provider={$$typeof:v,_context:a};a.Consumer=a;a.unstable_read=ba.bind(null,a);return a},forwardRef:function(a){return{$$typeof:y,render:a}},Fragment:r,StrictMode:t,unstable_AsyncMode:x,unstable_Profiler:u,createElement:L,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);
var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];e.children=k}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.5.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,
assign:m}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(157);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(92),ba=__webpack_require__(159);function ca(a,b,c,d,e,f,g,k){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[c,d,e,f,g,k],l=0;a=Error(b.replace(/%s/g,function(){return h[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function w(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:w("227");function da(a,b,c,d,e,f,g,k,h){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,k,h){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,k,h){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else w("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:w("96",a);if(!pa[c]){b.extractEvents?void 0:w("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,k=d;qa.hasOwnProperty(k)?w("99",k):void 0;qa[k]=f;var h=f.phasedRegistrationNames;if(h){for(e in h)h.hasOwnProperty(e)&&ra(h[e],g,k);e=!0}else f.registrationName?(ra(f.registrationName,g,k),e=!0):e=!1;e?void 0:w("98",d,a)}}}}
function ra(a,b,c){sa[a]?w("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=wa(d);la(b,c,void 0,a);a.currentTarget=null}function ya(a,b){null==b?w("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)xa(a,b,c[e],d[e]);else c&&xa(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ca(a){return Ba(a,!0)}function Da(a){return Ba(a,!1)}
var Ea={injectEventPluginOrder:function(a){ma?w("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?w("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Fa(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?w("231",b,typeof c):void 0;
return c}function Ga(a,b){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(b?za(a,Ca):za(a,Da),Aa?w("95"):void 0,ha))throw b=ia,ha=!1,ia=null,b;}var Ha=Math.random().toString(36).slice(2),Ia="__reactInternalInstance$"+Ha,Ja="__reactEventHandlers$"+Ha;function Ka(a){if(a[Ia])return a[Ia];for(;!a[Ia];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ia];return 7===a.tag||8===a.tag?a:null}function La(a){a=a[Ia];return!a||7!==a.tag&&8!==a.tag?null:a}
function Ma(a){if(7===a.tag||8===a.tag)return a.stateNode;w("33")}function Na(a){return a[Ja]||null}function Oa(a){do a=a.return;while(a&&7!==a.tag);return a?a:null}function Pa(a,b,c){if(b=Fa(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Qa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Oa(b);for(b=c.length;0<b--;)Pa(c[b],"captured",a);for(b=0;b<c.length;b++)Pa(c[b],"bubbled",a)}}function Ra(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Fa(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Ta(a){a&&a.dispatchConfig.registrationName&&Ra(a._targetInst,null,a)}
function Ua(a){za(a,Qa)}var Va=!("undefined"===typeof window||!window.document||!window.document.createElement);function Wa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ya={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Za={},$a={};
Va&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function ab(a){if(Za[a])return Za[a];if(!Ya[a])return a;var b=Ya[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in $a)return Za[a]=b[c];return a}
var bb=ab("animationend"),cb=ab("animationiteration"),db=ab("animationstart"),eb=ab("transitionend"),fb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=null,hb=null,ib=null;
function jb(){if(ib)return ib;var a,b=hb,c=b.length,d,e="value"in gb?gb.value:gb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ib=e.slice(a,1<d?1-d:void 0)}function kb(){return!0}function lb(){return!1}
function C(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?kb:lb;this.isPropagationStopped=lb;return this}
n(C.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=kb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=kb)},persist:function(){this.isPersistent=kb},isPersistent:lb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=lb;this._dispatchInstances=this._dispatchListeners=null}});C.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
C.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;mb(c);return c};mb(C);function nb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ob(a){a instanceof this?void 0:w("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function mb(a){a.eventPool=[];a.getPooled=nb;a.release=ob}var pb=C.extend({data:null}),qb=C.extend({data:null}),rb=[9,13,27,32],sb=Va&&"CompositionEvent"in window,tb=null;Va&&"documentMode"in document&&(tb=document.documentMode);
var ub=Va&&"TextEvent"in window&&!tb,vb=Va&&(!sb||tb&&8<tb&&11>=tb),wb=String.fromCharCode(32),xb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},yb=!1;
function zb(a,b){switch(a){case "keyup":return-1!==rb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Ab(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Bb=!1;function Cb(a,b){switch(a){case "compositionend":return Ab(b);case "keypress":if(32!==b.which)return null;yb=!0;return wb;case "textInput":return a=b.data,a===wb&&yb?null:a;default:return null}}
function Db(a,b){if(Bb)return"compositionend"===a||!sb&&zb(a,b)?(a=jb(),ib=hb=gb=null,Bb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return vb&&"ko"!==b.locale?null:b.data;default:return null}}
var Eb={eventTypes:xb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(sb)b:{switch(a){case "compositionstart":e=xb.compositionStart;break b;case "compositionend":e=xb.compositionEnd;break b;case "compositionupdate":e=xb.compositionUpdate;break b}e=void 0}else Bb?zb(a,c)&&(e=xb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=xb.compositionStart);e?(vb&&"ko"!==c.locale&&(Bb||e!==xb.compositionStart?e===xb.compositionEnd&&Bb&&(f=jb()):(gb=d,hb="value"in gb?gb.value:gb.textContent,Bb=
!0)),e=pb.getPooled(e,b,c,d),f?e.data=f:(f=Ab(c),null!==f&&(e.data=f)),Ua(e),f=e):f=null;(a=ub?Cb(a,c):Db(a,c))?(b=qb.getPooled(xb.beforeInput,b,c,d),b.data=a,Ua(b)):b=null;return null===f?b:null===b?f:[f,b]}},Fb=null,Gb=null,Hb=null;function Ib(a){if(a=va(a)){"function"!==typeof Fb?w("280"):void 0;var b=ua(a.stateNode);Fb(a.stateNode,a.type,b)}}function Jb(a){Gb?Hb?Hb.push(a):Hb=[a]:Gb=a}function Kb(){if(Gb){var a=Gb,b=Hb;Hb=Gb=null;Ib(a);if(b)for(a=0;a<b.length;a++)Ib(b[a])}}
function Lb(a,b){return a(b)}function Mb(a,b,c){return a(b,c)}function Nb(){}var Ob=!1;function Pb(a,b){if(Ob)return a(b);Ob=!0;try{return Lb(a,b)}finally{if(Ob=!1,null!==Gb||null!==Hb)Nb(),Kb()}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Qb[a.type]:"textarea"===b?!0:!1}
function Sb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Tb(a){if(!Va)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Ub(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Vb(a){var b=Ub(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Wb(a){a._valueTracker||(a._valueTracker=Vb(a))}function Xb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ub(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Yb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zb=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,$b=E?Symbol.for("react.element"):60103,ac=E?Symbol.for("react.portal"):60106,bc=E?Symbol.for("react.fragment"):60107,cc=E?Symbol.for("react.strict_mode"):60108,dc=E?Symbol.for("react.profiler"):60114,ec=E?Symbol.for("react.provider"):60109,fc=E?Symbol.for("react.context"):60110,gc=E?Symbol.for("react.async_mode"):60111,hc=E?Symbol.for("react.forward_ref"):60112,ic=E?Symbol.for("react.placeholder"):
60113,jc="function"===typeof Symbol&&Symbol.iterator;function kc(a){if(null===a||"object"!==typeof a)return null;a=jc&&a[jc]||a["@@iterator"];return"function"===typeof a?a:null}
function lc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case gc:return"AsyncMode";case bc:return"Fragment";case ac:return"Portal";case dc:return"Profiler";case cc:return"StrictMode";case ic:return"Placeholder"}if("object"===typeof a){switch(a.$$typeof){case fc:return"Context.Consumer";case ec:return"Context.Provider";case hc:return a=a.render,a=a.displayName||a.name||"",""!==a?"ForwardRef("+a+")":"ForwardRef"}if("function"===
typeof a.then&&(a=1===a._reactStatus?a._reactResult:null))return lc(a)}return null}function mc(a){var b="";do{a:switch(a.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var c=a._debugOwner,d=a._debugSource,e=lc(a.type);var f=null;c&&(f=lc(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(Zb,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(nc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function F(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var G={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){G[a]=new F(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];G[b]=new F(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){G[a]=new F(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){G[a]=new F(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){G[a]=new F(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){G[a]=new F(a,3,!0,a,null)});
["capture","download"].forEach(function(a){G[a]=new F(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){G[a]=new F(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){G[a]=new F(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);G[b]=new F(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);G[b]=new F(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);G[b]=new F(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});G.tabIndex=new F("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=G.hasOwnProperty(b)?G[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Dc(a,b){Cc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ec(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ec(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Fc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;d=a.value;c||b===d||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Ec(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Gc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Hc(a,b,c){a=C.getPooled(Gc.change,a,b,c);a.type="change";Jb(c);Ua(a);return a}var Ic=null,Jc=null;function Kc(a){Ga(a,!1)}
function Lc(a){var b=Ma(a);if(Xb(b))return a}function Mc(a,b){if("change"===a)return b}var Nc=!1;Va&&(Nc=Tb("input")&&(!document.documentMode||9<document.documentMode));function Oc(){Ic&&(Ic.detachEvent("onpropertychange",Pc),Jc=Ic=null)}function Pc(a){"value"===a.propertyName&&Lc(Jc)&&(a=Hc(Jc,a,Sb(a)),Pb(Kc,a))}function Qc(a,b,c){"focus"===a?(Oc(),Ic=b,Jc=c,Ic.attachEvent("onpropertychange",Pc)):"blur"===a&&Oc()}function Rc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Lc(Jc)}
function Sc(a,b){if("click"===a)return Lc(b)}function Tc(a,b){if("input"===a||"change"===a)return Lc(b)}
var Uc={eventTypes:Gc,_isInputEventSupported:Nc,extractEvents:function(a,b,c,d){var e=b?Ma(b):window,f=void 0,g=void 0,k=e.nodeName&&e.nodeName.toLowerCase();"select"===k||"input"===k&&"file"===e.type?f=Mc:Rb(e)?Nc?f=Tc:(f=Rc,g=Qc):(k=e.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Sc);if(f&&(f=f(a,b)))return Hc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ec(e,"number",e.value)}},Vc=C.extend({view:null,detail:null}),Wc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Wc[a])?!!b[a]:!1}function Yc(){return Xc}
var Zc=0,$c=0,ad=!1,bd=!1,cd=Vc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Yc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Zc;Zc=a.screenX;return ad?"mousemove"===a.type?a.screenX-b:0:(ad=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=$c;$c=a.screenY;return bd?"mousemove"===a.type?a.screenY-b:0:(bd=!0,0)}}),dd=cd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ed={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},fd={eventTypes:ed,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ka(b):null):f=null;if(f===b)return null;var g=void 0,k=void 0,h=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=cd,k=ed.mouseLeave,h=ed.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=dd,k=ed.pointerLeave,h=ed.pointerEnter,l="pointer";var m=null==f?e:Ma(f);e=null==b?e:Ma(b);a=g.getPooled(k,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(h,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Oa(g))l++;g=0;for(h=e;h;h=Oa(h))g++;for(;0<l-g;)b=Oa(b),l--;for(;0<g-l;)e=Oa(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Oa(b);e=Oa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Oa(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Oa(d)}for(d=0;d<b.length;d++)Ra(b[d],"bubbled",a);for(d=f.length;0<d--;)Ra(f[d],"captured",c);return[a,c]}},gd=Object.prototype.hasOwnProperty;function hd(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function id(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!gd.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function jd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 5===b.tag?2:3}function kd(a){2!==jd(a)?w("188"):void 0}
function ld(a){var b=a.alternate;if(!b)return b=jd(a),3===b?w("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return kd(e),a;if(g===d)return kd(e),b;g=g.sibling}w("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var k=e.child;k;){if(k===c){g=!0;c=e;d=f;break}if(k===d){g=!0;d=e;c=f;break}k=k.sibling}if(!g){for(k=f.child;k;){if(k===c){g=!0;c=f;d=e;break}if(k===d){g=!0;d=f;c=e;break}k=k.sibling}g?
void 0:w("189")}}c.alternate!==d?w("190"):void 0}5!==c.tag?w("188"):void 0;return c.stateNode.current===c?a:b}function md(a){a=ld(a);if(!a)return null;for(var b=a;;){if(7===b.tag||8===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var nd=C.extend({animationName:null,elapsedTime:null,pseudoElement:null}),od=C.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),pd=Vc.extend({relatedTarget:null});function qd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td=Vc.extend({key:function(a){if(a.key){var b=rd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=qd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?sd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Yc,charCode:function(a){return"keypress"===
a.type?qd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?qd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),ud=cd.extend({dataTransfer:null}),vd=Vc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Yc}),wd=C.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),xd=cd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),yd=[["abort","abort"],[bb,"animationEnd"],[cb,"animationIteration"],[db,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[eb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],zd={},Ad={};function Bd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};zd[a]=b;Ad[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Bd(a,!0)});yd.forEach(function(a){Bd(a,!1)});
var Cd={eventTypes:zd,isInteractiveTopLevelEventType:function(a){a=Ad[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Ad[a];if(!e)return null;switch(a){case "keypress":if(0===qd(c))return null;case "keydown":case "keyup":a=td;break;case "blur":case "focus":a=pd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=cd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
ud;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=vd;break;case bb:case cb:case db:a=nd;break;case eb:a=wd;break;case "scroll":a=Vc;break;case "wheel":a=xd;break;case "copy":case "cut":case "paste":a=od;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=dd;break;default:a=C}b=a.getPooled(e,b,c,d);Ua(b);return b}},Dd=Cd.isInteractiveTopLevelEventType,
Ed=[];function Fd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=5!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ka(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Sb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,k=0;k<pa.length;k++){var h=pa[k];h&&(h=h.extractEvents(d,b,f,e))&&(g=ya(g,h))}Ga(g,!1)}}var Gd=!0;
function H(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!1)}function Jd(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!0)}function Hd(a,b){Mb(Id,a,b)}
function Id(a,b){if(Gd){var c=Sb(b);c=Ka(c);null===c||"number"!==typeof c.tag||2===jd(c)||(c=null);if(Ed.length){var d=Ed.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Pb(Fd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Ed.length&&Ed.push(a)}}}var Kd={},Ld=0,Md="_reactListenersID"+(""+Math.random()).slice(2);
function Nd(a){Object.prototype.hasOwnProperty.call(a,Md)||(a[Md]=Ld++,Kd[a[Md]]={});return Kd[a[Md]]}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Pd(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Va&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&id(Zd,c)?null:(Zd=c,a=C.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ua(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Nd(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var k=f[g];if(!e.hasOwnProperty(k)||!e[k]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ma(b):window;switch(a){case "focus":if(Rb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ea.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=Na;va=La;wa=Ma;Ea.injectEventPluginsByName({SimpleEventPlugin:Cd,EnterLeaveEventPlugin:fd,ChangeEventPlugin:Uc,SelectEventPlugin:be,BeforeInputEventPlugin:Eb});function ce(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function de(a,b){a=n({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function fe(a,b){null!=b.dangerouslySetInnerHTML?w("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?w("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:w("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function he(a,b){var c=yc(b.value);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=""+yc(b.defaultValue))}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ke(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var me=void 0,ne=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a]})});
function re(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||pe.hasOwnProperty(e)&&pe[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var se=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function te(a,b){b&&(se[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?w("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?w("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:w("61")),null!=b.style&&"object"!==typeof b.style?w("62",""):void 0)}
function ue(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function ve(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Nd(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Jd("scroll",a);break;case "focus":case "blur":Jd("focus",a);Jd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Tb(e)&&Jd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===fb.indexOf(e)&&H(e,a)}c[e]=!0}}}function we(){}var xe=null,ye=null;
function ze(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ae(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function Be(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function Ce(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var De=[],Ee=-1;function I(a){0>Ee||(a.current=De[Ee],De[Ee]=null,Ee--)}function J(a,b){Ee++;De[Ee]=a.current;a.current=b}var Fe={},K={current:Fe},L={current:!1},Ge=Fe;
function He(a,b){var c=a.type.contextTypes;if(!c)return Fe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ie(a){I(L,a);I(K,a)}function Je(a){I(L,a);I(K,a)}
function Ke(a,b,c){K.current!==Fe?w("168"):void 0;J(K,b,a);J(L,c,a)}function Le(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:w("108",lc(b)||"Unknown",e);return n({},c,d)}function Me(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Fe;Ge=K.current;J(K,b,a);J(L,L.current,a);return!0}
function Ne(a,b,c){var d=a.stateNode;d?void 0:w("169");c?(b=Le(a,b,Ge),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var Oe=null,Pe=null;function Qe(a){return function(b){try{return a(b)}catch(c){}}}
function Re(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Oe=Qe(function(a){return b.onCommitFiberRoot(c,a)});Pe=Qe(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Se(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}
function Te(a){a=a.prototype;return"object"===typeof a&&null!==a&&"object"===typeof a.isReactComponent&&null!==a.isReactComponent}
function Ue(a,b,c){var d=a.alternate;null===d?(d=new Se(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.childExpirationTime=a.childExpirationTime;d.expirationTime=b!==a.pendingProps?c:a.expirationTime;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.firstContextDependency=a.firstContextDependency;d.sibling=a.sibling;
d.index=a.index;d.ref=a.ref;return d}
function Ve(a,b,c){var d=a.type,e=a.key;a=a.props;var f=void 0;if("function"===typeof d)f=Te(d)?2:4;else if("string"===typeof d)f=7;else a:switch(d){case bc:return We(a.children,b,c,e);case gc:f=10;b|=3;break;case cc:f=10;b|=2;break;case dc:return d=new Se(15,a,e,b|4),d.type=dc,d.expirationTime=c,d;case ic:f=16;break;default:if("object"===typeof d&&null!==d)switch(d.$$typeof){case ec:f=12;break a;case fc:f=11;break a;case hc:f=13;break a;default:if("function"===typeof d.then){f=4;break a}}w("130",
null==d?d:typeof d,"")}b=new Se(f,a,e,b);b.type=d;b.expirationTime=c;return b}function We(a,b,c,d){a=new Se(9,a,d,b);a.expirationTime=c;return a}function Xe(a,b,c){a=new Se(8,a,null,b);a.expirationTime=c;return a}function Ye(a,b,c){b=new Se(6,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ze(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);$e(b,a)}function $e(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var af=!1;
function bf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function cf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function df(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function ef(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function ff(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bf(a.memoizedState),e=c.updateQueue=bf(c.memoizedState)):d=a.updateQueue=cf(e):null===e&&(e=c.updateQueue=cf(d));null===e||d===e?ef(d,b):null===d.lastUpdate||null===e.lastUpdate?(ef(d,b),ef(e,b)):(ef(d,b),e.lastUpdate=b)}
function gf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bf(a.memoizedState):hf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function hf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=cf(b));return b}
function jf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:af=!0}return d}
function kf(a,b,c,d,e){af=!1;b=hf(a,b);for(var f=b.baseState,g=null,k=0,h=b.firstUpdate,l=f;null!==h;){var m=h.expirationTime;if(m>e){if(null===g&&(g=h,f=l),0===k||k>m)k=m}else l=jf(a,b,h,l,c,d),null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=h:(b.lastEffect.nextEffect=h,b.lastEffect=h));h=h.next}m=null;for(h=b.firstCapturedUpdate;null!==h;){var t=h.expirationTime;if(t>e){if(null===m&&(m=h,null===g&&(f=l)),0===k||k>t)k=t}else l=jf(a,b,h,l,c,d),
null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=h:(b.lastCapturedEffect.nextEffect=h,b.lastCapturedEffect=h));h=h.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=k;a.memoizedState=l}
function lf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);mf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;mf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function mf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?w("191",c):void 0;c.call(d)}a=a.nextEffect}}
function nf(a,b){return{value:a,source:b,stack:mc(b)}}var of={current:null},pf=null,qf=null,rf=null;function sf(a,b){var c=a.type._context;J(of,c._currentValue,a);c._currentValue=b}function tf(a){var b=of.current;I(of,a);a.type._context._currentValue=b}function uf(a){pf=a;rf=qf=null;a.firstContextDependency=null}
function vf(a,b){if(rf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)rf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===qf?(null===pf?w("277"):void 0,pf.firstContextDependency=qf=b):qf=qf.next=b}return a._currentValue}var wf={},N={current:wf},xf={current:wf},yf={current:wf};function zf(a){a===wf?w("174"):void 0;return a}
function Af(a,b){J(yf,b,a);J(xf,a,a);J(N,wf,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c)}I(N,a);J(N,b,a)}function Bf(a){I(N,a);I(xf,a);I(yf,a)}function Cf(a){zf(yf.current);var b=zf(N.current);var c=le(b,a.type);b!==c&&(J(xf,a,a),J(N,c,a))}function Df(a){xf.current===a&&(I(N,a),I(xf,a))}var Ef=(new aa.Component).refs;
function Ff(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Jf={isMounted:function(a){return(a=a._reactInternalFiber)?2===jd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gf();c=Hf(c,a);var d=df(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);ff(a,d);If(a,c)}};function Kf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!id(c,d)||!id(e,f):!0}function Lf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jf.enqueueReplaceState(b,b.state,null)}
function Mf(a,b,c,d){var e=a.stateNode,f=M(b)?Ge:K.current;e.props=c;e.state=a.memoizedState;e.refs=Ef;e.context=He(a,f);f=a.updateQueue;null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Ff(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&
e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Nf=Array.isArray;
function Of(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag&&3!==c.tag?w("110"):void 0,d=c.stateNode);d?void 0:w("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ef&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?w("284"):void 0;c._owner?void 0:w("254",a)}return a}
function Pf(a,b){"textarea"!==a.type&&w("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Qf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ue(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function k(a,b,c,d){if(null===b||8!==b.tag)return b=Xe(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function h(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Of(a,b,c),d.return=a,d;d=Ve(c,a.mode,d);d.ref=Of(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||6!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ye(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||9!==b.tag)return b=We(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function t(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Xe(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case $b:return c=Ve(b,a.mode,c),c.ref=Of(a,null,b),c.return=a,c;case ac:return b=Ye(b,a.mode,c),b.return=a,b}if(Nf(b)||kc(b))return b=We(b,a.mode,c,null),b.return=
a,b;Pf(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:k(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case $b:return c.key===e?c.type===bc?m(a,b,c.props.children,d,e):h(a,b,c,d):null;case ac:return c.key===e?l(a,b,c,d):null}if(Nf(c)||kc(c))return null!==e?null:m(a,b,c,d,null);Pf(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,k(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case $b:return a=a.get(null===d.key?c:d.key)||null,d.type===bc?m(b,a,d.props.children,e,d.key):h(b,a,d,e);case ac:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Nf(d)||kc(d))return a=a.get(c)||null,m(b,a,d,e,null);Pf(b,d)}return null}function y(e,g,h,k){for(var l=null,r=null,p=g,m=g=0,q=null;null!==p&&m<h.length;m++){p.index>m?(q=p,p=null):q=p.sibling;var v=x(e,p,h[m],k);if(null===v){null===p&&(p=q);break}a&&p&&null===v.alternate&&b(e,
p);g=f(v,g,m);null===r?l=v:r.sibling=v;r=v;p=q}if(m===h.length)return c(e,p),l;if(null===p){for(;m<h.length;m++)if(p=t(e,h[m],k))g=f(p,g,m),null===r?l=p:r.sibling=p,r=p;return l}for(p=d(e,p);m<h.length;m++)if(q=z(p,e,m,h[m],k))a&&null!==q.alternate&&p.delete(null===q.key?m:q.key),g=f(q,g,m),null===r?l=q:r.sibling=q,r=q;a&&p.forEach(function(a){return b(e,a)});return l}function u(e,g,h,k){var l=kc(h);"function"!==typeof l?w("150"):void 0;h=l.call(h);null==h?w("151"):void 0;for(var m=l=null,p=g,r=g=
0,q=null,v=h.next();null!==p&&!v.done;r++,v=h.next()){p.index>r?(q=p,p=null):q=p.sibling;var u=x(e,p,v.value,k);if(null===u){p||(p=q);break}a&&p&&null===u.alternate&&b(e,p);g=f(u,g,r);null===m?l=u:m.sibling=u;m=u;p=q}if(v.done)return c(e,p),l;if(null===p){for(;!v.done;r++,v=h.next())v=t(e,v.value,k),null!==v&&(g=f(v,g,r),null===m?l=v:m.sibling=v,m=v);return l}for(p=d(e,p);!v.done;r++,v=h.next())v=z(p,e,r,v.value,k),null!==v&&(a&&null!==v.alternate&&p.delete(null===v.key?r:v.key),g=f(v,g,r),null===
m?l=v:m.sibling=v,m=v);a&&p.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===bc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case $b:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(9===k.tag?f.type===bc:k.type===f.type){c(a,k.sibling);d=e(k,f.type===bc?f.props.children:f.props,h);d.ref=Of(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===bc?(d=We(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Ve(f,a.mode,h),h.ref=Of(a,d,f),h.return=a,a=h)}return g(a);case ac:a:{for(k=f.key;null!==d;){if(d.key===k)if(6===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ye(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&8===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Xe(f,a.mode,h),d.return=a,a=d),g(a);if(Nf(f))return y(a,d,f,h);if(kc(f))return u(a,d,f,h);l&&Pf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 3:case 0:h=a.type,w("152",h.displayName||h.name||"Component")}return c(a,d)}}var Rf=Qf(!0),Sf=Qf(!1),Tf=null,Uf=null,Vf=!1;function Wf(a,b){var c=new Se(7,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Xf(a,b){switch(a.tag){case 7:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 8:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Yf(a){if(Vf){var b=Uf;if(b){var c=b;if(!Xf(a,b)){b=Be(c);if(!b||!Xf(a,b)){a.effectTag|=2;Vf=!1;Tf=a;return}Wf(Tf,c)}Tf=a;Uf=Ce(b)}else a.effectTag|=2,Vf=!1,Tf=a}}
function Zf(a){for(a=a.return;null!==a&&7!==a.tag&&5!==a.tag;)a=a.return;Tf=a}function $f(a){if(a!==Tf)return!1;if(!Vf)return Zf(a),Vf=!0,!1;var b=a.type;if(7!==a.tag||"head"!==b&&"body"!==b&&!Ae(b,a.memoizedProps))for(b=Uf;b;)Wf(a,b),b=Be(b);Zf(a);Uf=Tf?Be(a.stateNode):null;return!0}function ag(){Uf=Tf=null;Vf=!1}
function bg(a){switch(a._reactStatus){case 1:return a._reactResult;case 2:throw a._reactResult;case 0:throw a;default:throw a._reactStatus=0,a.then(function(b){if(0===a._reactStatus){a._reactStatus=1;if("object"===typeof b&&null!==b){var c=b.default;b=void 0!==c&&null!==c?c:b}a._reactResult=b}},function(b){0===a._reactStatus&&(a._reactStatus=2,a._reactResult=b)}),a;}}var cg=Yb.ReactCurrentOwner;function O(a,b,c,d){b.child=null===a?Sf(b,null,c,d):Rf(b,a.child,c,d)}
function dg(a,b,c,d,e){c=c.render;var f=b.ref;if(!L.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return eg(a,b,e);c=c(d,f);O(a,b,c,e);b.memoizedProps=d;return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function gg(a,b,c,d,e){var f=M(c)?Ge:K.current;f=He(b,f);uf(b,e);c=c(d,f);b.effectTag|=1;O(a,b,c,e);b.memoizedProps=d;return b.child}
function hg(a,b,c,d,e){if(M(c)){var f=!0;Me(b)}else f=!1;uf(b,e);if(null===a)if(null===b.stateNode){var g=M(c)?Ge:K.current,k=c.contextTypes,h=null!==k&&void 0!==k;k=h?He(b,g):Fe;var l=new c(d,k);b.memoizedState=null!==l.state&&void 0!==l.state?l.state:null;l.updater=Jf;b.stateNode=l;l._reactInternalFiber=b;h&&(h=b.stateNode,h.__reactInternalMemoizedUnmaskedChildContext=g,h.__reactInternalMemoizedMaskedChildContext=k);Mf(b,c,d,e);d=!0}else{g=b.stateNode;k=b.memoizedProps;g.props=k;var m=g.context;
h=M(c)?Ge:K.current;h=He(b,h);var t=c.getDerivedStateFromProps;(l="function"===typeof t||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(k!==d||m!==h)&&Lf(b,g,d,h);af=!1;var x=b.memoizedState;m=g.state=x;var z=b.updateQueue;null!==z&&(kf(b,z,d,g,e),m=b.memoizedState);k!==d||x!==m||L.current||af?("function"===typeof t&&(Ff(b,c,t,d),m=b.memoizedState),(k=af||Kf(b,c,k,d,x,m,h))?(l||"function"!==
typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=h,d=k):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,k=
b.memoizedProps,g.props=k,m=g.context,h=M(c)?Ge:K.current,h=He(b,h),t=c.getDerivedStateFromProps,(l="function"===typeof t||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(k!==d||m!==h)&&Lf(b,g,d,h),af=!1,m=b.memoizedState,x=g.state=m,z=b.updateQueue,null!==z&&(kf(b,z,d,g,e),x=b.memoizedState),k!==d||m!==x||L.current||af?("function"===typeof t&&(Ff(b,c,t,d),x=b.memoizedState),(t=af||Kf(b,c,k,d,
m,x,h))?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,h),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,h)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==
typeof g.getSnapshotBeforeUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=h,d=t):("function"!==typeof g.componentDidUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return ig(a,b,c,d,f,e)}
function ig(a,b,c,d,e,f){fg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Ne(b,c,!1),eg(a,b,f);d=b.stateNode;cg.current=b;var k=g?null:d.render();b.effectTag|=1;null!==a&&g&&(O(a,b,null,f),b.child=null);O(a,b,k,f);b.memoizedState=d.state;b.memoizedProps=d.props;e&&Ne(b,c,!0);return b.child}function jg(a){var b=a.stateNode;b.pendingContext?Ke(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ke(a,b.context,!1);Af(a,b.containerInfo)}
function ng(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function og(a,b,c,d){null!==a?w("155"):void 0;var e=b.pendingProps;if("object"===typeof c&&null!==c&&"function"===typeof c.then){c=bg(c);var f=c;f="function"===typeof f?Te(f)?3:1:void 0!==f&&null!==f&&f.$$typeof?14:4;f=b.tag=f;var g=ng(c,e);switch(f){case 1:return gg(a,b,c,g,d);case 3:return hg(a,b,c,g,d);case 14:return dg(a,b,c,g,d);default:w("283",c)}}f=He(b,K.current);uf(b,d);f=c(e,f);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=2;M(c)?
(g=!0,Me(b)):g=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var k=c.getDerivedStateFromProps;"function"===typeof k&&Ff(b,c,k,e);f.updater=Jf;b.stateNode=f;f._reactInternalFiber=b;Mf(b,c,e,d);return ig(a,b,c,!0,g,d)}b.tag=0;O(a,b,f,d);b.memoizedProps=e;return b.child}
function eg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?w("153"):void 0;if(null!==b.child){a=b.child;c=Ue(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ue(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function pg(a,b,c){var d=b.expirationTime;if(!L.current&&(0===d||d>c)){switch(b.tag){case 5:jg(b);ag();break;case 7:Cf(b);break;case 2:M(b.type)&&Me(b);break;case 3:M(b.type._reactResult)&&Me(b);break;case 6:Af(b,b.stateNode.containerInfo);break;case 12:sf(b,b.memoizedProps.value)}return eg(a,b,c)}b.expirationTime=0;switch(b.tag){case 4:return og(a,b,b.type,c);case 0:return gg(a,b,b.type,b.pendingProps,c);case 1:var e=b.type._reactResult;d=b.pendingProps;a=gg(a,b,e,ng(e,d),c);b.memoizedProps=d;return a;
case 2:return hg(a,b,b.type,b.pendingProps,c);case 3:return e=b.type._reactResult,d=b.pendingProps,a=hg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 5:jg(b);d=b.updateQueue;null===d?w("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;kf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)ag(),b=eg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Uf=Ce(b.stateNode.containerInfo),Tf=b,e=Vf=!0;e?(b.effectTag|=2,b.child=Sf(b,null,d,c)):(O(a,b,d,c),ag());b=b.child}return b;
case 7:Cf(b);null===a&&Yf(b);d=b.type;e=b.pendingProps;var f=null!==a?a.memoizedProps:null,g=e.children;Ae(d,e)?g=null:null!==f&&Ae(d,f)&&(b.effectTag|=16);fg(a,b);1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b.memoizedProps=e,b=null):(O(a,b,g,c),b.memoizedProps=e,b=b.child);return b;case 8:return null===a&&Yf(b),b.memoizedProps=b.pendingProps,null;case 16:return null;case 6:return Af(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Rf(b,null,d,c):O(a,b,d,c),b.memoizedProps=
d,b.child;case 13:return dg(a,b,b.type,b.pendingProps,c);case 14:return e=b.type._reactResult,d=b.pendingProps,a=dg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 9:return d=b.pendingProps,O(a,b,d,c),b.memoizedProps=d,b.child;case 10:return d=b.pendingProps.children,O(a,b,d,c),b.memoizedProps=d,b.child;case 15:return d=b.pendingProps,O(a,b,d.children,c),b.memoizedProps=d,b.child;case 12:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;b.memoizedProps=e;sf(b,f);if(null!==g){var k=g.value;
f=k===f&&(0!==k||1/k===1/f)||k!==k&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(k,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=eg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){k=g.firstContextDependency;if(null!==k){do{if(k.context===d&&0!==(k.observedBits&f)){if(2===g.tag||3===g.tag){var h=df(c);h.tag=2;ff(g,h)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;h=g.alternate;null!==h&&(0===h.expirationTime||
h.expirationTime>c)&&(h.expirationTime=c);for(var l=g.return;null!==l;){h=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==h&&(0===h.childExpirationTime||h.childExpirationTime>c)&&(h.childExpirationTime=c);else if(null!==h&&(0===h.childExpirationTime||h.childExpirationTime>c))h.childExpirationTime=c;else break;l=l.return}}h=g.child;k=k.next}while(null!==k)}else h=12===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==
h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}O(a,b,e.children,c);b=b.child}return b;case 11:return f=b.type,d=b.pendingProps,e=d.children,uf(b,c),f=vf(f,d.unstable_observedBits),e=e(f),b.effectTag|=1,O(a,b,e,c),b.memoizedProps=d,b.child;default:w("156")}}function qg(a){a.effectTag|=4}var rg=void 0,sg=void 0,tg=void 0;rg=function(){};sg=function(a,b,c){(b.updateQueue=c)&&qg(b)};tg=function(a,b,c,d){c!==d&&qg(b)};
function ug(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=mc(c));null!==c&&lc(c.type);b=b.value;null!==a&&2===a.tag&&lc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function vg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){wg(a,c)}else b.current=null}
function xg(a){"function"===typeof Pe&&Pe(a);switch(a.tag){case 2:case 3:vg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){wg(a,c)}break;case 7:vg(a);break;case 6:yg(a)}}function zg(a){return 7===a.tag||5===a.tag||6===a.tag}
function Ag(a){a:{for(var b=a.return;null!==b;){if(zg(b)){var c=b;break a}b=b.return}w("160");c=void 0}var d=b=void 0;switch(c.tag){case 7:b=c.stateNode;d=!1;break;case 5:b=c.stateNode.containerInfo;d=!0;break;case 6:b=c.stateNode.containerInfo;d=!0;break;default:w("161")}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||zg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;7!==c.tag&&8!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||6===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(7===e.tag||8===e.tag)if(c)if(d){var f=b,g=e.stateNode,k=c;8===f.nodeType?f.parentNode.insertBefore(g,k):f.insertBefore(g,k)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?(k=f.parentNode,k.insertBefore(g,f)):(k=f,k.appendChild(g)),null===k.onclick&&(k.onclick=we)):b.appendChild(e.stateNode);else if(6!==e.tag&&null!==e.child){e.child.return=
e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function yg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?w("160"):void 0;switch(c.tag){case 7:d=c.stateNode;e=!1;break a;case 5:d=c.stateNode.containerInfo;e=!0;break a;case 6:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(7===b.tag||8===b.tag){a:for(var f=b,g=f;;)if(xg(g),null!==g.child&&6!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(6===b.tag?(d=b.stateNode.containerInfo,e=!0):xg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;6===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Bg(a,b){switch(b.tag){case 2:case 3:break;case 7:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ja]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cc(c,d);ue(a,e);b=ue(a,d);for(e=0;e<f.length;e+=2){var g=f[e],k=f[e+1];"style"===g?re(c,k):"dangerouslySetInnerHTML"===g?ne(c,k):"children"===g?oe(c,k):xc(c,g,k,b)}switch(a){case "input":Dc(c,d);break;case "textarea":he(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?ee(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?ee(c,!!d.multiple,d.defaultValue,!0):ee(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 8:null===b.stateNode?w("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 5:break;case 15:break;case 16:break;default:w("163")}}function Cg(a,b,c){c=df(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Dg(d);ug(a,b)};return c}
function Eg(a,b,c){c=df(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===Fg?Fg=new Set([this]):Fg.add(this);var c=b.value,d=b.stack;ug(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function Gg(a){switch(a.tag){case 2:M(a.type)&&Ie(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return M(a.type._reactResult)&&Ie(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return Bf(a),Je(a),b=a.effectTag,0!==(b&64)?w("285"):void 0,a.effectTag=b&-1025|64,a;case 7:return Df(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 6:return Bf(a),null;case 12:return tf(a),null;default:return null}}
var Hg={readContext:vf},Ig=Yb.ReactCurrentOwner,Jg=0,Kg=0,Lg=!1,P=null,Mg=null,Q=0,Ng=!1,R=null,Og=!1,Fg=null;function Pg(){if(null!==P)for(var a=P.return;null!==a;){var b=a;switch(b.tag){case 2:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 3:c=b.type._reactResult.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 5:Bf(b);Je(b);break;case 7:Df(b);break;case 6:Bf(b);break;case 12:tf(b)}a=a.return}Mg=null;Q=0;Ng=!1;P=null}
function Qg(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 0:case 1:break;case 2:M(b.type)&&Ie(b);break;case 3:M(b.type._reactResult)&&Ie(b);break;case 5:Bf(b);Je(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)$f(b),b.effectTag&=-3;rg(b);break;case 7:Df(b);var g=zf(yf.current),k=b.type;if(null!==e&&null!=b.stateNode){var h=e.memoizedProps;if(h!==f){var l=
b.stateNode,m=zf(N.current),t=l,x=k;var z=h;var y=f;l=g;var u=null;switch(x){case "input":z=zc(t,z);y=zc(t,y);u=[];break;case "option":z=de(t,z);y=de(t,y);u=[];break;case "select":z=n({},z,{value:void 0});y=n({},y,{value:void 0});u=[];break;case "textarea":z=fe(t,z);y=fe(t,y);u=[];break;default:"function"!==typeof z.onClick&&"function"===typeof y.onClick&&(t.onclick=we)}te(x,y);x=t=void 0;var v=null;for(t in z)if(!y.hasOwnProperty(t)&&z.hasOwnProperty(t)&&null!=z[t])if("style"===t){var r=z[t];for(x in r)r.hasOwnProperty(x)&&
(v||(v={}),v[x]="")}else"dangerouslySetInnerHTML"!==t&&"children"!==t&&"suppressContentEditableWarning"!==t&&"suppressHydrationWarning"!==t&&"autoFocus"!==t&&(sa.hasOwnProperty(t)?u||(u=[]):(u=u||[]).push(t,null));for(t in y){var p=y[t];r=null!=z?z[t]:void 0;if(y.hasOwnProperty(t)&&p!==r&&(null!=p||null!=r))if("style"===t)if(r){for(x in r)!r.hasOwnProperty(x)||p&&p.hasOwnProperty(x)||(v||(v={}),v[x]="");for(x in p)p.hasOwnProperty(x)&&r[x]!==p[x]&&(v||(v={}),v[x]=p[x])}else v||(u||(u=[]),u.push(t,
v)),v=p;else"dangerouslySetInnerHTML"===t?(p=p?p.__html:void 0,r=r?r.__html:void 0,null!=p&&r!==p&&(u=u||[]).push(t,""+p)):"children"===t?r===p||"string"!==typeof p&&"number"!==typeof p||(u=u||[]).push(t,""+p):"suppressContentEditableWarning"!==t&&"suppressHydrationWarning"!==t&&(sa.hasOwnProperty(t)?(null!=p&&ve(l,t),u||r===p||(u=[])):(u=u||[]).push(t,p))}v&&(u=u||[]).push("style",v);sg(e,b,u,k,h,f,g,m)}e.ref!==b.ref&&(b.effectTag|=128)}else if(f){u=zf(N.current);if($f(b)){f=b;l=f.stateNode;e=f.type;
h=f.memoizedProps;m=g;l[Ia]=f;l[Ja]=h;k=void 0;g=l;switch(e){case "iframe":case "object":H("load",g);break;case "video":case "audio":for(l=0;l<fb.length;l++)H(fb[l],g);break;case "source":H("error",g);break;case "img":case "image":case "link":H("error",g);H("load",g);break;case "form":H("reset",g);H("submit",g);break;case "details":H("toggle",g);break;case "input":Bc(g,h);H("invalid",g);ve(m,"onChange");break;case "select":g._wrapperState={wasMultiple:!!h.multiple};H("invalid",g);ve(m,"onChange");
break;case "textarea":ge(g,h),H("invalid",g),ve(m,"onChange")}te(e,h);l=null;for(k in h)h.hasOwnProperty(k)&&(u=h[k],"children"===k?"string"===typeof u?g.textContent!==u&&(l=["children",u]):"number"===typeof u&&g.textContent!==""+u&&(l=["children",""+u]):sa.hasOwnProperty(k)&&null!=u&&ve(m,k));switch(e){case "input":Wb(g);Fc(g,h,!0);break;case "textarea":Wb(g);ie(g,h);break;case "select":case "option":break;default:"function"===typeof h.onClick&&(g.onclick=we)}k=l;f.updateQueue=k;f=null!==k?!0:!1;
f&&qg(b)}else{h=b;e=k;m=f;l=9===g.nodeType?g:g.ownerDocument;u===je.html&&(u=ke(e));u===je.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof m.is?l=l.createElement(e,{is:m.is}):(l=l.createElement(e),"select"===e&&m.multiple&&(l.multiple=!0)):l=l.createElementNS(u,e);e=l;e[Ia]=h;e[Ja]=f;a:for(h=e,m=b,l=m.child;null!==l;){if(7===l.tag||8===l.tag)h.appendChild(l.stateNode);else if(6!==l.tag&&null!==l.child){l.child.return=
l;l=l.child;continue}if(l===m)break;for(;null===l.sibling;){if(null===l.return||l.return===m)break a;l=l.return}l.sibling.return=l.return;l=l.sibling}m=e;l=k;h=f;t=g;v=ue(l,h);switch(l){case "iframe":case "object":H("load",m);g=h;break;case "video":case "audio":for(g=0;g<fb.length;g++)H(fb[g],m);g=h;break;case "source":H("error",m);g=h;break;case "img":case "image":case "link":H("error",m);H("load",m);g=h;break;case "form":H("reset",m);H("submit",m);g=h;break;case "details":H("toggle",m);g=h;break;
case "input":Bc(m,h);g=zc(m,h);H("invalid",m);ve(t,"onChange");break;case "option":g=de(m,h);break;case "select":m._wrapperState={wasMultiple:!!h.multiple};g=n({},h,{value:void 0});H("invalid",m);ve(t,"onChange");break;case "textarea":ge(m,h);g=fe(m,h);H("invalid",m);ve(t,"onChange");break;default:g=h}te(l,g);u=void 0;z=l;y=m;x=g;for(u in x)x.hasOwnProperty(u)&&(r=x[u],"style"===u?re(y,r):"dangerouslySetInnerHTML"===u?(r=r?r.__html:void 0,null!=r&&ne(y,r)):"children"===u?"string"===typeof r?("textarea"!==
z||""!==r)&&oe(y,r):"number"===typeof r&&oe(y,""+r):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(sa.hasOwnProperty(u)?null!=r&&ve(t,u):null!=r&&xc(y,u,r,v)));switch(l){case "input":Wb(m);Fc(m,h,!1);break;case "textarea":Wb(m);ie(m,h);break;case "option":null!=h.value&&m.setAttribute("value",""+yc(h.value));break;case "select":g=m;g.multiple=!!h.multiple;m=h.value;null!=m?ee(g,!!h.multiple,m,!1):null!=h.defaultValue&&ee(g,!!h.multiple,h.defaultValue,!0);break;
default:"function"===typeof g.onClick&&(m.onclick=we)}(f=ze(k,f))&&qg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?w("166"):void 0;break;case 8:e&&null!=b.stateNode?tg(e,b,e.memoizedProps,f):("string"!==typeof f&&(null===b.stateNode?w("166"):void 0),g=zf(yf.current),zf(N.current),$f(b)?(f=b,k=f.stateNode,g=f.memoizedProps,k[Ia]=f,(f=k.nodeValue!==g)&&qg(b)):(k=b,f=(9===g.nodeType?g:g.ownerDocument).createTextNode(f),f[Ia]=k,b.stateNode=f));break;case 13:case 14:break;
case 16:break;case 9:break;case 10:break;case 15:break;case 6:Bf(b);rg(b);break;case 12:tf(b);break;case 11:break;case 4:w("167");default:w("156")}b=P=null;f=a;if(1073741823===Q||1073741823!==f.childExpirationTime){k=0;for(g=f.child;null!==g;){e=g.expirationTime;h=g.childExpirationTime;if(0===k||0!==e&&e<k)k=e;if(0===k||0!==h&&h<k)k=h;g=g.sibling}f.childExpirationTime=k}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gg(a,Q);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Rg(a){var b=pg(a.alternate,a,Q);null===b&&(b=Qg(a));Ig.current=null;return b}
function Sg(a,b,c){Lg?w("243"):void 0;Lg=!0;Ig.currentDispatcher=Hg;var d=a.nextExpirationTimeToWorkOn;if(d!==Q||a!==Mg||null===P)Pg(),Mg=a,Q=d,P=Ue(Mg.current,null,Q),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==P&&!Tg();)P=Rg(P);else for(;null!==P;)P=Rg(P)}catch(t){if(null===P)e=!0,Dg(t);else{null===P?w("271"):void 0;var f=P,g=f.return;if(null===g)e=!0,Dg(t);else{a:{var k=g,h=f,l=t;g=Q;h.effectTag|=512;h.firstEffect=h.lastEffect=null;Ng=!0;l=nf(l,h);do{switch(k.tag){case 5:k.effectTag|=
1024;k.expirationTime=g;g=Cg(k,l,g);gf(k,g);break a;case 2:case 3:h=l;var m=k.stateNode;if(0===(k.effectTag&64)&&null!==m&&"function"===typeof m.componentDidCatch&&(null===Fg||!Fg.has(m))){k.effectTag|=1024;k.expirationTime=g;g=Eg(k,h,g);gf(k,g);break a}}k=k.return}while(null!==k)}P=Qg(f);continue}}}break}while(1);Lg=!1;rf=qf=pf=Ig.currentDispatcher=null;if(e)Mg=null,a.finishedWork=null;else if(null!==P)a.finishedWork=null;else{b=a.current.alternate;null===b?w("281"):void 0;Mg=null;if(Ng){e=a.latestPendingTime;
f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){a.didError=!1;c=a.latestPingedTime;0!==c&&c<=d&&(a.latestPingedTime=0);c=a.earliestPendingTime;b=a.latestPendingTime;c===d?a.earliestPendingTime=b===d?a.latestPendingTime=0:b:b===d&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;b=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=d:c>d?a.earliestSuspendedTime=d:b<d&&(a.latestSuspendedTime=d);$e(d,a);a.expirationTime=a.expirationTime;return}if(!a.didError&&
!c){a.didError=!0;a.nextExpirationTimeToWorkOn=d;d=a.expirationTime=1;a.expirationTime=d;return}}a.pendingCommitExpirationTime=d;a.finishedWork=b}}
function wg(a,b){var c;a:{Lg&&!Og?w("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:case 3:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===Fg||!Fg.has(d))){a=nf(b,a);a=Eg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}break;case 5:a=nf(b,a);a=Cg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}c=c.return}5===a.tag&&(c=nf(b,a),c=Cg(a,c,1),ff(a,c),If(a,1));c=void 0}return c}
function Hf(a,b){0!==Kg?a=Kg:Lg?a=Og?1:Q:b.mode&1?(a=Ug?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==Mg&&a===Q&&(a+=1)):a=1;Ug&&(0===Vg||a>Vg)&&(Vg=a);return a}
function If(a,b){a:{if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return;if(null===d&&5===a.tag)a=a.stateNode;else{for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&5===d.tag){a=d.stateNode;break a}d=d.return}a=null}}if(null!==
a){!Lg&&0!==Q&&b<Q&&Pg();Ze(a,b);if(!Lg||Og||Mg!==a){b=a;a=a.expirationTime;if(null===b.nextScheduledRoot)b.expirationTime=a,null===T?(U=T=b,b.nextScheduledRoot=b):(T=T.nextScheduledRoot=b,T.nextScheduledRoot=U);else if(c=b.expirationTime,0===c||a<c)b.expirationTime=a;V||(W?Wg&&(Y=b,Z=1,Xg(b,1,!0)):1===a?Yg(1,null):Zg(b,a))}$g>ah&&($g=0,w("185"))}}function bh(a,b,c,d,e){var f=Kg;Kg=1;try{return a(b,c,d,e)}finally{Kg=f}}
var U=null,T=null,ch=0,dh=void 0,V=!1,Y=null,Z=0,Vg=0,eh=!1,fh=!1,gh=null,hh=null,W=!1,Wg=!1,Ug=!1,ih=null,jh=ba.unstable_now(),kh=(jh/10|0)+2,lh=kh,ah=50,$g=0,mh=null,nh=1;function oh(){kh=((ba.unstable_now()-jh)/10|0)+2}function Zg(a,b){if(0!==ch){if(b>ch)return;null!==dh&&ba.unstable_cancelScheduledWork(dh)}ch=b;a=ba.unstable_now()-jh;dh=ba.unstable_scheduleWork(ph,{timeout:10*(b-2)-a})}function Gf(){if(V)return lh;qh();if(0===Z||1073741823===Z)oh(),lh=kh;return lh}
function qh(){var a=0,b=null;if(null!==T)for(var c=T,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===T?w("244"):void 0;if(d===d.nextScheduledRoot){U=T=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,T.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===T){T=c;T.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===T)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}Y=b;Z=a}function ph(a){if(a.didTimeout&&null!==U){oh();var b=U;do{var c=b.expirationTime;0!==c&&kh>=c&&(b.nextExpirationTimeToWorkOn=kh);b=b.nextScheduledRoot}while(b!==U)}Yg(0,a)}
function Yg(a,b){hh=b;qh();if(null!==hh)for(oh(),lh=kh;null!==Y&&0!==Z&&(0===a||a>=Z)&&(!eh||kh>=Z);)Xg(Y,Z,kh>=Z),qh(),oh(),lh=kh;else for(;null!==Y&&0!==Z&&(0===a||a>=Z);)Xg(Y,Z,!0),qh();null!==hh&&(ch=0,dh=null);0!==Z&&Zg(Y,Z);hh=null;eh=!1;$g=0;mh=null;if(null!==ih)for(a=ih,ih=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){fh||(fh=!0,gh=d)}}if(fh)throw a=gh,gh=null,fh=!1,a;}
function Xg(a,b,c){V?w("245"):void 0;V=!0;if(null===hh||c){var d=a.finishedWork;null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!1,c),d=a.finishedWork,null!==d&&rh(a,d,b))}else d=a.finishedWork,null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!0,c),d=a.finishedWork,null!==d&&(Tg()?a.finishedWork=d:rh(a,d,b)));V=!1}
function rh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ih?ih=[d]:ih.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===mh?$g++:(mh=a,$g=0);Og=Lg=!0;a.current===b?w("177"):void 0;c=a.pendingCommitExpirationTime;0===c?w("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=0===d||0!==e&&e<d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0):(e=a.latestPendingTime,0!==e&&(e<d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?Ze(a,d):d>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Ze(a,d)):d<e&&Ze(a,d));$e(0,a);Ig.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;xe=Gd;e=Td();if(Ud(e)){if("selectionStart"in e)var f=
{start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var k=g.anchorOffset,h=g.focusNode;g=g.focusOffset;try{f.nodeType,h.nodeType}catch(Xa){f=null;break a}var l=0,m=-1,t=-1,x=0,z=0,y=e,u=null;b:for(;;){for(var v;;){y!==f||0!==k&&3!==y.nodeType||(m=l+k);y!==h||0!==g&&3!==y.nodeType||(t=l+g);3===y.nodeType&&(l+=y.nodeValue.length);if(null===(v=y.firstChild))break;u=y;y=v}for(;;){if(y===
e)break b;u===f&&++x===k&&(m=l);u===h&&++z===g&&(t=l);if(null!==(v=y.nextSibling))break;y=u;u=y.parentNode}y=v}f=-1===m||-1===t?null:{start:m,end:t}}else f=null}f=f||{start:0,end:0}}else f=null;ye={focusedElem:e,selectionRange:f};Gd=!1;for(R=d;null!==R;){e=!1;f=void 0;try{for(;null!==R;){if(R.effectTag&256){var r=R.alternate;a:switch(k=R,k.tag){case 2:case 3:if(k.effectTag&256&&null!==r){var p=r.memoizedProps,D=r.memoizedState,S=k.stateNode;S.props=k.memoizedProps;S.state=k.memoizedState;var yh=S.getSnapshotBeforeUpdate(p,
D);S.__reactInternalSnapshotBeforeUpdate=yh}break a;case 5:case 7:case 8:case 6:break a;default:w("163")}}R=R.nextEffect}}catch(Xa){e=!0,f=Xa}e&&(null===R?w("178"):void 0,wg(R,f),null!==R&&(R=R.nextEffect))}for(R=d;null!==R;){r=!1;p=void 0;try{for(;null!==R;){var A=R.effectTag;A&16&&oe(R.stateNode,"");if(A&128){var B=R.alternate;if(null!==B){var q=B.ref;null!==q&&("function"===typeof q?q(null):q.current=null)}}switch(A&14){case 2:Ag(R);R.effectTag&=-3;break;case 6:Ag(R);R.effectTag&=-3;Bg(R.alternate,
R);break;case 4:Bg(R.alternate,R);break;case 8:D=R,yg(D),D.return=null,D.child=null,D.alternate&&(D.alternate.child=null,D.alternate.return=null)}R=R.nextEffect}}catch(Xa){r=!0,p=Xa}r&&(null===R?w("178"):void 0,wg(R,p),null!==R&&(R=R.nextEffect))}q=ye;B=Td();A=q.focusedElem;p=q.selectionRange;if(B!==A&&A&&A.ownerDocument&&Sd(A.ownerDocument.documentElement,A)){null!==p&&Ud(A)&&(B=p.start,q=p.end,void 0===q&&(q=B),"selectionStart"in A?(A.selectionStart=B,A.selectionEnd=Math.min(q,A.value.length)):
(r=A.ownerDocument||document,B=(r?r.defaultView:window).getSelection(),D=A.textContent.length,q=Math.min(p.start,D),p=void 0===p.end?q:Math.min(p.end,D),!B.extend&&q>p&&(D=p,p=q,q=D),D=Rd(A,q),S=Rd(A,p),D&&S&&(1!==B.rangeCount||B.anchorNode!==D.node||B.anchorOffset!==D.offset||B.focusNode!==S.node||B.focusOffset!==S.offset)&&(r=r.createRange(),r.setStart(D.node,D.offset),B.removeAllRanges(),q>p?(B.addRange(r),B.extend(S.node,S.offset)):(r.setEnd(S.node,S.offset),B.addRange(r)))));B=[];for(q=A;q=q.parentNode;)1===
q.nodeType&&B.push({element:q,left:q.scrollLeft,top:q.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<B.length;A++)q=B[A],q.element.scrollLeft=q.left,q.element.scrollTop=q.top}ye=null;Gd=!!xe;xe=null;a.current=b;for(R=d;null!==R;){d=!1;A=void 0;try{for(B=c;null!==R;){var Sa=R.effectTag;if(Sa&36){var oc=R.alternate;q=R;r=B;switch(q.tag){case 2:case 3:var X=q.stateNode;if(q.effectTag&4)if(null===oc)X.props=q.memoizedProps,X.state=q.memoizedState,X.componentDidMount();else{var Ih=oc.memoizedProps,
Jh=oc.memoizedState;X.props=q.memoizedProps;X.state=q.memoizedState;X.componentDidUpdate(Ih,Jh,X.__reactInternalSnapshotBeforeUpdate)}var kg=q.updateQueue;null!==kg&&(X.props=q.memoizedProps,X.state=q.memoizedState,lf(q,kg,X,r));break;case 5:var lg=q.updateQueue;if(null!==lg){p=null;if(null!==q.child)switch(q.child.tag){case 7:p=q.child.stateNode;break;case 2:case 3:p=q.child.stateNode}lf(q,lg,p,r)}break;case 7:var Kh=q.stateNode;null===oc&&q.effectTag&4&&ze(q.type,q.memoizedProps)&&Kh.focus();break;
case 8:break;case 6:break;case 15:break;case 16:break;default:w("163")}}if(Sa&128){var Ac=R.ref;if(null!==Ac){var mg=R.stateNode;switch(R.tag){case 7:var Od=mg;break;default:Od=mg}"function"===typeof Ac?Ac(Od):Ac.current=Od}}var Lh=R.nextEffect;R.nextEffect=null;R=Lh}}catch(Xa){d=!0,A=Xa}d&&(null===R?w("178"):void 0,wg(R,A),null!==R&&(R=R.nextEffect))}Lg=Og=!1;"function"===typeof Oe&&Oe(b.stateNode);Sa=b.expirationTime;b=b.childExpirationTime;b=0===Sa||0!==b&&b<Sa?b:Sa;0===b&&(Fg=null);a.expirationTime=
b;a.finishedWork=null}function Tg(){return eh?!0:null===hh||hh.timeRemaining()>nh?!1:eh=!0}function Dg(a){null===Y?w("246"):void 0;Y.expirationTime=0;fh||(fh=!0,gh=a)}function sh(a,b){var c=W;W=!0;try{return a(b)}finally{(W=c)||V||Yg(1,null)}}function th(a,b){if(W&&!Wg){Wg=!0;try{return a(b)}finally{Wg=!1}}return a(b)}function uh(a,b,c){if(Ug)return a(b,c);W||V||0===Vg||(Yg(Vg,null),Vg=0);var d=Ug,e=W;W=Ug=!0;try{return a(b,c)}finally{Ug=d,(W=e)||V||Yg(1,null)}}
function vh(a){if(!a)return Fe;a=a._reactInternalFiber;a:{2!==jd(a)||2!==a.tag&&3!==a.tag?w("170"):void 0;var b=a;do{switch(b.tag){case 5:b=b.stateNode.context;break a;case 2:if(M(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}break;case 3:if(M(b.type._reactResult)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);w("171");b=void 0}if(2===a.tag){var c=a.type;if(M(c))return Le(a,c,b)}else if(3===a.tag&&(c=a.type._reactResult,M(c)))return Le(a,
c,b);return b}function wh(a,b,c,d,e){var f=b.current;c=vh(c);null===b.context?b.context=c:b.pendingContext=c;b=e;e=df(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);ff(f,e);If(f,d);return d}function xh(a,b,c,d){var e=b.current,f=Gf();e=Hf(f,e);return wh(a,b,c,e,d)}function zh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 7:return a.child.stateNode;default:return a.child.stateNode}}
function Ah(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ac,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Fb=function(a,b,c){switch(b){case "input":Dc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Na(d);e?void 0:w("90");Xb(d);Dc(d,e)}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1)}};
function Bh(a){var b=2+25*(((Gf()-2+500)/25|0)+1);b<=Jg&&(b=Jg+1);this._expirationTime=Jg=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bh.prototype.render=function(a){this._defer?void 0:w("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Ch;wh(a,b,null,c,d._onCommit);return d};
Bh.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bh.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:w("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?w("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;V?w("253"):void 0;Y=a;Z=b;Xg(a,b,!0);Yg(1,null);b=this._next;this._next=null;b=a.firstBatch=b;null!==
b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bh.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Ch(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Ch.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ch.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?w("191",c):void 0;c()}}};
function Dh(a,b,c){b=new Se(5,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Dh.prototype.render=function(a,b){var c=this._internalRoot,d=new Ch;b=void 0===b?null:b;null!==b&&d.then(b);xh(a,c,null,d._onCommit);return d};Dh.prototype.unmount=function(a){var b=this._internalRoot,c=new Ch;a=void 0===a?null:a;null!==a&&c.then(a);xh(null,b,null,c._onCommit);return c};Dh.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Ch;c=void 0===c?null:c;null!==c&&e.then(c);xh(b,d,a,e._onCommit);return e};
Dh.prototype.createBatch=function(){var a=new Bh(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Eh(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Lb=sh;Mb=uh;Nb=function(){V||0===Vg||(Yg(Vg,null),Vg=0)};
function Fh(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dh(a,!1,b)}
function Gh(a,b,c,d,e){Eh(c)?void 0:w("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=zh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Fh(c,d);if("function"===typeof e){var k=e;e=function(){var a=zh(f._internalRoot);k.call(a)}}th(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return zh(f._internalRoot)}
function Hh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Eh(b)?void 0:w("200");return Ah(a,b,null,c)}
var Mh={createPortal:Hh,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?w("188"):w("268",Object.keys(a)));a=md(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Gh(null,a,b,!0,c)},render:function(a,b,c){return Gh(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?w("38"):void 0;return Gh(a,b,c,!1,d)},unmountComponentAtNode:function(a){Eh(a)?
void 0:w("40");return a._reactRootContainer?(th(function(){Gh(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Hh.apply(void 0,arguments)},unstable_batchedUpdates:sh,unstable_interactiveUpdates:uh,flushSync:function(a,b){V?w("187"):void 0;var c=W;W=!0;try{return bh(a,b)}finally{W=c,Yg(1,null)}},unstable_flushControlled:function(a){var b=W;W=!0;try{bh(a)}finally{(W=b)||V||Yg(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[La,
Ma,Na,qa,Ua,function(a){za(a,Ta)},Jb,Kb,Id,Ga]},unstable_createRoot:function(a,b){Eh(a)?void 0:w("278");return new Dh(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Re(n({},a,{findHostInstanceByFiber:function(a){a=md(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ka,bundleType:0,version:"16.5.0",rendererPackageName:"react-dom"});var Nh={default:Mh},Oh=Nh&&Mh||Nh;
module.exports=Oh.default||Oh;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(160);
} else {}


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * schedule.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=!("undefined"===typeof window||!window.document||!window.document.createElement),f=Date,g="function"===typeof setTimeout?setTimeout:void 0,h="function"===typeof clearTimeout?clearTimeout:void 0,l="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,m="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,n="object"===typeof performance&&"function"===typeof performance.now;
exports.unstable_now=void 0;if(n){var p=performance;exports.unstable_now=function(){return p.now()}}else exports.unstable_now=function(){return f.now()};exports.unstable_scheduleWork=void 0;exports.unstable_cancelScheduledWork=void 0;
if(d){var q=null,r=null,t=-1,u=!1,v=!1,w=void 0,x=void 0,y=function(a){w=l(function(b){h(x);a(b)});x=g(function(){m(w);a(exports.unstable_now())},100)},z=0,A=33,B=33,C={didTimeout:!1,timeRemaining:function(){var a=z-exports.unstable_now();return 0<a?a:0}},E=function(a,b){var c=a.scheduledCallback,e=!1;try{c(b),e=!0}finally{exports.unstable_cancelScheduledWork(a),e||(u=!0,window.postMessage(D,"*"))}},D="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===
window&&a.data===D&&(u=!1,null!==q)){if(null!==q){var b=exports.unstable_now();if(!(-1===t||t>b)){a=-1;for(var c=[],e=q;null!==e;){var k=e.timeoutTime;-1!==k&&k<=b?c.push(e):-1!==k&&(-1===a||k<a)&&(a=k);e=e.next}if(0<c.length)for(C.didTimeout=!0,b=0,e=c.length;b<e;b++)E(c[b],C);t=a}}for(a=exports.unstable_now();0<z-a&&null!==q;)a=q,C.didTimeout=!1,E(a,C),a=exports.unstable_now();null===q||v||(v=!0,y(F))}},!1);var F=function(a){v=!1;var b=a-z+B;b<B&&A<B?(8>b&&(b=8),B=b<A?A:b):A=b;z=a+B;u||(u=!0,window.postMessage(D,
"*"))};exports.unstable_scheduleWork=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=exports.unstable_now()+b.timeout);if(-1===t||-1!==c&&c<t)t=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===q?q=a:(b=a.prev=r,null!==b&&(b.next=a));r=a;v||(v=!0,y(F));return a};exports.unstable_cancelScheduledWork=function(a){if(null!==a.prev||q===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,q=b):null!==c?(c.next=null,r=c):r=
q=null}}}else{var G=new Map;exports.unstable_scheduleWork=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=g(function(){a({timeRemaining:function(){return Infinity},didTimeout:!1})});G.set(a,c);return b};exports.unstable_cancelScheduledWork=function(a){var b=G.get(a.scheduledCallback);G.delete(a);h(b)}};


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);





var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_3__["default"].getResourcesForPathname(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    location: location,
    pageResources: pageResources
  });
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(50);
var descriptor = __webpack_require__(45);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(11);
var getKeys = __webpack_require__(37);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(62);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(48);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(62);
var defined = __webpack_require__(28);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(5);
var $find = __webpack_require__(36)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(82)(KEY);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(50) });


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(5);
var $indexOf = __webpack_require__(83)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(26)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gatsby = __webpack_require__(65);

function checkSameOriginWithoutProtocol(origin1, origin2) {
  var protocolRegex = new RegExp(/(^\w+:|^)\/\//);
  var removeTrailingSlash = new RegExp(/\//g);
  return origin1.replace(protocolRegex, "").replace(removeTrailingSlash, "") === origin2.replace(protocolRegex, "").replace(removeTrailingSlash, "");
}

module.exports = function (root, cb) {
  root.addEventListener("click", function (ev) {
    if (ev.button !== 0 || ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.defaultPrevented) {
      return true;
    }

    var anchor = null;

    for (var n = ev.target; n.parentNode; n = n.parentNode) {
      if (n.nodeName === "A") {
        anchor = n;
        break;
      }
    }

    if (!anchor) return true; // Don't catch links where a target (other than self) is set
    // e.g. _blank.

    if (anchor.target && anchor.target.toLowerCase() !== "_self") return true; // Don't catch links pointed to the same page but with a hash.

    if (anchor.pathname === window.location.pathname && anchor.hash !== "") {
      return true;
    } // Dynamically created anchor links (href="#my-anchor") do not always have pathname on IE


    if (anchor.pathname === "") {
      return true;
    } // Don't catch links pointed at what look like file extensions (other than
    // .htm/html extensions).


    if (anchor.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i) !== -1) {
      return true;
    } // IE clears the host value if the anchor href changed after creation, e.g.
    // in React. Creating a new anchor element to ensure host value is present


    var a1 = document.createElement("a");
    a1.href = anchor.href; // In IE, the default port is included in the anchor host but excluded from
    // the location host.  This affects the ability to directly compare
    // location host to anchor host.  For example: http://example.com would
    // have a location.host of 'example.com' and an anchor.host of
    // 'example.com:80' Creating anchor from the location.href to normalize the
    // host value.

    var a2 = document.createElement("a");
    a2.href = window.location.href;
    if (a1.host !== a2.host) return true; // For when pathPrefix is used in an app and there happens to be a link
    // pointing to the same domain but outside of the app's pathPrefix. For
    // example, a Gatsby app lives at https://example.com/myapp/, with the
    // pathPrefix set to `/myapp`. When adding an absolute link to the same
    // domain but outside of the /myapp path, for example, <a
    // href="https://example.com/not-my-app"> the plugin won't catch it and
    // will navigate to an external link instead of doing a pushState resulting
    // in `https://example.com/myapp/https://example.com/not-my-app`

    var re = new RegExp("^" + a2.host + (0, _gatsby.withPrefix)("/"));
    if (!re.test("" + a1.host + a1.pathname)) return true; // Adding a check for absolute internal links in a callback or here,
    // or always pass only `${a1.pathname}${a1.hash}`
    // to avoid `https://example.com/myapp/https://example.com/myapp/here` navigation

    ev.preventDefault();
    var anchoreUrl = new URL(anchor.href);

    if (checkSameOriginWithoutProtocol(window.location.origin, anchoreUrl.origin)) {
      cb("" + anchoreUrl.pathname + anchoreUrl.search + anchoreUrl.hash);
      return false;
    }

    cb(anchor.getAttribute("href"));
    return false;
  });
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172);

exports.wrapPageElement = __webpack_require__(174);

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 173 */,
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);

__webpack_require__(84);

var _require = __webpack_require__(123),
    MDXProvider = _require.MDXProvider;

var React = __webpack_require__(0);

var Heading = __webpack_require__(53);

var CodeBlock = __webpack_require__(128);

var LinkedHeading = __webpack_require__(122);

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
    return React.createElement(React.Fragment, props);
  },
  h1: function h1(props) {
    return React.createElement(Heading, Object.assign({
      h: "1"
    }, props));
  },
  h2: function h2(props) {
    return React.createElement(LinkedHeading, Object.assign({
      h: "2"
    }, props));
  },
  h3: function h3(props) {
    return React.createElement(LinkedHeading, Object.assign({
      h: "3"
    }, props));
  },
  h4: function h4(props) {
    return React.createElement(LinkedHeading, Object.assign({
      h: "4"
    }, props));
  },
  h5: function h5(props) {
    return React.createElement(LinkedHeading, Object.assign({
      h: "5"
    }, props));
  },
  pre: function pre(props) {
    return React.isValidElement(props.children) ? React.createElement(CodeBlock, {
      codeText: props.children.props.children,
      mode: getMode(props.children.props.props.className) // omg

    }) : React.createElement("pre", props);
  }
};

module.exports = function (_ref2) {
  var element = _ref2.element;
  return React.createElement(MDXProvider, {
    components: components
  }, element);
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(72);
var pIE = __webpack_require__(51);
var toObject = __webpack_require__(48);
var IObject = __webpack_require__(49);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(177);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _mdxProvider = __webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
  inlineCode: 'code',
  wrapper: 'div'
};

var MDXTag = function (_Component) {
  _inherits(MDXTag, _Component);

  function MDXTag() {
    _classCallCheck(this, MDXTag);

    return _possibleConstructorReturn(this, (MDXTag.__proto__ || Object.getPrototypeOf(MDXTag)).apply(this, arguments));
  }

  _createClass(MDXTag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          parentName = _props.parentName,
          _props$props = _props.props,
          childProps = _props$props === undefined ? {} : _props$props,
          children = _props.children,
          _props$components = _props.components,
          components = _props$components === undefined ? {} : _props$components,
          Layout = _props.Layout,
          layoutProps = _props.layoutProps;


      var Component = components[parentName + '.' + name] || components[name] || defaults[name] || name;

      if (Layout) {
        (0, _hoistNonReactStatics2.default)(this, Layout);

        return _react2.default.createElement(
          Layout,
          _extends({ components: components }, layoutProps),
          _react2.default.createElement(
            Component,
            childProps,
            children
          )
        );
      }

      return _react2.default.createElement(
        Component,
        childProps,
        children
      );
    }
  }]);

  return MDXTag;
}(_react.Component);

exports.default = (0, _mdxProvider.withMDXComponents)(MDXTag);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _ref) {
  var displayName = _ref.displayName,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback;

  var render = function render() {
    return renderFn.apply(void 0, arguments);
  };

  Object.assign(render, {
    displayName: displayName
  });
  if (_react.default.forwardRef || !allowFallback) return Object.assign(_react.default.forwardRef(render), {
    propTypes: propTypes,
    defaultProps: defaultProps
  });
  return Object.assign(function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.styled = styled;
exports.css = exports.default = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(38));

var _camelCase = _interopRequireDefault(__webpack_require__(132));

var _react = _interopRequireDefault(__webpack_require__(0));

var _props = _interopRequireDefault(__webpack_require__(195));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const has = Object.prototype.hasOwnProperty;

function omitNonHostProps(props) {
  const result = {};
  Object.keys(props).forEach(key => {
    if (_props.default.test(key)) result[key] = props[key];
  });
  return result;
}

function styled(type, displayName, styles, kebabName, camelName) {
  const componentClassName = has.call(styles, kebabName) ? styles[kebabName] : styles[camelName];
  const omit = typeof type === 'string' ? omitNonHostProps : null;
  const hasModifiers = Object.keys(styles).some(className => className !== camelName && className !== kebabName);

  function Styled(props) {
    const childProps = omit ? omit(props) : _extends({}, props);
    delete childProps.innerRef;
    childProps.ref = props.innerRef;

    if (hasModifiers) {
      const modifierClassNames = [];
      Object.keys(props).forEach(propName => {
        const propValue = props[propName];

        if (typeof propValue === 'boolean') {
          if (has.call(styles, propName)) {
            if (propValue) {
              modifierClassNames.push(styles[propName]);
            }

            delete childProps[propName];
          } else {
            const camelPropName = (0, _camelCase.default)(propName);

            if (has.call(styles, camelPropName)) {
              if (propValue) {
                modifierClassNames.push(styles[camelPropName]);
              }

              delete childProps[propName];
            }
          }
        } else if (typeof propValue === 'string' || typeof propValue === 'number') {
          const propKey = `${propName}-${propValue}`;

          if (has.call(styles, propKey)) {
            modifierClassNames.push(styles[propKey]);
            delete childProps[propName];
          } else {
            const camelPropKey = (0, _camelCase.default)(propKey);

            if (has.call(styles, camelPropKey)) {
              modifierClassNames.push(styles[camelPropKey]);
              delete childProps[propName];
            }
          }
        }
      });
      childProps.className = (0, _classnames.default)(childProps.className, componentClassName, ...modifierClassNames);
    } else {
      childProps.className = (0, _classnames.default)(childProps.className, componentClassName);
    }

    return _react.default.createElement(type, childProps);
  }

  Styled.displayName = displayName;
  const decorated = _react.default.forwardRef ? _react.default.forwardRef((props, ref) => _react.default.createElement(Styled, _extends({
    innerRef: ref
  }, props))) : Styled;

  decorated.withComponent = nextType => styled(nextType, displayName, styles, kebabName, camelName);

  return decorated;
}

var _default = styled;
exports.default = _default;

const css = () => {
  throw new Error('`css` template literal evaluated at runtime!');
};

exports.css = css;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(55),
    arrayMap = __webpack_require__(115),
    isArray = __webpack_require__(124),
    isSymbol = __webpack_require__(114);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(55);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(184),
    hasUnicode = __webpack_require__(101),
    stringToArray = __webpack_require__(136),
    toString = __webpack_require__(43);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(135);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(189),
    toString = __webpack_require__(43);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(190);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(192),
    hasUnicodeWord = __webpack_require__(193),
    toString = __webpack_require__(43),
    unicodeWords = __webpack_require__(194);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 192 */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 193 */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan)|(on[A-Z].*)|((data|aria)-.*))$/

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(197);
var validate = __webpack_require__(103);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(198)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(12).f;
var create = __webpack_require__(50);
var redefineAll = __webpack_require__(63);
var ctx = __webpack_require__(20);
var anInstance = __webpack_require__(60);
var forOf = __webpack_require__(61);
var $iterDefine = __webpack_require__(69);
var step = __webpack_require__(96);
var setSpecies = __webpack_require__(90);
var DESCRIPTORS = __webpack_require__(13);
var fastKey = __webpack_require__(73).fastKey;
var validate = __webpack_require__(103);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(18);
var redefineAll = __webpack_require__(63);
var meta = __webpack_require__(73);
var forOf = __webpack_require__(61);
var anInstance = __webpack_require__(60);
var isObject = __webpack_require__(8);
var fails = __webpack_require__(10);
var $iterDetect = __webpack_require__(91);
var setToStringTag = __webpack_require__(35);
var inheritIfRequired = __webpack_require__(199);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var setPrototypeOf = __webpack_require__(200).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(11);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(20)(Function.call, __webpack_require__(104).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105)('asyncIterator');


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(18);
var META = __webpack_require__(73).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(59);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(31);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(106);
var wksDefine = __webpack_require__(105);
var enumKeys = __webpack_require__(203);
var isArray = __webpack_require__(64);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(58);
var createDesc = __webpack_require__(45);
var _create = __webpack_require__(50);
var gOPNExt = __webpack_require__(204);
var $GOPD = __webpack_require__(104);
var $DP = __webpack_require__(12);
var $keys = __webpack_require__(37);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(107).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(51).f = $propertyIsEnumerable;
  __webpack_require__(72).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(32)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(72);
var pIE = __webpack_require__(51);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(27);
var gOPN = __webpack_require__(107).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sidePanel":"Toc-SidePanel-module--side-panel--3VTld"};

/***/ }),
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"listItem":"Toc-ListItem-module--list-item--3CS5U"};

/***/ }),
/* 208 */,
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"heading":"Heading-styles-module--heading--3cEKx __heading","inner":"Heading-styles-module--inner--3JhWJ"};

/***/ }),
/* 210 */,
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */

    return BaseComponent;
  };
};

var _default = setStatic;
exports.default = _default;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

var _default = getDisplayName;
exports.default = _default;

/***/ }),
/* 213 */
/***/ (function(module, exports) {

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/***/ }),
/* 214 */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	},
	'constant': /\b[A-Z][A-Z\d_]*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\${[^}]+}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: null // See below
				}
			},
			'string': /[\s\S]+/
		}
	}
});
Prism.languages.javascript['template-string'].inside['interpolation'].inside.rest = Prism.languages.javascript;

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript',
			greedy: true
		}
	});
}

Prism.languages.js = Prism.languages.javascript;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /(^|[^\\])["']/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

(function(Prism) {

var javascript = Prism.util.clone(Prism.languages.javascript);

Prism.languages.jsx = Prism.languages.extend('markup', javascript);
Prism.languages.jsx.tag.pattern= /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;

Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;

Prism.languages.insertBefore('inside', 'attr-name', {
	'spread': {
		pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
		inside: {
			'punctuation': /\.{3}|[{}.]/,
			'attr-value': /\w+/
		}
	}
}, Prism.languages.jsx.tag);

Prism.languages.insertBefore('inside', 'attr-value',{
	'script': {
		// Allow for two levels of nesting
		pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
		inside: {
			'script-punctuation': {
				pattern: /^=(?={)/,
				alias: 'punctuation'
			},
			rest: Prism.languages.jsx
		},
		'alias': 'language-javascript'
	}
}, Prism.languages.jsx.tag);

// The following will handle plain text inside tags
var stringifyToken = function (token) {
	if (!token) {
		return '';
	}
	if (typeof token === 'string') {
		return token;
	}
	if (typeof token.content === 'string') {
		return token.content;
	}
	return token.content.map(stringifyToken).join('');
};

var walkTokens = function (tokens) {
	var openedTags = [];
	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		var notTagNorBrace = false;

		if (typeof token !== 'string') {
			if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
				// We found a tag, now find its kind

				if (token.content[0].content[0].content === '</') {
					// Closing tag
					if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
						// Pop matching opening tag
						openedTags.pop();
					}
				} else {
					if (token.content[token.content.length - 1].content === '/>') {
						// Autoclosed tag, ignore
					} else {
						// Opening tag
						openedTags.push({
							tagName: stringifyToken(token.content[0].content[1]),
							openedBraces: 0
						});
					}
				}
			} else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {

				// Here we might have entered a JSX context inside a tag
				openedTags[openedTags.length - 1].openedBraces++;

			} else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {

				// Here we might have left a JSX context inside a tag
				openedTags[openedTags.length - 1].openedBraces--;

			} else {
				notTagNorBrace = true
			}
		}
		if (notTagNorBrace || typeof token === 'string') {
			if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
				// Here we are inside a tag, and not inside a JSX context.
				// That's plain text: drop any tokens matched.
				var plainText = stringifyToken(token);

				// And merge text with adjacent text
				if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
					plainText += stringifyToken(tokens[i + 1]);
					tokens.splice(i + 1, 1);
				}
				if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
					plainText = stringifyToken(tokens[i - 1]) + plainText;
					tokens.splice(i - 1, 1);
					i--;
				}

				tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
			}
		}

		if (token.content && typeof token.content !== 'string') {
			walkTokens(token.content);
		}
	}
};

Prism.hooks.add('after-tokenize', function (env) {
	if (env.language !== 'jsx' && env.language !== 'tsx') {
		return;
	}
	walkTokens(env.tokens);
});

}(Prism));


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"codeBlock":"CodeBlock-CodeBlock-module--code-block--2qW2h prism-module--prism--2-Zwl"};

/***/ }),
/* 218 */,
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(140)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Anchor-styles-module--wrapper--2R_tQ","anchor":"Anchor-styles-module--anchor--2zQH2"};

/***/ }),
/* 221 */,
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(66));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(46));

var _react = _interopRequireDefault(__webpack_require__(0));

var _scrollBehavior = _interopRequireDefault(__webpack_require__(223));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _history = __webpack_require__(230);

var _StateStorage = _interopRequireDefault(__webpack_require__(231));

var propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};
var childContextTypes = {
  scrollBehavior: _propTypes.default.object.isRequired
};

var ScrollContext =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollContext, _React$Component);

  function ScrollContext(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.scrollBehavior, prevRouterProps, routerProps);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "registerElement", function (key, element, shouldUpdateScroll) {
      _this.scrollBehavior.registerElement(key, element, shouldUpdateScroll, _this.getRouterProps());
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "unregisterElement", function (key) {
      _this.scrollBehavior.unregisterElement(key);
    });
    _this.scrollBehavior = new _scrollBehavior.default({
      addTransitionHook: _history.globalHistory.listen,
      stateStorage: new _StateStorage.default(),
      getCurrentLocation: function getCurrentLocation() {
        return _this.props.location;
      },
      shouldUpdateScroll: _this.shouldUpdateScroll
    });

    _this.scrollBehavior.updateScroll(null, _this.getRouterProps());

    return _this;
  }

  var _proto = ScrollContext.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      scrollBehavior: this
    };
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var location = this.props.location;
    var prevLocation = prevProps.location;

    if (location === prevLocation) {
      return;
    }

    var prevRouterProps = {
      location: prevProps.location // The "scroll-behavior" package expects the "action" to be on the location
      // object so let's copy it over.
      // Temp hack while awaiting https://github.com/reach/router/issues/119

    };

    if (window.__navigatingToLink) {
      location.action = "PUSH";
    } else {
      location.action = "POP";
    }

    this.scrollBehavior.updateScroll(prevRouterProps, {
      history: _history.globalHistory,
      location: location
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.scrollBehavior.stop();
  };

  _proto.getRouterProps = function getRouterProps() {
    var location = this.props.location;
    return {
      location: location,
      history: _history.globalHistory
    };
  };

  _proto.render = function render() {
    return _react.default.Children.only(this.props.children);
  };

  return ScrollContext;
}(_react.default.Component);

ScrollContext.propTypes = propTypes;
ScrollContext.childContextTypes = childContextTypes;
var _default = ScrollContext;
exports.default = _default;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _off = __webpack_require__(224);

var _off2 = _interopRequireDefault(_off);

var _on = __webpack_require__(225);

var _on2 = _interopRequireDefault(_on);

var _scrollLeft = __webpack_require__(226);

var _scrollLeft2 = _interopRequireDefault(_scrollLeft);

var _scrollTop = __webpack_require__(227);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _requestAnimationFrame = __webpack_require__(228);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _invariant = __webpack_require__(16);

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = __webpack_require__(229);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-underscore-dangle */

// Try at most this many times to scroll, to avoid getting stuck.
var MAX_SCROLL_ATTEMPTS = 2;

var ScrollBehavior = function () {
  function ScrollBehavior(_ref) {
    var _this = this;

    var addTransitionHook = _ref.addTransitionHook,
        stateStorage = _ref.stateStorage,
        getCurrentLocation = _ref.getCurrentLocation,
        shouldUpdateScroll = _ref.shouldUpdateScroll;

    _classCallCheck(this, ScrollBehavior);

    this._onWindowScroll = function () {
      // It's possible that this scroll operation was triggered by what will be a
      // `POP` transition. Instead of updating the saved location immediately, we
      // have to enqueue the update, then potentially cancel it if we observe a
      // location update.
      if (!_this._saveWindowPositionHandle) {
        _this._saveWindowPositionHandle = (0, _requestAnimationFrame2.default)(_this._saveWindowPosition);
      }

      if (_this._windowScrollTarget) {
        var _windowScrollTarget = _this._windowScrollTarget,
            xTarget = _windowScrollTarget[0],
            yTarget = _windowScrollTarget[1];

        var x = (0, _scrollLeft2.default)(window);
        var y = (0, _scrollTop2.default)(window);

        if (x === xTarget && y === yTarget) {
          _this._windowScrollTarget = null;
          _this._cancelCheckWindowScroll();
        }
      }
    };

    this._saveWindowPosition = function () {
      _this._saveWindowPositionHandle = null;

      _this._savePosition(null, window);
    };

    this._checkWindowScrollPosition = function () {
      _this._checkWindowScrollHandle = null;

      // We can only get here if scrollTarget is set. Every code path that unsets
      // scroll target also cancels the handle to avoid calling this handler.
      // Still, check anyway just in case.
      /* istanbul ignore if: paranoid guard */
      if (!_this._windowScrollTarget) {
        return;
      }

      _this.scrollToTarget(window, _this._windowScrollTarget);

      ++_this._numWindowScrollAttempts;

      /* istanbul ignore if: paranoid guard */
      if (_this._numWindowScrollAttempts >= MAX_SCROLL_ATTEMPTS) {
        _this._windowScrollTarget = null;
        return;
      }

      _this._checkWindowScrollHandle = (0, _requestAnimationFrame2.default)(_this._checkWindowScrollPosition);
    };

    this._stateStorage = stateStorage;
    this._getCurrentLocation = getCurrentLocation;
    this._shouldUpdateScroll = shouldUpdateScroll;

    // This helps avoid some jankiness in fighting against the browser's
    // default scroll behavior on `POP` transitions.
    /* istanbul ignore else: Travis browsers all support this */
    if ('scrollRestoration' in window.history &&
    // Unfortunately, Safari on iOS freezes for 2-6s after the user swipes to
    // navigate through history with scrollRestoration being 'manual', so we
    // need to detect this browser and exclude it from the following code
    // until this bug is fixed by Apple.
    !(0, _utils.isMobileSafari)()) {
      this._oldScrollRestoration = window.history.scrollRestoration;
      try {
        window.history.scrollRestoration = 'manual';
      } catch (e) {
        this._oldScrollRestoration = null;
      }
    } else {
      this._oldScrollRestoration = null;
    }

    this._saveWindowPositionHandle = null;
    this._checkWindowScrollHandle = null;
    this._windowScrollTarget = null;
    this._numWindowScrollAttempts = 0;

    this._scrollElements = {};

    // We have to listen to each window scroll update rather than to just
    // location updates, because some browsers will update scroll position
    // before emitting the location change.
    (0, _on2.default)(window, 'scroll', this._onWindowScroll);

    this._removeTransitionHook = addTransitionHook(function () {
      _requestAnimationFrame2.default.cancel(_this._saveWindowPositionHandle);
      _this._saveWindowPositionHandle = null;

      Object.keys(_this._scrollElements).forEach(function (key) {
        var scrollElement = _this._scrollElements[key];
        _requestAnimationFrame2.default.cancel(scrollElement.savePositionHandle);
        scrollElement.savePositionHandle = null;

        // It's fine to save element scroll positions here, though; the browser
        // won't modify them.
        _this._saveElementPosition(key);
      });
    });
  }

  ScrollBehavior.prototype.registerElement = function registerElement(key, element, shouldUpdateScroll, context) {
    var _this2 = this;

    !!this._scrollElements[key] ?  false ? undefined : (0, _invariant2.default)(false) : void 0;

    var saveElementPosition = function saveElementPosition() {
      _this2._saveElementPosition(key);
    };

    var scrollElement = {
      element: element,
      shouldUpdateScroll: shouldUpdateScroll,
      savePositionHandle: null,

      onScroll: function onScroll() {
        if (!scrollElement.savePositionHandle) {
          scrollElement.savePositionHandle = (0, _requestAnimationFrame2.default)(saveElementPosition);
        }
      }
    };

    this._scrollElements[key] = scrollElement;
    (0, _on2.default)(element, 'scroll', scrollElement.onScroll);

    this._updateElementScroll(key, null, context);
  };

  ScrollBehavior.prototype.unregisterElement = function unregisterElement(key) {
    !this._scrollElements[key] ?  false ? undefined : (0, _invariant2.default)(false) : void 0;

    var _scrollElements$key = this._scrollElements[key],
        element = _scrollElements$key.element,
        onScroll = _scrollElements$key.onScroll,
        savePositionHandle = _scrollElements$key.savePositionHandle;


    (0, _off2.default)(element, 'scroll', onScroll);
    _requestAnimationFrame2.default.cancel(savePositionHandle);

    delete this._scrollElements[key];
  };

  ScrollBehavior.prototype.updateScroll = function updateScroll(prevContext, context) {
    var _this3 = this;

    this._updateWindowScroll(prevContext, context);

    Object.keys(this._scrollElements).forEach(function (key) {
      _this3._updateElementScroll(key, prevContext, context);
    });
  };

  ScrollBehavior.prototype.stop = function stop() {
    /* istanbul ignore if: not supported by any browsers on Travis */
    if (this._oldScrollRestoration) {
      try {
        window.history.scrollRestoration = this._oldScrollRestoration;
      } catch (e) {
        /* silence */
      }
    }

    (0, _off2.default)(window, 'scroll', this._onWindowScroll);
    this._cancelCheckWindowScroll();

    this._removeTransitionHook();
  };

  ScrollBehavior.prototype._cancelCheckWindowScroll = function _cancelCheckWindowScroll() {
    _requestAnimationFrame2.default.cancel(this._checkWindowScrollHandle);
    this._checkWindowScrollHandle = null;
  };

  ScrollBehavior.prototype._saveElementPosition = function _saveElementPosition(key) {
    var scrollElement = this._scrollElements[key];
    scrollElement.savePositionHandle = null;

    this._savePosition(key, scrollElement.element);
  };

  ScrollBehavior.prototype._savePosition = function _savePosition(key, element) {
    this._stateStorage.save(this._getCurrentLocation(), key, [(0, _scrollLeft2.default)(element), (0, _scrollTop2.default)(element)]);
  };

  ScrollBehavior.prototype._updateWindowScroll = function _updateWindowScroll(prevContext, context) {
    // Whatever we were doing before isn't relevant any more.
    this._cancelCheckWindowScroll();

    this._windowScrollTarget = this._getScrollTarget(null, this._shouldUpdateScroll, prevContext, context);

    // Updating the window scroll position is really flaky. Just trying to
    // scroll it isn't enough. Instead, try to scroll a few times until it
    // works.
    this._numWindowScrollAttempts = 0;
    this._checkWindowScrollPosition();
  };

  ScrollBehavior.prototype._updateElementScroll = function _updateElementScroll(key, prevContext, context) {
    var _scrollElements$key2 = this._scrollElements[key],
        element = _scrollElements$key2.element,
        shouldUpdateScroll = _scrollElements$key2.shouldUpdateScroll;


    var scrollTarget = this._getScrollTarget(key, shouldUpdateScroll, prevContext, context);
    if (!scrollTarget) {
      return;
    }

    // Unlike with the window, there shouldn't be any flakiness to deal with
    // here.
    this.scrollToTarget(element, scrollTarget);
  };

  ScrollBehavior.prototype._getDefaultScrollTarget = function _getDefaultScrollTarget(location) {
    var hash = location.hash;
    if (hash && hash !== '#') {
      return hash.charAt(0) === '#' ? hash.slice(1) : hash;
    }
    return [0, 0];
  };

  ScrollBehavior.prototype._getScrollTarget = function _getScrollTarget(key, shouldUpdateScroll, prevContext, context) {
    var scrollTarget = shouldUpdateScroll ? shouldUpdateScroll.call(this, prevContext, context) : true;

    if (!scrollTarget || Array.isArray(scrollTarget) || typeof scrollTarget === 'string') {
      return scrollTarget;
    }

    var location = this._getCurrentLocation();

    return this._getSavedScrollTarget(key, location) || this._getDefaultScrollTarget(location);
  };

  ScrollBehavior.prototype._getSavedScrollTarget = function _getSavedScrollTarget(key, location) {
    if (location.action === 'PUSH') {
      return null;
    }

    return this._stateStorage.read(location, key);
  };

  ScrollBehavior.prototype.scrollToTarget = function scrollToTarget(element, target) {
    if (typeof target === 'string') {
      var targetElement = document.getElementById(target) || document.getElementsByName(target)[0];
      if (targetElement) {
        targetElement.scrollIntoView();
        return;
      }

      // Fallback to scrolling to top when target fragment doesn't exist.
      target = [0, 0]; // eslint-disable-line no-param-reassign
    }

    var _target = target,
        left = _target[0],
        top = _target[1];

    (0, _scrollLeft2.default)(element, left);
    (0, _scrollTop2.default)(element, top);
  };

  return ScrollBehavior;
}();

exports.default = ScrollBehavior;
module.exports = exports['default'];

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(74);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var off = function off() {};
if (_inDOM2.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

exports.default = off;
module.exports = exports['default'];

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(74);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on() {};
if (_inDOM2.default) {
  on = function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

exports.default = on;
module.exports = exports['default'];

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTop;

var _isWindow = __webpack_require__(109);

var _isWindow2 = _interopRequireDefault(_isWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollTop(node, val) {
  var win = (0, _isWindow2.default)(node);

  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;

  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}
module.exports = exports['default'];

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTop;

var _isWindow = __webpack_require__(109);

var _isWindow2 = _interopRequireDefault(_isWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollTop(node, val) {
  var win = (0, _isWindow2.default)(node);

  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;

  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}
module.exports = exports['default'];

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(74);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isMobileSafari = isMobileSafari;
function isMobileSafari() {
  return (/iPad|iPhone|iPod/.test(window.navigator.platform) && /^((?!CriOS).)*Safari/.test(window.navigator.userAgent)
  );
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

////////////////////////////////////////////////////////////////////////////////
// createHistory(source) - wraps a history source
var getLocation = function getLocation(source) {
  return _extends({}, source.location, {
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  });
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener();
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      state = _extends({}, state, { key: Date.now() + "" });
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (fn) {
        return fn();
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var index = 0;
  var stack = [{ pathname: initialPathname, search: "" }];
  var states = [];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////

exports.globalHistory = globalHistory;
exports.navigate = navigate;
exports.createHistory = createHistory;
exports.createMemorySource = createMemorySource;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage =
/*#__PURE__*/
function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return JSON.parse(value);
    } catch (e) {
      console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return {};
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.default = SessionStorage;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(66));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(46));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(30));

var _warning = _interopRequireDefault(__webpack_require__(93));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var propTypes = {
  scrollKey: _propTypes.default.string.isRequired,
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired
};
var contextTypes = {
  // This is necessary when rendering on the client. However, when rendering on
  // the server, this container will do nothing, and thus does not require the
  // scroll behavior context.
  scrollBehavior: _propTypes.default.object
};

var ScrollContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollContainer, _React$Component);

  function ScrollContainer(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this; // We don't re-register if the scroll key changes, so make sure we
    // unregister with the initial scroll key just in case the user changes it.

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.context.scrollBehavior.scrollBehavior, prevRouterProps, routerProps);
    });
    _this.scrollKey = props.scrollKey;
    return _this;
  }

  var _proto = ScrollContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.context.scrollBehavior.registerElement(this.props.scrollKey, _reactDom.default.findDOMNode(this), // eslint-disable-line react/no-find-dom-node
    this.shouldUpdateScroll); // Only keep around the current DOM node in development, as this is only
    // for emitting the appropriate warning.

    if (false) {}
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
     false ? undefined : void 0;

    if (false) { var prevDomNode; }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.context.scrollBehavior.unregisterElement(this.scrollKey);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainer;
}(_react.default.Component);

ScrollContainer.propTypes = propTypes;
ScrollContainer.contextTypes = contextTypes;
var _default = ScrollContainer;
exports.default = _default;

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__);


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("" + "/sw.js").then(function (reg) {
    reg.addEventListener("updatefound", function () {
      Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateFound", {
        serviceWorker: reg
      }); // The updatefound event implies that reg.installing is set; see
      // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event

      var installingWorker = reg.installing;
      console.log("installingWorker", installingWorker);
      installingWorker.addEventListener("statechange", function () {
        switch (installingWorker.state) {
          case "installed":
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and the fresh content will
              // have been added to the cache.
              // We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
              window.GATSBY_SW_UPDATED = true;
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a "Content is cached for offline use." message.
              console.log("Content is now available offline!"); // Post to service worker that install is complete.
              // Delay to allow time for the event listener to be added --
              // otherwise fetch is called too soon and resources aren't cached.

              window.setTimeout(function () {
                Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerInstalled", {
                  serviceWorker: reg
                });
              }, 100);
            }

            break;

          case "redundant":
            console.error("The installing service worker became redundant.");
            Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerRedundant", {
              serviceWorker: reg
            });
            break;

          case "active":
            Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerActive", {
              serviceWorker: reg
            });
            break;
        }
      });
    });
  }).catch(function (e) {
    console.error("Error during service worker registration:", e);
  });
}

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(22);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(3);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(30);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 2 modules
var es = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/domready/ready.js
var ready = __webpack_require__(112);
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__(78);

// EXTERNAL MODULE: ./.cache/loader.js + 3 modules
var loader = __webpack_require__(1);

// EXTERNAL MODULE: ./.cache/redirects.json
var redirects = __webpack_require__(113);

// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(9);

// EXTERNAL MODULE: ./.cache/wait-for-route-change.js
var wait_for_route_change = __webpack_require__(39);

// EXTERNAL MODULE: ./.cache/parse-path.js
var parse_path = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(47);

// CONCATENATED MODULE: ./.cache/load-directly-or-404.js





/**
 * When other parts of the code can't find resources for a page, they load the 404 page's
 * resources (if it exists) and then pass them here. This module then does the following:
 * 1. Checks if 404 pages resources exist. If not, just navigate directly to the desired URL
 * to show whatever server 404 page exists.
 * 2. Try fetching the desired page to see if it exists on the server but we
 * were just prevented from seeing it due to loading the site from a SW. If this is the case,
 * trigger a hard reload to grab that page from the server.
 * 3. If the page doesn't exist, show the normal 404 page component.
 * 4. If the fetch failed (generally meaning we're offline), then navigate anyways to show
 * either the browser's offline page or whatever the server error is.
 */
/* harmony default export */ var load_directly_or_404 = (function (resources, path, replaceOnSuccess) {
  if (replaceOnSuccess === void 0) {
    replaceOnSuccess = false;
  }

  return new Promise(function (resolve, reject) {
    var url = new URL(window.location.origin + path);

    if (url.search.match(/\?(.*&)?no-cache=1(&|$)/)) {
      console.log("Found no-cache=1 while attempting to load a page directly; " + "this is likely due to a bug in Gatsby, or a misconfiguration in your project.");
      return reject();
    } // Append the appropriate query to the URL.


    if (url.search) {
      url.search += "&no-cache=1";
    } else {
      url.search = "?no-cache=1";
    } // Always navigate directly if a custom 404 page doesn't exist.


    if (!resources) {
      window.location = url;
    } else {
      // Now test if the page is available directly
      fetch(url.href).then(function (response) {
        if (response.status !== 404) {
          // Redirect there if there isn't a 404. If a different HTTP
          // error occurs, the appropriate error message will be
          // displayed after loading the page directly.
          if (replaceOnSuccess) {
            window.location.replace(url);
          } else {
            window.location = url;
          }
        } else {
          // If a 404 occurs, show the custom 404 page.
          resolve();
        }
      }).catch(function () {
        // If an error occurs (usually when offline), navigate to the
        // page anyway to show the browser's proper offline error page
        window.location = url;
      });
    }
  });
});
// CONCATENATED MODULE: ./.cache/navigation.js









 // Convert to a map for faster lookup in maybeRedirect()

var redirectMap = redirects.reduce(function (map, redirect) {
  map[redirect.fromPath] = redirect;
  return map;
}, {});

function maybeRedirect(pathname) {
  var redirect = redirectMap[pathname];

  if (redirect != null) {
    if (false) { var pageResources; }

    window.___replace(redirect.toPath);

    return true;
  } else {
    return false;
  }
}

var navigation_onPreRouteUpdate = function onPreRouteUpdate(location) {
  if (!maybeRedirect(location.pathname)) {
    Object(api_runner_browser["apiRunner"])("onPreRouteUpdate", {
      location: location
    });
  }
};

var navigation_onRouteUpdate = function onRouteUpdate(location) {
  if (!maybeRedirect(location.pathname)) {
    Object(api_runner_browser["apiRunner"])("onRouteUpdate", {
      location: location
    });
    Object(wait_for_route_change["b" /* resolveRouteChangePromise */])(); // Temp hack while awaiting https://github.com/reach/router/issues/119

    window.__navigatingToLink = false;
  }
};

var navigation_navigate = function navigate(to, options) {
  if (options === void 0) {
    options = {};
  }

  // Temp hack while awaiting https://github.com/reach/router/issues/119
  if (!options.replace) {
    window.__navigatingToLink = true;
  }

  var _parsePath = Object(parse_path["a" /* default */])(to),
      pathname = _parsePath.pathname;

  var redirect = redirectMap[pathname]; // If we're redirecting, just replace the passed in pathname
  // to the one we want to redirect to.

  if (redirect) {
    to = redirect.toPath;
    pathname = Object(parse_path["a" /* default */])(to).pathname;
  } // If we had a service worker update, no matter the path, reload window


  if (window.GATSBY_SW_UPDATED) {
    window.location = pathname;
    return;
  }

  Object(wait_for_route_change["a" /* resetRouteChangePromise */])(); // Start a timer to wait for a second before transitioning and showing a
  // loader in case resources aren't around yet.

  var timeoutId = setTimeout(function () {
    emitter["a" /* default */].emit("onDelayedLoadPageResources", {
      pathname: pathname
    });
    Object(api_runner_browser["apiRunner"])("onRouteUpdateDelayed", {
      location: window.location
    });
  }, 1000);
  loader["default"].getResourcesForPathname(pathname).then(function (pageResources) {
    if (!pageResources && "production" === "production") {
      loader["default"].getResourcesForPathname("/404.html").then(function (resources) {
        clearTimeout(timeoutId);
        navigation_onPreRouteUpdate(window.location);
        load_directly_or_404(resources, to).then(function () {
          return Object(es["navigate"])(to, options).then(function () {
            return navigation_onRouteUpdate(window.location);
          });
        });
      });
    } else {
      navigation_onPreRouteUpdate(window.location);
      Object(es["navigate"])(to, options).then(function () {
        return navigation_onRouteUpdate(window.location);
      });
      clearTimeout(timeoutId);
    }
  });
};

function shouldUpdateScroll(prevRouterProps, _ref) {
  var pathname = _ref.location.pathname;
  var results = Object(api_runner_browser["apiRunner"])("shouldUpdateScroll", {
    prevRouterProps: prevRouterProps,
    pathname: pathname
  });

  if (results.length > 0) {
    return results[0];
  }

  if (prevRouterProps) {
    var oldPathname = prevRouterProps.location.pathname;

    if (oldPathname === pathname) {
      return false;
    }
  }

  return true;
}

function init() {
  // Temp hack while awaiting https://github.com/reach/router/issues/119
  window.__navigatingToLink = false;
  Object(loader["setApiRunnerForLoader"])(api_runner_browser["apiRunner"]);
  window.___loader = loader["default"];

  window.___push = function (to) {
    return navigation_navigate(to, {
      replace: false
    });
  };

  window.___replace = function (to) {
    return navigation_navigate(to, {
      replace: true
    });
  };

  window.___navigate = function (to, options) {
    return navigation_navigate(to, options);
  }; // Check for initial page-load redirect


  maybeRedirect(window.location.pathname);
}


// EXTERNAL MODULE: ./.cache/page-renderer.js + 1 modules
var page_renderer = __webpack_require__(41);

// EXTERNAL MODULE: ./.cache/async-requires.js
var async_requires = __webpack_require__(77);
var async_requires_default = /*#__PURE__*/__webpack_require__.n(async_requires);

// CONCATENATED MODULE: ./.cache/production-app.js




var _loader$addDataPaths;









window.___emitter = emitter["a" /* default */];




window.asyncRequires = async_requires_default.a;
window.___emitter = emitter["a" /* default */];
window.___loader = loader["default"];
loader["default"].addPagesArray([window.page]);
loader["default"].addDataPaths((_loader$addDataPaths = {}, _loader$addDataPaths[window.page.jsonName] = window.dataPath, _loader$addDataPaths));
loader["default"].addProdRequires(async_requires_default.a);
init(); // Let the site/plugins run code very early.

Object(api_runner_browser["apiRunnerAsync"])("onClientEntry").then(function () {
  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if (Object(api_runner_browser["apiRunner"])("registerServiceWorker").length > 0) {
    __webpack_require__(233);
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose_default()(RouteHandler, _React$Component);

    function RouteHandler(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      navigation_onPreRouteUpdate(props.location);
      return _this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var location = this.props.location;
      var child; // TODO
      // check if hash + if element and if so scroll
      // remove hash handling from gatsby-link
      // check if scrollbehavior handles back button for
      // restoring old position
      // if not, add that.

      if (loader["default"].getPage(location.pathname)) {
        child = Object(react["createElement"])(page_renderer["a" /* default */], objectSpread_default()({
          isPage: true
        }, this.props));
      } else {
        child = Object(react["createElement"])(page_renderer["a" /* default */], {
          isPage: true,
          location: {
            pathname: "/404.html"
          }
        });
      }

      return react_default.a.createElement(gatsby_react_router_scroll["ScrollContext"], {
        location: location,
        shouldUpdateScroll: shouldUpdateScroll
      }, child);
    }; // Call onRouteUpdate on the initial page load.


    _proto.componentDidMount = function componentDidMount() {
      navigation_onRouteUpdate(this.props.location);
    };

    return RouteHandler;
  }(react_default.a.Component);

  if (window.page && window.page.path !== "/offline-plugin-app-shell-fallback/" && "" + window.page.path !== window.location.pathname) {
    Object(es["navigate"])("" + window.page.path + window.location.search + window.location.hash, {
      replace: true
    });
  }

  loader["default"].getResourcesForPathname(window.location.pathname).then(function () {
    if (!loader["default"].getPage(window.location.pathname)) {
      return loader["default"].getResourcesForPathname("/404.html").then(function (resources) {
        return load_directly_or_404(resources, window.location.pathname + window.location.search + window.location.hash, true);
      });
    }
  }).then(function () {
    var Root = function Root() {
      return Object(react["createElement"])(es["Router"], {
        basepath: ""
      }, Object(react["createElement"])(RouteHandler, {
        path: "/*"
      }));
    };

    var WrappedRoot = Object(api_runner_browser["apiRunner"])("wrapRootElement", {
      element: react_default.a.createElement(Root, null)
    }, react_default.a.createElement(Root, null), function (_ref) {
      var result = _ref.result;
      return {
        element: result
      };
    }).pop();

    var NewRoot = function NewRoot() {
      return WrappedRoot;
    };

    var renderer = Object(api_runner_browser["apiRunner"])("replaceHydrateFunction", undefined, react_dom_default.a.hydrate)[0];
    ready_default()(function () {
      renderer(react_default.a.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0, function () {
        Object(api_runner_browser["apiRunner"])("onInitialClientRender");
      });
    });
  });
});

/***/ })
],[[234,40]]]);
//# sourceMappingURL=app-30bdabb5416d7ff4b806.js.map