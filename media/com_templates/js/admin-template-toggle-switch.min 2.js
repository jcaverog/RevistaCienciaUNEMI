(()=>{const e=()=>{const e=document.getElementById("diff-main");e&&(e.classList.remove("active"),"undefined"!=typeof Storage&&localStorage.removeItem("diffSwitchState"))},t=()=>{const e=document.getElementById("diff-main");e&&(e.classList.add("active"),"undefined"!=typeof Storage&&localStorage.setItem("diffSwitchState","checked"))},o=()=>{const e=document.getElementById("override-pane"),t=document.getElementById("core-pane"),o=e.parentElement.parentElement;t&&e&&(t.classList.remove("active"),o.classList.contains("options-grid-form-half")&&(o.classList.remove("options-grid-form-half"),o.classList.add("options-grid-form-full")),"undefined"!=typeof Storage&&localStorage.removeItem("coreSwitchState"))},n=()=>{const e=document.getElementById("override-pane"),t=document.getElementById("core-pane"),o=e.parentElement.parentElement;t&&e&&(t.classList.add("active"),o.classList.contains("options-grid-form-full")&&(o.classList.remove("options-grid-form-full"),o.classList.add("options-grid-form-half")),Joomla.editors.instances.jform_core&&Joomla.editors.instances.jform_core.refresh(),"undefined"!=typeof Storage&&localStorage.setItem("coreSwitchState","checked"))};document.addEventListener("DOMContentLoaded",(()=>{const c=document.getElementById("jform_show_diff1"),d=document.getElementById("jform_show_diff0"),a=document.getElementById("jform_show_core1"),i=document.getElementById("jform_show_core0");c&&d&&(c.addEventListener("click",t),d.addEventListener("click",e)),a&&i&&(a.addEventListener("click",n),i.addEventListener("click",o)),"undefined"!=typeof Storage&&localStorage.getItem("coreSwitchState")&&a&&(a.checked=!0,i.checked=!1,n()),"undefined"!=typeof Storage&&localStorage.getItem("diffSwitchState")&&c&&(c.checked=!0,d.checked=!1,t())}))})();