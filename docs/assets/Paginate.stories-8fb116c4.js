import{j as p}from"./jsx-runtime-1a9d9a93.js";import{P as c}from"./Paginate-cf9598e5.js";import{r}from"./index-8b3efc3f.js";import"./ThemeProvider-4882c792.js";import"./_commonjsHelpers-de833af9.js";import"./Anchor-a9534998.js";import"./useEventCallback-9e89688c.js";const E={title:"Wrappers/Paginate",component:u,tags:["autodocs"],argTypes:{}},e={args:{setPage:t=>{},meta:{currentPage:1,lastPage:5,getLength:10,length:50,per:10}}};function u(){const[t,g]=r.useState(1),[a,m]=r.useState({currentPage:1,lastPage:5,getLength:10,length:50,per:10});return r.useEffect(()=>{a.currentPage=t,m({...a})},[t]),p.jsx(c,{setPage:g,meta:a})}var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const j=["Normal"];export{e as Normal,j as __namedExportsOrder,E as default};
