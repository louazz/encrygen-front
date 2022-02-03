import{S as ft,i as ct,s as _t,e as h,t as T,k as D,c as u,a as f,h as b,d as o,m as A,b as B,g as rt,F as t,M as nt,L as X,Z as ot,j as V,O as pt,G as st,_ as mt,K as it}from"../../chunks/vendor-022b7721.js";import{e as $,l as ht}from"../../chunks/useToken-04409780.js";function ut(e,l,d){const s=e.slice();return s[7]=l[d],s[8]=l,s[9]=d,s}function dt(e){let l,d,s,v=e[7]._id+"",p,y,g,L=e[7].name+"",O,m,_,n=e[7].price+"",R,E,G,P,c,K,k,j,M,w,S,U,C,Y,Z;function I(){e[4].call(c,e[8],e[9])}return{c(){l=h("tr"),d=h("td"),s=h("strong"),p=T(v),y=D(),g=h("td"),O=T(L),m=D(),_=h("td"),R=T(n),E=T(" \xA3"),G=D(),P=h("td"),c=h("input"),K=D(),k=h("td"),j=h("a"),M=T("add"),w=D(),S=h("a"),U=T("remove"),C=D(),this.h()},l(q){l=u(q,"TR",{});var a=f(l);d=u(a,"TD",{});var i=f(d);s=u(i,"STRONG",{});var H=f(s);p=b(H,v),H.forEach(o),i.forEach(o),y=A(a),g=u(a,"TD",{});var r=f(g);O=b(r,L),r.forEach(o),m=A(a),_=u(a,"TD",{});var z=f(_);R=b(z,n),E=b(z," \xA3"),z.forEach(o),G=A(a),P=u(a,"TD",{});var J=f(P);c=u(J,"INPUT",{type:!0,id:!0,name:!0,minlength:!0,maxlength:!0,size:!0}),J.forEach(o),K=A(a),k=u(a,"TD",{});var F=f(k);j=u(F,"A",{role:!0,href:!0});var N=f(j);M=b(N,"add"),N.forEach(o),w=A(F),S=u(F,"A",{href:!0});var Q=f(S);U=b(Q,"remove"),Q.forEach(o),F.forEach(o),C=A(a),a.forEach(o),this.h()},h(){B(c,"type","text"),B(c,"id","name"),B(c,"name","name"),c.required=!0,B(c,"minlength","4"),B(c,"maxlength","5"),B(c,"size","2"),B(j,"role","button"),B(j,"href","#"),B(S,"href","#")},m(q,a){rt(q,l,a),t(l,d),t(d,s),t(s,p),t(l,y),t(l,g),t(g,O),t(l,m),t(l,_),t(_,R),t(_,E),t(l,G),t(l,P),t(P,c),nt(c,e[7].quantity),t(l,K),t(l,k),t(k,j),t(j,M),t(k,w),t(k,S),t(S,U),t(l,C),Y||(Z=[X(c,"input",I),X(j,"click",function(){ot(e[2](e[7]._id,e[7].quantity,e[7].price))&&e[2](e[7]._id,e[7].quantity,e[7].price).apply(this,arguments)}),X(S,"click",function(){ot(e[3](e[7]._id,e[7].quantity,e[7].price))&&e[3](e[7]._id,e[7].quantity,e[7].price).apply(this,arguments)})],Y=!0)},p(q,a){e=q,a&2&&v!==(v=e[7]._id+"")&&V(p,v),a&2&&L!==(L=e[7].name+"")&&V(O,L),a&2&&n!==(n=e[7].price+"")&&V(R,n),a&2&&c.value!==e[7].quantity&&nt(c,e[7].quantity)},d(q){q&&o(l),Y=!1,pt(Z)}}}function vt(e){let l,d,s,v,p,y,g,L,O,m,_,n,R,E,G,P,c,K,k,j,M,w,S,U,C,Y,Z,I,q=e[1],a=[];for(let i=0;i<q.length;i+=1)a[i]=dt(ut(e,q,i));return{c(){l=h("table"),d=h("thead"),s=h("tr"),v=h("th"),p=T("Product"),y=D(),g=h("th"),L=T("Total: "),O=T(e[0]),m=T(" \xA3"),_=D(),n=h("tr"),R=h("th"),E=T("id"),G=D(),P=h("th"),c=T("name"),K=D(),k=h("th"),j=T("price"),M=D(),w=h("th"),S=T("quantity"),U=D(),C=h("th"),Y=T("action"),Z=D(),I=h("tbody");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){l=u(i,"TABLE",{class:!0});var H=f(l);d=u(H,"THEAD",{});var r=f(d);s=u(r,"TR",{});var z=f(s);v=u(z,"TH",{colspan:!0});var J=f(v);p=b(J,"Product"),J.forEach(o),y=A(z),g=u(z,"TH",{});var F=f(g);L=b(F,"Total: "),O=b(F,e[0]),m=b(F," \xA3"),F.forEach(o),z.forEach(o),_=A(r),n=u(r,"TR",{});var N=f(n);R=u(N,"TH",{});var Q=f(R);E=b(Q,"id"),Q.forEach(o),G=A(N),P=u(N,"TH",{});var x=f(P);c=b(x,"name"),x.forEach(o),K=A(N),k=u(N,"TH",{});var tt=f(k);j=b(tt,"price"),tt.forEach(o),M=A(N),w=u(N,"TH",{});var et=f(w);S=b(et,"quantity"),et.forEach(o),U=A(N),C=u(N,"TH",{});var at=f(C);Y=b(at,"action"),at.forEach(o),N.forEach(o),r.forEach(o),Z=A(H),I=u(H,"TBODY",{});var lt=f(I);for(let W=0;W<a.length;W+=1)a[W].l(lt);lt.forEach(o),H.forEach(o),this.h()},h(){B(v,"colspan","4"),B(l,"class","u-full-width")},m(i,H){rt(i,l,H),t(l,d),t(d,s),t(s,v),t(v,p),t(s,y),t(s,g),t(g,L),t(g,O),t(g,m),t(d,_),t(d,n),t(n,R),t(R,E),t(n,G),t(n,P),t(P,c),t(n,K),t(n,k),t(k,j),t(n,M),t(n,w),t(w,S),t(n,U),t(n,C),t(C,Y),t(l,Z),t(l,I);for(let r=0;r<a.length;r+=1)a[r].m(I,null)},p(i,[H]){if(H&1&&V(O,i[0]),H&14){q=i[1];let r;for(r=0;r<q.length;r+=1){const z=ut(i,q,r);a[r]?a[r].p(z,H):(a[r]=dt(z),a[r].c(),a[r].m(I,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=q.length}},i:st,o:st,d(i){i&&o(l),mt(a,i)}}}function gt(e,l,d){let s,v;it(e,$,m=>d(6,s=m)),it(e,ht,m=>d(1,v=m));let p=[],y=0;function g(m,_,n){p.push({product:m,quantity:Number(_)}),$.set(p),d(0,y=y+Number(n)*Number(_)),console.log(s)}function L(m,_,n){for(var R in p){var E=p[R];console.log(E),E.product==m&&(console.log(E.product),E.quantity=E.quantity-Number(_),E.quantity==0&&(console.log(0),p=p.filter(G=>G!==E),console.log(p)))}$.set(p),d(0,y=y-Number(n)*Number(_)),console.log(s)}function O(m,_){m[_].quantity=this.value,ht.set(v)}return[y,v,g,L,O]}class bt extends ft{constructor(l){super();ct(this,l,gt,vt,_t,{})}}export{bt as default};
