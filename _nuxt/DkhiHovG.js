import{d as m,B as h,H as l,n as p,W as e,bf as g,i as f,aG as n,bm as u,af as d,x as b,bn as C,q as _,m as w}from"./CKwEYCqY.js";const I={base:""},W=d;var r,o;const v=n({extend:n(I),...((o=(r=W.uiPro)==null?void 0:r.prose)==null?void 0:o.img)||{}}),B=m({__name:"Img",props:{src:{},alt:{},width:{},height:{},class:{}},setup(i){const s=i,c=h(()=>{var a;if((a=s.src)!=null&&a.startsWith("/")&&!s.src.startsWith("//")){const t=b(C(_().app.baseURL));if(t!=="/"&&!s.src.startsWith(t))return w(t,s.src)}return s.src});return(a,t)=>(f(),l(g(e(u)),{src:c.value,alt:a.alt,width:a.width,height:a.height,class:p(e(v)({class:s.class}))},null,8,["src","alt","width","height","class"]))}}),P=Object.assign(B,{__name:"ProseImg"});export{P as default};
