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

/***/ "./src/client/js/btn.js":
/*!******************************!*\
  !*** ./src/client/js/btn.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Btn\": () => (/* binding */ Btn)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// BTN CLASS\nvar Btn = function Btn(_ref) {\n  var _this = this;\n\n  var main = _ref.main,\n      container = _ref.container,\n      _color = _ref.color,\n      _radius = _ref.radius;\n\n  _classCallCheck(this, Btn);\n\n  _defineProperty(this, \"addEventListener\", function () {\n    _this.node.addEventListener(\"mousedown\", _this.handleBtnDown);\n\n    _this.node.addEventListener(\"mouseup\", _this.handleBtnUp);\n  });\n\n  _defineProperty(this, \"StyleBtn\", function (_ref2) {\n    var color = _ref2.color,\n        radius = _ref2.radius;\n    _this.node.style.cssText = \"\\n            background-color: \".concat(color, \";\\n            border-radius: \").concat(radius, \";\\n            box-shadow: 2px 2px 2px 0px #34495e;\\n            font-size: 10px;\\n            font-weight: 600;\\n            color: #2c3e50;\\n        \");\n\n    _this.main.appendChild(_this.node);\n  });\n\n  _defineProperty(this, \"handleBtnDown\", function (event) {\n    // Btn Click Down Movement\n    var btn = event.target;\n\n    _this.btnDownAni(btn);\n  });\n\n  _defineProperty(this, \"handleBtnUp\", function (event) {\n    // Btn Click Up Movement\n    var btn = event.target;\n\n    _this.btnUpAni(btn);\n  });\n\n  _defineProperty(this, \"btnDownAni\", function (btn) {\n    if (btn.classList.contains(\"up-btn\")) {\n      btn.classList.replace(\"up-btn\", \"down-btn\");\n    } else {\n      btn.classList.add(\"down-btn\");\n    }\n  });\n\n  _defineProperty(this, \"btnUpAni\", function (btn) {\n    if (btn.classList.contains(\"down-btn\")) {\n      btn.classList.replace(\"down-btn\", \"up-btn\");\n    }\n  });\n\n  this.main = main;\n  this.node = container;\n  this.StyleBtn({\n    color: _color,\n    radius: _radius\n  });\n  this.addEventListener();\n};\n\n//# sourceURL=webpack://memo-app/./src/client/js/btn.js?");

/***/ }),

/***/ "./src/client/js/clock.js":
/*!********************************!*\
  !*** ./src/client/js/clock.js ***!
  \********************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Clock = function Clock() {\n  var _this = this;\n\n  _classCallCheck(this, Clock);\n\n  _defineProperty(this, \"clockPaint\", function () {\n    var date = new Date();\n    var _ref = [date.getHours(), date.getMinutes(), date.getSeconds()],\n        currentHours = _ref[0],\n        currentMinutes = _ref[1],\n        currentSeconds = _ref[2];\n    _this.jsClockTime.innerHTML = \"\".concat(currentHours < 10 ? \"0\".concat(currentHours) : currentHours, \":\").concat(currentMinutes < 10 ? \"0\".concat(currentMinutes) : currentMinutes, \":\").concat(currentSeconds < 10 ? \"0\".concat(currentSeconds) : currentSeconds);\n  });\n\n  this.jsClockContainer = document.querySelector(\"#jsClockContainer\");\n  this.jsClockTime = this.jsClockContainer ? this.jsClockContainer.querySelector(\"#jsClockTime\") : null;\n\n  if (this.jsClockContainer) {\n    setInterval(this.clockPaint, 100);\n  }\n};\n\nnew Clock();\n\n//# sourceURL=webpack://memo-app/./src/client/js/clock.js?");

/***/ }),

