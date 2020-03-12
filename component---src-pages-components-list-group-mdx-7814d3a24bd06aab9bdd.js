(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1SCY":function(t,e){t.exports="['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (\n  <ListGroup horizontal={breakpoint} className=\"my-2\" key={idx}>\n    <ListGroup.Item>This ListGroup</ListGroup.Item>\n    <ListGroup.Item>renders horizontally</ListGroup.Item>\n    <ListGroup.Item>on {breakpoint}</ListGroup.Item>\n    <ListGroup.Item>and above!</ListGroup.Item>\n  </ListGroup>\n));\n"},"1pZn":function(t,e){t.exports="<ListGroup horizontal>\n  <ListGroup.Item>This</ListGroup.Item>\n  <ListGroup.Item>ListGroup</ListGroup.Item>\n  <ListGroup.Item>renders</ListGroup.Item>\n  <ListGroup.Item>horizontally!</ListGroup.Item>\n</ListGroup>;\n"},HCbN:function(t,e){t.exports='<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">\n  <Row>\n    <Col sm={4}>\n      <ListGroup>\n        <ListGroup.Item action href="#link1">\n          Link 1\n        </ListGroup.Item>\n        <ListGroup.Item action href="#link2">\n          Link 2\n        </ListGroup.Item>\n      </ListGroup>\n    </Col>\n    <Col sm={8}>\n      <Tab.Content>\n        <Tab.Pane eventKey="#link1">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey="#link2">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n'},U9aP:function(t,e){t.exports='function alertClicked() {\n  alert(\'You clicked the third ListGroupItem\');\n}\n\nrender(\n  <ListGroup defaultActiveKey="#link1">\n    <ListGroup.Item action href="#link1">\n      Link 1\n    </ListGroup.Item>\n    <ListGroup.Item action href="#link2" disabled>\n      Link 2\n    </ListGroup.Item>\n    <ListGroup.Item action onClick={alertClicked}>\n      This one is a button\n    </ListGroup.Item>\n  </ListGroup>,\n);\n'},WVYW:function(t,e){t.exports='<ListGroup>\n  <ListGroup.Item>No style</ListGroup.Item>\n  <ListGroup.Item variant="primary">Primary</ListGroup.Item>\n  <ListGroup.Item action variant="secondary">\n    Secondary\n  </ListGroup.Item>\n  <ListGroup.Item action variant="success">\n    Success\n  </ListGroup.Item>\n  <ListGroup.Item action variant="danger">\n    Danger\n  </ListGroup.Item>\n  <ListGroup.Item action variant="warning">\n    Warning\n  </ListGroup.Item>\n  <ListGroup.Item action variant="info">\n    Info\n  </ListGroup.Item>\n  <ListGroup.Item action variant="light">\n    Light\n  </ListGroup.Item>\n  <ListGroup.Item action variant="dark">\n    Dark\n  </ListGroup.Item>\n</ListGroup>;\n'},"ZXI+":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return w})),n.d(e,"_frontmatter",(function(){return P})),n.d(e,"default",(function(){return S}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("mXGw");var i=n("7ljp"),a=n("Snbm"),o=n("h55t"),r=(n("tc9R"),n("vXRK")),s=n("1u5/"),p=(n("r+yI"),n("dT55")),m=n.n(p),u=n("U9aP"),l=n.n(u),d=n("eCiS"),c=n.n(d),G=n("hmu2"),L=n.n(G),b=n("lNSw"),x=n.n(b),I=n("WVYW"),h=n.n(I),j=n("rJDD"),O=n.n(j),y=n("1pZn"),f=n.n(y),g=n("1SCY"),v=n.n(g),C=n("HCbN"),N=n.n(C),T=n("bTvO"),k=n.n(T);var w="4157558864",P={},D={query:w,_frontmatter:P},R=a.a;function S(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["components"]);return Object(i.mdx)(R,Object.assign({},D,n,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"list-groups"},"List groups"),Object(i.mdx)("p",{className:"lead"},"List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within."),Object(i.mdx)("h2",{id:"basic-example"},"Basic Example"),Object(i.mdx)(s.a,{codeText:m.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"active-items"},"Active items"),Object(i.mdx)("p",null,"Set the ",Object(i.mdx)("inlineCode",{parentName:"p"},"active")," prop to indicate the list groups current active selection."),Object(i.mdx)(s.a,{codeText:c.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"disabled-items"},"Disabled items"),Object(i.mdx)("p",null,"Set the ",Object(i.mdx)("inlineCode",{parentName:"p"},"disabled")," prop to prevent actions on a ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ListGroup.Item>"),". For elements\nthat aren't naturally disable-able (like anchors) ",Object(i.mdx)("inlineCode",{parentName:"p"},"onClick")," handlers are added\nthat call ",Object(i.mdx)("inlineCode",{parentName:"p"},"preventDefault")," to mimick disabled behavior."),Object(i.mdx)(s.a,{codeText:L.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"actionable-items"},"Actionable items"),Object(i.mdx)("p",null,"Toggle the ",Object(i.mdx)("inlineCode",{parentName:"p"},"action")," prop to create ",Object(i.mdx)("em",null,"actionable")," list group\nitems, with disabled, hover and active styles. List item actions will render\na ",Object(i.mdx)("inlineCode",{parentName:"p"},"<button>")," or ",Object(i.mdx)("inlineCode",{parentName:"p"},"<a>")," (depending on the presence of an ",Object(i.mdx)("inlineCode",{parentName:"p"},"href"),") by default but\ncan be overridden by setting the ",Object(i.mdx)("inlineCode",{parentName:"p"},"as")," prop as usual."),Object(i.mdx)("p",null,"List items ",Object(i.mdx)("inlineCode",{parentName:"p"},"actions")," are distinct from plain items to ensure that click or tap\naffordances aren't applied to non-interactive items."),Object(i.mdx)(s.a,{codeText:l.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"flush"},"Flush"),Object(i.mdx)("p",null,"Add the ",Object(i.mdx)("inlineCode",{parentName:"p"},"flush")," variant to remove outer borders and rounded corners to render list group items\nedge-to-edge in a parent container ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/components/cards/#list-groups"}),"such as a ",Object(i.mdx)("inlineCode",{parentName:"a"},"Card")),"."),Object(i.mdx)(s.a,{codeText:O.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"horizontal"},"Horizontal"),Object(i.mdx)("p",null,"Use the ",Object(i.mdx)("inlineCode",{parentName:"p"},"horizontal")," prop to make the ListGroup render horizontally. Currently ",Object(i.mdx)("strong",{parentName:"p"},"horizontal list groups cannot be combined with flush list groups.")),Object(i.mdx)(s.a,{codeText:f.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"There are responsive variants to ",Object(i.mdx)("inlineCode",{parentName:"p"},"horizontal"),": setting it to ",Object(i.mdx)("inlineCode",{parentName:"p"},"{sm|md|lg|xl}")," makes the list group horizontal starting at that breakpoint’s ",Object(i.mdx)("inlineCode",{parentName:"p"},"min-width"),"."),Object(i.mdx)(s.a,{codeText:v.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"contextual-classes"},"Contextual classes"),Object(i.mdx)("p",null,"Use contextual variants on ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ListGroup.Item>"),"s to style them with a stateful background and color."),Object(i.mdx)(s.a,{codeText:x.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"When paired with ",Object(i.mdx)("inlineCode",{parentName:"p"},"action"),"s, additional hover and active styles apply."),Object(i.mdx)(s.a,{codeText:h.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)(o.a,{title:"Conveying meaning to assistive technologies",mdxType:"Callout"},"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the ",Object(i.mdx)("code",null,".sr-only")," class."),Object(i.mdx)("h2",{id:"tabbed-interfaces"},"Tabbed Interfaces"),Object(i.mdx)("p",null,"You can also use the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/components/tabs/"}),"Tab")," components to create ARIA compliant tabbable\ninterfaces with the ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ListGroup>")," component. Swap out the ",Object(i.mdx)("inlineCode",{parentName:"p"},"<Nav>")," component\nfor the list group and you are good to go."),Object(i.mdx)(s.a,{codeText:N.a,exampleClassName:k.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"api"},"API"),Object(i.mdx)(r.a,{metadata:n.data.ListGroup,mdxType:"ComponentApi"}),Object(i.mdx)(r.a,{metadata:n.data.ListGroupItem,exportedBy:n.data.ListGroup,mdxType:"ComponentApi"}))}S.isMDXComponent=!0},dT55:function(t,e){t.exports="<ListGroup>\n  <ListGroup.Item>Cras justo odio</ListGroup.Item>\n  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n  <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n</ListGroup>;\n"},eCiS:function(t,e){t.exports='<ListGroup as="ul">\n  <ListGroup.Item as="li" active>\n    Cras justo odio\n  </ListGroup.Item>\n  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>\n  <ListGroup.Item as="li" disabled>\n    Morbi leo risus\n  </ListGroup.Item>\n  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>\n</ListGroup>;\n'},h55t:function(t,e,n){"use strict";var i=n("mXGw"),a=n.n(i),o=n("Q6D8");e.a=function(t){var e=t.title,n=t.children,i=t.theme;return a.a.createElement("aside",{role:"note",className:o[i||"warning"]},e&&a.a.createElement("header",{className:"h5"},e),a.a.createElement("div",null,n))}},hmu2:function(t,e){t.exports="<ListGroup>\n  <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>\n  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n  <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n</ListGroup>;\n"},lNSw:function(t,e){t.exports='<ListGroup>\n  <ListGroup.Item>No style</ListGroup.Item>\n  <ListGroup.Item variant="primary">Primary</ListGroup.Item>\n  <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>\n  <ListGroup.Item variant="success">Success</ListGroup.Item>\n  <ListGroup.Item variant="danger">Danger</ListGroup.Item>\n  <ListGroup.Item variant="warning">Warning</ListGroup.Item>\n  <ListGroup.Item variant="info">Info</ListGroup.Item>\n  <ListGroup.Item variant="light">Light</ListGroup.Item>\n  <ListGroup.Item variant="dark">Dark</ListGroup.Item>\n</ListGroup>;\n'},rJDD:function(t,e){t.exports='<ListGroup variant="flush">\n  <ListGroup.Item>Cras justo odio</ListGroup.Item>\n  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n  <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n</ListGroup>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-list-group-mdx-7814d3a24bd06aab9bdd.js.map