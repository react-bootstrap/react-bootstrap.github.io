(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"4nCw":function(n,t){n.exports='import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction ButtonsExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <Button variant="outline-secondary" id="button-addon1">\n          Button\n        </Button>\n        <Form.Control\n          aria-label="Example text with button addon"\n          aria-describedby="basic-addon1"\n        />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Form.Control\n          placeholder="Recipient\'s username"\n          aria-label="Recipient\'s username"\n          aria-describedby="basic-addon2"\n        />\n        <Button variant="outline-secondary" id="button-addon2">\n          Button\n        </Button>\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Button variant="outline-secondary">Button</Button>\n        <Button variant="outline-secondary">Button</Button>\n        <Form.Control aria-label="Example text with two button addons" />\n      </InputGroup>\n\n      <InputGroup>\n        <Form.Control\n          placeholder="Recipient\'s username"\n          aria-label="Recipient\'s username with two button addons"\n        />\n        <Button variant="outline-secondary">Button</Button>\n        <Button variant="outline-secondary">Button</Button>\n      </InputGroup>\n    </>\n  );\n}\n\nexport default ButtonsExample;\n'},"7hyW":function(n,t){n.exports='import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction CheckboxesExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <InputGroup.Checkbox aria-label="Checkbox for following text input" />\n        <Form.Control aria-label="Text input with checkbox" />\n      </InputGroup>\n      <InputGroup>\n        <InputGroup.Radio aria-label="Radio button for following text input" />\n        <Form.Control aria-label="Text input with radio button" />\n      </InputGroup>\n    </>\n  );\n}\n\nexport default CheckboxesExample;\n'},JbmH:function(n,t){n.exports='import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction MultipleInputsExample() {\n  return (\n    <InputGroup className="mb-3">\n      <InputGroup.Text>First and last name</InputGroup.Text>\n      <Form.Control aria-label="First name" />\n      <Form.Control aria-label="Last name" />\n    </InputGroup>\n  );\n}\n\nexport default MultipleInputsExample;\n'},fzXE:function(n,t){n.exports='import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction SizesExample() {\n  return (\n    <>\n      <InputGroup size="sm" className="mb-3">\n        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>\n        <Form.Control\n          aria-label="Small"\n          aria-describedby="inputGroup-sizing-sm"\n        />\n      </InputGroup>\n      <br />\n      <InputGroup className="mb-3">\n        <InputGroup.Text id="inputGroup-sizing-default">\n          Default\n        </InputGroup.Text>\n        <Form.Control\n          aria-label="Default"\n          aria-describedby="inputGroup-sizing-default"\n        />\n      </InputGroup>\n      <br />\n      <InputGroup size="lg">\n        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>\n        <Form.Control\n          aria-label="Large"\n          aria-describedby="inputGroup-sizing-sm"\n        />\n      </InputGroup>\n    </>\n  );\n}\n\nexport default SizesExample;\n'},"ng+X":function(n,t){n.exports='import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction MultipleAddonsExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <InputGroup.Text>$</InputGroup.Text>\n        <InputGroup.Text>0.00</InputGroup.Text>\n        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />\n      </InputGroup>\n      <InputGroup>\n        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />\n        <InputGroup.Text>$</InputGroup.Text>\n        <InputGroup.Text>0.00</InputGroup.Text>\n      </InputGroup>\n    </>\n  );\n}\n\nexport default MultipleAddonsExample;\n'},oiVA:function(n,t){n.exports='import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction BasicExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n        <Form.Control\n          placeholder="Username"\n          aria-label="Username"\n          aria-describedby="basic-addon1"\n        />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Form.Control\n          placeholder="Recipient\'s username"\n          aria-label="Recipient\'s username"\n          aria-describedby="basic-addon2"\n        />\n        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>\n      </InputGroup>\n\n      <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>\n      <InputGroup className="mb-3">\n        <InputGroup.Text id="basic-addon3">\n          https://example.com/users/\n        </InputGroup.Text>\n        <Form.Control id="basic-url" aria-describedby="basic-addon3" />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <InputGroup.Text>$</InputGroup.Text>\n        <Form.Control aria-label="Amount (to the nearest dollar)" />\n        <InputGroup.Text>.00</InputGroup.Text>\n      </InputGroup>\n\n      <InputGroup>\n        <InputGroup.Text>With textarea</InputGroup.Text>\n        <Form.Control as="textarea" aria-label="With textarea" />\n      </InputGroup>\n    </>\n  );\n}\n\nexport default BasicExample;\n'},rGuw:function(n,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return C})),o.d(t,"default",(function(){return S}));var e,r=o("wx14"),p=o("zLVn"),a=(o("mXGw"),o("7ljp")),u=o("Snbm"),i=o("vXRK"),d=o("1u5/"),m=o("oiVA"),l=o.n(m),s=o("z1EJ"),c=o.n(s),b=o("4nCw"),I=o.n(b),x=o("7hyW"),w=o.n(x),G=o("ng+X"),h=o.n(G),f=o("JbmH"),D=o.n(f),g=o("vs/B"),T=o.n(g),y=o("fzXE"),B=o.n(y),F=["components"],C={},j=(e="PageHeader",function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",n)}),v={query:"1902248718",_frontmatter:C},O=u.a;function S(n){var t=n.components,o=Object(p.a)(n,F);return Object(a.mdx)(O,Object(r.a)({},v,o,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(j,{title:"InputGroup",subTitle:"Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.",mdxType:"PageHeader"}),Object(a.mdx)("h2",{id:"example"},"Example"),Object(a.mdx)("p",null,"Place one add-on or button on either side of an input. You may also\nplace one on both sides of an input. Remember to place\n",Object(a.mdx)("inlineCode",{parentName:"p"},"<label>"),"s outside the input group."),Object(a.mdx)(d.a,{codeText:l.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"sizing"},"Sizing"),Object(a.mdx)("p",null,"Add the relative form sizing classes to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"InputGroup")," and\ncontents within will automatically resize—no need for repeating the form\ncontrol size classes on each element."),Object(a.mdx)(d.a,{codeText:B.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"checkboxes-and-radios"},"Checkboxes and radios"),Object(a.mdx)("p",null,"Use the ",Object(a.mdx)("inlineCode",{parentName:"p"},"InputGroup.Radio")," or\n",Object(a.mdx)("inlineCode",{parentName:"p"},"InputGroup.Checkbox")," to add options to an input group."),Object(a.mdx)(d.a,{codeText:w.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"multiple-inputs"},"Multiple inputs"),Object(a.mdx)("p",null,"While multiple inputs are supported visually, validation styles are only\navailable for input groups with a single input."),Object(a.mdx)(d.a,{codeText:D.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"multiple-addons"},"Multiple addons"),Object(a.mdx)("p",null,"Multiple add-ons are supported and can be mixed with checkbox and radio\ninput versions."),Object(a.mdx)(d.a,{codeText:h.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"button-addons"},"Button addons"),Object(a.mdx)(d.a,{codeText:I.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"buttons-with-dropdowns"},"Buttons with Dropdowns"),Object(a.mdx)(d.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"segmented-buttons"},"Segmented buttons"),Object(a.mdx)(d.a,{codeText:T.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"api"},"API"),Object(a.mdx)(i.a,{metadata:o.data.InputGroup,mdxType:"ComponentApi"}))}S.isMDXComponent=!0},"vs/B":function(n,t){n.exports='import Dropdown from \'react-bootstrap/Dropdown\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport SplitButton from \'react-bootstrap/SplitButton\';\n\nfunction SegmentedButtonDropdownsExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <SplitButton\n          variant="outline-secondary"\n          title="Action"\n          id="segmented-button-dropdown-1"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </SplitButton>\n        <Form.Control aria-label="Text input with dropdown button" />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Form.Control aria-label="Text input with dropdown button" />\n        <SplitButton\n          variant="outline-secondary"\n          title="Action"\n          id="segmented-button-dropdown-2"\n          alignRight\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </SplitButton>\n      </InputGroup>\n    </>\n  );\n}\n\nexport default SegmentedButtonDropdownsExample;\n'},z1EJ:function(n,t){n.exports='import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction ButtonDropdownsExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <DropdownButton\n          variant="outline-secondary"\n          title="Dropdown"\n          id="input-group-dropdown-1"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </DropdownButton>\n        <Form.Control aria-label="Text input with dropdown button" />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Form.Control aria-label="Text input with dropdown button" />\n\n        <DropdownButton\n          variant="outline-secondary"\n          title="Dropdown"\n          id="input-group-dropdown-2"\n          align="end"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </DropdownButton>\n      </InputGroup>\n\n      <InputGroup>\n        <DropdownButton\n          variant="outline-secondary"\n          title="Dropdown"\n          id="input-group-dropdown-3"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </DropdownButton>\n        <Form.Control aria-label="Text input with 2 dropdown buttons" />\n        <DropdownButton\n          variant="outline-secondary"\n          title="Dropdown"\n          id="input-group-dropdown-4"\n          align="end"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </DropdownButton>\n      </InputGroup>\n    </>\n  );\n}\n\nexport default ButtonDropdownsExample;\n'}}]);
//# sourceMappingURL=component---src-pages-forms-input-group-mdx-5e2acbc6b6258367aff8.js.map