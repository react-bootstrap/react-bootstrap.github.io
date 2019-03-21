(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{261:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=a(282),l=a(302),c=a(296),u=a(17),d=(a(433),a(309)),p=a(350),m=Object(u.styled)(c.a,"MastHead",a(925),"mast-head","mastHead"),b=Object(u.styled)("div","Content",a(927),"content","content"),h=Object(u.styled)("h1","Heading",a(929),"heading","heading"),g=Object(u.styled)("p","SubHeading",a(931),"sub-heading","subHeading"),f=Object(u.styled)(i.a,"BrandButton",a(933),"brand-button","brandButton"),y=Object(u.styled)("div","FeatureCard",a(935),"feature-card","featureCard");t.default=Object(p.a)(function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("main",{className:"bs-docs-masthead",id:"content",role:"main"},s.a.createElement(m,{fluid:!0},s.a.createElement(b,null,s.a.createElement(h,null,"React Bootstrap"),s.a.createElement(g,null,"The most popular front-end framework",s.a.createElement("br",null),s.a.createElement("strong",null,"Rebuilt")," for React."),s.a.createElement("div",null,s.a.createElement(f,{size:"lg",variant:"brand",className:"mr-3 px-5",href:"/getting-started"},"Get started"),s.a.createElement(i.a,{size:"lg",href:"/components/alerts",className:"px-5",variant:"outline-light"},"Components")),s.a.createElement("div",{className:"text-muted mt-3"},"Current version: ",d.version)))),s.a.createElement(l.a,{className:"d-flex justify-content-between"},s.a.createElement(y,null,s.a.createElement("h2",null,"Rebuilt with React"),s.a.createElement("p",null,"React bootstrap replaces the Bootstrap javascript. Each component has been built from stratch as a true React components, without uneeded dependencies like jQuery."),s.a.createElement("p",null,"As one of the oldest React libraries, react bootstrap as evolved and grown along-side React, making it an exellent choice as your UI foundation.")),s.a.createElement(y,null,s.a.createElement("h2",null,"Bootstrap at it's core"),s.a.createElement("p",null,"Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the worlds largest UI ecosystem."),s.a.createElement("p",null,"By relying entirely on the Bootstrap stylesheet, React bootstrap, just works with the thousands of bootstrap themes you already love."),s.a.createElement("p",null)),s.a.createElement(y,null,s.a.createElement("h2",null,"Accessible by default"),s.a.createElement("p",null,"The React component model gives us more control over form and function of each component."),s.a.createElement("p",null,"Each component is implemented with accessibilty in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap."))))},t}(s.a.Component))},296:function(e,t,a){"use strict";var n=a(270),r=a(271),o=a(272),s=a(0),i=a.n(s),l=a(269),c=a.n(l),u=a(273),d=a.n(u),p=a(275),m=a.n(p),b=a(274),h={as:m.a,fluid:c.a.bool,bsPrefix:c.a.string},g=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.as,o=t.className,s=t.fluid,l=t.bsPrefix,c=Object(r.a)(t,["as","className","fluid","bsPrefix"]),u=((e={})[l]=!0,e[l+"-fluid"]=s,e);return i.a.createElement(a,Object(n.a)({},c,{className:d()(o,u),__source:{fileName:"/Users/jason/src/react-bootstrap/src/Jumbotron.js",lineNumber:28},__self:this}))},t}(i.a.Component);g.propTypes=h,g.defaultProps={as:"div",fluid:!1},t.a=Object(b.a)(g,"jumbotron")},309:function(e){e.exports={name:"react-bootstrap",version:"0.32.1-docs.0",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js","jsnext:main":"es/index.js",module:"es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",start:"yarn --cwd www run develop","ci-lint":"eslint --rule 'prettier/prettier: 2'",format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"npm run build-docs && rollout",tdd:"karma start",test:"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --compilers js:@babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:"^0.14.9 || >=15.3.0","react-dom":"^0.14.9 || >=15.3.0"},devDependencies:{"@4c/rollout":"^1.1.0","@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@storybook/react":"^3.4.8","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.0.1",chai:"^4.1.2",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.2","create-react-class":"^15.6.3","cross-env":"^5.2.0",enzyme:"^3.6.0","enzyme-adapter-react-16":"^1.5.0",eslint:"^5.5.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.0",husky:"^0.14.3",karma:"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.4","lint-staged":"^7.2.0",lodash:"^4.17.10",mocha:"^5.2.0",prettier:"~1.13.7",react:"^16.5.0","react-dom":"^16.5.0","react-test-renderer":"^16.5.0","release-script":"^1.0.2",sinon:"^6.2.0","sinon-chai":"^3.2.0",webpack:"^4.17.2"},dependencies:{"@babel/runtime":"^7.0.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.2.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.3","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^1.2.1","react-overlays":"^1.0.0-beta.17","react-prop-types":"^0.4.0","react-transition-group":"^2.4.0",uncontrollable:"^6.0.0",warning:"^4.0.1"},"release-script":{bowerRepo:"git@github.com:react-bootstrap/react-bootstrap-bower.git",docsRepo:"git@github.com:react-bootstrap/react-bootstrap.github.io.git",docsRoot:"www/public/"}}},350:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a(388);var n=a(0),r=a.n(n),o=a(352),s=a(389);function i(e){return function(t){var a=t.location.pathname,n=s.a;return(a.startsWith("/getting-started")||a.startsWith("/layout")||a.startsWith("/components")||a.startsWith("/utilities"))&&(n=o.a),r.a.createElement(n,{location:t.location},r.a.createElement(e,t))}}},925:function(e,t,a){e.exports={mastHead:"index-MastHead-module--mast-head--1Njqj"}},927:function(e,t,a){e.exports={content:"index-Content-module--content---IH1T"}},929:function(e,t,a){e.exports={heading:"index-Heading-module--heading--2gtPj"}},931:function(e,t,a){e.exports={subHeading:"index-SubHeading-module--sub-heading--n4XOT lead"}},933:function(e,t,a){e.exports={brandButton:"index-BrandButton-module--brand-button--3mMb8",focus:"index-BrandButton-module--focus--j1D5K",disabled:"index-BrandButton-module--disabled--3vLzP",active:"index-BrandButton-module--active--1iX6b",show:"index-BrandButton-module--show--134sZ",dropdownToggle:"index-BrandButton-module--dropdown-toggle---Z_bV"}},935:function(e,t,a){e.exports={featureCard:"index-FeatureCard-module--feature-card--3ynRH px-4 py-3"}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWluZGV4LWpzLTFjNjYzY2FjZThlZTdiNmJjODc4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9Db250YWluZXInO1xuaW1wb3J0IEp1bWJvdHJvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0p1bWJvdHJvbic7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdjc3MtbGl0ZXJhbC1sb2FkZXIvc3R5bGVkJztcbmltcG9ydCB3aXRoUHJvcHMgZnJvbSAncmVjb21wb3NlL3dpdGhQcm9wcyc7XG5pbXBvcnQgcGtnIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uL3dpdGhMYXlvdXQnO1xuXG5jb25zdCBNYXN0SGVhZCA9IHN0eWxlZChKdW1ib3Ryb24sIFwiTWFzdEhlYWRcIiwgcmVxdWlyZShcIi4vaW5kZXgtTWFzdEhlYWQubW9kdWxlLnNjc3NcIiksIFwibWFzdC1oZWFkXCIsIFwibWFzdEhlYWRcIik7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQoJ2RpdicsIFwiQ29udGVudFwiLCByZXF1aXJlKFwiLi9pbmRleC1Db250ZW50Lm1vZHVsZS5zY3NzXCIpLCBcImNvbnRlbnRcIiwgXCJjb250ZW50XCIpO1xuXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkKCdoMScsIFwiSGVhZGluZ1wiLCByZXF1aXJlKFwiLi9pbmRleC1IZWFkaW5nLm1vZHVsZS5zY3NzXCIpLCBcImhlYWRpbmdcIiwgXCJoZWFkaW5nXCIpO1xuXG5jb25zdCBTdWJIZWFkaW5nID0gc3R5bGVkKCdwJywgXCJTdWJIZWFkaW5nXCIsIHJlcXVpcmUoXCIuL2luZGV4LVN1YkhlYWRpbmcubW9kdWxlLnNjc3NcIiksIFwic3ViLWhlYWRpbmdcIiwgXCJzdWJIZWFkaW5nXCIpO1xuXG5jb25zdCBCcmFuZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24sIFwiQnJhbmRCdXR0b25cIiwgcmVxdWlyZShcIi4vaW5kZXgtQnJhbmRCdXR0b24ubW9kdWxlLnNjc3NcIiksIFwiYnJhbmQtYnV0dG9uXCIsIFwiYnJhbmRCdXR0b25cIik7XG5cbmNvbnN0IEZlYXR1cmVDYXJkID0gc3R5bGVkKCdkaXYnLCBcIkZlYXR1cmVDYXJkXCIsIHJlcXVpcmUoXCIuL2luZGV4LUZlYXR1cmVDYXJkLm1vZHVsZS5zY3NzXCIpLCBcImZlYXR1cmUtY2FyZFwiLCBcImZlYXR1cmVDYXJkXCIpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KFxuICBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJicy1kb2NzLW1hc3RoZWFkXCIgaWQ9XCJjb250ZW50XCIgcm9sZT1cIm1haW5cIj5cbiAgICAgICAgICAgIDxNYXN0SGVhZCBmbHVpZD5cbiAgICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmc+UmVhY3QgQm9vdHN0cmFwPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgVGhlIG1vc3QgcG9wdWxhciBmcm9udC1lbmQgZnJhbWV3b3JrXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UmVidWlsdDwvc3Ryb25nPiBmb3IgUmVhY3QuXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8QnJhbmRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJyYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMyBweC01XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9nZXR0aW5nLXN0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZFxuICAgICAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb21wb25lbnRzL2FsZXJ0c1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTVcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1saWdodFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICBDdXJyZW50IHZlcnNpb246IHtwa2cudmVyc2lvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgPC9NYXN0SGVhZD5cbiAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPEZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8aDI+UmVidWlsdCB3aXRoIFJlYWN0PC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUmVhY3QgYm9vdHN0cmFwIHJlcGxhY2VzIHRoZSBCb290c3RyYXAgamF2YXNjcmlwdC4gRWFjaFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCBoYXMgYmVlbiBidWlsdCBmcm9tIHN0cmF0Y2ggYXMgYSB0cnVlIFJlYWN0XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cywgd2l0aG91dCB1bmVlZGVkIGRlcGVuZGVuY2llcyBsaWtlIGpRdWVyeS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBcyBvbmUgb2YgdGhlIG9sZGVzdCBSZWFjdCBsaWJyYXJpZXMsIHJlYWN0IGJvb3RzdHJhcCBhcyBldm9sdmVkXG4gICAgICAgICAgICAgICAgYW5kIGdyb3duIGFsb25nLXNpZGUgUmVhY3QsIG1ha2luZyBpdCBhbiBleGVsbGVudCBjaG9pY2UgYXMgeW91clxuICAgICAgICAgICAgICAgIFVJIGZvdW5kYXRpb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG5cbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPGgyPkJvb3RzdHJhcCBhdCBpdCdzIGNvcmU8L2gyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBCdWlsdCB3aXRoIGNvbXBhdGliaWxpdHkgaW4gbWluZCwgd2UgZW1icmFjZSBvdXIgYm9vdHN0cmFwIGNvcmVcbiAgICAgICAgICAgICAgICBhbmQgc3RyaXZlIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGUgd29ybGRzIGxhcmdlc3QgVUlcbiAgICAgICAgICAgICAgICBlY29zeXN0ZW0uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQnkgcmVseWluZyBlbnRpcmVseSBvbiB0aGUgQm9vdHN0cmFwIHN0eWxlc2hlZXQsIFJlYWN0XG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwLCBqdXN0IHdvcmtzIHdpdGggdGhlIHRob3VzYW5kcyBvZiBib290c3RyYXAgdGhlbWVzIHlvdVxuICAgICAgICAgICAgICAgIGFscmVhZHkgbG92ZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCAvPlxuICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cblxuICAgICAgICAgICAgPEZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8aDI+QWNjZXNzaWJsZSBieSBkZWZhdWx0PC9oMj5cblxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGUgUmVhY3QgY29tcG9uZW50IG1vZGVsIGdpdmVzIHVzIG1vcmUgY29udHJvbCBvdmVyIGZvcm0gYW5kXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb2YgZWFjaCBjb21wb25lbnQuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRWFjaCBjb21wb25lbnQgaXMgaW1wbGVtZW50ZWQgd2l0aCBhY2Nlc3NpYmlsdHkgaW4gbWluZC4gVGhlXG4gICAgICAgICAgICAgICAgcmVzdWx0IGlzIGEgc2V0IG9mIGFjY2Vzc2libGUtYnktZGVmYXVsdCBjb21wb25lbnRzLCBvdmVyIHdoYXRcbiAgICAgICAgICAgICAgICBpcyBwb3NzaWJsZSBmcm9tIHBsYWluIEJvb3RzdHJhcC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfSxcbik7XG4iXSwibWFwcGluZ3MiOiJBQVVBIiwic291cmNlUm9vdCI6IiJ9