var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function w(e){if(e.__esModule)return e;var r=e.default;if(typeof r=="function"){var t=function a(){return this instanceof a?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(a){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}),t}var p={};p.byteLength=F;p.toByteArray=A;p.fromByteArray=m;var l=[],c=[],i=typeof Uint8Array<"u"?Uint8Array:Array,v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var d=0,y=v.length;d<y;++d)l[d]=v[d],c[v.charCodeAt(d)]=d;c[45]=62;c[95]=63;function h(e){var r=e.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=r);var a=t===r?0:4-t%4;return[t,a]}function F(e){var r=h(e),t=r[0],a=r[1];return(t+a)*3/4-a}function g(e,r,t){return(r+t)*3/4-t}function A(e){var r,t=h(e),a=t[0],n=t[1],o=new i(g(e,a,n)),f=0,s=n>0?a-4:a,u;for(u=0;u<s;u+=4)r=c[e.charCodeAt(u)]<<18|c[e.charCodeAt(u+1)]<<12|c[e.charCodeAt(u+2)]<<6|c[e.charCodeAt(u+3)],o[f++]=r>>16&255,o[f++]=r>>8&255,o[f++]=r&255;return n===2&&(r=c[e.charCodeAt(u)]<<2|c[e.charCodeAt(u+1)]>>4,o[f++]=r&255),n===1&&(r=c[e.charCodeAt(u)]<<10|c[e.charCodeAt(u+1)]<<4|c[e.charCodeAt(u+2)]>>2,o[f++]=r>>8&255,o[f++]=r&255),o}function x(e){return l[e>>18&63]+l[e>>12&63]+l[e>>6&63]+l[e&63]}function C(e,r,t){for(var a,n=[],o=r;o<t;o+=3)a=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(e[o+2]&255),n.push(x(a));return n.join("")}function m(e){for(var r,t=e.length,a=t%3,n=[],o=16383,f=0,s=t-a;f<s;f+=o)n.push(C(e,f,f+o>s?s:f+o));return a===1?(r=e[t-1],n.push(l[r>>2]+l[r<<4&63]+"==")):a===2&&(r=(e[t-2]<<8)+e[t-1],n.push(l[r>>10]+l[r>>4&63]+l[r<<2&63]+"=")),n.join("")}export{w as a,p as b,L as c,j as g};