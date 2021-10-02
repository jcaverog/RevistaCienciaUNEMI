(e=>{const t=32,r=27,s=13;class a extends HTMLElement{get buttonAdd(){return this.getAttribute("button-add")}get buttonRemove(){return this.getAttribute("button-remove")}get buttonMove(){return this.getAttribute("button-move")}get rowsContainer(){return this.getAttribute("rows-container")}get repeatableElement(){return this.getAttribute("repeatable-element")}get minimum(){return this.getAttribute("minimum")}get maximum(){return this.getAttribute("maximum")}get name(){return this.getAttribute("name")}set name(e){return this.template=this.template.replace(new RegExp(` name="${this.name.replace(/[[\]]/g,"\\$&")}`,"g"),` name="${e}`),this.setAttribute("name",e)}constructor(){super();const e=this;if(this.containerWithRows=this,this.rowsContainer){const e=this.querySelectorAll(this.rowsContainer);Array.from(e).forEach((e=>{e.closest("joomla-field-subform")===this&&(this.containerWithRows=e)}))}this.lastRowIndex=this.getRows().length-1,this.template="",this.prepareTemplate(),(this.buttonAdd||this.buttonRemove)&&(this.addEventListener("click",(t=>{let r=null,s=null;if(e.buttonAdd&&(r=t.target.matches(e.buttonAdd)?t.target:t.target.closest(e.buttonAdd)),e.buttonRemove&&(s=t.target.matches(e.buttonRemove)?t.target:t.target.closest(e.buttonRemove)),r&&r.closest("joomla-field-subform")===e){let s=r.closest(e.repeatableElement);s=s&&s.closest("joomla-field-subform")===e?s:null,e.addRow(s),t.preventDefault()}else if(s&&s.closest("joomla-field-subform")===e){const r=s.closest(e.repeatableElement);e.removeRow(r),t.preventDefault()}})),this.addEventListener("keydown",(r=>{if(r.keyCode!==t)return;const s=e.buttonAdd&&r.target.matches(e.buttonAdd),a=e.buttonRemove&&r.target.matches(e.buttonRemove);if((s||a)&&r.target.closest("joomla-field-subform")===e){let t=r.target.closest(e.repeatableElement);t=t&&t.closest("joomla-field-subform")===e?t:null,a&&t?e.removeRow(t):s&&e.addRow(t),r.preventDefault()}}))),this.buttonMove&&this.setUpDragSort()}getRows(){const e=Array.from(this.containerWithRows.children),t=[];return e.forEach((e=>{e.matches(this.repeatableElement)&&t.push(e)})),t}prepareTemplate(){const e=[].slice.call(this.children).filter((e=>e.classList.contains("subform-repeatable-template-section")));if(e[0]&&(this.template=e[0].innerHTML),!this.template)throw new Error("The row template is required for the subform element to work")}addRow(e){const t=this.getRows().length;if(t>=this.maximum)return null;let r;r="TBODY"===this.containerWithRows.nodeName||"TABLE"===this.containerWithRows.nodeName?document.createElement("tbody"):document.createElement("div"),r.innerHTML=this.template;const s=r.children[0];return e?e.parentNode.insertBefore(s,e.nextSibling):this.containerWithRows.append(s),this.buttonMove&&(s.setAttribute("draggable","false"),s.setAttribute("aria-grabbed","false"),s.setAttribute("tabindex","0")),s.setAttribute("data-new","1"),this.fixUniqueAttributes(s,t),this.dispatchEvent(new CustomEvent("subform-row-add",{detail:{row:s},bubbles:!0})),s.dispatchEvent(new CustomEvent("joomla:updated",{bubbles:!0,cancelable:!0})),s}removeRow(e){this.getRows().length<=this.minimum||(this.dispatchEvent(new CustomEvent("subform-row-remove",{detail:{row:e},bubbles:!0})),e.dispatchEvent(new CustomEvent("joomla:removed",{bubbles:!0,cancelable:!0})),e.parentNode.removeChild(e))}fixUniqueAttributes(e,t){const r=t||0,s=e.getAttribute("data-group"),a=e.getAttribute("data-base-name"),i=Math.max(this.lastRowIndex,r),o=a+i;this.lastRowIndex=i+1,e.setAttribute("data-group",o);let l=e.querySelectorAll("[name]");const n={};l=[].slice.call(l).filter((e=>e.closest("joomla-field-subform")===this)),l.forEach((t=>{const r=t,a=r.getAttribute("name"),i=r.getAttribute("aria-describedby"),l=a.replace(/(\[\]$)/g,"").replace(/(\]\[)/g,"__").replace(/\[/g,"_").replace(/\]/g,""),u=a.replace(`[${s}][`,`[${o}][`);let b=l.replace(s,o).replace(/\W/g,"_"),d=0,m=l;if("checkbox"===r.type&&a.match(/\[\]$/)){if(d=n[l]?n[l].length:0,!d){const t=r.closest("fieldset.checkboxes"),s=e.querySelector(`label[for="${l}"]`);t&&t.setAttribute("id",b),s&&(s.setAttribute("for",b),s.setAttribute("id",`${b}-lbl`))}m+=d,b+=d}else if("radio"===r.type){if(d=n[l]?n[l].length:0,!d){const t=r.closest("fieldset.radio"),s=e.querySelector(`label[for="${l}"]`);t&&t.setAttribute("id",b),s&&(s.setAttribute("for",b),s.setAttribute("id",`${b}-lbl`))}m+=d,b+=d}n[l]?n[l].push(!0):n[l]=[!0],r.name=u,r.id&&(r.id=b),i&&r.setAttribute("aria-describedby",`${u}-desc`);const c=e.querySelector(`label[for="${m}"]`);c&&(c.setAttribute("for",b),c.setAttribute("id",`${b}-lbl`))}))}setUpDragSort(){const e=this;let a=null,i=!1;function o(t){return!t.form&&t.matches(e.buttonMove)?t:t.closest(e.buttonMove)}function l(e,t){let r=!1;if(e.parentNode===t.parentNode)for(let s=e;s;s=s.previousSibling)if(s===t){r=!0;break}r?t.parentNode.insertBefore(e,t):t.parentNode.insertBefore(e,t.nextSibling)}Array.from(this.getRows()).forEach((e=>{e.setAttribute("draggable","false"),e.setAttribute("aria-grabbed","false"),e.setAttribute("tabindex","0")})),this.addEventListener("touchstart",(t=>{i=!0;const r=o(t.target),s=r?r.closest(e.repeatableElement):null;s&&s.closest("joomla-field-subform")===e&&(a?(s!==a&&l(a,s),a.setAttribute("draggable","false"),a.setAttribute("aria-grabbed","false"),a=null):(s.setAttribute("draggable","true"),s.setAttribute("aria-grabbed","true"),a=s),t.preventDefault())})),this.addEventListener("mousedown",(({target:t})=>{if(i)return;const r=o(t),s=r?r.closest(e.repeatableElement):null;s&&s.closest("joomla-field-subform")===e&&(s.setAttribute("draggable","true"),s.setAttribute("aria-grabbed","true"),a=s)})),this.addEventListener("mouseup",(()=>{a&&!i&&(a.setAttribute("draggable","false"),a.setAttribute("aria-grabbed","false"),a=null)})),this.addEventListener("keydown",(i=>{if(i.keyCode!==r&&i.keyCode!==t&&i.keyCode!==s||i.target.form||!i.target.matches(e.repeatableElement))return;const o=i.target;if(o&&o.closest("joomla-field-subform")===e&&(i.keyCode===t&&function(e){return e.ctrlKey||e.metaKey||e.shiftKey}(i)&&("true"===o.getAttribute("aria-grabbed")?(o.setAttribute("draggable","false"),o.setAttribute("aria-grabbed","false"),a=null):(a&&(a.setAttribute("draggable","false"),a.setAttribute("aria-grabbed","false"),a=null),o.setAttribute("draggable","true"),o.setAttribute("aria-grabbed","true"),a=o),i.preventDefault()),i.keyCode===r&&a&&(a.setAttribute("draggable","false"),a.setAttribute("aria-grabbed","false"),a=null),i.keyCode===s&&a)){if(a.setAttribute("draggable","false"),a.setAttribute("aria-grabbed","false"),o===a)return void(a=null);l(a,o),i.preventDefault(),a=null}})),this.addEventListener("dragstart",(({dataTransfer:e})=>{a&&(e.effectAllowed="move",e.setData("text",""))})),this.addEventListener("dragover",(e=>{a&&e.preventDefault()})),this.addEventListener("dragenter",(({target:t})=>{if(!a||e.rowsContainer&&t.closest(e.rowsContainer)!==e.containerWithRows)return;const r=t.matches(e.repeatableElement)?t:t.closest(e.repeatableElement);r&&l(a,r)})),this.addEventListener("dragend",(()=>{a&&(a.setAttribute("draggable","false"),a.setAttribute("aria-grabbed","false"),a=null)}))}}e.define("joomla-field-subform",a)})(customElements);