(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--.."},m=function(n){return n.toUpperCase().split("").map(function(o){return u[o]?u[o]:o}).join("")},h=n=>Object.keys(u).find(o=>u[o]===n),y=n=>{const r=n.trim().split("  "),o=[];for(const i of r){const e=i.split(" "),t=[];for(const s of e){const a=h(s);a&&t.push(a)}o.push(t.join(""))}return o.join(" ")},p=document.querySelector(".input-form__input"),d=document.querySelector(".morse-code__output"),l=document.querySelector("button"),f=document.querySelector("label");let c=!1;if(!p||!d||!l)throw new Error("Issue with selector");const T=n=>{const r=n.currentTarget.value;c?d.innerHTML=y(r):d.innerHTML=m(r)},M=()=>{c?c=!1:c=!0,c?(l.innerText="Morse to text",f.innerText="Type your Morse code here:"):(l.innerText="Text to Morse",f.innerText="Type your text here:"),d.innerHTML=""};p.addEventListener("input",T);l.addEventListener("click",M);