/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/clock.js":
/*!********************************!*\
  !*** ./src/client/js/clock.js ***!
  \********************************/
/***/ (() => {

eval("var jsClockContainer = document.querySelector(\"#jsClockContainer\");\nvar jsClockTime = jsClockContainer ? jsClockContainer.querySelector(\"#jsClockTime\") : null;\n\nfunction clockPaint() {\n  var date = new Date();\n  var _ref = [date.getHours(), date.getMinutes(), date.getSeconds()],\n      currentHours = _ref[0],\n      currentMinutes = _ref[1],\n      currentSeconds = _ref[2];\n  jsClockTime.innerHTML = \"\".concat(currentHours < 10 ? \"0\".concat(currentHours) : currentHours, \":\").concat(currentMinutes < 10 ? \"0\".concat(currentMinutes) : currentMinutes, \":\").concat(currentSeconds < 10 ? \"0\".concat(currentSeconds) : currentSeconds);\n}\n\nif (jsClockContainer) {\n  setInterval(clockPaint, 100);\n}\n\n//# sourceURL=webpack://memo-app/./src/client/js/clock.js?");

/***/ }),

/***/ "./src/client/js/load.js":
/*!*******************************!*\
  !*** ./src/client/js/load.js ***!
  \*******************************/
/***/ (() => {

eval("var jsLoadContainer = document.querySelector(\"#jsLoadContainer\");\nvar jsLoadCard = jsLoadContainer ? jsLoadContainer.querySelector(\"#jsLoadCard\") : null;\nvar jsLoadInputBox = jsLoadCard ? jsLoadCard.querySelector(\"#jsLoadInputBox\") : null;\nvar jsLoadInput = jsLoadInputBox ? jsLoadInputBox.querySelectorAll(\"input\") : null;\nvar jsLoadInputBtn = jsLoadInputBox ? jsLoadInputBox.querySelector(\"#jsLoadInputBtn\") : null;\nvar jsLoadResult = jsLoadCard ? jsLoadCard.querySelector(\"#jsLoadResult\") : null;\nvar flagArray;\n\nfunction saveLink(array) {\n  localStorage.setItem(\"links\", JSON.stringify(array));\n}\n\nfunction handleContainerHover(event) {\n  var targetContainer = event.target;\n  var targetBtn = targetContainer.querySelector(\".link__btn\");\n\n  if (targetContainer.classList.contains(\"leaved\")) {\n    targetContainer.classList.replace(\"leaved\", \"hovered\");\n    targetBtn.classList.replace(\"hide-btn\", \"show-btn\");\n  } else {\n    targetContainer.classList.add(\"hovered\");\n    targetBtn.classList.replace(\"hide\", \"show-btn\");\n  }\n}\n\nfunction handleContainerLeave(event) {\n  var targetContainer = event.target;\n  var targetBtn = targetContainer.querySelector(\".link__btn\");\n  targetContainer.classList.replace(\"hovered\", \"leaved\");\n  targetBtn.classList.replace(\"show-btn\", \"hide-btn\");\n}\n\nfunction handleDeleteBtnClick(event) {\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  var targetContainer = targetNode.parentNode;\n  var targetId = targetContainer.querySelector(\"a\").id; // frontend process\n\n  jsLoadResult.removeChild(targetContainer); // backend process\n\n  flagArray = flagArray.filter(function (one) {\n    return one.id !== parseInt(targetId);\n  });\n  saveLink(flagArray);\n}\n\nfunction paintLink(obj) {\n  var _ref = [obj.name, obj.link, obj.id],\n      name = _ref[0],\n      link = _ref[1],\n      id = _ref[2]; // container\n\n  var linkContainer = document.createElement(\"div\");\n  linkContainer.className = \"welcome__container\"; // anchor\n\n  var linkAnchor = document.createElement(\"a\");\n  linkAnchor.classList.add(\"welcome__link\");\n  linkAnchor.href = link;\n  linkAnchor.id = id; // icon\n\n  var linkIcon = document.createElement(\"i\");\n  linkIcon.classList.add(\"fab\", \"fa-\".concat(name), \"fa-lg\"); // span\n\n  var linkSpan = document.createElement(\"span\");\n  linkSpan.innerHTML = name;\n  linkSpan.style.display = \"none\";\n  linkAnchor.appendChild(linkIcon);\n  linkAnchor.appendChild(linkSpan); // delete Btn\n\n  var deleteBtn = document.createElement(\"button\");\n  deleteBtn.classList.add(\"btn\", \"link__btn\", \"hide\");\n  deleteBtn.addEventListener(\"click\", handleDeleteBtnClick);\n  var deleteIcon = document.createElement(\"i\");\n  deleteIcon.classList.add(\"fas\", \"fa-trash\");\n  deleteBtn.appendChild(deleteIcon);\n  linkContainer.appendChild(linkAnchor);\n  linkContainer.appendChild(deleteBtn);\n  linkContainer.addEventListener(\"mouseenter\", handleContainerHover);\n  linkContainer.addEventListener(\"mouseleave\", handleContainerLeave);\n  jsLoadResult.appendChild(linkContainer);\n}\n\nfunction handleInputBtnClick(event) {\n  event.preventDefault();\n  var _ref2 = [jsLoadInput[0].value, jsLoadInput[1].value],\n      name = _ref2[0],\n      link = _ref2[1];\n  var newObj = {\n    name: name,\n    link: link,\n    id: flagArray.length + 1\n  };\n  var _ref3 = [\"\", \"\"];\n  jsLoadInput[0].value = _ref3[0];\n  jsLoadInput[1].value = _ref3[1];\n  // frontend process\n  paintLink(newObj);\n  flagArray.push(newObj); // backend process\n\n  saveLink(flagArray);\n}\n\nfunction LoadInit() {\n  // localStorage에 있는 저장된 데이터 로딩\n  var loadedArray = localStorage.getItem(\"links\");\n  var parsedArray = JSON.parse(loadedArray);\n\n  if (parsedArray) {\n    flagArray = [];\n    parsedArray.forEach(function (parsedOne) {\n      var newObj = {\n        name: parsedOne.name,\n        link: parsedOne.link,\n        id: flagArray.length + 1\n      }; // frontend process\n\n      paintLink(newObj);\n      flagArray.push(newObj);\n    }); // backend process\n\n    saveLink(flagArray);\n  } // btn에 이벤트 리스너 설정\n\n\n  jsLoadInputBtn.addEventListener(\"click\", handleInputBtnClick);\n}\n\nif (jsLoadContainer) {\n  LoadInit();\n}\n\n//# sourceURL=webpack://memo-app/./src/client/js/load.js?");

/***/ }),

