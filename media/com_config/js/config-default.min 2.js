((t,e)=>{const a="data-submit-task",r=()=>{[].slice.call(t.querySelectorAll("[data-submit-task]")).forEach((r=>{r.addEventListener("click",(r=>{r.preventDefault();((a,r)=>{("config.cancel"===a||t.formvalidator.isValid(r))&&e(a,r)})(r.currentTarget.getAttribute(a),r.currentTarget.form)}))}))};t.addEventListener("DOMContentLoaded",(()=>{r()}))})(document,Joomla.submitform);