import{j as d}from"./jsx-runtime-1a9d9a93.js";import{P as g}from"./Popup-c7981736.js";import{r as a}from"./index-8b3efc3f.js";import"./ThemeProvider-4882c792.js";import"./_commonjsHelpers-de833af9.js";import"./CloseButton-6d1c0b4d.js";import"./inheritsLoose-5494d9cc.js";import"./index-a38d0dca.js";import"./index-8d47fad6.js";import"./useEventCallback-9e89688c.js";const D={title:"Components/Popup",component:f,tags:["autodocs"],argTypes:{}},o={args:{show:!1,header:"タイトル",footer:"フッター",children:"子要素",showToggle:void 0}},e={args:{show:!1,header:"タイトル",footer:"フッター",children:"子要素",showToggle:d.jsx("button",{className:"btn btn-secondary",children:"表示"})}};function f({show:r,...l}){const[s,t]=a.useState(!1);a.useEffect(()=>{r!==void 0&&t(r)},[r]);function h(){t(!s)}return d.jsx(g,{show:s,onHide:h,...l})}var n,u,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    show: false,
    header: 'タイトル',
    footer: 'フッター',
    children: '子要素',
    showToggle: undefined
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,m,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    show: false,
    header: 'タイトル',
    footer: 'フッター',
    children: '子要素',
    showToggle: <button className="btn btn-secondary">表示</button>
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const N=["Normal","HasShowToggle"];export{e as HasShowToggle,o as Normal,N as __namedExportsOrder,D as default};
