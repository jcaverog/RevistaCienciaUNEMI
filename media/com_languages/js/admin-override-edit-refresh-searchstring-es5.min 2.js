!function(){"use strict";document.addEventListener("DOMContentLoaded",(function(){document.getElementById("jform_searchstring").addEventListener("focus",(function(e){var r=e.srcElement;Joomla.overrider.states.refreshed||document.getElementById("overrider-spinner").getAttribute("data-search-string-expired")&&(Joomla.overrider.refreshCache(),Joomla.overrider.states.refreshed=!0);r.classList.remove("invalid")}),!1),document.getElementById("more-results-button").addEventListener("click",(function(){Joomla.overrider.searchStrings(Joomla.overrider.states.more)}),!1)}))}();