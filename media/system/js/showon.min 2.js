(e=>{class i{constructor(i){const t=this;this.container=i||e,this.fields={},this.showonFields=[].slice.call(this.container.querySelectorAll("[data-showon]")),this.showonFields.length&&(this.showonFields.forEach((e=>{if(e.hasAttribute("data-showon-initialised"))return;e.setAttribute("data-showon-initialised","");const i=e.getAttribute("data-showon")||"",s=JSON.parse(i);let l;s.length&&(l=[].slice.call(t.container.querySelectorAll(`[name="${s[0].field}"], [name="${s[0].field}[]"]`)),this.fields[s[0].field]||(this.fields[s[0].field]={origin:[],targets:[]}),l.forEach((e=>{-1===this.fields[s[0].field].origin.indexOf(e)&&this.fields[s[0].field].origin.push(e)})),this.fields[s[0].field].targets.push(e),s.length>1&&s.forEach(((i,o)=>{0!==o&&(l=[].slice.call(t.container.querySelectorAll(`[name="${i.field}"], [name="${i.field}[]"]`)),this.fields[s[0].field]||(this.fields[s[0].field]={origin:[],targets:[]}),l.forEach((e=>{-1===this.fields[s[0].field].origin.indexOf(e)&&this.fields[s[0].field].origin.push(e)})),-1===this.fields[s[0].field].targets.indexOf(e)&&this.fields[s[0].field].targets.push(e))})))})),this.linkedOptions=this.linkedOptions.bind(this),Object.keys(this.fields).forEach((e=>{this.fields[e].origin.length&&this.fields[e].origin.forEach((i=>{t.linkedOptions(e),i.addEventListener("change",(()=>{t.linkedOptions(e)})),i.addEventListener("keyup",(()=>{t.linkedOptions(e)})),i.addEventListener("click",(()=>{t.linkedOptions(e)}))}))})))}linkedOptions(i){this.fields[i].targets.forEach((t=>{const s=JSON.parse(t.getAttribute("data-showon"))||[];let l,o=!0;s.forEach(((t,a)=>{const n=t||{};n.valid=0,this.fields[i].origin.forEach((i=>{if(i.name!==t.field)return;const s=i.id;if(i.getAttribute("type")&&-1!==["checkbox","radio"].indexOf(i.getAttribute("type").toLowerCase())){if(!i.checked)return;l=e.getElementById(s).value}else l=e.getElementById(s).value,null===l&&"select"===i.tagName.toLowerCase()&&(l=[]);"object"!=typeof l&&(l=JSON.parse(`["${l}"]`)),l.forEach((e=>{"="===n.sign&&-1!==n.values.indexOf(e)&&(n.valid=1),"!="===n.sign&&-1===n.values.indexOf(e)&&(n.valid=1)}))})),""===n.op?0===n.valid&&(o=!1):("AND"===n.op&&n.valid+s[a-1].valid<2&&(o=!1,n.valid=0),"OR"===n.op&&n.valid+s[a-1].valid>0&&(o=!0,n.valid=1))})),"option"!==t.tagName?o?t.classList.remove("hidden"):t.classList.add("hidden"):t.disabled=!o}))}}window.Joomla=window.Joomla||{},Joomla.Showon||(Joomla.Showon={initialise:e=>new i(e)}),e.addEventListener("DOMContentLoaded",(()=>{Joomla.Showon.initialise(e)})),e.addEventListener("joomla:updated",(({target:e})=>{if(e.classList.contains("subform-repeatable-group")){const i=[].slice.call(e.querySelectorAll("[data-showon]")),t=new RegExp(`\\[${e.dataset.baseName}X\\]`,"g"),s=`[${e.dataset.group}]`;i.forEach((e=>{const i=e.dataset.showon.replace(t,s);e.dataset.showon=i}))}Joomla.Showon.initialise(e)}))})(document);