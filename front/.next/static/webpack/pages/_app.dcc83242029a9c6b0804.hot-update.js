webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var _require = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\"),\n    createSlice = _require.createSlice,\n    createAsyncThunk = _require.createAsyncThunk;\n\nvar _require2 = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\"),\n    logIn = _require2.logIn;\n\nvar _require3 = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\"),\n    join = _require3.join;\n\nvar initialState = {\n  joinLoading: false,\n  joinDone: false,\n  joinError: null\n};\nvar userSlice = createSlice({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    logOut: function logOut(state, action) {\n      state.data = null;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    return builder // join request\n    .addCase(join.pending, function (state, action) {\n      console.log(action);\n      state.joinLoading = true;\n    }) // join success\n    .addCase(join.fulfilled, function (state, action) {\n      state.joinDone = true;\n    }) // join fail\n    .addCase(join.rejected, function (state, action) {\n      state.joinError = action.payload;\n    });\n  }\n});\nmodule.exports = userSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclNsaWNlLmpzP2I5MzciXSwibmFtZXMiOlsicmVxdWlyZSIsImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImxvZ0luIiwiam9pbiIsImluaXRpYWxTdGF0ZSIsImpvaW5Mb2FkaW5nIiwiam9pbkRvbmUiLCJqb2luRXJyb3IiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dPdXQiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiY29uc29sZSIsImxvZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicGF5bG9hZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI2REFBMENBLG1CQUFPLENBQUMsbUZBQUQsQztJQUF6Q0MsVyxZQUFBQSxXO0lBQWFDLGdCLFlBQUFBLGdCOztnQkFDSEYsbUJBQU8sQ0FBQywwQ0FBRCxDO0lBQWpCRyxLLGFBQUFBLEs7O2dCQUNTSCxtQkFBTyxDQUFDLDBDQUFELEM7SUFBaEJJLEksYUFBQUEsSTs7QUFFUixJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLGFBQVcsRUFBRSxLQURNO0FBRW5CQyxVQUFRLEVBQUUsS0FGUztBQUduQkMsV0FBUyxFQUFFO0FBSFEsQ0FBckI7QUFLQSxJQUFNQyxTQUFTLEdBQUdSLFdBQVcsQ0FBQztBQUM1QlMsTUFBSSxFQUFFLE1BRHNCO0FBRTVCTCxjQUFZLEVBQVpBLFlBRjRCO0FBRzVCTSxVQUFRLEVBQUU7QUFDUkMsVUFEUSxrQkFDREMsS0FEQyxFQUNNQyxNQUROLEVBQ2M7QUFDcEJELFdBQUssQ0FBQ0UsSUFBTixHQUFhLElBQWI7QUFDRDtBQUhPLEdBSGtCO0FBUTVCQyxlQUFhLEVBQUUsdUJBQUNDLE9BQUQ7QUFBQSxXQUNiQSxPQUFPLENBQ0w7QUFESyxLQUVKQyxPQUZILENBRVdkLElBQUksQ0FBQ2UsT0FGaEIsRUFFeUIsVUFBQ04sS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDTSxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsTUFBWjtBQUNBRCxXQUFLLENBQUNQLFdBQU4sR0FBb0IsSUFBcEI7QUFDRCxLQUxILEVBTUU7QUFORixLQU9HWSxPQVBILENBT1dkLElBQUksQ0FBQ2tCLFNBUGhCLEVBTzJCLFVBQUNULEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMxQ0QsV0FBSyxDQUFDTixRQUFOLEdBQWlCLElBQWpCO0FBQ0QsS0FUSCxFQVVFO0FBVkYsS0FXR1csT0FYSCxDQVdXZCxJQUFJLENBQUNtQixRQVhoQixFQVcwQixVQUFDVixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDekNELFdBQUssQ0FBQ0wsU0FBTixHQUFrQk0sTUFBTSxDQUFDVSxPQUF6QjtBQUNELEtBYkgsQ0FEYTtBQUFBO0FBUmEsQ0FBRCxDQUE3QjtBQXlCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCakIsU0FBakIiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyU2xpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTtcbmNvbnN0IHsgbG9nSW4gfSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL3VzZXJcIik7XG5jb25zdCB7IGpvaW4gfSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL3VzZXJcIik7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgam9pbkxvYWRpbmc6IGZhbHNlLFxuICBqb2luRG9uZTogZmFsc2UsXG4gIGpvaW5FcnJvcjogbnVsbCxcbn07XG5jb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwidXNlclwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgbG9nT3V0KHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLmRhdGEgPSBudWxsO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PlxuICAgIGJ1aWxkZXJcbiAgICAgIC8vIGpvaW4gcmVxdWVzdFxuICAgICAgLmFkZENhc2Uoam9pbi5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xuICAgICAgICBzdGF0ZS5qb2luTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gam9pbiBzdWNjZXNzXG4gICAgICAuYWRkQ2FzZShqb2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuam9pbkRvbmUgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIGpvaW4gZmFpbFxuICAgICAgLmFkZENhc2Uoam9pbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuam9pbkVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9KSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJTbGljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ })

})