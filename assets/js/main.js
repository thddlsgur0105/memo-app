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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/client/scss/styles.scss\");\n\nvar jsMemoHeader = document.querySelector(\"#jsMemoHeader\");\nvar jsMemoBtn = jsMemoHeader.querySelector(\"#jsMemoBtn\");\nvar jsMemoIcon = jsMemoBtn.querySelector(\"#jsMemoIcon\");\nvar jsMemoInput = jsMemoHeader.querySelector(\"#jsMemoInput\");\nvar jsMemoContents = jsMemoInput.querySelectorAll(\"input\");\nvar jsMemoMain = document.querySelector(\"#jsMemoMain\");\nvar jsNewMemoSection = jsMemoMain.querySelector(\".memo-section\");\nvar memoArray = [];\n\nfunction saveMemo(obj) {\n  memoArray.push(obj);\n  localStorage.setItem(\"myMemo\", JSON.stringify(memoArray));\n}\n\nfunction paintMemo(obj) {\n  // .memo box\n  var divBox = document.createElement(\"div\");\n  divBox.className = \"memo\"; // .memo__title box\n\n  var titleBox = document.createElement(\"h2\");\n  titleBox.className = \"memo__title\";\n  titleBox.innerHTML = obj.title; // .memo__description box\n\n  var descriptionBox = document.createElement(\"h5\");\n  descriptionBox.className = \"memo__description\";\n  descriptionBox.innerHTML = obj.description; // delete button\n\n  var deleteBtn = document.createElement(\"button\");\n  deleteBtn.className = \"btn\";\n  var deleteIcon = document.createElement(\"i\");\n  deleteIcon.classList.add(\"fas\", \"fa-trash\", \"fa-lg\");\n  deleteBtn.appendChild(deleteIcon); // edit button\n\n  var editBtn = document.createElement(\"button\");\n  editBtn.className = \"btn\";\n  var editIcon = document.createElement(\"i\");\n  editIcon.classList.add(\"fas\", \"fa-pen\", \"fa-lg\");\n  editBtn.appendChild(editIcon); // complete button\n\n  var completeBtn = document.createElement(\"button\");\n  completeBtn.className = \"btn\";\n  var completeIcon = document.createElement(\"i\");\n  completeIcon.classList.add(\"fas\", \"fa-chevron-down\", \"fa-lg\");\n  completeBtn.appendChild(completeIcon);\n  divBox.appendChild(titleBox);\n  divBox.appendChild(descriptionBox);\n  divBox.appendChild(deleteBtn);\n  divBox.appendChild(editBtn);\n  divBox.appendChild(completeBtn);\n  jsNewMemoSection.appendChild(divBox);\n}\n\nfunction getInput(contents) {\n  var title = contents[0].value;\n  var description = contents[1].value;\n  return {\n    title: title,\n    description: description\n  };\n}\n\nfunction handleBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  targetNode.classList.toggle(\"clicked\");\n\n  if (targetNode.classList.contains(\"clicked\")) {\n    jsMemoIcon.classList.replace(\"fa-plus\", \"fa-check\"); // show input\n\n    jsMemoInput.classList.replace(\"hide\", \"show\");\n  } else {\n    jsMemoIcon.classList.replace(\"fa-check\", \"fa-plus\"); // hide input\n\n    jsMemoInput.classList.replace(\"show\", \"hide\");\n    var newMemoObj = getInput(jsMemoContents); // 저장하는 것이 가능한 데이터라면\n\n    if (newMemoObj.title !== \"\") {\n      // Frontend Process\n      paintMemo(newMemoObj); // Backend Process -- localStorage Procass\n\n      saveMemo(newMemoObj);\n    }\n  }\n}\n\nfunction init() {\n  // 기존의 localStorage 내용 로드\n  var myMemo = localStorage.getItem(\"myMemo\");\n  myMemo = JSON.parse(myMemo); // frontend Process\n\n  myMemo.forEach(function (oneMemo) {\n    paintMemo(oneMemo);\n  }); // backend Process\n\n  memoArray.push(myMemo); // memo click Btn 활성화\n\n  if (jsMemoHeader) {\n    jsMemoBtn.addEventListener(\"click\", handleBtnClick);\n  }\n}\n\ninit();\n\n//# sourceURL=webpack://memo-app/./src/client/js/main.js?");

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