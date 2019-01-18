(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{259:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(322),l=n(121),r=n(319),i=n(919),c=n.n(i),u=n(920),m=n.n(u),d=n(304);t.default=Object(d.a)(function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.default,{h:"1",id:"custom-styles"},"Theming and Customizing styles."),o.a.createElement("p",null,"Generally, if you stick to the bootstrap defined classes and variants, there isn't anything you need to do to use a custom theme with ReactBootstrap, it just works. There are plently of cases tho where you want to color outside the lines and we try to make that easy to do."),o.a.createElement(l.default,{h:"2",id:"custom-styles-variants"},"New variants and sizes"),o.a.createElement("p",null,"Custom variants and sizes to should follow the leapatternd of the default bootstrap variants, and define css classes matching:"," ",o.a.createElement("code",null,"compontent-*"),". React bootstrap builds the component classNames in a consistent way that you can rely on. For instance this custom Button."),o.a.createElement(r.a,{codeText:m.a}),o.a.createElement(l.default,{h:"2",id:"custom-styles-prefix"},"Prefixing components"),o.a.createElement("p",null,'In some cases you may need to change the base class "prefix" of one or more Components. You can control how a Component prefixes it\'s classes locallyy by changing the ',o.a.createElement("code",null,"bsPrefix")," prop. Or globally via the"," ",o.a.createElement("code",null,"ThemeProvider")," Component."),o.a.createElement(s.a,{theme:"warning"},"Changing prefixes is an escape hatch and generally shouldn't be used"),o.a.createElement(r.a,{codeText:c.a}))})},304:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n(320);var a=n(0),o=n.n(a),s=n(306),l=n(321);function r(e){return function(t){var n=t.location.pathname,a=l.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(a=s.a),o.a.createElement(a,{location:t.location},o.a.createElement(e,t))}}},322:function(e,t,n){"use strict";var a=n(2),o=n.n(a),s=n(0),l=n.n(s),r=(n(17),n(323)),i={title:o.a.node,children:o.a.node,theme:o.a.oneOf(["danger","warning"])};function c(e){var t=e.title,n=e.children,a=e.theme;return l.a.createElement("aside",{role:"note",className:r[a||"warning"]},t&&l.a.createElement("header",{className:"h5"},t),l.a.createElement("div",null,n))}c.propTypes=i,t.a=c},323:function(e,t,n){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},919:function(e,t){e.exports='<>\n  {/* Hint: inspect the markup to see how the classes differ */}\n  <ThemeProvider prefixes={{ btn: \'my-btn\' }}>\n    <Button variant="primary">My Button</Button>\n  </ThemeProvider>{\' \'}\n  <Button bsPrefix="super-btn" variant="primary">\n    Super button\n  </Button>\n</>;\n'},920:function(e,t){e.exports='<>\n  <style type="text/css">\n    {`\n    .btn-flat {\n      background-color: purple;\n      color: white;\n    }\n\n    .btn-xxl {\n      padding: 1rem 1.5rem;\n      font-size: 1.5rem;\n    }\n    `}\n  </style>\n\n  <Button variant="flat" size="xxl">\n    flat button\n  </Button>\n</>;\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWdldHRpbmctc3RhcnRlZC10aGVtaW5nLWpzLTkyYjlmYzM4MjRmMDQ1MTdlMmJmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2dldHRpbmctc3RhcnRlZC90aGVtaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDYWxsb3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FsbG91dCc7XG5pbXBvcnQgTGlua2VkSGVhZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpbmtlZEhlYWRpbmcnO1xuaW1wb3J0IFJlYWN0UGxheWdyb3VuZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JlYWN0UGxheWdyb3VuZCc7XG5pbXBvcnQgUHJlZml4ZXMgZnJvbSAnLi4vLi4vZXhhbXBsZXMvVGhlbWluZy9QcmVmaXhlcyc7XG5pbXBvcnQgVmFyaWFudHMgZnJvbSAnLi4vLi4vZXhhbXBsZXMvVGhlbWluZy9WYXJpYW50cyc7XG5pbXBvcnQgd2l0aExheW91dCBmcm9tICcuLi8uLi93aXRoTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExheW91dChmdW5jdGlvbiBUaGVtaW5nU2VjdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmtlZEhlYWRpbmcgaD1cIjFcIiBpZD1cImN1c3RvbS1zdHlsZXNcIj5cbiAgICAgICAgVGhlbWluZyBhbmQgQ3VzdG9taXppbmcgc3R5bGVzLlxuICAgICAgPC9MaW5rZWRIZWFkaW5nPlxuXG4gICAgICA8cD5cbiAgICAgICAgR2VuZXJhbGx5LCBpZiB5b3Ugc3RpY2sgdG8gdGhlIGJvb3RzdHJhcCBkZWZpbmVkIGNsYXNzZXMgYW5kIHZhcmlhbnRzLFxuICAgICAgICB0aGVyZSBpc24ndCBhbnl0aGluZyB5b3UgbmVlZCB0byBkbyB0byB1c2UgYSBjdXN0b20gdGhlbWUgd2l0aFxuICAgICAgICBSZWFjdEJvb3RzdHJhcCwgaXQganVzdCB3b3Jrcy4gVGhlcmUgYXJlIHBsZW50bHkgb2YgY2FzZXMgdGhvIHdoZXJlIHlvdVxuICAgICAgICB3YW50IHRvIGNvbG9yIG91dHNpZGUgdGhlIGxpbmVzIGFuZCB3ZSB0cnkgdG8gbWFrZSB0aGF0IGVhc3kgdG8gZG8uXG4gICAgICA8L3A+XG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwiY3VzdG9tLXN0eWxlcy12YXJpYW50c1wiPlxuICAgICAgICBOZXcgdmFyaWFudHMgYW5kIHNpemVzXG4gICAgICA8L0xpbmtlZEhlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgQ3VzdG9tIHZhcmlhbnRzIGFuZCBzaXplcyB0byBzaG91bGQgZm9sbG93IHRoZSBsZWFwYXR0ZXJuZCBvZiB0aGVcbiAgICAgICAgZGVmYXVsdCBib290c3RyYXAgdmFyaWFudHMsIGFuZCBkZWZpbmUgY3NzIGNsYXNzZXMgbWF0Y2hpbmc6eycgJ31cbiAgICAgICAgPGNvZGU+Y29tcG9udGVudC0qPC9jb2RlPi4gUmVhY3QgYm9vdHN0cmFwIGJ1aWxkcyB0aGUgY29tcG9uZW50XG4gICAgICAgIGNsYXNzTmFtZXMgaW4gYSBjb25zaXN0ZW50IHdheSB0aGF0IHlvdSBjYW4gcmVseSBvbi4gRm9yIGluc3RhbmNlIHRoaXNcbiAgICAgICAgY3VzdG9tIEJ1dHRvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e1ZhcmlhbnRzfSAvPlxuXG4gICAgICA8TGlua2VkSGVhZGluZyBoPVwiMlwiIGlkPVwiY3VzdG9tLXN0eWxlcy1wcmVmaXhcIj5cbiAgICAgICAgUHJlZml4aW5nIGNvbXBvbmVudHNcbiAgICAgIDwvTGlua2VkSGVhZGluZz5cbiAgICAgIDxwPlxuICAgICAgICBJbiBzb21lIGNhc2VzIHlvdSBtYXkgbmVlZCB0byBjaGFuZ2UgdGhlIGJhc2UgY2xhc3MgXCJwcmVmaXhcIiBvZiBvbmUgb3JcbiAgICAgICAgbW9yZSBDb21wb25lbnRzLiBZb3UgY2FuIGNvbnRyb2wgaG93IGEgQ29tcG9uZW50IHByZWZpeGVzIGl0J3MgY2xhc3Nlc1xuICAgICAgICBsb2NhbGx5eSBieSBjaGFuZ2luZyB0aGUgPGNvZGU+YnNQcmVmaXg8L2NvZGU+IHByb3AuIE9yIGdsb2JhbGx5IHZpYSB0aGV7JyAnfVxuICAgICAgICA8Y29kZT5UaGVtZVByb3ZpZGVyPC9jb2RlPiBDb21wb25lbnQuXG4gICAgICA8L3A+XG4gICAgICA8Q2FsbG91dCB0aGVtZT1cIndhcm5pbmdcIj5cbiAgICAgICAgQ2hhbmdpbmcgcHJlZml4ZXMgaXMgYW4gZXNjYXBlIGhhdGNoIGFuZCBnZW5lcmFsbHkgc2hvdWxkbid0IGJlIHVzZWRcbiAgICAgIDwvQ2FsbG91dD5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e1ByZWZpeGVzfSAvPlxuICAgIDwvPlxuICApO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9