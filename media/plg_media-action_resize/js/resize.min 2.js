let formElements,activated=!1;const resize=(e,t,i)=>{let a=document.createElement("canvas");a.width=e,a.height=t,a.getContext("2d").drawImage(i,0,0,e,t);const n="jpg"===Joomla.MediaManager.Edit.original.extension?"jpeg":Joomla.MediaManager.Edit.original.extension,r=formElements.resizeQuality.value;Joomla.MediaManager.Edit.current.contents=a.toDataURL(`image/${n}`,r),i.width=e,i.height=t,i.src=Joomla.MediaManager.Edit.current.contents,formElements.resizeWidth.value=parseInt(e,10),formElements.resizeHeight.value=parseInt(t,10),window.dispatchEvent(new Event("mediaManager.history.point")),a=null},addListeners=e=>{formElements.resizeWidth.addEventListener("change",(({target:t})=>{resize(parseInt(t.value,10),parseInt(t.value,10)/(e.width/e.height),e)})),formElements.resizeHeight.addEventListener("change",(({target:t})=>{resize(parseInt(t.value,10)*(e.width/e.height),parseInt(t.value,10),e)}))},initResize=e=>{formElements.resizeWidth.value=e.naturalWidth,formElements.resizeHeight.value=e.naturalHeight,activated||(activated=!0,addListeners(e))};window.addEventListener("media-manager-edit-init",(()=>{formElements={resizeWidth:document.getElementById("jform_resize_width"),resizeHeight:document.getElementById("jform_resize_height"),resizeQuality:document.getElementById("jform_resize_quality")},Joomla.MediaManager.Edit.plugins.resize={Activate:e=>new Promise((t=>{initResize(e),t()})),Deactivate:()=>new Promise((e=>{e()}))}}),{once:!0});