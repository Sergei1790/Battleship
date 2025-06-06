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
    border-right: 0;
    border-bottom: 0;
    margin: -1px;
    border-collapse: collapse;
    position: relative;
    &:nth-child(10n){
        border-right: 2px solid #369;
    }
    &:nth-last-child(-n+10){
        border-bottom: 2px solid #369;
    }
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
    display: flex;
    &.horizontal{
        .ship-part {
            border-right: 0;
            &:last-child{
                border-right: 2px solid red;
            }
        }
    }
    &.vertical{
        flex-direction: column;
        .ship-part {
            border-bottom: 0;
            &:last-child{
                border-bottom: 2px solid red;
            }
        }
    }

    &[data-length="3"]{
        /* width: 148px; */
    }

}

.ship-part {
    width: 50px;
    height: 50px;
    border: 2px solid red;
}
.occupied {
    background-color: rgb(224, 226, 229) !important;
    &.ship{
        background-color: #369 !important;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sCAAsC;AAC1C;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB;QACI,4BAA4B;IAChC;IACA;QACI,6BAA6B;IACjC;AACJ;AACA;IACI,kBAAkB;IAClB;QACI,WAAW;QACX,kBAAkB;QAClB,YAAY;QACZ,SAAS;QACT,2BAA2B;IAC/B;AACJ;AACA;IACI,kBAAkB;IAClB;QACI,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,QAAQ;QACR,2BAA2B;IAC/B;AACJ;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb;QACI;YACI,eAAe;YACf;gBACI,2BAA2B;YAC/B;QACJ;IACJ;IACA;QACI,sBAAsB;QACtB;YACI,gBAAgB;YAChB;gBACI,4BAA4B;YAChC;QACJ;IACJ;;IAEA;QACI,kBAAkB;IACtB;;AAEJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,+CAA+C;IAC/C;QACI,iCAAiC;IACrC;AACJ","sourcesContent":[".sund-gameboard{\r\n    margin: 0 auto;\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n.sund-cells{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n}\r\n.cell{\r\n    border: 2px solid #369;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n    margin: -1px;\r\n    border-collapse: collapse;\r\n    position: relative;\r\n    &:nth-child(10n){\r\n        border-right: 2px solid #369;\r\n    }\r\n    &:nth-last-child(-n+10){\r\n        border-bottom: 2px solid #369;\r\n    }\r\n}\r\n.cell:nth-child(-n+10) {\r\n    position: relative;\r\n    &::after{\r\n        content: '';\r\n        position: absolute;\r\n        bottom: 110%;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n    }\r\n}\r\n.cell:nth-child(10n+1) {\r\n    position: relative;\r\n    &::before{\r\n        content: '';\r\n        position: absolute;\r\n        right: 110%;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n}\r\n.cell.shot{\r\n    background-color: #369;\r\n}\r\n.cell:nth-child(1)::after{\r\n    content: 'A';\r\n}\r\n.cell:nth-child(2)::after{\r\n    content: 'B';\r\n}\r\n.cell:nth-child(3)::after{\r\n    content: 'C';\r\n}\r\n.cell:nth-child(4)::after{\r\n    content: 'D';\r\n}\r\n.cell:nth-child(5)::after{\r\n    content: 'E';\r\n}\r\n.cell:nth-child(6)::after{\r\n    content: 'F';\r\n}\r\n.cell:nth-child(7)::after{\r\n    content: 'G';\r\n}\r\n.cell:nth-child(8)::after{\r\n    content: 'H';\r\n}\r\n.cell:nth-child(9)::after{\r\n    content: 'I';\r\n}\r\n.cell:nth-child(10)::after{\r\n    content: 'J';\r\n}\r\n.cell:nth-child(1)::before{\r\n    content: '1';\r\n}\r\n.cell:nth-child(11)::before{\r\n    content: '2';\r\n}\r\n.cell:nth-child(21)::before{\r\n    content: '3';\r\n}\r\n.cell:nth-child(31)::before{\r\n    content: '4';\r\n}\r\n.cell:nth-child(41)::before{\r\n    content: '5';\r\n}\r\n.cell:nth-child(51)::before{\r\n    content: '6';\r\n}\r\n.cell:nth-child(61)::before{\r\n    content: '7';\r\n}\r\n.cell:nth-child(71)::before{\r\n    content: '8';\r\n}\r\n.cell:nth-child(81)::before{\r\n    content: '9';\r\n}\r\n.cell:nth-child(91)::before{\r\n    content: '10';\r\n}\r\n.ship{\r\n    display: flex;\r\n    &.horizontal{\r\n        .ship-part {\r\n            border-right: 0;\r\n            &:last-child{\r\n                border-right: 2px solid red;\r\n            }\r\n        }\r\n    }\r\n    &.vertical{\r\n        flex-direction: column;\r\n        .ship-part {\r\n            border-bottom: 0;\r\n            &:last-child{\r\n                border-bottom: 2px solid red;\r\n            }\r\n        }\r\n    }\r\n\r\n    &[data-length=\"3\"]{\r\n        /* width: 148px; */\r\n    }\r\n\r\n}\r\n\r\n.ship-part {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: 2px solid red;\r\n}\r\n.occupied {\r\n    background-color: rgb(224, 226, 229) !important;\r\n    &.ship{\r\n        background-color: #369 !important;\r\n    }\r\n}"],"sourceRoot":""}]);
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
            for (let col = 0; col <= 9; col++) {
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
    });
    main.appendChild(gameboardDisplay);
}
// console.log(gameboard.board[9]);
displayBoard();

