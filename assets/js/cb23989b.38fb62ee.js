"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[1129],{52005:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(85893),r=o(11151);const s='import Form from \'react-bootstrap/Form\';\n\nfunction FormTextExample() {\n  return (\n    <>\n      <Form.Label htmlFor="inputPassword5">Password</Form.Label>\n      <Form.Control\n        type="password"\n        id="inputPassword5"\n        aria-describedby="passwordHelpBlock"\n      />\n      <Form.Text id="passwordHelpBlock" muted>\n        Your password must be 8-20 characters long, contain letters and numbers,\n        and must not contain spaces, special characters, or emoji.\n      </Form.Text>\n    </>\n  );\n}\n\nexport default FormTextExample;\n',i={title:"Form text",description:"Create block-level or inline-level form text.",sidebar_position:3},l=void 0,c={id:"forms/form-text",title:"Form text",description:"Create block-level or inline-level form text.",source:"@site/docs/forms/form-text.mdx",sourceDirName:"forms",slug:"/forms/form-text",permalink:"/docs/forms/form-text",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Form text",description:"Create block-level or inline-level form text.",sidebar_position:3},sidebar:"sidebar",previous:{title:"Form controls",permalink:"/docs/forms/form-control"},next:{title:"Select",permalink:"/docs/forms/select"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"API",id:"api",level:2},{value:"FormText",id:"formtext",level:3}];function m(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components},{CodeBlock:o,PropsTable:i}=t;return o||u("CodeBlock",!0),i||u("PropsTable",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Block-level help text in forms can be created using ",(0,n.jsx)(t.code,{children:"<Form.Text>"}),". Inline help\ntext can be flexibly implemented using any inline HTML element and utility classes\nlike ",(0,n.jsx)(t.code,{children:".text-muted"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"Associating help text with form controls",type:"tip",children:(0,n.jsxs)(t.p,{children:["Help text should be explicitly associated with the form control it relates to using\nthe ",(0,n.jsx)(t.code,{children:"aria-describedby"})," attribute. This will ensure that assistive technologies\u2014such\nas screen readers\u2014will announce this help text when the user focuses or enters\nthe control."]})}),"\n",(0,n.jsxs)(t.p,{children:["Form text below inputs can be styled with ",(0,n.jsx)(t.code,{children:"<Form.Text>"}),". This component includes\n",(0,n.jsx)(t.code,{children:"display: block"})," and adds some top margin for easy spacing from the inputs above."]}),"\n",(0,n.jsx)(o,{language:"jsx",live:!0,children:s}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.h3,{id:"formtext",children:"FormText"}),"\n",(0,n.jsx)(i,{name:"FormText"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>i});var n=o(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);