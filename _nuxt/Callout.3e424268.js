import p from"./ContentSlot.ebe6687c.js";import{f as d,i as l,o as _,e as f,j as o,k as a,l as c,u as r,a3 as v,a4 as h,m as g,b as y}from"./entry.abcedcb1.js";/* empty css                    */const C={class:"summary"},V={class:"content"},k=d({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(s,{emit:u}){const e=l(s.modelValue),i=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,B)=>{const n=p,m=g;return _(),f("div",{class:c(["callout",[s.type]])},[o("span",{class:"preview",onClick:i},[o("span",C,[a(n,{use:t.$slots.summary},null,8,["use"])]),a(m,{name:"heroicons-outline:chevron-right",class:c(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),v(o("div",V,[a(n,{use:t.$slots.content},null,8,["use"])],512),[[h,r(e)]])],2)}}}),x=y(k,[["__scopeId","data-v-37e0bf51"]]);export{x as default};
