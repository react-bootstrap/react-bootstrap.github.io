(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{hBOO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return r}));var a=n("zLVn"),o=(n("mXGw"),n("7ljp")),i=n("Snbm"),l={},d={_frontmatter:l},m=i.a;function r(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)(m,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"migrating-to-v1"},"Migrating to v1"),Object(o.mdx)("p",null,"React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there\nare significant breaking changes from the pre ",Object(o.mdx)("inlineCode",{parentName:"p"},"v1")," react-bootstrap."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"PLEASE FIRST READ THE UPSTREAM BOOSTRAP MIGRATION GUIDE")),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/migration/"}),"https://getbootstrap.com/docs/4.3/migration/"))),Object(o.mdx)("p",null,"React-Bootstrap ",Object(o.mdx)("em",{parentName:"p"},"only")," contains components that are present in vanilla Bootstrap. If functionality\nwas removed from Bootstrap, then it was also removed from React-Bootstrap. This guide does not\nrepeat information found in the upstream migration guide. Its goal is to document React-Bootstrap-specific\nAPI changes and additions."),Object(o.mdx)("h2",{id:"versioning"},"Versioning"),Object(o.mdx)("p",null,"We will continue to provide general maintenance for Bootstrap 3 components, because there are many projects that continue to depend on Bootstrap 3 support in\n",Object(o.mdx)("inlineCode",{parentName:"p"},"react-bootstrap"),". ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-bootstrap")," package versions will be as follows:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Bootstrap 3 support will continue in react-bootstrap versions < ",Object(o.mdx)("inlineCode",{parentName:"li"},"v1.0.0")),Object(o.mdx)("li",{parentName:"ul"},"Bootstrap 4 support will be in react-bootstrap versions >= ",Object(o.mdx)("inlineCode",{parentName:"li"},"v1.0.0"))),Object(o.mdx)("p",null,"We are ",Object(o.mdx)("strong",{parentName:"p"},"not")," committing to keeping breaking changes in lockstep with bootstraps major releases,\nthere may be a react-bootstrap v2 targeting Bootstrap v4 depending on what's best for the project."),Object(o.mdx)("h2",{id:"summary-of-breaking-changes-from-v0320"},"Summary of breaking changes from v0.32.0"),Object(o.mdx)("p",null,"Below is a ",Object(o.mdx)("em",{parentName:"p"},"rough")," account of the breaking API changes as well as the minimal change to migrate"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"bsStyle")," -> ",Object(o.mdx)("inlineCode",{parentName:"li"},"variant")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"bsClass")," -> ",Object(o.mdx)("inlineCode",{parentName:"li"},"bsPrefix")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"bsRole")," has been removed from all components. Components now communicate\nvia context to allow intermediate nesting of child components"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"componentClass")," -> ",Object(o.mdx)("inlineCode",{parentName:"li"},"as")),Object(o.mdx)("li",{parentName:"ul"},"All utils have been removed from main exports, most were internal already and the rest have been moved to external libraries")),Object(o.mdx)("h3",{id:"grid"},"Grid"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"renamed to Container"),Object(o.mdx)("li",{parentName:"ul"},"removed Clearfix")),Object(o.mdx)("h4",{id:"col"},"Col"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"removed visibility props"),Object(o.mdx)("li",{parentName:"ul"},"consolidated col ",Object(o.mdx)("inlineCode",{parentName:"li"},"span"),", ",Object(o.mdx)("inlineCode",{parentName:"li"},"offset"),", and ",Object(o.mdx)("inlineCode",{parentName:"li"},"order")," into an object value prop per breakpoint.")),Object(o.mdx)("h3",{id:"navbar"},"Navbar"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"removed ",Object(o.mdx)("inlineCode",{parentName:"li"},"Navbar.Header")),Object(o.mdx)("li",{parentName:"ul"},"removed ",Object(o.mdx)("inlineCode",{parentName:"li"},"Navbar.Form")),Object(o.mdx)("li",{parentName:"ul"},"removed ",Object(o.mdx)("inlineCode",{parentName:"li"},"fluid"),", use your own ",Object(o.mdx)("inlineCode",{parentName:"li"},"Container")," component in."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"inverse")," removed and replaced with ",Object(o.mdx)("inlineCode",{parentName:"li"},'variant="dark"')),Object(o.mdx)("li",{parentName:"ul"},"positioning props have been consolidated into ",Object(o.mdx)("inlineCode",{parentName:"li"},"fixed={top|bottom}")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"sticky={top|bottom}"),", staticTop has been removed")),Object(o.mdx)("h4",{id:"navbarheader"},"NavbarHeader"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"removed, not present in v4")),Object(o.mdx)("h4",{id:"navbartoggle"},"NavbarToggle"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"name changed to ",Object(o.mdx)("inlineCode",{parentName:"li"},"Navbar.Toggle"))),Object(o.mdx)("h4",{id:"navbarbrand"},"NavbarBrand"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Renders a ",Object(o.mdx)("inlineCode",{parentName:"li"},"<a>")," when an ",Object(o.mdx)("inlineCode",{parentName:"li"},"href")," is provided"),Object(o.mdx)("li",{parentName:"ul"},"The presence of ",Object(o.mdx)("inlineCode",{parentName:"li"},"children")," does not skip the wrapping ",Object(o.mdx)("inlineCode",{parentName:"li"},"span"),", use ",Object(o.mdx)("inlineCode",{parentName:"li"},"as")," along with ",Object(o.mdx)("inlineCode",{parentName:"li"},"children")," for custom rendering")),Object(o.mdx)("h3",{id:"nav"},"Nav"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"activeHref")," is removed (only activeKey now)"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"bsStyle")," renamed to ",Object(o.mdx)("inlineCode",{parentName:"li"},"variant")),Object(o.mdx)("li",{parentName:"ul"},"NavLink hrefs will be used as ",Object(o.mdx)("inlineCode",{parentName:"li"},"eventKey"),"s when ",Object(o.mdx)("inlineCode",{parentName:"li"},"eventKey")," is absent"),Object(o.mdx)("li",{parentName:"ul"},"Local ",Object(o.mdx)("inlineCode",{parentName:"li"},"onSelect")," handlers are ignored when in the context of a TabContainer or Navbar (MAYBE ADD BACK?)")),Object(o.mdx)("h4",{id:"navitem"},"Nav.Item"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Renders ",Object(o.mdx)("em",{parentName:"li"},"only"),' the outer "item" element, use inconjunction with the new ',Object(o.mdx)("inlineCode",{parentName:"li"},"NavLink")," component"),Object(o.mdx)("li",{parentName:"ul"},"default element changed to ",Object(o.mdx)("inlineCode",{parentName:"li"},"<div>")," from a ",Object(o.mdx)("inlineCode",{parentName:"li"},"<li>")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"active")," prop removed and moved to ",Object(o.mdx)("inlineCode",{parentName:"li"},"NavLink"))),Object(o.mdx)("h3",{id:"inputgroup"},"InputGroup"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"removed InputGroup.Button, and InputGroup.Addon"),Object(o.mdx)("li",{parentName:"ul"},"added InputGroup.Prepend, InputGroup.Append, InputGroup.Text, InputGroup.Checkbox, InputGroup.Radio")),Object(o.mdx)("h3",{id:"badge--label"},"Badge & Label"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"removed ",Object(o.mdx)("inlineCode",{parentName:"li"},"Label"),", the ",Object(o.mdx)("inlineCode",{parentName:"li"},"Badge")," component covers both"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"bsStyle")," renamed to ",Object(o.mdx)("inlineCode",{parentName:"li"},"variant"))),Object(o.mdx)("h3",{id:"panel"},"Panel"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"removed, replaced with Card components")),Object(o.mdx)("h3",{id:"dropdown"},"Dropdown"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Removed the ",Object(o.mdx)("inlineCode",{parentName:"li"},"disabled")," prop on Dropdown, pass it directly to Dropdown.Toggle"),Object(o.mdx)("li",{parentName:"ul"},"Removed bsRole, use function children to render custom Toggles or Menus"),Object(o.mdx)("li",{parentName:"ul"},"Removed SplitButton.toggle (replaced with a ",Object(o.mdx)("inlineCode",{parentName:"li"},"split")," prop on the basic Toggle)"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"noCaret")," is removed because it's not optional with the styles anymore"),Object(o.mdx)("li",{parentName:"ul"},"bsPrefixes are not passed from the parent Dropdown anymore"),Object(o.mdx)("li",{parentName:"ul"},"onSelect behavior is now passed to Menu and Toggle via the Context api"),Object(o.mdx)("li",{parentName:"ul"},"DropdownMenu is not rendered until opened"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"divider")," has been split out into ",Object(o.mdx)("inlineCode",{parentName:"li"},"Dropdown.Divider")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"header")," has been split out into ",Object(o.mdx)("inlineCode",{parentName:"li"},"Dropdown.Header"))),Object(o.mdx)("h4",{id:"dropdownbutton"},"DropdownButton"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(o.mdx)("h4",{id:"splitbutton"},"SplitButton"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(o.mdx)("h3",{id:"navbutton"},"NavButton"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(o.mdx)("h4",{id:"menuitem"},"MenuItem"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"renamed to ",Object(o.mdx)("inlineCode",{parentName:"li"},"DropdownItem")," (also exported on ",Object(o.mdx)("inlineCode",{parentName:"li"},"Dropdown")," as ",Object(o.mdx)("inlineCode",{parentName:"li"},"Dropdown.Item"),")")),Object(o.mdx)("h3",{id:"alert"},"Alert"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"onDismiss")," renamed to ",Object(o.mdx)("inlineCode",{parentName:"li"},"onClose"))),Object(o.mdx)("h3",{id:"well"},"Well"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"removed.")),Object(o.mdx)("h3",{id:"pager"},"Pager"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"removed.")),Object(o.mdx)("h3",{id:"controllabel"},"ControlLabel"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"renamed to ",Object(o.mdx)("inlineCode",{parentName:"li"},"FormLabel")," (also exported on ",Object(o.mdx)("inlineCode",{parentName:"li"},"Form")," as ",Object(o.mdx)("inlineCode",{parentName:"li"},"Form.Label"),")")),Object(o.mdx)("h3",{id:"checkbox-and-radio"},"Checkbox and Radio"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Consolidated into a single component. Component's name is ",Object(o.mdx)("inlineCode",{parentName:"li"},"FormCheck")," (also exported on ",Object(o.mdx)("inlineCode",{parentName:"li"},"Form")," as ",Object(o.mdx)("inlineCode",{parentName:"li"},"Form.Check"),")")),Object(o.mdx)("h3",{id:"glyphicon"},"Glyphicon"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Removed -- icons are not included in Bootstrap 4. Icon support can be provided via react-icons, fontawesome, or a similar external library.")))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-migrating-mdx-1f335aa9caeb01500f1f.js.map