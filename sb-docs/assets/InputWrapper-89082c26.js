import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{u as h,a as oe,c as g,b as le,d as ce}from"./useEventCallback-59a76250.js";import{P as C}from"./index-8d47fad6.js";import{_ as ie,c as _,C as ue,d as de,F as L}from"./createWithBsPrefix-3da136dd.js";import{_ as me}from"./extends-98964cd2.js";import{A as fe}from"./Anchor-3a55a1b1.js";function M(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function pe(e){var s=ge(e,"string");return typeof s=="symbol"?s:String(s)}function ge(e,s){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,s||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(e)}function ye(e,s,r){var t=l.useRef(e!==void 0),n=l.useState(s),o=n[0],u=n[1],c=e!==void 0,m=t.current;return t.current=c,!c&&m&&o!==s&&u(s),[c?e:o,l.useCallback(function(i){for(var d=arguments.length,p=new Array(d>1?d-1:0),f=1;f<d;f++)p[f-1]=arguments[f];r&&r.apply(void 0,[i].concat(p)),u(i)},[r])]}function he(e,s){return Object.keys(s).reduce(function(r,t){var n,o=r,u=o[M(t)],c=o[t],m=ie(o,[M(t),t].map(pe)),i=s[t],d=ye(c,u,e[i]),p=d[0],f=d[1];return me({},m,(n={},n[t]=p,n[i]=f,n))},e)}const A=de("h4");A.displayName="DivStyledAsH4";const je=_("alert-heading",{Component:A}),ve=_("alert-link",{Component:fe}),O=l.forwardRef((e,s)=>{const{bsPrefix:r,show:t=!0,closeLabel:n="Close alert",closeVariant:o,className:u,children:c,variant:m="primary",onClose:i,dismissible:d,transition:p=L,...f}=he(e,{show:"onClose"}),y=h(r,"alert"),j=oe(N=>{i&&i(!1,N)}),x=p===!0?L:p,F=a.jsxs("div",{role:"alert",...x?void 0:f,ref:s,className:g(u,y,m&&`${y}-${m}`,d&&`${y}-dismissible`),children:[d&&a.jsx(ue,{onClick:j,"aria-label":n,variant:o}),c]});return x?a.jsx(x,{unmountOnExit:!0,...f,ref:void 0,in:t,children:F}):t?F:null});O.displayName="Alert";const E=Object.assign(O,{Link:ve,Heading:je});function xe(e,s){return l.Children.toArray(e).some(r=>l.isValidElement(r)&&r.type===s)}function Fe({as:e,bsPrefix:s,className:r,...t}){s=h(s,"col");const n=le(),o=ce(),u=[],c=[];return n.forEach(m=>{const i=t[m];delete t[m];let d,p,f;typeof i=="object"&&i!=null?{span:d,offset:p,order:f}=i:d=i;const y=m!==o?`-${m}`:"";d&&u.push(d===!0?`${s}${y}`:`${s}${y}-${d}`),f!=null&&c.push(`order${y}-${f}`),p!=null&&c.push(`offset${y}-${p}`)}),[{...t,className:g(r,...u,...c)},{as:e,bsPrefix:s,spans:u}]}const q=l.forwardRef((e,s)=>{const[{className:r,...t},{as:n="div",bsPrefix:o,spans:u}]=Fe(e);return a.jsx(n,{...t,ref:s,className:g(r,!u.length&&o)})});q.displayName="Col";const Ce=q,be={type:C.string,tooltip:C.bool,as:C.elementType},S=l.forwardRef(({as:e="div",className:s,type:r="valid",tooltip:t=!1,...n},o)=>a.jsx(e,{...n,ref:o,className:g(s,`${r}-${t?"tooltip":"feedback"}`)}));S.displayName="Feedback";S.propTypes=be;const B=S,$e=l.createContext({}),v=$e,D=l.forwardRef(({id:e,bsPrefix:s,className:r,type:t="checkbox",isValid:n=!1,isInvalid:o=!1,as:u="input",...c},m)=>{const{controlId:i}=l.useContext(v);return s=h(s,"form-check-input"),a.jsx(u,{...c,ref:m,type:t,id:e||i,className:g(r,s,n&&"is-valid",o&&"is-invalid")})});D.displayName="FormCheckInput";const W=D,H=l.forwardRef(({bsPrefix:e,className:s,htmlFor:r,...t},n)=>{const{controlId:o}=l.useContext(v);return e=h(e,"form-check-label"),a.jsx("label",{...t,ref:n,htmlFor:r||o,className:g(s,e)})});H.displayName="FormCheckLabel";const w=H,U=l.forwardRef(({id:e,bsPrefix:s,bsSwitchPrefix:r,inline:t=!1,reverse:n=!1,disabled:o=!1,isValid:u=!1,isInvalid:c=!1,feedbackTooltip:m=!1,feedback:i,feedbackType:d,className:p,style:f,title:y="",type:j="checkbox",label:x,children:F,as:N="input",...re},te)=>{s=h(s,"form-check"),r=h(r,"form-switch");const{controlId:R}=l.useContext(v),ae=l.useMemo(()=>({controlId:e||R}),[R,e]),I=!F&&x!=null&&x!==!1||xe(F,w),ne=a.jsx(W,{...re,type:j==="switch"?"checkbox":j,ref:te,isValid:u,isInvalid:c,disabled:o,as:N});return a.jsx(v.Provider,{value:ae,children:a.jsx("div",{style:f,className:g(p,I&&s,t&&`${s}-inline`,n&&`${s}-reverse`,j==="switch"&&r),children:F||a.jsxs(a.Fragment,{children:[ne,I&&a.jsx(w,{title:y,children:x}),i&&a.jsx(B,{type:d,tooltip:m,children:i})]})})})});U.displayName="FormCheck";const $=Object.assign(U,{Input:W,Label:w}),G=l.forwardRef(({bsPrefix:e,type:s,size:r,htmlSize:t,id:n,className:o,isValid:u=!1,isInvalid:c=!1,plaintext:m,readOnly:i,as:d="input",...p},f)=>{const{controlId:y}=l.useContext(v);e=h(e,"form-control");let j;return m?j={[`${e}-plaintext`]:!0}:j={[e]:!0,[`${e}-${r}`]:r},a.jsx(d,{...p,type:s,size:t,ref:f,readOnly:i,id:n||y,className:g(o,j,u&&"is-valid",c&&"is-invalid",s==="color"&&`${e}-color`)})});G.displayName="FormControl";const Ne=Object.assign(G,{Feedback:B}),Ee=_("form-floating"),K=l.forwardRef(({controlId:e,as:s="div",...r},t)=>{const n=l.useMemo(()=>({controlId:e}),[e]);return a.jsx(v.Provider,{value:n,children:a.jsx(s,{...r,ref:t})})});K.displayName="FormGroup";const z=K,J=l.forwardRef(({as:e="label",bsPrefix:s,column:r=!1,visuallyHidden:t=!1,className:n,htmlFor:o,...u},c)=>{const{controlId:m}=l.useContext(v);s=h(s,"form-label");let i="col-form-label";typeof r=="string"&&(i=`${i} ${i}-${r}`);const d=g(n,s,t&&"visually-hidden",r&&i);return o=o||m,r?a.jsx(Ce,{ref:c,as:"label",className:d,htmlFor:o,...u}):a.jsx(e,{ref:c,className:d,htmlFor:o,...u})});J.displayName="FormLabel";const we=J,Q=l.forwardRef(({bsPrefix:e,className:s,id:r,...t},n)=>{const{controlId:o}=l.useContext(v);return e=h(e,"form-range"),a.jsx("input",{...t,type:"range",ref:n,className:g(s,e),id:r||o})});Q.displayName="FormRange";const _e=Q,X=l.forwardRef(({bsPrefix:e,size:s,htmlSize:r,className:t,isValid:n=!1,isInvalid:o=!1,id:u,...c},m)=>{const{controlId:i}=l.useContext(v);return e=h(e,"form-select"),a.jsx("select",{...c,size:r,ref:m,className:g(t,e,s&&`${e}-${s}`,n&&"is-valid",o&&"is-invalid"),id:u||i})});X.displayName="FormSelect";const Se=X,Y=l.forwardRef(({bsPrefix:e,className:s,as:r="small",muted:t,...n},o)=>(e=h(e,"form-text"),a.jsx(r,{...n,ref:o,className:g(s,e,t&&"text-muted")})));Y.displayName="FormText";const ke=Y,Z=l.forwardRef((e,s)=>a.jsx($,{...e,ref:s,type:"switch"}));Z.displayName="Switch";const Re=Object.assign(Z,{Input:$.Input,Label:$.Label}),P=l.forwardRef(({bsPrefix:e,className:s,children:r,controlId:t,label:n,...o},u)=>(e=h(e,"form-floating"),a.jsxs(z,{ref:u,className:g(s,e),controlId:t,...o,children:[r,a.jsx("label",{htmlFor:t,children:n})]})));P.displayName="FloatingLabel";const Ie=P,Le={_ref:C.any,validated:C.bool,as:C.elementType},k=l.forwardRef(({className:e,validated:s,as:r="form",...t},n)=>a.jsx(r,{...t,ref:n,className:g(e,s&&"was-validated")}));k.displayName="Form";k.propTypes=Le;const ee=Object.assign(k,{Group:z,Control:Ne,Floating:Ee,Check:$,Switch:Re,Label:we,Text:ke,Range:_e,Select:Se,FloatingLabel:Ie}),se=l.createContext({getError:()=>{},changeError:()=>{}});function Me(){const[e,s]=l.useState();function r(n=void 0){if(n===void 0||e===void 0)return e;if(e[n])return e[n];throw new Error("Unexpected.")}function t(n=void 0){s(n===void 0?void 0:{...n})}return{getError:r,changeError:t}}function T(e){const[s,r]=l.useState(!1),[t,n]=l.useState(!1),[o,u]=l.useState(!1),c=Me();l.useEffect(()=>{e.setButtonDisabled&&e.setButtonDisabled(t)},[t]);async function m(i){if(i.preventDefault(),n(!0),c.changeError(void 0),!i.currentTarget.checkValidity()){r(!0),n(!1);return}r(!1);const d=await e.onSubmit(i);d.error&&(c.changeError(d.error),r(!0)),d.error||(u(!0),setTimeout(()=>{u(!1)},e.successMessageTimeout||5e3)),d.payloads&&e.success&&e.success(d.payloads),n(!1)}return a.jsx(se.Provider,{value:c,children:a.jsxs(ee,{noValidate:!0,validated:s,onSubmit:m,children:[c.getError()&&a.jsxs(E,{variant:"warning",children:[a.jsxs(E.Heading,{children:[c.getError("abstract")&&a.jsxs("span",{children:["[",c.getError("abstract"),"]"]}),c.getError("title")&&a.jsx("span",{children:c.getError("title")})]}),c.getError("messages")&&e.ErrorMessages?a.jsx(e.ErrorMessages,{messages:c.getError("messages")}):a.jsx(b,{messages:c.getError("messages"),ignoreObject:!0})]}),o&&a.jsx(E,{variant:"success",children:e.successMessage||"処理に成功しました"}),e.children]})})}function b(e){return Array.isArray(e.messages)?a.jsx("ul",{children:e.messages.map((s,r)=>a.jsx(b,{messages:s},`errorMessageArray-${r}`))}):typeof e.messages=="string"||e.messages instanceof String?a.jsx("li",{children:e.messages}):e.messages!==null&&typeof e.messages=="object"?e.ignoreObject?a.jsx(a.Fragment,{}):a.jsx(a.Fragment,{children:Object.keys(e.messages).map((s,r)=>a.jsx(b,{messages:e.messages[s]},`errorMessageObject-${r}`))}):a.jsx(a.Fragment,{})}try{T.displayName="FormWrapper",T.__docgenInfo={description:"",displayName:"FormWrapper",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(e: FormEvent<HTMLFormElement>) => Promise<ResponseResource<any>>"}},setButtonDisabled:{defaultValue:null,description:"",name:"setButtonDisabled",required:!1,type:{name:"Dispatch<SetStateAction<boolean>>"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"((payloads: any) => void)"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string"}},successMessageTimeout:{defaultValue:null,description:"",name:"successMessageTimeout",required:!1,type:{name:"number"}},ErrorMessages:{defaultValue:null,description:"",name:"ErrorMessages",required:!1,type:{name:"((props: ErrorMessagesProps) => Element)"}}}}}catch{}try{b.displayName="ErrorMessages",b.__docgenInfo={description:"",displayName:"ErrorMessages",props:{messages:{defaultValue:null,description:"",name:"messages",required:!1,type:{name:"any"}},ignoreObject:{defaultValue:null,description:"",name:"ignoreObject",required:!1,type:{name:"boolean"}}}}}catch{}function V(e){const s=l.useContext(se);return a.jsxs("div",{className:"mb-2",children:[a.jsxs(ee.Label,{children:[e.label,e.required&&a.jsx("span",{className:"text-danger",children:"＊"})]}),a.jsx("div",{className:"ms-2",children:e.children}),e.name&&s.getError("messages")&&s.getError("messages")[e.name]&&a.jsx("div",{className:"text-danger ms-1",children:a.jsx(b,{messages:s.getError("messages")[e.name]})})]})}try{V.displayName="InputWrapper",V.__docgenInfo={description:"",displayName:"InputWrapper",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}export{ee as F,V as I,T as a};
//# sourceMappingURL=InputWrapper-89082c26.js.map
