(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[36],{156:function(e,t,r){"use strict";var n=r(2),a=r.n(n),c=r(21),s=r.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,s=void 0===c?24:c,l=o(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),a.a.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="Send",t.a=l},250:function(e,t,r){"use strict";r.r(t);var n=r(12),a=r(22),c=r(75),s=r(74),i=r(2),o=r(156),l=r(285),d=r(18),j=new Date,u=j;t.default=function(e){var t=e.updates,r=Object(l.a)().t;return Object(i.useLayoutEffect)((function(){u=j})),Object(d.jsxs)("div",{className:"updates",children:[Object(d.jsx)("div",{className:"updates-header",children:Object(d.jsx)("h2",{children:Object(c.a)(u,"d MMM")})}),t.slice(-n.F).reverse().map((function(e,t){e.update=e.update.replace(/\n/g,"<br/>");var n=new Date(1e3*e.timestamp);return Object(d.jsxs)(i.Fragment,{children:[n.getDate()!==u.getDate()?(u=n,Object(d.jsxs)(d.Fragment,{children:[0===t?Object(d.jsx)("div",{className:"update",children:Object(d.jsx)("h4",{children:r("No updates yet!")})}):"",Object(d.jsx)("div",{className:"updates-header",children:Object(d.jsx)("h2",{children:Object(c.a)(n,"d MMM")})})]})):" ",Object(d.jsxs)("div",{className:"update",children:[Object(d.jsx)("h5",{children:Object(a.a)(Object(s.a)(new Date(1e3*e.timestamp),new Date))+" ".concat(r("ago"))}),Object(d.jsx)("h4",{dangerouslySetInnerHTML:{__html:e.update}})]},t)]},t)})),Object(d.jsx)("div",{className:"updates-footer",children:Object(d.jsx)("a",{href:"https://t.me/covid19indiaorg_updates",target:"_blank",className:"telegram",rel:"noopener noreferrer",children:Object(d.jsxs)("h4",{children:[Object(d.jsx)(o.a,{}),r("Join Instant Updates channel")]})})})]})}}}]);
//# sourceMappingURL=36.f6564cae.chunk.js.map