(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"6XmT":function(e,a){e.exports='<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">\n  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n  <Navbar.Toggle aria-controls="responsive-navbar-nav" />\n  <Navbar.Collapse id="responsive-navbar-nav">\n    <Nav className="mr-auto">\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">\n        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n    <Nav>\n      <Nav.Link href="#deets">More deets</Nav.Link>\n      <Nav.Link eventKey={2} href="#memes">\n        Dank memes\n      </Nav.Link>\n    </Nav>\n  </Navbar.Collapse>\n</Navbar>;\n'},"Gs+v":function(e,a,n){"use strict";n.r(a);var t=n("mXGw"),r=n.n(t),o=n("J4hU"),l=n("+xvc"),i=n("h55t"),c=n("DA+T"),s=n("vXRK"),d=n("1u5/"),v=n("pHbE"),m=n.n(v),p=n("Us+Q"),h=n.n(p),u=n("6XmT"),b=n.n(u),N=n("OWxa"),g=n.n(N),f=n("xNZB"),w=n.n(f),E=n("Sh3P"),k=n.n(E),x=n("PQpg"),y=n.n(x),B=n("TokV"),D=n.n(B),L=n("bpMW"),S=n.n(L),I=n("r+yI");a.default=Object(I.a)((function(e){var a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.default,{h:"1",id:"navbars"},"Navbars"),r.a.createElement("p",{className:"lead"},"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more"),r.a.createElement(l.default,{h:"2",id:"navbars-overview"},"Overview"),r.a.createElement("p",null,"Here’s what you need to know before getting started with the Navbar:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Use the ",r.a.createElement("code",null,"expand")," prop to allow for collapsing the Navbar at lower breakpoints."),r.a.createElement("li",null,"Navbars and their contents are fluid by default. Use optional"," ",r.a.createElement("a",{href:"#navbars-containers"},"containers ")," to limit their horizontal width."),r.a.createElement("li",null,"Use spacing and flex utilities to size and position content")),r.a.createElement("p",null,"A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint."),r.a.createElement(d.a,{codeText:m.a}),r.a.createElement(l.default,{h:"2",id:"navbars-brand"},"Brand"),r.a.createElement("p",null,"A simple flexible branding component. Images are supported but will likely require custom styling to work well."),r.a.createElement(d.a,{codeText:h.a}),r.a.createElement(l.default,{h:"2",id:"navbars-form"},"Forms"),r.a.createElement("p",null,"Use ",r.a.createElement("code",null,"<Form inline>")," and your various form controls within the Navbar. Align the contents as needed with utility classes."),r.a.createElement(d.a,{codeText:w.a}),r.a.createElement(l.default,{h:"2",id:"navbars-text-link"},"Text and Non-nav links"),r.a.createElement("p",null,"Loose text and links can be wrapped ",r.a.createElement("code",null,"Navbar.Text")," in order to correctly align it vertically."),r.a.createElement(d.a,{codeText:y.a}),r.a.createElement(l.default,{h:"2",id:"navbars-colors"},"Color schemes"),r.a.createElement("p",null,"Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. Choose from"," ",r.a.createElement("code",null,'variant="light"')," for use with light background colors, or"," ",r.a.createElement("code",null,'variant="dark"')," for dark background colors. Then, customize with the ",r.a.createElement("code",null,"bg")," prop or any custom css!"),r.a.createElement(d.a,{codeText:g.a}),r.a.createElement(l.default,{h:"2",id:"navbars-containers"},"Containers"),r.a.createElement("p",null,"While not required, you can wrap the Navbar in a"," ",r.a.createElement("code",null,"<Container>")," component to center it on a page, or add one within to only center the contents of a"," ",r.a.createElement("a",{href:"#navbars-placement"},"fixed or static top navbar"),"."),r.a.createElement(d.a,{codeText:D.a}),r.a.createElement("p",null,"When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified"," ",r.a.createElement("code",null,"expand={'sm' | 'md' | 'lg' | 'xl'}")," prop. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed."),r.a.createElement(d.a,{codeText:S.a}),r.a.createElement(l.default,{h:"2",id:"navbars-placement"},"Placement"),r.a.createElement("p",null,"You can use Bootstrap's"," ",r.a.createElement(o.a,{path:"/utilities/position/"},"position utilities")," to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use"," ",r.a.createElement("code",null,"position: fixed"),", meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., padding-top on the"," ",r.a.createElement("code",null,"<body>"),") to prevent overlap with other elements. Also note that"," ",r.a.createElement("strong",null,r.a.createElement("code",null,".sticky-top")," uses ",r.a.createElement("code",null,"position: sticky"),", which"," ",r.a.createElement("a",{href:"https://caniuse.com/#feat=css-sticky"},"isn’t fully supported in every browser")),"."),r.a.createElement("p",null,"Since these positioning needs are so common for Navbars, we've added convenience props for them"),r.a.createElement("h3",{className:"h4"},"Fixed top"),r.a.createElement(c.default,{codeText:' <Navbar fixed="top" />'}),r.a.createElement("h3",{className:"h4"},"Fixed bottom"),r.a.createElement(c.default,{codeText:' <Navbar fixed="bottom" />'}),r.a.createElement("h3",{className:"h4"},"Sticky top"),r.a.createElement(c.default,{codeText:' <Navbar sticky="top" />'}),r.a.createElement(l.default,{h:"2",id:"navbars-nav-scroll"},"Scrolling"),r.a.createElement("p",null,"You can use the ",r.a.createElement("code",null,"navbarScroll")," prop in a"," ",r.a.createElement("code",null,"<Nav>")," to enable vertical scrolling within the toggleable contents of a collapsed navbar. See the"," ",r.a.createElement(o.a,{path:"/components/navbar/#scrolling"},"Bootstrap docs")," ","for more information."),r.a.createElement(d.a,{codeText:k.a}),r.a.createElement(l.default,{h:"2",id:"navbars-mobile-friendly"},"Responsive behaviors"),r.a.createElement("p",null,"Use the ",r.a.createElement("code",null,"expand")," prop as well as the"," ",r.a.createElement("code",null,"Navbar.Toggle")," and ",r.a.createElement("code",null,"Navbar.Collapse")," components to control when content collapses behind a button."),r.a.createElement("p",null,"Set the ",r.a.createElement("code",null,"defaultExpanded")," prop to make the Navbar start expanded. Set ",r.a.createElement("code",null,"collapseOnSelect")," to make the Navbar collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the ",r.a.createElement("code",null,"expanded")," and"," ",r.a.createElement("code",null,"onToggle")," props."),r.a.createElement(i.a,{theme:"warning"},"Watch out! You ",r.a.createElement("strong",null,"need")," to provide a breakpoint value to"," ",r.a.createElement("code",null,"expand")," in order for the Navbar to collapse at all."),r.a.createElement(d.a,{codeText:b.a}),r.a.createElement(l.default,{h:"2",id:"navbar-api"},"API"),r.a.createElement(s.a,{metadata:a.Navbar}),r.a.createElement(s.a,{metadata:a.NavbarBrand,exportedBy:a.Navbar}),r.a.createElement(s.a,{metadata:a.NavbarToggle,exportedBy:a.Navbar}),r.a.createElement(s.a,{metadata:a.NavbarCollapse,exportedBy:a.Navbar}))}))},J4hU:function(e,a,n){"use strict";var t=n("mXGw"),r=n.n(t);a.a=function(e){var a=e.path,n=e.children;return r.a.createElement("a",{href:"https://getbootstrap.com/docs/4.6"+a},n)}},OWxa:function(e,a){e.exports='<>\n  <Navbar bg="dark" variant="dark">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-info">Search</Button>\n    </Form>\n  </Navbar>\n  <br />\n  <Navbar bg="primary" variant="dark">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-light">Search</Button>\n    </Form>\n  </Navbar>\n\n  <br />\n  <Navbar bg="light" variant="light">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-primary">Search</Button>\n    </Form>\n  </Navbar>\n</>;\n'},PQpg:function(e,a){e.exports='<Navbar>\n  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>\n  <Navbar.Toggle />\n  <Navbar.Collapse className="justify-content-end">\n    <Navbar.Text>\n      Signed in as: <a href="#login">Mark Otto</a>\n    </Navbar.Text>\n  </Navbar.Collapse>\n</Navbar>;\n'},Q6D8:function(e,a,n){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},Sh3P:function(e,a){e.exports='<Navbar bg="light" expand="lg">\n  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>\n  <Navbar.Toggle aria-controls="navbarScroll" />\n  <Navbar.Collapse id="navbarScroll">\n    <Nav\n      className="mr-auto my-2 my-lg-0"\n      style={{ maxHeight: \'100px\' }}\n      navbarScroll\n    >\n      <Nav.Link href="#action1">Home</Nav.Link>\n      <Nav.Link href="#action2">Link</Nav.Link>\n      <NavDropdown title="Link" id="navbarScrollingDropdown">\n        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>\n        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>\n      </NavDropdown>\n      <Nav.Link href="#" disabled>\n        Link\n      </Nav.Link>\n    </Nav>\n    <Form className="d-flex">\n      <FormControl\n        type="search"\n        placeholder="Search"\n        className="mr-2"\n        aria-label="Search"\n      />\n      <Button variant="outline-success">Search</Button>\n    </Form>\n  </Navbar.Collapse>\n</Navbar>;\n'},TokV:function(e,a){e.exports='<Container>\n  <Navbar expand="lg" variant="light" bg="light">\n    <Navbar.Brand href="#">Navbar</Navbar.Brand>\n  </Navbar>\n</Container>;\n'},"Us+Q":function(e,a){e.exports='<>\n  <Navbar bg="light">\n    <Navbar.Brand href="#home">Brand link</Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="light">\n    <Navbar.Brand>Brand text</Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="dark">\n    <Navbar.Brand href="#home">\n      <img\n        src="/logo.svg"\n        width="30"\n        height="30"\n        className="d-inline-block align-top"\n        alt="React Bootstrap logo"\n      />\n    </Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="dark" variant="dark">\n    <Navbar.Brand href="#home">\n      <img\n        alt=""\n        src="/logo.svg"\n        width="30"\n        height="30"\n        className="d-inline-block align-top"\n      />{\' \'}\n      React Bootstrap\n    </Navbar.Brand>\n  </Navbar>\n</>;\n'},bpMW:function(e,a){e.exports='<Navbar expand="lg" variant="light" bg="light">\n  <Container>\n    <Navbar.Brand href="#">Navbar</Navbar.Brand>\n  </Container>\n</Navbar>;\n'},h55t:function(e,a,n){"use strict";var t=n("mXGw"),r=n.n(t),o=n("Q6D8");a.a=function(e){var a=e.title,n=e.children,t=e.theme;return r.a.createElement("aside",{role:"note",className:o[t||"warning"]},a&&r.a.createElement("header",{className:"h5"},a),r.a.createElement("div",null,n))}},pHbE:function(e,a){e.exports='<Navbar bg="light" expand="lg">\n  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n  <Navbar.Toggle aria-controls="basic-navbar-nav" />\n  <Navbar.Collapse id="basic-navbar-nav">\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#link">Link</Nav.Link>\n      <NavDropdown title="Dropdown" id="basic-nav-dropdown">\n        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-success">Search</Button>\n    </Form>\n  </Navbar.Collapse>\n</Navbar>;\n'},"r+yI":function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n("mXGw"),r=n.n(t),o=n("Snbm"),l=n("aArQ");function i(e){return function(a){var n=a.location.pathname,t=l.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(t=o.a),r.a.createElement(t,{location:a.location},r.a.createElement(e,a))}}},xNZB:function(e,a){e.exports='<Navbar className="bg-light justify-content-between">\n  <Form inline>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        placeholder="Username"\n        aria-label="Username"\n        aria-describedby="basic-addon1"\n      />\n    </InputGroup>\n  </Form>\n  <Form inline>\n    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />\n    <Button type="submit">Submit</Button>\n  </Form>\n</Navbar>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-navbar-js-c1d00c4ef988bdb499c9.js.map