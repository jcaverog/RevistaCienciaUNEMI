(()=>{const e=e=>{"-"===e||0===parseInt(e,10)?document.getElementById("menuselect-group").classList.add("hidden"):document.getElementById("menuselect-group").classList.remove("hidden")},t=()=>{const n=document.getElementById("jform_assignment");n&&(e(n.value),n.addEventListener("change",(({target:t})=>{e(t.value)}))),document.removeEventListener("DOMContentLoaded",t)};document.addEventListener("DOMContentLoaded",t)})();