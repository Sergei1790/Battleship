/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sund-gameboard{
    margin: 0 auto;
    width: 500px;
    height: 500px;
}
.sund-cells{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}
.cell{
    border: 2px solid #369;
    margin: -1px;
    border-collapse: collapse;

}
.cell:nth-child(-n+10) {
    position: relative;
    &::after{
        content: '';
        position: absolute;
        bottom: 110%;
        left: 50%;
        transform: translateX(-50%);
    }
}
.cell:nth-child(10n+1) {
    position: relative;
    &::before{
        content: '';
        position: absolute;
        right: 110%;
        top: 50%;
        transform: translateY(-50%);
    }
}
.cell.shot{
    background-color: #369;
}
.cell:nth-child(1)::after{
    content: 'A';
}
.cell:nth-child(2)::after{
    content: 'B';
}
.cell:nth-child(3)::after{
    content: 'C';
}
.cell:nth-child(4)::after{
    content: 'D';
}
.cell:nth-child(5)::after{
    content: 'E';
}
.cell:nth-child(6)::after{
    content: 'F';
}
.cell:nth-child(7)::after{
    content: 'G';
}
.cell:nth-child(8)::after{
    content: 'H';
}
.cell:nth-child(9)::after{
    content: 'I';
}
.cell:nth-child(10)::after{
    content: 'J';
}
.cell:nth-child(1)::before{
    content: '1';
}
.cell:nth-child(11)::before{
    content: '2';
}
.cell:nth-child(21)::before{
    content: '3';
}
.cell:nth-child(31)::before{
    content: '4';
}
.cell:nth-child(41)::before{
    content: '5';
}
.cell:nth-child(51)::before{
    content: '6';
}
.cell:nth-child(61)::before{
    content: '7';
}
.cell:nth-child(71)::before{
    content: '8';
}
.cell:nth-child(81)::before{
    content: '9';
}
.cell:nth-child(91)::before{
    content: '10';
}
.ship{
    height: 50px;
    width: 150px;
    border: 2px solid red;

}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sCAAsC;AAC1C;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,yBAAyB;;AAE7B;AACA;IACI,kBAAkB;IAClB;QACI,WAAW;QACX,kBAAkB;QAClB,YAAY;QACZ,SAAS;QACT,2BAA2B;IAC/B;AACJ;AACA;IACI,kBAAkB;IAClB;QACI,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,QAAQ;QACR,2BAA2B;IAC/B;AACJ;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,qBAAqB;;AAEzB","sourcesContent":[".sund-gameboard{\r\n    margin: 0 auto;\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n.sund-cells{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n}\r\n.cell{\r\n    border: 2px solid #369;\r\n    margin: -1px;\r\n    border-collapse: collapse;\r\n\r\n}\r\n.cell:nth-child(-n+10) {\r\n    position: relative;\r\n    &::after{\r\n        content: '';\r\n        position: absolute;\r\n        bottom: 110%;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n    }\r\n}\r\n.cell:nth-child(10n+1) {\r\n    position: relative;\r\n    &::before{\r\n        content: '';\r\n        position: absolute;\r\n        right: 110%;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n}\r\n.cell.shot{\r\n    background-color: #369;\r\n}\r\n.cell:nth-child(1)::after{\r\n    content: 'A';\r\n}\r\n.cell:nth-child(2)::after{\r\n    content: 'B';\r\n}\r\n.cell:nth-child(3)::after{\r\n    content: 'C';\r\n}\r\n.cell:nth-child(4)::after{\r\n    content: 'D';\r\n}\r\n.cell:nth-child(5)::after{\r\n    content: 'E';\r\n}\r\n.cell:nth-child(6)::after{\r\n    content: 'F';\r\n}\r\n.cell:nth-child(7)::after{\r\n    content: 'G';\r\n}\r\n.cell:nth-child(8)::after{\r\n    content: 'H';\r\n}\r\n.cell:nth-child(9)::after{\r\n    content: 'I';\r\n}\r\n.cell:nth-child(10)::after{\r\n    content: 'J';\r\n}\r\n.cell:nth-child(1)::before{\r\n    content: '1';\r\n}\r\n.cell:nth-child(11)::before{\r\n    content: '2';\r\n}\r\n.cell:nth-child(21)::before{\r\n    content: '3';\r\n}\r\n.cell:nth-child(31)::before{\r\n    content: '4';\r\n}\r\n.cell:nth-child(41)::before{\r\n    content: '5';\r\n}\r\n.cell:nth-child(51)::before{\r\n    content: '6';\r\n}\r\n.cell:nth-child(61)::before{\r\n    content: '7';\r\n}\r\n.cell:nth-child(71)::before{\r\n    content: '8';\r\n}\r\n.cell:nth-child(81)::before{\r\n    content: '9';\r\n}\r\n.cell:nth-child(91)::before{\r\n    content: '10';\r\n}\r\n.ship{\r\n    height: 50px;\r\n    width: 150px;\r\n    border: 2px solid red;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/classes.js":
/*!***************************!*\
  !*** ./src/js/classes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship{
    constructor(size){
        if (size <= 0 || size > 4) {
            throw new Error('Ship size must be greater than 0 and less than 5');
        }
        this.size = size;
        this.hits = 0;
        this.sunk = false;
    }
    hit(){
        this.hits++;
        this.isSunk();
        console.log(this.isSunk());
    }
    isSunk(){
        this.sunk = (this.size === this.hits); 
        return this.sunk; 
    }
}

class Gameboard{
    constructor(){
        this.size = 10;
        this.board = [];
    }
    createBoard() {
        for (let row = 1; row <= 10; row++) {
            for (let col = 0; col < 10; col++) {
                this.board.push({
                    cell: {
                        col: String.fromCharCode(97 + col), // Column letter ('a' to 'j')
                        row: row.toString(), // Row number (1 to 10)
                        shot: false
                    }
                })
            }
        }
        console.log(this.board);
        return this.board;
    }
    receiveAttack(row, col){
        const attackedCell = this.board.find(cells => cells.cell.row === row && cells.cell.col === col);
        if (attackedCell) {
            attackedCell.cell.shot = true;
            console.log(`Attack received on cell:`, attackedCell);
        } else {
            console.log(`No cell found at row ${row} and column ${col}`);
        }
        return attackedCell;
    }
}


/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/js/classes.js");

// const gameboard = new Gameboard;
// console.log('asd', gameboard.createBoard()); 
const main = document.querySelector('main');
function displayBoard() {
    const gameboard = new _classes__WEBPACK_IMPORTED_MODULE_0__.Gameboard();

    const gameboardDisplay = document.createElement('div');
    const gameboardCells = document.createElement('div');


    gameboardDisplay.classList.add('sund-gameboard');
    gameboardCells.classList.add('sund-cells');

    gameboardDisplay.appendChild(gameboardCells);
    gameboard.createBoard().forEach((cells) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = cells.cell.row;
        cell.dataset.col = cells.cell.col;
        // cell.dataset.pos = JSON.stringify({
        //     col: cells.cell.col,
        //     row: cells.cell.row
        // });
        cell.addEventListener('click', (e) => {
            const row = e.target.dataset.row;
            const col = e.target.dataset.col;
            console.log(row, col);
            gameboard.receiveAttack(row, col);
            // Update UI to reflect the change
            e.target.classList.add('shot');
        });
        gameboardCells.appendChild(cell);
    })
    main.appendChild(gameboardDisplay);
}
// console.log(gameboard.board[9]);
displayBoard();

const draggableShip = document.querySelector('.ship[draggable="true"]');
draggableShip.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log("Drag started on element:", event.target.id);
});

const dropTargets = document.querySelectorAll('.cell');

function canPlaceShip(cell, ship, length, direction = 'horizontal'){
    const startRow = cell.dataset.row;
    const startCol = cell.dataset.col.charCodeAt(0) - 97; 
    for (let i = 0; i < length; i++) {
        const row = direction === 'horizontal' ? startRow : startRow + i;
        const col = direction === 'horizontal' ? startCol + i : startCol;
        const columnLetter = String.fromCharCode(97 + col); 

        const targetCell = document.querySelector(`.cell[data-row='${row}'][data-col='${columnLetter}']`);
        console.log('Checking target cell:', targetCell);


        if (targetCell) {
            targetCell.appendChild(ship); // Append the ship to each target cell
            targetCell.classList.add('occupied'); // Mark the cell as occupied
        }
        
    }
}

// Add event listeners to each drop target
dropTargets.forEach(cell => {
    // Allow the dragged element to be dropped by preventing the default behavior
    cell.addEventListener('dragenter', (event) => {
        const shipLength = parseInt(draggableShip.dataset.length);
        // Check if there is enough space to place the ship
        if (canPlaceShip(cell, draggableShip, shipLength)) {
            event.target.style.backgroundColor = '#f0f0f0';  // Highlight the cell when dragging over
        } else {
            event.target.style.backgroundColor = '#ffcccc'; // Red highlight if no space
        }
    });
    cell.addEventListener('dragover', (event) => {
        event.preventDefault(); // Necessary to allow dropping
        

    });
  
    // Handle when the dragged element is dropped
    cell.addEventListener('drop', (event) => {
      event.preventDefault(); // Prevent default to allow the drop
  
      // Retrieve the ID of the dragged element
      
      // Find the dragged element using its ID
      const draggedElementId = event.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(draggedElementId);
      
      // Append the dragged element to the current cell
      event.target.appendChild(draggedElement);
      
      // Reset the cell's style after the drop
      event.target.style.backgroundColor = '';
  
      console.log(`Dropped element with ID: ${draggedElementId} into cell`);
    });
  
    // Optional: Reset the background color when the dragging leaves the target
    cell.addEventListener('dragleave', (event) => {
      event.target.style.backgroundColor = '';
    });
  });
  

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
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/js/classes.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/js/dom.js");



// import './classes.js';
if (true) {
    console.log('Looks like we are in development mode!');
}

let ship = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
console.log('ship' ,ship);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBMEI7QUFDUTtBQUNoQjtBQUNsQjtBQUNBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvanMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zdW5kLWdhbWVib2FyZHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4uc3VuZC1jZWxsc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG59XHJcbi5jZWxse1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM2OTtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgtbisxMCkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTEwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgfVxyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgxMG4rMSkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTEwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuLmNlbGwuc2hvdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjk7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDEpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdBJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMik6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0InO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgzKTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnQyc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDQpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdEJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoNSk6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0UnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg2KTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnRic7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDcpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdHJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoOCk6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0gnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg5KTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnSSc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDEwKTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnSic7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnMSc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDExKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzInO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgyMSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICczJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMzEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnNCc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDQxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzUnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg1MSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICc2JztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoNjEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnNyc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDcxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzgnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg4MSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICc5JztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoOTEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnMTAnO1xyXG59XHJcbi5zaGlwe1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG5cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEI7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixTQUFTO1FBQ1QsMkJBQTJCO0lBQy9CO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQjtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFFBQVE7UUFDUiwyQkFBMkI7SUFDL0I7QUFDSjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjs7QUFFekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN1bmQtZ2FtZWJvYXJke1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG4uc3VuZC1jZWxsc3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcbi5jZWxse1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzY5O1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgtbisxMCkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDExMCU7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDEwbisxKSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgJjo6YmVmb3Jle1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMTEwJTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jZWxsLnNob3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjk7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxKTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdBJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDIpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0InO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoMyk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnQyc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg0KTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdEJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDUpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0UnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoNik6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnRic7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg3KTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdHJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDgpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0gnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoOSk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnSSc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxMCk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnSic7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnMSc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxMSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzInO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoMjEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICczJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDMxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnNCc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg0MSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzUnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoNTEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICc2JztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDYxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnNyc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg3MSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzgnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoODEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICc5JztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDkxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnMTAnO1xcclxcbn1cXHJcXG4uc2hpcHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgU2hpcHtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUpe1xyXG4gICAgICAgIGlmIChzaXplIDw9IDAgfHwgc2l6ZSA+IDQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIHNpemUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBhbmQgbGVzcyB0aGFuIDUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmhpdHMgPSAwO1xyXG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaGl0KCl7XHJcbiAgICAgICAgdGhpcy5oaXRzKys7XHJcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzU3VuaygpKTtcclxuICAgIH1cclxuICAgIGlzU3Vuaygpe1xyXG4gICAgICAgIHRoaXMuc3VuayA9ICh0aGlzLnNpemUgPT09IHRoaXMuaGl0cyk7IFxyXG4gICAgICAgIHJldHVybiB0aGlzLnN1bms7IFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJke1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNpemUgPSAxMDtcclxuICAgICAgICB0aGlzLmJvYXJkID0gW107XHJcbiAgICB9XHJcbiAgICBjcmVhdGVCb2FyZCgpIHtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAxOyByb3cgPD0gMTA7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGNvbCksIC8vIENvbHVtbiBsZXR0ZXIgKCdhJyB0byAnaicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogcm93LnRvU3RyaW5nKCksIC8vIFJvdyBudW1iZXIgKDEgdG8gMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3Q6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuICAgIHJlY2VpdmVBdHRhY2socm93LCBjb2wpe1xyXG4gICAgICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IHRoaXMuYm9hcmQuZmluZChjZWxscyA9PiBjZWxscy5jZWxsLnJvdyA9PT0gcm93ICYmIGNlbGxzLmNlbGwuY29sID09PSBjb2wpO1xyXG4gICAgICAgIGlmIChhdHRhY2tlZENlbGwpIHtcclxuICAgICAgICAgICAgYXR0YWNrZWRDZWxsLmNlbGwuc2hvdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBdHRhY2sgcmVjZWl2ZWQgb24gY2VsbDpgLCBhdHRhY2tlZENlbGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBObyBjZWxsIGZvdW5kIGF0IHJvdyAke3Jvd30gYW5kIGNvbHVtbiAke2NvbH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF0dGFja2VkQ2VsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSAnLi9jbGFzc2VzJztcclxuLy8gY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZDtcclxuLy8gY29uc29sZS5sb2coJ2FzZCcsIGdhbWVib2FyZC5jcmVhdGVCb2FyZCgpKTsgXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZCgpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRDZWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHJcbiAgICBnYW1lYm9hcmREaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3N1bmQtZ2FtZWJvYXJkJyk7XHJcbiAgICBnYW1lYm9hcmRDZWxscy5jbGFzc0xpc3QuYWRkKCdzdW5kLWNlbGxzJyk7XHJcblxyXG4gICAgZ2FtZWJvYXJkRGlzcGxheS5hcHBlbmRDaGlsZChnYW1lYm9hcmRDZWxscyk7XHJcbiAgICBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoKS5mb3JFYWNoKChjZWxscykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gY2VsbHMuY2VsbC5yb3c7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGNlbGxzLmNlbGwuY29sO1xyXG4gICAgICAgIC8vIGNlbGwuZGF0YXNldC5wb3MgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgLy8gICAgIGNvbDogY2VsbHMuY2VsbC5jb2wsXHJcbiAgICAgICAgLy8gICAgIHJvdzogY2VsbHMuY2VsbC5yb3dcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGUudGFyZ2V0LmRhdGFzZXQuY29sO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3csIGNvbCk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIFVJIHRvIHJlZmxlY3QgdGhlIGNoYW5nZVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaG90Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FtZWJvYXJkQ2VsbHMuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9KVxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChnYW1lYm9hcmREaXNwbGF5KTtcclxufVxyXG4vLyBjb25zb2xlLmxvZyhnYW1lYm9hcmQuYm9hcmRbOV0pO1xyXG5kaXNwbGF5Qm9hcmQoKTtcclxuXHJcbmNvbnN0IGRyYWdnYWJsZVNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcFtkcmFnZ2FibGU9XCJ0cnVlXCJdJyk7XHJcbmRyYWdnYWJsZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldC5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRyYWcgc3RhcnRlZCBvbiBlbGVtZW50OlwiLCBldmVudC50YXJnZXQuaWQpO1xyXG59KTtcclxuXHJcbmNvbnN0IGRyb3BUYXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuXHJcbmZ1bmN0aW9uIGNhblBsYWNlU2hpcChjZWxsLCBzaGlwLCBsZW5ndGgsIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJyl7XHJcbiAgICBjb25zdCBzdGFydFJvdyA9IGNlbGwuZGF0YXNldC5yb3c7XHJcbiAgICBjb25zdCBzdGFydENvbCA9IGNlbGwuZGF0YXNldC5jb2wuY2hhckNvZGVBdCgwKSAtIDk3OyBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/IHN0YXJ0Um93IDogc3RhcnRSb3cgKyBpO1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc3RhcnRDb2wgKyBpIDogc3RhcnRDb2w7XHJcbiAgICAgICAgY29uc3QgY29sdW1uTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGNvbCk7IFxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbHVtbkxldHRlcn0nXWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGVja2luZyB0YXJnZXQgY2VsbDonLCB0YXJnZXRDZWxsKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRDZWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldENlbGwuYXBwZW5kQ2hpbGQoc2hpcCk7IC8vIEFwcGVuZCB0aGUgc2hpcCB0byBlYWNoIHRhcmdldCBjZWxsXHJcbiAgICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTsgLy8gTWFyayB0aGUgY2VsbCBhcyBvY2N1cGllZFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byBlYWNoIGRyb3AgdGFyZ2V0XHJcbmRyb3BUYXJnZXRzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAvLyBBbGxvdyB0aGUgZHJhZ2dlZCBlbGVtZW50IHRvIGJlIGRyb3BwZWQgYnkgcHJldmVudGluZyB0aGUgZGVmYXVsdCBiZWhhdmlvclxyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gcGFyc2VJbnQoZHJhZ2dhYmxlU2hpcC5kYXRhc2V0Lmxlbmd0aCk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgZW5vdWdoIHNwYWNlIHRvIHBsYWNlIHRoZSBzaGlwXHJcbiAgICAgICAgaWYgKGNhblBsYWNlU2hpcChjZWxsLCBkcmFnZ2FibGVTaGlwLCBzaGlwTGVuZ3RoKSkge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMGYwZjAnOyAgLy8gSGlnaGxpZ2h0IHRoZSBjZWxsIHdoZW4gZHJhZ2dpbmcgb3ZlclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmY2NjYyc7IC8vIFJlZCBoaWdobGlnaHQgaWYgbm8gc3BhY2VcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWNlc3NhcnkgdG8gYWxsb3cgZHJvcHBpbmdcclxuICAgICAgICBcclxuXHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIEhhbmRsZSB3aGVuIHRoZSBkcmFnZ2VkIGVsZW1lbnQgaXMgZHJvcHBlZFxyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyB0aGUgZHJvcFxyXG4gIFxyXG4gICAgICAvLyBSZXRyaWV2ZSB0aGUgSUQgb2YgdGhlIGRyYWdnZWQgZWxlbWVudFxyXG4gICAgICBcclxuICAgICAgLy8gRmluZCB0aGUgZHJhZ2dlZCBlbGVtZW50IHVzaW5nIGl0cyBJRFxyXG4gICAgICBjb25zdCBkcmFnZ2VkRWxlbWVudElkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcclxuICAgICAgY29uc3QgZHJhZ2dlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkRWxlbWVudElkKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFwcGVuZCB0aGUgZHJhZ2dlZCBlbGVtZW50IHRvIHRoZSBjdXJyZW50IGNlbGxcclxuICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnZWRFbGVtZW50KTtcclxuICAgICAgXHJcbiAgICAgIC8vIFJlc2V0IHRoZSBjZWxsJ3Mgc3R5bGUgYWZ0ZXIgdGhlIGRyb3BcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyhgRHJvcHBlZCBlbGVtZW50IHdpdGggSUQ6ICR7ZHJhZ2dlZEVsZW1lbnRJZH0gaW50byBjZWxsYCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIE9wdGlvbmFsOiBSZXNldCB0aGUgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBkcmFnZ2luZyBsZWF2ZXMgdGhlIHRhcmdldFxyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IHtTaGlwfSBmcm9tICcuL2NsYXNzZXMuanMnO1xyXG5pbXBvcnQgJy4vZG9tLmpzJztcclxuLy8gaW1wb3J0ICcuL2NsYXNzZXMuanMnO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgY29uc29sZS5sb2coJ0xvb2tzIGxpa2Ugd2UgYXJlIGluIGRldmVsb3BtZW50IG1vZGUhJyk7XHJcbn1cclxuXHJcbmxldCBzaGlwID0gbmV3IFNoaXAoMylcclxuY29uc29sZS5sb2coJ3NoaXAnICxzaGlwKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9