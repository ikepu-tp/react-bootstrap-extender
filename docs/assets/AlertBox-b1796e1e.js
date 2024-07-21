import{j as p}from"./jsx-runtime-1a9d9a93.js";import{r as h}from"./index-8b3efc3f.js";import{u as y,c as v,a as g,b as N}from"./ThemeProvider-4882c792.js";import{_ as L}from"./extends-4c19d496.js";import{_ as V,d as U,C as q,F as j}from"./CloseButton-6d1c0b4d.js";import{u as O}from"./useEventCallback-9e89688c.js";import{A as T}from"./Anchor-a9534998.js";function w(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function D(t){var e=F(t,"string");return typeof e=="symbol"?e:String(e)}function F(t,e){if(typeof t!="object"||t===null)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var r=s.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function K(t,e,s){var r=h.useRef(t!==void 0),a=h.useState(e),o=a[0],i=a[1],c=t!==void 0,f=r.current;return r.current=c,!c&&f&&o!==e&&i(e),[c?t:o,h.useCallback(function(u){for(var n=arguments.length,d=new Array(n>1?n-1:0),l=1;l<n;l++)d[l-1]=arguments[l];s&&s.apply(void 0,[u].concat(d)),i(u)},[s])]}function P(t,e){return Object.keys(e).reduce(function(s,r){var a,o=s,i=o[w(r)],c=o[r],f=V(o,[w(r),r].map(D)),u=e[r],n=K(c,i,t[u]),d=n[0],l=n[1];return L({},f,(a={},a[r]=d,a[u]=l,a))},t)}const R=U("h4");R.displayName="DivStyledAsH4";const _=h.forwardRef(({className:t,bsPrefix:e,as:s=R,...r},a)=>(e=y(e,"alert-heading"),p.jsx(s,{ref:a,className:v(t,e),...r})));_.displayName="AlertHeading";const W=_,B=h.forwardRef(({className:t,bsPrefix:e,as:s=T,...r},a)=>(e=y(e,"alert-link"),p.jsx(s,{ref:a,className:v(t,e),...r})));B.displayName="AlertLink";const z=B,S=h.forwardRef((t,e)=>{const{bsPrefix:s,show:r=!0,closeLabel:a="Close alert",closeVariant:o,className:i,children:c,variant:f="primary",onClose:u,dismissible:n,transition:d=j,...l}=P(t,{show:"onClose"}),m=y(s,"alert"),H=O(k=>{u&&u(!1,k)}),$=d===!0?j:d,x=p.jsxs("div",{role:"alert",...$?void 0:l,ref:e,className:v(i,m,f&&`${m}-${f}`,n&&`${m}-dismissible`),children:[n&&p.jsx(q,{onClick:H,"aria-label":a,variant:o}),c]});return $?p.jsx($,{unmountOnExit:!0,...l,ref:void 0,in:r,children:x}):r?x:null});S.displayName="Alert";const A=Object.assign(S,{Link:z,Heading:W});function I({as:t,bsPrefix:e,className:s,...r}){e=y(e,"col");const a=g(),o=N(),i=[],c=[];return a.forEach(f=>{const u=r[f];delete r[f];let n,d,l;typeof u=="object"&&u!=null?{span:n,offset:d,order:l}=u:n=u;const m=f!==o?`-${f}`:"";n&&i.push(n===!0?`${e}${m}`:`${e}${m}-${n}`),l!=null&&c.push(`order${m}-${l}`),d!=null&&c.push(`offset${m}-${d}`)}),[{...r,className:v(s,...i,...c)},{as:t,bsPrefix:e,spans:i}]}const b=h.forwardRef((t,e)=>{const[{className:s,...r},{as:a="div",bsPrefix:o,spans:i}]=I(t);return p.jsx(a,{...r,ref:e,className:v(s,!i.length&&o)})});b.displayName="Col";const M=b,E=h.forwardRef(({bsPrefix:t,className:e,as:s="div",...r},a)=>{const o=y(t,"row"),i=g(),c=N(),f=`${o}-cols`,u=[];return i.forEach(n=>{const d=r[n];delete r[n];let l;d!=null&&typeof d=="object"?{cols:l}=d:l=d;const m=n!==c?`-${n}`:"";l!=null&&u.push(`${f}${m}-${l}`)}),p.jsx(s,{ref:a,...r,className:v(e,o,...u)})});E.displayName="Row";const G=E;function C({children:t,Header:e,close:s,timeout:r,...a}){const[o,i]=h.useState(!0);h.useEffect(()=>{!s||!r||setTimeout(c,r)},[s,r]);function c(){i(!o)}return p.jsx(A,{...a,dismissible:s,show:o,onClose:c,children:p.jsx(G,{children:p.jsxs(M,{xs:!0,children:[e&&p.jsx(A.Heading,{children:e}),t]})})})}try{C.displayName="AlertBox",C.__docgenInfo={description:"",displayName:"AlertBox",props:{Header:{defaultValue:null,description:"",name:"Header",required:!1,type:{name:"ReactNode"}},close:{defaultValue:null,description:"",name:"close",required:!1,type:{name:"boolean"}},timeout:{defaultValue:null,description:"",name:"timeout",required:!1,type:{name:"number"}}}}}catch{}export{C as A,M as C,G as R,A as a,K as u};
