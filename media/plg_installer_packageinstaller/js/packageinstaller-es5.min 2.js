!function(){"use strict";Joomla=window.Joomla||{},function(e){document.addEventListener("DOMContentLoaded",(function(){if(e.submitbuttonpackage=function(){var t=document.getElementById("adminForm");if(""===t.install_package.value)e.renderMessages({warning:[e.Text._("PLG_INSTALLER_PACKAGEINSTALLER_NO_PACKAGE")]});else if(t.install_package.files[0].size>t.max_upload_size.value)e.renderMessages({warning:[e.Text._("COM_INSTALLER_MSG_WARNINGS_UPLOADFILETOOBIG")]});else{var a=document.getElementById("loading");a&&a.classList.remove("hidden"),t.installtype.value="upload",t.submit()}},"undefined"==typeof FormData)return document.querySelector("#legacy-uploader").classList.remove("hidden"),void document.querySelector("#uploader-wrapper").classList.add("hidden");var t=!1,a=document.querySelector("#dragarea"),n=document.querySelector("#install_package"),r=document.querySelector("#max_upload_size").value,o=document.querySelector("#select-file-button"),s=document.querySelector("#installer-return").value,i=document.getElementById("upload-progress"),l=i.querySelector(".progress-bar"),d=i.querySelector(".uploading-number"),u="index.php?option=com_installer&task=install.ajax_upload";function c(t){a.setAttribute("data-state","pending");var n=e.Text._("PLG_INSTALLER_PACKAGEINSTALLER_UPLOAD_ERROR_UNKNOWN");null==t?n=e.Text._("PLG_INSTALLER_PACKAGEINSTALLER_UPLOAD_ERROR_EMPTY"):"string"==typeof t?n=t.replace(/(<([^>]+)>|\s+)/g," "):t.message&&(n=t.message),e.renderMessages({error:[n]})}s&&(u+="&return="+s),o.addEventListener("click",(function(){n.click()})),n.addEventListener("change",(function(){t||e.submitbuttonpackage()})),a.addEventListener("dragenter",(function(e){return e.preventDefault(),e.stopPropagation(),a.classList.add("hover"),!1})),a.addEventListener("dragover",(function(e){return e.preventDefault(),e.stopPropagation(),a.classList.add("hover"),!1})),a.addEventListener("dragleave",(function(e){return e.preventDefault(),e.stopPropagation(),a.classList.remove("hover"),!1})),a.addEventListener("drop",(function(n){if(n.preventDefault(),n.stopPropagation(),!t){a.classList.remove("hover");var o=n.target.files||n.dataTransfer.files;if(o.length){var s=o[0],i=new FormData;if(s.size>r)e.renderMessages({warning:[e.Text._("COM_INSTALLER_MSG_WARNINGS_UPLOADFILETOOBIG")]});else{i.append("install_package",s),i.append("installtype","upload"),a.setAttribute("data-state","uploading"),l.setAttribute("aria-valuenow",0),t=!0,l.style.width=0,d.textContent="0";var p=function(e){if(e.lengthComputable){var t=e.loaded/e.total,n=Math.round(100*t);l.style.width=n+"%",l.setAttribute("aria-valuenow",n),d.textContent=""+n,100===n&&a.setAttribute("data-state","installing")}};e.request({url:u,method:"POST",perform:!0,data:i,onBefore:function(e){e.upload.addEventListener("progress",p)},onSuccess:function(e){if(e){var t;try{t=JSON.parse(e)}catch(e){return void c(e)}t.success||t.data?t.data.redirect?window.location.href=t.data.redirect:window.location.href="index.php?option=com_installer&view=install":c(t)}else c(e)},onError:function(e){(t=!1,200===e.status)?c(e.responseText||e.responseJSON):c(e.statusText)}})}}}})),document.getElementById("installbutton_package").addEventListener("click",(function(t){t.preventDefault(),e.submitbuttonpackage()}))}))}(Joomla)}();