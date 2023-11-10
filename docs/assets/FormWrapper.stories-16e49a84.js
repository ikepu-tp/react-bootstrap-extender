import{j as t}from"./jsx-runtime-ffb262ed.js";import{b,C as E,B as T}from"./ListView-c7f76720.js";import{r as x}from"./index-76fb7be0.js";import"./Paginate-d1568ed1.js";import"./useEventCallback-62a029d7.js";import"./_commonjsHelpers-de833af9.js";import"./Anchor-2829b7c7.js";import"./index-8d47fad6.js";import"./createWithBsPrefix-54a4713d.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./AlertBox-6607119d.js";import"./extends-98964cd2.js";import"./Anchor-f8aa5777.js";import"./Popup-a4b74edb.js";import"./PageWrapper-6372da2a.js";const q={title:"Forms/FormWrapper",component:f,tags:["autodocs"],argTypes:{}},s={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3}},e={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"ERROR",title:"エラー",code:404,messages:["エラーが発生しました","管理者にお問い合わせください"]}}}},r={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"VALIDATION ERROR",title:"入力内容エラー",code:406,messages:{name:["必須項目です","文字を入力してください"]}}}}};function f(a){const[l,M]=x.useState(!1);async function R(){return a.response||{}}return t.jsxs(b,{onSubmit:R,setButtonDisabled:M,successMessage:a.successMessage,successMessageTimeout:a.successMessageTimeout,children:[t.jsx(E,{label:"名前",type:"text",name:"name",required:!0}),t.jsx(T,{variant:"primary",type:"submit",disabled:l,children:"送信"})]})}var o,n,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    successMessage: '処理に成功しました',
    successMessageTimeout: 5000
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,i,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    successMessage: '処理に成功しました',
    successMessageTimeout: 5000,
    response: {
      error: {
        abstract: 'ERROR',
        title: 'エラー',
        code: 404,
        messages: ['エラーが発生しました', '管理者にお問い合わせください']
      }
    }
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,g,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    successMessage: '処理に成功しました',
    successMessageTimeout: 5000,
    response: {
      error: {
        abstract: 'VALIDATION ERROR',
        title: '入力内容エラー',
        code: 406,
        messages: {
          name: ['必須項目です', '文字を入力してください']
        }
      }
    }
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const v=["Normal","Error","ValidationError"];export{e as Error,s as Normal,r as ValidationError,v as __namedExportsOrder,q as default};
//# sourceMappingURL=FormWrapper.stories-16e49a84.js.map
