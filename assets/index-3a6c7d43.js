(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();function U(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?U=function(t){return typeof t}:U=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(o)}function y(o,e,t){var i=t.value;if(typeof i!="function")throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(U(i)));var s=!1;return{configurable:!0,get:function(){if(s||this===o.prototype||this.hasOwnProperty(e)||typeof i!="function")return i;var l=i.bind(this);return s=!0,Object.defineProperty(this,e,{configurable:!0,get:function(){return l},set:function(r){i=r,delete this[e]}}),s=!1,l},set:function(l){i=l}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=window,X=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),te=new WeakMap;let ve=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(X&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&te.set(t,e))}return e}toString(){return this.cssText}};const Se=o=>new ve(typeof o=="string"?o:o+"",void 0,ee),fe=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,s,n)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new ve(t,o,ee)},Oe=(o,e)=>{X?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=T.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)})},ie=X?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Se(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const z=window,se=z.trustedTypes,Ee=se?se.emptyScript:"",oe=z.reactiveElementPolyfillSupport,Z={toAttribute(o,e){switch(e){case Boolean:o=o?Ee:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},be=(o,e)=>e!==o&&(e==e||o==o),B={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:be},J="finalized";let E=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=B){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||B}static finalize(){if(this.hasOwnProperty(J))return!1;this[J]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ie(s))}else e!==void 0&&t.push(ie(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Oe(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=B){var s;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const l=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Z).toAttribute(t,i.type);this._$El=e,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Ev.get(e);if(n!==void 0&&this._$El!==n){const l=s.getPropertyOptions(n),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?l.converter:Z;this._$El=n,this[n]=a.fromAttribute(t,l.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||be)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};E[J]=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},oe==null||oe({ReactiveElement:E}),((j=z.reactiveElementVersions)!==null&&j!==void 0?j:z.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const D=window,w=D.trustedTypes,ne=w?w.createPolicy("lit-html",{createHTML:o=>o}):void 0,Y="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,ye="?"+_,xe=`<${ye}>`,O=document,N=()=>O.createComment(""),R=o=>o===null||typeof o!="object"&&typeof o!="function",$e=Array.isArray,we=o=>$e(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",F=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,re=/>/g,A=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ae=/'/g,de=/"/g,ge=/^(?:script|style|textarea|title)$/i,Ce=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),H=Ce(1),C=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ce=new WeakMap,S=O.createTreeWalker(O,129,null,!1);function me(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ne!==void 0?ne.createHTML(e):e}const Pe=(o,e)=>{const t=o.length-1,i=[];let s,n=e===2?"<svg>":"",l=k;for(let a=0;a<t;a++){const r=o[a];let d,p,u=-1,b=0;for(;b<r.length&&(l.lastIndex=b,p=l.exec(r),p!==null);)b=l.lastIndex,l===k?p[1]==="!--"?l=le:p[1]!==void 0?l=re:p[2]!==void 0?(ge.test(p[2])&&(s=RegExp("</"+p[2],"g")),l=A):p[3]!==void 0&&(l=A):l===A?p[0]===">"?(l=s??k,u=-1):p[1]===void 0?u=-2:(u=l.lastIndex-p[2].length,d=p[1],l=p[3]===void 0?A:p[3]==='"'?de:ae):l===de||l===ae?l=A:l===le||l===re?l=k:(l=A,s=void 0);const m=l===A&&o[a+1].startsWith("/>")?" ":"";n+=l===k?r+xe:u>=0?(i.push(d),r.slice(0,u)+Y+r.slice(u)+_+m):r+_+(u===-2?(i.push(void 0),a):m)}return[me(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class M{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,l=0;const a=e.length-1,r=this.parts,[d,p]=Pe(e,t);if(this.el=M.createElement(d,i),S.currentNode=this.el.content,t===2){const u=this.el.content,b=u.firstChild;b.remove(),u.append(...b.childNodes)}for(;(s=S.nextNode())!==null&&r.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const b of s.getAttributeNames())if(b.endsWith(Y)||b.startsWith(_)){const m=p[l++];if(u.push(b),m!==void 0){const Ae=s.getAttribute(m.toLowerCase()+Y).split(_),I=/([.?@])?(.*)/.exec(m);r.push({type:1,index:n,name:I[2],strings:Ae,ctor:I[1]==="."?He:I[1]==="?"?Re:I[1]==="@"?Me:V})}else r.push({type:6,index:n})}for(const b of u)s.removeAttribute(b)}if(ge.test(s.tagName)){const u=s.textContent.split(_),b=u.length-1;if(b>0){s.textContent=w?w.emptyScript:"";for(let m=0;m<b;m++)s.append(u[m],N()),S.nextNode(),r.push({type:2,index:++n});s.append(u[b],N())}}}else if(s.nodeType===8)if(s.data===ye)r.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(_,u+1))!==-1;)r.push({type:7,index:n}),u+=_.length-1}n++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function P(o,e,t=o,i){var s,n,l,a;if(e===C)return e;let r=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const d=R(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==d&&((n=r==null?void 0:r._$AO)===null||n===void 0||n.call(r,!1),d===void 0?r=void 0:(r=new d(o),r._$AT(o,t,i)),i!==void 0?((l=(a=t)._$Co)!==null&&l!==void 0?l:a._$Co=[])[i]=r:t._$Cl=r),r!==void 0&&(e=P(o,r._$AS(o,e.values),r,i)),e}class ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:O).importNode(i,!0);S.currentNode=n;let l=S.nextNode(),a=0,r=0,d=s[0];for(;d!==void 0;){if(a===d.index){let p;d.type===2?p=new L(l,l.nextSibling,this,e):d.type===1?p=new d.ctor(l,d.name,d.strings,this,e):d.type===6&&(p=new Le(l,this,e)),this._$AV.push(p),d=s[++r]}a!==(d==null?void 0:d.index)&&(l=S.nextNode(),a++)}return S.currentNode=O,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class L{constructor(e,t,i,s){var n;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),R(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):we(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==v&&R(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=M.createElement(me(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const l=new ke(n,this),a=l.u(this.options);l.v(i),this.$(a),this._$AH=l}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new M(e)),t}T(e){$e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new L(this.k(N()),this.k(N()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class V{constructor(e,t,i,s,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const n=this.strings;let l=!1;if(n===void 0)e=P(this,e,t,0),l=!R(e)||e!==this._$AH&&e!==C,l&&(this._$AH=e);else{const a=e;let r,d;for(e=n[0],r=0;r<n.length-1;r++)d=P(this,a[i+r],t,r),d===C&&(d=this._$AH[r]),l||(l=!R(d)||d!==this._$AH[r]),d===v?e=v:e!==v&&(e+=(d??"")+n[r+1]),this._$AH[r]=d}l&&!s&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class He extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}const Ne=w?w.emptyScript:"";class Re extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==v?this.element.setAttribute(this.name,Ne):this.element.removeAttribute(this.name)}}class Me extends V{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=P(this,e,t,0))!==null&&i!==void 0?i:v)===C)return;const s=this._$AH,n=e===v&&s!==v||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,l=e!==v&&(s===v||n);n&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Le{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const he=D.litHtmlPolyfillSupport;he==null||he(M,L),((q=D.litHtmlVersions)!==null&&q!==void 0?q:D.litHtmlVersions=[]).push("2.8.0");const Ie=(o,e,t)=>{var i,s;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let l=n._$litPart$;if(l===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=l=new L(e.insertBefore(N(),a),a,void 0,t??{})}return l._$AI(o),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,W;class x extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return C}}x.finalized=!0,x._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:x});const pe=globalThis.litElementPolyfillSupport;pe==null||pe({LitElement:x});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=o=>o??v;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=o=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(l){customElements.define(t,l)}}})(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},Te=(o,e,t)=>{e.constructor.createProperty(t,o)};function f(o){return(e,t)=>t!==void 0?Te(o,e,t):Ue(o,e)}const Q={ENTER:"Enter",TAB:"Tab"},ue=()=>{},ze={label:"",value:"",select:ue,unselect:ue,disabled:!1,hidden:!1,selected:!1},De=fe`
  .select-wrapper {
    position: relative;
  }
  .select {
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: var(--select-width, 100%);
  }
  .label:focus {
    outline: var(--select-outline, 2px solid #e3e3e3);
  }
  .label:after {
    border-bottom: 1px solid var(--color, #000);
    border-right: 1px solid var(--color, #000);
    box-sizing: border-box;
    content: "";
    display: block;
    height: 10px;
    margin-top: -2px;
    transform: rotate(45deg);
    transition: 0.2s ease-in-out;
    width: 10px;
  }
  .label.visible:after {
    margin-bottom: -4px;
    margin-top: 0;
    transform: rotate(225deg);
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    opacity: 0;
  }
  select[multiple] {
    z-index: 0;
  }
  select,
  .label {
    align-items: center;
    background-color: var(--background-color, #fff);
    border-radius: var(--border-radius, 4px);
    border: var(--border-width, 1px) solid var(--border-color, #000);
    box-sizing: border-box;
    color: var(--color, #000);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family, inherit);
    font-size: var(--font-size, 14px);
    font-weight: var(--font-weight, 400);
    min-height: var(--select-height, 44px);
    justify-content: space-between;
    padding: var(--padding, 0 10px);
    width: 100%;
    z-index: 1;
  }
  @media only screen and (hover: none) and (pointer: coarse){
    select {
      z-index: 2;
    }
  }
  .dropdown {
    background-color: var(--border-color, #000);
    border-radius: var(--border-radius, 4px);
    border: var(--border-width, 1px) solid var(--border-color, #000);
    display: none;
    flex-direction: column;
    gap: var(--border-width, 1px);
    justify-content: space-between;
    max-height: calc(var(--select-height, 44px) * var(--dropdown-items, 4) + var(--border-width, 1px) * calc(var(--dropdown-items, 4) - 1));
    overflow-y: scroll;
    position: absolute;
    top: calc(var(--select-height, 44px) + var(--dropdown-gap, 0px));
    width: calc(100% - var(--border-width, 1px) * 2);
    z-index: var(--dropdown-z-index, 2);
  }
  .dropdown.visible {
    display: flex;
    z-index: 100;
  }
  .disabled {
    background-color: var(--disabled-background-color, #bdc3c7);
    color: var(--disabled-color, #ecf0f1);
    cursor: default;
  }
  .multi-selected {
    background-color: var(--selected-background-color, #e3e3e3);
    border-radius: var(--border-radius, 4px);
    color: var(--selected-color, #000);
    display: flex;
    gap: 8px;
    justify-content: space-between;
    padding: 2px 4px;
  }
  .multi-selected-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    width: calc(100% - 30px);
  }
  .cross:after {
    content: '\\00d7';
    display: inline-block;
    height: 100%;
    text-align: center;
    width: 12px;
  }
`,Ve=fe`
  .option {
    align-items: center;
    background-color: var(--background-color, #fff);
    box-sizing: border-box;
    color: var(--color, #000);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family, inherit);
    font-size: var(--font-size, 14px);
    font-weight: var(--font-weight, 400);
    min-height: var(--select-height, 44px);
    justify-content: flex-start;
    padding: var(--padding, 0 10px);
    width: 100%;
  }
  .option:not(.disabled):focus, .option:not(.disabled):not(.selected):hover {
    background-color: var(--hover-background-color, #e3e3e3);
    color: var(--hover-color, #000);
  }
  .selected {
    background-color: var(--selected-background-color, #e3e3e3);
    color: var(--selected-color, #000);
  }
  .disabled {
    background-color: var(--disabled-background-color, #e3e3e3);
    color: var(--disabled-color, #000);
    cursor: default;
  }
`;var g=globalThis&&globalThis.__decorate||function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(l=o[a])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let $=class extends x{constructor(){super(...arguments),this.isSelected=!1,this.isDisabled=!1,this.isHidden=!1,this.optionValue="",this.displayedLabel="",this.optionIndex=-1}static get styles(){return Ve}connectedCallback(){super.connectedCallback(),this.isSelected=this.getAttribute("selected")!==null,this.isDisabled=this.getAttribute("disabled")!==null,this.isHidden=this.getAttribute("hidden")!==null,this.optionValue=this.getAttribute("value")||"",this.assignDisplayedLabel(),this.fireOnReadyCallback()}getOption(){return{label:this.displayedLabel,value:this.optionValue,select:this.select,unselect:this.unselect,selected:this.isSelected,disabled:this.isDisabled,hidden:this.isHidden}}select(){this.isSelected=!0,this.setAttribute("selected","")}unselect(){this.isSelected=!1,this.removeAttribute("selected")}setOnReadyCallback(e,t){this.onReady=e,this.optionIndex=t}setOnSelectCallback(e){this.onSelect=e}render(){const e=["option"];return this.isSelected&&e.push("selected"),this.isDisabled&&e.push("disabled"),H`
      <div
        class="${e.join(" ")}"
        @click=${this.fireOnSelectCallback}
        @keydown="${this.fireOnSelectIfEnterPressed}"
        tabindex="${G(this.isDisabled?void 0:"0")}"
      >
        <slot hidden @slotchange=${this.assignDisplayedLabel}></slot>
        ${this.displayedLabel}
      </div>
    `}assignDisplayedLabel(){if(this.textContent){this.displayedLabel=this.textContent;return}this.getAttribute("label")&&(this.displayedLabel=this.getAttribute("label")||"")}fireOnReadyCallback(){this.onReady&&this.onReady(this.getOption(),this.optionIndex)}fireOnSelectCallback(e){e.stopPropagation(),!(!this.onSelect||this.isDisabled)&&this.onSelect(this.optionValue)}fireOnSelectIfEnterPressed(e){e.key===Q.ENTER&&this.fireOnSelectCallback(e)}};g([f()],$.prototype,"isSelected",void 0);g([f()],$.prototype,"isDisabled",void 0);g([f()],$.prototype,"isHidden",void 0);g([f()],$.prototype,"optionValue",void 0);g([f()],$.prototype,"displayedLabel",void 0);g([f()],$.prototype,"optionIndex",void 0);g([y],$.prototype,"getOption",null);g([y],$.prototype,"select",null);g([y],$.prototype,"unselect",null);g([y],$.prototype,"fireOnReadyCallback",null);$=g([_e("option-pure")],$);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=({finisher:o,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const n=(s=t.originalKey)!==null&&s!==void 0?s:t.key,l=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return o!=null&&(l.finisher=function(a){o(a,n)}),l}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Be(o,e){return je({descriptor:t=>{const i={get(){var s,n;return(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,l;return this[s]===void 0&&(this[s]=(l=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&l!==void 0?l:null),this[s]}}return i}})}var h=globalThis&&globalThis.__decorate||function(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(l=o[a])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let c=class extends x{constructor(){super(...arguments),this.options=[],this.visible=!1,this.selectedOption=ze,this._selectedOptions=[],this.disabled=!1,this.isMultipleSelect=!1,this.name="",this._id="",this.formName="",this.value="",this.values=[],this.defaultLabel="",this.totalRenderedChildOptions=-1,this.form=null,this.hiddenInput=null}static get styles(){return De}connectedCallback(){super.connectedCallback(),this.disabled=this.getAttribute("disabled")!==null,this.isMultipleSelect=this.getAttribute("multiple")!==null,this.name=this.getAttribute("name")||"",this._id=this.getAttribute("id")||"",this.formName=this.name||this.id,this.defaultLabel=this.getAttribute("default-label")||""}open(){this.disabled||(this.visible=!0,this.removeEventListeners(),document.body.addEventListener("click",this.close,!0))}close(e){e&&this.contains(e.target)||(this.visible=!1,this.removeEventListeners())}enable(){this.disabled=!1}disable(){this.disabled=!0}get selectedIndex(){var e;return(e=this.nativeSelect)===null||e===void 0?void 0:e.selectedIndex}set selectedIndex(e){!e&&e!==0||this.selectOptionByValue(this.options[e].value)}get selectedOptions(){var e;return(e=this.nativeSelect)===null||e===void 0?void 0:e.selectedOptions}render(){const e=["label"];return this.disabled&&e.push("disabled"),this.visible&&e.push("visible"),H`
      <div class="select-wrapper">
        <select
          @change=${this.handleNativeSelectChange}
          ?disabled=${this.disabled}
          ?multiple=${this.isMultipleSelect}
          name="${G(this.name||void 0)}"
          id=${G(this.id||void 0)}
          size="1"
        >
          ${this.getNativeOptionsHtml()}
        </select>
        <div class="select">
          <div
            class="${e.join(" ")}"
            @click="${this.visible?this.close:this.open}"
            @keydown="${this.openDropdownIfProperKeyIsPressed}"
            tabindex="0"
          >
            ${this.getDisplayedLabel()}
          </div>
          <div class="dropdown${this.visible?" visible":""}">
            <slot @slotchange=${this.initializeSelect}></slot>
          </div>
        </div>
      </div>
    `}handleNativeSelectChange(){var e;this.selectedIndex=(e=this.nativeSelect)===null||e===void 0?void 0:e.selectedIndex}getNativeOptionsHtml(){return this.options.map(this.getSingleNativeOptionHtml)}getSingleNativeOptionHtml({value:e,label:t,hidden:i,disabled:s}){return H`
      <option
        value=${e}
        ?selected=${this.isOptionSelected(e)}
        ?hidden=${i}
        ?disabled=${s}
      >
        ${t}
      </option>
    `}isOptionSelected(e){let t=this.selectedOption.value===e;return this.isMultipleSelect&&(t=!!this._selectedOptions.find(i=>i.value===e)),t}openDropdownIfProperKeyIsPressed(e){(e.key===Q.ENTER||e.key===Q.TAB)&&this.open()}getDisplayedLabel(){return this.isMultipleSelect&&this._selectedOptions.length?this.getMultiSelectLabelHtml():this.selectedOption.label||this.defaultLabel}getMultiSelectLabelHtml(){return H`
      <div class="multi-selected-wrapper">
        ${this._selectedOptions.map(this.getMultiSelectSelectedOptionHtml)}
      </div>
    `}getMultiSelectSelectedOptionHtml({label:e,value:t}){return H`
      <span class="multi-selected">
        ${e}
        <span
          class="cross"
          @click=${i=>this.fireOnSelectCallback(i,t)}
        >
        </span>
      </span>
    `}fireOnSelectCallback(e,t){e.stopPropagation(),this.selectOptionByValue(t)}initializeSelect(){this.processChildOptions(),this.selectDefaultOptionIfNoneSelected(),this.appendHiddenInputToClosestForm()}processChildOptions(){const e=this.querySelectorAll("option-pure");this.totalRenderedChildOptions=e.length;for(let t=0;t<e.length;t++)this.initializeSingleOption(e[t],t)}selectDefaultOptionIfNoneSelected(){!this.selectedOption.value&&!this.isMultipleSelect&&this.options.length&&this.selectOptionByValue(this.options[0].value)}initializeSingleOption(e,t){e.setOnSelectCallback(this.selectOptionByValue),this.options[t]=e.getOption(),this.options[t].selected&&this.selectOptionByValue(this.options[t].value)}removeEventListeners(){document.body.removeEventListener("click",this.close)}appendHiddenInputToClosestForm(){this.form=this.closest("form"),!(!this.form||this.hiddenInput)&&(this.hiddenInput=document.createElement("input"),this.hiddenInput.setAttribute("type","hidden"),this.hiddenInput.setAttribute("name",this.formName),this.form.appendChild(this.hiddenInput))}unselectAllOptions(){for(let e=0;e<this.options.length;e++)this.options[e].unselect()}selectOptionByValue(e){const t=this.options.find(({value:i})=>i===e);t&&this.setSelectValue(t)}setSelectValue(e){this.isMultipleSelect?this.setMultiSelectValue(e):this.setSingleSelectValue(e),this.updateHiddenInputInForm(),this.dispatchChangeEvent()}dispatchChangeEvent(){this.dispatchEvent(new Event("change"))}setMultiSelectValue(e){const t=this._selectedOptions.indexOf(e);t!==-1?(this.values.splice(t,1),this._selectedOptions.splice(t,1),e.unselect()):(this.values.push(e.value),this._selectedOptions.push(e),e.select()),this.requestUpdate()}setSingleSelectValue(e){this.unselectAllOptions(),this.close(),this.selectedOption=e,this.value=e.value,e.select()}updateHiddenInputInForm(){if(!this.form||!this.hiddenInput)return;this.hiddenInput.value=this.isMultipleSelect?this.values.join(","):this.value;const e=new Event("change",{bubbles:!0});this.hiddenInput.dispatchEvent(e)}};h([f()],c.prototype,"options",void 0);h([f()],c.prototype,"visible",void 0);h([f()],c.prototype,"selectedOption",void 0);h([f()],c.prototype,"_selectedOptions",void 0);h([f()],c.prototype,"disabled",void 0);h([f()],c.prototype,"isMultipleSelect",void 0);h([f()],c.prototype,"name",void 0);h([f()],c.prototype,"_id",void 0);h([f()],c.prototype,"formName",void 0);h([f()],c.prototype,"value",void 0);h([f()],c.prototype,"values",void 0);h([f()],c.prototype,"defaultLabel",void 0);h([f()],c.prototype,"totalRenderedChildOptions",void 0);h([Be("select")],c.prototype,"nativeSelect",void 0);h([y],c.prototype,"close",null);h([y],c.prototype,"getSingleNativeOptionHtml",null);h([y],c.prototype,"getMultiSelectLabelHtml",null);h([y],c.prototype,"getMultiSelectSelectedOptionHtml",null);h([y],c.prototype,"initializeSelect",null);h([y],c.prototype,"initializeSingleOption",null);h([y],c.prototype,"removeEventListeners",null);h([y],c.prototype,"appendHiddenInputToClosestForm",null);h([y],c.prototype,"selectOptionByValue",null);c=h([_e("select-pure")],c);const qe=document.querySelector("select-pure");qe.enable();
