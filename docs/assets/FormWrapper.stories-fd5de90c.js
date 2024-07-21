import{j as a}from"./jsx-runtime-ffb262ed.js";import{b,C as E,B as T}from"./ListView-8025a10e.js";import{r as x}from"./index-76fb7be0.js";import"./Paginate-854373e9.js";import"./ThemeProvider-e692be13.js";import"./_commonjsHelpers-de833af9.js";import"./Anchor-5a42a688.js";import"./useEventCallback-c7177fdc.js";import"./index-8d47fad6.js";import"./createWithBsPrefix-0f2a34d1.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./AlertBox-d1e158d3.js";import"./extends-98964cd2.js";import"./Anchor-f8aa5777.js";import"./Popup-e1665771.js";import"./PageWrapper-2d696fc5.js";import"./index-19579008.js";const k={title:"Forms/FormWrapper",component:f,tags:["autodocs"],argTypes:{}},s={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3}},e={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"ERROR",title:"エラー",code:404,messages:["エラーが発生しました","管理者にお問い合わせください"]}}}},r={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"VALIDATION ERROR",title:"入力内容エラー",code:406,messages:{name:["必須項目です","文字を入力してください"]}}}}};function f(t){const[l,M]=x.useState(!1);async function R(){return t.response||{}}return a.jsxs(b,{onSubmit:R,setButtonDisabled:M,successMessage:t.successMessage,successMessageTimeout:t.successMessageTimeout,children:[a.jsx(E,{label:"名前",type:"text",name:"name",required:!0}),a.jsx(T,{variant:"primary",type:"submit",disabled:l,children:"送信"})]})}var o,n,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const w=["Normal","Error","ValidationError"];export{e as Error,s as Normal,r as ValidationError,w as __namedExportsOrder,k as default};
//# sourceMappingURL=FormWrapper.stories-fd5de90c.js.map
