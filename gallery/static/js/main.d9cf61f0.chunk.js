(this["webpackJsonpaya-gallery"]=this["webpackJsonpaya-gallery"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"number":93,"image":"https://www.arweave.net/3oVo4hVizwIOFGjNjgRxu6n9LKwPTC2p7Ita88pvK40?ext=png"},{"number":1,"image":"https://www.arweave.net/EOJCxlWCEnuKZQJ6iMvMoEIIxK3yZceiV0ZgnzDKHZE?ext=png"},{"number":41,"image":"https://www.arweave.net/Vq84BMpZZq_0BOOIY7FvhlfVsiPI4Jk9CbYZxUDxuAg?ext=png"},{"number":15,"image":"https://www.arweave.net/WI2fUGS_FgsHi0TG42x7hAnuQoPV1obQES6adZlW_1Y?ext=png"},{"number":73,"image":"https://www.arweave.net/tk6Ji_5s6RbVQ1fRy9tOCXpGsCzyAqE3mhxMSSJgKIE?ext=png"},{"number":97,"image":"https://www.arweave.net/p63fn0lgPjgR8drbWOtDVfhv-zSgegmXW3RRUatwldk?ext=png"}]')},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);for(var n=a(1),c=a.n(n),r=a(8),l=a.n(r),s=(a(15),a(0)),i=function(){return Object(s.jsxs)("header",{className:"aya-lp-heading",children:[Object(s.jsxs)("a",{href:"/gallery",className:"aya-logo",children:[Object(s.jsx)("div",{className:"aya-logo-image"}),Object(s.jsx)("h1",{className:"aya-logo-text",children:"AYAHUASCA"})]}),Object(s.jsxs)("nav",{className:"aya-header-nav",children:[Object(s.jsx)("a",{href:"https://discord.gg/MYhVMFPvxu",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)("img",{alt:"Discord logo",src:"https://ayahuasca.art/public/assets/discord.svg"})}),Object(s.jsx)("a",{href:"https://twitter.com/Ayahuasca_NFT",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)("img",{alt:"Twitter logo",src:"https://ayahuasca.art/public/assets/twitter.svg"})})]})]})},o=a(9),h=(a(17),a(2)),d=a(10),j=[],g=function(e){var t=d.find((function(t){return t.number===e}));console.log("Visible",t),t?j.push(t):j.push({number:e,notMintedYet:!0,image:e%2?"/gallery/placeholder-curves.png":"/gallery/placeholder-void.png"})},u=0;u<100;u++)g(u);var b=j.length;var m=function(){var e=Object(n.useRef)(),t=Object(h.h)(),a=(Object(h.f)(),Object(h.g)());return e.current=void 0!==t.item?Number(t.item):void 0,Object(n.useEffect)((function(){var n=function(n){var c;if(void 0!==e.current)switch(n.keyCode){case 27:a(-1);break;case 37:c=(b+e.current-1)%b,a("/".concat(t.collection,"/").concat(c),{replace:!0});break;case 39:c=(e.current+1)%b,a("/".concat(t.collection,"/").concat(c),{replace:!0})}};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}})),Object(s.jsxs)("main",{className:"aya-gallery-content",children:[Object(s.jsx)(i,{}),Object(s.jsxs)("div",{className:"aya-gallery-centered",children:[Object(s.jsx)(o.a,{className:"scroll-container aya-gallery-padding",activationDistance:2,hideScrollbars:!1,children:Object(s.jsx)("section",{className:"aya-gallery-items",children:j.map((function(e,n){return Object(s.jsx)("div",{className:"aya-gallery-item",onClick:function(e){a("/".concat(t.collection,"/").concat(n))},children:Object(s.jsxs)("div",{className:"aya-gallery-item-picture-container",children:[Object(s.jsx)("img",{className:"aya-gallery-item-picture",src:e.image,width:"120",height:"400",loading:"lazy",alt:"#".concat(e.number," from Ayahuaska collection")}),Object(s.jsx)("p",{className:"aya-gallery-item-number",children:e.number})]})},n)}))})}),Object(s.jsxs)("div",{className:"aya-gallery-info",children:[Object(s.jsx)("p",{className:"aya-gallery-title",children:"COLLECTION"}),Object(s.jsx)("h2",{className:"aya-gallery-header",children:"Ayahuasca"})]})]}),void 0!==e.current&&Object(s.jsx)("div",{className:"aya-gallery-single",children:Object(s.jsxs)("div",{className:"aya-gallery-single-content",children:[Object(s.jsx)("div",{className:"aya-gallery-item-picture-container-copy",children:Object(s.jsx)("img",{className:"aya-gallery-item-picture",src:j[e.current].image,width:"400",height:"400",loading:"lazy",alt:"#".concat(e.current," from Ayahuaska collection")})}),j[e.current].notMintedYet&&Object(s.jsxs)("div",{className:"aya-gallery-not-minted-yet--mobile",children:[Object(s.jsx)("p",{children:"This item hasn't been minted yet!"}),Object(s.jsx)("a",{className:"aya-gallery-join-discord",href:"https://discord.gg/MYhVMFPvxu",rel:"noreferrer noopener",children:"Join us in Discord"})]}),Object(s.jsxs)("div",{className:"aya-gallery-controllers aya-gallery-controllers--mobile",children:[Object(s.jsxs)("a",{href:"#",onClick:function(n){n.preventDefault();var c=(b+e.current-1)%b;a("/".concat(t.collection,"/").concat(c),{replace:!0})},children:[Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-left",children:Object(s.jsx)("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),Object(s.jsxs)("a",{href:"#",onClick:function(n){n.preventDefault();var c=(e.current+1)%b;a("/".concat(t.collection,"/").concat(c),{replace:!0})},children:["Next",Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right",children:Object(s.jsx)("polyline",{points:"9 18 15 12 9 6"})})]})]}),Object(s.jsxs)("div",{className:"aya-gallery-single-info",children:[Object(s.jsx)("h3",{className:"aya-gallery-single-collection",children:"Collection: Ayahuasca Art"}),Object(s.jsxs)("h1",{className:"aya-gallery-single-name",children:["Ayahuasca ",j[e.current].notMintedYet?"#???":"#"+e.current]}),Object(s.jsx)("p",{className:"aya-gallery-single-description",children:"Unique collection of 500 randomly generated artworks inspired by the ancestral Amazon ritual. Each instance explores an abstract composition of curves, motion, and colors living on the Solana blockchain."}),j[e.current].notMintedYet&&Object(s.jsxs)("div",{className:"aya-gallery-not-minted-yet",children:[Object(s.jsx)("p",{children:"This item hasn't been minted yet."}),Object(s.jsx)("a",{className:"aya-gallery-join-discord",href:"https://discord.gg/MYhVMFPvxu",rel:"noreferrer noopener",children:"Join us in Discord"})]})]}),Object(s.jsxs)("div",{className:"aya-gallery-controllers",children:[Object(s.jsxs)("a",{href:"#",onClick:function(n){n.preventDefault();var c=(b+e.current-1)%b;a("/".concat(t.collection,"/").concat(c),{replace:!0})},children:[Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-left",children:Object(s.jsx)("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),Object(s.jsxs)("a",{href:"#",onClick:function(n){n.preventDefault();var c=(e.current+1)%b;a("/".concat(t.collection,"/").concat(c),{replace:!0})},children:["Next",Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right",children:Object(s.jsx)("polyline",{points:"9 18 15 12 9 6"})})]})]})]})})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))},p=a(7);l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p.a,{children:Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{path:"/:collection/:item",element:Object(s.jsx)(m,{})}),Object(s.jsx)(h.b,{path:"/:collection",element:Object(s.jsx)(m,{})}),Object(s.jsx)(h.b,{path:"/*",element:Object(s.jsx)(h.a,{to:"/ayahuasca",replace:!0})})]})})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.d9cf61f0.chunk.js.map