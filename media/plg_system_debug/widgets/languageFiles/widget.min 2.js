!function(e){var a=PhpDebugBar.utils.makecsscls("phpdebugbar-widgets-");PhpDebugBar.Widgets.languageFilesWidget=PhpDebugBar.Widget.extend({tagName:"table",className:a("languageFiles"),render:function(){this.bindAttr("data",(function(a){this.$el.empty();var t=e("<tr />").append(e("<th />").text("Extension")).append(e("<th />").text("File"));for(var d in this.$el.append(t),a.loaded){var r=e("<ul />");for(var n in a.loaded[d]){var p=a.loaded[d][n]?"alert-success":"alert-warning",l=(a.loaded[d][n]?"+":"-")+" "+n.replace(a.jroot,""),i=e("<li />").addClass(p);if(a.xdebugLink){var s=e("<a />").text(l).attr("href",a.xdebugLink.replace("%f",n).replace("%l","1"));i.append(s)}else i.text(l);i.appendTo(r)}var g=e("<tr />").append(e("<td />").text(d)).append(e("<td />").append(r));this.$el.append(g)}}))}})}(PhpDebugBar.$);