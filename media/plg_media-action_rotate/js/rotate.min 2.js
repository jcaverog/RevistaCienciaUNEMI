let activated=!1;const rotate=(t,e)=>{let a=document.createElement("canvas");t>=0&&t<45||t>=135&&t<225||t>=315&&t<=360?(a.width=e.naturalWidth,a.height=e.naturalHeight):(a.width=e.naturalHeight,a.height=e.naturalWidth);const i=a.getContext("2d");i.clearRect(0,0,a.width,a.height),i.translate(a.width/2,a.height/2),i.rotate(t*Math.PI/180),i.drawImage(e,-e.naturalWidth/2,-e.naturalHeight/2);const n="jpg"===Joomla.MediaManager.Edit.original.extension?"jpeg":"jpg",r=document.getElementById("jform_rotate_quality").value;Joomla.MediaManager.Edit.current.contents=a.toDataURL(`image/${n}`,r),e.width=a.width,e.height=a.height,e.src="",requestAnimationFrame((()=>requestAnimationFrame((()=>{e.src=Joomla.MediaManager.Edit.current.contents})))),document.getElementById("jform_rotate_a").value=t,window.dispatchEvent(new Event("mediaManager.history.point")),a=null},initRotate=t=>{activated||(document.getElementById("jform_rotate_a").addEventListener("change",(({target:e})=>{rotate(parseInt(e.value,10),t),e.value=0,[].slice.call(document.querySelectorAll("#jform_rotate_distinct label")).forEach((t=>{t.classList.remove("active"),t.classList.remove("focus")}))})),[].slice.call(document.querySelectorAll("#jform_rotate_distinct [type=radio]")).forEach((e=>{e.addEventListener("click",(({target:e})=>{rotate(parseInt(e.value,10),t),[].slice.call(document.querySelectorAll("#jform_rotate_distinct label")).forEach((t=>{t.classList.remove("active"),t.classList.remove("focus")}))}))})),activated=!0)};window.addEventListener("media-manager-edit-init",(()=>{Joomla.MediaManager.Edit.plugins.rotate={Activate:t=>new Promise((e=>{initRotate(t),e()})),Deactivate:()=>new Promise((t=>{t()}))}}),{once:!0});