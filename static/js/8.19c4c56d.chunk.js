(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{156:function(c,e,t){},157:function(c,e,t){},158:function(c,e,t){},159:function(c,e,t){},170:function(c,e,t){"use strict";t.r(e);var n=t(1),s=t.n(n),r=t(5),a=t(14),i=(t(156),t(6)),o=t(12),j=t(95),l=t.p+"static/media/bread3.0376cfa7.jpg",u=t(38),b=(t(157),t(2));function d(c){var e=c.images,t=Object(n.useState)(e[0]),s=Object(u.a)(t,2),r=s[0],a=s[1];return Object(b.jsxs)("section",{className:"productimage__container",children:[Object(b.jsx)("img",{src:r.url||e[0].url,alt:e.id,className:"main"}),Object(b.jsx)("div",{className:"gallery",children:e.map((function(c,t){return Object(b.jsx)("img",{src:c.url,alt:"",className:"".concat(c.url===r.url?"active":null),onClick:function(){return a(e[t])}},t)}))})]})}var m=s.a.memo(d),O=(t(158),t(98));function x(c){var e=c.stars,t=c.reviews,n=Array.from({length:5},(function(c,t){var n=t+.5;return Object(b.jsx)("span",{children:e>n?Object(b.jsx)(O.e,{}):e>t?Object(b.jsx)(O.f,{}):Object(b.jsx)(O.d,{})},t)}));return Object(b.jsxs)("div",{className:"stars__container",children:[Object(b.jsx)("div",{className:"stars",children:n}),Object(b.jsxs)("p",{className:"reviews",children:["(",t," customer reviews)"]})]})}var h=s.a.memo(x),p=t(94),f=t(49),v=t(26),N=t(24);t(159);function g(c){var e=c.product,t=e.colors,s=e.id,r=e.stock,o=Object(n.useState)(t[0]),j=Object(u.a)(o,2),l=j[0],d=j[1],m=Object(n.useState)(1),O=Object(u.a)(m,2),x=O[0],h=O[1],p=Object(i.b)();return Object(b.jsxs)("div",{className:"addtocard__container",children:[Object(b.jsxs)("div",{className:"colors",children:[Object(b.jsx)("span",{children:"Color :"}),Object(b.jsx)("div",{children:t.map((function(c,e){return Object(b.jsx)("button",{style:{background:c},className:"".concat(l===c?"color-btn active":"color-btn"),onClick:function(){return d(c)},children:l===c?Object(b.jsx)(N.b,{}):null},e)}))})]}),Object(b.jsxs)("div",{className:"btn-container",children:[Object(b.jsxs)("div",{className:"amount-btns",children:[Object(b.jsx)("button",{type:"button",className:"amount-btn",onClick:function(){h((function(c){var e=c-1;return e<1&&(e=1),e}))},children:Object(b.jsx)(N.d,{})}),Object(b.jsx)("h2",{className:"amount",children:x}),Object(b.jsx)("button",{type:"button",className:"amount-btn",onClick:function(){h((function(c){var e=c+1;return e>r&&(e=r),e}))},children:Object(b.jsx)(N.e,{})})]}),Object(b.jsx)(a.b,{to:"/cart",className:"btn-addtocart",onClick:function(){return p(Object(v.a)({id:s,mainColor:l,amount:x,product:e}))},children:"add to cart"})]})]})}var _=s.a.memo(g);function k(){var c=Object(r.h)().id,e=Object(r.f)(),t=Object(i.b)(),s=Object(i.c)((function(c){return c.products})),u=s.singleProduct_error,d=s.singleProduct_loading,O=s.singleProduct;if(Object(n.useEffect)((function(){t(Object(o.e)("https://course-api.com/react-store-single-product?id=".concat(c),O))}),[t,c]),Object(n.useEffect)((function(){u&&setTimeout((function(){e.push("/")}),3e3)}),[u,e]),d)return Object(b.jsx)(f.a,{});var x=O.name,v=O.images,N=O.price,g=O.description,k=O.stock,y=O.stars,w=O.reviews,C=O.id,S=O.company;return Object(b.jsxs)("main",{className:"singleproduct__container",children:[Object(b.jsx)(j.a,{title:x,product:!0,bgImg:l}),Object(b.jsxs)("div",{className:"section section-center page",children:[Object(b.jsx)(a.b,{to:"/products",className:"btn__product",children:"back to products"}),Object(b.jsxs)("div",{className:"product__center",children:[v&&Object(b.jsx)(m,{images:v}),Object(b.jsxs)("section",{className:"content",children:[Object(b.jsx)("h2",{children:x}),Object(b.jsx)(h,{stars:y,reviews:w}),Object(b.jsx)("h5",{className:"price",children:Object(p.a)(N)}),Object(b.jsx)("p",{className:"desc",children:g}),Object(b.jsxs)("p",{className:"info",children:[Object(b.jsx)("span",{children:"Available : "}),k>0?"In stock":"out of stock"]}),Object(b.jsxs)("p",{className:"info",children:[Object(b.jsx)("span",{children:"SKU :"}),C]}),Object(b.jsxs)("p",{className:"info",children:[Object(b.jsx)("span",{children:"Brand :"}),S]}),Object(b.jsx)("hr",{}),k>0&&Object(b.jsx)(_,{product:O})]})]})]})]})}e.default=s.a.memo(k)},94:function(c,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return r}));var n=t(20),s=function(c){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(c/100)},r=function(c,e){var t=c.map((function(c){return c[e]}));return"colors"===e&&(t=t.flat()),["all"].concat(Object(n.a)(new Set(t)))}},95:function(c,e,t){"use strict";var n=t(1),s=t.n(n),r=(t(96),t(14)),a=t(2);function i(c){var e=c.title,t=c.product,n=c.bgImg;return Object(a.jsx)("div",{className:"breadcrumb__container",style:{backgroundImage:" url(".concat(n,")")},children:Object(a.jsxs)("div",{className:"breadcrumb__center",children:[Object(a.jsx)("h1",{children:e}),Object(a.jsxs)("p",{children:[Object(a.jsx)(r.b,{to:"/",children:"Home"}),t&&Object(a.jsx)(r.b,{to:"/products",children:"/ Products"}),"/ ",e]})]})})}e.a=s.a.memo(i)},96:function(c,e,t){}}]);
//# sourceMappingURL=8.19c4c56d.chunk.js.map