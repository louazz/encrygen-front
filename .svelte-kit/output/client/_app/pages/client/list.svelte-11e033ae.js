import{S as lt,i as ot,s as nt,e as s,t as k,k as D,c as h,a as c,h as H,d as n,m as y,b as I,g as Z,F as t,M as rt,_ as st,j as P,G as x,$ as ht,K as tt}from"../../chunks/vendor-b1e65c03.js";import{t as ct,m as it}from"../../chunks/useToken-a1248fbf.js";function et(o,a,d){const i=o.slice();return i[3]=a[d],i}function at(o){let a,d,i,_=o[3]._id+"",A,p,v,m=o[3].name+"",N,G,f,g=o[3].postcode+"",S,O,E,b,q,w,z,C,R,F,K,L;return{c(){a=s("tr"),d=s("td"),i=s("strong"),A=k(_),p=D(),v=s("td"),N=k(m),G=D(),f=s("td"),S=k(g),O=D(),E=s("td"),b=s("a"),q=k("Edit"),z=D(),C=s("a"),R=k("Delete"),F=D(),this.h()},l(u){a=h(u,"TR",{});var e=c(a);d=h(e,"TD",{});var r=c(d);i=h(r,"STRONG",{});var T=c(i);A=H(T,_),T.forEach(n),r.forEach(n),p=y(e),v=h(e,"TD",{});var l=c(v);N=H(l,m),l.forEach(n),G=y(e),f=h(e,"TD",{});var j=c(f);S=H(j,g),j.forEach(n),O=y(e),E=h(e,"TD",{});var M=c(E);b=h(M,"A",{href:!0});var Y=c(b);q=H(Y,"Edit"),Y.forEach(n),z=y(M),C=h(M,"A",{});var $=c(C);R=H($,"Delete"),$.forEach(n),M.forEach(n),F=y(e),e.forEach(n),this.h()},h(){I(b,"href",w="/client/"+o[3]._id)},m(u,e){Z(u,a,e),t(a,d),t(d,i),t(i,A),t(a,p),t(a,v),t(v,N),t(a,G),t(a,f),t(f,S),t(a,O),t(a,E),t(E,b),t(b,q),t(E,z),t(E,C),t(C,R),t(a,F),K||(L=rt(C,"click",function(){st(o[1](o[3]._id))&&o[1](o[3]._id).apply(this,arguments)}),K=!0)},p(u,e){o=u,e&1&&_!==(_=o[3]._id+"")&&P(A,_),e&1&&m!==(m=o[3].name+"")&&P(N,m),e&1&&g!==(g=o[3].postcode+"")&&P(S,g),e&1&&w!==(w="/client/"+o[3]._id)&&I(b,"href",w)},d(u){u&&n(a),K=!1,L()}}}function dt(o){let a,d,i,_,A,p,v,m,N,G,f,g,S,O,E,b,q,w,z,C,R,F,K,L,u=o[0],e=[];for(let r=0;r<u.length;r+=1)e[r]=at(et(o,u,r));return{c(){a=s("table"),d=s("thead"),i=s("tr"),_=s("th"),A=k("Client"),p=D(),v=s("th"),m=s("a"),N=k("New"),G=D(),f=s("tr"),g=s("th"),S=k("id"),O=D(),E=s("th"),b=k("name"),q=D(),w=s("th"),z=k("postcode"),C=D(),R=s("th"),F=k("action"),K=D(),L=s("tbody");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){a=h(r,"TABLE",{class:!0});var T=c(a);d=h(T,"THEAD",{});var l=c(d);i=h(l,"TR",{});var j=c(i);_=h(j,"TH",{colspan:!0});var M=c(_);A=H(M,"Client"),M.forEach(n),p=y(j),v=h(j,"TH",{});var Y=c(v);m=h(Y,"A",{href:!0});var $=c(m);N=H($,"New"),$.forEach(n),Y.forEach(n),j.forEach(n),G=y(l),f=h(l,"TR",{});var B=c(f);g=h(B,"TH",{});var Q=c(g);S=H(Q,"id"),Q.forEach(n),O=y(B),E=h(B,"TH",{});var U=c(E);b=H(U,"name"),U.forEach(n),q=y(B),w=h(B,"TH",{});var V=c(w);z=H(V,"postcode"),V.forEach(n),C=y(B),R=h(B,"TH",{});var W=c(R);F=H(W,"action"),W.forEach(n),B.forEach(n),l.forEach(n),K=y(T),L=h(T,"TBODY",{});var X=c(L);for(let J=0;J<e.length;J+=1)e[J].l(X);X.forEach(n),T.forEach(n),this.h()},h(){I(_,"colspan","3"),I(m,"href","/client/new"),I(a,"class","u-full-width")},m(r,T){Z(r,a,T),t(a,d),t(d,i),t(i,_),t(_,A),t(i,p),t(i,v),t(v,m),t(m,N),t(d,G),t(d,f),t(f,g),t(g,S),t(f,O),t(f,E),t(E,b),t(f,q),t(f,w),t(w,z),t(f,C),t(f,R),t(R,F),t(a,K),t(a,L);for(let l=0;l<e.length;l+=1)e[l].m(L,null)},p(r,[T]){if(T&3){u=r[0];let l;for(l=0;l<u.length;l+=1){const j=et(r,u,l);e[l]?e[l].p(j,T):(e[l]=at(j),e[l].c(),e[l].m(L,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=u.length}},i:x,o:x,d(r){r&&n(a),ht(e,r)}}}function ft(o,a,d){let i,_;tt(o,ct,p=>d(2,i=p)),tt(o,it,p=>d(0,_=p));async function A(p){return await fetch("https://backend.encrygen.co.uk/api/clients/delete/"+p,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Token "+i}}).then(v=>{location.reload()})}return[_,A]}class pt extends lt{constructor(a){super();ot(this,a,ft,dt,nt,{})}}export{pt as default};