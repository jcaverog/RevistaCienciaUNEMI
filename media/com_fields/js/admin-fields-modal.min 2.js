(o=>{if(!window.parent.Joomla)throw new Error("core.js was not properly initialised");o||(window.Joomla={}),o.fieldIns=(o,e)=>{window.parent.Joomla.editors.instances[e].replaceSelection(`{field ${o}}`),window.parent.Joomla.Modal&&window.parent.Joomla.Modal.getCurrent().close()},o.fieldgroupIns=(o,e)=>{window.parent.Joomla.editors.instances[e].replaceSelection(`{fieldgroup ${o}}`),window.parent.Joomla.Modal&&window.parent.Joomla.Modal.getCurrent().close()}})(Joomla);