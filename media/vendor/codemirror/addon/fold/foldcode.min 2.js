!function(n){"object"==typeof exports&&"object"==typeof module?n(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],n):n(CodeMirror)}((function(n){"use strict";function o(o,e,t,i){if(t&&t.call){var f=t;t=null}else f=r(o,t,"rangeFinder");"number"==typeof e&&(e=n.Pos(e,0));var l=r(o,t,"minFoldSize");function d(n){var r=f(o,e);if(!r||r.to.line-r.from.line<l)return null;if("fold"===i)return r;for(var t=o.findMarksAt(r.from),d=0;d<t.length;++d)if(t[d].__isFold){if(!n)return null;r.cleared=!0,t[d].clear()}return r}var a=d(!0);if(r(o,t,"scanUp"))for(;!a&&e.line>o.firstLine();)e=n.Pos(e.line-1,0),a=d(!1);if(a&&!a.cleared&&"unfold"!==i){var u=function(n,o,e){var t=r(n,o,"widget");"function"==typeof t&&(t=t(e.from,e.to));if("string"==typeof t){var i=document.createTextNode(t);(t=document.createElement("span")).appendChild(i),t.className="CodeMirror-foldmarker"}else t&&(t=t.cloneNode(!0));return t}(o,t,a);n.on(u,"mousedown",(function(o){c.clear(),n.e_preventDefault(o)}));var c=o.markText(a.from,a.to,{replacedWith:u,clearOnEnter:r(o,t,"clearOnEnter"),__isFold:!0});c.on("clear",(function(e,r){n.signal(o,"unfold",o,e,r)})),n.signal(o,"fold",o,a.from,a.to)}}n.newFoldFunction=function(n,e){return function(r,t){o(r,t,{rangeFinder:n,widget:e})}},n.defineExtension("foldCode",(function(n,e,r){o(this,n,e,r)})),n.defineExtension("isFolded",(function(n){for(var o=this.findMarksAt(n),e=0;e<o.length;++e)if(o[e].__isFold)return!0})),n.commands.toggleFold=function(n){n.foldCode(n.getCursor())},n.commands.fold=function(n){n.foldCode(n.getCursor(),null,"fold")},n.commands.unfold=function(n){n.foldCode(n.getCursor(),{scanUp:!1},"unfold")},n.commands.foldAll=function(o){o.operation((function(){for(var e=o.firstLine(),r=o.lastLine();e<=r;e++)o.foldCode(n.Pos(e,0),{scanUp:!1},"fold")}))},n.commands.unfoldAll=function(o){o.operation((function(){for(var e=o.firstLine(),r=o.lastLine();e<=r;e++)o.foldCode(n.Pos(e,0),{scanUp:!1},"unfold")}))},n.registerHelper("fold","combine",(function(){var n=Array.prototype.slice.call(arguments,0);return function(o,e){for(var r=0;r<n.length;++r){var t=n[r](o,e);if(t)return t}}})),n.registerHelper("fold","auto",(function(n,o){for(var e=n.getHelpers(o,"fold"),r=0;r<e.length;r++){var t=e[r](n,o);if(t)return t}}));var e={rangeFinder:n.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0};function r(n,o,r){if(o&&void 0!==o[r])return o[r];var t=n.options.foldOptions;return t&&void 0!==t[r]?t[r]:e[r]}n.defineOption("foldOptions",null),n.defineExtension("foldOption",(function(n,o){return r(this,n,o)}))}));