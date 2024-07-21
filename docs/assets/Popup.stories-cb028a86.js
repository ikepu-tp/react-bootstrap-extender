import{j as l}from"./jsx-runtime-ffb262ed.js";import{P as u}from"./Popup-e1665771.js";import{r as a}from"./index-76fb7be0.js";import"./ThemeProvider-e692be13.js";import"./_commonjsHelpers-de833af9.js";import"./createWithBsPrefix-0f2a34d1.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./index-8d47fad6.js";import"./useEventCallback-c7177fdc.js";const H={title:"Components/Popup",component:f,tags:["autodocs"],argTypes:{}},o={args:{show:!1,header:"タイトル",footer:"フッター",children:"子要素",showToggle:void 0}},e={args:{show:!1,header:"タイトル",footer:"フッター",children:"子要素",showToggle:l.jsx("button",{className:"btn btn-secondary",children:"表示"})}};function f({show:r,...h}){const[s,t]=a.useState(!1);a.useEffect(()=>{r!==void 0&&t(r)},[r]);function g(){t(!s)}return l.jsx(u,{show:s,onHide:g,...h})}var n,c,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    show: false,
    header: 'タイトル',
    footer: 'フッター',
    children: '子要素',
    showToggle: undefined
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,i,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    show: false,
    header: 'タイトル',
    footer: 'フッター',
    children: '子要素',
    showToggle: <button className="btn btn-secondary">表示</button>
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const v=["Normal","HasShowToggle"];export{e as HasShowToggle,o as Normal,v as __namedExportsOrder,H as default};
//# sourceMappingURL=Popup.stories-cb028a86.js.map
