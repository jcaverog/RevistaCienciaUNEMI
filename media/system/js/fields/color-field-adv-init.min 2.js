!function(t,a){"use strict";function o(t){a(t.target).find(".minicolors").each((function(){a(this).minicolors({control:a(this).attr("data-control")||"hue",format:"color"===a(this).attr("data-validate")?"hex":("rgba"===a(this).attr("data-format")?"rgb":a(this).attr("data-format"))||"hex",keywords:a(this).attr("data-keywords")||"",opacity:"rgba"===a(this).attr("data-format"),position:a(this).attr("data-position")||"default",swatches:a(this).attr("data-colors")?a(this).attr("data-colors").split(","):[],theme:"bootstrap"})}))}t.addEventListener("DOMContentLoaded",o),t.addEventListener("joomla:updated",o)}(document,jQuery);