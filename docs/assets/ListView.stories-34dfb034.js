import{j as o}from"./jsx-runtime-ffb262ed.js";import{L as l}from"./ListView-8025a10e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Paginate-854373e9.js";import"./ThemeProvider-e692be13.js";import"./Anchor-5a42a688.js";import"./useEventCallback-c7177fdc.js";import"./index-8d47fad6.js";import"./createWithBsPrefix-0f2a34d1.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./AlertBox-d1e158d3.js";import"./extends-98964cd2.js";import"./Anchor-f8aa5777.js";import"./Popup-e1665771.js";import"./PageWrapper-2d696fc5.js";import"./index-19579008.js";const E={title:"Wrappers/ListViews",component:l,tags:["autodocs"],argTypes:{}},n={args:{getItems:async r=>{const e=r.page||1,t=r.per||10,p=[];for(let i=(e-1)*t+1;i<=e*t;++i)p.push({name:`item${i}`});return{meta:{currentPage:e,lastPage:5,length:t*5,getLength:t,per:t},items:p}},itemWrapper:"ul",itemCallback:(r,e)=>o.jsx("li",{children:r.name},e),FilterProps:{children:"child filter",except:["keyword"]},moveToList:!1}};var a,m,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(m=n.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const F=["Normal"];export{n as Normal,F as __namedExportsOrder,E as default};
//# sourceMappingURL=ListView.stories-34dfb034.js.map
