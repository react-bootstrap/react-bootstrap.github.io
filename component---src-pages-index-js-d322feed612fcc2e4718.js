(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{Kkto:function(e,t,r){e.exports={cls1:"index-Heading-module--cls1--3y07_",cls2:"index-Heading-module--cls2--2RiAJ index-Heading-module--cls1--3y07_"}},QP3f:function(e){e.exports=JSON.parse('{"name":"react-bootstrap","version":"2.0.0-beta.6","description":"Bootstrap 4 components built with React","keywords":["react","ecosystem-react","react-component","bootstrap"],"homepage":"https://react-bootstrap.github.io/","bugs":{"url":"https://github.com/react-bootstrap/react-bootstrap/issues"},"license":"MIT","author":{"name":"Stephen J. Collings","email":"stevoland@gmail.com"},"files":["CHANGELOG.md","lib","dist","es"],"main":"lib/cjs/index.js","module":"lib/esm/index.js","types":"lib/esm/index.d.ts","sideEffects":false,"repository":{"type":"git","url":"git+https://github.com/react-bootstrap/react-bootstrap.git"},"scripts":{"bootstrap":"yarn --network-timeout 100000 && yarn --cwd www --network-timeout 100000","build":"node tools/build.js","build-docs":"yarn --cwd www build","build-types":"yarn tsc -d --emitDeclarationOnly --outDir types","changelog":"conventional-changelog -p angular -i CHANGELOG.md -s","deploy-docs":"yarn --cwd www deploy","format":"eslint --ext tsx --ext ts src --fix","lint":"eslint --ext tsx --ext ts src && tsc --noEmit","prepublishOnly":"npm run build","release":"rollout","start":"yarn --cwd www develop","tdd":"karma start","test":"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha test/server/*Spec.js","prepare":"husky install"},"lint-staged":{"*.{js,ts,tsx}":"eslint --fix"},"prettier":{"singleQuote":true,"trailingComma":"all"},"dependencies":{"@babel/runtime":"^7.14.0","@restart/context":"^2.1.4","@restart/hooks":"^0.3.26","@restart/ui":"^0.2.1","@types/invariant":"^2.2.33","@types/prop-types":"^15.7.3","@types/react":">=16.14.8","@types/react-transition-group":"^4.4.1","@types/warning":"^3.0.0","classnames":"^2.3.1","dom-helpers":"^5.2.1","invariant":"^2.2.4","prop-types":"^15.7.2","prop-types-extra":"^1.1.0","react-transition-group":"^4.4.1","uncontrollable":"^7.2.1","warning":"^4.0.3"},"devDependencies":{"@4c/rollout":"^2.2.2","@4c/tsconfig":"^0.4.0","@babel/cli":"^7.14.8","@babel/core":"^7.15.0","@babel/preset-typescript":"^7.15.0","@babel/register":"^7.15.3","@react-bootstrap/babel-preset":"^2.1.0","@react-bootstrap/eslint-config":"^2.0.0","@testing-library/dom":"^8.1.0","@testing-library/react":"^12.0.0","@testing-library/user-event":"^13.2.1","@types/chai":"^4.2.21","@types/mocha":"^9.0.0","@types/sinon":"^10.0.2","@types/sinon-chai":"^3.2.5","@typescript-eslint/eslint-plugin":"^4.29.1","@typescript-eslint/parser":"^4.29.1","babel-eslint":"^10.1.0","babel-loader":"^8.2.2","babel-plugin-istanbul":"^6.0.0","chai":"^4.3.4","chalk":"^4.1.2","cherry-pick":"^0.5.0","codecov":"^3.8.3","conventional-changelog-cli":"^2.1.1","cpy-cli":"^3.1.1","cross-env":"^7.0.3","dtslint":"^4.1.3","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.6","eslint":"^7.32.0","eslint-config-4catalyzer-typescript":"^3.1.0","eslint-import-resolver-node":"^0.3.5","eslint-import-resolver-webpack":"^0.13.1","eslint-plugin-import":"^2.24.0","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-mocha":"^9.0.0","eslint-plugin-prettier":"^3.4.0","eslint-plugin-react":"^7.24.0","execa":"^5.1.1","fs-extra":"^10.0.0","husky":"^6.0.0","karma":"^6.3.4","karma-chrome-launcher":"^3.1.0","karma-cli":"^2.0.0","karma-coverage":"^2.0.3","karma-firefox-launcher":"^2.1.1","karma-mocha":"^2.0.1","karma-mocha-reporter":"^2.2.5","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^5.0.0","lint-staged":"^11.1.2","lodash":"^4.17.21","mocha":"^9.0.3","prettier":"^2.3.2","process":"^0.11.10","react":"^16.14.0","react-dom":"^16.14.0","react-test-renderer":"^16.14.0","simulant":"^0.2.2","sinon":"^11.1.2","sinon-chai":"^3.7.0","stream-browserify":"^3.0.0","typescript":"^4.3.5","util":"^0.12.4","webpack":"^5.50.0"},"peerDependencies":{"react":">=16.14.0","react-dom":">=16.14.0"},"publishConfig":{"directory":"lib"},"release":{"conventionalCommits":true}}')},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("dI71"),s=r("rePB"),o=r("oYCi"),a=r("mXGw"),i=r("wtL4"),c=r("1YIW"),l=r("MZOr"),d=r("by5o"),p=r("IAtc"),u=r.n(p),b=r("QP3f"),m=r("r+yI");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=u()("div",null,{displayName:"MastHead",styles:r("hO/e"),attrs:null,vars:[]}),x=u()("div",null,{displayName:"Content",styles:r("lVdN"),attrs:null,vars:[]}),g=u()("h1",null,{displayName:"Heading",styles:r("Kkto"),attrs:null,vars:[]}),f=u()("p",null,{displayName:"SubHeading",styles:r("uS/E"),attrs:null,vars:[]}),O=u()(i.a,null,{displayName:"BrandButton",styles:r("lf4o"),attrs:null,vars:[]}),w=u()(d.a,null,{displayName:"FeatureCard",styles:r("cfbj"),attrs:function(e){return y(y({},e),{},{md:4})},vars:[]}),v=u()("div",null,{displayName:"ButtonToolbar",styles:r("sG4Z"),attrs:null,vars:[]});t.default=Object(m.a)(function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return Object(o.jsxs)("main",{id:"rb-docs-content",children:[Object(o.jsx)(j,{children:Object(o.jsxs)(x,{children:[Object(o.jsx)(g,{children:"React Bootstrap"}),Object(o.jsxs)(f,{children:["The most popular front-end framework",Object(o.jsx)("br",{}),Object(o.jsx)("strong",{children:"Rebuilt"})," for React."]}),Object(o.jsxs)(v,{children:[Object(o.jsx)(O,{size:"lg",variant:"brand",className:"me-3 px-5",href:"/getting-started/introduction",children:"Get started"}),Object(o.jsx)(i.a,{size:"lg",href:"/components/alerts",className:"px-5",variant:"outline-light",children:"Components"})]}),Object(o.jsxs)("div",{className:"text-muted mt-3",children:["Current version: ",b.version]})]})}),Object(o.jsx)(c.a,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsxs)(w,{children:[Object(o.jsx)("h2",{children:"Rebuilt with React"}),Object(o.jsx)("p",{children:"React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery."}),Object(o.jsx)("p",{children:"As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation."})]}),Object(o.jsxs)(w,{children:[Object(o.jsx)("h2",{children:"Bootstrap at its core"}),Object(o.jsx)("p",{children:"Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem."}),Object(o.jsx)("p",{children:"By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love."}),Object(o.jsx)("p",{})]}),Object(o.jsxs)(w,{children:[Object(o.jsx)("h2",{children:"Accessible by default"}),Object(o.jsx)("p",{children:"The React component model gives us more control over form and function of each component."}),Object(o.jsx)("p",{children:"Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap."})]})]})})]})},t}(a.Component))},cfbj:function(e,t,r){e.exports={cls1:"index-FeatureCard-module--cls1--JLkTf",cls2:"index-FeatureCard-module--cls2--2Vakg index-FeatureCard-module--cls1--JLkTf px-4 py-3"}},"hO/e":function(e,t,r){e.exports={cls1:"index-MastHead-module--cls1--37xum",cls2:"index-MastHead-module--cls2--OdHF- index-MastHead-module--cls1--37xum mb-4"}},lVdN:function(e,t,r){e.exports={cls1:"index-Content-module--cls1--2W4wC",cls2:"index-Content-module--cls2--2s0C3 index-Content-module--cls1--2W4wC px-4"}},lf4o:function(e,t,r){e.exports={cls1:"index-BrandButton-module--cls1--3hU-Q",cls2:"index-BrandButton-module--cls2--1Xvei index-BrandButton-module--cls1--3hU-Q",btnCheck:"index-BrandButton-module--btn-check--35XGC",active:"index-BrandButton-module--active--1iX6b",dropdownToggle:"index-BrandButton-module--dropdown-toggle---Z_bV",show:"index-BrandButton-module--show--134sZ",disabled:"index-BrandButton-module--disabled--3vLzP"}},"r+yI":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("rePB"),s=r("oYCi"),o=r("Snbm"),a=r("aArQ");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){return function(t){var r=t.location.pathname,n=a.a;return(r.startsWith("/getting-started")||r.startsWith("/layout")||r.startsWith("/components")||r.startsWith("/utilities"))&&(n=o.a),Object(s.jsx)(n,{location:t.location,children:Object(s.jsx)(e,c({},t))})}}},sG4Z:function(e,t,r){e.exports={cls1:"index-ButtonToolbar-module--cls1--11ZiD",cls2:"index-ButtonToolbar-module--cls2--3tR4q index-ButtonToolbar-module--cls1--11ZiD"}},"uS/E":function(e,t,r){e.exports={cls1:"index-SubHeading-module--cls1--2j2Mz",cls2:"index-SubHeading-module--cls2--1f2h4 index-SubHeading-module--cls1--2j2Mz lead"}}}]);
//# sourceMappingURL=component---src-pages-index-js-d322feed612fcc2e4718.js.map