(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{256:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return l});var n=a(50),o=a.n(n),s=a(0),r=a.n(s),p=a(121),c=a(298),m=a(315);a(126);t.default=function(e){var t=e.components,a=o()(e,["components"]);return r.a.createElement(p.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:a,components:t},r.a.createElement(p.MDXTag,{name:"h1",components:t,props:{id:"introduction"}},"Introduction"),r.a.createElement("p",{classname:"lead"},"Learn how to include React Bootstrap in your project"),r.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"javascript"}},"JavaScript"),r.a.createElement(p.MDXTag,{name:"p",components:t},"React-Bootstrap is a complete re-implementation of the Bootstrap\ncomponents using React. It has ",r.a.createElement(p.MDXTag,{name:"strong",components:t,parentName:"p"},"no dependency on either ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"strong"},"bootstrap.js")," or jQuery"),".\nIf you have React setup and React-Bootstrap installed you have everything you need."),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"installation"}},"Installation"),r.a.createElement(p.MDXTag,{name:"p",components:t},"The best way to consume React Bootstrap is via the npm package which\nyou can install with ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npm")," (or yarn if you prefer)."),r.a.createElement(p.MDXTag,{name:"p",components:t},"If you plan on customizing the Bootstrap Sass files, or don't want\nto use a CDN for the stylesheet, it may helpful to install\n",r.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://getbootstrap.com/docs/4.1/getting-started/download/#npm"}},"vanilla Bootstrap")," as well."),r.a.createElement(p.MDXTag,{name:"pre",components:t},r.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"npm install react-bootstrap@next bootstrap\n")),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"importing"}},"Importing"),r.a.createElement(p.MDXTag,{name:"p",components:t},"You should import individual components from\n",r.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-bootstrap/lib")," rather than the entire library.\nDoing so pulls in only the specific components that you use, which\ncan significantly reduce the amount of code you end up sending to\nthe client."),r.a.createElement(p.MDXTag,{name:"pre",components:t},r.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import Button from 'react-bootstrap/lib/Button';\n\n// or less ideally\nimport { Button } from 'react-bootstrap';\n")),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"browser-globals"}},"Browser globals"),r.a.createElement(p.MDXTag,{name:"p",components:t},"We provide ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-bootstrap.js")," and\n",r.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-bootstrap.min.js")," bundles with all components\nexported on the ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"window.ReactBootstrap")," object. These\nbundles are available on ",r.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://cdnjs.com/libraries/react-bootstrap"}},"CDNJS"),", as\nwell as in the npm package."),r.a.createElement(p.MDXTag,{name:"pre",components:t},r.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html",metaString:""}},'<script src="https://unpkg.com/react/umd/react.production.js" crossorigin><\/script>\n<script src="https://unpkg.com/react-dom/umd/react-dom.production.js" crossorigin><\/script>\n<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin><\/script>\n<script>\n  var Alert = ReactBootstrap.Alert;\n<\/script>\n')),r.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"stylesheets"}},"Stylesheets"),r.a.createElement(p.MDXTag,{name:"p",components:t},"Because React-Bootstrap doesn't depend on a very precise version of\nBootstrap, we don't ship with any included css. However, some\nstylesheet ",r.a.createElement(p.MDXTag,{name:"strong",components:t,parentName:"p"},"is required")," to use these components. How\nand which bootstrap styles you include is up to you, but the\nsimplest way is to include the latest styles from the CDN."),r.a.createElement(p.MDXTag,{name:"pre",components:t},r.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html",metaString:""}},'\x3c!-- Latest compiled and minified CSS --\x3e\n<link\n  rel="stylesheet"\n  href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"\n  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"\n  crossorigin="anonymous"\n>\n')),r.a.createElement(p.MDXTag,{name:"p",components:t},"For more advanced use cases you can also use a bundler like Webpack\nor Browserify to include the css files for you as part of your build\nprocess but that is beyond the scope of this guide. Also see\n",r.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://getbootstrap.com/customize/"}},"http://getbootstrap.com/customize/")," for details about customizing stylesheets to match your component\nuse."),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"themes"}},"Themes"),r.a.createElement(p.MDXTag,{name:"p",components:t},"React-Bootstrap is compatible with existing Bootstrap themes. Just\nfollow the installation instructions for your theme of choice."),r.a.createElement(m.a,{theme:"danger",title:"Watchout!"},"Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors."),r.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"browser-support"}},"Browser support"),r.a.createElement(p.MDXTag,{name:"p",components:t},"We aim to support all browsers supported by both\n",r.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills"}},"React"),"\nand  ",r.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://getbootstrap.com/getting-started/#support"}},"Bootstrap")))};var l={}},315:function(e,t,a){"use strict";var n=a(1),o=a.n(n),s=a(0),r=a.n(s),p=a(316),c={title:o.a.node,children:o.a.node,theme:o.a.oneOf(["danger","warning"])};function m(e){var t=e.title,a=e.children,n=e.theme;return r.a.createElement("aside",{role:"note",className:p[n||"warning"]},t&&r.a.createElement("header",{className:"h5"},t),r.a.createElement("div",null,a))}m.propTypes=c,t.a=m},316:function(e,t,a){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}}}]);
//# sourceMappingURL=component---src-pages-getting-started-introduction-mdx-070167aa696ff766d939.js.map