!function(){"use strict";var e,t;e=function(e){var t=e.target,s=parseInt(t.value,10);t.classList.remove("form-select-success","form-select-danger"),1===s?t.classList.add("form-select-success"):0!==s&&-2!==s||t.classList.add("form-select-danger")},t=function t(){[].slice.call(document.querySelectorAll(".form-select-color-state")).forEach((function(t){var s=parseInt(t.value,10);1===s?t.classList.add("form-select-success"):0!==s&&-2!==s||t.classList.add("form-select-danger"),t.addEventListener("change",e)})),document.removeEventListener("DOMContentLoaded",t,!0)},document.addEventListener("DOMContentLoaded",t,!0),document.addEventListener("joomla:updated",t,!0)}();