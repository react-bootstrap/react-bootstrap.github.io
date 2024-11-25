"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[8113],{53513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=t(85893),r=t(11151);const s="import Image from 'react-bootstrap/Image';\n\nfunction FluidExample() {\n  return <Image src=\"holder.js/100px250\" fluid />;\n}\n\nexport default FluidExample;\n",i="import Col from 'react-bootstrap/Col';\nimport Container from 'react-bootstrap/Container';\nimport Image from 'react-bootstrap/Image';\nimport Row from 'react-bootstrap/Row';\n\nfunction ShapeExample() {\n  return (\n    <Container>\n      <Row>\n        <Col xs={6} md={4}>\n          <Image src=\"holder.js/171x180\" rounded />\n        </Col>\n        <Col xs={6} md={4}>\n          <Image src=\"holder.js/171x180\" roundedCircle />\n        </Col>\n        <Col xs={6} md={4}>\n          <Image src=\"holder.js/171x180\" thumbnail />\n        </Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default ShapeExample;\n",a={title:"Images",description:"Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them\u2014all via classes."},l=void 0,c={id:"components/images",title:"Images",description:"Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them\u2014all via classes.",source:"@site/docs/components/images.mdx",sourceDirName:"components",slug:"/components/images",permalink:"/docs/components/images",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Images",description:"Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them\u2014all via classes."},sidebar:"sidebar",previous:{title:"Figures",permalink:"/docs/components/figures"},next:{title:"List groups",permalink:"/docs/components/list-group"}},d={},m=[{value:"Shape",id:"shape",level:2},{value:"Fluid",id:"fluid",level:2},{value:"API",id:"api",level:2},{value:"Image",id:"image",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components},{CodeBlock:t,PropsTable:a}=n;return t||u("CodeBlock",!0),a||u("PropsTable",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"shape",children:"Shape"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"rounded"}),", ",(0,o.jsx)(n.code,{children:"roundedCircle"})," and ",(0,o.jsx)(n.code,{children:"thumbnail"})," props to customise\nthe image."]}),"\n",(0,o.jsx)(t,{language:"jsx",live:!0,children:i}),"\n",(0,o.jsx)(n.h2,{id:"fluid",children:"Fluid"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"fluid"})," to scale image nicely to the parent element."]}),"\n",(0,o.jsx)(t,{language:"jsx",live:!0,children:s}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.h3,{id:"image",children:"Image"}),"\n",(0,o.jsx)(a,{name:"Image"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);