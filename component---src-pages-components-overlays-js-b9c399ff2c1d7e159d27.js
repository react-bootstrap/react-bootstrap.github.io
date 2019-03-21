(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1071:function(e,t){e.exports="class Example extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.attachRef = target => this.setState({ target });\n    this.state = {\n      show: false,\n    };\n  }\n\n  render() {\n    const { show, target } = this.state;\n    return (\n      <>\n        <Button\n          variant=\"danger\"\n          ref={this.attachRef}\n          onClick={() => this.setState({ show: !show })}\n        >\n          Click me to see\n        </Button>\n        <Overlay target={target} show={show} placement=\"right\">\n          {({ placement, scheduleUpdate, arrowProps, ...props }) => (\n            <div\n              {...props}\n              style={{\n                backgroundColor: 'rgba(255, 100, 100, 0.85)',\n                padding: '2px 10px',\n                color: 'white',\n                borderRadius: 3,\n                ...props.style,\n              }}\n            >\n              Simple tooltip\n            </div>\n          )}\n        </Overlay>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n"},1072:function(e,t){e.exports='<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>\n  <span className="d-inline-block">\n    <Button disabled style={{ pointerEvents: \'none\' }}>\n      Disabled button\n    </Button>\n  </span>\n</OverlayTrigger>;\n'},1073:function(e,t){e.exports="class UpdatingPopover extends React.Component {\n  componentDidUpdate(prevProps) {\n    if (prevProps.children !== this.props.children) {\n      console.log('updating!');\n      this.props.scheduleUpdate();\n    }\n  }\n\n  render() {\n    return <Popover {...this.props} />;\n  }\n}\n\nconst longContent = `\n  Very long\n  Multiline content\n  that is engaging and what-not\n`;\nconst shortContent = 'Short and sweet!';\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = { content: shortContent };\n  }\n\n  componentDidMount() {\n    this.timer = setInterval(() => {\n      this.setState(state => ({\n        content: state.content === shortContent ? longContent : shortContent,\n      }));\n    }, 3000);\n  }\n\n  render() {\n    const { content } = this.state;\n\n    return (\n      <OverlayTrigger\n        trigger=\"click\"\n        overlay={\n          <UpdatingPopover id=\"popover-contained\">{content}</UpdatingPopover>\n        }\n      >\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n      </OverlayTrigger>\n    );\n  }\n}\n\nrender(<Example />);\n"},1074:function(e,t){e.exports="const renderTooltip = props => (\n  <div\n    {...props}\n    style={{\n      backgroundColor: 'rgba(0, 0, 0, 0.85)',\n      padding: '2px 10px',\n      color: 'white',\n      borderRadius: 3,\n      ...props.style,\n    }}\n  >\n    Simple tooltip\n  </div>\n);\n\nconst Example = () => (\n  <OverlayTrigger\n    placement=\"right-start\"\n    delay={{ show: 250, hide: 400 }}\n    overlay={renderTooltip}\n  >\n    <Button variant=\"success\">Hover me to see</Button>\n  </OverlayTrigger>\n);\n\nrender(<Example />);\n"},1075:function(e,t){e.exports='const Link = ({ id, children, title }) => (\n  <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>\n    <a href="#">{children}</a>\n  </OverlayTrigger>\n);\n\nrender(\n  <p>\n    Tight pants next level keffiyeh{\' \'}\n    <Link title="Default title" id="t-1">\n      you probably\n    </Link>{\' \'}\n    haven\'t heard of them. Farm-to-table seitan, mcsweeney\'s fixie sustainable\n    quinoa 8-bit american apparel{\' \'}\n    <Link id="t-2" title="Another one">\n      have a\n    </Link>{\' \'}\n    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo\n    thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney\'s\n    cleanse vegan chambray. A really ironic artisan{\' \'}\n    <Link title="Another one here too" id="t-3">\n      whatever keytar\n    </Link>\n    , scenester farm-to-table banksy Austin{\' \'}\n    <Link title="The last tip!" id="t-4">\n      twitter handle\n    </Link>{\' \'}\n    freegan cred raw denim single-origin coffee viral.\n  </p>,\n);\n'},1076:function(e,t){e.exports='class Example extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.attachRef = target => this.setState({ target });\n    this.state = { show: false };\n  }\n\n  render() {\n    const { show, target } = this.state;\n    return (\n      <>\n        <Button\n          ref={this.attachRef}\n          onClick={() => this.setState({ show: !show })}\n        >\n          Click me!\n        </Button>\n        <Overlay target={target} show={show} placement="right">\n          {props => (\n            <Tooltip id="overlay-example" {...props}>\n              My Tooltip\n            </Tooltip>\n          )}\n        </Overlay>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n'},1077:function(e,t){e.exports="<ButtonToolbar>\n  {['top', 'right', 'bottom', 'left'].map(placement => (\n    <OverlayTrigger\n      key={placement}\n      placement={placement}\n      overlay={\n        <Tooltip id={`tooltip-${placement}`}>\n          Tooltip on <strong>{placement}</strong>.\n        </Tooltip>\n      }\n    >\n      <Button variant=\"secondary\">Tooltip on {placement}</Button>\n    </OverlayTrigger>\n  ))}\n</ButtonToolbar>;\n"},1078:function(e,t){e.exports='const popover = (\n  <Popover id="popover-basic" title="Popover right">\n    And here\'s some <strong>amazing</strong> content. It\'s very engaging. right?\n  </Popover>\n);\n\nconst Example = () => (\n  <OverlayTrigger trigger="click" placement="right" overlay={popover}>\n    <Button variant="success">Click me to see</Button>\n  </OverlayTrigger>\n);\n\nrender(<Example />);\n'},1079:function(e,t){e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = ({ target }) => {\n      this.setState(s => ({ target, show: !s.show }));\n    };\n\n    this.state = {\n      show: false,\n    };\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n\n        <Overlay\n          show={this.state.show}\n          target={this.state.target}\n          placement="bottom"\n          container={this}\n          containerPadding={20}\n        >\n          <Popover id="popover-contained" title="Popover bottom">\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover>\n        </Overlay>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n'},1080:function(e,t){e.exports="<ButtonToolbar>\n  {['top', 'right', 'bottom', 'left'].map(placement => (\n    <OverlayTrigger\n      trigger=\"click\"\n      key={placement}\n      placement={placement}\n      overlay={\n        <Popover\n          id={`popover-positioned-${placement}`}\n          title={`Popover ${placement}`}\n        >\n          <strong>Holy guacamole!</strong> Check this info.\n        </Popover>\n      }\n    >\n      <Button variant=\"secondary\">Popover on {placement}</Button>\n    </OverlayTrigger>\n  ))}\n</ButtonToolbar>;\n"},1081:function(e,t,n){e.exports={contained:"overlays-styles-module--contained--3agtF"}},204:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return j});var a=n(0),r=n.n(a),o=n(113),l=n(264),i=n(287),c=n(1071),s=n.n(c),p=n(1072),u=n.n(p),m=n(1073),d=n.n(m),h=n(1074),v=n.n(h),f=n(1075),g=n.n(f),y=n(1076),b=n.n(y),E=n(1077),x=n.n(E),w=n(1078),k=n.n(w),T=n(1079),O=n.n(T),C=n(1080),N=n.n(C),B=n(265),P=n(1081);t.default=Object(B.a)(function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.default,{h:"1",id:"overlays"},"Overlays"),r.a.createElement("p",{className:"lead"},"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need."),r.a.createElement(o.default,{h:"2",id:"overlays-overview"},"Overview"),r.a.createElement("p",null,"Things to know about the react-boostrap Overlay components."),r.a.createElement("ul",null,r.a.createElement("li",null,"Overlays rely on a 3rd party library"," ",r.a.createElement("a",{href:"https://github.com/FezVrasta/react-popper"},"react-popper"),", a tiny react wrapper around"," ",r.a.createElement("a",{href:"https://popper.js.org/"},"Popper.js"),". It's include automatically with react-bootstrap, but you should reference the API for more advanced use-cases."),r.a.createElement("li",null,"The ",r.a.createElement("code",null,"<Tooltip>")," and ",r.a.createElement("code",null,"<Popover>")," ","components do not position themselves. Instead the"," ",r.a.createElement("code",null,"<Overlay>")," (or ",r.a.createElement("code",null,"<OverlayTrigger>"),") components, inject ",r.a.createElement("code",null,"ref")," and ",r.a.createElement("code",null,"style")," props."),r.a.createElement("li",null,"Tooltip expects specific props injected by the"," ",r.a.createElement("code",null,"<Overlay>")," component"),r.a.createElement("li",null,"Tooltips for ",r.a.createElement("code",null,"disabled")," elements must be triggered on a wrapper element.")),r.a.createElement(o.default,{h:"2",id:"overlays"},"Overlay"),r.a.createElement("p",null,r.a.createElement("code",null,"Overlay")," is the fundemental component for positioning and controlling tooltip visibility. It's a wrapper around react-popper, that adds support for transitions, and visibility toggling."),r.a.createElement(o.default,{h:"3",id:"creating-an-overlay"},"Creating an Overlay"),r.a.createElement("p",null,'Overlays consist of at least two elements, the "overlay", the element to be positioned, as well as a "target", the element the overlay is positioned in relation to. You can also also have an "arrow" element, like the tooltips and popovers, but that is optional. Be sure to'," ",r.a.createElement("strong",null,"check out the"," ",r.a.createElement("a",{href:"https://github.com/FezVrasta/react-popper#api-documentation"},"react-popper")," ","documentation for more details about the injected props.")),r.a.createElement(i.a,{codeText:s.a}),r.a.createElement(o.default,{h:"3",id:"overlay-trigger"},"OverlayTrigger"),r.a.createElement("p",null,"Since the above pattern is pretty common, but verbose, we've included"," ",r.a.createElement("code",null,"<OverlayTrigger>"),' component to help with common use-cases. It even has functionality to delayed show or hides, and a few different "trigger" events you can mix and match.'),r.a.createElement("p",null,"Note that triggering components"," ",r.a.createElement("strong",null,"must be able to accept"," ",r.a.createElement("a",{href:"https://reactjs.org/docs/refs-and-the-dom.html"},"a ref"))," ","since ",r.a.createElement("code",null,"<OverlayTrigger>")," will attempt to add one. You can use"," ",r.a.createElement("a",{href:"https://reactjs.org/docs/react-api.html#reactforwardref"},"forwardRef()")," ","for stateless function components."),r.a.createElement(i.a,{codeText:v.a}),r.a.createElement(o.default,{h:"2",id:"tooltips"},"Tooltips"),r.a.createElement("p",{className:"lead"},"A tooltip component for a more stylish alternative to that anchor tag"," ",r.a.createElement("code",null,"title")," attribute."),r.a.createElement(o.default,{h:"3",id:"tooltip-examples"},"Examples"),r.a.createElement("p",null,"Hover over the links below to see tooltips."),r.a.createElement(i.a,{codeText:g.a,showCode:!1}),r.a.createElement("p",null,"You can pass the ",r.a.createElement("code",null,"Overlay")," injected props directly to the Tooltip component."),r.a.createElement(i.a,{codeText:b.a}),r.a.createElement("p",null,"Or pass a Tooltip element to ",r.a.createElement("code",null,"OverlayTrigger")," instead."),r.a.createElement(i.a,{codeText:x.a}),r.a.createElement(o.default,{h:"2",id:"popovers"},"Popovers"),r.a.createElement("p",{className:"lead"},"A popover component, like those found in iOS."),r.a.createElement(o.default,{h:"3",id:"popover-examples"},"Examples"),r.a.createElement(i.a,{codeText:k.a}),r.a.createElement("p",null,"As with ",r.a.createElement("code",null,"<Tooltip>"),"s, you can control the placement of the Popover."),r.a.createElement(i.a,{codeText:N.a}),r.a.createElement(o.default,{h:"2",id:"overlays-disabled"},"Disabled elements"),r.a.createElement("p",null,"Elements with the ",r.a.createElement("code",null,"disabled")," attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the overlay from a wrapper ",r.a.createElement("code",null,"<div>")," or ",r.a.createElement("code",null,"<span>")," and override the ",r.a.createElement("code",null,"pointer-events")," on the disabled element."),r.a.createElement(i.a,{codeText:u.a}),r.a.createElement(o.default,{h:"2",id:"overlays-container"},"Changing containers"),r.a.createElement("p",null,"Yopu can specify a ",r.a.createElement("code",null,"container")," to control the DOM element the overlay is appended to. This is especially useful when styles conflict with your Overlay's."),r.a.createElement(i.a,{codeText:O.a,exampleClassName:P.contained}),r.a.createElement(o.default,{h:"2",id:"overlays-dynamic-updates"},"Updating position dynamically"),r.a.createElement("p",null,"Since we can't know every time your overlay changes size, to reposition it, you need to take manual action if you want to update the position of an Overlay in response to a change."),r.a.createElement("p",null,"For this, the Overlay component also injects a"," ",r.a.createElement("code",null,"scheduleUpdate()")," method that an overlay component can use to reposition itself."),r.a.createElement(i.a,{codeText:d.a}),r.a.createElement(o.default,{h:"2",id:"overlays-api"},"API"),r.a.createElement(l.a,{metadata:t.Overlay}),r.a.createElement(l.a,{metadata:t.OverlayTrigger}),r.a.createElement(l.a,{metadata:t.Tooltip}),r.a.createElement(l.a,{metadata:t.Popover}))});var j="3024345261"},234:function(e,t,n){var a=n(13).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(14)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},238:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.5",description:"Bootstrap 4 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop","ci-lint":'eslint --rule "prettier/prettier: 2"',format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook",dtslint:"dtslint types"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.3.0","react-dom":">=16.3.0"},devDependencies:{"@4c/rollout":"^1.3.2","@babel/cli":"^7.2.3","@babel/core":"^7.3.4","@babel/plugin-proposal-class-properties":"^7.3.4","@babel/plugin-proposal-export-default-from":"^7.2.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-transform-runtime":"^7.3.4","@babel/preset-env":"^7.3.4","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@react-bootstrap/babel-preset":"^1.1.2","@react-bootstrap/eslint-config":"^1.1.1","@storybook/react":"^3.4.8","@types/react":"^16.8.7","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.5","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.1.1","babel-plugin-transform-react-remove-prop-types":"^0.4.24",chai:"^4.2.0",chalk:"^2.4.2",codecov:"^3.2.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.12","cpy-cli":"^2.0.0","create-react-class":"^15.6.3","cross-env":"^5.2.0",dtslint:"^0.4.1",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.10.0",eslint:"^5.15.1","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.16.0","eslint-plugin-jsx-a11y":"^6.2.1","eslint-plugin-mocha":"^5.3.0","eslint-plugin-prettier":"^3.0.1","eslint-plugin-react":"^7.12.4",execa:"^1.0.0","fs-extra":"^7.0.1",husky:"^1.3.1",karma:"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.5","lint-staged":"^8.1.5",lodash:"^4.17.11",mocha:"^5.2.0",prettier:"^1.16.4",react:"^16.8.4","react-dom":"^16.8.4","react-test-renderer":"^16.8.4","release-script":"^1.0.2",sinon:"^7.2.7","sinon-chai":"^3.3.0",typescript:"^3.2.2",webpack:"^4.29.6"},dependencies:{"@babel/runtime":"^7.3.4","@react-bootstrap/react-popper":"1.2.1","@restart/context":"^2.1.2","@restart/hooks":"^0.1.1",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.7","prop-types":"^15.7.2","prop-types-extra":"^1.1.0","react-overlays":"^1.2.0","react-transition-group":"^2.6.0",uncontrollable:"^6.1.0",warning:"^4.0.3"},release:{publishDir:"lib"}}},240:function(e,t,n){var a=n(271)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},241:function(e,t,n){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},242:function(e,t,n){var a=n(243),r=n(245),o=n(252),l=n(259),i=o(function(e,t){if(null==e)return[];var n=t.length;return n>1&&l(e,t[0],t[1])?t=[]:n>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),r(e,a(t,1),[])});e.exports=i},243:function(e,t,n){var a=n(278),r=n(244);e.exports=function e(t,n,o,l,i){var c=-1,s=t.length;for(o||(o=r),i||(i=[]);++c<s;){var p=t[c];n>0&&o(p)?n>1?e(p,n-1,o,l,i):a(i,p):l||(i[i.length]=p)}return i}},244:function(e,t,n){var a=n(268),r=n(279),o=n(266),l=a?a.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||r(e)||!!(l&&e&&e[l])}},245:function(e,t,n){var a=n(277),r=n(280),o=n(246),l=n(249),i=n(276),c=n(250),s=n(233);e.exports=function(e,t,n){var p=-1;t=a(t.length?t:[s],i(r));var u=o(e,function(e,n,r){return{criteria:a(t,function(t){return t(e)}),index:++p,value:e}});return l(u,function(e,t){return c(e,t,n)})}},246:function(e,t,n){var a=n(247),r=n(231);e.exports=function(e,t){var n=-1,o=r(e)?Array(e.length):[];return a(e,function(e,a,r){o[++n]=t(e,a,r)}),o}},247:function(e,t,n){var a=n(282),r=n(248)(a);e.exports=r},248:function(e,t,n){var a=n(231);e.exports=function(e,t){return function(n,r){if(null==n)return n;if(!a(n))return e(n,r);for(var o=n.length,l=t?o:-1,i=Object(n);(t?l--:++l<o)&&!1!==r(i[l],l,i););return n}}},249:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},250:function(e,t,n){var a=n(251);e.exports=function(e,t,n){for(var r=-1,o=e.criteria,l=t.criteria,i=o.length,c=n.length;++r<i;){var s=a(o[r],l[r]);if(s)return r>=c?s:s*("desc"==n[r]?-1:1)}return e.index-t.index}},251:function(e,t,n){var a=n(272);e.exports=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,o=e==e,l=a(e),i=void 0!==t,c=null===t,s=t==t,p=a(t);if(!c&&!p&&!l&&e>t||l&&i&&s&&!c&&!p||r&&i&&s||!n&&s||!o)return 1;if(!r&&!l&&!p&&e<t||p&&n&&o&&!r&&!l||c&&n&&o||!i&&o||!s)return-1}return 0}},252:function(e,t,n){var a=n(233),r=n(253),o=n(255);e.exports=function(e,t){return o(r(e,t,a),e+"")}},253:function(e,t,n){var a=n(254),r=Math.max;e.exports=function(e,t,n){return t=r(void 0===t?e.length-1:t,0),function(){for(var o=arguments,l=-1,i=r(o.length-t,0),c=Array(i);++l<i;)c[l]=o[t+l];l=-1;for(var s=Array(t+1);++l<t;)s[l]=o[l];return s[t]=n(c),a(e,this,s)}}},254:function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},255:function(e,t,n){var a=n(256),r=n(258)(a);e.exports=r},256:function(e,t,n){var a=n(257),r=n(285),o=n(233),l=r?function(e,t){return r(e,"toString",{configurable:!0,enumerable:!1,value:a(t),writable:!0})}:o;e.exports=l},257:function(e,t){e.exports=function(e){return function(){return e}}},258:function(e,t){var n=800,a=16,r=Date.now;e.exports=function(e){var t=0,o=0;return function(){var l=r(),i=a-(l-o);if(o=l,i>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},259:function(e,t,n){var a=n(275),r=n(231),o=n(281),l=n(269);e.exports=function(e,t,n){if(!l(n))return!1;var i=typeof t;return!!("number"==i?r(n)&&o(t,n.length):"string"==i&&t in n)&&a(n[t],e)}},260:function(e,t,n){e.exports={code:"PropTable-Code-module--code--FStF3"}},261:function(e,t,n){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},262:function(e,t,n){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},263:function(e,t,n){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},264:function(e,t,n){"use strict";n(111),n(234);var a=n(240),r=n.n(a),o=n(0),l=n.n(o),i=n(28),c=n.n(i),s=n(48),p=n(76),u=n(273),m=n(274),d=n(238),h=c()("a",null,"Link",n(241),"link","link"),v=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+d.version+"/src/"+t+".js";return l.a.createElement(u.a,{overlay:l.a.createElement(m.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(h,{href:n,className:"js-search-exclude"},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},f=(n(75),n(5)),g=n.n(f),y=(n(47),n(112),n(242)),b=n.n(y),E=n(286),x=n.n(E),w=n(1),k=n.n(w),T=n(283),O=n(284);function C(e,t){return void 0===e&&(e=[]),e.find(function(e){return e.tag===t})}var N=c()("code",null,"Code",n(260),"code","code"),B=c()("div",null,"PropDescription",n(261),"prop-description","propDescription");function P(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function j(e){return"func"===e?"function":"bool"===e?"boolean":e}var A=function(e){function t(){return e.apply(this,arguments)||this}g()(t,e);var n=t.prototype;return n.getType=function(e){var t=this,n=e.type||{},a=j(n.name),r=C(e.doclets,"type");switch(a){case"object":return a;case"union":return n.value.reduce(function(e,n,a,r){var o=t.getType({type:n});return l.a.isValidElement(o)&&(o=l.a.cloneElement(o,{key:a})),e=e.concat(o),a===r.length-1?e:e.concat(" | ")},[]);case"array":var o=this.getType({type:n.value});return l.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(n);case"custom":return P(r&&r.value||n.raw);default:return a}},n._renderRows=function(e){var t=this;return b()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var n=e.name,a=e.description,r=C(e.doclets,"deprecated"),o=a&&a.childMarkdownRemark.html;return l.a.createElement("tr",{key:n,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},n," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,!!r&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+r.value+" ")),t.renderControllableNote(e,n),l.a.createElement(B,{dangerouslySetInnerHTML:{__html:o}})))})},n.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},n=j(t.name);if("custom"===n){var a=C(e.doclets,"type");return P(a&&a.value||t.raw)}return n}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(N,null,t))},n.renderControllableNote=function(e,t){var n=C(e.doclets,"controllable"),a="function"===j(e.type.name);if(!n)return!1;var r=a?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,n.value)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(N,null,n.value),", initial prop:"," ",l.a.createElement(N,null,"default"+x()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},r)))},n.renderEnum=function(e){var t=e.value||[];if(!Array.isArray(t))return t;var n=[];return t.forEach(function(e,t){var a=e.value;t>0&&n.push(l.a.createElement("span",{key:t+"c"}," | ")),n.push(l.a.createElement("code",{key:t},a))}),l.a.createElement("span",null,n)},n.renderRequiredBadge=function(e){return e.required?l.a.createElement(T.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(O.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);A.propTypes={metadata:k.a.object.isRequired};var D=A,R=c()("span",null,"Keyword",n(262),"keyword","keyword"),S=c()("code",null,"Code",n(263),"code","code"),L=function(e){var t=e.name;return l.a.createElement(S,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(R,null,"import")," ",t," ",l.a.createElement(R,null,"from")," 'react-bootstrap/",t,"'")};function z(e){var t=e.heading,n=e.metadata,a=e.exportedBy,o=n.description,i=n.displayName,c=o&&o.childMarkdownRemark.html,u=i;a&&(i=a.displayName+"."+i.split(a.displayName).pop(),u=a.displayName);var m=r()(i)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.default,{h:t||"3",id:m,title:i,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(p.a,{target:m},l.a.createElement("span",{className:" text-monospace"},i)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(v,{component:i}))),l.a.createElement(L,{name:u}),c&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),l.a.createElement(D,{metadata:n}))}z.propTypes={};t.a=z},265:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(288);var a=n(0),r=n.n(a),o=n(267),l=n(289);function i(e){return function(t){var n=t.location.pathname,a=l.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(a=o.a),r.a.createElement(a,{location:t.location},r.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-components-overlays-js-b9c399ff2c1d7e159d27.js.map