webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var _require = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\"),\n    createSlice = _require.createSlice;\n\nvar _require2 = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\"),\n    logIn = _require2.logIn;\n\nvar initialState = {\n  joinLoading: false,\n  joinDone: false,\n  joinError: null\n};\nvar userSlice = createSlice({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    logOut: function logOut(state, action) {\n      state.data = null;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    return builder.addCase(logIn.pending, function (state, action) {// state.data = null;\n      // state.isLoggingIn = true;\n    }).addCase(logIn.fulfilled, function (state, action) {// state.data = action.payload;\n      // state.isLoggingIn = false;\n    }).addCase(logIn.rejected, function (state, action) {// state.error = action.payload;\n    });\n  }\n});\nmodule.exports = userSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclNsaWNlLmpzP2I5MzciXSwibmFtZXMiOlsicmVxdWlyZSIsImNyZWF0ZVNsaWNlIiwibG9nSW4iLCJpbml0aWFsU3RhdGUiLCJqb2luTG9hZGluZyIsImpvaW5Eb25lIiwiam9pbkVycm9yIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9nT3V0Iiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjZEQUF3QkEsbUJBQU8sQ0FBQyxtRkFBRCxDO0lBQXZCQyxXLFlBQUFBLFc7O2dCQUNVRCxtQkFBTyxDQUFDLDBDQUFELEM7SUFBakJFLEssYUFBQUEsSzs7QUFFUixJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLGFBQVcsRUFBRSxLQURNO0FBRW5CQyxVQUFRLEVBQUUsS0FGUztBQUduQkMsV0FBUyxFQUFFO0FBSFEsQ0FBckI7QUFNQSxJQUFNQyxTQUFTLEdBQUdOLFdBQVcsQ0FBQztBQUM1Qk8sTUFBSSxFQUFFLE1BRHNCO0FBRTVCTCxjQUFZLEVBQVpBLFlBRjRCO0FBRzVCTSxVQUFRLEVBQUU7QUFDUkMsVUFEUSxrQkFDREMsS0FEQyxFQUNNQyxNQUROLEVBQ2M7QUFDcEJELFdBQUssQ0FBQ0UsSUFBTixHQUFhLElBQWI7QUFDRDtBQUhPLEdBSGtCO0FBUTVCQyxlQUFhLEVBQUUsdUJBQUNDLE9BQUQ7QUFBQSxXQUNiQSxPQUFPLENBQ0pDLE9BREgsQ0FDV2QsS0FBSyxDQUFDZSxPQURqQixFQUMwQixVQUFDTixLQUFELEVBQVFDLE1BQVIsRUFBbUIsQ0FDekM7QUFDQTtBQUNELEtBSkgsRUFLR0ksT0FMSCxDQUtXZCxLQUFLLENBQUNnQixTQUxqQixFQUs0QixVQUFDUCxLQUFELEVBQVFDLE1BQVIsRUFBbUIsQ0FDM0M7QUFDQTtBQUNELEtBUkgsRUFTR0ksT0FUSCxDQVNXZCxLQUFLLENBQUNpQixRQVRqQixFQVMyQixVQUFDUixLQUFELEVBQVFDLE1BQVIsRUFBbUIsQ0FDMUM7QUFDRCxLQVhILENBRGE7QUFBQTtBQVJhLENBQUQsQ0FBN0I7QUF1QkFRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsU0FBakIiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyU2xpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZVNsaWNlIH0gPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTtcbmNvbnN0IHsgbG9nSW4gfSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL3VzZXJcIik7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgam9pbkxvYWRpbmc6IGZhbHNlLFxuICBqb2luRG9uZTogZmFsc2UsXG4gIGpvaW5FcnJvcjogbnVsbCxcbn07XG5cbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ1c2VyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dPdXQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuZGF0YSA9IG51bGw7XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+XG4gICAgYnVpbGRlclxuICAgICAgLmFkZENhc2UobG9nSW4ucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgLy8gc3RhdGUuZGF0YSA9IG51bGw7XG4gICAgICAgIC8vIHN0YXRlLmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShsb2dJbi5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIC8vIHN0YXRlLmRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgLy8gc3RhdGUuaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShsb2dJbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgLy8gc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH0pLFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlclNsaWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ })

})