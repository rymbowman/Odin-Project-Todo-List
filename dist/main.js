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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: #F4F4F4;\n}\n\n.header-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #1A3B5D;\n}\n\n#page-title {\n    font-size: 70px;\n    margin-top: 50px;\n    letter-spacing: 5px;\n    font-family: \"Kaushan Script\", cursive;\n    color: #50C878;\n    display: flex;\n    align-items: flex-end;\n}\n\n#page-headline {\n    font-size: 30px;\n    font-family: \"Poppins\", sans-serif;\n    text-align: center;\n}\n\n.todo-btn {\n    width: 125px;\n    border: none;\n    border-radius: 8px;\n    padding: 12px 20px;\n    cursor: pointer;\n    font-family: \"Poppins\", sans-serif;\n    background-color: #50C878;\n    color: white;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\n.todo-btn:hover {\n    background-color: #50C878;\n    transform: scale(1.05);\n}\n\n.todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    background-color: rgba(0, 0, 0, .1);\n    align-items: center;\n    padding: 20px 30px;\n    border-radius: 12px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);    \n    position: absolute;\n    z-index: 1;\n    margin-top: 10%;\n    width: 40%;\n}\n\n.form-inputs {\n    width: 100%;\n    border: none;\n    border-radius: 8px;\n    padding: 12px;\n    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n    text-align: center;\n    font-family: \"Poppins\", sans-serif;\n    transition: box-shadow 0.3s ease, transform 0.3s ease;\n}\n\n.form-inputs:focus{\n    outline: none;\n    box-shadow: 0 0 8px rgba(255, 111, 60, 0.6);\n    transform: scale(1.02);\n}\n\n#form-submit-btn {\n    border: none;\n    border-radius: 8px;\n    padding: 12px 20px;\n    cursor: pointer;\n    font-family: \"Poppins\", sans-serif;\n    background-color: #FF6F3C;\n    color: white;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\n#form-submit-btn:hover {\n    background-color: #FF573C;\n    transform: scale(1.05);\n}\n\n.new-post {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    width: 100%;\n    border-bottom: 1px solid black;\n    font-family: \"Poppins\", sans-serif;\n}\n\n.info-btn{\n    cursor: pointer;\n    filter: brightness(150%);\n    padding: 0;\n    border: none;\n    background: none;\n}\n\n.info-btn svg {\n    filter: inherit;\n    transition: filter .3s;\n}\n\n.info-btn:hover svg{\n    transform: scale(1.10);\n}\n\n.tasks-content {\n    display: flex;\n    width: 90%;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n    margin-top: 25px;\n    font-family: \"Poppins\", sans-serif;\n}\n\n.task-details-popup {\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 20px;\n    background-color: #1A3B5D;\n    border-radius: 12px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);\n    color: #fff;\n    font-family: \"Poppins\", sans-serif;\n    transition: transform 0.3s ease, opacity 0.3s ease;\n    opacity: 0;\n    animation: fadeIn 0.3s forwards;\n}\n\n@keyframes fadeIn {\n    to {\n        transform: translate(-50%, -50%);\n        opacity: 1;\n    }\n}\n\n#close-popup-btn {\n    margin-top: 15px;\n    padding: 10px 20px;\n    background-color: #FF6F3C;\n    border: none;\n    border-radius: 8px;\n    color: #fff;\n    cursor: pointer;\n    font-family: \"Poppins\", sans-serif;\n    transition: background-color 0.3s ease;\n}\n\n#close-popup-btn:hover {\n    background-color: #FF3C3C;\n}\n\n.incompleted-tasks-container{\n    width: 65%;\n    text-align: center;\n    font-family: \"Poppins\", sans-serif;\n}\n\n.completed-tasks-container {\n    width: 35%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    font-family: \"Poppins\", sans-serif;\n    border-left: 1px solid #1A3B5D;\n}\n\n#clear-completed-tasks-btn{\n    border: none;\n    border-radius: 8px;\n    padding: 12px 20px;\n    cursor: pointer;\n    font-family: \"Poppins\", sans-serif;\n    background-color: #FF6F3C;\n    color: white;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n    margin-top: 15px;\n}\n\n#clear-completed-tasks-btn:hover{\n    background-color: #FF573C;\n    transform: scale(1.05);\n}\n\n.completion-check {\n    background-color: blue;\n    border: 1px solid black;\n    cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-project-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-project-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-project-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-project-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-project-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-project-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-project-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-project-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-project-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-project-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/form-handler.js":
/*!*****************************!*\
  !*** ./src/form-handler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createInput: () => (/* binding */ createInput),\n/* harmony export */   displayForm: () => (/* binding */ displayForm),\n/* harmony export */   formSubmit: () => (/* binding */ formSubmit)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _render_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-document */ \"./src/render-document.js\");\n\n\n\nfunction createInput({\n  type,\n  name,\n  id,\n  placeholder = \"\",\n  maxLength,\n  min,\n  max,\n}) {\n  const input = document.createElement(\"input\");\n  input.setAttribute(\"type\", type);\n  input.setAttribute(\"name\", name);\n  input.setAttribute(\"id\", id);\n  if (placeholder) input.placeholder = placeholder;\n  if (maxLength) input.maxLength = maxLength;\n  if (min) input.min = min;\n  if (max) input.max = max;\n  input.classList.add(\"form-inputs\");\n  return input;\n}\n\nfunction displayForm() {\n  const headerContent = document.querySelector(\".header-content\");\n  //creates form\n  const todoForm = document.createElement(\"form\");\n  todoForm.classList.add(\"todo-form\");\n\n  const inputs = [\n    {\n      type: \"text\",\n      name: \"title\",\n      id: \"title-input\",\n      placeholder: \"Title\",\n      maxLength: 50,\n    },\n    { type: \"date\", name: \"due-date\", id: \"date-input\" },\n    {\n      type: \"number\",\n      name: \"priority\",\n      id: \"priority-input\",\n      placeholder: \"1(low) - 5(high)\",\n      maxLength: 1,\n      min: \"1\",\n      max: \"5\",\n    },\n    {\n      type: \"text\",\n      name: \"notes\",\n      id: \"notes-input\",\n      placeholder: \"Notes\",\n      maxLength: 250,\n    },\n  ];\n\n  inputs.forEach((inputItem) => {\n    const inputElement = createInput(inputItem);\n    todoForm.appendChild(inputElement);\n  });\n\n  const formSubmitBtn = createInput({\n    type: \"submit\",\n    name: \"form-submit\",\n    id: \"form-submit-btn\",\n    placeholder: \"Submit\",\n  });\n  todoForm.appendChild(formSubmitBtn);\n\n  todoForm.addEventListener(\"submit\", (event) => {\n    console.log(\"form was submitted\");\n    formSubmit(event, todoForm);\n  });\n\n  headerContent.appendChild(todoForm);\n}\nlet taskItems = [];\nfunction formSubmit(event, form) {\n  //prevents default action of form submitting before being able to acquire values of inputs\n  event.preventDefault();\n\n  //creates variables for each value from the form item\n  let titleValue = document.getElementById(\"title-input\").value;\n  let dueDateValue = document.getElementById(\"date-input\").value;\n  let priorityValue = parseInt(document.getElementById(\"priority-input\").value);\n  let notesValue = document.getElementById(\"notes-input\").value;\n\n  //sets variable 'newTask' equal to the object constructor for creating tasks\n  let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.CreateTask(\n    titleValue,\n    dueDateValue,\n    priorityValue,\n    notesValue\n  );\n\n  const incompletedTasks = document.querySelector(\"#incompleted-tasks\");\n  incompletedTasks.innerHTML = \"\";\n  taskItems.push(newTask);\n  taskItems.sort((a, b) => b.priority - a.priority);\n  console.log(taskItems);\n\n  taskItems.forEach((task) => (0,_render_document__WEBPACK_IMPORTED_MODULE_1__.renderNewTask)(task));\n\n  form.reset();\n  form.remove();\n  /*\n   */\n}\n\n\n//# sourceURL=webpack://odin-project-todo-list/./src/form-handler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _render_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-document */ \"./src/render-document.js\");\n/* harmony import */ var _form_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-handler.js */ \"./src/form-handler.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_render_document__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\n  (0,_render_document__WEBPACK_IMPORTED_MODULE_1__.renderBody)();\n});\n\n\n//# sourceURL=webpack://odin-project-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/render-document.js":
