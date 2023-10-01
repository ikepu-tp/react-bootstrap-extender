import{j as p}from"./jsx-runtime-ffb262ed.js";import{P as c}from"./Paginate-6788492f.js";import{r}from"./index-76fb7be0.js";import"./useEventCallback-f3900921.js";import"./_commonjsHelpers-de833af9.js";import"./Anchor-0b0fe176.js";const x={title:"Wrappers/Paginate",component:u,tags:["autodocs"],argTypes:{}},e={args:{setPage:t=>{},meta:{currentPage:1,lastPage:5,getLength:10,length:50,per:10}}};function u(){const[t,g]=r.useState(1),[a,m]=r.useState({currentPage:1,lastPage:5,getLength:10,length:50,per:10});return r.useEffect(()=>{a.currentPage=t,m({...a})},[t]),p.jsx(c,{setPage:g,meta:a})}var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=Paginate.stories-1d45f946.js.map
