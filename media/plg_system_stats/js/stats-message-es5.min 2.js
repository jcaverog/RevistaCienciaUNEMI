!function(){"use strict";Joomla=window.Joomla||{},function(t,e){var n={input:["type","name","value"],"joomla-alert":["type","dismiss","role"],button:["type"],table:[],tbody:[],thead:[],caption:[],th:["scope"],tr:[],td:[]},s=function s(a){var o=(void 0===a?{}:a).plugin,r="index.php?option=com_ajax&group=system&plugin="+(void 0===o?"sendStats":o)+"&format=raw",i=e.getElementById("system-message-container");t.request({url:r,headers:{"Content-Type":"application/json"},onSuccess:function(a){try{var o=JSON.parse(a);o&&o.html&&(i.insertAdjacentHTML("beforeend",t.sanitizeHtml(o.html,n)),i.querySelector(".js-pstats-alert").classList.remove("hidden"),function(t){var n=e.getElementById("system-message-container"),s=n.querySelector(".js-pstats-alert"),a=n.querySelector("#js-pstats-data-details");e.addEventListener("click",(function(t){t.target.classList.contains("js-pstats-btn-details")&&(t.preventDefault(),a.classList.toggle("d-none"))})),e.addEventListener("click",(function(e){e.target.classList.contains("js-pstats-btn-allow-always")&&(e.preventDefault(),s.close(),t({plugin:"sendAlways"}))})),e.addEventListener("click",(function(e){e.target.classList.contains("js-pstats-btn-allow-once")&&(e.preventDefault(),s.close(),t({plugin:"sendOnce"}))})),e.addEventListener("click",(function(e){e.target.classList.contains("js-pstats-btn-allow-never")&&(e.preventDefault(),s.close(),t({plugin:"sendNever"}))}))}(s))}catch(t){throw new Error(t)}},onError:function(e){t.renderMessages({error:[e.response]})}})};e.addEventListener("DOMContentLoaded",(function(){s()}))}(Joomla,document)}();