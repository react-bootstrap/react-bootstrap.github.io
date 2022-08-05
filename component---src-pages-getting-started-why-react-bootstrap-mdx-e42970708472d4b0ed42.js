(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{shKV:function(t,e){t.exports="import React, { useState } from 'react';\nimport Alert from 'react-bootstrap/Alert';\nimport Button from 'react-bootstrap/Button';\n\nfunction AlertDismissible() {\n  const [show, setShow] = useState(true);\n\n  return (\n    <>\n      <Alert show={show} variant=\"success\">\n        <Alert.Heading>How's it going?!</Alert.Heading>\n        <p>\n          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget\n          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet\n          fermentum.\n        </p>\n        <hr />\n        <div className=\"d-flex justify-content-end\">\n          <Button onClick={() => setShow(false)} variant=\"outline-success\">\n            Close me y'all!\n          </Button>\n        </div>\n      </Alert>\n\n      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}\n    </>\n  );\n}\n\nrender(<AlertDismissible />);\n"},ybmY:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return m})),n.d(e,"default",(function(){return f}));var o,a=n("wx14"),s=n("zLVn"),r=(n("mXGw"),n("7ljp")),i=n("Snbm"),l=n("shKV"),c=n.n(l),p=n("1u5/"),d=["components"],m={},u=(o="PageHeader",function(t){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.mdx)("div",t)}),b={_frontmatter:m},h=i.a;function f(t){var e=t.components,n=Object(s.a)(t,d);return Object(r.mdx)(h,Object(a.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)(u,{title:"Why React-Bootstrap?",mdxType:"PageHeader"}),Object(r.mdx)("p",null,"React-Bootstrap is a complete re-implementation of the\nBootstrap components using React. It has ",Object(r.mdx)("strong",{parentName:"p"},"no dependency\non either ",Object(r.mdx)("inlineCode",{parentName:"strong"},"bootstrap.js")," or jQuery.")," If you have React\nsetup and React-Bootstrap installed, you have everything\nyou need."),Object(r.mdx)("p",null,"Methods and events using jQuery is done imperatively\nby directly manipulating the DOM. In contrast, React\nuses updates to the state to update the virtual DOM.\nIn this way, React-Bootstrap provides a more reliable\nsolution by incorporating Bootstrap functionality into\nReact's virtual DOM. Below are a few examples of how\nReact-Bootstrap components differ from Bootstrap."),Object(r.mdx)("h2",{id:"a-simple-react-component"},"A Simple React Component"),Object(r.mdx)("p",null,"The CSS and details of Bootstrap components are rather\nopinionated and lengthy. React-Bootstrap simplifies\nthis by condensing the original Bootstrap into React-styled\ncomponents."),Object(r.mdx)("h3",{id:"bootstrap"},"Bootstrap"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre"},'import * as React from \'react\';\n\nfunction Example()  {\n  return (\n    <div class="alert alert-danger alert-dismissible fade show" role="alert">\n      <strong>Oh snap! You got an error!</strong>\n      <p>\n        Change this and that and try again.\n      </p>\n      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n  )\n}\n\n')),Object(r.mdx)("h3",{id:"react-bootstrap"},"React-Bootstrap"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre"},"import * as React from 'react';\nimport Alert from 'react-bootstrap/Alert';\n\nfunction Example() {\n  return (\n    <Alert dismissible variant=\"danger\">\n      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>\n      <p>\n        Change this and that and try again.\n      </p>\n    </Alert>\n  )\n}\n")),Object(r.mdx)("h2",{id:"bootstrap-with-state"},"Bootstrap with state"),Object(r.mdx)("p",null,"Since React-Bootstrap is built with React Javascript, state\ncan be passed within React-Bootstrap components as a prop.\nIt also makes it easier to manage the state as updates are\nmade using React’s state instead of directly manipulating\nthe state of the DOM. This also gives a lot of flexibility\nwhen creating more complex components."),Object(r.mdx)("h3",{id:"react-bootstrap-1"},"React-bootstrap"),Object(r.mdx)(p.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(r.mdx)("h3",{id:"bootstrap-1"},"Bootstrap"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre"},"// HTML\n<div class=\"alert alert-success alert-dismissible fade show firstCollapsible\" role=\"alert\">\n  <strong>How's it going?!</strong>\n  <p>\n    Duis mollis, est non commodo luctus, nisi erat porttitor ligula,\n    eget lacinia odio sem nec elit. Cras mattis consectetur purus sit\n    amet fermentum.\n  </p>\n  <hr/>\n  <div class=\"d-flex justify-content-end\">\n    <button type=\"button\" class=\"btn btn-outline-success\">Close me ya'll!</button>\n  </div>\n</div>\n<div class=\"d-flex justify-content-start alert fade show\">\n    <button type=\"button\" class=\"btn btn-primary d-none secondCollapsible\">Show Alert</button>\n</div>\n\n// Javascript\n$('.btn-outline-success').on('click', function(e) {\n    $('.firstCollapsible').addClass('d-none');\n    $('.secondCollapsible').removeClass('d-none');\n})\n\n$('.btn-primary').on('click', function(e) {\n    $('.firstCollapsible').removeClass('d-none');\n    $('.secondCollapsible').addClass('d-none');\n})\n")))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-why-react-bootstrap-mdx-e42970708472d4b0ed42.js.map