let draggableShip = null;
let startingPart = null;
let direction = 'horizontal';

function rotateShip() {
    document.querySelector('.ship').classList.remove(direction);
    direction = (direction === 'horizontal') ? 'vertical' : 'horizontal';
    document.querySelector('.ship').classList.add(direction);
    console.log('New direction:', direction);
}

document.querySelector('#rotate').addEventListener('click', rotateShip)

document.querySelectorAll('.ship[draggable="true"]').forEach((ship) => {
    ship.querySelectorAll('.ship-part').forEach((part) => {
        part.addEventListener('mousedown', (event) => {
            startingPart = +event.target.dataset.part;
        });
    });
    ship.addEventListener('dragstart', () => {
        console.log('Drag started from part:', startingPart);
        draggableShip = ship;
    });
    ship.addEventListener('dragend', () => {
        draggableShip = null;
        startingPart = null;
    });
});

function getCellsForShip(cell, length, direction, startingPart) {
    const startRow = +cell.dataset.row;
    const startCol = cell.dataset.col.charCodeAt(0) - 97;
    const cells = [];

    for (let i = 0; i < length; i++) {
        // Calculate the offset from the drop cell, so part at startingPart aligns with drop cell
        const offset = i - startingPart;

        const row = direction === 'horizontal' ? startRow : startRow + offset;
        const col = direction === 'horizontal' ? startCol + offset : startCol;

        const rowNum = row.toString();
        const columnLetter = String.fromCharCode(97 + col);

        const targetCell = document.querySelector(`.cell[data-row='${rowNum}'][data-col='${columnLetter}']`);

        if (targetCell) {
            cells.push(targetCell);
        }
    }
    return cells;
}

function markShipAdjacentCels(shipCells) {
    console.log('shipCells', shipCells);
    shipCells.forEach((cell) => {
        const startRow = +cell.dataset.row;
        const startCol = cell.dataset.col.charCodeAt(0) - 97;
        for (let r = -1; r < 2; r++) {
            for (let c = -1; c < 2; c++) {
                if (r === 0 && c === 0) continue; // skip the cell itself

                const adjacentRow = startRow + r;
                let adjacentCol = startCol + c;

                // Ensure col stays within a-z (assuming a 10x10 board, a-j)
                if (adjacentCol < 0 || adjacentCol > 9 || adjacentRow < 1 || adjacentRow > 10) continue;

                adjacentCol = String.fromCharCode(97 + adjacentCol);

                let adjacentCell = document.querySelector(`.cell[data-row='${adjacentRow}'][data-col='${adjacentCol}']`);
                adjacentCell.classList.add('occupied');
            }
        }
    });
}

