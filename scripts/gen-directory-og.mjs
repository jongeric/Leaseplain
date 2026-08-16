import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { createElement as h } from "react";
const SIZE = { width: 1200, height: 630 };
function logo(){return h("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none"},
 h("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),
 h("polyline",{points:"14 2 14 8 20 8",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),
 h("line",{x1:"16",y1:"13",x2:"8",y2:"13",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),
 h("line",{x1:"16",y1:"17",x2:"8",y2:"17",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),
 h("polyline",{points:"10 9 9 9 8 9",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}));}
function chip(label){return h("div",{key:label,style:{display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,0.15)",borderRadius:"12px",padding:"12px 20px",color:"white",fontSize:"18px",fontWeight:600}},
 h("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},h("polyline",{points:"20 6 9 17 4 12",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})),
 h("div",{style:{display:"flex"}},label));}
const card=h("div",{style:{background:"linear-gradient(135deg, #1e3a5f 0%, #4f46e5 100%)",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",padding:"60px"}},
 h("div",{style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"32px"}},
  h("div",{style:{width:"72px",height:"72px",background:"rgba(255,255,255,0.15)",borderRadius:"18px",display:"flex",alignItems:"center",justifyContent:"center"}},logo()),
  h("span",{style:{fontSize:"36px",fontWeight:700,color:"white",letterSpacing:"-0.5px"}},"LeasePlain")),
 h("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20px"}},
  h("div",{style:{display:"flex",fontSize:"60px",fontWeight:800,color:"white",textAlign:"center",lineHeight:1.1,letterSpacing:"-1px"}},"Find a Tenant Lawyer"),
  h("div",{style:{display:"flex",fontSize:"60px",fontWeight:800,color:"white",textAlign:"center",lineHeight:1.1,letterSpacing:"-1px"}},"or Paralegal in Ontario")),
 h("div",{style:{display:"flex",fontSize:"25px",color:"rgba(255,255,255,0.8)",textAlign:"center",marginBottom:"48px",maxWidth:"760px",lineHeight:1.3}},"Free clinics, duty counsel, licensed paralegals & lawyers — by city"),
 h("div",{style:{display:"flex",gap:"24px"}},chip("Free options first"),chip("LTB representation"),chip("By city")),
 h("div",{style:{position:"absolute",bottom:"32px",right:"48px",color:"rgba(255,255,255,0.5)",fontSize:"18px"}},"leaseplain.com"));
const res=new ImageResponse(card,{...SIZE});
writeFileSync("public/og/tenant-lawyer.png",Buffer.from(await res.arrayBuffer()));
console.log("wrote public/og/tenant-lawyer.png");
