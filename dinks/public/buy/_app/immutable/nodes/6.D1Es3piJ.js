import{r as w,s as B}from"../chunks/localStore.svelte.CDHequDN.js";import{a as p,t as b}from"../chunks/disclose-version.BIyVqMZ8.js";import{p as L,f as d,a as N,g as u,d as V,i as A,M as C,c,e as v,r as f,s as l}from"../chunks/runtime.DQwr1dzu.js";import{a as y}from"../chunks/props.BJuUnkrR.js";import{T as F}from"../chunks/team.BhfJClNH.js";import{S as I}from"../chunks/StepHeader.lqymEL4A.js";import{C as O}from"../chunks/Container.CbVs3Ov9.js";import{S as z}from"../chunks/StickyBtn.C9PZ6Sn1.js";import{I as o}from"../chunks/Input.CexQcJOm.js";import{g as D}from"../chunks/entry.D73BxDQa.js";const E=async()=>{w("member")},te=Object.freeze(Object.defineProperty({__proto__:null,load:E},Symbol.toStringTag,{value:"Module"}));var H=b('<h4 class="mb-4 flex items-center justify-center gap-1 text-base font-bold"><!> Become a Member</h4> <div class="text-small mx-auto mt-[10px] flex w-max flex-col gap-2"><p>Dink Patron Membership</p> <p>Benefits :</p> <ul class="list-inside list-disc"><li>20% discount on court bookings</li> <li>10% discount on every event</li> <li>Access to member exclusive events</li></ul></div>',1),K=b('<!> <!> <!> <div class="flex flex-col gap-1"><!> <p class="text-small opacity-70">You will recieve your tickets on your mail</p></div>',1),R=b('<div class="flex flex-col gap-[40px]"><!> <h3 class="mx-auto text-center text-[32px] font-bold leading-[40px]">Fill your membership details</h3> <!></div> <!>',1);function re(S,$){L($,!0);let e=y({first_name:"",email:"",last_name:"",phone:""}),i=A(!0),k=C(()=>!(e.first_name&&e.last_name&&e.email&&e.phone&&u(i)));const P=async()=>{B("member",e),D("/buy/become-a-member/overview")};var x=R(),n=d(x),g=c(n);I(g,{backUrl:"/buy",hideStep:!0,children:(m,T)=>{var t=H(),r=d(t),s=c(r);F(s),v(),f(r),v(2),p(m,t)},$$slots:{default:!0}});var q=l(g,4);O(q,{class:"flex flex-col gap-3",children:(m,T)=>{var t=K(),r=d(t);o(r,{get value(){return e.first_name},set value(a){e.first_name=a},required:!0,label:"First Name",placeholder:"Ram"});var s=l(r,2);o(s,{get value(){return e.last_name},set value(a){e.last_name=a},required:!0,label:"Last Name",placeholder:"Kumar"});var _=l(s,2);o(_,{get valid(){return u(i)},set valid(a){V(i,y(a))},required:!0,get value(){return e.phone},set value(a){e.phone=a},label:"Phone Number",maxLength:13,minLength:10,placeholder:"8289085287",type:"tel"});var h=l(_,2),j=c(h);o(j,{required:!0,get value(){return e.email},set value(a){e.email=a},label:"Email Address",placeholder:"your@dinks.com",type:"email"}),v(2),f(h),p(m,t)},$$slots:{default:!0}}),f(n);var M=l(n,2);z(M,{action:P,btnText:"Submit",get disabled(){return u(k)}}),p(S,x),N()}export{re as component,te as universal};
