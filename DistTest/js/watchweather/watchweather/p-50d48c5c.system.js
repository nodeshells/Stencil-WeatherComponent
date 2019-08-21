var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function o(e){try{f(n.next(e))}catch(e){i(e)}}function s(e){try{f(n["throw"](e))}catch(e){i(e)}}function f(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(o,s)}f((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return f([e,t])}}function f(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="watchweather";var a=0;var i=false;var o;var s;var f=false;var l=window;var u=document;var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var $=function(){return!!u.documentElement.attachShadow}();var v=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h=new WeakMap;var d=function(e){return h.get(e)};var m=e("r",function(e,t){return h.set(t.$lazyInstance$=e,t)});var p=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return h.set(e,t)}};var g=function(e,t){return t in e};var y=function(e){return console.error(e)};var w=new Map;var b=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=w.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then(function(e){{w.set(i,e)}return e[a]},y)};var _=new Map;var S=function(){return l.__stencil_cssshim}();var x=[];var j=[];var k=[];var E=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&c.$flags$&4){P(C)}else{c.raf(C)}}}};var R=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){y(e)}}e.length=0};var L=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){y(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var C=function(){a++;R(x);var e=(c.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;L(j,e);L(k,e);if(j.length>0){k.push.apply(k,j);j.length=0}if(i=x.length+j.length+k.length>0){c.raf(C)}else{a=0}};var P=function(e){return Promise.resolve().then(e)};var O=E(j,true);var U={};var N=function(e){return e!=null};var A=function(e){return e.toLowerCase()};var M=function(e){e=typeof e;return e==="object"||e==="function"};var B=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var T=e("a",function(){if(!(l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)"))){return t.import("./p-dac3e2f0.system.js")}return Promise.resolve()});var I=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,a,i,o;return __generator(this,function(s){switch(s.label){case 0:e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(u.querySelectorAll("script")).find(function(e){return r.test(e.src)||e.getAttribute("data-namespace")===n});i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign({},i,{resourcesUrl:new URL(".",e).href})];case 1:o=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,l.location.href));z(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-bcae8885.system.js")];case 2:s.sent();s.label=3;case 3:return[2,Object.assign({},i,{resourcesUrl:o.href})]}})})});var z=function(e){var t=B(n);try{l[t]=new Function("w","return import(w);//"+Math.random())}catch(n){var r=new Map;l[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var o=u.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise(function(e){o.onload=function(){e(l[t].m);o.remove()}});r.set(a,i);u.head.appendChild(o)}return i}}};var H=function(e,t){if(e!=null&&!M(e)){if(t&1){return String(e)}return e}return e};var q="hydrated";var V=new WeakMap;var W=function(e,t,r){var n=_.get(e);if(v&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}_.set(e,n)};var F=function(e,t,r,n){var a=Q(t.$tagName$);var i=_.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var o=V.get(e);var s=void 0;if(!o){V.set(e,o=new Set)}if(!o.has(a)){{if(S){s=S.createHostStyle(n,a,i,!!(t.$flags$&10));var f=s["s-sc"];if(f){a=f;o=null}}else{s=u.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var G=function(e,t,r){var n=F($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var Q=function(e,t){return"sc-"+e};var D=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s;var f=[];var l=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!M(a)){a=String(a)}if(i&&o){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}o=i}}};l(r);if(t){{s=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,X)}var c={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{c.$key$=s}return c});var J={};var K=function(e){return e&&e.$tag$===J};var X={forEach:function(e,t){return e.map(Y).forEach(t)},map:function(e,t){return e.map(Y).map(t).map(Z)}};var Y=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var Z=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var ee=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"){var o=e.classList;te(r).forEach(function(e){return o.remove(e)});te(n).forEach(function(e){return o.add(e)})}else if(t==="style"){{for(var s in r){if(!n||n[s]==null){if(s.includes("-")){e.style.removeProperty(s)}else{e.style[s]=""}}}}for(var s in n){if(!r||n[s]!==r[s]){if(s.includes("-")){e.style.setProperty(s,n[s])}else{e.style[s]=n[s]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!g(e,t)){if(g(e,A(t))){t=A(t.substring(2))}else{t=A(t[2])+t.substring(3)}if(r){c.rel(e,t,r,false)}if(n){c.ael(e,t,n,false)}}else{var f=g(e,t);var l=M(n);if((f||l&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var u=n==null?"":n;if(e[t]!==u){e[t]=u}}else{e[t]=n}}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!f||i&4||a)&&!l){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var te=function(e){return!e?[]:e.split(/\s+/).filter(function(e){return e})};var re=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||U;var o=t.$attrs$||U;{for(n in i){if(!(n in o)){ee(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){ee(a,n,i[n],o[n],r,t.$flags$)}};var ne=function(e,t,r,n){var a=t.$children$[r];var i=0;var s;var l;if(N(a.$text$)){a.$elm$=u.createTextNode(a.$text$)}else{s=a.$elm$=u.createElement(a.$tag$);{re(null,a,f)}if(N(o)&&s["s-si"]!==o){s.classList.add(s["s-si"]=o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=ne(e,a,i);if(l){s.appendChild(l)}}}}return a.$elm$};var ae=function(e,t,r,n,a,i){var o=e;var f;if(o.shadowRoot&&A(o.tagName)===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){f=ne(null,r,a);if(f){n[a].$elm$=f;o.insertBefore(f,t)}}}};var ie=function(e,t,r,n){for(;t<=r;++t){if(N(e[t])){n=e[t].$elm$;le(e[t],true);n.remove()}}};var oe=function(e,t,r,n){var a=0;var i=0;var o=0;var s=0;var f=t.length-1;var l=t[0];var u=t[f];var c=n.length-1;var $=n[0];var v=n[c];var h;var d;while(a<=f&&i<=c){if(l==null){l=t[++a]}else if(u==null){u=t[--f]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(se(l,$)){fe(l,$);l=t[++a];$=n[++i]}else if(se(u,v)){fe(u,v);u=t[--f];v=n[--c]}else if(se(l,v)){fe(l,v);e.insertBefore(l.$elm$,u.$elm$.nextSibling);l=t[++a];v=n[--c]}else if(se(u,$)){fe(u,$);e.insertBefore(u.$elm$,l.$elm$);u=t[--f];$=n[++i]}else{o=-1;{for(s=a;s<=f;++s){if(t[s]&&N(t[s].$key$)&&t[s].$key$===$.$key$){o=s;break}}}if(o>=0){d=t[o];if(d.$tag$!==$.$tag$){h=ne(t&&t[i],r,o)}else{fe(d,$);t[o]=undefined;h=d.$elm$}$=n[++i]}else{h=ne(t&&t[i],r,i);$=n[++i]}if(h){{l.$elm$.parentNode.insertBefore(h,l.$elm$)}}}}if(a>f){ae(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){ie(t,a,f)}};var se=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}return true}return false};var fe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!N(t.$text$)){{{re(e,t,f)}}if(N(n)&&N(a)){oe(r,n,t,a)}else if(N(a)){if(N(e.$text$)){r.textContent=""}ae(r,null,t,a,0,a.length-1)}else if(N(n)){ie(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var le=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){le(e,t)})}};var ue=function(e,t,r,n){s=A(e.tagName);var a=t.$vnode$||{$flags$:0};var i=K(n)?n:D(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{o=e["s-sc"]}fe(a,i)};var ce=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i=function(){return $e(e,t,r,a,n)};var o;return me(o,function(){return O(i)})};var $e=function(e,t,r,n,a){{t.$flags$&=~16}if(a){G(e,r,t.$modeName$)}{{t.$flags$|=4;try{ue(e,t,r,n.render())}catch(e){y(e)}t.$flags$&=~4}}if(S){S.updateHost(e)}{t.$flags$|=2}ve(e,t)};var ve=function(e,t,r){if(!e["s-al"]){var n=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(q)}{t.$onReadyResolve$(e)}if(!n){de()}}}};var he=function(e,t){{var r=d(e);if(r.$flags$&2){ce(e,r,t,false)}}};var de=function(){{u.documentElement.classList.add(q)}{c.$flags$|=2}};var me=function(e,t){return e&&e.then?e.then(t):t()};var pe=function(e,t){return d(e).$instanceValues$.get(t)};var ge=function(e,t,r,n){var a=d(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(t);var s=a.$flags$;r=H(r,n.$members$[t][0]);if(r!==o&&(!(s&8)||o===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((s&(4|2|16))===2){ce(i,a,n,false)}}}};var ye=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return pe(this,n)},set:function(e){ge(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;c.jmp(function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r})};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var we=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,function(){var r,i,s;return __generator(this,function(f){switch(f.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;o=b(a);if(!o.then)return[3,2];return[4,o];case 1:o=f.sent();f.label=2;case 2:if(!o.isProxied){ye(o,a,2);o.isProxied=true}{n.$flags$|=8}try{new o(n)}catch(e){y(e)}{n.$flags$&=~8}r=Q(a.$tagName$);if(!(!_.has(r)&&o.style))return[3,5];i=o.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-8b2adfa7.system.js").then(function(e){return e.scopeCss(i,r,false)})];case 3:i=f.sent();f.label=4;case 4:W(r,i,!!(a.$flags$&1));f.label=5;case 5:s=function(){return ce(e,n,a,true)};{s()}return[2]}})})};var be=function(e,t){if((c.$flags$&1)===0){var r=d(e);if(!(r.$flags$&1)){r.$flags$|=1;if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{P(function(){return we(e,r,t)})}}}};var _e=function(e){if((c.$flags$&1)===0){var t=d(e);if(S){S.removeHost(e)}}};var Se=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=u.head;var i=l.customElements;var o=a.querySelector("meta[charset]");var s=u.createElement("style");var f;Object.assign(c,t);c.$resourcesUrl$=new URL(t.resourcesUrl||"./",u.baseURI).href;if(t.syncQueue){c.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!$&&a.$flags$&1){a.$flags$|=8}var o=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;p(t);if(a.$flags$&1){if($){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}c.jmp(function(){return be(e,a)})};t.prototype.disconnectedCallback=function(){var e=this;c.jmp(function(){return _e(e)})};t.prototype["s-init"]=function(){var e=d(this);if(e.$lazyInstance$){ve(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){he(this,a)};t.prototype.componentOnReady=function(){return d(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(o)&&!i.get(o)){r.push(o);i.define(o,ye(s,a,1))}})});s.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";s.setAttribute("data-styles","");a.insertBefore(s,o?o.nextSibling:a.firstChild);c.jmp(function(){return f=setTimeout(de,30)})})}}});
