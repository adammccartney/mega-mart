/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mega_mart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mega-mart.js */ \"./src/mega-mart.js\");\n\n\nlet items = _mega_mart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].items;\nlet nav_data = _mega_mart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav_data;\n\n\n// render our components\n_mega_mart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make_nav_display_dom(nav_data);\n_mega_mart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make_item_display_dom(items);\n\n\n//# sourceURL=webpack://megamart/./src/index.js?");

/***/ }),

/***/ "./src/mega-mart.js":
/*!**************************!*\
  !*** ./src/mega-mart.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst prvt_nav_data = [\n  {\n    listclass: \"navbar-left\",\n    data: {\n      display: \"MegaMart\"\n    }\n  },\n  {\n    listclass: \"cart-display\",\n    data: {\n      display: \"Cart\",\n      total: \"0\"\n    }\n  }\n]\n\nfunction prvt_make_nav_display_dom (nav_data) {\n\n  let list_elements = []\n\n  // parse the nav data to generate element structure\n  // our nav consists of a number of lists of various items\n  for (let i = 0; i < nav_data.length; i++) {\n    let nav_list = document.createElement(\"ul\");\n    nav_list.classList.add(nav_data[i].listclass);\n    let navlist_item = document.createElement('li');\n    let display = document.createElement('strong');\n    display.innerHTML = nav_data[i].data.display;\n\n    // append display to item\n    navlist_item.appendChild(display)\n    \n    if (nav_data[i].listclass == \"cart-display\") {\n      let total = document.createElement('strong');\n      total.classList.add('cart-total');\n      total.innerHTML = nav_data[i].data.total;\n      // append total to item\n      navlist_item.appendChild(total);\n    }\n    // append items to list\n    nav_list.appendChild(navlist_item);\n    // gather elements\n    list_elements.push(nav_list);\n  }\n  \n  // create a single display container that we will use as parent node\n  let nav = document.createElement(\"nav\");\n  // add grid container to hold stuff\n  let navgridcontainer = document.createElement(\"div\");\n  navgridcontainer.classList.add('nav-grid-container');\n\n  // append elements that were created above\n  for (let element of list_elements) {\n    navgridcontainer.appendChild(element);\n  }\n \n  // append container to nav\n  nav.appendChild(navgridcontainer);\n  // append nav after first node in body\n  document.getElementsByTagName('body')[0].appendChild(nav);\n}\n\n\n\nconst prvt_items = [\n      {name: \"Shirt\", price: \"15\"},\n      {name: \"Jeans\", price: \"12\"}\n]\n\nfunction prvt_make_list_dom (list_data) {\n  // make a container for the list\n  let lstcontainer = document.createElement(\"div\")\n  lstcontainer.classList.add(\"store-items\")\n\n  // make the list\n  let lst = document.createElement(\"li\")\n\n  // Add it to the page\n  document.getElementsByTagName('body')[0].appendChild(lstcontainer);\n  lstcontainer.appendChild(lst);\n\n  for (let i = 0; i < list_data.length; ++i) {\n      // Create an item for each one\n      let item = document.createElement('ul');\n\n      // Add the item name\n      item.innerHTML = list_data[i].name;\n\n      // Add listItem to the listElement\n      lst.appendChild(item);\n  }\n}\n\nfunction prvt_make_item_display_dom (list_data) {\n  // create a single display container that we will use as parent node\n  let displaycontainer = document.createElement(\"div\");\n  displaycontainer.classList.add(\"item-display-container\");\n\n  // add it to the page\n  document.getElementsByTagName('body')[0].appendChild(displaycontainer);\n\n  // iterate through the item list, create children for each node with\n  // their own container and append these to the displaycontainer\n  for (let i = 0; i < list_data.length; i++) {\n    // create grid container to display item info\n    let itemgridcontainer = document.createElement('div');\n    itemgridcontainer.classList.add('item-grid-container');\n\n    // create display elements for item name and item price\n    let {description_data, price_data} = list_data[i];\n\n    // create ui elements for the same\n    let description_ui = document.createElement('div');\n    let price_ui = document.createElement('div');\n    description_ui.classList.add('item-description');\n    price_ui.classList.add('item-price');\n\n    // inject data to ui \n    description_ui.innerHTML = description_data;\n    price_ui.innerHTML = price_data;\n\n    // append the ui elements to parent node\n    itemgridcontainer.appendChild(description_ui);\n    itemgridcontainer.appendChild(price_ui);\n    displaycontainer.appendChild(itemgridcontainer);\n  }\n}\n\n\n\n \n\nvar shopping_cart = [];\nvar shopping_cart_total = [];\n\nfunction prvt_add_item_to_cart(name, price) {\n  shopping_cart.push({\n    name: name,\n    price: price\n  })\n}\n\nfunction prvt_calc_cart_total() {\n  shopping_cart_total = 0;\n  for(var i = 0; i < shopping_cart.length; i++) {\n    var item = shopping_cart[i];\n    shopping_cart_total += item.price;\n  }\n  set_cart_total_dom(); \n}\n\n// import styles (use webpack)\n\nconst megaMart = {\n  items: prvt_items,\n  nav_data: prvt_nav_data,\n  make_list_dom: prvt_make_list_dom,\n  make_item_display_dom: prvt_make_item_display_dom,\n  make_nav_display_dom: prvt_make_nav_display_dom,\n  add_item_to_cart: prvt_add_item_to_cart,\n  calc_cart_total: prvt_calc_cart_total\n};\n \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (megaMart);\n\n\n//# sourceURL=webpack://megamart/./src/mega-mart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;