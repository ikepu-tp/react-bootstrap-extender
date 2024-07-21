import{j as l}from"./jsx-runtime-ffb262ed.js";import{r}from"./index-76fb7be0.js";import{u as pe,c as W,d as Pe}from"./ThemeProvider-e692be13.js";import{a as $,o as ye,s as _,u as ve,l as we,c as Ee,C as Xe,d as Ye,r as Ce,F as Be,b as Je,t as Qe}from"./createWithBsPrefix-0f2a34d1.js";import{u as v}from"./useEventCallback-c7177fdc.js";import{R as Ze}from"./index-d3ea75b5.js";function et(){return r.useState(null)}function tt(){const e=r.useRef(!0),t=r.useRef(()=>e.current);return r.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function nt(e){const t=r.useRef(null);return r.useEffect(()=>{t.current=e}),t.current}const ot=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",rt=typeof document<"u",xe=rt||ot?r.useLayoutEffect:r.useEffect;function st(e){const t=r.useRef(e);return t.current=e,t}function De(e){const t=st(e);r.useEffect(()=>()=>t.current(),[])}var at=Function.prototype.bind.call(Function.prototype.call,[].slice);function S(e,t){return at(e.querySelectorAll(t))}function Ne(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}const it="data-rr-ui-";function lt(e){return`${it}${e}`}const Fe=r.createContext($?window:void 0);Fe.Provider;function Re(){return r.useContext(Fe)}var Z;function ke(e){if((!Z&&Z!==0||e)&&$){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Z=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Z}function fe(e){e===void 0&&(e=ye());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function ct(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Se=lt("modal-open");class ut{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:o=!1}={}){this.handleContainerOverflow=n,this.isRTL=o,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return ct(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();t.style={overflow:s.style.overflow,[o]:s.style[o]},t.scrollBarWidth&&(n[o]=`${parseInt(_(s,o)||"0",10)+t.scrollBarWidth}px`),s.setAttribute(Se,""),_(s,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Se),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const be=ut,he=(e,t)=>$?e==null?(t||ye()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function dt(e,t){const n=Re(),[o,s]=r.useState(()=>he(e,n==null?void 0:n.document));if(!o){const a=he(e);a&&s(a)}return r.useEffect(()=>{t&&o&&t(o)},[t,o]),r.useEffect(()=>{const a=he(e);a!==o&&s(a)},[e,o]),o}function ft({children:e,in:t,onExited:n,mountOnEnter:o,unmountOnExit:s}){const a=r.useRef(null),h=r.useRef(t),d=v(n);r.useEffect(()=>{t?h.current=!0:d(a.current)},[t,d]);const m=ve(a,e.ref),u=r.cloneElement(e,{ref:m});return t?u:s||!h.current&&o?null:u}function ht({in:e,onTransition:t}){const n=r.useRef(null),o=r.useRef(!0),s=v(t);return xe(()=>{if(!n.current)return;let a=!1;return s({in:e,element:n.current,initial:o.current,isStale:()=>a}),()=>{a=!0}},[e,s]),xe(()=>(o.current=!1,()=>{o.current=!0}),[]),n}function mt({children:e,in:t,onExited:n,onEntered:o,transition:s}){const[a,h]=r.useState(!t);t&&a&&h(!1);const d=ht({in:!!t,onTransition:u=>{const p=()=>{u.isStale()||(u.in?o==null||o(u.element,u.initial):(h(!0),n==null||n(u.element)))};Promise.resolve(s(u)).then(p,g=>{throw u.in||h(!0),g})}}),m=ve(d,e.ref);return a&&!t?null:r.cloneElement(e,{ref:m})}function Oe(e,t,n){return e?l.jsx(e,Object.assign({},n)):t?l.jsx(mt,Object.assign({},n,{transition:t})):l.jsx(ft,Object.assign({},n))}function gt(e){return e.code==="Escape"||e.keyCode===27}const pt=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function yt(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}let me;function vt(e){return me||(me=new be({ownerDocument:e==null?void 0:e.document})),me}function Et(e){const t=Re(),n=e||vt(t),o=r.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:r.useCallback(s=>{o.current.dialog=s},[]),setBackdropRef:r.useCallback(s=>{o.current.backdrop=s},[])})}const Le=r.forwardRef((e,t)=>{let{show:n=!1,role:o="dialog",className:s,style:a,children:h,backdrop:d=!0,keyboard:m=!0,onBackdropClick:u,onEscapeKeyDown:p,transition:g,runTransition:M,backdropTransition:te,runBackdropTransition:H,autoFocus:ne=!0,enforceFocus:w=!0,restoreFocus:oe=!0,restoreFocusOptions:re,renderDialog:K,renderBackdrop:se=c=>l.jsx("div",Object.assign({},c)),manager:ae,container:ie,onShow:j,onHide:U=()=>{},onExit:V,onExited:A,onExiting:G,onEnter:q,onEntering:z,onEntered:le}=e,ce=yt(e,pt);const E=Re(),C=dt(ie),f=Et(ae),P=tt(),B=nt(n),[b,R]=r.useState(!n),y=r.useRef(null);r.useImperativeHandle(t,()=>f,[f]),$&&!B&&n&&(y.current=fe(E==null?void 0:E.document)),n&&b&&R(!1);const X=v(()=>{if(f.add(),N.current=we(document,"keydown",de),x.current=we(document,"focus",()=>setTimeout(Y),!0),j&&j(),ne){var c,Q;const I=fe((c=(Q=f.dialog)==null?void 0:Q.ownerDocument)!=null?c:E==null?void 0:E.document);f.dialog&&I&&!Ne(f.dialog,I)&&(y.current=I,f.dialog.focus())}}),D=v(()=>{if(f.remove(),N.current==null||N.current(),x.current==null||x.current(),oe){var c;(c=y.current)==null||c.focus==null||c.focus(re),y.current=null}});r.useEffect(()=>{!n||!C||X()},[n,C,X]),r.useEffect(()=>{b&&D()},[b,D]),De(()=>{D()});const Y=v(()=>{if(!w||!P()||!f.isTopModal())return;const c=fe(E==null?void 0:E.document);f.dialog&&c&&!Ne(f.dialog,c)&&f.dialog.focus()}),ue=v(c=>{c.target===c.currentTarget&&(u==null||u(c),d===!0&&U())}),de=v(c=>{m&&gt(c)&&f.isTopModal()&&(p==null||p(c),c.defaultPrevented||U())}),x=r.useRef(),N=r.useRef(),F=(...c)=>{R(!0),A==null||A(...c)};if(!C)return null;const J=Object.assign({role:o,ref:f.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},ce,{style:a,className:s,tabIndex:-1});let L=K?K(J):l.jsx("div",Object.assign({},J,{children:r.cloneElement(h,{role:"document"})}));L=Oe(g,M,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:V,onExiting:G,onExited:F,onEnter:q,onEntering:z,onEntered:le,children:L});let T=null;return d&&(T=se({ref:f.setBackdropRef,onClick:ue}),T=Oe(te,H,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:T})),l.jsx(l.Fragment,{children:Ze.createPortal(l.jsxs(l.Fragment,{children:[T,L]}),C)})});Le.displayName="Modal";const Rt=Object.assign(Le,{Manager:be});function bt(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Tt(e,t){e.classList?e.classList.add(t):bt(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function je(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Mt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=je(e.className,t):e.setAttribute("class",je(e.className&&e.className.baseVal||"",t))}const O={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class wt extends be{adjustAndStore(t,n,o){const s=n.style[t];n.dataset[t]=s,_(n,{[t]:`${parseFloat(_(n,t))+o}px`})}restore(t,n){const o=n.dataset[t];o!==void 0&&(delete n.dataset[t],_(n,{[t]:o}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Tt(n,"modal-open"),!t.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";S(n,O.FIXED_CONTENT).forEach(a=>this.adjustAndStore(o,a,t.scrollBarWidth)),S(n,O.STICKY_CONTENT).forEach(a=>this.adjustAndStore(s,a,-t.scrollBarWidth)),S(n,O.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(s,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Mt(n,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";S(n,O.FIXED_CONTENT).forEach(a=>this.restore(o,a)),S(n,O.STICKY_CONTENT).forEach(a=>this.restore(s,a)),S(n,O.NAVBAR_TOGGLER).forEach(a=>this.restore(s,a))}}let ge;function Ct(e){return ge||(ge=new wt(e)),ge}const xt=Ee("modal-body"),Nt=r.createContext({onHide(){}}),Ie=Nt,_e=r.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:o,size:s,fullscreen:a,children:h,scrollable:d,...m},u)=>{e=pe(e,"modal");const p=`${e}-dialog`,g=typeof a=="string"?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return l.jsx("div",{...m,ref:u,className:W(p,t,s&&`${e}-${s}`,o&&`${p}-centered`,d&&`${p}-scrollable`,a&&g),children:l.jsx("div",{className:W(`${e}-content`,n),children:h})})});_e.displayName="ModalDialog";const We=_e,kt=Ee("modal-footer"),St=r.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:o,children:s,...a},h)=>{const d=r.useContext(Ie),m=v(()=>{d==null||d.onHide(),o==null||o()});return l.jsxs("div",{ref:h,...a,children:[s,n&&l.jsx(Xe,{"aria-label":e,variant:t,onClick:m})]})}),Ot=St,$e=r.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:o=!1,...s},a)=>(e=pe(e,"modal-header"),l.jsx(Ot,{ref:a,...s,className:W(t,e),closeLabel:n,closeButton:o})));$e.displayName="ModalHeader";const jt=$e,At=Ye("h4"),Bt=Ee("modal-title",{Component:At});function Dt(e){return l.jsx(Be,{...e,timeout:null})}function Ft(e){return l.jsx(Be,{...e,timeout:null})}const He=r.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:o,contentClassName:s,children:a,dialogAs:h=We,"aria-labelledby":d,"aria-describedby":m,"aria-label":u,show:p=!1,animation:g=!0,backdrop:M=!0,keyboard:te=!0,onEscapeKeyDown:H,onShow:ne,onHide:w,container:oe,autoFocus:re=!0,enforceFocus:K=!0,restoreFocus:se=!0,restoreFocusOptions:ae,onEntered:ie,onExit:j,onExiting:U,onEnter:V,onEntering:A,onExited:G,backdropClassName:q,manager:z,...le},ce)=>{const[E,C]=r.useState({}),[f,P]=r.useState(!1),B=r.useRef(!1),b=r.useRef(!1),R=r.useRef(null),[y,X]=et(),D=ve(ce,X),Y=v(w),ue=Pe();e=pe(e,"modal");const de=r.useMemo(()=>({onHide:Y}),[Y]);function x(){return z||Ct({isRTL:ue})}function N(i){if(!$)return;const k=x().getScrollbarWidth()>0,Me=i.scrollHeight>ye(i).documentElement.clientHeight;C({paddingRight:k&&!Me?ke():void 0,paddingLeft:!k&&Me?ke():void 0})}const F=v(()=>{y&&N(y.dialog)});De(()=>{Ce(window,"resize",F),R.current==null||R.current()});const J=()=>{B.current=!0},L=i=>{B.current&&y&&i.target===y.dialog&&(b.current=!0),B.current=!1},T=()=>{P(!0),R.current=Qe(y.dialog,()=>{P(!1)})},c=i=>{i.target===i.currentTarget&&T()},Q=i=>{if(M==="static"){c(i);return}if(b.current||i.target!==i.currentTarget){b.current=!1;return}w==null||w()},I=i=>{te?H==null||H(i):(i.preventDefault(),M==="static"&&T())},Ke=(i,k)=>{i&&N(i),V==null||V(i,k)},Ue=i=>{R.current==null||R.current(),j==null||j(i)},Ve=(i,k)=>{A==null||A(i,k),Je(window,"resize",F)},Ge=i=>{i&&(i.style.display=""),G==null||G(i),Ce(window,"resize",F)},qe=r.useCallback(i=>l.jsx("div",{...i,className:W(`${e}-backdrop`,q,!g&&"show")}),[g,q,e]),Te={...n,...E};Te.display="block";const ze=i=>l.jsx("div",{role:"dialog",...i,style:Te,className:W(t,e,f&&`${e}-static`,!g&&"show"),onClick:M?Q:void 0,onMouseUp:L,"aria-label":u,"aria-labelledby":d,"aria-describedby":m,children:l.jsx(h,{...le,onMouseDown:J,className:o,contentClassName:s,children:a})});return l.jsx(Ie.Provider,{value:de,children:l.jsx(Rt,{show:p,ref:D,backdrop:M,container:oe,keyboard:!0,autoFocus:re,enforceFocus:K,restoreFocus:se,restoreFocusOptions:ae,onEscapeKeyDown:I,onShow:ne,onHide:w,onEnter:Ke,onEntering:Ve,onEntered:ie,onExit:Ue,onExiting:U,onExited:Ge,manager:x(),transition:g?Dt:void 0,backdropTransition:g?Ft:void 0,renderBackdrop:qe,renderDialog:ze})})});He.displayName="Modal";const ee=Object.assign(He,{Body:xt,Header:jt,Title:Bt,Footer:kt,Dialog:We,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function Ae({header:e,footer:t,children:n,show:o,onHide:s,showToggle:a,...h}){const[d,m]=r.useState(!1);r.useEffect(()=>{o!==void 0&&m(o)},[o]);function u(){m(!d),s&&s()}return l.jsxs(l.Fragment,{children:[a&&l.jsx("div",{className:"d-inline-block",onClick:u,children:a}),l.jsxs(ee,{animation:!0,scrollable:!0,centered:!0,...h,show:d,onHide:u,children:[e&&l.jsx(ee.Header,{closeButton:!0,children:e}),l.jsx(ee.Body,{children:n}),t&&l.jsx(ee.Footer,{children:t})]})]})}try{Ae.displayName="Popup",Ae.__docgenInfo={description:"",displayName:"Popup",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"any"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"any"}},showToggle:{defaultValue:null,description:"",name:"showToggle",required:!1,type:{name:"any"}}}}}catch{}export{Ae as P,De as a,et as b,Ne as c,dt as d,xe as e,bt as h,gt as i,Oe as r,tt as u};
//# sourceMappingURL=Popup-e1665771.js.map
