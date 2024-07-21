import{j as a}from"./jsx-runtime-1a9d9a93.js";import{F as M,a as B,B as R}from"./Select-848b647f.js";import{r as T}from"./index-8b3efc3f.js";import"./AlertBox-b1796e1e.js";import"./ThemeProvider-4882c792.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./CloseButton-6d1c0b4d.js";import"./inheritsLoose-5494d9cc.js";import"./index-a38d0dca.js";import"./index-8d47fad6.js";import"./useEventCallback-9e89688c.js";import"./Anchor-a9534998.js";import"./Anchor-b5176715.js";import"./Paginate-cf9598e5.js";import"./Popup-c7981736.js";import"./PageWrapper-94251bc5.js";import"./index-7d99b93e.js";const k={title:"Forms/FormWrapper",component:b,tags:["autodocs"],argTypes:{}},s={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3}},e={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"ERROR",title:"エラー",code:404,messages:["エラーが発生しました","管理者にお問い合わせください"]}}}},r={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"VALIDATION ERROR",title:"入力内容エラー",code:406,messages:{name:["必須項目です","文字を入力してください"]}}}}};function b(u){const[E,l]=T.useState(!1);async function F(){return u.response||{}}return a.jsxs(M,{onSubmit:F,setButtonDisabled:l,successMessage:u.successMessage,successMessageTimeout:u.successMessageTimeout,children:[a.jsx(B,{label:"名前",type:"text",name:"name",required:!0}),a.jsx(R,{variant:"primary",type:"submit",disabled:E,children:"送信"})]})}var t,o,n;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    successMessage: '処理に成功しました',
    successMessageTimeout: 5000
  }
}`,...(n=(o=s.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,m,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,g,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
