import{S as ft,i as ct,s as _t,e as h,t as T,k as D,c as u,a as f,h as b,d as o,m as A,b as L,g as rt,F as t,N as nt,M as Z,_ as ot,j as W,P as pt,G as st,$ as mt,K as it}from"../../chunks/vendor-b1e65c03.js";import{e as $,l as ht}from"../../chunks/useToken-a1248fbf.js";function ut(e,l,d){const s=e.slice();return s[7]=l[d],s[8]=l,s[9]=d,s}function dt(e){let l,d,s,v=e[7]._id+"",p,y,g,j=e[7].name+"",S,m,_,n=e[7].price+"",P,E,O,z,c,K,N,R,M,w,B,U,C,Y,J;function I(){e[4].call(c,e[8],e[9])}return{c(){l=h("tr"),d=h("td"),s=h("strong"),p=T(v),y=D(),g=h("td"),S=T(j),m=D(),_=h("td"),P=T(n),E=T(" \xA3"),O=D(),z=h("td"),c=h("input"),K=D(),N=h("td"),R=h("a"),M=T("add"),w=D(),B=h("a"),U=T("remove"),C=D(),this.h()},l(q){l=u(q,"TR",{});var a=f(l);d=u(a,"TD",{});var i=f(d);s=u(i,"STRONG",{});var k=f(s);p=b(k,v),k.forEach(o),i.forEach(o),y=A(a),g=u(a,"TD",{});var r=f(g);S=b(r,j),r.forEach(o),m=A(a),_=u(a,"TD",{});var G=f(_);P=b(G,n),E=b(G," \xA3"),G.forEach(o),O=A(a),z=u(a,"TD",{});var Q=f(z);c=u(Q,"INPUT",{type:!0,id:!0,name:!0,minlength:!0,maxlength:!0,size:!0}),Q.forEach(o),K=A(a),N=u(a,"TD",{});var F=f(N);R=u(F,"A",{role:!0,href:!0});var H=f(R);M=b(H,"add"),H.forEach(o),w=A(F),B=u(F,"A",{href:!0});var V=f(B);U=b(V,"remove"),V.forEach(o),F.forEach(o),C=A(a),a.forEach(o),this.h()},h(){L(c,"type","text"),L(c,"id","name"),L(c,"name","name"),c.required=!0,L(c,"minlength","4"),L(c,"maxlength","5"),L(c,"size","2"),L(R,"role","button"),L(R,"href","#"),L(B,"href","#")},m(q,a){rt(q,l,a),t(l,d),t(d,s),t(s,p),t(l,y),t(l,g),t(g,S),t(l,m),t(l,_),t(_,P),t(_,E),t(l,O),t(l,z),t(z,c),nt(c,e[7].quantity),t(l,K),t(l,N),t(N,R),t(R,M),t(N,w),t(N,B),t(B,U),t(l,C),Y||(J=[Z(c,"input",I),Z(R,"click",function(){ot(e[2](e[7]._id,e[7].quantity,e[7].price))&&e[2](e[7]._id,e[7].quantity,e[7].price).apply(this,arguments)}),Z(B,"click",function(){ot(e[3](e[7]._id,e[7].quantity,e[7].price))&&e[3](e[7]._id,e[7].quantity,e[7].price).apply(this,arguments)})],Y=!0)},p(q,a){e=q,a&2&&v!==(v=e[7]._id+"")&&W(p,v),a&2&&j!==(j=e[7].name+"")&&W(S,j),a&2&&n!==(n=e[7].price+"")&&W(P,n),a&2&&c.value!==e[7].quantity&&nt(c,e[7].quantity)},d(q){q&&o(l),Y=!1,pt(J)}}}function vt(e){let l,d,s,v,p,y,g,j,S,m,_,n,P,E,O,z,c,K,N,R,M,w,B,U,C,Y,J,I,q=e[1],a=[];for(let i=0;i<q.length;i+=1)a[i]=dt(ut(e,q,i));return{c(){l=h("table"),d=h("thead"),s=h("tr"),v=h("th"),p=T("Product"),y=D(),g=h("th"),j=T("Total: "),S=T(e[0]),m=T(" \xA3"),_=D(),n=h("tr"),P=h("th"),E=T("id"),O=D(),z=h("th"),c=T("name"),K=D(),N=h("th"),R=T("price"),M=D(),w=h("th"),B=T("quantity"),U=D(),C=h("th"),Y=T("action"),J=D(),I=h("tbody");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){l=u(i,"TABLE",{class:!0});var k=f(l);d=u(k,"THEAD",{});var r=f(d);s=u(r,"TR",{});var G=f(s);v=u(G,"TH",{colspan:!0});var Q=f(v);p=b(Q,"Product"),Q.forEach(o),y=A(G),g=u(G,"TH",{});var F=f(g);j=b(F,"Total: "),S=b(F,e[0]),m=b(F," \xA3"),F.forEach(o),G.forEach(o),_=A(r),n=u(r,"TR",{});var H=f(n);P=u(H,"TH",{});var V=f(P);E=b(V,"id"),V.forEach(o),O=A(H),z=u(H,"TH",{});var x=f(z);c=b(x,"name"),x.forEach(o),K=A(H),N=u(H,"TH",{});var tt=f(N);R=b(tt,"price"),tt.forEach(o),M=A(H),w=u(H,"TH",{});var et=f(w);B=b(et,"quantity"),et.forEach(o),U=A(H),C=u(H,"TH",{});var at=f(C);Y=b(at,"action"),at.forEach(o),H.forEach(o),r.forEach(o),J=A(k),I=u(k,"TBODY",{});var lt=f(I);for(let X=0;X<a.length;X+=1)a[X].l(lt);lt.forEach(o),k.forEach(o),this.h()},h(){L(v,"colspan","4"),L(l,"class","u-full-width")},m(i,k){rt(i,l,k),t(l,d),t(d,s),t(s,v),t(v,p),t(s,y),t(s,g),t(g,j),t(g,S),t(g,m),t(d,_),t(d,n),t(n,P),t(P,E),t(n,O),t(n,z),t(z,c),t(n,K),t(n,N),t(N,R),t(n,M),t(n,w),t(w,B),t(n,U),t(n,C),t(C,Y),t(l,J),t(l,I);for(let r=0;r<a.length;r+=1)a[r].m(I,null)},p(i,[k]){if(k&1&&W(S,i[0]),k&14){q=i[1];let r;for(r=0;r<q.length;r+=1){const G=ut(i,q,r);a[r]?a[r].p(G,k):(a[r]=dt(G),a[r].c(),a[r].m(I,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=q.length}},i:st,o:st,d(i){i&&o(l),mt(a,i)}}}function gt(e,l,d){let s,v;it(e,$,m=>d(6,s=m)),it(e,ht,m=>d(1,v=m));let p=[],y=0;function g(m,_,n){p.push({product:m,quantity:Number(_)}),$.set(p),d(0,y=y+Number(n)*Number(_)),console.log(s)}function j(m,_,n){for(var P in p){var E=p[P];console.log(E),E.product==m&&(console.log(E.product),E.quantity=E.quantity-Number(_),E.quantity==0&&(console.log(0),p=p.filter(O=>O!==E),console.log(p)))}$.set(p),d(0,y=y-Number(n)*Number(_)),console.log(s)}function S(m,_){m[_].quantity=this.value,ht.set(v)}return[y,v,g,j,S]}class bt extends ft{constructor(l){super();ct(this,l,gt,vt,_t,{})}}export{bt as default};