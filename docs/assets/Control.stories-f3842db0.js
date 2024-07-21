import{j as c}from"./jsx-runtime-1a9d9a93.js";import{a as B}from"./Select-848b647f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./AlertBox-b1796e1e.js";import"./ThemeProvider-4882c792.js";import"./extends-4c19d496.js";import"./CloseButton-6d1c0b4d.js";import"./inheritsLoose-5494d9cc.js";import"./index-a38d0dca.js";import"./index-8d47fad6.js";import"./useEventCallback-9e89688c.js";import"./Anchor-a9534998.js";import"./Anchor-b5176715.js";import"./Paginate-cf9598e5.js";import"./Popup-c7981736.js";import"./PageWrapper-94251bc5.js";import"./index-7d99b93e.js";const W={title:"Forms/Control",component:B,tags:["autodocs"],argTypes:{}},e={label:"ラベル",required:!0,name:"name",countShow:!1,type:"text",autoResize:!0},r={args:{...e}},a={args:{...e,validMessage:["フィードバック"],isValid:!0}},s={args:{...e,invalidMessage:["フィードバック"],isInvalid:!0}},t={args:{...e,countShow:!0,maxLength:50}},o={args:{...e,beforeText:["Controlの前に",c.jsx("span",{className:"text-danger",children:"要素を入れられます"})]}},n={args:{...e,afterText:["Controlの後に",c.jsx("span",{className:"text-danger",children:"要素を入れられます"})]}},u={args:{...e,as:"textarea",countShow:!0,maxLength:50,beforeText:["Controlの前に",c.jsx("span",{className:"text-danger",children:"要素を入れられます"})],afterText:["Controlの後に",c.jsx("span",{className:"text-danger",children:"要素を入れられます"})]}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,l,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    validMessage: ['フィードバック'],
    isValid: true
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,C,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalidMessage: ['フィードバック'],
    isInvalid: true
  }
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var A,h,T;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    countShow: true,
    maxLength: 50
  }
}`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var S,D,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    beforeText: ['Controlの前に', <span className="text-danger">要素を入れられます</span>]
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,v,M;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    afterText: ['Controlの後に', <span className="text-danger">要素を入れられます</span>]
  }
}`,...(M=(v=n.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var w,F,j;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    as: 'textarea',
    countShow: true,
    maxLength: 50,
    beforeText: ['Controlの前に', <span className="text-danger">要素を入れられます</span>],
    afterText: ['Controlの後に', <span className="text-danger">要素を入れられます</span>]
  }
}`,...(j=(F=u.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const X=["Normal","ValidMessage","InvalidMessage","CountShow","BeforeText","AfterText","TextArea"];export{n as AfterText,o as BeforeText,t as CountShow,s as InvalidMessage,r as Normal,u as TextArea,a as ValidMessage,X as __namedExportsOrder,W as default};
