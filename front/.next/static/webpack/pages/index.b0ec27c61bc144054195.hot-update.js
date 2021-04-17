webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_FeedPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FeedPost */ \"./components/FeedPost.js\");\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\n\n\n\nvar _jsxFileName = \"/Users/lee/Desktop/instaClone/front/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      lastPage = _useSelector.lastPage,\n      posts = _useSelector.posts,\n      isLoading = _useSelector.isLoading;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    dispatch(Object(_actions_post__WEBPACK_IMPORTED_MODULE_5__[\"get\"])(page)); // 페이지 진입 시 post데이터 가져오기\n  }, []); // 스크롤링\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    function onScroll() {\n      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250) {\n        if (lastPage && !isLoading) {\n          setPage(function (prev) {\n            return prev + 1;\n          });\n          dispatch(Object(_actions_post__WEBPACK_IMPORTED_MODULE_5__[\"get\"])(page + 1));\n        }\n      }\n    }\n\n    window.addEventListener(\"scroll\", onScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", onScroll);\n    };\n  }, [hasMorePosts, loadPostsLoading, communityList, page]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_FeedPost__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_FeedPost__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Home, \"WZO3ZgJX4NMkLMCY8uyDTDZEY0c=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImxhc3RQYWdlIiwicG9zdHMiLCJpc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXQiLCJvblNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJwcmV2IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwiY29tbXVuaXR5TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLENBQUQsQ0FEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUVqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZpQixxQkFHc0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSGpDO0FBQUEsTUFHVEMsUUFIUyxnQkFHVEEsUUFIUztBQUFBLE1BR0NDLEtBSEQsZ0JBR0NBLEtBSEQ7QUFBQSxNQUdRQyxTQUhSLGdCQUdRQSxTQUhSOztBQUtqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RSLFlBQVEsQ0FBQ1MseURBQUcsQ0FBQ1gsSUFBRCxDQUFKLENBQVIsQ0FEYyxDQUNPO0FBQ3RCLEdBRlEsRUFFTixFQUZNLENBQVQsQ0FMaUIsQ0FTakI7O0FBQ0FVLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNFLFFBQVQsR0FBb0I7QUFDbEIsVUFDRUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTlDLEdBQ0FGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsR0FGMUMsRUFHRTtBQUNBLFlBQUlYLFFBQVEsSUFBSSxDQUFDRSxTQUFqQixFQUE0QjtBQUMxQlIsaUJBQU8sQ0FBQyxVQUFDa0IsSUFBRDtBQUFBLG1CQUFVQSxJQUFJLEdBQUcsQ0FBakI7QUFBQSxXQUFELENBQVA7QUFDQWpCLGtCQUFRLENBQUNTLHlEQUFHLENBQUNYLElBQUksR0FBRyxDQUFSLENBQUosQ0FBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRGEsVUFBTSxDQUFDTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1IsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEMsWUFBTSxDQUFDUSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1QsUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FoQlEsRUFnQk4sQ0FBQ1UsWUFBRCxFQUFlQyxnQkFBZixFQUFpQ0MsYUFBakMsRUFBZ0R4QixJQUFoRCxDQWhCTSxDQUFUO0FBaUJBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsNkRBQUQ7QUFBQSw4QkFDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFRRCxDQW5DRDs7R0FBTUYsSTtVQUVhSyx1RCxFQUNzQkMsdUQ7OztLQUhuQ04sSTtBQXFDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgRmVlZFBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmVlZFBvc3RcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gXCIuLi9hY3Rpb25zL3Bvc3RcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBsYXN0UGFnZSwgcG9zdHMsIGlzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldChwYWdlKSk7IC8vIO2OmOydtOyngCDsp4TsnoUg7IucIHBvc3TrjbDsnbTthLAg6rCA7KC47Jik6riwXG4gIH0sIFtdKTtcblxuICAvLyDsiqTtgazroaTrp4FcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAyNTBcbiAgICAgICkge1xuICAgICAgICBpZiAobGFzdFBhZ2UgJiYgIWlzTG9hZGluZykge1xuICAgICAgICAgIHNldFBhZ2UoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICAgICAgICBkaXNwYXRjaChnZXQocGFnZSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCBjb21tdW5pdHlMaXN0LCBwYWdlXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIDxGZWVkUG9zdCAvPlxuICAgICAgICA8RmVlZFBvc3QgLz5cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})