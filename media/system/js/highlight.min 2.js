class DOMIterator{constructor(e,t=!0,s=[],r=5e3){this.ctx=e,this.iframes=t,this.exclude=s,this.iframesTimeout=r}static matches(e,t){const s="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){let t=!1;return s.every((s=>!r.call(e,s)||(t=!0,!1))),t}return!1}getContexts(){let e,t=[];return e=void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[],e.forEach((e=>{const s=t.filter((t=>t.contains(e))).length>0;-1!==t.indexOf(e)||s||t.push(e)})),t}getIframeContents(e,t,s=(()=>{})){let r;try{const t=e.contentWindow;if(r=t.document,!t||!r)throw new Error("iframe inaccessible")}catch(e){s()}r&&t(r)}isIframeBlank(e){const t="about:blank",s=e.getAttribute("src").trim();return e.contentWindow.location.href===t&&s!==t&&s}observeIframeLoad(e,t,s){let r=!1,i=null;const o=()=>{if(!r){r=!0,clearTimeout(i);try{this.isIframeBlank(e)||(e.removeEventListener("load",o),this.getIframeContents(e,t,s))}catch(e){s()}}};e.addEventListener("load",o),i=setTimeout(o,this.iframesTimeout)}onIframeReady(e,t,s){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,s):this.getIframeContents(e,t,s):this.observeIframeLoad(e,t,s)}catch(e){s()}}waitForIframes(e,t){let s=0;this.forEachIframe(e,(()=>!0),(e=>{s++,this.waitForIframes(e.querySelector("html"),(()=>{--s||t()}))}),(e=>{e||t()}))}forEachIframe(e,t,s,r=(()=>{})){let i=e.querySelectorAll("iframe"),o=i.length,a=0;i=Array.prototype.slice.call(i);const n=()=>{--o<=0&&r(a)};o||n(),i.forEach((e=>{DOMIterator.matches(e,this.exclude)?n():this.onIframeReady(e,(r=>{t(e)&&(a++,s(r)),n()}),n)}))}createIterator(e,t,s){return document.createNodeIterator(e,t,s,!1)}createInstanceOnIframe(e){return new DOMIterator(e.querySelector("html"),this.iframes)}compareNodeIframe(e,t,s){if(e.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}getIteratorNode(e){const t=e.previousNode();let s;return s=(null===t||e.nextNode())&&e.nextNode(),{prevNode:t,node:s}}checkIframeFilter(e,t,s,r){let i=!1,o=!1;return r.forEach(((e,t)=>{e.val===s&&(i=t,o=e.handled)})),this.compareNodeIframe(e,t,s)?(!1!==i||o?!1===i||o||(r[i].handled=!0):r.push({val:s,handled:!0}),!0):(!1===i&&r.push({val:s,handled:!1}),!1)}handleOpenIframes(e,t,s,r){e.forEach((e=>{e.handled||this.getIframeContents(e.val,(e=>{this.createInstanceOnIframe(e).forEachNode(t,s,r)}))}))}iterateThroughNodes(e,t,s,r,i){const o=this.createIterator(t,e,r);let a,n,c=[],h=[],l=()=>(({prevNode:n,node:a}=this.getIteratorNode(o)),a);for(;l();)this.iframes&&this.forEachIframe(t,(e=>this.checkIframeFilter(a,n,e,c)),(t=>{this.createInstanceOnIframe(t).forEachNode(e,(e=>h.push(e)),r)})),h.push(a);h.forEach((e=>{s(e)})),this.iframes&&this.handleOpenIframes(c,e,s,r),i()}forEachNode(e,t,s,r=(()=>{})){const i=this.getContexts();let o=i.length;o||r(),i.forEach((i=>{const a=()=>{this.iterateThroughNodes(e,i,t,s,(()=>{--o<=0&&r()}))};this.iframes?this.waitForIframes(i,a):a()}))}}class Mark$1{constructor(e){this.ctx=e,this.ie=!1;const t=window.navigator.userAgent;(t.indexOf("MSIE")>-1||t.indexOf("Trident")>-1)&&(this.ie=!0)}set opt(e){this._opt=Object.assign({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:()=>{},noMatch:()=>{},filter:()=>!0,done:()=>{},debug:!1,log:window.console},e)}get opt(){return this._opt}get iterator(){return new DOMIterator(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}log(e,t="debug"){const s=this.opt.log;this.opt.debug&&"object"==typeof s&&"function"==typeof s[t]&&s[t](`mark.js: ${e}`)}escapeStr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}createRegExp(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e)}createSynonymsRegExp(e){const t=this.opt.synonyms,s=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(let i in t)if(t.hasOwnProperty(i)){const o=t[i],a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i),n="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(o):this.escapeStr(o);""!==a&&""!==n&&(e=e.replace(new RegExp(`(${this.escapeStr(a)}|${this.escapeStr(n)})`,`gm${s}`),r+`(${this.processSynomyms(a)}|`+`${this.processSynomyms(n)})`+r))}return e}processSynomyms(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}setupWildcardsRegExp(e){return(e=e.replace(/(?:\\)*\?/g,(e=>"\\"===e.charAt(0)?"?":""))).replace(/(?:\\)*\*/g,(e=>"\\"===e.charAt(0)?"*":""))}createWildcardsRegExp(e){let t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}setupIgnoreJoinersRegExp(e){return e.replace(/[^(|)\\]/g,((e,t,s)=>{let r=s.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"}))}createJoinersRegExp(e){let t=[];const s=this.opt.ignorePunctuation;return Array.isArray(s)&&s.length&&t.push(this.escapeStr(s.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join(`[${t.join("")}]*`):e}createDiacriticsRegExp(e){const t=this.opt.caseSensitive?"":"i",s=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"];let r=[];return e.split("").forEach((i=>{s.every((s=>{if(-1!==s.indexOf(i)){if(r.indexOf(s)>-1)return!1;e=e.replace(new RegExp(`[${s}]`,`gm${t}`),`[${s}]`),r.push(s)}return!0}))})),e}createMergedBlanksRegExp(e){return e.replace(/[\s]+/gim,"[\\s]+")}createAccuracyRegExp(e){let t=this.opt.accuracy,s="string"==typeof t?t:t.value,r="string"==typeof t?[]:t.limiters,i="";switch(r.forEach((e=>{i+=`|${this.escapeStr(e)}`})),s){case"partially":default:return`()(${e})`;case"complementary":return i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")),`()([^${i}]*${e}[^${i}]*)`;case"exactly":return`(^|\\s${i})(${e})(?=$|\\s${i})`}}getSeparatedKeywords(e){let t=[];return e.forEach((e=>{this.opt.separateWordSearch?e.split(" ").forEach((e=>{e.trim()&&-1===t.indexOf(e)&&t.push(e)})):e.trim()&&-1===t.indexOf(e)&&t.push(e)})),{keywords:t.sort(((e,t)=>t.length-e.length)),length:t.length}}isNumeric(e){return Number(parseFloat(e))==e}checkRanges(e){if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];const t=[];let s=0;return e.sort(((e,t)=>e.start-t.start)).forEach((e=>{let{start:r,end:i,valid:o}=this.callNoMatchOnInvalidRanges(e,s);o&&(e.start=r,e.length=i-r,t.push(e),s=i)})),t}callNoMatchOnInvalidRanges(e,t){let s,r,i=!1;return e&&void 0!==e.start?(s=parseInt(e.start,10),r=s+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-s>0?i=!0:(this.log(`Ignoring invalid or overlapping range: ${JSON.stringify(e)}`),this.opt.noMatch(e))):(this.log(`Ignoring invalid range: ${JSON.stringify(e)}`),this.opt.noMatch(e)),{start:s,end:r,valid:i}}checkWhitespaceRanges(e,t,s){let r,i=!0,o=s.length,a=t-o,n=parseInt(e.start,10)-a;return n=n>o?o:n,r=n+parseInt(e.length,10),r>o&&(r=o,this.log(`End range automatically set to the max value of ${o}`)),n<0||r-n<0||n>o||r>o?(i=!1,this.log(`Invalid range: ${JSON.stringify(e)}`),this.opt.noMatch(e)):""===s.substring(n,r).replace(/\s+/g,"")&&(i=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:n,end:r,valid:i}}getTextNodes(e){let t="",s=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,(e=>{s.push({start:t.length,end:(t+=e.textContent).length,node:e})}),(e=>this.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT),(()=>{e({value:t,nodes:s})}))}matchesExclude(e){return DOMIterator.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}wrapRangeInTextNode(e,t,s){const r=this.opt.element?this.opt.element:"mark",i=e.splitText(t),o=i.splitText(s-t);let a=document.createElement(r);return a.setAttribute("data-markjs","true"),this.opt.className&&a.setAttribute("class",this.opt.className),a.textContent=i.textContent,i.parentNode.replaceChild(a,i),o}wrapRangeInMappedTextNode(e,t,s,r,i){e.nodes.every(((o,a)=>{const n=e.nodes[a+1];if(void 0===n||n.start>t){if(!r(o.node))return!1;const n=t-o.start,c=(s>o.end?o.end:s)-o.start,h=e.value.substr(0,o.start),l=e.value.substr(c+o.start);if(o.node=this.wrapRangeInTextNode(o.node,n,c),e.value=h+l,e.nodes.forEach(((t,s)=>{s>=a&&(e.nodes[s].start>0&&s!==a&&(e.nodes[s].start-=c),e.nodes[s].end-=c)})),s-=c,i(o.node.previousSibling,o.start),!(s>o.end))return!1;t=o.end}return!0}))}wrapMatches(e,t,s,r,i){const o=0===t?0:t+1;this.getTextNodes((t=>{t.nodes.forEach((t=>{let i;for(t=t.node;null!==(i=e.exec(t.textContent))&&""!==i[o];){if(!s(i[o],t))continue;let a=i.index;if(0!==o)for(let e=1;e<o;e++)a+=i[e].length;t=this.wrapRangeInTextNode(t,a,a+i[o].length),r(t.previousSibling),e.lastIndex=0}})),i()}))}wrapMatchesAcrossElements(e,t,s,r,i){const o=0===t?0:t+1;this.getTextNodes((t=>{let a;for(;null!==(a=e.exec(t.value))&&""!==a[o];){let i=a.index;if(0!==o)for(let e=1;e<o;e++)i+=a[e].length;const n=i+a[o].length;this.wrapRangeInMappedTextNode(t,i,n,(e=>s(a[o],e)),((t,s)=>{e.lastIndex=s,r(t)}))}i()}))}wrapRangeFromIndex(e,t,s,r){this.getTextNodes((i=>{const o=i.value.length;e.forEach(((e,r)=>{let{start:a,end:n,valid:c}=this.checkWhitespaceRanges(e,o,i.value);c&&this.wrapRangeInMappedTextNode(i,a,n,(s=>t(s,e,i.value.substring(a,n),r)),(t=>{s(t,e)}))})),r()}))}unwrapMatches(e){const t=e.parentNode;let s=document.createDocumentFragment();for(;e.firstChild;)s.appendChild(e.removeChild(e.firstChild));t.replaceChild(s,e),this.ie?this.normalizeTextNode(t):t.normalize()}normalizeTextNode(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}markRegExp(e,t){this.opt=t,this.log(`Searching with expression "${e}"`);let s=0,r="wrapMatches";this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),this[r](e,this.opt.ignoreGroups,((e,t)=>this.opt.filter(t,e,s)),(e=>{s++,this.opt.each(e)}),(()=>{0===s&&this.opt.noMatch(e),this.opt.done(s)}))}mark(e,t){this.opt=t;let s=0,r="wrapMatches";const{keywords:i,length:o}=this.getSeparatedKeywords("string"==typeof e?[e]:e),a=this.opt.caseSensitive?"":"i",n=e=>{let t=new RegExp(this.createRegExp(e),`gm${a}`),c=0;this.log(`Searching with expression "${t}"`),this[r](t,1,((t,r)=>this.opt.filter(r,e,s,c)),(e=>{c++,s++,this.opt.each(e)}),(()=>{0===c&&this.opt.noMatch(e),i[o-1]===e?this.opt.done(s):n(i[i.indexOf(e)+1])}))};this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),0===o?this.opt.done(s):n(i[0])}markRanges(e,t){this.opt=t;let s=0,r=this.checkRanges(e);r&&r.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(r)),this.wrapRangeFromIndex(r,((e,t,s,r)=>this.opt.filter(e,t,s,r)),((e,t)=>{s++,this.opt.each(e,t)}),(()=>{this.opt.done(s)}))):this.opt.done(s)}unmark(e){this.opt=e;let t=this.opt.element?this.opt.element:"*";t+="[data-markjs]",this.opt.className&&(t+=`.${this.opt.className}`),this.log(`Removal selector "${t}"`),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,(e=>{this.unwrapMatches(e)}),(e=>{const s=DOMIterator.matches(e,t),r=this.matchesExclude(e);return!s||r?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),this.opt.done)}}function Mark(e){const t=new Mark$1(e);return this.mark=(e,s)=>(t.mark(e,s),this),this.markRegExp=(e,s)=>(t.markRegExp(e,s),this),this.markRanges=(e,s)=>(t.markRanges(e,s),this),this.unmark=e=>(t.unmark(e),this),this}const defaultOptions={exclude:[],separateWordSearch:!0,accuracy:"partially",diacritics:!0,synonyms:{},iframes:!1,iframesTimeout:5e3,acrossElements:!0,caseSensitive:!1,ignoreJoiners:!1,wildcards:"disabled",compatibility:!1};if(Joomla.getOptions&&"function"==typeof Joomla.getOptions&&Joomla.getOptions("highlight")){Joomla.getOptions("highlight").forEach((e=>{const t={...defaultOptions,...e};if(t.compatibility){const e=document.querySelector(`#${t.start}`);document.querySelector(`#${t.end}`);const s=e.parentNode,r=[];Array.from(s.childNodes).forEach((e=>{})),r.forEach((e=>{const s=new Mark(e);t.highLight.map((e=>s.mark(e,t)))}))}else{const e=document.querySelector(`.${t.class}`);if(e){const s=new Mark(e);t.highLight.forEach((e=>{s.mark(e,t)}))}}}))}