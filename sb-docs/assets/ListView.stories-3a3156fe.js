import{j as o}from"./jsx-runtime-ffb262ed.js";import{L as g}from"./ListView-803e4df6.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Paginate-6788492f.js";import"./useEventCallback-f3900921.js";import"./Anchor-0b0fe176.js";import"./index-8d47fad6.js";import"./Popup-8a83400c.js";import"./index-d3ea75b5.js";import"./inheritsLoose-c82a83d4.js";import"./extends-98964cd2.js";import"./Anchor-f8aa5777.js";import"./PageWrapper-ed421ee1.js";const w={title:"Wrappers/ListViews",component:g,tags:["autodocs"],argTypes:{}},n={args:{getItems:async r=>{const e=r.page||1,t=r.per||10,m=[];for(let a=(e-1)*t+1;a<=e*t;++a)m.push({name:`item${a}`});return{meta:{currentPage:e,lastPage:5,length:t*5,getLength:t,per:t},items:m}},itemWrapper:"ul",itemCallback:(r,e)=>o.jsx("li",{children:r.name},e)}};var p,s,i;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    getItems: async (params: {
      page?: number;
      per?: number;
    }) => {
      const page = params.page || 1;
      const per = params.per || 10;
      const items: {
        name: string;
      }[] = [];
      for (let i = (page - 1) * per + 1; i <= page * per; ++i) {
        items.push({
          name: \`item\${i}\`
        });
      }
      return {
        meta: {
          currentPage: page,
          lastPage: 5,
          length: per * 5,
          getLength: per,
          per: per
        },
        items: items
      };
    },
    itemWrapper: 'ul',
    itemCallback: (item, idx) => <li key={idx}>{item['name']}</li>
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const C=["Normal"];export{n as Normal,C as __namedExportsOrder,w as default};
//# sourceMappingURL=ListView.stories-3a3156fe.js.map
