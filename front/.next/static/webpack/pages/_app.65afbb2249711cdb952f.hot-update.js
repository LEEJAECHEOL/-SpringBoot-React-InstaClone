webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var _require = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\"),\n    createSlice = _require.createSlice;\n\nvar _require2 = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\"),\n    logIn = _require2.logIn;\n\nvar _require3 = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\"),\n    join = _require3.join;\n\nvar initialState = {\n  joinLoading: false,\n  joinDone: false,\n  joinError: null\n};\nvar userSlice = createSlice({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    logOut: function logOut(state, action) {\n      state.data = null;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    return builder.addCase(logIn.pending, function (state, action) {// state.data = null;\n      // state.isLoggingIn = true;\n    }).addCase(logIn.fulfilled, function (state, action) {// state.data = action.payload;\n      // state.isLoggingIn = false;\n    }).addCase(logIn.rejected, function (state, action) {// state.error = action.payload;\n    }) // join request\n    .addCase(join.pending, function (state, action) {\n      console.log(action);\n      state.joinLoading = true;\n    }) // join success\n    .addCase(join.fulfilled, function (state, action) {\n      state.joinDone = true;\n    }) // join fail\n    .addCase(join.rejected, function (state, action) {\n      state.joinError = action.payload;\n    });\n  }\n});\nmodule.exports = userSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclNsaWNlLmpzP2I5MzciXSwibmFtZXMiOlsicmVxdWlyZSIsImNyZWF0ZVNsaWNlIiwibG9nSW4iLCJqb2luIiwiaW5pdGlhbFN0YXRlIiwiam9pbkxvYWRpbmciLCJqb2luRG9uZSIsImpvaW5FcnJvciIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ091dCIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjZEQUF3QkEsbUJBQU8sQ0FBQyxtRkFBRCxDO0lBQXZCQyxXLFlBQUFBLFc7O2dCQUNVRCxtQkFBTyxDQUFDLDBDQUFELEM7SUFBakJFLEssYUFBQUEsSzs7Z0JBQ1NGLG1CQUFPLENBQUMsMENBQUQsQztJQUFoQkcsSSxhQUFBQSxJOztBQUVSLElBQU1DLFlBQVksR0FBRztBQUNuQkMsYUFBVyxFQUFFLEtBRE07QUFFbkJDLFVBQVEsRUFBRSxLQUZTO0FBR25CQyxXQUFTLEVBQUU7QUFIUSxDQUFyQjtBQU1BLElBQU1DLFNBQVMsR0FBR1AsV0FBVyxDQUFDO0FBQzVCUSxNQUFJLEVBQUUsTUFEc0I7QUFFNUJMLGNBQVksRUFBWkEsWUFGNEI7QUFHNUJNLFVBQVEsRUFBRTtBQUNSQyxVQURRLGtCQUNEQyxLQURDLEVBQ01DLE1BRE4sRUFDYztBQUNwQkQsV0FBSyxDQUFDRSxJQUFOLEdBQWEsSUFBYjtBQUNEO0FBSE8sR0FIa0I7QUFRNUJDLGVBQWEsRUFBRSx1QkFBQ0MsT0FBRDtBQUFBLFdBQ2JBLE9BQU8sQ0FDSkMsT0FESCxDQUNXZixLQUFLLENBQUNnQixPQURqQixFQUMwQixVQUFDTixLQUFELEVBQVFDLE1BQVIsRUFBbUIsQ0FDekM7QUFDQTtBQUNELEtBSkgsRUFLR0ksT0FMSCxDQUtXZixLQUFLLENBQUNpQixTQUxqQixFQUs0QixVQUFDUCxLQUFELEVBQVFDLE1BQVIsRUFBbUIsQ0FDM0M7QUFDQTtBQUNELEtBUkgsRUFTR0ksT0FUSCxDQVNXZixLQUFLLENBQUNrQixRQVRqQixFQVMyQixVQUFDUixLQUFELEVBQVFDLE1BQVIsRUFBbUIsQ0FDMUM7QUFDRCxLQVhILEVBWUU7QUFaRixLQWFHSSxPQWJILENBYVdkLElBQUksQ0FBQ2UsT0FiaEIsRUFheUIsVUFBQ04sS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDUSxhQUFPLENBQUNDLEdBQVIsQ0FBWVQsTUFBWjtBQUNBRCxXQUFLLENBQUNQLFdBQU4sR0FBb0IsSUFBcEI7QUFDRCxLQWhCSCxFQWlCRTtBQWpCRixLQWtCR1ksT0FsQkgsQ0FrQldkLElBQUksQ0FBQ2dCLFNBbEJoQixFQWtCMkIsVUFBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzFDRCxXQUFLLENBQUNOLFFBQU4sR0FBaUIsSUFBakI7QUFDRCxLQXBCSCxFQXFCRTtBQXJCRixLQXNCR1csT0F0QkgsQ0FzQldkLElBQUksQ0FBQ2lCLFFBdEJoQixFQXNCMEIsVUFBQ1IsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3pDRCxXQUFLLENBQUNMLFNBQU4sR0FBa0JNLE1BQU0sQ0FBQ1UsT0FBekI7QUFDRCxLQXhCSCxDQURhO0FBQUE7QUFSYSxDQUFELENBQTdCO0FBb0NBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixTQUFqQiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXJTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY3JlYXRlU2xpY2UgfSA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpO1xuY29uc3QgeyBsb2dJbiB9ID0gcmVxdWlyZShcIi4uL2FjdGlvbnMvdXNlclwiKTtcbmNvbnN0IHsgam9pbiB9ID0gcmVxdWlyZShcIi4uL2FjdGlvbnMvdXNlclwiKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBqb2luTG9hZGluZzogZmFsc2UsXG4gIGpvaW5Eb25lOiBmYWxzZSxcbiAgam9pbkVycm9yOiBudWxsLFxufTtcblxuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGxvZ091dChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5kYXRhID0gbnVsbDtcbiAgICB9LFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT5cbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShsb2dJbi5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAvLyBzdGF0ZS5kYXRhID0gbnVsbDtcbiAgICAgICAgLy8gc3RhdGUuaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvZ0luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgLy8gc3RhdGUuZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAvLyBzdGF0ZS5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvZ0luLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAvLyBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSlcbiAgICAgIC8vIGpvaW4gcmVxdWVzdFxuICAgICAgLmFkZENhc2Uoam9pbi5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xuICAgICAgICBzdGF0ZS5qb2luTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gam9pbiBzdWNjZXNzXG4gICAgICAuYWRkQ2FzZShqb2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuam9pbkRvbmUgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIGpvaW4gZmFpbFxuICAgICAgLmFkZENhc2Uoam9pbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuam9pbkVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9KSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJTbGljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ })

})