(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m}),a.d(t,"query",function(){return p});var n=a(0),r=a.n(n),l=a(340),c=a(338),o=a(332),u=a(342),s=a(433),i=a.n(s);function m(e){var t=e.data;return r.a.createElement("div",{className:"bs-docs-section"},r.a.createElement("h2",{className:"page-header"},r.a.createElement(l.a,{id:"badges"},"Badges")," ",r.a.createElement("small",null,"Badge")),r.a.createElement("p",null,"Easily highlight new or unread items by adding a"," ",r.a.createElement("code",null,"<Badge>")," to links, Bootstrap navs, and more."),r.a.createElement(u.a,{codeText:i.a}),r.a.createElement("div",{className:"bs-callout bs-callout-info"},r.a.createElement("h4",null,"Cross-browser compatibility"),r.a.createElement("p",null,"Unlike in regular Bootstrap, badges self collapse even in Internet Explorer 8.")),r.a.createElement("h3",null,r.a.createElement(l.a,{id:"badges-props"},"Props"),r.a.createElement(c.a,{component:t.metadata.displayName})),r.a.createElement(o.a,{metadata:t.metadata}))}var p="807811778"},332:function(e,t,a){"use strict";a(95),a(333),a(94),a(65),a(93),a(334);var n=a(20),r=a.n(n),l=(a(335),a(52),a(0)),c=a.n(l),o=a(1),u=a.n(o),s=a(92),i=a(339),m=a(341),p=a(66),d=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getDisplayTypeName=function(e){return"func"===e?"function":"bool"===e?"boolean":e},a.getType=function(e){var t=this,a=e.type||{},n=this.getDisplayTypeName(a.name),r=e.doclets||{};switch(n){case"object":return n;case"union":return a.value.reduce(function(e,a,n,r){var l=t.getType({type:a});return c.a.isValidElement(l)&&(l=c.a.cloneElement(l,{key:n})),e=e.concat(l),n===r.length-1?e:e.concat(" | ")},[]);case"array":var l=this.getType({type:a.value});return c.a.createElement("span",null,"array<",l,">");case"enum":return this.renderEnum(a);case"custom":return(r.type||a.raw).trim().replace(/^\{/,"").replace(/\}$/,"");default:return n}},a._renderRows=function(e){var t=this;return e.filter(function(e){return e.type&&!e.doclets.private}).map(function(e){var a=e.name,n=e.description,r=e.doclets,l=e.defaultValue,o=n&&n.childMarkdownRemark.html;return c.a.createElement("tr",{key:a,className:"prop-table-row"},c.a.createElement("td",null,a," ",t.renderRequiredLabel(e)),c.a.createElement("td",null,c.a.createElement("div",null,t.getType(e))),c.a.createElement("td",null,l&&l.value),c.a.createElement("td",null,r.deprecated&&c.a.createElement("div",{className:"prop-desc-heading"},c.a.createElement("strong",{className:"text-danger"},"Deprecated: "+r.deprecated+" ")),t.renderControllableNote(e,a),c.a.createElement("div",{className:"prop-desc",dangerouslySetInnerHTML:{__html:o}})))})},a.renderControllableNote=function(e,t){var a=e.doclets.controllable,n="function"===this.getDisplayTypeName(e.type.name);if(!a)return!1;var r=n?c.a.createElement("span",null,"controls ",c.a.createElement("code",null,a)):c.a.createElement("span",null,"controlled by: ",c.a.createElement("code",null,a),", initial prop:"," ",c.a.createElement("code",null,"default"+Object(p.a)(t)));return c.a.createElement("div",{className:"prop-desc-heading"},c.a.createElement("small",null,c.a.createElement("em",{className:"text-info"},c.a.createElement(s.a,{glyph:"info-sign"})," ",r)))},a.renderEnum=function(e){var t=[];return(e.value||[]).forEach(function(e,a){var n=e.value;a>0&&t.push(c.a.createElement("span",{key:a+"c"},", ")),t.push(c.a.createElement("code",{key:a},n))}),c.a.createElement("span",null,"one of: ",t)},a.renderRequiredLabel=function(e){return e.required?c.a.createElement(i.a,null,"required"):null},a.render=function(){var e=this.props.metadata.props||[];return e.length?c.a.createElement(m.a,{bordered:!0,striped:!0,className:"prop-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Default"),c.a.createElement("th",null,"Description"))),c.a.createElement("tbody",null,this._renderRows(e))):c.a.createElement("div",{className:"text-muted"},c.a.createElement("em",null,"There are no public props for this component."))},t}(c.a.Component);d.propTypes={metadata:u.a.object.isRequired},t.a=d},333:function(e,t,a){"use strict";var n=a(10),r=a(51)(0),l=a(30)([].forEach,!0);n(n.P+n.F*!l,"Array",{forEach:function(e){return r(this,e,arguments[1])}})},334:function(e,t,a){var n=a(50).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(36)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},335:function(e,t,a){"use strict";a(336)("trim",function(e){return function(){return e(this,3)}})},336:function(e,t,a){var n=a(10),r=a(29),l=a(22),c=a(337),o="["+c+"]",u=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),i=function(e,t,a){var r={},o=l(function(){return!!c[e]()||"​"!="​"[e]()}),u=r[e]=o?t(m):c[e];a&&(r[a]=u),n(n.P+n.F*o,"String",r)},m=i.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(s,"")),e};e.exports=i},337:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},338:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(96);t.a=function(e){var t=e.component,a="//github.com/react-bootstrap/react-bootstrap/tree/v"+l.version+"/src/"+t+".js";return r.a.createElement("a",{className:"link-to-source",href:a,alt:"View source code for "+t},"[source]")}},433:function(e,t){e.exports="<p>\n  Badges <Badge>42</Badge>\n</p>;\n"}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtYmFkZ2UtanMtMmUyM2E1MDIzNGUzZTZiYjE5OGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9iYWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAnZ2F0c2J5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBbmNob3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbmNob3InO1xuaW1wb3J0IExpbmtUb1NvdXJjZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpbmtUb1NvdXJjZSc7XG5pbXBvcnQgUHJvcFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvcFRhYmxlJztcbmltcG9ydCBSZWFjdFBsYXlncm91bmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZWFjdFBsYXlncm91bmQnO1xuXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vLi4vZXhhbXBsZXMvQmFkZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWRnZVNlY3Rpb24oeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJzLWRvY3Mtc2VjdGlvblwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJiYWRnZXNcIj5CYWRnZXM8L0FuY2hvcj4gPHNtYWxsPkJhZGdlPC9zbWFsbD5cbiAgICAgIDwvaDI+XG5cbiAgICAgIDxwPlxuICAgICAgICBFYXNpbHkgaGlnaGxpZ2h0IG5ldyBvciB1bnJlYWQgaXRlbXMgYnkgYWRkaW5nIGF7JyAnfVxuICAgICAgICA8Y29kZT57JzxCYWRnZT4nfTwvY29kZT4gdG8gbGlua3MsIEJvb3RzdHJhcCBuYXZzLCBhbmQgbW9yZS5cbiAgICAgIDwvcD5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e0JhZGdlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicy1jYWxsb3V0IGJzLWNhbGxvdXQtaW5mb1wiPlxuICAgICAgICA8aDQ+Q3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5PC9oND5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVW5saWtlIGluIHJlZ3VsYXIgQm9vdHN0cmFwLCBiYWRnZXMgc2VsZiBjb2xsYXBzZSBldmVuIGluIEludGVybmV0XG4gICAgICAgICAgRXhwbG9yZXIgOC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMz5cbiAgICAgICAgPEFuY2hvciBpZD1cImJhZGdlcy1wcm9wc1wiPlByb3BzPC9BbmNob3I+XG4gICAgICAgIDxMaW5rVG9Tb3VyY2UgY29tcG9uZW50PXtkYXRhLm1ldGFkYXRhLmRpc3BsYXlOYW1lfSAvPlxuICAgICAgPC9oMz5cblxuICAgICAgPFByb3BUYWJsZSBtZXRhZGF0YT17ZGF0YS5tZXRhZGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgQmFkZ2VRdWVyeSB7XG4gICAgbWV0YWRhdGE6IGNvbXBvbmVudE1ldGFkYXRhKGRpc3BsYXlOYW1lOiB7IGVxOiBcIkJhZGdlXCIgfSkge1xuICAgICAgLi4uUHJvcFRhYmxlX21ldGFkYXRhXG4gICAgfVxuICB9XG5gO1xuIl0sIm1hcHBpbmdzIjoiQUFDQSIsInNvdXJjZVJvb3QiOiIifQ==