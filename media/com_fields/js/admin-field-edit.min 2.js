document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("jform_title");e.dpOldValue=e.value,e.addEventListener("change",(({currentTarget:e})=>{const t=document.getElementById("jform_label"),d=e;d.dpOldValue===t.value&&(t.value=d.value),d.dpOldValue=d.value}))}));