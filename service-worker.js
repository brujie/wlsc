if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const c=e=>n(e,r),l={module:{uri:r},exports:f,require:c};i[r]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(o(...e),f)))}}define(["./workbox-4262b9f1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/main.css",revision:"f8d733997785acb067dffd50e87464da"},{url:"css/vendors~main.css",revision:"c6619f7afb96c2a0f546d3fc0296ad97"},{url:"fonts/PingFangSC-Regular.woff2",revision:"cc0de053a64f144201b145765ab12db7"},{url:"fonts/PingFangSC-Semibold.woff2",revision:"5cb39b4df629110973199fc237fe04ca"},{url:"images/icon/logo.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"images/icon/t1.jpg",revision:"9c7502945032fb591baebdfdc8033306"},{url:"index.html",revision:"62b30c37131c0388e8fa5047b63ef735"},{url:"js/main.b08e0b52fad3.js",revision:null},{url:"js/vendors~main.b08e0b52fad3.js",revision:null}],{})}));
