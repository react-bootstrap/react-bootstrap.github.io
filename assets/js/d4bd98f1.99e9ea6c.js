"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[7931],{26074:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>x,contentTitle:()=>N,default:()=>j,frontMatter:()=>h,metadata:()=>f,toc:()=>u});var r=e(85893),o=e(11151);const t='import Container from \'react-bootstrap/Container\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction BasicExample() {\n  return (\n    <Navbar expand="lg" className="bg-body-tertiary">\n      <Container>\n        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n        <Navbar.Toggle aria-controls="basic-navbar-nav" />\n        <Navbar.Collapse id="basic-navbar-nav">\n          <Nav className="me-auto">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#link">Link</Nav.Link>\n            <NavDropdown title="Dropdown" id="basic-nav-dropdown">\n              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.2">\n                Another action\n              </NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n              <NavDropdown.Divider />\n              <NavDropdown.Item href="#action/3.4">\n                Separated link\n              </NavDropdown.Item>\n            </NavDropdown>\n          </Nav>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default BasicExample;\n',i='import Container from \'react-bootstrap/Container\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction BrandExample() {\n  return (\n    <>\n      <Navbar className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand href="#home">Brand link</Navbar.Brand>\n        </Container>\n      </Navbar>\n      <br />\n      <Navbar className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand>Brand text</Navbar.Brand>\n        </Container>\n      </Navbar>\n      <br />\n      <Navbar className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand href="#home">\n            <img\n              src="/img/logo.svg"\n              width="30"\n              height="30"\n              className="d-inline-block align-top"\n              alt="React Bootstrap logo"\n            />\n          </Navbar.Brand>\n        </Container>\n      </Navbar>\n      <br />\n      <Navbar className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand href="#home">\n            <img\n              alt=""\n              src="/img/logo.svg"\n              width="30"\n              height="30"\n              className="d-inline-block align-top"\n            />{\' \'}\n            React Bootstrap\n          </Navbar.Brand>\n        </Container>\n      </Navbar>\n    </>\n  );\n}\n\nexport default BrandExample;\n',s='import Navbar from \'react-bootstrap/Navbar\';\nimport Form from \'react-bootstrap/Form\';\nimport Button from \'react-bootstrap/Button\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\nimport Col from \'react-bootstrap/Col\';\n\nfunction FormExample() {\n  return (\n    <Navbar className="bg-body-tertiary justify-content-between">\n      <Form inline>\n        <InputGroup>\n          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n          <Form.Control\n            placeholder="Username"\n            aria-label="Username"\n            aria-describedby="basic-addon1"\n          />\n        </InputGroup>\n      </Form>\n      <Form inline>\n        <Row>\n          <Col xs="auto">\n            <Form.Control\n              type="text"\n              placeholder="Search"\n              className=" mr-sm-2"\n            />\n          </Col>\n          <Col xs="auto">\n            <Button type="submit">Submit</Button>\n          </Col>\n        </Row>\n      </Form>\n    </Navbar>\n  );\n}\n\nexport default FormExample;\n',l='import Container from \'react-bootstrap/Container\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction CollapsibleExample() {\n  return (\n    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">\n      <Container>\n        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n        <Navbar.Toggle aria-controls="responsive-navbar-nav" />\n        <Navbar.Collapse id="responsive-navbar-nav">\n          <Nav className="me-auto">\n            <Nav.Link href="#features">Features</Nav.Link>\n            <Nav.Link href="#pricing">Pricing</Nav.Link>\n            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">\n              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.2">\n                Another action\n              </NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n              <NavDropdown.Divider />\n              <NavDropdown.Item href="#action/3.4">\n                Separated link\n              </NavDropdown.Item>\n            </NavDropdown>\n          </Nav>\n          <Nav>\n            <Nav.Link href="#deets">More deets</Nav.Link>\n            <Nav.Link eventKey={2} href="#memes">\n              Dank memes\n            </Nav.Link>\n          </Nav>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default CollapsibleExample;\n',d='import Container from \'react-bootstrap/Container\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction ColorSchemesExample() {\n  return (\n    <>\n      <Navbar bg="dark" data-bs-theme="dark">\n        <Container>\n          <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n          <Nav className="me-auto">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#features">Features</Nav.Link>\n            <Nav.Link href="#pricing">Pricing</Nav.Link>\n          </Nav>\n        </Container>\n      </Navbar>\n      <br />\n      <Navbar bg="primary" data-bs-theme="dark">\n        <Container>\n          <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n          <Nav className="me-auto">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#features">Features</Nav.Link>\n            <Nav.Link href="#pricing">Pricing</Nav.Link>\n          </Nav>\n        </Container>\n      </Navbar>\n\n      <br />\n      <Navbar bg="light" data-bs-theme="light">\n        <Container>\n          <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n          <Nav className="me-auto">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#features">Features</Nav.Link>\n            <Nav.Link href="#pricing">Pricing</Nav.Link>\n          </Nav>\n        </Container>\n      </Navbar>\n    </>\n  );\n}\n\nexport default ColorSchemesExample;\n',c='import Button from \'react-bootstrap/Button\';\nimport Container from \'react-bootstrap/Container\';\nimport Form from \'react-bootstrap/Form\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction NavScrollExample() {\n  return (\n    <Navbar expand="lg" className="bg-body-tertiary">\n      <Container fluid>\n        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>\n        <Navbar.Toggle aria-controls="navbarScroll" />\n        <Navbar.Collapse id="navbarScroll">\n          <Nav\n            className="me-auto my-2 my-lg-0"\n            style={{ maxHeight: \'100px\' }}\n            navbarScroll\n          >\n            <Nav.Link href="#action1">Home</Nav.Link>\n            <Nav.Link href="#action2">Link</Nav.Link>\n            <NavDropdown title="Link" id="navbarScrollingDropdown">\n              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>\n              <NavDropdown.Item href="#action4">\n                Another action\n              </NavDropdown.Item>\n              <NavDropdown.Divider />\n              <NavDropdown.Item href="#action5">\n                Something else here\n              </NavDropdown.Item>\n            </NavDropdown>\n            <Nav.Link href="#" disabled>\n              Link\n            </Nav.Link>\n          </Nav>\n          <Form className="d-flex">\n            <Form.Control\n              type="search"\n              placeholder="Search"\n              className="me-2"\n              aria-label="Search"\n            />\n            <Button variant="outline-success">Search</Button>\n          </Form>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default NavScrollExample;\n',v='import Button from \'react-bootstrap/Button\';\nimport Container from \'react-bootstrap/Container\';\nimport Form from \'react-bootstrap/Form\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\nimport Offcanvas from \'react-bootstrap/Offcanvas\';\n\nfunction OffcanvasExample() {\n  return (\n    <>\n      {[false, \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'].map((expand) => (\n        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">\n          <Container fluid>\n            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>\n            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />\n            <Navbar.Offcanvas\n              id={`offcanvasNavbar-expand-${expand}`}\n              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}\n              placement="end"\n            >\n              <Offcanvas.Header closeButton>\n                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>\n                  Offcanvas\n                </Offcanvas.Title>\n              </Offcanvas.Header>\n              <Offcanvas.Body>\n                <Nav className="justify-content-end flex-grow-1 pe-3">\n                  <Nav.Link href="#action1">Home</Nav.Link>\n                  <Nav.Link href="#action2">Link</Nav.Link>\n                  <NavDropdown\n                    title="Dropdown"\n                    id={`offcanvasNavbarDropdown-expand-${expand}`}\n                  >\n                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>\n                    <NavDropdown.Item href="#action4">\n                      Another action\n                    </NavDropdown.Item>\n                    <NavDropdown.Divider />\n                    <NavDropdown.Item href="#action5">\n                      Something else here\n                    </NavDropdown.Item>\n                  </NavDropdown>\n                </Nav>\n                <Form className="d-flex">\n                  <Form.Control\n                    type="search"\n                    placeholder="Search"\n                    className="me-2"\n                    aria-label="Search"\n                  />\n                  <Button variant="outline-success">Search</Button>\n                </Form>\n              </Offcanvas.Body>\n            </Navbar.Offcanvas>\n          </Container>\n        </Navbar>\n      ))}\n    </>\n  );\n}\n\nexport default OffcanvasExample;\n',p='import Container from \'react-bootstrap/Container\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction TextLinkExample() {\n  return (\n    <Navbar className="bg-body-tertiary">\n      <Container>\n        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>\n        <Navbar.Toggle />\n        <Navbar.Collapse className="justify-content-end">\n          <Navbar.Text>\n            Signed in as: <a href="#login">Mark Otto</a>\n          </Navbar.Text>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default TextLinkExample;\n',m='import Container from \'react-bootstrap/Container\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction ContainerOutsideExample() {\n  return (\n    <Container>\n      <Navbar expand="lg" className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand href="#">Navbar</Navbar.Brand>\n        </Container>\n      </Navbar>\n    </Container>\n  );\n}\n\nexport default ContainerOutsideExample;\n',b='import Container from \'react-bootstrap/Container\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction ContainerInsideExample() {\n  return (\n    <Navbar expand="lg" className="bg-body-tertiary">\n      <Container>\n        <Navbar.Brand href="#">Navbar</Navbar.Brand>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default ContainerInsideExample;\n',h={title:"Navbars",description:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more."},N=void 0,f={id:"components/navbar",title:"Navbars",description:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more.",source:"@site/docs/components/navbar.mdx",sourceDirName:"components",slug:"/components/navbar",permalink:"/docs/components/navbar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Navbars",description:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more."},sidebar:"sidebar",previous:{title:"Modals",permalink:"/docs/components/modal"},next:{title:"Navs and tabs",permalink:"/docs/components/navs"}},x={},u=[{value:"Overview",id:"overview",level:2},{value:"Brand",id:"brand",level:2},{value:"Forms",id:"forms",level:2},{value:"Text and Non-nav links",id:"text-and-non-nav-links",level:2},{value:"Color schemes",id:"color-schemes",level:2},{value:"Containers",id:"containers",level:2},{value:"Placement",id:"placement",level:2},{value:"Fixed top",id:"fixed-top",level:3},{value:"Fixed bottom",id:"fixed-bottom",level:3},{value:"Sticky top",id:"sticky-top",level:3},{value:"Sticky bottom",id:"sticky-bottom",level:3},{value:"Scrolling",id:"scrolling",level:2},{value:"Responsive behaviors",id:"responsive-behaviors",level:2},{value:"Offcanvas",id:"offcanvas",level:3},{value:"API",id:"api",level:2},{value:"Navbar",id:"navbar",level:3},{value:"NavbarBrand",id:"navbarbrand",level:3},{value:"NavbarToggle",id:"navbartoggle",level:3},{value:"NavbarCollapse",id:"navbarcollapse",level:3}];function g(n){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components},{CodeBlock:e,DocLink:h,PropsTable:N}=a;return e||w("CodeBlock",!0),h||w("DocLink",!0),N||w("PropsTable",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(a.p,{children:"Here\u2019s what you need to know before getting started with the Navbar:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Use the ",(0,r.jsx)(a.code,{children:"expand"})," prop to allow for collapsing the ",(0,r.jsx)(a.code,{children:"Navbar"})," at lower breakpoints."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"Navbar"}),"s and their contents are fluid by default. Use optional\n",(0,r.jsx)(a.a,{href:"#containers",children:"containers"})," to limit their horizontal width."]}),"\n",(0,r.jsx)(a.li,{children:"Use spacing and flex utilities to size and position content"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"A responsive navigation header, including support for branding, navigation, and more.\nHere\u2019s an example of all the sub-components included in a responsive light-themed\nnavbar that automatically collapses at the lg (large) breakpoint."}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:t}),"\n",(0,r.jsx)(a.h2,{id:"brand",children:"Brand"}),"\n",(0,r.jsx)(a.p,{children:"A simple flexible branding component. Images are supported but will\nlikely require custom styling to work well."}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:i}),"\n",(0,r.jsx)(a.h2,{id:"forms",children:"Forms"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"<Form inline>"})," and your various form controls within the Navbar.\nAlign the contents as needed with utility classes."]}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:s}),"\n",(0,r.jsx)(a.h2,{id:"text-and-non-nav-links",children:"Text and Non-nav links"}),"\n",(0,r.jsxs)(a.p,{children:["Loose text and links can be wrapped ",(0,r.jsx)(a.code,{children:"Navbar.Text"})," in order to\ncorrectly align it vertically."]}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:p}),"\n",(0,r.jsx)(a.h2,{id:"color-schemes",children:"Color schemes"}),"\n",(0,r.jsxs)(a.p,{children:["Theming the navbar has never been easier thanks to the combination of theming classes\nand background-color utilities. Choose from ",(0,r.jsx)(a.code,{children:'variant="light"'})," for use with light\nbackground colors, or ",(0,r.jsx)(a.code,{children:'variant="dark"'})," for dark background colors. Then, customize\nwith the ",(0,r.jsx)(a.code,{children:"bg"})," prop or any custom css!"]}),"\n",(0,r.jsx)(a.admonition,{title:"Heads up!",type:"caution",children:(0,r.jsxs)(a.p,{children:["Dark variants for components were deprecated in Bootstrap v5.3.0 with the introduction\nof color modes. Instead of adding ",(0,r.jsx)(a.code,{children:'variant="dark"'}),", set ",(0,r.jsx)(a.code,{children:'data-bs-theme="dark"'})," on the\n",(0,r.jsx)(a.code,{children:"Navbar"}),"."]})}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:d}),"\n",(0,r.jsx)(a.h2,{id:"containers",children:"Containers"}),"\n",(0,r.jsxs)(a.p,{children:["While not required, you can wrap the Navbar in a ",(0,r.jsx)(a.code,{children:"<Container>"})," component\nto center it on a page, or add one within to only center the contents of a\n",(0,r.jsx)(a.a,{href:"#placement",children:"fixed or static top navbar"}),"."]}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:m}),"\n",(0,r.jsxs)(a.p,{children:["When the container is within your navbar, its horizontal padding is removed at\nbreakpoints lower than your specified ",(0,r.jsx)(a.code,{children:"expand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'}"}),"\nprop. This ensures we\u2019re not doubling up on padding unnecessarily on lower\nviewports when your navbar is collapsed."]}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:b}),"\n",(0,r.jsx)(a.h2,{id:"placement",children:"Placement"}),"\n",(0,r.jsxs)(a.p,{children:["You can use Bootstrap's ",(0,r.jsx)(h,{path:"/utilities/position/",children:"position utilities"})," to\nplace navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or\nstickied to the top (scrolls with the page until it reaches the top, then stays there), or\nstickied to the bottom (scrolls with the page until it reaches the bottom, then stays there)."]}),"\n",(0,r.jsxs)(a.p,{children:["Fixed navbars use ",(0,r.jsx)(a.code,{children:"position: fixed"}),", meaning they\u2019re pulled from the normal flow of the DOM and may\nrequire custom CSS (e.g., padding-top on the ",(0,r.jsx)(a.code,{children:"<body>"}),") to prevent overlap with other elements."]}),"\n",(0,r.jsx)(a.p,{children:"Since these positioning needs are so common for navbars, we've added convenience props for them."}),"\n",(0,r.jsx)(a.h3,{id:"fixed-top",children:"Fixed top"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'<Navbar fixed="top" />\n'})}),"\n",(0,r.jsx)(a.h3,{id:"fixed-bottom",children:"Fixed bottom"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'<Navbar fixed="bottom" />\n'})}),"\n",(0,r.jsx)(a.h3,{id:"sticky-top",children:"Sticky top"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'<Navbar sticky="top" />\n'})}),"\n",(0,r.jsx)(a.h3,{id:"sticky-bottom",children:"Sticky bottom"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:'<Navbar sticky="bottom" />\n'})}),"\n",(0,r.jsx)(a.h2,{id:"scrolling",children:"Scrolling"}),"\n",(0,r.jsxs)(a.p,{children:["You can use the ",(0,r.jsx)(a.code,{children:"navbarScroll"})," prop in a ",(0,r.jsx)(a.code,{children:"<Nav>"})," to enable vertical scrolling within the toggleable\ncontents of a collapsed navbar. See the ",(0,r.jsx)(h,{path:"/components/navbar/#scrolling",children:"Bootstrap docs"}),"\nfor more information."]}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:c}),"\n",(0,r.jsx)(a.h2,{id:"responsive-behaviors",children:"Responsive behaviors"}),"\n",(0,r.jsxs)(a.p,{children:["Use the ",(0,r.jsx)(a.code,{children:"expand"})," prop as well as the ",(0,r.jsx)(a.code,{children:"Navbar.Toggle"})," and ",(0,r.jsx)(a.code,{children:"Navbar.Collapse"})," components to control\nwhen content collapses behind a button."]}),"\n",(0,r.jsxs)(a.p,{children:["Set the ",(0,r.jsx)(a.code,{children:"defaultExpanded"})," prop to make the Navbar start expanded. Set ",(0,r.jsx)(a.code,{children:"collapseOnSelect"})," to make\nthe Navbar collapse automatically when the user selects an item. You can also finely control\nthe collapsing behavior by using the ",(0,r.jsx)(a.code,{children:"expanded"})," and ",(0,r.jsx)(a.code,{children:"onToggle"})," props."]}),"\n",(0,r.jsx)(a.admonition,{type:"caution",children:(0,r.jsxs)(a.p,{children:["Watch out! You ",(0,r.jsx)(a.strong,{children:"need"})," to provide a breakpoint value to ",(0,r.jsx)(a.code,{children:"expand"})," in order for the Navbar to collapse at all."]})}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:l}),"\n",(0,r.jsx)(a.h3,{id:"offcanvas",children:"Offcanvas"}),"\n",(0,r.jsxs)(a.p,{children:["Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component.\nWe extend both the offcanvas default styles and use the ",(0,r.jsx)(a.code,{children:"expand"})," prop to create a dynamic and\nflexible navigation sidebar."]}),"\n",(0,r.jsxs)(a.p,{children:["In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints,\nset the ",(0,r.jsx)(a.code,{children:"expand"})," prop to ",(0,r.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(e,{language:"jsx",live:!0,children:v}),"\n",(0,r.jsx)(a.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(a.h3,{id:"navbar",children:"Navbar"}),"\n",(0,r.jsx)(N,{name:"Navbar"}),"\n",(0,r.jsx)(a.h3,{id:"navbarbrand",children:"NavbarBrand"}),"\n",(0,r.jsx)(N,{name:"NavbarBrand"}),"\n",(0,r.jsx)(a.h3,{id:"navbartoggle",children:"NavbarToggle"}),"\n",(0,r.jsx)(N,{name:"NavbarToggle"}),"\n",(0,r.jsx)(a.h3,{id:"navbarcollapse",children:"NavbarCollapse"}),"\n",(0,r.jsx)(N,{name:"NavbarCollapse"})]})}function j(n={}){const{wrapper:a}={...(0,o.a)(),...n.components};return a?(0,r.jsx)(a,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}function w(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,a,e)=>{e.d(a,{Z:()=>s,a:()=>i});var r=e(67294);const o={},t=r.createContext(o);function i(n){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function s(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(t.Provider,{value:a},n.children)}}}]);