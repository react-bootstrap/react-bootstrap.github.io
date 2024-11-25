"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[6997],{26135:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>g,toc:()=>m});var t=a(85893),o=a(11151);const d='import Badge from \'react-bootstrap/Badge\';\n\nfunction BasicExample() {\n  return (\n    <div>\n      <h1>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h1>\n      <h2>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h2>\n      <h3>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h3>\n      <h4>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h4>\n      <h5>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h5>\n      <h6>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h6>\n    </div>\n  );\n}\n\nexport default BasicExample;\n',r='import Badge from \'react-bootstrap/Badge\';\nimport Button from \'react-bootstrap/Button\';\n\nfunction ButtonExample() {\n  return (\n    <Button variant="primary">\n      Profile <Badge bg="secondary">9</Badge>\n      <span className="visually-hidden">unread messages</span>\n    </Button>\n  );\n}\n\nexport default ButtonExample;\n',i='import Badge from \'react-bootstrap/Badge\';\nimport Stack from \'react-bootstrap/Stack\';\n\nfunction PillExample() {\n  return (\n    <Stack direction="horizontal" gap={2}>\n      <Badge pill bg="primary">\n        Primary\n      </Badge>\n      <Badge pill bg="secondary">\n        Secondary\n      </Badge>\n      <Badge pill bg="success">\n        Success\n      </Badge>\n      <Badge pill bg="danger">\n        Danger\n      </Badge>\n      <Badge pill bg="warning" text="dark">\n        Warning\n      </Badge>\n      <Badge pill bg="info">\n        Info\n      </Badge>\n      <Badge pill bg="light" text="dark">\n        Light\n      </Badge>\n      <Badge pill bg="dark">\n        Dark\n      </Badge>\n    </Stack>\n  );\n}\n\nexport default PillExample;\n',s='import Badge from \'react-bootstrap/Badge\';\nimport Stack from \'react-bootstrap/Stack\';\n\nfunction VariationsExample() {\n  return (\n    <Stack direction="horizontal" gap={2}>\n      <Badge bg="primary">Primary</Badge>\n      <Badge bg="secondary">Secondary</Badge>\n      <Badge bg="success">Success</Badge>\n      <Badge bg="danger">Danger</Badge>\n      <Badge bg="warning" text="dark">\n        Warning\n      </Badge>\n      <Badge bg="info">Info</Badge>\n      <Badge bg="light" text="dark">\n        Light\n      </Badge>\n      <Badge bg="dark">Dark</Badge>\n    </Stack>\n  );\n}\n\nexport default VariationsExample;\n',l={title:"Badges",description:"Documentation and examples for badges, our small count and labeling component."},c=void 0,g={id:"components/badge",title:"Badges",description:"Documentation and examples for badges, our small count and labeling component.",source:"@site/docs/components/badge.mdx",sourceDirName:"components",slug:"/components/badge",permalink:"/docs/components/badge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Badges",description:"Documentation and examples for badges, our small count and labeling component."},sidebar:"sidebar",previous:{title:"Alerts",permalink:"/docs/components/alerts"},next:{title:"Breadcrumbs",permalink:"/docs/components/breadcrumb"}},p={},m=[{value:"Examples",id:"examples",level:2},{value:"Contextual variations",id:"contextual-variations",level:2},{value:"Pill badges",id:"pill-badges",level:2},{value:"API",id:"api",level:2},{value:"Badge",id:"badge",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",...(0,o.a)(),...e.components},{CodeBlock:a,PropsTable:l}=n;return a||b("CodeBlock",!0),l||b("PropsTable",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Badges scale to match the size of the immediate parent element by\nusing relative font sizing and em units."}),"\n",(0,t.jsx)(a,{language:"jsx",live:!0,children:d}),"\n",(0,t.jsx)(n.p,{children:"Badges can be used as part of links or buttons to provide a counter."}),"\n",(0,t.jsx)(a,{language:"jsx",live:!0,children:r}),"\n",(0,t.jsx)(n.p,{children:"Note that depending on how they are used, badges may be confusing for\nusers of screen readers and similar assistive technologies. While the\nstyling of badges provides a visual cue as to their purpose, these users\nwill simply be presented with the content of the badge. Depending on the\nspecific situation, these badges may seem like random additional words or\nnumbers at the end of a sentence, link, or button. Unless the context is\nclear, consider including additional context with a visually hidden piece\nof additional text."}),"\n",(0,t.jsx)(n.h2,{id:"contextual-variations",children:"Contextual variations"}),"\n",(0,t.jsx)(n.p,{children:"Add any of the below mentioned modifier classes to change the\nappearance of a badge."}),"\n",(0,t.jsx)(a,{language:"jsx",live:!0,children:s}),"\n",(0,t.jsx)(n.h2,{id:"pill-badges",children:"Pill badges"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"pill"})," modifier class to make badges more rounded (with a larger\n",(0,t.jsx)(n.code,{children:"border-radius"}),"). Useful if you miss the badges from v3."]}),"\n",(0,t.jsx)(a,{language:"jsx",live:!0,children:i}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"badge",children:"Badge"}),"\n",(0,t.jsx)(l,{name:"Badge"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function b(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>r});var t=a(67294);const o={},d=t.createContext(o);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);