(()=>{var e,o={682:(e,o,l)=>{"use strict";const n=window.wp.element,r=window.wp.primitives,t=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})),a=window.wp.blocks;function i(){return i=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},i.apply(this,arguments)}var s=l(184),c=l.n(s);const u=window.wp.blockEditor,h=window.wp.components,g=window.wp.keycodes,m=window.wp.url,p=window.wp.compose,d=window.wp.i18n,k=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})),v=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),b=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),f=["outermost/social-sharing-link"],w=[{name:(0,d.__)("Small","social-sharing-block"),value:"has-small-icon-size"},{name:(0,d.__)("Normal","social-sharing-block"),value:"has-normal-icon-size"},{name:(0,d.__)("Large","social-sharing-block"),value:"has-large-icon-size"},{name:(0,d.__)("Huge","social-sharing-block"),value:"has-huge-icon-size"}],C=(0,u.withColors)({iconBackgroundColor:"icon-background-color",iconColor:"icon-color"})((function(e){var o,l;const{clientId:r,attributes:t,iconBackgroundColor:a,iconColor:s,isSelected:C,setAttributes:_,setIconBackgroundColor:y,setIconColor:x}=e,{iconBackgroundColorValue:E,customIconBackgroundColor:B,iconColorValue:S,layout:V,size:L,showLabels:O,shareCustomLink:I,url:T,linkTitle:z}=t,[P,H]=(0,n.useState)(!1),[N,A]=(0,n.useState)(null),j=t.className?.includes("is-style-logos-only"),M=(0,n.useRef)(),D=(0,n.useRef)({});(0,n.useEffect)((()=>{j?(D.current={iconBackgroundColor:a,iconBackgroundColorValue:E,customIconBackgroundColor:B},_({iconBackgroundColor:void 0,customIconBackgroundColor:void 0,iconBackgroundColorValue:void 0})):_({...D.current})}));const G=c()(L,{"has-icon-color":s.color||S,"has-icon-background-color":a.color||E}),F=(0,n.createElement)("li",{className:"wp-block-outermost-social-sharing__social-placeholder"},(0,n.createElement)("div",{className:"wp-block-outermost-social-sharing__social-placeholder-icons"},(0,n.createElement)("div",{className:"outermost-social-sharing-link outermost-social-sharing-link-facebook"}),(0,n.createElement)("div",{className:"outermost-social-sharing-link outermost-social-sharing-link-twitter"}),(0,n.createElement)("div",{className:"outermost-social-sharing-link outermost-social-sharing-link-linkedin"}))),R=(0,n.createElement)("li",{className:"wp-block-outermost-social-sharing__social-prompt"},(0,d.__)("Click plus to add","social-sharing-block")),K=(0,u.useBlockProps)({ref:(0,p.useMergeRefs)([A,M]),onKeyDown:function(e){g.isKeyboardEvent.primary(e,"k")?Q(e):g.isKeyboardEvent.primaryShift(e,"k")&&W()},className:G}),U=(0,u.useInnerBlocksProps)(K,{allowedBlocks:f,placeholder:C?R:F,templateLock:!1,orientation:null!==(o=V?.orientation)&&void 0!==o?o:"horizontal",__experimentalAppenderTagName:"li"}),Z=[{value:s.color||S,onChange:e=>{x(e),_({iconColorValue:e})},label:(0,d.__)("Icon color","social-sharing-block"),resetAllFilter:()=>{x(void 0),_({iconColorValue:void 0})}}];j||Z.push({value:a.color||E,onChange:e=>{y(e),_({iconBackgroundColorValue:e})},label:(0,d.__)("Icon background","social-sharing-block"),resetAllFilter:()=>{y(void 0),_({iconBackgroundColorValue:void 0})}});const $=(0,u.__experimentalUseMultipleOriginColorsAndGradients)(),J=null===(l=$?.hasColorsOrGradients)||void 0===l||l,q=!!T;function Q(e){e.preventDefault(),H(!0)}function W(){_({url:void 0}),H(!1)}return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.BlockControls,{group:"other"},(0,n.createElement)(h.ToolbarDropdownMenu,{label:(0,d.__)("Size","social-sharing-block"),text:(0,d.__)("Size","social-sharing-block"),icon:null,popoverProps:{position:"bottom right"}},(e=>{let{onClose:o}=e;return(0,n.createElement)(h.MenuGroup,null,w.map((e=>(0,n.createElement)(h.MenuItem,{icon:(L===e.value||!L&&"has-normal-icon-size"===e.value)&&k,isSelected:L===e.value,key:e.value,onClick:()=>{_({size:e.value})},onClose:o,role:"menuitemradio"},e.name))))}))),I&&(0,n.createElement)(u.BlockControls,{group:"inline"},!q&&(0,n.createElement)(h.ToolbarButton,{name:"link",icon:v,title:(0,d.__)("Link","social-sharing-block"),shortcut:g.displayShortcut.primary("k"),onClick:Q}),q&&(0,n.createElement)(h.ToolbarButton,{name:"link",icon:b,title:(0,d.__)("Unlink","social-sharing-block"),shortcut:g.displayShortcut.primaryShift("k"),onClick:W,isActive:!0})),C&&I&&(P||q)&&(0,n.createElement)(h.Popover,{placement:"bottom",onClose:()=>H(!1),anchor:N,focusOnMount:!!P&&"firstElement",__unstableSlotName:"__unstable-block-tools-after",shift:!0},(0,n.createElement)(u.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:T},onChange:e=>{let{url:o=""}=e;return _({url:(0,m.prependHTTP)(o)})},onRemove:()=>W(),forceIsEditingLink:P,settings:[]})),(0,n.createElement)(u.InspectorControls,null,(0,n.createElement)(h.PanelBody,{title:(0,d.__)("Share settings","social-sharing-block")},(0,n.createElement)(h.ToggleControl,{checked:O,label:(0,d.__)("Show labels","social-sharing-block"),onChange:()=>_({showLabels:!O})}),(0,n.createElement)(h.ToggleControl,{checked:I,label:(0,d.__)("Share custom link","social-sharing-block"),onChange:()=>_({shareCustomLink:!I})}),I&&(0,n.createElement)(h.TextControl,{label:(0,d.__)("Link title","social-sharing-block"),value:z,onChange:e=>_({linkTitle:e})}))),J&&(0,n.createElement)(u.InspectorControls,{group:"color"},Z.map((e=>{let{onChange:o,label:l,value:t,resetAllFilter:a}=e;return(0,n.createElement)(u.__experimentalColorGradientSettingsDropdown,i({key:`social-sharing-color-${l}`,__experimentalIsRenderedInSidebar:!0,settings:[{colorValue:t,label:l,onColorChange:o,isShownByDefault:!0,resetAllFilter:a,enableAlpha:!0}],panelId:r},$))})),!j&&(0,n.createElement)(u.ContrastChecker,{textColor:S,backgroundColor:E,isLargeText:!1})),(0,n.createElement)("ul",U))})),_=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"outermost/social-sharing","title":"Social Sharing","category":"widgets","description":"Display icons that share the current page when clicked.","keywords":["icon","social","links","share"],"textdomain":"social-sharing-block","attributes":{"iconColor":{"type":"string"},"customIconColor":{"type":"string"},"iconColorValue":{"type":"string"},"iconBackgroundColor":{"type":"string"},"customIconBackgroundColor":{"type":"string"},"iconBackgroundColorValue":{"type":"string"},"showLabels":{"type":"boolean","default":false},"size":{"type":"string"},"shareCustomLink":{"type":"boolean","default":false},"linkTitle":{"type":"string"},"url":{"type":"string"}},"providesContext":{"iconBackgroundColor":"iconBackgroundColor","iconBackgroundColorValue":"iconBackgroundColorValue","iconColor":"iconColor","iconColorValue":"iconColorValue","showLabels":"showLabels","shareCustomLink":"shareCustomLink","linkTitle":"linkTitle","url":"url"},"supports":{"align":["left","center","right"],"anchor":true,"__experimentalExposeControlsToChildren":true,"layout":{"allowSwitching":false,"allowInheriting":false,"allowVerticalAlignment":false,"default":{"type":"flex"}},"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"allowVerticalAlignment":false,"default":{"type":"flex"}},"color":{"enableContrastChecker":false,"background":true,"gradients":true,"text":false,"__experimentalDefaultControls":{"background":false}},"spacing":{"blockGap":["horizontal","vertical"],"margin":true,"padding":true,"units":["px","em","rem","vh","vw"],"__experimentalDefaultControls":{"blockGap":true,"margin":false,"padding":false}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":false,"radius":false,"style":false,"width":false}}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"logos-only","label":"Logos Only"},{"name":"pill-shape","label":"Pill Shape"}],"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),{name:y}=_,x={example:{innerBlocks:[{name:"outermost/social-sharing-link",attributes:{service:"facebook"}},{name:"outermost/social-sharing-link",attributes:{service:"x"}},{name:"outermost/social-sharing-link",attributes:{service:"linkedin"}}]},icon:t,edit:C,save:function(e){const{attributes:{iconBackgroundColorValue:o,iconColorValue:l,showLabels:r,size:t}}=e,a=c()(t,{"has-visible-labels":r,"has-icon-color":l,"has-icon-background-color":o}),i=u.useBlockProps.save({className:a}),s=u.useInnerBlocksProps.save(i);return(0,n.createElement)("ul",s)}};(0,a.registerBlockType)({name:y,..._},x)},184:(e,o)=>{var l;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var l=arguments[o];if(l){var t=typeof l;if("string"===t||"number"===t)e.push(l);else if(Array.isArray(l)){if(l.length){var a=r.apply(null,l);a&&e.push(a)}}else if("object"===t){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var i in l)n.call(l,i)&&l[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(o,[]))||(e.exports=l)}()}},l={};function n(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={exports:{}};return o[e](t,t.exports,n),t.exports}n.m=o,e=[],n.O=(o,l,r,t)=>{if(!l){var a=1/0;for(u=0;u<e.length;u++){for(var[l,r,t]=e[u],i=!0,s=0;s<l.length;s++)(!1&t||a>=t)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(i=!1,t<a&&(a=t));if(i){e.splice(u--,1);var c=r();void 0!==c&&(o=c)}}return o}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[l,r,t]},n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var l in o)n.o(o,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={751:0,680:0};n.O.j=o=>0===e[o];var o=(o,l)=>{var r,t,[a,i,s]=l,c=0;if(a.some((o=>0!==e[o]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(o&&o(l);c<a.length;c++)t=a[c],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(u)},l=globalThis.webpackChunksocial_sharing_block=globalThis.webpackChunksocial_sharing_block||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var r=n.O(void 0,[680],(()=>n(682)));r=n.O(r)})();