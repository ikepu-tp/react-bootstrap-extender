import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{P as d}from"./Paginate-f806d7a4.js";import"./_commonjsHelpers-de833af9.js";import"./useEventCallback-59a76250.js";import"./Anchor-3a55a1b1.js";function m(e){const[n,r]=i.useState(1),[t,u]=i.useState();i.useEffect(()=>{g()},[n,e.reload]);async function g(){const l=await e.getItems({page:n});l&&u({...l})}return t?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-2",children:[t.meta.length,"件中",t.meta.getLength,"件表示中"]}),a.jsx(e.itemWrapper,{children:t.items.map(e.itemCallback)}),a.jsx("div",{className:"mt-2",children:a.jsx(d,{meta:t.meta,setPage:r})})]}):a.jsx(a.Fragment,{})}try{m.displayName="ListView",m.__docgenInfo={description:"",displayName:"ListView",props:{getItems:{defaultValue:null,description:"",name:"getItems",required:!0,type:{name:"(props: any) => Promise<false | PaginationResource<any>>"}},itemWrapper:{defaultValue:null,description:"",name:"itemWrapper",required:!0,type:{name:"any"}},itemCallback:{defaultValue:null,description:"",name:"itemCallback",required:!0,type:{name:"(value: any, index: number, array: object[]) => Element"}},reload:{defaultValue:null,description:"",name:"reload",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Wrappers/ListViews",component:m,tags:["autodocs"],argTypes:{}},s={args:{getItems:async e=>{const n=e.page||1,r=[];for(let t=(n-1)*10+1;t<=n*10;++t)r.push({name:`item${t}`});return{meta:{currentPage:n,lastPage:5,length:50,getLength:10,per:10},items:r}},itemWrapper:"ul",itemCallback:(e,n)=>a.jsx("li",{children:e.name},n)}};var o,p,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    getItems: async (params: {
      page?: number;
    }) => {
      const page = params.page || 1;
      const items: {
        name: string;
      }[] = [];
      for (let i = (page - 1) * 10 + 1; i <= page * 10; ++i) {
        items.push({
          name: \`item\${i}\`
        });
      }
      return {
        meta: {
          currentPage: page,
          lastPage: 5,
          length: 50,
          getLength: 10,
          per: 10
        },
        items: items
      };
    },
    itemWrapper: 'ul',
    itemCallback: (item, idx) => <li key={idx}>{item['name']}</li>
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const b=["Normal"];export{s as Normal,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=ListView.stories-d017db6a.js.map
