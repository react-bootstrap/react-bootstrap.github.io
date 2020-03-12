(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"3E8N":function(t,e){t.exports='function Example() {\n  const [showA, setShowA] = useState(true);\n  const [showB, setShowB] = useState(true);\n\n  const toggleShowA = () => setShowA(!showA);\n  const toggleShowB = () => setShowB(!showB);\n\n  return (\n    <Row>\n      <Col xs={6}>\n        <Toast show={showA} onClose={toggleShowA}>\n          <Toast.Header>\n            <img\n              src="holder.js/20x20?text=%20"\n              className="rounded mr-2"\n              alt=""\n            />\n            <strong className="mr-auto">Bootstrap</strong>\n            <small>11 mins ago</small>\n          </Toast.Header>\n          <Toast.Body>Woohoo, you\'re reading this text in a Toast!</Toast.Body>\n        </Toast>\n      </Col>\n      <Col xs={6}>\n        <Button onClick={toggleShowA}>\n          Toggle Toast <strong>with</strong> Animation\n        </Button>\n      </Col>\n      <Col xs={6} className="my-1">\n        <Toast onClose={toggleShowB} show={showB} animation={false}>\n          <Toast.Header>\n            <img\n              src="holder.js/20x20?text=%20"\n              className="rounded mr-2"\n              alt=""\n            />\n            <strong className="mr-auto">Bootstrap</strong>\n            <small>11 mins ago</small>\n          </Toast.Header>\n          <Toast.Body>Woohoo, you\'re reading this text in a Toast!</Toast.Body>\n        </Toast>\n      </Col>\n      <Col xs={6}>\n        <Button onClick={toggleShowB}>\n          Toggle Toast <strong>without</strong> Animation\n        </Button>\n      </Col>\n    </Row>\n  );\n}\n\nrender(<Example />);\n'},"8RJs":function(t,e){t.exports='<div\n  aria-live="polite"\n  aria-atomic="true"\n  style={{\n    position: \'relative\',\n    minHeight: \'200px\',\n  }}\n>\n  <div\n    style={{\n      position: \'absolute\',\n      top: 0,\n      right: 0,\n    }}\n  >\n    <Toast>\n      <Toast.Header>\n        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />\n        <strong className="mr-auto">Bootstrap</strong>\n        <small>just now</small>\n      </Toast.Header>\n      <Toast.Body>See? Just like this.</Toast.Body>\n    </Toast>\n    <Toast>\n      <Toast.Header>\n        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />\n        <strong className="mr-auto">Bootstrap</strong>\n        <small>2 seconds ago</small>\n      </Toast.Header>\n      <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>\n    </Toast>\n  </div>\n</div>;\n'},VY1a:function(t,e){t.exports='<>\n  <Toast>\n    <Toast.Header>\n      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />\n      <strong className="mr-auto">Bootstrap</strong>\n      <small>just now</small>\n    </Toast.Header>\n    <Toast.Body>See? Just like this.</Toast.Body>\n  </Toast>\n  <Toast>\n    <Toast.Header>\n      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />\n      <strong className="mr-auto">Bootstrap</strong>\n      <small>2 seconds ago</small>\n    </Toast.Header>\n    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>\n  </Toast>\n</>;\n'},XCLx:function(t,e,o){"use strict";o.r(e),o.d(e,"query",(function(){return w})),o.d(e,"_frontmatter",(function(){return b})),o.d(e,"default",(function(){return f}));o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("91GP"),o("mXGw");var n=o("7ljp"),a=o("Snbm"),s=(o("h55t"),o("vXRK")),l=o("1u5/"),r=o("ZUzh"),i=o.n(r),d=o("3E8N"),m=o.n(d),c=o("VY1a"),u=o.n(c),h=o("sn94"),g=o.n(h),p=o("8RJs"),x=o.n(p),T=o("kgy5"),y=o.n(T);var w="886344048",b={},B={query:w,_frontmatter:b},j=a.a;function f(t){var e=t.components,o=function(t,e){if(null==t)return{};var o,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,["components"]);return Object(n.mdx)(j,Object.assign({},B,o,{components:e,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"toasts"},"Toasts"),Object(n.mdx)("p",{className:"lead"},"Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."),Object(n.mdx)("p",null,"Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position."),Object(n.mdx)("h2",{id:"examples"},"Examples"),Object(n.mdx)("h3",{id:"basic"},"Basic"),Object(n.mdx)("p",null,"To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use display: flex, allowing easy alignment of content thanks to our margin and flexbox utilities."),Object(n.mdx)("p",null,"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button."),Object(n.mdx)(l.a,{codeText:i.a,mdxType:"ReactPlayground"}),Object(n.mdx)("h3",{id:"dismissible"},"Dismissible"),Object(n.mdx)(l.a,{codeText:m.a,mdxType:"ReactPlayground"}),Object(n.mdx)("h3",{id:"stacking"},"Stacking"),Object(n.mdx)("p",null,"When you have multiple toasts, we default to vertically stacking them in a readable manner."),Object(n.mdx)(l.a,{codeText:u.a,mdxType:"ReactPlayground"}),Object(n.mdx)("h3",{id:"placement"},"Placement"),Object(n.mdx)("p",null,"Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle."),Object(n.mdx)(l.a,{codeText:g.a,mdxType:"ReactPlayground"}),Object(n.mdx)("p",null,"For systems that generate more notifications, consider using a wrapping element so they can easily stack."),Object(n.mdx)(l.a,{codeText:x.a,mdxType:"ReactPlayground"}),Object(n.mdx)("h3",{id:"autohide"},"Autohide"),Object(n.mdx)("p",null,"A Toast can also automatically hide after X milliseconds. For that, use the ",Object(n.mdx)("inlineCode",{parentName:"p"},"autohide")," prop in combination with ",Object(n.mdx)("inlineCode",{parentName:"p"},"delay")," the prop to sepecify the delay. But be aware, that it will only trigger the ",Object(n.mdx)("inlineCode",{parentName:"p"},"onClose")," function, you have to set manually the show property."),Object(n.mdx)(l.a,{codeText:y.a,mdxType:"ReactPlayground"}),Object(n.mdx)("h2",{id:"api"},"API"),Object(n.mdx)(s.a,{metadata:o.data.Toast,mdxType:"ComponentApi"}),Object(n.mdx)(s.a,{metadata:o.data.ToastHeader,mdxType:"ComponentApi"}),Object(n.mdx)(s.a,{metadata:o.data.ToastBody,mdxType:"ComponentApi"}))}f.isMDXComponent=!0},ZUzh:function(t,e){t.exports='<Toast>\n  <Toast.Header>\n    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />\n    <strong className="mr-auto">Bootstrap</strong>\n    <small>11 mins ago</small>\n  </Toast.Header>\n  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>\n</Toast>;\n'},h55t:function(t,e,o){"use strict";var n=o("mXGw"),a=o.n(n),s=o("Q6D8");e.a=function(t){var e=t.title,o=t.children,n=t.theme;return a.a.createElement("aside",{role:"note",className:s[n||"warning"]},e&&a.a.createElement("header",{className:"h5"},e),a.a.createElement("div",null,o))}},kgy5:function(t,e){t.exports='function Example() {\n  const [show, setShow] = useState(false);\n\n  return (\n    <Row>\n      <Col xs={6}>\n        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>\n          <Toast.Header>\n            <img\n              src="holder.js/20x20?text=%20"\n              className="rounded mr-2"\n              alt=""\n            />\n            <strong className="mr-auto">Bootstrap</strong>\n            <small>11 mins ago</small>\n          </Toast.Header>\n          <Toast.Body>Woohoo, you\'re reading this text in a Toast!</Toast.Body>\n        </Toast>\n      </Col>\n      <Col xs={6}>\n        <Button onClick={() => setShow(true)}>Show Toast</Button>\n      </Col>\n    </Row>\n  );\n}\n\nrender(<Example />);\n'},sn94:function(t,e){t.exports='<div\n  aria-live="polite"\n  aria-atomic="true"\n  style={{\n    position: \'relative\',\n    minHeight: \'100px\',\n  }}\n>\n  <Toast\n    style={{\n      position: \'absolute\',\n      top: 0,\n      right: 0,\n    }}\n  >\n    <Toast.Header>\n      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />\n      <strong className="mr-auto">Bootstrap</strong>\n      <small>just now</small>\n    </Toast.Header>\n    <Toast.Body>See? Just like this.</Toast.Body>\n  </Toast>\n</div>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-toasts-mdx-72736461a6841dce6977.js.map