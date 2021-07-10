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

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (() => {

eval("var socket = io(\"/\"); // function abc(message) {\n//   socket.emit(\"message\", { message });\n// }\n// socket.on(\"newMessage\", ({ message }) => {\n//   console.log(message);\n// });\n\nsocket.emit(\"setNickName\", {\n  nickName: \"nickName\"\n});\nsocket.on(\"newHellow\", function (_ref) {\n  var message = _ref.message,\n      nickName = _ref.nickName;\n  console.log(\"\".concat(nickName, \" \\uC5D0\\uAC8C newHellow \\uC774\\uBCA4\\uD2B8 \\uBC1B\\uC74C\").concat(message));\n});\nsocket.emit(\"hellow\", {\n  message: \"message\"\n});\n\n//# sourceURL=webpack://socketio/./src/assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/index.js"]();
/******/ 	
/******/ })()
;