/***/ "./src/client/js/load.js":
/*!*******************************!*\
  !*** ./src/client/js/load.js ***!
  \*******************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Load = function Load() {\n  var _this = this;\n\n  _classCallCheck(this, Load);\n\n  _defineProperty(this, \"LoadInit\", function () {\n    // localStorage에 있는 저장된 데이터 로딩\n    var loadedArray = localStorage.getItem(\"links\");\n    var parsedArray = JSON.parse(loadedArray);\n\n    if (parsedArray) {\n      _this.flagArray = [];\n      parsedArray.forEach(function (parsedOne) {\n        var newObj = {\n          name: parsedOne.name,\n          link: parsedOne.link,\n          id: _this.flagArray.length + 1\n        }; // frontend process\n\n        _this.paintLink(newObj);\n\n        _this.flagArray.push(newObj);\n      }); // backend process\n\n      _this.saveLink(_this.flagArray);\n    } // btn에 이벤트 리스너 설정\n\n\n    _this.jsLoadInputBtn.addEventListener(\"click\", _this.handleInputBtnClick);\n  });\n\n  _defineProperty(this, \"paintLink\", function (obj) {\n    var _ref = [obj.name, obj.link, obj.id],\n        name = _ref[0],\n        link = _ref[1],\n        id = _ref[2]; // container\n\n    var linkContainer = document.createElement(\"div\");\n    linkContainer.className = \"welcome__container\"; // anchor\n\n    var linkAnchor = document.createElement(\"a\");\n    linkAnchor.classList.add(\"welcome__link\");\n    linkAnchor.href = link;\n    linkAnchor.id = id; // icon\n\n    var linkIcon = document.createElement(\"i\");\n    linkIcon.classList.add(\"fab\", \"fa-\".concat(name), \"fa-lg\"); // span\n\n    var linkSpan = document.createElement(\"span\");\n    linkSpan.innerHTML = name;\n    linkSpan.style.display = \"none\";\n    linkAnchor.appendChild(linkIcon);\n    linkAnchor.appendChild(linkSpan); // delete Btn\n\n    var deleteBtn = document.createElement(\"button\");\n    deleteBtn.classList.add(\"btn\", \"link__btn\", \"hide\");\n    deleteBtn.addEventListener(\"click\", _this.handleDeleteBtnClick);\n    var deleteIcon = document.createElement(\"i\");\n    deleteIcon.classList.add(\"fas\", \"fa-trash\");\n    deleteBtn.appendChild(deleteIcon);\n    linkContainer.appendChild(linkAnchor);\n    linkContainer.appendChild(deleteBtn);\n    linkContainer.addEventListener(\"mouseenter\", _this.handleContainerHover);\n    linkContainer.addEventListener(\"mouseleave\", _this.handleContainerLeave);\n\n    _this.jsLoadResult.appendChild(linkContainer);\n  });\n\n  _defineProperty(this, \"saveLink\", function (array) {\n    localStorage.setItem(\"links\", JSON.stringify(array));\n  });\n\n  _defineProperty(this, \"handleInputBtnClick\", function (event) {\n    event.preventDefault();\n    var _ref2 = [_this.jsLoadInput[0].value, _this.jsLoadInput[1].value],\n        name = _ref2[0],\n        link = _ref2[1];\n    var newObj = {\n      name: name,\n      link: link,\n      id: _this.flagArray.length + 1\n    };\n    var _ref3 = [\"\", \"\"];\n    _this.jsLoadInput[0].value = _ref3[0];\n    _this.jsLoadInput[1].value = _ref3[1];\n\n    // frontend process\n    _this.paintLink(newObj);\n\n    _this.flagArray.push(newObj); // backend process\n\n\n    _this.saveLink(_this.flagArray);\n  });\n\n  _defineProperty(this, \"handleDeleteBtnClick\", function (event) {\n    var targetNode = event.target;\n\n    if (targetNode.tagName === \"I\") {\n      targetNode = targetNode.parentNode;\n    }\n\n    var targetContainer = targetNode.parentNode;\n    var targetId = targetContainer.querySelector(\"a\").id; // frontend process\n\n    _this.jsLoadResult.removeChild(targetContainer); // backend process\n\n\n    _this.flagArray = _this.flagArray.filter(function (one) {\n      return one.id !== parseInt(targetId);\n    });\n\n    _this.saveLink(_this.flagArray);\n  });\n\n  _defineProperty(this, \"handleContainerHover\", function (event) {\n    var targetContainer = event.target;\n    var targetBtn = targetContainer.querySelector(\".link__btn\");\n\n    if (targetContainer.classList.contains(\"leaved\")) {\n      targetContainer.classList.replace(\"leaved\", \"hovered\");\n      targetBtn.classList.replace(\"hide-btn\", \"show-btn\");\n    } else {\n      targetContainer.classList.add(\"hovered\");\n      targetBtn.classList.replace(\"hide\", \"show-btn\");\n    }\n  });\n\n  _defineProperty(this, \"handleContainerLeave\", function (event) {\n    var targetContainer = event.target;\n    var targetBtn = targetContainer.querySelector(\".link__btn\");\n    targetContainer.classList.replace(\"hovered\", \"leaved\");\n    targetBtn.classList.replace(\"show-btn\", \"hide-btn\");\n  });\n\n  this.jsLoadContainer = document.querySelector(\"#jsLoadContainer\");\n  this.jsLoadCard = this.jsLoadContainer ? this.jsLoadContainer.querySelector(\"#jsLoadCard\") : null;\n  this.jsLoadInputBox = this.jsLoadCard ? this.jsLoadCard.querySelector(\"#jsLoadInputBox\") : null;\n  this.jsLoadInput = this.jsLoadInputBox ? this.jsLoadInputBox.querySelectorAll(\"input\") : null;\n  this.jsLoadInputBtn = this.jsLoadInputBox ? this.jsLoadInputBox.querySelector(\"#jsLoadInputBtn\") : null;\n  this.jsLoadResult = this.jsLoadCard ? this.jsLoadCard.querySelector(\"#jsLoadResult\") : null;\n  this.flagArray;\n\n  if (this.jsLoadContainer) {\n    this.LoadInit();\n  }\n} // Functions\n;\n\nnew Load();\n\n//# sourceURL=webpack://memo-app/./src/client/js/load.js?");

/***/ }),

