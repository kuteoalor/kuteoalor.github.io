((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,C={
bV1(){var y=new Float64Array(4)
y[3]=1
return new C.x2(y)},
x2:function x2(d){this.a=d}}
B=c[0]
A=c[2]
C=a.updateHolder(c[49],C)
C.x2.prototype={
co(d){var y=d.a,x=this.a,w=y[0]
x.$flags&2&&B.y(x)
x[0]=w
x[1]=y[1]
x[2]=y[2]
x[3]=y[3]},
aBO(d){var y,x,w,v,u,t=d.a,s=t[0],r=t[4],q=t[8],p=0+s+r+q
if(p>0){y=Math.sqrt(p+1)
s=this.a
s.$flags&2&&B.y(s)
s[3]=y*0.5
y=0.5/y
s[0]=(t[5]-t[7])*y
s[1]=(t[6]-t[2])*y
s[2]=(t[1]-t[3])*y}else{if(s<r)x=r<q?2:1
else x=s<q?2:0
w=(x+1)%3
v=(x+2)%3
s=x*3
r=w*3
q=v*3
y=Math.sqrt(t[s+x]-t[r+w]-t[q+v]+1)
u=this.a
u.$flags&2&&B.y(u)
u[x]=y*0.5
y=0.5/y
u[3]=(t[r+v]-t[q+w])*y
u[w]=(t[s+w]+t[r+x])*y
u[v]=(t[s+v]+t[q+x])*y}},
Kb(d){var y,x,w,v=Math.sqrt(this.gJR())
if(v===0)return 0
y=1/v
x=this.a
w=x[0]
x.$flags&2&&B.y(x)
x[0]=w*y
x[1]=x[1]*y
x[2]=x[2]*y
x[3]=x[3]*y
return v},
gJR(){var y=this.a,x=y[0],w=y[1],v=y[2],u=y[3]
return x*x+w*w+v*v+u*u},
gB(d){var y=this.a,x=y[0],w=y[1],v=y[2],u=y[3]
return Math.sqrt(x*x+w*w+v*v+u*u)},
qT(d){var y=new Float64Array(4),x=new C.x2(y)
x.co(this)
y[3]=y[3]*d
y[2]=y[2]*d
y[1]=y[1]*d
y[0]=y[0]*d
return x},
a7(a4,a5){var y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=i[3],g=i[2],f=i[1],e=i[0],d=a5.gbvr(),a0=d[3],a1=d[2],a2=d[1],a3=d[0]
i=A.e.a7(h,a3)
y=A.e.a7(e,a0)
x=A.e.a7(f,a1)
w=A.e.a7(g,a2)
v=A.e.a7(h,a2)
u=A.e.a7(f,a0)
t=A.e.a7(g,a3)
s=A.e.a7(e,a1)
r=A.e.a7(h,a1)
q=A.e.a7(g,a0)
p=A.e.a7(e,a2)
o=A.e.a7(f,a3)
n=A.e.a7(h,a0)
m=A.e.a7(e,a3)
l=A.e.a7(f,a2)
k=A.e.a7(g,a1)
j=new Float64Array(4)
j[0]=i+y+x-w
j[1]=v+u+t-s
j[2]=r+q+p-o
j[3]=n-m-l-k
return new C.x2(j)},
l(d,e){var y,x,w
if(e==null)return!1
if(e instanceof C.x2){y=this.a
x=y[3]
w=e.a
y=x===w[3]&&y[2]===w[2]&&y[1]===w[1]&&y[0]===w[0]}else y=!1
return y},
gA(d){return B.b4(this.a)},
am(d,e){var y,x=new Float64Array(4),w=new C.x2(x)
w.co(this)
y=e.a
x[0]=x[0]+y[0]
x[1]=x[1]+y[1]
x[2]=x[2]+y[2]
x[3]=x[3]+y[3]
return w},
a9(d,e){var y,x=new Float64Array(4),w=new C.x2(x)
w.co(this)
y=e.a
x[0]=x[0]-y[0]
x[1]=x[1]-y[1]
x[2]=x[2]-y[2]
x[3]=x[3]-y[3]
return w},
i(d,e){return this.a[e]},
h(d,e,f){var y=this.a
y.$flags&2&&B.y(y)
y[e]=f},
k(d){var y=this.a
return B.j(y[0])+", "+B.j(y[1])+", "+B.j(y[2])+" @ "+B.j(y[3])}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(C.x2,B.I)})()};
(a=>{a["C+aGHm24xDGDNdXLh7nC+QmyuAA="]=a.current})($__dart_deferred_initializers__);