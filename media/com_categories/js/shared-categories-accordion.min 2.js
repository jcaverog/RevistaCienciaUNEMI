if(!Joomla||!Joomla.Text)throw new Error("core.js was not properly initialised");const buttonsSelector="[id^=category-btn-]",handleCategoryToggleButtonClick=({currentTarget:t})=>{const e=t,o=e.querySelector("span");o.classList.toggle("icon-plus"),o.classList.toggle("icon-minus");const a=e.getAttribute("aria-label"),r=e.getAttribute("aria-expanded");e.setAttribute("aria-label",a===Joomla.Text._("JGLOBAL_EXPAND_CATEGORIES")?Joomla.Text._("JGLOBAL_COLLAPSE_CATEGORIES"):Joomla.Text._("JGLOBAL_EXPAND_CATEGORIES")),e.setAttribute("aria-expanded","false"===r?"true":"false");const{categoryId:l}=e.dataset;document.getElementById(`category-${l}`).toggleAttribute("hidden")};Array.from(document.querySelectorAll(buttonsSelector)).forEach((t=>{t.addEventListener("click",handleCategoryToggleButtonClick)}));