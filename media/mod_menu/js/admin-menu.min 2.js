const allMenus=document.querySelectorAll("ul.main-nav");allMenus.forEach((e=>{new MetisMenu(e)}));const wrapper=document.getElementById("wrapper"),sidebar=document.getElementById("sidebar-wrapper"),menuToggleIcon=document.getElementById("menu-collapse-icon");if(sidebar||wrapper.classList.remove("closed"),sidebar&&!sidebar.getAttribute("data-hidden")){const e=document.getElementById("menu-collapse");[].slice.call(sidebar.querySelectorAll(".collapse-level-1")).forEach((e=>{[].slice.call(e.querySelectorAll(".collapse-level-1")).forEach((e=>{e&&(e.classList.remove("collapse-level-1"),e.classList.add("collapse-level-2"))}))})),e.addEventListener("click",(e=>{e.preventDefault(),wrapper.classList.toggle("closed"),menuToggleIcon.classList.toggle("icon-toggle-on"),menuToggleIcon.classList.toggle("icon-toggle-off");[].slice.call(document.querySelectorAll(".main-nav > li")).forEach((e=>{e.classList.remove("open")}));const l=document.querySelector(".child-open");l&&l.classList.remove("child-open"),window.dispatchEvent(new CustomEvent("joomla:menu-toggle",{detail:wrapper.classList.contains("closed")?"closed":"open",bubbles:!0,cancelable:!0}))}));const l=wrapper.querySelectorAll("a.no-dropdown, a.collapse-arrow, .menu-dashboard > a"),s=window.location.href,o=document.querySelector("ul.main-nav"),a=[].slice.call(o.querySelectorAll("li.parent > a")),c=[].slice.call(o.querySelectorAll("li.parent .close"));l.forEach((e=>{if((!e.href.match(/index\.php$/)&&0===s.indexOf(e.href)||e.href.match(/index\.php$/)&&s.match(/index\.php$/))&&(e.setAttribute("aria-current","page"),e.classList.add("mm-active"),!e.parentNode.classList.contains("parent"))){const l=e.closest(".collapse-level-1"),s=e.closest(".collapse-level-2");l&&l.parentNode.classList.add("mm-active"),l&&l.classList.add("mm-show"),s&&s.parentNode.classList.add("mm-active"),s&&s.classList.add("mm-show")}}));const t=({currentTarget:e})=>{let l=e.parentNode;if("span"===l.tagName.toLowerCase()&&(l=e.parentNode.parentNode),l.classList.contains("open"))o.classList.remove("child-open"),l.classList.remove("open");else{[].slice.call(l.parentNode.children).forEach((e=>{e.classList.remove("open")})),wrapper.classList.remove("closed"),menuToggleIcon.classList.contains("icon-toggle-off")&&(menuToggleIcon.classList.toggle("icon-toggle-off"),menuToggleIcon.classList.toggle("icon-toggle-on")),o.classList.add("child-open"),l.parentNode.classList.contains("main-nav")&&l.classList.add("open")}window.dispatchEvent(new CustomEvent("joomla:menu-toggle",{detail:"open",bubbles:!0,cancelable:!0}))};a.forEach((e=>{e.addEventListener("click",t),e.addEventListener("keyup",t)})),c.forEach((e=>{e.addEventListener("click",(()=>{[].slice.call(o.querySelectorAll(".open")).forEach((e=>{e.classList.remove("open")})),o.classList.remove("child-open")}))}))}