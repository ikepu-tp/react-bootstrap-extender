import{j as p}from"./jsx-runtime-ffb262ed.js";import{P as c}from"./Paginate-d1568ed1.js";import{r}from"./index-76fb7be0.js";import"./useEventCallback-62a029d7.js";import"./_commonjsHelpers-de833af9.js";import"./Anchor-2829b7c7.js";const x={title:"Wrappers/Paginate",component:u,tags:["autodocs"],argTypes:{}},e={args:{setPage:t=>{},meta:{currentPage:1,lastPage:5,getLength:10,length:50,per:10}}};function u(){const[t,g]=r.useState(1),[a,m]=r.useState({currentPage:1,lastPage:5,getLength:10,length:50,per:10});return r.useEffect(()=>{a.currentPage=t,m({...a})},[t]),p.jsx(c,{setPage:g,meta:a})}var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    setPage: (page: number) => {},
    meta: {
      currentPage: 1,
      lastPage: 5,
      getLength: 10,
      length: 50,
      per: 10
    }
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const E=["Normal"];export{e as Normal,E as __namedExportsOrder,x as default};
//# sourceMappingURL=Paginate.stories-43f35e14.js.map
