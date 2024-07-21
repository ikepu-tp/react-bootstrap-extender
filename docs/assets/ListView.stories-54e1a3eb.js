import{j as o}from"./jsx-runtime-1a9d9a93.js";import{L as l}from"./Select-848b647f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./AlertBox-b1796e1e.js";import"./ThemeProvider-4882c792.js";import"./extends-4c19d496.js";import"./CloseButton-6d1c0b4d.js";import"./inheritsLoose-5494d9cc.js";import"./index-a38d0dca.js";import"./index-8d47fad6.js";import"./useEventCallback-9e89688c.js";import"./Anchor-a9534998.js";import"./Anchor-b5176715.js";import"./Paginate-cf9598e5.js";import"./Popup-c7981736.js";import"./PageWrapper-94251bc5.js";import"./index-7d99b93e.js";const E={title:"Wrappers/ListViews",component:l,tags:["autodocs"],argTypes:{}},n={args:{getItems:async r=>{const e=r.page||1,t=r.per||10,p=[];for(let i=(e-1)*t+1;i<=e*t;++i)p.push({name:`item${i}`});return{meta:{currentPage:e,lastPage:5,length:t*5,getLength:t,per:t},items:p}},itemWrapper:"ul",itemCallback:(r,e)=>o.jsx("li",{children:r.name},e),FilterProps:{children:"child filter",except:["keyword"]},moveToList:!1}};var a,m,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
