((e,t)=>{class s extends HTMLElement{constructor(){if(super(),!t)throw new Error("Joomla API is not properly initiated");if(!this.getAttribute("uri"))throw new Error("No valid url for validation")}connectedCallback(){const e=this,t=document.getElementById("sendtestmail");t&&t.addEventListener("click",(()=>{e.sendTestMail(e)}))}sendTestMail(){const e={smtpauth:document.getElementById("jform_smtpauth1").checked?1:0,smtpuser:this.querySelector('[name="jform[smtpuser]"]').value,smtphost:this.querySelector('[name="jform[smtphost]"]').value,smtpsecure:this.querySelector('[name="jform[smtpsecure]"]').value,smtpport:this.querySelector('[name="jform[smtpport]"]').value,mailfrom:this.querySelector('[name="jform[mailfrom]"]').value,fromname:this.querySelector('[name="jform[fromname]"]').value,mailer:this.querySelector('[name="jform[mailer]"]').value,mailonline:document.getElementById("jform_mailonline1").checked?1:0},s=this.querySelector('[name="jform[smtppass]"]');!1===s.disabled&&(e.smtppass=s.value),t.removeMessages(),t.request({url:this.getAttribute("uri"),method:"POST",data:JSON.stringify(e),perform:!0,headers:{"Content-Type":"application/json"},onSuccess:e=>{let s;try{s=JSON.parse(e)}catch(e){console.error(e)}"object"==typeof s.messages&&null!==s.messages&&t.renderMessages(s.messages),document.body.scrollIntoView({behavior:"smooth"})},onError:e=>{t.renderMessages(t.ajaxErrorsMessages(e)),document.body.scrollIntoView({behavior:"smooth"})}})}}e.define("joomla-field-send-test-mail",s)})(customElements,Joomla);