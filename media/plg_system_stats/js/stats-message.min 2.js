Joomla=window.Joomla||{},((e,t)=>{const s={input:["type","name","value"],"joomla-alert":["type","dismiss","role"],button:["type"],table:[],tbody:[],thead:[],caption:[],th:["scope"],tr:[],td:[]},n=({plugin:a="sendStats"}={})=>{const o=`index.php?option=com_ajax&group=system&plugin=${a}&format=raw`,l=t.getElementById("system-message-container");e.request({url:o,headers:{"Content-Type":"application/json"},onSuccess:a=>{try{const o=JSON.parse(a);o&&o.html&&(l.insertAdjacentHTML("beforeend",e.sanitizeHtml(o.html,s)),l.querySelector(".js-pstats-alert").classList.remove("hidden"),(e=>{const s=t.getElementById("system-message-container"),n=s.querySelector(".js-pstats-alert"),a=s.querySelector("#js-pstats-data-details");t.addEventListener("click",(e=>{e.target.classList.contains("js-pstats-btn-details")&&(e.preventDefault(),a.classList.toggle("d-none"))})),t.addEventListener("click",(t=>{t.target.classList.contains("js-pstats-btn-allow-always")&&(t.preventDefault(),n.close(),e({plugin:"sendAlways"}))})),t.addEventListener("click",(t=>{t.target.classList.contains("js-pstats-btn-allow-once")&&(t.preventDefault(),n.close(),e({plugin:"sendOnce"}))})),t.addEventListener("click",(t=>{t.target.classList.contains("js-pstats-btn-allow-never")&&(t.preventDefault(),n.close(),e({plugin:"sendNever"}))}))})(n))}catch(e){throw new Error(e)}},onError:t=>{e.renderMessages({error:[t.response]})}})};t.addEventListener("DOMContentLoaded",(()=>{n()}))})(Joomla,document);