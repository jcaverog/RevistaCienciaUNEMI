!function(){"use strict";window.insertPagebreak=function(e){var t=document.getElementById("title").value;if(!window.parent.Joomla.getOptions("xtd-pagebreak"))return window.parent.Joomla.Modal.getCurrent().close(),!1;var n=document.getElementById("alt").value,a='<hr class="system-pagebreak" '+(t=""!==t?'title="'+t+'"':"")+" "+(n=""!==n?'alt="'+n+'"':"")+">";return window.parent.Joomla.editors.instances[e].replaceSelection(a),window.parent.Joomla.Modal.getCurrent().close(),!1}}();