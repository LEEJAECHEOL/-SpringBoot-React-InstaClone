webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/postSlice.js":
/*!*******************************!*\
  !*** ./reducers/postSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _post = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\"));\n\nvar initialState = {\n  isLoading: false,\n  lastPage: false,\n  posts: []\n};\nvar postSlice = (0, _toolkit.createSlice)({\n  name: \"post\",\n  initialState: initialState,\n  reducers: {},\n  extraReducers: function extraReducers(builder) {\n    return builder // get request\n    .addCase(_post.get.pending, function (state, action) {\n      state.isLoading = true;\n    }) // get success\n    .addCase(_post.get.fulfilled, function (state, action) {\n      console.log(action.payload.content);\n      state.posts.concat(action.payload.content); // 글 목록 담기\n\n      state.lastPage = action.payload.last;\n      state.isLoading = false;\n    }) // get fail\n    .addCase(_post.get.rejected, function (state, action) {\n      state.isLoading = false;\n    }) // save request\n    .addCase(_post.save.pending, function (state, action) {\n      state.isLoading = true;\n    }) // save success -> / 로 이동\n    .addCase(_post.save.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/\");\n    }) // save fail\n    .addCase(_post.save.rejected, function (state, action) {\n      state.isLoading = false;\n      alert(\"포스트 작성에 실패하였습니다.\");\n    });\n  }\n});\nmodule.exports = postSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFNsaWNlLmpzP2U4YWYiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwibGFzdFBhZ2UiLCJwb3N0cyIsInBvc3RTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImdldCIsInBlbmRpbmciLCJzdGF0ZSIsImFjdGlvbiIsImZ1bGZpbGxlZCIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29udGVudCIsImNvbmNhdCIsImxhc3QiLCJyZWplY3RlZCIsInNhdmUiLCJSb3V0ZXIiLCJwdXNoIiwiYWxlcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxXQUFTLEVBQUUsS0FEUTtBQUVuQkMsVUFBUSxFQUFFLEtBRlM7QUFHbkJDLE9BQUssRUFBRTtBQUhZLENBQXJCO0FBTUEsSUFBTUMsU0FBUyxHQUFHLDBCQUFZO0FBQzVCQyxNQUFJLEVBQUUsTUFEc0I7QUFFNUJMLGNBQVksRUFBWkEsWUFGNEI7QUFHNUJNLFVBQVEsRUFBRSxFQUhrQjtBQUk1QkMsZUFBYSxFQUFFLHVCQUFDQyxPQUFEO0FBQUEsV0FDYkEsT0FBTyxDQUNMO0FBREssS0FFSkMsT0FGSCxDQUVXQyxVQUFJQyxPQUZmLEVBRXdCLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN2Q0QsV0FBSyxDQUFDWCxTQUFOLEdBQWtCLElBQWxCO0FBQ0QsS0FKSCxFQUtFO0FBTEYsS0FNR1EsT0FOSCxDQU1XQyxVQUFJSSxTQU5mLEVBTTBCLFVBQUNGLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6Q0UsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxPQUEzQjtBQUNBTixXQUFLLENBQUNULEtBQU4sQ0FBWWdCLE1BQVosQ0FBbUJOLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxPQUFsQyxFQUZ5QyxDQUVHOztBQUM1Q04sV0FBSyxDQUFDVixRQUFOLEdBQWlCVyxNQUFNLENBQUNJLE9BQVAsQ0FBZUcsSUFBaEM7QUFDQVIsV0FBSyxDQUFDWCxTQUFOLEdBQWtCLEtBQWxCO0FBQ0QsS0FYSCxFQVlFO0FBWkYsS0FhR1EsT0FiSCxDQWFXQyxVQUFJVyxRQWJmLEVBYXlCLFVBQUNULEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4Q0QsV0FBSyxDQUFDWCxTQUFOLEdBQWtCLEtBQWxCO0FBQ0QsS0FmSCxFQWdCRTtBQWhCRixLQWlCR1EsT0FqQkgsQ0FpQldhLFdBQUtYLE9BakJoQixFQWlCeUIsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDRCxXQUFLLENBQUNYLFNBQU4sR0FBa0IsSUFBbEI7QUFDRCxLQW5CSCxFQW9CRTtBQXBCRixLQXFCR1EsT0FyQkgsQ0FxQldhLFdBQUtSLFNBckJoQixFQXFCMkIsVUFBQ0YsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzFDRCxXQUFLLENBQUNYLFNBQU4sR0FBa0IsS0FBbEI7O0FBQ0FzQix5QkFBT0MsSUFBUCxDQUFZLEdBQVo7QUFDRCxLQXhCSCxFQXlCRTtBQXpCRixLQTBCR2YsT0ExQkgsQ0EwQldhLFdBQUtELFFBMUJoQixFQTBCMEIsVUFBQ1QsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3pDRCxXQUFLLENBQUNYLFNBQU4sR0FBa0IsS0FBbEI7QUFDQXdCLFdBQUssQ0FBQyxrQkFBRCxDQUFMO0FBQ0QsS0E3QkgsQ0FEYTtBQUFBO0FBSmEsQ0FBWixDQUFsQjtBQXFDQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIsU0FBakIiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0U2xpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBzYXZlLCBnZXQgfSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGxhc3RQYWdlOiBmYWxzZSxcbiAgcG9zdHM6IFtdLFxufTtcblxuY29uc3QgcG9zdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInBvc3RcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PlxuICAgIGJ1aWxkZXJcbiAgICAgIC8vIGdldCByZXF1ZXN0XG4gICAgICAuYWRkQ2FzZShnZXQucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBnZXQgc3VjY2Vzc1xuICAgICAgLmFkZENhc2UoZ2V0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQuY29udGVudCk7XG4gICAgICAgIHN0YXRlLnBvc3RzLmNvbmNhdChhY3Rpb24ucGF5bG9hZC5jb250ZW50KTsgLy8g6riAIOuqqeuhnSDri7TquLBcbiAgICAgICAgc3RhdGUubGFzdFBhZ2UgPSBhY3Rpb24ucGF5bG9hZC5sYXN0O1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAvLyBnZXQgZmFpbFxuICAgICAgLmFkZENhc2UoZ2V0LnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAvLyBzYXZlIHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKHNhdmUucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBzYXZlIHN1Y2Nlc3MgLT4gLyDroZwg7J2064+ZXG4gICAgICAuYWRkQ2FzZShzYXZlLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAvLyBzYXZlIGZhaWxcbiAgICAgIC5hZGRDYXNlKHNhdmUucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBhbGVydChcIu2PrOyKpO2KuCDsnpHshLHsl5Ag7Iuk7Yyo7ZWY7JiA7Iq164uI64ukLlwiKTtcbiAgICAgIH0pLFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9zdFNsaWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/postSlice.js\n");

/***/ })

})