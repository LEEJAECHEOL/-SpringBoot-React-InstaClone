webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/postSlice.js":
/*!*******************************!*\
  !*** ./reducers/postSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _post = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\"));\n\nvar initialState = {\n  isLoading: false,\n  page: 0\n};\nvar postSlice = (0, _toolkit.createSlice)({\n  name: \"post\",\n  initialState: initialState,\n  reducers: {},\n  extraReducers: function extraReducers(builder) {\n    return builder // get request\n    .addCase(get.pending, function (state, action) {\n      state.isLoading = true;\n    }) // get success\n    .addCase(get.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/\");\n    }) // get fail\n    .addCase(get.rejected, function (state, action) {\n      state.isLoading = false;\n    }) // save request\n    .addCase(_post.save.pending, function (state, action) {\n      state.isLoading = true;\n    }) // save success -> / 로 이동\n    .addCase(_post.save.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/\");\n    }) // save fail\n    .addCase(_post.save.rejected, function (state, action) {\n      state.isLoading = false;\n      alert(\"포스트 작성에 실패하였습니다.\");\n    });\n  }\n});\nmodule.exports = postSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFNsaWNlLmpzP2U4YWYiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwicGFnZSIsInBvc3RTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImdldCIsInBlbmRpbmciLCJzdGF0ZSIsImFjdGlvbiIsImZ1bGZpbGxlZCIsIlJvdXRlciIsInB1c2giLCJyZWplY3RlZCIsInNhdmUiLCJhbGVydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFdBQVMsRUFBRSxLQURRO0FBRW5CQyxNQUFJLEVBQUU7QUFGYSxDQUFyQjtBQUtBLElBQU1DLFNBQVMsR0FBRywwQkFBWTtBQUM1QkMsTUFBSSxFQUFFLE1BRHNCO0FBRTVCSixjQUFZLEVBQVpBLFlBRjRCO0FBRzVCSyxVQUFRLEVBQUUsRUFIa0I7QUFJNUJDLGVBQWEsRUFBRSx1QkFBQ0MsT0FBRDtBQUFBLFdBQ2JBLE9BQU8sQ0FDTDtBQURLLEtBRUpDLE9BRkgsQ0FFV0MsR0FBRyxDQUFDQyxPQUZmLEVBRXdCLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN2Q0QsV0FBSyxDQUFDVixTQUFOLEdBQWtCLElBQWxCO0FBQ0QsS0FKSCxFQUtFO0FBTEYsS0FNR08sT0FOSCxDQU1XQyxHQUFHLENBQUNJLFNBTmYsRUFNMEIsVUFBQ0YsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3pDRCxXQUFLLENBQUNWLFNBQU4sR0FBa0IsS0FBbEI7O0FBQ0FhLHlCQUFPQyxJQUFQLENBQVksR0FBWjtBQUNELEtBVEgsRUFVRTtBQVZGLEtBV0dQLE9BWEgsQ0FXV0MsR0FBRyxDQUFDTyxRQVhmLEVBV3lCLFVBQUNMLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4Q0QsV0FBSyxDQUFDVixTQUFOLEdBQWtCLEtBQWxCO0FBQ0QsS0FiSCxFQWNFO0FBZEYsS0FlR08sT0FmSCxDQWVXUyxXQUFLUCxPQWZoQixFQWV5QixVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDeENELFdBQUssQ0FBQ1YsU0FBTixHQUFrQixJQUFsQjtBQUNELEtBakJILEVBa0JFO0FBbEJGLEtBbUJHTyxPQW5CSCxDQW1CV1MsV0FBS0osU0FuQmhCLEVBbUIyQixVQUFDRixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDMUNELFdBQUssQ0FBQ1YsU0FBTixHQUFrQixLQUFsQjs7QUFDQWEseUJBQU9DLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0F0QkgsRUF1QkU7QUF2QkYsS0F3QkdQLE9BeEJILENBd0JXUyxXQUFLRCxRQXhCaEIsRUF3QjBCLFVBQUNMLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6Q0QsV0FBSyxDQUFDVixTQUFOLEdBQWtCLEtBQWxCO0FBQ0FpQixXQUFLLENBQUMsa0JBQUQsQ0FBTDtBQUNELEtBM0JILENBRGE7QUFBQTtBQUphLENBQVosQ0FBbEI7QUFtQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLFNBQWpCIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdFNsaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgc2F2ZSB9IGZyb20gXCIuLi9hY3Rpb25zL3Bvc3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgcGFnZTogMCxcbn07XG5cbmNvbnN0IHBvc3RTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJwb3N0XCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHt9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT5cbiAgICBidWlsZGVyXG4gICAgICAvLyBnZXQgcmVxdWVzdFxuICAgICAgLmFkZENhc2UoZ2V0LnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gZ2V0IHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGdldC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICB9KVxuICAgICAgLy8gZ2V0IGZhaWxcbiAgICAgIC5hZGRDYXNlKGdldC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLy8gc2F2ZSByZXF1ZXN0XG4gICAgICAuYWRkQ2FzZShzYXZlLnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gc2F2ZSBzdWNjZXNzIC0+IC8g66GcIOydtOuPmVxuICAgICAgLmFkZENhc2Uoc2F2ZS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICB9KVxuICAgICAgLy8gc2F2ZSBmYWlsXG4gICAgICAuYWRkQ2FzZShzYXZlLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYWxlcnQoXCLtj6zsiqTtirgg7J6R7ISx7JeQIOyLpO2MqO2VmOyYgOyKteuLiOuLpC5cIik7XG4gICAgICB9KSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvc3RTbGljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/postSlice.js\n");

/***/ })

})