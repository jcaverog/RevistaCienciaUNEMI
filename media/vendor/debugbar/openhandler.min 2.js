if(void 0===PhpDebugBar){var PhpDebugBar={};PhpDebugBar.$=jQuery}!function(t){var e=function(t){return PhpDebugBar.utils.csscls(t,"phpdebugbar-openhandler-")};PhpDebugBar.OpenHandler=PhpDebugBar.Widget.extend({className:"phpdebugbar-openhandler",defaults:{items_per_page:20},render:function(){var n=this;this.$el.appendTo("body").hide(),this.$closebtn=t('<a><i class="phpdebugbar-fa phpdebugbar-fa-times"></i></a>'),this.$table=t("<tbody />"),t("<div>PHP DebugBar | Open</div>").addClass(e("header")).append(this.$closebtn).appendTo(this.$el),t('<table><thead><tr><th width="150">Date</th><th width="55">Method</th><th>URL</th><th width="125">IP</th><th width="100">Filter data</th></tr></thead></table>').append(this.$table).appendTo(this.$el),this.$actions=t("<div />").addClass(e("actions")).appendTo(this.$el),this.$closebtn.on("click",(function(){n.hide()})),this.$loadmorebtn=t("<a>Load more</a>").appendTo(this.$actions).on("click",(function(){n.find(n.last_find_request,n.last_find_request.offset+n.get("items_per_page"),n.handleFind.bind(n))})),this.$showonlycurrentbtn=t("<a>Show only current URL</a>").appendTo(this.$actions).on("click",(function(){n.$table.empty(),n.find({uri:window.location.pathname},0,n.handleFind.bind(n))})),this.$showallbtn=t("<a>Show all</a>").appendTo(this.$actions).on("click",(function(){n.refresh()})),this.$clearbtn=t("<a>Delete all</a>").appendTo(this.$actions).on("click",(function(){n.clear((function(){n.hide()}))})),this.addSearch(),this.$overlay=t("<div />").addClass(e("overlay")).hide().appendTo("body"),this.$overlay.on("click",(function(){n.hide()}))},refresh:function(){this.$table.empty(),this.$loadmorebtn.show(),this.find({},0,this.handleFind.bind(this))},addSearch:function(){var e=this,n=t("<button />").text("Search").attr("type","submit").on("click",(function(n){e.$table.empty();var a={},i=t(this).parent().serializeArray();t.each(i,(function(){this.value&&(a[this.name]=this.value)})),e.find(a,0,e.handleFind.bind(e)),n.preventDefault()}));t("<form />").append("<br/><b>Filter results</b><br/>").append('Method: <select name="method"><option></option><option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option></select><br/>').append('Uri: <input type="text" name="uri"><br/>').append('IP: <input type="text" name="ip"><br/>').append(n).appendTo(this.$actions)},handleFind:function(e){var n=this;t.each(e,(function(e,a){t("<a />").text("Load dataset").on("click",(function(t){n.hide(),n.load(a.id,(function(t){n.callback(a.id,t)})),t.preventDefault()})),t("<a />").text(a.method).on("click",(function(t){n.$table.empty(),n.find({method:a.method},0,n.handleFind.bind(n)),t.preventDefault()}));var i=t("<a />").text(a.uri).on("click",(function(t){n.hide(),n.load(a.id,(function(t){n.callback(a.id,t)})),t.preventDefault()})),d=t("<a />").text(a.ip).on("click",(function(t){n.$table.empty(),n.find({ip:a.ip},0,n.handleFind.bind(n)),t.preventDefault()})),o=t("<a />").text("Show URL").on("click",(function(t){n.$table.empty(),n.find({uri:a.uri},0,n.handleFind.bind(n)),t.preventDefault()}));t("<tr />").append("<td>"+a.datetime+"</td>").append("<td>"+a.method+"</td>").append(t("<td />").append(i)).append(t("<td />").append(d)).append(t("<td />").append(o)).appendTo(n.$table)})),e.length<this.get("items_per_page")&&this.$loadmorebtn.hide()},show:function(t){this.callback=t,this.$el.show(),this.$overlay.show(),this.refresh()},hide:function(){this.$el.hide(),this.$overlay.hide()},find:function(e,n,a){var i=t.extend({},e,{max:this.get("items_per_page"),offset:n||0});this.last_find_request=i,this.ajax(i,a)},load:function(t,e){this.ajax({op:"get",id:t},e)},clear:function(t){this.ajax({op:"clear"},t)},ajax:function(e,n){t.ajax({dataType:"json",url:this.get("url"),data:e,success:n,ignoreDebugBarAjaxHandler:!0})}})}(PhpDebugBar.$);