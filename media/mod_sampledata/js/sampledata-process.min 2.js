const SampleData={inProgress:!1},sampledataAjax=(e,a,t)=>{const s=`index.php?option=com_ajax&format=json&group=sampledata&${Joomla.getOptions("csrf.token")}=1`,r=Joomla.getOptions("sample-data"),o=document.createElement("div");o.classList.add(`sampledata-steps-${e}-${t}`),o.setAttribute("role","region"),o.setAttribute("aria-live","polite");const l=document.createElement("p");l.classList.add("loader-image"),l.classList.add("text-center");const p=document.createElement("img");p.setAttribute("src",r.icon),p.setAttribute("width",30),p.setAttribute("height",30),l.appendChild(p),o.appendChild(l),document.querySelector(`.sampledata-progress-${e}`).appendChild(o),Joomla.request({url:`${s}&type=${e}&plugin=SampledataApplyStep${t}&step=${t}`,method:"GET",perform:!0,onSuccess:s=>{const r=o.querySelector(".loader-image");r.parentNode.removeChild(r);let l={};try{l=JSON.parse(s)}catch(a){return Joomla.renderMessages({error:[Joomla.Text._("MOD_SAMPLEDATA_INVALID_RESPONSE")]},`.sampledata-steps-${e}-${t}`),void(SampleData.inProgress=!1)}let p,n="";if(l.success&&l.data&&l.data.length>0){const s=document.querySelector(`.sampledata-progress-${e} .progress-bar`);if(l.data.forEach((a=>{null!==a&&(p=a.success,n=p?"bg-success":"bg-danger",p?Joomla.renderMessages({message:[a.message]},`.sampledata-steps-${e}-${t}`,!1,3e3):Joomla.renderMessages({error:[a.message]},`.sampledata-steps-${e}-${t}`,!1))})),s.innerText=`${t}/${a}`,s.style.width=t/a*100+"%",s.setAttribute("aria-valuemin",0),s.setAttribute("aria-valuemax",100),s.setAttribute("aria-valuenow",t/a*100),s.classList.add(n),p&&t<=a){const s=t+1;if(s<=a)sampledataAjax(e,a,s);else{const a=document.querySelector(`.sampledata-progress-${e}`);a.parentNode.removeChild(a),Joomla.renderMessages({message:[Joomla.Text._("MOD_SAMPLEDATA_COMPLETED")]}),window.scroll({top:0,left:0,behavior:"smooth"}),SampleData.inProgress=!1}}}else Joomla.renderMessages({error:[Joomla.Text._("MOD_SAMPLEDATA_INVALID_RESPONSE")]}),window.scroll({top:0,left:0,behavior:"smooth"}),SampleData.inProgress=!1},onError:()=>{Joomla.renderMessages({error:["Something went wrong! Please close and reopen the browser and try again!"]}),window.scroll({top:0,left:0,behavior:"smooth"}),SampleData.inProgress=!1}})},sampledataApply=e=>{const a=e.getAttribute("data-type"),t=e.getAttribute("data-steps");if(SampleData.inProgress)return;if(e.getAttribute("data-processed"))return alert(Joomla.Text._("MOD_SAMPLEDATA_ITEM_ALREADY_PROCESSED")),void(SampleData.inProgress=!1);if(!window.confirm(Joomla.Text._("MOD_SAMPLEDATA_CONFIRM_START")))return!1;return[].slice.call(document.querySelectorAll(`.sampledata-progress-${a}`)).forEach((e=>{e.classList.remove("d-none")})),e.getAttribute("data-processed",!0),SampleData.inProgress=!0,sampledataAjax(a,t,1),!1},sampleDataWrapper=document.getElementById("sample-data-wrapper");if(sampleDataWrapper){[].slice.call(sampleDataWrapper.querySelectorAll(".apply-sample-data")).forEach((e=>{e.addEventListener("click",(({currentTarget:e})=>sampledataApply(e)))}))}