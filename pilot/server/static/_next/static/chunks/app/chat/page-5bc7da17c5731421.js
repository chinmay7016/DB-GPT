(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{86066:function(e,t,l){Promise.resolve().then(l.bind(l,65641))},65641:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return K}});var a=l(9268),r=l(86006),n=l(91440),s=l(90022),i=l(69962),o=l(97287),c=l(73141),d=l(45642),u=l(8997),h=l(22046),x=l(83192),f=l(90545),v=l(89081),p=l(78915),m=l(71990),j=e=>{let t=(0,r.useReducer)((e,t)=>({...e,...t}),{...e});return t},g=l(57931),y=l(52040),b=e=>{let{queryAgentURL:t,channel:l,queryBody:a,initHistory:n,runHistoryList:s}=e,[i,o]=j({history:n||[]}),{refreshDialogList:c}=(0,g.Cg)(),d=new AbortController;(0,r.useEffect)(()=>{n&&o({history:n})},[n]);let u=async(e,r)=>{if(!e)return;let n=[...i.history,{role:"human",context:e}],s=n.length;o({history:n});try{await (0,m.L)("".concat(y.env.API_BASE_URL?y.env.API_BASE_URL:"").concat("/api"+t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...r,...a,user_input:e,channel:l}),signal:d.signal,async onopen(e){if(n.length<=1){c();let e=new URLSearchParams(window.location.search);e.delete("initMessage"),window.history.replaceState(null,null,"?".concat(e.toString()))}(!e.ok||e.headers.get("content-type")!==m.a)&&e.status>=400&&e.status<500&&429!==e.status&&e.status},onclose(){console.log("onclose")},onerror(e){throw console.log("onerror"),Error(e)},onmessage:e=>{var t;if(e.data=e.data.replaceAll("\\n","\n"),"[DONE]"===e.data);else if(null===(t=e.data)||void 0===t?void 0:t.startsWith("[ERROR]"))o({history:[...n,{role:"view",context:e.data.replace("[ERROR]","")}]});else{let t=[...n];e.data&&((null==t?void 0:t[s])?t[s].context="".concat(e.data):t.push({role:"view",context:e.data}),o({history:t}))}}})}catch(e){console.log(e),o({history:[...n,{role:"view",context:"请求出错"}]})}};return{handleChatSubmit:u,history:i.history}},w=l(67830),Z=l(54842),N=l(80937),_=l(311),P=l(94244),S=l(12025),k=l(46571),C=l(35086),O=l(53047),E=l(81528),R=l(30530),B=l(64747),I=l(53113),A=l(19700),L=l(92391),T=l(55749),D=l(70781),F=l(75403),J=l(99398),M=l(49064),U=l(56008),z=l(84835),V=l.n(z),W=l(21628);let q=L.z.object({query:L.z.string().min(1)});var H=e=>{let{messages:t,onSubmit:n,readOnly:i,paramsList:o,isChartChat:c=!1,clearIntialMessage:d,setChartsData:u}=e,h=(0,U.useSearchParams)(),x=h.get("initMessage"),v=(0,r.useRef)(null),[p,m]=(0,r.useState)(!1),[j,g]=(0,r.useState)(),[y,b]=(0,r.useState)(!1),[L,z]=(0,r.useState)(),[H,G]=(0,r.useState)(t),[K,Y]=(0,r.useState)(""),Q=(0,A.cI)({resolver:(0,w.F)(q),defaultValues:{}}),X=async e=>{let{query:t}=e;try{m(!0),Q.reset(),await n(t,{select_param:null==o?void 0:o[j]})}catch(e){}finally{m(!1)}},$=async()=>{try{let e=new URLSearchParams(window.location.search),t=e.get("initMessage");e.delete("initMessage"),window.history.replaceState(null,null,"?".concat(e.toString())),await X({query:t})}catch(e){console.log(e)}finally{null==d||d()}},ee={overrides:{code:e=>{let{children:t}=e;return(0,a.jsx)(J.Z,{language:"javascript",style:M.Z,children:t})}},wrapper:r.Fragment},et=e=>{let t=e;try{t=JSON.parse(e)}catch(e){console.log(e)}return t},el=r.useMemo(()=>{if("function"==typeof(null==window?void 0:window.fetch)){let e=l(62631);return l(25204),l(82372),e.default}},[]);return r.useEffect(()=>{v.current&&v.current.scrollTo(0,v.current.scrollHeight)},[null==t?void 0:t.length]),r.useEffect(()=>{x&&t.length<=0&&$()},[x,t.length]),r.useEffect(()=>{var e,t;o&&(null===(e=Object.keys(o||{}))||void 0===e?void 0:e.length)>0&&g(null===(t=Object.keys(o||{}))||void 0===t?void 0:t[0])},[o]),r.useEffect(()=>{if(c){let e=V().cloneDeep(t);e.forEach(e=>{(null==e?void 0:e.role)==="view"&&"string"==typeof(null==e?void 0:e.context)&&(e.context=et(null==e?void 0:e.context))}),G(e.filter(e=>["view","human"].includes(e.role)))}else G(t.filter(e=>["view","human"].includes(e.role)))},[c,t]),(0,a.jsxs)("div",{className:"w-full h-full",children:[(0,a.jsxs)(N.Z,{className:"w-full h-full bg-[#fefefe] dark:bg-[#212121]",sx:{table:{borderCollapse:"collapse",border:"1px solid #ccc",width:"100%"},"th, td":{border:"1px solid #ccc",padding:"10px",textAlign:"center"}},children:[(0,a.jsxs)(N.Z,{ref:v,direction:"column",sx:{overflowY:"auto",maxHeight:"100%",flex:1},children:[H.map((e,t)=>{var l,r;return(0,a.jsx)(N.Z,{children:(0,a.jsx)(s.Z,{size:"sm",variant:"outlined",color:"view"===e.role?"primary":"neutral",sx:t=>({background:"view"===e.role?"var(--joy-palette-primary-softBg, var(--joy-palette-primary-100, #DDF1FF))":"unset",border:"unset",borderRadius:"unset",padding:"24px 0 26px 0",lineHeight:"24px"}),children:(0,a.jsxs)(f.Z,{sx:{width:"76%",margin:"0 auto"},className:"flex flex-row",children:[(0,a.jsx)("div",{className:"mr-3 inline",children:"view"===e.role?(0,a.jsx)(D.Z,{}):(0,a.jsx)(T.Z,{})}),(0,a.jsx)("div",{className:"inline align-middle mt-0.5 max-w-full flex-1 overflow-auto",children:c&&"view"===e.role&&"object"==typeof(null==e?void 0:e.context)?(0,a.jsxs)(a.Fragment,{children:["[".concat(e.context.template_name,"]: "),(0,a.jsx)(_.Z,{sx:{color:"#1677ff"},component:"button",onClick:()=>{b(!0),z(t),Y(JSON.stringify(null==e?void 0:e.context,null,2))},children:e.context.template_introduce||"暂无介绍"})]}):(0,a.jsx)(F.Z,{options:ee,children:null===(l=e.context)||void 0===l?void 0:null===(r=l.replaceAll)||void 0===r?void 0:r.call(l,"\\n","\n")})})]})})},t)}),p&&(0,a.jsx)(P.Z,{variant:"soft",color:"neutral",size:"sm",sx:{mx:"auto",my:2}})]}),!i&&(0,a.jsx)(f.Z,{className:"bg-[#fefefe] dark:bg-[#212121] before:bg-[#fefefe] before:dark:bg-[#212121]",sx:{position:"relative","&::before":{content:'" "',position:"absolute",top:"-18px",left:"0",right:"0",width:"100%",margin:"0 auto",height:"20px",filter:"blur(10px)",zIndex:2}},children:(0,a.jsxs)("form",{style:{maxWidth:"100%",width:"76%",position:"relative",display:"flex",marginTop:"auto",overflow:"visible",background:"none",justifyContent:"center",marginLeft:"auto",marginRight:"auto",flexDirection:"column",gap:"12px",paddingBottom:"58px",paddingTop:"20px"},onSubmit:e=>{e.stopPropagation(),Q.handleSubmit(X)(e)},children:[Object.keys(o||{}).length>0&&(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)(S.Z,{value:j,onChange:(e,t)=>{g(t)},sx:{maxWidth:"100%"},children:Object.keys(o||{}).map(e=>(0,a.jsx)(k.Z,{value:e,children:e},e))})}),(0,a.jsx)(C.ZP,{className:"w-full h-12",variant:"outlined",endDecorator:(0,a.jsx)(O.ZP,{type:"submit",disabled:p,children:(0,a.jsx)(Z.Z,{})}),...Q.register("query")})]})})]}),(0,a.jsx)(E.Z,{open:y,onClose:()=>b(!1),children:(0,a.jsxs)(R.Z,{"aria-labelledby":"variant-modal-title","aria-describedby":"variant-modal-description",children:[(0,a.jsx)(B.Z,{}),(0,a.jsxs)(f.Z,{sx:{marginTop:"32px"},children:[!!el&&(0,a.jsx)(el,{mode:"json",value:K,height:"600px",width:"820px",onChange:Y,placeholder:"默认json数据",debounceChangePeriod:100,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{useWorker:!0,showLineNumbers:!0,highlightSelectedWord:!0,tabSize:2}}),(0,a.jsx)(I.Z,{variant:"outlined",className:"w-full",sx:{marginTop:"12px"},onClick:()=>{if(L)try{let e=V().cloneDeep(H),t=JSON.parse(K);e[L].context=t,G(e),null==u||u(null==t?void 0:t.charts),b(!1),Y("")}catch(e){W.ZP.error("JSON 格式化出错")}},children:"Submit"})]})]})})]})};let G=()=>(0,a.jsxs)(s.Z,{className:"h-full w-full flex bg-transparent",children:[(0,a.jsx)(i.Z,{animation:"wave",variant:"text",level:"body2"}),(0,a.jsx)(i.Z,{animation:"wave",variant:"text",level:"body2"}),(0,a.jsx)(o.Z,{ratio:"21/9",className:"flex-1",sx:{["& .".concat(c.Z.content)]:{height:"100%"}},children:(0,a.jsx)(i.Z,{variant:"overlay",className:"h-full"})})]});var K=()=>{let[e,t]=(0,r.useState)(),l=(0,U.useSearchParams)(),{refreshDialogList:i}=(0,g.Cg)(),o=l.get("id"),c=l.get("scene"),{data:m,run:j}=(0,v.Z)(async()=>await (0,p.Tk)("/v1/chat/dialogue/messages/history",{con_uid:o}),{ready:!!o,refreshDeps:[o]}),{data:y}=(0,v.Z)(async()=>await (0,p.Kw)("/v1/chat/mode/params/list?chat_mode=".concat(c)),{ready:!!c,refreshDeps:[o,c]}),{history:w,handleChatSubmit:Z}=b({queryAgentURL:"/v1/chat/completions",queryBody:{conv_uid:o,chat_mode:c||"chat_normal"},initHistory:null==m?void 0:m.data,runHistoryList:j});(0,r.useEffect)(()=>{try{var e;let l=null==w?void 0:null===(e=w[w.length-1])||void 0===e?void 0:e.context,a=JSON.parse(l);t((null==a?void 0:a.template_name)==="sales_report"?null==a?void 0:a.charts:void 0)}catch(e){t(void 0)}},[w]);let N=(0,r.useMemo)(()=>{if(e){let t=[],l=null==e?void 0:e.filter(e=>"IndicatorValue"===e.chart_type);l.length>0&&t.push({rowIndex:t.length,cols:l,type:"IndicatorValue"});let a=null==e?void 0:e.filter(e=>"IndicatorValue"!==e.chart_type),r=a.length,n=0;return[[0],[1],[2],[1,2],[1,3],[2,1,2],[2,1,3],[3,1,3],[3,2,3]][r].forEach(e=>{if(e>0){let l=a.slice(n,n+e);n+=e,t.push({rowIndex:t.length,cols:l})}}),t}},[e]);return(0,a.jsxs)(d.Z,{container:!0,spacing:2,className:"h-full",sx:{flexGrow:1},children:[e&&(0,a.jsx)(d.Z,{xs:8,className:"max-h-full",children:(0,a.jsx)("div",{className:"flex flex-col gap-3 h-full",children:null==N?void 0:N.map(e=>(0,a.jsx)("div",{className:"".concat((null==e?void 0:e.type)!=="IndicatorValue"?"flex flex-1 gap-3 overflow-hidden":""),children:e.cols.map(e=>{if("IndicatorValue"===e.chart_type)return(0,a.jsx)("div",{className:"flex flex-row gap-3",children:e.values.map(e=>(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(s.Z,{sx:{background:"transparent"},children:(0,a.jsxs)(u.Z,{className:"justify-around",children:[(0,a.jsx)(h.ZP,{gutterBottom:!0,component:"div",children:e.name}),(0,a.jsx)(h.ZP,{children:e.value})]})})},e.name))},e.chart_uid);if("LineChart"===e.chart_type)return(0,a.jsx)("div",{className:"flex-1 overflow-hidden",children:(0,a.jsx)(s.Z,{className:"h-full",sx:{background:"transparent"},children:(0,a.jsxs)(u.Z,{className:"h-full",children:[(0,a.jsx)(h.ZP,{gutterBottom:!0,component:"div",children:e.chart_name}),(0,a.jsx)(h.ZP,{gutterBottom:!0,level:"body3",children:e.chart_desc}),(0,a.jsx)("div",{className:"flex-1 h-full",children:(0,a.jsx)(n.Chart,{padding:[10,20,50,40],autoFit:!0,data:e.values,children:(0,a.jsx)(n.LineAdvance,{shape:"smooth",point:!0,area:!0,position:"name*value",color:"type"})})})]})})},e.chart_uid);if("BarChart"===e.chart_type)return(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(s.Z,{className:"h-full",sx:{background:"transparent"},children:(0,a.jsxs)(u.Z,{className:"h-full",children:[(0,a.jsx)(h.ZP,{gutterBottom:!0,component:"div",children:e.chart_name}),(0,a.jsx)(h.ZP,{gutterBottom:!0,level:"body3",children:e.chart_desc}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsxs)(n.Chart,{autoFit:!0,data:e.values,children:[(0,a.jsx)(n.Interval,{position:"name*value",style:{lineWidth:3,stroke:(0,n.getTheme)().colors10[0]}}),(0,a.jsx)(n.Tooltip,{shared:!0})]})})]})})},e.chart_uid);if("Table"===e.chart_type){var t,l;let r=V().groupBy(e.values,"type");return(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(s.Z,{className:"h-full overflow-auto",sx:{background:"transparent"},children:(0,a.jsxs)(u.Z,{className:"h-full",children:[(0,a.jsx)(h.ZP,{gutterBottom:!0,component:"div",children:e.chart_name}),(0,a.jsx)(h.ZP,{gutterBottom:!0,level:"body3",children:e.chart_desc}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsxs)(x.Z,{"aria-label":"basic table",stripe:"odd",hoverRow:!0,borderAxis:"bothBetween",children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:Object.keys(r).map(e=>(0,a.jsx)("th",{children:e},e))})}),(0,a.jsx)("tbody",{children:null===(t=Object.values(r))||void 0===t?void 0:null===(l=t[0])||void 0===l?void 0:l.map((e,t)=>{var l;return(0,a.jsx)("tr",{children:null===(l=Object.keys(r))||void 0===l?void 0:l.map(e=>{var l;return(0,a.jsx)("td",{children:(null==r?void 0:null===(l=r[e])||void 0===l?void 0:l[t].value)||""},e)})},t)})})]})})]})})},e.chart_uid)}})},e.rowIndex))})}),!e&&"chat_dashboard"===c&&(0,a.jsx)(d.Z,{xs:8,className:"max-h-full p-6",children:(0,a.jsx)("div",{className:"flex flex-col gap-3 h-full",children:(0,a.jsxs)(d.Z,{container:!0,spacing:2,sx:{flexGrow:1},children:[(0,a.jsx)(d.Z,{xs:8,children:(0,a.jsx)(f.Z,{className:"h-full w-full",sx:{display:"flex",gap:2},children:(0,a.jsx)(G,{})})}),(0,a.jsx)(d.Z,{xs:4,children:(0,a.jsx)(G,{})}),(0,a.jsx)(d.Z,{xs:4,children:(0,a.jsx)(G,{})}),(0,a.jsx)(d.Z,{xs:8,children:(0,a.jsx)(G,{})})]})})}),(0,a.jsx)(d.Z,{xs:"chat_dashboard"===c?4:12,className:"h-full max-h-full",children:(0,a.jsx)("div",{className:"h-full",style:{boxShadow:"chat_dashboard"===c?"0px 0px 9px 0px #c1c0c080":"unset"},children:(0,a.jsx)(H,{clearIntialMessage:async()=>{await i()},isChartChat:"chat_dashboard"===c,messages:w||[],onSubmit:Z,paramsList:null==y?void 0:y.data,setChartsData:t})})})]})}},57931:function(e,t,l){"use strict";l.d(t,{ZP:function(){return c},Cg:function(){return i}});var a=l(9268),r=l(89081),n=l(78915),s=l(86006);let[i,o]=function(){let e=s.createContext(void 0);return[function(){let t=s.useContext(e);if(void 0===t)throw Error("useCtx must be inside a Provider with a value");return t},e.Provider]}();var c=e=>{let{children:t}=e,{run:l,data:s,refresh:i}=(0,r.Z)(async()=>await (0,n.Tk)("/v1/chat/dialogue/list"),{manual:!0});return(0,a.jsx)(o,{value:{dialogueList:s,queryDialogueList:l,refreshDialogList:i},children:t})}},78915:function(e,t,l){"use strict";l.d(t,{Tk:function(){return d},Kw:function(){return u},PR:function(){return h},Ej:function(){return x}});var a=l(21628),r=l(24214),n=l(52040);let s=r.Z.create({baseURL:n.env.API_BASE_URL});s.defaults.timeout=1e4,s.interceptors.response.use(e=>e.data,e=>Promise.reject(e));var i=l(84835);let o={"content-type":"application/json"},c=e=>{if(!(0,i.isPlainObject)(e))return JSON.stringify(e);let t={...e};for(let e in t){let l=t[e];"string"==typeof l&&(t[e]=l.trim())}return JSON.stringify(t)},d=(e,t)=>{if(t){let l=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");l&&(e+="?".concat(l))}return s.get("/api"+e,{headers:o}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})},u=(e,t)=>{let l=c(t);return s.post("/api"+e,{body:l,headers:o}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})},h=(e,t)=>(c(t),s.post(e,t,{headers:o}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})),x=(e,t)=>s.post(e,t).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})}},function(e){e.O(0,[180,757,282,110,60,86,316,790,259,767,751,436,253,769,744],function(){return e(e.s=86066)}),_N_E=e.O()}]);