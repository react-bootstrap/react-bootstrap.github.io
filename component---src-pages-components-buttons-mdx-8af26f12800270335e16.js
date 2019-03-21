(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1135:function(e,t){e.exports='<ButtonToolbar>\n  <Button variant="primary" size="lg" active>\n    Primary button\n  </Button>\n  <Button variant="secondary" size="lg" active>\n    Button\n  </Button>\n</ButtonToolbar>;\n'},1136:function(e,t){e.exports='<div>\n  <Button variant="primary" size="lg" block>\n    Block level button\n  </Button>\n  <Button variant="secondary" size="lg" block>\n    Block level button\n  </Button>\n</div>;\n'},1137:function(e,t){e.exports='<ButtonToolbar>\n  <Button variant="primary" size="lg" disabled>\n    Primary button\n  </Button>{\' \'}\n  <Button variant="secondary" size="lg" disabled>\n    Button\n  </Button>{\' \'}\n  <Button href="#" variant="secondary" size="lg" disabled>\n    Link\n  </Button>\n</ButtonToolbar>;\n'},1138:function(e,t){e.exports="function simulateNetworkRequest() {\n  return new Promise(resolve => setTimeout(resolve, 2000));\n}\n\nclass LoadingButton extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = this.handleClick.bind(this);\n\n    this.state = {\n      isLoading: false,\n    };\n  }\n\n  handleClick() {\n    this.setState({ isLoading: true }, () => {\n      simulateNetworkRequest().then(() => {\n        this.setState({ isLoading: false });\n      });\n    });\n  }\n\n  render() {\n    const { isLoading } = this.state;\n\n    return (\n      <Button\n        variant=\"primary\"\n        disabled={isLoading}\n        onClick={!isLoading ? this.handleClick : null}\n      >\n        {isLoading ? 'Loading…' : 'Click to load'}\n      </Button>\n    );\n  }\n}\n\nrender(<LoadingButton />);\n"},1139:function(e,t){e.exports='<ButtonToolbar>\n  <Button variant="outline-primary">Primary</Button>\n  <Button variant="outline-secondary">Secondary</Button>\n  <Button variant="outline-success">Success</Button>\n  <Button variant="outline-warning">Warning</Button>\n  <Button variant="outline-danger">Danger</Button>\n  <Button variant="outline-info">Info</Button>\n  <Button variant="outline-light">Light</Button>\n  <Button variant="outline-dark">Dark</Button>\n</ButtonToolbar>;\n'},1140:function(e,t){e.exports='<div>\n  <ButtonToolbar>\n    <Button variant="primary" size="lg">\n      Large button\n    </Button>\n    <Button variant="secondary" size="lg">\n      Large button\n    </Button>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <Button variant="primary" size="sm">\n      Small button\n    </Button>\n    <Button variant="secondary" size="sm">\n      Small button\n    </Button>\n  </ButtonToolbar>\n</div>;\n'},1141:function(e,t){e.exports='<ButtonToolbar>\n  <Button href="#">Link</Button>\n  <Button type="submit">Button</Button>\n  <Button as="input" type="button" value="Input" />\n  <Button as="input" type="submit" value="Submit" />\n  <Button as="input" type="reset" value="Reset" />\n</ButtonToolbar>;\n'},1142:function(e,t){e.exports='<div className="d-flex flex-column">\n  <ButtonGroup toggle>\n    <ToggleButton type="checkbox" defaultChecked value="1">\n      Checked\n    </ToggleButton>\n  </ButtonGroup>\n  <ButtonGroup toggle className="mt-3">\n    <ToggleButton type="radio" name="radio" defaultChecked value="1">\n      Active\n    </ToggleButton>\n    <ToggleButton type="radio" name="radio" value="2">\n      Radio\n    </ToggleButton>\n    <ToggleButton type="radio" name="radio" value="3">\n      Radio\n    </ToggleButton>\n  </ButtonGroup>\n</div>;\n'},1143:function(e,t){e.exports='class ToggleButtonGroupControlled extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: [1, 3],\n    };\n  }\n\n  handleChange(value, event) {\n    this.setState({ value });\n  }\n\n  render() {\n    return (\n      <ToggleButtonGroup\n        type="checkbox"\n        value={this.state.value}\n        onChange={this.handleChange}\n      >\n        <ToggleButton value={1}>Option 1</ToggleButton>\n        <ToggleButton value={2}>Option 2</ToggleButton>\n        <ToggleButton value={3}>Option 3</ToggleButton>\n      </ToggleButtonGroup>\n    );\n  }\n}\n\nrender(<ToggleButtonGroupControlled />);\n'},1144:function(e,t){e.exports='<>\n  <ButtonToolbar>\n    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>\n      <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>\n      <ToggleButton value={2}>Checkbox 2</ToggleButton>\n      <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>\n    </ToggleButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>\n      <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>\n      <ToggleButton value={2}>Radio 2</ToggleButton>\n      <ToggleButton value={3}>Radio 3</ToggleButton>\n    </ToggleButtonGroup>\n  </ButtonToolbar>\n</>;\n'},1145:function(e,t){e.exports='<ButtonToolbar>\n  <Button variant="primary">Primary</Button>\n  <Button variant="secondary">Secondary</Button>\n  <Button variant="success">Success</Button>\n  <Button variant="warning">Warning</Button>\n  <Button variant="danger">Danger</Button>\n  <Button variant="info">Info</Button>\n  <Button variant="light">Light</Button>\n  <Button variant="dark">Dark</Button>\n  <Button variant="link">Link</Button>\n</ButtonToolbar>;\n'},249:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return R}),n.d(t,"_frontmatter",function(){return G});var a=n(50),o=n.n(a),r=n(0),l=n.n(r),i=n(121),c=n(298),s=n(295),u=n(312),p=n(1135),m=n.n(p),d=n(1136),g=n.n(d),b=n(1137),f=n.n(b),h=n(1138),v=n.n(h),y=n(1139),B=n.n(y),T=n(1140),E=n.n(T),x=n(1141),k=n.n(x),w=n(1142),D=n.n(w),C=n(1143),M=n.n(C),N=n(1144),X=n.n(N),L=n(1145),z=n.n(L),R="377994179";t.default=function(e){var t=e.components,n=o()(e,["components"]);return l.a.createElement(i.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:t},l.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"buttons"}},"Buttons"),l.a.createElement("p",{classname:"lead"},"Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),l.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),l.a.createElement(i.MDXTag,{name:"p",components:t},"Use any of the available button style types to quickly create a styled\nbutton. Just modify the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"variant")," prop."),l.a.createElement(u.a,{codeText:z.a}),l.a.createElement(i.MDXTag,{name:"h3",components:t,props:{id:"outline-buttons"}},"Outline buttons"),l.a.createElement(i.MDXTag,{name:"p",components:t},"For a lighter touch, Buttons also come in ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"outline-*"),"\nvariants with no background color."),l.a.createElement(u.a,{codeText:B.a}),l.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"button-tags"}},"Button tags"),l.a.createElement(i.MDXTag,{name:"p",components:t},"Normally ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Button>")," components will render a HTML\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<button>")," element. However you can render whatever you'd\nlike, adding a ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"href")," prop will automatically render an\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<a />")," element. You can use the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"as")," prop to\nrender whatever your heart desires. React Bootstrap will take care of\nthe proper ARIA roles for you."),l.a.createElement(u.a,{codeText:k.a}),l.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"sizes"}},"Sizes"),l.a.createElement(i.MDXTag,{name:"p",components:t},"Fancy larger or smaller buttons? Add ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'size="large"'),",\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'size="small"')," for additional sizes."),l.a.createElement(u.a,{codeText:E.a}),l.a.createElement(i.MDXTag,{name:"p",components:t},"Create block level buttons—those that span the full width of a parent—by\nadding ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"block")),l.a.createElement(u.a,{codeText:g.a}),l.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"active-state"}},"Active state"),l.a.createElement(i.MDXTag,{name:"p",components:t},"To set a buttons active state simply set the components\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"active")," prop."),l.a.createElement(u.a,{codeText:m.a}),l.a.createElement(i.MDXTag,{name:"h3",components:t,props:{id:"disabled-state"}},"Disabled state"),l.a.createElement(i.MDXTag,{name:"p",components:t},"Make buttons look inactive by adding the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"disabled")," prop to."),l.a.createElement(u.a,{codeText:f.a}),l.a.createElement(i.MDXTag,{name:"p",components:t},"Watch out! ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<a>")," element's don't naturally support a\ndisabled attribute. In browsers that support it this is handled with a\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"point-events: none")," style but not all browsers support it\nyet."),l.a.createElement(i.MDXTag,{name:"p",components:t},"React Bootstrap will prevent any ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onClick")," handlers from\nfiring regardless of the rendered element."),l.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"button-loading-state"}},"Button loading state"),l.a.createElement(i.MDXTag,{name:"p",components:t},"When activating an asynchronous action from a button it is a good UX\npattern to give the user feedback as to the loading state, this can\neasily be done by updating your ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Button />"),"s\nprops from a state change like below."),l.a.createElement(u.a,{codeText:v.a}),l.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"checkbox--radio"}},"Checkbox / Radio"),l.a.createElement(i.MDXTag,{name:"p",components:t},"Button's can also be used to style ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"checkbox")," and\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"radio")," form elements. This is helpful when you want a toggle\nbutton that works neatly inside an HTML form."),l.a.createElement(u.a,{codeText:D.a}),l.a.createElement(i.MDXTag,{name:"p",components:t},"The above handles styling, But requires manually controlling the\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"checked")," state for each radio or checkbox in the group."),l.a.createElement(i.MDXTag,{name:"p",components:t},"For a nicer experience with checked state management use the\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<ToggleButtonGroup>")," instead of a ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<ButtonGroup toggle>")," component.\nThe group behaves as a form component, where the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"value")," is an array of the selected\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"value"),"s for a named checkbox group or the single toggled\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"value")," in a similarly named radio group."),l.a.createElement(i.MDXTag,{name:"h4",components:t,props:{id:"uncontrolled"}},"Uncontrolled"),l.a.createElement(u.a,{codeText:X.a}),l.a.createElement(i.MDXTag,{name:"h4",components:t,props:{id:"controlled"}},"Controlled"),l.a.createElement(u.a,{codeText:M.a}),l.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),l.a.createElement(s.a,{metadata:n.data.Button}),l.a.createElement(s.a,{metadata:n.data.ToggleButtonGroup}),l.a.createElement(s.a,{metadata:n.data.ToggleButton}))};var G={}},264:function(e,t,n){var a=n(12).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||n(13)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},270:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.5",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop","ci-lint":'eslint --rule "prettier/prettier: 2"',format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook",dtslint:"dtslint types"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.3.0","react-dom":">=16.3.0"},devDependencies:{"@4c/rollout":"^1.2.0","@babel/cli":"^7.2.0","@babel/core":"^7.2.2","@babel/plugin-proposal-class-properties":"^7.2.1","@babel/plugin-proposal-export-default-from":"^7.2.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@react-bootstrap/babel-preset":"^1.1.2","@react-bootstrap/eslint-config":"^1.1.1","@storybook/react":"^3.4.8","@types/react":"^16.7.13","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.1.0","babel-plugin-transform-react-remove-prop-types":"^0.4.21",chai:"^4.2.0",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.11","cpy-cli":"^2.0.0","create-react-class":"^15.6.3","cross-env":"^5.2.0",dtslint:"^0.4.1",enzyme:"^3.8.0","enzyme-adapter-react-16":"^1.7.1",eslint:"^5.10.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^3.0.0","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.1",husky:"^1.3.0",karma:"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.5","lint-staged":"^8.1.0",lodash:"^4.17.11",mocha:"^5.2.0",prettier:"^1.15.3",react:"^16.6.3","react-dom":"^16.6.3","react-test-renderer":"^16.6.3","release-script":"^1.0.2",sinon:"^7.2.2","sinon-chai":"^3.3.0",typescript:"^3.2.2",webpack:"^4.28.0"},dependencies:{"@babel/runtime":"^7.2.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.6","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^2.0.2","react-overlays":"^1.0.0","react-prop-types":"^0.4.0","react-transition-group":"^2.5.1",uncontrollable:"^6.0.0",warning:"^4.0.1"},release:{publishDir:"lib"}}},271:function(e,t,n){var a=n(116)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},272:function(e,t,n){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},273:function(e,t,n){var a=n(274),o=n(276),r=n(283),l=n(290),i=r(function(e,t){if(null==e)return[];var n=t.length;return n>1&&l(e,t[0],t[1])?t=[]:n>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),o(e,a(t,1),[])});e.exports=i},274:function(e,t,n){var a=n(304),o=n(275);e.exports=function e(t,n,r,l,i){var c=-1,s=t.length;for(r||(r=o),i||(i=[]);++c<s;){var u=t[c];n>0&&r(u)?n>1?e(u,n-1,r,l,i):a(i,u):l||(i[i.length]=u)}return i}},275:function(e,t,n){var a=n(47),o=n(305),r=n(114),l=a?a.isConcatSpreadable:void 0;e.exports=function(e){return r(e)||o(e)||!!(l&&e&&e[l])}},276:function(e,t,n){var a=n(118),o=n(306),r=n(277),l=n(280),i=n(303),c=n(281),s=n(263);e.exports=function(e,t,n){var u=-1;t=a(t.length?t:[s],i(o));var p=r(e,function(e,n,o){return{criteria:a(t,function(t){return t(e)}),index:++u,value:e}});return l(p,function(e,t){return c(e,t,n)})}},277:function(e,t,n){var a=n(278),o=n(262);e.exports=function(e,t){var n=-1,r=o(e)?Array(e.length):[];return a(e,function(e,a,o){r[++n]=t(e,a,o)}),r}},278:function(e,t,n){var a=n(308),o=n(279)(a);e.exports=o},279:function(e,t,n){var a=n(262);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!a(n))return e(n,o);for(var r=n.length,l=t?r:-1,i=Object(n);(t?l--:++l<r)&&!1!==o(i[l],l,i););return n}}},280:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},281:function(e,t,n){var a=n(282);e.exports=function(e,t,n){for(var o=-1,r=e.criteria,l=t.criteria,i=r.length,c=n.length;++o<i;){var s=a(r[o],l[o]);if(s)return o>=c?s:s*("desc"==n[o]?-1:1)}return e.index-t.index}},282:function(e,t,n){var a=n(115);e.exports=function(e,t){if(e!==t){var n=void 0!==e,o=null===e,r=e==e,l=a(e),i=void 0!==t,c=null===t,s=t==t,u=a(t);if(!c&&!u&&!l&&e>t||l&&i&&s&&!c&&!u||o&&i&&s||!n&&s||!r)return 1;if(!o&&!l&&!u&&e<t||u&&n&&r&&!o&&!l||c&&n&&r||!i&&r||!s)return-1}return 0}},283:function(e,t,n){var a=n(263),o=n(284),r=n(286);e.exports=function(e,t){return r(o(e,t,a),e+"")}},284:function(e,t,n){var a=n(285),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var r=arguments,l=-1,i=o(r.length-t,0),c=Array(i);++l<i;)c[l]=r[t+l];l=-1;for(var s=Array(t+1);++l<t;)s[l]=r[l];return s[t]=n(c),a(e,this,s)}}},285:function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},286:function(e,t,n){var a=n(287),o=n(289)(a);e.exports=o},287:function(e,t,n){var a=n(288),o=n(311),r=n(263),l=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:a(t),writable:!0})}:r;e.exports=l},288:function(e,t){e.exports=function(e){return function(){return e}}},289:function(e,t){var n=800,a=16,o=Date.now;e.exports=function(e){var t=0,r=0;return function(){var l=o(),i=a-(l-r);if(r=l,i>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},290:function(e,t,n){var a=n(302),o=n(262),r=n(307),l=n(299);e.exports=function(e,t,n){if(!l(n))return!1;var i=typeof t;return!!("number"==i?o(n)&&r(t,n.length):"string"==i&&t in n)&&a(n[t],e)}},291:function(e,t,n){e.exports={code:"PropTable-Code-module--code--FStF3"}},292:function(e,t,n){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},293:function(e,t,n){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},294:function(e,t,n){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},295:function(e,t,n){"use strict";n(117),n(264);var a=n(271),o=n.n(a),r=n(0),l=n.n(r),i=n(28),c=n.n(i),s=n(49),u=n(79),p=n(300),m=n(301),d=n(270),g=c()("a",null,"Link",n(272),"link","link"),b=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+d.version+"/src/"+t+".js";return l.a.createElement(p.a,{overlay:l.a.createElement(m.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(g,{href:n,className:"js-search-exclude"},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},f=(n(78),n(5)),h=n.n(f),v=(n(48),n(273)),y=n.n(v),B=n(119),T=n.n(B),E=n(1),x=n.n(E),k=n(309),w=n(310),D=c()("code",null,"Code",n(291),"code","code"),C=c()("div",null,"PropDescription",n(292),"prop-description","propDescription");function M(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function N(e){return"func"===e?"function":"bool"===e?"boolean":e}var X=function(e){function t(){return e.apply(this,arguments)||this}h()(t,e);var n=t.prototype;return n.getType=function(e){var t=this,n=e.type||{},a=N(n.name),o=e.doclets||{};switch(a){case"object":return a;case"union":return n.value.reduce(function(e,n,a,o){var r=t.getType({type:n});return l.a.isValidElement(r)&&(r=l.a.cloneElement(r,{key:a})),e=e.concat(r),a===o.length-1?e:e.concat(" | ")},[]);case"array":var r=this.getType({type:n.value});return l.a.createElement("span",null,"array<",r,">");case"enum":return this.renderEnum(n);case"custom":return M(o.type||n.raw);default:return a}},n._renderRows=function(e){var t=this;return y()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var n=e.name,a=e.description,o=e.doclets,r=a&&a.childMarkdownRemark.html;return l.a.createElement("tr",{key:n,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},n," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,o.deprecated&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+o.deprecated+" ")),t.renderControllableNote(e,n),l.a.createElement(C,{dangerouslySetInnerHTML:{__html:r}})))})},n.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},n=N(t.name),a=e.doclets||{};return"custom"===n?M(a.type||t.raw):n}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(D,null,t))},n.renderControllableNote=function(e,t){var n=e.doclets.controllable,a="function"===N(e.type.name);if(!n)return!1;var o=a?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,n)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(D,null,n),", initial prop:"," ",l.a.createElement(D,null,"default"+T()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},o)))},n.renderEnum=function(e){var t=e.value||[];if(!Array.isArray(t))return t;var n=[];return t.forEach(function(e,t){var a=e.value;t>0&&n.push(l.a.createElement("span",{key:t+"c"}," | ")),n.push(l.a.createElement("code",{key:t},a))}),l.a.createElement("span",null,n)},n.renderRequiredBadge=function(e){return e.required?l.a.createElement(k.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(w.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);X.propTypes={metadata:x.a.object.isRequired};var L=X,z=c()("span",null,"Keyword",n(293),"keyword","keyword"),R=c()("code",null,"Code",n(294),"code","code"),G=function(e){var t=e.name;return l.a.createElement(R,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(z,null,"import")," ",t," ",l.a.createElement(z,null,"from")," 'react-bootstrap/",t,"'")};function S(e){var t=e.heading,n=e.metadata,a=e.exportedBy,r=n.description,i=n.displayName,c=r&&r.childMarkdownRemark.html,p=i;a&&(i=a.displayName+"."+i.split(a.displayName).pop(),p=a.displayName);var m=o()(i)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.default,{h:t||"3",id:m,title:i,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(u.a,{target:m},l.a.createElement("span",{className:" text-monospace"},i)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(b,{component:i}))),l.a.createElement(G,{name:p}),c&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),l.a.createElement(L,{metadata:n}))}S.propTypes={};t.a=S}}]);
//# sourceMappingURL=component---src-pages-components-buttons-mdx-8af26f12800270335e16.js.map