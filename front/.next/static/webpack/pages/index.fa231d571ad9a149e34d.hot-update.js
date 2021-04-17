webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_FeedPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FeedPost */ \"./components/FeedPost.js\");\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style */ \"./style.js\");\n\n\n\nvar _jsxFileName = \"/Users/lee/Desktop/instaClone/front/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      lastPage = _useSelector.lastPage,\n      posts = _useSelector.posts,\n      isLoading = _useSelector.isLoading;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    dispatch(Object(_actions_post__WEBPACK_IMPORTED_MODULE_5__[\"get\"])(page)); // 페이지 진입 시 post데이터 가져오기\n  }, []); // 스크롤링\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    function onScroll() {\n      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 50) {\n        if (!lastPage && !isLoading) {\n          setPage(function (prev) {\n            return prev + 1;\n          });\n          dispatch(Object(_actions_post__WEBPACK_IMPORTED_MODULE_5__[\"get\"])(page + 1));\n        }\n      }\n    }\n\n    window.addEventListener(\"scroll\", onScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", onScroll);\n    };\n  }, [lastPage, isLoading, posts, page]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_FeedPost__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          post: post\n        }, post.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"LoadingDiv\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[\"LoadingOutlined\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Home, \"WZO3ZgJX4NMkLMCY8uyDTDZEY0c=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImxhc3RQYWdlIiwicG9zdHMiLCJpc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXQiLCJvblNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJwcmV2IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLENBQUQsQ0FEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUVqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZpQixxQkFHc0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSGpDO0FBQUEsTUFHVEMsUUFIUyxnQkFHVEEsUUFIUztBQUFBLE1BR0NDLEtBSEQsZ0JBR0NBLEtBSEQ7QUFBQSxNQUdRQyxTQUhSLGdCQUdRQSxTQUhSOztBQUtqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RSLFlBQVEsQ0FBQ1MseURBQUcsQ0FBQ1gsSUFBRCxDQUFKLENBQVIsQ0FEYyxDQUNPO0FBQ3RCLEdBRlEsRUFFTixFQUZNLENBQVQsQ0FMaUIsQ0FRakI7O0FBQ0FVLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNFLFFBQVQsR0FBb0I7QUFDbEIsVUFDRUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTlDLEdBQ0FGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsRUFGMUMsRUFHRTtBQUNBLFlBQUksQ0FBQ1gsUUFBRCxJQUFhLENBQUNFLFNBQWxCLEVBQTZCO0FBQzNCUixpQkFBTyxDQUFDLFVBQUNrQixJQUFEO0FBQUEsbUJBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLFdBQUQsQ0FBUDtBQUNBakIsa0JBQVEsQ0FBQ1MseURBQUcsQ0FBQ1gsSUFBSSxHQUFHLENBQVIsQ0FBSixDQUFSO0FBQ0Q7QUFDRjtBQUNGOztBQUNEYSxVQUFNLENBQUNPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUixRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNRLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDVCxRQUFyQztBQUNELEtBRkQ7QUFHRCxHQWhCUSxFQWdCTixDQUFDTCxRQUFELEVBQVdFLFNBQVgsRUFBc0JELEtBQXRCLEVBQTZCUixJQUE3QixDQWhCTSxDQUFUO0FBaUJBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsNkRBQUQ7QUFBQSxpQkFDR1EsS0FBSyxDQUFDYyxHQUFOLENBQVUsVUFBQ2hCLElBQUQ7QUFBQSw0QkFDVCxxRUFBQyw0REFBRDtBQUF3QixjQUFJLEVBQUVBO0FBQTlCLFdBQWVBLElBQUksQ0FBQ2lCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWLENBREgsZUFJRSxxRUFBQyxpREFBRDtBQUFBLCtCQUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFZRCxDQXRDRDs7R0FBTXpCLEk7VUFFYUssdUQsRUFDc0JDLHVEOzs7S0FIbkNOLEk7QUF3Q1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xuaW1wb3J0IEZlZWRQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL0ZlZWRQb3N0XCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0XCI7XG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IExvYWRpbmdEaXYgfSBmcm9tIFwiLi4vc3R5bGVcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBsYXN0UGFnZSwgcG9zdHMsIGlzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldChwYWdlKSk7IC8vIO2OmOydtOyngCDsp4TsnoUg7IucIHBvc3TrjbDsnbTthLAg6rCA7KC47Jik6riwXG4gIH0sIFtdKTtcbiAgLy8g7Iqk7YGs66Gk66eBXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gNTBcbiAgICAgICkge1xuICAgICAgICBpZiAoIWxhc3RQYWdlICYmICFpc0xvYWRpbmcpIHtcbiAgICAgICAgICBzZXRQYWdlKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICAgICAgZGlzcGF0Y2goZ2V0KHBhZ2UgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW2xhc3RQYWdlLCBpc0xvYWRpbmcsIHBvc3RzLCBwYWdlXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8RmVlZFBvc3Qga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgICAgPExvYWRpbmdEaXY+XG4gICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCAvPlxuICAgICAgICA8L0xvYWRpbmdEaXY+XG4gICAgICA8L0FwcExheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})