(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{317:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E}),n.d(t,"query",function(){return T});var o=n(0),r=n.n(o),a=n(340),l=n(338),i=n(332),c=n(342),p=n(513),s=n.n(p),u=n(514),g=n.n(u),v=n(515),m=n.n(v),d=n(516),h=n.n(d),y=n(517),f=n.n(y);function E(e){var t=e.data;return r.a.createElement("div",{className:"bs-docs-section"},r.a.createElement("h2",{className:"page-header"},r.a.createElement(a.a,{id:"popovers"},"Popovers")," ",r.a.createElement("small",null,"Popover")),r.a.createElement("p",null,"The Popover, offers a more robust alternative to the Tooltip for displaying overlays of content."),r.a.createElement(c.a,{codeText:s.a}),r.a.createElement("h4",null,r.a.createElement(a.a,{id:"popovers-overlay-trigger"},"With OverlayTrigger")),r.a.createElement("p",null,"The Popover component, like the Tooltip can be used with an"," ",r.a.createElement("code",null,"OverlayTrigger")," Component, and positioned around it."),r.a.createElement(c.a,{codeText:g.a}),r.a.createElement("h4",null,r.a.createElement(a.a,{id:"popovers-trigger-behaviors"},"Trigger behaviors")),r.a.createElement("p",null,"It's inadvisable to use ",r.a.createElement("code",null,'"hover"')," or ",r.a.createElement("code",null,'"focus"')," ","triggers for popovers, because they have poor accessibility from keyboard and on mobile devices."),r.a.createElement(c.a,{codeText:m.a}),r.a.createElement("h4",null,r.a.createElement(a.a,{id:"popovers-in-container"},"Popover component in container")),r.a.createElement("p",null,"Specify ",r.a.createElement("code",null,"container")," to control the DOM element to which to append the overlay. This element must be a positioned element to allow correctly positioning the overlay."),r.a.createElement(c.a,{codeText:h.a,exampleClassName:"bs-example-popover-contained"}),r.a.createElement("h4",null,r.a.createElement(a.a,{id:"popovers-positioned-scrolling"},"Positioned popover components in scrolling container")),r.a.createElement(c.a,{codeText:f.a,exampleClassName:"bs-example-popover-scroll"}),r.a.createElement("h3",null,r.a.createElement(a.a,{id:"popover-props"},"Props"),r.a.createElement(l.a,{component:t.Popover.displayName})),r.a.createElement(i.a,{metadata:t.Popover}))}var T="187692814"},332:function(e,t,n){"use strict";n(95),n(333),n(94),n(65),n(93),n(334);var o=n(20),r=n.n(o),a=(n(335),n(52),n(0)),l=n.n(a),i=n(1),c=n.n(i),p=n(92),s=n(339),u=n(341),g=n(66),v=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getDisplayTypeName=function(e){return"func"===e?"function":"bool"===e?"boolean":e},n.getType=function(e){var t=this,n=e.type||{},o=this.getDisplayTypeName(n.name),r=e.doclets||{};switch(o){case"object":return o;case"union":return n.value.reduce(function(e,n,o,r){var a=t.getType({type:n});return l.a.isValidElement(a)&&(a=l.a.cloneElement(a,{key:o})),e=e.concat(a),o===r.length-1?e:e.concat(" | ")},[]);case"array":var a=this.getType({type:n.value});return l.a.createElement("span",null,"array<",a,">");case"enum":return this.renderEnum(n);case"custom":return(r.type||n.raw).trim().replace(/^\{/,"").replace(/\}$/,"");default:return o}},n._renderRows=function(e){var t=this;return e.filter(function(e){return e.type&&!e.doclets.private}).map(function(e){var n=e.name,o=e.description,r=e.doclets,a=e.defaultValue,i=o&&o.childMarkdownRemark.html;return l.a.createElement("tr",{key:n,className:"prop-table-row"},l.a.createElement("td",null,n," ",t.renderRequiredLabel(e)),l.a.createElement("td",null,l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,a&&a.value),l.a.createElement("td",null,r.deprecated&&l.a.createElement("div",{className:"prop-desc-heading"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+r.deprecated+" ")),t.renderControllableNote(e,n),l.a.createElement("div",{className:"prop-desc",dangerouslySetInnerHTML:{__html:i}})))})},n.renderControllableNote=function(e,t){var n=e.doclets.controllable,o="function"===this.getDisplayTypeName(e.type.name);if(!n)return!1;var r=o?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,n)):l.a.createElement("span",null,"controlled by: ",l.a.createElement("code",null,n),", initial prop:"," ",l.a.createElement("code",null,"default"+Object(g.a)(t)));return l.a.createElement("div",{className:"prop-desc-heading"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},l.a.createElement(p.a,{glyph:"info-sign"})," ",r)))},n.renderEnum=function(e){var t=[];return(e.value||[]).forEach(function(e,n){var o=e.value;n>0&&t.push(l.a.createElement("span",{key:n+"c"},", ")),t.push(l.a.createElement("code",{key:n},o))}),l.a.createElement("span",null,"one of: ",t)},n.renderRequiredLabel=function(e){return e.required?l.a.createElement(s.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(u.a,{bordered:!0,striped:!0,className:"prop-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);v.propTypes={metadata:c.a.object.isRequired},t.a=v},333:function(e,t,n){"use strict";var o=n(10),r=n(51)(0),a=n(30)([].forEach,!0);o(o.P+o.F*!a,"Array",{forEach:function(e){return r(this,e,arguments[1])}})},334:function(e,t,n){var o=n(50).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||n(36)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},335:function(e,t,n){"use strict";n(336)("trim",function(e){return function(){return e(this,3)}})},336:function(e,t,n){var o=n(10),r=n(29),a=n(22),l=n(337),i="["+l+"]",c=RegExp("^"+i+i+"*"),p=RegExp(i+i+"*$"),s=function(e,t,n){var r={},i=a(function(){return!!l[e]()||"​"!="​"[e]()}),c=r[e]=i?t(u):l[e];n&&(r[n]=c),o(o.P+o.F*i,"String",r)},u=s.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(p,"")),e};e.exports=s},337:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},338:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(96);t.a=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+a.version+"/src/"+t+".js";return r.a.createElement("a",{className:"link-to-source",href:n,alt:"View source code for "+t},"[source]")}},513:function(e,t){e.exports='<div style={{ height: 120 }}>\n  <Popover\n    id="popover-basic"\n    placement="right"\n    positionLeft={200}\n    positionTop={50}\n    title="Popover right"\n  >\n    And here\'s some <strong>amazing</strong> content. It\'s very engaging. right?\n  </Popover>\n</div>;\n'},514:function(e,t){e.exports='const popoverLeft = (\n  <Popover id="popover-positioned-left" title="Popover left">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverTop = (\n  <Popover id="popover-positioned-top" title="Popover top">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverBottom = (\n  <Popover id="popover-positioned-bottom" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverRight = (\n  <Popover id="popover-positioned-right" title="Popover right">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nrender(\n  <ButtonToolbar>\n    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n'},515:function(e,t){e.exports='const popoverClick = (\n  <Popover id="popover-trigger-click" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverHoverFocus = (\n  <Popover id="popover-trigger-hover-focus" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverFocus = (\n  <Popover id="popover-trigger-focus" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverClickRootClose = (\n  <Popover id="popover-trigger-click-root-close" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nrender(\n  <ButtonToolbar>\n    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>\n      <Button>Click</Button>\n    </OverlayTrigger>\n    <OverlayTrigger\n      trigger={[\'hover\', \'focus\']}\n      placement="bottom"\n      overlay={popoverHoverFocus}\n    >\n      <Button>Hover + Focus</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>\n      <Button>Focus</Button>\n    </OverlayTrigger>\n    <OverlayTrigger\n      trigger="click"\n      rootClose\n      placement="bottom"\n      overlay={popoverClickRootClose}\n    >\n      <Button>Click w/rootClose</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n'},516:function(e,t){e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = e => {\n      this.setState({ target: e.target, show: !this.state.show });\n    };\n\n    this.state = {\n      show: false\n    };\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n\n        <Overlay\n          show={this.state.show}\n          target={this.state.target}\n          placement="bottom"\n          container={this}\n          containerPadding={20}\n        >\n          <Popover id="popover-contained" title="Popover bottom">\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover>\n        </Overlay>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n'},517:function(e,t){e.exports='const popoverLeft = (\n  <Popover id="popover-positioned-scrolling-left" title="Popover left">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverTop = (\n  <Popover id="popover-positioned-scrolling-top" title="Popover top">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverBottom = (\n  <Popover id="popover-positioned-scrolling-bottom" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverRight = (\n  <Popover id="popover-positioned-scrolling-right" title="Popover right">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nclass Positioner extends React.Component {\n  render() {\n    return (\n      <ButtonToolbar style={{ padding: \'100px 0\' }}>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="left"\n          overlay={popoverLeft}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="top"\n          overlay={popoverTop}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="bottom"\n          overlay={popoverBottom}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="right"\n          overlay={popoverRight}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Positioner />);\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtcG9wb3ZlcnMtanMtMWZkMjZmZTYzZjNkNDE5YzE3N2MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9wb3BvdmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAnZ2F0c2J5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBbmNob3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbmNob3InO1xuaW1wb3J0IExpbmtUb1NvdXJjZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpbmtUb1NvdXJjZSc7XG5pbXBvcnQgUHJvcFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvcFRhYmxlJztcbmltcG9ydCBSZWFjdFBsYXlncm91bmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZWFjdFBsYXlncm91bmQnO1xuXG5pbXBvcnQgUG9wb3ZlckJhc2ljIGZyb20gJy4uLy4uL2V4YW1wbGVzL1BvcG92ZXJCYXNpYyc7XG5pbXBvcnQgUG9wb3ZlclBvc2l0aW9uZWQgZnJvbSAnLi4vLi4vZXhhbXBsZXMvUG9wb3ZlclBvc2l0aW9uZWQnO1xuaW1wb3J0IFBvcG92ZXJUcmlnZ2VyQmVoYXZpb3JzIGZyb20gJy4uLy4uL2V4YW1wbGVzL1BvcG92ZXJUcmlnZ2VyQmVoYXZpb3JzJztcbmltcG9ydCBQb3BvdmVyQ29udGFpbmVkIGZyb20gJy4uLy4uL2V4YW1wbGVzL1BvcG92ZXJDb250YWluZWQnO1xuaW1wb3J0IFBvcG92ZXJQb3NpdGlvbmVkU2Nyb2xsaW5nIGZyb20gJy4uLy4uL2V4YW1wbGVzL1BvcG92ZXJQb3NpdGlvbmVkU2Nyb2xsaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wb3ZlclNlY3Rpb24oeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJzLWRvY3Mtc2VjdGlvblwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJwb3BvdmVyc1wiPlBvcG92ZXJzPC9BbmNob3I+IDxzbWFsbD5Qb3BvdmVyPC9zbWFsbD5cbiAgICAgIDwvaDI+XG5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgUG9wb3Zlciwgb2ZmZXJzIGEgbW9yZSByb2J1c3QgYWx0ZXJuYXRpdmUgdG8gdGhlIFRvb2x0aXAgZm9yXG4gICAgICAgIGRpc3BsYXlpbmcgb3ZlcmxheXMgb2YgY29udGVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e1BvcG92ZXJCYXNpY30gLz5cblxuICAgICAgPGg0PlxuICAgICAgICA8QW5jaG9yIGlkPVwicG9wb3ZlcnMtb3ZlcmxheS10cmlnZ2VyXCI+V2l0aCBPdmVybGF5VHJpZ2dlcjwvQW5jaG9yPlxuICAgICAgPC9oND5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgUG9wb3ZlciBjb21wb25lbnQsIGxpa2UgdGhlIFRvb2x0aXAgY2FuIGJlIHVzZWQgd2l0aCBhbnsnICd9XG4gICAgICAgIDxjb2RlPk92ZXJsYXlUcmlnZ2VyPC9jb2RlPiBDb21wb25lbnQsIGFuZCBwb3NpdGlvbmVkIGFyb3VuZCBpdC5cbiAgICAgIDwvcD5cbiAgICAgIDxSZWFjdFBsYXlncm91bmQgY29kZVRleHQ9e1BvcG92ZXJQb3NpdGlvbmVkfSAvPlxuXG4gICAgICA8aDQ+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJwb3BvdmVycy10cmlnZ2VyLWJlaGF2aW9yc1wiPlRyaWdnZXIgYmVoYXZpb3JzPC9BbmNob3I+XG4gICAgICA8L2g0PlxuICAgICAgPHA+XG4gICAgICAgIEl0J3MgaW5hZHZpc2FibGUgdG8gdXNlIDxjb2RlPlwiaG92ZXJcIjwvY29kZT4gb3IgPGNvZGU+XCJmb2N1c1wiPC9jb2RlPnsnICd9XG4gICAgICAgIHRyaWdnZXJzIGZvciBwb3BvdmVycywgYmVjYXVzZSB0aGV5IGhhdmUgcG9vciBhY2Nlc3NpYmlsaXR5IGZyb21cbiAgICAgICAga2V5Ym9hcmQgYW5kIG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgICAgPC9wPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZCBjb2RlVGV4dD17UG9wb3ZlclRyaWdnZXJCZWhhdmlvcnN9IC8+XG5cbiAgICAgIDxoND5cbiAgICAgICAgPEFuY2hvciBpZD1cInBvcG92ZXJzLWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIFBvcG92ZXIgY29tcG9uZW50IGluIGNvbnRhaW5lclxuICAgICAgICA8L0FuY2hvcj5cbiAgICAgIDwvaDQ+XG4gICAgICA8cD5cbiAgICAgICAgU3BlY2lmeSA8Y29kZT5jb250YWluZXI8L2NvZGU+IHRvIGNvbnRyb2wgdGhlIERPTSBlbGVtZW50IHRvIHdoaWNoIHRvXG4gICAgICAgIGFwcGVuZCB0aGUgb3ZlcmxheS4gVGhpcyBlbGVtZW50IG11c3QgYmUgYSBwb3NpdGlvbmVkIGVsZW1lbnQgdG8gYWxsb3dcbiAgICAgICAgY29ycmVjdGx5IHBvc2l0aW9uaW5nIHRoZSBvdmVybGF5LlxuICAgICAgPC9wPlxuICAgICAgPFJlYWN0UGxheWdyb3VuZFxuICAgICAgICBjb2RlVGV4dD17UG9wb3ZlckNvbnRhaW5lZH1cbiAgICAgICAgZXhhbXBsZUNsYXNzTmFtZT1cImJzLWV4YW1wbGUtcG9wb3Zlci1jb250YWluZWRcIlxuICAgICAgLz5cblxuICAgICAgPGg0PlxuICAgICAgICA8QW5jaG9yIGlkPVwicG9wb3ZlcnMtcG9zaXRpb25lZC1zY3JvbGxpbmdcIj5cbiAgICAgICAgICBQb3NpdGlvbmVkIHBvcG92ZXIgY29tcG9uZW50cyBpbiBzY3JvbGxpbmcgY29udGFpbmVyXG4gICAgICAgIDwvQW5jaG9yPlxuICAgICAgPC9oND5cbiAgICAgIDxSZWFjdFBsYXlncm91bmRcbiAgICAgICAgY29kZVRleHQ9e1BvcG92ZXJQb3NpdGlvbmVkU2Nyb2xsaW5nfVxuICAgICAgICBleGFtcGxlQ2xhc3NOYW1lPVwiYnMtZXhhbXBsZS1wb3BvdmVyLXNjcm9sbFwiXG4gICAgICAvPlxuXG4gICAgICA8aDM+XG4gICAgICAgIDxBbmNob3IgaWQ9XCJwb3BvdmVyLXByb3BzXCI+UHJvcHM8L0FuY2hvcj5cbiAgICAgICAgPExpbmtUb1NvdXJjZSBjb21wb25lbnQ9e2RhdGEuUG9wb3Zlci5kaXNwbGF5TmFtZX0gLz5cbiAgICAgIDwvaDM+XG4gICAgICA8UHJvcFRhYmxlIG1ldGFkYXRhPXtkYXRhLlBvcG92ZXJ9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IFBvcG92ZXJRdWVyeSB7XG4gICAgUG9wb3ZlcjogY29tcG9uZW50TWV0YWRhdGEoZGlzcGxheU5hbWU6IHsgZXE6IFwiUG9wb3ZlclwiIH0pIHtcbiAgICAgIC4uLlByb3BUYWJsZV9tZXRhZGF0YVxuICAgIH1cbiAgfVxuYDtcbiJdLCJtYXBwaW5ncyI6IkFBQ0EiLCJzb3VyY2VSb290IjoiIn0=