(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{245:function(e,t,r){"use strict";r.r(t),r.d(t,"query",function(){return d});var n=r(0),a=r.n(n),o=r(302),l=r(121),c=r(319),i=r(845),s=r.n(i),u=r(846),p=r.n(u),m=r(304);t.default=Object(m.a)(function(e){var t=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.default,{h:"1",id:"images"},"Images"),a.a.createElement(l.default,{h:"2",id:"image-shape"},"Shape"),a.a.createElement("p",null,"Use the ",a.a.createElement("code",null,"rounded"),", ",a.a.createElement("code",null,"roundedCircle")," and"," ",a.a.createElement("code",null,"thumbnail")," props to customise the image."),a.a.createElement(c.a,{codeText:p.a}),a.a.createElement(l.default,{h:"2",id:"image-fluid"},"Fluid"),a.a.createElement("p",null,"Use the ",a.a.createElement("code",null,"fluid")," to scale image nicely to the parent element."),a.a.createElement(c.a,{codeText:s.a}),a.a.createElement(l.default,{h:"2",id:"image-api"},"API"),a.a.createElement(o.a,{metadata:t.Image}))});var d="1200151953"},270:function(e,t,r){var n=r(12).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||r(13)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},277:function(e){e.exports={name:"react-bootstrap",version:"0.32.4",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js","jsnext:main":"es/index.js",module:"es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",start:"yarn --cwd www run develop","ci-lint":"eslint --rule 'prettier/prettier: 2'",format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"npm run build-docs && rollout",tdd:"karma start",test:"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --compilers js:@babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:"^0.14.9 || >=15.3.0","react-dom":"^0.14.9 || >=15.3.0"},devDependencies:{"@4c/rollout":"^1.1.0","@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@storybook/react":"^3.4.8","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.0.1",chai:"^4.1.2",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.2","create-react-class":"^15.6.3","cross-env":"^5.2.0",enzyme:"^3.6.0","enzyme-adapter-react-16":"^1.5.0",eslint:"^5.5.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.0",husky:"^0.14.3",karma:"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.4","lint-staged":"^7.2.0",lodash:"^4.17.10",mocha:"^5.2.0",prettier:"~1.13.7",react:"^16.5.0","react-dom":"^16.5.0","react-test-renderer":"^16.5.0","release-script":"^1.0.2",sinon:"^6.2.0","sinon-chai":"^3.2.0",webpack:"^4.17.2"},dependencies:{"@babel/runtime":"^7.0.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.2.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.3","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^1.2.1","react-overlays":"^1.0.0-beta.17","react-prop-types":"^0.4.0","react-transition-group":"^2.4.0",uncontrollable:"^6.0.0",warning:"^4.0.1"},"release-script":{bowerRepo:"git@github.com:react-bootstrap/react-bootstrap-bower.git",docsRepo:"git@github.com:react-bootstrap/react-bootstrap.github.io.git",docsRoot:"www/public/"}}},278:function(e,t,r){var n=r(116)(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()});e.exports=n},279:function(e,t,r){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},281:function(e,t,r){"use strict";r(282)("trim",function(e){return function(){return e(this,3)}})},282:function(e,t,r){var n=r(5),a=r(28),o=r(10),l=r(283),c="["+l+"]",i=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),u=function(e,t,r){var a={},c=o(function(){return!!l[e]()||"​"!="​"[e]()}),i=a[e]=c?t(p):l[e];r&&(a[r]=i),n(n.P+n.F*c,"String",a)},p=u.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(s,"")),e};e.exports=u},283:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},284:function(e,t,r){var n=r(316),a=r(285),o=r(292),l=r(293),c=o(function(e,t){if(null==e)return[];var r=t.length;return r>1&&l(e,t[0],t[1])?t=[]:r>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),a(e,n(t,1),[])});e.exports=c},285:function(e,t,r){var n=r(115),a=r(309),o=r(286),l=r(289),c=r(311),i=r(290),s=r(276);e.exports=function(e,t,r){var u=-1;t=n(t.length?t:[s],c(a));var p=o(e,function(e,r,a){return{criteria:n(t,function(t){return t(e)}),index:++u,value:e}});return l(p,function(e,t){return i(e,t,r)})}},286:function(e,t,r){var n=r(287),a=r(269);e.exports=function(e,t){var r=-1,o=a(e)?Array(e.length):[];return n(e,function(e,n,a){o[++r]=t(e,n,a)}),o}},287:function(e,t,r){var n=r(312),a=r(288)(n);e.exports=a},288:function(e,t,r){var n=r(269);e.exports=function(e,t){return function(r,a){if(null==r)return r;if(!n(r))return e(r,a);for(var o=r.length,l=t?o:-1,c=Object(r);(t?l--:++l<o)&&!1!==a(c[l],l,c););return r}}},289:function(e,t){e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},290:function(e,t,r){var n=r(291);e.exports=function(e,t,r){for(var a=-1,o=e.criteria,l=t.criteria,c=o.length,i=r.length;++a<c;){var s=n(o[a],l[a]);if(s)return a>=i?s:s*("desc"==r[a]?-1:1)}return e.index-t.index}},291:function(e,t,r){var n=r(114);e.exports=function(e,t){if(e!==t){var r=void 0!==e,a=null===e,o=e==e,l=n(e),c=void 0!==t,i=null===t,s=t==t,u=n(t);if(!i&&!u&&!l&&e>t||l&&c&&s&&!i&&!u||a&&c&&s||!r&&s||!o)return 1;if(!a&&!l&&!u&&e<t||u&&r&&o&&!a&&!l||i&&r&&o||!c&&o||!s)return-1}return 0}},292:function(e,t,r){var n=r(276),a=r(317),o=r(318);e.exports=function(e,t){return o(a(e,t,n),e+"")}},293:function(e,t,r){var n=r(310),a=r(269),o=r(313),l=r(305);e.exports=function(e,t,r){if(!l(r))return!1;var c=typeof t;return!!("number"==c?a(r)&&o(t,r.length):"string"==c&&t in r)&&n(r[t],e)}},294:function(e,t,r){e.exports={code:"PropTable-Code-module--code--FStF3"}},296:function(e,t,r){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},298:function(e,t,r){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},300:function(e,t,r){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},302:function(e,t,r){"use strict";r(119),r(270);var n=r(278),a=r.n(n),o=r(0),l=r.n(o),c=r(17),i=r(53),s=r(80),u=r(307),p=r(308),m=r(277),d=Object(c.styled)("a","Link",r(279),"link","link"),f=function(e){var t=e.component,r="//github.com/react-bootstrap/react-bootstrap/tree/v"+m.version+"/src/"+t+".js";return l.a.createElement(u.a,{overlay:l.a.createElement(p.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(d,{href:r},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},b=(r(79),r(118),r(117),r(52),r(78),r(7)),h=r.n(b),g=(r(281),r(29),r(284)),v=r.n(g),E=r(120),y=r.n(E),x=r(2),w=r.n(x),k=r(314),N=r(315),j=Object(c.styled)("code","Code",r(294),"code","code"),C=Object(c.styled)("div","PropDescription",r(296),"prop-description","propDescription");function T(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function R(e){return"func"===e?"function":"bool"===e?"boolean":e}var D=function(e){function t(){return e.apply(this,arguments)||this}h()(t,e);var r=t.prototype;return r.getType=function(e){var t=this,r=e.type||{},n=R(r.name),a=e.doclets||{};switch(n){case"object":return n;case"union":return r.value.reduce(function(e,r,n,a){var o=t.getType({type:r});return l.a.isValidElement(o)&&(o=l.a.cloneElement(o,{key:n})),e=e.concat(o),n===a.length-1?e:e.concat(" | ")},[]);case"array":var o=this.getType({type:r.value});return l.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(r);case"custom":return T(a.type||r.raw);default:return n}},r._renderRows=function(e){var t=this;return v()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var r=e.name,n=e.description,a=e.doclets,o=n&&n.childMarkdownRemark.html;return l.a.createElement("tr",{key:r,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},r," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,a.deprecated&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+a.deprecated+" ")),t.renderControllableNote(e,r),l.a.createElement(C,{dangerouslySetInnerHTML:{__html:o}})))})},r.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},r=R(t.name),n=e.doclets||{};return"custom"===r?T(n.type||t.raw):r}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(j,null,t))},r.renderControllableNote=function(e,t){var r=e.doclets.controllable,n="function"===R(e.type.name);if(!r)return!1;var a=n?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,r)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(j,null,r),", initial prop:"," ",l.a.createElement(j,null,"default"+y()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},a)))},r.renderEnum=function(e){var t=[];return(e.value||[]).forEach(function(e,r){var n=e.value;r>0&&t.push(l.a.createElement("span",{key:r+"c"}," | ")),t.push(l.a.createElement("code",{key:r},n))}),l.a.createElement("span",null,t)},r.renderRequiredBadge=function(e){return e.required?l.a.createElement(k.a,null,"required"):null},r.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(N.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);D.propTypes={metadata:w.a.object.isRequired};var I=D,O=Object(c.styled)("span","Keyword",r(298),"keyword","keyword"),z=Object(c.styled)("code","Code",r(300),"code","code"),L=function(e){var t=e.name;return l.a.createElement(z,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(O,null,"import")," ",t," ",l.a.createElement(O,null,"from")," ","'react-bootstrap/lib/",t,"'")};function S(e){var t=e.heading,r=e.metadata,n=e.exportedBy,o=r.description,c=r.displayName,u=o&&o.childMarkdownRemark.html,p=c;n&&(c=n.displayName+"."+c.split(n.displayName).pop(),p=n.displayName);var m=a()(c)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.default,{h:t||"3",id:m,title:c,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(s.a,{target:m},l.a.createElement("span",{className:" text-monospace"},c)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(f,{component:c}))),l.a.createElement(L,{name:p}),u&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}),l.a.createElement(I,{metadata:r}))}S.propTypes={},t.a=S},304:function(e,t,r){"use strict";r.d(t,"a",function(){return c}),r(320);var n=r(0),a=r.n(n),o=r(306),l=r(321);function c(e){return function(t){var r=t.location.pathname,n=l.a;return(r.startsWith("/getting-started")||r.startsWith("/layout")||r.startsWith("/components")||r.startsWith("/utilities"))&&(n=o.a),a.a.createElement(n,{location:t.location},a.a.createElement(e,t))}}},845:function(e,t){e.exports='<Image src="holder.js/100px250" fluid />;\n'},846:function(e,t){e.exports='<Container>\n  <Row>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" rounded />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" roundedCircle />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" thumbnail />\n    </Col>\n  </Row>\n</Container>;\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtaW1hZ2VzLWpzLWNkM2UzMjhiM2U0NWY0NDQzNWQ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvaW1hZ2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbXBvbmVudEFwaSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBvbmVudEFwaSc7XG5pbXBvcnQgTGlua2VkSGVhZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpbmtlZEhlYWRpbmcnO1xuaW1wb3J0IFJlYWN0UGxheWdyb3VuZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JlYWN0UGxheWdyb3VuZCc7XG5pbXBvcnQgRmx1aWQgZnJvbSAnLi4vLi4vZXhhbXBsZXMvSW1hZ2UvRmx1aWQnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uLy4uL2V4YW1wbGVzL0ltYWdlL1NoYXBlJztcbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uLy4uL3dpdGhMYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KGZ1bmN0aW9uIEltYWdlU2VjdGlvbih7IGRhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMVwiIGlkPVwiaW1hZ2VzXCI+XG4gICAgICAgIEltYWdlc1xuICAgICAgPC9MaW5rZWRIZWFkaW5nPlxuXG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwiaW1hZ2Utc2hhcGVcIj5cbiAgICAgICAgU2hhcGVcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cbiAgICAgIDxwPlxuICAgICAgICBVc2UgdGhlIDxjb2RlPnJvdW5kZWQ8L2NvZGU+LCA8Y29kZT5yb3VuZGVkQ2lyY2xlPC9jb2RlPiBhbmR7JyAnfVxuICAgICAgICA8Y29kZT50aHVtYm5haWw8L2NvZGU+IHByb3BzIHRvIGN1c3RvbWlzZSB0aGUgaW1hZ2UuXG4gICAgICA8L3A+XG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtTaGFwZX0gLz5cblxuICAgICAgPExpbmtlZEhlYWRpbmcgaD1cIjJcIiBpZD1cImltYWdlLWZsdWlkXCI+XG4gICAgICAgIEZsdWlkXG4gICAgICA8L0xpbmtlZEhlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgVXNlIHRoZSA8Y29kZT5mbHVpZDwvY29kZT4gdG8gc2NhbGUgaW1hZ2UgbmljZWx5IHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e0ZsdWlkfSAvPlxuICAgICAgPExpbmtlZEhlYWRpbmcgaD1cIjJcIiBpZD1cImltYWdlLWFwaVwiPlxuICAgICAgICBBUElcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cbiAgICAgIDxDb21wb25lbnRBcGkgbWV0YWRhdGE9e2RhdGEuSW1hZ2V9IC8+XG4gICAgPC8+XG4gICk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgSW1hZ2VRdWVyeSB7XG4gICAgSW1hZ2U6IGNvbXBvbmVudE1ldGFkYXRhKGRpc3BsYXlOYW1lOiB7IGVxOiBcIkltYWdlXCIgfSkge1xuICAgICAgLi4uQ29tcG9uZW50QXBpX21ldGFkYXRhXG4gICAgfVxuICB9XG5gO1xuIl0sIm1hcHBpbmdzIjoiQUFDQSIsInNvdXJjZVJvb3QiOiIifQ==