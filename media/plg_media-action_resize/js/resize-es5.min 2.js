!function(){"use strict";var e,t=!1,i=function(t,i,n){var a=document.createElement("canvas");a.width=t,a.height=i,a.getContext("2d").drawImage(n,0,0,t,i);var r="jpg"===Joomla.MediaManager.Edit.original.extension?"jpeg":Joomla.MediaManager.Edit.original.extension,o=e.resizeQuality.value;Joomla.MediaManager.Edit.current.contents=a.toDataURL("image/"+r,o),n.width=t,n.height=i,n.src=Joomla.MediaManager.Edit.current.contents,e.resizeWidth.value=parseInt(t,10),e.resizeHeight.value=parseInt(i,10),window.dispatchEvent(new Event("mediaManager.history.point")),a=null},n=function(n){e.resizeWidth.value=n.naturalWidth,e.resizeHeight.value=n.naturalHeight,t||(t=!0,function(t){e.resizeWidth.addEventListener("change",(function(e){var n=e.target;i(parseInt(n.value,10),parseInt(n.value,10)/(t.width/t.height),t)})),e.resizeHeight.addEventListener("change",(function(e){var n=e.target;i(parseInt(n.value,10)*(t.width/t.height),parseInt(n.value,10),t)}))}(n))};window.addEventListener("media-manager-edit-init",(function(){e={resizeWidth:document.getElementById("jform_resize_width"),resizeHeight:document.getElementById("jform_resize_height"),resizeQuality:document.getElementById("jform_resize_quality")},Joomla.MediaManager.Edit.plugins.resize={Activate:function(e){return new Promise((function(t){n(e),t()}))},Deactivate:function(){return new Promise((function(e){e()}))}}}),{once:!0})}();