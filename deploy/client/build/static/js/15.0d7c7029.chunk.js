"use strict";(self.webpackChunktaskmanager=self.webpackChunktaskmanager||[]).push([[15],{6278:function(e,t,a){var n=a(4942),o=a(3366),r=a(7462),i=a(2791),s=a(8182),c=a(4419),d=a(2065),l=a(7630),u=a(1046),p=a(3701),m=a(162),v=a(2071),y=a(6199),b=a(4065),g=a(184),Z=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],f=(0,l.ZP)(p.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiListItemButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,o=e.ownerState;return(0,r.Z)((t={display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,n.Z)(t,"&.".concat(b.Z.selected),(0,n.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(b.Z.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,d.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(b.Z.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,n.Z)(t,"&.".concat(b.Z.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,n.Z)(t,"&.".concat(b.Z.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),o.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},"flex-start"===o.alignItems&&{alignItems:"flex-start"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.dense&&{paddingTop:4,paddingBottom:4})})),h=i.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiListItemButton"}),n=a.alignItems,d=void 0===n?"center":n,l=a.autoFocus,p=void 0!==l&&l,h=a.component,x=void 0===h?"div":h,C=a.children,I=a.dense,S=void 0!==I&&I,O=a.disableGutters,P=void 0!==O&&O,k=a.divider,w=void 0!==k&&k,N=a.focusVisibleClassName,L=a.selected,G=void 0!==L&&L,F=a.className,R=(0,o.Z)(a,Z),A=i.useContext(y.Z),M=i.useMemo((function(){return{dense:S||A.dense||!1,alignItems:d,disableGutters:P}}),[d,A.dense,S,P]),T=i.useRef(null);(0,m.Z)((function(){p&&T.current&&T.current.focus()}),[p]);var j=(0,r.Z)({},a,{alignItems:d,dense:M.dense,disableGutters:P,divider:w,selected:G}),V=function(e){var t=e.alignItems,a=e.classes,n=e.dense,o=e.disabled,i={root:["root",n&&"dense",!e.disableGutters&&"gutters",e.divider&&"divider",o&&"disabled","flex-start"===t&&"alignItemsFlexStart",e.selected&&"selected"]},s=(0,c.Z)(i,b.t,a);return(0,r.Z)({},a,s)}(j),B=(0,v.Z)(T,t);return(0,g.jsx)(y.Z.Provider,{value:M,children:(0,g.jsx)(f,(0,r.Z)({ref:B,href:R.href||R.to,component:(R.href||R.to)&&"div"===x?"a":x,focusVisibleClassName:(0,s.Z)(V.focusVisible,N),ownerState:j,className:(0,s.Z)(V.root,F)},R,{classes:V,children:C}))})}));t.Z=h},4065:function(e,t,a){a.d(t,{t:function(){return r}});var n=a(5878),o=a(1217);function r(e){return(0,o.Z)("MuiListItemButton",e)}var i=(0,n.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);t.Z=i},9900:function(e,t,a){var n=a(4942),o=a(3366),r=a(7462),i=a(2791),s=a(8182),c=a(4419),d=a(890),l=a(6199),u=a(1046),p=a(7630),m=a(9849),v=a(184),y=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],b=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,n.Z)({},"& .".concat(m.Z.primary),t.primary),(0,n.Z)({},"& .".concat(m.Z.secondary),t.secondary),t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,r.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),g=i.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiListItemText"}),n=a.children,p=a.className,g=a.disableTypography,Z=void 0!==g&&g,f=a.inset,h=void 0!==f&&f,x=a.primary,C=a.primaryTypographyProps,I=a.secondary,S=a.secondaryTypographyProps,O=(0,o.Z)(a,y),P=i.useContext(l.Z).dense,k=null!=x?x:n,w=I,N=(0,r.Z)({},a,{disableTypography:Z,inset:h,primary:!!k,secondary:!!w,dense:P}),L=function(e){var t=e.classes,a=e.inset,n=e.primary,o=e.secondary,r={root:["root",a&&"inset",e.dense&&"dense",n&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,c.Z)(r,m.L,t)}(N);return null==k||k.type===d.Z||Z||(k=(0,v.jsx)(d.Z,(0,r.Z)({variant:P?"body2":"body1",className:L.primary,component:null!=C&&C.variant?void 0:"span",display:"block"},C,{children:k}))),null==w||w.type===d.Z||Z||(w=(0,v.jsx)(d.Z,(0,r.Z)({variant:"body2",className:L.secondary,color:"text.secondary",display:"block"},S,{children:w}))),(0,v.jsxs)(b,(0,r.Z)({className:(0,s.Z)(L.root,p),ownerState:N,ref:t},O,{children:[k,w]}))}));t.Z=g},9849:function(e,t,a){a.d(t,{L:function(){return r}});var n=a(5878),o=a(1217);function r(e){return(0,o.Z)("MuiListItemText",e)}var i=(0,n.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=i},5021:function(e,t,a){a.d(t,{ZP:function(){return R}});var n=a(4942),o=a(3366),r=a(7462),i=a(2791),s=a(8182),c=a(4419),d=a(627),l=a(2065),u=a(7630),p=a(1046),m=a(3701),v=a(9103),y=a(162),b=a(2071),g=a(6199),Z=a(5878),f=a(1217);function h(e){return(0,f.Z)("MuiListItem",e)}var x=(0,Z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),C=a(4065);function I(e){return(0,f.Z)("MuiListItemSecondaryAction",e)}(0,Z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var S=a(184),O=["className"],P=(0,u.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),k=i.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,d=(0,o.Z)(a,O),l=i.useContext(g.Z),u=(0,r.Z)({},a,{disableGutters:l.disableGutters}),m=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,c.Z)(n,I,a)}(u);return(0,S.jsx)(P,(0,r.Z)({className:(0,s.Z)(m.root,n),ownerState:u,ref:t},d))}));k.muiName="ListItemSecondaryAction";var w=k,N=["className"],L=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],G=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,o=e.ownerState;return(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&(0,n.Z)({},"& > .".concat(C.Z.root),{paddingRight:48}),(t={},(0,n.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,n.Z)(t,"&.".concat(x.selected),(0,n.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(x.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},o.button&&(0,n.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),o.hasSecondaryAction&&{paddingRight:48})})),F=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),R=i.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,l=void 0===n?"center":n,u=a.autoFocus,Z=void 0!==u&&u,f=a.button,C=void 0!==f&&f,I=a.children,O=a.className,P=a.component,k=a.components,R=void 0===k?{}:k,A=a.componentsProps,M=void 0===A?{}:A,T=a.ContainerComponent,j=void 0===T?"li":T,V=a.ContainerProps,B=(void 0===V?{}:V).className,q=a.dense,D=void 0!==q&&q,z=a.disabled,W=void 0!==z&&z,Y=a.disableGutters,E=void 0!==Y&&Y,H=a.disablePadding,J=void 0!==H&&H,K=a.divider,Q=void 0!==K&&K,U=a.focusVisibleClassName,X=a.secondaryAction,$=a.selected,_=void 0!==$&&$,ee=a.slotProps,te=void 0===ee?{}:ee,ae=a.slots,ne=void 0===ae?{}:ae,oe=(0,o.Z)(a.ContainerProps,N),re=(0,o.Z)(a,L),ie=i.useContext(g.Z),se=i.useMemo((function(){return{dense:D||ie.dense||!1,alignItems:l,disableGutters:E}}),[l,ie.dense,D,E]),ce=i.useRef(null);(0,y.Z)((function(){Z&&ce.current&&ce.current.focus()}),[Z]);var de=i.Children.toArray(I),le=de.length&&(0,v.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,r.Z)({},a,{alignItems:l,autoFocus:Z,button:C,dense:se.dense,disabled:W,disableGutters:E,disablePadding:J,divider:Q,hasSecondaryAction:le,selected:_}),pe=function(e){var t=e.alignItems,a=e.button,n=e.classes,o=e.dense,r=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",r&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,c.Z)(i,h,n)}(ue),me=(0,b.Z)(ce,t),ve=ne.root||R.Root||G,ye=te.root||M.root||{},be=(0,r.Z)({className:(0,s.Z)(pe.root,ye.className,O),disabled:W},re),ge=P||"li";return C&&(be.component=P||"div",be.focusVisibleClassName=(0,s.Z)(x.focusVisible,U),ge=m.Z),le?(ge=be.component||P?ge:"div","li"===j&&("li"===ge?ge="div":"li"===be.component&&(be.component="div")),(0,S.jsx)(g.Z.Provider,{value:se,children:(0,S.jsxs)(F,(0,r.Z)({as:j,className:(0,s.Z)(pe.container,B),ref:me,ownerState:ue},oe,{children:[(0,S.jsx)(ve,(0,r.Z)({},ye,!(0,d.Z)(ve)&&{as:ge,ownerState:(0,r.Z)({},ue,ye.ownerState)},be,{children:de})),de.pop()]}))})):(0,S.jsx)(g.Z.Provider,{value:se,children:(0,S.jsxs)(ve,(0,r.Z)({},ye,{as:ge,ref:me},!(0,d.Z)(ve)&&{ownerState:(0,r.Z)({},ue,ye.ownerState)},be,{children:[de,X&&(0,S.jsx)(w,{children:X})]}))})}))}}]);
//# sourceMappingURL=15.0d7c7029.chunk.js.map