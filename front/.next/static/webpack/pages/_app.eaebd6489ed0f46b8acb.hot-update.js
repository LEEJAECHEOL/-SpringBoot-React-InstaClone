webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/postSlice.js":
/*!*******************************!*\
  !*** ./reducers/postSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _concat2 = _interopRequireDefault(__webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\"));\n\nvar _find2 = _interopRequireDefault(__webpack_require__(/*! lodash/find */ \"./node_modules/lodash/find.js\"));\n\nvar _remove2 = _interopRequireDefault(__webpack_require__(/*! lodash/remove */ \"./node_modules/lodash/remove.js\"));\n\nvar _post = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\"));\n\nvar initialState = {\n  isLoading: false,\n  isCommentPostLoading: false,\n  isCommentDeleteLoading: false,\n  isLikePostLoading: false,\n  // like\n  isLikeDeleteLoading: false,\n  // unlike\n  lastPage: false,\n  posts: []\n};\nvar postSlice = (0, _toolkit.createSlice)({\n  name: \"post\",\n  initialState: initialState,\n  reducers: {},\n  extraReducers: function extraReducers(builder) {\n    return builder // likePost request\n    .addCase(likePost.pending, function (state, action) {\n      state.isCommentDeleteLoading = true;\n    }) // likePost success\n    .addCase(likePost.fulfilled, function (state, action) {\n      state.isCommentDeleteLoading = false;\n      var post = (0, _find2[\"default\"])(state.posts, {\n        id: action.payload.postId\n      });\n      (0, _remove2[\"default\"])(post.comments, {\n        id: action.payload.id\n      });\n    }) // likePost fail\n    .addCase(likePost.rejected, function (state, action) {\n      state.isCommentDeleteLoading = false;\n    }) // commentDelete request\n    .addCase(_post.commentDelete.pending, function (state, action) {\n      state.isCommentDeleteLoading = true;\n    }) // commentDelete success\n    .addCase(_post.commentDelete.fulfilled, function (state, action) {\n      state.isCommentDeleteLoading = false;\n      var post = (0, _find2[\"default\"])(state.posts, {\n        id: action.payload.postId\n      });\n      (0, _remove2[\"default\"])(post.comments, {\n        id: action.payload.id\n      });\n    }) // commentDelete fail\n    .addCase(_post.commentDelete.rejected, function (state, action) {\n      state.isCommentDeleteLoading = false;\n    }) // commentPost request\n    .addCase(_post.commentPost.pending, function (state, action) {\n      state.isCommentPostLoading = true;\n    }) // commentPost success\n    .addCase(_post.commentPost.fulfilled, function (state, action) {\n      state.isCommentPostLoading = false;\n      var post = (0, _find2[\"default\"])(state.posts, {\n        id: action.payload.post.id\n      });\n      post.comments.unshift(action.payload);\n    }) // commentPost fail\n    .addCase(_post.commentPost.rejected, function (state, action) {\n      state.isCommentPostLoading = false;\n    }) // get request\n    .addCase(_post.get.pending, function (state, action) {\n      // 다른 페이지를 갔다오면 posts를 초기화\n      if (action.meta.arg === 0) {\n        state.posts = [];\n      }\n\n      state.isLoading = true;\n    }) // get success\n    .addCase(_post.get.fulfilled, function (state, action) {\n      state.posts = (0, _concat2[\"default\"])(state.posts, action.payload.content);\n      state.lastPage = action.payload.last;\n      state.isLoading = false;\n    }) // get fail\n    .addCase(_post.get.rejected, function (state, action) {\n      state.isLoading = false;\n    }) // post request\n    .addCase(_post.post.pending, function (state, action) {\n      state.isLoading = true;\n    }) // post success -> / 로 이동\n    .addCase(_post.post.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/\");\n    }) // post fail\n    .addCase(_post.post.rejected, function (state, action) {\n      state.isLoading = false;\n      alert(\"포스트 작성에 실패하였습니다.\");\n    });\n  }\n});\nmodule.exports = postSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFNsaWNlLmpzP2U4YWYiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiaXNDb21tZW50UG9zdExvYWRpbmciLCJpc0NvbW1lbnREZWxldGVMb2FkaW5nIiwiaXNMaWtlUG9zdExvYWRpbmciLCJpc0xpa2VEZWxldGVMb2FkaW5nIiwibGFzdFBhZ2UiLCJwb3N0cyIsInBvc3RTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImxpa2VQb3N0IiwicGVuZGluZyIsInN0YXRlIiwiYWN0aW9uIiwiZnVsZmlsbGVkIiwicG9zdCIsImlkIiwicGF5bG9hZCIsInBvc3RJZCIsImNvbW1lbnRzIiwicmVqZWN0ZWQiLCJjb21tZW50RGVsZXRlIiwiY29tbWVudFBvc3QiLCJ1bnNoaWZ0IiwiZ2V0IiwibWV0YSIsImFyZyIsImNvbnRlbnQiLCJsYXN0IiwiUm91dGVyIiwicHVzaCIsImFsZXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFLEtBRFE7QUFFbkJDLHNCQUFvQixFQUFFLEtBRkg7QUFHbkJDLHdCQUFzQixFQUFFLEtBSEw7QUFJbkJDLG1CQUFpQixFQUFFLEtBSkE7QUFJTztBQUMxQkMscUJBQW1CLEVBQUUsS0FMRjtBQUtTO0FBQzVCQyxVQUFRLEVBQUUsS0FOUztBQU9uQkMsT0FBSyxFQUFFO0FBUFksQ0FBckI7QUFVQSxJQUFNQyxTQUFTLEdBQUcsMEJBQVk7QUFDNUJDLE1BQUksRUFBRSxNQURzQjtBQUU1QlQsY0FBWSxFQUFFQSxZQUZjO0FBRzVCVSxVQUFRLEVBQUUsRUFIa0I7QUFJNUJDLGVBQWEsRUFBRSx1QkFBQ0MsT0FBRDtBQUFBLFdBQ2JBLE9BQU8sQ0FDTDtBQURLLEtBRUpDLE9BRkgsQ0FFV0MsUUFBUSxDQUFDQyxPQUZwQixFQUU2QixVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDNUNELFdBQUssQ0FBQ2Isc0JBQU4sR0FBK0IsSUFBL0I7QUFDRCxLQUpILEVBS0U7QUFMRixLQU1HVSxPQU5ILENBTVdDLFFBQVEsQ0FBQ0ksU0FOcEIsRUFNK0IsVUFBQ0YsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzlDRCxXQUFLLENBQUNiLHNCQUFOLEdBQStCLEtBQS9CO0FBQ0EsVUFBTWdCLElBQUksR0FBRyx1QkFBTUgsS0FBSyxDQUFDVCxLQUFaLEVBQW1CO0FBQUVhLFVBQUUsRUFBRUgsTUFBTSxDQUFDSSxPQUFQLENBQWVDO0FBQXJCLE9BQW5CLENBQWI7QUFDQSwrQkFBUUgsSUFBSSxDQUFDSSxRQUFiLEVBQXVCO0FBQUVILFVBQUUsRUFBRUgsTUFBTSxDQUFDSSxPQUFQLENBQWVEO0FBQXJCLE9BQXZCO0FBQ0QsS0FWSCxFQVdFO0FBWEYsS0FZR1AsT0FaSCxDQVlXQyxRQUFRLENBQUNVLFFBWnBCLEVBWThCLFVBQUNSLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM3Q0QsV0FBSyxDQUFDYixzQkFBTixHQUErQixLQUEvQjtBQUNELEtBZEgsRUFlRTtBQWZGLEtBZ0JHVSxPQWhCSCxDQWdCV1ksb0JBQWNWLE9BaEJ6QixFQWdCa0MsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pERCxXQUFLLENBQUNiLHNCQUFOLEdBQStCLElBQS9CO0FBQ0QsS0FsQkgsRUFtQkU7QUFuQkYsS0FvQkdVLE9BcEJILENBb0JXWSxvQkFBY1AsU0FwQnpCLEVBb0JvQyxVQUFDRixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDbkRELFdBQUssQ0FBQ2Isc0JBQU4sR0FBK0IsS0FBL0I7QUFDQSxVQUFNZ0IsSUFBSSxHQUFHLHVCQUFNSCxLQUFLLENBQUNULEtBQVosRUFBbUI7QUFBRWEsVUFBRSxFQUFFSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUM7QUFBckIsT0FBbkIsQ0FBYjtBQUNBLCtCQUFRSCxJQUFJLENBQUNJLFFBQWIsRUFBdUI7QUFBRUgsVUFBRSxFQUFFSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUQ7QUFBckIsT0FBdkI7QUFDRCxLQXhCSCxFQXlCRTtBQXpCRixLQTBCR1AsT0ExQkgsQ0EwQldZLG9CQUFjRCxRQTFCekIsRUEwQm1DLFVBQUNSLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNsREQsV0FBSyxDQUFDYixzQkFBTixHQUErQixLQUEvQjtBQUNELEtBNUJILEVBNkJFO0FBN0JGLEtBOEJHVSxPQTlCSCxDQThCV2Esa0JBQVlYLE9BOUJ2QixFQThCZ0MsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQy9DRCxXQUFLLENBQUNkLG9CQUFOLEdBQTZCLElBQTdCO0FBQ0QsS0FoQ0gsRUFpQ0U7QUFqQ0YsS0FrQ0dXLE9BbENILENBa0NXYSxrQkFBWVIsU0FsQ3ZCLEVBa0NrQyxVQUFDRixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakRELFdBQUssQ0FBQ2Qsb0JBQU4sR0FBNkIsS0FBN0I7QUFDQSxVQUFNaUIsSUFBSSxHQUFHLHVCQUFNSCxLQUFLLENBQUNULEtBQVosRUFBbUI7QUFBRWEsVUFBRSxFQUFFSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUYsSUFBZixDQUFvQkM7QUFBMUIsT0FBbkIsQ0FBYjtBQUNBRCxVQUFJLENBQUNJLFFBQUwsQ0FBY0ksT0FBZCxDQUFzQlYsTUFBTSxDQUFDSSxPQUE3QjtBQUNELEtBdENILEVBdUNFO0FBdkNGLEtBd0NHUixPQXhDSCxDQXdDV2Esa0JBQVlGLFFBeEN2QixFQXdDaUMsVUFBQ1IsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2hERCxXQUFLLENBQUNkLG9CQUFOLEdBQTZCLEtBQTdCO0FBQ0QsS0ExQ0gsRUEyQ0U7QUEzQ0YsS0E0Q0dXLE9BNUNILENBNENXZSxVQUFJYixPQTVDZixFQTRDd0IsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3ZDO0FBQ0EsVUFBSUEsTUFBTSxDQUFDWSxJQUFQLENBQVlDLEdBQVosS0FBb0IsQ0FBeEIsRUFBMkI7QUFDekJkLGFBQUssQ0FBQ1QsS0FBTixHQUFjLEVBQWQ7QUFDRDs7QUFDRFMsV0FBSyxDQUFDZixTQUFOLEdBQWtCLElBQWxCO0FBQ0QsS0FsREgsRUFtREU7QUFuREYsS0FvREdZLE9BcERILENBb0RXZSxVQUFJVixTQXBEZixFQW9EMEIsVUFBQ0YsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3pDRCxXQUFLLENBQUNULEtBQU4sR0FBYyx5QkFBUVMsS0FBSyxDQUFDVCxLQUFkLEVBQXFCVSxNQUFNLENBQUNJLE9BQVAsQ0FBZVUsT0FBcEMsQ0FBZDtBQUNBZixXQUFLLENBQUNWLFFBQU4sR0FBaUJXLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlVyxJQUFoQztBQUNBaEIsV0FBSyxDQUFDZixTQUFOLEdBQWtCLEtBQWxCO0FBQ0QsS0F4REgsRUF5REU7QUF6REYsS0EwREdZLE9BMURILENBMERXZSxVQUFJSixRQTFEZixFQTBEeUIsVUFBQ1IsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDRCxXQUFLLENBQUNmLFNBQU4sR0FBa0IsS0FBbEI7QUFDRCxLQTVESCxFQTZERTtBQTdERixLQThER1ksT0E5REgsQ0E4RFdNLFdBQUtKLE9BOURoQixFQThEeUIsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDRCxXQUFLLENBQUNmLFNBQU4sR0FBa0IsSUFBbEI7QUFDRCxLQWhFSCxFQWlFRTtBQWpFRixLQWtFR1ksT0FsRUgsQ0FrRVdNLFdBQUtELFNBbEVoQixFQWtFMkIsVUFBQ0YsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzFDRCxXQUFLLENBQUNmLFNBQU4sR0FBa0IsS0FBbEI7O0FBQ0FnQyx5QkFBT0MsSUFBUCxDQUFZLEdBQVo7QUFDRCxLQXJFSCxFQXNFRTtBQXRFRixLQXVFR3JCLE9BdkVILENBdUVXTSxXQUFLSyxRQXZFaEIsRUF1RTBCLFVBQUNSLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6Q0QsV0FBSyxDQUFDZixTQUFOLEdBQWtCLEtBQWxCO0FBQ0FrQyxXQUFLLENBQUMsa0JBQUQsQ0FBTDtBQUNELEtBMUVILENBRGE7QUFBQTtBQUphLENBQVosQ0FBbEI7QUFrRkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjdCLFNBQWpCIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdFNsaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IF9jb25jYXQgZnJvbSBcImxvZGFzaC9jb25jYXRcIjtcbmltcG9ydCBfZmluZCBmcm9tIFwibG9kYXNoL2ZpbmRcIjtcbmltcG9ydCBfcmVtb3ZlIGZyb20gXCJsb2Rhc2gvcmVtb3ZlXCI7XG5pbXBvcnQgeyBwb3N0LCBnZXQsIGNvbW1lbnRQb3N0LCBjb21tZW50RGVsZXRlIH0gZnJvbSBcIi4uL2FjdGlvbnMvcG9zdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc0NvbW1lbnRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGlzQ29tbWVudERlbGV0ZUxvYWRpbmc6IGZhbHNlLFxuICBpc0xpa2VQb3N0TG9hZGluZzogZmFsc2UsIC8vIGxpa2VcbiAgaXNMaWtlRGVsZXRlTG9hZGluZzogZmFsc2UsIC8vIHVubGlrZVxuICBsYXN0UGFnZTogZmFsc2UsXG4gIHBvc3RzOiBbXSxcbn07XG5cbmNvbnN0IHBvc3RTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJwb3N0XCIsXG4gIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PlxuICAgIGJ1aWxkZXJcbiAgICAgIC8vIGxpa2VQb3N0IHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKGxpa2VQb3N0LnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzQ29tbWVudERlbGV0ZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIGxpa2VQb3N0IHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGxpa2VQb3N0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNDb21tZW50RGVsZXRlTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwb3N0ID0gX2ZpbmQoc3RhdGUucG9zdHMsIHsgaWQ6IGFjdGlvbi5wYXlsb2FkLnBvc3RJZCB9KTtcbiAgICAgICAgX3JlbW92ZShwb3N0LmNvbW1lbnRzLCB7IGlkOiBhY3Rpb24ucGF5bG9hZC5pZCB9KTtcbiAgICAgIH0pXG4gICAgICAvLyBsaWtlUG9zdCBmYWlsXG4gICAgICAuYWRkQ2FzZShsaWtlUG9zdC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNDb21tZW50RGVsZXRlTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC8vIGNvbW1lbnREZWxldGUgcmVxdWVzdFxuICAgICAgLmFkZENhc2UoY29tbWVudERlbGV0ZS5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0NvbW1lbnREZWxldGVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBjb21tZW50RGVsZXRlIHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGNvbW1lbnREZWxldGUuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0NvbW1lbnREZWxldGVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBfZmluZChzdGF0ZS5wb3N0cywgeyBpZDogYWN0aW9uLnBheWxvYWQucG9zdElkIH0pO1xuICAgICAgICBfcmVtb3ZlKHBvc3QuY29tbWVudHMsIHsgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkIH0pO1xuICAgICAgfSlcbiAgICAgIC8vIGNvbW1lbnREZWxldGUgZmFpbFxuICAgICAgLmFkZENhc2UoY29tbWVudERlbGV0ZS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNDb21tZW50RGVsZXRlTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC8vIGNvbW1lbnRQb3N0IHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKGNvbW1lbnRQb3N0LnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzQ29tbWVudFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBjb21tZW50UG9zdCBzdWNjZXNzXG4gICAgICAuYWRkQ2FzZShjb21tZW50UG9zdC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzQ29tbWVudFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBfZmluZChzdGF0ZS5wb3N0cywgeyBpZDogYWN0aW9uLnBheWxvYWQucG9zdC5pZCB9KTtcbiAgICAgICAgcG9zdC5jb21tZW50cy51bnNoaWZ0KGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH0pXG4gICAgICAvLyBjb21tZW50UG9zdCBmYWlsXG4gICAgICAuYWRkQ2FzZShjb21tZW50UG9zdC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNDb21tZW50UG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAvLyBnZXQgcmVxdWVzdFxuICAgICAgLmFkZENhc2UoZ2V0LnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIC8vIOuLpOuluCDtjpjsnbTsp4Drpbwg6rCU64uk7Jik66m0IHBvc3Rz66W8IOy0iOq4sO2ZlFxuICAgICAgICBpZiAoYWN0aW9uLm1ldGEuYXJnID09PSAwKSB7XG4gICAgICAgICAgc3RhdGUucG9zdHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIGdldCBzdWNjZXNzXG4gICAgICAuYWRkQ2FzZShnZXQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5wb3N0cyA9IF9jb25jYXQoc3RhdGUucG9zdHMsIGFjdGlvbi5wYXlsb2FkLmNvbnRlbnQpO1xuICAgICAgICBzdGF0ZS5sYXN0UGFnZSA9IGFjdGlvbi5wYXlsb2FkLmxhc3Q7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC8vIGdldCBmYWlsXG4gICAgICAuYWRkQ2FzZShnZXQucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC8vIHBvc3QgcmVxdWVzdFxuICAgICAgLmFkZENhc2UocG9zdC5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIHBvc3Qgc3VjY2VzcyAtPiAvIOuhnCDsnbTrj5lcbiAgICAgIC5hZGRDYXNlKHBvc3QuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfSlcbiAgICAgIC8vIHBvc3QgZmFpbFxuICAgICAgLmFkZENhc2UocG9zdC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGFsZXJ0KFwi7Y+s7Iqk7Yq4IOyekeyEseyXkCDsi6TtjKjtlZjsmIDsirXri4jri6QuXCIpO1xuICAgICAgfSksXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb3N0U2xpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/postSlice.js\n");

/***/ })

})