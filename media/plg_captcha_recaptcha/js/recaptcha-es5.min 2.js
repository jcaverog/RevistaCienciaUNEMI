!function(){"use strict";!function(t,a){t.JoomlainitReCaptcha2=function(){var e=[].slice.call(a.getElementsByClassName("g-recaptcha")),c=["sitekey","theme","size","tabindex","callback","expired-callback","error-callback"];e.forEach((function(a){var e={};a.dataset?e=a.dataset:c.forEach((function(t){var c="data-"+t;a.hasAttribute(c)&&(e[t]=a.getAttribute(c))})),a.setAttribute("data-recaptcha-widget-id",t.grecaptcha.render(a,e))}))}}(window,document)}();