(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return f}),n.d(t,"_frontmatter",function(){return h});var r=n(54),a=n.n(r),o=n(0),l=n.n(o),s=n(122),i=n(306),c=n(302),u=n(319),p=n(814),m=n.n(p),d=n(815),b=n.n(d),f="1372053729";t.default=function(e){var t=e.components,n=a()(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",Layout:i.a,layoutProps:n,components:t},l.a.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"carousels"}},"Carousels"),l.a.createElement("p",{className:"lead"},"A slideshow component for cycling through elements—images or slides of text—like a carousel."),l.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),l.a.createElement(s.MDXTag,{name:"p",components:t},"Carousels don’t automatically normalize slide dimensions. As such, you\nmay need to use additional utilities or custom styles to appropriately\nsize content. While carousels support previous/next controls and\nindicators, they’re not explicitly required. Add and customize as you\nsee fit."),l.a.createElement(u.a,{codeText:b.a}),l.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"controlled"}},"Controlled"),l.a.createElement(s.MDXTag,{name:"p",components:t},"You can can also ",l.a.createElement(s.MDXTag,{name:"em",components:t,parentName:"p"},"control")," the Carousel state, via the\n",l.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"activeIndex")," prop and ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onSelect")," handler."),l.a.createElement(u.a,{codeText:m.a}),l.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),l.a.createElement(c.a,{metadata:n.data.carousel}),l.a.createElement(c.a,{metadata:n.data.item,exportedBy:n.data.carousel}),l.a.createElement(c.a,{metadata:n.data.caption,exportedBy:n.data.carousel}))};var h={}},270:function(e,t,n){var r=n(12).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(13)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},277:function(e){e.exports={name:"react-bootstrap",version:"0.32.4",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js","jsnext:main":"es/index.js",module:"es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",start:"yarn --cwd www run develop","ci-lint":"eslint --rule 'prettier/prettier: 2'",format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"npm run build-docs && rollout",tdd:"karma start",test:"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --compilers js:@babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:"^0.14.9 || >=15.3.0","react-dom":"^0.14.9 || >=15.3.0"},devDependencies:{"@4c/rollout":"^1.1.0","@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@storybook/react":"^3.4.8","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.0.1",chai:"^4.1.2",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.2","create-react-class":"^15.6.3","cross-env":"^5.2.0",enzyme:"^3.6.0","enzyme-adapter-react-16":"^1.5.0",eslint:"^5.5.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.0",husky:"^0.14.3",karma:"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.4","lint-staged":"^7.2.0",lodash:"^4.17.10",mocha:"^5.2.0",prettier:"~1.13.7",react:"^16.5.0","react-dom":"^16.5.0","react-test-renderer":"^16.5.0","release-script":"^1.0.2",sinon:"^6.2.0","sinon-chai":"^3.2.0",webpack:"^4.17.2"},dependencies:{"@babel/runtime":"^7.0.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.2.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.3","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^1.2.1","react-overlays":"^1.0.0-beta.17","react-prop-types":"^0.4.0","react-transition-group":"^2.4.0",uncontrollable:"^6.0.0",warning:"^4.0.1"},"release-script":{bowerRepo:"git@github.com:react-bootstrap/react-bootstrap-bower.git",docsRepo:"git@github.com:react-bootstrap/react-bootstrap.github.io.git",docsRoot:"www/public/"}}},278:function(e,t,n){var r=n(116)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=r},279:function(e,t,n){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},281:function(e,t,n){"use strict";n(282)("trim",function(e){return function(){return e(this,3)}})},282:function(e,t,n){var r=n(5),a=n(28),o=n(10),l=n(283),s="["+l+"]",i=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(e,t,n){var a={},s=o(function(){return!!l[e]()||"​"!="​"[e]()}),i=a[e]=s?t(p):l[e];n&&(a[n]=i),r(r.P+r.F*s,"String",a)},p=u.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},283:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},284:function(e,t,n){var r=n(316),a=n(285),o=n(292),l=n(293),s=o(function(e,t){if(null==e)return[];var n=t.length;return n>1&&l(e,t[0],t[1])?t=[]:n>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),a(e,r(t,1),[])});e.exports=s},285:function(e,t,n){var r=n(115),a=n(309),o=n(286),l=n(289),s=n(311),i=n(290),c=n(276);e.exports=function(e,t,n){var u=-1;t=r(t.length?t:[c],s(a));var p=o(e,function(e,n,a){return{criteria:r(t,function(t){return t(e)}),index:++u,value:e}});return l(p,function(e,t){return i(e,t,n)})}},286:function(e,t,n){var r=n(287),a=n(269);e.exports=function(e,t){var n=-1,o=a(e)?Array(e.length):[];return r(e,function(e,r,a){o[++n]=t(e,r,a)}),o}},287:function(e,t,n){var r=n(312),a=n(288)(r);e.exports=a},288:function(e,t,n){var r=n(269);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!r(n))return e(n,a);for(var o=n.length,l=t?o:-1,s=Object(n);(t?l--:++l<o)&&!1!==a(s[l],l,s););return n}}},289:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},290:function(e,t,n){var r=n(291);e.exports=function(e,t,n){for(var a=-1,o=e.criteria,l=t.criteria,s=o.length,i=n.length;++a<s;){var c=r(o[a],l[a]);if(c)return a>=i?c:c*("desc"==n[a]?-1:1)}return e.index-t.index}},291:function(e,t,n){var r=n(114);e.exports=function(e,t){if(e!==t){var n=void 0!==e,a=null===e,o=e==e,l=r(e),s=void 0!==t,i=null===t,c=t==t,u=r(t);if(!i&&!u&&!l&&e>t||l&&s&&c&&!i&&!u||a&&s&&c||!n&&c||!o)return 1;if(!a&&!l&&!u&&e<t||u&&n&&o&&!a&&!l||i&&n&&o||!s&&o||!c)return-1}return 0}},292:function(e,t,n){var r=n(276),a=n(317),o=n(318);e.exports=function(e,t){return o(a(e,t,r),e+"")}},293:function(e,t,n){var r=n(310),a=n(269),o=n(313),l=n(305);e.exports=function(e,t,n){if(!l(n))return!1;var s=typeof t;return!!("number"==s?a(n)&&o(t,n.length):"string"==s&&t in n)&&r(n[t],e)}},294:function(e,t,n){e.exports={code:"PropTable-Code-module--code--FStF3"}},296:function(e,t,n){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},298:function(e,t,n){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},300:function(e,t,n){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},302:function(e,t,n){"use strict";n(119),n(270);var r=n(278),a=n.n(r),o=n(0),l=n.n(o),s=n(17),i=n(53),c=n(80),u=n(307),p=n(308),m=n(277),d=Object(s.styled)("a","Link",n(279),"link","link"),b=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+m.version+"/src/"+t+".js";return l.a.createElement(u.a,{overlay:l.a.createElement(p.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(d,{href:n},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},f=(n(79),n(118),n(117),n(52),n(78),n(7)),h=n.n(f),g=(n(281),n(29),n(284)),v=n.n(g),y=n(120),x=n.n(y),E=n(2),C=n.n(E),w=n(314),k=n(315),N=Object(s.styled)("code","Code",n(294),"code","code"),T=Object(s.styled)("div","PropDescription",n(296),"prop-description","propDescription");function j(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function D(e){return"func"===e?"function":"bool"===e?"boolean":e}var I=function(e){function t(){return e.apply(this,arguments)||this}h()(t,e);var n=t.prototype;return n.getType=function(e){var t=this,n=e.type||{},r=D(n.name),a=e.doclets||{};switch(r){case"object":return r;case"union":return n.value.reduce(function(e,n,r,a){var o=t.getType({type:n});return l.a.isValidElement(o)&&(o=l.a.cloneElement(o,{key:r})),e=e.concat(o),r===a.length-1?e:e.concat(" | ")},[]);case"array":var o=this.getType({type:n.value});return l.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(n);case"custom":return j(a.type||n.raw);default:return r}},n._renderRows=function(e){var t=this;return v()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var n=e.name,r=e.description,a=e.doclets,o=r&&r.childMarkdownRemark.html;return l.a.createElement("tr",{key:n,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},n," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,a.deprecated&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+a.deprecated+" ")),t.renderControllableNote(e,n),l.a.createElement(T,{dangerouslySetInnerHTML:{__html:o}})))})},n.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},n=D(t.name),r=e.doclets||{};return"custom"===n?j(r.type||t.raw):n}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(N,null,t))},n.renderControllableNote=function(e,t){var n=e.doclets.controllable,r="function"===D(e.type.name);if(!n)return!1;var a=r?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,n)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(N,null,n),", initial prop:"," ",l.a.createElement(N,null,"default"+x()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},a)))},n.renderEnum=function(e){var t=[];return(e.value||[]).forEach(function(e,n){var r=e.value;n>0&&t.push(l.a.createElement("span",{key:n+"c"}," | ")),t.push(l.a.createElement("code",{key:n},r))}),l.a.createElement("span",null,t)},n.renderRequiredBadge=function(e){return e.required?l.a.createElement(w.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(k.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);I.propTypes={metadata:C.a.object.isRequired};var S=I,M=Object(s.styled)("span","Keyword",n(298),"keyword","keyword"),R=Object(s.styled)("code","Code",n(300),"code","code"),z=function(e){var t=e.name;return l.a.createElement(R,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(M,null,"import")," ",t," ",l.a.createElement(M,null,"from")," ","'react-bootstrap/lib/",t,"'")};function L(e){var t=e.heading,n=e.metadata,r=e.exportedBy,o=n.description,s=n.displayName,u=o&&o.childMarkdownRemark.html,p=s;r&&(s=r.displayName+"."+s.split(r.displayName).pop(),p=r.displayName);var m=a()(s)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.default,{h:t||"3",id:m,title:s,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(c.a,{target:m},l.a.createElement("span",{className:" text-monospace"},s)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(b,{component:s}))),l.a.createElement(z,{name:p}),u&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}),l.a.createElement(S,{metadata:n}))}L.propTypes={},t.a=L},814:function(e,t){e.exports='class ControlledCarousel extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleSelect = this.handleSelect.bind(this);\n\n    this.state = {\n      index: 0,\n      direction: null,\n    };\n  }\n\n  handleSelect(selectedIndex, e) {\n    this.setState({\n      index: selectedIndex,\n      direction: e.direction,\n    });\n  }\n\n  render() {\n    const { index, direction } = this.state;\n\n    return (\n      <Carousel\n        activeIndex={index}\n        direction={direction}\n        onSelect={this.handleSelect}\n      >\n        <Carousel.Item>\n          <img\n            className="d-block w-100"\n            src="holder.js/800x400?text=First slide&bg=373940"\n            alt="First slide"\n          />\n          <Carousel.Caption>\n            <h3>First slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </Carousel.Caption>\n        </Carousel.Item>\n        <Carousel.Item>\n          <img\n            className="d-block w-100"\n            src="holder.js/800x400?text=Second slide&bg=282c34"\n            alt="Third slide"\n          />\n\n          <Carousel.Caption>\n            <h3>Second slide label</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </Carousel.Caption>\n        </Carousel.Item>\n        <Carousel.Item>\n          <img\n            className="d-block w-100"\n            src="holder.js/800x400?text=Third slide&bg=20232a"\n            alt="Third slide"\n          />\n\n          <Carousel.Caption>\n            <h3>Third slide label</h3>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n            </p>\n          </Carousel.Caption>\n        </Carousel.Item>\n      </Carousel>\n    );\n  }\n}\n\nrender(<ControlledCarousel />);\n'},815:function(e,t){e.exports='<Carousel>\n  <Carousel.Item>\n    <img\n      className="d-block w-100"\n      src="holder.js/800x400?text=First slide&bg=373940"\n      alt="First slide"\n    />\n    <Carousel.Caption>\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n  <Carousel.Item>\n    <img\n      className="d-block w-100"\n      src="holder.js/800x400?text=Second slide&bg=282c34"\n      alt="Third slide"\n    />\n\n    <Carousel.Caption>\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n  <Carousel.Item>\n    <img\n      className="d-block w-100"\n      src="holder.js/800x400?text=Third slide&bg=20232a"\n      alt="Third slide"\n    />\n\n    <Carousel.Caption>\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n</Carousel>;\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtY2Fyb3VzZWwtbWR4LWNlNDE4YzJiNmRlMGIzNmVhZGI0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvY2Fyb3VzZWwubWR4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1EWFRhZyB9IGZyb20gJ0BtZHgtanMvdGFnJ1xuXG5cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gXCIvVXNlcnMvamFzb24vc3JjL3JlYWN0LWJvb3RzdHJhcC93d3cvc3JjL2xheW91dHMvQXBpTGF5b3V0LmpzXCJcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IENvbXBvbmVudEFwaSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBvbmVudEFwaSc7XG5pbXBvcnQgUmVhY3RQbGF5Z3JvdW5kIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVhY3RQbGF5Z3JvdW5kJztcbmltcG9ydCBDYXJvdXNlbENvbnRyb2xsZWQgZnJvbSAnLi4vLi4vZXhhbXBsZXMvQ2Fyb3VzZWwvQ29udHJvbGxlZCc7XG5pbXBvcnQgQ2Fyb3VzZWxVbmNvbnRyb2xsZWQgZnJvbSAnLi4vLi4vZXhhbXBsZXMvQ2Fyb3VzZWwvVW5jb250cm9sbGVkJztcbmV4cG9ydCBjb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IENhcm91c2VsUXVlcnkge1xuICAgIGNhcm91c2VsOiBjb21wb25lbnRNZXRhZGF0YShkaXNwbGF5TmFtZTogeyBlcTogXCJDYXJvdXNlbFwiIH0pIHtcbiAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAuLi5Db21wb25lbnRBcGlfbWV0YWRhdGFcbiAgICB9XG4gICAgaXRlbTogY29tcG9uZW50TWV0YWRhdGEoZGlzcGxheU5hbWU6IHsgZXE6IFwiQ2Fyb3VzZWxJdGVtXCIgfSkge1xuICAgICAgZGlzcGxheU5hbWVcbiAgICAgIC4uLkNvbXBvbmVudEFwaV9tZXRhZGF0YVxuICAgIH1cbiAgICBjYXB0aW9uOiBjb21wb25lbnRNZXRhZGF0YShkaXNwbGF5TmFtZTogeyBlcTogXCJDYXJvdXNlbENhcHRpb25cIiB9KSB7XG4gICAgICBkaXNwbGF5TmFtZVxuICAgICAgLi4uQ29tcG9uZW50QXBpX21ldGFkYXRhXG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgKHtjb21wb25lbnRzLCAuLi5wcm9wc30pID0+IDxNRFhUYWcgbmFtZT1cIndyYXBwZXJcIiBMYXlvdXQ9e0RlZmF1bHRMYXlvdXR9IGxheW91dFByb3BzPXtwcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30+XG5cblxuXG48TURYVGFnIG5hbWU9XCJoMVwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IHByb3BzPXt7XCJpZFwiOlwiY2Fyb3VzZWxzXCJ9fT57YENhcm91c2Vsc2B9PC9NRFhUYWc+XG48cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gIEEgc2xpZGVzaG93IGNvbXBvbmVudCBmb3IgY3ljbGluZyB0aHJvdWdoIGVsZW1lbnRz4oCUaW1hZ2VzIG9yIHNsaWRlcyBvZlxuICB0ZXh04oCUbGlrZSBhIGNhcm91c2VsLlxuPC9wPlxuPE1EWFRhZyBuYW1lPVwiaDJcIiBjb21wb25lbnRzPXtjb21wb25lbnRzfSBwcm9wcz17e1wiaWRcIjpcImV4YW1wbGVcIn19PntgRXhhbXBsZWB9PC9NRFhUYWc+XG48TURYVGFnIG5hbWU9XCJwXCIgY29tcG9uZW50cz17Y29tcG9uZW50c30+e2BDYXJvdXNlbHMgZG9u4oCZdCBhdXRvbWF0aWNhbGx5IG5vcm1hbGl6ZSBzbGlkZSBkaW1lbnNpb25zLiBBcyBzdWNoLCB5b3Vcbm1heSBuZWVkIHRvIHVzZSBhZGRpdGlvbmFsIHV0aWxpdGllcyBvciBjdXN0b20gc3R5bGVzIHRvIGFwcHJvcHJpYXRlbHlcbnNpemUgY29udGVudC4gV2hpbGUgY2Fyb3VzZWxzIHN1cHBvcnQgcHJldmlvdXMvbmV4dCBjb250cm9scyBhbmRcbmluZGljYXRvcnMsIHRoZXnigJlyZSBub3QgZXhwbGljaXRseSByZXF1aXJlZC4gQWRkIGFuZCBjdXN0b21pemUgYXMgeW91XG5zZWUgZml0LmB9PC9NRFhUYWc+XG48UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtDYXJvdXNlbFVuY29udHJvbGxlZH0gLz5cbjxNRFhUYWcgbmFtZT1cImgyXCIgY29tcG9uZW50cz17Y29tcG9uZW50c30gcHJvcHM9e3tcImlkXCI6XCJjb250cm9sbGVkXCJ9fT57YENvbnRyb2xsZWRgfTwvTURYVGFnPlxuPE1EWFRhZyBuYW1lPVwicFwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9PntgWW91IGNhbiBjYW4gYWxzbyBgfTxNRFhUYWcgbmFtZT1cImVtXCIgY29tcG9uZW50cz17Y29tcG9uZW50c30gcGFyZW50TmFtZT1cInBcIj57YGNvbnRyb2xgfTwvTURYVGFnPntgIHRoZSBDYXJvdXNlbCBzdGF0ZSwgdmlhIHRoZVxuYH08TURYVGFnIG5hbWU9XCJpbmxpbmVDb2RlXCIgY29tcG9uZW50cz17Y29tcG9uZW50c30gcGFyZW50TmFtZT1cInBcIj57YGFjdGl2ZUluZGV4YH08L01EWFRhZz57YCBwcm9wIGFuZCBgfTxNRFhUYWcgbmFtZT1cImlubGluZUNvZGVcIiBjb21wb25lbnRzPXtjb21wb25lbnRzfSBwYXJlbnROYW1lPVwicFwiPntgb25TZWxlY3RgfTwvTURYVGFnPntgIGhhbmRsZXIuYH08L01EWFRhZz5cbjxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e0Nhcm91c2VsQ29udHJvbGxlZH0gLz5cbjxNRFhUYWcgbmFtZT1cImgyXCIgY29tcG9uZW50cz17Y29tcG9uZW50c30gcHJvcHM9e3tcImlkXCI6XCJhcGlcIn19PntgQVBJYH08L01EWFRhZz5cbjxDb21wb25lbnRBcGkgbWV0YWRhdGE9e3Byb3BzLmRhdGEuY2Fyb3VzZWx9IC8+XG48Q29tcG9uZW50QXBpIG1ldGFkYXRhPXtwcm9wcy5kYXRhLml0ZW19IGV4cG9ydGVkQnk9e3Byb3BzLmRhdGEuY2Fyb3VzZWx9IC8+XG48Q29tcG9uZW50QXBpIG1ldGFkYXRhPXtwcm9wcy5kYXRhLmNhcHRpb259IGV4cG9ydGVkQnk9e3Byb3BzLmRhdGEuY2Fyb3VzZWx9IC8+XG48L01EWFRhZz5cblxuZXhwb3J0IGNvbnN0IF9mcm9udG1hdHRlciA9IHt9O1xuXG4gICJdLCJtYXBwaW5ncyI6IkFBVUEiLCJzb3VyY2VSb290IjoiIn0=