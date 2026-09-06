"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var f=v(function(w,q){
function j(e,r,s,t,i,L,T){var n,u,a;if(e<=0)return-1;for(n=t,u=T,a=0;a<e;a++){if(r[n]<i[u])return a;n+=s,u+=L}return-1}q.exports=j
});var c=v(function(z,d){
var x=require('@stdlib/strided-base-stride2offset/dist'),m=f();function l(e,r,s,t,i){return m(e,r,s,x(e,s),t,i,x(e,i))}d.exports=l
});var h=v(function(A,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),_=f();R(y,"ndarray",_);p.exports=y
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=h(),o,I=O(E(__dirname,"./native.js"));b(I)?o=g:o=I;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
