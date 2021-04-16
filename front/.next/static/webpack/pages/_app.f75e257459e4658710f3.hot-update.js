webpackHotUpdate_N_E("pages/_app",{

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: join, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return join; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = \"http://localhost:8080\";\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.post[\"Content-Type\"] = \"application/json; charset=utf-8\";\nvar join = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__[\"createAsyncThunk\"])(\"user/join\", /*#__PURE__*/function () {\n  var _ref = Object(_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, thunkAPI) {\n    var response;\n    return _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/auth/join\", JSON.stringify(data));\n\n          case 2:\n            response = _context.sent;\n            return _context.abrupt(\"return\", response.data);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar login = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__[\"createAsyncThunk\"])(\"user/login\", /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data, thunkAPI) {\n    var response, _iterator, _step, header;\n\n    return _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/login\", JSON.stringify(data));\n\n          case 2:\n            response = _context2.sent;\n            console.log(response);\n            _iterator = _createForOfIteratorHelper(response.headers);\n\n            try {\n              for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                header = _step.value;\n                console.log(header);\n\n                if (header[0] === \"authorization\") {\n                  console.log(header[1]); // localStorage.setItem(\"Authorization\", header[1]);\n                }\n              }\n            } catch (err) {\n              _iterator.e(err);\n            } finally {\n              _iterator.f();\n            }\n\n            return _context2.abrupt(\"return\", response.data);\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy91c2VyLmpzP2QxY2UiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwicG9zdCIsImpvaW4iLCJjcmVhdGVBc3luY1RodW5rIiwiZGF0YSIsInRodW5rQVBJIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUFBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF5Qix1QkFBekI7QUFDQUYsNENBQUssQ0FBQ0MsUUFBTixDQUFlRSxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxpQ0FBOUM7QUFFTyxJQUFNQyxJQUFJLEdBQUdDLHlFQUFnQixDQUFDLFdBQUQ7QUFBQSw4UkFBYyxpQkFBT0MsSUFBUCxFQUFhQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3pCUiw0Q0FBSyxDQUFDSSxJQUFOLENBQVcsWUFBWCxFQUF5QkssSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsQ0FBekIsQ0FEeUI7O0FBQUE7QUFDMUNJLG9CQUQwQztBQUFBLDZDQUV6Q0EsUUFBUSxDQUFDSixJQUZnQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFkOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTdCO0FBS0EsSUFBTUssS0FBSyxHQUFHTix5RUFBZ0IsQ0FBQyxZQUFEO0FBQUEsK1JBQWUsa0JBQU9DLElBQVAsRUFBYUMsUUFBYjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDM0JSLDRDQUFLLENBQUNJLElBQU4sQ0FBVyxRQUFYLEVBQXFCSyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZixDQUFyQixDQUQyQjs7QUFBQTtBQUM1Q0ksb0JBRDRDO0FBRWxERSxtQkFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFGa0QsbURBRy9CQSxRQUFRLENBQUNSLE9BSHNCOztBQUFBO0FBR2xELGtFQUFxQztBQUE1Qlksc0JBQTRCO0FBQ25DRix1QkFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQVo7O0FBQ0Esb0JBQUlBLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBYyxlQUFsQixFQUFtQztBQUNqQ0YseUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUMsQ0FBRCxDQUFsQixFQURpQyxDQUVqQztBQUNEO0FBQ0Y7QUFUaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FVM0NKLFFBQVEsQ0FBQ0osSUFWa0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QiIsImZpbGUiOiIuL2FjdGlvbnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuXG5leHBvcnQgY29uc3Qgam9pbiA9IGNyZWF0ZUFzeW5jVGh1bmsoXCJ1c2VyL2pvaW5cIiwgYXN5bmMgKGRhdGEsIHRodW5rQVBJKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIi9hdXRoL2pvaW5cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSBjcmVhdGVBc3luY1RodW5rKFwidXNlci9sb2dpblwiLCBhc3luYyAoZGF0YSwgdGh1bmtBUEkpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICBmb3IgKGxldCBoZWFkZXIgb2YgcmVzcG9uc2UuaGVhZGVycykge1xuICAgIGNvbnNvbGUubG9nKGhlYWRlcik7XG4gICAgaWYgKGhlYWRlclswXSA9PT0gXCJhdXRob3JpemF0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGhlYWRlclsxXSk7XG4gICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkF1dGhvcml6YXRpb25cIiwgaGVhZGVyWzFdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./actions/user.js\n");

/***/ })

})