((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Sk(d,e,f,g,h,i,j){var x,w,v,u,t,s,r
if(d==null)return""
else if(d==="+")return d
if(j===".")d=B.aL(d,",","")
else if(j===","){w=A.c8p(d)
if(w!=null)d=B.aL(d,w,"%FRAC%")
v=B.aL(d,".","")
d=B.aL(v,"%FRAC%",".")}u=A.cAg(d)
t=f?$.bYM():$.bYZ()
s=g?$.cej():t
x=B.qh(d,s,new A.bRg(),new A.bRh())
if(u&&g)x="0."+B.j(x)
if(J.b1(x)===0)return x
try{x=A.cxe(x,e,g,h)}catch(r){}return x},
cxe(d,e,f,g){var x,w,v,u,t,s=B.b([],y.d)
if(C.d.bA(d,"."))if(f)s.push("0")
else return"0"
for(x=d.length,w=!f,v=!1,u=0;u<x;++u){t=d[u]
if(!A.bQB(t,!0))if(t==="-"){if(u>0)continue}else if(t==="."){if(w)break
else if(v)continue
v=!0}s.push(t)}if(C.b.p(s,".")){while(!0){x=s.length===0
if(!(!x&&s[0]==="0"))break
C.b.ea(s,0)}if(x)return"0"
else if(s[0]===".")C.b.cM(s,0,"0")}else if(!e)for(;s.length>1;)if(C.b.ga3(s)==="0")C.b.ea(s,0)
else break
return C.b.eQ(s)},
cAg(d){var x,w,v,u
for(x=d.length,w=0;v=!1,w<x;++w){u=d[w]
if(A.bQB(u,!1))break
if(u==="."||u===","){v=!0
break}}return v},
c8p(d){var x,w,v,u,t=C.d.n7(d,$.ceU())
if(t<0)return null
x=d[t]
for(w=d.length,v=0,u=0;u<w;++u)if(d[u]===x)++v
if(v===1)return x
return null},
bQB(d,e){var x=d.length
x=x===0||x>1
if(x)return!1
if(e)return $.bYZ().X_(d)!=null
return $.bYM().X_(d)!=null},
bRg:function bRg(){},
bRh:function bRh(){}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
var z=a.updateTypes([])
A.bRg.prototype={
$1(d){var x=d.vn(0)
x.toString
return x},
$S:49}
A.bRh.prototype={
$1(d){return""},
$S:21};(function inheritance(){var x=a.inheritMany
x(B.dJ,[A.bRg,A.bRh])})()
var y={d:B.Q("t<e>")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cIM","bYM",()=>B.aH("[-0-9]+",!0,!1,!1))
x($,"cJF","bYZ",()=>B.aH("[0-9]+",!0,!1,!1))
x($,"cIN","cej",()=>B.aH("[-0-9]+(\\.[0-9]+)?",!0,!1,!1))
x($,"cJG","ceU",()=>B.aH("[,.]",!0,!1,!1))})()};
(a=>{a["ek3EErbwNK5r+Q/u4K4QSpd7jjk="]=a.current})($__dart_deferred_initializers__);