import{B as BaseComponent,E as EventHandler,d as defineJQueryPlugin}from"./dom.min.js?1631567336";const NAME="button",DATA_KEY="bs.button",EVENT_KEY=".bs.button",DATA_API_KEY=".data-api",CLASS_NAME_ACTIVE="active",SELECTOR_DATA_TOGGLE='[data-bs-toggle="button"]',EVENT_CLICK_DATA_API="click.bs.button.data-api";class Button extends BaseComponent{static get NAME(){return NAME}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Button.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}if(EventHandler.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,(t=>{t.preventDefault();const e=t.target.closest(SELECTOR_DATA_TOGGLE);Button.getOrCreateInstance(e).toggle()})),defineJQueryPlugin(Button),window.bootstrap=window.bootstrap||{},window.bootstrap.Button=Button,Joomla&&Joomla.getOptions){const t=Joomla.getOptions("bootstrap.button");t&&t.length&&t.forEach((t=>{Array.from(document.querySelectorAll(t)).map((t=>new window.bootstrap.Button(t)))}))}export{Button as B};