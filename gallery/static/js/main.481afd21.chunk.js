(this["webpackJsonpaya-gallery"]=this["webpackJsonpaya-gallery"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"number":93,"image":"https://www.arweave.net/3oVo4hVizwIOFGjNjgRxu6n9LKwPTC2p7Ita88pvK40?ext=png","hash":"72018991345121950"},{"number":1,"image":"https://www.arweave.net/EOJCxlWCEnuKZQJ6iMvMoEIIxK3yZceiV0ZgnzDKHZE?ext=png","hash":"34463406185559036"},{"number":41,"image":"https://www.arweave.net/Vq84BMpZZq_0BOOIY7FvhlfVsiPI4Jk9CbYZxUDxuAg?ext=png","hash":"62699243553323624"},{"number":15,"image":"https://www.arweave.net/WI2fUGS_FgsHi0TG42x7hAnuQoPV1obQES6adZlW_1Y?ext=png","hash":"87437602572678530"},{"number":73,"image":"https://www.arweave.net/tk6Ji_5s6RbVQ1fRy9tOCXpGsCzyAqE3mhxMSSJgKIE?ext=png","hash":"84435998982659260"},{"number":97,"image":"https://www.arweave.net/p63fn0lgPjgR8drbWOtDVfhv-zSgegmXW3RRUatwldk?ext=png","hash":"11745710044608250"},{"number":86,"image":"https://www.arweave.net/bC8OHrhPW8Lhc1Pvrf-kf8RfwlZLtQ2DhrBAfeQKSos?ext=png","hash":"97979981996086100"},{"number":80,"image":"https://www.arweave.net/9Nn2LbrLNV7zBAzblHCwMnjQp6HZEfOszZKLeBkdRrY?ext=png","hash":"59706562723240740"},{"number":2,"image":"https://www.arweave.net/_Q-o6o_9iaqRKlZsTRJNZm1Zt_9VRePp2Bm-wbn2A_Y?ext=png","hash":"16830402167389552"},{"number":42,"image":"https://www.arweave.net/PRHjJFA3rlg6_HxbkDMSV6uJtpFy_SKPdp0FI4WiYKg?ext=png","hash":"17142898438576202"},{"number":87,"image":"https://www.arweave.net/pEsut-7cbL5bt4AMoDqOzFFvO-A5vcimognRNEgNuVo?ext=png","hash":"92900915917454290"},{"number":6,"image":"https://www.arweave.net/gi-0iHVn7pRZo1C4u5ZgNM5lasad09MAminBJKJAM5g?ext=png","hash":"24645900055842296"},{"number":81,"image":"https://www.arweave.net/7g3RMq_RQxWkoSyOzuk-hwA2jurRVAYjWyenK6JdhF0?ext=png","hash":"26028354746421784"},{"number":53,"image":"https://www.arweave.net/1KuViyB6tUR8e-JROEJo4vvAgDTHkH9yXcQcu4sLedQ?ext=png","hash":"74919342830348000"},{"number":38,"image":"https://www.arweave.net/wIltjZtvhMZ-FB6Ja-BUYsF9tA7h7IiHuMTTausqJdY?ext=png","hash":"69401692704205460"},{"number":59,"image":"https://www.arweave.net/NdpV-BREEvl141SoBxWhweE_40vsNzk5B7y5pELkM8c?ext=png","hash":"76483711809263980"},{"number":54,"image":"https://www.arweave.net/GZAwY66uVV6eGLWTVKTO8inqwPfAUkZ-4Wzv68JiJs4?ext=png","hash":"37105942318052180"},{"number":4,"image":"https://www.arweave.net/UGQNzsbpcmXQcF7Pu6WfF00AKpXnsAY2qhHO38CwswM?ext=png","hash":"20329237004505640"},{"number":55,"image":"https://www.arweave.net/ejxT1bmEj3Jzua_u0dkKFMXM6It-H3ZQlUjFNgf_xxU?ext=png","hash":"94912371294746770"}]')},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);for(var n=a(1),r=a.n(n),c=a(8),s=a.n(c),l=(a(15),a(4)),i=a(0),o=function(){return Object(i.jsxs)("header",{className:"aya-lp-heading",children:[Object(i.jsxs)("a",{href:"/gallery",className:"aya-logo",children:[Object(i.jsx)("div",{className:"aya-logo-image"}),Object(i.jsx)("h1",{className:"aya-logo-text",children:"AYAHUASCA"})]}),Object(i.jsxs)("nav",{className:"aya-header-nav",children:[Object(i.jsx)("a",{href:"https://discord.gg/MYhVMFPvxu",target:"_blank",rel:"noreferrer noopener",children:Object(i.jsx)("img",{alt:"Discord logo",src:"https://ayahuasca.art/public/assets/discord.svg"})}),Object(i.jsx)("a",{href:"https://twitter.com/Ayahuasca_NFT",target:"_blank",rel:"noreferrer noopener",children:Object(i.jsx)("img",{alt:"Twitter logo",src:"https://ayahuasca.art/public/assets/twitter.svg"})})]})]})},h=a(9),g=(a(17),a(2)),d=a(10),j=[],u=function(e){var t=d.find((function(t){return t.number===e}));t?j.push(t):j.push({number:e,notMintedYet:!0,image:e%2?"/gallery/placeholder-curves.png":"/gallery/placeholder-void.png"})},m=0;m<100;m++)u(m);var w=j.length;var b=function(){var e=Object(n.useRef)(),t=Object(g.h)(),a=(Object(g.f)(),Object(g.g)()),r=Object(n.useState)(!1),c=Object(l.a)(r,2),s=c[0],d=c[1];return e.current=void 0!==t.item?Number(t.item):void 0,Object(n.useEffect)((function(){var n=function(n){var r;if(void 0!==e.current)switch(n.keyCode){case 27:a(-1);break;case 37:r=(w+e.current-1)%w,a("/".concat(t.collection,"/").concat(r),{replace:!0});break;case 39:r=(e.current+1)%w,a("/".concat(t.collection,"/").concat(r),{replace:!0})}};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}})),Object(n.useEffect)((function(){d(!1)}),[t]),Object(i.jsxs)("main",{className:"aya-gallery-content",children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"aya-gallery-centered",children:[Object(i.jsx)(h.a,{className:"scroll-container aya-gallery-padding",activationDistance:2,hideScrollbars:!1,children:Object(i.jsx)("section",{className:"aya-gallery-items",children:j.map((function(e,n){return Object(i.jsx)("div",{className:"aya-gallery-item",onClick:function(e){a("/".concat(t.collection,"/").concat(n))},children:Object(i.jsxs)("div",{className:"aya-gallery-item-picture-container",children:[Object(i.jsx)("img",{className:"aya-gallery-item-picture",src:e.image,width:"120",height:"400",loading:"lazy",alt:"#".concat(e.number," from Ayahuaska collection")}),Object(i.jsx)("p",{className:"aya-gallery-item-number",children:e.number})]})},n)}))})}),Object(i.jsxs)("div",{className:"aya-gallery-info",children:[Object(i.jsx)("p",{className:"aya-gallery-title",children:"COLLECTION"}),Object(i.jsx)("h2",{className:"aya-gallery-header",children:"Ayahuasca"})]})]}),void 0!==e.current&&Object(i.jsx)("div",{className:"aya-gallery-single",children:Object(i.jsxs)("div",{className:"aya-gallery-single-content",children:[Object(i.jsxs)("div",{className:"aya-gallery-item-picture-container-copy",children:[!s&&Object(i.jsx)("img",{className:"aya-gallery-item-picture",src:j[e.current].image,width:"400",height:"400",loading:"lazy",alt:"#".concat(e.current," from Ayahuaska collection")}),s&&Object(i.jsx)("iframe",{className:"aya-gallery-item-picture",src:"/gallery/generate.html?seed="+j[e.current].hash,width:"544",height:"544"})]}),j[e.current].notMintedYet&&Object(i.jsxs)("div",{className:"aya-gallery-not-minted-yet--mobile",children:[Object(i.jsx)("p",{children:"This item hasn't been minted yet!"}),Object(i.jsx)("a",{className:"aya-gallery-join-discord",href:"https://discord.gg/MYhVMFPvxu",rel:"noreferrer noopener",children:"Join us in Discord"})]}),Object(i.jsxs)("div",{className:"aya-gallery-controllers aya-gallery-controllers--mobile",children:[Object(i.jsxs)("a",{href:"#",onClick:function(n){n.preventDefault();var r=(w+e.current-1)%w;a("/".concat(t.collection,"/").concat(r),{replace:!0})},children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-left",children:Object(i.jsx)("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),Object(i.jsxs)("a",{href:"#",onClick:function(n){n.preventDefault();var r=(e.current+1)%w;a("/".concat(t.collection,"/").concat(r),{replace:!0})},children:["Next",Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right",children:Object(i.jsx)("polyline",{points:"9 18 15 12 9 6"})})]})]}),Object(i.jsxs)("div",{className:"aya-gallery-single-info",children:[Object(i.jsx)("h3",{className:"aya-gallery-single-collection",children:"Collection: Ayahuasca Art"}),Object(i.jsxs)("h1",{className:"aya-gallery-single-name",children:["Ayahuasca ",j[e.current].notMintedYet?"#???":"#"+e.current]}),Object(i.jsx)("p",{className:"aya-gallery-single-description",children:"Unique collection of 500 randomly generated artworks inspired by the ancestral Amazon ritual. Each instance explores an abstract composition of curves, motion, and colors living on the Solana blockchain."}),j[e.current].notMintedYet?Object(i.jsxs)("div",{className:"aya-gallery-not-minted-yet",children:[Object(i.jsx)("p",{children:"This item hasn't been minted yet."}),Object(i.jsx)("a",{className:"aya-gallery-join-discord",href:"https://discord.gg/MYhVMFPvxu",rel:"noreferrer noopener",children:"Join us in Discord"})]}):Object(i.jsx)("a",{className:"aya-gallery-join-discord",href:"/gallery/generate.html?seed="+j[e.current].hash,target:"_blank",children:"See generation"})]}),Object(i.jsxs)("div",{className:"aya-gallery-controllers",children:[Object(i.jsxs)("a",{href:"#",onClick:function(n){n.preventDefault();var r=(w+e.current-1)%w;a("/".concat(t.collection,"/").concat(r),{replace:!0})},children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-left",children:Object(i.jsx)("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),Object(i.jsxs)("a",{href:"#",onClick:function(n){n.preventDefault();var r=(e.current+1)%w;a("/".concat(t.collection,"/").concat(r),{replace:!0})},children:["Next",Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right",children:Object(i.jsx)("polyline",{points:"9 18 15 12 9 6"})})]})]})]})})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},x=a(7);s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x.a,{children:Object(i.jsxs)(g.d,{children:[Object(i.jsx)(g.b,{path:"/:collection/:item",element:Object(i.jsx)(b,{})}),Object(i.jsx)(g.b,{path:"/:collection",element:Object(i.jsx)(b,{})}),Object(i.jsx)(g.b,{path:"/*",element:Object(i.jsx)(g.a,{to:"/ayahuasca",replace:!0})})]})})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.481afd21.chunk.js.map