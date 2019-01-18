(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{309:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return I}),n.d(t,"query",function(){return b});var r=n(0),a=n.n(r),l=n(340),o=n(338),i=n(332),c=n(342),u=n(477),s=n.n(u),m=n(478),p=n.n(m),d=n(479),h=n.n(d),E=n(480),f=n.n(E),L=n(481),G=n.n(L),g=n(482),y=n.n(g);function I(e){var t=e.data;return a.a.createElement("div",{className:"bs-docs-section"},a.a.createElement("h2",{className:"page-header"},a.a.createElement(l.a,{id:"listgroup"},"List group")," ",a.a.createElement("small",null,"ListGroup, ListGroupItem")),a.a.createElement("p",null,"List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"listgroup-default"},"Centers by default")),a.a.createElement(c.a,{codeText:s.a}),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"listgroup-linked"},"Linked")),a.a.createElement("p",null,"Set the ",a.a.createElement("code",null,"href")," or ",a.a.createElement("code",null,"onClick")," prop on"," ",a.a.createElement("code",null,"ListGroupItem"),", to create a linked or clickable element."),a.a.createElement(c.a,{codeText:p.a}),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"listgroup-styling-state"},"Styling by state")),a.a.createElement("p",null,"Set the ",a.a.createElement("code",null,"active")," or ",a.a.createElement("code",null,"disabled")," prop to"," ",a.a.createElement("code",null,"true")," to mark or disable the item."),a.a.createElement(c.a,{codeText:h.a}),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"listgroup-styling-color"},"Styling by color")),a.a.createElement("p",null,"Set the ",a.a.createElement("code",null,"bsStyle")," prop to style the item"),a.a.createElement(c.a,{codeText:f.a}),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"listgroup-with-header"},"With header")),a.a.createElement("p",null,"Set the ",a.a.createElement("code",null,"header")," prop to create a structured item, with a heading and a body area."),a.a.createElement(c.a,{codeText:G.a}),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"listgroup-with-custom-children"},"With custom component children")),a.a.createElement("p",null,"When using ListGroupItems directly, ListGroup looks at whether the items have href or onClick props to determine which DOM elements to emit. However, with custom item components as children to"," ",a.a.createElement("code",null,"ListGroup"),", set the",a.a.createElement("code",null,"componentClass")," prop to specify which element"," ",a.a.createElement("code",null,"ListGroup")," should output."),a.a.createElement(c.a,{codeText:y.a}),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"listgroup-props"},"Props")),a.a.createElement("h4",null,a.a.createElement(l.a,{id:"listgroup-props-group"},"ListGroup"),a.a.createElement(o.a,{component:t.ListGroup.displayName})),a.a.createElement(i.a,{metadata:t.ListGroup}),a.a.createElement("h4",null,a.a.createElement(l.a,{id:"listgroup-props-item"},"ListGroupItem"),a.a.createElement(o.a,{component:t.ListGroupItem.displayName})),a.a.createElement(i.a,{metadata:t.ListGroupItem}))}var b="3344470622"},332:function(e,t,n){"use strict";n(95),n(333),n(94),n(65),n(93),n(334);var r=n(20),a=n.n(r),l=(n(335),n(52),n(0)),o=n.n(l),i=n(1),c=n.n(i),u=n(92),s=n(339),m=n(341),p=n(66),d=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getDisplayTypeName=function(e){return"func"===e?"function":"bool"===e?"boolean":e},n.getType=function(e){var t=this,n=e.type||{},r=this.getDisplayTypeName(n.name),a=e.doclets||{};switch(r){case"object":return r;case"union":return n.value.reduce(function(e,n,r,a){var l=t.getType({type:n});return o.a.isValidElement(l)&&(l=o.a.cloneElement(l,{key:r})),e=e.concat(l),r===a.length-1?e:e.concat(" | ")},[]);case"array":var l=this.getType({type:n.value});return o.a.createElement("span",null,"array<",l,">");case"enum":return this.renderEnum(n);case"custom":return(a.type||n.raw).trim().replace(/^\{/,"").replace(/\}$/,"");default:return r}},n._renderRows=function(e){var t=this;return e.filter(function(e){return e.type&&!e.doclets.private}).map(function(e){var n=e.name,r=e.description,a=e.doclets,l=e.defaultValue,i=r&&r.childMarkdownRemark.html;return o.a.createElement("tr",{key:n,className:"prop-table-row"},o.a.createElement("td",null,n," ",t.renderRequiredLabel(e)),o.a.createElement("td",null,o.a.createElement("div",null,t.getType(e))),o.a.createElement("td",null,l&&l.value),o.a.createElement("td",null,a.deprecated&&o.a.createElement("div",{className:"prop-desc-heading"},o.a.createElement("strong",{className:"text-danger"},"Deprecated: "+a.deprecated+" ")),t.renderControllableNote(e,n),o.a.createElement("div",{className:"prop-desc",dangerouslySetInnerHTML:{__html:i}})))})},n.renderControllableNote=function(e,t){var n=e.doclets.controllable,r="function"===this.getDisplayTypeName(e.type.name);if(!n)return!1;var a=r?o.a.createElement("span",null,"controls ",o.a.createElement("code",null,n)):o.a.createElement("span",null,"controlled by: ",o.a.createElement("code",null,n),", initial prop:"," ",o.a.createElement("code",null,"default"+Object(p.a)(t)));return o.a.createElement("div",{className:"prop-desc-heading"},o.a.createElement("small",null,o.a.createElement("em",{className:"text-info"},o.a.createElement(u.a,{glyph:"info-sign"})," ",a)))},n.renderEnum=function(e){var t=[];return(e.value||[]).forEach(function(e,n){var r=e.value;n>0&&t.push(o.a.createElement("span",{key:n+"c"},", ")),t.push(o.a.createElement("code",{key:n},r))}),o.a.createElement("span",null,"one of: ",t)},n.renderRequiredLabel=function(e){return e.required?o.a.createElement(s.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?o.a.createElement(m.a,{bordered:!0,striped:!0,className:"prop-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,this._renderRows(e))):o.a.createElement("div",{className:"text-muted"},o.a.createElement("em",null,"There are no public props for this component."))},t}(o.a.Component);d.propTypes={metadata:c.a.object.isRequired},t.a=d},333:function(e,t,n){"use strict";var r=n(10),a=n(51)(0),l=n(30)([].forEach,!0);r(r.P+r.F*!l,"Array",{forEach:function(e){return a(this,e,arguments[1])}})},334:function(e,t,n){var r=n(50).f,a=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in a||n(35)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},335:function(e,t,n){"use strict";n(336)("trim",function(e){return function(){return e(this,3)}})},336:function(e,t,n){var r=n(10),a=n(29),l=n(22),o=n(337),i="["+o+"]",c=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),s=function(e,t,n){var a={},i=l(function(){return!!o[e]()||"​"!="​"[e]()}),c=a[e]=i?t(m):o[e];n&&(a[n]=c),r(r.P+r.F*i,"String",a)},m=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=s},337:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},338:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(96);t.a=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+l.version+"/src/"+t+".js";return a.a.createElement("a",{className:"link-to-source",href:n,alt:"View source code for "+t},"[source]")}},477:function(e,t){e.exports="<ListGroup>\n  <ListGroupItem>Item 1</ListGroupItem>\n  <ListGroupItem>Item 2</ListGroupItem>\n  <ListGroupItem>...</ListGroupItem>\n</ListGroup>;\n"},478:function(e,t){e.exports='function alertClicked() {\n  alert(\'You clicked the third ListGroupItem\');\n}\n\nrender(\n  <ListGroup>\n    <ListGroupItem href="#link1">Link 1</ListGroupItem>\n    <ListGroupItem href="#link2">Link 2</ListGroupItem>\n    <ListGroupItem onClick={alertClicked}>Trigger an alert</ListGroupItem>\n  </ListGroup>\n);\n'},479:function(e,t){e.exports='<ListGroup>\n  <ListGroupItem href="#" active>\n    Link 1\n  </ListGroupItem>\n  <ListGroupItem href="#">Link 2</ListGroupItem>\n  <ListGroupItem href="#" disabled>\n    Link 3\n  </ListGroupItem>\n</ListGroup>;\n'},480:function(e,t){e.exports='<ListGroup>\n  <ListGroupItem bsStyle="success">Success</ListGroupItem>\n  <ListGroupItem bsStyle="info">Info</ListGroupItem>\n  <ListGroupItem bsStyle="warning">Warning</ListGroupItem>\n  <ListGroupItem bsStyle="danger">Danger</ListGroupItem>\n</ListGroup>;\n'},481:function(e,t){e.exports='<ListGroup>\n  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>\n  <ListGroupItem header="Heading 2" href="#">\n    Linked item\n  </ListGroupItem>\n  <ListGroupItem header="Heading 3" bsStyle="danger">\n    Danger styling\n  </ListGroupItem>\n</ListGroup>;\n'},482:function(e,t){e.exports='function CustomComponent({ children }) {\n  return (\n    <li className="list-group-item" onClick={() => {}}>\n      {children}\n    </li>\n  );\n}\n\nrender(\n  <ListGroup componentClass="ul">\n    <CustomComponent>Custom Child 1</CustomComponent>\n    <CustomComponent>Custom Child 2</CustomComponent>\n    <CustomComponent>Custom Child 3</CustomComponent>\n  </ListGroup>\n);\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtbGlzdC1ncm91cC1qcy1hMDllMTI1OGM4NDk0ZDJlMWM1OC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL2xpc3QtZ3JvdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQW5jaG9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQW5jaG9yJztcbmltcG9ydCBMaW5rVG9Tb3VyY2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaW5rVG9Tb3VyY2UnO1xuaW1wb3J0IFByb3BUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb3BUYWJsZSc7XG5pbXBvcnQgUmVhY3RQbGF5Z3JvdW5kIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVhY3RQbGF5Z3JvdW5kJztcblxuaW1wb3J0IExpc3RHcm91cERlZmF1bHQgZnJvbSAnLi4vLi4vZXhhbXBsZXMvTGlzdEdyb3VwRGVmYXVsdCc7XG5pbXBvcnQgTGlzdEdyb3VwTGlua2VkIGZyb20gJy4uLy4uL2V4YW1wbGVzL0xpc3RHcm91cExpbmtlZCc7XG5pbXBvcnQgTGlzdEdyb3VwQWN0aXZlIGZyb20gJy4uLy4uL2V4YW1wbGVzL0xpc3RHcm91cEFjdGl2ZSc7XG5pbXBvcnQgTGlzdEdyb3VwU3R5bGUgZnJvbSAnLi4vLi4vZXhhbXBsZXMvTGlzdEdyb3VwU3R5bGUnO1xuaW1wb3J0IExpc3RHcm91cEhlYWRlciBmcm9tICcuLi8uLi9leGFtcGxlcy9MaXN0R3JvdXBIZWFkZXInO1xuaW1wb3J0IExpc3RHcm91cEN1c3RvbSBmcm9tICcuLi8uLi9leGFtcGxlcy9MaXN0R3JvdXBDdXN0b20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0R3JvdXBTZWN0aW9uKHsgZGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicy1kb2NzLXNlY3Rpb25cIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8QW5jaG9yIGlkPVwibGlzdGdyb3VwXCI+TGlzdCBncm91cDwvQW5jaG9yPnsnICd9XG4gICAgICAgIDxzbWFsbD5MaXN0R3JvdXAsIExpc3RHcm91cEl0ZW08L3NtYWxsPlxuICAgICAgPC9oMj5cblxuICAgICAgPHA+XG4gICAgICAgIExpc3QgZ3JvdXBzIGFyZSBhIGZsZXhpYmxlIGFuZCBwb3dlcmZ1bCBjb21wb25lbnQgZm9yIGRpc3BsYXlpbmcgbm90XG4gICAgICAgIG9ubHkgc2ltcGxlIGxpc3RzIG9mIGVsZW1lbnRzLCBidXQgY29tcGxleCBvbmVzIHdpdGggY3VzdG9tIGNvbnRlbnQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMz5cbiAgICAgICAgPEFuY2hvciBpZD1cImxpc3Rncm91cC1kZWZhdWx0XCI+Q2VudGVycyBieSBkZWZhdWx0PC9BbmNob3I+XG4gICAgICA8L2gzPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZCBjb2RlVGV4dD17TGlzdEdyb3VwRGVmYXVsdH0gLz5cblxuICAgICAgPGgzPlxuICAgICAgICA8QW5jaG9yIGlkPVwibGlzdGdyb3VwLWxpbmtlZFwiPkxpbmtlZDwvQW5jaG9yPlxuICAgICAgPC9oMz5cbiAgICAgIDxwPlxuICAgICAgICBTZXQgdGhlIDxjb2RlPmhyZWY8L2NvZGU+IG9yIDxjb2RlPm9uQ2xpY2s8L2NvZGU+IHByb3Agb257JyAnfVxuICAgICAgICA8Y29kZT5MaXN0R3JvdXBJdGVtPC9jb2RlPiwgdG8gY3JlYXRlIGEgbGlua2VkIG9yIGNsaWNrYWJsZSBlbGVtZW50LlxuICAgICAgPC9wPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZCBjb2RlVGV4dD17TGlzdEdyb3VwTGlua2VkfSAvPlxuXG4gICAgICA8aDM+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJsaXN0Z3JvdXAtc3R5bGluZy1zdGF0ZVwiPlN0eWxpbmcgYnkgc3RhdGU8L0FuY2hvcj5cbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgU2V0IHRoZSA8Y29kZT5hY3RpdmU8L2NvZGU+IG9yIDxjb2RlPmRpc2FibGVkPC9jb2RlPiBwcm9wIHRveycgJ31cbiAgICAgICAgPGNvZGU+dHJ1ZTwvY29kZT4gdG8gbWFyayBvciBkaXNhYmxlIHRoZSBpdGVtLlxuICAgICAgPC9wPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZCBjb2RlVGV4dD17TGlzdEdyb3VwQWN0aXZlfSAvPlxuXG4gICAgICA8aDM+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJsaXN0Z3JvdXAtc3R5bGluZy1jb2xvclwiPlN0eWxpbmcgYnkgY29sb3I8L0FuY2hvcj5cbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgU2V0IHRoZSA8Y29kZT5ic1N0eWxlPC9jb2RlPiBwcm9wIHRvIHN0eWxlIHRoZSBpdGVtXG4gICAgICA8L3A+XG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtMaXN0R3JvdXBTdHlsZX0gLz5cblxuICAgICAgPGgzPlxuICAgICAgICA8QW5jaG9yIGlkPVwibGlzdGdyb3VwLXdpdGgtaGVhZGVyXCI+V2l0aCBoZWFkZXI8L0FuY2hvcj5cbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgU2V0IHRoZSA8Y29kZT5oZWFkZXI8L2NvZGU+IHByb3AgdG8gY3JlYXRlIGEgc3RydWN0dXJlZCBpdGVtLCB3aXRoIGFcbiAgICAgICAgaGVhZGluZyBhbmQgYSBib2R5IGFyZWEuXG4gICAgICA8L3A+XG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtMaXN0R3JvdXBIZWFkZXJ9IC8+XG5cbiAgICAgIDxoMz5cbiAgICAgICAgPEFuY2hvciBpZD1cImxpc3Rncm91cC13aXRoLWN1c3RvbS1jaGlsZHJlblwiPlxuICAgICAgICAgIFdpdGggY3VzdG9tIGNvbXBvbmVudCBjaGlsZHJlblxuICAgICAgICA8L0FuY2hvcj5cbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgV2hlbiB1c2luZyBMaXN0R3JvdXBJdGVtcyBkaXJlY3RseSwgTGlzdEdyb3VwIGxvb2tzIGF0IHdoZXRoZXIgdGhlIGl0ZW1zXG4gICAgICAgIGhhdmUgaHJlZiBvciBvbkNsaWNrIHByb3BzIHRvIGRldGVybWluZSB3aGljaCBET00gZWxlbWVudHMgdG8gZW1pdC5cbiAgICAgICAgSG93ZXZlciwgd2l0aCBjdXN0b20gaXRlbSBjb21wb25lbnRzIGFzIGNoaWxkcmVuIHRveycgJ31cbiAgICAgICAgPGNvZGU+TGlzdEdyb3VwPC9jb2RlPiwgc2V0IHRoZVxuICAgICAgICA8Y29kZT5jb21wb25lbnRDbGFzczwvY29kZT4gcHJvcCB0byBzcGVjaWZ5IHdoaWNoIGVsZW1lbnR7JyAnfVxuICAgICAgICA8Y29kZT5MaXN0R3JvdXA8L2NvZGU+IHNob3VsZCBvdXRwdXQuXG4gICAgICA8L3A+XG4gICAgICA8UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtMaXN0R3JvdXBDdXN0b219IC8+XG5cbiAgICAgIDxoMz5cbiAgICAgICAgPEFuY2hvciBpZD1cImxpc3Rncm91cC1wcm9wc1wiPlByb3BzPC9BbmNob3I+XG4gICAgICA8L2gzPlxuXG4gICAgICA8aDQ+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJsaXN0Z3JvdXAtcHJvcHMtZ3JvdXBcIj5MaXN0R3JvdXA8L0FuY2hvcj5cbiAgICAgICAgPExpbmtUb1NvdXJjZSBjb21wb25lbnQ9e2RhdGEuTGlzdEdyb3VwLmRpc3BsYXlOYW1lfSAvPlxuICAgICAgPC9oND5cbiAgICAgIDxQcm9wVGFibGUgbWV0YWRhdGE9e2RhdGEuTGlzdEdyb3VwfSAvPlxuXG4gICAgICA8aDQ+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJsaXN0Z3JvdXAtcHJvcHMtaXRlbVwiPkxpc3RHcm91cEl0ZW08L0FuY2hvcj5cbiAgICAgICAgPExpbmtUb1NvdXJjZSBjb21wb25lbnQ9e2RhdGEuTGlzdEdyb3VwSXRlbS5kaXNwbGF5TmFtZX0gLz5cbiAgICAgIDwvaDQ+XG4gICAgICA8UHJvcFRhYmxlIG1ldGFkYXRhPXtkYXRhLkxpc3RHcm91cEl0ZW19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IExpc3RHcm91cFF1ZXJ5IHtcbiAgICBMaXN0R3JvdXA6IGNvbXBvbmVudE1ldGFkYXRhKGRpc3BsYXlOYW1lOiB7IGVxOiBcIkxpc3RHcm91cFwiIH0pIHtcbiAgICAgIC4uLlByb3BUYWJsZV9tZXRhZGF0YVxuICAgIH1cbiAgICBMaXN0R3JvdXBJdGVtOiBjb21wb25lbnRNZXRhZGF0YShkaXNwbGF5TmFtZTogeyBlcTogXCJMaXN0R3JvdXBJdGVtXCIgfSkge1xuICAgICAgLi4uUHJvcFRhYmxlX21ldGFkYXRhXG4gICAgfVxuICB9XG5gO1xuIl0sIm1hcHBpbmdzIjoiQUFDQSIsInNvdXJjZVJvb3QiOiIifQ==