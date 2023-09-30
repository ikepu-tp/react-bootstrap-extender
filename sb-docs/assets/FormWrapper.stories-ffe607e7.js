import{j as o}from"./jsx-runtime-ffb262ed.js";import{a as E,C as T}from"./Control-4b1ab1a0.js";import{r as b}from"./index-76fb7be0.js";import{B as x}from"./Button-5f675fee.js";import"./useEventCallback-d2764a24.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./createWithBsPrefix-8bad15b1.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./extends-98964cd2.js";import"./Anchor-6c4b56c4.js";const W={title:"Forms/FormWrapper",component:f,tags:["autodocs"],argTypes:{}},s={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3}},e={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"ERROR",title:"エラー",code:404,messages:["エラーが発生しました","管理者にお問い合わせください"]}}}},r={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"VALIDATION ERROR",title:"入力内容エラー",code:406,messages:{name:["必須項目です","文字を入力してください"]}}}}};function f(a){const[l,M]=b.useState(!1);async function R(){return a.response||{}}return o.jsxs(E,{onSubmit:R,setButtonDisabled:M,successMessage:a.successMessage,successMessageTimeout:a.successMessageTimeout,children:[o.jsx(T,{label:"名前",type:"text",name:"name",required:!0}),o.jsx(x,{variant:"primary",type:"submit",disabled:l,children:"送信"})]})}var t,n,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const h=["Normal","Error","ValidationError"];export{e as Error,s as Normal,r as ValidationError,h as __namedExportsOrder,W as default};
//# sourceMappingURL=FormWrapper.stories-ffe607e7.js.map
