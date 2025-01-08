(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _u(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ve={},Ar=[],Mt=()=>{},gm=()=>!1,Eo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yu=n=>n.startsWith("onUpdate:"),rt=Object.assign,Eu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mm=Object.prototype.hasOwnProperty,Ee=(n,e)=>mm.call(n,e),se=Array.isArray,br=n=>To(n)==="[object Map]",Ef=n=>To(n)==="[object Set]",le=n=>typeof n=="function",Ne=n=>typeof n=="string",un=n=>typeof n=="symbol",Se=n=>n!==null&&typeof n=="object",Tf=n=>(Se(n)||le(n))&&le(n.then)&&le(n.catch),If=Object.prototype.toString,To=n=>If.call(n),_m=n=>To(n).slice(8,-1),vf=n=>To(n)==="[object Object]",Tu=n=>Ne(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Es=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ym=/-(\w)/g,Dn=Io(n=>n.replace(ym,(e,t)=>t?t.toUpperCase():"")),Em=/\B([A-Z])/g,ar=Io(n=>n.replace(Em,"-$1").toLowerCase()),wf=Io(n=>n.charAt(0).toUpperCase()+n.slice(1)),ha=Io(n=>n?`on${wf(n)}`:""),An=(n,e)=>!Object.is(n,e),Oi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Af=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},xa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ac;const vo=()=>Ac||(Ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Iu(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ne(r)?wm(r):Iu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(n)||Se(n))return n}const Tm=/;(?![^(]*\))/g,Im=/:([^]+)/,vm=/\/\*[^]*?\*\//g;function wm(n){const e={};return n.replace(vm,"").split(Tm).forEach(t=>{if(t){const r=t.split(Im);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ks(n){let e="";if(Ne(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=ks(n[t]);r&&(e+=r+" ")}else if(Se(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bm=_u(Am);function bf(n){return!!n||n===""}const Rf=n=>!!(n&&n.__v_isRef===!0),Sf=n=>Ne(n)?n:n==null?"":se(n)||Se(n)&&(n.toString===If||!le(n.toString))?Rf(n)?Sf(n.value):JSON.stringify(n,Pf,2):String(n),Pf=(n,e)=>Rf(e)?Pf(n,e.value):br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[fa(r,i)+" =>"]=s,t),{})}:Ef(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>fa(t))}:un(e)?fa(e):Se(e)&&!se(e)&&!vf(e)?String(e):e,fa=(n,e="")=>{var t;return un(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ut;class Cf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ut,!e&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ut;try{return ut=this,e()}finally{ut=t}}}on(){ut=this}off(){ut=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Df(n){return new Cf(n)}function Vf(){return ut}function Rm(n,e=!1){ut&&ut.cleanups.push(n)}let we;const da=new WeakSet;class kf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ut&&ut.active&&ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,da.has(this)&&(da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bc(this),xf(this);const e=we,t=Pt;we=this,Pt=!0;try{return this.fn()}finally{Mf(this),we=e,Pt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Au(e);this.deps=this.depsTail=void 0,bc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ma(this)&&this.run()}get dirty(){return Ma(this)}}let Of=0,Ts,Is;function Nf(n,e=!1){if(n.flags|=8,e){n.next=Is,Is=n;return}n.next=Ts,Ts=n}function vu(){Of++}function wu(){if(--Of>0)return;if(Is){let e=Is;for(Is=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ts;){let e=Ts;for(Ts=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function xf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Mf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Au(r),Sm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Ma(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Os))return;n.globalVersion=Os;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ma(n)){n.flags&=-3;return}const t=we,r=Pt;we=n,Pt=!0;try{xf(n);const s=n.fn(n._value);(e.version===0||An(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{we=t,Pt=r,Mf(n),n.flags&=-3}}function Au(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Au(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Sm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Pt=!0;const Ff=[];function Mn(){Ff.push(Pt),Pt=!1}function Ln(){const n=Ff.pop();Pt=n===void 0?!0:n}function bc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=we;we=void 0;try{e()}finally{we=t}}}let Os=0;class Pm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!we||!Pt||we===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==we)t=this.activeLink=new Pm(we,this),we.deps?(t.prevDep=we.depsTail,we.depsTail.nextDep=t,we.depsTail=t):we.deps=we.depsTail=t,Uf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=we.depsTail,t.nextDep=void 0,we.depsTail.nextDep=t,we.depsTail=t,we.deps===t&&(we.deps=r)}return t}trigger(e){this.version++,Os++,this.notify(e)}notify(e){vu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{wu()}}}function Uf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Uf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Wi=new WeakMap,Yn=Symbol(""),La=Symbol(""),Ns=Symbol("");function Ze(n,e,t){if(Pt&&we){let r=Wi.get(n);r||Wi.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new bu),s.map=r,s.key=t),s.track()}}function Qt(n,e,t,r,s,i){const a=Wi.get(n);if(!a){Os++;return}const u=l=>{l&&l.trigger()};if(vu(),e==="clear")a.forEach(u);else{const l=se(n),f=l&&Tu(t);if(l&&t==="length"){const d=Number(r);a.forEach((g,I)=>{(I==="length"||I===Ns||!un(I)&&I>=d)&&u(g)})}else switch((t!==void 0||a.has(void 0))&&u(a.get(t)),f&&u(a.get(Ns)),e){case"add":l?f&&u(a.get("length")):(u(a.get(Yn)),br(n)&&u(a.get(La)));break;case"delete":l||(u(a.get(Yn)),br(n)&&u(a.get(La)));break;case"set":br(n)&&u(a.get(Yn));break}}wu()}function Cm(n,e){const t=Wi.get(n);return t&&t.get(e)}function mr(n){const e=_e(n);return e===n?e:(Ze(e,"iterate",Ns),wt(n)?e:e.map(et))}function wo(n){return Ze(n=_e(n),"iterate",Ns),n}const Dm={__proto__:null,[Symbol.iterator](){return pa(this,Symbol.iterator,et)},concat(...n){return mr(this).concat(...n.map(e=>se(e)?mr(e):e))},entries(){return pa(this,"entries",n=>(n[1]=et(n[1]),n))},every(n,e){return Kt(this,"every",n,e,void 0,arguments)},filter(n,e){return Kt(this,"filter",n,e,t=>t.map(et),arguments)},find(n,e){return Kt(this,"find",n,e,et,arguments)},findIndex(n,e){return Kt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kt(this,"findLast",n,e,et,arguments)},findLastIndex(n,e){return Kt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kt(this,"forEach",n,e,void 0,arguments)},includes(...n){return ga(this,"includes",n)},indexOf(...n){return ga(this,"indexOf",n)},join(n){return mr(this).join(n)},lastIndexOf(...n){return ga(this,"lastIndexOf",n)},map(n,e){return Kt(this,"map",n,e,void 0,arguments)},pop(){return fs(this,"pop")},push(...n){return fs(this,"push",n)},reduce(n,...e){return Rc(this,"reduce",n,e)},reduceRight(n,...e){return Rc(this,"reduceRight",n,e)},shift(){return fs(this,"shift")},some(n,e){return Kt(this,"some",n,e,void 0,arguments)},splice(...n){return fs(this,"splice",n)},toReversed(){return mr(this).toReversed()},toSorted(n){return mr(this).toSorted(n)},toSpliced(...n){return mr(this).toSpliced(...n)},unshift(...n){return fs(this,"unshift",n)},values(){return pa(this,"values",et)}};function pa(n,e,t){const r=wo(n),s=r[e]();return r!==n&&!wt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const Vm=Array.prototype;function Kt(n,e,t,r,s,i){const a=wo(n),u=a!==n&&!wt(n),l=a[e];if(l!==Vm[e]){const g=l.apply(n,i);return u?et(g):g}let f=t;a!==n&&(u?f=function(g,I){return t.call(this,et(g),I,n)}:t.length>2&&(f=function(g,I){return t.call(this,g,I,n)}));const d=l.call(a,f,r);return u&&s?s(d):d}function Rc(n,e,t,r){const s=wo(n);let i=t;return s!==n&&(wt(n)?t.length>3&&(i=function(a,u,l){return t.call(this,a,u,l,n)}):i=function(a,u,l){return t.call(this,a,et(u),l,n)}),s[e](i,...r)}function ga(n,e,t){const r=_e(n);Ze(r,"iterate",Ns);const s=r[e](...t);return(s===-1||s===!1)&&Pu(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function fs(n,e,t=[]){Mn(),vu();const r=_e(n)[e].apply(n,t);return wu(),Ln(),r}const km=_u("__proto__,__v_isRef,__isVue"),Bf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(un));function Om(n){un(n)||(n=String(n));const e=_e(this);return Ze(e,"has",n),e.hasOwnProperty(n)}class jf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?qm:zf:i?Hf:qf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let l;if(a&&(l=Dm[t]))return l;if(t==="hasOwnProperty")return Om}const u=Reflect.get(e,t,Ve(e)?e:r);return(un(t)?Bf.has(t):km(t))||(s||Ze(e,"get",t),i)?u:Ve(u)?a&&Tu(t)?u:u.value:Se(u)?s?Wf(u):Ao(u):u}}class $f extends jf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=rr(i);if(!wt(r)&&!rr(r)&&(i=_e(i),r=_e(r)),!se(e)&&Ve(i)&&!Ve(r))return l?!1:(i.value=r,!0)}const a=se(e)&&Tu(t)?Number(t)<e.length:Ee(e,t),u=Reflect.set(e,t,r,Ve(e)?e:s);return e===_e(s)&&(a?An(r,i)&&Qt(e,"set",t,r):Qt(e,"add",t,r)),u}deleteProperty(e,t){const r=Ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Qt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!un(t)||!Bf.has(t))&&Ze(e,"has",t),r}ownKeys(e){return Ze(e,"iterate",se(e)?"length":Yn),Reflect.ownKeys(e)}}class Nm extends jf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const xm=new $f,Mm=new Nm,Lm=new $f(!0);const Fa=n=>n,Ai=n=>Reflect.getPrototypeOf(n);function Fm(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=br(i),u=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,f=s[n](...r),d=t?Fa:e?Ua:et;return!e&&Ze(i,"iterate",l?La:Yn),{next(){const{value:g,done:I}=f.next();return I?{value:g,done:I}:{value:u?[d(g[0]),d(g[1])]:d(g),done:I}},[Symbol.iterator](){return this}}}}function bi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Um(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),u=_e(s);n||(An(s,u)&&Ze(a,"get",s),Ze(a,"get",u));const{has:l}=Ai(a),f=e?Fa:n?Ua:et;if(l.call(a,s))return f(i.get(s));if(l.call(a,u))return f(i.get(u));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&Ze(_e(s),"iterate",Yn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=_e(i),u=_e(s);return n||(An(s,u)&&Ze(a,"has",s),Ze(a,"has",u)),s===u?i.has(s):i.has(s)||i.has(u)},forEach(s,i){const a=this,u=a.__v_raw,l=_e(u),f=e?Fa:n?Ua:et;return!n&&Ze(l,"iterate",Yn),u.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return rt(t,n?{add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear")}:{add(s){!e&&!wt(s)&&!rr(s)&&(s=_e(s));const i=_e(this);return Ai(i).has.call(i,s)||(i.add(s),Qt(i,"add",s,s)),this},set(s,i){!e&&!wt(i)&&!rr(i)&&(i=_e(i));const a=_e(this),{has:u,get:l}=Ai(a);let f=u.call(a,s);f||(s=_e(s),f=u.call(a,s));const d=l.call(a,s);return a.set(s,i),f?An(i,d)&&Qt(a,"set",s,i):Qt(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:u}=Ai(i);let l=a.call(i,s);l||(s=_e(s),l=a.call(i,s)),u&&u.call(i,s);const f=i.delete(s);return l&&Qt(i,"delete",s,void 0),f},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&Qt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Fm(s,n,e)}),t}function Ru(n,e){const t=Um(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(t,s)&&s in r?t:r,s,i)}const Bm={get:Ru(!1,!1)},jm={get:Ru(!1,!0)},$m={get:Ru(!0,!1)};const qf=new WeakMap,Hf=new WeakMap,zf=new WeakMap,qm=new WeakMap;function Hm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zm(n){return n.__v_skip||!Object.isExtensible(n)?0:Hm(_m(n))}function Ao(n){return rr(n)?n:Su(n,!1,xm,Bm,qf)}function Wm(n){return Su(n,!1,Lm,jm,Hf)}function Wf(n){return Su(n,!0,Mm,$m,zf)}function Su(n,e,t,r,s){if(!Se(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const a=zm(n);if(a===0)return n;const u=new Proxy(n,a===2?r:t);return s.set(n,u),u}function bn(n){return rr(n)?bn(n.__v_raw):!!(n&&n.__v_isReactive)}function rr(n){return!!(n&&n.__v_isReadonly)}function wt(n){return!!(n&&n.__v_isShallow)}function Pu(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function Cu(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&Af(n,"__v_skip",!0),n}const et=n=>Se(n)?Ao(n):n,Ua=n=>Se(n)?Wf(n):n;function Ve(n){return n?n.__v_isRef===!0:!1}function Gs(n){return Km(n,!1)}function Km(n,e){return Ve(n)?n:new Gm(n,e)}class Gm{constructor(e,t){this.dep=new bu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:et(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||wt(e)||rr(e);e=r?e:_e(e),An(e,t)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function En(n){return Ve(n)?n.value:n}const Qm={get:(n,e,t)=>e==="__v_raw"?n:En(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Ve(s)&&!Ve(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Kf(n){return bn(n)?n:new Proxy(n,Qm)}function Jm(n){const e=se(n)?new Array(n.length):{};for(const t in n)e[t]=Ym(n,t);return e}class Xm{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Cm(_e(this._object),this._key)}}function Ym(n,e,t){const r=n[e];return Ve(r)?r:new Xm(n,e,t)}class Zm{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new bu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Nf(this,!0),!0}get value(){const e=this.dep.track();return Lf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function e_(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new Zm(r,s,t)}const Ri={},Ki=new WeakMap;let Gn;function t_(n,e=!1,t=Gn){if(t){let r=Ki.get(t);r||Ki.set(t,r=[]),r.push(n)}}function n_(n,e,t=ve){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:u,call:l}=t,f=H=>s?H:wt(H)||s===!1||s===0?Jt(H,1):Jt(H);let d,g,I,b,D=!1,L=!1;if(Ve(n)?(g=()=>n.value,D=wt(n)):bn(n)?(g=()=>f(n),D=!0):se(n)?(L=!0,D=n.some(H=>bn(H)||wt(H)),g=()=>n.map(H=>{if(Ve(H))return H.value;if(bn(H))return f(H);if(le(H))return l?l(H,2):H()})):le(n)?e?g=l?()=>l(n,2):n:g=()=>{if(I){Mn();try{I()}finally{Ln()}}const H=Gn;Gn=d;try{return l?l(n,3,[b]):n(b)}finally{Gn=H}}:g=Mt,e&&s){const H=g,oe=s===!0?1/0:s;g=()=>Jt(H(),oe)}const F=Vf(),W=()=>{d.stop(),F&&F.active&&Eu(F.effects,d)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),W()}}let Q=L?new Array(n.length).fill(Ri):Ri;const G=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const oe=d.run();if(s||D||(L?oe.some((ye,w)=>An(ye,Q[w])):An(oe,Q))){I&&I();const ye=Gn;Gn=d;try{const w=[oe,Q===Ri?void 0:L&&Q[0]===Ri?[]:Q,b];l?l(e,3,w):e(...w),Q=oe}finally{Gn=ye}}}else d.run()};return u&&u(G),d=new kf(g),d.scheduler=a?()=>a(G,!1):G,b=H=>t_(H,!1,d),I=d.onStop=()=>{const H=Ki.get(d);if(H){if(l)l(H,4);else for(const oe of H)oe();Ki.delete(d)}},e?r?G(!0):Q=d.run():a?a(G.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function Jt(n,e=1/0,t){if(e<=0||!Se(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ve(n))Jt(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)Jt(n[r],e,t);else if(Ef(n)||br(n))n.forEach(r=>{Jt(r,e,t)});else if(vf(n)){for(const r in n)Jt(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Jt(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qs(n,e,t,r){try{return r?n(...r):n()}catch(s){bo(s,e,t)}}function Bt(n,e,t,r){if(le(n)){const s=Qs(n,e,t,r);return s&&Tf(s)&&s.catch(i=>{bo(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Bt(n[i],e,t,r));return s}}function bo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ve;if(e){let u=e.parent;const l=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;u;){const d=u.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,l,f)===!1)return}u=u.parent}if(i){Mn(),Qs(i,null,10,[n,l,f]),Ln();return}}r_(n,t,s,r,a)}function r_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const lt=[];let Nt=-1;const Rr=[];let _n=null,yr=0;const Gf=Promise.resolve();let Gi=null;function Qi(n){const e=Gi||Gf;return n?e.then(this?n.bind(this):n):e}function s_(n){let e=Nt+1,t=lt.length;for(;e<t;){const r=e+t>>>1,s=lt[r],i=xs(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Du(n){if(!(n.flags&1)){const e=xs(n),t=lt[lt.length-1];!t||!(n.flags&2)&&e>=xs(t)?lt.push(n):lt.splice(s_(e),0,n),n.flags|=1,Qf()}}function Qf(){Gi||(Gi=Gf.then(Xf))}function i_(n){se(n)?Rr.push(...n):_n&&n.id===-1?_n.splice(yr+1,0,n):n.flags&1||(Rr.push(n),n.flags|=1),Qf()}function Sc(n,e,t=Nt+1){for(;t<lt.length;t++){const r=lt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;lt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Jf(n){if(Rr.length){const e=[...new Set(Rr)].sort((t,r)=>xs(t)-xs(r));if(Rr.length=0,_n){_n.push(...e);return}for(_n=e,yr=0;yr<_n.length;yr++){const t=_n[yr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_n=null,yr=0}}const xs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xf(n){try{for(Nt=0;Nt<lt.length;Nt++){const e=lt[Nt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nt<lt.length;Nt++){const e=lt[Nt];e&&(e.flags&=-2)}Nt=-1,lt.length=0,Jf(),Gi=null,(lt.length||Rr.length)&&Xf()}}let ze=null,Yf=null;function Ji(n){const e=ze;return ze=n,Yf=n&&n.type.__scopeId||null,e}function Zf(n,e=ze,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Mc(-1);const i=Ji(e);let a;try{a=n(...s)}finally{Ji(i),r._d&&Mc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function o_(n,e){if(ze===null)return n;const t=Do(ze),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,u,l=ve]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&Jt(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:u,modifiers:l}))}return n}function Wn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const u=s[a];i&&(u.oldValue=i[a].value);let l=u.dir[r];l&&(Mn(),Bt(l,t,8,[n.el,u,n,e]),Ln())}}const a_=Symbol("_vte"),u_=n=>n.__isTeleport;function Vu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Js(n,e){return le(n)?rt({name:n.name},e,{setup:n}):n}function ed(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xi(n,e,t,r,s=!1){if(se(n)){n.forEach((D,L)=>Xi(D,e&&(se(e)?e[L]:e),t,r,s));return}if(Sr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Xi(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Do(r.component):r.el,a=s?null:i,{i:u,r:l}=n,f=e&&e.r,d=u.refs===ve?u.refs={}:u.refs,g=u.setupState,I=_e(g),b=g===ve?()=>!1:D=>Ee(I,D);if(f!=null&&f!==l&&(Ne(f)?(d[f]=null,b(f)&&(g[f]=null)):Ve(f)&&(f.value=null)),le(l))Qs(l,u,12,[a,d]);else{const D=Ne(l),L=Ve(l);if(D||L){const F=()=>{if(n.f){const W=D?b(l)?g[l]:d[l]:l.value;s?se(W)&&Eu(W,i):se(W)?W.includes(i)||W.push(i):D?(d[l]=[i],b(l)&&(g[l]=d[l])):(l.value=[i],n.k&&(d[n.k]=l.value))}else D?(d[l]=a,b(l)&&(g[l]=a)):L&&(l.value=a,n.k&&(d[n.k]=a))};a?(F.id=-1,pt(F,t)):F()}}}vo().requestIdleCallback;vo().cancelIdleCallback;const Sr=n=>!!n.type.__asyncLoader,td=n=>n.type.__isKeepAlive;function l_(n,e){nd(n,"a",e)}function c_(n,e){nd(n,"da",e)}function nd(n,e,t=nt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ro(e,r,t),t){let s=t.parent;for(;s&&s.parent;)td(s.parent.vnode)&&h_(r,e,t,s),s=s.parent}}function h_(n,e,t,r){const s=Ro(e,n,r,!0);So(()=>{Eu(r[e],s)},t)}function Ro(n,e,t=nt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Mn();const u=Xs(t),l=Bt(e,t,n,a);return u(),Ln(),l});return r?s.unshift(i):s.push(i),i}}const ln=n=>(e,t=nt)=>{(!Ls||n==="sp")&&Ro(n,(...r)=>e(...r),t)},f_=ln("bm"),ku=ln("m"),d_=ln("bu"),p_=ln("u"),g_=ln("bum"),So=ln("um"),m_=ln("sp"),__=ln("rtg"),y_=ln("rtc");function E_(n,e=nt){Ro("ec",n,e)}const T_=Symbol.for("v-ndc");function I_(n,e,t,r){let s;const i=t,a=se(n);if(a||Ne(n)){const u=a&&bn(n);let l=!1;u&&(l=!wt(n),n=wo(n)),s=new Array(n.length);for(let f=0,d=n.length;f<d;f++)s[f]=e(l?et(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let u=0;u<n;u++)s[u]=e(u+1,u,void 0,i)}else if(Se(n))if(n[Symbol.iterator])s=Array.from(n,(u,l)=>e(u,l,void 0,i));else{const u=Object.keys(n);s=new Array(u.length);for(let l=0,f=u.length;l<f;l++){const d=u[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}function v_(n,e,t={},r,s){if(ze.ce||ze.parent&&Sr(ze.parent)&&ze.parent.ce)return ft(),Ha(gt,null,[_t("slot",t,r)],64);let i=n[e];i&&i._c&&(i._d=!1),ft();const a=i&&rd(i(t)),u=t.key||a&&a.key,l=Ha(gt,{key:(u&&!un(u)?u:`_${e}`)+""},a||[],a&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function rd(n){return n.some(e=>Nu(e)?!(e.type===Or||e.type===gt&&!rd(e.children)):!0)?n:null}const Ba=n=>n?bd(n)?Do(n):Ba(n.parent):null,vs=rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ba(n.parent),$root:n=>Ba(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>id(n),$forceUpdate:n=>n.f||(n.f=()=>{Du(n.update)}),$nextTick:n=>n.n||(n.n=Qi.bind(n.proxy)),$watch:n=>z_.bind(n)}),ma=(n,e)=>n!==ve&&!n.__isScriptSetup&&Ee(n,e),w_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:u,appContext:l}=n;let f;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(ma(r,e))return a[e]=1,r[e];if(s!==ve&&Ee(s,e))return a[e]=2,s[e];if((f=n.propsOptions[0])&&Ee(f,e))return a[e]=3,i[e];if(t!==ve&&Ee(t,e))return a[e]=4,t[e];ja&&(a[e]=0)}}const d=vs[e];let g,I;if(d)return e==="$attrs"&&Ze(n.attrs,"get",""),d(n);if((g=u.__cssModules)&&(g=g[e]))return g;if(t!==ve&&Ee(t,e))return a[e]=4,t[e];if(I=l.config.globalProperties,Ee(I,e))return I[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return ma(s,e)?(s[e]=t,!0):r!==ve&&Ee(r,e)?(r[e]=t,!0):Ee(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let u;return!!t[a]||n!==ve&&Ee(n,a)||ma(e,a)||(u=i[0])&&Ee(u,a)||Ee(r,a)||Ee(vs,a)||Ee(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ee(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Pc(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ja=!0;function A_(n){const e=id(n),t=n.proxy,r=n.ctx;ja=!1,e.beforeCreate&&Cc(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:u,provide:l,inject:f,created:d,beforeMount:g,mounted:I,beforeUpdate:b,updated:D,activated:L,deactivated:F,beforeDestroy:W,beforeUnmount:Q,destroyed:G,unmounted:H,render:oe,renderTracked:ye,renderTriggered:w,errorCaptured:m,serverPrefetch:_,expose:T,inheritAttrs:A,components:R,directives:y,filters:it}=e;if(f&&b_(f,r,null),a)for(const ae in a){const ge=a[ae];le(ge)&&(r[ae]=ge.bind(t))}if(s){const ae=s.call(t,t);Se(ae)&&(n.data=Ao(ae))}if(ja=!0,i)for(const ae in i){const ge=i[ae],At=le(ge)?ge.bind(t,t):le(ge.get)?ge.get.bind(t,t):Mt,Un=!le(ge)&&le(ge.set)?ge.set.bind(t):Mt,qt=Mu({get:At,set:Un});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>qt.value,set:xe=>qt.value=xe})}if(u)for(const ae in u)sd(u[ae],r,t,ae);if(l){const ae=le(l)?l.call(t):l;Reflect.ownKeys(ae).forEach(ge=>{V_(ge,ae[ge])})}d&&Cc(d,n,"c");function Re(ae,ge){se(ge)?ge.forEach(At=>ae(At.bind(t))):ge&&ae(ge.bind(t))}if(Re(f_,g),Re(ku,I),Re(d_,b),Re(p_,D),Re(l_,L),Re(c_,F),Re(E_,m),Re(y_,ye),Re(__,w),Re(g_,Q),Re(So,H),Re(m_,_),se(T))if(T.length){const ae=n.exposed||(n.exposed={});T.forEach(ge=>{Object.defineProperty(ae,ge,{get:()=>t[ge],set:At=>t[ge]=At})})}else n.exposed||(n.exposed={});oe&&n.render===Mt&&(n.render=oe),A!=null&&(n.inheritAttrs=A),R&&(n.components=R),y&&(n.directives=y),_&&ed(n)}function b_(n,e,t=Mt){se(n)&&(n=$a(n));for(const r in n){const s=n[r];let i;Se(s)?"default"in s?i=ws(s.from||r,s.default,!0):i=ws(s.from||r):i=ws(s),Ve(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Cc(n,e,t){Bt(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function sd(n,e,t,r){let s=r.includes(".")?Ed(t,r):()=>t[r];if(Ne(n)){const i=e[n];le(i)&&Pr(s,i)}else if(le(n))Pr(s,n.bind(t));else if(Se(n))if(se(n))n.forEach(i=>sd(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&Pr(s,i,n)}}function id(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,u=i.get(e);let l;return u?l=u:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(f=>Yi(l,f,a,!0)),Yi(l,e,a)),Se(e)&&i.set(e,l),l}function Yi(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Yi(n,i,t,!0),s&&s.forEach(a=>Yi(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const u=R_[a]||t&&t[a];n[a]=u?u(n[a],e[a]):e[a]}return n}const R_={data:Dc,props:Vc,emits:Vc,methods:ps,computed:ps,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:ps,directives:ps,watch:P_,provide:Dc,inject:S_};function Dc(n,e){return e?n?function(){return rt(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function S_(n,e){return ps($a(n),$a(e))}function $a(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function at(n,e){return n?[...new Set([].concat(n,e))]:e}function ps(n,e){return n?rt(Object.create(null),n,e):e}function Vc(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:rt(Object.create(null),Pc(n),Pc(e??{})):e}function P_(n,e){if(!n)return e;if(!e)return n;const t=rt(Object.create(null),n);for(const r in e)t[r]=at(n[r],e[r]);return t}function od(){return{app:null,config:{isNativeTag:gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let C_=0;function D_(n,e){return function(r,s=null){le(r)||(r=rt({},r)),s!=null&&!Se(s)&&(s=null);const i=od(),a=new WeakSet,u=[];let l=!1;const f=i.app={_uid:C_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hy,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(f,...g)):le(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,I){if(!l){const b=f._ceVNode||_t(r,s);return b.appContext=i,I===!0?I="svg":I===!1&&(I=void 0),n(b,d,I),l=!0,f._container=d,d.__vue_app__=f,Do(b.component)}},onUnmount(d){u.push(d)},unmount(){l&&(Bt(u,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=Zn;Zn=f;try{return d()}finally{Zn=g}}};return f}}let Zn=null;function V_(n,e){if(nt){let t=nt.provides;const r=nt.parent&&nt.parent.provides;r===t&&(t=nt.provides=Object.create(r)),t[n]=e}}function ws(n,e,t=!1){const r=nt||ze;if(r||Zn){const s=Zn?Zn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function k_(){return!!(nt||ze||Zn)}const ad={},ud=()=>Object.create(ad),ld=n=>Object.getPrototypeOf(n)===ad;function O_(n,e,t,r=!1){const s={},i=ud();n.propsDefaults=Object.create(null),cd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:Wm(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function N_(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,u=_e(s),[l]=n.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let I=d[g];if(Po(n.emitsOptions,I))continue;const b=e[I];if(l)if(Ee(i,I))b!==i[I]&&(i[I]=b,f=!0);else{const D=Dn(I);s[D]=qa(l,u,D,b,n,!1)}else b!==i[I]&&(i[I]=b,f=!0)}}}else{cd(n,e,s,i)&&(f=!0);let d;for(const g in u)(!e||!Ee(e,g)&&((d=ar(g))===g||!Ee(e,d)))&&(l?t&&(t[g]!==void 0||t[d]!==void 0)&&(s[g]=qa(l,u,g,void 0,n,!0)):delete s[g]);if(i!==u)for(const g in i)(!e||!Ee(e,g))&&(delete i[g],f=!0)}f&&Qt(n.attrs,"set","")}function cd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,u;if(e)for(let l in e){if(Es(l))continue;const f=e[l];let d;s&&Ee(s,d=Dn(l))?!i||!i.includes(d)?t[d]=f:(u||(u={}))[d]=f:Po(n.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,a=!0)}if(i){const l=_e(t),f=u||ve;for(let d=0;d<i.length;d++){const g=i[d];t[g]=qa(s,l,g,f[g],n,!Ee(f,g))}}return a}function qa(n,e,t,r,s,i){const a=n[t];if(a!=null){const u=Ee(a,"default");if(u&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:f}=s;if(t in f)r=f[t];else{const d=Xs(s);r=f[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!u?r=!1:a[1]&&(r===""||r===ar(t))&&(r=!0))}return r}const x_=new WeakMap;function hd(n,e,t=!1){const r=t?x_:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},u=[];let l=!1;if(!le(n)){const d=g=>{l=!0;const[I,b]=hd(g,e,!0);rt(a,I),b&&u.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Se(n)&&r.set(n,Ar),Ar;if(se(i))for(let d=0;d<i.length;d++){const g=Dn(i[d]);kc(g)&&(a[g]=ve)}else if(i)for(const d in i){const g=Dn(d);if(kc(g)){const I=i[d],b=a[g]=se(I)||le(I)?{type:I}:rt({},I),D=b.type;let L=!1,F=!0;if(se(D))for(let W=0;W<D.length;++W){const Q=D[W],G=le(Q)&&Q.name;if(G==="Boolean"){L=!0;break}else G==="String"&&(F=!1)}else L=le(D)&&D.name==="Boolean";b[0]=L,b[1]=F,(L||Ee(b,"default"))&&u.push(g)}}const f=[a,u];return Se(n)&&r.set(n,f),f}function kc(n){return n[0]!=="$"&&!Es(n)}const fd=n=>n[0]==="_"||n==="$stable",Ou=n=>se(n)?n.map(xt):[xt(n)],M_=(n,e,t)=>{if(e._n)return e;const r=Zf((...s)=>Ou(e(...s)),t);return r._c=!1,r},dd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(fd(s))continue;const i=n[s];if(le(i))e[s]=M_(s,i,r);else if(i!=null){const a=Ou(i);e[s]=()=>a}}},pd=(n,e)=>{const t=Ou(e);n.slots.default=()=>t},gd=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},L_=(n,e,t)=>{const r=n.slots=ud();if(n.vnode.shapeFlag&32){const s=e._;s?(gd(r,e,t),t&&Af(r,"_",s,!0)):dd(e,r)}else e&&pd(n,e)},F_=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=ve;if(r.shapeFlag&32){const u=e._;u?t&&u===1?i=!1:gd(s,e,t):(i=!e.$stable,dd(e,s)),a=e}else e&&(pd(n,e),a={default:1});if(i)for(const u in s)!fd(u)&&a[u]==null&&delete s[u]},pt=Y_;function U_(n){return B_(n)}function B_(n,e){const t=vo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:u,createComment:l,setText:f,setElementText:d,parentNode:g,nextSibling:I,setScopeId:b=Mt,insertStaticContent:D}=n,L=(E,v,C,N=null,O=null,x=null,$=void 0,B=null,U=!!v.dynamicChildren)=>{if(E===v)return;E&&!ds(E,v)&&(N=Ht(E),xe(E,O,x,!0),E=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:q}=v;switch(M){case Co:F(E,v,C,N);break;case Or:W(E,v,C,N);break;case ya:E==null&&Q(v,C,N,$);break;case gt:R(E,v,C,N,O,x,$,B,U);break;default:q&1?oe(E,v,C,N,O,x,$,B,U):q&6?y(E,v,C,N,O,x,$,B,U):(q&64||q&128)&&M.process(E,v,C,N,O,x,$,B,U,kt)}Y!=null&&O&&Xi(Y,E&&E.ref,x,v||E,!v)},F=(E,v,C,N)=>{if(E==null)r(v.el=u(v.children),C,N);else{const O=v.el=E.el;v.children!==E.children&&f(O,v.children)}},W=(E,v,C,N)=>{E==null?r(v.el=l(v.children||""),C,N):v.el=E.el},Q=(E,v,C,N)=>{[E.el,E.anchor]=D(E.children,v,C,N,E.el,E.anchor)},G=({el:E,anchor:v},C,N)=>{let O;for(;E&&E!==v;)O=I(E),r(E,C,N),E=O;r(v,C,N)},H=({el:E,anchor:v})=>{let C;for(;E&&E!==v;)C=I(E),s(E),E=C;s(v)},oe=(E,v,C,N,O,x,$,B,U)=>{v.type==="svg"?$="svg":v.type==="math"&&($="mathml"),E==null?ye(v,C,N,O,x,$,B,U):_(E,v,O,x,$,B,U)},ye=(E,v,C,N,O,x,$,B)=>{let U,M;const{props:Y,shapeFlag:q,transition:J,dirs:ee}=E;if(U=E.el=a(E.type,x,Y&&Y.is,Y),q&8?d(U,E.children):q&16&&m(E.children,U,null,N,O,_a(E,x),$,B),ee&&Wn(E,null,N,"created"),w(U,E,E.scopeId,$,N),Y){for(const ue in Y)ue!=="value"&&!Es(ue)&&i(U,ue,null,Y[ue],x,N);"value"in Y&&i(U,"value",null,Y.value,x),(M=Y.onVnodeBeforeMount)&&Ot(M,N,E)}ee&&Wn(E,null,N,"beforeMount");const Z=j_(O,J);Z&&J.beforeEnter(U),r(U,v,C),((M=Y&&Y.onVnodeMounted)||Z||ee)&&pt(()=>{M&&Ot(M,N,E),Z&&J.enter(U),ee&&Wn(E,null,N,"mounted")},O)},w=(E,v,C,N,O)=>{if(C&&b(E,C),N)for(let x=0;x<N.length;x++)b(E,N[x]);if(O){let x=O.subTree;if(v===x||Id(x.type)&&(x.ssContent===v||x.ssFallback===v)){const $=O.vnode;w(E,$,$.scopeId,$.slotScopeIds,O.parent)}}},m=(E,v,C,N,O,x,$,B,U=0)=>{for(let M=U;M<E.length;M++){const Y=E[M]=B?yn(E[M]):xt(E[M]);L(null,Y,v,C,N,O,x,$,B)}},_=(E,v,C,N,O,x,$)=>{const B=v.el=E.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=v;U|=E.patchFlag&16;const q=E.props||ve,J=v.props||ve;let ee;if(C&&Kn(C,!1),(ee=J.onVnodeBeforeUpdate)&&Ot(ee,C,v,E),Y&&Wn(v,E,C,"beforeUpdate"),C&&Kn(C,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(B,""),M?T(E.dynamicChildren,M,B,C,N,_a(v,O),x):$||ge(E,v,B,null,C,N,_a(v,O),x,!1),U>0){if(U&16)A(B,q,J,C,O);else if(U&2&&q.class!==J.class&&i(B,"class",null,J.class,O),U&4&&i(B,"style",q.style,J.style,O),U&8){const Z=v.dynamicProps;for(let ue=0;ue<Z.length;ue++){const de=Z[ue],Ke=q[de],Be=J[de];(Be!==Ke||de==="value")&&i(B,de,Ke,Be,O,C)}}U&1&&E.children!==v.children&&d(B,v.children)}else!$&&M==null&&A(B,q,J,C,O);((ee=J.onVnodeUpdated)||Y)&&pt(()=>{ee&&Ot(ee,C,v,E),Y&&Wn(v,E,C,"updated")},N)},T=(E,v,C,N,O,x,$)=>{for(let B=0;B<v.length;B++){const U=E[B],M=v[B],Y=U.el&&(U.type===gt||!ds(U,M)||U.shapeFlag&70)?g(U.el):C;L(U,M,Y,null,N,O,x,$,!0)}},A=(E,v,C,N,O)=>{if(v!==C){if(v!==ve)for(const x in v)!Es(x)&&!(x in C)&&i(E,x,v[x],null,O,N);for(const x in C){if(Es(x))continue;const $=C[x],B=v[x];$!==B&&x!=="value"&&i(E,x,B,$,O,N)}"value"in C&&i(E,"value",v.value,C.value,O)}},R=(E,v,C,N,O,x,$,B,U)=>{const M=v.el=E?E.el:u(""),Y=v.anchor=E?E.anchor:u("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:ee}=v;ee&&(B=B?B.concat(ee):ee),E==null?(r(M,C,N),r(Y,C,N),m(v.children||[],C,Y,O,x,$,B,U)):q>0&&q&64&&J&&E.dynamicChildren?(T(E.dynamicChildren,J,C,O,x,$,B),(v.key!=null||O&&v===O.subTree)&&md(E,v,!0)):ge(E,v,C,Y,O,x,$,B,U)},y=(E,v,C,N,O,x,$,B,U)=>{v.slotScopeIds=B,E==null?v.shapeFlag&512?O.ctx.activate(v,C,N,$,U):it(v,C,N,O,x,$,U):Vt(E,v,U)},it=(E,v,C,N,O,x,$)=>{const B=E.component=iy(E,N,O);if(td(E)&&(B.ctx.renderer=kt),oy(B,!1,$),B.asyncDep){if(O&&O.registerDep(B,Re,$),!E.el){const U=B.subTree=_t(Or);W(null,U,v,C)}}else Re(B,E,v,C,O,x,$)},Vt=(E,v,C)=>{const N=v.component=E.component;if(J_(E,v,C))if(N.asyncDep&&!N.asyncResolved){ae(N,v,C);return}else N.next=v,N.update();else v.el=E.el,N.vnode=v},Re=(E,v,C,N,O,x,$)=>{const B=()=>{if(E.isMounted){let{next:q,bu:J,u:ee,parent:Z,vnode:ue}=E;{const Ge=_d(E);if(Ge){q&&(q.el=ue.el,ae(E,q,$)),Ge.asyncDep.then(()=>{E.isUnmounted||B()});return}}let de=q,Ke;Kn(E,!1),q?(q.el=ue.el,ae(E,q,$)):q=ue,J&&Oi(J),(Ke=q.props&&q.props.onVnodeBeforeUpdate)&&Ot(Ke,Z,q,ue),Kn(E,!0);const Be=Nc(E),Et=E.subTree;E.subTree=Be,L(Et,Be,g(Et.el),Ht(Et),E,O,x),q.el=Be.el,de===null&&X_(E,Be.el),ee&&pt(ee,O),(Ke=q.props&&q.props.onVnodeUpdated)&&pt(()=>Ot(Ke,Z,q,ue),O)}else{let q;const{el:J,props:ee}=v,{bm:Z,m:ue,parent:de,root:Ke,type:Be}=E,Et=Sr(v);Kn(E,!1),Z&&Oi(Z),!Et&&(q=ee&&ee.onVnodeBeforeMount)&&Ot(q,de,v),Kn(E,!0);{Ke.ce&&Ke.ce._injectChildStyle(Be);const Ge=E.subTree=Nc(E);L(null,Ge,C,N,E,O,x),v.el=Ge.el}if(ue&&pt(ue,O),!Et&&(q=ee&&ee.onVnodeMounted)){const Ge=v;pt(()=>Ot(q,de,Ge),O)}(v.shapeFlag&256||de&&Sr(de.vnode)&&de.vnode.shapeFlag&256)&&E.a&&pt(E.a,O),E.isMounted=!0,v=C=N=null}};E.scope.on();const U=E.effect=new kf(B);E.scope.off();const M=E.update=U.run.bind(U),Y=E.job=U.runIfDirty.bind(U);Y.i=E,Y.id=E.uid,U.scheduler=()=>Du(Y),Kn(E,!0),M()},ae=(E,v,C)=>{v.component=E;const N=E.vnode.props;E.vnode=v,E.next=null,N_(E,v.props,N,C),F_(E,v.children,C),Mn(),Sc(E),Ln()},ge=(E,v,C,N,O,x,$,B,U=!1)=>{const M=E&&E.children,Y=E?E.shapeFlag:0,q=v.children,{patchFlag:J,shapeFlag:ee}=v;if(J>0){if(J&128){Un(M,q,C,N,O,x,$,B,U);return}else if(J&256){At(M,q,C,N,O,x,$,B,U);return}}ee&8?(Y&16&&jn(M,O,x),q!==M&&d(C,q)):Y&16?ee&16?Un(M,q,C,N,O,x,$,B,U):jn(M,O,x,!0):(Y&8&&d(C,""),ee&16&&m(q,C,N,O,x,$,B,U))},At=(E,v,C,N,O,x,$,B,U)=>{E=E||Ar,v=v||Ar;const M=E.length,Y=v.length,q=Math.min(M,Y);let J;for(J=0;J<q;J++){const ee=v[J]=U?yn(v[J]):xt(v[J]);L(E[J],ee,C,null,O,x,$,B,U)}M>Y?jn(E,O,x,!0,!1,q):m(v,C,N,O,x,$,B,U,q)},Un=(E,v,C,N,O,x,$,B,U)=>{let M=0;const Y=v.length;let q=E.length-1,J=Y-1;for(;M<=q&&M<=J;){const ee=E[M],Z=v[M]=U?yn(v[M]):xt(v[M]);if(ds(ee,Z))L(ee,Z,C,null,O,x,$,B,U);else break;M++}for(;M<=q&&M<=J;){const ee=E[q],Z=v[J]=U?yn(v[J]):xt(v[J]);if(ds(ee,Z))L(ee,Z,C,null,O,x,$,B,U);else break;q--,J--}if(M>q){if(M<=J){const ee=J+1,Z=ee<Y?v[ee].el:N;for(;M<=J;)L(null,v[M]=U?yn(v[M]):xt(v[M]),C,Z,O,x,$,B,U),M++}}else if(M>J)for(;M<=q;)xe(E[M],O,x,!0),M++;else{const ee=M,Z=M,ue=new Map;for(M=Z;M<=J;M++){const je=v[M]=U?yn(v[M]):xt(v[M]);je.key!=null&&ue.set(je.key,M)}let de,Ke=0;const Be=J-Z+1;let Et=!1,Ge=0;const hn=new Array(Be);for(M=0;M<Be;M++)hn[M]=0;for(M=ee;M<=q;M++){const je=E[M];if(Ke>=Be){xe(je,O,x,!0);continue}let Tt;if(je.key!=null)Tt=ue.get(je.key);else for(de=Z;de<=J;de++)if(hn[de-Z]===0&&ds(je,v[de])){Tt=de;break}Tt===void 0?xe(je,O,x,!0):(hn[Tt-Z]=M+1,Tt>=Ge?Ge=Tt:Et=!0,L(je,v[Tt],C,null,O,x,$,B,U),Ke++)}const Zr=Et?$_(hn):Ar;for(de=Zr.length-1,M=Be-1;M>=0;M--){const je=Z+M,Tt=v[je],ui=je+1<Y?v[je+1].el:N;hn[M]===0?L(null,Tt,C,ui,O,x,$,B,U):Et&&(de<0||M!==Zr[de]?qt(Tt,C,ui,2):de--)}}},qt=(E,v,C,N,O=null)=>{const{el:x,type:$,transition:B,children:U,shapeFlag:M}=E;if(M&6){qt(E.component.subTree,v,C,N);return}if(M&128){E.suspense.move(v,C,N);return}if(M&64){$.move(E,v,C,kt);return}if($===gt){r(x,v,C);for(let q=0;q<U.length;q++)qt(U[q],v,C,N);r(E.anchor,v,C);return}if($===ya){G(E,v,C);return}if(N!==2&&M&1&&B)if(N===0)B.beforeEnter(x),r(x,v,C),pt(()=>B.enter(x),O);else{const{leave:q,delayLeave:J,afterLeave:ee}=B,Z=()=>r(x,v,C),ue=()=>{q(x,()=>{Z(),ee&&ee()})};J?J(x,Z,ue):ue()}else r(x,v,C)},xe=(E,v,C,N=!1,O=!1)=>{const{type:x,props:$,ref:B,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:q,dirs:J,cacheIndex:ee}=E;if(q===-2&&(O=!1),B!=null&&Xi(B,null,C,E,!0),ee!=null&&(v.renderCache[ee]=void 0),Y&256){v.ctx.deactivate(E);return}const Z=Y&1&&J,ue=!Sr(E);let de;if(ue&&(de=$&&$.onVnodeBeforeUnmount)&&Ot(de,v,E),Y&6)Bn(E.component,C,N);else{if(Y&128){E.suspense.unmount(C,N);return}Z&&Wn(E,null,v,"beforeUnmount"),Y&64?E.type.remove(E,v,C,kt,N):M&&!M.hasOnce&&(x!==gt||q>0&&q&64)?jn(M,v,C,!1,!0):(x===gt&&q&384||!O&&Y&16)&&jn(U,v,C),N&&Me(E)}(ue&&(de=$&&$.onVnodeUnmounted)||Z)&&pt(()=>{de&&Ot(de,v,E),Z&&Wn(E,null,v,"unmounted")},C)},Me=E=>{const{type:v,el:C,anchor:N,transition:O}=E;if(v===gt){Qo(C,N);return}if(v===ya){H(E);return}const x=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(E.shapeFlag&1&&O&&!O.persisted){const{leave:$,delayLeave:B}=O,U=()=>$(C,x);B?B(E.el,x,U):U()}else x()},Qo=(E,v)=>{let C;for(;E!==v;)C=I(E),s(E),E=C;s(v)},Bn=(E,v,C)=>{const{bum:N,scope:O,job:x,subTree:$,um:B,m:U,a:M}=E;Oc(U),Oc(M),N&&Oi(N),O.stop(),x&&(x.flags|=8,xe($,E,v,C)),B&&pt(B,v),pt(()=>{E.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},jn=(E,v,C,N=!1,O=!1,x=0)=>{for(let $=x;$<E.length;$++)xe(E[$],v,C,N,O)},Ht=E=>{if(E.shapeFlag&6)return Ht(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const v=I(E.anchor||E.el),C=v&&v[a_];return C?I(C):v};let Xr=!1;const ai=(E,v,C)=>{E==null?v._vnode&&xe(v._vnode,null,null,!0):L(v._vnode||null,E,v,null,null,null,C),v._vnode=E,Xr||(Xr=!0,Sc(),Jf(),Xr=!1)},kt={p:L,um:xe,m:qt,r:Me,mt:it,mc:m,pc:ge,pbc:T,n:Ht,o:n};return{render:ai,hydrate:void 0,createApp:D_(ai)}}function _a({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Kn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function j_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function md(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let u=s[i];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=s[i]=yn(s[i]),u.el=a.el),!t&&u.patchFlag!==-2&&md(a,u)),u.type===Co&&(u.el=a.el)}}function $_(n){const e=n.slice(),t=[0];let r,s,i,a,u;const l=n.length;for(r=0;r<l;r++){const f=n[r];if(f!==0){if(s=t[t.length-1],n[s]<f){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)u=i+a>>1,n[t[u]]<f?i=u+1:a=u;f<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function _d(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_d(e)}function Oc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const q_=Symbol.for("v-scx"),H_=()=>ws(q_);function Pr(n,e,t){return yd(n,e,t)}function yd(n,e,t=ve){const{immediate:r,deep:s,flush:i,once:a}=t,u=rt({},t),l=e&&r||!e&&i!=="post";let f;if(Ls){if(i==="sync"){const b=H_();f=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Mt,b.resume=Mt,b.pause=Mt,b}}const d=nt;u.call=(b,D,L)=>Bt(b,d,D,L);let g=!1;i==="post"?u.scheduler=b=>{pt(b,d&&d.suspense)}:i!=="sync"&&(g=!0,u.scheduler=(b,D)=>{D?b():Du(b)}),u.augmentJob=b=>{e&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const I=n_(n,e,u);return Ls&&(f?f.push(I):l&&I()),I}function z_(n,e,t){const r=this.proxy,s=Ne(n)?n.includes(".")?Ed(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Xs(this),u=yd(s,i.bind(r),t);return a(),u}function Ed(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const W_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dn(e)}Modifiers`]||n[`${ar(e)}Modifiers`];function K_(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ve;let s=t;const i=e.startsWith("update:"),a=i&&W_(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Ne(d)?d.trim():d)),a.number&&(s=t.map(xa)));let u,l=r[u=ha(e)]||r[u=ha(Dn(e))];!l&&i&&(l=r[u=ha(ar(e))]),l&&Bt(l,n,6,s);const f=r[u+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[u])return;n.emitted[u]=!0,Bt(f,n,6,s)}}function Td(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},u=!1;if(!le(n)){const l=f=>{const d=Td(f,e,!0);d&&(u=!0,rt(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!u?(Se(n)&&r.set(n,null),null):(se(i)?i.forEach(l=>a[l]=null):rt(a,i),Se(n)&&r.set(n,a),a)}function Po(n,e){return!n||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(n,e[0].toLowerCase()+e.slice(1))||Ee(n,ar(e))||Ee(n,e))}function Nc(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:u,emit:l,render:f,renderCache:d,props:g,data:I,setupState:b,ctx:D,inheritAttrs:L}=n,F=Ji(n);let W,Q;try{if(t.shapeFlag&4){const H=s||r,oe=H;W=xt(f.call(oe,H,d,g,b,I,D)),Q=u}else{const H=e;W=xt(H.length>1?H(g,{attrs:u,slots:a,emit:l}):H(g,null)),Q=e.props?u:G_(u)}}catch(H){As.length=0,bo(H,n,1),W=_t(Or)}let G=W;if(Q&&L!==!1){const H=Object.keys(Q),{shapeFlag:oe}=G;H.length&&oe&7&&(i&&H.some(yu)&&(Q=Q_(Q,i)),G=Nr(G,Q,!1,!0))}return t.dirs&&(G=Nr(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&Vu(G,t.transition),W=G,Ji(F),W}const G_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Eo(t))&&((e||(e={}))[t]=n[t]);return e},Q_=(n,e)=>{const t={};for(const r in n)(!yu(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function J_(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:u,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?xc(r,a,f):!!a;if(l&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const I=d[g];if(a[I]!==r[I]&&!Po(f,I))return!0}}}else return(s||u)&&(!u||!u.$stable)?!0:r===a?!1:r?a?xc(r,a,f):!0:!!a;return!1}function xc(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Po(t,i))return!0}return!1}function X_({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Id=n=>n.__isSuspense;function Y_(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):i_(n)}const gt=Symbol.for("v-fgt"),Co=Symbol.for("v-txt"),Or=Symbol.for("v-cmt"),ya=Symbol.for("v-stc"),As=[];let mt=null;function ft(n=!1){As.push(mt=n?null:[])}function Z_(){As.pop(),mt=As[As.length-1]||null}let Ms=1;function Mc(n,e=!1){Ms+=n,n<0&&mt&&e&&(mt.hasOnce=!0)}function vd(n){return n.dynamicChildren=Ms>0?mt||Ar:null,Z_(),Ms>0&&mt&&mt.push(n),n}function Rt(n,e,t,r,s,i){return vd(It(n,e,t,r,s,i,!0))}function Ha(n,e,t,r,s){return vd(_t(n,e,t,r,s,!0))}function Nu(n){return n?n.__v_isVNode===!0:!1}function ds(n,e){return n.type===e.type&&n.key===e.key}const wd=({key:n})=>n??null,Ni=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ne(n)||Ve(n)||le(n)?{i:ze,r:n,k:e,f:!!t}:n:null);function It(n,e=null,t=null,r=0,s=null,i=n===gt?0:1,a=!1,u=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wd(e),ref:e&&Ni(e),scopeId:Yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ze};return u?(xu(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Ne(t)?8:16),Ms>0&&!a&&mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&mt.push(l),l}const _t=ey;function ey(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===T_)&&(n=Or),Nu(n)){const u=Nr(n,e,!0);return t&&xu(u,t),Ms>0&&!i&&mt&&(u.shapeFlag&6?mt[mt.indexOf(n)]=u:mt.push(u)),u.patchFlag=-2,u}if(cy(n)&&(n=n.__vccOpts),e){e=ty(e);let{class:u,style:l}=e;u&&!Ne(u)&&(e.class=ks(u)),Se(l)&&(Pu(l)&&!se(l)&&(l=rt({},l)),e.style=Iu(l))}const a=Ne(n)?1:Id(n)?128:u_(n)?64:Se(n)?4:le(n)?2:0;return It(n,e,t,r,s,a,i,!0)}function ty(n){return n?Pu(n)||ld(n)?rt({},n):n:null}function Nr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:u,transition:l}=n,f=e?ny(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&wd(f),ref:e&&e.ref?t&&i?se(i)?i.concat(Ni(e)):[i,Ni(e)]:Ni(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:u,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Nr(n.ssContent),ssFallback:n.ssFallback&&Nr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Vu(d,l.clone(d)),d}function Ad(n=" ",e=0){return _t(Co,null,n,e)}function xt(n){return n==null||typeof n=="boolean"?_t(Or):se(n)?_t(gt,null,n.slice()):Nu(n)?yn(n):_t(Co,null,String(n))}function yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Nr(n)}function xu(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ld(e)?e._ctx=ze:s===3&&ze&&(ze.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:ze},t=32):(e=String(e),r&64?(t=16,e=[Ad(e)]):t=8);n.children=e,n.shapeFlag|=t}function ny(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ks([e.class,r.class]));else if(s==="style")e.style=Iu([e.style,r.style]);else if(Eo(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ot(n,e,t,r=null){Bt(n,e,7,[t,r])}const ry=od();let sy=0;function iy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||ry,i={uid:sy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hd(r,s),emitsOptions:Td(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=K_.bind(null,i),n.ce&&n.ce(i),i}let nt=null,Zi,za;{const n=vo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Zi=e("__VUE_INSTANCE_SETTERS__",t=>nt=t),za=e("__VUE_SSR_SETTERS__",t=>Ls=t)}const Xs=n=>{const e=nt;return Zi(n),n.scope.on(),()=>{n.scope.off(),Zi(e)}},Lc=()=>{nt&&nt.scope.off(),Zi(null)};function bd(n){return n.vnode.shapeFlag&4}let Ls=!1;function oy(n,e=!1,t=!1){e&&za(e);const{props:r,children:s}=n.vnode,i=bd(n);O_(n,r,i,e),L_(n,s,t);const a=i?ay(n,e):void 0;return e&&za(!1),a}function ay(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,w_);const{setup:r}=t;if(r){Mn();const s=n.setupContext=r.length>1?ly(n):null,i=Xs(n),a=Qs(r,n,0,[n.props,s]),u=Tf(a);if(Ln(),i(),(u||n.sp)&&!Sr(n)&&ed(n),u){if(a.then(Lc,Lc),e)return a.then(l=>{Fc(n,l)}).catch(l=>{bo(l,n,0)});n.asyncDep=a}else Fc(n,a)}else Rd(n)}function Fc(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Se(e)&&(n.setupState=Kf(e)),Rd(n)}function Rd(n,e,t){const r=n.type;n.render||(n.render=r.render||Mt);{const s=Xs(n);Mn();try{A_(n)}finally{Ln(),s()}}}const uy={get(n,e){return Ze(n,"get",""),n[e]}};function ly(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,uy),slots:n.slots,emit:n.emit,expose:e}}function Do(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Kf(Cu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vs)return vs[t](n)},has(e,t){return t in e||t in vs}})):n.proxy}function cy(n){return le(n)&&"__vccOpts"in n}const Mu=(n,e)=>e_(n,e,Ls),hy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wa;const Uc=typeof window<"u"&&window.trustedTypes;if(Uc)try{Wa=Uc.createPolicy("vue",{createHTML:n=>n})}catch{}const Sd=Wa?n=>Wa.createHTML(n):n=>n,fy="http://www.w3.org/2000/svg",dy="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,Bc=Gt&&Gt.createElement("template"),py={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Gt.createElementNS(fy,n):e==="mathml"?Gt.createElementNS(dy,n):t?Gt.createElement(n,{is:t}):Gt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Gt.createTextNode(n),createComment:n=>Gt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Bc.innerHTML=Sd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const u=Bc.content;if(r==="svg"||r==="mathml"){const l=u.firstChild;for(;l.firstChild;)u.appendChild(l.firstChild);u.removeChild(l)}e.insertBefore(u,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gy=Symbol("_vtc");function my(n,e,t){const r=n[gy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jc=Symbol("_vod"),_y=Symbol("_vsh"),yy=Symbol(""),Ey=/(^|;)\s*display\s*:/;function Ty(n,e,t){const r=n.style,s=Ne(t);let i=!1;if(t&&!s){if(e)if(Ne(e))for(const a of e.split(";")){const u=a.slice(0,a.indexOf(":")).trim();t[u]==null&&xi(r,u,"")}else for(const a in e)t[a]==null&&xi(r,a,"");for(const a in t)a==="display"&&(i=!0),xi(r,a,t[a])}else if(s){if(e!==t){const a=r[yy];a&&(t+=";"+a),r.cssText=t,i=Ey.test(t)}}else e&&n.removeAttribute("style");jc in n&&(n[jc]=i?r.display:"",n[_y]&&(r.display="none"))}const $c=/\s*!important$/;function xi(n,e,t){if(se(t))t.forEach(r=>xi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Iy(n,e);$c.test(t)?n.setProperty(ar(r),t.replace($c,""),"important"):n[r]=t}}const qc=["Webkit","Moz","ms"],Ea={};function Iy(n,e){const t=Ea[e];if(t)return t;let r=Dn(e);if(r!=="filter"&&r in n)return Ea[e]=r;r=wf(r);for(let s=0;s<qc.length;s++){const i=qc[s]+r;if(i in n)return Ea[e]=i}return e}const Hc="http://www.w3.org/1999/xlink";function zc(n,e,t,r,s,i=bm(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hc,e.slice(6,e.length)):n.setAttributeNS(Hc,e,t):t==null||i&&!bf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":un(t)?String(t):t)}function Wc(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Sd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const u=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(u!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=bf(t):t==null&&u==="string"?(t="",a=!0):u==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Er(n,e,t,r){n.addEventListener(e,t,r)}function vy(n,e,t,r){n.removeEventListener(e,t,r)}const Kc=Symbol("_vei");function wy(n,e,t,r,s=null){const i=n[Kc]||(n[Kc]={}),a=i[e];if(r&&a)a.value=r;else{const[u,l]=Ay(e);if(r){const f=i[e]=Sy(r,s);Er(n,u,f,l)}else a&&(vy(n,u,a,l),i[e]=void 0)}}const Gc=/(?:Once|Passive|Capture)$/;function Ay(n){let e;if(Gc.test(n)){e={};let r;for(;r=n.match(Gc);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ar(n.slice(2)),e]}let Ta=0;const by=Promise.resolve(),Ry=()=>Ta||(by.then(()=>Ta=0),Ta=Date.now());function Sy(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Bt(Py(r,t.value),e,5,[r])};return t.value=n,t.attached=Ry(),t}function Py(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Cy=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?my(n,r,a):e==="style"?Ty(n,t,r):Eo(e)?yu(e)||wy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dy(n,e,r,a))?(Wc(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zc(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ne(r))?Wc(n,Dn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),zc(n,e,r,a))};function Dy(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Qc(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qc(e)&&Ne(t)?!1:e in n}const Jc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return se(e)?t=>Oi(e,t):e};function Vy(n){n.target.composing=!0}function Xc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ia=Symbol("_assign"),ky={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ia]=Jc(s);const i=r||s.props&&s.props.type==="number";Er(n,e?"change":"input",a=>{if(a.target.composing)return;let u=n.value;t&&(u=u.trim()),i&&(u=xa(u)),n[Ia](u)}),t&&Er(n,"change",()=>{n.value=n.value.trim()}),e||(Er(n,"compositionstart",Vy),Er(n,"compositionend",Xc),Er(n,"change",Xc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Ia]=Jc(a),n.composing)return;const u=(i||n.type==="number")&&!/^0\d/.test(n.value)?xa(n.value):n.value,l=e??"";u!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Oy=["ctrl","shift","alt","meta"],Ny={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Oy.some(t=>n[`${t}Key`]&&!e.includes(t))},xy=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const u=Ny[e[a]];if(u&&u(s,e))return}return n(s,...i)})},My=rt({patchProp:Cy},py);let Yc;function Ly(){return Yc||(Yc=U_(My))}const Fy=(...n)=>{const e=Ly().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=By(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Uy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Uy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function By(n){return Ne(n)?document.querySelector(n):n}/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Pd;const Vo=n=>Pd=n,Cd=Symbol();function Ka(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var bs;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(bs||(bs={}));function jy(){const n=Df(!0),e=n.run(()=>Gs({}));let t=[],r=[];const s=Cu({install(i){Vo(s),s._a=i,i.provide(Cd,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Dd=()=>{};function Zc(n,e,t,r=Dd){n.push(e);const s=()=>{const i=n.indexOf(e);i>-1&&(n.splice(i,1),r())};return!t&&Vf()&&Rm(s),s}function _r(n,...e){n.slice().forEach(t=>{t(...e)})}const $y=n=>n(),eh=Symbol(),va=Symbol();function Ga(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];Ka(s)&&Ka(r)&&n.hasOwnProperty(t)&&!Ve(r)&&!bn(r)?n[t]=Ga(s,r):n[t]=r}return n}const qy=Symbol();function Hy(n){return!Ka(n)||!n.hasOwnProperty(qy)}const{assign:mn}=Object;function zy(n){return!!(Ve(n)&&n.effect)}function Wy(n,e,t,r){const{state:s,actions:i,getters:a}=e,u=t.state.value[n];let l;function f(){u||(t.state.value[n]=s?s():{});const d=Jm(t.state.value[n]);return mn(d,i,Object.keys(a||{}).reduce((g,I)=>(g[I]=Cu(Mu(()=>{Vo(t);const b=t._s.get(n);return a[I].call(b,b)})),g),{}))}return l=Vd(n,f,e,t,r,!0),l}function Vd(n,e,t={},r,s,i){let a;const u=mn({actions:{}},t),l={deep:!0};let f,d,g=[],I=[],b;const D=r.state.value[n];!i&&!D&&(r.state.value[n]={}),Gs({});let L;function F(m){let _;f=d=!1,typeof m=="function"?(m(r.state.value[n]),_={type:bs.patchFunction,storeId:n,events:b}):(Ga(r.state.value[n],m),_={type:bs.patchObject,payload:m,storeId:n,events:b});const T=L=Symbol();Qi().then(()=>{L===T&&(f=!0)}),d=!0,_r(g,_,r.state.value[n])}const W=i?function(){const{state:_}=t,T=_?_():{};this.$patch(A=>{mn(A,T)})}:Dd;function Q(){a.stop(),g=[],I=[],r._s.delete(n)}const G=(m,_="")=>{if(eh in m)return m[va]=_,m;const T=function(){Vo(r);const A=Array.from(arguments),R=[],y=[];function it(ae){R.push(ae)}function Vt(ae){y.push(ae)}_r(I,{args:A,name:T[va],store:oe,after:it,onError:Vt});let Re;try{Re=m.apply(this&&this.$id===n?this:oe,A)}catch(ae){throw _r(y,ae),ae}return Re instanceof Promise?Re.then(ae=>(_r(R,ae),ae)).catch(ae=>(_r(y,ae),Promise.reject(ae))):(_r(R,Re),Re)};return T[eh]=!0,T[va]=_,T},H={_p:r,$id:n,$onAction:Zc.bind(null,I),$patch:F,$reset:W,$subscribe(m,_={}){const T=Zc(g,m,_.detached,()=>A()),A=a.run(()=>Pr(()=>r.state.value[n],R=>{(_.flush==="sync"?d:f)&&m({storeId:n,type:bs.direct,events:b},R)},mn({},l,_)));return T},$dispose:Q},oe=Ao(H);r._s.set(n,oe);const w=(r._a&&r._a.runWithContext||$y)(()=>r._e.run(()=>(a=Df()).run(()=>e({action:G}))));for(const m in w){const _=w[m];if(Ve(_)&&!zy(_)||bn(_))i||(D&&Hy(_)&&(Ve(_)?_.value=D[m]:Ga(_,D[m])),r.state.value[n][m]=_);else if(typeof _=="function"){const T=G(_,m);w[m]=T,u.actions[m]=_}}return mn(oe,w),mn(_e(oe),w),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{F(_=>{mn(_,m)})}}),r._p.forEach(m=>{mn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:u})))}),D&&i&&t.hydrate&&t.hydrate(oe.$state,D),f=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function Ky(n,e,t){let r,s;const i=typeof e=="function";r=n,s=i?t:e;function a(u,l){const f=k_();return u=u||(f?ws(Cd,null):null),u&&Vo(u),u=Pd,u._s.has(r)||(i?Vd(r,e,s,u):Wy(r,s,u)),u._s.get(r)}return a.$id=r,a}var th={TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/dopam1nee/Documents/Programming/Projects/chat-one",TERM:"xterm-256color",SHELL:"/bin/zsh",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/tr/8fg1yt69719gyzyqm32367rc0000gn/T/",npm_config_global_prefix:"/usr/local",TERM_PROGRAM_VERSION:"1.96.2",ZDOTDIR:"/Users/dopam1nee",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/dopam1nee/Documents/Programming/Projects/chat-one",USER:"dopam1nee",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.eH9lsGPWQC/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",PATH:"/Users/dopam1nee/Documents/Programming/Projects/chat-one/node_modules/.bin:/Users/dopam1nee/Documents/Programming/Projects/node_modules/.bin:/Users/dopam1nee/Documents/Programming/node_modules/.bin:/Users/dopam1nee/Documents/node_modules/.bin:/Users/dopam1nee/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.12/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin",npm_package_json:"/Users/dopam1nee/Documents/Programming/Projects/chat-one/package.json",npm_config_userconfig:"/Users/dopam1nee/.npmrc",npm_config_init_module:"/Users/dopam1nee/.npm-init.js",USER_ZDOTDIR:"/Users/dopam1nee",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/dopam1nee/Documents/Programming/Projects/chat-one",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_name:"modern-chat",LANG:"en_US.UTF-8",npm_config_npm_version:"10.2.4",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.0",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/dopam1nee",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/dopam1nee/.npm",LOGNAME:"dopam1nee",npm_lifecycle_script:"vue-tsc -b && vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/tr/8fg1yt69719gyzyqm32367rc0000gn/T/vscode-git-ae25cef60c.sock",npm_config_user_agent:"npm/10.2.4 node/v20.11.1 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/usr/local/bin/node",npm_config_prefix:"/usr/local",COLORTERM:"truecolor",_:"/Users/dopam1nee/Documents/Programming/Projects/chat-one/node_modules/.bin/vite",NODE_ENV:"production"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],u=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,u=a?n[s+1]:0,l=s+2<n.length,f=l?n[s+2]:0,d=i>>2,g=(i&3)<<4|u>>4;let I=(u&15)<<2|f>>6,b=f&63;l||(b=64,a||(I=64)),r.push(t[d],t[g],t[I],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||u==null||f==null||g==null)throw new Qy;const I=i<<2|u>>4;if(r.push(I),f!==64){const b=u<<4&240|f>>2;if(r.push(b),g!==64){const D=f<<6&192|g;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jy=function(n){const e=kd(n);return Od.encodeByteArray(e,!0)},eo=function(n){return Jy(n).replace(/\./g,"")},Nd=function(n){try{return Od.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=()=>Xy().__FIREBASE_DEFAULTS__,Zy=()=>{if(typeof process>"u"||typeof th>"u")return;const n=th.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nd(n[1]);return e&&JSON.parse(e)},ko=()=>{try{return Yy()||Zy()||eE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xd=n=>{var e,t;return(t=(e=ko())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},tE=n=>{const e=xd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Md=()=>{var n;return(n=ko())===null||n===void 0?void 0:n.config},Ld=n=>{var e;return(e=ko())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[eo(JSON.stringify(t)),eo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function iE(){var n;const e=(n=ko())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function uE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lE(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cE(){return!iE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hE(){try{return typeof indexedDB=="object"}catch{return!1}}function fE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="FirebaseError";class cn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=dE,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?pE(i,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new cn(s,u,r)}}function pE(n,e){return n.replace(gE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gE=/\{\$([^}]+)}/g;function mE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function to(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(nh(i)&&nh(a)){if(!to(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function nh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _E(n,e){const t=new yE(n,e);return t.subscribe.bind(t)}class yE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");EE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=wa),s.error===void 0&&(s.error=wa),s.complete===void 0&&(s.complete=wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n){return n&&n._delegate?n._delegate:n}class sr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new nE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vE(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IE(n){return n===Qn?void 0:n}function vE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new TE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const AE={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},bE=ce.INFO,RE={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},SE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=RE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lu{constructor(e){this.name=e,this._logLevel=bE,this._logHandler=SE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const PE=(n,e)=>e.some(t=>n instanceof t);let rh,sh;function CE(){return rh||(rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DE(){return sh||(sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fd=new WeakMap,Qa=new WeakMap,Ud=new WeakMap,Aa=new WeakMap,Fu=new WeakMap;function VE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Rn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fd.set(t,n)}).catch(()=>{}),Fu.set(e,n),e}function kE(n){if(Qa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Qa.set(n,e)}let Ja={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ud.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function OE(n){Ja=n(Ja)}function NE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ba(this),e,...t);return Ud.set(r,e.sort?e.sort():[e]),Rn(r)}:DE().includes(n)?function(...e){return n.apply(ba(this),e),Rn(Fd.get(this))}:function(...e){return Rn(n.apply(ba(this),e))}}function xE(n){return typeof n=="function"?NE(n):(n instanceof IDBTransaction&&kE(n),PE(n,CE())?new Proxy(n,Ja):n)}function Rn(n){if(n instanceof IDBRequest)return VE(n);if(Aa.has(n))return Aa.get(n);const e=xE(n);return e!==n&&(Aa.set(n,e),Fu.set(e,n)),e}const ba=n=>Fu.get(n);function ME(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),u=Rn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Rn(a.result),l.oldVersion,l.newVersion,Rn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const LE=["get","getKey","getAll","getAllKeys","count"],FE=["put","add","delete","clear"],Ra=new Map;function ih(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=FE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LE.includes(t)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),s&&l.done]))[0]};return Ra.set(e,i),i}OE(n=>({...n,get:(e,t,r)=>ih(e,t)||n.get(e,t,r),has:(e,t)=>!!ih(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(BE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function BE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",oh="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Lu("@firebase/app"),jE="@firebase/app-compat",$E="@firebase/analytics-compat",qE="@firebase/analytics",HE="@firebase/app-check-compat",zE="@firebase/app-check",WE="@firebase/auth",KE="@firebase/auth-compat",GE="@firebase/database",QE="@firebase/data-connect",JE="@firebase/database-compat",XE="@firebase/functions",YE="@firebase/functions-compat",ZE="@firebase/installations",eT="@firebase/installations-compat",tT="@firebase/messaging",nT="@firebase/messaging-compat",rT="@firebase/performance",sT="@firebase/performance-compat",iT="@firebase/remote-config",oT="@firebase/remote-config-compat",aT="@firebase/storage",uT="@firebase/storage-compat",lT="@firebase/firestore",cT="@firebase/vertexai",hT="@firebase/firestore-compat",fT="firebase",dT="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="[DEFAULT]",pT={[Xa]:"fire-core",[jE]:"fire-core-compat",[qE]:"fire-analytics",[$E]:"fire-analytics-compat",[zE]:"fire-app-check",[HE]:"fire-app-check-compat",[WE]:"fire-auth",[KE]:"fire-auth-compat",[GE]:"fire-rtdb",[QE]:"fire-data-connect",[JE]:"fire-rtdb-compat",[XE]:"fire-fn",[YE]:"fire-fn-compat",[ZE]:"fire-iid",[eT]:"fire-iid-compat",[tT]:"fire-fcm",[nT]:"fire-fcm-compat",[rT]:"fire-perf",[sT]:"fire-perf-compat",[iT]:"fire-rc",[oT]:"fire-rc-compat",[aT]:"fire-gcs",[uT]:"fire-gcs-compat",[lT]:"fire-fst",[hT]:"fire-fst-compat",[cT]:"fire-vertex","fire-js":"fire-js",[fT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map,gT=new Map,Za=new Map;function ah(n,e){try{n.container.addComponent(e)}catch(t){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xr(n){const e=n.name;if(Za.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,n);for(const t of no.values())ah(t,n);for(const t of gT.values())ah(t,n);return!0}function Uu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Yt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new Ys("app","Firebase",mT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=dT;function Bd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ya,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(t||(t=Md()),!t)throw Sn.create("no-options");const i=no.get(s);if(i){if(to(t,i.options)&&to(r,i.config))return i;throw Sn.create("duplicate-app",{appName:s})}const a=new wE(s);for(const l of Za.values())a.addComponent(l);const u=new _T(t,r,a);return no.set(s,u),u}function jd(n=Ya){const e=no.get(n);if(!e&&n===Ya&&Md())return Bd();if(!e)throw Sn.create("no-app",{appName:n});return e}function Pn(n,e,t){var r;let s=(r=pT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(u.join(" "));return}xr(new sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="firebase-heartbeat-database",ET=1,Fs="firebase-heartbeat-store";let Sa=null;function $d(){return Sa||(Sa=ME(yT,ET,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Sn.create("idb-open",{originalErrorMessage:n.message})})),Sa}async function TT(n){try{const t=(await $d()).transaction(Fs),r=await t.objectStore(Fs).get(qd(n));return await t.done,r}catch(e){if(e instanceof cn)rn.warn(e.message);else{const t=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(t.message)}}}async function uh(n,e){try{const r=(await $d()).transaction(Fs,"readwrite");await r.objectStore(Fs).put(e,qd(n)),await r.done}catch(t){if(t instanceof cn)rn.warn(t.message);else{const r=Sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rn.warn(r.message)}}}function qd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=1024,vT=30*24*60*60*1e3;class wT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=vT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lh(),{heartbeatsToSend:r,unsentEntries:s}=AT(this._heartbeatsCache.heartbeats),i=eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return rn.warn(t),""}}}function lh(){return new Date().toISOString().substring(0,10)}function AT(n,e=IT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ch(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ch(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hE()?fE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await TT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ch(n){return eo(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n){xr(new sr("platform-logger",e=>new UE(e),"PRIVATE")),xr(new sr("heartbeat",e=>new wT(e),"PRIVATE")),Pn(Xa,oh,n),Pn(Xa,oh,"esm2017"),Pn("fire-js","")}RT("");var ST="firebase",PT="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(ST,PT,"app");function Bu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Hd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CT=Hd,zd=new Ys("auth","Firebase",Hd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Lu("@firebase/auth");function DT(n,...e){ro.logLevel<=ce.WARN&&ro.warn(`Auth (${Hr}): ${n}`,...e)}function Mi(n,...e){ro.logLevel<=ce.ERROR&&ro.error(`Auth (${Hr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n,...e){throw $u(n,...e)}function Ct(n,...e){return $u(n,...e)}function ju(n,e,t){const r=Object.assign(Object.assign({},CT()),{[e]:t});return new Ys("auth","Firebase",r).create(e,{appName:n.name})}function er(n){return ju(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function VT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(n,"argument-error"),ju(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $u(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return zd.create(n,...e)}function ne(n,e,...t){if(!n)throw $u(e,...t)}function Zt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mi(e),new Error(e)}function sn(n,e){n||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function kT(){return hh()==="http:"||hh()==="https:"}function hh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kT()||aE()||"connection"in navigator)?navigator.onLine:!0}function NT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,sn(t>e,"Short delay should be less than long delay!"),this.isMobile=sE()||uE()}get(){return OT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n,e){sn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=new ei(3e4,6e4);function Hu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zr(n,e,t,r,s={}){return Kd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const u=Zs(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:l},i);return oE()||(f.referrerPolicy="no-referrer"),Wd.fetch()(Gd(n,n.config.apiHost,t,u),f)})}async function Kd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xT),e);try{const s=new FT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Si(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const u=i.ok?a.errorMessage:a.error.message,[l,f]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Si(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Si(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw ju(n,d,f);jt(n,d)}}catch(s){if(s instanceof cn)throw s;jt(n,"network-request-failed",{message:String(s)})}}async function LT(n,e,t,r,s={}){const i=await zr(n,e,t,r,s);return"mfaPendingCredential"in i&&jt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Gd(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?qu(n.config,s):`${n.config.apiScheme}://${s}`}class FT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),MT.get())})}}function Si(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ct(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(n,e){return zr(n,"POST","/v1/accounts:delete",e)}async function Qd(n,e){return zr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BT(n,e=!1){const t=ct(n),r=await t.getIdToken(e),s=zu(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Rs(Pa(s.auth_time)),issuedAtTime:Rs(Pa(s.iat)),expirationTime:Rs(Pa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pa(n){return Number(n)*1e3}function zu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nd(t);return s?JSON.parse(s):(Mi("Failed to decode base64 JWT payload"),null)}catch(s){return Mi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fh(n){const e=zu(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof cn&&jT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Us(n,Qd(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Jd(i.providerUserInfo):[],u=HT(n.providerData,a),l=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!(u!=null&&u.length),d=l?f:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new tu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function qT(n){const e=ct(n);await so(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jd(n){return n.map(e=>{var{providerId:t}=e,r=Bu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(n,e){const t=await Kd(n,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Gd(n,s,"/v1/token",`key=${i}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Wd.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function WT(n,e){return zr(n,"POST","/v2/accounts:revokeToken",Hu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=fh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await zT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Cr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class en{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $T(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Us(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BT(this,e)}reload(){return qT(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new en(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await so(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Us(this,UT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,u,l,f,d;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(u=t.tenantId)!==null&&u!==void 0?u:void 0,F=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,W=(f=t.createdAt)!==null&&f!==void 0?f:void 0,Q=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:H,isAnonymous:oe,providerData:ye,stsTokenManager:w}=t;ne(G&&w,e,"internal-error");const m=Cr.fromJSON(this.name,w);ne(typeof G=="string",e,"internal-error"),gn(g,e.name),gn(I,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),gn(b,e.name),gn(D,e.name),gn(L,e.name),gn(F,e.name),gn(W,e.name),gn(Q,e.name);const _=new en({uid:G,auth:e,email:I,emailVerified:H,displayName:g,isAnonymous:oe,photoURL:D,phoneNumber:b,tenantId:L,stsTokenManager:m,createdAt:W,lastLoginAt:Q});return ye&&Array.isArray(ye)&&(_.providerData=ye.map(T=>Object.assign({},T))),F&&(_._redirectEventId=F),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new Cr;s.updateFromServerResponse(t);const i=new en({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await so(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new Cr;u.updateFromIdToken(r);const l=new en({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new tu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,f),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Map;function tn(n){sn(n instanceof Function,"Expected a class definition");let e=dh.get(n);return e?(sn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xd.type="NONE";const ph=Xd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n,e,t){return`firebase:${n}:${e}:${t}`}class Dr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Li(this.userKey,s.apiKey,i),this.fullPersistenceKey=Li("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?en._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Dr(tn(ph),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||tn(ph);const a=Li(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const d=await f._get(a);if(d){const g=en._fromJSON(e,d);f!==i&&(u=g),i=f;break}}catch{}const l=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Dr(i,e,r):(i=l[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Dr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rp(e))return"Blackberry";if(sp(e))return"Webos";if(Zd(e))return"Safari";if((e.includes("chrome/")||ep(e))&&!e.includes("edge/"))return"Chrome";if(np(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yd(n=st()){return/firefox\//i.test(n)}function Zd(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ep(n=st()){return/crios\//i.test(n)}function tp(n=st()){return/iemobile/i.test(n)}function np(n=st()){return/android/i.test(n)}function rp(n=st()){return/blackberry/i.test(n)}function sp(n=st()){return/webos/i.test(n)}function Wu(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function KT(n=st()){var e;return Wu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GT(){return lE()&&document.documentMode===10}function ip(n=st()){return Wu(n)||np(n)||sp(n)||rp(n)||/windows phone/i.test(n)||tp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n,e=[]){let t;switch(n){case"Browser":t=gh(st());break;case"Worker":t=`${gh(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,u)=>{try{const l=e(i);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(n,e={}){return zr(n,"GET","/v2/passwordPolicy",Hu(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=6;class YT{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:XT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mh(this),this.idTokenSubscription=new mh(this),this.beforeStateQueue=new QT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qd(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Yt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await so(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(er(this));const t=e?ct(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JT(this),t=new YT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await WT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[tn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=op(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&DT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oo(n){return ct(n)}class mh{constructor(e){this.auth=e,this.observer=null,this.addObserver=_E(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eI(n){Ku=n}function tI(n){return Ku.loadJS(n)}function nI(){return Ku.gapiScript}function rI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(n,e){const t=Uu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(to(i,e??{}))return s;jt(s,"already-initialized")}return t.initialize({options:e})}function iI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oI(n,e,t){const r=Oo(n);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ap(e),{host:a,port:u}=aI(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),uI()}function ap(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aI(n){const e=ap(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_h(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:_h(a)}}}function _h(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function uI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,t){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(n,e){return LT(n,"POST","/v1/accounts:signInWithIdp",Hu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="http://localhost";class ir extends up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Bu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new ir(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vr(e,t)}buildRequest(){const e={requestUri:lI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Gu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends ti{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ir._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xt.credential(t,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends ti{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends ti{constructor(){super("twitter.com")}static credential(e,t){return ir._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vn.credential(t,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await en._fromIdTokenResponse(e,r,s),a=yh(r);return new Mr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=yh(r);return new Mr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function yh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends cn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new io(e,t,r,s)}}function lp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(n,i,e,r):i})}async function cI(n,e,t=!1){const r=await Us(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(n,e,t=!1){const{auth:r}=n;if(Yt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await Us(n,lp(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=zu(i.idToken);ne(a,r,"internal-error");const{sub:u}=a;return ne(n.uid===u,r,"user-mismatch"),Mr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(n,e,t=!1){if(Yt(n.app))return Promise.reject(er(n));const r="signIn",s=await lp(n,r,e),i=await Mr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function dI(n,e,t,r){return ct(n).onIdTokenChanged(e,t,r)}function pI(n,e,t){return ct(n).beforeAuthStateChanged(e,t)}function gI(n,e,t,r){return ct(n).onAuthStateChanged(e,t,r)}function mI(n){return ct(n).signOut()}const oo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oo,"1"),this.storage.removeItem(oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1e3,yI=10;class hp extends cp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ip(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);GT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hp.type="LOCAL";const EI=hp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp extends cp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fp.type="SESSION";const dp=fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new No(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async f=>f(t.origin,i)),l=await TI(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,l)=>{const f=Qu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const I=g;if(I.data.eventId===f)switch(I.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(I.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function vI(n){Lt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function wI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bI(){return pp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="firebaseLocalStorageDb",RI=1,ao="firebaseLocalStorage",mp="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xo(n,e){return n.transaction([ao],e?"readwrite":"readonly").objectStore(ao)}function SI(){const n=indexedDB.deleteDatabase(gp);return new ni(n).toPromise()}function nu(){const n=indexedDB.open(gp,RI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ao,{keyPath:mp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ao)?e(r):(r.close(),await SI(),e(await nu()))})})}async function Eh(n,e,t){const r=xo(n,!0).put({[mp]:e,value:t});return new ni(r).toPromise()}async function PI(n,e){const t=xo(n,!1).get(e),r=await new ni(t).toPromise();return r===void 0?null:r.value}function Th(n,e){const t=xo(n,!0).delete(e);return new ni(t).toPromise()}const CI=800,DI=3;class _p{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>DI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(bI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wI(),!this.activeServiceWorker)return;this.sender=new II(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await Eh(e,oo,"1"),await Th(e,oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>PI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Th(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xo(s,!1).getAll();return new ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_p.type="LOCAL";const VI=_p;new ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n,e){return e?tn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kI(n){return fI(n.auth,new Ju(n),n.bypassAuthState)}function OI(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),hI(t,new Ju(n),n.bypassAuthState)}async function NI(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),cI(t,new Ju(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kI;case"linkViaPopup":case"linkViaRedirect":return NI;case"reauthViaPopup":case"reauthViaRedirect":return OI;default:jt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new ei(2e3,1e4);async function MI(n,e,t){if(Yt(n.app))return Promise.reject(Ct(n,"operation-not-supported-in-this-environment"));const r=Oo(n);VT(n,e,Gu);const s=yp(r,t);return new Jn(r,"signInViaPopup",e,s).executeNotNull()}class Jn extends Ep{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xI.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="pendingRedirect",Fi=new Map;class FI extends Ep{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Fi.get(this.auth._key());if(!e){try{const r=await UI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Fi.set(this.auth._key(),e)}return this.bypassAuthState||Fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UI(n,e){const t=$I(e),r=jI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function BI(n,e){Fi.set(n._key(),e)}function jI(n){return tn(n._redirectPersistence)}function $I(n){return Li(LI,n.config.apiKey,n.name)}async function qI(n,e,t=!1){if(Yt(n.app))return Promise.reject(er(n));const r=Oo(n),s=yp(r,e),a=await new FI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=10*60*1e3;class zI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Tp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ct(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ih(e))}saveEventToCache(e){this.cachedEventUids.add(Ih(e)),this.lastProcessedEventTime=Date.now()}}function Ih(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(n,e={}){return zr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QI=/^https?/;async function JI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await KI(n);for(const t of e)try{if(XI(t))return}catch{}jt(n,"unauthorized-domain")}function XI(n){const e=eu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!QI.test(t))return!1;if(GI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new ei(3e4,6e4);function vh(){const n=Lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ZI(n){return new Promise((e,t)=>{var r,s,i;function a(){vh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vh(),t(Ct(n,"network-request-failed"))},timeout:YI.get()})}if(!((s=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Lt().gapi)===null||i===void 0)&&i.load)a();else{const u=rI("iframefcb");return Lt()[u]=()=>{gapi.load?a():t(Ct(n,"network-request-failed"))},tI(`${nI()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Ui=null,e})}let Ui=null;function ev(n){return Ui=Ui||ZI(n),Ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new ei(5e3,15e3),nv="__/auth/iframe",rv="emulator/auth/iframe",sv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ov(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qu(e,rv):`https://${n.config.authDomain}/${nv}`,r={apiKey:e.apiKey,appName:n.name,v:Hr},s=iv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Zs(r).slice(1)}`}async function av(n){const e=await ev(n),t=Lt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:ov(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ct(n,"network-request-failed"),u=Lt().setTimeout(()=>{i(a)},tv.get());function l(){Lt().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lv=500,cv=600,hv="_blank",fv="http://localhost";class wh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dv(n,e,t,r=lv,s=cv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},uv),{width:r.toString(),height:s.toString(),top:i,left:a}),f=st().toLowerCase();t&&(u=ep(f)?hv:t),Yd(f)&&(e=e||fv,l.scrollbars="yes");const d=Object.entries(l).reduce((I,[b,D])=>`${I}${b}=${D},`,"");if(KT(f)&&u!=="_self")return pv(e||"",u),new wh(null);const g=window.open(e||"",u,d);ne(g,n,"popup-blocked");try{g.focus()}catch{}return new wh(g)}function pv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="__/auth/handler",mv="emulator/auth/handler",_v=encodeURIComponent("fac");async function Ah(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Hr,eventId:s};if(e instanceof Gu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",mE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof ti){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const d of Object.keys(u))u[d]===void 0&&delete u[d];const l=await n._getAppCheckToken(),f=l?`#${_v}=${encodeURIComponent(l)}`:"";return`${yv(n)}?${Zs(u).slice(1)}${f}`}function yv({config:n}){return n.emulator?qu(n,mv):`https://${n.authDomain}/${gv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="webStorageSupport";class Ev{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dp,this._completeRedirectFn=qI,this._overrideRedirectResult=BI}async _openPopup(e,t,r,s){var i;sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ah(e,t,r,eu(),s);return dv(e,a,Qu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ah(e,t,r,eu(),s);return vI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await av(e),r=new zI(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ca,{type:Ca},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ca];a!==void 0&&t(!!a),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ip()||Zd()||Wu()}}const Tv=Ev;var bh="@firebase/auth",Rh="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wv(n){xr(new sr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:op(n)},f=new ZT(r,s,i,l);return iI(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xr(new sr("auth-internal",e=>{const t=Oo(e.getProvider("auth").getImmediate());return(r=>new Iv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(bh,Rh,vv(n)),Pn(bh,Rh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=5*60,bv=Ld("authIdTokenMaxAge")||Av;let Sh=null;const Rv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>bv)return;const s=t==null?void 0:t.token;Sh!==s&&(Sh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Sv(n=jd()){const e=Uu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sI(n,{popupRedirectResolver:Tv,persistence:[VI,EI,dp]}),r=Ld("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Rv(i.toString());pI(t,a,()=>a(t.currentUser)),dI(t,u=>a(u))}}const s=xd("auth");return s&&oI(t,`http://${s}`),t}function Pv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}eI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ct("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Pv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wv("Browser");var Ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,Ip;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(T,A,R){for(var y=Array(arguments.length-2),it=2;it<arguments.length;it++)y[it-2]=arguments[it];return m.prototype[A].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)T[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],A=w.g[2];var R=w.g[3],y=m+(R^_&(A^R))+T[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=R+(A^m&(_^A))+T[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(_^R&(m^_))+T[2]+606105819&4294967295,A=R+(y<<17&4294967295|y>>>15),y=_+(m^A&(R^m))+T[3]+3250441966&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(R^_&(A^R))+T[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(A^m&(_^A))+T[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(_^R&(m^_))+T[6]+2821735955&4294967295,A=R+(y<<17&4294967295|y>>>15),y=_+(m^A&(R^m))+T[7]+4249261313&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(R^_&(A^R))+T[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(A^m&(_^A))+T[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(_^R&(m^_))+T[10]+4294925233&4294967295,A=R+(y<<17&4294967295|y>>>15),y=_+(m^A&(R^m))+T[11]+2304563134&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(R^_&(A^R))+T[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(A^m&(_^A))+T[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(_^R&(m^_))+T[14]+2792965006&4294967295,A=R+(y<<17&4294967295|y>>>15),y=_+(m^A&(R^m))+T[15]+1236535329&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(A^R&(_^A))+T[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^A&(m^_))+T[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(R^m))+T[11]+643717713&4294967295,A=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(A^R))+T[0]+3921069994&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(_^A))+T[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^A&(m^_))+T[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(R^m))+T[15]+3634488961&4294967295,A=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(A^R))+T[4]+3889429448&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(_^A))+T[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^A&(m^_))+T[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(R^m))+T[3]+4107603335&4294967295,A=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(A^R))+T[8]+1163531501&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(_^A))+T[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^A&(m^_))+T[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(R^m))+T[7]+1735328473&4294967295,A=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(A^R))+T[12]+2368359562&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(_^A^R)+T[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^A)+T[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^_)+T[11]+1839030562&4294967295,A=R+(y<<16&4294967295|y>>>16),y=_+(A^R^m)+T[14]+4259657740&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^R)+T[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^A)+T[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^_)+T[7]+4139469664&4294967295,A=R+(y<<16&4294967295|y>>>16),y=_+(A^R^m)+T[10]+3200236656&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^R)+T[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^A)+T[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^_)+T[3]+3572445317&4294967295,A=R+(y<<16&4294967295|y>>>16),y=_+(A^R^m)+T[6]+76029189&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^R)+T[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^A)+T[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^_)+T[15]+530742520&4294967295,A=R+(y<<16&4294967295|y>>>16),y=_+(A^R^m)+T[2]+3299628645&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(A^(_|~R))+T[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~A))+T[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~_))+T[14]+2878612391&4294967295,A=R+(y<<15&4294967295|y>>>17),y=_+(R^(A|~m))+T[5]+4237533241&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~R))+T[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~A))+T[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~_))+T[10]+4293915773&4294967295,A=R+(y<<15&4294967295|y>>>17),y=_+(R^(A|~m))+T[1]+2240044497&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~R))+T[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~A))+T[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~_))+T[6]+2734768916&4294967295,A=R+(y<<15&4294967295|y>>>17),y=_+(R^(A|~m))+T[13]+1309151649&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~R))+T[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~A))+T[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~_))+T[2]+718787259&4294967295,A=R+(y<<15&4294967295|y>>>17),y=_+(R^(A|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=_;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(T[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,T),A=0;break}}else for(;R<m;)if(T[A++]=w[R++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)w[_++]=this.g[m]>>>T&255;return w};function i(w,m){var _=u;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],T=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;T&&R==m||(_[A]=R,T=!1)}this.g=_}var u={};function l(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return F(f(-w));for(var m=[],_=1,T=0;w>=_;T++)m[T]=w/_|0,_*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),T=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+R),m);8>R?(R=f(Math.pow(m,R)),T=T.j(R).add(f(y))):(T=T.j(_),T=T.add(f(y)))}return T}var g=l(0),I=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(L(this))return-F(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(L(this))return"-"+F(this).toString(w);for(var m=f(Math.pow(w,6)),_=this,T="";;){var A=H(_,m).g;_=W(_,A.j(m));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,D(_))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function L(w){return w.h==-1}n.l=function(w){return w=W(this,w),L(w)?-1:D(w)?0:1};function F(w){for(var m=w.g.length,_=[],T=0;T<m;T++)_[T]=~w.g[T];return new a(_,~w.h).add(I)}n.abs=function(){return L(this)?F(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(w.i(A)&65535),y=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=y>>>16,R&=65535,y&=65535,_[A]=y<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function W(w,m){return w.add(F(m))}n.j=function(w){if(D(this)||D(w))return g;if(L(this))return L(w)?F(this).j(F(w)):F(F(this).j(w));if(L(w))return F(this.j(F(w)));if(0>this.l(b)&&0>w.l(b))return f(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var R=this.i(T)>>>16,y=this.i(T)&65535,it=w.i(A)>>>16,Vt=w.i(A)&65535;_[2*T+2*A]+=y*Vt,Q(_,2*T+2*A),_[2*T+2*A+1]+=R*Vt,Q(_,2*T+2*A+1),_[2*T+2*A+1]+=y*it,Q(_,2*T+2*A+1),_[2*T+2*A+2]+=R*it,Q(_,2*T+2*A+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function G(w,m){this.g=w,this.h=m}function H(w,m){if(D(m))throw Error("division by zero");if(D(w))return new G(g,g);if(L(w))return m=H(F(w),m),new G(F(m.g),F(m.h));if(L(m))return m=H(w,F(m)),new G(F(m.g),m.h);if(30<w.g.length){if(L(w)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,T=m;0>=T.l(w);)_=oe(_),T=oe(T);var A=ye(_,1),R=ye(T,1);for(T=ye(T,2),_=ye(_,2);!D(T);){var y=R.add(T);0>=y.l(w)&&(A=A.add(_),R=y),T=ye(T,1),_=ye(_,1)}return m=W(w,A.j(m)),new G(A,m)}for(A=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=f(_),y=R.j(m);L(y)||0<y.l(w);)_-=T,R=f(_),y=R.j(m);D(R)&&(R=I),A=A.add(R),w=W(w,y)}return new G(A,w)}n.A=function(w){return H(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&w.i(T);return new a(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|w.i(T);return new a(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^w.i(T);return new a(_,this.h^w.h)};function oe(w){for(var m=w.g.length+1,_=[],T=0;T<m;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(_,w.h)}function ye(w,m){var _=m>>5;m%=32;for(var T=w.g.length-_,A=[],R=0;R<T;R++)A[R]=0<m?w.i(R+_)>>>m|w.i(R+_+1)<<32-m:w.i(R+_);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ip=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,tr=a}).apply(typeof Ph<"u"?Ph:typeof self<"u"?self:typeof window<"u"?window:{});var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vp,gs,wp,Bi,ru,Ap,bp,Rp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pi=="object"&&Pi];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in h))break e;h=h[S]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,S={next:function(){if(!p&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function d(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,I.apply(null,arguments)}function b(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function D(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,S,P){for(var j=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)j[Ie-2]=arguments[Ie];return c.prototype[S].apply(p,j)}}function L(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function F(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(l(p)){const S=o.length||0,P=p.length||0;o.length=S+P;for(let j=0;j<P;j++)o[S+j]=p[j]}else o.push(p)}}class W{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Q(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ye(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function w(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)o[h]=p[h];for(let P=0;P<_.length;P++)h=_[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function y(){var o=At;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class it{constructor(){this.h=this.g=null}add(c,h){const p=Vt.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Vt=new W(()=>new Re,o=>o.reset());class Re{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ge=!1,At=new it,Un=()=>{const o=u.Promise.resolve(void 0);ae=()=>{o.then(qt)}};var qt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){R(h)}var c=Vt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}ge=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Qo=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Bn(o,c){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(oe){e:{try{H(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:jn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Bn.aa.h.call(this)}}D(Bn,Me);var jn={2:"touch",3:"pen",4:"mouse"};Bn.prototype.h=function(){Bn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),Xr=0;function ai(o,c,h,p,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=S,this.key=++Xr,this.da=this.fa=!1}function kt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Yr(o){this.src=o,this.g={},this.h=0}Yr.prototype.add=function(o,c,h,p,S){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=v(o,c,p,S);return-1<j?(c=o[j],h||(c.fa=!1)):(c=new ai(c,this.src,P,!!p,S),c.fa=h,o.push(c)),c};function E(o,c){var h=c.type;if(h in o.g){var p=o.g[h],S=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=S)&&Array.prototype.splice.call(p,S,1),P&&(kt(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function v(o,c,h,p){for(var S=0;S<o.length;++S){var P=o[S];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==p)return S}return-1}var C="closure_lm_"+(1e6*Math.random()|0),N={};function O(o,c,h,p,S){if(Array.isArray(c)){for(var P=0;P<c.length;P++)O(o,c[P],h,p,S);return null}return h=ee(h),o&&o[Ht]?o.K(c,h,f(p)?!!p.capture:!1,S):x(o,c,h,!1,p,S)}function x(o,c,h,p,S,P){if(!c)throw Error("Invalid event type");var j=f(S)?!!S.capture:!!S,Ie=q(o);if(Ie||(o[C]=Ie=new Yr(o)),h=Ie.add(c,h,p,j,P),h.proxy)return h;if(p=$(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Qo||(S=j),S===void 0&&(S=!1),o.addEventListener(c.toString(),p,S);else if(o.attachEvent)o.attachEvent(M(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $(){function o(h){return c.call(o.src,o.listener,h)}const c=Y;return o}function B(o,c,h,p,S){if(Array.isArray(c))for(var P=0;P<c.length;P++)B(o,c[P],h,p,S);else p=f(p)?!!p.capture:!!p,h=ee(h),o&&o[Ht]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=v(P,h,p,S),-1<h&&(kt(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=q(o))&&(c=o.g[c.toString()],o=-1,c&&(o=v(c,h,p,S)),(h=-1<o?c[o]:null)&&U(h))}function U(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ht])E(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(M(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=q(c))?(E(h,o),h.h==0&&(h.src=null,c[C]=null)):kt(o)}}}function M(o){return o in N?N[o]:N[o]="on"+o}function Y(o,c){if(o.da)o=!0;else{c=new Bn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&U(o),o=h.call(p,c)}return o}function q(o){return o=o[C],o instanceof Yr?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(o){return typeof o=="function"?o:(o[J]||(o[J]=function(c){return o.handleEvent(c)}),o[J])}function Z(){xe.call(this),this.i=new Yr(this),this.M=this,this.F=null}D(Z,xe),Z.prototype[Ht]=!0,Z.prototype.removeEventListener=function(o,c,h,p){B(this,o,c,h,p)};function ue(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Me(c,o);else if(c instanceof Me)c.target=c.target||o;else{var S=c;c=new Me(p,o),T(c,S)}if(S=!0,h)for(var P=h.length-1;0<=P;P--){var j=c.g=h[P];S=de(j,p,!0,c)&&S}if(j=c.g=o,S=de(j,p,!0,c)&&S,S=de(j,p,!1,c)&&S,h)for(P=0;P<h.length;P++)j=c.g=h[P],S=de(j,p,!1,c)&&S}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)kt(h[p]);delete o.g[c],o.h--}}this.F=null},Z.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Z.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function de(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,P=0;P<c.length;++P){var j=c[P];if(j&&!j.da&&j.capture==h){var Ie=j.listener,$e=j.ha||j.src;j.fa&&E(o.i,j),S=Ie.call($e,p)!==!1&&S}}return S&&!p.defaultPrevented}function Ke(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Be(o){o.g=Ke(()=>{o.g=null,o.i&&(o.i=!1,Be(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Et extends xe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(o){xe.call(this),this.h=o,this.g={}}D(Ge,xe);var hn=[];function Zr(o){ye(o.g,function(c,h){this.g.hasOwnProperty(h)&&U(c)},o),o.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),Zr(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var je=u.JSON.stringify,Tt=u.JSON.parse,ui=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Jo(){}Jo.prototype.h=null;function Ol(o){return o.h||(o.h=o.i())}function Nl(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xo(){Me.call(this,"d")}D(Xo,Me);function Yo(){Me.call(this,"c")}D(Yo,Me);var $n={},xl=null;function li(){return xl=xl||new Z}$n.La="serverreachability";function Ml(o){Me.call(this,$n.La,o)}D(Ml,Me);function ts(o){const c=li();ue(c,new Ml(c))}$n.STAT_EVENT="statevent";function Ll(o,c){Me.call(this,$n.STAT_EVENT,o),this.stat=c}D(Ll,Me);function ot(o){const c=li();ue(c,new Ll(c,o))}$n.Ma="timingevent";function Fl(o,c){Me.call(this,$n.Ma,o),this.size=c}D(Fl,Me);function ns(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function rs(){this.g=!0}rs.prototype.xa=function(){this.g=!1};function Wg(o,c,h,p,S,P){o.info(function(){if(o.g)if(P)for(var j="",Ie=P.split("&"),$e=0;$e<Ie.length;$e++){var me=Ie[$e].split("=");if(1<me.length){var Qe=me[0];me=me[1];var Je=Qe.split("_");j=2<=Je.length&&Je[1]=="type"?j+(Qe+"="+me+"&"):j+(Qe+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+c+`
`+h+`
`+j})}function Kg(o,c,h,p,S,P,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+c+`
`+h+`
`+P+" "+j})}function fr(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Qg(o,h)+(p?" "+p:"")})}function Gg(o,c){o.info(function(){return"TIMEOUT: "+c})}rs.prototype.info=function(){};function Qg(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<S.length;j++)S[j]=""}}}}return je(h)}catch{return c}}var ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ul={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zo;function hi(){}D(hi,Jo),hi.prototype.g=function(){return new XMLHttpRequest},hi.prototype.i=function(){return{}},Zo=new hi;function fn(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bl}function Bl(){this.i=null,this.g="",this.h=!1}var jl={},ea={};function ta(o,c,h){o.L=1,o.v=gi(zt(c)),o.m=h,o.P=!0,$l(o,null)}function $l(o,c){o.F=Date.now(),fi(o),o.A=zt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),nc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Bl,o.g=Tc(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Et(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(hn[0]=S.toString()),S=hn);for(var P=0;P<S.length;P++){var j=O(h,S[P],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),ts(),Wg(o.i,o.u,o.A,o.l,o.R,o.m)}fn.prototype.ca=function(o){o=o.target;const c=this.M;c&&Wt(o)==3?c.j():this.Y(o)},fn.prototype.Y=function(o){try{if(o==this.g)e:{const Je=Wt(this.g);var c=this.g.Ba();const gr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||lc(this.g)))){this.J||Je!=4||c==7||(c==8||0>=gr?ts(3):ts(2)),na(this);var h=this.g.Z();this.X=h;t:if(ql(this)){var p=lc(this.g);o="";var S=p.length,P=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),ss(this);var j="";break t}this.h.i=new u.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==S-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,Kg(this.i,this.u,this.A,this.l,this.R,Je,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,$e=this.g;if((Ie=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Ie)){var me=Ie;break t}}me=null}if(h=me)fr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,h);else{this.o=!1,this.s=3,ot(12),qn(this),ss(this);break e}}if(this.P){h=!0;let bt;for(;!this.J&&this.C<j.length;)if(bt=Jg(this,j),bt==ea){Je==4&&(this.s=4,ot(14),h=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==jl){this.s=4,ot(15),fr(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else fr(this.i,this.l,bt,null),ra(this,bt);if(ql(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||j.length!=0||this.h.h||(this.s=1,ot(16),h=!1),this.o=this.o&&h,!h)fr(this.i,this.l,j,"[Invalid Chunked Response]"),qn(this),ss(this);else if(0<j.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),la(Qe),Qe.M=!0,ot(11))}}else fr(this.i,this.l,j,null),ra(this,j);Je==4&&qn(this),this.o&&!this.J&&(Je==4?mc(this.j,this):(this.o=!1,fi(this)))}else dm(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),qn(this),ss(this)}}}catch{}finally{}};function ql(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Jg(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?ea:(h=Number(c.substring(h,p)),isNaN(h)?jl:(p+=1,p+h>c.length?ea:(c=c.slice(p,p+h),o.C=p+h,c)))}fn.prototype.cancel=function(){this.J=!0,qn(this)};function fi(o){o.S=Date.now()+o.I,Hl(o,o.I)}function Hl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ns(I(o.ba,o),c)}function na(o){o.B&&(u.clearTimeout(o.B),o.B=null)}fn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Gg(this.i,this.A),this.L!=2&&(ts(),ot(17)),qn(this),this.s=2,ss(this)):Hl(this,this.S-o)};function ss(o){o.j.G==0||o.J||mc(o.j,o)}function qn(o){na(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Zr(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ra(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||sa(h.h,o))){if(!o.K&&sa(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ii(h),Ei(h);else break e;ua(h),ot(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=ns(I(h.Za,h),6e3));if(1>=Kl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else zn(h,11)}else if((o.K||h.g==o)&&Ii(h),!Q(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let me=S[c];if(h.T=me[0],me=me[1],h.G==2)if(me[0]=="c"){h.K=me[1],h.ia=me[2];const Qe=me[3];Qe!=null&&(h.la=Qe,h.j.info("VER="+h.la));const Je=me[4];Je!=null&&(h.Aa=Je,h.j.info("SVER="+h.Aa));const gr=me[5];gr!=null&&typeof gr=="number"&&0<gr&&(p=1.5*gr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const bt=o.g;if(bt){const wi=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wi){var P=p.h;P.g||wi.indexOf("spdy")==-1&&wi.indexOf("quic")==-1&&wi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ia(P,P.h),P.h=null))}if(p.D){const ca=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;ca&&(p.ya=ca,Ae(p.I,p.D,ca))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var j=o;if(p.qa=Ec(p,p.J?p.ia:null,p.W),j.K){Gl(p.h,j);var Ie=j,$e=p.L;$e&&(Ie.I=$e),Ie.B&&(na(Ie),fi(Ie)),p.g=j}else pc(p);0<h.i.length&&Ti(h)}else me[0]!="stop"&&me[0]!="close"||zn(h,7);else h.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?zn(h,7):aa(h):me[0]!="noop"&&h.l&&h.l.ta(me),h.v=0)}}ts(4)}catch{}}var Xg=class{constructor(o,c){this.g=o,this.map=c}};function zl(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Kl(o){return o.h?1:o.g?o.g.size:0}function sa(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ia(o,c){o.g?o.g.add(c):o.h=c}function Gl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}zl.prototype.cancel=function(){if(this.i=Ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ql(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return L(o.i)}function Yg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Zg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Jl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Zg(o),p=Yg(o),S=p.length,P=0;P<S;P++)c.call(void 0,p[P],h&&h[P],o)}var Xl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function em(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),S=null;if(0<=p){var P=o[h].substring(0,p);S=o[h].substring(p+1)}else P=o[h];c(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hn){this.h=o.h,di(this,o.j),this.o=o.o,this.g=o.g,pi(this,o.s),this.l=o.l;var c=o.i,h=new as;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Yl(this,h),this.m=o.m}else o&&(c=String(o).match(Xl))?(this.h=!1,di(this,c[1]||"",!0),this.o=is(c[2]||""),this.g=is(c[3]||"",!0),pi(this,c[4]),this.l=is(c[5]||"",!0),Yl(this,c[6]||"",!0),this.m=is(c[7]||"")):(this.h=!1,this.i=new as(null,this.h))}Hn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(os(c,Zl,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(os(c,Zl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(os(h,h.charAt(0)=="/"?rm:nm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",os(h,im)),o.join("")};function zt(o){return new Hn(o)}function di(o,c,h){o.j=h?is(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function pi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Yl(o,c,h){c instanceof as?(o.i=c,om(o.i,o.h)):(h||(c=os(c,sm)),o.i=new as(c,o.h))}function Ae(o,c,h){o.i.set(c,h)}function gi(o){return Ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function is(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function os(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,tm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function tm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Zl=/[#\/\?@]/g,nm=/[#\?:]/g,rm=/[#\?]/g,sm=/[#\?@]/g,im=/#/g;function as(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function dn(o){o.g||(o.g=new Map,o.h=0,o.i&&em(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=as.prototype,n.add=function(o,c){dn(this),this.i=null,o=dr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ec(o,c){dn(o),c=dr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function tc(o,c){return dn(o),c=dr(o,c),o.g.has(c)}n.forEach=function(o,c){dn(this),this.g.forEach(function(h,p){h.forEach(function(S){o.call(c,S,p,this)},this)},this)},n.na=function(){dn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const S=o[p];for(let P=0;P<S.length;P++)h.push(c[p])}return h},n.V=function(o){dn(this);let c=[];if(typeof o=="string")tc(this,o)&&(c=c.concat(this.g.get(dr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return dn(this),this.i=null,o=dr(this,o),tc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function nc(o,c,h){ec(o,c),0<h.length&&(o.i=null,o.g.set(dr(o,c),L(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const P=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var S=P;j[p]!==""&&(S+="="+encodeURIComponent(String(j[p]))),o.push(S)}}return this.i=o.join("&")};function dr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function om(o,c){c&&!o.j&&(dn(o),o.i=null,o.g.forEach(function(h,p){var S=p.toLowerCase();p!=S&&(ec(this,p),nc(this,S,h))},o)),o.j=c}function am(o,c){const h=new rs;if(u.Image){const p=new Image;p.onload=b(pn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=b(pn,h,"TestLoadImage: error",!1,c,p),p.onabort=b(pn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=b(pn,h,"TestLoadImage: timeout",!1,c,p),u.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function um(o,c){const h=new rs,p=new AbortController,S=setTimeout(()=>{p.abort(),pn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(S),P.ok?pn(h,"TestPingServer: ok",!0,c):pn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),pn(h,"TestPingServer: error",!1,c)})}function pn(o,c,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function lm(){this.g=new ui}function cm(o,c,h){const p=h||"";try{Jl(o,function(S,P){let j=S;f(S)&&(j=je(S)),c.push(p+P+"="+encodeURIComponent(j))})}catch(S){throw c.push(p+"type="+encodeURIComponent("_badmap")),S}}function mi(o){this.l=o.Ub||null,this.j=o.eb||!1}D(mi,Jo),mi.prototype.g=function(){return new _i(this.l,this.j)},mi.prototype.i=function(o){return function(){return o}}({});function _i(o,c){Z.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(_i,Z),n=_i.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ls(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,us(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?us(this):ls(this),this.readyState==3&&rc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,us(this))},n.Qa=function(o){this.g&&(this.response=o,us(this))},n.ga=function(){this.g&&us(this)};function us(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ls(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function ls(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function sc(o){let c="";return ye(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function oa(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=sc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Ae(o,c,h))}function Ce(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Ce,Z);var hm=/^https?$/i,fm=["POST","PUT"];n=Ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zo.g(),this.v=this.o?Ol(this.o):Ol(Zo),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){ic(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),S=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(fm,c,void 0))||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of h)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){ic(this,P)}};function ic(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,oc(o),yi(o)}function oc(o){o.A||(o.A=!0,ue(o,"complete"),ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ue(this,"complete"),ue(this,"abort"),yi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),Ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ac(this):this.bb())},n.bb=function(){ac(this)};function ac(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Wt(o)!=4||o.Z()!=2)){if(o.u&&Wt(o)==4)Ke(o.Ea,0,o);else if(ue(o,"readystatechange"),Wt(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=j===0){var S=String(o.D).match(Xl)[1]||null;!S&&u.self&&u.self.location&&(S=u.self.location.protocol.slice(0,-1)),p=!hm.test(S?S.toLowerCase():"")}h=p}if(h)ue(o,"complete"),ue(o,"success");else{o.m=6;try{var P=2<Wt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",oc(o)}}finally{yi(o)}}}}function yi(o,c){if(o.g){uc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||ue(o,"ready");try{h.onreadystatechange=p}catch{}}}function uc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Wt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Tt(c)}};function lc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function dm(o){const c={};o=(o.g&&2<=Wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Q(o[p]))continue;var h=A(o[p]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[S]||[];c[S]=P,P.push(h)}w(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function cc(o){this.Aa=0,this.i=[],this.j=new rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,o),this.cb=cs("retryDelaySeedMs",1e4,o),this.Wa=cs("forwardChannelMaxRetries",2,o),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new zl(o&&o.concurrentRequestLimit),this.Da=new lm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=cc.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){ot(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Ec(this,null,this.W),Ti(this)};function aa(o){if(hc(o),o.G==3){var c=o.U++,h=zt(o.I);if(Ae(h,"SID",o.K),Ae(h,"RID",c),Ae(h,"TYPE","terminate"),hs(o,h),c=new fn(o,o.j,c),c.L=2,c.v=gi(zt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Tc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),fi(c)}yc(o)}function Ei(o){o.g&&(la(o),o.g.cancel(),o.g=null)}function hc(o){Ei(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ii(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ti(o){if(!Wl(o.h)&&!o.s){o.s=!0;var c=o.Ga;ae||Un(),ge||(ae(),ge=!0),At.add(c,o),o.B=0}}function pm(o,c){return Kl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ns(I(o.Ga,o,c),_c(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new fn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=dc(this,S,c),h=zt(this.I),Ae(h,"RID",o),Ae(h,"CVER",22),this.D&&Ae(h,"X-HTTP-Session-Id",this.D),hs(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(sc(P)))+"&"+c:this.m&&oa(h,this.m,P)),ia(this.h,S),this.Ua&&Ae(h,"TYPE","init"),this.P?(Ae(h,"$req",c),Ae(h,"SID","null"),S.T=!0,ta(S,h,null)):ta(S,h,c),this.G=2}}else this.G==3&&(o?fc(this,o):this.i.length==0||Wl(this.h)||fc(this))};function fc(o,c){var h;c?h=c.l:h=o.U++;const p=zt(o.I);Ae(p,"SID",o.K),Ae(p,"RID",h),Ae(p,"AID",o.T),hs(o,p),o.m&&o.o&&oa(p,o.m,o.o),h=new fn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=dc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ia(o.h,h),ta(h,p,c)}function hs(o,c){o.H&&ye(o.H,function(h,p){Ae(c,p,h)}),o.l&&Jl({},function(h,p){Ae(c,p,h)})}function dc(o,c,h){h=Math.min(o.i.length,h);var p=o.l?I(o.l.Na,o.l,o):null;e:{var S=o.i;let P=-1;for(;;){const j=["count="+h];P==-1?0<h?(P=S[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Ie=!0;for(let $e=0;$e<h;$e++){let me=S[$e].g;const Qe=S[$e].map;if(me-=P,0>me)P=Math.max(0,S[$e].g-100),Ie=!1;else try{cm(Qe,j,"req"+me+"_")}catch{p&&p(Qe)}}if(Ie){p=j.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function pc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;ae||Un(),ge||(ae(),ge=!0),At.add(c,o),o.v=0}}function ua(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ns(I(o.Fa,o),_c(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,gc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ns(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Ei(this),gc(this))};function la(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function gc(o){o.g=new fn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=zt(o.qa);Ae(c,"RID","rpc"),Ae(c,"SID",o.K),Ae(c,"AID",o.T),Ae(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ae(c,"TO",o.ja),Ae(c,"TYPE","xmlhttp"),hs(o,c),o.m&&o.o&&oa(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=gi(zt(c)),h.m=null,h.P=!0,$l(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Ei(this),ua(this),ot(19))};function Ii(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function mc(o,c){var h=null;if(o.g==c){Ii(o),la(o),o.g=null;var p=2}else if(sa(o.h,c))h=c.D,Gl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;p=li(),ue(p,new Fl(p,h)),Ti(o)}else pc(o);else if(S=c.s,S==3||S==0&&0<c.X||!(p==1&&pm(o,c)||p==2&&ua(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:zn(o,5);break;case 4:zn(o,10);break;case 3:zn(o,6);break;default:zn(o,2)}}}function _c(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function zn(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),p=o.Xa;const S=!p;p=new Hn(p||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||di(p,"https"),gi(p),S?am(p.toString(),h):um(p.toString(),h)}else ot(2);o.G=0,o.l&&o.l.sa(c),yc(o),hc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function yc(o){if(o.G=0,o.ka=[],o.l){const c=Ql(o.h);(c.length!=0||o.i.length!=0)&&(F(o.ka,c),F(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Ec(o,c,h){var p=h instanceof Hn?zt(h):new Hn(h);if(p.g!="")c&&(p.g=c+"."+p.g),pi(p,p.s);else{var S=u.location;p=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var P=new Hn(null);p&&di(P,p),c&&(P.g=c),S&&pi(P,S),h&&(P.l=h),p=P}return h=o.D,c=o.ya,h&&c&&Ae(p,h,c),Ae(p,"VER",o.la),hs(o,p),p}function Tc(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Ce(new mi({eb:h})):new Ce(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ic(){}n=Ic.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vi(){}vi.prototype.g=function(o,c){return new dt(o,c)};function dt(o,c){Z.call(this),this.g=new cc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!Q(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!Q(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new pr(this)}D(dt,Z),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){aa(this.g)},dt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=je(o),o=h);c.i.push(new Xg(c.Ya++,o)),c.G==3&&Ti(c)},dt.prototype.N=function(){this.g.l=null,delete this.j,aa(this.g),delete this.g,dt.aa.N.call(this)};function vc(o){Xo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}D(vc,Xo);function wc(){Yo.call(this),this.status=1}D(wc,Yo);function pr(o){this.g=o}D(pr,Ic),pr.prototype.ua=function(){ue(this.g,"a")},pr.prototype.ta=function(o){ue(this.g,new vc(o))},pr.prototype.sa=function(o){ue(this.g,new wc)},pr.prototype.ra=function(){ue(this.g,"b")},vi.prototype.createWebChannel=vi.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,Rp=function(){return new vi},bp=function(){return li()},Ap=$n,ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ci.NO_ERROR=0,ci.TIMEOUT=8,ci.HTTP_ERROR=6,Bi=ci,Ul.COMPLETE="complete",wp=Ul,Nl.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",Z.prototype.listen=Z.prototype.K,gs=Nl,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,vp=Ce}).apply(typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{});const Ch="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Lu("@firebase/firestore");function Tr(){return or.logLevel}function z(n,...e){if(or.logLevel<=ce.DEBUG){const t=e.map(Xu);or.debug(`Firestore (${Wr}): ${n}`,...t)}}function on(n,...e){if(or.logLevel<=ce.ERROR){const t=e.map(Xu);or.error(`Firestore (${Wr}): ${n}`,...t)}}function Lr(n,...e){if(or.logLevel<=ce.WARN){const t=e.map(Xu);or.warn(`Firestore (${Wr}): ${n}`,...t)}}function Xu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n="Unexpected state"){const e=`FIRESTORE (${Wr}) INTERNAL ASSERTION FAILED: `+n;throw on(e),new Error(e)}function Te(n,e){n||te()}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends cn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ye.UNAUTHENTICATED))}shutdown(){}}class Dv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Vv{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new Sp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Ye(e)}}class kv{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ov{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new kv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Te(this.o===void 0);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Te(typeof t.token=="string"),this.R=t.token,new Nv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Mv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function Fr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Le(0,0))}static max(){return new re(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(),r===void 0?r=e.length-t:r>e.length-t&&te(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class be extends Bs{construct(e,t,r){return new be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new be(t)}static emptyPath(){return new be([])}}const Lv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Bs{construct(e,t,r){return new He(e,t,r)}static isValidIdentifier(e){return Lv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(i(),s++)}if(i(),a)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(t)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(be.fromString(e))}static fromName(e){return new X(be.fromString(e).popFirst(5))}static empty(){return new X(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new be(e.slice()))}}function Fv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new Vn(s,X.empty(),e)}function Uv(n){return new Vn(n.readTime,n.key,-1)}class Vn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vn(re.min(),X.empty(),-1)}static max(){return new Vn(re.max(),X.empty(),-1)}}function Bv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $v{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==jv)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const f=l;t(e[f]).next(d=>{a[f]=d,++u,u===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function qv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mo.oe=-1;function Lo(n){return n==null}function uo(n){return n===0&&1/n==-1/0}function Hv(n){return typeof n=="number"&&Number.isInteger(n)&&!uo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Dh(e)),e=Wv(n.get(t),e);return Dh(e)}function Wv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Dh(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ur(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Cp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ci(this.root,e,this.comparator,!0)}}class Ci{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,t,r,s,i){return this}insert(e,t,r){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kh(this.data.getIterator())}getIteratorFrom(e){return new kh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Fe(this.comparator);return t.data=e,t}}class kh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new St([])}unionWith(e){let t=new Fe(He.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new St(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Dp("Invalid base64 string: "+i):i}}(e);return new We(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new We(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Kv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(n){if(Te(!!n),typeof n=="string"){let e=0;const t=Kv.exec(n);if(Te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function On(n){return typeof n=="string"?We.fromBase64String(n):We.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fo(n){const e=n.mapValue.fields.__previous_value__;return Yu(e)?Fo(e):e}function js(n){const e=kn(n.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,r,s,i,a,u,l,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=f}}class $s{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yu(n)?4:Jv(n)?9007199254740991:Qv(n)?10:11:te()}function $t(n,e){if(n===e)return!0;const t=Nn(n);if(t!==Nn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return js(n).isEqual(js(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=kn(s.timestampValue),u=kn(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return On(s.bytesValue).isEqual(On(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=De(s.doubleValue),u=De(i.doubleValue);return a===u?uo(a)===uo(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Fr(n.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Vh(a)!==Vh(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!$t(a[l],u[l])))return!1;return!0}(n,e);default:return te()}}function qs(n,e){return(n.values||[]).find(t=>$t(t,e))!==void 0}function Ur(n,e){if(n===e)return 0;const t=Nn(n),r=Nn(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const u=De(i.integerValue||i.doubleValue),l=De(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return Oh(n.timestampValue,e.timestampValue);case 4:return Oh(js(n),js(e));case 5:return fe(n.stringValue,e.stringValue);case 6:return function(i,a){const u=On(i),l=On(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let f=0;f<u.length&&f<l.length;f++){const d=fe(u[f],l[f]);if(d!==0)return d}return fe(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const u=fe(De(i.latitude),De(a.latitude));return u!==0?u:fe(De(i.longitude),De(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Nh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var u,l,f,d;const g=i.fields||{},I=a.fields||{},b=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=(l=I.value)===null||l===void 0?void 0:l.arrayValue,L=fe(((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0,((d=D==null?void 0:D.values)===null||d===void 0?void 0:d.length)||0);return L!==0?L:Nh(b,D)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Di.mapValue&&a===Di.mapValue)return 0;if(i===Di.mapValue)return 1;if(a===Di.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),f=a.fields||{},d=Object.keys(f);l.sort(),d.sort();for(let g=0;g<l.length&&g<d.length;++g){const I=fe(l[g],d[g]);if(I!==0)return I;const b=Ur(u[l[g]],f[d[g]]);if(b!==0)return b}return fe(l.length,d.length)}(n.mapValue,e.mapValue);default:throw te()}}function Oh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=kn(n),r=kn(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function Nh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ur(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function Br(n){return su(n)}function su(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return On(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=su(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${su(t.fields[a])}`;return s+"}"}(n.mapValue):te()}function ji(n){switch(Nn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fo(n);return e?16+ji(e):16;case 5:return 2*n.stringValue.length;case 6:return On(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ji(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ur(r.fields,(i,a)=>{s+=i.length+ji(a)}),s}(n.mapValue);default:throw te()}}function xh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function iu(n){return!!n&&"integerValue"in n}function Zu(n){return!!n&&"arrayValue"in n}function Mh(n){return!!n&&"nullValue"in n}function Lh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $i(n){return!!n&&"mapValue"in n}function Qv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ss(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ur(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ss(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ss(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!$i(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(t)}setAll(e){let t=He.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=Ss(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());$i(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];$i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ur(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new vt(Ss(this.value))}}function Vp(n){const e=[];return ur(n.fields,(t,r)=>{const s=new He([t]);if($i(r)){const i=Vp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,r,s,i,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new tt(e,0,re.min(),re.min(),re.min(),vt.empty(),0)}static newFoundDocument(e,t,r,s){return new tt(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new tt(e,2,t,re.min(),re.min(),vt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,re.min(),re.min(),vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.position=e,this.inclusive=t}}function Fh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=Ur(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$t(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{}class Oe extends kp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zv(e,t,r):t==="array-contains"?new nw(e,r):t==="in"?new rw(e,r):t==="not-in"?new sw(e,r):t==="array-contains-any"?new iw(e,r):new Oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ew(e,r):new tw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ur(t,this.value)):t!==null&&Nn(this.value)===Nn(t)&&this.matchesComparison(Ur(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends kp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Dt(e,t)}matches(e){return Op(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Op(n){return n.op==="and"}function Np(n){return Yv(n)&&Op(n)}function Yv(n){for(const e of n.filters)if(e instanceof Dt)return!1;return!0}function ou(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+Br(n.value);if(Np(n))return n.filters.map(e=>ou(e)).join(",");{const e=n.filters.map(t=>ou(t)).join(",");return`${n.op}(${e})`}}function xp(n,e){return n instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&$t(r.value,s.value)}(n,e):n instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,u)=>i&&xp(a,s.filters[u]),!0):!1}(n,e):void te()}function Mp(n){return n instanceof Oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Br(t.value)}`}(n):n instanceof Dt?function(t){return t.op.toString()+" {"+t.getFilters().map(Mp).join(" ,")+"}"}(n):"Filter"}class Zv extends Oe{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class ew extends Oe{constructor(e,t){super(e,"in",t),this.keys=Lp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tw extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=Lp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class nw extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zu(t)&&qs(t.arrayValue,this.value)}}class rw extends Oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class sw extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qs(this.value.arrayValue,t)}}class iw extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t=null,r=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function Bh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new ow(n,e,t,r,s,i,a)}function el(n){const e=ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ou(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Br(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Br(r)).join(",")),e.ue=t}return e.ue}function tl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Xv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uh(n.startAt,e.startAt)&&Uh(n.endAt,e.endAt)}function au(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t=null,r=[],s=[],i=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aw(n,e,t,r,s,i,a,u){return new Qr(n,e,t,r,s,i,a,u)}function nl(n){return new Qr(n)}function jh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fp(n){return n.collectionGroup!==null}function Ps(n){const e=ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Fe(He.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Hs(i,r))}),t.has(He.keyField().canonicalString())||e.ce.push(new Hs(He.keyField(),r))}return e.ce}function Ft(n){const e=ie(n);return e.le||(e.le=uw(e,Ps(n))),e.le}function uw(n,e){if(n.limitType==="F")return Bh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hs(s.field,i)});const t=n.endAt?new lo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new lo(n.startAt.position,n.startAt.inclusive):null;return Bh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uu(n,e){const t=n.filters.concat([e]);return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function co(n,e,t){return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Uo(n,e){return tl(Ft(n),Ft(e))&&n.limitType===e.limitType}function Up(n){return`${el(Ft(n))}|lt:${n.limitType}`}function Ir(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Mp(s)).join(", ")}]`),Lo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Br(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Br(s)).join(",")),`Target(${r})`}(Ft(n))}; limitType=${n.limitType})`}function Bo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,l){const f=Fh(a,u,l);return a.inclusive?f<=0:f<0}(r.startAt,Ps(r),s)||r.endAt&&!function(a,u,l){const f=Fh(a,u,l);return a.inclusive?f>=0:f>0}(r.endAt,Ps(r),s))}(n,e)}function lw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Bp(n){return(e,t)=>{let r=!1;for(const s of Ps(n)){const i=cw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cw(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):function(i,a,u){const l=a.data.field(i),f=u.data.field(i);return l!==null&&f!==null?Ur(l,f):te()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new Pe(X.comparator);function an(){return hw}const jp=new Pe(X.comparator);function ms(...n){let e=jp;for(const t of n)e=e.insert(t.key,t);return e}function $p(n){let e=jp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xn(){return Cs()}function qp(){return Cs()}function Cs(){return new lr(n=>n.toString(),(n,e)=>n.isEqual(e))}const fw=new Pe(X.comparator),dw=new Fe(X.comparator);function he(...n){let e=dw;for(const t of n)e=e.add(t);return e}const pw=new Fe(fe);function gw(){return pw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uo(e)?"-0":e}}function Hp(n){return{integerValue:""+n}}function mw(n,e){return Hv(e)?Hp(e):rl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this._=void 0}}function _w(n,e,t){return n instanceof zs?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yu(i)&&(i=Fo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Ws?Wp(n,e):n instanceof Ks?Kp(n,e):function(s,i){const a=zp(s,i),u=$h(a)+$h(s.Pe);return iu(a)&&iu(s.Pe)?Hp(u):rl(s.serializer,u)}(n,e)}function yw(n,e,t){return n instanceof Ws?Wp(n,e):n instanceof Ks?Kp(n,e):t}function zp(n,e){return n instanceof ho?function(r){return iu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class zs extends jo{}class Ws extends jo{constructor(e){super(),this.elements=e}}function Wp(n,e){const t=Gp(e);for(const r of n.elements)t.some(s=>$t(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ks extends jo{constructor(e){super(),this.elements=e}}function Kp(n,e){let t=Gp(e);for(const r of n.elements)t=t.filter(s=>!$t(s,r));return{arrayValue:{values:t}}}class ho extends jo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function $h(n){return De(n.integerValue||n.doubleValue)}function Gp(n){return Zu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t){this.field=e,this.transform=t}}function Tw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ws&&s instanceof Ws||r instanceof Ks&&s instanceof Ks?Fr(r.elements,s.elements,$t):r instanceof ho&&s instanceof ho?$t(r.Pe,s.Pe):r instanceof zs&&s instanceof zs}(n.transform,e.transform)}class Iw{constructor(e,t){this.version=e,this.transformResults=t}}class nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $o{}function Qp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xp(n.key,nn.none()):new ri(n.key,n.data,nn.none());{const t=n.data,r=vt.empty();let s=new Fe(He.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new cr(n.key,r,new St(s.toArray()),nn.none())}}function vw(n,e,t){n instanceof ri?function(s,i,a){const u=s.value.clone(),l=Hh(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof cr?function(s,i,a){if(!qi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Hh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Jp(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ds(n,e,t,r){return n instanceof ri?function(i,a,u,l){if(!qi(i.precondition,a))return u;const f=i.value.clone(),d=zh(i.fieldTransforms,l,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof cr?function(i,a,u,l){if(!qi(i.precondition,a))return u;const f=zh(i.fieldTransforms,l,a),d=a.data;return d.setAll(Jp(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,u){return qi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function ww(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=zp(r.transform,s||null);i!=null&&(t===null&&(t=vt.empty()),t.set(r.field,i))}return t||null}function qh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fr(r,s,(i,a)=>Tw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ri extends $o{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cr extends $o{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Hh(n,e,t){const r=new Map;Te(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,u=e.data.field(i.field);r.set(i.field,yw(a,u,t[s]))}return r}function zh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,_w(i,a,e))}return r}class Xp extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Aw extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&vw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ds(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ds(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const l=Qp(a,u);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&Fr(this.mutations,e.mutations,(t,r)=>qh(t,r))&&Fr(this.baseMutations,e.baseMutations,(t,r)=>qh(t,r))}}class sl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Te(e.mutations.length===r.length);let s=function(){return fw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new sl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,pe;function Pw(n){switch(n){default:return te();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Yp(n){if(n===void 0)return on("GRPC error has no .code"),k.UNKNOWN;switch(n){case ke.OK:return k.OK;case ke.CANCELLED:return k.CANCELLED;case ke.UNKNOWN:return k.UNKNOWN;case ke.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ke.INTERNAL:return k.INTERNAL;case ke.UNAVAILABLE:return k.UNAVAILABLE;case ke.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ke.NOT_FOUND:return k.NOT_FOUND;case ke.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ke.ABORTED:return k.ABORTED;case ke.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ke.DATA_LOSS:return k.DATA_LOSS;default:return te()}}(pe=ke||(ke={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new tr([4294967295,4294967295],0);function Wh(n){const e=Cw().encode(n),t=new Ip;return t.update(e),new Uint8Array(t.digest())}function Kh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tr([t,r],0),new tr([s,i],0)]}class il{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new _s(`Invalid padding: ${t}`);if(r<0)throw new _s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _s(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new _s(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=tr.fromNumber(this.Te)}Ee(e,t,r){let s=e.add(t.multiply(tr.fromNumber(r)));return s.compare(Dw)===1&&(s=new tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Wh(e),[r,s]=Kh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new il(i,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Te===0)return;const t=Wh(e),[r,s]=Kh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class _s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qo(re.min(),s,new Pe(fe),an(),he())}}class si{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new si(r,t,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Zp{constructor(e,t){this.targetId=e,this.me=t}}class eg{constructor(e,t,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Gh{constructor(){this.fe=0,this.ge=Qh(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),t=he(),r=he();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te()}}),new si(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Qh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Vw{constructor(e){this.Le=e,this.Be=new Map,this.ke=an(),this.qe=Vi(),this.Qe=Vi(),this.Ke=new Pe(fe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(au(i))if(r===0){const a=new X(i.path);this.We(t,a,tt.newNoDocument(a,re.min()))}else Te(r===1);else{const a=this.Ze(t);if(a!==r){const u=this.Xe(e),l=u?this.et(u,e,a):1;if(l!==0){this.He(t);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,f)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=On(r).toUint8Array()}catch(l){if(l instanceof Dp)return Lr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new il(a,s,i)}catch(l){return Lr(l instanceof _s?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Te===0?null:u}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.nt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((i,a)=>{const u=this.Ye(a);if(u){if(i.current&&au(u.target)){const l=new X(u.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,tt.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=he();this.Qe.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const f=this.Ye(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new qo(e,t,this.Ke,this.ke,r);return this.ke=an(),this.qe=Vi(),this.Qe=Vi(),this.Ke=new Pe(fe),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Gh,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Fe(fe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Fe(fe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Gh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Vi(){return new Pe(X.comparator)}function Qh(){return new Pe(X.comparator)}const kw={asc:"ASCENDING",desc:"DESCENDING"},Ow={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nw={and:"AND",or:"OR"};class xw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lu(n,e){return n.useProto3Json||Lo(e)?e:{value:e}}function fo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Mw(n,e){return fo(n,e.toTimestamp())}function Ut(n){return Te(!!n),re.fromTimestamp(function(t){const r=kn(t);return new Le(r.seconds,r.nanos)}(n))}function ol(n,e){return cu(n,e).canonicalString()}function cu(n,e){const t=function(s){return new be(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ng(n){const e=be.fromString(n);return Te(ag(e)),e}function hu(n,e){return ol(n.databaseId,e.path)}function Da(n,e){const t=ng(e);if(t.get(1)!==n.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(sg(t))}function rg(n,e){return ol(n.databaseId,e)}function Lw(n){const e=ng(n);return e.length===4?be.emptyPath():sg(e)}function fu(n){return new be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sg(n){return Te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jh(n,e,t){return{name:hu(n,e),fields:t.value.mapValue.fields}}function Fw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(Te(d===void 0||typeof d=="string"),We.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array),We.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(f){const d=f.code===void 0?k.UNKNOWN:Yp(f.code);return new K(d,f.message||"")}(a);t=new eg(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Da(n,r.document.name),i=Ut(r.document.updateTime),a=r.document.createTime?Ut(r.document.createTime):re.min(),u=new vt({mapValue:{fields:r.document.fields}}),l=tt.newFoundDocument(s,i,a,u),f=r.targetIds||[],d=r.removedTargetIds||[];t=new Hi(f,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Da(n,r.document),i=r.readTime?Ut(r.readTime):re.min(),a=tt.newNoDocument(s,i),u=r.removedTargetIds||[];t=new Hi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Da(n,r.document),i=r.removedTargetIds||[];t=new Hi([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Sw(s,i),u=r.targetId;t=new Zp(u,a)}}return t}function Uw(n,e){let t;if(e instanceof ri)t={update:Jh(n,e.key,e.value)};else if(e instanceof Xp)t={delete:hu(n,e.key)};else if(e instanceof cr)t={update:Jh(n,e.key,e.data),updateMask:Gw(e.fieldMask)};else{if(!(e instanceof Aw))return te();t={verify:hu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const u=a.transform;if(u instanceof zs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ws)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ks)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ho)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw te()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Mw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(n,e.precondition)),t}function Bw(n,e){return n&&n.length>0?(Te(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Ut(s.updateTime):Ut(i);return a.isEqual(re.min())&&(a=Ut(i)),new Iw(a,s.transformResults||[])}(t,e))):[]}function jw(n,e){return{documents:[rg(n,e.path)]}}function $w(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=rg(n,s);const i=function(f){if(f.length!==0)return og(Dt.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(I){return{field:vr(I.field),direction:zw(I.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=lu(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ct:t,parent:s}}function qw(n){let e=Lw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Te(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(g){const I=ig(g);return I instanceof Dt&&Np(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(I=>function(D){return new Hs(wr(D.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(I))}(t.orderBy));let u=null;t.limit&&(u=function(g){let I;return I=typeof g=="object"?g.value:g,Lo(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(g){const I=!!g.before,b=g.values||[];return new lo(b,I)}(t.startAt));let f=null;return t.endAt&&(f=function(g){const I=!g.before,b=g.values||[];return new lo(b,I)}(t.endAt)),aw(e,s,a,i,u,"F",l,f)}function Hw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ig(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wr(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=wr(t.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wr(t.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wr(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(n):n.fieldFilter!==void 0?function(t){return Oe.create(wr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Dt.create(t.compositeFilter.filters.map(r=>ig(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(t.compositeFilter.op))}(n):te()}function zw(n){return kw[n]}function Ww(n){return Ow[n]}function Kw(n){return Nw[n]}function vr(n){return{fieldPath:n.canonicalString()}}function wr(n){return He.fromServerFormat(n.fieldPath)}function og(n){return n instanceof Oe?function(t){if(t.op==="=="){if(Lh(t.value))return{unaryFilter:{field:vr(t.field),op:"IS_NAN"}};if(Mh(t.value))return{unaryFilter:{field:vr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lh(t.value))return{unaryFilter:{field:vr(t.field),op:"IS_NOT_NAN"}};if(Mh(t.value))return{unaryFilter:{field:vr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vr(t.field),op:Ww(t.op),value:t.value}}}(n):n instanceof Dt?function(t){const r=t.getFilters().map(s=>og(s));return r.length===1?r[0]:{compositeFilter:{op:Kw(t.op),filters:r}}}(n):te()}function Gw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ag(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,r,s,i=re.min(),a=re.min(),u=We.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.ht=e}}function Jw(n){const e=qw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?co(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.ln=new Yw}addToCollectionParentIndex(e,t){return this.ln.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Vn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Yw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Fe(be.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(41943040,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new jr(0)}static Qn(){return new jr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class Zw{constructor(e){this.Gn=e,this.buffer=new Fe(Yh),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Yh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gr(t)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Kr(t)}await this.Yn(3e5)})}}class tA{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Mo.oe);const r=new Zw(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Xh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xh):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,i,a,u,l,f;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,u=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(f=Date.now(),Tr()<=ce.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(f-l)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function nA(n,e){return new tA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.changes=new lr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ds(r.mutation,s,St.empty(),Le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const s=Xn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ms();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Xn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let i=an();const a=Cs(),u=function(){return Cs()}();return t.forEach((l,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof cr)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Ds(d.mutation,f,d.mutation.getFieldMask(),Le.now())):a.set(f.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((f,d)=>a.set(f,d)),t.forEach((f,d)=>{var g;return u.set(f,new sA(d,(g=a.get(f))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Cs();let s=new Pe((a,u)=>a-u),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const f=t.get(l);if(f===null)return;let d=r.get(l)||St.empty();d=u.applyToLocalView(f,d),r.set(l,d);const g=(s.get(u.batchId)||he()).add(l);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),f=l.key,d=l.value,g=qp();d.forEach(I=>{if(!i.has(I)){const b=Qp(t.get(I),r.get(I));b!==null&&g.set(I,b),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(Xn());let u=-1,l=i;return a.next(f=>V.forEach(f,(d,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(I=>{l=l.insert(d,I)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,l,f,he())).next(d=>({batchId:u,changes:$p(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let s=ms();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ms();return this.indexManager.getCollectionParents(e,i).next(u=>V.forEach(u,l=>{const f=function(g,I){return new Qr(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(d=>{d.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,tt.newInvalidDocument(d)))});let u=ms();return a.forEach((l,f)=>{const d=i.get(l);d!==void 0&&Ds(d.mutation,f,St.empty(),Le.now()),Bo(t,f)&&(u=u.insert(l,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return V.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:Jw(s.bundledQuery),readTime:Ut(s.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.overlays=new Pe(X.comparator),this.Er=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Tt(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Xn(),i=t.length+1,a=new X(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,f=l.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Pe((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Xn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const u=Xn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,d)=>u.set(f,d)),!(u.size()>=s)););return V.resolve(u)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Rw(t,r));let i=this.Er.get(t);i===void 0&&(i=he(),this.Er.set(t,i)),this.Er.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.dr=new Fe(Ue.Ar),this.Rr=new Fe(Ue.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new Ue(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new Ue(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new X(new be([])),r=new Ue(t,e),s=new Ue(t,e+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new X(new be([])),r=new Ue(t,e),s=new Ue(t,e+1);let i=he();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ue(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return X.comparator(e.key,t.key)||fe(e.br,t.br)}static Vr(e,t){return fe(e.br,t.br)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Fe(Ue.Ar)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new bw(i,t,r,s);this.mutationQueue.push(a);for(const u of s)this.vr=this.vr.add(new Ue(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ue(t,0),s=new Ue(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const u=this.Cr(a.br);i.push(u)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Fe(fe);return t.forEach(s=>{const i=new Ue(s,0),a=new Ue(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],u=>{r=r.add(u.br)})}),V.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Ue(new X(i),0);let u=new Fe(fe);return this.vr.forEachWhile(l=>{const f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(l.br)),!0)},a),V.resolve(this.Mr(u))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Te(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return V.forEach(t.mutations,s=>{const i=new Ue(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new Ue(t,0),s=this.vr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.Nr=e,this.docs=function(){return new Pe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let r=an();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=an();const a=t.path,u=new X(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:f,value:{document:d}}=l.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Bv(Uv(d),r)<=0||(s.has(d.key)||Bo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te()}Lr(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new hA(this)}getSize(e){return V.resolve(this.size)}}class hA extends rA{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.persistence=e,this.Br=new lr(t=>el(t),tl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.kr=0,this.qr=new al,this.targetCount=0,this.Qr=jr.qn()}forEachTarget(e,t){return this.Br.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),V.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new jr(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Un(t),V.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Br.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Mo(0),this.Ur=!1,this.Ur=!0,this.Wr=new uA,this.referenceDelegate=e(this),this.Gr=new fA(this),this.indexManager=new Xw,this.remoteDocumentCache=function(s){return new cA(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Qw(t),this.jr=new oA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new lA(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new dA(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return V.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class dA extends $v{constructor(e){super(),this.currentSequenceNumber=e}}class ul{constructor(e){this.persistence=e,this.Zr=new al,this.Xr=null}static ei(e){return new ul(e)}get ti(){if(this.Xr)return this.Xr;throw te()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),V.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,r=>{const s=X.fromPath(r);return this.ni(e,s).next(i=>{i||t.removeEntry(s,re.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return V.or([()=>V.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class po{constructor(e,t){this.persistence=e,this.ri=new lr(r=>zv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=nA(this,t)}static ei(e,t){return new po(e,t)}Hr(){}Jr(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return V.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,a=>this.ir(e,a,t).next(u=>{u||(r++,i.removeEntry(a,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),V.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ji(e.data.value)),t}ir(e,t,r){return V.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=he(),s=he();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ll(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return cE()?8:qv(st())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Xi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new pA;return this.ts(e,t,a).next(u=>{if(i.result=u,this.Hi)return this.ns(e,t,a,u.size)})}).next(()=>i.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Tr()<=ce.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ir(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(Tr()<=ce.DEBUG&&z("QueryEngine","Query:",Ir(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Tr()<=ce.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ir(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ft(t))):V.resolve())}Xi(e,t){if(jh(t))return V.resolve(null);let r=Ft(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=co(t,null,"F"),r=Ft(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=he(...i);return this.Zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const f=this.rs(t,u);return this.ss(t,f,a,l.readTime)?this.Xi(e,co(t,null,"F")):this.os(e,f,t,l)}))})))}es(e,t,r,s){return jh(t)||s.isEqual(re.min())?V.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const a=this.rs(t,i);return this.ss(t,a,r,s)?V.resolve(null):(Tr()<=ce.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ir(t)),this.os(e,a,t,Fv(s,-1)).next(u=>u))})}rs(e,t){let r=new Fe(Bp(e));return t.forEach((s,i)=>{Bo(e,i)&&(r=r.add(i))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,r){return Tr()<=ce.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ir(t)),this.Zi.getDocumentsMatchingQuery(e,t,Vn.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new Pe(fe),this.cs=new lr(i=>el(i),tl),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function _A(n,e,t,r){return new mA(n,e,t,r)}async function lg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],u=[];let l=he();for(const f of s){a.push(f.batchId);for(const d of f.mutations)l=l.add(d.key)}for(const f of i){u.push(f.batchId);for(const d of f.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(f=>({Ts:f,removedBatchIds:a,addedBatchIds:u}))})})}function yA(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(u,l,f,d){const g=f.batch,I=g.keys();let b=V.resolve();return I.forEach(D=>{b=b.next(()=>d.getEntry(l,D)).next(L=>{const F=f.docVersions.get(D);Te(F!==null),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),d.addEntry(L)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(l,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=he();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(l=l.add(u.batch.mutations[f].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function cg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function EA(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const u=[];e.targetChanges.forEach((d,g)=>{const I=s.get(g);if(!I)return;u.push(t.Gr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>t.Gr.addMatchingKeys(i,d.addedDocuments,g)));let b=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(We.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),function(L,F,W){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(I,b,d)&&u.push(t.Gr.updateTargetData(i,b))});let l=an(),f=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),u.push(TA(i,a,e.documentUpdates).next(d=>{l=d.Is,f=d.Es})),!r.isEqual(re.min())){const d=t.Gr.getLastRemoteSnapshotVersion(i).next(g=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(d)}return V.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,f)).next(()=>l)}).then(i=>(t.us=s,i))}function TA(n,e,t){let r=he(),s=he();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=an();return t.forEach((u,l)=>{const f=i.get(u);l.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):z("LocalStore","Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",l.version)}),{Is:a,Es:s}})}function IA(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vA(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Gr.allocateTargetId(r).next(a=>(s=new wn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function du(n,e,t){const r=ie(n),s=r.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Gr(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Zh(n,e,t){const r=ie(n);let s=re.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,f,d){const g=ie(l),I=g.cs.get(d);return I!==void 0?V.resolve(g.us.get(I)):g.Gr.getTargetData(f,d)}(r,a,Ft(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:he())).next(u=>(wA(r,lw(e),u),{documents:u,ds:i})))}function wA(n,e,t){let r=n.ls.get(e)||re.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ls.set(e,r)}class ef{constructor(){this.activeTargetIds=gw()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AA{constructor(){this._o=new ef,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new ef,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki=null;function Va(){return ki===null?ki=function(){return 268435456+Math.round(2147483648*Math.random())}():ki++,"0x"+ki.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class PA extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,r,s,i,a){const u=Va(),l=this.No(t,r.toUriEncodedString());z("RestConnection",`Sending RPC '${t}' ${u}:`,l,s);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,i,a),this.Bo(t,l,f,s).then(d=>(z("RestConnection",`Received RPC '${t}' ${u}: `,d),d),d=>{throw Lr("RestConnection",`RPC '${t}' ${u} failed with error: `,d,"url: ",l,"request:",s),d})}ko(t,r,s,i,a,u){return this.Oo(t,r,s,i,a)}Lo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}No(t,r){const s=RA[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,s){const i=Va();return new Promise((a,u)=>{const l=new vp;l.setWithCredentials(!0),l.listenOnce(wp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bi.NO_ERROR:const d=l.getResponseJson();z(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Bi.TIMEOUT:z(Xe,`RPC '${e}' ${i} timed out`),u(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case Bi.HTTP_ERROR:const g=l.getStatus();if(z(Xe,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const b=I==null?void 0:I.error;if(b&&b.status&&b.message){const D=function(F){const W=F.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(W)>=0?W:k.UNKNOWN}(b.status);u(new K(D,b.message))}else u(new K(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new K(k.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{z(Xe,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);z(Xe,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",f,r,15)})}qo(e,t,r){const s=Va(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Rp(),u=bp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(l.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");z(Xe,`Creating RPC '${e}' stream ${s}: ${d}`,l);const g=a.createWebChannel(d,l);let I=!1,b=!1;const D=new SA({Eo:F=>{b?z(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(I||(z(Xe,`Opening RPC '${e}' stream ${s} transport.`),g.open(),I=!0),z(Xe,`RPC '${e}' stream ${s} sending:`,F),g.send(F))},Ao:()=>g.close()}),L=(F,W,Q)=>{F.listen(W,G=>{try{Q(G)}catch(H){setTimeout(()=>{throw H},0)}})};return L(g,gs.EventType.OPEN,()=>{b||(z(Xe,`RPC '${e}' stream ${s} transport opened.`),D.So())}),L(g,gs.EventType.CLOSE,()=>{b||(b=!0,z(Xe,`RPC '${e}' stream ${s} transport closed`),D.Do())}),L(g,gs.EventType.ERROR,F=>{b||(b=!0,Lr(Xe,`RPC '${e}' stream ${s} transport errored:`,F),D.Do(new K(k.UNAVAILABLE,"The operation could not be completed")))}),L(g,gs.EventType.MESSAGE,F=>{var W;if(!b){const Q=F.data[0];Te(!!Q);const G=Q,H=(G==null?void 0:G.error)||((W=G[0])===null||W===void 0?void 0:W.error);if(H){z(Xe,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let ye=function(_){const T=ke[_];if(T!==void 0)return Yp(T)}(oe),w=H.message;ye===void 0&&(ye=k.INTERNAL,w="Unknown error status: "+oe+" with message "+H.message),b=!0,D.Do(new K(ye,w)),g.close()}else z(Xe,`RPC '${e}' stream ${s} received:`,Q),D.vo(Q)}}),L(u,Ap.STAT_EVENT,F=>{F.stat===ru.PROXY?z(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===ru.NOPROXY&&z(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function ka(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n){return new xw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t,r,s,i,a,u,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new hg(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(on(t.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CA extends fg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Fw(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Ut(a.readTime):re.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=fu(this.serializer),t.addTarget=function(i,a){let u;const l=a.target;if(u=au(l)?{documents:jw(i,l)}:{query:$w(i,l).ct},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=tg(i,a.resumeToken);const f=lu(i,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(re.min())>0){u.readTime=fo(i,a.snapshotVersion.toTimestamp());const f=lu(i,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,e);const r=Hw(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=fu(this.serializer),t.removeTarget=e,this.c_(t)}}class DA extends fg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Bw(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=fu(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Uw(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,cu(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())})}ko(e,t,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.ko(e,cu(t,r),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(k.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class kA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(on(t),this.C_=!1):z("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{hr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const f=ie(l);f.k_.add(4),await ii(f),f.K_.set("Unknown"),f.k_.delete(4),await zo(f)}(this))})}),this.K_=new kA(r,s)}}async function zo(n){if(hr(n))for(const e of n.q_)await e(!0)}async function ii(n){for(const e of n.q_)await e(!1)}function dg(n,e){const t=ie(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),dl(t)?fl(t):Jr(t).s_()&&hl(t,e))}function cl(n,e){const t=ie(n),r=Jr(t);t.B_.delete(e),r.s_()&&pg(t,e),t.B_.size===0&&(r.s_()?r.a_():hr(t)&&t.K_.set("Unknown"))}function hl(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jr(n).V_(e)}function pg(n,e){n.U_.xe(e),Jr(n).m_(e)}function fl(n){n.U_=new Vw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Jr(n).start(),n.K_.F_()}function dl(n){return hr(n)&&!Jr(n).i_()&&n.B_.size>0}function hr(n){return ie(n).k_.size===0}function gg(n){n.U_=void 0}async function NA(n){n.K_.set("Online")}async function xA(n){n.B_.forEach((e,t)=>{hl(n,e)})}async function MA(n,e){gg(n),dl(n)?(n.K_.O_(e),fl(n)):n.K_.set("Unknown")}async function LA(n,e,t){if(n.K_.set("Online"),e instanceof eg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.B_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.B_.delete(u),s.U_.removeTarget(u))}(n,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await go(n,r)}else if(e instanceof Hi?n.U_.$e(e):e instanceof Zp?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(re.min()))try{const r=await cg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const u=i.U_.it(a);return u.targetChanges.forEach((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.B_.get(f);d&&i.B_.set(f,d.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,f)=>{const d=i.B_.get(l);if(!d)return;i.B_.set(l,d.withResumeToken(We.EMPTY_BYTE_STRING,d.snapshotVersion)),pg(i,l);const g=new wn(d.target,l,f,d.sequenceNumber);hl(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await go(n,r)}}async function go(n,e,t){if(!Gr(e))throw e;n.k_.add(1),await ii(n),n.K_.set("Offline"),t||(t=()=>cg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await zo(n)})}function mg(n,e){return e().catch(t=>go(n,t,e))}async function Wo(n){const e=ie(n),t=xn(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;FA(e);)try{const s=await IA(e.localStore,r);if(s===null){e.L_.length===0&&t.a_();break}r=s.batchId,UA(e,s)}catch(s){await go(e,s)}_g(e)&&yg(e)}function FA(n){return hr(n)&&n.L_.length<10}function UA(n,e){n.L_.push(e);const t=xn(n);t.s_()&&t.f_&&t.g_(e.mutations)}function _g(n){return hr(n)&&!xn(n).i_()&&n.L_.length>0}function yg(n){xn(n).start()}async function BA(n){xn(n).w_()}async function jA(n){const e=xn(n);for(const t of n.L_)e.g_(t.mutations)}async function $A(n,e,t){const r=n.L_.shift(),s=sl.from(r,e,t);await mg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Wo(n)}async function qA(n,e){e&&xn(n).f_&&await async function(r,s){if(function(a){return Pw(a)&&a!==k.ABORTED}(s.code)){const i=r.L_.shift();xn(r).__(),await mg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wo(r)}}(n,e),_g(n)&&yg(n)}async function nf(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=hr(t);t.k_.add(3),await ii(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await zo(t)}async function HA(n,e){const t=ie(n);e?(t.k_.delete(2),await zo(t)):e||(t.k_.add(2),await ii(t),t.K_.set("Unknown"))}function Jr(n){return n.W_||(n.W_=function(t,r,s){const i=ie(t);return i.b_(),new CA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:NA.bind(null,n),mo:xA.bind(null,n),po:MA.bind(null,n),R_:LA.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),dl(n)?fl(n):n.K_.set("Unknown")):(await n.W_.stop(),gg(n))})),n.W_}function xn(n){return n.G_||(n.G_=function(t,r,s){const i=ie(t);return i.b_(),new DA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:BA.bind(null,n),po:qA.bind(null,n),p_:jA.bind(null,n),y_:$A.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Wo(n)):(await n.G_.stop(),n.L_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,u=new pl(e,t,a,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gl(n,e){if(on("AsyncQueue",`${e}: ${n}`),Gr(n))return new K(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{static emptySet(e){return new kr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=ms(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.z_=new Pe(X.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class $r{constructor(e,t,r,s,i,a,u,l,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new $r(e,t,kr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class WA{constructor(){this.queries=sf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=sf(),i.forEach((a,u)=>{for(const l of u.J_)l.onError(r)})})(this,new K(k.ABORTED,"Firestore shutting down"))}}function sf(){return new lr(n=>Up(n),Uo)}async function KA(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new zA,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=gl(a,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&ml(t)}async function GA(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function QA(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.J_)u.ta(s)&&(r=!0);a.H_=s}}r&&ml(t)}function JA(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(t);r.queries.delete(e)}function ml(n){n.X_.forEach(e=>{e.next()})}var pu,of;(of=pu||(pu={})).na="default",of.Cache="cache";class XA{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $r(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=$r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==pu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.key=e}}class Tg{constructor(e){this.key=e}}class YA{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=he(),this.mutatedKeys=he(),this.Va=Bp(e),this.ma=new kr(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new rf,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,g)=>{const I=s.get(d),b=Bo(this.query,g)?g:null,D=!!I&&this.mutatedKeys.has(I.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let F=!1;I&&b?I.data.isEqual(b.data)?D!==L&&(r.track({type:3,doc:b}),F=!0):this.ya(I,b)||(r.track({type:2,doc:b}),F=!0,(l&&this.Va(b,l)>0||f&&this.Va(b,f)<0)&&(u=!0)):!I&&b?(r.track({type:0,doc:b}),F=!0):I&&!b&&(r.track({type:1,doc:I}),F=!0,(l||f)&&(u=!0)),F&&(b?(a=a.add(b),i=L?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:a,pa:r,ss:u,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((d,g)=>function(b,D){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return L(b)-L(D)}(d.type,g.type)||this.Va(d.doc,g.doc)),this.wa(r),s=s!=null&&s;const u=t&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,f=l!==this.Aa;return this.Aa=l,a.length!==0||f?{snapshot:new $r(this.query,e.ma,i,a,e.mutatedKeys,l===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:u}:{ba:u}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new rf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=he(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Tg(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Eg(r))}),t}va(e){this.da=e.ds,this.Ra=he();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return $r.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ZA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class eb{constructor(e){this.key=e,this.Fa=!1}}class tb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new lr(u=>Up(u),Uo),this.Oa=new Map,this.Na=new Set,this.La=new Pe(X.comparator),this.Ba=new Map,this.ka=new al,this.qa={},this.Qa=new Map,this.Ka=jr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function nb(n,e,t=!0){const r=Rg(n);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Ig(r,e,t,!0),s}async function rb(n,e){const t=Rg(n);await Ig(t,e,!0,!1)}async function Ig(n,e,t,r){const s=await vA(n.localStore,Ft(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let u;return r&&(u=await sb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&dg(n.remoteStore,s),u}async function sb(n,e,t,r,s){n.Ua=(g,I,b)=>async function(L,F,W,Q){let G=F.view.ga(W);G.ss&&(G=await Zh(L.localStore,F.query,!1).then(({documents:w})=>F.view.ga(w,G)));const H=Q&&Q.targetChanges.get(F.targetId),oe=Q&&Q.targetMismatches.get(F.targetId)!=null,ye=F.view.applyChanges(G,L.isPrimaryClient,H,oe);return uf(L,F.targetId,ye.ba),ye.snapshot}(n,g,I,b);const i=await Zh(n.localStore,e,!0),a=new YA(e,i.ds),u=a.ga(i.documents),l=si.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(u,n.isPrimaryClient,l);uf(n,t,f.ba);const d=new ZA(e,t,a);return n.xa.set(e,d),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),f.snapshot}async function ib(n,e,t){const r=ie(n),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!Uo(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await du(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&cl(r.remoteStore,s.targetId),gu(r,s.targetId)}).catch(Kr)):(gu(r,s.targetId),await du(r.localStore,s.targetId,!0))}async function ob(n,e){const t=ie(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),cl(t.remoteStore,r.targetId))}async function ab(n,e,t){const r=pb(n);try{const s=await function(a,u){const l=ie(a),f=Le.now(),d=u.reduce((b,D)=>b.add(D.key),he());let g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=an(),L=he();return l.hs.getEntries(b,d).next(F=>{D=F,D.forEach((W,Q)=>{Q.isValidDocument()||(L=L.add(W))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,D)).next(F=>{g=F;const W=[];for(const Q of u){const G=ww(Q,g.get(Q.key).overlayedDocument);G!=null&&W.push(new cr(Q.key,G,Vp(G.value.mapValue),nn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,f,W,u)}).next(F=>{I=F;const W=F.applyToLocalDocumentSet(g,L);return l.documentOverlayCache.saveOverlays(b,F.batchId,W)})}).then(()=>({batchId:I.batchId,changes:$p(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let f=a.qa[a.currentUser.toKey()];f||(f=new Pe(fe)),f=f.insert(u,l),a.qa[a.currentUser.toKey()]=f}(r,s.batchId,t),await oi(r,s.changes),await Wo(r.remoteStore)}catch(s){const i=gl(s,"Failed to persist write");t.reject(i)}}async function vg(n,e){const t=ie(n);try{const r=await EA(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ba.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?Te(a.Fa):s.removedDocuments.size>0&&(Te(a.Fa),a.Fa=!1))}),await oi(t,r,e)}catch(r){await Kr(r)}}function af(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((i,a)=>{const u=a.view.ea(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=ie(a);l.onlineState=u;let f=!1;l.queries.forEach((d,g)=>{for(const I of g.J_)I.ea(u)&&(f=!0)}),f&&ml(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ub(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ba.get(e),i=s&&s.key;if(i){let a=new Pe(X.comparator);a=a.insert(i,tt.newNoDocument(i,re.min()));const u=he().add(i),l=new qo(re.min(),new Map,new Pe(fe),a,u);await vg(r,l),r.La=r.La.remove(i),r.Ba.delete(e),_l(r)}else await du(r.localStore,e,!1).then(()=>gu(r,e,t)).catch(Kr)}async function lb(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await yA(t.localStore,e);Ag(t,r,null),wg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await oi(t,s)}catch(s){await Kr(s)}}async function cb(n,e,t){const r=ie(n);try{const s=await function(a,u){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return l.mutationQueue.lookupMutationBatch(f,u).next(g=>(Te(g!==null),d=g.keys(),l.mutationQueue.removeMutationBatch(f,g))).next(()=>l.mutationQueue.performConsistencyCheck(f)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(f,d,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>l.localDocuments.getDocuments(f,d))})}(r.localStore,e);Ag(r,e,t),wg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await oi(r,s)}catch(s){await Kr(s)}}function wg(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Ag(n,e,t){const r=ie(n);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function gu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||bg(n,r)})}function bg(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(cl(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),_l(n))}function uf(n,e,t){for(const r of t)r instanceof Eg?(n.ka.addReference(r.key,e),hb(n,r)):r instanceof Tg?(z("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||bg(n,r.key)):te()}function hb(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(z("SyncEngine","New document in limbo: "+t),n.Na.add(r),_l(n))}function _l(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new X(be.fromString(e)),r=n.Ka.next();n.Ba.set(r,new eb(t)),n.La=n.La.insert(t,r),dg(n.remoteStore,new wn(Ft(nl(t.path)),r,"TargetPurposeLimboResolution",Mo.oe))}}async function oi(n,e,t){const r=ie(n),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((u,l)=>{a.push(r.Ua(l,e,t).then(f=>{var d;if((f||t)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(f){s.push(f);const g=ll.zi(l.targetId,f);i.push(g)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(l,f){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(f,I=>V.forEach(I.Wi,b=>d.persistence.referenceDelegate.addReference(g,I.targetId,b)).next(()=>V.forEach(I.Gi,b=>d.persistence.referenceDelegate.removeReference(g,I.targetId,b)))))}catch(g){if(!Gr(g))throw g;z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of f){const I=g.targetId;if(!g.fromCache){const b=d.us.get(I),D=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(D);d.us=d.us.insert(I,L)}}}(r.localStore,i))}async function fb(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await lg(t.localStore,e);t.currentUser=e,function(i,a){i.Qa.forEach(u=>{u.forEach(l=>{l.reject(new K(k.CANCELLED,a))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oi(t,r.Ts)}}function db(n,e){const t=ie(n),r=t.Ba.get(e);if(r&&r.Fa)return he().add(r.key);{let s=he();const i=t.Oa.get(e);if(!i)return s;for(const a of i){const u=t.xa.get(a);s=s.unionWith(u.view.fa)}return s}}function Rg(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=db.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ub.bind(null,e),e.Ma.R_=QA.bind(null,e.eventManager),e.Ma.Wa=JA.bind(null,e.eventManager),e}function pb(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cb.bind(null,e),e}class mo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ho(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return _A(this.persistence,new gA,e.initialUser,this.serializer)}ja(e){return new ug(ul.ei,this.serializer)}za(e){return new AA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mo.provider={build:()=>new mo};class gb extends mo{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Te(this.persistence.referenceDelegate instanceof po);const r=this.persistence.referenceDelegate.garbageCollector;return new eA(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new ug(r=>po.ei(r,t),this.serializer)}}class mu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>af(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fb.bind(null,this.syncEngine),await HA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WA}()}createDatastore(e){const t=Ho(e.databaseInfo.databaseId),r=function(i){return new PA(i)}(e.databaseInfo);return function(i,a,u,l){return new VA(i,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,u){return new OA(r,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>af(this.syncEngine,t,0),function(){return tf.p()?new tf:new bA}())}createSyncEngine(e,t){return function(s,i,a,u,l,f,d){const g=new tb(s,i,a,u,l,f);return d&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ii(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mu.provider={build:()=>new mu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=Pp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=gl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oa(n,e){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function lf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yb(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>nf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>nf(e.remoteStore,s)),n._onlineComponents=e}async function yb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Oa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lr("Error using user provided cache. Falling back to memory cache: "+t),await Oa(n,new mo)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Oa(n,new gb(void 0));return n._offlineComponents}async function Sg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await lf(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await lf(n,new mu))),n._onlineComponents}function Eb(n){return Sg(n).then(e=>e.syncEngine)}async function cf(n){const e=await Sg(n),t=e.eventManager;return t.onListen=nb.bind(null,e.syncEngine),t.onUnlisten=ib.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ob.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n,e,t){if(!t)throw new K(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tb(n,e,t,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ff(n){if(!X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function df(n){if(X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ko(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te()}function Vs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ko(n);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Go{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cv;switch(r.type){case"firstParty":return new Ov(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hf.get(t);r&&(z("ComponentProvider","Removing Datastore"),hf.delete(t),r.terminate())}(this),Promise.resolve()}}function Ib(n,e,t,r={}){var s;const i=(n=Vs(n,Go))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=Ye.MOCK_USER;else{u=rE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ye(f)}n._authCredentials=new Dv(new Sp(u,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class yt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Cn extends Fn{constructor(e,t,r){super(e,t,nl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new X(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function vb(n,e,...t){if(n=ct(n),Cg("collection","path",e),n instanceof Go){const r=be.fromString(e,...t);return df(r),new Cn(n,null,r)}{if(!(n instanceof yt||n instanceof Cn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(be.fromString(e,...t));return df(r),new Cn(n.firestore,null,r)}}function wb(n,e,...t){if(n=ct(n),arguments.length===1&&(e=Pp.newId()),Cg("doc","path",e),n instanceof Go){const r=be.fromString(e,...t);return ff(r),new yt(n,null,new X(r))}{if(!(n instanceof yt||n instanceof Cn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(be.fromString(e,...t));return ff(r),new yt(n.firestore,n instanceof Cn?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new hg(this,"async_queue_retry"),this.fu=()=>{const r=ka();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=ka();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new nr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Gr(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw on("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=pl.createAndSchedule(this,e,t,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function mf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class _o extends Go{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new gf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gf(e),this._firestoreClient=void 0,await e}}}function Ab(n,e){const t=typeof n=="object"?n:jd(),r=typeof n=="string"?n:"(default)",s=Uu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tE("firestore");i&&Ib(s,...i)}return s}function Dg(n){if(n._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bb(n),n._firestoreClient}function bb(n){var e,t,r;const s=n._freezeSettings(),i=function(u,l,f,d){return new Gv(u,l,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Pg(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new _b(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qr(We.fromBase64String(e))}catch(t){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qr(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=/^__.*__$/;class Sb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new ri(e,this.data,t,this.fieldTransforms)}}function Vg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class vl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return yo(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Vg(this.Mu)&&Rb.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Pb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ho(e)}$u(e,t,r,s=!1){return new vl({Mu:e,methodName:t,Ku:r,path:He.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kg(n){const e=n._freezeSettings(),t=Ho(n._databaseId);return new Pb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Cb(n,e,t,r,s,i={}){const a=n.$u(i.merge||i.mergeFields?2:0,e,t,s);xg("Data must be an object, but it was:",a,r);const u=Og(r,a);let l,f;if(i.merge)l=new St(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const I=Vb(e,g,t);if(!a.contains(I))throw new K(k.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Ob(d,I)||d.push(I)}l=new St(d),f=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,f=a.fieldTransforms;return new Sb(new vt(u),l,f)}class wl extends El{_toFieldTransform(e){return new Ew(e.path,new zs)}isEqual(e){return e instanceof wl}}function Db(n,e,t,r=!1){return Al(t,n.$u(r?4:3,e))}function Al(n,e){if(Ng(n=ct(n)))return xg("Unsupported field value:",e,n),Og(n,e);if(n instanceof El)return function(r,s){if(!Vg(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const u of r){let l=Al(u,s.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:fo(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fo(s.serializer,i)}}if(r instanceof Tl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qr)return{bytesValue:tg(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ol(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Il)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw u.qu("VectorValues must only contain numeric values.");return rl(u.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Ko(r)}`)}(n,e)}function Og(n,e){const t={};return Cp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(n,(r,s)=>{const i=Al(s,e.Ou(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ng(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof Tl||n instanceof qr||n instanceof yt||n instanceof El||n instanceof Il)}function xg(n,e,t){if(!Ng(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ko(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Vb(n,e,t){if((e=ct(e))instanceof yl)return e._internalPath;if(typeof e=="string")return Mg(n,e);throw yo("Field path arguments must be of type string or ",n,!1,void 0,t)}const kb=new RegExp("[~\\*/\\[\\]]");function Mg(n,e,t){if(e.search(kb)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yl(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function yo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new K(k.INVALID_ARGUMENT,u+n+l)}function Ob(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(bl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nb extends Lg{data(){return super.data()}}function bl(n,e){return typeof e=="string"?Mg(n,e):e instanceof yl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rl{}class Sl extends Rl{}function Mb(n,e,...t){let r=[];e instanceof Rl&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Cl).length,u=i.filter(l=>l instanceof Pl).length;if(a>1||a>0&&u>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Pl extends Sl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Pl(e,t,r)}_apply(e){const t=this._parse(e);return Fg(e._query,t),new Fn(e.firestore,e.converter,uu(e._query,t))}_parse(e){const t=kg(e.firestore);return function(i,a,u,l,f,d,g){let I;if(f.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){yf(g,d);const b=[];for(const D of g)b.push(_f(l,i,D));I={arrayValue:{values:b}}}else I=_f(l,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||yf(g,d),I=Db(u,a,g,d==="in"||d==="not-in");return Oe.create(f,d,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Cl extends Rl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Dt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)Fg(a,l),a=uu(a,l)}(e._query,t),new Fn(e.firestore,e.converter,uu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dl extends Sl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Dl(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new K(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hs(i,a)}(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Qr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Lb(n,e="asc"){const t=e,r=bl("orderBy",n);return Dl._create(r,t)}class Vl extends Sl{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Vl(e,t,r)}_apply(e){return new Fn(e.firestore,e.converter,co(e._query,this._limit,this._limitType))}}function Fb(n){return Vl._create("limit",n,"F")}function _f(n,e,t){if(typeof(t=ct(t))=="string"){if(t==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fp(e)&&t.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(be.fromString(t));if(!X.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xh(n,new X(r))}if(t instanceof yt)return xh(n,t._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ko(t)}.`)}function yf(n,e){if(!Array.isArray(n)||n.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fg(n,e){const t=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ub{convertValue(e,t="none"){switch(Nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(On(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ur(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>De(a.doubleValue));return new Il(i)}convertGeoPoint(e){return new Tl(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const t=kn(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=be.fromString(e);Te(ag(r));const s=new $s(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ug extends Lg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(bl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class zi extends Ug{data(e={}){return super.data(e)}}class jb{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new zi(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new zi(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ys(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new zi(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ys(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),d=a.indexOf(u.doc.key)),{type:$b(u.type),doc:l,oldIndex:f,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function $b(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class Bg extends Ub{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}function qb(n,e){const t=Vs(n.firestore,_o),r=wb(n),s=Bb(n.converter,e);return zb(t,[Cb(kg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function Hb(n,...e){var t,r,s;n=ct(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||mf(e[a])||(i=e[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(mf(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,f,d;if(n instanceof yt)f=Vs(n.firestore,_o),d=nl(n._key.path),l={next:g=>{e[a]&&e[a](Wb(f,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Vs(n,Fn);f=Vs(g.firestore,_o),d=g._query;const I=new Bg(f);l={next:b=>{e[a]&&e[a](new jb(f,I,g,b))},error:e[a+1],complete:e[a+2]},xb(n._query)}return function(I,b,D,L){const F=new mb(L),W=new XA(b,F,D);return I.asyncQueue.enqueueAndForget(async()=>KA(await cf(I),W)),()=>{F.eu(),I.asyncQueue.enqueueAndForget(async()=>GA(await cf(I),W))}}(Dg(f),d,u,l)}function zb(n,e){return function(r,s){const i=new nr;return r.asyncQueue.enqueueAndForget(async()=>ab(await Eb(r),s,i)),i.promise}(Dg(n),e)}function Wb(n,e,t){const r=t.docs.get(e._key),s=new Bg(n);return new Ug(n,s,e._key,r,new ys(t.hasPendingWrites,t.fromCache),e.converter)}function Kb(){return new wl("serverTimestamp")}(function(e,t=!0){(function(s){Wr=s})(Hr),xr(new sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),u=new _o(new Vv(r.getProvider("auth-internal")),new xv(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),Pn(Ch,"4.7.5",e),Pn(Ch,"4.7.5","esm2017")})();const Gb={apiKey:"AIzaSyArOWBxt0mTlXFRqVdFYAq4fSz9cAa59ME",authDomain:"chat-2b459.firebaseapp.com",projectId:"chat-2b459",storageBucket:"chat-2b459.firebasestorage.app",messagingSenderId:"941282758296",appId:"1:941282758296:web:6ecfc10dac2e3eb48b0aed"},jg=Bd(Gb),Na=Sv(jg),Qb=Ab(jg),$g=vb(Qb,"messages"),Jb=Mb($g,Lb("createdAt","desc"),Fb(100));function qg(){const n=Gs(null),e=gI(Na,i=>{n.value=i});So(e);const t=Mu(()=>n.value!==null);return{user:n,isLogin:t,signIn:async()=>{const i=new Xt;await MI(Na,i)},signOut:()=>{mI(Na)}}}function Hg(){const n=Gs([]),e=Hb(Jb,i=>{n.value=i.docs.map(a=>({id:a.id,...a.data()})).reverse()});So(e);const{user:t,isLogin:r}=qg();return{messages:n,sendMessage:i=>{if(!r.value)return;const{photoURL:a,uid:u,displayName:l}=t.value||{};qb($g,{userName:l,userId:u,userPhotoURL:a,text:i,createdAt:Kb()})}}}const Xb=["src"],zg=Js({__name:"Avatar",props:{src:{type:String,default:""}},setup(n){return(e,t)=>(ft(),Rt("img",{class:"avatar",src:n.src,alt:"avatar",width:"50",height:"50"},null,8,Xb))}}),Yb=Js({__name:"Message",props:{name:{type:String,default:""},photoUrl:{type:String,default:""},sender:{type:Boolean,default:!1}},setup(n){return(e,t)=>(ft(),Rt("li",{class:ks(["message flex",{"flex-row-reverse":n.sender}])},[_t(zg,{src:n.photoUrl},null,8,["src"]),It("div",{class:ks(["text-message",n.sender?"mr":"ml"])},[v_(e.$slots,"default")],2)],2))}}),Zb="data:image/svg+xml,%3csvg%20width='22.8'%20height='21.6'%20viewBox='0%200%2019%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.4258%208.095L1.42576%200.0949962C1.2546%200.0140123%201.06394%20-0.0166567%200.87601%200.00656362C0.688081%200.029784%200.510622%200.105937%200.364315%200.226148C0.218008%200.346359%200.108879%200.505676%200.0496467%200.685531C-0.00958555%200.865386%20-0.0164815%201.05837%200.0297628%201.242L1.96876%209L0.0297628%2016.758C-0.0169142%2016.9417%20-0.0103198%2017.1349%200.0487746%2017.315C0.107869%2017.495%200.21702%2017.6546%200.363459%2017.7749C0.509899%2017.8952%200.687572%2017.9713%200.875696%2017.9944C1.06382%2018.0174%201.25461%2017.9864%201.42576%2017.905L18.4258%209.905C18.5976%209.82424%2018.7428%209.69625%2018.8446%209.53599C18.9463%209.37574%2019.0004%209.18983%2019.0004%209C19.0004%208.81017%2018.9463%208.62426%2018.8446%208.464C18.7428%208.30374%2018.5976%208.17575%2018.4258%208.095ZM2.48076%2015.197L3.31976%2011.84L8.99976%209L3.31976%206.16L2.48076%202.803L15.6508%209L2.48076%2015.197Z'%20fill='%23798897'/%3e%3c/svg%3e",kl=Ky("user",{state:()=>({user:null,messages:null}),actions:{setUser(n){n?(this.user=n,localStorage.setItem("user",JSON.stringify(n))):(this.user=null,localStorage.removeItem("user"))},setMessages(n){n?(this.messages=n,localStorage.setItem("messages",JSON.stringify(n))):(this.messages=null,localStorage.removeItem("messages"))},initializeState(){const n=localStorage.getItem("user"),e=localStorage.getItem("messages");n&&e&&(this.user=JSON.parse(n),this.messages=JSON.parse(e))}}}),eR={key:0,class:"chat"},tR={key:0,class:"messages"},nR={key:1,class:"loading"},rR={type:"submit",class:"message-btn"},sR=["src"],iR={key:1,class:"not-logged"},oR=Js({__name:"Chat",setup(n){const e=kl(),{messages:t,sendMessage:r}=Hg(),s=Gs(""),i=()=>{r(s.value),s.value=""};return Pr(t,()=>{e.setMessages(t.value),Qi(()=>{const a=document.querySelector(".messages");a&&(a.scrollTop=a.scrollHeight)})}),ku(()=>{Qi(()=>{const a=document.querySelector(".messages");a&&(a.scrollTop=a.scrollHeight)})}),(a,u)=>En(e).user?(ft(),Rt("div",eR,[En(e).messages?(ft(),Rt("ul",tR,[(ft(!0),Rt(gt,null,I_(En(e).messages,({id:l,text:f,userPhotoURL:d,userName:g,userId:I})=>{var b;return ft(),Ha(Yb,{key:l,name:g,"photo-url":d,sender:I===((b=En(e).user)==null?void 0:b.uid)},{default:Zf(()=>[Ad(Sf(f),1)]),_:2},1032,["name","photo-url","sender"])}),128))])):(ft(),Rt("div",nR,u[1]||(u[1]=[It("h2",null,"Loading...",-1)]))),It("form",{class:"form-control",onSubmit:xy(i,["prevent"])},[o_(It("input",{"onUpdate:modelValue":u[0]||(u[0]=l=>s.value=l),class:"message-input",type:"text",placeholder:"Write a message...",required:""},null,512),[[ky,s.value]]),It("button",rR,[It("img",{src:En(Zb),alt:"send"},null,8,sR)])],32)])):(ft(),Rt("div",iR,u[2]||(u[2]=[It("h2",null,"Sign in to use the app",-1)])))}}),aR={class:"header"},uR={key:0,class:"login"},lR=Js({__name:"Header",setup(n){const e=kl(),{user:t,signOut:r,signIn:s}=qg(),{messages:i}=Hg(),a=async()=>{try{await s(),e.setUser(t.value),e.setMessages(i.value)}catch(l){console.error("Error during sign-in:",l)}},u=()=>{r(),e.setUser(),e.setMessages()};return Pr(e.user,()=>{e.user||e.setUser()}),(l,f)=>(ft(),Rt("header",aR,[f[0]||(f[0]=It("div",null,"MODERN CHAT",-1)),En(e).user?(ft(),Rt("div",uR,[_t(zg,{src:En(e).user.photoURL??void 0},null,8,["src"]),It("button",{class:"btn signOut-btn",onClick:u},"SIGN OUT")])):(ft(),Rt("button",{key:1,class:"btn",onClick:a},"SIGN IN"))]))}}),cR={class:"app"},hR={class:"container"},fR=Js({__name:"App",setup(n){const e=kl();return ku(()=>{e.initializeState()}),(t,r)=>(ft(),Rt("div",cR,[_t(lR),It("div",hR,[_t(oR)])]))}});Fy(fR).use(jy()).mount("#app");
