webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _user = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\"));\n\nvar initialState = {\n  isLoading: false,\n  loginError: null,\n  joinError: null,\n  principal: null\n};\nvar userSlice = (0, _toolkit.createSlice)({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    logOut: function logOut(state, action) {\n      state.data = null;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    return builder // login request\n    .addCase(_user.login.pending, function (state) {\n      state.isLoading = true;\n      state.loginError = null;\n    }) // login success\n    .addCase(_user.login.fulfilled, function (state, action) {\n      state.isLoading = false;\n      state.loginError = null;\n\n      _router[\"default\"].push(\"/\");\n    }) // login fail\n    .addCase(_user.login.rejected, function (state, action) {\n      state.isLoading = false;\n      state.loginError = \"로그인 실패\";\n    }) // join request\n    .addCase(_user.join.pending, function (state) {\n      state.isLoading = true;\n    }) // join success\n    .addCase(_user.join.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/login\");\n    }) // join fail\n    .addCase(_user.join.rejected, function (state, action) {\n      state.isLoading = false;\n      state.joinError = action.payload;\n    });\n  }\n});\nmodule.exports = userSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclNsaWNlLmpzP2I5MzciXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwibG9naW5FcnJvciIsImpvaW5FcnJvciIsInByaW5jaXBhbCIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ091dCIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImxvZ2luIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsIlJvdXRlciIsInB1c2giLCJyZWplY3RlZCIsImpvaW4iLCJwYXlsb2FkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFLEtBRFE7QUFFbkJDLFlBQVUsRUFBRSxJQUZPO0FBR25CQyxXQUFTLEVBQUUsSUFIUTtBQUtuQkMsV0FBUyxFQUFFO0FBTFEsQ0FBckI7QUFPQSxJQUFNQyxTQUFTLEdBQUcsMEJBQVk7QUFDNUJDLE1BQUksRUFBRSxNQURzQjtBQUU1Qk4sY0FBWSxFQUFaQSxZQUY0QjtBQUc1Qk8sVUFBUSxFQUFFO0FBQ1JDLFVBRFEsa0JBQ0RDLEtBREMsRUFDTUMsTUFETixFQUNjO0FBQ3BCRCxXQUFLLENBQUNFLElBQU4sR0FBYSxJQUFiO0FBQ0Q7QUFITyxHQUhrQjtBQVE1QkMsZUFBYSxFQUFFLHVCQUFDQyxPQUFEO0FBQUEsV0FDYkEsT0FBTyxDQUNMO0FBREssS0FFSkMsT0FGSCxDQUVXQyxZQUFNQyxPQUZqQixFQUUwQixVQUFDUCxLQUFELEVBQVc7QUFDakNBLFdBQUssQ0FBQ1IsU0FBTixHQUFrQixJQUFsQjtBQUNBUSxXQUFLLENBQUNQLFVBQU4sR0FBbUIsSUFBbkI7QUFDRCxLQUxILEVBTUU7QUFORixLQU9HWSxPQVBILENBT1dDLFlBQU1FLFNBUGpCLEVBTzRCLFVBQUNSLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMzQ0QsV0FBSyxDQUFDUixTQUFOLEdBQWtCLEtBQWxCO0FBQ0FRLFdBQUssQ0FBQ1AsVUFBTixHQUFtQixJQUFuQjs7QUFDQWdCLHlCQUFPQyxJQUFQLENBQVksR0FBWjtBQUNELEtBWEgsRUFZRTtBQVpGLEtBYUdMLE9BYkgsQ0FhV0MsWUFBTUssUUFiakIsRUFhMkIsVUFBQ1gsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzFDRCxXQUFLLENBQUNSLFNBQU4sR0FBa0IsS0FBbEI7QUFDQVEsV0FBSyxDQUFDUCxVQUFOLEdBQW1CLFFBQW5CO0FBQ0QsS0FoQkgsRUFpQkU7QUFqQkYsS0FrQkdZLE9BbEJILENBa0JXTyxXQUFLTCxPQWxCaEIsRUFrQnlCLFVBQUNQLEtBQUQsRUFBVztBQUNoQ0EsV0FBSyxDQUFDUixTQUFOLEdBQWtCLElBQWxCO0FBQ0QsS0FwQkgsRUFxQkU7QUFyQkYsS0FzQkdhLE9BdEJILENBc0JXTyxXQUFLSixTQXRCaEIsRUFzQjJCLFVBQUNSLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMxQ0QsV0FBSyxDQUFDUixTQUFOLEdBQWtCLEtBQWxCOztBQUNBaUIseUJBQU9DLElBQVAsQ0FBWSxRQUFaO0FBQ0QsS0F6QkgsRUEwQkU7QUExQkYsS0EyQkdMLE9BM0JILENBMkJXTyxXQUFLRCxRQTNCaEIsRUEyQjBCLFVBQUNYLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6Q0QsV0FBSyxDQUFDUixTQUFOLEdBQWtCLEtBQWxCO0FBQ0FRLFdBQUssQ0FBQ04sU0FBTixHQUFrQk8sTUFBTSxDQUFDWSxPQUF6QjtBQUNELEtBOUJILENBRGE7QUFBQTtBQVJhLENBQVosQ0FBbEI7QUEwQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLFNBQWpCIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlclNsaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgam9pbiwgbG9naW4gfSBmcm9tIFwiLi4vYWN0aW9ucy91c2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGxvZ2luRXJyb3I6IG51bGwsXG4gIGpvaW5FcnJvcjogbnVsbCxcblxuICBwcmluY2lwYWw6IG51bGwsXG59O1xuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGxvZ091dChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5kYXRhID0gbnVsbDtcbiAgICB9LFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT5cbiAgICBidWlsZGVyXG4gICAgICAvLyBsb2dpbiByZXF1ZXN0XG4gICAgICAuYWRkQ2FzZShsb2dpbi5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUubG9naW5FcnJvciA9IG51bGw7XG4gICAgICB9KVxuICAgICAgLy8gbG9naW4gc3VjY2Vzc1xuICAgICAgLmFkZENhc2UobG9naW4uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubG9naW5FcnJvciA9IG51bGw7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAvLyBsb2dpbiBmYWlsXG4gICAgICAuYWRkQ2FzZShsb2dpbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxvZ2luRXJyb3IgPSBcIuuhnOq3uOyduCDsi6TtjKhcIjtcbiAgICAgIH0pXG4gICAgICAvLyBqb2luIHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKGpvaW4ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gam9pbiBzdWNjZXNzXG4gICAgICAuYWRkQ2FzZShqb2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfSlcbiAgICAgIC8vIGpvaW4gZmFpbFxuICAgICAgLmFkZENhc2Uoam9pbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmpvaW5FcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSksXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyU2xpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ })

})