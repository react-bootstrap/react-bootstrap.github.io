/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		40: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		40: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"6":"component---src-pages-components-alerts-mdx","7":"component---src-pages-components-badge-mdx","8":"component---src-pages-components-breadcrumb-mdx","9":"component---src-pages-components-button-group-mdx","10":"component---src-pages-components-buttons-mdx","11":"component---src-pages-components-cards-mdx","12":"component---src-pages-components-carousel-mdx","13":"component---src-pages-components-dropdowns-mdx","14":"component---src-pages-components-figures-js","15":"component---src-pages-components-forms-js","16":"component---src-pages-components-images-js","17":"component---src-pages-components-input-group-js","18":"component---src-pages-components-jumbotron-js","19":"component---src-pages-components-list-group-mdx","20":"component---src-pages-components-modal-js","21":"component---src-pages-components-navbar-js","22":"component---src-pages-components-navs-mdx","23":"component---src-pages-components-overlays-js","24":"component---src-pages-components-pagination-js","25":"component---src-pages-components-progress-js","26":"component---src-pages-components-table-js","27":"component---src-pages-components-tabs-js","28":"component---src-pages-getting-started-introduction-mdx","29":"component---src-pages-getting-started-support-mdx","30":"component---src-pages-getting-started-theming-js","31":"component---src-pages-index-js","32":"component---src-pages-layout-grid-js","33":"component---src-pages-layout-media-js","34":"component---src-pages-migrating-mdx","35":"component---src-pages-utilities-react-overlays-js","36":"component---src-pages-utilities-responsive-embed-js","37":"component---src-pages-utilities-transitions-mdx"}[chunkId]||chunkId) + "-" + {"0":"d191e381314e38ed8196","1":"258a5f4c28e0e1ad7ec7","2":"45cd5a24dbacf0d2e298","3":"92f87aacd7b4d05df449","4":"3932058effbbde6fb92e","6":"5a81a13411e118436c5c","7":"c49bd61bdcab0590270b","8":"54ef786b456f92f2c75b","9":"8f8e4eaf93df4187a72e","10":"007d485eda79641c778d","11":"1087048347103854f7b4","12":"ce59dd3ad3db549f3b6e","13":"ddf863aeb9b86e5475ad","14":"24b0b8f159a4aecbeb70","15":"aa05354c5772212c5dea","16":"02a060bc267de825d159","17":"a1b5b4bf41284f323d01","18":"07ffa2112f5deef5c497","19":"327a4ca726971b07f15f","20":"6aed68cbf9d80b942d5b","21":"f92d82a4c4930f4fc948","22":"1f00e278b388bca42a6f","23":"529853ed912309308c29","24":"db9af174152486bf9107","25":"90ad31937d1830764606","26":"5c2ea734499bd9b9774c","27":"7195c20c843e7559b698","28":"3d89620436e06acc67a3","29":"3b1eea0e3bfa57bf68dd","30":"aa0d1ef6aae74aa01110","31":"d4f626f76337aa9853cb","32":"3268d669b3388d2b7c42","33":"c202de36d7cf68270ec6","34":"cd8c21389750e6226229","35":"e75d26f20b5b4c29b540","36":"49d5bccc91eeaf2b5aca","37":"ef114f0d63f6ed728ea4","38":"8fd1fd0fc9571e32b93d","39":"c8e40c2cfdd02bdfd1fa"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"3":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"30":1,"31":1,"32":1,"33":1,"36":1,"37":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"6":"component---src-pages-components-alerts-mdx","7":"component---src-pages-components-badge-mdx","8":"component---src-pages-components-breadcrumb-mdx","9":"component---src-pages-components-button-group-mdx","10":"component---src-pages-components-buttons-mdx","11":"component---src-pages-components-cards-mdx","12":"component---src-pages-components-carousel-mdx","13":"component---src-pages-components-dropdowns-mdx","14":"component---src-pages-components-figures-js","15":"component---src-pages-components-forms-js","16":"component---src-pages-components-images-js","17":"component---src-pages-components-input-group-js","18":"component---src-pages-components-jumbotron-js","19":"component---src-pages-components-list-group-mdx","20":"component---src-pages-components-modal-js","21":"component---src-pages-components-navbar-js","22":"component---src-pages-components-navs-mdx","23":"component---src-pages-components-overlays-js","24":"component---src-pages-components-pagination-js","25":"component---src-pages-components-progress-js","26":"component---src-pages-components-table-js","27":"component---src-pages-components-tabs-js","28":"component---src-pages-getting-started-introduction-mdx","29":"component---src-pages-getting-started-support-mdx","30":"component---src-pages-getting-started-theming-js","31":"component---src-pages-index-js","32":"component---src-pages-layout-grid-js","33":"component---src-pages-layout-media-js","34":"component---src-pages-migrating-mdx","35":"component---src-pages-utilities-react-overlays-js","36":"component---src-pages-utilities-responsive-embed-js","37":"component---src-pages-utilities-transitions-mdx"}[chunkId]||chunkId) + "." + {"0":"31d6cfe0d16ae931b73c","1":"3dcd03f853a181ae623d","2":"31d6cfe0d16ae931b73c","3":"feb53566ecb19e60bfd5","4":"31d6cfe0d16ae931b73c","6":"1b8803a2067d57f36f84","7":"432b04a239dbe78825f1","8":"432b04a239dbe78825f1","9":"432b04a239dbe78825f1","10":"432b04a239dbe78825f1","11":"432b04a239dbe78825f1","12":"432b04a239dbe78825f1","13":"0d861e24e88d0aa153f9","14":"432b04a239dbe78825f1","15":"432b04a239dbe78825f1","16":"432b04a239dbe78825f1","17":"432b04a239dbe78825f1","18":"432b04a239dbe78825f1","19":"4a04f16cbd5c475ea2bf","20":"ca01fc431366b5dcd5ab","21":"1b8803a2067d57f36f84","22":"1b8803a2067d57f36f84","23":"7996a5a456bc747ac689","24":"432b04a239dbe78825f1","25":"432b04a239dbe78825f1","26":"432b04a239dbe78825f1","27":"432b04a239dbe78825f1","28":"4ed852185de24aae5634","29":"31d6cfe0d16ae931b73c","30":"4ed852185de24aae5634","31":"e873d5e2a4893ca2cb9b","32":"ce77ef9a5c2f0a9a1410","33":"432b04a239dbe78825f1","34":"31d6cfe0d16ae931b73c","35":"31d6cfe0d16ae931b73c","36":"432b04a239dbe78825f1","37":"1b8803a2067d57f36f84","38":"31d6cfe0d16ae931b73c","39":"31d6cfe0d16ae931b73c"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay1ydW50aW1lLTI1YzM4NmY2NWZhOGMyNDAyZTNlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHQ0MDogMFxuIFx0fVxuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0NDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiNlwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtYWxlcnRzLW1keFwiLFwiN1wiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtYmFkZ2UtbWR4XCIsXCI4XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1icmVhZGNydW1iLW1keFwiLFwiOVwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtYnV0dG9uLWdyb3VwLW1keFwiLFwiMTBcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLWJ1dHRvbnMtbWR4XCIsXCIxMVwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtY2FyZHMtbWR4XCIsXCIxMlwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtY2Fyb3VzZWwtbWR4XCIsXCIxM1wiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtZHJvcGRvd25zLW1keFwiLFwiMTRcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLWZpZ3VyZXMtanNcIixcIjE1XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1mb3Jtcy1qc1wiLFwiMTZcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLWltYWdlcy1qc1wiLFwiMTdcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLWlucHV0LWdyb3VwLWpzXCIsXCIxOFwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtanVtYm90cm9uLWpzXCIsXCIxOVwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtbGlzdC1ncm91cC1tZHhcIixcIjIwXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1tb2RhbC1qc1wiLFwiMjFcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLW5hdmJhci1qc1wiLFwiMjJcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLW5hdnMtbWR4XCIsXCIyM1wiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtb3ZlcmxheXMtanNcIixcIjI0XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1wYWdpbmF0aW9uLWpzXCIsXCIyNVwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtanNcIixcIjI2XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy10YWJsZS1qc1wiLFwiMjdcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLXRhYnMtanNcIixcIjI4XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtZ2V0dGluZy1zdGFydGVkLWludHJvZHVjdGlvbi1tZHhcIixcIjI5XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtZ2V0dGluZy1zdGFydGVkLXN1cHBvcnQtbWR4XCIsXCIzMFwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWdldHRpbmctc3RhcnRlZC10aGVtaW5nLWpzXCIsXCIzMVwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWluZGV4LWpzXCIsXCIzMlwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWxheW91dC1ncmlkLWpzXCIsXCIzM1wiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWxheW91dC1tZWRpYS1qc1wiLFwiMzRcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1taWdyYXRpbmctbWR4XCIsXCIzNVwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLXV0aWxpdGllcy1yZWFjdC1vdmVybGF5cy1qc1wiLFwiMzZcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy11dGlsaXRpZXMtcmVzcG9uc2l2ZS1lbWJlZC1qc1wiLFwiMzdcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy11dGlsaXRpZXMtdHJhbnNpdGlvbnMtbWR4XCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLVwiICsge1wiMFwiOlwiZDE5MWUzODEzMTRlMzhlZDgxOTZcIixcIjFcIjpcIjI1OGE1ZjRjMjhlMGUxYWQ3ZWM3XCIsXCIyXCI6XCI0NWNkNWEyNGRiYWNmMGQyZTI5OFwiLFwiM1wiOlwiOTJmODdhYWNkN2I0ZDA1ZGY0NDlcIixcIjRcIjpcIjM5MzIwNThlZmZiYmRlNmZiOTJlXCIsXCI2XCI6XCI1YTgxYTEzNDExZTExODQzNmM1Y1wiLFwiN1wiOlwiYzQ5YmQ2MWJkY2FiMDU5MDI3MGJcIixcIjhcIjpcIjU0ZWY3ODZiNDU2ZjkyZjJjNzViXCIsXCI5XCI6XCI4ZjhlNGVhZjkzZGY0MTg3YTcyZVwiLFwiMTBcIjpcIjAwN2Q0ODVlZGE3OTY0MWM3NzhkXCIsXCIxMVwiOlwiMTA4NzA0ODM0NzEwMzg1NGY3YjRcIixcIjEyXCI6XCJjZTU5ZGQzYWQzZGI1NDlmM2I2ZVwiLFwiMTNcIjpcImRkZjg2M2FlYjliODZlNTQ3NWFkXCIsXCIxNFwiOlwiMjRiMGI4ZjE1OWE0YWVjYmViNzBcIixcIjE1XCI6XCJhYTA1MzU0YzU3NzIyMTJjNWRlYVwiLFwiMTZcIjpcIjAyYTA2MGJjMjY3ZGU4MjVkMTU5XCIsXCIxN1wiOlwiYTFiNWI0YmY0MTI4NGYzMjNkMDFcIixcIjE4XCI6XCIwN2ZmYTIxMTJmNWRlZWY1YzQ5N1wiLFwiMTlcIjpcIjMyN2E0Y2E3MjY5NzFiMDdmMTVmXCIsXCIyMFwiOlwiNmFlZDY4Y2JmOWQ4MGI5NDJkNWJcIixcIjIxXCI6XCJmOTJkODJhNGM0OTMwZjRmYzk0OFwiLFwiMjJcIjpcIjFmMDBlMjc4YjM4OGJjYTQyYTZmXCIsXCIyM1wiOlwiNTI5ODUzZWQ5MTIzMDkzMDhjMjlcIixcIjI0XCI6XCJkYjlhZjE3NDE1MjQ4NmJmOTEwN1wiLFwiMjVcIjpcIjkwYWQzMTkzN2QxODMwNzY0NjA2XCIsXCIyNlwiOlwiNWMyZWE3MzQ0OTliZDliOTc3NGNcIixcIjI3XCI6XCI3MTk1YzIwYzg0M2U3NTU5YjY5OFwiLFwiMjhcIjpcIjNkODk2MjA0MzZlMDZhY2M2N2EzXCIsXCIyOVwiOlwiM2IxZWVhMGUzYmZhNTdiZjY4ZGRcIixcIjMwXCI6XCJhYTBkMWVmNmFhZTc0YWEwMTExMFwiLFwiMzFcIjpcImQ0ZjYyNmY3NjMzN2FhOTg1M2NiXCIsXCIzMlwiOlwiMzI2OGQ2NjliMzM4OGQyYjdjNDJcIixcIjMzXCI6XCJjMjAyZGUzNmQ3Y2Y2ODI3MGVjNlwiLFwiMzRcIjpcImNkOGMyMTM4OTc1MGU2MjI2MjI5XCIsXCIzNVwiOlwiZTc1ZDI2ZjIwYjViNGMyOWI1NDBcIixcIjM2XCI6XCI0OWQ1YmNjYzkxZWVhZjJiNWFjYVwiLFwiMzdcIjpcImVmMTE0ZjBkNjNmNmVkNzI4ZWE0XCIsXCIzOFwiOlwiOGZkMWZkMGZjOTU3MWUzMmI5M2RcIixcIjM5XCI6XCJjOGU0MGMyY2ZkZDAyYmRmZDFmYVwifVtjaHVua0lkXSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIENTUyBsb2FkaW5nXG4gXHRcdHZhciBjc3NDaHVua3MgPSB7XCIxXCI6MSxcIjNcIjoxLFwiNlwiOjEsXCI3XCI6MSxcIjhcIjoxLFwiOVwiOjEsXCIxMFwiOjEsXCIxMVwiOjEsXCIxMlwiOjEsXCIxM1wiOjEsXCIxNFwiOjEsXCIxNVwiOjEsXCIxNlwiOjEsXCIxN1wiOjEsXCIxOFwiOjEsXCIxOVwiOjEsXCIyMFwiOjEsXCIyMVwiOjEsXCIyMlwiOjEsXCIyM1wiOjEsXCIyNFwiOjEsXCIyNVwiOjEsXCIyNlwiOjEsXCIyN1wiOjEsXCIyOFwiOjEsXCIzMFwiOjEsXCIzMVwiOjEsXCIzMlwiOjEsXCIzM1wiOjEsXCIzNlwiOjEsXCIzN1wiOjF9O1xuIFx0XHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdHZhciBocmVmID0gXCJcIiArICh7XCI2XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1hbGVydHMtbWR4XCIsXCI3XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1iYWRnZS1tZHhcIixcIjhcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLWJyZWFkY3J1bWItbWR4XCIsXCI5XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1idXR0b24tZ3JvdXAtbWR4XCIsXCIxMFwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtYnV0dG9ucy1tZHhcIixcIjExXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1jYXJkcy1tZHhcIixcIjEyXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1jYXJvdXNlbC1tZHhcIixcIjEzXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1kcm9wZG93bnMtbWR4XCIsXCIxNFwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtZmlndXJlcy1qc1wiLFwiMTVcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLWZvcm1zLWpzXCIsXCIxNlwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtaW1hZ2VzLWpzXCIsXCIxN1wiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtaW5wdXQtZ3JvdXAtanNcIixcIjE4XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1qdW1ib3Ryb24tanNcIixcIjE5XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1saXN0LWdyb3VwLW1keFwiLFwiMjBcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLW1vZGFsLWpzXCIsXCIyMVwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtbmF2YmFyLWpzXCIsXCIyMlwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtbmF2cy1tZHhcIixcIjIzXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1vdmVybGF5cy1qc1wiLFwiMjRcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLXBhZ2luYXRpb24tanNcIixcIjI1XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtY29tcG9uZW50cy1wcm9ncmVzcy1qc1wiLFwiMjZcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1jb21wb25lbnRzLXRhYmxlLWpzXCIsXCIyN1wiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtdGFicy1qc1wiLFwiMjhcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1nZXR0aW5nLXN0YXJ0ZWQtaW50cm9kdWN0aW9uLW1keFwiLFwiMjlcIjpcImNvbXBvbmVudC0tLXNyYy1wYWdlcy1nZXR0aW5nLXN0YXJ0ZWQtc3VwcG9ydC1tZHhcIixcIjMwXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtZ2V0dGluZy1zdGFydGVkLXRoZW1pbmctanNcIixcIjMxXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtaW5kZXgtanNcIixcIjMyXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtbGF5b3V0LWdyaWQtanNcIixcIjMzXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtbGF5b3V0LW1lZGlhLWpzXCIsXCIzNFwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLW1pZ3JhdGluZy1tZHhcIixcIjM1XCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtdXRpbGl0aWVzLXJlYWN0LW92ZXJsYXlzLWpzXCIsXCIzNlwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLXV0aWxpdGllcy1yZXNwb25zaXZlLWVtYmVkLWpzXCIsXCIzN1wiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLXV0aWxpdGllcy10cmFuc2l0aW9ucy1tZHhcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCIwXCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMVwiOlwiM2RjZDAzZjg1M2ExODFhZTYyM2RcIixcIjJcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCIsXCIzXCI6XCJmZWI1MzU2NmVjYjE5ZTYwYmZkNVwiLFwiNFwiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjZcIjpcIjFiODgwM2EyMDY3ZDU3ZjM2Zjg0XCIsXCI3XCI6XCI0MzJiMDRhMjM5ZGJlNzg4MjVmMVwiLFwiOFwiOlwiNDMyYjA0YTIzOWRiZTc4ODI1ZjFcIixcIjlcIjpcIjQzMmIwNGEyMzlkYmU3ODgyNWYxXCIsXCIxMFwiOlwiNDMyYjA0YTIzOWRiZTc4ODI1ZjFcIixcIjExXCI6XCI0MzJiMDRhMjM5ZGJlNzg4MjVmMVwiLFwiMTJcIjpcIjQzMmIwNGEyMzlkYmU3ODgyNWYxXCIsXCIxM1wiOlwiMGQ4NjFlMjRlODhkMGFhMTUzZjlcIixcIjE0XCI6XCI0MzJiMDRhMjM5ZGJlNzg4MjVmMVwiLFwiMTVcIjpcIjQzMmIwNGEyMzlkYmU3ODgyNWYxXCIsXCIxNlwiOlwiNDMyYjA0YTIzOWRiZTc4ODI1ZjFcIixcIjE3XCI6XCI0MzJiMDRhMjM5ZGJlNzg4MjVmMVwiLFwiMThcIjpcIjQzMmIwNGEyMzlkYmU3ODgyNWYxXCIsXCIxOVwiOlwiNGEwNGYxNmNiZDVjNDc1ZWEyYmZcIixcIjIwXCI6XCJjYTAxZmM0MzEzNjZiNWRjZDVhYlwiLFwiMjFcIjpcIjFiODgwM2EyMDY3ZDU3ZjM2Zjg0XCIsXCIyMlwiOlwiMWI4ODAzYTIwNjdkNTdmMzZmODRcIixcIjIzXCI6XCI3OTk2YTVhNDU2YmM3NDdhYzY4OVwiLFwiMjRcIjpcIjQzMmIwNGEyMzlkYmU3ODgyNWYxXCIsXCIyNVwiOlwiNDMyYjA0YTIzOWRiZTc4ODI1ZjFcIixcIjI2XCI6XCI0MzJiMDRhMjM5ZGJlNzg4MjVmMVwiLFwiMjdcIjpcIjQzMmIwNGEyMzlkYmU3ODgyNWYxXCIsXCIyOFwiOlwiNGVkODUyMTg1ZGUyNGFhZTU2MzRcIixcIjI5XCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMzBcIjpcIjRlZDg1MjE4NWRlMjRhYWU1NjM0XCIsXCIzMVwiOlwiZTg3M2Q1ZTJhNDg5M2NhMmNiOWJcIixcIjMyXCI6XCJjZTc3ZWY5YTVjMmYwYTlhMTQxMFwiLFwiMzNcIjpcIjQzMmIwNGEyMzlkYmU3ODgyNWYxXCIsXCIzNFwiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjM1XCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMzZcIjpcIjQzMmIwNGEyMzlkYmU3ODgyNWYxXCIsXCIzN1wiOlwiMWI4ODAzYTIwNjdkNTdmMzZmODRcIixcIjM4XCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMzlcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCJ9W2NodW5rSWRdICsgXCIuY3NzXCI7XG4gXHRcdFx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuIFx0XHRcdFx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiBcdFx0XHRcdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gXHRcdFx0XHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gXHRcdFx0XHRsaW5rVGFnLm9ubG9hZCA9IHJlc29sdmU7XG4gXHRcdFx0XHRsaW5rVGFnLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuIFx0XHRcdFx0XHR2YXIgcmVxdWVzdCA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjIHx8IGZ1bGxocmVmO1xuIFx0XHRcdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlcXVlc3QgKyBcIilcIik7XG4gXHRcdFx0XHRcdGVyci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiBcdFx0XHRcdFx0cmVqZWN0KGVycik7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gXHRcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdFx0fSkpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknKTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIGZyb20gb3RoZXIgY2h1bmtzXG4gXHRjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==