webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _user = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\"));\n\nvar initialState = {\n  isLoading: false,\n  loginError: null,\n  joinError: null,\n  principal: null\n};\nvar userSlice = (0, _toolkit.createSlice)({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    logOut: function logOut(state, action) {\n      state.data = null;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    return builder // login request\n    .addCase(_user.login.pending, function (state) {\n      state.isLoading = true;\n    }) // login success\n    .addCase(_user.login.fulfilled, function (state, action) {\n      state.isLoading = false;\n      state.loginError = null;\n\n      _router[\"default\"].push(\"/\");\n    }) // login fail\n    .addCase(_user.login.rejected, function (state, action) {\n      console.log(action.fail);\n      state.isLoading = false;\n      state.loginError = \"로그인 실패\";\n    }) // join request\n    .addCase(_user.join.pending, function (state) {\n      state.isLoading = true;\n    }) // join success\n    .addCase(_user.join.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/login\");\n    }) // join fail\n    .addCase(_user.join.rejected, function (state, action) {\n      state.isLoading = false;\n      state.joinError = action.payload;\n    });\n  }\n});\nmodule.exports = userSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclNsaWNlLmpzP2I5MzciXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwibG9naW5FcnJvciIsImpvaW5FcnJvciIsInByaW5jaXBhbCIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ091dCIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImxvZ2luIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsIlJvdXRlciIsInB1c2giLCJyZWplY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwiam9pbiIsInBheWxvYWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxXQUFTLEVBQUUsS0FEUTtBQUVuQkMsWUFBVSxFQUFFLElBRk87QUFHbkJDLFdBQVMsRUFBRSxJQUhRO0FBS25CQyxXQUFTLEVBQUU7QUFMUSxDQUFyQjtBQU9BLElBQU1DLFNBQVMsR0FBRywwQkFBWTtBQUM1QkMsTUFBSSxFQUFFLE1BRHNCO0FBRTVCTixjQUFZLEVBQVpBLFlBRjRCO0FBRzVCTyxVQUFRLEVBQUU7QUFDUkMsVUFEUSxrQkFDREMsS0FEQyxFQUNNQyxNQUROLEVBQ2M7QUFDcEJELFdBQUssQ0FBQ0UsSUFBTixHQUFhLElBQWI7QUFDRDtBQUhPLEdBSGtCO0FBUTVCQyxlQUFhLEVBQUUsdUJBQUNDLE9BQUQ7QUFBQSxXQUNiQSxPQUFPLENBQ0w7QUFESyxLQUVKQyxPQUZILENBRVdDLFlBQU1DLE9BRmpCLEVBRTBCLFVBQUNQLEtBQUQsRUFBVztBQUNqQ0EsV0FBSyxDQUFDUixTQUFOLEdBQWtCLElBQWxCO0FBQ0QsS0FKSCxFQUtFO0FBTEYsS0FNR2EsT0FOSCxDQU1XQyxZQUFNRSxTQU5qQixFQU00QixVQUFDUixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDM0NELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixLQUFsQjtBQUNBUSxXQUFLLENBQUNQLFVBQU4sR0FBbUIsSUFBbkI7O0FBQ0FnQix5QkFBT0MsSUFBUCxDQUFZLEdBQVo7QUFDRCxLQVZILEVBV0U7QUFYRixLQVlHTCxPQVpILENBWVdDLFlBQU1LLFFBWmpCLEVBWTJCLFVBQUNYLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMxQ1csYUFBTyxDQUFDQyxHQUFSLENBQVlaLE1BQU0sQ0FBQ2EsSUFBbkI7QUFDQWQsV0FBSyxDQUFDUixTQUFOLEdBQWtCLEtBQWxCO0FBQ0FRLFdBQUssQ0FBQ1AsVUFBTixHQUFtQixRQUFuQjtBQUNELEtBaEJILEVBaUJFO0FBakJGLEtBa0JHWSxPQWxCSCxDQWtCV1UsV0FBS1IsT0FsQmhCLEVBa0J5QixVQUFDUCxLQUFELEVBQVc7QUFDaENBLFdBQUssQ0FBQ1IsU0FBTixHQUFrQixJQUFsQjtBQUNELEtBcEJILEVBcUJFO0FBckJGLEtBc0JHYSxPQXRCSCxDQXNCV1UsV0FBS1AsU0F0QmhCLEVBc0IyQixVQUFDUixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDMUNELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixLQUFsQjs7QUFDQWlCLHlCQUFPQyxJQUFQLENBQVksUUFBWjtBQUNELEtBekJILEVBMEJFO0FBMUJGLEtBMkJHTCxPQTNCSCxDQTJCV1UsV0FBS0osUUEzQmhCLEVBMkIwQixVQUFDWCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDekNELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixLQUFsQjtBQUNBUSxXQUFLLENBQUNOLFNBQU4sR0FBa0JPLE1BQU0sQ0FBQ2UsT0FBekI7QUFDRCxLQTlCSCxDQURhO0FBQUE7QUFSYSxDQUFaLENBQWxCO0FBMENBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ0QixTQUFqQiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXJTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGpvaW4sIGxvZ2luIH0gZnJvbSBcIi4uL2FjdGlvbnMvdXNlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBsb2dpbkVycm9yOiBudWxsLFxuICBqb2luRXJyb3I6IG51bGwsXG5cbiAgcHJpbmNpcGFsOiBudWxsLFxufTtcbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ1c2VyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dPdXQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuZGF0YSA9IG51bGw7XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+XG4gICAgYnVpbGRlclxuICAgICAgLy8gbG9naW4gcmVxdWVzdFxuICAgICAgLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gbG9naW4gc3VjY2Vzc1xuICAgICAgLmFkZENhc2UobG9naW4uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubG9naW5FcnJvciA9IG51bGw7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAvLyBsb2dpbiBmYWlsXG4gICAgICAuYWRkQ2FzZShsb2dpbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmZhaWwpO1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubG9naW5FcnJvciA9IFwi66Gc6re47J24IOyLpO2MqFwiO1xuICAgICAgfSlcbiAgICAgIC8vIGpvaW4gcmVxdWVzdFxuICAgICAgLmFkZENhc2Uoam9pbi5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBqb2luIHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGpvaW4uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9KVxuICAgICAgLy8gam9pbiBmYWlsXG4gICAgICAuYWRkQ2FzZShqb2luLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuam9pbkVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9KSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJTbGljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ })

})