import{r as k}from"../chunks/index.DRBTOXdQ.js";import{g as C,l as G}from"../chunks/localStore.svelte.PuF6XUUg.js";import{a as u,t as m}from"../chunks/disclose-version.BnUV2Muc.js";import{t as q,h as d,s as f,i as c,g as r,Q as A,v as H,X as M,f as Q,w as R,Y as U,y as V}from"../chunks/runtime.aayF27iC.js";import{i as X}from"../chunks/lifecycle.SOvc4WYe.js";import{b as Y,a as D,T as E}from"../chunks/team.DoIdbW9c.js";import{g as F}from"../chunks/entry.Cxm_KXad.js";import{e as I,i as J,S as K}from"../chunks/StepHeader.BXqxq0Gy.js";import{r as O,s as z,a as L,C as N}from"../chunks/Container.COIpVhwm.js";import{S as W}from"../chunks/StickyBtn.BW3LnjeA.js";import{s as Z}from"../chunks/render.Cw9nccRF.js";import{i as ee}from"../chunks/4.CIvoOOkz.js";import{p as x}from"../chunks/props.CqX_l_5a.js";const ae=async()=>{var s;const a=C("booking"),t=C("courts");if(!((s=a==null?void 0:a.court_location)!=null&&s.name))throw k(300,"/buy/play-now");if(!(a!=null&&a.date)||!(a!=null&&a.time)||!(t!=null&&t.length))throw k(300,"/buy/play-now/date-time");return{courts:t||[]}},we=Object.freeze(Object.defineProperty({__proto__:null,load:ae},Symbol.toStringTag,{value:"Module"}));var re=m('<span class="flex h-6 min-h-[24px] w-6 min-w-[24px] items-center justify-center rounded-full border border-secondary p-1"><span class="h-full w-full rounded-full bg-secondary"></span></span>'),te=m('<span class="flex h-6 min-h-[24px] w-6 min-w-[24px] items-center justify-center rounded-full border border-secondary"></span>'),se=m('<label><input type="radio" class="hidden"> <!> <span class="flex items-center gap-2"><span class="text-base font-semibold tracking-[0.16px] text-secondary"> </span></span></label>'),le=m('<div><!> <input class="hidden" type="text" required></div>');function oe(a,t){const s=[];let g=x(t,"options",24,()=>[]),p=x(t,"value",12,""),b=x(t,"name",8,""),v=x(t,"class",8,"");var i=le(),y=d(i);I(y,1,g,J,(h,e)=>{var l=se();const o=A(()=>p()===r(e).value);var n=d(l);O(n);var S,j=f(n,2);ee(j,()=>r(o),w=>{var $=re();u(w,$)},w=>{var $=te();u(w,$)});var T=f(j,2),P=d(T),B=d(P);c(P),c(T),c(l),q(()=>{z(l,`body flex flex-row-reverse justify-between cursor-pointer items-center gap-3 rounded-full border border-solid border-secondary py-[18px] pl-[18px] pr-[13px] text-secondary ${(r(o)?"bg-light":"")??""}`),S!==(S=r(e).value)&&(n.value=(n.__value=r(e).value)==null?"":r(e).value),L(n,"name",b()),Z(B,r(e).label)}),D(s,[],n,()=>(r(e).value,p()),p),u(h,l)});var _=f(y,2);O(_),c(i),q(()=>z(i,`grid grid-cols-2 gap-4 ${v()??""}`)),Y(_,p),u(a,i)}var ne=m('<h4 class="mb-4 flex items-center justify-center gap-1 text-base font-bold"><!> Team</h4>'),ie=m('<div class="flex flex-col gap-[40px]"><!> <!></div> <!>',1);function $e(a,t){H(t,!1);let s=M(G("booking",{}));const g=()=>{F("/buy/play-now/user-details")},p=Array.from({length:4},(e,l)=>l+1).map(e=>({label:`${e} Player${e!==1?"s":""}`,value:e}));X();var b=ie(),v=Q(b),i=d(v);K(i,{backUrl:"/buy/play-now/choose-court",headerText:"how many players in your team?",children:(e,l)=>{var o=ne(),n=d(o);E(n),V(),c(o),u(e,o)},$$slots:{default:!0}});var y=f(i,2);N(y,{children:(e,l)=>{oe(e,{options:p,get value(){return r(s).value.player},set value(o){U(s,r(s).value.player=o)},name:"players",$$legacy:!0})},$$slots:{default:!0}}),c(v);var _=f(v,2),h=A(()=>!r(s).value.player);W(_,{action:g,btnText:"Continue",get disabled(){return r(h)}}),u(a,b),R()}export{$e as component,we as universal};
