import{j as o}from"./jsx-runtime-ffb262ed.js";import{L as l}from"./ListView-f62684b5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Paginate-d1568ed1.js";import"./useEventCallback-62a029d7.js";import"./Anchor-2829b7c7.js";import"./index-8d47fad6.js";import"./createWithBsPrefix-54a4713d.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./AlertBox-6607119d.js";import"./extends-98964cd2.js";import"./Anchor-f8aa5777.js";import"./Popup-0cfab052.js";import"./PageWrapper-6372da2a.js";const v={title:"Wrappers/ListViews",component:l,tags:["autodocs"],argTypes:{}},n={args:{getItems:async r=>{const e=r.page||1,t=r.per||10,a=[];for(let i=(e-1)*t+1;i<=e*t;++i)a.push({name:`item${i}`});return{meta:{currentPage:e,lastPage:5,length:t*5,getLength:t,per:t},items:a}},itemWrapper:"ul",itemCallback:(r,e)=>o.jsx("li",{children:r.name},e),FilterProps:{children:"child filter",except:["keyword"]},moveToList:!1}};var p,m,s;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    },
    moveToList: false
  }
}`,...(s=(m=n.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const C=["Normal"];export{n as Normal,C as __namedExportsOrder,v as default};
//# sourceMappingURL=ListView.stories-44588aac.js.map
