import{S as te,i as ae,s as re,e as d,t as w,k as D,c as f,a as _,h as A,d as l,m as H,b as B,g as Z,F as e,L as M,Z as Q,j as W,O as ne,G as X,_ as oe,K as $}from"../../chunks/vendor-022b7721.js";import{t as le,q as se}from"../../chunks/useToken-04409780.js";function x(r,t,u){const s=r.slice();return s[4]=t[u],s}function ee(r){let t,u,s,p=r[4]._id+"",j,L,i,v=new Date(r[4].created_at)+"",g,O,h,m,S,K,E,q,N,I,y,z,T,k,c;return{c(){t=d("tr"),u=d("td"),s=d("strong"),j=w(p),L=D(),i=d("td"),g=w(v),O=D(),h=d("td"),m=d("a"),S=w("Delete"),K=D(),E=d("a"),q=w("View"),I=D(),y=d("a"),z=w("regenerateKey"),T=D(),this.h()},l(a){t=f(a,"TR",{});var o=_(t);u=f(o,"TD",{});var n=_(u);s=f(n,"STRONG",{});var b=_(s);j=A(b,p),b.forEach(l),n.forEach(l),L=H(o),i=f(o,"TD",{});var G=_(i);g=A(G,v),G.forEach(l),O=H(o),h=f(o,"TD",{});var R=_(h);m=f(R,"A",{href:!0});var P=_(m);S=A(P,"Delete"),P.forEach(l),K=H(R),E=f(R,"A",{href:!0});var C=_(E);q=A(C,"View"),C.forEach(l),I=H(R),y=f(R,"A",{href:!0});var U=_(y);z=A(U,"regenerateKey"),U.forEach(l),R.forEach(l),T=H(o),o.forEach(l),this.h()},h(){B(m,"href","#"),B(E,"href",N="/invoice/"+encodeURI(r[4].encr)),B(y,"href","#")},m(a,o){Z(a,t,o),e(t,u),e(u,s),e(s,j),e(t,L),e(t,i),e(i,g),e(t,O),e(t,h),e(h,m),e(m,S),e(h,K),e(h,E),e(E,q),e(h,I),e(h,y),e(y,z),e(t,T),k||(c=[M(m,"click",function(){Q(r[1](r[4]._id))&&r[1](r[4]._id).apply(this,arguments)}),M(y,"click",function(){Q(r[2](r[4]._id))&&r[2](r[4]._id).apply(this,arguments)})],k=!0)},p(a,o){r=a,o&1&&p!==(p=r[4]._id+"")&&W(j,p),o&1&&v!==(v=new Date(r[4].created_at)+"")&&W(g,v),o&1&&N!==(N="/invoice/"+encodeURI(r[4].encr))&&B(E,"href",N)},d(a){a&&l(t),k=!1,ne(c)}}}function ie(r){let t,u,s,p,j,L,i,v,g,O,h,m,S,K,E,q,N,I,y,z,T,k=r[0],c=[];for(let a=0;a<k.length;a+=1)c[a]=ee(x(r,k,a));return{c(){t=d("table"),u=d("thead"),s=d("tr"),p=d("th"),j=w("Invoices"),L=D(),i=d("th"),v=d("a"),g=w("New"),O=D(),h=d("tr"),m=d("th"),S=w("id"),K=D(),E=d("th"),q=w("date"),N=D(),I=d("th"),y=w("action"),z=D(),T=d("tbody");for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){t=f(a,"TABLE",{class:!0});var o=_(t);u=f(o,"THEAD",{});var n=_(u);s=f(n,"TR",{});var b=_(s);p=f(b,"TH",{colspan:!0});var G=_(p);j=A(G,"Invoices"),G.forEach(l),L=H(b),i=f(b,"TH",{});var R=_(i);v=f(R,"A",{href:!0});var P=_(v);g=A(P,"New"),P.forEach(l),R.forEach(l),b.forEach(l),O=H(n),h=f(n,"TR",{});var C=_(h);m=f(C,"TH",{});var U=_(m);S=A(U,"id"),U.forEach(l),K=H(C),E=f(C,"TH",{});var F=_(E);q=A(F,"date"),F.forEach(l),N=H(C),I=f(C,"TH",{});var J=_(I);y=A(J,"action"),J.forEach(l),C.forEach(l),n.forEach(l),z=H(o),T=f(o,"TBODY",{});var Y=_(T);for(let V=0;V<c.length;V+=1)c[V].l(Y);Y.forEach(l),o.forEach(l),this.h()},h(){B(p,"colspan","2"),B(v,"href","/invoice#"),B(t,"class","u-full-width")},m(a,o){Z(a,t,o),e(t,u),e(u,s),e(s,p),e(p,j),e(s,L),e(s,i),e(i,v),e(v,g),e(u,O),e(u,h),e(h,m),e(m,S),e(h,K),e(h,E),e(E,q),e(h,N),e(h,I),e(I,y),e(t,z),e(t,T);for(let n=0;n<c.length;n+=1)c[n].m(T,null)},p(a,[o]){if(o&7){k=a[0];let n;for(n=0;n<k.length;n+=1){const b=x(a,k,n);c[n]?c[n].p(b,o):(c[n]=ee(b),c[n].c(),c[n].m(T,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=k.length}},i:X,o:X,d(a){a&&l(t),oe(c,a)}}}function he(r,t,u){let s,p;return $(r,le,i=>u(3,s=i)),$(r,se,i=>u(0,p=i)),[p,async i=>{await fetch("https://backend.encrygen.co.uk/api/invoices/delete/"+i,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Token "+s}}).then(v=>{alert("Deleted invoice"),location.reload()})},async i=>{let v=prompt("Please enter your new key:");const g=await self.fetch("https://backend.encrygen.co.uk/api/invoices/update/"+i,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Token "+s},body:JSON.stringify({invoice:{key:v}})});if(g.ok)return alert("key has been updated successfully"),location.reload(),g.json();throw alert("internal server error or wrong inputs type"),new Error("server error")}]}class fe extends te{constructor(t){super();ae(this,t,he,ie,re,{})}}export{fe as default};