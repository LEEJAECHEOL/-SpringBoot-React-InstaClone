webpackHotUpdate_N_E("pages/login",{

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: login, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return join; });\n/* harmony import */ var _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\n\n\nvar config = {\n  headers: {\n    \"Content-Type\": \"application/json; charset=utf-8\"\n  }\n};\nvar login = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__[\"createAsyncThunk\"])(\"user/login\", /*#__PURE__*/function () {\n  var _ref = Object(_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, thunkAPI) {\n    var response;\n    return _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/login\", JSON.stringify(data)).then(function (response) {\n              console.log(response.headers);\n            });\n\n          case 2:\n            response = _context.sent;\n            console.dir(response);\n            console.dir(response.headers[\"Authorization\"]); // for (let header of response.headers) {\n            //   console.log(header);\n            //   // if (header[0] === \"Authorization\") {\n            //   //   console.log(header[1]);\n            //   //   // localStorage.setItem(\"Authorization\", header[1]);\n            //   // }\n            // }\n\n            return _context.abrupt(\"return\", response.data);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar join = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__[\"createAsyncThunk\"])(\"user/join\", /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data, thunkAPI) {\n    var response;\n    return _Users_lee_Desktop_instaClone_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/auth/join\", JSON.stringify(data), config);\n\n          case 2:\n            response = _context2.sent;\n            return _context2.abrupt(\"return\", response.data);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy91c2VyLmpzP2QxY2UiXSwibmFtZXMiOlsiY29uZmlnIiwiaGVhZGVycyIsImxvZ2luIiwiY3JlYXRlQXN5bmNUaHVuayIsImRhdGEiLCJ0aHVua0FQSSIsImF4aW9zIiwicG9zdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGlyIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQUNQLG9CQUFnQjtBQURUO0FBREksQ0FBZjtBQU1PLElBQU1DLEtBQUssR0FBR0MseUVBQWdCLENBQUMsWUFBRDtBQUFBLDhSQUFlLGlCQUFPQyxJQUFQLEVBQWFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDM0JDLDRDQUFLLENBQ3pCQyxJQURvQixDQUNmLFFBRGUsRUFDTEMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FESyxFQUVwQk0sSUFGb0IsQ0FFZixVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ1YsT0FBckI7QUFDRCxhQUpvQixDQUQyQjs7QUFBQTtBQUM1Q1Usb0JBRDRDO0FBTWxEQyxtQkFBTyxDQUFDRSxHQUFSLENBQVlILFFBQVo7QUFDQUMsbUJBQU8sQ0FBQ0UsR0FBUixDQUFZSCxRQUFRLENBQUNWLE9BQVQsQ0FBaUIsZUFBakIsQ0FBWixFQVBrRCxDQVFsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFka0QsNkNBZTNDVSxRQUFRLENBQUNQLElBZmtDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUI7QUFrQkEsSUFBTVcsSUFBSSxHQUFHWix5RUFBZ0IsQ0FBQyxXQUFEO0FBQUEsK1JBQWMsa0JBQU9DLElBQVAsRUFBYUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN6QkMsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFmLENBQXpCLEVBQStDSixNQUEvQyxDQUR5Qjs7QUFBQTtBQUMxQ1csb0JBRDBDO0FBQUEsOENBRXpDQSxRQUFRLENBQUNQLElBRmdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBN0IiLCJmaWxlIjoiLi9hY3Rpb25zL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSBjcmVhdGVBc3luY1RodW5rKFwidXNlci9sb2dpblwiLCBhc3luYyAoZGF0YSwgdGh1bmtBUEkpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xuICAgIC5wb3N0KFwiL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuaGVhZGVycyk7XG4gICAgfSk7XG4gIGNvbnNvbGUuZGlyKHJlc3BvbnNlKTtcbiAgY29uc29sZS5kaXIocmVzcG9uc2UuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0pO1xuICAvLyBmb3IgKGxldCBoZWFkZXIgb2YgcmVzcG9uc2UuaGVhZGVycykge1xuICAvLyAgIGNvbnNvbGUubG9nKGhlYWRlcik7XG4gIC8vICAgLy8gaWYgKGhlYWRlclswXSA9PT0gXCJBdXRob3JpemF0aW9uXCIpIHtcbiAgLy8gICAvLyAgIGNvbnNvbGUubG9nKGhlYWRlclsxXSk7XG4gIC8vICAgLy8gICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkF1dGhvcml6YXRpb25cIiwgaGVhZGVyWzFdKTtcbiAgLy8gICAvLyB9XG4gIC8vIH1cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59KTtcblxuZXhwb3J0IGNvbnN0IGpvaW4gPSBjcmVhdGVBc3luY1RodW5rKFwidXNlci9qb2luXCIsIGFzeW5jIChkYXRhLCB0aHVua0FQSSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXV0aC9qb2luXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBjb25maWcpO1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/user.js\n");

/***/ })

})