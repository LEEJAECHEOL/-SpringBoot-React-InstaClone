webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/postSlice.js":
/*!*******************************!*\
  !*** ./reducers/postSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _concat2 = _interopRequireDefault(__webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\"));\n\nvar _find2 = _interopRequireDefault(__webpack_require__(/*! lodash/find */ \"./node_modules/lodash/find.js\"));\n\nvar _post = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\"));\n\nvar initialState = {\n  isLoading: false,\n  CommentPostLoading: false,\n  CommentDeleteLoading: false,\n  lastPage: false,\n  posts: []\n};\nvar postSlice = (0, _toolkit.createSlice)({\n  name: \"post\",\n  initialState: initialState,\n  reducers: {},\n  extraReducers: function extraReducers(builder) {\n    return builder // commentPost request\n    .addCase(_post.commentPost.pending, function (state, action) {\n      state.CommentPostLoading = true;\n    }) // commentPost success\n    .addCase(_post.commentPost.fulfilled, function (state, action) {\n      state.CommentPostLoading = false;\n      var post = (0, _find2[\"default\"])(state.posts, {\n        id: action.payload.post.id\n      });\n      post.comments.unshift(action.payload);\n    }) // commentPost fail\n    .addCase(_post.commentPost.rejected, function (state, action) {\n      state.CommentPostLoading = false;\n    }) // get request\n    .addCase(_post.get.pending, function (state, action) {\n      // 다른 페이지를 갔다오면 posts를 초기화\n      if (action.meta.arg === 0) {\n        state.posts = [];\n      }\n\n      state.isLoading = true;\n    }) // get success\n    .addCase(_post.get.fulfilled, function (state, action) {\n      console.log(state.posts);\n      state.posts = (0, _concat2[\"default\"])(state.posts, action.payload.content);\n      state.lastPage = action.payload.last;\n      state.isLoading = false;\n    }) // get fail\n    .addCase(_post.get.rejected, function (state, action) {\n      state.isLoading = false;\n    }) // post request\n    .addCase(_post.post.pending, function (state, action) {\n      state.isLoading = true;\n    }) // post success -> / 로 이동\n    .addCase(_post.post.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/\");\n    }) // post fail\n    .addCase(_post.post.rejected, function (state, action) {\n      state.isLoading = false;\n      alert(\"포스트 작성에 실패하였습니다.\");\n    });\n  }\n});\nmodule.exports = postSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFNsaWNlLmpzP2U4YWYiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiQ29tbWVudFBvc3RMb2FkaW5nIiwiQ29tbWVudERlbGV0ZUxvYWRpbmciLCJsYXN0UGFnZSIsInBvc3RzIiwicG9zdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiY29tbWVudFBvc3QiLCJwZW5kaW5nIiwic3RhdGUiLCJhY3Rpb24iLCJmdWxmaWxsZWQiLCJwb3N0IiwiaWQiLCJwYXlsb2FkIiwiY29tbWVudHMiLCJ1bnNoaWZ0IiwicmVqZWN0ZWQiLCJnZXQiLCJtZXRhIiwiYXJnIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJsYXN0IiwiUm91dGVyIiwicHVzaCIsImFsZXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFLEtBRFE7QUFFbkJDLG9CQUFrQixFQUFFLEtBRkQ7QUFHbkJDLHNCQUFvQixFQUFFLEtBSEg7QUFJbkJDLFVBQVEsRUFBRSxLQUpTO0FBS25CQyxPQUFLLEVBQUU7QUFMWSxDQUFyQjtBQVFBLElBQU1DLFNBQVMsR0FBRywwQkFBWTtBQUM1QkMsTUFBSSxFQUFFLE1BRHNCO0FBRTVCUCxjQUFZLEVBQUVBLFlBRmM7QUFHNUJRLFVBQVEsRUFBRSxFQUhrQjtBQUk1QkMsZUFBYSxFQUFFLHVCQUFDQyxPQUFEO0FBQUEsV0FDYkEsT0FBTyxDQUNMO0FBREssS0FFSkMsT0FGSCxDQUVXQyxrQkFBWUMsT0FGdkIsRUFFZ0MsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQy9DRCxXQUFLLENBQUNaLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0QsS0FKSCxFQUtFO0FBTEYsS0FNR1MsT0FOSCxDQU1XQyxrQkFBWUksU0FOdkIsRUFNa0MsVUFBQ0YsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pERCxXQUFLLENBQUNaLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0EsVUFBTWUsSUFBSSxHQUFHLHVCQUFNSCxLQUFLLENBQUNULEtBQVosRUFBbUI7QUFBRWEsVUFBRSxFQUFFSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUYsSUFBZixDQUFvQkM7QUFBMUIsT0FBbkIsQ0FBYjtBQUNBRCxVQUFJLENBQUNHLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQk4sTUFBTSxDQUFDSSxPQUE3QjtBQUNELEtBVkgsRUFXRTtBQVhGLEtBWUdSLE9BWkgsQ0FZV0Msa0JBQVlVLFFBWnZCLEVBWWlDLFVBQUNSLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNoREQsV0FBSyxDQUFDWixrQkFBTixHQUEyQixLQUEzQjtBQUNELEtBZEgsRUFlRTtBQWZGLEtBZ0JHUyxPQWhCSCxDQWdCV1ksVUFBSVYsT0FoQmYsRUFnQndCLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN2QztBQUNBLFVBQUlBLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZQyxHQUFaLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3pCWCxhQUFLLENBQUNULEtBQU4sR0FBYyxFQUFkO0FBQ0Q7O0FBQ0RTLFdBQUssQ0FBQ2IsU0FBTixHQUFrQixJQUFsQjtBQUNELEtBdEJILEVBdUJFO0FBdkJGLEtBd0JHVSxPQXhCSCxDQXdCV1ksVUFBSVAsU0F4QmYsRUF3QjBCLFVBQUNGLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6Q1csYUFBTyxDQUFDQyxHQUFSLENBQVliLEtBQUssQ0FBQ1QsS0FBbEI7QUFDQVMsV0FBSyxDQUFDVCxLQUFOLEdBQWMseUJBQVFTLEtBQUssQ0FBQ1QsS0FBZCxFQUFxQlUsTUFBTSxDQUFDSSxPQUFQLENBQWVTLE9BQXBDLENBQWQ7QUFDQWQsV0FBSyxDQUFDVixRQUFOLEdBQWlCVyxNQUFNLENBQUNJLE9BQVAsQ0FBZVUsSUFBaEM7QUFDQWYsV0FBSyxDQUFDYixTQUFOLEdBQWtCLEtBQWxCO0FBQ0QsS0E3QkgsRUE4QkU7QUE5QkYsS0ErQkdVLE9BL0JILENBK0JXWSxVQUFJRCxRQS9CZixFQStCeUIsVUFBQ1IsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDRCxXQUFLLENBQUNiLFNBQU4sR0FBa0IsS0FBbEI7QUFDRCxLQWpDSCxFQWtDRTtBQWxDRixLQW1DR1UsT0FuQ0gsQ0FtQ1dNLFdBQUtKLE9BbkNoQixFQW1DeUIsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDRCxXQUFLLENBQUNiLFNBQU4sR0FBa0IsSUFBbEI7QUFDRCxLQXJDSCxFQXNDRTtBQXRDRixLQXVDR1UsT0F2Q0gsQ0F1Q1dNLFdBQUtELFNBdkNoQixFQXVDMkIsVUFBQ0YsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzFDRCxXQUFLLENBQUNiLFNBQU4sR0FBa0IsS0FBbEI7O0FBQ0E2Qix5QkFBT0MsSUFBUCxDQUFZLEdBQVo7QUFDRCxLQTFDSCxFQTJDRTtBQTNDRixLQTRDR3BCLE9BNUNILENBNENXTSxXQUFLSyxRQTVDaEIsRUE0QzBCLFVBQUNSLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6Q0QsV0FBSyxDQUFDYixTQUFOLEdBQWtCLEtBQWxCO0FBQ0ErQixXQUFLLENBQUMsa0JBQUQsQ0FBTDtBQUNELEtBL0NILENBRGE7QUFBQTtBQUphLENBQVosQ0FBbEI7QUF1REFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVCLFNBQWpCIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdFNsaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IF9jb25jYXQgZnJvbSBcImxvZGFzaC9jb25jYXRcIjtcbmltcG9ydCBfZmluZCBmcm9tIFwibG9kYXNoL2ZpbmRcIjtcbmltcG9ydCB7IHBvc3QsIGdldCwgY29tbWVudFBvc3QsIGNvbW1lbnREZWxldGUgfSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIENvbW1lbnRQb3N0TG9hZGluZzogZmFsc2UsXG4gIENvbW1lbnREZWxldGVMb2FkaW5nOiBmYWxzZSxcbiAgbGFzdFBhZ2U6IGZhbHNlLFxuICBwb3N0czogW10sXG59O1xuXG5jb25zdCBwb3N0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicG9zdFwiLFxuICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHt9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT5cbiAgICBidWlsZGVyXG4gICAgICAvLyBjb21tZW50UG9zdCByZXF1ZXN0XG4gICAgICAuYWRkQ2FzZShjb21tZW50UG9zdC5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5Db21tZW50UG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIGNvbW1lbnRQb3N0IHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGNvbW1lbnRQb3N0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuQ29tbWVudFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBfZmluZChzdGF0ZS5wb3N0cywgeyBpZDogYWN0aW9uLnBheWxvYWQucG9zdC5pZCB9KTtcbiAgICAgICAgcG9zdC5jb21tZW50cy51bnNoaWZ0KGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH0pXG4gICAgICAvLyBjb21tZW50UG9zdCBmYWlsXG4gICAgICAuYWRkQ2FzZShjb21tZW50UG9zdC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuQ29tbWVudFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLy8gZ2V0IHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKGdldC5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAvLyDri6Trpbgg7Y6Y7J207KeA66W8IOqwlOuLpOyYpOuptCBwb3N0c+ulvCDstIjquLDtmZRcbiAgICAgICAgaWYgKGFjdGlvbi5tZXRhLmFyZyA9PT0gMCkge1xuICAgICAgICAgIHN0YXRlLnBvc3RzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBnZXQgc3VjY2Vzc1xuICAgICAgLmFkZENhc2UoZ2V0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUucG9zdHMpO1xuICAgICAgICBzdGF0ZS5wb3N0cyA9IF9jb25jYXQoc3RhdGUucG9zdHMsIGFjdGlvbi5wYXlsb2FkLmNvbnRlbnQpO1xuICAgICAgICBzdGF0ZS5sYXN0UGFnZSA9IGFjdGlvbi5wYXlsb2FkLmxhc3Q7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC8vIGdldCBmYWlsXG4gICAgICAuYWRkQ2FzZShnZXQucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC8vIHBvc3QgcmVxdWVzdFxuICAgICAgLmFkZENhc2UocG9zdC5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIHBvc3Qgc3VjY2VzcyAtPiAvIOuhnCDsnbTrj5lcbiAgICAgIC5hZGRDYXNlKHBvc3QuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfSlcbiAgICAgIC8vIHBvc3QgZmFpbFxuICAgICAgLmFkZENhc2UocG9zdC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGFsZXJ0KFwi7Y+s7Iqk7Yq4IOyekeyEseyXkCDsi6TtjKjtlZjsmIDsirXri4jri6QuXCIpO1xuICAgICAgfSksXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb3N0U2xpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/postSlice.js\n");

/***/ })

})