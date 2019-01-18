(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return v});var a=n(0),r=n.n(a),o=n(121),l=n(437),c=n(302),i=n(319),s=n(915),u=n.n(s),m=n(916),p=n.n(m),d=n(917),b=n.n(d),f=n(918),y=n.n(f),h=n(304);t.default=Object(h.a)(function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.default,{h:"2",id:"tabs"},"Tabbed components"),r.a.createElement("p",{className:"lead"},"Dynamic tabbed interfaces"),r.a.createElement(o.default,{h:"2",id:"tabs-examples"},"Examples"),r.a.createElement("p",null,"Create dynamic tabbed interfaces, as described in the"," ",r.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel"},r.a.createElement("abbr",{title:"Web Accessibility Initiative"},"WAI")," ",r.a.createElement(l.a,null)," ","Authoring Practices"),". ",r.a.createElement("code",null,"Tabs")," is a higher-level component for quickly creating a ",r.a.createElement("code",null,"Nav")," matched with a set of ",r.a.createElement("code",null,"TabPane"),"s."),r.a.createElement(i.a,{codeText:y.a,exampleClassName:"bs-example-tabs"}),r.a.createElement(o.default,{h:"2",id:"tabs-controlled"},"Controlled"),r.a.createElement("p",null,r.a.createElement("code",null,"Tabs")," can be controlled directly when you want to handle the selection logic personally."),r.a.createElement(i.a,{codeText:u.a,exampleClassName:"bs-example-tabs"}),r.a.createElement(o.default,{h:"2",id:"tabs-no-animation"},"No animation"),r.a.createElement("p",null,"Set the ",r.a.createElement("code",null,"transition")," prop to ",r.a.createElement("code",null,"false")),r.a.createElement(i.a,{codeText:b.a,exampleClassName:"bs-example-tabs"}),r.a.createElement(o.default,{h:"2",id:"tabs-with-dropdown"},"Dropdowns?"),r.a.createElement("p",null,"Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies."),r.a.createElement("p",null,"That said, it Dropdowns do work technically (sans focus management), but we don't make any claims about support."),r.a.createElement(o.default,{h:"2",id:"tabs-custom-layout"},"Custom Tab Layout"),r.a.createElement("p",null,"For more complex layouts the flexible ",r.a.createElement("code",null,"TabContainer"),","," ",r.a.createElement("code",null,"TabContent"),", and ",r.a.createElement("code",null,"TabPane")," components along with any style of ",r.a.createElement("code",null,"Nav")," allow you to quickly piece together your own Tabs component with additional markup needed."),r.a.createElement("p",null,"Create a set of NavItems each with an ",r.a.createElement("code",null,"eventKey")," ","corresponding to the eventKey of a ",r.a.createElement("code",null,"TabPane"),". Wrap the whole thing in a ",r.a.createElement("code",null,"TabContainer")," and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills."),r.a.createElement(i.a,{codeText:p.a,exampleClassName:"bs-example-tabs"}),r.a.createElement(o.default,{h:"2",id:"tabs-api"},"API"),r.a.createElement(c.a,{metadata:t.Tabs}),r.a.createElement(c.a,{metadata:t.Tab}),r.a.createElement(c.a,{metadata:t.TabContainer}),r.a.createElement(c.a,{metadata:t.TabContent}),r.a.createElement(c.a,{metadata:t.TabPane}))});var v="268054633"},270:function(e,t,n){var a=n(12).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(13)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},277:function(e){e.exports={name:"react-bootstrap",version:"0.32.4",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js","jsnext:main":"es/index.js",module:"es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",start:"yarn --cwd www run develop","ci-lint":"eslint --rule 'prettier/prettier: 2'",format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"npm run build-docs && rollout",tdd:"karma start",test:"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --compilers js:@babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:"^0.14.9 || >=15.3.0","react-dom":"^0.14.9 || >=15.3.0"},devDependencies:{"@4c/rollout":"^1.1.0","@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@storybook/react":"^3.4.8","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.0.1",chai:"^4.1.2",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.2","create-react-class":"^15.6.3","cross-env":"^5.2.0",enzyme:"^3.6.0","enzyme-adapter-react-16":"^1.5.0",eslint:"^5.5.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.0",husky:"^0.14.3",karma:"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.4","lint-staged":"^7.2.0",lodash:"^4.17.10",mocha:"^5.2.0",prettier:"~1.13.7",react:"^16.5.0","react-dom":"^16.5.0","react-test-renderer":"^16.5.0","release-script":"^1.0.2",sinon:"^6.2.0","sinon-chai":"^3.2.0",webpack:"^4.17.2"},dependencies:{"@babel/runtime":"^7.0.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.2.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.3","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^1.2.1","react-overlays":"^1.0.0-beta.17","react-prop-types":"^0.4.0","react-transition-group":"^2.4.0",uncontrollable:"^6.0.0",warning:"^4.0.1"},"release-script":{bowerRepo:"git@github.com:react-bootstrap/react-bootstrap-bower.git",docsRepo:"git@github.com:react-bootstrap/react-bootstrap.github.io.git",docsRoot:"www/public/"}}},278:function(e,t,n){var a=n(116)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},279:function(e,t,n){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},281:function(e,t,n){"use strict";n(282)("trim",function(e){return function(){return e(this,3)}})},282:function(e,t,n){var a=n(5),r=n(28),o=n(10),l=n(283),c="["+l+"]",i=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),u=function(e,t,n){var r={},c=o(function(){return!!l[e]()||"​"!="​"[e]()}),i=r[e]=c?t(m):l[e];n&&(r[n]=i),a(a.P+a.F*c,"String",r)},m=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(s,"")),e};e.exports=u},283:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},284:function(e,t,n){var a=n(316),r=n(285),o=n(292),l=n(293),c=o(function(e,t){if(null==e)return[];var n=t.length;return n>1&&l(e,t[0],t[1])?t=[]:n>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),r(e,a(t,1),[])});e.exports=c},285:function(e,t,n){var a=n(115),r=n(309),o=n(286),l=n(289),c=n(311),i=n(290),s=n(276);e.exports=function(e,t,n){var u=-1;t=a(t.length?t:[s],c(r));var m=o(e,function(e,n,r){return{criteria:a(t,function(t){return t(e)}),index:++u,value:e}});return l(m,function(e,t){return i(e,t,n)})}},286:function(e,t,n){var a=n(287),r=n(269);e.exports=function(e,t){var n=-1,o=r(e)?Array(e.length):[];return a(e,function(e,a,r){o[++n]=t(e,a,r)}),o}},287:function(e,t,n){var a=n(312),r=n(288)(a);e.exports=r},288:function(e,t,n){var a=n(269);e.exports=function(e,t){return function(n,r){if(null==n)return n;if(!a(n))return e(n,r);for(var o=n.length,l=t?o:-1,c=Object(n);(t?l--:++l<o)&&!1!==r(c[l],l,c););return n}}},289:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},290:function(e,t,n){var a=n(291);e.exports=function(e,t,n){for(var r=-1,o=e.criteria,l=t.criteria,c=o.length,i=n.length;++r<c;){var s=a(o[r],l[r]);if(s)return r>=i?s:s*("desc"==n[r]?-1:1)}return e.index-t.index}},291:function(e,t,n){var a=n(114);e.exports=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,o=e==e,l=a(e),c=void 0!==t,i=null===t,s=t==t,u=a(t);if(!i&&!u&&!l&&e>t||l&&c&&s&&!i&&!u||r&&c&&s||!n&&s||!o)return 1;if(!r&&!l&&!u&&e<t||u&&n&&o&&!r&&!l||i&&n&&o||!c&&o||!s)return-1}return 0}},292:function(e,t,n){var a=n(276),r=n(317),o=n(318);e.exports=function(e,t){return o(r(e,t,a),e+"")}},293:function(e,t,n){var a=n(310),r=n(269),o=n(313),l=n(305);e.exports=function(e,t,n){if(!l(n))return!1;var c=typeof t;return!!("number"==c?r(n)&&o(t,n.length):"string"==c&&t in n)&&a(n[t],e)}},294:function(e,t,n){e.exports={code:"PropTable-Code-module--code--FStF3"}},296:function(e,t,n){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},298:function(e,t,n){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},300:function(e,t,n){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},302:function(e,t,n){"use strict";n(119),n(270);var a=n(278),r=n.n(a),o=n(0),l=n.n(o),c=n(17),i=n(53),s=n(80),u=n(307),m=n(308),p=n(277),d=Object(c.styled)("a","Link",n(279),"link","link"),b=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+p.version+"/src/"+t+".js";return l.a.createElement(u.a,{overlay:l.a.createElement(m.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(d,{href:n},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},f=(n(79),n(118),n(117),n(52),n(78),n(7)),y=n.n(f),h=(n(281),n(29),n(284)),v=n.n(h),E=n(120),g=n.n(E),x=n(2),w=n.n(x),T=n(314),k=n(315),N=Object(c.styled)("code","Code",n(294),"code","code"),C=Object(c.styled)("div","PropDescription",n(296),"prop-description","propDescription");function S(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function K(e){return"func"===e?"function":"bool"===e?"boolean":e}var j=function(e){function t(){return e.apply(this,arguments)||this}y()(t,e);var n=t.prototype;return n.getType=function(e){var t=this,n=e.type||{},a=K(n.name),r=e.doclets||{};switch(a){case"object":return a;case"union":return n.value.reduce(function(e,n,a,r){var o=t.getType({type:n});return l.a.isValidElement(o)&&(o=l.a.cloneElement(o,{key:a})),e=e.concat(o),a===r.length-1?e:e.concat(" | ")},[]);case"array":var o=this.getType({type:n.value});return l.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(n);case"custom":return S(r.type||n.raw);default:return a}},n._renderRows=function(e){var t=this;return v()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var n=e.name,a=e.description,r=e.doclets,o=a&&a.childMarkdownRemark.html;return l.a.createElement("tr",{key:n,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},n," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,r.deprecated&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+r.deprecated+" ")),t.renderControllableNote(e,n),l.a.createElement(C,{dangerouslySetInnerHTML:{__html:o}})))})},n.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},n=K(t.name),a=e.doclets||{};return"custom"===n?S(a.type||t.raw):n}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(N,null,t))},n.renderControllableNote=function(e,t){var n=e.doclets.controllable,a="function"===K(e.type.name);if(!n)return!1;var r=a?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,n)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(N,null,n),", initial prop:"," ",l.a.createElement(N,null,"default"+g()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},r)))},n.renderEnum=function(e){var t=[];return(e.value||[]).forEach(function(e,n){var a=e.value;n>0&&t.push(l.a.createElement("span",{key:n+"c"}," | ")),t.push(l.a.createElement("code",{key:n},a))}),l.a.createElement("span",null,t)},n.renderRequiredBadge=function(e){return e.required?l.a.createElement(T.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(k.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);j.propTypes={metadata:w.a.object.isRequired};var R=j,P=Object(c.styled)("span","Keyword",n(298),"keyword","keyword"),A=Object(c.styled)("code","Code",n(300),"code","code"),D=function(e){var t=e.name;return l.a.createElement(A,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(P,null,"import")," ",t," ",l.a.createElement(P,null,"from")," ","'react-bootstrap/lib/",t,"'")};function I(e){var t=e.heading,n=e.metadata,a=e.exportedBy,o=n.description,c=n.displayName,u=o&&o.childMarkdownRemark.html,m=c;a&&(c=a.displayName+"."+c.split(a.displayName).pop(),m=a.displayName);var p=r()(c)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.default,{h:t||"3",id:p,title:c,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(s.a,{target:p},l.a.createElement("span",{className:" text-monospace"},c)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(b,{component:c}))),l.a.createElement(D,{name:m}),u&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}),l.a.createElement(R,{metadata:n}))}I.propTypes={},t.a=I},304:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n(320);var a=n(0),r=n.n(a),o=n(306),l=n(321);function c(e){return function(t){var n=t.location.pathname,a=l.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(a=o.a),r.a.createElement(a,{location:t.location},r.a.createElement(e,t))}}},437:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);function o(){return r.a.createElement("abbr",{title:"Accessible Rich Internet Applications"},"ARIA")}},915:function(e,t){e.exports='class ControlledTabs extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = {\n      key: \'home\',\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        id="controlled-tab-example"\n        activeKey={this.state.key}\n        onSelect={key => this.setState({ key })}\n      >\n        <Tab eventKey="home" title="Home">\n          <Sonnet />\n        </Tab>\n        <Tab eventKey="profile" title="Profile">\n          <Sonnet />\n        </Tab>\n        <Tab eventKey="contact" title="Contact" disabled>\n          <Sonnet />\n        </Tab>\n      </Tabs>\n    );\n  }\n}\n\nrender(<ControlledTabs />);\n'},916:function(e,t){e.exports='<Tab.Container id="left-tabs-example" defaultActiveKey="first">\n  <Row>\n    <Col sm={3}>\n      <Nav variant="pills" className="flex-column">\n        <Nav.Item>\n          <Nav.Link eventKey="first">Tab 1</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="second">Tab 2</Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </Col>\n    <Col sm={9}>\n      <Tab.Content>\n        <Tab.Pane eventKey="first">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey="second">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n'},917:function(e,t){e.exports='<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'},918:function(e,t){e.exports='<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtdGFicy1qcy0xMWJlYjMyNDc0MmRiOTM1MmZmMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL3RhYnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGlua2VkSGVhZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpbmtlZEhlYWRpbmcnO1xuaW1wb3J0IEFSSUEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcmlhQWJicic7XG5pbXBvcnQgQ29tcG9uZW50QXBpIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcG9uZW50QXBpJztcbmltcG9ydCBSZWFjdFBsYXlncm91bmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZWFjdFBsYXlncm91bmQnO1xuaW1wb3J0IFRhYnNDb250cm9sbGVkIGZyb20gJy4uLy4uL2V4YW1wbGVzL1RhYnMvQ29udHJvbGxlZCc7XG5pbXBvcnQgTGVmdFRhYnMgZnJvbSAnLi4vLi4vZXhhbXBsZXMvVGFicy9MZWZ0VGFicyc7XG5pbXBvcnQgVGFic05vQW5pbWF0aW9uIGZyb20gJy4uLy4uL2V4YW1wbGVzL1RhYnMvTm9BbmltYXRpb24nO1xuaW1wb3J0IFRhYnNVbmNvbnRyb2xsZWQgZnJvbSAnLi4vLi4vZXhhbXBsZXMvVGFicy9VbmNvbnRyb2xsZWQnO1xuaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSAnLi4vLi4vd2l0aExheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoZnVuY3Rpb24gVGFic1NlY3Rpb24oeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmtlZEhlYWRpbmcgaD1cIjJcIiBpZD1cInRhYnNcIj5cbiAgICAgICAgVGFiYmVkIGNvbXBvbmVudHNcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5EeW5hbWljIHRhYmJlZCBpbnRlcmZhY2VzPC9wPlxuXG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwidGFicy1leGFtcGxlc1wiPlxuICAgICAgICBFeGFtcGxlc1xuICAgICAgPC9MaW5rZWRIZWFkaW5nPlxuXG4gICAgICA8cD5cbiAgICAgICAgQ3JlYXRlIGR5bmFtaWMgdGFiYmVkIGludGVyZmFjZXMsIGFzIGRlc2NyaWJlZCBpbiB0aGV7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy8jdGFicGFuZWxcIj5cbiAgICAgICAgICA8YWJiciB0aXRsZT1cIldlYiBBY2Nlc3NpYmlsaXR5IEluaXRpYXRpdmVcIj5XQUk8L2FiYnI+IDxBUklBIC8+eycgJ31cbiAgICAgICAgICBBdXRob3JpbmcgUHJhY3RpY2VzXG4gICAgICAgIDwvYT4uIDxjb2RlPlRhYnM8L2NvZGU+IGlzIGEgaGlnaGVyLWxldmVsIGNvbXBvbmVudCBmb3IgcXVpY2tseSBjcmVhdGluZ1xuICAgICAgICBhIDxjb2RlPk5hdjwvY29kZT4gbWF0Y2hlZCB3aXRoIGEgc2V0IG9mIDxjb2RlPlRhYlBhbmU8L2NvZGU+cy5cbiAgICAgIDwvcD5cblxuICAgICAgPFJlYWN0UGxheWdyb3VuZFxuICAgICAgICBjb2RlVGV4dD17VGFic1VuY29udHJvbGxlZH1cbiAgICAgICAgZXhhbXBsZUNsYXNzTmFtZT1cImJzLWV4YW1wbGUtdGFic1wiXG4gICAgICAvPlxuXG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwidGFicy1jb250cm9sbGVkXCI+XG4gICAgICAgIENvbnRyb2xsZWRcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cbiAgICAgIDxwPlxuICAgICAgICA8Y29kZT5UYWJzPC9jb2RlPiBjYW4gYmUgY29udHJvbGxlZCBkaXJlY3RseSB3aGVuIHlvdSB3YW50IHRvIGhhbmRsZSB0aGVcbiAgICAgICAgc2VsZWN0aW9uIGxvZ2ljIHBlcnNvbmFsbHkuXG4gICAgICA8L3A+XG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kXG4gICAgICAgIGNvZGVUZXh0PXtUYWJzQ29udHJvbGxlZH1cbiAgICAgICAgZXhhbXBsZUNsYXNzTmFtZT1cImJzLWV4YW1wbGUtdGFic1wiXG4gICAgICAvPlxuXG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwidGFicy1uby1hbmltYXRpb25cIj5cbiAgICAgICAgTm8gYW5pbWF0aW9uXG4gICAgICA8L0xpbmtlZEhlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgU2V0IHRoZSA8Y29kZT50cmFuc2l0aW9uPC9jb2RlPiBwcm9wIHRvIDxjb2RlPmZhbHNlPC9jb2RlPlxuICAgICAgPC9wPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZFxuICAgICAgICBjb2RlVGV4dD17VGFic05vQW5pbWF0aW9ufVxuICAgICAgICBleGFtcGxlQ2xhc3NOYW1lPVwiYnMtZXhhbXBsZS10YWJzXCJcbiAgICAgIC8+XG5cbiAgICAgIDxMaW5rZWRIZWFkaW5nIGg9XCIyXCIgaWQ9XCJ0YWJzLXdpdGgtZHJvcGRvd25cIj5cbiAgICAgICAgRHJvcGRvd25zP1xuICAgICAgPC9MaW5rZWRIZWFkaW5nPlxuICAgICAgPHA+XG4gICAgICAgIER5bmFtaWMgdGFiYmVkIGludGVyZmFjZXMgc2hvdWxkIG5vdCBjb250YWluIGRyb3Bkb3duIG1lbnVzLCBhcyB0aGlzXG4gICAgICAgIGNhdXNlcyBib3RoIHVzYWJpbGl0eSBhbmQgYWNjZXNzaWJpbGl0eSBpc3N1ZXMuIEZyb20gYSB1c2FiaWxpdHlcbiAgICAgICAgcGVyc3BlY3RpdmUsIHRoZSBmYWN0IHRoYXQgdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgdGFi4oCZcyB0cmlnZ2VyIGVsZW1lbnRcbiAgICAgICAgaXMgbm90IGltbWVkaWF0ZWx5IHZpc2libGUgKGFzIGl04oCZcyBpbnNpZGUgdGhlIGNsb3NlZCBkcm9wZG93biBtZW51KSBjYW5cbiAgICAgICAgY2F1c2UgY29uZnVzaW9uLiBGcm9tIGFuIGFjY2Vzc2liaWxpdHkgcG9pbnQgb2YgdmlldywgdGhlcmUgaXMgY3VycmVudGx5XG4gICAgICAgIG5vIHNlbnNpYmxlIHdheSB0byBtYXAgdGhpcyBzb3J0IG9mIGNvbnN0cnVjdCB0byBhIHN0YW5kYXJkIFdBSSBBUklBXG4gICAgICAgIHBhdHRlcm4sIG1lYW5pbmcgdGhhdCBpdCBjYW5ub3QgYmUgZWFzaWx5IG1hZGUgdW5kZXJzdGFuZGFibGUgdG8gdXNlcnNcbiAgICAgICAgb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGF0IHNhaWQsIGl0IERyb3Bkb3ducyBkbyB3b3JrIHRlY2huaWNhbGx5IChzYW5zIGZvY3VzIG1hbmFnZW1lbnQpLCBidXRcbiAgICAgICAgd2UgZG9uJ3QgbWFrZSBhbnkgY2xhaW1zIGFib3V0IHN1cHBvcnQuXG4gICAgICA8L3A+XG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwidGFicy1jdXN0b20tbGF5b3V0XCI+XG4gICAgICAgIEN1c3RvbSBUYWIgTGF5b3V0XG4gICAgICA8L0xpbmtlZEhlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgRm9yIG1vcmUgY29tcGxleCBsYXlvdXRzIHRoZSBmbGV4aWJsZSA8Y29kZT5UYWJDb250YWluZXI8L2NvZGU+LHsnICd9XG4gICAgICAgIDxjb2RlPlRhYkNvbnRlbnQ8L2NvZGU+LCBhbmQgPGNvZGU+VGFiUGFuZTwvY29kZT4gY29tcG9uZW50cyBhbG9uZyB3aXRoXG4gICAgICAgIGFueSBzdHlsZSBvZiA8Y29kZT5OYXY8L2NvZGU+IGFsbG93IHlvdSB0byBxdWlja2x5IHBpZWNlIHRvZ2V0aGVyIHlvdXJcbiAgICAgICAgb3duIFRhYnMgY29tcG9uZW50IHdpdGggYWRkaXRpb25hbCBtYXJrdXAgbmVlZGVkLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIENyZWF0ZSBhIHNldCBvZiBOYXZJdGVtcyBlYWNoIHdpdGggYW4gPGNvZGU+ZXZlbnRLZXk8L2NvZGU+eycgJ31cbiAgICAgICAgY29ycmVzcG9uZGluZyB0byB0aGUgZXZlbnRLZXkgb2YgYSA8Y29kZT5UYWJQYW5lPC9jb2RlPi4gV3JhcCB0aGUgd2hvbGVcbiAgICAgICAgdGhpbmcgaW4gYSA8Y29kZT5UYWJDb250YWluZXI8L2NvZGU+IGFuZCB5b3UgaGF2ZSBmdWxseSBmdW5jdGlvbmluZ1xuICAgICAgICBjdXN0b20gdGFicyBjb21wb25lbnQuIENoZWNrIG91dCB0aGUgYmVsb3cgZXhhbXBsZSBtYWtpbmcgdXNlIG9mIHRoZVxuICAgICAgICBncmlkIHN5c3RlbSBhbmQgcGlsbHMuXG4gICAgICA8L3A+XG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtMZWZ0VGFic30gZXhhbXBsZUNsYXNzTmFtZT1cImJzLWV4YW1wbGUtdGFic1wiIC8+XG5cbiAgICAgIDxMaW5rZWRIZWFkaW5nIGg9XCIyXCIgaWQ9XCJ0YWJzLWFwaVwiPlxuICAgICAgICBBUElcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cblxuICAgICAgPENvbXBvbmVudEFwaSBtZXRhZGF0YT17ZGF0YS5UYWJzfSAvPlxuICAgICAgPENvbXBvbmVudEFwaSBtZXRhZGF0YT17ZGF0YS5UYWJ9IC8+XG4gICAgICA8Q29tcG9uZW50QXBpIG1ldGFkYXRhPXtkYXRhLlRhYkNvbnRhaW5lcn0gLz5cbiAgICAgIDxDb21wb25lbnRBcGkgbWV0YWRhdGE9e2RhdGEuVGFiQ29udGVudH0gLz5cbiAgICAgIDxDb21wb25lbnRBcGkgbWV0YWRhdGE9e2RhdGEuVGFiUGFuZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBUYWJzUXVlcnkge1xuICAgIFRhYnM6IGNvbXBvbmVudE1ldGFkYXRhKGRpc3BsYXlOYW1lOiB7IGVxOiBcIlRhYnNcIiB9KSB7XG4gICAgICAuLi5Db21wb25lbnRBcGlfbWV0YWRhdGFcbiAgICB9XG4gICAgVGFiOiBjb21wb25lbnRNZXRhZGF0YShkaXNwbGF5TmFtZTogeyBlcTogXCJUYWJcIiB9KSB7XG4gICAgICAuLi5Db21wb25lbnRBcGlfbWV0YWRhdGFcbiAgICB9XG4gICAgVGFiQ29udGFpbmVyOiBjb21wb25lbnRNZXRhZGF0YShkaXNwbGF5TmFtZTogeyBlcTogXCJUYWJDb250YWluZXJcIiB9KSB7XG4gICAgICAuLi5Db21wb25lbnRBcGlfbWV0YWRhdGFcbiAgICB9XG4gICAgVGFiQ29udGVudDogY29tcG9uZW50TWV0YWRhdGEoZGlzcGxheU5hbWU6IHsgZXE6IFwiVGFiQ29udGVudFwiIH0pIHtcbiAgICAgIC4uLkNvbXBvbmVudEFwaV9tZXRhZGF0YVxuICAgIH1cbiAgICBUYWJQYW5lOiBjb21wb25lbnRNZXRhZGF0YShkaXNwbGF5TmFtZTogeyBlcTogXCJUYWJQYW5lXCIgfSkge1xuICAgICAgLi4uQ29tcG9uZW50QXBpX21ldGFkYXRhXG4gICAgfVxuICB9XG5gO1xuIl0sIm1hcHBpbmdzIjoiQUFDQSIsInNvdXJjZVJvb3QiOiIifQ==