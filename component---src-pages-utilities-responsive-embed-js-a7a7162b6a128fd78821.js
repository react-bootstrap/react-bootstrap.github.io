(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1122:function(e,t){e.exports='<div style={{ width: 660, height: \'auto\' }}>\n  <ResponsiveEmbed aspect="a16by9">\n    <embed type="image/svg+xml" src="/TheresaKnott_castle.svg" />\n  </ResponsiveEmbed>\n</div>;\n'},214:function(e,t,r){"use strict";r.r(t),r.d(t,"query",function(){return p});var n=r(0),a=r.n(n),o=r(113),l=r(264),i=r(287),c=r(1122),s=r.n(c),u=r(265);t.default=Object(u.a)(function(e){var t=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.default,{h:"1",id:"responsive-embed"},"Responsive embed"),a.a.createElement("p",null,"Allow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device."),a.a.createElement("p",null,"You don't need to include ",a.a.createElement("code",null,'frameborder="0"')," in your"," ",a.a.createElement("code",null,"iframe"),"s."),a.a.createElement("p",null,"The aspect ratio is controlled via the ",a.a.createElement("code",null,"aspectRatio")," prop."),a.a.createElement(i.a,{codeText:s.a}),a.a.createElement(o.default,{h:"3",id:"responsive-embed-props"},"API"),a.a.createElement(l.a,{metadata:t.ResponsiveEmbed}))});var p="795308438"},234:function(e,t,r){var n=r(13).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||r(14)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},238:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.5",description:"Bootstrap 4 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop","ci-lint":'eslint --rule "prettier/prettier: 2"',format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook",dtslint:"dtslint types"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.3.0","react-dom":">=16.3.0"},devDependencies:{"@4c/rollout":"^1.3.2","@babel/cli":"^7.2.3","@babel/core":"^7.3.4","@babel/plugin-proposal-class-properties":"^7.3.4","@babel/plugin-proposal-export-default-from":"^7.2.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-transform-runtime":"^7.3.4","@babel/preset-env":"^7.3.4","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@react-bootstrap/babel-preset":"^1.1.2","@react-bootstrap/eslint-config":"^1.1.1","@storybook/react":"^3.4.8","@types/react":"^16.8.7","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.5","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.1.1","babel-plugin-transform-react-remove-prop-types":"^0.4.24",chai:"^4.2.0",chalk:"^2.4.2",codecov:"^3.2.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.12","cpy-cli":"^2.0.0","create-react-class":"^15.6.3","cross-env":"^5.2.0",dtslint:"^0.4.1",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.10.0",eslint:"^5.15.1","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.16.0","eslint-plugin-jsx-a11y":"^6.2.1","eslint-plugin-mocha":"^5.3.0","eslint-plugin-prettier":"^3.0.1","eslint-plugin-react":"^7.12.4",execa:"^1.0.0","fs-extra":"^7.0.1",husky:"^1.3.1",karma:"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.5","lint-staged":"^8.1.5",lodash:"^4.17.11",mocha:"^5.2.0",prettier:"^1.16.4",react:"^16.8.4","react-dom":"^16.8.4","react-test-renderer":"^16.8.4","release-script":"^1.0.2",sinon:"^7.2.7","sinon-chai":"^3.3.0",typescript:"^3.2.2",webpack:"^4.29.6"},dependencies:{"@babel/runtime":"^7.3.4","@react-bootstrap/react-popper":"1.2.1","@restart/context":"^2.1.2","@restart/hooks":"^0.1.1",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.7","prop-types":"^15.7.2","prop-types-extra":"^1.1.0","react-overlays":"^1.2.0","react-transition-group":"^2.6.0",uncontrollable:"^6.1.0",warning:"^4.0.3"},release:{publishDir:"lib"}}},240:function(e,t,r){var n=r(271)(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()});e.exports=n},241:function(e,t,r){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},242:function(e,t,r){var n=r(243),a=r(245),o=r(252),l=r(259),i=o(function(e,t){if(null==e)return[];var r=t.length;return r>1&&l(e,t[0],t[1])?t=[]:r>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),a(e,n(t,1),[])});e.exports=i},243:function(e,t,r){var n=r(278),a=r(244);e.exports=function e(t,r,o,l,i){var c=-1,s=t.length;for(o||(o=a),i||(i=[]);++c<s;){var u=t[c];r>0&&o(u)?r>1?e(u,r-1,o,l,i):n(i,u):l||(i[i.length]=u)}return i}},244:function(e,t,r){var n=r(268),a=r(279),o=r(266),l=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(l&&e&&e[l])}},245:function(e,t,r){var n=r(277),a=r(280),o=r(246),l=r(249),i=r(276),c=r(250),s=r(233);e.exports=function(e,t,r){var u=-1;t=n(t.length?t:[s],i(a));var p=o(e,function(e,r,a){return{criteria:n(t,function(t){return t(e)}),index:++u,value:e}});return l(p,function(e,t){return c(e,t,r)})}},246:function(e,t,r){var n=r(247),a=r(231);e.exports=function(e,t){var r=-1,o=a(e)?Array(e.length):[];return n(e,function(e,n,a){o[++r]=t(e,n,a)}),o}},247:function(e,t,r){var n=r(282),a=r(248)(n);e.exports=a},248:function(e,t,r){var n=r(231);e.exports=function(e,t){return function(r,a){if(null==r)return r;if(!n(r))return e(r,a);for(var o=r.length,l=t?o:-1,i=Object(r);(t?l--:++l<o)&&!1!==a(i[l],l,i););return r}}},249:function(e,t){e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},250:function(e,t,r){var n=r(251);e.exports=function(e,t,r){for(var a=-1,o=e.criteria,l=t.criteria,i=o.length,c=r.length;++a<i;){var s=n(o[a],l[a]);if(s)return a>=c?s:s*("desc"==r[a]?-1:1)}return e.index-t.index}},251:function(e,t,r){var n=r(272);e.exports=function(e,t){if(e!==t){var r=void 0!==e,a=null===e,o=e==e,l=n(e),i=void 0!==t,c=null===t,s=t==t,u=n(t);if(!c&&!u&&!l&&e>t||l&&i&&s&&!c&&!u||a&&i&&s||!r&&s||!o)return 1;if(!a&&!l&&!u&&e<t||u&&r&&o&&!a&&!l||c&&r&&o||!i&&o||!s)return-1}return 0}},252:function(e,t,r){var n=r(233),a=r(253),o=r(255);e.exports=function(e,t){return o(a(e,t,n),e+"")}},253:function(e,t,r){var n=r(254),a=Math.max;e.exports=function(e,t,r){return t=a(void 0===t?e.length-1:t,0),function(){for(var o=arguments,l=-1,i=a(o.length-t,0),c=Array(i);++l<i;)c[l]=o[t+l];l=-1;for(var s=Array(t+1);++l<t;)s[l]=o[l];return s[t]=r(c),n(e,this,s)}}},254:function(e,t){e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},255:function(e,t,r){var n=r(256),a=r(258)(n);e.exports=a},256:function(e,t,r){var n=r(257),a=r(285),o=r(233),l=a?function(e,t){return a(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:o;e.exports=l},257:function(e,t){e.exports=function(e){return function(){return e}}},258:function(e,t){var r=800,n=16,a=Date.now;e.exports=function(e){var t=0,o=0;return function(){var l=a(),i=n-(l-o);if(o=l,i>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},259:function(e,t,r){var n=r(275),a=r(231),o=r(281),l=r(269);e.exports=function(e,t,r){if(!l(r))return!1;var i=typeof t;return!!("number"==i?a(r)&&o(t,r.length):"string"==i&&t in r)&&n(r[t],e)}},260:function(e,t,r){e.exports={code:"PropTable-Code-module--code--FStF3"}},261:function(e,t,r){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},262:function(e,t,r){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},263:function(e,t,r){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},264:function(e,t,r){"use strict";r(111),r(234);var n=r(240),a=r.n(n),o=r(0),l=r.n(o),i=r(28),c=r.n(i),s=r(48),u=r(76),p=r(273),m=r(274),d=r(238),f=c()("a",null,"Link",r(241),"link","link"),v=function(e){var t=e.component,r="//github.com/react-bootstrap/react-bootstrap/tree/v"+d.version+"/src/"+t+".js";return l.a.createElement(p.a,{overlay:l.a.createElement(m.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(f,{href:r,className:"js-search-exclude"},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},b=(r(75),r(5)),h=r.n(b),g=(r(47),r(112),r(242)),y=r.n(g),E=r(286),x=r.n(E),w=r(1),k=r.n(w),N=r(283),T=r(284);function C(e,t){return void 0===e&&(e=[]),e.find(function(e){return e.tag===t})}var D=c()("code",null,"Code",r(260),"code","code"),j=c()("div",null,"PropDescription",r(261),"prop-description","propDescription");function R(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function A(e){return"func"===e?"function":"bool"===e?"boolean":e}var L=function(e){function t(){return e.apply(this,arguments)||this}h()(t,e);var r=t.prototype;return r.getType=function(e){var t=this,r=e.type||{},n=A(r.name),a=C(e.doclets,"type");switch(n){case"object":return n;case"union":return r.value.reduce(function(e,r,n,a){var o=t.getType({type:r});return l.a.isValidElement(o)&&(o=l.a.cloneElement(o,{key:n})),e=e.concat(o),n===a.length-1?e:e.concat(" | ")},[]);case"array":var o=this.getType({type:r.value});return l.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(r);case"custom":return R(a&&a.value||r.raw);default:return n}},r._renderRows=function(e){var t=this;return y()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var r=e.name,n=e.description,a=C(e.doclets,"deprecated"),o=n&&n.childMarkdownRemark.html;return l.a.createElement("tr",{key:r,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},r," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,!!a&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+a.value+" ")),t.renderControllableNote(e,r),l.a.createElement(j,{dangerouslySetInnerHTML:{__html:o}})))})},r.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},r=A(t.name);if("custom"===r){var n=C(e.doclets,"type");return R(n&&n.value||t.raw)}return r}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(D,null,t))},r.renderControllableNote=function(e,t){var r=C(e.doclets,"controllable"),n="function"===A(e.type.name);if(!r)return!1;var a=n?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,r.value)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(D,null,r.value),", initial prop:"," ",l.a.createElement(D,null,"default"+x()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},a)))},r.renderEnum=function(e){var t=e.value||[];if(!Array.isArray(t))return t;var r=[];return t.forEach(function(e,t){var n=e.value;t>0&&r.push(l.a.createElement("span",{key:t+"c"}," | ")),r.push(l.a.createElement("code",{key:t},n))}),l.a.createElement("span",null,r)},r.renderRequiredBadge=function(e){return e.required?l.a.createElement(N.a,null,"required"):null},r.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(T.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);L.propTypes={metadata:k.a.object.isRequired};var z=L,_=c()("span",null,"Keyword",r(262),"keyword","keyword"),q=c()("code",null,"Code",r(263),"code","code"),O=function(e){var t=e.name;return l.a.createElement(q,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(_,null,"import")," ",t," ",l.a.createElement(_,null,"from")," 'react-bootstrap/",t,"'")};function S(e){var t=e.heading,r=e.metadata,n=e.exportedBy,o=r.description,i=r.displayName,c=o&&o.childMarkdownRemark.html,p=i;n&&(i=n.displayName+"."+i.split(n.displayName).pop(),p=n.displayName);var m=a()(i)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.default,{h:t||"3",id:m,title:i,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(u.a,{target:m},l.a.createElement("span",{className:" text-monospace"},i)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(v,{component:i}))),l.a.createElement(O,{name:p}),c&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),l.a.createElement(z,{metadata:r}))}S.propTypes={};t.a=S},265:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r(288);var n=r(0),a=r.n(n),o=r(267),l=r(289);function i(e){return function(t){var r=t.location.pathname,n=l.a;return(r.startsWith("/getting-started")||r.startsWith("/layout")||r.startsWith("/components")||r.startsWith("/utilities"))&&(n=o.a),a.a.createElement(n,{location:t.location},a.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-utilities-responsive-embed-js-a7a7162b6a128fd78821.js.map