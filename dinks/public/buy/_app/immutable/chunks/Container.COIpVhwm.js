import{a as v,t as d}from"./disclose-version.BnUV2Muc.js";import{p as i,H as n,av as g,aw as p,ax as h,t as N,h as A,i as m}from"./runtime.aayF27iC.js";import{s as L,d as x}from"./misc.BipuUbhc.js";import{p as _}from"./props.CqX_l_5a.js";let f=!1;function k(){f||(f=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var e;if(!s.defaultPrevented)for(const a of s.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function O(s){if(i){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var t=s.value;c(s,"value",null),s.value=t}if(s.hasAttribute("checked")){var r=s.checked;c(s,"checked",null),s.checked=r}}};s.__on_r=a,g(a),k()}}function c(s,e,a,t){var r=s.__attributes??(s.__attributes={});i&&(r[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="loading"&&(s[p]=a),a==null?s.removeAttribute(e):typeof a!="string"&&w(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var l=new Map;function w(s){var e=l.get(s.nodeName);if(e)return e;l.set(s.nodeName,e=[]);for(var a,t=n(s);t.constructor.name!=="Element";){a=h(t);for(var r in a)a[r].set&&e.push(r);t=n(t)}return e}function P(s,e){var a=s.__className,t=o(e);i&&s.getAttribute("class")===t?s.__className=t:(a!==t||i&&s.getAttribute("class")!==t)&&(t===""?s.removeAttribute("class"):s.setAttribute("class",t),s.__className=t)}function y(s,e){var a=s.__className,t=o(e);i&&s.className===t?s.__className=t:(a!==t||i&&s.className!==t)&&(e==null?s.removeAttribute("class"):s.className=t,s.__className=t)}function o(s){return s??""}function T(s,e,a){if(a){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}var b=d("<section><!></section>");function X(s,e){let a=_(e,"class",8,""),t=_(e,"paddingX",8,"20px");var r=b(),u=A(r);L(u,x(e),{}),m(r),N(()=>{c(r,"style",`--container-padding: ${t()??""}`),y(r,`mx-auto container-max-width ${a()??""}`)}),v(s,r)}export{X as C,c as a,P as b,k as c,O as r,y as s,T as t};
