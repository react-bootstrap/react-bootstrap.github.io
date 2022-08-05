(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"3P7r":function(t,e){t.exports='import Stack from \'react-bootstrap/Stack\';\n\nfunction VerticalExample() {\n  return (\n    <Stack gap={3}>\n      <div className="bg-light border">First item</div>\n      <div className="bg-light border">Second item</div>\n      <div className="bg-light border">Third item</div>\n    </Stack>\n  );\n}\n\nexport default VerticalExample;\n'},"5G6u":function(t,e){t.exports='import Stack from \'react-bootstrap/Stack\';\n\nfunction HorizontalMarginStartExample() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <div className="bg-light border">First item</div>\n      <div className="bg-light border ms-auto">Second item</div>\n      <div className="bg-light border">Third item</div>\n    </Stack>\n  );\n}\n\nexport default HorizontalMarginStartExample;\n'},"7HE8":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return j})),n.d(e,"default",(function(){return T}));var a,o=n("wx14"),r=n("zLVn"),i=(n("mXGw"),n("7ljp")),d=n("Snbm"),c=(n("h55t"),n("vXRK")),l=n("1u5/"),m=n("LMww"),s=n.n(m),u=n("QgIb"),p=n.n(u),b=n("hoWQ"),x=n.n(b),h=n("5G6u"),g=n.n(h),v=n("dyTW"),f=n.n(v),S=n("3P7r"),k=n.n(S),y=["components"],j={},O=(a="PageHeader",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}),w={query:"1638435832",_frontmatter:j},N=d.a;function T(t){var e=t.components,n=Object(r.a)(t,y);return Object(i.mdx)(N,Object(o.a)({},w,n,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)(O,{title:"Stacks",subTitle:"Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.",mdxType:"PageHeader"}),Object(i.mdx)("h2",{id:"vertical"},"Vertical"),Object(i.mdx)("p",null,"Stacks are vertical by default and stacked items are full-width by default. Use the ",Object(i.mdx)("inlineCode",{parentName:"p"},"gap"),"\nprop to add space between items."),Object(i.mdx)(l.a,{codeText:k.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"horizontal"},"Horizontal"),Object(i.mdx)("p",null,"Use ",Object(i.mdx)("inlineCode",{parentName:"p"},'direction="horizontal"')," for horizontal layouts. Stacked items are vertically centered\nby default and only take up their necessary width. Use the ",Object(i.mdx)("inlineCode",{parentName:"p"},"gap")," prop to add space between\nitems."),Object(i.mdx)(l.a,{codeText:x.a,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"Using horizontal margin utilities like ",Object(i.mdx)("inlineCode",{parentName:"p"},".ms-auto")," as spacers:"),Object(i.mdx)(l.a,{codeText:g.a,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"And with vertical rules:"),Object(i.mdx)(l.a,{codeText:f.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("p",null,"Use a vertical ",Object(i.mdx)("inlineCode",{parentName:"p"},"Stack")," to stack buttons and other elements:"),Object(i.mdx)(l.a,{codeText:s.a,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"Create an inline form with a horizontal ",Object(i.mdx)("inlineCode",{parentName:"p"},"Stack"),":"),Object(i.mdx)(l.a,{codeText:p.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"api"},"API"),Object(i.mdx)(c.a,{metadata:n.data.Stack,mdxType:"ComponentApi"}))}T.isMDXComponent=!0},LMww:function(t,e){t.exports='import Button from \'react-bootstrap/Button\';\nimport Stack from \'react-bootstrap/Stack\';\n\nfunction ButtonsExample() {\n  return (\n    <Stack gap={2} className="col-md-5 mx-auto">\n      <Button variant="secondary">Save changes</Button>\n      <Button variant="outline-secondary">Cancel</Button>\n    </Stack>\n  );\n}\n\nexport default ButtonsExample;\n'},Q6D8:function(t,e,n){t.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},QgIb:function(t,e){t.exports='import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\nimport Stack from \'react-bootstrap/Stack\';\n\nfunction FormExample() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <Form.Control className="me-auto" placeholder="Add your item here..." />\n      <Button variant="secondary">Submit</Button>\n      <div className="vr" />\n      <Button variant="outline-danger">Reset</Button>\n    </Stack>\n  );\n}\n\nexport default FormExample;\n'},dyTW:function(t,e){t.exports='import Stack from \'react-bootstrap/Stack\';\n\nfunction HorizontalVerticalRulesExample() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <div className="bg-light border">First item</div>\n      <div className="bg-light border ms-auto">Second item</div>\n      <div className="vr" />\n      <div className="bg-light border">Third item</div>\n    </Stack>\n  );\n}\n\nexport default HorizontalVerticalRulesExample;\n'},h55t:function(t,e,n){"use strict";var a=n("oYCi"),o=n("Q6D8");e.a=function(t){var e=t.title,n=t.children,r=t.theme;return Object(a.jsxs)("aside",{role:"note",className:o[r||"warning"],children:[e&&Object(a.jsx)("header",{className:"h5",children:e}),Object(a.jsx)("div",{children:n})]})}},hoWQ:function(t,e){t.exports='import Stack from \'react-bootstrap/Stack\';\n\nfunction HorizontalExample() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <div className="bg-light border">First item</div>\n      <div className="bg-light border">Second item</div>\n      <div className="bg-light border">Third item</div>\n    </Stack>\n  );\n}\n\nexport default HorizontalExample;\n'}}]);
//# sourceMappingURL=component---src-pages-layout-stack-mdx-7494d4b80287af35ebe5.js.map