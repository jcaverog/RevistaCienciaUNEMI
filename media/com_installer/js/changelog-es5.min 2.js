!function(){"use strict";Joomla=window.Joomla||{},function(n){document.addEventListener("DOMContentLoaded",(function(){var o=document.getElementsByClassName("changelogModal");Array.from(o).forEach((function(o){o.addEventListener("click",(function(o){n.loadChangelog(o.target.dataset.jsExtensionid,o.target.dataset.jsView)}))}))})),n.loadChangelog=function(o,t){var e=document.querySelector("#changelogModal"+o+" .modal-body");n.request({url:"index.php?option=com_installer&task=manage.loadChangelog&eid="+o+"&source="+t+"&format=json",onSuccess:function(o){var t="";try{var a=JSON.parse(o);t=a.error?a[0]:a.data}catch(n){t=n}e.innerHTML=n.sanitizeHtml(t)},onError:function(o){e.innerHTML=n.sanitizeHtml(o.statusText)}})}}(Joomla)}();