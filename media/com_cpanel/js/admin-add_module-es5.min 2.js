!function(){"use strict";!function(e){e.addEventListener("DOMContentLoaded",(function(){window.jSelectModuleType=function(){var t=e.querySelectorAll("#moduleDashboardAddModal .modal-footer .btn.hidden");t.length&&setTimeout((function(){t.forEach((function(e){e.classList.remove("hidden")}))}),1e3)};var t=e.querySelectorAll("#moduleDashboardAddModal .modal-footer .btn"),n=[],o=!1;t.length&&t.forEach((function(t){t.classList.contains("hidden")&&n.push(t),t.addEventListener("click",(function(t){var n=t.currentTarget;if(n||(n=t.target),n){var d=n.dataset.bsTarget;o="#saveBtn"===d,setTimeout((function(){o=!1}),1500);var a=e.querySelector("#moduleDashboardAddModal iframe"),i=(a.contentDocument||a.contentWindow.document).querySelector(d);i&&i.click()}}))}));var d=e.querySelector("#moduleDashboardAddModal");d&&(d.addEventListener("hide.bs.modal",(function(){n.forEach((function(e){e.classList.add("hidden")}))})),d.addEventListener("hidden.bs.modal",(function(){o&&setTimeout((function(){window.parent.location.reload()}),1e3)})))}))}(document)}();