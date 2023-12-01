import{j as t}from"./jsx-runtime-ffb262ed.js";import{c as o,a as N}from"./useEventCallback-62a029d7.js";import{r as d}from"./index-76fb7be0.js";import{A as y}from"./Anchor-2829b7c7.js";const u=d.forwardRef(({active:e=!1,disabled:n=!1,className:s,style:r,activeLabel:i="(current)",children:c,linkStyle:m,linkClassName:x,...f},j)=>{const h=e||n?"span":y;return t.jsx("li",{ref:j,style:r,className:o(s,"page-item",{active:e,disabled:n}),children:t.jsxs(h,{className:o("page-link",x),style:m,...f,children:[c,e&&i&&t.jsx("span",{className:"visually-hidden",children:i})]})})});u.displayName="PageItem";const I=u;function l(e,n,s=e){const r=d.forwardRef(({children:i,...c},m)=>t.jsxs(u,{...c,ref:m,children:[t.jsx("span",{"aria-hidden":"true",children:i||n}),t.jsx("span",{className:"visually-hidden",children:s})]}));return r.displayName=e,r}const _=l("First","«"),k=l("Prev","‹","Previous"),C=l("Ellipsis","…","More"),v=l("Next","›"),E=l("Last","»"),P=d.forwardRef(({bsPrefix:e,className:n,size:s,...r},i)=>{const c=N(e,"pagination");return t.jsx("ul",{ref:i,...r,className:o(n,c,s&&`${c}-${s}`)})});P.displayName="Pagination";const a=Object.assign(P,{First:_,Prev:k,Ellipsis:C,Item:I,Next:v,Last:E});function g(e){function n(){e.setPage(Math.max(e.meta.currentPage-1,1))}function s(){e.setPage(Math.min(e.meta.lastPage,e.meta.currentPage+1))}function r(){e.setPage(1)}function i(){e.setPage(e.meta.lastPage)}return t.jsxs(a,{children:[t.jsx(a.First,{onClick:r,disabled:e.meta.currentPage===1}),t.jsx(a.Prev,{onClick:n,disabled:e.meta.currentPage===1}),e.meta.currentPage!==1&&t.jsxs(t.Fragment,{children:[e.meta.currentPage-1!==1&&t.jsx(a.Ellipsis,{}),t.jsx(a.Item,{onClick:n,children:e.meta.currentPage-1})]}),t.jsx(a.Item,{active:!0,children:e.meta.currentPage}),e.meta.currentPage!==e.meta.lastPage&&t.jsxs(t.Fragment,{children:[t.jsx(a.Item,{onClick:s,children:e.meta.currentPage+1}),t.jsx(a.Ellipsis,{})]}),t.jsx(a.Next,{onClick:s,disabled:e.meta.lastPage===e.meta.currentPage}),t.jsx(a.Last,{onClick:i,disabled:e.meta.currentPage===e.meta.lastPage})]})}try{g.displayName="Paginate",g.__docgenInfo={description:"",displayName:"Paginate",props:{setPage:{defaultValue:null,description:"",name:"setPage",required:!0,type:{name:"(page: number) => void"}},meta:{defaultValue:null,description:"",name:"meta",required:!0,type:{name:"PaginationMetaResource"}}}}}catch{}export{g as P};
//# sourceMappingURL=Paginate-d1568ed1.js.map