(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector(".navigation"),u=document.querySelector(".header__button"),f=document.querySelector(".navigation__button"),d=document.body;u.addEventListener("click",function(){a.classList.add("is-active"),d.classList.add("is-nav-active")});f.addEventListener("click",function(){a.classList.remove("is-active"),d.classList.remove("is-nav-active")});document.querySelector(".form__select");const r=document.querySelector(".form__select-block"),l=document.querySelector(".form__select-value"),m=document.querySelectorAll(".form__select-dropdown li");r.addEventListener("click",()=>{r.classList.toggle("active"),r.setAttribute("aria-expanded",r.getAttribute("aria-expanded")==="true"?"false":"true")});m.forEach(c=>{function o(n){n.type==="click"&&n.clientX!==0&&n.clientY!==0&&(l.textContent=this.children[1].textContent,r.classList.remove("active")),n.key==="Enter"&&(l.textContent=this.textContent,r.classList.remove("active"))}c.addEventListener("keyup",o),c.addEventListener("click",o)});
