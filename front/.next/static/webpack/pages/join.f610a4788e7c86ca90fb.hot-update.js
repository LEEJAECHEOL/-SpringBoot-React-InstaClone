webpackHotUpdate_N_E("pages/join",{

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var _require = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\"),\n    createSlice = _require.createSlice,\n    createAsyncThunk = _require.createAsyncThunk; // const { logIn } = require(\"../actions/user\");\n\n\nvar _require2 = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\"),\n    join = _require2.join;\n\nvar initialState = {\n  joinLoading: false,\n  joinDone: false,\n  joinError: null\n};\nvar userSlice = createSlice({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    logOut: function logOut(state, action) {\n      state.data = null;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    return builder // join request\n    .addCase(join.pending, function (state, action) {\n      console.log(action);\n      state.joinLoading = true;\n    }) // join success\n    .addCase(join.fulfilled, function (state, action) {\n      state.joinDone = true;\n    }) // join fail\n    .addCase(join.rejected, function (state, action) {\n      state.joinError = action.payload;\n    });\n  }\n});\nmodule.exports = userSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclNsaWNlLmpzP2I5MzciXSwibmFtZXMiOlsicmVxdWlyZSIsImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImpvaW4iLCJpbml0aWFsU3RhdGUiLCJqb2luTG9hZGluZyIsImpvaW5Eb25lIiwiam9pbkVycm9yIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9nT3V0Iiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImNvbnNvbGUiLCJsb2ciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInBheWxvYWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiNkRBQTBDQSxtQkFBTyxDQUFDLG1GQUFELEM7SUFBekNDLFcsWUFBQUEsVztJQUFhQyxnQixZQUFBQSxnQixFQUNyQjs7O2dCQUNpQkYsbUJBQU8sQ0FBQywwQ0FBRCxDO0lBQWhCRyxJLGFBQUFBLEk7O0FBRVIsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxhQUFXLEVBQUUsS0FETTtBQUVuQkMsVUFBUSxFQUFFLEtBRlM7QUFHbkJDLFdBQVMsRUFBRTtBQUhRLENBQXJCO0FBS0EsSUFBTUMsU0FBUyxHQUFHUCxXQUFXLENBQUM7QUFDNUJRLE1BQUksRUFBRSxNQURzQjtBQUU1QkwsY0FBWSxFQUFaQSxZQUY0QjtBQUc1Qk0sVUFBUSxFQUFFO0FBQ1JDLFVBRFEsa0JBQ0RDLEtBREMsRUFDTUMsTUFETixFQUNjO0FBQ3BCRCxXQUFLLENBQUNFLElBQU4sR0FBYSxJQUFiO0FBQ0Q7QUFITyxHQUhrQjtBQVE1QkMsZUFBYSxFQUFFLHVCQUFDQyxPQUFEO0FBQUEsV0FDYkEsT0FBTyxDQUNMO0FBREssS0FFSkMsT0FGSCxDQUVXZCxJQUFJLENBQUNlLE9BRmhCLEVBRXlCLFVBQUNOLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4Q00sYUFBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVo7QUFDQUQsV0FBSyxDQUFDUCxXQUFOLEdBQW9CLElBQXBCO0FBQ0QsS0FMSCxFQU1FO0FBTkYsS0FPR1ksT0FQSCxDQU9XZCxJQUFJLENBQUNrQixTQVBoQixFQU8yQixVQUFDVCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDMUNELFdBQUssQ0FBQ04sUUFBTixHQUFpQixJQUFqQjtBQUNELEtBVEgsRUFVRTtBQVZGLEtBV0dXLE9BWEgsQ0FXV2QsSUFBSSxDQUFDbUIsUUFYaEIsRUFXMEIsVUFBQ1YsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3pDRCxXQUFLLENBQUNMLFNBQU4sR0FBa0JNLE1BQU0sQ0FBQ1UsT0FBekI7QUFDRCxLQWJILENBRGE7QUFBQTtBQVJhLENBQUQsQ0FBN0I7QUF5QkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLFNBQWpCIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlclNsaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9ID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7XG4vLyBjb25zdCB7IGxvZ0luIH0gPSByZXF1aXJlKFwiLi4vYWN0aW9ucy91c2VyXCIpO1xuY29uc3QgeyBqb2luIH0gPSByZXF1aXJlKFwiLi4vYWN0aW9ucy91c2VyXCIpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGpvaW5Mb2FkaW5nOiBmYWxzZSxcbiAgam9pbkRvbmU6IGZhbHNlLFxuICBqb2luRXJyb3I6IG51bGwsXG59O1xuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGxvZ091dChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5kYXRhID0gbnVsbDtcbiAgICB9LFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT5cbiAgICBidWlsZGVyXG4gICAgICAvLyBqb2luIHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKGpvaW4ucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgICAgc3RhdGUuam9pbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIGpvaW4gc3VjY2Vzc1xuICAgICAgLmFkZENhc2Uoam9pbi5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmpvaW5Eb25lID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBqb2luIGZhaWxcbiAgICAgIC5hZGRDYXNlKGpvaW4ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmpvaW5FcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSksXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyU2xpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ })

})