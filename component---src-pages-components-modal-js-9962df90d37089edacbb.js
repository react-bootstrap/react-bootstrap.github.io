(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1056:function(e,t){e.exports='<Modal.Dialog>\n  <Modal.Header closeButton>\n    <Modal.Title>Modal title</Modal.Title>\n  </Modal.Header>\n\n  <Modal.Body>\n    <p>Modal body text goes here.</p>\n  </Modal.Body>\n\n  <Modal.Footer>\n    <Button variant="secondary">Close</Button>\n    <Button variant="primary">Save changes</Button>\n  </Modal.Footer>\n</Modal.Dialog>;\n'},1057:function(e,t){e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleClose = this.handleClose.bind(this);\n\n    this.state = {\n      show: false,\n    };\n  }\n\n  handleClose() {\n    this.setState({ show: false });\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  render() {\n    return (\n      <>\n        <Button variant="primary" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal show={this.state.show} onHide={this.handleClose}>\n          <Modal.Header closeButton>\n            <Modal.Title>Modal heading</Modal.Title>\n          </Modal.Header>\n          <Modal.Body>Woohoo, you\'re reading this text in a modal!</Modal.Body>\n          <Modal.Footer>\n            <Button variant="secondary" onClick={this.handleClose}>\n              Close\n            </Button>\n            <Button variant="primary" onClick={this.handleClose}>\n              Save Changes\n            </Button>\n          </Modal.Footer>\n        </Modal>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n'},1058:function(e,t){e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      smShow: false,\n      lgShow: false,\n    };\n  }\n\n  render() {\n    let smClose = () => this.setState({ smShow: false });\n    let lgClose = () => this.setState({ lgShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button onClick={() => this.setState({ smShow: true })}>\n          Small modal\n        </Button>\n        <Button onClick={() => this.setState({ lgShow: true })}>\n          Large modal\n        </Button>\n\n        <Modal\n          size="sm"\n          show={this.state.smShow}\n          onHide={smClose}\n          aria-labelledby="example-modal-sizes-title-sm"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="example-modal-sizes-title-sm">\n              Small Modal\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>...</Modal.Body>\n        </Modal>\n\n        <Modal\n          size="lg"\n          show={this.state.lgShow}\n          onHide={lgClose}\n          aria-labelledby="example-modal-sizes-title-lg"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="example-modal-sizes-title-lg">\n              Large Modal\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>...</Modal.Body>\n        </Modal>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n'},1059:function(e,t){e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      show: false,\n    };\n\n    this.handleShow = () => {\n      this.setState({ show: true });\n    };\n\n    this.handleHide = () => {\n      this.setState({ show: false });\n    };\n  }\n\n  render() {\n    return (\n      <>\n        <Button variant="primary" onClick={this.handleShow}>\n          Custom Width Modal\n        </Button>\n\n        <Modal\n          show={this.state.show}\n          onHide={this.handleHide}\n          dialogClassName="modal-90w"\n          aria-labelledby="example-custom-modal-styling-title"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="example-custom-modal-styling-title">\n              Custom Modal Styling\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            <p>\n              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae\n              unde commodi aspernatur enim, consectetur. Cumque deleniti\n              temporibus ipsam atque a dolores quisquam quisquam adipisci\n              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit\n              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!\n              Mollitia reiciendis porro quo magni incidunt dolore amet atque\n              facilis ipsum deleniti rem!\n            </p>\n          </Modal.Body>\n        </Modal>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n'},1060:function(e,t){e.exports='class MyVerticallyCenteredModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        size="lg"\n        aria-labelledby="contained-modal-title-vcenter"\n        centered\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="contained-modal-title-vcenter">\n            Modal heading\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Centered Modal</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.state = { modalShow: false };\n  }\n\n  render() {\n    let modalClose = () => this.setState({ modalShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          variant="primary"\n          onClick={() => this.setState({ modalShow: true })}\n        >\n          Launch vertically centered modal\n        </Button>\n\n        <MyVerticallyCenteredModal\n          show={this.state.modalShow}\n          onHide={modalClose}\n        />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n'},1061:function(e,t){e.exports='class MydModalWithGrid extends React.Component {\n  render() {\n    return (\n      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">\n        <Modal.Header closeButton>\n          <Modal.Title id="contained-modal-title-vcenter">\n            Using Grid in Modal\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <Container>\n            <Row className="show-grid">\n              <Col xs={12} md={8}>\n                <code>.col-xs-12 .col-md-8</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n            </Row>\n\n            <Row className="show-grid">\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n            </Row>\n          </Container>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.state = { modalShow: false };\n  }\n\n  render() {\n    let modalClose = () => this.setState({ modalShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          variant="primary"\n          onClick={() => this.setState({ modalShow: true })}\n        >\n          Launch modal with grid\n        </Button>\n\n        <MydModalWithGrid show={this.state.modalShow} onHide={modalClose} />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n'},1062:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return w});var a=n(0),o=n.n(a),r=n(264),l=n(113),s=n(287),i=n(1056),c=n.n(i),d=n(1057),u=n.n(d),m=n(1058),p=n.n(m),h=n(1059),f=n.n(h),b=n(1060),g=n.n(b),y=n(1061),v=n.n(y),E=n(265),M=n(1062);t.default=Object(E.a)(function(e){var t=e.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.default,{h:"1",id:"modals"},"Modals"),o.a.createElement("p",{className:"lead"},"Add dialogs to your site for lightboxes, user notifications, or completely custom content."),o.a.createElement(l.default,{h:"2",id:"modals-overview"},"Overview"),o.a.createElement("ul",null,o.a.createElement("li",null,"Modals are positioned over everything else in the document and remove scroll from the ",o.a.createElement("code",null,"<body>")," so that modal content scrolls instead."),o.a.createElement("li",null,"Modals are ",o.a.createElement("em",null,"unmounted")," when closed."),o.a.createElement("li",null,"Bootstrap only supports ",o.a.createElement("strong",null,"one")," modal window at a time. Nested modals aren’t supported, but if you really need them the underlying ",o.a.createElement("code",null,"react-overlays")," can support them if you're willing."),o.a.createElement("li",null,'Modal\'s "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.'),o.a.createElement("li",null,"Unlike vanilla Bootstrap, ",o.a.createElement("code",null,"autoFocus")," works in Modals because React handles the implementation.")),o.a.createElement(l.default,{h:"2",id:"modals-examples"},"Examples"),o.a.createElement(l.default,{h:"3",id:"modals-static"},"Static Markup"),o.a.createElement("p",null,"Below is a ",o.a.createElement("em",null,"static")," modal dialog (without the positioning) to demostrate the look and feel of the Modal."),o.a.createElement(s.a,{codeText:c.a}),o.a.createElement(l.default,{h:"3",id:"modals-live"},"Live demo"),o.a.createElement("p",null,"A modal with header, body, and set of actions in the footer. Use"," ",o.a.createElement("code",null,"<Modal/>")," in combination with other components to show or hide your Modal. The ",o.a.createElement("code",null,"<Modal/>"),' Component comes with a few convenient "sub components": ',o.a.createElement("code",null,"<Modal.Header/>"),","," ",o.a.createElement("code",null,"<Modal.Title/>"),", ",o.a.createElement("code",null,"<Modal.Body/>"),", and"," ",o.a.createElement("code",null,"<Modal.Footer/>"),", which you can use to build the Modal content."),o.a.createElement(s.a,{codeText:u.a}),o.a.createElement("div",{className:"bs-callout bs-callout-info"},o.a.createElement("div",{className:"h4"},"Additional Import Options"),o.a.createElement("p",null,"The Modal Header, Title, Body, and Footer components are available as static properties the ",o.a.createElement("code",null,"<Modal/>")," component, but you can also, import them directly like:"," ",o.a.createElement("code",null,'require("react-bootstrap/ModalHeader")'),".")),o.a.createElement(l.default,{h:"3",id:"modal-vertically-centered"},"Vertically centered"),o.a.createElement("p",null,'You can vertically center a modal by passing the "verticallyCenter" prop.'),o.a.createElement(s.a,{codeText:g.a}),o.a.createElement(l.default,{h:"3",id:"modal-grid"},"Using the grid"),o.a.createElement("p",null,"You can use grid layouts within a model using regular grid components inside the modal content."),o.a.createElement(s.a,{codeText:v.a}),o.a.createElement(l.default,{h:"2",id:"modal-default-sizing"},"Optional Sizes"),o.a.createElement("p",null,'You can specify a bootstrap large or small modal by using the "size" prop.'),o.a.createElement(s.a,{codeText:p.a}),o.a.createElement(l.default,{h:"3",id:"modal-custom-sizing"},"Sizing modals using custom CSS"),o.a.createElement("p",null,'You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.'),o.a.createElement(s.a,{codeText:f.a,exampleClassName:M.custom}),o.a.createElement(l.default,{h:"2",id:"modals-props"},"API"),o.a.createElement(r.a,{metadata:t.Modal}),o.a.createElement(r.a,{metadata:t.ModalDialog}),o.a.createElement(r.a,{metadata:t.ModalHeader}),o.a.createElement(r.a,{metadata:t.ModalTitle}),o.a.createElement(r.a,{metadata:t.ModalBody}),o.a.createElement(r.a,{metadata:t.ModalFooter}))});var w="3111835207"},234:function(e,t,n){var a=n(13).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||n(14)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},238:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.5",description:"Bootstrap 4 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop","ci-lint":'eslint --rule "prettier/prettier: 2"',format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook",dtslint:"dtslint types"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.3.0","react-dom":">=16.3.0"},devDependencies:{"@4c/rollout":"^1.3.2","@babel/cli":"^7.2.3","@babel/core":"^7.3.4","@babel/plugin-proposal-class-properties":"^7.3.4","@babel/plugin-proposal-export-default-from":"^7.2.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-transform-runtime":"^7.3.4","@babel/preset-env":"^7.3.4","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@react-bootstrap/babel-preset":"^1.1.2","@react-bootstrap/eslint-config":"^1.1.1","@storybook/react":"^3.4.8","@types/react":"^16.8.7","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.5","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.1.1","babel-plugin-transform-react-remove-prop-types":"^0.4.24",chai:"^4.2.0",chalk:"^2.4.2",codecov:"^3.2.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.12","cpy-cli":"^2.0.0","create-react-class":"^15.6.3","cross-env":"^5.2.0",dtslint:"^0.4.1",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.10.0",eslint:"^5.15.1","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.16.0","eslint-plugin-jsx-a11y":"^6.2.1","eslint-plugin-mocha":"^5.3.0","eslint-plugin-prettier":"^3.0.1","eslint-plugin-react":"^7.12.4",execa:"^1.0.0","fs-extra":"^7.0.1",husky:"^1.3.1",karma:"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.5","lint-staged":"^8.1.5",lodash:"^4.17.11",mocha:"^5.2.0",prettier:"^1.16.4",react:"^16.8.4","react-dom":"^16.8.4","react-test-renderer":"^16.8.4","release-script":"^1.0.2",sinon:"^7.2.7","sinon-chai":"^3.3.0",typescript:"^3.2.2",webpack:"^4.29.6"},dependencies:{"@babel/runtime":"^7.3.4","@react-bootstrap/react-popper":"1.2.1","@restart/context":"^2.1.2","@restart/hooks":"^0.1.1",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.7","prop-types":"^15.7.2","prop-types-extra":"^1.1.0","react-overlays":"^1.2.0","react-transition-group":"^2.6.0",uncontrollable:"^6.1.0",warning:"^4.0.3"},release:{publishDir:"lib"}}},240:function(e,t,n){var a=n(271)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},241:function(e,t,n){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},242:function(e,t,n){var a=n(243),o=n(245),r=n(252),l=n(259),s=r(function(e,t){if(null==e)return[];var n=t.length;return n>1&&l(e,t[0],t[1])?t=[]:n>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),o(e,a(t,1),[])});e.exports=s},243:function(e,t,n){var a=n(278),o=n(244);e.exports=function e(t,n,r,l,s){var i=-1,c=t.length;for(r||(r=o),s||(s=[]);++i<c;){var d=t[i];n>0&&r(d)?n>1?e(d,n-1,r,l,s):a(s,d):l||(s[s.length]=d)}return s}},244:function(e,t,n){var a=n(268),o=n(279),r=n(266),l=a?a.isConcatSpreadable:void 0;e.exports=function(e){return r(e)||o(e)||!!(l&&e&&e[l])}},245:function(e,t,n){var a=n(277),o=n(280),r=n(246),l=n(249),s=n(276),i=n(250),c=n(233);e.exports=function(e,t,n){var d=-1;t=a(t.length?t:[c],s(o));var u=r(e,function(e,n,o){return{criteria:a(t,function(t){return t(e)}),index:++d,value:e}});return l(u,function(e,t){return i(e,t,n)})}},246:function(e,t,n){var a=n(247),o=n(231);e.exports=function(e,t){var n=-1,r=o(e)?Array(e.length):[];return a(e,function(e,a,o){r[++n]=t(e,a,o)}),r}},247:function(e,t,n){var a=n(282),o=n(248)(a);e.exports=o},248:function(e,t,n){var a=n(231);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!a(n))return e(n,o);for(var r=n.length,l=t?r:-1,s=Object(n);(t?l--:++l<r)&&!1!==o(s[l],l,s););return n}}},249:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},250:function(e,t,n){var a=n(251);e.exports=function(e,t,n){for(var o=-1,r=e.criteria,l=t.criteria,s=r.length,i=n.length;++o<s;){var c=a(r[o],l[o]);if(c)return o>=i?c:c*("desc"==n[o]?-1:1)}return e.index-t.index}},251:function(e,t,n){var a=n(272);e.exports=function(e,t){if(e!==t){var n=void 0!==e,o=null===e,r=e==e,l=a(e),s=void 0!==t,i=null===t,c=t==t,d=a(t);if(!i&&!d&&!l&&e>t||l&&s&&c&&!i&&!d||o&&s&&c||!n&&c||!r)return 1;if(!o&&!l&&!d&&e<t||d&&n&&r&&!o&&!l||i&&n&&r||!s&&r||!c)return-1}return 0}},252:function(e,t,n){var a=n(233),o=n(253),r=n(255);e.exports=function(e,t){return r(o(e,t,a),e+"")}},253:function(e,t,n){var a=n(254),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var r=arguments,l=-1,s=o(r.length-t,0),i=Array(s);++l<s;)i[l]=r[t+l];l=-1;for(var c=Array(t+1);++l<t;)c[l]=r[l];return c[t]=n(i),a(e,this,c)}}},254:function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},255:function(e,t,n){var a=n(256),o=n(258)(a);e.exports=o},256:function(e,t,n){var a=n(257),o=n(285),r=n(233),l=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:a(t),writable:!0})}:r;e.exports=l},257:function(e,t){e.exports=function(e){return function(){return e}}},258:function(e,t){var n=800,a=16,o=Date.now;e.exports=function(e){var t=0,r=0;return function(){var l=o(),s=a-(l-r);if(r=l,s>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},259:function(e,t,n){var a=n(275),o=n(231),r=n(281),l=n(269);e.exports=function(e,t,n){if(!l(n))return!1;var s=typeof t;return!!("number"==s?o(n)&&r(t,n.length):"string"==s&&t in n)&&a(n[t],e)}},260:function(e,t,n){e.exports={code:"PropTable-Code-module--code--FStF3"}},261:function(e,t,n){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},262:function(e,t,n){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},263:function(e,t,n){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},264:function(e,t,n){"use strict";n(111),n(234);var a=n(240),o=n.n(a),r=n(0),l=n.n(r),s=n(28),i=n.n(s),c=n(48),d=n(76),u=n(273),m=n(274),p=n(238),h=i()("a",null,"Link",n(241),"link","link"),f=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+p.version+"/src/"+t+".js";return l.a.createElement(u.a,{overlay:l.a.createElement(m.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(h,{href:n,className:"js-search-exclude"},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},b=(n(75),n(5)),g=n.n(b),y=(n(47),n(112),n(242)),v=n.n(y),E=n(286),M=n.n(E),w=n(1),x=n.n(w),C=n(283),k=n(284);function B(e,t){return void 0===e&&(e=[]),e.find(function(e){return e.tag===t})}var S=i()("code",null,"Code",n(260),"code","code"),T=i()("div",null,"PropDescription",n(261),"prop-description","propDescription");function N(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function H(e){return"func"===e?"function":"bool"===e?"boolean":e}var q=function(e){function t(){return e.apply(this,arguments)||this}g()(t,e);var n=t.prototype;return n.getType=function(e){var t=this,n=e.type||{},a=H(n.name),o=B(e.doclets,"type");switch(a){case"object":return a;case"union":return n.value.reduce(function(e,n,a,o){var r=t.getType({type:n});return l.a.isValidElement(r)&&(r=l.a.cloneElement(r,{key:a})),e=e.concat(r),a===o.length-1?e:e.concat(" | ")},[]);case"array":var r=this.getType({type:n.value});return l.a.createElement("span",null,"array<",r,">");case"enum":return this.renderEnum(n);case"custom":return N(o&&o.value||n.raw);default:return a}},n._renderRows=function(e){var t=this;return v()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var n=e.name,a=e.description,o=B(e.doclets,"deprecated"),r=a&&a.childMarkdownRemark.html;return l.a.createElement("tr",{key:n,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},n," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,!!o&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+o.value+" ")),t.renderControllableNote(e,n),l.a.createElement(T,{dangerouslySetInnerHTML:{__html:r}})))})},n.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},n=H(t.name);if("custom"===n){var a=B(e.doclets,"type");return N(a&&a.value||t.raw)}return n}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(S,null,t))},n.renderControllableNote=function(e,t){var n=B(e.doclets,"controllable"),a="function"===H(e.type.name);if(!n)return!1;var o=a?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,n.value)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(S,null,n.value),", initial prop:"," ",l.a.createElement(S,null,"default"+M()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},o)))},n.renderEnum=function(e){var t=e.value||[];if(!Array.isArray(t))return t;var n=[];return t.forEach(function(e,t){var a=e.value;t>0&&n.push(l.a.createElement("span",{key:t+"c"}," | ")),n.push(l.a.createElement("code",{key:t},a))}),l.a.createElement("span",null,n)},n.renderRequiredBadge=function(e){return e.required?l.a.createElement(C.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(k.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);q.propTypes={metadata:x.a.object.isRequired};var z=q,R=i()("span",null,"Keyword",n(262),"keyword","keyword"),D=i()("code",null,"Code",n(263),"code","code"),A=function(e){var t=e.name;return l.a.createElement(D,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(R,null,"import")," ",t," ",l.a.createElement(R,null,"from")," 'react-bootstrap/",t,"'")};function F(e){var t=e.heading,n=e.metadata,a=e.exportedBy,r=n.description,s=n.displayName,i=r&&r.childMarkdownRemark.html,u=s;a&&(s=a.displayName+"."+s.split(a.displayName).pop(),u=a.displayName);var m=o()(s)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.default,{h:t||"3",id:m,title:s,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(d.a,{target:m},l.a.createElement("span",{className:" text-monospace"},s)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(f,{component:s}))),l.a.createElement(A,{name:u}),i&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),l.a.createElement(z,{metadata:n}))}F.propTypes={};t.a=F},265:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(288);var a=n(0),o=n.n(a),r=n(267),l=n(289);function s(e){return function(t){var n=t.location.pathname,a=l.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(a=r.a),o.a.createElement(a,{location:t.location},o.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-components-modal-js-9962df90d37089edacbb.js.map