((t,e)=>{const a="data-submit-task";t.addEventListener("DOMContentLoaded",(()=>{[].slice.call(t.querySelectorAll("[data-submit-task]")).forEach((l=>{l.addEventListener("click",(l=>{l.preventDefault();(a=>{const l=t.getElementById("adminForm");("article.cancel"===a||t.formvalidator.isValid(l))&&e(a,l)})(l.target.getAttribute(a))}))}))}))})(document,Joomla.submitform);