function a(){import.meta.url,import("_").catch(()=>1);async function*r(){}}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function s(r){const o="".concat(document.querySelector('meta[name="pageTitleGAEvents"]').content);document.querySelector('[data-analytics="'.concat(r,'"]'))&&document.querySelectorAll('[data-analytics="'.concat(r,'"]')).forEach(c=>{c.addEventListener("click",()=>{const i="Buttons_".concat(o),e="Buttons_".concat(o),t="".concat(c.dataset.label);let n=new Object;n={[e]:t},typeof gtag=="function"?gtag("event",i,n):console.log("⛔️ Please define the gtag function in the head tag of html file, function is NOT defined")})})}//! html structure - copy templates to your document:
window.addEventListener("DOMContentLoaded",()=>{s("gaScripts")});export{a as __vite_legacy_guard};
