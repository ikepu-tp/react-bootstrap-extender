import{j as n}from"./jsx-runtime-ffb262ed.js";import{a as $,C as A}from"./Control-30e952a3.js";import{r as E}from"./index-76fb7be0.js";import{u as C,c as D}from"./useEventCallback-59a76250.js";import{u as F}from"./Anchor-3a55a1b1.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./createWithBsPrefix-3da136dd.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./extends-98964cd2.js";const T=E.forwardRef(({as:s,bsPrefix:c,variant:e="primary",size:r,active:N=!1,disabled:m=!1,className:y,...u},B)=>{const i=C(c,"btn"),[O,{tagName:j}]=F({tagName:s,disabled:m,...u}),S=j;return n.jsx(S,{...O,...u,ref:B,disabled:m,className:D(y,i,N&&"active",e&&`${i}-${e}`,r&&`${i}-${r}`,u.href&&m&&"disabled")})});T.displayName="Button";const I=T,J={title:"Forms/FormWrapper",component:V,tags:["autodocs"],argTypes:{}},a={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3}},t={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"ERROR",title:"エラー",code:404,messages:["エラーが発生しました","管理者にお問い合わせください"]}}}},o={args:{successMessage:"処理に成功しました",successMessageTimeout:5e3,response:{error:{abstract:"VALIDATION ERROR",title:"入力内容エラー",code:406,messages:{name:["必須項目です","文字を入力してください"]}}}}};function V(s){const[c,e]=E.useState(!1);async function r(){return s.response||{}}return n.jsxs($,{onSubmit:r,setButtonDisabled:e,successMessage:s.successMessage,successMessageTimeout:s.successMessageTimeout,children:[n.jsx(A,{label:"名前",type:"text",name:"name",required:!0}),n.jsx(I,{variant:"primary",type:"submit",disabled:c,children:"送信"})]})}var p,g,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    successMessage: '処理に成功しました',
    successMessageTimeout: 5000
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var l,f,M;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(M=(f=t.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var R,b,x;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const K=["Normal","Error","ValidationError"];export{t as Error,a as Normal,o as ValidationError,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FormWrapper.stories-2e1212e6.js.map
