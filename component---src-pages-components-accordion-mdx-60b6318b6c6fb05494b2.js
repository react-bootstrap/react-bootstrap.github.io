(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1097:function(e,n,o){"use strict";o.r(n),o.d(n,"query",function(){return u}),o.d(n,"_frontmatter",function(){return g}),o.d(n,"default",function(){return x});o(10),o(9),o(8),o(12),o(24),o(0);var d=o(122),t=o(273),c=(o(1117),o(1065)),a=o(1064),r=o(1230),l=o.n(r),i=o(1231),m=o.n(i),s=o(1232),C=o.n(s),p=o(1233),y=o.n(p);var u="3321543001",g={},A={query:u,_frontmatter:g},b=t.a;function x(e){var n=e.components,o=function(e,n){if(null==e)return{};var o,d,t={},c=Object.keys(e);for(d=0;d<c.length;d++)o=c[d],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,["components"]);return Object(d.mdx)(b,Object.assign({},A,o,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"accordion"},"Accordion"),Object(d.mdx)("p",{className:"lead"},"Accordions provide a way to restrict Card components to only open one at a time."),Object(d.mdx)("h2",{id:"examples"},"Examples"),Object(d.mdx)("p",null,"Accordions use Card components to provide styling of the Accordion components.\nUse AccordionToggle to provide a button that switches between each AccordionCollapse component."),Object(d.mdx)("h3",{id:"basic-example"},"Basic Example"),Object(d.mdx)(a.a,{codeText:l.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h3",{id:"fully-collapsed-state"},"Fully Collapsed State"),Object(d.mdx)("p",null,"If you want your Accordion to start in a fully-collapsed state, then simply don't pass in a ",Object(d.mdx)("inlineCode",{parentName:"p"},"defaultActiveKey")," prop to ",Object(d.mdx)("inlineCode",{parentName:"p"},"Accordion"),"."),Object(d.mdx)(a.a,{codeText:m.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h3",{id:"entire-header-clickable"},"Entire Header Clickable"),Object(d.mdx)("p",null,"Each of the Card components in the Accordion can have their entire header clickable, by setting the AccordionToggle's\nunderlying component to be a CardHeader component."),Object(d.mdx)(a.a,{codeText:C.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h3",{id:"custom-toggle"},"Custom Toggle"),Object(d.mdx)("p",null,"You can now hook into the Accordion toggle functionality via ",Object(d.mdx)("inlineCode",{parentName:"p"},"useAccordionToggle")," to make custom toggle components."),Object(d.mdx)(a.a,{codeText:y.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h2",{id:"api"},"API"),Object(d.mdx)(c.a,{metadata:o.data.Accordion,mdxType:"ComponentApi"}),Object(d.mdx)(c.a,{metadata:o.data.AccordionToggle,exportedBy:o.data.Accordion,mdxType:"ComponentApi"}),Object(d.mdx)(c.a,{metadata:o.data.AccordionCollapse,exportedBy:o.data.Accordion,mdxType:"ComponentApi"}),Object(d.mdx)("h3",{id:"useaccordiontoggle"},"useAccordionToggle"),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';\n\nconst decoratedOnClick = useAccordionToggle(eventKey, onClick);\n")))}x.isMDXComponent=!0},1117:function(e,n,o){"use strict";var d=o(0),t=o.n(d),c=o(1067);n.a=function(e){var n=e.title,o=e.children,d=e.theme;return t.a.createElement("aside",{role:"note",className:c[d||"warning"]},n&&t.a.createElement("header",{className:"h5"},n),t.a.createElement("div",null,o))}},1230:function(e,n){e.exports='<Accordion defaultActiveKey="0">\n  <Card>\n    <Card.Header>\n      <Accordion.Toggle as={Button} variant="link" eventKey="0">\n        Click me!\n      </Accordion.Toggle>\n    </Card.Header>\n    <Accordion.Collapse eventKey="0">\n      <Card.Body>Hello! I\'m the body</Card.Body>\n    </Accordion.Collapse>\n  </Card>\n  <Card>\n    <Card.Header>\n      <Accordion.Toggle as={Button} variant="link" eventKey="1">\n        Click me!\n      </Accordion.Toggle>\n    </Card.Header>\n    <Accordion.Collapse eventKey="1">\n      <Card.Body>Hello! I\'m another body</Card.Body>\n    </Accordion.Collapse>\n  </Card>\n</Accordion>;\n'},1231:function(e,n){e.exports='<Accordion>\n  <Card>\n    <Card.Header>\n      <Accordion.Toggle as={Button} variant="link" eventKey="0">\n        Click me!\n      </Accordion.Toggle>\n    </Card.Header>\n    <Accordion.Collapse eventKey="0">\n      <Card.Body>Hello! I\'m the body</Card.Body>\n    </Accordion.Collapse>\n  </Card>\n  <Card>\n    <Card.Header>\n      <Accordion.Toggle as={Button} variant="link" eventKey="1">\n        Click me!\n      </Accordion.Toggle>\n    </Card.Header>\n    <Accordion.Collapse eventKey="1">\n      <Card.Body>Hello! I\'m another body</Card.Body>\n    </Accordion.Collapse>\n  </Card>\n</Accordion>;\n'},1232:function(e,n){e.exports='<Accordion defaultActiveKey="0">\n  <Card>\n    <Accordion.Toggle as={Card.Header} eventKey="0">\n      Click me!\n    </Accordion.Toggle>\n    <Accordion.Collapse eventKey="0">\n      <Card.Body>Hello! I\'m the body</Card.Body>\n    </Accordion.Collapse>\n  </Card>\n  <Card>\n    <Accordion.Toggle as={Card.Header} eventKey="1">\n      Click me!\n    </Accordion.Toggle>\n    <Accordion.Collapse eventKey="1">\n      <Card.Body>Hello! I\'m another body</Card.Body>\n    </Accordion.Collapse>\n  </Card>\n</Accordion>;\n'},1233:function(e,n){e.exports='function CustomToggle({ children, eventKey }) {\n  const decoratedOnClick = useAccordionToggle(eventKey, () =>\n    console.log(\'totally custom!\'),\n  );\n\n  return (\n    <button\n      type="button"\n      style={{ backgroundColor: \'pink\' }}\n      onClick={decoratedOnClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nfunction Example() {\n  return (\n    <Accordion defaultActiveKey="0">\n      <Card>\n        <Card.Header>\n          <CustomToggle eventKey="0">Click me!</CustomToggle>\n        </Card.Header>\n        <Accordion.Collapse eventKey="0">\n          <Card.Body>Hello! I\'m the body</Card.Body>\n        </Accordion.Collapse>\n      </Card>\n      <Card>\n        <Card.Header>\n          <CustomToggle eventKey="1">Click me!</CustomToggle>\n        </Card.Header>\n        <Accordion.Collapse eventKey="1">\n          <Card.Body>Hello! I\'m another body</Card.Body>\n        </Accordion.Collapse>\n      </Card>\n    </Accordion>\n  );\n}\n\nrender(<Example />);\n'}}]);
//# sourceMappingURL=component---src-pages-components-accordion-mdx-60b6318b6c6fb05494b2.js.map