/***/ "./src/client/js/main.js":
/*!*******************************!*\
  !*** ./src/client/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/client/scss/styles.scss\");\n/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memo */ \"./src/client/js/memo.js\");\n/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_memo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/client/js/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clock */ \"./src/client/js/clock.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load */ \"./src/client/js/load.js\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_load__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://memo-app/./src/client/js/main.js?");

/***/ }),

/***/ "./src/client/js/memo.js":
/*!*******************************!*\
  !*** ./src/client/js/memo.js ***!
  \*******************************/
/***/ (() => {

eval("var jsMemoHeader = document.querySelector(\"#jsMemoHeader\");\nvar jsMemoBtn = jsMemoHeader ? jsMemoHeader.querySelector(\"#jsMemoBtn\") : null;\nvar jsMemoIcon = jsMemoBtn ? jsMemoBtn.querySelector(\"#jsMemoIcon\") : null;\nvar jsMemoInput = jsMemoHeader ? jsMemoHeader.querySelector(\"#jsMemoInput\") : null;\nvar jsMemoContents = jsMemoInput ? jsMemoInput.querySelectorAll(\"input\") : null;\nvar jsMemoMain = document.querySelector(\"#jsMemoMain\");\nvar jsNewMemoSection = jsMemoMain ? jsMemoMain.querySelector(\".memo-section\") : null;\nvar memoArray = [];\n\nfunction saveMemo(obj) {\n  memoArray.push(obj);\n  sessionStorage.setItem(\"toDos\", JSON.stringify(memoArray));\n}\n\nfunction handleDeleteBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  var targetMemo = targetNode.parentNode;\n  var targetId = targetMemo.id; // Delete target in Frontend\n\n  targetMemo.remove(); // Delete target in Backend\n\n  memoArray = memoArray.filter(function (oneMemo) {\n    return oneMemo.id !== parseInt(targetId);\n  });\n  sessionStorage.setItem(\"toDos\", JSON.stringify(memoArray));\n}\n\nfunction handleOptionBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  targetNode.classList.toggle(\"clicked\");\n  var targetContainer = targetNode.parentNode;\n\n  if (targetNode.classList.contains(\"clicked\")) {\n    // show all option Btns\n    var targetHideBtns = targetContainer.querySelectorAll(\"button.hide\");\n    targetHideBtns.forEach(function (targetHideBtn) {\n      targetHideBtn.classList.replace(\"hide\", \"show\");\n    }); // targetOptionBtn direction changes to left\n\n    var targetIcon = targetNode.querySelector(\"i\");\n    targetIcon.classList.replace(\"fa-chevron-right\", \"fa-chevron-left\");\n  } else {\n    // show all option Btns\n    var _targetHideBtns = targetContainer.querySelectorAll(\"button.show\");\n\n    _targetHideBtns.forEach(function (targetHideBtn) {\n      targetHideBtn.classList.replace(\"show\", \"hide\");\n    }); // targetOptionBtn direction changes to right\n\n\n    var _targetIcon = targetNode.querySelector(\"i\");\n\n    _targetIcon.classList.replace(\"fa-chevron-left\", \"fa-chevron-right\");\n  }\n}\n\nfunction handleEditBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  targetNode.classList.toggle(\"clicked\");\n  var targetContainer = targetNode.parentNode;\n\n  if (targetNode.classList.contains(\"clicked\")) {\n    // replace memo title to input bar\n    var titleContainer = targetContainer.querySelector(\".memo__title\");\n    var titleInputBar = document.createElement(\"input\");\n    titleInputBar.type = \"text\";\n    titleInputBar.value = titleContainer.innerHTML;\n    titleInputBar.classList.add(\"input\");\n    targetContainer.replaceChild(titleInputBar, titleContainer); // replace memo description to input bar\n\n    var descriptionContainer = targetContainer.querySelector(\".memo__description\");\n    var descriptionInputBar = document.createElement(\"input\");\n    descriptionInputBar.type = \"text\";\n    descriptionInputBar.value = descriptionContainer.innerHTML;\n    descriptionInputBar.classList.add(\"input\");\n    targetContainer.replaceChild(descriptionInputBar, descriptionContainer);\n  } else {\n    var editedInputBars = targetContainer.querySelectorAll(\"input.input\"); // edit on frontend Section\n\n    var editedTitleBox = document.createElement(\"h2\");\n    editedTitleBox.className = \"memo__title\";\n    editedTitleBox.innerHTML = editedInputBars[0].value;\n    var editedDescriptionBox = document.createElement(\"h5\");\n    editedDescriptionBox.className = \"memo__description\";\n    editedDescriptionBox.innerHTML = editedInputBars[1].value;\n    targetContainer.replaceChild(editedTitleBox, editedInputBars[0]);\n    targetContainer.replaceChild(editedDescriptionBox, editedInputBars[1]); // edit on backend Section\n\n    var editedContainerId = targetContainer.id;\n    memoArray = memoArray.map(function (oneMemo) {\n      if (oneMemo.id === parseInt(editedContainerId)) {\n        return {\n          title: editedInputBars[0].value,\n          description: editedInputBars[1].value,\n          id: oneMemo.id\n        };\n      } else {\n        return oneMemo;\n      }\n    });\n    sessionStorage.setItem(\"toDos\", JSON.stringify(memoArray));\n  }\n}\n\nfunction paintMemo(obj) {\n  // .memo box\n  var divBox = document.createElement(\"div\");\n  divBox.className = \"memo\";\n  divBox.id = obj.id; // .memo__title box\n\n  var titleBox = document.createElement(\"h2\");\n  titleBox.className = \"memo__title\";\n  titleBox.innerHTML = obj.title; // .memo__description box\n\n  var descriptionBox = document.createElement(\"h5\");\n  descriptionBox.className = \"memo__description\";\n  descriptionBox.innerHTML = obj.description; // delete button\n\n  var deleteBtn = document.createElement(\"button\");\n  deleteBtn.classList.add(\"btn\", \"hide\");\n  var deleteIcon = document.createElement(\"i\");\n  deleteIcon.classList.add(\"fas\", \"fa-trash\", \"fa-lg\");\n  deleteBtn.appendChild(deleteIcon);\n  deleteBtn.addEventListener(\"click\", handleDeleteBtnClick); // edit button\n\n  var editBtn = document.createElement(\"button\");\n  editBtn.classList.add(\"btn\", \"hide\");\n  var editIcon = document.createElement(\"i\");\n  editIcon.classList.add(\"fas\", \"fa-pen\", \"fa-lg\");\n  editBtn.appendChild(editIcon);\n  editBtn.addEventListener(\"click\", handleEditBtnClick); // option button\n\n  var optionBtn = document.createElement(\"button\");\n  optionBtn.className = \"btn\";\n  var optionIcon = document.createElement(\"i\");\n  optionIcon.classList.add(\"fas\", \"fa-chevron-right\", \"fa-lg\");\n  optionBtn.appendChild(optionIcon);\n  optionBtn.addEventListener(\"click\", handleOptionBtnClick);\n  divBox.appendChild(titleBox);\n  divBox.appendChild(descriptionBox);\n  divBox.appendChild(deleteBtn);\n  divBox.appendChild(editBtn);\n  divBox.appendChild(optionBtn);\n  jsNewMemoSection.appendChild(divBox);\n}\n\nfunction handleAddBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  targetNode.classList.toggle(\"clicked\");\n\n  if (targetNode.classList.contains(\"clicked\")) {\n    jsMemoIcon.classList.replace(\"fa-plus\", \"fa-check\"); // show input\n\n    jsMemoInput.classList.replace(\"hide\", \"show\");\n  } else {\n    jsMemoIcon.classList.replace(\"fa-check\", \"fa-plus\"); // hide input\n\n    jsMemoInput.classList.replace(\"show\", \"hide\");\n    var newMemoObj = {\n      title: jsMemoContents[0].value,\n      description: jsMemoContents[1].value,\n      id: memoArray.length + 1\n    };\n\n    if (newMemoObj.title !== \"\") {\n      // Frontend Process\n      paintMemo(newMemoObj); // Backend Process\n\n      saveMemo(newMemoObj);\n    }\n  }\n}\n\nfunction initMemo() {\n  // 기존의 sessionStorage 내용 로드\n  var loadedArray = sessionStorage.getItem(\"toDos\");\n  var parsedArray;\n\n  if (!loadedArray) {\n    parsedArray = null;\n  } else {\n    parsedArray = JSON.parse(loadedArray);\n  }\n\n  if (parsedArray) {\n    parsedArray.forEach(function (oneMemo) {\n      var memoObj = {\n        title: oneMemo.title,\n        description: oneMemo.description,\n        id: memoArray.length + 1\n      }; // frontend Process\n\n      paintMemo(memoObj); // backend process\n\n      saveMemo(memoObj);\n    });\n  } // memo click Btn 활성화\n\n\n  jsMemoBtn.addEventListener(\"click\", handleAddBtnClick);\n}\n\nif (jsMemoHeader && jsMemoMain) {\n  initMemo();\n}\n\n//# sourceURL=webpack://memo-app/./src/client/js/memo.js?");

/***/ }),

