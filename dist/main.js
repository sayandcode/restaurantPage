(()=>{"use strict";var e={693:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),o=n.n(a),r=n(645),i=n.n(r)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:ital,wght@0,300;0,500;1,700&display=swap);"]),i.push([e.id,'header{position:sticky;top:0;z-index:10;background-color:rgba(23,23,23,.85)}header ul{list-style:none;padding-bottom:1em;display:flex;justify-content:center;gap:2em;font-size:1.25rem}header ul li{cursor:pointer}header ul li::after{content:"";width:100%;display:block;transform:scaleX(0);transition:all .2s ease-in;border-bottom:3px solid #ffd900}header ul li.activeTab::after{transform:scaleX(1)}.logo{font-family:"Lobster",cursive;font-size:4rem;font-weight:normal;text-align:center;padding-block:.5em;color:#ffd900}*{margin:0;padding:0;box-sizing:border-box}body{background-color:#171717;font-family:"Open Sans",sans-serif;color:#fff}main.fadeIn{animation:fade 1s}@keyframes fade{from{opacity:0}to{opacity:1}}img[alt="Agape 2 interiors"]{height:300px;width:100%;object-fit:cover}.about p{text-align:center;margin-block:1em}.menu{display:flex;flex-wrap:wrap;justify-content:space-evenly;align-items:flex-start}.menu .item{flex:0 0 20%;min-width:400px;padding:1rem;border-radius:20px 20px 0 0;display:flex;flex-direction:column;align-items:center;position:relative;text-align:center;transition:all .2s}.menu .item img{width:80%;aspect-ratio:1/1;border-radius:50%;object-fit:cover}.menu .item p{background-color:#ffd900;color:#171717;padding-inline:10%;padding-block:.5em;border-radius:0 0 20px 20px;position:absolute;bottom:0;transform:translateY(100%);z-index:2;opacity:0;transition:all .2s}.menu .item:hover,.menu .item:active{background-color:rgba(128,128,128,.1)}.menu .item:hover p,.menu .item:active p{opacity:1}.contact .map{width:60%;aspect-ratio:2/1;display:block;margin:auto;border-radius:20px}.contact .phoneNo{font-family:monospace;font-size:1.5rem;text-align:center;margin-block:1em}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,a);a.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=n(r[i]);t[s].references--}for(var c=a(e,o),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),i=n.n(r),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),m=n.n(u),p=n(693),f={};function h(e){const t=document.createElement("p");return t.textContent=e,t}f.styleTagTransform=m(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;function g(e,t){const n=document.createElement("div");return n.classList.add("item"),n.appendChild(function(e,t){const n=document.createElement("img");return n.setAttribute("src",e),n.setAttribute("alt",v[t]),n}(e,t)),n.appendChild(h(y[t])),n}const b=["./assets/alfahm.jpg","./assets/shawarmaStanding.jpg","./assets/alfahm2.jpg","./assets/plateShawarma.jpg","./assets/biriyani.jpg"],v=["A spicy alfahm","Shawarma Roll","Another alfahm","Plate Shawarma","Biriyani"],y=["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, modi.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum omnis nam fugit voluptatibus aliquid non aperiam sit inventore reprehenderit?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!"],x={src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.816648873952!2d77.643467!3d13.022667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebbadb01d5daf324!2sAgape!5e0!3m2!1sen!2sin!4v1651132928472!5m2!1sen!2sin",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},C=document.getElementById("content");function w(){const e=document.querySelector("main");switch(e.classList.remove("about","menu","contact"),e.textContent="",e.classList.add("fadeIn"),setTimeout((()=>{e.classList.remove("fadeIn")}),1e3),document.querySelector(".activeTab").textContent){case"About Us":(function(){const e=document.querySelector("main");e.appendChild(function(){const e=document.createElement("img");return e.setAttribute("src","https://b.zmtcdn.com/data/pictures/5/18644475/6642647c1d1b9ec4a9931810ddd21b7d.jpg"),e.setAttribute("alt","Agape 2 interiors"),e}()),e.appendChild(h("Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit."))})(),e.classList.add("about");break;case"Menu":(function(){const e=document.querySelector("main");for(const[t,n]of b.entries())e.appendChild(g(n,t))})(),e.classList.add("menu");break;case"Contact":(function(){const e=document.querySelector("main");e.appendChild(function(){const e=document.createElement("iframe");return e.classList.add("map"),function(e,t){for(const n in e)t.setAttribute(n,e[n])}(x,e),e}()),e.appendChild(h("📞: 09686257446, 9844120969")).classList.add("phoneNo")})(),e.classList.add("contact")}}function L(e){e.target.classList.contains("activeTab")||(document.querySelectorAll("nav li").forEach((e=>e.classList.remove("activeTab"))),e.target.classList.add("activeTab"),w())}C.appendChild(function(){const e=document.createElement("header"),t=e.appendChild(document.createElement("h1")),n=e.appendChild(document.createElement("nav")).appendChild(document.createElement("ul"));t.textContent="Agape2",t.classList.add("logo");const a=[],o=["About Us","Menu","Contact"];for(let e=0;e<o.length;e++)a[e]=n.appendChild(document.createElement("li")),a[e].textContent=o[e];return a[0].classList.add("activeTab"),e}()),C.appendChild(function(){const e=document.createElement("main");return C.appendChild(e),e}()),w(),document.querySelectorAll("nav li").forEach((e=>e.addEventListener("click",L)))})()})();