((e,t,n,i)=>{t.JoomlaTinyMCE={setupEditors:e=>{const n=e||i,o=t.getOptions?t.getOptions("plg_editor_tinymce",{}):t.optionsStorage.plg_editor_tinymce||{};[].slice.call(n.querySelectorAll(".js-editor-tinymce")).forEach((e=>{const n=e.querySelector("textarea"),i=e.querySelector(".js-tiny-toggler-button"),s=e.querySelector(".icon-eye");t.JoomlaTinyMCE.setupEditor(n,o),i&&(i.removeAttribute("disabled"),i.addEventListener("click",(()=>{t.editors.instances[n.id].instance.isHidden()?(s.setAttribute("class","icon-eye"),t.editors.instances[n.id].instance.show()):(s.setAttribute("class","icon-eye-slash"),t.editors.instances[n.id].instance.hide())})))}))},setupEditor:(n,o)=>{if(t.editors.instances[n.id])return;const s=n?n.getAttribute("name").replace(/\[\]|\]/g,"").split("[").pop():"default",c=o&&o.tinyMCE||{},a=c.default||{};let d=c[s]?c[s]:a;d=d.joomlaMergeDefaults?t.extend(t.extend({},a),d):t.extend({},d),n&&(d.selector=null,d.target=n);const l=[],r=Object.keys(d.joomlaExtButtons.names).map((e=>d.joomlaExtButtons.names[e])),u={joomla:'<svg viewBox="0 0 32 32" width="24" height="24"><path d="M8.313 8.646c1.026-1.026 2.688-1.026 3.713-0.001l0.245 0.246 3.159-3.161-0.246-0.246c-1.801-1.803-4.329-2.434-6.638-1.891-0.331-2.037-2.096-3.591-4.224-3.592-2.364 0-4.28 1.92-4.28 4.286 0 2.042 1.425 3.75 3.333 4.182-0.723 2.42-0.133 5.151 1.776 7.062l7.12 7.122 3.156-3.163-7.119-7.121c-1.021-1.023-1.023-2.691 0.006-3.722zM31.96 4.286c0-2.368-1.916-4.286-4.281-4.286-2.164 0-3.952 1.608-4.24 3.695-2.409-0.708-5.118-0.109-7.020 1.794l-7.12 7.122 3.159 3.162 7.118-7.12c1.029-1.030 2.687-1.028 3.709-0.006 1.025 1.026 1.025 2.691-0.001 3.717l-0.244 0.245 3.157 3.164 0.246-0.248c1.889-1.893 2.49-4.586 1.8-6.989 2.098-0.276 3.717-2.074 3.717-4.25zM28.321 23.471c0.566-2.327-0.062-4.885-1.878-6.703l-7.109-7.125-3.159 3.16 7.11 7.125c1.029 1.031 1.027 2.691 0.006 3.714-1.025 1.025-2.688 1.025-3.714-0.001l-0.243-0.243-3.156 3.164 0.242 0.241c1.922 1.925 4.676 2.514 7.105 1.765 0.395 1.959 2.123 3.431 4.196 3.431 2.363 0 4.28-1.917 4.28-4.285 0-2.163-1.599-3.952-3.679-4.244zM19.136 16.521l-7.111 7.125c-1.022 1.024-2.689 1.026-3.717-0.004-1.026-1.028-1.026-2.691-0.001-3.718l0.244-0.243-3.159-3.16-0.242 0.241c-1.836 1.838-2.455 4.432-1.858 6.781-1.887 0.446-3.292 2.145-3.292 4.172-0.001 2.367 1.917 4.285 4.281 4.285 2.034-0.001 3.737-1.419 4.173-3.324 2.334 0.58 4.906-0.041 6.729-1.867l7.109-7.124-3.157-3.163z"></path></svg>'};r.forEach((e=>{const t={};t.text=e.name,t.icon=e.icon,t.type="menuitem",e.iconSVG&&(u[t.icon]=e.iconSVG),e.href?t.onAction=()=>{i.getElementById(`${e.id}_modal`).open()}:t.onAction=()=>{new Function(e.click)()},l.push(t)}));let m=!1;n&&(m=n.readOnly),l.length?d.setup=e=>{e.settings.readonly=m,Object.keys(u).forEach((t=>{e.ui.registry.addIcon(t,u[t])})),e.ui.registry.addMenuButton("jxtdbuttons",{text:t.Text._("PLG_TINY_CORE_BUTTONS"),icon:"joomla",fetch:e=>e(l)})}:d.setup=e=>{e.settings.readonly=m},d.init_instance_callback=e=>{e.on("submit",(()=>{e.isHidden()&&e.show()}),!0)};const y=new e.Editor(n.id,d,tinymce.EditorManager);y.render(),t.editors.instances[n.id]={getValue:()=>t.editors.instances[n.id].instance.getContent(),setValue:e=>t.editors.instances[n.id].instance.setContent(e),getSelection:()=>t.editors.instances[n.id].instance.selection.getContent({format:"text"}),replaceSelection:e=>t.editors.instances[n.id].instance.execCommand("mceInsertContent",!1,e),disable:e=>t.editors.instances[n.id].instance.setMode(e?"readonly":"design"),id:n.id,instance:y}}},i.addEventListener("DOMContentLoaded",(()=>{t.JoomlaTinyMCE.setupEditors(i)})),i.addEventListener("joomla:updated",(({target:e})=>t.JoomlaTinyMCE.setupEditors(e)))})(window.tinyMCE,Joomla,window,document);