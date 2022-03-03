import{S as Q,i as x,s as W,e as m,k as w,t as S,c as h,m as T,a as E,h as U,d as p,b as d,g as I,F as u,N as D,M as A,O as X,G as L,P as Y,K as F,v as Z,Q as $}from"../../chunks/vendor-b1e65c03.js";import{p as ee}from"../../chunks/stores-5cc93305.js";import{t as te,i as re}from"../../chunks/useToken-a1248fbf.js";import{g as K}from"../../chunks/navigation-bd39ff07.js";import"../../chunks/singletons-a6a7384f.js";function se(i){let e,a,l,t;return{c(){e=m("button"),a=S("Edit"),this.h()},l(r){e=h(r,"BUTTON",{class:!0});var s=E(e);a=U(s,"Edit"),s.forEach(p),this.h()},h(){d(e,"class","button-secondary")},m(r,s){I(r,e,s),u(e,a),l||(t=A(e,"click",i[4]),l=!0)},p:L,d(r){r&&p(e),l=!1,t()}}}function ne(i){let e,a,l,t;return{c(){e=m("button"),a=S("Add"),this.h()},l(r){e=h(r,"BUTTON",{class:!0});var s=E(e);a=U(s,"Add"),s.forEach(p),this.h()},h(){d(e,"class","button-primary")},m(r,s){I(r,e,s),u(e,a),l||(t=A(e,"click",i[3]),l=!0)},p:L,d(r){r&&p(e),l=!1,t()}}}function oe(i){let e,a,l,t,r,s,k,j,f,N,y,v,P,n,c,z,M,R,V,G;function J(o,_){return o[2].params.single=="new"?ne:se}let B=J(i),b=B(i);return{c(){e=m("br"),a=w(),l=m("form"),t=m("div"),r=m("div"),s=m("label"),k=S("Name"),j=w(),f=m("input"),N=w(),y=m("div"),v=m("label"),P=S("Price"),n=w(),c=m("input"),z=w(),M=m("br"),R=w(),b.c(),this.h()},l(o){e=h(o,"BR",{}),a=T(o),l=h(o,"FORM",{});var _=E(l);t=h(_,"DIV",{class:!0});var g=E(t);r=h(g,"DIV",{class:!0});var O=E(r);s=h(O,"LABEL",{for:!0});var q=E(s);k=U(q,"Name"),q.forEach(p),j=T(O),f=h(O,"INPUT",{class:!0,type:!0,id:!0}),O.forEach(p),N=T(g),y=h(g,"DIV",{class:!0});var C=E(y);v=h(C,"LABEL",{for:!0});var H=E(v);P=U(H,"Price"),H.forEach(p),n=T(C),c=h(C,"INPUT",{class:!0,type:!0,id:!0}),C.forEach(p),z=T(g),M=h(g,"BR",{}),R=T(g),b.l(g),g.forEach(p),_.forEach(p),this.h()},h(){d(s,"for","exampleEmailInput"),d(f,"class","form-control form-control-solid"),d(f,"type","text"),d(f,"id","exampleEmailInput"),d(r,"class","six columns"),d(v,"for","exampleEmailInput"),d(c,"class","form-control form-control-solid"),d(c,"type","text"),d(c,"id","exampleEmailInput"),d(y,"class","six columns"),d(t,"class","row")},m(o,_){I(o,e,_),I(o,a,_),I(o,l,_),u(l,t),u(t,r),u(r,s),u(s,k),u(r,j),u(r,f),D(f,i[0]),u(t,N),u(t,y),u(y,v),u(v,P),u(y,n),u(y,c),D(c,i[1]),u(t,z),u(t,M),u(t,R),b.m(t,null),V||(G=[A(f,"input",i[6]),A(c,"input",i[7]),A(l,"submit",X(i[5]))],V=!0)},p(o,[_]){_&1&&f.value!==o[0]&&D(f,o[0]),_&2&&c.value!==o[1]&&D(c,o[1]),B===(B=J(o))&&b?b.p(o,_):(b.d(1),b=B(o),b&&(b.c(),b.m(t,null)))},i:L,o:L,d(o){o&&p(e),o&&p(a),o&&p(l),b.d(),V=!1,Y(G)}}}function ae(i,e,a){let l,t,r;F(i,te,n=>a(8,l=n)),F(i,ee,n=>a(2,t=n)),F(i,re,n=>a(9,r=n));let s="",k="";async function j(){const n=await self.fetch("https://backend.encrygen.co.uk/api/products/new",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+l},body:JSON.stringify({product:{name:s,price:k,user:r}})});if(n.ok)return alert("product added successfully"),K("/product"),n.json();throw alert("internal server error or wrong inputs type"),new Error("server error")}async function f(){const n=await self.fetch("https://backend.encrygen.co.uk/api/products/update/"+t.params.single,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Token "+l},body:JSON.stringify({product:{name:s,price:Number(k),user:r}})});if(n.ok)return alert("product data updated successfully"),K("/product"),n.json();throw alert("internal server error or wrong inputs type"),new Error("server error")}async function N(){if(t.params.single!="new")return await fetch("https://backend.encrygen.co.uk/api/products/show/"+t.params.single,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token "+l}}).then(n=>n)}Z(async()=>{let n=await N();if(n.ok){let c=await n.json();console.log(n.body),a(0,s=c.name),a(1,k=c.price)}else alert("wrong client id")});function y(n){$.call(this,i,n)}function v(){s=this.value,a(0,s)}function P(){k=this.value,a(1,k)}return[s,k,t,j,f,y,v,P]}class de extends Q{constructor(e){super();x(this,e,ae,oe,W,{})}}export{de as default};