(e=>{const t=e.getOptions("category-change"),a=document.querySelector(`#${t}`);if(!a)throw new Error("Category Id element not found");a.getAttribute("data-refresh-catid")&&a.value!==a.getAttribute("data-cat-id")?a.value=a.getAttribute("data-refresh-catid"):a.setAttribute("data-refresh-catid",a.value),window.Joomla.categoryHasChanged=t=>{t.value!==t.getAttribute("data-refresh-catid")&&(document.body.appendChild(document.createElement("joomla-core-loader")),t.getAttribute("data-refresh-section")&&(document.querySelector("input[name=task]").value=`${t.getAttribute("data-refresh-section")}.reload`),e.submitform(`${t.getAttribute("data-refresh-section")}.reload`,a.form))}})(Joomla);