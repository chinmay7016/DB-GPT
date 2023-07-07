(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{53113:function(e,i,r){"use strict";var t=r(46750),n=r(40431),o=r(86006),a=r(46319),l=r(47562),s=r(53832),c=r(99179),d=r(50645),v=r(88930),u=r(47093),m=r(326),g=r(94244),h=r(77614),p=r(9268);let f=["children","action","color","variant","size","fullWidth","startDecorator","endDecorator","loading","loadingPosition","loadingIndicator","disabled"],x=e=>{let{color:i,disabled:r,focusVisible:t,focusVisibleClassName:n,fullWidth:o,size:a,variant:c,loading:d}=e,v={root:["root",r&&"disabled",t&&"focusVisible",o&&"fullWidth",c&&`variant${(0,s.Z)(c)}`,i&&`color${(0,s.Z)(i)}`,a&&`size${(0,s.Z)(a)}`,d&&"loading"],startDecorator:["startDecorator"],endDecorator:["endDecorator"],loadingIndicatorCenter:["loadingIndicatorCenter"]},u=(0,l.Z)(v,h.F,{});return t&&n&&(u.root+=` ${n}`),u},y=(0,d.Z)("span",{name:"JoyButton",slot:"StartDecorator",overridesResolver:(e,i)=>i.startDecorator})({"--Icon-margin":"0 0 0 calc(var(--Button-gap) / -2)","--CircularProgress-margin":"0 0 0 calc(var(--Button-gap) / -2)",display:"inherit",marginRight:"var(--Button-gap)"}),D=(0,d.Z)("span",{name:"JoyButton",slot:"EndDecorator",overridesResolver:(e,i)=>i.endDecorator})({"--Icon-margin":"0 calc(var(--Button-gap) / -2) 0 0","--CircularProgress-margin":"0 calc(var(--Button-gap) / -2) 0 0",display:"inherit",marginLeft:"var(--Button-gap)"}),Z=(0,d.Z)("span",{name:"JoyButton",slot:"LoadingCenter",overridesResolver:(e,i)=>i.loadingIndicatorCenter})(({theme:e,ownerState:i})=>{var r,t,o,a;return(0,n.Z)({display:"inherit",position:"absolute",left:"50%",transform:"translateX(-50%)",color:null==(r=e.variants[i.variant])?void 0:null==(t=r[i.color])?void 0:t.color},i.disabled&&{color:null==(o=e.variants[`${i.variant}Disabled`])?void 0:null==(a=o[i.color])?void 0:a.color})}),b=(0,d.Z)("button",{name:"JoyButton",slot:"Root",overridesResolver:(e,i)=>i.root})(({theme:e,ownerState:i})=>{var r,t,o,a;return[(0,n.Z)({"--Icon-margin":"initial"},"sm"===i.size&&{"--Icon-fontSize":"1.25rem","--CircularProgress-size":"20px","--Button-gap":"0.375rem",minHeight:"var(--Button-minHeight, 2rem)",fontSize:e.vars.fontSize.sm,paddingBlock:"2px",paddingInline:"0.75rem"},"md"===i.size&&{"--Icon-fontSize":"1.5rem","--CircularProgress-size":"24px","--Button-gap":"0.5rem",minHeight:"var(--Button-minHeight, 2.5rem)",fontSize:e.vars.fontSize.sm,paddingBlock:"0.25rem",paddingInline:"1rem"},"lg"===i.size&&{"--Icon-fontSize":"1.75rem","--CircularProgress-size":"28px","--Button-gap":"0.75rem",minHeight:"var(--Button-minHeight, 3rem)",fontSize:e.vars.fontSize.md,paddingBlock:"0.375rem",paddingInline:"1.5rem"},{WebkitTapHighlightColor:"transparent",borderRadius:`var(--Button-radius, ${e.vars.radius.sm})`,margin:"var(--Button-margin)",border:"none",backgroundColor:"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",textDecoration:"none",fontFamily:e.vars.fontFamily.body,fontWeight:e.vars.fontWeight.lg,lineHeight:1},i.fullWidth&&{width:"100%"},{[e.focus.selector]:e.focus.default}),null==(r=e.variants[i.variant])?void 0:r[i.color],{"&:hover":null==(t=e.variants[`${i.variant}Hover`])?void 0:t[i.color]},{"&:active":null==(o=e.variants[`${i.variant}Active`])?void 0:o[i.color]},(0,n.Z)({[`&.${h.Z.disabled}`]:null==(a=e.variants[`${i.variant}Disabled`])?void 0:a[i.color]},"center"===i.loadingPosition&&{[`&.${h.Z.loading}`]:{color:"transparent"}})]}),P=o.forwardRef(function(e,i){let r=(0,v.Z)({props:e,name:"JoyButton"}),{children:l,action:s,color:d="primary",variant:h="solid",size:P="md",fullWidth:j=!1,startDecorator:S,endDecorator:z,loading:B=!1,loadingPosition:w="center",loadingIndicator:k,disabled:C}=r,I=(0,t.Z)(r,f),{getColor:N}=(0,u.VT)(h),_=N(e.color,d),R=o.useRef(null),F=(0,c.Z)(R,i),{focusVisible:$,setFocusVisible:H,getRootProps:T}=(0,a.Z)((0,n.Z)({},r,{disabled:C||B,ref:F})),J=null!=k?k:(0,p.jsx)(g.Z,(0,n.Z)({},"context"!==_&&{color:_},{thickness:{sm:2,md:3,lg:4}[P]||3}));o.useImperativeHandle(s,()=>({focusVisible:()=>{var e;H(!0),null==(e=R.current)||e.focus()}}),[H]);let W=(0,n.Z)({},r,{color:_,fullWidth:j,variant:h,size:P,focusVisible:$,loading:B,loadingPosition:w,disabled:C||B}),E=x(W),[L,M]=(0,m.Z)("root",{ref:i,className:E.root,elementType:b,externalForwardedProps:I,getSlotProps:T,ownerState:W}),[O,A]=(0,m.Z)("startDecorator",{className:E.startDecorator,elementType:y,externalForwardedProps:I,ownerState:W}),[V,K]=(0,m.Z)("endDecorator",{className:E.endDecorator,elementType:D,externalForwardedProps:I,ownerState:W}),[q,U]=(0,m.Z)("loadingIndicatorCenter",{className:E.loadingIndicatorCenter,elementType:Z,externalForwardedProps:I,ownerState:W});return(0,p.jsxs)(L,(0,n.Z)({},M,{children:[(S||B&&"start"===w)&&(0,p.jsx)(O,(0,n.Z)({},A,{children:B&&"start"===w?J:S})),l,B&&"center"===w&&(0,p.jsx)(q,(0,n.Z)({},U,{children:J})),(z||B&&"end"===w)&&(0,p.jsx)(V,(0,n.Z)({},K,{children:B&&"end"===w?J:z}))]}))});i.Z=P},77614:function(e,i,r){"use strict";r.d(i,{F:function(){return n}});var t=r(18587);function n(e){return(0,t.d6)("MuiButton",e)}let o=(0,t.sI)("MuiButton",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","focusVisible","disabled","sizeSm","sizeMd","sizeLg","fullWidth","startDecorator","endDecorator","loading","loadingIndicatorCenter"]);i.Z=o},45825:function(e,i,r){Promise.resolve().then(r.bind(r,26925))},26925:function(e,i,r){"use strict";r.r(i),r.d(i,{default:function(){return I}});var t=r(9268),n=r(89081),o=r(86006),a=r(22046),l=r(46750),s=r(40431),c=r(89791),d=r(53832),v=r(47562),u=r(50645),m=r(88930),g=r(18587);function h(e){return(0,g.d6)("MuiDivider",e)}(0,g.sI)("MuiDivider",["root","horizontal","vertical","insetContext","insetNone"]);let p=["className","children","component","inset","orientation","role"],f=e=>{let{orientation:i,inset:r}=e,t={root:["root",i,r&&`inset${(0,d.Z)(r)}`]};return(0,v.Z)(t,h,{})},x=(0,u.Z)("hr",{name:"JoyDivider",slot:"Root",overridesResolver:(e,i)=>i.root})(({theme:e,ownerState:i})=>(0,s.Z)({"--Divider-thickness":"1px","--Divider-lineColor":e.vars.palette.divider},"none"===i.inset&&{"--_Divider-inset":"0px"},"context"===i.inset&&{"--_Divider-inset":"var(--Divider-inset, 0px)"},{margin:"initial",marginInline:"vertical"===i.orientation?"initial":"var(--_Divider-inset)",marginBlock:"vertical"===i.orientation?"var(--_Divider-inset)":"initial",position:"relative",alignSelf:"stretch",flexShrink:0},i.children?{"--Divider-gap":e.spacing(1),"--Divider-childPosition":"50%",display:"flex",flexDirection:"vertical"===i.orientation?"column":"row",alignItems:"center",whiteSpace:"nowrap",textAlign:"center",border:0,fontFamily:e.vars.fontFamily.body,fontSize:e.vars.fontSize.sm,"&::before, &::after":{position:"relative",inlineSize:"vertical"===i.orientation?"var(--Divider-thickness)":"initial",blockSize:"vertical"===i.orientation?"initial":"var(--Divider-thickness)",backgroundColor:"var(--Divider-lineColor)",content:'""'},"&::before":{marginInlineEnd:"vertical"===i.orientation?"initial":"min(var(--Divider-childPosition) * 999, var(--Divider-gap))",marginBlockEnd:"vertical"===i.orientation?"min(var(--Divider-childPosition) * 999, var(--Divider-gap))":"initial",flexBasis:"var(--Divider-childPosition)"},"&::after":{marginInlineStart:"vertical"===i.orientation?"initial":"min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",marginBlockStart:"vertical"===i.orientation?"min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))":"initial",flexBasis:"calc(100% - var(--Divider-childPosition))"}}:{border:"none",listStyle:"none",backgroundColor:"var(--Divider-lineColor)",inlineSize:"vertical"===i.orientation?"var(--Divider-thickness)":"initial",blockSize:"vertical"===i.orientation?"initial":"var(--Divider-thickness)"})),y=o.forwardRef(function(e,i){let r=(0,m.Z)({props:e,name:"JoyDivider"}),{className:n,children:o,component:a=null!=o?"div":"hr",inset:d,orientation:v="horizontal",role:u="hr"!==a?"separator":void 0}=r,g=(0,l.Z)(r,p),h=(0,s.Z)({},r,{inset:d,role:u,orientation:v,component:a}),y=f(h);return(0,t.jsx)(x,(0,s.Z)({ref:i,as:a,className:(0,c.Z)(y.root,n),ownerState:h,role:u},"separator"===u&&"vertical"===v&&{"aria-orientation":"vertical"},g,{children:o}))});y.muiName="Divider";var D=r(90545),Z=r(77614),b=r(53113),P=r(35086),j=r(53047),S=r(54842),z=r(67830),B=r(19700),w=r(92391),k=r(78915),C=r(56008);function I(){var e;let i=w.z.object({query:w.z.string().min(1)}),r=(0,C.useRouter)(),[l,s]=(0,o.useState)(!1),c=(0,B.cI)({resolver:(0,z.F)(i),defaultValues:{}}),{data:d}=(0,n.Z)(async()=>await (0,k.Kw)("/v1/chat/dialogue/scenes")),v=async e=>{let{query:i}=e;try{var t,n;s(!0),c.reset();let e=await (0,k.Kw)("/v1/chat/dialogue/new",{chat_mode:"chat_normal"});(null==e?void 0:e.success)&&(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.conv_uid)&&r.push("/chat?id=".concat(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.conv_uid,"&initMessage=").concat(i))}catch(e){}finally{s(!1)}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"mx-auto h-full justify-center flex max-w-3xl flex-col gap-8 px-5 pt-6 xl:max-w-4xl",children:[(0,t.jsxs)("div",{className:"max-w-xs my-0 mx-auto",children:[(0,t.jsx)(a.ZP,{level:"h3",className:"text-center",children:"DB-GPT"}),(0,t.jsx)(a.ZP,{level:"body1",className:"text-center pt-4",children:"Revolutionizing Database Interactions with Private LLM Technology"})]}),(0,t.jsx)("div",{className:"grid gap-8 lg:grid-cols-3",children:(0,t.jsxs)("div",{className:"lg:col-span-3",children:[(0,t.jsx)(y,{className:"text-[#878c93]",children:"Quick Start"}),(0,t.jsx)(D.Z,{className:"grid pt-7 rounded-xl gap-2 lg:grid-cols-3 lg:gap-6",sx:{["& .".concat(Z.Z.root)]:{color:"var(--joy-palette-primary-solidColor)",backgroundColor:"var(--joy-palette-primary-solidBg)",height:"52px","&: hover":{backgroundColor:"var(--joy-palette-primary-solidHoverBg)"}}},children:null==d?void 0:null===(e=d.data)||void 0===e?void 0:e.map(e=>(0,t.jsx)(b.Z,{size:"md",variant:"solid",className:"text-base rounded-none",onClick:async()=>{var i,t;let n=await (0,k.Kw)("/v1/chat/dialogue/new",{chat_mode:e.chat_scene});(null==n?void 0:n.success)&&(null==n?void 0:null===(i=n.data)||void 0===i?void 0:i.conv_uid)&&r.push("/chat?id=".concat(null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.conv_uid,"&scene=").concat(e.chat_scene))},children:e.scene_name},e.chat_scene))})]})}),(0,t.jsx)("div",{className:"mt-6 mb-[10%] pointer-events-none inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-3xl flex-col items-center justify-center max-md:border-t xl:max-w-4xl [&>*]:pointer-events-auto",children:(0,t.jsx)("form",{style:{maxWidth:"100%",width:"100%",position:"relative",display:"flex",marginTop:"auto",overflow:"visible",background:"none",justifyContent:"center",marginLeft:"auto",marginRight:"auto",height:"52px"},onSubmit:e=>{c.handleSubmit(v)(e)},children:(0,t.jsx)(P.ZP,{sx:{width:"100%"},variant:"outlined",placeholder:"Ask anything",endDecorator:(0,t.jsx)(j.ZP,{type:"submit",disabled:l,children:(0,t.jsx)(S.Z,{})}),...c.register("query")})})})]})})}},78915:function(e,i,r){"use strict";r.d(i,{Tk:function(){return d},Kw:function(){return v},PR:function(){return u},Ej:function(){return m}});var t=r(21628),n=r(24214),o=r(52040);let a=n.Z.create({baseURL:o.env.API_BASE_URL});a.defaults.timeout=1e4,a.interceptors.response.use(e=>e.data,e=>Promise.reject(e));var l=r(84835);let s={"content-type":"application/json"},c=e=>{if(!(0,l.isPlainObject)(e))return JSON.stringify(e);let i={...e};for(let e in i){let r=i[e];"string"==typeof r&&(i[e]=r.trim())}return JSON.stringify(i)},d=(e,i)=>{if(i){let r=Object.keys(i).filter(e=>void 0!==i[e]&&""!==i[e]).map(e=>"".concat(e,"=").concat(i[e])).join("&");r&&(e+="?".concat(r))}return a.get("/api"+e,{headers:s}).then(e=>e).catch(e=>{t.ZP.error(e),Promise.reject(e)})},v=(e,i)=>{let r=c(i);return a.post("/api"+e,{body:r,headers:s}).then(e=>e).catch(e=>{t.ZP.error(e),Promise.reject(e)})},u=(e,i)=>(c(i),a.post(e,i,{headers:s}).then(e=>e).catch(e=>{t.ZP.error(e),Promise.reject(e)})),m=(e,i)=>a.post(e,i).then(e=>e).catch(e=>{t.ZP.error(e),Promise.reject(e)})}},function(e){e.O(0,[180,110,97,86,316,259,253,769,744],function(){return e(e.s=45825)}),_N_E=e.O()}]);