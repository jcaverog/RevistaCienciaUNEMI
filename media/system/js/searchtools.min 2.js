Joomla=window.Joomla||{},(t=>{t.resetFilters=t=>{const{form:e}=t;if(!e)throw new Error("Element must be inside a form!");const i=[].slice.call(e.elements);if(i.length){const s=[];i.forEach((e=>{"task"===e.getAttribute("name")||"boxchecked"===e.getAttribute("name")||"1"===e.value&&/^[0-9A-F]{32}$/i.test(e.name)||e===t||s.push(e)})),s.forEach((t=>{t.value=""})),e.submit()}};class e{constructor(e,i){this.element=e,this.options=t.extend({formSelector:".js-stools-form",searchFieldSelector:".js-stools-field-search",clearBtnSelector:".js-stools-btn-clear",mainContainerSelector:".js-stools",searchBtnSelector:".js-stools-btn-search",filterBtnSelector:".js-stools-btn-filter",filterContainerSelector:".js-stools-container-filters",filtersHidden:!0,listBtnSelector:".js-stools-btn-list",listContainerSelector:".js-stools-container-list",listHidden:!0,orderColumnSelector:".js-stools-column-order",orderBtnSelector:".js-stools-btn-order",orderFieldSelector:".js-stools-field-order",orderFieldName:"list[fullordering]",limitFieldSelector:".js-stools-field-limit",defaultLimit:20,activeOrder:null,activeDirection:"ASC",clearListOptions:!1},i),this.theForm=document.querySelector(this.options.formSelector),this.filterButton=document.querySelector(`${this.options.formSelector} ${this.options.filterBtnSelector}`),this.filterContainer=document.querySelector(`${this.options.formSelector} ${this.options.filterContainerSelector}`)?document.querySelector(`${this.options.formSelector} ${this.options.filterContainerSelector}`):"",this.filtersHidden=this.options.filtersHidden,this.listButton=document.querySelector(this.options.listBtnSelector),this.listContainer=document.querySelector(`${this.options.formSelector} ${this.options.listContainerSelector}`),this.listHidden=this.options.listHidden,this.mainContainer=document.querySelector(this.options.mainContainerSelector),this.searchButton=document.querySelector(`${this.options.formSelector} ${this.options.searchBtnSelector}`),this.searchField=document.querySelector(`${this.options.formSelector} ${this.options.searchFieldSelector}`),this.searchString=null,this.clearButton=document.querySelector(this.options.clearBtnSelector),this.orderCols=Array.prototype.slice.call(document.querySelectorAll(`${this.options.formSelector} ${this.options.orderColumnSelector}`)),this.orderField=document.querySelector(`${this.options.formSelector} ${this.options.orderFieldSelector}`),this.limitField=document.querySelector(`${this.options.formSelector} ${this.options.limitFieldSelector}`),this.activeColumn=null,this.activeDirection=this.options.activeDirection,this.activeOrder=this.options.activeOrder,this.activeLimit=null,this.clearListOptions=this.options.clearListOptions;const s=this;this.searchString=this.searchField.value,this.showFilters=this.showFilters.bind(this),this.hideFilters=this.hideFilters.bind(this),this.showList=this.showList.bind(this),this.hideList=this.hideList.bind(this),this.toggleFilters=this.toggleFilters.bind(this),this.toggleList=this.toggleList.bind(this),this.checkFilter=this.checkFilter.bind(this),this.clear=this.clear.bind(this),this.createOrderField=this.createOrderField.bind(this),this.checkActiveStatus=this.checkActiveStatus.bind(this),this.activeFilter=this.activeFilter.bind(this),this.deactiveFilter=this.deactiveFilter.bind(this),this.getFilterFields=this.getFilterFields.bind(this),this.getListFields=this.getListFields.bind(this),this.hideContainer=this.hideContainer.bind(this),this.showContainer=this.showContainer.bind(this),this.toggleContainer=this.toggleContainer.bind(this),this.toggleDirection=this.toggleDirection.bind(this),this.updateFieldValue=this.updateFieldValue.bind(this),this.findOption=this.findOption.bind(this),this.filterContainer&&this.filterContainer.classList.contains("js-stools-container-filters-visible")?(this.showFilters(),this.showList()):(this.hideFilters(),this.hideList()),this.filterButton&&this.filterButton.addEventListener("click",(t=>{s.toggleFilters(),t.stopPropagation(),t.preventDefault()})),this.listButton&&this.listButton.addEventListener("click",(t=>{s.toggleList(),t.stopPropagation(),t.preventDefault()})),this.getFilterFields().forEach((t=>{s.checkFilter(t),t.addEventListener("change",(()=>{s.checkFilter(t)}))})),this.clearButton&&this.clearButton.addEventListener("click",s.clear),this.createOrderField(),this.orderCols.forEach((t=>{t.addEventListener("click",(({target:t})=>{const e="span"===t.tagName.toLowerCase()?t.parentNode:t,i=e.getAttribute("data-order"),o=e.getAttribute("data-direction"),r=`${i} ${o}`;i.length&&(s.activeColumn=i,r!==s.activeOrder?(s.activeDirection=o,s.activeOrder=r,s.updateFieldValue(s.orderField,r)):s.toggleDirection(),s.theForm.submit())}))})),this.checkActiveStatus(this)}checkFilter(t){if("select"===t.tagName.toLowerCase()){const e=t.querySelector("option:checked");e&&(""!==e.value?this.activeFilter(t,this):this.deactiveFilter(t,this))}else""!==t.value?this.activeFilter(t,this):this.deactiveFilter(t,this)}clear(){const t=this;t.searchField&&(t.searchField.value=""),t.getFilterFields().forEach((e=>{e.value="",t.checkFilter(e),window.jQuery&&window.jQuery.chosen&&window.jQuery(e).trigger("chosen:updated")})),t.clearListOptions&&(t.getListFields().forEach((e=>{e.value="",t.checkFilter(e),window.jQuery&&window.jQuery.chosen&&window.jQuery(e).trigger("chosen:updated")})),document.querySelector("#list_limit").value=t.options.defaultLimit,window.jQuery&&window.jQuery.chosen&&window.jQuery("#list_limit").trigger("chosen:updated")),t.theForm.submit()}updateFilterCount(t){this.clearButton&&(this.clearButton.disabled=0===t&&!this.searchString.length)}checkActiveStatus(t){let e=0;if(this.getFilterFields().forEach((i=>{i.classList.contains("active")&&(e+=1,t.filterButton.classList.remove("btn-secondary"),t.filterButton.classList.add("btn-primary"))})),0===e){const t=document.getElementById("filteredBy");t&&t.parentNode.removeChild(t)}this.clearButton&&(this.clearButton.disabled=0===e&&!this.searchString.length)}activeFilter(t){t.classList.add("active");const e=`#${t.getAttribute("id")}`,i=t.querySelector(e);i&&i.classList.add("active");const s=document.getElementById("filteredBy"),o=Object.prototype.hasOwnProperty.call(t.attributes,"type")&&"hidden"===t.attributes.type.value;if(s&&!o){let e="";if("select"===t.tagName.toLowerCase())if(!0===t.multiple){const i=t.querySelectorAll("option:checked"),s=[].slice.call(i).map((t=>t.text));e=`${t.labels[0].textContent} - ${s.join()}`}else e=`${t.labels[0].textContent} - ${t.options[t.selectedIndex].text}`;else e=`${t.labels[0].textContent} - ${t.value}`;s.textContent+=e}}deactiveFilter(t){t.classList.remove("active");const e=`#${t.getAttribute("id")}`,i=t.querySelector(e);i&&i.classList.remove("active")}getFilterFields(){return this.filterContainer?Array.prototype.slice.call(this.filterContainer.querySelectorAll("select,input")):[]}getListFields(){return Array.prototype.slice.call(this.listContainer.querySelectorAll("select"))}hideContainer(t){t&&(t.classList.remove("js-stools-container-filters-visible"),document.body.classList.remove("filters-shown"))}showContainer(t){t.classList.add("js-stools-container-filters-visible"),document.body.classList.add("filters-shown")}toggleContainer(t){t.classList.contains("js-stools-container-filters-visible")?this.hideContainer(t):this.showContainer(t)}hideList(){this.hideContainer(this.filterContainer)}showList(){this.showContainer(this.filterContainer)}toggleList(){this.toggleContainer(this.filterContainer)}hideFilters(){this.hideContainer(this.filterContainer)}showFilters(){this.showContainer(this.filterContainer)}toggleFilters(){this.toggleContainer(this.filterContainer)}toggleDirection(){const t=this;let e="ASC";"ASC"===t.activeDirection.toUpperCase()&&(e="DESC"),t.activeDirection=e,t.activeOrder=`${t.activeColumn} ${e}`,t.updateFieldValue(t.orderField,t.activeOrder)}createOrderField(){const e=this;if(this.orderField||(this.orderField=document.createElement("input"),this.orderField.setAttribute("type","hidden"),this.orderField.setAttribute("id","js-stools-field-order"),this.orderField.setAttribute("class","js-stools-field-order"),this.orderField.setAttribute("name",e.options.orderFieldName),this.orderField.setAttribute("value",`${e.activeOrder} ${this.activeDirection}`),this.theForm.append(this.orderField)),"select"===this.orderField.tagName.toLowerCase()){[].slice.call(this.orderField.options).forEach((i=>{let s=i.getAttribute("data-order");const o=i.getAttribute("data-name"),r=i.getAttribute("data-direction");if(s&&s.length){s=`${s} ${r}`;let l=e.findOption(e.orderField,s);l.length||(l=document.createElement("option"),l.text=o,l.value=s,i.classList.contains("active")&&l.setAttribute("selected","selected"),this.orderFieldName.innerHTML+=t.sanitizeHtml(l))}})),window.jQuery&&window.jQuery.chosen&&window.jQuery(this.orderField).trigger("chosen:updated")}this.activeOrder=this.orderField.value}updateFieldValue(t,e){const i=t.getAttribute("type");if("hidden"===i||"text"===i)t.setAttribute("value",e);else if("select"===t.tagName.toLowerCase()){let i;if([].slice.call(t.options).forEach((t=>{t.value===e&&(i=t)})),i&&i.length)i.setAttribute("selected","selected");else{const i=document.createElement("option");i.text=e,i.value=e,i.setAttribute("selected","selected"),t.appendChild(i)}t.value=e,window.jQuery&&window.jQuery.chosen&&t.trigger("chosen:updated")}}findOption(t,e){for(let i=0,s=t.length;s>i;i++)if(t[i].value===e)return t[i]}}const i=()=>{if(t.getOptions("searchtools")){const i=t.getOptions("searchtools"),s=document.querySelector(i.selector);new e(s,i)}const s=document.getElementById("sorted"),o=document.getElementById("orderedBy");if(s&&s.hasAttribute("data-caption")&&o){const t=s.getAttribute("data-caption");o.textContent+=t}if(s&&s.hasAttribute("data-sort")){const t=s.getAttribute("data-sort");s.parentNode.setAttribute("aria-sort",t)}document.removeEventListener("DOMContentLoaded",i)};document.addEventListener("DOMContentLoaded",i)})(Joomla);