if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,r,t)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return s;case"module":return n;default:return e(i)}}))).then((e=>{const i=t(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-bdcf4c9d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/index.css",revision:"12155e2cb55e604df628da5fdb3a0868"},{url:"/index.css.map",revision:"a3e7a911f9f421b3b3c8c1c647516775"},{url:"/index.html",revision:"f7e483d27ece84900adbda6e1fe54e4e"},{url:"/static/js/131.89aa76d8.chunk.js",revision:null},{url:"/static/js/131.89aa76d8.chunk.js.map",revision:null},{url:"/static/js/main.89aa76d8.js",revision:null},{url:"/static/js/main.89aa76d8.js.LICENSE.txt",revision:null},{url:"/static/js/main.89aa76d8.js.map",revision:null},{url:"/static/media/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.7b1c54da.bin",revision:null}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{allowlist:[/^(?!\/__).*/u]}))}));
//# sourceMappingURL=service-worker.js.map