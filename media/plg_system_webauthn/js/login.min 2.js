window.Joomla=window.Joomla||{},((e,t)=>{const n=(e,t="")=>{let r="";return Object.keys(e).forEach((a=>{if("object"!=typeof e[a])return r.length>0&&(r+="&"),void(r+=""===t?`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`:`${encodeURIComponent(t)}[${encodeURIComponent(a)}]=${encodeURIComponent(e[a])}`);r+=`${n(e[a],a)}`})),r},r=(e,t)=>{const n=e.querySelectorAll(t);return n.length?n[0]:null},a=(e,t)=>{let n=null;if(!e)return n;const a=e.parentElement;if("FORM"===a.nodeName)return n=r(a,t),n;const o=a.querySelectorAll("form");if(o.length)for(let e=0;e<o.length;e+=1)if(n=r(o[e],t),null!==n)return n;return null},o=t=>{e.renderMessages({error:[t]})};e.plgSystemWebauthnLogin=(r,l)=>{const i=t.getElementById(r),s=a(i,"input[name=username]"),u=a(i,"input[name=return]");if(null===s)return e.renderMessages({error:[e.Text._("PLG_SYSTEM_WEBAUTHN_ERR_CANNOT_FIND_USERNAME")]}),!1;const c=s.value,d=u?u.value:null;if(""===c)return e.renderMessages({error:[e.Text._("PLG_SYSTEM_WEBAUTHN_ERR_EMPTY_USERNAME")]}),!1;const g={option:"com_ajax",group:"system",plugin:"webauthn",format:"raw",akaction:"challenge",encoding:"raw",username:c,returnUrl:d};return e.request({url:l,method:"POST",data:n(g),onSuccess(t){let n={};try{n=JSON.parse(t)}catch(e){}((t,n)=>{const r=e=>btoa(String.fromCharCode(...e)),a=e=>{let t=e.replace(/-/g,"+").replace(/_/g,"/");const n=t.length%4;if(n){if(1===n)throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");t+=new Array(5-n).join("=")}return t};t.challenge?(t.challenge=Uint8Array.from(window.atob(a(t.challenge)),(e=>e.charCodeAt(0))),t.allowCredentials&&(t.allowCredentials=t.allowCredentials.map((e=>(e.id=Uint8Array.from(window.atob(a(e.id)),(e=>e.charCodeAt(0))),e)))),navigator.credentials.get({publicKey:t}).then((e=>{const t={id:e.id,type:e.type,rawId:r(new Uint8Array(e.rawId)),response:{authenticatorData:r(new Uint8Array(e.response.authenticatorData)),clientDataJSON:r(new Uint8Array(e.response.clientDataJSON)),signature:r(new Uint8Array(e.response.signature)),userHandle:e.response.userHandle?r(new Uint8Array(e.response.userHandle)):null}};window.location=`${n}&option=com_ajax&group=system&plugin=webauthn&format=raw&akaction=login&encoding=redirect&data=${btoa(JSON.stringify(t))}`})).catch((e=>{o(e)}))):o(e.Text._("PLG_SYSTEM_WEBAUTHN_ERR_INVALID_USERNAME"))})(n,l)},onError:e=>{o(`${e.status} ${e.statusText}`)}}),!1};const l=[].slice.call(t.querySelectorAll(".plg_system_webauthn_login_button"));l.length&&l.forEach((t=>{t.addEventListener("click",(({currentTarget:t})=>{e.plgSystemWebauthnLogin(t.getAttribute("data-webauthn-form"),t.getAttribute("data-webauthn-url"))}))}))})(Joomla,document);