webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _user = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\"));\n\nvar initialState = {\n  isLoading: false,\n  loginError: null,\n  joinError: null,\n  principal: null\n};\nvar userSlice = (0, _toolkit.createSlice)({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    logOut: function logOut(state, action) {\n      state.principal = null;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    return builder // changeProfileImage request\n    .addCase(_user.changeProfileImage.pending, function (state, action) {\n      state.isLoading = true;\n    }) // changeProfileImage success\n    .addCase(_user.changeProfileImage.fulfilled, function (state, action) {\n      state.isLoading = false;\n      state.principal.profileImageUrl = action.payload;\n    }) // changeProfileImage fail -> 로그인 화면으로\n    .addCase(_user.changeProfileImage.rejected, function (state, action) {\n      state.isLoading = false;\n    }) // load request\n    .addCase(_user.load.pending, function (state, action) {\n      state.isLoading = true;\n    }) // load success\n    .addCase(_user.load.fulfilled, function (state, action) {\n      state.isLoading = false;\n      state.principal = action.payload;\n    }) // load fail -> 로그인 화면으로\n    .addCase(_user.load.rejected, function (state, action) {\n      state.isLoading = false;\n      alert(\"로그인 후 이용가능합니다.\");\n\n      _router[\"default\"].push(\"/login\");\n    }) // login request\n    .addCase(_user.login.pending, function (state, action) {\n      state.isLoading = true;\n      state.loginError = null;\n    }) // login success\n    .addCase(_user.login.fulfilled, function (state, action) {\n      state.isLoading = false;\n      state.loginError = null;\n\n      _router[\"default\"].push(\"/\");\n    }) // login fail\n    .addCase(_user.login.rejected, function (state, action) {\n      state.isLoading = false;\n      state.loginError = \"로그인 실패\";\n    }) // join request\n    .addCase(_user.join.pending, function (state, action) {\n      state.isLoading = true;\n    }) // join success\n    .addCase(_user.join.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/login\");\n    }) // join fail\n    .addCase(_user.join.rejected, function (state, action) {\n      state.isLoading = false;\n      state.joinError = action.payload;\n    });\n  }\n});\nmodule.exports = userSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclNsaWNlLmpzP2I5MzciXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwibG9naW5FcnJvciIsImpvaW5FcnJvciIsInByaW5jaXBhbCIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ091dCIsInN0YXRlIiwiYWN0aW9uIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiY2hhbmdlUHJvZmlsZUltYWdlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInByb2ZpbGVJbWFnZVVybCIsInBheWxvYWQiLCJyZWplY3RlZCIsImxvYWQiLCJhbGVydCIsIlJvdXRlciIsInB1c2giLCJsb2dpbiIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxXQUFTLEVBQUUsS0FEUTtBQUVuQkMsWUFBVSxFQUFFLElBRk87QUFHbkJDLFdBQVMsRUFBRSxJQUhRO0FBS25CQyxXQUFTLEVBQUU7QUFMUSxDQUFyQjtBQU9BLElBQU1DLFNBQVMsR0FBRywwQkFBWTtBQUM1QkMsTUFBSSxFQUFFLE1BRHNCO0FBRTVCTixjQUFZLEVBQVpBLFlBRjRCO0FBRzVCTyxVQUFRLEVBQUU7QUFDUkMsVUFEUSxrQkFDREMsS0FEQyxFQUNNQyxNQUROLEVBQ2M7QUFDcEJELFdBQUssQ0FBQ0wsU0FBTixHQUFrQixJQUFsQjtBQUNEO0FBSE8sR0FIa0I7QUFRNUJPLGVBQWEsRUFBRSx1QkFBQ0MsT0FBRDtBQUFBLFdBQ2JBLE9BQU8sQ0FDTDtBQURLLEtBRUpDLE9BRkgsQ0FFV0MseUJBQW1CQyxPQUY5QixFQUV1QyxVQUFDTixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDdERELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixJQUFsQjtBQUNELEtBSkgsRUFLRTtBQUxGLEtBTUdZLE9BTkgs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c2VyU2xpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBqb2luLCBsb2dpbiwgbG9hZCwgY2hhbmdlUHJvZmlsZUltYWdlIH0gZnJvbSBcIi4uL2FjdGlvbnMvdXNlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBsb2dpbkVycm9yOiBudWxsLFxuICBqb2luRXJyb3I6IG51bGwsXG5cbiAgcHJpbmNpcGFsOiBudWxsLFxufTtcbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ1c2VyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dPdXQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUucHJpbmNpcGFsID0gbnVsbDtcbiAgICB9LFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT5cbiAgICBidWlsZGVyXG4gICAgICAvLyBjaGFuZ2VQcm9maWxlSW1hZ2UgcmVxdWVzdFxuICAgICAgLmFkZENhc2UoY2hhbmdlUHJvZmlsZUltYWdlLnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gY2hhbmdlUHJvZmlsZUltYWdlIHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGNoYW5nZVByb2ZpbGVJbWFnZS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wcmluY2lwYWwucHJvZmlsZUltYWdlVXJsID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9KVxuICAgICAgLy8gY2hhbmdlUHJvZmlsZUltYWdlIGZhaWwgLT4g66Gc6re47J24IO2ZlOuptOycvOuhnFxuICAgICAgLmFkZENhc2UoY2hhbmdlUHJvZmlsZUltYWdlLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAvLyBsb2FkIHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKGxvYWQucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBsb2FkIHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGxvYWQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucHJpbmNpcGFsID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9KVxuICAgICAgLy8gbG9hZCBmYWlsIC0+IOuhnOq3uOyduCDtmZTrqbTsnLzroZxcbiAgICAgIC5hZGRDYXNlKGxvYWQucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBhbGVydChcIuuhnOq3uOyduCDtm4Qg7J207Jqp6rCA64ql7ZWp64uI64ukLlwiKTtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9KVxuICAgICAgLy8gbG9naW4gcmVxdWVzdFxuICAgICAgLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUubG9naW5FcnJvciA9IG51bGw7XG4gICAgICB9KVxuICAgICAgLy8gbG9naW4gc3VjY2Vzc1xuICAgICAgLmFkZENhc2UobG9naW4uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubG9naW5FcnJvciA9IG51bGw7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAvLyBsb2dpbiBmYWlsXG4gICAgICAuYWRkQ2FzZShsb2dpbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxvZ2luRXJyb3IgPSBcIuuhnOq3uOyduCDsi6TtjKhcIjtcbiAgICAgIH0pXG4gICAgICAvLyBqb2luIHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKGpvaW4ucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBqb2luIHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGpvaW4uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9KVxuICAgICAgLy8gam9pbiBmYWlsXG4gICAgICAuYWRkQ2FzZShqb2luLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuam9pbkVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9KSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJTbGljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ })

})