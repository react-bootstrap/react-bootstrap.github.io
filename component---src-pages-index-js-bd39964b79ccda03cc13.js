(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{325:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var r=a(20),n=a.n(r),s=a(0),o=a.n(s),l=a(57),c=a(352),i=a(92),u=a(339),p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("main",{className:"bs-docs-masthead",id:"content",role:"main"},o.a.createElement("div",{className:"container"},o.a.createElement("span",{className:"bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"}),o.a.createElement("p",{className:"lead"},"The most popular front-end framework, rebuilt for React."))),o.a.createElement(l.a,null,o.a.createElement(c.a,{bsStyle:"info"},o.a.createElement("p",null,o.a.createElement(i.a,{glyph:"warning-sign"})," React-Bootstrap currently targets Bootstrap v3. We are actively working on Bootstrap v4 support in"," ",o.a.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/pull/2752"},"#2752"),".")),o.a.createElement(c.a,{bsStyle:"warning"},o.a.createElement("p",null,o.a.createElement(i.a,{glyph:"bullhorn"})," We are actively working to reach a 1.0.0 release, and we would love your help to get there."),o.a.createElement("p",null,o.a.createElement(i.a,{glyph:"check"})," Check out the"," ",o.a.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/wiki#100-roadmap"},"1.0.0 roadmap")," ","and"," ",o.a.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/blob/master/CONTRIBUTING.md"},"contributing guidelines")," ","to see where you can help out."),o.a.createElement("p",null,o.a.createElement(i.a,{glyph:"sunglasses"})," A great place to start is any"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/react-bootstrap/react-bootstrap/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22"},"issue")," ","with a ",o.a.createElement(u.a,{bsStyle:"success"},"help-wanted")," label."),o.a.createElement("p",null,o.a.createElement(i.a,{glyph:"ok"})," We are open to pull requests that address bugs, improve documentation, enhance accessibility, add test coverage, or bring us closer to feature parity with"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://getbootstrap.com/"},"Bootstrap"),"."),o.a.createElement("p",null,o.a.createElement(i.a,{glyph:"user"})," We actively seek to invite frequent pull request authors to join the organization."," ",o.a.createElement(i.a,{glyph:"thumbs-up"})))))},t}(o.a.Component)},339:function(e,t,a){"use strict";var r=a(343),n=a.n(r),s=a(3),o=a(5),l=a(6),c=a(4),i=a.n(c),u=a(0),p=a.n(u),b=a(2),m=a(13),h=function(e){function t(){return e.apply(this,arguments)||this}Object(l.a)(t,e);var a=t.prototype;return a.hasContent=function(e){var t=!1;return p.a.Children.forEach(e,function(e){t||(e||0===e)&&(t=!0)}),t},a.render=function(){var e=this.props,t=e.className,a=e.children,r=Object(o.a)(e,["className","children"]),n=Object(b.splitBsProps)(r),l=n[0],c=n[1],u=Object(s.a)({},Object(b.getClassSet)(l),{hidden:!this.hasContent(a)});return p.a.createElement("span",Object(s.a)({},c,{className:i()(t,u),__source:{fileName:"/Users/jason/src/react-bootstrap/src/Label.js",lineNumber:41},__self:this}),a)},t}(p.a.Component);t.a=Object(b.bsClass)("label",Object(b.bsStyles)(n()(m.d).concat([m.e.DEFAULT,m.e.PRIMARY]),m.e.DEFAULT,h))},343:function(e,t,a){e.exports=a(350)},346:function(e,t,a){"use strict";var r=a(6),n=a(1),s=a.n(n),o=a(0),l=a.n(o),c="/Users/jason/src/react-bootstrap/src/CloseButton.js",i={label:s.a.string.isRequired,onClick:s.a.func},u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.label,a=e.onClick;return l.a.createElement("button",{type:"button",className:"close",onClick:a,__source:{fileName:c,lineNumber:17},__self:this},l.a.createElement("span",{"aria-hidden":"true",__source:{fileName:c,lineNumber:18},__self:this},"×"),l.a.createElement("span",{className:"sr-only",__source:{fileName:c,lineNumber:19},__self:this},t))},t}(l.a.Component);u.propTypes=i,u.defaultProps={label:"Close"},t.a=u},350:function(e,t,a){a(351),e.exports=a(23).Object.values},351:function(e,t,a){var r=a(32),n=a(153)(!1);r(r.S,"Object",{values:function(e){return n(e)}})},352:function(e,t,a){"use strict";var r=a(343),n=a.n(r),s=a(3),o=a(5),l=a(6),c=a(4),i=a.n(c),u=a(0),p=a.n(u),b=a(1),m=a.n(b),h=a(2),f=a(13),d=a(346),E="/Users/jason/src/react-bootstrap/src/Alert.js",g={onDismiss:m.a.func,closeLabel:m.a.string},y=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.onDismiss,r=t.closeLabel,n=t.className,l=t.children,c=Object(o.a)(t,["onDismiss","closeLabel","className","children"]),u=Object(h.splitBsProps)(c),b=u[0],m=u[1],f=!!a,g=Object(s.a)({},Object(h.getClassSet)(b),((e={})[Object(h.prefix)(b,"dismissable")]=f,e));return p.a.createElement("div",Object(s.a)({},m,{role:"alert",className:i()(n,g),__source:{fileName:E,lineNumber:36},__self:this}),f&&p.a.createElement(d.a,{onClick:a,label:r,__source:{fileName:E,lineNumber:41},__self:this}),l)},t}(p.a.Component);y.propTypes=g,y.defaultProps={closeLabel:"Close alert"},t.a=Object(h.bsStyles)(n()(f.d),f.d.INFO,Object(h.bsClass)("alert",y))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWluZGV4LWpzLWJkMzk5NjRiNzljY2RhMDNjYzEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBHcmlkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvR3JpZCc7XG5pbXBvcnQgQWxlcnQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9BbGVydCc7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uJztcbmltcG9ydCBMYWJlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0xhYmVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJzLWRvY3MtbWFzdGhlYWRcIiBpZD1cImNvbnRlbnRcIiByb2xlPVwibWFpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicy1kb2NzLWJvb3RpY29uIGJzLWRvY3MtYm9vdGljb24tbGcgYnMtZG9jcy1ib290aWNvbi1vdXRsaW5lXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cbiAgICAgICAgICAgICAgVGhlIG1vc3QgcG9wdWxhciBmcm9udC1lbmQgZnJhbWV3b3JrLCByZWJ1aWx0IGZvciBSZWFjdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxBbGVydCBic1N0eWxlPVwiaW5mb1wiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJ3YXJuaW5nLXNpZ25cIiAvPiBSZWFjdC1Cb290c3RyYXAgY3VycmVudGx5XG4gICAgICAgICAgICAgIHRhcmdldHMgQm9vdHN0cmFwIHYzLiBXZSBhcmUgYWN0aXZlbHkgd29ya2luZyBvbiBCb290c3RyYXAgdjRcbiAgICAgICAgICAgICAgc3VwcG9ydCBpbnsnICd9XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9wdWxsLzI3NTJcIj5cbiAgICAgICAgICAgICAgICAjMjc1MlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgIDxBbGVydCBic1N0eWxlPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJidWxsaG9yblwiIC8+IFdlIGFyZSBhY3RpdmVseSB3b3JraW5nIHRvIHJlYWNoIGFcbiAgICAgICAgICAgICAgMS4wLjAgcmVsZWFzZSwgYW5kIHdlIHdvdWxkIGxvdmUgeW91ciBoZWxwIHRvIGdldCB0aGVyZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8R2x5cGhpY29uIGdseXBoPVwiY2hlY2tcIiAvPiBDaGVjayBvdXQgdGhleycgJ31cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL3dpa2kjMTAwLXJvYWRtYXBcIj5cbiAgICAgICAgICAgICAgICAxLjAuMCByb2FkbWFwXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICBhbmR7JyAnfVxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvYmxvYi9tYXN0ZXIvQ09OVFJJQlVUSU5HLm1kXCI+XG4gICAgICAgICAgICAgICAgY29udHJpYnV0aW5nIGd1aWRlbGluZXNcbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIHRvIHNlZSB3aGVyZSB5b3UgY2FuIGhlbHAgb3V0LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJzdW5nbGFzc2VzXCIgLz4gQSBncmVhdCBwbGFjZSB0byBzdGFydCBpcyBhbnl7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcz9xPWlzJTNBb3BlbitpcyUzQWlzc3VlK2xhYmVsJTNBJTIyaGVscCt3YW50ZWQlMjJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgaXNzdWVcbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIHdpdGggYSA8TGFiZWwgYnNTdHlsZT1cInN1Y2Nlc3NcIj5oZWxwLXdhbnRlZDwvTGFiZWw+IGxhYmVsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJva1wiIC8+IFdlIGFyZSBvcGVuIHRvIHB1bGwgcmVxdWVzdHMgdGhhdCBhZGRyZXNzXG4gICAgICAgICAgICAgIGJ1Z3MsIGltcHJvdmUgZG9jdW1lbnRhdGlvbiwgZW5oYW5jZSBhY2Nlc3NpYmlsaXR5LCBhZGQgdGVzdFxuICAgICAgICAgICAgICBjb3ZlcmFnZSwgb3IgYnJpbmcgdXMgY2xvc2VyIHRvIGZlYXR1cmUgcGFyaXR5IHdpdGh7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9nZXRib290c3RyYXAuY29tL1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCb290c3RyYXBcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPEdseXBoaWNvbiBnbHlwaD1cInVzZXJcIiAvPiBXZSBhY3RpdmVseSBzZWVrIHRvIGludml0ZSBmcmVxdWVudFxuICAgICAgICAgICAgICBwdWxsIHJlcXVlc3QgYXV0aG9ycyB0byBqb2luIHRoZSBvcmdhbml6YXRpb24ueycgJ31cbiAgICAgICAgICAgICAgPEdseXBoaWNvbiBnbHlwaD1cInRodW1icy11cFwiIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFPQSIsInNvdXJjZVJvb3QiOiIifQ==