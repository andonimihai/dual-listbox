!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(window,(function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}i.r(e),i.d(e,"DualListbox",(function(){return o}));var a="dual-listbox__button",l="dual-listbox__item--selected";i(0);var o=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setDefaults(),this.selected=[],this.available=[],t.isDomElement(e)?this.select=e:this.select=document.querySelector(e),this._initOptions(i),this._initReusableElements(),this._splitOptions(this.select.options),void 0!==i.options&&this._splitOptions(i.options),this._buildDualListbox(this.select.parentNode),this._addActions(),this.redraw()}var e,i,o;return e=t,o=[{key:"isDomElement",value:function(t){return"object"===("undefined"==typeof HTMLElement?"undefined":s(HTMLElement))?t instanceof HTMLElement:t&&"object"===s(t)&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}}],(i=[{key:"setDefaults",value:function(){this.addEvent=null,this.removeEvent=null,this.availableTitle="Available options",this.selectedTitle="Selected options",this.showListHeader=!0,this.showAddButton=!0,this.addButtonText="add",this.addButtonClass="btn btn-primary",this.showRemoveButton=!0,this.removeButtonText="remove",this.removeButtonClass="btn btn-danger",this.showAddAllButton=!0,this.addAllButtonText="add all",this.addAllButtonClass="btn btn-primary",this.showRemoveAllButton=!0,this.removeAllButtonText="remove all",this.removeAllButtonClass="btn btn-danger",this.searchPlaceholder="Search"}},{key:"addEventListener",value:function(t,e){this.dualListbox.addEventListener(t,e)}},{key:"addSelected",value:function(t){var e=this,i=this.available.indexOf(t);i>-1&&(this.available.splice(i,1),this.selected.push(t),this._selectOption(t.dataset.id),this.redraw(),setTimeout((function(){var i=document.createEvent("HTMLEvents");i.initEvent("added",!1,!0),i.addedElement=t,e.dualListbox.dispatchEvent(i)}),0))}},{key:"bulkSelectItems",value:function(t){if(!Array.isArray(t))return!1;var e,i=this.available.filter((function(e){return t.includes(e.getAttribute("data-id"))}));i.length>0&&((e=this.selected).push.apply(e,i),this.available=this.available.filter((function(e){return!t.includes(e.getAttribute("data-id"))})),this._selectOptions(t),this.redraw())}},{key:"redraw",value:function(){this.updateAvailableListbox(),this.updateSelectedListbox()}},{key:"removeSelected",value:function(t){var e=this,i=this.selected.indexOf(t);i>-1&&(this.selected.splice(i,1),this.available.push(t),this._deselectOption(t.dataset.id),this.redraw(),setTimeout((function(){var i=document.createEvent("HTMLEvents");i.initEvent("removed",!1,!0),i.removedElement=t,e.dualListbox.dispatchEvent(i)}),0))}},{key:"bulkRemoveItems",value:function(t){var e;if(!Array.isArray(t))return!1;var i=this.selected.filter((function(e){return t.includes(e.dataset.id)}));this.selected=this.selected.filter((function(e){return!t.includes(e.dataset.id)})),(e=this.available).push.apply(e,i),this._deselectOptions(t),this.redraw()}},{key:"searchLists",value:function(t,e){for(var i=e.querySelectorAll(".dual-listbox__available .".concat("dual-listbox__item")),s=t.toLowerCase(),n=0;n<i.length;n++){var a=i[n];-1===a.textContent.toLowerCase().indexOf(s)?a.style.display="none":a.style.display="list-item"}}},{key:"updateAvailableListbox",value:function(){this._updateListbox(this.availableList,this.available)}},{key:"updateSelectedListbox",value:function(){this._updateListbox(this.selectedList,this.selected)}},{key:"_actionAllSelected",value:function(t){var e=this;t.preventDefault(),this.available.filter((function(t){return"none"!==t.style.display})).forEach((function(t){return e.addSelected(t)}))}},{key:"_updateListbox",value:function(t,e){for(;t.firstChild;)t.removeChild(t.firstChild);e.sort((function(t,e){var i=t.dataset.id,s=e.dataset.id;return isNaN(i)||isNaN(s)?i<s?-1:i>s?1:0:i-s}));for(var i=0;i<e.length;i++){var s=e[i];t.appendChild(s)}}},{key:"_actionItemSelected",value:function(t){t.preventDefault();var e=this.dualListbox.querySelector(".".concat(l));e&&this.addSelected(e)}},{key:"_actionAllDeselected",value:function(t){var e=this;t.preventDefault(),this.selected.filter((function(t){return"none"!==t.style.display})).forEach((function(t){return e.removeSelected(t)}))}},{key:"_actionItemDeselected",value:function(t){t.preventDefault();var e=this.dualListbox.querySelector(".".concat(l));e&&this.removeSelected(e)}},{key:"_actionItemDoubleClick",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(e.preventDefault(),e.stopPropagation()),this.selected.indexOf(t)>-1?this.removeSelected(t):this.addSelected(t)}},{key:"_actionItemClick",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i&&i.preventDefault();for(var s=e.querySelectorAll(".".concat("dual-listbox__item")),n=0;n<s.length;n++){var a=s[n];a!==t&&a.classList.remove(l)}t.classList.contains(l)?t.classList.remove(l):t.classList.add(l)}},{key:"_addActions",value:function(){this._addButtonActions(),this._addSearchActions()}},{key:"_addButtonActions",value:function(){var t=this;this.add_all_button.addEventListener("click",(function(e){return t._actionAllSelected(e)})),this.add_button.addEventListener("click",(function(e){return t._actionItemSelected(e)})),this.remove_button.addEventListener("click",(function(e){return t._actionItemDeselected(e)})),this.remove_all_button.addEventListener("click",(function(e){return t._actionAllDeselected(e)}))}},{key:"_addClickActions",value:function(t){var e=this;return t.addEventListener("click",(function(i){return e._actionItemDoubleClick(t,i)})),t}},{key:"_addSearchActions",value:function(){var t=this;this.search.addEventListener("change",(function(e){return t.searchLists(e.target.value,t.dualListbox)})),this.search.addEventListener("keyup",(function(e){return t.searchLists(e.target.value,t.dualListbox)}))}},{key:"_buildDualListbox",value:function(t){this.select.style.display="none",this.dualListBoxContainer.appendChild(this._createList(this.availableListTitle,this.availableList)),this.dualListBoxContainer.appendChild(this.buttons),this.dualListBoxContainer.appendChild(this._createList(this.selectedListTitle,this.selectedList)),this.dualListbox.appendChild(this.search),this.dualListbox.appendChild(this.dualListBoxContainer),t.insertBefore(this.dualListbox,this.select)}},{key:"_createList",value:function(t,e){var i=document.createElement("div");return this.showListHeader&&i.appendChild(t),i.appendChild(e),i}},{key:"_createButtons",value:function(){var t,e,i,s;this.buttons=document.createElement("div"),this.buttons.classList.add("dual-listbox__buttons"),this.add_all_button=document.createElement("button"),(t=this.add_all_button.classList).add.apply(t,[a].concat(this.addAllButtonClass.split(" "))),this.add_all_button.innerHTML=this.addAllButtonText,this.add_button=document.createElement("button"),(e=this.add_button.classList).add.apply(e,[a].concat(this.addButtonClass.split(" "))),this.add_button.innerHTML=this.addButtonText,this.remove_button=document.createElement("button"),(i=this.remove_button.classList).add.apply(i,[a].concat(this.removeButtonClass.split(" "))),this.remove_button.innerHTML=this.removeButtonText,this.remove_all_button=document.createElement("button"),(s=this.remove_all_button.classList).add.apply(s,[a].concat(this.removeAllButtonClass.split(" "))),this.remove_all_button.innerHTML=this.removeAllButtonText,this.showAddAllButton&&this.buttons.appendChild(this.add_all_button),this.showAddButton&&this.buttons.appendChild(this.add_button),this.showRemoveButton&&this.buttons.appendChild(this.remove_button),this.showRemoveAllButton&&this.buttons.appendChild(this.remove_all_button)}},{key:"_createListItem",value:function(t){var e=document.createElement("li");return e.classList.add("dual-listbox__item"),e.innerHTML=t.text,e.dataset.id=t.value,this._addClickActions(e),e}},{key:"_createSearch",value:function(){this.search=document.createElement("input"),this.search.classList.add("dual-listbox__search"),this.search.placeholder=this.searchPlaceholder}},{key:"_deselectOption",value:function(t){for(var e=this.select.options,i=0;i<e.length;i++){var s=e[i];s.value===t&&(s.selected=!1,s.removeAttribute("selected"))}this.removeEvent&&this.removeEvent(t)}},{key:"_deselectOptions",value:function(t){if(!Array.isArray(t))return!1;for(var e=this.select.options,i=0;i<e.length;i++){var s=e[i];t.includes(s.value)&&(s.selected=!1,s.removeAttribute("selected"))}}},{key:"_initOptions",value:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])}},{key:"_initReusableElements",value:function(){this.dualListbox=document.createElement("div"),this.dualListbox.classList.add("dual-listbox"),this.select.id&&this.dualListbox.classList.add(this.select.id),this.dualListBoxContainer=document.createElement("div"),this.dualListBoxContainer.classList.add("dual-listbox__container"),this.availableList=document.createElement("ul"),this.availableList.classList.add("dual-listbox__available"),this.selectedList=document.createElement("ul"),this.selectedList.classList.add("dual-listbox__selected"),this.availableListTitle=document.createElement("div"),this.availableListTitle.classList.add("dual-listbox__title"),this.availableListTitle.innerText=this.availableTitle,this.selectedListTitle=document.createElement("div"),this.selectedListTitle.classList.add("dual-listbox__title"),this.selectedListTitle.innerText=this.selectedTitle,this._createButtons(),this._createSearch()}},{key:"_selectOption",value:function(t){for(var e=this.select.options,i=0;i<e.length;i++){var s=e[i];s.value===t&&(s.selected=!0,s.setAttribute("selected",""))}this.addEvent&&this.addEvent(t)}},{key:"_selectOptions",value:function(t){if(!Array.isArray(t))return!1;for(var e=this.select.options,i=0;i<e.length;i++){var s=e[i];t.includes(s.value)&&(s.selected=!0,s.setAttribute("selected",""))}}},{key:"_splitOptions",value:function(e){for(var i=0;i<e.length;i++){var s=e[i];t.isDomElement(s)?this._addOption({text:s.innerHTML,value:s.value,selected:s.attributes.selected}):this._addOption(s)}}},{key:"_addOption",value:function(t){var e=this._createListItem(t);t.selected?this.selected.push(e):this.available.push(e)}}])&&n(e.prototype,i),o&&n(e,o),t}();e.default=o}])}));