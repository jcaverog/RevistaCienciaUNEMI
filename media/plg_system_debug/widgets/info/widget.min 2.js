!function(t){var e=PhpDebugBar.utils.makecsscls("phpdebugbar-widgets-");PhpDebugBar.Widgets.InfoWidget=PhpDebugBar.Widget.extend({tagName:"table",className:e("info"),render:function(){this.bindAttr("data",(function(e){var d;this.$el.empty(),d=t("<tr />").append(t("<td />").text("Joomla! Version")).append(t("<td />").text(e.joomlaVersion)),this.$el.append(d),d=t("<tr />").append(t("<td />").text("PHP Version")).append(t("<td />").text(e.phpVersion)),this.$el.append(d),d=t("<tr />").append(t("<td />").text("Identity")).append(t("<td />").text(e.identity.type)),this.$el.append(d),d=t("<tr />").append(t("<td />").text("Response")).append(t("<td />").text(e.response.status_code)),this.$el.append(d),d=t("<tr />").append(t("<td />").text("Template")).append(t("<td />").text(e.template.template)),this.$el.append(d),d=t("<tr />").append(t("<td />").text("Database")).append(t("<td />").html("<dl><dt>Server</dt><dd>"+e.database.dbserver+"</dd><dt>Version</dt><dd>"+e.database.dbversion+"</dd><dt>Collation</dt><dd>"+e.database.dbcollation+"</dd><dt>Conn Collation</dt><dd>"+e.database.dbconnectioncollation+"</dd></dl>")),this.$el.append(d)}))}})}(PhpDebugBar.$);