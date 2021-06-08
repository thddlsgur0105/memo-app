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

/***/ "./src/client/js/main.js":
/*!*******************************!*\
  !*** ./src/client/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/client/scss/styles.scss\");\n\nvar jsMemoHeader = document.querySelector(\"#jsMemoHeader\");\nvar jsMemoBtn = jsMemoHeader.querySelector(\"#jsMemoBtn\");\nvar jsMemoIcon = jsMemoBtn.querySelector(\"#jsMemoIcon\");\nvar jsMemoInput = jsMemoHeader.querySelector(\"#jsMemoInput\");\nvar jsMemoContents = jsMemoInput.querySelectorAll(\"input\");\nvar jsMemoMain = document.querySelector(\"#jsMemoMain\");\nvar jsNewMemoSection = jsMemoMain.querySelector(\".memo-section\");\n\nfunction newMemo(obj) {\n  // .memo box\n  var divBox = document.createElement(\"div\");\n  divBox.className = \"memo\"; // .memo__title box\n\n  var titleBox = document.createElement(\"h2\");\n  titleBox.className = \"memo__title\";\n  titleBox.innerHTML = obj.title; // .memo__description box\n\n  var descriptionBox = document.createElement(\"h5\");\n  descriptionBox.className = \"memo__description\";\n  descriptionBox.innerHTML = obj.description; // delete button\n\n  var deleteBtn = document.createElement(\"button\");\n  deleteBtn.className = \"btn\";\n  var deleteIcon = document.createElement(\"i\");\n  deleteIcon.classList.add(\"fas\", \"fa-trash\", \"fa-lg\");\n  deleteBtn.appendChild(deleteIcon);\n  divBox.appendChild(titleBox);\n  divBox.appendChild(descriptionBox);\n  divBox.appendChild(deleteBtn);\n  jsNewMemoSection.appendChild(divBox);\n}\n\nfunction getInput(contents) {\n  var title = contents[0].value;\n  var description = contents[1].value;\n  return {\n    title: title,\n    description: description\n  };\n}\n\nfunction handleBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  targetNode.classList.toggle(\"clicked\");\n\n  if (targetNode.classList.contains(\"clicked\")) {\n    jsMemoIcon.classList.replace(\"fa-plus\", \"fa-check\"); // show input\n\n    jsMemoInput.classList.replace(\"hide\", \"show\");\n  } else {\n    jsMemoIcon.classList.replace(\"fa-check\", \"fa-plus\"); // hide input\n\n    jsMemoInput.classList.replace(\"show\", \"hide\");\n    var newMemoObj = getInput(jsMemoContents); // newMemo를 프론트엔드로 화면의 jsMemoMain 영역에 생성\n\n    newMemo(newMemoObj); // 백엔드로 그 해당 newMemo에 관한 내용을 mongo 데이터베이스에 저장\n    // 화면 새로고침 시 데이터베이스의 내용들이 로드되면서 프론트엔드가 사라지고 결과는 다르지 않게 됨\n    // 삭제 시 프론트엔드 단에서 요소 제거 -> 백엔드에서 관련 요소 제거 -> 새로고침 시 없어짐\n  }\n}\n\nif (jsMemoHeader) {\n  jsMemoBtn.addEventListener(\"click\", handleBtnClick);\n}\n\n//# sourceURL=webpack://memo-app/./src/client/js/main.js?");

/***/ }),

/***/ "./src/client/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/client/scss/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://memo-app/./src/client/scss/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/main.js");
/******/ 	
/******/ })()
;