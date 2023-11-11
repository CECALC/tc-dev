import{b_ as tt,J as R,r as T,ao as Ee,ad as pe,a0 as ie,V as xe,$ as C,o as N,e as W,Z as nt,aM as O,b$ as we,S as ot,c0 as Y,H as z,c1 as lt,I as ce,c2 as at,c3 as it,c as b,K as de,af as ut,ag as rt,c4 as st,c5 as ct,c6 as dt,c7 as ft,c8 as qe,c9 as vt,X as ht,ca as mt,aL as Pe,cb as gt,cc as bt,g as w,L as F,a1 as _t,aC as yt,Y as Re,cd as fe,T as Qe,ce as pt,cf as xt,aK as Me,al as j,am as $,cg as I,P as We,ch as wt,ci as qt,cj as U,ah as Fe,ck as Ct,cl as Ve,_ as kt,v as Q,x as K,aX as M,s as ue,y as re,d as Ae,bK as Oe,aV as X,B,A as P,b8 as Ce,b9 as St,b5 as Tt,C as le,z as A,cm as $t,aS as zt,ab as Lt,bJ as Ht,O as Bt,b4 as Et}from"./entry.dfcda03c.js";function Pt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Rt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Qt({showing:e,avoidEmit:l,configureAnchorEl:o}){const{props:t,proxy:n,emit:r}=R(),a=T(null);let f=null;function c(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const u={};o===void 0&&(Object.assign(u,{hide(i){n.hide(i)},toggle(i){n.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Ee(i,13)===!0&&u.toggle(i)},contextClick(i){n.hide(i),pe(i),ie(()=>{n.show(i),i.qAnchorHandled=!0})},prevent:pe,mobileTouch(i){if(u.mobileCleanup(i),c(i)!==!0)return;n.hide(i),a.value.classList.add("non-selectable");const d=i.target;xe(u,"anchor",[[d,"touchmove","mobileCleanup","passive"],[d,"touchend","mobileCleanup","passive"],[d,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,n.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&i!==void 0&&Pt()}}),o=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let d;i===!0?n.$q.platform.is.mobile===!0?d=[[a.value,"touchstart","mobileTouch","passive"]]:d=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:d=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],xe(u,"anchor",d)});function v(){nt(u,"anchor")}function y(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function p(){if(t.target===!1||t.target===""||n.$el.parentNode===null)a.value=null;else if(t.target===!0)y(n.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,o()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return C(()=>t.contextMenu,i=>{a.value!==null&&(v(),o(i))}),C(()=>t.target,()=>{a.value!==null&&v(),p()}),C(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?v():o())}),N(()=>{p(),l!==!0&&t.modelValue===!0&&a.value===null&&r("update:modelValue",!1)}),W(()=>{f!==null&&clearTimeout(f),v()}),{anchorEl:a,canShow:c,anchorEvents:u}}function Mt(e,l){const o=T(null);let t;function n(f,c){const u=`${c!==void 0?"add":"remove"}EventListener`,v=c!==void 0?c:t;f!==window&&f[u]("scroll",v,O.passive),window[u]("scroll",v,O.passive),t=c}function r(){o.value!==null&&(n(o.value),o.value=null)}const a=C(()=>e.noParentEvent,()=>{o.value!==null&&(r(),l())});return W(a),{localScrollTarget:o,unconfigureScrollTarget:r,changeScrollEvent:n}}const{notPassiveCapture:J}=O,V=[];function Z(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let o=we.length-1;for(;o>=0;){const t=we[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=V.length-1;t>=0;t--){const n=V[t];if((n.anchorEl.value===null||n.anchorEl.value.contains(l)===!1)&&(l===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(l)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function Wt(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",Z,J),document.addEventListener("touchstart",Z,J))}function ke(e){const l=V.findIndex(o=>o===e);l>-1&&(V.splice(l,1),V.length===0&&(document.removeEventListener("mousedown",Z,J),document.removeEventListener("touchstart",Z,J)))}let Se,Te;function $e(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ft(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const se={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{se[`${e}#ltr`]=e,se[`${e}#rtl`]=e});function ze(e,l){const o=e.split(" ");return{vertical:o[0],horizontal:se[`${o[1]}#${l===!0?"rtl":"ltr"}`]}}function Vt(e,l){let{top:o,left:t,right:n,bottom:r,width:a,height:f}=e.getBoundingClientRect();return l!==void 0&&(o-=l[1],t-=l[0],r+=l[1],n+=l[0],a+=l[0],f+=l[1]),{top:o,bottom:r,height:f,left:t,right:n,width:a,middle:t+(n-t)/2,center:o+(r-o)/2}}function At(e,l,o){let{top:t,left:n}=e.getBoundingClientRect();return t+=l.top,n+=l.left,o!==void 0&&(t+=o[1],n+=o[0]),{top:t,bottom:t+1,height:1,left:n,right:n+1,width:1,middle:n,center:t}}function Ot(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function Le(e,l,o,t){return{top:e[o.vertical]-l[t.vertical],left:e[o.horizontal]-l[t.horizontal]}}function De(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{De(e,l+1)},10);return}const{targetEl:o,offset:t,anchorEl:n,anchorOrigin:r,selfOrigin:a,absoluteOffset:f,fit:c,cover:u,maxHeight:v,maxWidth:y}=e;if(ot.is.ios===!0&&window.visualViewport!==void 0){const x=document.body.style,{offsetLeft:S,offsetTop:H}=window.visualViewport;S!==Se&&(x.setProperty("--q-pe-left",S+"px"),Se=S),H!==Te&&(x.setProperty("--q-pe-top",H+"px"),Te=H)}const{scrollLeft:p,scrollTop:i}=o,d=f===void 0?Vt(n,u===!0?[0,0]:t):At(n,f,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y||"100vw",maxHeight:v||"100vh",visibility:"visible"});const{offsetWidth:q,offsetHeight:k}=o,{elWidth:L,elHeight:h}=c===!0||u===!0?{elWidth:Math.max(d.width,q),elHeight:u===!0?Math.max(d.height,k):k}:{elWidth:q,elHeight:k};let m={maxWidth:y,maxHeight:v};(c===!0||u===!0)&&(m.minWidth=d.width+"px",u===!0&&(m.minHeight=d.height+"px")),Object.assign(o.style,m);const g=Ot(L,h);let s=Le(d,g,r,a);if(f===void 0||t===void 0)ae(s,d,g,r,a);else{const{top:x,left:S}=s;ae(s,d,g,r,a);let H=!1;if(s.top!==x){H=!0;const E=2*t[1];d.center=d.top-=E,d.bottom-=E+2}if(s.left!==S){H=!0;const E=2*t[0];d.middle=d.left-=E,d.right-=E+2}H===!0&&(s=Le(d,g,r,a),ae(s,d,g,r,a))}m={top:s.top+"px",left:s.left+"px"},s.maxHeight!==void 0&&(m.maxHeight=s.maxHeight+"px",d.height>s.maxHeight&&(m.minHeight=m.maxHeight)),s.maxWidth!==void 0&&(m.maxWidth=s.maxWidth+"px",d.width>s.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(o.style,m),o.scrollTop!==i&&(o.scrollTop=i),o.scrollLeft!==p&&(o.scrollLeft=p)}function ae(e,l,o,t,n){const r=o.bottom,a=o.right,f=Y(),c=window.innerHeight-f,u=document.body.clientWidth;if(e.top<0||e.top+r>c)if(n.vertical==="center")e.top=l[t.vertical]>c/2?Math.max(0,c-r):0,e.maxHeight=Math.min(r,c);else if(l[t.vertical]>c/2){const v=Math.min(c,t.vertical==="center"?l.center:t.vertical===n.vertical?l.bottom:l.top);e.maxHeight=Math.min(r,v),e.top=Math.max(0,v-r)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===n.vertical?l.top:l.bottom),e.maxHeight=Math.min(r,c-e.top);if(e.left<0||e.left+a>u)if(e.maxWidth=Math.min(a,u),n.horizontal==="middle")e.left=l[t.horizontal]>u/2?Math.max(0,u-a):0;else if(l[t.horizontal]>u/2){const v=Math.min(u,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.right:l.left);e.maxWidth=Math.min(a,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.left:l.right),e.maxWidth=Math.min(a,u-e.left)}const Dt=z({name:"QMenu",inheritAttrs:!1,props:{...Rt,...lt,...ce,...at,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:$e},self:{type:String,validator:$e},offset:{type:Array,validator:Ft},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...it,"click","escapeKey"],setup(e,{slots:l,emit:o,attrs:t}){let n=null,r,a,f;const c=R(),{proxy:u}=c,{$q:v}=u,y=T(null),p=T(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),d=de(e,v),{registerTick:q,removeTick:k}=ut(),{registerTimeout:L}=rt(),{transitionProps:h,transitionStyle:m}=st(e),{localScrollTarget:g,changeScrollEvent:s,unconfigureScrollTarget:x}=Mt(e,_e),{anchorEl:S,canShow:H}=Qt({showing:p}),{hide:E}=ct({showing:p,canShow:H,handleShow:Xe,handleHide:Ye,hideOnRouteChange:i,processOnMount:!0}),{showPortal:ve,hidePortal:he,renderPortal:Ne}=dt(c,y,Ze,"menu"),ee={anchorEl:S,innerRef:y,onClickOutside(_){if(e.persistent!==!0&&p.value===!0)return E(_),(_.type==="touchstart"||_.target.classList.contains("q-dialog__backdrop"))&&Re(_),!0}},me=b(()=>ze(e.anchor||(e.cover===!0?"center middle":"bottom start"),v.lang.rtl)),je=b(()=>e.cover===!0?me.value:ze(e.self||"top start",v.lang.rtl)),Ie=b(()=>(e.square===!0?" q-menu--square":"")+(d.value===!0?" q-menu--dark q-dark":"")),Ue=b(()=>e.autoClose===!0?{onClick:Je}:{}),ge=b(()=>p.value===!0&&e.persistent!==!0);C(ge,_=>{_===!0?(ft(ne),Wt(ee)):(qe(ne),ke(ee))});function te(){yt(()=>{let _=y.value;_&&_.contains(document.activeElement)!==!0&&(_=_.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||_.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||_.querySelector("[autofocus], [data-autofocus]")||_,_.focus({preventScroll:!0}))})}function Xe(_){if(n=e.noRefocus===!1?document.activeElement:null,vt(ye),ve(),_e(),r=void 0,_!==void 0&&(e.touchPosition||e.contextMenu)){const oe=ht(_);if(oe.left!==void 0){const{top:Ge,left:et}=S.value.getBoundingClientRect();r={left:oe.left-et,top:oe.top-Ge}}}a===void 0&&(a=C(()=>v.screen.width+"|"+v.screen.height+"|"+e.self+"|"+e.anchor+"|"+v.lang.rtl,D)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{D(),e.noFocus!==!0&&te()}),L(()=>{v.platform.is.ios===!0&&(f=e.autoClose,y.value.click()),D(),ve(!0),o("show",_)},e.transitionDuration)}function Ye(_){k(),he(),be(!0),n!==null&&(_===void 0||_.qClickOutside!==!0)&&(((_&&_.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),L(()=>{he(!0),o("hide",_)},e.transitionDuration)}function be(_){r=void 0,a!==void 0&&(a(),a=void 0),(_===!0||p.value===!0)&&(mt(ye),x(),ke(ee),qe(ne)),_!==!0&&(n=null)}function _e(){(S.value!==null||e.scrollTarget!==void 0)&&(g.value=Pe(S.value,e.scrollTarget),s(g.value,D))}function Je(_){f!==!0?(gt(u,_),o("click",_)):f=!1}function ye(_){ge.value===!0&&e.noFocus!==!0&&bt(y.value,_.target)!==!0&&te()}function ne(_){o("escapeKey"),E(_)}function D(){De({targetEl:y.value,offset:e.offset,anchorEl:S.value,anchorOrigin:me.value,selfOrigin:je.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ze(){return w(_t,h.value,()=>p.value===!0?w("div",{role:"menu",...t,ref:y,tabindex:-1,class:["q-menu q-position-engine scroll"+Ie.value,t.class],style:[t.style,m.value],...Ue.value},F(l.default)):null)}return W(be),Object.assign(u,{focus:te,updatePosition:D}),Ne}});function Kt(){const e=T(!fe.value);return e.value===!1&&N(()=>{e.value=!0}),e}const Ke=typeof ResizeObserver<"u",He=Ke===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},G=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,t,n={width:-1,height:-1};function r(c){c===!0||e.debounce===0||e.debounce==="0"?a():o===null&&(o=setTimeout(a,e.debounce))}function a(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:c,offsetHeight:u}=t;(c!==n.width||u!==n.height)&&(n={width:c,height:u},l("resize",n))}}const{proxy:f}=R();if(Ke===!0){let c;const u=v=>{t=f.$el.parentNode,t?(c=new ResizeObserver(r),c.observe(t),a()):v!==!0&&ie(()=>{u(!0)})};return N(()=>{u()}),W(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():t&&c.unobserve(t))}),Qe}else{let v=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",r,O.passive),u=void 0)},y=function(){v(),t&&t.contentDocument&&(u=t.contentDocument.defaultView,u.addEventListener("resize",r,O.passive),a())};const c=Kt();let u;return N(()=>{ie(()=>{t=f.$el,t&&y()})}),W(v),f.trigger=r,()=>{if(c.value===!0)return w("object",{style:He.style,tabindex:-1,type:"text/html",data:He.url,"aria-hidden":"true",onLoad:y})}}}}),Nt=z({name:"QItem",props:{...ce,...pt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=de(e,t),{hasLink:r,linkAttrs:a,linkClass:f,linkTag:c,navigateOnClick:u}=xt(),v=T(null),y=T(null),p=b(()=>e.clickable===!0||r.value===!0||e.tag==="label"),i=b(()=>e.disable!==!0&&p.value===!0),d=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=b(()=>e.insetLevel===void 0?null:{["padding"+(t.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function k(m){i.value===!0&&(y.value!==null&&(m.qKeyEvent!==!0&&document.activeElement===v.value?y.value.focus():document.activeElement===y.value&&v.value.focus()),u(m))}function L(m){if(i.value===!0&&Ee(m,[13,32])===!0){Re(m),m.qKeyEvent=!0;const g=new MouseEvent("click",m);g.qKeyEvent=!0,v.value.dispatchEvent(g)}o("keyup",m)}function h(){const m=Me(l.default,[]);return i.value===!0&&m.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:y})),m}return()=>{const m={ref:v,class:d.value,style:q.value,role:"listitem",onClick:k,onKeyup:L};return i.value===!0?(m.tabindex=e.tabindex||"0",Object.assign(m,a.value)):p.value===!0&&(m["aria-disabled"]="true"),w(c.value,m,h())}}}),jt=z({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:o.value},F(l.default))}}),It=z({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const o=b(()=>parseInt(e.lines,10)),t=b(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),n=b(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>w("div",{style:n.value,class:t.value},F(l.default))}}),an=z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=j(I,$);if(n===$)return console.error("QFooter needs to be child of QLayout"),$;const r=T(parseInt(e.heightHint,10)),a=T(!0),f=T(fe.value===!0||n.isContainer.value===!0?0:window.innerHeight),c=b(()=>e.reveal===!0||n.view.value.indexOf("F")>-1||t.platform.is.ios&&n.isContainer.value===!0),u=b(()=>n.isContainer.value===!0?n.containerHeight.value:f.value),v=b(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return a.value===!0?r.value:0;const s=n.scroll.value.position+u.value+r.value-n.height.value;return s>0?s:0}),y=b(()=>e.modelValue!==!0||c.value===!0&&a.value!==!0),p=b(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),i=b(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),d=b(()=>{const s=n.rows.value.bottom,x={};return s[0]==="l"&&n.left.space===!0&&(x[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),s[2]==="r"&&n.right.space===!0&&(x[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),x});function q(s,x){n.update("footer",s,x)}function k(s,x){s.value!==x&&(s.value=x)}function L({height:s}){k(r,s),q("size",s)}function h(){if(e.reveal!==!0)return;const{direction:s,position:x,inflectionPoint:S}=n.scroll.value;k(a,s==="up"||x-S<100||n.height.value-u.value-x-r.value<300)}function m(s){p.value===!0&&k(a,!0),o("focusin",s)}C(()=>e.modelValue,s=>{q("space",s),k(a,!0),n.animate()}),C(v,s=>{q("offset",s)}),C(()=>e.reveal,s=>{s===!1&&k(a,e.modelValue)}),C(a,s=>{n.animate(),o("reveal",s)}),C([r,n.scroll,n.height],h),C(()=>t.screen.height,s=>{n.isContainer.value!==!0&&k(f,s)});const g={};return n.instances.footer=g,e.modelValue===!0&&q("size",r.value),q("space",e.modelValue),q("offset",v.value),W(()=>{n.instances.footer===g&&(n.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const s=We(l.default,[w(G,{debounce:0,onResize:L})]);return e.elevated===!0&&s.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:i.value,style:d.value,onFocusin:m},s)}}}),un=z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=j(I,$);if(n===$)return console.error("QHeader needs to be child of QLayout"),$;const r=T(parseInt(e.heightHint,10)),a=T(!0),f=b(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||t.platform.is.ios&&n.isContainer.value===!0),c=b(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return a.value===!0?r.value:0;const h=r.value-n.scroll.value.position;return h>0?h:0}),u=b(()=>e.modelValue!==!0||f.value===!0&&a.value!==!0),v=b(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),y=b(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=b(()=>{const h=n.rows.value.top,m={};return h[0]==="l"&&n.left.space===!0&&(m[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),h[2]==="r"&&n.right.space===!0&&(m[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),m});function i(h,m){n.update("header",h,m)}function d(h,m){h.value!==m&&(h.value=m)}function q({height:h}){d(r,h),i("size",h)}function k(h){v.value===!0&&d(a,!0),o("focusin",h)}C(()=>e.modelValue,h=>{i("space",h),d(a,!0),n.animate()}),C(c,h=>{i("offset",h)}),C(()=>e.reveal,h=>{h===!1&&d(a,e.modelValue)}),C(a,h=>{n.animate(),o("reveal",h)}),C(n.scroll,h=>{e.reveal===!0&&d(a,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const L={};return n.instances.header=L,e.modelValue===!0&&i("size",r.value),i("space",e.modelValue),i("offset",c.value),W(()=>{n.instances.header===L&&(n.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const h=Me(l.default,[]);return e.elevated===!0&&h.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(w(G,{debounce:0,onResize:q})),w("header",{class:y.value,style:p.value,onFocusin:k},h)}}}),Ut=z({name:"QList",props:{...ce,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const o=R(),t=de(e,o.proxy.$q),n=b(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w(e.tag,{class:n.value},F(l.default))}}),{passive:Be}=O,Xt=["both","horizontal","vertical"],Yt=z({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Xt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,r;C(()=>e.scrollTarget,()=>{c(),f()});function a(){t!==null&&t();const y=Math.max(0,wt(n)),p=qt(n),i={top:y-o.position.top,left:p-o.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const d=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";o.position={top:y,left:p},o.directionChanged=o.direction!==d,o.delta=i,o.directionChanged===!0&&(o.direction=d,o.inflectionPoint=o.position),l("scroll",{...o})}function f(){n=Pe(r,e.scrollTarget),n.addEventListener("scroll",u,Be),u(!0)}function c(){n!==void 0&&(n.removeEventListener("scroll",u,Be),n=void 0)}function u(y){if(y===!0||e.debounce===0||e.debounce==="0")a();else if(t===null){const[p,i]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];t=()=>{i(p),t=null}}}const{proxy:v}=R();return C(()=>v.$q.lang.rtl,a),N(()=>{r=v.$el.parentNode,f()}),W(()=>{t!==null&&t(),c()}),Object.assign(v,{trigger:u,getPosition:()=>o}),Qe}}),rn=z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=R(),n=T(null),r=T(t.screen.height),a=T(e.container===!0?0:t.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),u=T(fe.value===!0?0:Y()),v=b(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=b(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),p=b(()=>u.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),i=b(()=>u.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function d(g){if(e.container===!0||document.qScrollPrevented!==!0){const s={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};f.value=s,e.onScroll!==void 0&&o("scroll",s)}}function q(g){const{height:s,width:x}=g;let S=!1;r.value!==s&&(S=!0,r.value=s,e.onScrollHeight!==void 0&&o("scrollHeight",s),L()),a.value!==x&&(S=!0,a.value=x),S===!0&&e.onResize!==void 0&&o("resize",g)}function k({height:g}){c.value!==g&&(c.value=g,L())}function L(){if(e.container===!0){const g=r.value>c.value?Y():0;u.value!==g&&(u.value=g)}}let h=null;const m={instances:{},view:b(()=>e.view),isContainer:b(()=>e.container),rootRef:n,height:r,containerHeight:c,scrollbarWidth:u,totalWidth:b(()=>a.value+u.value),rows:b(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:U({size:0,offset:0,space:!1}),right:U({size:300,offset:0,space:!1}),footer:U({size:0,offset:0,space:!1}),left:U({size:300,offset:0,space:!1}),scroll:f,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,s,x){m[g][s]=x}};if(Fe(I,m),Y()>0){let x=function(){g=null,s.classList.remove("hide-scrollbar")},S=function(){if(g===null){if(s.scrollHeight>t.screen.height)return;s.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(x,300)},H=function(E){g!==null&&E==="remove"&&(clearTimeout(g),x()),window[`${E}EventListener`]("resize",S)},g=null;const s=document.body;C(()=>e.container!==!0?"add":"remove",H),e.container!==!0&&H("add"),Ct(()=>{H("remove")})}return()=>{const g=We(l.default,[w(Yt,{onScroll:d}),w(G,{onResize:q})]),s=w("div",{class:v.value,style:y.value,ref:e.container===!0?void 0:n,tabindex:-1},g);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:n},[w(G,{onResize:k}),w("div",{class:"absolute-full",style:p.value},[w("div",{class:"scroll",style:i.value},[s])])]):s}}}),sn=z({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:o}}=R(),t=j(I,$);if(t===$)return console.error("QPage needs to be a deep child of QLayout"),$;if(j(Ve,$)===$)return console.error("QPage needs to be child of QPageContainer"),$;const r=b(()=>{const f=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const c=t.isContainer.value===!0?t.containerHeight.value:o.screen.height;return e.styleFn(f,c)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-f+"px":o.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":o.screen.height-f+"px"}}),a=b(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:a.value,style:r.value},F(l.default))}}),cn=z({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=R(),t=j(I,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;Fe(Ve,!0);const n=b(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>w("div",{class:"q-page-container",style:n.value},F(l.default))}}),Jt=w("div",{class:"q-space"}),dn=z({name:"QSpace",setup(){return()=>Jt}}),fn=z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:o.value,role:"toolbar"},F(l.default))}}),vn=z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:o.value},F(l.default))}}),Zt=""+new URL("logo_trf3.473a7b06.png",import.meta.url).href,Gt={},en=re("img",{src:Zt,style:{height:"60px",width:"260px"}},null,-1),tn=[en];function nn(e,l){return Q(),K("div",{class:"row items-center cursor-pointer",onClick:l[0]||(l[0]=o=>("navigateTo"in e?e.navigateTo:M(ue))("/"))},tn)}const hn=kt(Gt,[["render",nn]]),on=["src","alt"],mn=Ae({__name:"CecalcBarraSuperiorMenu",setup(e){const l=Oe();async function o(t){t.url&&await ue(t.url,{open:{target:"_blank"}}),t.to&&ue(t.to)}return(t,n)=>{const r=zt,a=Lt,f=Ht,c=It,u=jt,v=Nt,y=Ut,p=Dt,i=Bt;return Q(),X(i,{flat:"",round:"",dense:"",icon:M($t)},{default:B(()=>[P(p,{"auto-close":"",square:""},{default:B(()=>[P(y,{dense:"",padding:""},{default:B(()=>[(Q(!0),K(Ce,null,St(M(l).menu,(d,q)=>(Q(),K(Ce,{key:`menu-item-${q}`},[d.separador?(Q(),X(r,{key:0,spaced:""})):(Q(),X(v,{key:1,clickable:"",dense:"","inset-level":0,onClick:k=>o(d)},{default:B(()=>[P(f,{size:"md",class:"q-mr-sm"},{default:B(()=>[d.icone?(Q(),X(a,{key:0,color:"grey-10",name:d.icone,size:"sm"},null,8,["name"])):d.imagem?(Q(),K("img",{key:1,src:d.imagem,alt:d.rotulo,style:{width:"32px",height:"auto"}},null,8,on)):Tt("",!0)]),_:2},1024),P(u,null,{default:B(()=>[P(c,{class:"text-no-wrap"},{default:B(()=>[le(A(d.rotulo),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128)),P(r,{spaced:""}),P(v,{dense:""},{default:B(()=>[P(u,null,{default:B(()=>[P(c,{caption:""},{default:B(()=>[le(A(M(l).nome),1)]),_:1})]),_:1}),P(u,{side:""},{default:B(()=>[P(c,{caption:""},{default:B(()=>[le(" Versão "+A(M(l).versao),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["icon"])}}}),gn=Ae({__name:"CecalcBarraInferior",setup(e){const l=Oe();function o(){const n=new Date().getFullYear();return n===2023?n:`2023-${n}`}return(t,n)=>(Q(),K("div",{class:Et(["q-pa-sm text-caption text-weight-thin row justify-between items-center",`bg-${M(l).corFundo} text-${M(l).corTexto}`])},[re("div",null,"© "+A(o())+" "+A(M(l).copyright),1),re("div",null,A(M(l).contato),1)],2))}});export{Yt as Q,G as _,Qt as a,Dt as b,Pt as c,jt as d,It as e,Nt as f,Ut as g,vn as h,dn as i,fn as j,hn as k,mn as l,un as m,sn as n,cn as o,gn as p,an as q,rn as r,Rt as u};
