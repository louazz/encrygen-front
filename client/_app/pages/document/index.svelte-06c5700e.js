import{S as z,i as J,s as X,e as p,t as B,k as g,c as d,a as k,h as K,d as _,m as I,b as a,g as H,F as e,M as w,L as N,N as Q,G,O as W,K as q,P as Y}from"../../chunks/vendor-022b7721.js";import{i as Z,t as $,a as ee}from"../../chunks/useToken-04409780.js";import{g as te}from"../../chunks/navigation-bd39ff07.js";import"../../chunks/singletons-a6a7384f.js";function ae(o){let t,s,u,f,v,b,l,L,h,y,j,A,i,n,E,C,S,m,U,T,x,M;return{c(){t=p("form"),s=p("div"),u=p("div"),f=p("label"),v=B("Title"),b=g(),l=p("input"),L=g(),h=p("div"),y=p("label"),j=B("Key"),A=g(),i=p("input"),n=g(),E=p("label"),C=B("Content"),S=g(),m=p("textarea"),U=g(),T=p("input"),this.h()},l(c){t=d(c,"FORM",{});var r=k(t);s=d(r,"DIV",{class:!0});var P=k(s);u=d(P,"DIV",{class:!0});var D=k(u);f=d(D,"LABEL",{for:!0});var R=k(f);v=K(R,"Title"),R.forEach(_),b=I(D),l=d(D,"INPUT",{class:!0,type:!0,placeholder:!0}),D.forEach(_),L=I(P),h=d(P,"DIV",{class:!0});var O=k(h);y=d(O,"LABEL",{for:!0});var V=k(y);j=K(V,"Key"),V.forEach(_),A=I(O),i=d(O,"INPUT",{class:!0,type:!0,placeholder:!0}),O.forEach(_),P.forEach(_),n=I(r),E=d(r,"LABEL",{for:!0});var F=k(E);C=K(F,"Content"),F.forEach(_),S=I(r),m=d(r,"TEXTAREA",{class:!0,placeholder:!0}),k(m).forEach(_),U=I(r),T=d(r,"INPUT",{class:!0,type:!0}),r.forEach(_),this.h()},h(){a(f,"for","exampleEmailInput"),a(l,"class","u-full-width"),a(l,"type","text"),a(l,"placeholder","Title of the document"),a(u,"class","six columns"),a(y,"for","exampleEmailInput"),a(i,"class","u-full-width"),a(i,"type","text"),a(i,"placeholder","Encryption key (secret)"),a(h,"class","six columns"),a(s,"class","row"),a(E,"for","exampleMessage"),a(m,"class","u-full-width"),a(m,"placeholder","Content..."),a(T,"class","button-primary"),a(T,"type","submit"),T.value="Generate"},m(c,r){H(c,t,r),e(t,s),e(s,u),e(u,f),e(f,v),e(u,b),e(u,l),w(l,o[1]),e(s,L),e(s,h),e(h,y),e(y,j),e(h,A),e(h,i),w(i,o[0]),e(t,n),e(t,E),e(E,C),e(t,S),e(t,m),w(m,o[2]),e(t,U),e(t,T),x||(M=[N(l,"input",o[5]),N(i,"input",o[6]),N(m,"input",o[7]),N(T,"click",o[3]),N(t,"submit",Q(o[4]))],x=!0)},p(c,[r]){r&2&&l.value!==c[1]&&w(l,c[1]),r&1&&i.value!==c[0]&&w(i,c[0]),r&4&&w(m,c[2])},i:G,o:G,d(c){c&&_(t),x=!1,W(M)}}}function le(o,t,s){let u,f;q(o,Z,n=>s(8,u=n)),q(o,$,n=>s(9,f=n));let v="",b="",l="";const L=async()=>(console.log(ee),await fetch("https://backend.encrygen.co.uk/api/docs/new",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+f},body:JSON.stringify({doc:{title:b,user:u,content:l,encr:null,key:v}})}).then(n=>n)),h=async()=>{let n=await L();if(n.ok){let E=await n.json(),C=encodeURI(E.encr);te("/document/"+C)}else alert("an error has occured")};function y(n){Y.call(this,o,n)}function j(){b=this.value,s(1,b)}function A(){v=this.value,s(0,v)}function i(){l=this.value,s(2,l)}return[v,b,l,h,y,j,A,i]}class ie extends z{constructor(t){super();J(this,t,le,ae,X,{})}}export{ie as default};