/***/ "./src/client/js/main.js":
/*!*******************************!*\
  !*** ./src/client/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/client/scss/styles.scss\");\n/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memo */ \"./src/client/js/memo.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/client/js/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clock */ \"./src/client/js/clock.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load */ \"./src/client/js/load.js\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_load__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll */ \"./src/client/js/scroll.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status */ \"./src/client/js/status.js\");\n/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./btn */ \"./src/client/js/btn.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://memo-app/./src/client/js/main.js?");

/***/ }),

/***/ "./src/client/js/memo.js":
/*!*******************************!*\
  !*** ./src/client/js/memo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status */ \"./src/client/js/status.js\");\n\nvar jsMemoHeader = document.querySelector(\"#jsMemoHeader\");\nvar jsMemoBtn = jsMemoHeader ? jsMemoHeader.querySelector(\"#jsMemoBtn\") : null;\nvar jsMemoIcon = jsMemoBtn ? jsMemoBtn.querySelector(\"#jsMemoIcon\") : null;\nvar jsMemoInputBox = jsMemoHeader ? jsMemoHeader.querySelector(\"#jsMemoInputBox\") : null;\nvar jsMemoInput = jsMemoInputBox ? jsMemoInputBox.querySelectorAll(\"input\") : null;\nvar jsMemoMain = document.querySelector(\"#jsMemoMain\");\nvar jsNewMemoSection = jsMemoMain ? jsMemoMain.querySelector(\".memo-section\") : null;\nvar jsMemoMainCompleted = document.querySelector(\"#jsMemoMainCompleted\");\nvar jsNewMemoSectionCompleted = jsMemoMainCompleted ? jsMemoMainCompleted.querySelector(\".memo-section\") : null;\nvar memoArray = [];\nvar TODOS = \"toDos\";\nvar TODO_FLAG = \"toDo\";\nvar COMPLETED_FLAG = \"completed\";\n\nfunction saveMemo(array) {\n  sessionStorage.setItem(TODOS, JSON.stringify(array));\n}\n\nfunction handleDeleteBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  var targetMemo = targetNode.parentNode;\n  var targetId = targetMemo.id; // Delete target in Frontend\n\n  targetMemo.remove(); // Delete target in Backend\n\n  memoArray = memoArray.filter(function (oneMemo) {\n    return oneMemo.id !== parseInt(targetId);\n  });\n  sessionStorage.setItem(TODOS, JSON.stringify(memoArray)); // Update statusBar\n\n  (0,_status__WEBPACK_IMPORTED_MODULE_0__.statusCount)();\n}\n\nfunction handleOptionBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  targetNode.classList.toggle(\"clicked\");\n  var targetContainer = targetNode.parentNode;\n\n  if (targetNode.classList.contains(\"clicked\")) {\n    // show all option Btns\n    var targetHideBtns = targetContainer.querySelectorAll(\"button.hide\");\n    targetHideBtns.forEach(function (targetHideBtn) {\n      targetHideBtn.classList.replace(\"hide\", \"show\");\n    }); // targetOptionBtn direction changes to left\n\n    var targetIcon = targetNode.querySelector(\"i\");\n    targetIcon.classList.replace(\"fa-chevron-right\", \"fa-chevron-left\");\n  } else {\n    // hide all option Btns\n    var _targetHideBtns = targetContainer.querySelectorAll(\"button.show\");\n\n    _targetHideBtns.forEach(function (targetHideBtn) {\n      targetHideBtn.classList.replace(\"show\", \"hide\");\n    }); // targetOptionBtn direction changes to right\n\n\n    var _targetIcon = targetNode.querySelector(\"i\");\n\n    _targetIcon.classList.replace(\"fa-chevron-left\", \"fa-chevron-right\");\n  }\n}\n\nfunction handleEditBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  targetNode.classList.toggle(\"clicked\");\n  var targetContainer = targetNode.parentNode;\n\n  if (targetNode.classList.contains(\"clicked\")) {\n    // replace memo title to input bar\n    var titleContainer = targetContainer.querySelector(\".memo__title\");\n    var titleInputBar = document.createElement(\"input\");\n    titleInputBar.type = \"text\";\n    titleInputBar.value = titleContainer.innerHTML;\n    titleInputBar.classList.add(\"input\");\n    targetContainer.replaceChild(titleInputBar, titleContainer); // replace memo description to input bar\n\n    var descriptionContainer = targetContainer.querySelector(\".memo__description\");\n    var descriptionInputBar = document.createElement(\"input\");\n    descriptionInputBar.type = \"text\";\n    descriptionInputBar.value = descriptionContainer.innerHTML;\n    descriptionInputBar.classList.add(\"input\");\n    targetContainer.replaceChild(descriptionInputBar, descriptionContainer);\n  } else {\n    var editedInputBars = targetContainer.querySelectorAll(\"input.input\"); // edit on frontend Section\n\n    var editedTitleBox = document.createElement(\"h2\");\n    editedTitleBox.className = \"memo__title\";\n    editedTitleBox.innerHTML = editedInputBars[0].value;\n    var editedDescriptionBox = document.createElement(\"h5\");\n    editedDescriptionBox.className = \"memo__description\";\n    editedDescriptionBox.innerHTML = editedInputBars[1].value;\n    targetContainer.replaceChild(editedTitleBox, editedInputBars[0]);\n    targetContainer.replaceChild(editedDescriptionBox, editedInputBars[1]); // edit on backend Section\n\n    var editedContainerId = targetContainer.id;\n    memoArray = memoArray.map(function (oneMemo) {\n      if (oneMemo.id === parseInt(editedContainerId)) {\n        return {\n          title: editedInputBars[0].value,\n          description: editedInputBars[1].value,\n          id: oneMemo.id\n        };\n      } else {\n        return oneMemo;\n      }\n    });\n    sessionStorage.setItem(TODOS, JSON.stringify(memoArray));\n  }\n}\n\nfunction handleCompleteBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  var targetMemo = targetNode.parentNode;\n  var targetId = targetMemo.id; // Delete target on Frontend\n\n  targetMemo.classList.add(\"go-complete-area\");\n  targetMemo.addEventListener(\"animationend\", function () {\n    this.remove();\n  });\n  var goToCompleteObj; // Edit target in Backend\n\n  memoArray = memoArray.map(function (oneMemo) {\n    if (oneMemo.id === parseInt(targetId)) {\n      var newMemoObj = {\n        title: oneMemo.title,\n        description: oneMemo.description,\n        id: oneMemo.id,\n        completed: true\n      };\n      goToCompleteObj = newMemoObj;\n      return newMemoObj;\n    } else {\n      return oneMemo;\n    }\n  });\n  sessionStorage.setItem(TODOS, JSON.stringify(memoArray)); // Paint target on frontend\n\n  paintMemo(goToCompleteObj, COMPLETED_FLAG); // Update statusBar\n\n  (0,_status__WEBPACK_IMPORTED_MODULE_0__.statusCount)();\n}\n\nfunction handleToDoBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  var targetMemo = targetNode.parentNode;\n  var targetId = targetMemo.id; // Delete target in Frontend\n\n  targetMemo.classList.add(\"go-toDo-area\");\n  targetMemo.addEventListener(\"animationend\", function () {\n    this.remove();\n  });\n  var goToDoObj; // Edit target in Backend\n\n  memoArray = memoArray.map(function (oneMemo) {\n    if (oneMemo.id === parseInt(targetId)) {\n      var newMemoObj = {\n        title: oneMemo.title,\n        description: oneMemo.description,\n        id: oneMemo.id,\n        completed: false\n      };\n      goToDoObj = newMemoObj;\n      return newMemoObj;\n    } else {\n      return oneMemo;\n    }\n  });\n  sessionStorage.setItem(TODOS, JSON.stringify(memoArray)); // paint on frontend\n\n  paintMemo(goToDoObj, TODO_FLAG); // Update statusBar\n\n  (0,_status__WEBPACK_IMPORTED_MODULE_0__.statusCount)();\n}\n\nfunction paintMemo(obj, targetList) {\n  // .memo box\n  var divBox = document.createElement(\"div\");\n  divBox.className = \"memo\";\n  divBox.id = obj.id; // .memo__title box\n\n  var titleBox = document.createElement(\"h2\");\n  titleBox.className = \"memo__title\";\n  titleBox.innerHTML = obj.title; // .memo__description box\n\n  var descriptionBox = document.createElement(\"h5\");\n  descriptionBox.className = \"memo__description\";\n  descriptionBox.innerHTML = obj.description; // option button\n\n  var optionBtn = document.createElement(\"button\");\n  optionBtn.classList.add(\"btn\", \"memo__option\");\n  var optionIcon = document.createElement(\"i\");\n  optionIcon.classList.add(\"fas\", \"fa-chevron-right\", \"fa-lg\");\n  optionBtn.appendChild(optionIcon);\n  optionBtn.addEventListener(\"click\", handleOptionBtnClick); // delete button\n\n  var deleteBtn = document.createElement(\"button\");\n  deleteBtn.classList.add(\"btn\", \"memo__delete\", \"hide\");\n  var deleteIcon = document.createElement(\"i\");\n  deleteIcon.classList.add(\"fas\", \"fa-trash\", \"fa-lg\");\n  deleteBtn.appendChild(deleteIcon);\n  deleteBtn.addEventListener(\"click\", handleDeleteBtnClick); // edit button\n\n  var editBtn = document.createElement(\"button\");\n  editBtn.classList.add(\"btn\", \"memo__edit\", \"hide\");\n  var editIcon = document.createElement(\"i\");\n  editIcon.classList.add(\"fas\", \"fa-pen\", \"fa-lg\");\n  editBtn.appendChild(editIcon);\n  editBtn.addEventListener(\"click\", handleEditBtnClick);\n  divBox.appendChild(titleBox);\n  divBox.appendChild(descriptionBox);\n  divBox.appendChild(optionBtn);\n  divBox.appendChild(deleteBtn);\n  divBox.appendChild(editBtn);\n\n  if (targetList === TODO_FLAG) {\n    // go to complete button\n    var completeBtn = document.createElement(\"button\");\n    completeBtn.classList.add(\"btn\", \"memo__complete\", \"hide\");\n    var completeIcon = document.createElement(\"i\");\n    completeIcon.classList.add(\"fas\", \"fa-check\", \"fa-lg\");\n    completeBtn.appendChild(completeIcon);\n    completeBtn.addEventListener(\"click\", handleCompleteBtnClick); // adding completeBtn\n\n    divBox.appendChild(completeBtn); // adding to toDoSection\n\n    jsNewMemoSection.appendChild(divBox);\n  }\n\n  if (targetList === COMPLETED_FLAG) {\n    // go to toDoBtn\n    var toDoBtn = document.createElement(\"button\");\n    toDoBtn.classList.add(\"btn\", \"memo__toDo\", \"hide\");\n    var toDoIcon = document.createElement(\"i\");\n    toDoIcon.classList.add(\"fas\", \"fa-reply\", \"fa-lg\");\n    toDoBtn.appendChild(toDoIcon);\n    toDoBtn.addEventListener(\"click\", handleToDoBtnClick); // adding toDoBtn\n\n    divBox.appendChild(toDoBtn); // adding to completedSection\n\n    jsNewMemoSectionCompleted.appendChild(divBox);\n  }\n}\n\nfunction handleAddBtnClick(event) {\n  event.preventDefault();\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"I\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  targetNode.classList.toggle(\"clicked\");\n\n  if (targetNode.classList.contains(\"clicked\")) {\n    jsMemoIcon.classList.replace(\"fa-plus\", \"fa-check\"); // show input\n\n    jsMemoInputBox.classList.replace(\"hide\", \"show\");\n  } else {\n    jsMemoIcon.classList.replace(\"fa-check\", \"fa-plus\"); // hide input\n\n    jsMemoInputBox.classList.replace(\"show\", \"hide\");\n    var idLists = memoArray.map(function (obj) {\n      return obj.id;\n    });\n    var maxId = Math.max.apply(null, idLists);\n    var newMemoObj = {\n      title: jsMemoInput[0].value,\n      description: jsMemoInput[1].value,\n      id: memoArray.length === 0 ? 1 : parseInt(maxId) + 1,\n      completed: false\n    };\n\n    if (newMemoObj.title !== \"\") {\n      // Frontend Process\n      paintMemo(newMemoObj, TODO_FLAG); // Backend Process\n\n      memoArray.push(newMemoObj);\n      saveMemo(memoArray);\n    } // Update statusBar\n\n\n    (0,_status__WEBPACK_IMPORTED_MODULE_0__.statusCount)(); // Input 값 초기화\n\n    var _ref = [\"\", \"\"];\n    jsMemoInput[0].value = _ref[0];\n    jsMemoInput[1].value = _ref[1];\n  }\n}\n\nfunction initMemo() {\n  // 기존의 sessionStorage 할 일들 내용 로드\n  var loadedArray = sessionStorage.getItem(TODOS);\n  var parsedArray;\n\n  if (!loadedArray) {\n    parsedArray = null;\n  } else {\n    parsedArray = JSON.parse(loadedArray);\n  }\n\n  if (parsedArray) {\n    parsedArray.forEach(function (oneMemo) {\n      var initedMemo = {\n        title: oneMemo.title,\n        description: oneMemo.description,\n        id: memoArray.length + 1,\n        completed: oneMemo.completed\n      }; // frontend Process\n\n      if (initedMemo.completed === false) {\n        paintMemo(initedMemo, TODO_FLAG);\n      } else {\n        paintMemo(initedMemo, COMPLETED_FLAG);\n      } // backend Procass\n\n\n      memoArray.push(initedMemo);\n      saveMemo(memoArray);\n    });\n  } // memo click Btn 활성화\n\n\n  jsMemoBtn.addEventListener(\"click\", handleAddBtnClick);\n}\n\nif (jsMemoHeader && jsMemoMain) {\n  initMemo();\n}\n\n//# sourceURL=webpack://memo-app/./src/client/js/memo.js?");

