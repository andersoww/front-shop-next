if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>t(e,a),f={module:{uri:a},exports:c,require:r};s[a]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/OdsjDKixdQVnfBEFMtXrt/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/OdsjDKixdQVnfBEFMtXrt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/442-1340b0f91c2a0c84.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/614-3d4632d705ae22a3.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/642-8bb5913bd49eb31e.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/661-66aa3df24e60f62f.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/719-bde5b4f128f7d8ec.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/769-479d36b343a0f56d.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/app/home/page-8f02b1fd6072b5b1.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/app/import/page-bc4ee8765a8bf530.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/app/layout-60ce4795a6b36263.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/app/page-bf50cb8d2628da47.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/app/route/layout-a936b1aa17eba6e4.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/app/route/page-cf2ff81bca1396f2.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/app/sign/page-06f10cb9a8c66f2d.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/c36f3faa-5771c7f99327d583.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/fd9d1056-76aadce26f555392.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/main-13b59a021884abaf.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/main-app-7b90e5b5e76a1c21.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-395cf1ebe88974b0.js",revision:"OdsjDKixdQVnfBEFMtXrt"},{url:"/_next/static/css/3c48ff5f0736fe14.css",revision:"3c48ff5f0736fe14"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icon-192x192.png",revision:"28da924f49e491f0702725173825fa47"},{url:"/icon-256x256.png",revision:"14a290aec79bc08cb6583f6a6c2b45c1"},{url:"/icon-384x384.png",revision:"eb7f46d05ba5be10edcae1302ff46c23"},{url:"/icon-512x512.png",revision:"445db07665146374184121f8c20ad644"},{url:"/manifest.json",revision:"d315d7ccc16196ce0f00ca17c49e2c9b"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
