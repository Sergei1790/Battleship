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
    opacity: 1 !important;
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
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sCAAsC;AAC1C;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB;QACI,4BAA4B;IAChC;IACA;QACI,6BAA6B;IACjC;AACJ;AACA;IACI,kBAAkB;IAClB;QACI,WAAW;QACX,kBAAkB;QAClB,YAAY;QACZ,SAAS;QACT,2BAA2B;IAC/B;AACJ;AACA;IACI,kBAAkB;IAClB;QACI,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,QAAQ;QACR,2BAA2B;IAC/B;AACJ;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB;QACI;YACI,eAAe;YACf;gBACI,2BAA2B;YAC/B;QACJ;IACJ;IACA;QACI,sBAAsB;QACtB;YACI,gBAAgB;YAChB;gBACI,4BAA4B;YAChC;QACJ;IACJ;;IAEA;QACI,kBAAkB;IACtB;;AAEJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,+CAA+C;IAC/C;QACI,iCAAiC;IACrC;AACJ","sourcesContent":[".sund-gameboard{\r\n    margin: 0 auto;\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n.sund-cells{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n}\r\n.cell{\r\n    border: 2px solid #369;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n    margin: -1px;\r\n    border-collapse: collapse;\r\n    position: relative;\r\n    &:nth-child(10n){\r\n        border-right: 2px solid #369;\r\n    }\r\n    &:nth-last-child(-n+10){\r\n        border-bottom: 2px solid #369;\r\n    }\r\n}\r\n.cell:nth-child(-n+10) {\r\n    position: relative;\r\n    &::after{\r\n        content: '';\r\n        position: absolute;\r\n        bottom: 110%;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n    }\r\n}\r\n.cell:nth-child(10n+1) {\r\n    position: relative;\r\n    &::before{\r\n        content: '';\r\n        position: absolute;\r\n        right: 110%;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n}\r\n.cell.shot{\r\n    background-color: #369;\r\n}\r\n.cell:nth-child(1)::after{\r\n    content: 'A';\r\n}\r\n.cell:nth-child(2)::after{\r\n    content: 'B';\r\n}\r\n.cell:nth-child(3)::after{\r\n    content: 'C';\r\n}\r\n.cell:nth-child(4)::after{\r\n    content: 'D';\r\n}\r\n.cell:nth-child(5)::after{\r\n    content: 'E';\r\n}\r\n.cell:nth-child(6)::after{\r\n    content: 'F';\r\n}\r\n.cell:nth-child(7)::after{\r\n    content: 'G';\r\n}\r\n.cell:nth-child(8)::after{\r\n    content: 'H';\r\n}\r\n.cell:nth-child(9)::after{\r\n    content: 'I';\r\n}\r\n.cell:nth-child(10)::after{\r\n    content: 'J';\r\n}\r\n.cell:nth-child(1)::before{\r\n    content: '1';\r\n}\r\n.cell:nth-child(11)::before{\r\n    content: '2';\r\n}\r\n.cell:nth-child(21)::before{\r\n    content: '3';\r\n}\r\n.cell:nth-child(31)::before{\r\n    content: '4';\r\n}\r\n.cell:nth-child(41)::before{\r\n    content: '5';\r\n}\r\n.cell:nth-child(51)::before{\r\n    content: '6';\r\n}\r\n.cell:nth-child(61)::before{\r\n    content: '7';\r\n}\r\n.cell:nth-child(71)::before{\r\n    content: '8';\r\n}\r\n.cell:nth-child(81)::before{\r\n    content: '9';\r\n}\r\n.cell:nth-child(91)::before{\r\n    content: '10';\r\n}\r\n.ship{\r\n    display: flex;\r\n    opacity: 1 !important;\r\n    &.horizontal{\r\n        .ship-part {\r\n            border-right: 0;\r\n            &:last-child{\r\n                border-right: 2px solid red;\r\n            }\r\n        }\r\n    }\r\n    &.vertical{\r\n        flex-direction: column;\r\n        .ship-part {\r\n            border-bottom: 0;\r\n            &:last-child{\r\n                border-bottom: 2px solid red;\r\n            }\r\n        }\r\n    }\r\n\r\n    &[data-length=\"3\"]{\r\n        /* width: 148px; */\r\n    }\r\n\r\n}\r\n\r\n.ship-part {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: 2px solid red;\r\n}\r\n.occupied {\r\n    background-color: rgb(224, 226, 229) !important;\r\n    &.ship{\r\n        background-color: #369 !important;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSx5Q0FBeUMsdUJBQXVCLHFCQUFxQixzQkFBc0IsS0FBSyxnQkFBZ0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsK0NBQStDLEtBQUssVUFBVSwrQkFBK0Isd0JBQXdCLHlCQUF5QixxQkFBcUIsa0NBQWtDLDJCQUEyQix5QkFBeUIseUNBQXlDLFNBQVMsZ0NBQWdDLDBDQUEwQyxTQUFTLEtBQUssNEJBQTRCLDJCQUEyQixpQkFBaUIsd0JBQXdCLCtCQUErQix5QkFBeUIsc0JBQXNCLHdDQUF3QyxTQUFTLEtBQUssNEJBQTRCLDJCQUEyQixrQkFBa0Isd0JBQXdCLCtCQUErQix3QkFBd0IscUJBQXFCLHdDQUF3QyxTQUFTLEtBQUssZUFBZSwrQkFBK0IsS0FBSyw4QkFBOEIscUJBQXFCLEtBQUssOEJBQThCLHFCQUFxQixLQUFLLDhCQUE4QixxQkFBcUIsS0FBSyw4QkFBOEIscUJBQXFCLEtBQUssOEJBQThCLHFCQUFxQixLQUFLLDhCQUE4QixxQkFBcUIsS0FBSyw4QkFBOEIscUJBQXFCLEtBQUssOEJBQThCLHFCQUFxQixLQUFLLDhCQUE4QixxQkFBcUIsS0FBSywrQkFBK0IscUJBQXFCLEtBQUssK0JBQStCLHFCQUFxQixLQUFLLGdDQUFnQyxxQkFBcUIsS0FBSyxnQ0FBZ0MscUJBQXFCLEtBQUssZ0NBQWdDLHFCQUFxQixLQUFLLGdDQUFnQyxxQkFBcUIsS0FBSyxnQ0FBZ0MscUJBQXFCLEtBQUssZ0NBQWdDLHFCQUFxQixLQUFLLGdDQUFnQyxxQkFBcUIsS0FBSyxnQ0FBZ0MscUJBQXFCLEtBQUssZ0NBQWdDLHNCQUFzQixLQUFLLFVBQVUsc0JBQXNCLDhCQUE4QixxQkFBcUIsd0JBQXdCLGdDQUFnQyw2QkFBNkIsZ0RBQWdELGlCQUFpQixhQUFhLFNBQVMsbUJBQW1CLG1DQUFtQyx3QkFBd0IsaUNBQWlDLDZCQUE2QixpREFBaUQsaUJBQWlCLGFBQWEsU0FBUyxpQ0FBaUMsNkJBQTZCLFdBQVcsU0FBUyxvQkFBb0Isb0JBQW9CLHFCQUFxQiw4QkFBOEIsS0FBSyxlQUFlLHdEQUF3RCxlQUFlLDhDQUE4QyxTQUFTLEtBQUssbUJBQW1CO0FBQ3hwSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3hKMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQyw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsZ0RBQWdELEtBQUssYUFBYSxJQUFJO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLE9BQU8sZUFBZSxhQUFhO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsNkJBQTZCLE9BQU87QUFDcEMsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxZQUFZLGVBQWUsWUFBWTtBQUNwSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxrQkFBa0I7QUFDckUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7Ozs7Ozs7VUM1TEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNRO0FBQ2hCO0FBQ2xCO0FBQ0EsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFJO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9qcy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnN1bmQtZ2FtZWJvYXJke1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5zdW5kLWNlbGxze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbn1cclxuLmNlbGx7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzY5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOm50aC1jaGlsZCgxMG4pe1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzNjk7XHJcbiAgICB9XHJcbiAgICAmOm50aC1sYXN0LWNoaWxkKC1uKzEwKXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM2OTtcclxuICAgIH1cclxufVxyXG4uY2VsbDpudGgtY2hpbGQoLW4rMTApIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDExMCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIH1cclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMTBuKzEpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDExMCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG59XHJcbi5jZWxsLnNob3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5O1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgxKTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnQSc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDIpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdCJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMyk6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0MnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg0KTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnRCc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDUpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdFJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoNik6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0YnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg3KTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnRyc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDgpOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdIJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoOSk6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0knO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgxMCk6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0onO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzEnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCgxMSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcyJztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoMjEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnMyc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDMxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzQnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg0MSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICc1JztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoNTEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnNic7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDYxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzcnO1xyXG59XHJcbi5jZWxsOm50aC1jaGlsZCg3MSk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICc4JztcclxufVxyXG4uY2VsbDpudGgtY2hpbGQoODEpOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnOSc7XHJcbn1cclxuLmNlbGw6bnRoLWNoaWxkKDkxKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJzEwJztcclxufVxyXG4uc2hpcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAmLmhvcml6b250YWx7XHJcbiAgICAgICAgLnNoaXAtcGFydCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi52ZXJ0aWNhbHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5zaGlwLXBhcnQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZbZGF0YS1sZW5ndGg9XCIzXCJde1xyXG4gICAgICAgIC8qIHdpZHRoOiAxNDhweDsgKi9cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5zaGlwLXBhcnQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuLm9jY3VwaWVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI5KSAhaW1wb3J0YW50O1xyXG4gICAgJi5zaGlwe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjkgIWltcG9ydGFudDtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEI7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEI7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixTQUFTO1FBQ1QsMkJBQTJCO0lBQy9CO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQjtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFFBQVE7UUFDUiwyQkFBMkI7SUFDL0I7QUFDSjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCO1FBQ0k7WUFDSSxlQUFlO1lBQ2Y7Z0JBQ0ksMkJBQTJCO1lBQy9CO1FBQ0o7SUFDSjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCO1lBQ0ksZ0JBQWdCO1lBQ2hCO2dCQUNJLDRCQUE0QjtZQUNoQztRQUNKO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0FBRUo7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN1bmQtZ2FtZWJvYXJke1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG4uc3VuZC1jZWxsc3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcbi5jZWxse1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzY5O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbjogLTFweDtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAmOm50aC1jaGlsZCgxMG4pe1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzM2OTtcXHJcXG4gICAgfVxcclxcbiAgICAmOm50aC1sYXN0LWNoaWxkKC1uKzEwKXtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzY5O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgtbisxMCkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDExMCU7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDEwbisxKSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgJjo6YmVmb3Jle1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMTEwJTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jZWxsLnNob3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjk7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxKTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdBJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDIpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0InO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoMyk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnQyc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg0KTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdEJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDUpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0UnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoNik6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnRic7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg3KTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdHJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDgpOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0gnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoOSk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnSSc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxMCk6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnSic7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnMSc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCgxMSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzInO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoMjEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICczJztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDMxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnNCc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg0MSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzUnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoNTEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICc2JztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDYxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnNyc7XFxyXFxufVxcclxcbi5jZWxsOm50aC1jaGlsZCg3MSk6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJzgnO1xcclxcbn1cXHJcXG4uY2VsbDpudGgtY2hpbGQoODEpOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICc5JztcXHJcXG59XFxyXFxuLmNlbGw6bnRoLWNoaWxkKDkxKTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnMTAnO1xcclxcbn1cXHJcXG4uc2hpcHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcclxcbiAgICAmLmhvcml6b250YWx7XFxyXFxuICAgICAgICAuc2hpcC1wYXJ0IHtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYudmVydGljYWx7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgLnNoaXAtcGFydCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZbZGF0YS1sZW5ndGg9XFxcIjNcXFwiXXtcXHJcXG4gICAgICAgIC8qIHdpZHRoOiAxNDhweDsgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wYXJ0IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjYsIDIyOSkgIWltcG9ydGFudDtcXHJcXG4gICAgJi5zaGlwe1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2OSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFNoaXB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKXtcclxuICAgICAgICBpZiAoc2l6ZSA8PSAwIHx8IHNpemUgPiA0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBzaXplIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGxlc3MgdGhhbiA1Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcclxuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGhpdCgpe1xyXG4gICAgICAgIHRoaXMuaGl0cysrO1xyXG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc1N1bmsoKSk7XHJcbiAgICB9XHJcbiAgICBpc1N1bmsoKXtcclxuICAgICAgICB0aGlzLnN1bmsgPSAodGhpcy5zaXplID09PSB0aGlzLmhpdHMpOyBcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW5rOyBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zaXplID0gMTA7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQm9hcmQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMTsgcm93IDw9IDEwOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPD0gOTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBjb2wpLCAvLyBDb2x1bW4gbGV0dGVyICgnYScgdG8gJ2onKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IHJvdy50b1N0cmluZygpLCAvLyBSb3cgbnVtYmVyICgxIHRvIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG90OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2FyZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcbiAgICByZWNlaXZlQXR0YWNrKHJvdywgY29sKXtcclxuICAgICAgICBjb25zdCBhdHRhY2tlZENlbGwgPSB0aGlzLmJvYXJkLmZpbmQoY2VsbHMgPT4gY2VsbHMuY2VsbC5yb3cgPT09IHJvdyAmJiBjZWxscy5jZWxsLmNvbCA9PT0gY29sKTtcclxuICAgICAgICBpZiAoYXR0YWNrZWRDZWxsKSB7XHJcbiAgICAgICAgICAgIGF0dGFja2VkQ2VsbC5jZWxsLnNob3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQXR0YWNrIHJlY2VpdmVkIG9uIGNlbGw6YCwgYXR0YWNrZWRDZWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTm8gY2VsbCBmb3VuZCBhdCByb3cgJHtyb3d9IGFuZCBjb2x1bW4gJHtjb2x9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhdHRhY2tlZENlbGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gJy4vY2xhc3Nlcyc7XHJcbi8vIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XHJcbi8vIGNvbnNvbGUubG9nKCdhc2QnLCBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoKSk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZCgpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRDZWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGdhbWVib2FyZERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnc3VuZC1nYW1lYm9hcmQnKTtcclxuICAgIGdhbWVib2FyZENlbGxzLmNsYXNzTGlzdC5hZGQoJ3N1bmQtY2VsbHMnKTtcclxuXHJcbiAgICBnYW1lYm9hcmREaXNwbGF5LmFwcGVuZENoaWxkKGdhbWVib2FyZENlbGxzKTtcclxuICAgIGdhbWVib2FyZC5jcmVhdGVCb2FyZCgpLmZvckVhY2goKGNlbGxzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSBjZWxscy5jZWxsLnJvdztcclxuICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gY2VsbHMuY2VsbC5jb2w7XHJcbiAgICAgICAgLy8gY2VsbC5kYXRhc2V0LnBvcyA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAvLyAgICAgY29sOiBjZWxscy5jZWxsLmNvbCxcclxuICAgICAgICAvLyAgICAgcm93OiBjZWxscy5jZWxsLnJvd1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvdztcclxuICAgICAgICAgICAgY29uc3QgY29sID0gZS50YXJnZXQuZGF0YXNldC5jb2w7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdywgY29sKTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgVUkgdG8gcmVmbGVjdCB0aGUgY2hhbmdlXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Nob3QnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnYW1lYm9hcmRDZWxscy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH0pO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChnYW1lYm9hcmREaXNwbGF5KTtcclxufVxyXG4vLyBjb25zb2xlLmxvZyhnYW1lYm9hcmQuYm9hcmRbOV0pO1xyXG5kaXNwbGF5Qm9hcmQoKTtcclxuXHJcbmxldCBkcmFnZ2FibGVTaGlwID0gbnVsbDtcclxubGV0IHN0YXJ0aW5nUGFydCA9IG51bGw7XHJcbmxldCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XHJcblxyXG5mdW5jdGlvbiByb3RhdGVTaGlwKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAnKS5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbik7XHJcbiAgICBkaXJlY3Rpb24gPSAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwJykuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb24pO1xyXG4gICAgY29uc29sZS5sb2coJ05ldyBkaXJlY3Rpb246JywgZGlyZWN0aW9uKTtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcClcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwW2RyYWdnYWJsZT1cInRydWVcIl0nKS5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICBzaGlwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLXBhcnQnKS5mb3JFYWNoKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgcGFydC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc3RhcnRpbmdQYXJ0ID0gK2V2ZW50LnRhcmdldC5kYXRhc2V0LnBhcnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEcmFnIHN0YXJ0ZWQgZnJvbSBwYXJ0OicsIHN0YXJ0aW5nUGFydCk7XHJcbiAgICAgICAgZHJhZ2dhYmxlU2hpcCA9IHNoaXA7XHJcbiAgICB9KTtcclxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcclxuICAgICAgICBkcmFnZ2FibGVTaGlwID0gbnVsbDtcclxuICAgICAgICBzdGFydGluZ1BhcnQgPSBudWxsO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q2VsbHNGb3JTaGlwKGNlbGwsIGxlbmd0aCwgZGlyZWN0aW9uLCBzdGFydGluZ1BhcnQpIHtcclxuICAgIGNvbnN0IHN0YXJ0Um93ID0gK2NlbGwuZGF0YXNldC5yb3c7XHJcbiAgICBjb25zdCBzdGFydENvbCA9IGNlbGwuZGF0YXNldC5jb2wuY2hhckNvZGVBdCgwKSAtIDk3O1xyXG4gICAgY29uc3QgY2VsbHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBvZmZzZXQgZnJvbSB0aGUgZHJvcCBjZWxsLCBzbyBwYXJ0IGF0IHN0YXJ0aW5nUGFydCBhbGlnbnMgd2l0aCBkcm9wIGNlbGxcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBpIC0gc3RhcnRpbmdQYXJ0O1xyXG5cclxuICAgICAgICBjb25zdCByb3cgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/IHN0YXJ0Um93IDogc3RhcnRSb3cgKyBvZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgY29sID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBzdGFydENvbCArIG9mZnNldCA6IHN0YXJ0Q29sO1xyXG5cclxuICAgICAgICBjb25zdCByb3dOdW0gPSByb3cudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBjb2x1bW5MZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgY29sKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEtcm93PScke3Jvd051bX0nXVtkYXRhLWNvbD0nJHtjb2x1bW5MZXR0ZXJ9J11gKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldENlbGwpIHtcclxuICAgICAgICAgICAgY2VsbHMucHVzaCh0YXJnZXRDZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtTaGlwQWRqYWNlbnRDZWxzKHNoaXBDZWxscykge1xyXG4gICAgY29uc29sZS5sb2coJ3NoaXBDZWxscycsIHNoaXBDZWxscyk7XHJcbiAgICBzaGlwQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gK2NlbGwuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBjZWxsLmRhdGFzZXQuY29sLmNoYXJDb2RlQXQoMCkgLSA5NztcclxuICAgICAgICBmb3IgKGxldCByID0gLTE7IHIgPCAyOyByKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDwgMjsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAociA9PT0gMCAmJiBjID09PSAwKSBjb250aW51ZTsgLy8gc2tpcCB0aGUgY2VsbCBpdHNlbGZcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGphY2VudFJvdyA9IHN0YXJ0Um93ICsgcjtcclxuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudENvbCA9IHN0YXJ0Q29sICsgYztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgY29sIHN0YXlzIHdpdGhpbiBhLXogKGFzc3VtaW5nIGEgMTB4MTAgYm9hcmQsIGEtailcclxuICAgICAgICAgICAgICAgIGlmIChhZGphY2VudENvbCA8IDAgfHwgYWRqYWNlbnRDb2wgPiA5IHx8IGFkamFjZW50Um93IDwgMSB8fCBhZGphY2VudFJvdyA+IDEwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBhZGphY2VudENvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBhZGphY2VudENvbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFkamFjZW50Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEtcm93PScke2FkamFjZW50Um93fSddW2RhdGEtY29sPScke2FkamFjZW50Q29sfSddYCk7XHJcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGwuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5QbGFjZVNoaXAoY2VsbCwgbGVuZ3RoLCBkaXJlY3Rpb24sIHN0YXJ0aW5nUGFydCkge1xyXG4gICAgY29uc3QgY2VsbHMgPSBnZXRDZWxsc0ZvclNoaXAoY2VsbCwgbGVuZ3RoLCBkaXJlY3Rpb24sIHN0YXJ0aW5nUGFydCk7XHJcbiAgICBpZiAoIWNlbGxzIHx8IGNlbGxzLmxlbmd0aCAhPT0gbGVuZ3RoKSByZXR1cm4gZmFsc2U7IC8vIGludmFsaWQgcGxhY2VtZW50IChvdXQgb2YgYm9hcmQpXHJcbiAgICByZXR1cm4gIWNlbGxzLnNvbWUoKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvY2N1cGllZCcpKTtcclxufVxyXG5cclxuY29uc3QgZHJvcFRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG5cclxubGV0IGxhc3RIaWdobGlnaHRlZENlbGxzID0gW107XHJcblxyXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGVhY2ggZHJvcCB0YXJnZXRcclxuZHJvcFRhcmdldHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgLy8gQWxsb3cgdGhlIGRyYWdnZWQgZWxlbWVudCB0byBiZSBkcm9wcGVkIGJ5IHByZXZlbnRpbmcgdGhlIGRlZmF1bHQgYmVoYXZpb3JcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghZHJhZ2dhYmxlU2hpcCB8fCBzdGFydGluZ1BhcnQgPT09IG51bGwpIHJldHVybjsgLy8gc2FmZXR5IGNoZWNrXHJcblxyXG4gICAgICAgIGxhc3RIaWdobGlnaHRlZENlbGxzLmZvckVhY2goKGNlbGxFbCkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsRWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHBhcnNlSW50KGRyYWdnYWJsZVNoaXAuZGF0YXNldC5sZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxscyA9IGdldENlbGxzRm9yU2hpcChjZWxsLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24sIHN0YXJ0aW5nUGFydCk7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGNlbGxzLmxlbmd0aCA9PT0gc2hpcExlbmd0aCAmJiBjYW5QbGFjZVNoaXAoY2VsbCwgc2hpcExlbmd0aCwgZGlyZWN0aW9uLCBzdGFydGluZ1BhcnQpO1xyXG5cclxuICAgICAgICBjZWxscy5mb3JFYWNoKChjZWxsRWwpID0+IHtcclxuICAgICAgICAgICAgY2VsbEVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGlzVmFsaWQgPyAnI2YwZjBmMCcgOiAnI2ZmY2NjYyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGFzdEhpZ2hsaWdodGVkQ2VsbHMgPSBjZWxscztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhhbmRsZSB3aGVuIHRoZSBkcmFnZ2VkIGVsZW1lbnQgaXMgZHJvcHBlZFxyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBkZWZhdWx0IHRvIGFsbG93IHRoZSBkcm9wXHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBwYXJzZUludChkcmFnZ2FibGVTaGlwLmRhdGFzZXQubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gbGFzdEhpZ2hsaWdodGVkQ2VsbHMubGVuZ3RoID09PSBzaGlwTGVuZ3RoICYmIGNhblBsYWNlU2hpcChjZWxsLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24sIHN0YXJ0aW5nUGFydCk7XHJcbiAgICAgICAgbGFzdEhpZ2hsaWdodGVkQ2VsbHMuZm9yRWFjaCgoY2VsbEVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxFbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgZHJvcCAtIHNoaXAgcGxhY2VtZW50IG5vdCBhbGxvd2VkIGhlcmUuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwbGFjZWRTaGlwID0gbGFzdEhpZ2hsaWdodGVkQ2VsbHM7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGxhY2VkU2hpcCk7XHJcbiAgICAgICAgcGxhY2VkU2hpcC5mb3JFYWNoKChjZWxsRWwpID0+IHtcclxuICAgICAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnLCAnb2NjdXBpZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYXJrU2hpcEFkamFjZW50Q2VscyhwbGFjZWRTaGlwKTtcclxuXHJcbiAgICAgICAgLy8gUmV0cmlldmUgdGhlIElEIG9mIHRoIGRyYWdnZWQgZWxlbWVudFxyXG5cclxuICAgICAgICAvLyAvLyBGaW5kIHRoZSBkcmFnZ2VkIGVsZW1lbnQgdXNpbmcgaXRzIElEXHJcbiAgICAgICAgLy8gY29uc3QgZHJhZ2dlZEVsZW1lbnRJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XHJcbiAgICAgICAgLy8gY29uc3QgZHJhZ2dlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkRWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgLy8gLy8gQXBwZW5kIHRoZSBkcmFnZ2VkIGVsZW1lbnQgdG8gdGhlIGN1cnJlbnQgY2VsbFxyXG4gICAgICAgIC8vIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkRWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIC8vIFJlc2V0IHRoZSBjZWxsJ3Mgc3R5bGUgYWZ0ZXIgdGhlIGRyb3BcclxuICAgICAgICAvLyBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEcm9wcGVkIGVsZW1lbnQgd2l0aCBJRDogJHtkcmFnZ2VkRWxlbWVudElkfSBpbnRvIGNlbGxgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wdGlvbmFsOiBSZXNldCB0aGUgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBkcmFnZ2luZyBsZWF2ZXMgdGhlIHRhcmdldFxyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgbGFzdEhpZ2hsaWdodGVkQ2VsbHMuZm9yRWFjaCgoY2VsbEVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxFbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IHtTaGlwfSBmcm9tICcuL2NsYXNzZXMuanMnO1xyXG5pbXBvcnQgJy4vZG9tLmpzJztcclxuLy8gaW1wb3J0ICcuL2NsYXNzZXMuanMnO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgY29uc29sZS5sb2coJ0xvb2tzIGxpa2Ugd2UgYXJlIGluIGRldmVsb3BtZW50IG1vZGUhJyk7XHJcbn1cclxuXHJcbmxldCBzaGlwID0gbmV3IFNoaXAoMylcclxuY29uc29sZS5sb2coJ3NoaXAnICxzaGlwKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9