/***/ }),

/***/ "./src/client/js/nav.js":
/*!******************************!*\
  !*** ./src/client/js/nav.js ***!
  \******************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Class\nvar Nav = function Nav() {\n  var _this = this;\n\n  _classCallCheck(this, Nav);\n\n  _defineProperty(this, \"initNav\", function () {\n    _this.jsNavBtn.addEventListener(\"click\", _this.handleNavBtn);\n  });\n\n  _defineProperty(this, \"handleNavBtn\", function (event) {\n    event.preventDefault();\n\n    _this.jsNavBtn.classList.toggle(\"btn-clicked\");\n\n    if (_this.jsNavBtn.classList.contains(\"btn-clicked\")) {\n      if (_this.jsNavUl.classList.contains(\"init-hide\")) {\n        _this.jsNavUl.classList.replace(\"init-hide\", \"show-slider\");\n      } else {\n        _this.jsNavUl.classList.replace(\"hide-slider\", \"show-slider\");\n      }\n    } else {\n      _this.jsNavUl.classList.replace(\"show-slider\", \"hide-slider\");\n    }\n  });\n\n  this.jsNavBtn = document.querySelector(\"#jsNavBtn\");\n  this.jsNavIcon = this.jsNavBtn ? this.jsNavBtn.querySelector(\"i\") : null;\n  this.jsNavUl = document.querySelector(\"#jsNavUl\");\n\n  if (this.jsNavBtn && this.jsNavUl) {\n    this.initNav();\n  }\n} // functions\n;\n\nnew Nav();\n\n//# sourceURL=webpack://memo-app/./src/client/js/nav.js?");

/***/ }),

