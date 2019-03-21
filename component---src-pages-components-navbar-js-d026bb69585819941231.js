(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{311:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return h}),n.d(a,"query",function(){return E});var t=n(0),r=n.n(t),l=n(340),o=n(338),c=n(332),u=n(342),m=n(488),i=n.n(m),s=n(489),d=n.n(s),p=n(490),v=n.n(p),b=n(491),N=n.n(b);function h(e){var a=e.data;return r.a.createElement("div",{className:"bs-docs-section"},r.a.createElement("h2",{className:"page-header"},r.a.createElement(l.a,{id:"navbars"},"Navbars")," ",r.a.createElement("small",null,"Navbar")),r.a.createElement("p",null,"Navbars are responsive meta components that serve as navigation headers for your application or site."),r.a.createElement("p",null,"They also support all the different Bootstrap classes as properties. Just camelCase the css class and remove navbar from it."),r.a.createElement("p",null,"For example ",r.a.createElement("code",null,"navbar-fixed-top")," becomes the property"," ",r.a.createElement("code",null,"fixedTop"),". The different properties are"," ",r.a.createElement("code",null,"fixedTop"),", ",r.a.createElement("code",null,"fixedBottom"),", ",r.a.createElement("code",null,"staticTop"),","," ",r.a.createElement("code",null,"inverse"),", and ",r.a.createElement("code",null,"fluid"),"."),r.a.createElement("p",null,"You can also align elements to the right by specifying the"," ",r.a.createElement("code",null,"pullRight")," prop on the ",r.a.createElement("code",null,"Nav"),", and other sub-components."),r.a.createElement("h3",null,r.a.createElement(l.a,{id:"navbars-basic"},"Navbar Basic Example")),r.a.createElement(u.a,{codeText:i.a}),r.a.createElement("div",{className:"bs-callout bs-callout-info"},r.a.createElement("h4",null,"Additional Import Options"),r.a.createElement("p",null,"The Navbar Header, Toggle, Brand, and Collapse components are available as static properties on the ",r.a.createElement("code",null,"<Navbar/>")," ","component but you can also import them directly from the"," ",r.a.createElement("code",null,"/lib")," directory like:"," ",r.a.createElement("code",null,'require("react-bootstrap/lib/NavbarHeader")'),".")),r.a.createElement("h3",null,r.a.createElement(l.a,{id:"navbars-mobile-friendly"},"Responsive Navbars")),r.a.createElement("p",null,"To have a mobile friendly Navbar, Add a ",r.a.createElement("code",null,"Navbar.Toggle")," to your Header and wrap your Navs in a ",r.a.createElement("code",null,"Navbar.Collapse")," ","component. The ",r.a.createElement("code",null,"Navbar")," will automatically wire the toggle and collapse together!"),r.a.createElement("p",null,"Set the ",r.a.createElement("code",null,"defaultExpanded")," prop to make the Navbar start expanded. Set ",r.a.createElement("code",null,"collapseOnSelect")," to make the Navbar collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the ",r.a.createElement("code",null,"expanded")," and"," ",r.a.createElement("code",null,"onToggle")," props."),r.a.createElement(u.a,{codeText:d.a}),r.a.createElement("h3",null,r.a.createElement(l.a,{id:"navbars-form"},"Forms")),r.a.createElement("p",null,"Use the ",r.a.createElement("code",null,"Navbar.Form")," convenience component to apply proper margins and alignment to form components."),r.a.createElement(u.a,{codeText:v.a}),r.a.createElement("h3",null,r.a.createElement(l.a,{id:"navbars-text-link"},"Text and Non-nav links")),r.a.createElement("p",null,"Loose text and links can be wraped in the convenience components:"," ",r.a.createElement("code",null,"Navbar.Link")," and ",r.a.createElement("code",null,"Navbar.Text")),r.a.createElement(u.a,{codeText:N.a}),r.a.createElement("h3",null,r.a.createElement(l.a,{id:"navbar-props"},"Props")),r.a.createElement("h4",null,r.a.createElement(l.a,{id:"navs-props-navbar"},"Navbar"),r.a.createElement(o.a,{component:a.Navbar.displayName})),r.a.createElement(c.a,{metadata:a.Navbar}),r.a.createElement("h4",null,r.a.createElement(l.a,{id:"navs-props-navbar-toggle"},"Navbar.Toggle"),r.a.createElement(o.a,{component:a.NavbarToggle.displayName})),r.a.createElement(c.a,{metadata:a.NavbarToggle}))}var E="3759474401"},332:function(e,a,n){"use strict";n(95),n(333),n(94),n(65),n(93),n(334);var t=n(20),r=n.n(t),l=(n(335),n(52),n(0)),o=n.n(l),c=n(1),u=n.n(c),m=n(92),i=n(339),s=n(341),d=n(66),p=function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var n=a.prototype;return n.getDisplayTypeName=function(e){return"func"===e?"function":"bool"===e?"boolean":e},n.getType=function(e){var a=this,n=e.type||{},t=this.getDisplayTypeName(n.name),r=e.doclets||{};switch(t){case"object":return t;case"union":return n.value.reduce(function(e,n,t,r){var l=a.getType({type:n});return o.a.isValidElement(l)&&(l=o.a.cloneElement(l,{key:t})),e=e.concat(l),t===r.length-1?e:e.concat(" | ")},[]);case"array":var l=this.getType({type:n.value});return o.a.createElement("span",null,"array<",l,">");case"enum":return this.renderEnum(n);case"custom":return(r.type||n.raw).trim().replace(/^\{/,"").replace(/\}$/,"");default:return t}},n._renderRows=function(e){var a=this;return e.filter(function(e){return e.type&&!e.doclets.private}).map(function(e){var n=e.name,t=e.description,r=e.doclets,l=e.defaultValue,c=t&&t.childMarkdownRemark.html;return o.a.createElement("tr",{key:n,className:"prop-table-row"},o.a.createElement("td",null,n," ",a.renderRequiredLabel(e)),o.a.createElement("td",null,o.a.createElement("div",null,a.getType(e))),o.a.createElement("td",null,l&&l.value),o.a.createElement("td",null,r.deprecated&&o.a.createElement("div",{className:"prop-desc-heading"},o.a.createElement("strong",{className:"text-danger"},"Deprecated: "+r.deprecated+" ")),a.renderControllableNote(e,n),o.a.createElement("div",{className:"prop-desc",dangerouslySetInnerHTML:{__html:c}})))})},n.renderControllableNote=function(e,a){var n=e.doclets.controllable,t="function"===this.getDisplayTypeName(e.type.name);if(!n)return!1;var r=t?o.a.createElement("span",null,"controls ",o.a.createElement("code",null,n)):o.a.createElement("span",null,"controlled by: ",o.a.createElement("code",null,n),", initial prop:"," ",o.a.createElement("code",null,"default"+Object(d.a)(a)));return o.a.createElement("div",{className:"prop-desc-heading"},o.a.createElement("small",null,o.a.createElement("em",{className:"text-info"},o.a.createElement(m.a,{glyph:"info-sign"})," ",r)))},n.renderEnum=function(e){var a=[];return(e.value||[]).forEach(function(e,n){var t=e.value;n>0&&a.push(o.a.createElement("span",{key:n+"c"},", ")),a.push(o.a.createElement("code",{key:n},t))}),o.a.createElement("span",null,"one of: ",a)},n.renderRequiredLabel=function(e){return e.required?o.a.createElement(i.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?o.a.createElement(s.a,{bordered:!0,striped:!0,className:"prop-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,this._renderRows(e))):o.a.createElement("div",{className:"text-muted"},o.a.createElement("em",null,"There are no public props for this component."))},a}(o.a.Component);p.propTypes={metadata:u.a.object.isRequired},a.a=p},333:function(e,a,n){"use strict";var t=n(10),r=n(51)(0),l=n(30)([].forEach,!0);t(t.P+t.F*!l,"Array",{forEach:function(e){return r(this,e,arguments[1])}})},334:function(e,a,n){var t=n(50).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||n(35)&&t(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},335:function(e,a,n){"use strict";n(336)("trim",function(e){return function(){return e(this,3)}})},336:function(e,a,n){var t=n(10),r=n(29),l=n(22),o=n(337),c="["+o+"]",u=RegExp("^"+c+c+"*"),m=RegExp(c+c+"*$"),i=function(e,a,n){var r={},c=l(function(){return!!o[e]()||"​"!="​"[e]()}),u=r[e]=c?a(s):o[e];n&&(r[n]=u),t(t.P+t.F*c,"String",r)},s=i.trim=function(e,a){return e=String(r(e)),1&a&&(e=e.replace(u,"")),2&a&&(e=e.replace(m,"")),e};e.exports=i},337:function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},338:function(e,a,n){"use strict";var t=n(0),r=n.n(t),l=n(96);a.a=function(e){var a=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+l.version+"/src/"+a+".js";return r.a.createElement("a",{className:"link-to-source",href:n,alt:"View source code for "+a},"[source]")}},488:function(e,a){e.exports='<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">React-Bootstrap</a>\n    </Navbar.Brand>\n  </Navbar.Header>\n  <Nav>\n    <NavItem eventKey={1} href="#">\n      Link\n    </NavItem>\n    <NavItem eventKey={2} href="#">\n      Link\n    </NavItem>\n    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">\n      <MenuItem eventKey={3.1}>Action</MenuItem>\n      <MenuItem eventKey={3.2}>Another action</MenuItem>\n      <MenuItem eventKey={3.3}>Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey={3.4}>Separated link</MenuItem>\n    </NavDropdown>\n  </Nav>\n</Navbar>;\n'},489:function(e,a){e.exports='<Navbar inverse collapseOnSelect>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#brand">React-Bootstrap</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Nav>\n      <NavItem eventKey={1} href="#">\n        Link\n      </NavItem>\n      <NavItem eventKey={2} href="#">\n        Link\n      </NavItem>\n      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">\n        <MenuItem eventKey={3.1}>Action</MenuItem>\n        <MenuItem eventKey={3.2}>Another action</MenuItem>\n        <MenuItem eventKey={3.3}>Something else here</MenuItem>\n        <MenuItem divider />\n        <MenuItem eventKey={3.3}>Separated link</MenuItem>\n      </NavDropdown>\n    </Nav>\n    <Nav pullRight>\n      <NavItem eventKey={1} href="#">\n        Link Right\n      </NavItem>\n      <NavItem eventKey={2} href="#">\n        Link Right\n      </NavItem>\n    </Nav>\n  </Navbar.Collapse>\n</Navbar>;\n'},490:function(e,a){e.exports='<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">Brand</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Navbar.Form pullLeft>\n      <FormGroup>\n        <FormControl type="text" placeholder="Search" />\n      </FormGroup>{\' \'}\n      <Button type="submit">Submit</Button>\n    </Navbar.Form>\n  </Navbar.Collapse>\n</Navbar>;\n'},491:function(e,a){e.exports='<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">Brand</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Navbar.Text>\n      Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>\n    </Navbar.Text>\n    <Navbar.Text pullRight>Have a great day!</Navbar.Text>\n  </Navbar.Collapse>\n</Navbar>;\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtbmF2YmFyLWpzLWQwMjZiYjY5NTg1ODE5OTQxMjMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFuY2hvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FuY2hvcic7XG5pbXBvcnQgTGlua1RvU291cmNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlua1RvU291cmNlJztcbmltcG9ydCBQcm9wVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9wVGFibGUnO1xuaW1wb3J0IFJlYWN0UGxheWdyb3VuZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JlYWN0UGxheWdyb3VuZCc7XG5cbmltcG9ydCBOYXZiYXJCYXNpYyBmcm9tICcuLi8uLi9leGFtcGxlcy9OYXZiYXJCYXNpYyc7XG5pbXBvcnQgTmF2YmFyQ29sbGFwc2libGUgZnJvbSAnLi4vLi4vZXhhbXBsZXMvTmF2YmFyQ29sbGFwc2libGUnO1xuaW1wb3J0IE5hdmJhckZvcm0gZnJvbSAnLi4vLi4vZXhhbXBsZXMvTmF2YmFyRm9ybSc7XG5pbXBvcnQgTmF2YmFyVGV4dExpbmsgZnJvbSAnLi4vLi4vZXhhbXBsZXMvTmF2YmFyVGV4dExpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXJTZWN0aW9uKHsgZGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicy1kb2NzLXNlY3Rpb25cIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8QW5jaG9yIGlkPVwibmF2YmFyc1wiPk5hdmJhcnM8L0FuY2hvcj4gPHNtYWxsPk5hdmJhcjwvc21hbGw+XG4gICAgICA8L2gyPlxuXG4gICAgICA8cD5cbiAgICAgICAgTmF2YmFycyBhcmUgcmVzcG9uc2l2ZSBtZXRhIGNvbXBvbmVudHMgdGhhdCBzZXJ2ZSBhcyBuYXZpZ2F0aW9uIGhlYWRlcnNcbiAgICAgICAgZm9yIHlvdXIgYXBwbGljYXRpb24gb3Igc2l0ZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGV5IGFsc28gc3VwcG9ydCBhbGwgdGhlIGRpZmZlcmVudCBCb290c3RyYXAgY2xhc3NlcyBhcyBwcm9wZXJ0aWVzLlxuICAgICAgICBKdXN0IGNhbWVsQ2FzZSB0aGUgY3NzIGNsYXNzIGFuZCByZW1vdmUgbmF2YmFyIGZyb20gaXQuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgRm9yIGV4YW1wbGUgPGNvZGU+bmF2YmFyLWZpeGVkLXRvcDwvY29kZT4gYmVjb21lcyB0aGUgcHJvcGVydHl7JyAnfVxuICAgICAgICA8Y29kZT5maXhlZFRvcDwvY29kZT4uIFRoZSBkaWZmZXJlbnQgcHJvcGVydGllcyBhcmV7JyAnfVxuICAgICAgICA8Y29kZT5maXhlZFRvcDwvY29kZT4sIDxjb2RlPmZpeGVkQm90dG9tPC9jb2RlPiwgPGNvZGU+c3RhdGljVG9wPC9jb2RlPix7JyAnfVxuICAgICAgICA8Y29kZT5pbnZlcnNlPC9jb2RlPiwgYW5kIDxjb2RlPmZsdWlkPC9jb2RlPi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgY2FuIGFsc28gYWxpZ24gZWxlbWVudHMgdG8gdGhlIHJpZ2h0IGJ5IHNwZWNpZnlpbmcgdGhleycgJ31cbiAgICAgICAgPGNvZGU+cHVsbFJpZ2h0PC9jb2RlPiBwcm9wIG9uIHRoZSA8Y29kZT5OYXY8L2NvZGU+LCBhbmQgb3RoZXJcbiAgICAgICAgc3ViLWNvbXBvbmVudHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMz5cbiAgICAgICAgPEFuY2hvciBpZD1cIm5hdmJhcnMtYmFzaWNcIj5OYXZiYXIgQmFzaWMgRXhhbXBsZTwvQW5jaG9yPlxuICAgICAgPC9oMz5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e05hdmJhckJhc2ljfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicy1jYWxsb3V0IGJzLWNhbGxvdXQtaW5mb1wiPlxuICAgICAgICA8aDQ+QWRkaXRpb25hbCBJbXBvcnQgT3B0aW9uczwvaDQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBOYXZiYXIgSGVhZGVyLCBUb2dnbGUsIEJyYW5kLCBhbmQgQ29sbGFwc2UgY29tcG9uZW50cyBhcmVcbiAgICAgICAgICBhdmFpbGFibGUgYXMgc3RhdGljIHByb3BlcnRpZXMgb24gdGhlIDxjb2RlPnsnPE5hdmJhci8+J308L2NvZGU+eycgJ31cbiAgICAgICAgICBjb21wb25lbnQgYnV0IHlvdSBjYW4gYWxzbyBpbXBvcnQgdGhlbSBkaXJlY3RseSBmcm9tIHRoZXsnICd9XG4gICAgICAgICAgPGNvZGU+L2xpYjwvY29kZT4gZGlyZWN0b3J5IGxpa2U6eycgJ31cbiAgICAgICAgICA8Y29kZT5yZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZiYXJIZWFkZXJcIik8L2NvZGU+LlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgzPlxuICAgICAgICA8QW5jaG9yIGlkPVwibmF2YmFycy1tb2JpbGUtZnJpZW5kbHlcIj5SZXNwb25zaXZlIE5hdmJhcnM8L0FuY2hvcj5cbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgVG8gaGF2ZSBhIG1vYmlsZSBmcmllbmRseSBOYXZiYXIsIEFkZCBhIDxjb2RlPk5hdmJhci5Ub2dnbGU8L2NvZGU+IHRvXG4gICAgICAgIHlvdXIgSGVhZGVyIGFuZCB3cmFwIHlvdXIgTmF2cyBpbiBhIDxjb2RlPk5hdmJhci5Db2xsYXBzZTwvY29kZT57JyAnfVxuICAgICAgICBjb21wb25lbnQuIFRoZSA8Y29kZT5OYXZiYXI8L2NvZGU+IHdpbGwgYXV0b21hdGljYWxseSB3aXJlIHRoZSB0b2dnbGVcbiAgICAgICAgYW5kIGNvbGxhcHNlIHRvZ2V0aGVyIVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFNldCB0aGUgPGNvZGU+ZGVmYXVsdEV4cGFuZGVkPC9jb2RlPiBwcm9wIHRvIG1ha2UgdGhlIE5hdmJhciBzdGFydFxuICAgICAgICBleHBhbmRlZC4gU2V0IDxjb2RlPmNvbGxhcHNlT25TZWxlY3Q8L2NvZGU+IHRvIG1ha2UgdGhlIE5hdmJhciBjb2xsYXBzZVxuICAgICAgICBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhbiBpdGVtLiBZb3UgY2FuIGFsc28gZmluZWx5IGNvbnRyb2xcbiAgICAgICAgdGhlIGNvbGxhcHNpbmcgYmVoYXZpb3IgYnkgdXNpbmcgdGhlIDxjb2RlPmV4cGFuZGVkPC9jb2RlPiBhbmR7JyAnfVxuICAgICAgICA8Y29kZT5vblRvZ2dsZTwvY29kZT4gcHJvcHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e05hdmJhckNvbGxhcHNpYmxlfSAvPlxuXG4gICAgICA8aDM+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJuYXZiYXJzLWZvcm1cIj5Gb3JtczwvQW5jaG9yPlxuICAgICAgPC9oMz5cbiAgICAgIDxwPlxuICAgICAgICBVc2UgdGhlIDxjb2RlPk5hdmJhci5Gb3JtPC9jb2RlPiBjb252ZW5pZW5jZSBjb21wb25lbnQgdG8gYXBwbHkgcHJvcGVyXG4gICAgICAgIG1hcmdpbnMgYW5kIGFsaWdubWVudCB0byBmb3JtIGNvbXBvbmVudHMuXG4gICAgICA8L3A+XG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtOYXZiYXJGb3JtfSAvPlxuXG4gICAgICA8aDM+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJuYXZiYXJzLXRleHQtbGlua1wiPlRleHQgYW5kIE5vbi1uYXYgbGlua3M8L0FuY2hvcj5cbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgTG9vc2UgdGV4dCBhbmQgbGlua3MgY2FuIGJlIHdyYXBlZCBpbiB0aGUgY29udmVuaWVuY2UgY29tcG9uZW50czp7JyAnfVxuICAgICAgICA8Y29kZT5OYXZiYXIuTGluazwvY29kZT4gYW5kIDxjb2RlPk5hdmJhci5UZXh0PC9jb2RlPlxuICAgICAgPC9wPlxuXG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtOYXZiYXJUZXh0TGlua30gLz5cblxuICAgICAgPGgzPlxuICAgICAgICA8QW5jaG9yIGlkPVwibmF2YmFyLXByb3BzXCI+UHJvcHM8L0FuY2hvcj5cbiAgICAgIDwvaDM+XG5cbiAgICAgIDxoND5cbiAgICAgICAgPEFuY2hvciBpZD1cIm5hdnMtcHJvcHMtbmF2YmFyXCI+TmF2YmFyPC9BbmNob3I+XG4gICAgICAgIDxMaW5rVG9Tb3VyY2UgY29tcG9uZW50PXtkYXRhLk5hdmJhci5kaXNwbGF5TmFtZX0gLz5cbiAgICAgIDwvaDQ+XG4gICAgICA8UHJvcFRhYmxlIG1ldGFkYXRhPXtkYXRhLk5hdmJhcn0gLz5cblxuICAgICAgPGg0PlxuICAgICAgICA8QW5jaG9yIGlkPVwibmF2cy1wcm9wcy1uYXZiYXItdG9nZ2xlXCI+TmF2YmFyLlRvZ2dsZTwvQW5jaG9yPlxuICAgICAgICA8TGlua1RvU291cmNlIGNvbXBvbmVudD17ZGF0YS5OYXZiYXJUb2dnbGUuZGlzcGxheU5hbWV9IC8+XG4gICAgICA8L2g0PlxuICAgICAgPFByb3BUYWJsZSBtZXRhZGF0YT17ZGF0YS5OYXZiYXJUb2dnbGV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IE5hdmJhclF1ZXJ5IHtcbiAgICBOYXZiYXI6IGNvbXBvbmVudE1ldGFkYXRhKGRpc3BsYXlOYW1lOiB7IGVxOiBcIk5hdmJhclwiIH0pIHtcbiAgICAgIC4uLlByb3BUYWJsZV9tZXRhZGF0YVxuICAgIH1cbiAgICBOYXZiYXJUb2dnbGU6IGNvbXBvbmVudE1ldGFkYXRhKGRpc3BsYXlOYW1lOiB7IGVxOiBcIk5hdmJhclRvZ2dsZVwiIH0pIHtcbiAgICAgIC4uLlByb3BUYWJsZV9tZXRhZGF0YVxuICAgIH1cbiAgfVxuYDtcbiJdLCJtYXBwaW5ncyI6IkFBQ0EiLCJzb3VyY2VSb290IjoiIn0=