Joomla=window.Joomla||{},document.addEventListener("DOMContentLoaded",(()=>{[].slice.call(document.querySelectorAll(".filter-toggle-all")).forEach((e=>{e.addEventListener("click",(()=>{[].slice.call(document.querySelectorAll(".filter-node")).forEach((e=>{e.click()}))}))})),[].slice.call(document.querySelectorAll(".filter-node")).forEach((()=>{const e=document.getElementById("jform_map_count");e&&(e.value=document.querySelectorAll('input[type="checkbox"]:checked').length)})),Array.from(document.querySelectorAll(".js-filter")).forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget;Array.from(document.querySelectorAll(`.${t.dataset.id}`)).map((e=>e.click()))}))}));const e=document.getElementById("expandAccordion");e&&e.addEventListener("click",(e=>{let t;e.preventDefault(),e.target.innerText===Joomla.Text._("COM_FINDER_FILTER_SHOW_ALL")?(e.target.innerText=Joomla.Text._("COM_FINDER_FILTER_HIDE_ALL"),t=[].slice.call(document.querySelectorAll(".accordion-button.collapsed"))):(e.target.innerText=Joomla.Text._("COM_FINDER_FILTER_SHOW_ALL"),t=[].slice.call(document.querySelectorAll(".accordion-button:not(.collapsed)"))),t&&t.forEach((e=>{e.click()}))}))}));