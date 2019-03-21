(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{262:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return y});var a=t(0),r=t.n(a),i=t(302),l=t(121),o=t(319),s=t(942),u=t.n(s),c=t(943),d=t.n(c),m=t(944),p=t.n(m),f=t(945),h=t.n(f),b=t(946),g=t.n(b),v=t(304);n.default=Object(v.a)(function(e){var n=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.default,{h:"1",id:"media-objects"},"Media objects"),r.a.createElement("p",null,"The media object helps build complex and repetitive components (e.g. blog comments, tweets, the like and more) where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox. Below is an example of a single media object. Only two classes are required—the wrapping ",r.a.createElement("code",null,"Media")," and the ",r.a.createElement("code",null,"Media.Body")," around your content. Optional padding and margin can be controlled through spacing utilities."),r.a.createElement(o.a,{codeText:d.a}),r.a.createElement(l.default,{h:"2",id:"media-nesting"},"Media Nesting"),r.a.createElement("p",null,"Media objects can be infinitely nested, though we suggest you stop at some point. Place nested ",r.a.createElement("code",null,"Media")," within the"," ",r.a.createElement("code",null,"Media.Body")," of a parent media object."),r.a.createElement(o.a,{codeText:h.a}),r.a.createElement(l.default,{h:"2",id:"media-alignment"},"Media Alignment"),r.a.createElement("p",null,"Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your ",r.a.createElement("code",null,"Media.Body")," content."),r.a.createElement(o.a,{codeText:u.a}),r.a.createElement(l.default,{h:"2",id:"media-order"},"Media Order"),r.a.createElement("p",null,"Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the"," ",r.a.createElement("code",null,"order")," property (to an integer of your choosing)."),r.a.createElement(o.a,{codeText:g.a}),r.a.createElement(l.default,{h:"2",id:"media-list"},"Media list"),r.a.createElement("p",null,"Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your ",r.a.createElement("code",null,"ul")," or"," ",r.a.createElement("code",null,"ol")," , add the .list-unstyled to remove any browser default list styles, use ",r.a.createElement("code",null,'<Media as="li">')," to render as a list item. As always, use spacing utilities wherever needed to fine tune."),r.a.createElement(o.a,{codeText:p.a}),r.a.createElement(l.default,{h:"2",id:"media-props"},"Props"),r.a.createElement(i.a,{metadata:n.Media}))});var y="511279612"},270:function(e,n,t){var a=t(12).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||t(13)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},277:function(e){e.exports={name:"react-bootstrap",version:"0.32.4",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js","jsnext:main":"es/index.js",module:"es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",start:"yarn --cwd www run develop","ci-lint":"eslint --rule 'prettier/prettier: 2'",format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"npm run build-docs && rollout",tdd:"karma start",test:"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --compilers js:@babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:"^0.14.9 || >=15.3.0","react-dom":"^0.14.9 || >=15.3.0"},devDependencies:{"@4c/rollout":"^1.1.0","@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@storybook/react":"^3.4.8","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.0.1",chai:"^4.1.2",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.2","create-react-class":"^15.6.3","cross-env":"^5.2.0",enzyme:"^3.6.0","enzyme-adapter-react-16":"^1.5.0",eslint:"^5.5.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.0",husky:"^0.14.3",karma:"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.4","lint-staged":"^7.2.0",lodash:"^4.17.10",mocha:"^5.2.0",prettier:"~1.13.7",react:"^16.5.0","react-dom":"^16.5.0","react-test-renderer":"^16.5.0","release-script":"^1.0.2",sinon:"^6.2.0","sinon-chai":"^3.2.0",webpack:"^4.17.2"},dependencies:{"@babel/runtime":"^7.0.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.2.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.3","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^1.2.1","react-overlays":"^1.0.0-beta.17","react-prop-types":"^0.4.0","react-transition-group":"^2.4.0",uncontrollable:"^6.0.0",warning:"^4.0.1"},"release-script":{bowerRepo:"git@github.com:react-bootstrap/react-bootstrap-bower.git",docsRepo:"git@github.com:react-bootstrap/react-bootstrap.github.io.git",docsRoot:"www/public/"}}},278:function(e,n,t){var a=t(116)(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()});e.exports=a},279:function(e,n,t){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},281:function(e,n,t){"use strict";t(282)("trim",function(e){return function(){return e(this,3)}})},282:function(e,n,t){var a=t(5),r=t(28),i=t(10),l=t(283),o="["+l+"]",s=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(e,n,t){var r={},o=i(function(){return!!l[e]()||"​"!="​"[e]()}),s=r[e]=o?n(d):l[e];t&&(r[t]=s),a(a.P+a.F*o,"String",r)},d=c.trim=function(e,n){return e=String(r(e)),1&n&&(e=e.replace(s,"")),2&n&&(e=e.replace(u,"")),e};e.exports=c},283:function(e,n){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},284:function(e,n,t){var a=t(316),r=t(285),i=t(292),l=t(293),o=i(function(e,n){if(null==e)return[];var t=n.length;return t>1&&l(e,n[0],n[1])?n=[]:t>2&&l(n[0],n[1],n[2])&&(n=[n[0]]),r(e,a(n,1),[])});e.exports=o},285:function(e,n,t){var a=t(115),r=t(309),i=t(286),l=t(289),o=t(311),s=t(290),u=t(276);e.exports=function(e,n,t){var c=-1;n=a(n.length?n:[u],o(r));var d=i(e,function(e,t,r){return{criteria:a(n,function(n){return n(e)}),index:++c,value:e}});return l(d,function(e,n){return s(e,n,t)})}},286:function(e,n,t){var a=t(287),r=t(269);e.exports=function(e,n){var t=-1,i=r(e)?Array(e.length):[];return a(e,function(e,a,r){i[++t]=n(e,a,r)}),i}},287:function(e,n,t){var a=t(312),r=t(288)(a);e.exports=r},288:function(e,n,t){var a=t(269);e.exports=function(e,n){return function(t,r){if(null==t)return t;if(!a(t))return e(t,r);for(var i=t.length,l=n?i:-1,o=Object(t);(n?l--:++l<i)&&!1!==r(o[l],l,o););return t}}},289:function(e,n){e.exports=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e}},290:function(e,n,t){var a=t(291);e.exports=function(e,n,t){for(var r=-1,i=e.criteria,l=n.criteria,o=i.length,s=t.length;++r<o;){var u=a(i[r],l[r]);if(u)return r>=s?u:u*("desc"==t[r]?-1:1)}return e.index-n.index}},291:function(e,n,t){var a=t(114);e.exports=function(e,n){if(e!==n){var t=void 0!==e,r=null===e,i=e==e,l=a(e),o=void 0!==n,s=null===n,u=n==n,c=a(n);if(!s&&!c&&!l&&e>n||l&&o&&u&&!s&&!c||r&&o&&u||!t&&u||!i)return 1;if(!r&&!l&&!c&&e<n||c&&t&&i&&!r&&!l||s&&t&&i||!o&&i||!u)return-1}return 0}},292:function(e,n,t){var a=t(276),r=t(317),i=t(318);e.exports=function(e,n){return i(r(e,n,a),e+"")}},293:function(e,n,t){var a=t(310),r=t(269),i=t(313),l=t(305);e.exports=function(e,n,t){if(!l(t))return!1;var o=typeof n;return!!("number"==o?r(t)&&i(n,t.length):"string"==o&&n in t)&&a(t[n],e)}},294:function(e,n,t){e.exports={code:"PropTable-Code-module--code--FStF3"}},296:function(e,n,t){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},298:function(e,n,t){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},300:function(e,n,t){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},302:function(e,n,t){"use strict";t(119),t(270);var a=t(278),r=t.n(a),i=t(0),l=t.n(i),o=t(17),s=t(53),u=t(80),c=t(307),d=t(308),m=t(277),p=Object(o.styled)("a","Link",t(279),"link","link"),f=function(e){var n=e.component,t="//github.com/react-bootstrap/react-bootstrap/tree/v"+m.version+"/src/"+n+".js";return l.a.createElement(c.a,{overlay:l.a.createElement(d.a,{id:"view-"+n+"-source-tooltip"},"View source file")},l.a.createElement(p,{href:t},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},h=(t(79),t(118),t(117),t(52),t(78),t(7)),b=t.n(h),g=(t(281),t(29),t(284)),v=t.n(g),y=t(120),E=t.n(y),x=t(2),w=t.n(x),M=t(314),N=t(315),k=Object(o.styled)("code","Code",t(294),"code","code"),j=Object(o.styled)("div","PropDescription",t(296),"prop-description","propDescription");function C(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function B(e){return"func"===e?"function":"bool"===e?"boolean":e}var q=function(e){function n(){return e.apply(this,arguments)||this}b()(n,e);var t=n.prototype;return t.getType=function(e){var n=this,t=e.type||{},a=B(t.name),r=e.doclets||{};switch(a){case"object":return a;case"union":return t.value.reduce(function(e,t,a,r){var i=n.getType({type:t});return l.a.isValidElement(i)&&(i=l.a.cloneElement(i,{key:a})),e=e.concat(i),a===r.length-1?e:e.concat(" | ")},[]);case"array":var i=this.getType({type:t.value});return l.a.createElement("span",null,"array<",i,">");case"enum":return this.renderEnum(t);case"custom":return C(r.type||t.raw);default:return a}},t._renderRows=function(e){var n=this;return v()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var t=e.name,a=e.description,r=e.doclets,i=a&&a.childMarkdownRemark.html;return l.a.createElement("tr",{key:t,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},t," ",n.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,n.getType(e))),l.a.createElement("td",null,n.renderDefaultValue(e)),l.a.createElement("td",null,r.deprecated&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+r.deprecated+" ")),n.renderControllableNote(e,t),l.a.createElement(j,{dangerouslySetInnerHTML:{__html:i}})))})},t.renderDefaultValue=function(e){var n=e.defaultValue&&e.defaultValue.value;return null==n?null:("elementType"===function(e){var n=e.type||{},t=B(n.name),a=e.doclets||{};return"custom"===t?C(a.type||n.raw):t}(e)&&(n="<"+n.replace(/('|")/g,"")+">"),l.a.createElement(k,null,n))},t.renderControllableNote=function(e,n){var t=e.doclets.controllable,a="function"===B(e.type.name);if(!t)return!1;var r=a?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,t)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(k,null,t),", initial prop:"," ",l.a.createElement(k,null,"default"+E()(n)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},r)))},t.renderEnum=function(e){var n=[];return(e.value||[]).forEach(function(e,t){var a=e.value;t>0&&n.push(l.a.createElement("span",{key:t+"c"}," | ")),n.push(l.a.createElement("code",{key:t},a))}),l.a.createElement("span",null,n)},t.renderRequiredBadge=function(e){return e.required?l.a.createElement(M.a,null,"required"):null},t.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(N.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},n}(l.a.Component);q.propTypes={metadata:w.a.object.isRequired};var D=q,T=Object(o.styled)("span","Keyword",t(298),"keyword","keyword"),F=Object(o.styled)("code","Code",t(300),"code","code"),O=function(e){var n=e.name;return l.a.createElement(F,{"aria-label":"Import code for the "+n+" component"},l.a.createElement(T,null,"import")," ",n," ",l.a.createElement(T,null,"from")," ","'react-bootstrap/lib/",n,"'")};function L(e){var n=e.heading,t=e.metadata,a=e.exportedBy,i=t.description,o=t.displayName,c=i&&i.childMarkdownRemark.html,d=o;a&&(o=a.displayName+"."+o.split(a.displayName).pop(),d=a.displayName);var m=r()(o)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.default,{h:n||"3",id:m,title:o,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(u.a,{target:m},l.a.createElement("span",{className:" text-monospace"},o)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(f,{component:o}))),l.a.createElement(O,{name:d}),c&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),l.a.createElement(D,{metadata:t}))}L.propTypes={},n.a=L},304:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t(320);var a=t(0),r=t.n(a),i=t(306),l=t(321);function o(e){return function(n){var t=n.location.pathname,a=l.a;return(t.startsWith("/getting-started")||t.startsWith("/layout")||t.startsWith("/components")||t.startsWith("/utilities"))&&(a=i.a),r.a.createElement(a,{location:n.location},r.a.createElement(e,n))}}},942:function(e,n){e.exports='<>\n  <Media>\n    <img\n      width={64}\n      height={64}\n      className="align-self-start mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>Media Heading</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n\n      <p>\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu\n        leo. Cum sociis natoque penatibus et magnis dis parturient montes,\n        nascetur ridiculus mus.\n      </p>\n    </Media.Body>\n  </Media>\n\n  <Media>\n    <img\n      width={64}\n      height={64}\n      className="align-self-center mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>Media Heading</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n\n      <p>\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu\n        leo. Cum sociis natoque penatibus et magnis dis parturient montes,\n        nascetur ridiculus mus.\n      </p>\n    </Media.Body>\n  </Media>\n\n  <Media>\n    <img\n      width={64}\n      height={64}\n      className="align-self-end mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>Media Heading</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n\n      <p className="mb-0">\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu\n        leo. Cum sociis natoque penatibus et magnis dis parturient montes,\n        nascetur ridiculus mus.\n      </p>\n    </Media.Body>\n  </Media>\n</>;\n'},943:function(e,n){e.exports='<Media>\n  <img\n    width={64}\n    height={64}\n    className="mr-3"\n    src="holder.js/64x64"\n    alt="Generic placeholder"\n  />\n  <Media.Body>\n    <h5>Media Heading</h5>\n    <p>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n      Donec lacinia congue felis in faucibus.\n    </p>\n  </Media.Body>\n</Media>;\n'},944:function(e,n){e.exports='<ul className="list-unstyled">\n  <Media as="li">\n    <img\n      width={64}\n      height={64}\n      className="mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>List-based media object</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n    </Media.Body>\n  </Media>\n\n  <Media as="li">\n    <img\n      width={64}\n      height={64}\n      className="mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>List-based media object</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n    </Media.Body>\n  </Media>\n\n  <Media as="li">\n    <img\n      width={64}\n      height={64}\n      className="mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>List-based media object</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n    </Media.Body>\n  </Media>\n</ul>;\n'},945:function(e,n){e.exports='<Media>\n  <img\n    width={64}\n    height={64}\n    className="mr-3"\n    src="holder.js/64x64"\n    alt="Generic placeholder"\n  />\n  <Media.Body>\n    <h5>Media Heading</h5>\n    <p>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n      Donec lacinia congue felis in faucibus.\n    </p>\n\n    <Media>\n      <img\n        width={64}\n        height={64}\n        className="mr-3"\n        src="holder.js/64x64"\n        alt="Generic placeholder"\n      />\n      <Media.Body>\n        <h5>Media Heading</h5>\n        <p>\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus\n          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in\n          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi\n          vulputate fringilla. Donec lacinia congue felis in faucibus.\n        </p>\n      </Media.Body>\n    </Media>\n  </Media.Body>\n</Media>;\n'},946:function(e,n){e.exports='<Media>\n  <Media.Body>\n    <h5>Media Heading</h5>\n    <p>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n      Donec lacinia congue felis in faucibus.\n    </p>\n  </Media.Body>\n  <img\n    width={64}\n    height={64}\n    className="ml-3"\n    src="holder.js/64x64"\n    alt="Generic placeholder"\n  />\n</Media>;\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWxheW91dC1tZWRpYS1qcy00ZTM0Mzg5OTZmMGI3ODMzODBhNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9sYXlvdXQvbWVkaWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29tcG9uZW50QXBpIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcG9uZW50QXBpJztcbmltcG9ydCBMaW5rZWRIZWFkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlua2VkSGVhZGluZyc7XG5pbXBvcnQgUmVhY3RQbGF5Z3JvdW5kIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVhY3RQbGF5Z3JvdW5kJztcbmltcG9ydCBBbGlnbm1lbnQgZnJvbSAnLi4vLi4vZXhhbXBsZXMvTWVkaWEvQWxpZ25tZW50JztcbmltcG9ydCBCYXNpYyBmcm9tICcuLi8uLi9leGFtcGxlcy9NZWRpYS9CYXNpYyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi8uLi9leGFtcGxlcy9NZWRpYS9MaXN0JztcbmltcG9ydCBOZXN0aW5nIGZyb20gJy4uLy4uL2V4YW1wbGVzL01lZGlhL05lc3RpbmcnO1xuaW1wb3J0IE9yZGVyIGZyb20gJy4uLy4uL2V4YW1wbGVzL01lZGlhL09yZGVyJztcbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uLy4uL3dpdGhMYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KGZ1bmN0aW9uIE1lZGlhU2VjdGlvbih7IGRhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMVwiIGlkPVwibWVkaWEtb2JqZWN0c1wiPlxuICAgICAgICBNZWRpYSBvYmplY3RzXG4gICAgICA8L0xpbmtlZEhlYWRpbmc+XG5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgbWVkaWEgb2JqZWN0IGhlbHBzIGJ1aWxkIGNvbXBsZXggYW5kIHJlcGV0aXRpdmUgY29tcG9uZW50cyAoZS5nLlxuICAgICAgICBibG9nIGNvbW1lbnRzLCB0d2VldHMsIHRoZSBsaWtlIGFuZCBtb3JlKSB3aGVyZSBzb21lIG1lZGlhIGlzIHBvc2l0aW9uZWRcbiAgICAgICAgYWxvbmdzaWRlIGNvbnRlbnQgdGhhdCBkb2VzbuKAmXQgd3JhcCBhcm91bmQgc2FpZCBtZWRpYS4gUGx1cywgaXQgZG9lc1xuICAgICAgICB0aGlzIHdpdGggb25seSB0d28gcmVxdWlyZWQgY2xhc3NlcyB0aGFua3MgdG8gZmxleGJveC4gQmVsb3cgaXMgYW5cbiAgICAgICAgZXhhbXBsZSBvZiBhIHNpbmdsZSBtZWRpYSBvYmplY3QuIE9ubHkgdHdvIGNsYXNzZXMgYXJlIHJlcXVpcmVk4oCUdGhlXG4gICAgICAgIHdyYXBwaW5nIDxjb2RlPk1lZGlhPC9jb2RlPiBhbmQgdGhlIDxjb2RlPk1lZGlhLkJvZHk8L2NvZGU+IGFyb3VuZCB5b3VyXG4gICAgICAgIGNvbnRlbnQuIE9wdGlvbmFsIHBhZGRpbmcgYW5kIG1hcmdpbiBjYW4gYmUgY29udHJvbGxlZCB0aHJvdWdoIHNwYWNpbmdcbiAgICAgICAgdXRpbGl0aWVzLlxuICAgICAgPC9wPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZCBjb2RlVGV4dD17QmFzaWN9IC8+XG5cbiAgICAgIDxMaW5rZWRIZWFkaW5nIGg9XCIyXCIgaWQ9XCJtZWRpYS1uZXN0aW5nXCI+XG4gICAgICAgIE1lZGlhIE5lc3RpbmdcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cblxuICAgICAgPHA+XG4gICAgICAgIE1lZGlhIG9iamVjdHMgY2FuIGJlIGluZmluaXRlbHkgbmVzdGVkLCB0aG91Z2ggd2Ugc3VnZ2VzdCB5b3Ugc3RvcCBhdFxuICAgICAgICBzb21lIHBvaW50LiBQbGFjZSBuZXN0ZWQgPGNvZGU+TWVkaWE8L2NvZGU+IHdpdGhpbiB0aGV7JyAnfVxuICAgICAgICA8Y29kZT5NZWRpYS5Cb2R5PC9jb2RlPiBvZiBhIHBhcmVudCBtZWRpYSBvYmplY3QuXG4gICAgICA8L3A+XG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtOZXN0aW5nfSAvPlxuXG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwibWVkaWEtYWxpZ25tZW50XCI+XG4gICAgICAgIE1lZGlhIEFsaWdubWVudFxuICAgICAgPC9MaW5rZWRIZWFkaW5nPlxuXG4gICAgICA8cD5cbiAgICAgICAgTWVkaWEgaW4gYSBtZWRpYSBvYmplY3QgY2FuIGJlIGFsaWduZWQgd2l0aCBmbGV4Ym94IHV0aWxpdGllcyB0byB0aGUgdG9wXG4gICAgICAgIChkZWZhdWx0KSwgbWlkZGxlLCBvciBlbmQgb2YgeW91ciA8Y29kZT5NZWRpYS5Cb2R5PC9jb2RlPiBjb250ZW50LlxuICAgICAgPC9wPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZCBjb2RlVGV4dD17QWxpZ25tZW50fSAvPlxuXG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwibWVkaWEtb3JkZXJcIj5cbiAgICAgICAgTWVkaWEgT3JkZXJcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cblxuICAgICAgPHA+XG4gICAgICAgIENoYW5nZSB0aGUgb3JkZXIgb2YgY29udGVudCBpbiBtZWRpYSBvYmplY3RzIGJ5IG1vZGlmeWluZyB0aGUgSFRNTFxuICAgICAgICBpdHNlbGYsIG9yIGJ5IGFkZGluZyBzb21lIGN1c3RvbSBmbGV4Ym94IENTUyB0byBzZXQgdGhleycgJ31cbiAgICAgICAgPGNvZGU+b3JkZXI8L2NvZGU+IHByb3BlcnR5ICh0byBhbiBpbnRlZ2VyIG9mIHlvdXIgY2hvb3NpbmcpLlxuICAgICAgPC9wPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZCBjb2RlVGV4dD17T3JkZXJ9IC8+XG5cbiAgICAgIDxMaW5rZWRIZWFkaW5nIGg9XCIyXCIgaWQ9XCJtZWRpYS1saXN0XCI+XG4gICAgICAgIE1lZGlhIGxpc3RcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cblxuICAgICAgPHA+XG4gICAgICAgIEJlY2F1c2UgdGhlIG1lZGlhIG9iamVjdCBoYXMgc28gZmV3IHN0cnVjdHVyYWwgcmVxdWlyZW1lbnRzLCB5b3UgY2FuXG4gICAgICAgIGFsc28gdXNlIHRoZXNlIGNsYXNzZXMgb24gbGlzdCBIVE1MIGVsZW1lbnRzLiBPbiB5b3VyIDxjb2RlPnVsPC9jb2RlPiBvcnsnICd9XG4gICAgICAgIDxjb2RlPm9sPC9jb2RlPiAsIGFkZCB0aGUgLmxpc3QtdW5zdHlsZWQgdG8gcmVtb3ZlIGFueSBicm93c2VyIGRlZmF1bHRcbiAgICAgICAgbGlzdCBzdHlsZXMsIHVzZSA8Y29kZT57JzxNZWRpYSBhcz1cImxpXCI+J308L2NvZGU+IHRvIHJlbmRlciBhcyBhIGxpc3RcbiAgICAgICAgaXRlbS4gQXMgYWx3YXlzLCB1c2Ugc3BhY2luZyB1dGlsaXRpZXMgd2hlcmV2ZXIgbmVlZGVkIHRvIGZpbmUgdHVuZS5cbiAgICAgIDwvcD5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e0xpc3R9IC8+XG5cbiAgICAgIDxMaW5rZWRIZWFkaW5nIGg9XCIyXCIgaWQ9XCJtZWRpYS1wcm9wc1wiPlxuICAgICAgICBQcm9wc1xuICAgICAgPC9MaW5rZWRIZWFkaW5nPlxuXG4gICAgICA8Q29tcG9uZW50QXBpIG1ldGFkYXRhPXtkYXRhLk1lZGlhfSAvPlxuICAgIDwvPlxuICApO1xufSk7XG5cbmV4cG9ydCBjb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IE1lZGlhUXVlcnkge1xuICAgIE1lZGlhOiBjb21wb25lbnRNZXRhZGF0YShkaXNwbGF5TmFtZTogeyBlcTogXCJNZWRpYVwiIH0pIHtcbiAgICAgIC4uLlByb3BUYWJsZV9tZXRhZGF0YVxuICAgIH1cbiAgfVxuYDtcbiJdLCJtYXBwaW5ncyI6IkFBQ0EiLCJzb3VyY2VSb290IjoiIn0=