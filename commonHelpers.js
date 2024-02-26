import{S as f,i as a}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".gallery-list"),g=document.querySelector("button"),l=document.querySelector(".loader");function y(){u.innerHTML=""}g.addEventListener("click",()=>{l.style.display="block",p().then(s=>{u.innerHTML=h(s),l.style.display="none",new f(".gallery-link").refresh()})});function h(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:m})=>`<li class="gallery-item">
        <a href="${o}" class="gallery-link" alt="${n}">
        <img class="gallery-image" src="${r}" alt="${n}"/>
        </a>
            <div class="wrapper-descs">
            <div class="wrapper-desc">
                <p class="desc">Likes</p>
                <p class="desc-values">${e}</p>
                </div>
                <div class="wrapper-desc">
                <p class="desc">Views</p>
                <p class="desc-values">${t}</p>
                </div>
                <div class="wrapper-desc">
                <p class="desc">Comments</p>
                <p class="desc-values">${i}</p>
                </div>
                <div class="wrapper-desc">
                <p class="desc">Downloads</p>
                <p class="desc-values">${m}</p>
                </div>
            </div>
        </li>`).join("")}const d=document.querySelector("input"),v=document.querySelector("form");document.querySelector(".loader");const L="https://pixabay.com/api/",w="42561040-543dc47762d23067e130ec962";let c="";d.addEventListener("input",s=>{c=d.value,console.log(c)});function p(){y();const s=`${L}?key=${w}&q=${c}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error("Image error");return r.json()}).then(r=>{const o=r.hits;if(o.length===0)a.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"});else return o}).catch(r=>(a.error({title:"Caution",message:"Error while fetching images from pixabay"}),[]))}v.addEventListener("submit",s=>{s.preventDefault(),p()});
//# sourceMappingURL=commonHelpers.js.map
