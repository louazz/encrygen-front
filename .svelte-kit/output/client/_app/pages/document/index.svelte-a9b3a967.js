import{S as z,i as J,s as Q,e as p,t as B,k as g,c as d,a as k,h as K,d as _,m as I,b as a,g as X,F as e,N as w,M as N,O as H,G,P as W,K as q,Q as Y}from"../../chunks/vendor-b1e65c03.js";import{i as Z,t as $,a as ee}from"../../chunks/useToken-a1248fbf.js";import{g as te}from"../../chunks/navigation-bd39ff07.js";import"../../chunks/singletons-a6a7384f.js";function ae(o){let t,s,u,f,b,v,l,j,h,y,A,L,i,n,E,C,S,m,U,T,x,M;return{c(){t=p("form"),s=p("div"),u=p("div"),f=p("label"),b=B("Title"),v=g(),l=p("input"),j=g(),h=p("div"),y=p("label"),A=B("Key"),L=g(),i=p("input"),n=g(),E=p("label"),C=B("Content"),S=g(),m=p("textarea"),U=g(),T=p("input"),this.h()},l(c){t=d(c,"FORM",{});var r=k(t);s=d(r,"DIV",{class:!0});var P=k(s);u=d(P,"DIV",{class:!0});var D=k(u);f=d(D,"LABEL",{for:!0});var R=k(f);b=K(R,"Title"),R.forEach(_),v=I(D),l=d(D,"INPUT",{class:!0,type:!0,placeholder:!0}),D.forEach(_),j=I(P),h=d(P,"DIV",{class:!0});var O=k(h);y=d(O,"LABEL",{for:!0});var V=k(y);A=K(V,"Key"),V.forEach(_),L=I(O),i=d(O,"INPUT",{class:!0,type:!0,placeholder:!0}),O.forEach(_),P.forEach(_),n=I(r),E=d(r,"LABEL",{for:!0});var F=k(E);C=K(F,"Content"),F.forEach(_),S=I(r),m=d(r,"TEXTAREA",{class:!0,placeholder:!0}),k(m).forEach(_),U=I(r),T=d(r,"INPUT",{class:!0,type:!0}),r.forEach(_),this.h()},h(){a(f,"for","exampleEmailInput"),a(l,"class","u-full-width"),a(l,"type","text"),a(l,"placeholder","Title of the document"),a(u,"class","six columns"),a(y,"for","exampleEmailInput"),a(i,"class","u-full-width"),a(i,"type","text"),a(i,"placeholder","Encryption key (secret)"),a(h,"class","six columns"),a(s,"class","row"),a(E,"for","exampleMessage"),a(m,"class","u-full-width"),a(m,"placeholder","Content..."),a(T,"class","button-primary"),a(T,"type","submit"),T.value="Generate"},m(c,r){X(c,t,r),e(t,s),e(s,u),e(u,f),e(f,b),e(u,v),e(u,l),w(l,o[1]),e(s,j),e(s,h),e(h,y),e(y,A),e(h,L),e(h,i),w(i,o[0]),e(t,n),e(t,E),e(E,C),e(t,S),e(t,m),w(m,o[2]),e(t,U),e(t,T),x||(M=[N(l,"input",o[5]),N(i,"input",o[6]),N(m,"input",o[7]),N(T,"click",o[3]),N(t,"submit",H(o[4]))],x=!0)},p(c,[r]){r&2&&l.value!==c[1]&&w(l,c[1]),r&1&&i.value!==c[0]&&w(i,c[0]),r&4&&w(m,c[2])},i:G,o:G,d(c){c&&_(t),x=!1,W(M)}}}function le(o,t,s){let u,f;q(o,Z,n=>s(8,u=n)),q(o,$,n=>s(9,f=n));let b="",v="",l="";const j=async()=>(console.log(ee),await fetch("https://backend.encrygen.co.uk/api/docs/new",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+f},body:JSON.stringify({doc:{title:v,user:u,content:l,encr:null,key:b}})}).then(n=>n)),h=async()=>{let n=await j();if(n.ok){let E=await n.json(),C=encodeURI(E.encr);te("/document/"+C)}else alert("an error has occured")};function y(n){Y.call(this,o,n)}function A(){v=this.value,s(1,v)}function L(){b=this.value,s(0,b)}function i(){l=this.value,s(2,l)}return[b,v,l,h,y,A,L,i]}class ie extends z{constructor(t){super();J(this,t,le,ae,Q,{})}}export{ie as default};