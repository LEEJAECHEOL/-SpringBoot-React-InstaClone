webpackHotUpdate_N_E("pages/profile/[id]",{

/***/ "./pages/profile/[id].js":
/*!*******************************!*\
  !*** ./pages/profile/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/user */ \"./actions/user.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_ProfileInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ProfileInfo */ \"./components/ProfileInfo.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../style */ \"./style.js\");\n\n\n\nvar _jsxFileName = \"/Users/lee/Desktop/instaClone/front/pages/profile/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar profile = function profile() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.user.profile;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (id) {\n      var data = {\n        id: id\n      };\n      dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_6__[\"profileGet\"])(data));\n    }\n  }, [id]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"\\uD504\\uB85C\\uD544 | InstaClone\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ProfileInfo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        profile: profile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n        gutter: [8, 8],\n        children: profile && profile.user.posts.map(function (post) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_9__[\"ExploreCol\"], {\n            span: 8,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"http://localhost:8080/upload/\" + post.postImageUrl,\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 17\n            }, _this)\n          }, post.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(profile, \"70wnzRBWWdCQUG6XSJBxtyIlTZU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profile);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS8uanM/ODc1MyJdLCJuYW1lcyI6WyJwcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZUVmZmVjdCIsImRhdGEiLCJwcm9maWxlR2V0IiwicG9zdHMiLCJtYXAiLCJwb3N0IiwicHJvY2VzcyIsInBvc3RJbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsbUJBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURvQixNQUVaQyxFQUZZLEdBRUxGLE1BQU0sQ0FBQ0csS0FGRixDQUVaRCxFQUZZO0FBR3BCLE1BQU1FLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNTixPQUFPLEdBQUdPLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXVCxPQUF0QjtBQUFBLEdBQUQsQ0FBM0I7QUFDQVUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVAsRUFBSixFQUFRO0FBQ04sVUFBTVEsSUFBSSxHQUFHO0FBQ1hSLFVBQUUsRUFBRUE7QUFETyxPQUFiO0FBR0FFLGNBQVEsQ0FBQ08sZ0VBQVUsQ0FBQ0QsSUFBRCxDQUFYLENBQVI7QUFDRDtBQUNGLEdBUFEsRUFPTixDQUFDUixFQUFELENBUE0sQ0FBVDtBQVNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0UscUVBQUMsK0RBQUQ7QUFBYSxlQUFPLEVBQUVIO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHdDQUFEO0FBQUssY0FBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBYjtBQUFBLGtCQUNHQSxPQUFPLElBQ05BLE9BQU8sQ0FBQ1MsSUFBUixDQUFhSSxLQUFiLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxJQUFEO0FBQUEsOEJBQ3JCLHFFQUFDLGlEQUFEO0FBQTBCLGdCQUFJLEVBQUUsQ0FBaEM7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVDLCtCQUFBLEdBQXVCRCxJQUFJLENBQUNFLFlBQXRDO0FBQW9ELGlCQUFHLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQWlCRixJQUFJLENBQUNaLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHFCO0FBQUEsU0FBdkI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQWtCRCxDQWhDRDs7R0FBTUgsTztVQUNXRSxxRCxFQUVFSSx1RCxFQUNEQyx1RDs7O0FBOEJIUCxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2ZpbGUvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcHJvZmlsZUdldCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3VzZXJcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgUHJvZmlsZUluZm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUluZm9cIjtcbmltcG9ydCB7IEV4cGxvcmVDb2wgfSBmcm9tIFwiLi4vLi4vc3R5bGVcIjtcblxuY29uc3QgcHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwcm9maWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLnByb2ZpbGUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgfTtcbiAgICAgIGRpc3BhdGNoKHByb2ZpbGVHZXQoZGF0YSkpO1xuICAgIH1cbiAgfSwgW2lkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7tlITroZztlYQgfCBJbnN0YUNsb25lPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIDxQcm9maWxlSW5mbyBwcm9maWxlPXtwcm9maWxlfSAvPlxuICAgICAgICA8Um93IGd1dHRlcj17WzgsIDhdfT5cbiAgICAgICAgICB7cHJvZmlsZSAmJlxuICAgICAgICAgICAgcHJvZmlsZS51c2VyLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8RXhwbG9yZUNvbCBrZXk9e3Bvc3QuaWR9IHNwYW49ezh9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzLmVudi5pbWFnZVVybCArIHBvc3QucG9zdEltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8L0V4cGxvcmVDb2w+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0FwcExheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile/[id].js\n");

/***/ })

})