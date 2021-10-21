(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"6XmT":function(a,n){a.exports='<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">\n  <Container>\n  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n  <Navbar.Toggle aria-controls="responsive-navbar-nav" />\n  <Navbar.Collapse id="responsive-navbar-nav">\n    <Nav className="me-auto">\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">\n        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n    <Nav>\n      <Nav.Link href="#deets">More deets</Nav.Link>\n      <Nav.Link eventKey={2} href="#memes">\n        Dank memes\n      </Nav.Link>\n    </Nav>\n  </Navbar.Collapse>\n  </Container>\n</Navbar>;\n'},"Gs+v":function(a,n,e){"use strict";e.r(n);var r=e("oYCi"),t=e("J4hU"),o=e("+xvc"),i=e("h55t"),c=e("DA+T"),s=e("vXRK"),l=e("1u5/"),d=e("pHbE"),v=e.n(d),b=e("Us+Q"),h=e.n(b),p=e("6XmT"),N=e.n(p),f=e("OWxa"),j=e.n(f),m=e("Sh3P"),x=e.n(m),u=e("hi/f"),g=e.n(u),O=e("PQpg"),w=e.n(O),k=e("TokV"),y=e.n(k),D=e("bpMW"),C=e.n(D),B=e("r+yI");n.default=Object(B.a)((function(a){var n=a.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.default,{h:"1",id:"navbars",children:"Navbars"}),Object(r.jsx)("p",{className:"lead",children:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more"}),Object(r.jsx)(o.default,{h:"2",id:"navbars-overview",children:"Overview"}),Object(r.jsx)("p",{children:"Here’s what you need to know before getting started with the Navbar:"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Use the ",Object(r.jsx)("code",{children:"expand"})," prop to allow for collapsing the Navbar at lower breakpoints."]}),Object(r.jsxs)("li",{children:["Navbars and their contents are fluid by default. Use optional"," ",Object(r.jsx)("a",{href:"#navbars-containers",children:"containers "})," to limit their horizontal width."]}),Object(r.jsx)("li",{children:"Use spacing and flex utilities to size and position content"})]}),Object(r.jsx)("p",{children:"A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint."}),Object(r.jsx)(l.a,{codeText:v.a}),Object(r.jsx)(o.default,{h:"2",id:"navbars-brand",children:"Brand"}),Object(r.jsx)("p",{children:"A simple flexible branding component. Images are supported but will likely require custom styling to work well."}),Object(r.jsx)(l.a,{codeText:h.a}),Object(r.jsx)(o.default,{h:"2",id:"navbars-form",children:"Forms"}),Object(r.jsx)(o.default,{h:"2",id:"navbars-text-link",children:"Text and Non-nav links"}),Object(r.jsxs)("p",{children:["Loose text and links can be wrapped ",Object(r.jsx)("code",{children:"Navbar.Text"})," in order to correctly align it vertically."]}),Object(r.jsx)(l.a,{codeText:w.a}),Object(r.jsx)(o.default,{h:"2",id:"navbars-colors",children:"Color schemes"}),Object(r.jsxs)("p",{children:["Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. Choose from"," ",Object(r.jsx)("code",{children:'variant="light"'})," for use with light background colors, or"," ",Object(r.jsx)("code",{children:'variant="dark"'})," for dark background colors. Then, customize with the ",Object(r.jsx)("code",{children:"bg"})," prop or any custom css!"]}),Object(r.jsx)(l.a,{codeText:j.a}),Object(r.jsx)(o.default,{h:"2",id:"navbars-containers",children:"Containers"}),Object(r.jsxs)("p",{children:["While not required, you can wrap the Navbar in a"," ",Object(r.jsx)("code",{children:"<Container>"})," component to center it on a page, or add one within to only center the contents of a"," ",Object(r.jsx)("a",{href:"#navbars-placement",children:"fixed or static top navbar"}),"."]}),Object(r.jsx)(l.a,{codeText:y.a}),Object(r.jsxs)("p",{children:["When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified"," ",Object(r.jsx)("code",{children:"expand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'}"})," prop. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed."]}),Object(r.jsx)(l.a,{codeText:C.a}),Object(r.jsx)(o.default,{h:"2",id:"navbars-placement",children:"Placement"}),Object(r.jsxs)("p",{children:["You can use Bootstrap's"," ",Object(r.jsx)(t.a,{path:"/utilities/position/",children:"position utilities"})," to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use"," ",Object(r.jsx)("code",{children:"position: fixed"}),", meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., padding-top on the"," ",Object(r.jsx)("code",{children:"<body>"}),") to prevent overlap with other elements. Also note that"," ",Object(r.jsxs)("strong",{children:[Object(r.jsx)("code",{children:".sticky-top"})," uses ",Object(r.jsx)("code",{children:"position: sticky"}),", which"," ",Object(r.jsx)("a",{href:"https://caniuse.com/#feat=css-sticky",children:"isn’t fully supported in every browser"})]}),"."]}),Object(r.jsx)("p",{children:"Since these positioning needs are so common for Navbars, we've added convenience props for them"}),Object(r.jsx)("h3",{className:"h4",children:"Fixed top"}),Object(r.jsx)(c.default,{codeText:' <Navbar fixed="top" />'}),Object(r.jsx)("h3",{className:"h4",children:"Fixed bottom"}),Object(r.jsx)(c.default,{codeText:' <Navbar fixed="bottom" />'}),Object(r.jsx)("h3",{className:"h4",children:"Sticky top"}),Object(r.jsx)(c.default,{codeText:' <Navbar sticky="top" />'}),Object(r.jsx)(o.default,{h:"2",id:"navbars-nav-scroll",children:"Scrolling"}),Object(r.jsxs)("p",{children:["You can use the ",Object(r.jsx)("code",{children:"navbarScroll"})," prop in a"," ",Object(r.jsx)("code",{children:"<Nav>"})," to enable vertical scrolling within the toggleable contents of a collapsed navbar. See the"," ",Object(r.jsx)(t.a,{path:"/components/navbar/#scrolling",children:"Bootstrap docs"})," ","for more information."]}),Object(r.jsx)(l.a,{codeText:x.a}),Object(r.jsx)(o.default,{h:"2",id:"navbars-mobile-friendly",children:"Responsive behaviors"}),Object(r.jsxs)("p",{children:["Use the ",Object(r.jsx)("code",{children:"expand"})," prop as well as the"," ",Object(r.jsx)("code",{children:"Navbar.Toggle"})," and ",Object(r.jsx)("code",{children:"Navbar.Collapse"})," components to control when content collapses behind a button."]}),Object(r.jsxs)("p",{children:["Set the ",Object(r.jsx)("code",{children:"defaultExpanded"})," prop to make the Navbar start expanded. Set ",Object(r.jsx)("code",{children:"collapseOnSelect"})," to make the Navbar collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the ",Object(r.jsx)("code",{children:"expanded"})," and"," ",Object(r.jsx)("code",{children:"onToggle"})," props."]}),Object(r.jsxs)(i.a,{theme:"warning",children:["Watch out! You ",Object(r.jsx)("strong",{children:"need"})," to provide a breakpoint value to"," ",Object(r.jsx)("code",{children:"expand"})," in order for the Navbar to collapse at all."]}),Object(r.jsx)(l.a,{codeText:N.a}),Object(r.jsx)(o.default,{h:"3",id:"navbar-offcanvas",children:"Offcanvas"}),Object(r.jsxs)("p",{children:["Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. We extend both the offcanvas default styles and use the ",Object(r.jsx)("code",{children:"expand"})," prop to create a dynamic and flexible navigation sidebar."]}),Object(r.jsxs)("p",{children:["In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, set the ",Object(r.jsx)("code",{children:"expand"})," prop to"," ",Object(r.jsx)("code",{children:"false"}),"."]}),Object(r.jsx)(l.a,{codeText:g.a}),Object(r.jsx)(o.default,{h:"2",id:"navbar-api",children:"API"}),Object(r.jsx)(s.a,{metadata:n.Navbar}),Object(r.jsx)(s.a,{metadata:n.NavbarBrand,exportedBy:n.Navbar}),Object(r.jsx)(s.a,{metadata:n.NavbarToggle,exportedBy:n.Navbar}),Object(r.jsx)(s.a,{metadata:n.NavbarCollapse,exportedBy:n.Navbar})]})}))},J4hU:function(a,n,e){"use strict";var r=e("oYCi");n.a=function(a){var n=a.path,e=a.children;return Object(r.jsx)("a",{href:"https://getbootstrap.com/docs/5.1"+n,children:e})}},OWxa:function(a,n){a.exports='<>\n  <Navbar bg="dark" variant="dark">\n    <Container>\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="me-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    </Container>\n  </Navbar>\n  <br />\n  <Navbar bg="primary" variant="dark">\n    <Container>\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="me-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    </Container>\n  </Navbar>\n\n  <br />\n  <Navbar bg="light" variant="light">\n    <Container>\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="me-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    </Container>\n  </Navbar>\n</>;\n'},PQpg:function(a,n){a.exports='<Navbar>\n  <Container>\n    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>\n    <Navbar.Toggle />\n    <Navbar.Collapse className="justify-content-end">\n      <Navbar.Text>\n        Signed in as: <a href="#login">Mark Otto</a>\n      </Navbar.Text>\n    </Navbar.Collapse>\n  </Container>\n</Navbar>;\n'},Q6D8:function(a,n,e){a.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},Sh3P:function(a,n){a.exports='<Navbar bg="light" expand="lg">\n  <Container fluid>\n    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>\n    <Navbar.Toggle aria-controls="navbarScroll" />\n    <Navbar.Collapse id="navbarScroll">\n      <Nav\n        className="me-auto my-2 my-lg-0"\n        style={{ maxHeight: \'100px\' }}\n        navbarScroll\n      >\n        <Nav.Link href="#action1">Home</Nav.Link>\n        <Nav.Link href="#action2">Link</Nav.Link>\n        <NavDropdown title="Link" id="navbarScrollingDropdown">\n          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>\n          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>\n          <NavDropdown.Divider />\n          <NavDropdown.Item href="#action5">\n            Something else here\n          </NavDropdown.Item>\n        </NavDropdown>\n        <Nav.Link href="#" disabled>\n          Link\n        </Nav.Link>\n      </Nav>\n      <Form className="d-flex">\n        <FormControl\n          type="search"\n          placeholder="Search"\n          className="me-2"\n          aria-label="Search"\n        />\n        <Button variant="outline-success">Search</Button>\n      </Form>\n    </Navbar.Collapse>\n  </Container>\n</Navbar>;\n'},TokV:function(a,n){a.exports='<Container>\n  <Navbar expand="lg" variant="light" bg="light">\n    <Container>\n      <Navbar.Brand href="#">Navbar</Navbar.Brand>\n    </Container>\n  </Navbar>\n</Container>;\n'},"Us+Q":function(a,n){a.exports='<>\n  <Navbar bg="light">\n    <Container>\n      <Navbar.Brand href="#home">Brand link</Navbar.Brand>\n    </Container>\n  </Navbar>\n  <br />\n  <Navbar bg="light">\n    <Container>\n      <Navbar.Brand>Brand text</Navbar.Brand>\n    </Container>\n  </Navbar>\n  <br />\n  <Navbar bg="dark">\n  <Container>\n    <Navbar.Brand href="#home">\n      <img\n        src="/logo.svg"\n        width="30"\n        height="30"\n        className="d-inline-block align-top"\n        alt="React Bootstrap logo"\n      />\n    </Navbar.Brand>\n  </Container>\n  </Navbar>\n  <br />\n  <Navbar bg="dark" variant="dark">\n    <Container>\n      <Navbar.Brand href="#home">\n        <img\n          alt=""\n          src="/logo.svg"\n          width="30"\n          height="30"\n          className="d-inline-block align-top"\n        />{\' \'}\n      React Bootstrap\n      </Navbar.Brand>\n    </Container>\n  </Navbar>\n</>;\n'},bpMW:function(a,n){a.exports='<Navbar expand="lg" variant="light" bg="light">\n  <Container>\n    <Navbar.Brand href="#">Navbar</Navbar.Brand>\n  </Container>\n</Navbar>;\n'},h55t:function(a,n,e){"use strict";var r=e("oYCi"),t=e("Q6D8");n.a=function(a){var n=a.title,e=a.children,o=a.theme;return Object(r.jsxs)("aside",{role:"note",className:t[o||"warning"],children:[n&&Object(r.jsx)("header",{className:"h5",children:n}),Object(r.jsx)("div",{children:e})]})}},"hi/f":function(a,n){a.exports='<Navbar bg="light" expand={false}>\n  <Container fluid>\n    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>\n    <Navbar.Toggle aria-controls="offcanvasNavbar" />\n    <Navbar.Offcanvas\n      id="offcanvasNavbar"\n      aria-labelledby="offcanvasNavbarLabel"\n      placement="end"\n    >\n      <Offcanvas.Header closeButton>\n        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>\n      </Offcanvas.Header>\n      <Offcanvas.Body>\n        <Nav className="justify-content-end flex-grow-1 pe-3">\n          <Nav.Link href="#action1">Home</Nav.Link>\n          <Nav.Link href="#action2">Link</Nav.Link>\n          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">\n            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>\n            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>\n            <NavDropdown.Divider />\n            <NavDropdown.Item href="#action5">\n              Something else here\n            </NavDropdown.Item>\n          </NavDropdown>\n        </Nav>\n        <Form className="d-flex">\n          <FormControl\n            type="search"\n            placeholder="Search"\n            className="me-2"\n            aria-label="Search"\n          />\n          <Button variant="outline-success">Search</Button>\n        </Form>\n      </Offcanvas.Body>\n    </Navbar.Offcanvas>\n  </Container>\n</Navbar>;\n'},pHbE:function(a,n){a.exports='<Navbar bg="light" expand="lg">\n  <Container>\n    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n    <Navbar.Toggle aria-controls="basic-navbar-nav" />\n    <Navbar.Collapse id="basic-navbar-nav">\n      <Nav className="me-auto">\n        <Nav.Link href="#home">Home</Nav.Link>\n        <Nav.Link href="#link">Link</Nav.Link>\n        <NavDropdown title="Dropdown" id="basic-nav-dropdown">\n          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>\n          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n          <NavDropdown.Divider />\n          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>\n        </NavDropdown>\n      </Nav>\n    </Navbar.Collapse>\n  </Container>\n</Navbar>;\n'},"r+yI":function(a,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e("rePB"),t=e("oYCi"),o=e("Snbm"),i=e("aArQ");function c(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,r)}return e}function s(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(r.a)(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function l(a){return function(n){var e=n.location.pathname,r=i.a;return(e.startsWith("/getting-started")||e.startsWith("/layout")||e.startsWith("/components")||e.startsWith("/utilities"))&&(r=o.a),Object(t.jsx)(r,{location:n.location,children:Object(t.jsx)(a,s({},n))})}}}}]);
//# sourceMappingURL=component---src-pages-components-navbar-js-a0b9960b88ff3c4a7d2c.js.map