!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[FooterContainer_DoubleBorderScreen]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[FooterContainer_DoubleBorderScreen]"]=t(require("react")):e["rb_wixui.thunderbolt[FooterContainer_DoubleBorderScreen]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";n.r(o),n.d(o,{components:function(){return C}});var e=n(448),t=n.n(e),r=n(5329),a=n.n(r);function i(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=i(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var s=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n};var d=e=>{let{id:r,className:n,skinClassName:o,tagName:i="div",transition:d,transitionEnded:c,eventHandlers:l,skinStyles:u,children:p,tabIndex:m}=e;const f=i;return a().createElement(f,t()({id:r,className:s(o,d&&u[d],c&&u.transitionEnded,n),tabIndex:m},l),p)},c={screenWidthBackground:"hpA9KH",HeaderHideToTop:"ZBkohq",headerHideToTop:"ZBkohq",HeaderHideToTopReverse:"JIWevs",headerHideToTopReverse:"JIWevs",HeaderFadeOut:"gc4CJA",headerFadeOut:"gc4CJA",transitionEnded:"UV2YFD",HeaderFadeOutReverse:"VKd4GJ",headerFadeOutReverse:"VKd4GJ",inlineContent:"pwLEnC",centeredContent:"UEjKbP",centeredContentBg:"SuxpUn",DoubleBorderScreen:"IYiY1U",doubleBorderScreen:"IYiY1U",bg:"Mf6OQK",outer:"Qn3VFs",inner:"vQZLTi"};var l=e=>{let{wrapperProps:n,children:o}=e;return r.createElement(d,t()({},n,{skinClassName:c.DoubleBorderScreen,skinStyles:c}),r.createElement("div",{className:c.screenWidthBackground},r.createElement("div",{className:c.bg}),r.createElement("div",{className:c.outer},r.createElement("div",{className:c.inner}))),r.createElement("div",{className:c.centeredContent},r.createElement("div",{className:c.inlineContent},o)))};const u=e=>Object.entries(e).reduce(((e,[t,r])=>(t.includes("data-")&&(e[t]=r),e)),{});const p="mesh-container-content",m="inline-content",f=e=>a().createElement("div",{key:e.props.id+"-rotated-wrapper","data-mesh-id":e.props.id+"-rotated-wrapper"},e);var v=e=>{const{id:r,className:n,wedges:o=[],rotatedComponents:i=[],children:d,fixedComponents:c=[],extraClassName:l="",renderRotatedComponents:v=f}=e,b=a().Children.toArray(d()),h=[],C=[];b.forEach((e=>c.includes(e.props.id)?h.push(e):C.push(e)));const y=(e=>{const{wedges:t,rotatedComponents:r,childrenArray:n,renderRotatedComponents:o}=e,i=r.reduce(((e,t)=>({...e,[t]:!0})),{});return[...n.map((e=>{return i[(t=e,t.props.id.split("__")[0])]?o(e):e;var t})),...t.map((e=>a().createElement("div",{key:e,"data-mesh-id":e})))]})({childrenArray:C,rotatedComponents:i,wedges:o,renderRotatedComponents:v});return a().createElement("div",t()({},u(e),{"data-mesh-id":r+"inlineContent","data-testid":m,className:s(n,l)}),a().createElement("div",{"data-mesh-id":r+"inlineContent-gridContainer","data-testid":p},y),h)};var b={root:"footer"};var h=e=>{const{id:n,className:o,customClassNames:a=[],skin:i,children:d,meshProps:c}=e,l={onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onClick:e.onClick,onDoubleClick:e.onDblClick},p=s(o,((...e)=>e.map((e=>e?`wixui-${e}`:"")).join(" "))(b.root,...a));return r.createElement(i,{wrapperProps:{...u(e),id:n,eventHandlers:l,tabIndex:"-1",className:p},"data-block-level-container":"FooterContainer"},r.createElement(v,t()({id:n},c),d))};const C={FooterContainer_DoubleBorderScreen:{component:e=>a().createElement(h,t()({},e,{skin:l}))}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[FooterContainer_DoubleBorderScreen].17141eb7.bundle.min.js.map