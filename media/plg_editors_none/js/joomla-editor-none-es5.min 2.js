!function(){"use strict";function t(e){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function r(t,i,o){return(r=n()?Reflect.construct:function(t,n,r){var i=[null];i.push.apply(i,n);var o=new(Function.bind.apply(t,i));return r&&e(o,r.prototype),o}).apply(null,arguments)}function i(n){var o="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(i=n,-1===Function.toString.call(i).indexOf("[native code]")))return n;var i;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(n))return o.get(n);o.set(n,c)}function c(){return r(n,arguments,t(this).constructor)}return c.prototype=Object.create(n.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),e(c,n)})(n)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}window.customElements.define("joomla-editor-none",function(t){var n,r;function i(){var e;return(e=t.call(this)||this).editor="",e.unregisterEditor=e.unregisterEditor.bind(o(e)),e.registerEditor=e.registerEditor.bind(o(e)),e.childrenChange=e.childrenChange.bind(o(e)),e.getSelection=e.getSelection.bind(o(e)),new MutationObserver((function(){return e.childrenChange()})).observe(o(e),{childList:!0}),e}r=t,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,e(n,r);var c=i.prototype;return c.connectedCallback=function(){this.childrenChange()},c.disconnectedCallback=function(){this.unregisterEditor()},c.getSelection=function(){return document.selection?(this.editor.focus(),document.selection.createRange()):this.editor.selectionStart||0===this.editor.selectionStart?this.editor.value.substring(this.editor.selectionStart,this.editor.selectionEnd):this.editor.value},c.registerEditor=function(){var t=this;if(!window.Joomla||!window.Joomla.editors||"object"!=typeof window.Joomla.editors)throw new Error("The Joomla API is not correctly registered.");window.Joomla.editors.instances[this.editor.id]={id:function(){return t.editor.id},element:function(){return t.editor},getValue:function(){return t.editor.value},setValue:function(e){return t.editor.value=e},getSelection:function(){return t.getSelection()},disable:function(e){t.editor.disabled=e,t.editor.readOnly=e},replaceSelection:function(e){t.editor.selectionStart||0===t.editor.selectionStart?t.editor.value=t.editor.value.substring(0,t.editor.selectionStart)+e+t.editor.value.substring(t.editor.selectionEnd,t.editor.value.length):t.editor.value+=e},onSave:function(){}}},c.unregisterEditor=function(){this.editor&&delete window.Joomla.editors.instances[this.editor.id]},c.childrenChange=function(){this.firstElementChild&&this.firstElementChild.tagName&&"textarea"===this.firstElementChild.tagName.toLowerCase()&&this.firstElementChild.getAttribute("id")&&(this.editor=this.firstElementChild,this.unregisterEditor(),this.registerEditor())},i}(i(HTMLElement)))}();