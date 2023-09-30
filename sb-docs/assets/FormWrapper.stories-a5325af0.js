import{j as e}from"./jsx-runtime-ffb262ed.js";import{a as I,I as h,F as S}from"./InputWrapper-89082c26.js";import{r as E}from"./index-76fb7be0.js";import{u as $,c as A}from"./useEventCallback-59a76250.js";import{u as D}from"./Anchor-3a55a1b1.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./createWithBsPrefix-3da136dd.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./extends-98964cd2.js";const T=E.forwardRef(({as:s,bsPrefix:c,variant:r="primary",size:t,active:N=!1,disabled:m=!1,className:j,...u},y)=>{const i=$(c,"btn"),[B,{tagName:O}]=D({tagName:s,disabled:m,...u}),F=O;return e.jsx(F,{...B,...u,ref:y,disabled:m,className:A(j,i,N&&"active",r&&`${i}-${r}`,t&&`${i}-${t}`,u.href&&m&&"disabled")})});T.displayName="Button";const V=T,K={title:"Forms/FormWrapper",component:W,tags:["autodocs"],argTypes:{}},a={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3}},o={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"ERROR",title:"エラー",code:404,messages:["エラーが発生しました","管理者にお問い合わせください"]}}}},n={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"VALIDATION ERROR",title:"入力内容エラー",code:406,messages:{text:["必須項目です","文字を入力してください"]}}}}};function W(s){const[c,r]=E.useState(!1);async function t(){return s.response||{}}return e.jsxs(I,{onSubmit:t,setButtonDisabled:r,successMessage:s.successMessage,successMessageTimeout:s.successMessageTimeout,children:[e.jsx(h,{label:"項目1",required:!0,name:"text",children:e.jsx(S.Control,{type:"text",placeholder:"text"})}),e.jsx(V,{variant:"primary",type:"submit",disabled:c,children:"送信"})]})}var p,g,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    successMessage: '処理に成功しました',
    successMessageTimeout: 5000
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var l,f,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var M,R,b;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    successMessage: '処理に成功しました',
    successMessageTimeout: 5000,
    response: {
      error: {
        abstract: 'VALIDATION ERROR',
        title: '入力内容エラー',
        code: 406,
        messages: {
          text: ['必須項目です', '文字を入力してください']
        }
      }
    }
  }
}`,...(b=(R=n.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};const Q=["Normal","Error","ValidationError"];export{o as Error,a as Normal,n as ValidationError,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=FormWrapper.stories-a5325af0.js.map