/*!********************************!*\
  !*** ./src/render-document.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   renderBody: () => (/* binding */ renderBody),\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader),\n/* harmony export */   renderNewTask: () => (/* binding */ renderNewTask),\n/* harmony export */   renderTaskDetails: () => (/* binding */ renderTaskDetails)\n/* harmony export */ });\n/* harmony import */ var _form_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-handler */ \"./src/form-handler.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nfunction renderHeader() {\n  const headerContent = document.querySelector(\".header-content\");\n  const pageTitle = document.createElement(\"h1\");\n  const svg =\n    '<svg width=\"110px\" height=\"110px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M18.2086 9.70558C18.5983 9.31421 18.5969 8.68105 18.2056 8.29137C17.8142 7.90169 17.1811 7.90305 16.7914 8.29442L11.0215 14.0892L7.70214 10.816C7.30888 10.4283 6.67573 10.4327 6.28796 10.8259C5.90018 11.2192 5.90461 11.8524 6.29787 12.2401L10.3258 16.212C10.7177 16.5985 11.3483 16.5956 11.7366 16.2056L18.2086 9.70558Z\" fill=\"#50C878\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H19.5C19.7761 4 20 4.22386 20 4.5V19.5C20 19.7761 19.7761 20 19.5 20H4.5C4.22386 20 4 19.7761 4 19.5V4.5Z\" fill=\"#50C878\"></path> </g></svg>';\n  pageTitle.setAttribute(\"id\", \"page-title\");\n  pageTitle.innerHTML = `${svg}CheckBox`;\n  headerContent.appendChild(pageTitle);\n\n  const pageHeadline = document.createElement(\"h4\");\n  pageHeadline.setAttribute(\"id\", \"page-headline\");\n  pageHeadline.innerHTML = \"Achieve More with Every Checkmark\";\n  headerContent.appendChild(pageHeadline);\n\n  const addTaskBtn = document.createElement(\"button\");\n  addTaskBtn.classList.add(\"todo-btn\");\n  addTaskBtn.innerHTML = \"Add Task\";\n  headerContent.appendChild(addTaskBtn);\n  addTaskBtn.addEventListener(\"click\", _form_handler__WEBPACK_IMPORTED_MODULE_0__.displayForm);\n}\n\nfunction renderBody() {\n  const newTaskContent = document.querySelector(\".tasks-content\");\n\n  const incompletedTasksContainer = document.createElement(\"div\");\n  incompletedTasksContainer.classList.add(\"incompleted-tasks-container\");\n  const incompletedTasksTitle = document.createElement(\"h2\");\n  incompletedTasksTitle.innerHTML = \"Tasks\";\n  const incompletedTasks = document.createElement(\"div\");\n  incompletedTasks.setAttribute(\"id\", \"incompleted-tasks\");\n  incompletedTasksContainer.appendChild(incompletedTasksTitle);\n  incompletedTasksContainer.appendChild(incompletedTasks);\n  newTaskContent.appendChild(incompletedTasksContainer);\n\n  const completedTasksContainer = document.createElement(\"div\");\n  completedTasksContainer.classList.add(\"completed-tasks-container\");\n  const completedTasksTitle = document.createElement(\"h2\");\n  completedTasksTitle.innerHTML = \"Complete!\";\n  const completedTasks = document.createElement(\"div\");\n  completedTasks.setAttribute(\"id\", \"completed-tasks\");\n  const clearCompletedTasksBtn = document.createElement(\"button\");\n  clearCompletedTasksBtn.setAttribute(\"id\", \"clear-completed-tasks-btn\");\n  clearCompletedTasksBtn.innerHTML = \"Clear\";\n  completedTasksContainer.appendChild(completedTasksTitle);\n  completedTasksContainer.appendChild(completedTasks);\n  completedTasksContainer.appendChild(clearCompletedTasksBtn);\n  newTaskContent.appendChild(completedTasksContainer);\n  clearCompletedTasksBtn.addEventListener(\"click\", clearCompletedTasks);\n}\n\nfunction renderNewTask(newTask) {\n  const infoIcon =\n    '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" style=\"fill: rgba(0, 0, 0, 1);filter: brightness(150%);transition: filter 0.3s;\"><path d=\"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z\"></path><path d=\"M11 11h2v6h-2zm0-4h2v2h-2z\"></path></svg>';\n  let newPost = document.createElement(\"div\");\n  newPost.classList.add(\"new-post\");\n  newPost.innerHTML = `<div>${newTask.title}</div>\n              <button type=\"button\" class=\"info-btn\">\n                  ${infoIcon}\n              </button>\n              <div>\n                  <input type=\"checkbox\" class=\"completion-check\">\n                  <label>Complete</label>\n              </div>`;\n  const incompletedTasks = document.querySelector(\"#incompleted-tasks\");\n  incompletedTasks.appendChild(newPost);\n  const taskInfoBtns = newPost.querySelector(\".info-btn\");\n  taskInfoBtns.addEventListener(\"click\", () => renderTaskDetails(newTask));\n\n  const checkBox = newPost.querySelector(\".completion-check\");\n  const completedTasks = document.querySelector(\"#completed-tasks\");\n  checkBox.addEventListener(\"change\", (event) => {\n    const taskElement = event.target.closest(\".new-post\"); // Get the task element\n    if (event.target.checked) {\n      console.log(\"Checked\");\n      incompletedTasks.removeChild(taskElement); // Remove from incomplete section\n      completedTasks.appendChild(taskElement); // Add to completed section\n    } else {\n      console.log(\"Not checked yet\");\n    }\n  });\n}\n\nfunction renderTaskDetails(newTask) {\n  let taskPopup = document.createElement(\"div\");\n  taskPopup.classList.add(\"task-details-popup\");\n  taskPopup.innerHTML = `\n            <div id=\"popup-content\">\n                <div>${newTask.dueDate}</div>\n                <div>${newTask.priority}</div>\n                <div>${newTask.notes}</div>\n                <button type=\"button\" id=\"close-popup-btn\">\n                    Close\n                </button>\n            </div>`;\n  document.body.appendChild(taskPopup);\n  taskPopup.style.display = \"flex\";\n  const closeTaskInfoBtn = taskPopup.querySelector(\"#close-popup-btn\");\n  closeTaskInfoBtn.addEventListener(\"click\", () => {\n    console.log(\"button clicked\");\n    taskPopup.style.display = \"none\";\n  });\n}\n\nfunction clearCompletedTasks() {\n  const completedTasks = document.querySelector(\"#completed-tasks\");\n  completedTasks.innerHTML = \"\";\n}\n\n\n//# sourceURL=webpack://odin-project-todo-list/./src/render-document.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateTask: () => (/* binding */ CreateTask)\n/* harmony export */ });\nfunction CreateTask(title, dueDate, priority, notes) {\n  this.title = title;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.notes = notes;\n}\n\n\n//# sourceURL=webpack://odin-project-todo-list/./src/task.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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