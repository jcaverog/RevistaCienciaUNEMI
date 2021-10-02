((e,t)=>{if(!e)throw new Error("core.js was not properly initialised");e.finderIndexer=()=>{let r,n=null,s=null,d=null,a=!1;const i=`&${t.getElementById("finder-indexer-token").getAttribute("name")}=1`,o=e=>{const r=t.getElementById(e);return r?r.parentNode.removeChild(r):null},l=(i,l)=>{const c=t.getElementById("finder-progress-header"),m=t.getElementById("finder-progress-message");try{if(null===i)throw new Error(l);if(i.error)throw new Error(i);if(i.start&&(n=i.totalItems,t.getElementById("finder-debug-data"))){const r=t.getElementById("finder-debug-data");Object.entries(i.pluginState).forEach((t=>{let n=`<dt class="col-sm-3">${t[0]}</dt>`;n+=`<dd id="finder-${t[0].replace(/\s+/g,"-").toLowerCase()}" class="col-sm-9"></dd>`,r.insertAdjacentHTML("beforeend",e.sanitizeHtml(n,{dd:["class","id"],dt:["class"]}))}))}s+=i.batchOffset,((r,a)=>{d=s/n*100;const i=t.getElementById("progress-bar"),l=t.getElementById("finder-progress-header"),c=t.getElementById("finder-progress-message");l&&(l.innerText=r),c&&(c.innerHTML=e.sanitizeHtml(a)),i&&(d<100?(i.style.width=`${d}%`,i.setAttribute("aria-valuenow",d)):(i.classList.remove("bar-success"),i.classList.add("bar-warning"),i.setAttribute("aria-valuemin",100),i.setAttribute("aria-valuemax",200),i.style.width=`${d}%`,i.setAttribute("aria-valuenow",d)),a===e.Text._("COM_FINDER_INDEXER_MESSAGE_COMPLETE")&&(o("progress"),window.parent.Joomla.Modal.getCurrent().close()))})(i.header,i.message),t.getElementById("finder-debug-data")&&Object.entries(i.pluginState).forEach((r=>{t.getElementById(`finder-${r[0].replace(/\s+/g,"-").toLowerCase()}`).innerHTML=e.sanitizeHtml(`${i.pluginState[r[0]].offset} of ${i.pluginState[r[0]].total}`)})),s<n?r("indexer.batch"):a||(a=!0,r("indexer.optimize"))}catch(t){o("progress");try{i.error&&(c&&(c.innerText=i.header,c.classList.add("finder-error")),m&&(m.innerHTML=e.sanitizeHtml(i.message),m.classList.add("finder-error")))}catch(r){""===t&&(t=e.Text._("COM_FINDER_NO_ERROR_RETURNED")),c&&(c.innerText=e.Text._("COM_FINDER_AN_ERROR_HAS_OCCURRED"),c.classList.add("finder-error")),m&&(m.innerHTML=e.sanitizeHtml(t),m.classList.add("finder-error"))}}return!0};r=r=>{e.request({url:`index.php?option=com_finder&tmpl=component&format=json&task=${r}${i}`,method:"GET",data:"",perform:!0,headers:{"Content-Type":"application/x-www-form-urlencoded"},onSuccess:e=>{l(JSON.parse(e))},onError:r=>{(r=>{const n=t.getElementById("finder-progress-header"),s=t.getElementById("finder-progress-message");let d="object"==typeof r&&r.responseText?r.responseText:null;d=d?JSON.parse(d):null,o("progress");const a=d?d.header:e.Text._("COM_FINDER_AN_ERROR_HAS_OCCURRED"),i=d?d.message:`${e.Text._("COM_FINDER_MESSAGE_RETURNED")}<br>${d}`;n&&(n.innerText=a,n.classList.add("finder-error")),s&&(s.innerHTML=e.sanitizeHtml(i),s.classList.add("finder-error"))})(r)}})};s=0,d=0,r("indexer.start")}})(Joomla,document),document.addEventListener("DOMContentLoaded",(()=>{window.Indexer=Joomla.finderIndexer()}));