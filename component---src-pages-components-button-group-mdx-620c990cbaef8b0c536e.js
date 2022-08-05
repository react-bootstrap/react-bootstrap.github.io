(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0cJH":function(t,n){t.exports='import Button from \'react-bootstrap/Button\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction NestedExample() {\n  return (\n    <ButtonGroup>\n      <Button>1</Button>\n      <Button>2</Button>\n\n      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">\n        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n      </DropdownButton>\n    </ButtonGroup>\n  );\n}\n\nexport default NestedExample;\n'},H1uq:function(t,n){t.exports='import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction VerticalExample() {\n  return (\n    <ButtonGroup vertical>\n      <Button>Button</Button>\n      <Button>Button</Button>\n\n      <DropdownButton\n        as={ButtonGroup}\n        title="Dropdown"\n        id="bg-vertical-dropdown-1"\n      >\n        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n      </DropdownButton>\n\n      <Button>Button</Button>\n      <Button>Button</Button>\n\n      <DropdownButton\n        as={ButtonGroup}\n        title="Dropdown"\n        id="bg-vertical-dropdown-2"\n      >\n        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n      </DropdownButton>\n\n      <DropdownButton\n        as={ButtonGroup}\n        title="Dropdown"\n        id="bg-vertical-dropdown-3"\n      >\n        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n      </DropdownButton>\n    </ButtonGroup>\n  );\n}\n\nexport default VerticalExample;\n'},KIF8:function(t,n){t.exports='import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport ButtonToolbar from \'react-bootstrap/ButtonToolbar\';\n\nfunction ToolbarBasicExample() {\n  return (\n    <ButtonToolbar aria-label="Toolbar with button groups">\n      <ButtonGroup className="me-2" aria-label="First group">\n        <Button>1</Button> <Button>2</Button> <Button>3</Button>{\' \'}\n        <Button>4</Button>\n      </ButtonGroup>\n      <ButtonGroup className="me-2" aria-label="Second group">\n        <Button>5</Button> <Button>6</Button> <Button>7</Button>\n      </ButtonGroup>\n      <ButtonGroup aria-label="Third group">\n        <Button>8</Button>\n      </ButtonGroup>\n    </ButtonToolbar>\n  );\n}\n\nexport default ToolbarBasicExample;\n'},R0cR:function(t,n){t.exports='import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport ButtonToolbar from \'react-bootstrap/ButtonToolbar\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction ToolbarExample() {\n  return (\n    <>\n      <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">\n        <ButtonGroup className="me-2" aria-label="First group">\n          <Button variant="secondary">1</Button>{\' \'}\n          <Button variant="secondary">2</Button>{\' \'}\n          <Button variant="secondary">3</Button>{\' \'}\n          <Button variant="secondary">4</Button>\n        </ButtonGroup>\n        <InputGroup>\n          <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>\n          <Form.Control\n            type="text"\n            placeholder="Input group example"\n            aria-label="Input group example"\n            aria-describedby="btnGroupAddon"\n          />\n        </InputGroup>\n      </ButtonToolbar>\n\n      <ButtonToolbar\n        className="justify-content-between"\n        aria-label="Toolbar with Button groups"\n      >\n        <ButtonGroup aria-label="First group">\n          <Button variant="secondary">1</Button>{\' \'}\n          <Button variant="secondary">2</Button>{\' \'}\n          <Button variant="secondary">3</Button>{\' \'}\n          <Button variant="secondary">4</Button>\n        </ButtonGroup>\n        <InputGroup>\n          <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>\n          <Form.Control\n            type="text"\n            placeholder="Input group example"\n            aria-label="Input group example"\n            aria-describedby="btnGroupAddon2"\n          />\n        </InputGroup>\n      </ButtonToolbar>\n    </>\n  );\n}\n\nexport default ToolbarExample;\n'},d7j5:function(t,n){t.exports='import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\n\nfunction SizesExample() {\n  return (\n    <>\n      <ButtonGroup size="lg" className="mb-2">\n        <Button>Left</Button>\n        <Button>Middle</Button>\n        <Button>Right</Button>\n      </ButtonGroup>\n      <br />\n      <ButtonGroup className="mb-2">\n        <Button>Left</Button>\n        <Button>Middle</Button>\n        <Button>Right</Button>\n      </ButtonGroup>\n      <br />\n      <ButtonGroup size="sm">\n        <Button>Left</Button>\n        <Button>Middle</Button>\n        <Button>Right</Button>\n      </ButtonGroup>\n    </>\n  );\n}\n\nexport default SizesExample;\n'},exVO:function(t,n){t.exports='import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\n\nfunction BasicExample() {\n  return (\n    <ButtonGroup aria-label="Basic example">\n      <Button variant="secondary">Left</Button>\n      <Button variant="secondary">Middle</Button>\n      <Button variant="secondary">Right</Button>\n    </ButtonGroup>\n  );\n}\n\nexport default BasicExample;\n'},yCrB:function(t,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return j})),o.d(n,"default",(function(){return I}));var e,r=o("wx14"),u=o("zLVn"),a=(o("mXGw"),o("7ljp")),p=o("Snbm"),d=o("vXRK"),i=o("1u5/"),m=o("exVO"),l=o.n(m),B=o("0cJH"),c=o.n(B),s=o("d7j5"),b=o.n(s),x=o("R0cR"),w=o.n(x),G=o("KIF8"),f=o.n(G),y=o("H1uq"),D=o.n(y),g=["components"],j={},T=(e="PageHeader",function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",t)}),O={query:"812196171",_frontmatter:j},v=p.a;function I(t){var n=t.components,o=Object(u.a)(t,g);return Object(a.mdx)(v,Object(r.a)({},O,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(T,{title:"Button group",subTitle:"Group a series of buttons together on a single line or stack them in a vertical column.",mdxType:"PageHeader"}),Object(a.mdx)("h2",{id:"basic-example"},"Basic example"),Object(a.mdx)("p",null,"Wrap a series of ",Object(a.mdx)("inlineCode",{parentName:"p"},"<Button>"),"s in a ",Object(a.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"."),Object(a.mdx)(i.a,{codeText:l.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"button-toolbar"},"Button toolbar"),Object(a.mdx)("p",null,"Combine sets of ",Object(a.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"s into a ",Object(a.mdx)("inlineCode",{parentName:"p"},"<ButtonToolbar>")," for more complex components."),Object(a.mdx)(i.a,{codeText:f.a,mdxType:"ReactPlayground"}),Object(a.mdx)("p",null,"Feel free to mix input groups with button groups in your toolbars.\nSimilar to the example above, you’ll likely need some utilities though\nto space things properly."),Object(a.mdx)(i.a,{codeText:w.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"sizing"},"Sizing"),Object(a.mdx)("p",null,"Instead of applying button sizing props to every button in a group, just\nadd ",Object(a.mdx)("inlineCode",{parentName:"p"},"size")," prop to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"."),Object(a.mdx)(i.a,{codeText:b.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"nesting"},"Nesting"),Object(a.mdx)("p",null,"You can place other button types within the\n",Object(a.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>")," like ",Object(a.mdx)("inlineCode",{parentName:"p"},"<DropdownButton>"),"s."),Object(a.mdx)(i.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"vertical-variation"},"Vertical variation"),Object(a.mdx)("p",null,"Make a set of buttons appear vertically stacked rather than\nhorizontally, by adding ",Object(a.mdx)("inlineCode",{parentName:"p"},"vertical")," to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),".\n",Object(a.mdx)("strong",{parentName:"p"},"Split button dropdowns are not supported here.")),Object(a.mdx)(i.a,{codeText:D.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"api"},"API"),Object(a.mdx)(d.a,{metadata:o.data.ButtonGroup,mdxType:"ComponentApi"}),Object(a.mdx)(d.a,{metadata:o.data.ButtonToolbar,mdxType:"ComponentApi"}),Object(a.mdx)("p",null,";"))}I.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-button-group-mdx-620c990cbaef8b0c536e.js.map