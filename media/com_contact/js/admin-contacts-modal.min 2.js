window.jSelectContact=(t,e,a,n,o,r)=>{let l="";if(!Joomla.getOptions("xtd-contacts"))return window.parent.Joomla.Modal.getCurrent().close(),!1;const{editor:d}=Joomla.getOptions("xtd-contacts");""!==r&&(l=`hreflang = "${r}"`);const i=`<a ${l}  href="${o}">${e}</a>`;return window.parent.Joomla.editors.instances[d].replaceSelection(i),window.parent.Joomla.Modal.getCurrent().close(),!0},document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll(".select-link");for(let e=0,a=t.length;a>e;e+=1)t[e].addEventListener("click",(t=>{t.preventDefault();const e=t.target.getAttribute("data-function");"jSelectContact"===e?window[e](t.target.getAttribute("data-id"),t.target.getAttribute("data-title"),null,null,t.target.getAttribute("data-uri"),t.target.getAttribute("data-language"),null):window.parent[e](t.target.getAttribute("data-id"),t.target.getAttribute("data-title"),null,null,t.target.getAttribute("data-uri"),t.target.getAttribute("data-language"),null),window.parent.Joomla.Modal&&window.parent.Joomla.Modal.getCurrent().close()}))}));