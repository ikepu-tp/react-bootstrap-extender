import{r as t}from"./index-76fb7be0.js";import{c as R,o as y,u as E}from"./createWithBsPrefix-8bad15b1.js";import{a as b}from"./useEventCallback-d2764a24.js";import{j as l}from"./jsx-runtime-ffb262ed.js";function I(){return t.useState(null)}function L(){const e=t.useRef(!0),n=t.useRef(()=>e.current);return t.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),n.current}const h=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",j=typeof document<"u",m=j||h?t.useLayoutEffect:t.useEffect;function C(e){const n=t.useRef(e);return n.current=e,n}function N(e){const n=C(e);t.useEffect(()=>()=>n.current(),[])}function W(e,n){if(e.contains)return e.contains(n);if(e.compareDocumentPosition)return e===n||!!(e.compareDocumentPosition(n)&16)}const g=t.createContext(R?window:void 0);g.Provider;function w(){return t.useContext(g)}const d=(e,n)=>R?e==null?(n||y()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function F(e,n){const s=w(),[u,c]=t.useState(()=>d(e,s==null?void 0:s.document));if(!u){const r=d(e);r&&c(r)}return t.useEffect(()=>{n&&u&&n(u)},[n,u]),t.useEffect(()=>{const r=d(e);r!==u&&c(r)},[e,u]),u}function O({children:e,in:n,onExited:s,mountOnEnter:u,unmountOnExit:c}){const r=t.useRef(null),o=t.useRef(n),f=b(s);t.useEffect(()=>{n?o.current=!0:f(r.current)},[n,f]);const a=E(r,e.ref),i=t.cloneElement(e,{ref:a});return n?i:c||!o.current&&u?null:i}function D({in:e,onTransition:n}){const s=t.useRef(null),u=t.useRef(!0),c=b(n);return m(()=>{if(!s.current)return;let r=!1;return c({in:e,element:s.current,initial:u.current,isStale:()=>r}),()=>{r=!0}},[e,c]),m(()=>(u.current=!1,()=>{u.current=!0}),[]),s}function M({children:e,in:n,onExited:s,onEntered:u,transition:c}){const[r,o]=t.useState(!n);n&&r&&o(!1);const f=D({in:!!n,onTransition:i=>{const v=()=>{i.isStale()||(i.in?u==null||u(i.element,i.initial):(o(!0),s==null||s(i.element)))};Promise.resolve(c(i)).then(v,x=>{throw i.in||o(!0),x})}}),a=E(f,e.ref);return r&&!n?null:t.cloneElement(e,{ref:a})}function p(e,n,s){return e?l.jsx(e,Object.assign({},s)):n?l.jsx(M,Object.assign({},s,{transition:n})):l.jsx(O,Object.assign({},s))}function B(e){return e.code==="Escape"||e.keyCode===27}function K(e,n){return e.classList?!!n&&e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}export{F as a,L as b,W as c,N as d,I as e,m as f,K as h,B as i,p as r,w as u};
//# sourceMappingURL=hasClass-f82e4ba1.js.map
