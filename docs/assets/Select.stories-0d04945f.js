import{j as v}from"./jsx-runtime-1a9d9a93.js";import{S}from"./Select-848b647f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./AlertBox-b1796e1e.js";import"./ThemeProvider-4882c792.js";import"./extends-4c19d496.js";import"./CloseButton-6d1c0b4d.js";import"./inheritsLoose-5494d9cc.js";import"./index-a38d0dca.js";import"./index-8d47fad6.js";import"./useEventCallback-9e89688c.js";import"./Anchor-a9534998.js";import"./Anchor-b5176715.js";import"./Paginate-cf9598e5.js";import"./Popup-c7981736.js";import"./PageWrapper-94251bc5.js";import"./index-7d99b93e.js";const G={title:"Forms/Select",component:S,tags:["autodocs"],argTypes:{}},e={label:"選択肢",required:!0,name:"name",pleaseOption:!0,pleaseOptionMessage:"選択してください"},r={args:e},s={args:{...e,validMessage:["フィードバック"],isValid:!0}},a={args:{...e,invalidMessage:["フィードバック"],isInvalid:!0}},t={args:{...e,beforeText:["Controlの前に",v.jsx("span",{className:"text-danger",children:"要素を入れられます"})]}},o={args:{...e,afterText:["Controlの後に",v.jsx("span",{className:"text-danger",children:"要素を入れられます"})]}};var u,n,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    validMessage: ['フィードバック'],
    isValid: true
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalidMessage: ['フィードバック'],
    isInvalid: true
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,f,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    beforeText: ['Controlの前に', <span className="text-danger">要素を入れられます</span>]
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var A,M,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    afterText: ['Controlの後に', <span className="text-danger">要素を入れられます</span>]
  }
}`,...(T=(M=o.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const H=["Normal","ValidMessage","InvalidMessage","BeforeText","AfterText"];export{o as AfterText,t as BeforeText,a as InvalidMessage,r as Normal,s as ValidMessage,H as __namedExportsOrder,G as default};
