import{S as d,i as l,s as u,e as h,c as m,a as f,d as o,b as i,g as v,G as n,v as _}from"../../chunks/vendor-022b7721.js";function q(r){let e;return{c(){e=h("div"),this.h()},l(t){e=m(t,"DIV",{id:!0,class:!0}),f(e).forEach(o),this.h()},h(){i(e,"id","qrcode"),i(e,"class","svelte-18fow5x")},m(t,a){v(t,e,a)},p:n,i:n,o:n,d(t){t&&o(e)}}}function g(r,e,t){let{codeValue:a}=e,{squareSize:c}=e;return _(()=>{let s=document.createElement("script");s.src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js",document.head.append(s),s.onload=function(){new QRCode("qrcode",{text:a,width:c,height:c,colorDark:"#000000",colorLight:"#F8F6F2",correctLevel:QRCode.CorrectLevel.H})}}),r.$$set=s=>{"codeValue"in s&&t(0,a=s.codeValue),"squareSize"in s&&t(1,c=s.squareSize)},[a,c]}class p extends d{constructor(e){super();l(this,e,g,q,u,{codeValue:0,squareSize:1})}}export{p as default};