/***/ "./src/client/js/scroll.js":
/*!*********************************!*\
  !*** ./src/client/js/scroll.js ***!
  \*********************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar jsSideBarContainer = document.querySelector(\"#jsSideBarContainer\");\nvar jsSideBarToDo = jsSideBarContainer ? jsSideBarContainer.querySelector(\"#jsSideBarToDo\") : null;\nvar jsSideBarToDoBtn = jsSideBarToDo ? jsSideBarToDo.querySelector(\"#jsSideBarToDoBtn\") : null;\nvar jsSideBarCompleted = jsSideBarContainer ? jsSideBarContainer.querySelector(\"#jsSideBarCompleted\") : null;\nvar jsSideBarCompletedBtn = jsSideBarCompleted ? jsSideBarCompleted.querySelector(\"#jsSideBarCompletedBtn\") : null;\nvar jsMemoContainer = document.querySelector(\"#jsMemoContainer\");\nvar jsMemoContainerToDo = jsMemoContainer ? jsMemoContainer.querySelector(\"#jsMemoContainerToDo\") : null;\nvar jsMemoContainerCompleted = jsMemoContainer ? jsMemoContainer.querySelector(\"#jsMemoContainerCompleted\") : null;\n\nfunction handleSideBarToDoBtn(event) {\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"SPAN\") {\n    targetNode = targetNode.parentNode;\n  } // 할 일 클릭 버튼 숨김\n\n\n  targetNode.classList.replace(\"show\", \"hide-bar\");\n  targetNode.disabled = true; // 한 일 클릭 버튼 보여주기\n\n  jsSideBarCompletedBtn.classList.replace(\"hide-bar\", \"show\");\n  jsSideBarCompletedBtn.disabled = false; // 화면 grid 0% ~ 50% 상태 보여주기\n\n  jsMemoContainerToDo.scrollIntoView({\n    behavior: \"smooth\",\n    block: \"start\",\n    inline: \"start\"\n  });\n}\n\nfunction handleSideBarCompleted(event) {\n  var targetNode = event.target;\n\n  if (targetNode.tagName === \"SPAN\") {\n    targetNode = targetNode.parentNode;\n  }\n\n  if (!targetNode.classList.contains(\"show\")) {\n    // 한 일 클릭 버튼 숨김 \n    targetNode.classList.add(\"hide-bar\");\n    targetNode.disabled = true; // 할 일 클릭 버튼 보여주기\n\n    jsSideBarToDoBtn.classList.replace(\"init-hide-bar\", \"show\");\n    jsSideBarToDoBtn.disabled = false;\n  } else {\n    // 한 일 클릭 버튼 숨김\n    targetNode.classList.replace(\"show\", \"hide-bar\");\n    targetNode.disabled = true; // 할 일 클릭 버튼 보여주기\n\n    jsSideBarToDoBtn.classList.replace(\"hide-bar\", \"show\");\n    jsSideBarToDoBtn.disabled = false;\n  } // 화면 grid 50% ~ 100% 상태 보여주기\n\n\n  jsMemoContainerCompleted.scrollIntoView({\n    behavior: \"smooth\",\n    block: \"start\",\n    inline: \"end\"\n  });\n}\n\nfunction initSideBar() {\n  jsSideBarToDoBtn.addEventListener(\"click\", handleSideBarToDoBtn);\n  jsSideBarCompletedBtn.addEventListener(\"click\", handleSideBarCompleted);\n}\n\nif (jsSideBarContainer && jsMemoContainer) {\n  initSideBar();\n} // Class\n\n\nvar Scroll = function Scroll() {\n  _classCallCheck(this, Scroll);\n\n  this.jsSideBarContainer = document.querySelector(\"#jsSideBarContainer\");\n  this.jsSideBarToDo = jsSideBarContainer ? jsSideBarContainer.querySelector(\"#jsSideBarToDo\") : null;\n  this.jsSideBarToDoBtn = jsSideBarToDo ? jsSideBarToDo.querySelector(\"#jsSideBarToDoBtn\") : null;\n  this.jsSideBarCompleted = jsSideBarContainer ? jsSideBarContainer.querySelector(\"#jsSideBarCompleted\") : null;\n  this.jsSideBarCompletedBtn = jsSideBarCompleted ? jsSideBarCompleted.querySelector(\"#jsSideBarCompletedBtn\") : null;\n  this.jsMemoContainer = document.querySelector(\"#jsMemoContainer\");\n  this.jsMemoContainerToDo = jsMemoContainer ? jsMemoContainer.querySelector(\"#jsMemoContainerToDo\") : null;\n  this.jsMemoContainerCompleted = jsMemoContainer ? jsMemoContainer.querySelector(\"#jsMemoContainerCompleted\") : null;\n};\n\n//# sourceURL=webpack://memo-app/./src/client/js/scroll.js?");

/***/ }),