/***/ "./src/client/js/nav.js":
/*!******************************!*\
  !*** ./src/client/js/nav.js ***!
  \******************************/
/***/ (() => {

eval("var jsNavBtn = document.querySelector(\"#jsNavBtn\");\nvar jsNavIcon = jsNavBtn ? jsNavBtn.querySelector(\"i\") : null;\nvar jsNavUl = document.querySelector(\"#jsNavUl\");\n\nfunction handleNavBtn(event) {\n  event.preventDefault();\n  jsNavBtn.classList.toggle(\"btn-clicked\");\n\n  if (jsNavBtn.classList.contains(\"btn-clicked\")) {\n    if (jsNavUl.classList.contains(\"init-hide\")) {\n      jsNavUl.classList.replace(\"init-hide\", \"show-slider\");\n    } else {\n      jsNavUl.classList.replace(\"hide-slider\", \"show-slider\");\n    }\n  } else {\n    jsNavUl.classList.replace(\"show-slider\", \"hide-slider\");\n  }\n}\n\nfunction initNav() {\n  jsNavBtn.addEventListener(\"click\", handleNavBtn);\n}\n\nif (jsNavBtn && jsNavUl) {\n  initNav();\n}\n\n//# sourceURL=webpack://memo-app/./src/client/js/nav.js?");

/***/ }),

/***/ "./src/client/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/client/scss/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/main.js");
/******/ 	
/******/ })()
;