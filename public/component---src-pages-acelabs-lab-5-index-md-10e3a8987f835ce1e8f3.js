"use strict";(self.webpackChunkcloudpak_integration=self.webpackChunkcloudpak_integration||[]).push([[1937,4624,281,9195,4883,8436,2258,2056],{4295:function(e,t,a){a.d(t,{Z:function(){return N}});var l=a(7294),r=a(8650),n=a.n(r),i=a(5444),s=a(6949),c=a(9337),m=a(5900),o=a.n(m),d=function(e){var t,a=e.title,r=e.theme,n=e.tabs,i=void 0===n?[]:n;return l.createElement("div",{className:o()("PageHeader-module--page-header--1JmOE",(t={},t["PageHeader-module--with-tabs--ezlJE"]=i.length,t["PageHeader-module--dark-mode--aV7If"]="dark"===r,t))},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--J1--B"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,s=n.baseUrl,c=n.subDirectory,m=s+"/edit/"+n.branch+c+"/src/pages"+t;return s?l.createElement("div",{className:"bx--row EditLink-module--row--2vJiZ"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--t_pLX",href:m},"Edit this page on GitHub"))):null},g=a(4275),p=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),c=a===s,m=new RegExp(s+"/?(#.*)?$"),d=r.replace(m,a);return l.createElement("li",{key:e,className:o()((t={},t["PageTabs-module--selected-item--3CjGa"]=c,t),"PageTabs-module--list-item--2X02I")},l.createElement(i.Link,{className:"PageTabs-module--link--2anNu",to:""+d},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--18QsR"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":t},l.createElement("ul",{className:"PageTabs-module--list--3gLeN"},c))))))},t}(l.Component),E=a(2881),h=a(6958),v=a(36),f=function(e){var t=e.date,a=new Date(t);return t?l.createElement(v.X2,{className:"last-modified-date-module--row--Bb0E9"},l.createElement(v.sg,null,l.createElement("div",{className:"last-modified-date-module--text--1RmBx"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,o=t.frontmatter,p=void 0===o?{}:o,v=t.relativePagePath,N=t.titleType,P=p.tabs,x=p.title,k=p.theme,w=p.description,y=p.keywords,T=p.date,Z=(0,h.Z)().interiorTheme,B=(0,i.useStaticQuery)("2456312558").site.pathPrefix,C=B?r.pathname.replace(B,""):r.pathname,L=P?C.split("/").filter(Boolean).slice(-1)[0]||n()(P[0],{lower:!0}):"",H=k||Z;return l.createElement(c.Z,{tabs:P,homepage:!1,theme:H,pageTitle:x,pageDescription:w,pageKeywords:y,titleType:N},l.createElement(d,{title:m?l.createElement(m,null):x,label:"label",tabs:P,theme:H}),P&&l.createElement(b,{title:x,slug:C,tabs:P,currentTab:L}),l.createElement(E.Z,{padded:!0},a,l.createElement(u,{relativePagePath:v}),l.createElement(f,{date:T})),l.createElement(g.Z,{pageContext:t,location:r,slug:C,tabs:P,currentTab:L}),l.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-acelabs-lab-5-index-md-10e3a8987f835ce1e8f3.js.map