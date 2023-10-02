import{j as o}from"./jsx-runtime-ffb262ed.js";import{L as c}from"./ListView-c19f3b54.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Paginate-d1568ed1.js";import"./useEventCallback-62a029d7.js";import"./Anchor-2829b7c7.js";import"./index-8d47fad6.js";import"./createWithBsPrefix-54a4713d.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./AlertBox-6607119d.js";import"./extends-98964cd2.js";import"./Anchor-f8aa5777.js";import"./Popup-a4b74edb.js";import"./PageWrapper-abbf85ac.js";const E={title:"Wrappers/ListViews",component:c,tags:["autodocs"],argTypes:{}},n={args:{getItems:async t=>{const e=t.page||1,r=t.per||10,i=[];for(let p=(e-1)*r+1;p<=e*r;++p)i.push({name:`item${p}`});return{meta:{currentPage:e,lastPage:5,length:r*5,getLength:r,per:r},items:i}},itemWrapper:"ul",itemCallback:(t,e)=>o.jsx("li",{children:t.name},e),FilterProps:{children:"child filter",except:["keyword"]}}};var a,m,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    itemCallback: (item, idx) => <li key={idx}>{item['name']}</li>,
    FilterProps: {
      children: 'child filter',
      except: ['keyword']
    }
  }
}`,...(s=(m=n.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const F=["Normal"];export{n as Normal,F as __namedExportsOrder,E as default};
//# sourceMappingURL=ListView.stories-f737cbb0.js.map
