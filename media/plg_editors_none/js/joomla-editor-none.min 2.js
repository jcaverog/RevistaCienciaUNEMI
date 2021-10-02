window.customElements.define("joomla-editor-none",class extends HTMLElement{constructor(){super(),this.editor="",this.unregisterEditor=this.unregisterEditor.bind(this),this.registerEditor=this.registerEditor.bind(this),this.childrenChange=this.childrenChange.bind(this),this.getSelection=this.getSelection.bind(this),new MutationObserver((()=>this.childrenChange())).observe(this,{childList:!0})}connectedCallback(){this.childrenChange()}disconnectedCallback(){this.unregisterEditor()}getSelection(){return document.selection?(this.editor.focus(),document.selection.createRange()):this.editor.selectionStart||0===this.editor.selectionStart?this.editor.value.substring(this.editor.selectionStart,this.editor.selectionEnd):this.editor.value}registerEditor(){if(!window.Joomla||!window.Joomla.editors||"object"!=typeof window.Joomla.editors)throw new Error("The Joomla API is not correctly registered.");window.Joomla.editors.instances[this.editor.id]={id:()=>this.editor.id,element:()=>this.editor,getValue:()=>this.editor.value,setValue:t=>this.editor.value=t,getSelection:()=>this.getSelection(),disable:t=>{this.editor.disabled=t,this.editor.readOnly=t},replaceSelection:t=>{this.editor.selectionStart||0===this.editor.selectionStart?this.editor.value=this.editor.value.substring(0,this.editor.selectionStart)+t+this.editor.value.substring(this.editor.selectionEnd,this.editor.value.length):this.editor.value+=t},onSave:()=>{}}}unregisterEditor(){this.editor&&delete window.Joomla.editors.instances[this.editor.id]}childrenChange(){this.firstElementChild&&this.firstElementChild.tagName&&"textarea"===this.firstElementChild.tagName.toLowerCase()&&this.firstElementChild.getAttribute("id")&&(this.editor=this.firstElementChild,this.unregisterEditor(),this.registerEditor())}});