function canPlaceShip(cell, length, direction, startingPart) {
    const cells = getCellsForShip(cell, length, direction, startingPart);
    if (!cells || cells.length !== length) return false; // invalid placement (out of board)
    return !cells.some((cell) => cell.classList.contains('occupied'));
}

const dropTargets = document.querySelectorAll('.cell');

let lastHighlightedCells = [];

// Add event listeners to each drop target
dropTargets.forEach((cell) => {
    // Allow the dragged element to be dropped by preventing the default behavior
    cell.addEventListener('dragover', (event) => {
        event.preventDefault();
        if (!draggableShip || startingPart === null) return; // safety check

        lastHighlightedCells.forEach((cellEl) => {
            cellEl.style.backgroundColor = '';
        });
        const shipLength = parseInt(draggableShip.dataset.length);

        const cells = getCellsForShip(cell, shipLength, direction, startingPart);
        const isValid = cells.length === shipLength && canPlaceShip(cell, shipLength, direction, startingPart);

        cells.forEach((cellEl) => {
            cellEl.style.backgroundColor = isValid ? '#f0f0f0' : '#ffcccc';
        });
        lastHighlightedCells = cells;
    });

    // Handle when the dragged element is dropped
    cell.addEventListener('drop', (event) => {
        event.preventDefault(); // Prevent default to allow the drop

        const shipLength = parseInt(draggableShip.dataset.length);
        const isValid = lastHighlightedCells.length === shipLength && canPlaceShip(cell, shipLength, direction, startingPart);
        lastHighlightedCells.forEach((cellEl) => {
            cellEl.style.backgroundColor = '';
        });
        if (!isValid) {
            console.log('Invalid drop - ship placement not allowed here.');
            return;
        }

        let placedShip = lastHighlightedCells;
        console.log(placedShip);
        placedShip.forEach((cellEl) => {
            cellEl.classList.add('ship', 'occupied');
        });
        markShipAdjacentCels(placedShip);

        // Retrieve the ID of th dragged element

        // // Find the dragged element using its ID
        // const draggedElementId = event.dataTransfer.getData('text/plain');
        // const draggedElement = document.getElementById(draggedElementId);

        // // Append the dragged element to the current cell
        // event.target.appendChild(draggedElement);

        // // Reset the cell's style after the drop
        // event.target.style.backgroundColor = '';

        // console.log(`Dropped element with ID: ${draggedElementId} into cell`);
    });

    // Optional: Reset the background color when the dragging leaves the target
    cell.addEventListener('dragleave', () => {
        lastHighlightedCells.forEach((cellEl) => {
            cellEl.style.backgroundColor = '';
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBMEI7QUFDUTtBQUNoQjtBQUNsQjtBQUNBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvanMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zdW5kLWdhbWVib2FyZHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4uc3VuZC1jZWxsc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG59XHJcbi5jZWxse1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM2OTtcclxuICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpudGgtY2hpbGQoMTBuKXtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMzY5O1xyXG4gICAgfVxyXG4gICAgJjpudGgtbGFzdC1jaGlsZCgtbisxMCl7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNjk7XHJcbiAgICB9XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKC1uKzEwKSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDEwbisxKSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMTAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxufVxyXG4uY2VsbC5zaG90e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2OTtcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMSk6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0EnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgyKTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnQic7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDMpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdDJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoNCk6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0QnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg1KTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnRSc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDYpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdGJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoNyk6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0cnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg4KTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnSCc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDkpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdJJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMTApOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdKJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcxJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMTEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnMic7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDIxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzMnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgzMSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICc0JztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoNDEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnNSc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDUxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzYnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg2MSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICc3JztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoNzEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnOCc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDgxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzknO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg5MSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcxMCc7XHJcbn1cclxuLnNoaXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgJi5ob3Jpem9udGFse1xyXG4gICAgICAgIC5zaGlwLXBhcnQge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYudmVydGljYWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuc2hpcC1wYXJ0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmW2RhdGEtbGVuZ3RoPVwiM1wiXXtcclxuICAgICAgICAvKiB3aWR0aDogMTQ4cHg7ICovXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uc2hpcC1wYXJ0IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG59XHJcbi5vY2N1cGllZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjYsIDIyOSkgIWltcG9ydGFudDtcclxuICAgICYuc2hpcHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osU0FBUztRQUNULDJCQUEyQjtJQUMvQjtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEI7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxRQUFRO1FBQ1IsMkJBQTJCO0lBQy9CO0FBQ0o7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiO1FBQ0k7WUFDSSxlQUFlO1lBQ2Y7Z0JBQ0ksMkJBQTJCO1lBQy9CO1FBQ0o7SUFDSjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCO1lBQ0ksZ0JBQWdCO1lBQ2hCO2dCQUNJLDRCQUE0QjtZQUNoQztRQUNKO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0FBRUo7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN1bmQtZ2FtZWJvYXJke1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG4uc3VuZC1jZWxsc3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcbi5jZWxse1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzY5O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbjogLTFweDtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAmOm50aC1jaGlsZCgxMG4pe1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzM2OTtcXHJcXG4gICAgfVxcclxcbiAgICAmOm50aC1sYXN0LWNoaWxkKC1uKzEwKXtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzY5O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgtbisxMCkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDExMCU7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDEwbisxKSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgJjo6YmVmb3Jle1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMTEwJTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jZWxsLnNob3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjk7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxKTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdBJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDIpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0InO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoMyk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnQyc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg0KTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdEJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDUpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0UnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoNik6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnRic7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg3KTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdHJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDgpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0gnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoOSk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnSSc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxMCk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnSic7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnMSc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxMSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzInO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoMjEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICczJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDMxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnNCc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg0MSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzUnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoNTEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICc2JztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDYxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnNyc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg3MSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzgnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoODEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICc5JztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDkxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnMTAnO1xcclxcbn1cXHJcXG4uc2hpcHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgJi5ob3Jpem9udGFse1xcclxcbiAgICAgICAgLnNoaXAtcGFydCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmLnZlcnRpY2Fse1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIC5zaGlwLXBhcnQge1xcclxcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmW2RhdGEtbGVuZ3RoPVxcXCIzXFxcIl17XFxyXFxuICAgICAgICAvKiB3aWR0aDogMTQ4cHg7ICovXFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGFydCB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuLm9jY3VwaWVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI2LCAyMjkpICFpbXBvcnRhbnQ7XFxyXFxuICAgICYuc2hpcHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjkgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBTaGlwe1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSl7XHJcbiAgICAgICAgaWYgKHNpemUgPD0gMCB8fCBzaXplID4gNCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgc2l6ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIGFuZCBsZXNzIHRoYW4gNScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XHJcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBoaXQoKXtcclxuICAgICAgICB0aGlzLmhpdHMrKztcclxuICAgICAgICB0aGlzLmlzU3VuaygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNTdW5rKCkpO1xyXG4gICAgfVxyXG4gICAgaXNTdW5rKCl7XHJcbiAgICAgICAgdGhpcy5zdW5rID0gKHRoaXMuc2l6ZSA9PT0gdGhpcy5oaXRzKTsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VuazsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDEwO1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDE7IHJvdyA8PSAxMDsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDw9IDk7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgY29sKSwgLy8gQ29sdW1uIGxldHRlciAoJ2EnIHRvICdqJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiByb3cudG9TdHJpbmcoKSwgLy8gUm93IG51bWJlciAoMSB0byAxMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG4gICAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCl7XHJcbiAgICAgICAgY29uc3QgYXR0YWNrZWRDZWxsID0gdGhpcy5ib2FyZC5maW5kKGNlbGxzID0+IGNlbGxzLmNlbGwucm93ID09PSByb3cgJiYgY2VsbHMuY2VsbC5jb2wgPT09IGNvbCk7XHJcbiAgICAgICAgaWYgKGF0dGFja2VkQ2VsbCkge1xyXG4gICAgICAgICAgICBhdHRhY2tlZENlbGwuY2VsbC5zaG90ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEF0dGFjayByZWNlaXZlZCBvbiBjZWxsOmAsIGF0dGFja2VkQ2VsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYE5vIGNlbGwgZm91bmQgYXQgcm93ICR7cm93fSBhbmQgY29sdW1uICR7Y29sfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXR0YWNrZWRDZWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7R2FtZWJvYXJkfSBmcm9tICcuL2NsYXNzZXMnO1xyXG4vLyBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xyXG4vLyBjb25zb2xlLmxvZygnYXNkJywgZ2FtZWJvYXJkLmNyZWF0ZUJvYXJkKCkpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoKSB7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ2VsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBnYW1lYm9hcmREaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3N1bmQtZ2FtZWJvYXJkJyk7XHJcbiAgICBnYW1lYm9hcmRDZWxscy5jbGFzc0xpc3QuYWRkKCdzdW5kLWNlbGxzJyk7XHJcblxyXG4gICAgZ2FtZWJvYXJkRGlzcGxheS5hcHBlbmRDaGlsZChnYW1lYm9hcmRDZWxscyk7XHJcbiAgICBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoKS5mb3JFYWNoKChjZWxscykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gY2VsbHMuY2VsbC5yb3c7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGNlbGxzLmNlbGwuY29sO1xyXG4gICAgICAgIC8vIGNlbGwuZGF0YXNldC5wb3MgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgLy8gICAgIGNvbDogY2VsbHMuY2VsbC5jb2wsXHJcbiAgICAgICAgLy8gICAgIHJvdzogY2VsbHMuY2VsbC5yb3dcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGUudGFyZ2V0LmRhdGFzZXQuY29sO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3csIGNvbCk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIFVJIHRvIHJlZmxlY3QgdGhlIGNoYW5nZVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaG90Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FtZWJvYXJkQ2VsbHMuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9KTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkRGlzcGxheSk7XHJcbn1cclxuLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkLmJvYXJkWzldKTtcclxuZGlzcGxheUJvYXJkKCk7XHJcblxyXG5sZXQgZHJhZ2dhYmxlU2hpcCA9IG51bGw7XHJcbmxldCBzdGFydGluZ1BhcnQgPSBudWxsO1xyXG5sZXQgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG5cclxuZnVuY3Rpb24gcm90YXRlU2hpcCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwJykuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb24pO1xyXG4gICAgZGlyZWN0aW9uID0gKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcCcpLmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uKTtcclxuICAgIGNvbnNvbGUubG9nKCdOZXcgZGlyZWN0aW9uOicsIGRpcmVjdGlvbik7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXApXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcFtkcmFnZ2FibGU9XCJ0cnVlXCJdJykuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgc2hpcC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1wYXJ0JykuZm9yRWFjaCgocGFydCkgPT4ge1xyXG4gICAgICAgIHBhcnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0aW5nUGFydCA9ICtldmVudC50YXJnZXQuZGF0YXNldC5wYXJ0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRHJhZyBzdGFydGVkIGZyb20gcGFydDonLCBzdGFydGluZ1BhcnQpO1xyXG4gICAgICAgIGRyYWdnYWJsZVNoaXAgPSBzaGlwO1xyXG4gICAgfSk7XHJcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgZHJhZ2dhYmxlU2hpcCA9IG51bGw7XHJcbiAgICAgICAgc3RhcnRpbmdQYXJ0ID0gbnVsbDtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldENlbGxzRm9yU2hpcChjZWxsLCBsZW5ndGgsIGRpcmVjdGlvbiwgc3RhcnRpbmdQYXJ0KSB7XHJcbiAgICBjb25zdCBzdGFydFJvdyA9ICtjZWxsLmRhdGFzZXQucm93O1xyXG4gICAgY29uc3Qgc3RhcnRDb2wgPSBjZWxsLmRhdGFzZXQuY29sLmNoYXJDb2RlQXQoMCkgLSA5NztcclxuICAgIGNvbnN0IGNlbGxzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgb2Zmc2V0IGZyb20gdGhlIGRyb3AgY2VsbCwgc28gcGFydCBhdCBzdGFydGluZ1BhcnQgYWxpZ25zIHdpdGggZHJvcCBjZWxsXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gaSAtIHN0YXJ0aW5nUGFydDtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93ID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBzdGFydFJvdyA6IHN0YXJ0Um93ICsgb2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc3RhcnRDb2wgKyBvZmZzZXQgOiBzdGFydENvbDtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93TnVtID0gcm93LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgY29sdW1uTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGNvbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXJvdz0nJHtyb3dOdW19J11bZGF0YS1jb2w9JyR7Y29sdW1uTGV0dGVyfSddYCk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRDZWxsKSB7XHJcbiAgICAgICAgICAgIGNlbGxzLnB1c2godGFyZ2V0Q2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNlbGxzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrU2hpcEFkamFjZW50Q2VscyhzaGlwQ2VsbHMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzaGlwQ2VsbHMnLCBzaGlwQ2VsbHMpO1xyXG4gICAgc2hpcENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydFJvdyA9ICtjZWxsLmRhdGFzZXQucm93O1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gY2VsbC5kYXRhc2V0LmNvbC5jaGFyQ29kZUF0KDApIC0gOTc7XHJcbiAgICAgICAgZm9yIChsZXQgciA9IC0xOyByIDwgMjsgcisrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAtMTsgYyA8IDI7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgPT09IDAgJiYgYyA9PT0gMCkgY29udGludWU7IC8vIHNraXAgdGhlIGNlbGwgaXRzZWxmXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRqYWNlbnRSb3cgPSBzdGFydFJvdyArIHI7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRqYWNlbnRDb2wgPSBzdGFydENvbCArIGM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIGNvbCBzdGF5cyB3aXRoaW4gYS16IChhc3N1bWluZyBhIDEweDEwIGJvYXJkLCBhLWopXHJcbiAgICAgICAgICAgICAgICBpZiAoYWRqYWNlbnRDb2wgPCAwIHx8IGFkamFjZW50Q29sID4gOSB8fCBhZGphY2VudFJvdyA8IDEgfHwgYWRqYWNlbnRSb3cgPiAxMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDb2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgYWRqYWNlbnRDb2wpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXJvdz0nJHthZGphY2VudFJvd30nXVtkYXRhLWNvbD0nJHthZGphY2VudENvbH0nXWApO1xyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuUGxhY2VTaGlwKGNlbGwsIGxlbmd0aCwgZGlyZWN0aW9uLCBzdGFydGluZ1BhcnQpIHtcclxuICAgIGNvbnN0IGNlbGxzID0gZ2V0Q2VsbHNGb3JTaGlwKGNlbGwsIGxlbmd0aCwgZGlyZWN0aW9uLCBzdGFydGluZ1BhcnQpO1xyXG4gICAgaWYgKCFjZWxscyB8fCBjZWxscy5sZW5ndGggIT09IGxlbmd0aCkgcmV0dXJuIGZhbHNlOyAvLyBpbnZhbGlkIHBsYWNlbWVudCAob3V0IG9mIGJvYXJkKVxyXG4gICAgcmV0dXJuICFjZWxscy5zb21lKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5jb250YWlucygnb2NjdXBpZWQnKSk7XHJcbn1cclxuXHJcbmNvbnN0IGRyb3BUYXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuXHJcbmxldCBsYXN0SGlnaGxpZ2h0ZWRDZWxscyA9IFtdO1xyXG5cclxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byBlYWNoIGRyb3AgdGFyZ2V0XHJcbmRyb3BUYXJnZXRzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgIC8vIEFsbG93IHRoZSBkcmFnZ2VkIGVsZW1lbnQgdG8gYmUgZHJvcHBlZCBieSBwcmV2ZW50aW5nIHRoZSBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIWRyYWdnYWJsZVNoaXAgfHwgc3RhcnRpbmdQYXJ0ID09PSBudWxsKSByZXR1cm47IC8vIHNhZmV0eSBjaGVja1xyXG5cclxuICAgICAgICBsYXN0SGlnaGxpZ2h0ZWRDZWxscy5mb3JFYWNoKChjZWxsRWwpID0+IHtcclxuICAgICAgICAgICAgY2VsbEVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBwYXJzZUludChkcmFnZ2FibGVTaGlwLmRhdGFzZXQubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSBnZXRDZWxsc0ZvclNoaXAoY2VsbCwgc2hpcExlbmd0aCwgZGlyZWN0aW9uLCBzdGFydGluZ1BhcnQpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBjZWxscy5sZW5ndGggPT09IHNoaXBMZW5ndGggJiYgY2FuUGxhY2VTaGlwKGNlbGwsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbiwgc3RhcnRpbmdQYXJ0KTtcclxuXHJcbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbEVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxFbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpc1ZhbGlkID8gJyNmMGYwZjAnIDogJyNmZmNjY2MnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxhc3RIaWdobGlnaHRlZENlbGxzID0gY2VsbHM7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIYW5kbGUgd2hlbiB0aGUgZHJhZ2dlZCBlbGVtZW50IGlzIGRyb3BwZWRcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyB0aGUgZHJvcFxyXG5cclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gcGFyc2VJbnQoZHJhZ2dhYmxlU2hpcC5kYXRhc2V0Lmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGxhc3RIaWdobGlnaHRlZENlbGxzLmxlbmd0aCA9PT0gc2hpcExlbmd0aCAmJiBjYW5QbGFjZVNoaXAoY2VsbCwgc2hpcExlbmd0aCwgZGlyZWN0aW9uLCBzdGFydGluZ1BhcnQpO1xyXG4gICAgICAgIGxhc3RIaWdobGlnaHRlZENlbGxzLmZvckVhY2goKGNlbGxFbCkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsRWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIGRyb3AgLSBzaGlwIHBsYWNlbWVudCBub3QgYWxsb3dlZCBoZXJlLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGxhY2VkU2hpcCA9IGxhc3RIaWdobGlnaHRlZENlbGxzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYWNlZFNoaXApO1xyXG4gICAgICAgIHBsYWNlZFNoaXAuZm9yRWFjaCgoY2VsbEVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgJ29jY3VwaWVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWFya1NoaXBBZGphY2VudENlbHMocGxhY2VkU2hpcCk7XHJcblxyXG4gICAgICAgIC8vIFJldHJpZXZlIHRoZSBJRCBvZiB0aCBkcmFnZ2VkIGVsZW1lbnRcclxuXHJcbiAgICAgICAgLy8gLy8gRmluZCB0aGUgZHJhZ2dlZCBlbGVtZW50IHVzaW5nIGl0cyBJRFxyXG4gICAgICAgIC8vIGNvbnN0IGRyYWdnZWRFbGVtZW50SWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xyXG4gICAgICAgIC8vIGNvbnN0IGRyYWdnZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dlZEVsZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIC8vIC8vIEFwcGVuZCB0aGUgZHJhZ2dlZCBlbGVtZW50IHRvIHRoZSBjdXJyZW50IGNlbGxcclxuICAgICAgICAvLyBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ2dlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyAvLyBSZXNldCB0aGUgY2VsbCdzIHN0eWxlIGFmdGVyIHRoZSBkcm9wXHJcbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRHJvcHBlZCBlbGVtZW50IHdpdGggSUQ6ICR7ZHJhZ2dlZEVsZW1lbnRJZH0gaW50byBjZWxsYCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcHRpb25hbDogUmVzZXQgdGhlIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgZHJhZ2dpbmcgbGVhdmVzIHRoZSB0YXJnZXRcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGxhc3RIaWdobGlnaHRlZENlbGxzLmZvckVhY2goKGNlbGxFbCkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsRWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7U2hpcH0gZnJvbSAnLi9jbGFzc2VzLmpzJztcclxuaW1wb3J0ICcuL2RvbS5qcyc7XHJcbi8vIGltcG9ydCAnLi9jbGFzc2VzLmpzJztcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGNvbnNvbGUubG9nKCdMb29rcyBsaWtlIHdlIGFyZSBpbiBkZXZlbG9wbWVudCBtb2RlIScpO1xyXG59XHJcblxyXG5sZXQgc2hpcCA9IG5ldyBTaGlwKDMpXHJcbmNvbnNvbGUubG9nKCdzaGlwJyAsc2hpcCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==