webpackJsonp([48395803980310],{404:function(e,t){"use strict";e.exports='class ControlledCarousel extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleSelect = this.handleSelect.bind(this);\n\n    this.state = {\n      index: 0,\n      direction: null\n    };\n  }\n\n  handleSelect(selectedIndex, e) {\n    alert(`selected=${selectedIndex}, direction=${e.direction}`);\n    this.setState({\n      index: selectedIndex,\n      direction: e.direction\n    });\n  }\n\n  render() {\n    const { index, direction } = this.state;\n\n    return (\n      <Carousel\n        activeIndex={index}\n        direction={direction}\n        onSelect={this.handleSelect}\n      >\n        <Carousel.Item>\n          <img width={900} height={500} alt="900x500" src="/carousel.png" />\n          <Carousel.Caption>\n            <h3>First slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </Carousel.Caption>\n        </Carousel.Item>\n        <Carousel.Item>\n          <img width={900} height={500} alt="900x500" src="/carousel.png" />\n          <Carousel.Caption>\n            <h3>Second slide label</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </Carousel.Caption>\n        </Carousel.Item>\n        <Carousel.Item>\n          <img width={900} height={500} alt="900x500" src="/carousel.png" />\n          <Carousel.Caption>\n            <h3>Third slide label</h3>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n            </p>\n          </Carousel.Caption>\n        </Carousel.Item>\n      </Carousel>\n    );\n  }\n}\n\nrender(<ControlledCarousel />);\n'},405:function(e,t){"use strict";e.exports='<Carousel>\n  <Carousel.Item>\n    <img width={900} height={500} alt="900x500" src="/carousel.png" />\n    <Carousel.Caption>\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n  <Carousel.Item>\n    <img width={900} height={500} alt="900x500" src="/carousel.png" />\n    <Carousel.Caption>\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n  <Carousel.Item>\n    <img width={900} height={500} alt="900x500" src="/carousel.png" />\n    <Carousel.Caption>\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n</Carousel>;\n'},511:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.data;return s.default.createElement("div",{className:"bs-docs-section"},s.default.createElement("h2",{className:"page-header"},s.default.createElement(u.default,{id:"carousels"},"Carousels")," ",s.default.createElement("small",null,"Carousel, Carousel.Item, Carousel.Caption")),s.default.createElement("h3",null,s.default.createElement(u.default,{id:"carousels-uncontrolled"},"Uncontrolled")),s.default.createElement("p",null,"Allow the component to control its own state."),s.default.createElement(m.default,{codeText:C.default,exampleClassName:"bs-example-tabs"}),s.default.createElement("h3",null,s.default.createElement(u.default,{id:"carousels-controlled"},"Controlled")),s.default.createElement("p",null,"Pass down the active state on render via props."),s.default.createElement(m.default,{codeText:f.default,exampleClassName:"bs-example-tabs"}),s.default.createElement("h3",null,s.default.createElement(u.default,{id:"carousels-props"},"Props")),s.default.createElement("h4",null,s.default.createElement(u.default,{id:"carousels-props-carousel"},"Carousel")),s.default.createElement(d.default,{metadata:t.carousel}),s.default.createElement("h4",null,s.default.createElement(u.default,{id:"carousels-props-item"},"Carousel.Item")),s.default.createElement(d.default,{metadata:t.item}),s.default.createElement("h4",null,s.default.createElement(u.default,{id:"carousels-props-caption"},"Carousel.Caption")),s.default.createElement(d.default,{metadata:t.caption}))}t.__esModule=!0,t.query=void 0,t.default=n;var r=l(1),s=a(r),o=l(12),u=a(o),i=l(14),d=a(i),c=l(13),m=a(c),p=l(405),C=a(p),h=l(404),f=a(h);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-components-carousel-js-fab0961a0bea951c7b7c.js.map