/***/ "./src/client/js/status.js":
/*!*********************************!*\
  !*** ./src/client/js/status.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statusCount\": () => (/* binding */ statusCount)\n/* harmony export */ });\nvar jsSideBarStatus = document.querySelector(\"#jsSideBarStatus\");\nvar jsSideBarStatusContainer = jsSideBarStatus ? jsSideBarStatus.querySelector(\"#jsSideBarStatusContainer\") : null;\nvar jsSideBarStatusBar = jsSideBarStatusContainer ? jsSideBarStatusContainer.querySelector(\"#jsSideBarStatusBar\") : null;\nfunction statusCount() {\n  var currentStorage = sessionStorage.getItem(\"toDos\");\n  var parsedStorage = JSON.parse(currentStorage);\n  var statusList = parsedStorage ? parsedStorage.map(function (item) {\n    return item.completed;\n  }) : [];\n  var trueCount = 0;\n  var falseCount = 0;\n  statusList.forEach(function (item) {\n    if (item === true) {\n      trueCount = trueCount + 1;\n    } else {\n      falseCount = falseCount + 1;\n    }\n  });\n  jsSideBarStatusBar.addEventListener(\"transitionstart\", function () {\n    jsSideBarStatusContainer.classList.add(\"status-focus\");\n  });\n  jsSideBarStatusBar.addEventListener(\"transitionend\", function () {\n    jsSideBarStatusContainer.classList.remove(\"status-focus\");\n  }); // statusBar update\n\n  var widthFraction = trueCount / (trueCount + falseCount);\n  jsSideBarStatusBar.style.width = \"\".concat(widthFraction * 100, \"%\");\n}\n\nfunction initStatus() {\n  // initial count\n  statusCount();\n}\n\nif (jsSideBarStatus) {\n  initStatus();\n}\n\n//# sourceURL=webpack://memo-app/./src/client/js/status.js?");

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