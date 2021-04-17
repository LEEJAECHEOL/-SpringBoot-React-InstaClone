webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FeedPost.js":
/*!********************************!*\
  !*** ./components/FeedPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./components/style.js\");\n\n\n\nvar _jsxFileName = \"/Users/lee/Desktop/instaClone/front/components/FeedPost.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar commentContent = function commentContent(username, msg) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"feed-comment-username\",\n        children: username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), \" : \", msg]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n}; // 게시물\n\n\nvar FeedPost = function FeedPost(_ref) {\n  var post = _ref.post;\n  console.log(post);\n\n  var onFinish = function onFinish() {};\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_4__[\"FeedCard\"], {\n      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"feed-profile\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: post.user.profileImageUrl !== null ? \"http://localhost:8080/upload/\" + post.user.profileImageUrl : \"/images/noprofile.jpg\",\n            alt: \"profile\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n              cx: \"20\",\n              cy: \"20\",\n              r: \"18\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: post.user.username\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"feed-image\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"http://localhost:8080/upload/\" + post.postImageUrl,\n          alt: \"mainImage\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"feed-like\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"feed-like-btn\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"HeartOutlined\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"feed-like-count\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: post.likeCount\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this), \" likes\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"feed-tag\",\n        children: [post.tags.map(function (tag) {\n          /*#__PURE__*/\n          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              children: [\"#\", tag.name]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"#tag1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"feed-content\",\n        children: \"\\uB0B4\\uC6A9\\uC785\\uB2C8\\uB2E4 \\u314E\\u314E\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"feed-comment\",\n        children: [commentContent(\"username\", \"내용입니다.\"), commentContent(\"username\", \"내용입니다.\"), commentContent(\"username\", \"내용입니다.\")]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n        onFinish: onFinish,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n          name: \"content\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n            placeholder: \"\\uB313\\uAE00 \\uB2EC\\uAE30...\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            htmlType: \"submit\",\n            children: \"\\uAC8C\\uC2DC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = FeedPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedPost);\n\nvar _c;\n\n$RefreshReg$(_c, \"FeedPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVkUG9zdC5qcz83MjRiIl0sIm5hbWVzIjpbImNvbW1lbnRDb250ZW50IiwidXNlcm5hbWUiLCJtc2ciLCJGZWVkUG9zdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwib25GaW5pc2giLCJ1c2VyIiwicHJvZmlsZUltYWdlVXJsIiwicHJvY2VzcyIsInBvc3RJbWFnZVVybCIsImxpa2VDb3VudCIsInRhZ3MiLCJtYXAiLCJ0YWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFXQyxHQUFYLEVBQW1CO0FBQ3hDLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUFNLGlCQUFTLEVBQUMsdUJBQWhCO0FBQUEsa0JBQXlDRDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsU0FDK0RDLEdBRC9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQ0FSRCxDLENBVUE7OztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUNBLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU0sQ0FBRSxDQUF6Qjs7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLCtDQUFEO0FBQ0UsV0FBSyxlQUNIO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxrQ0FDRTtBQUNFLGVBQUcsRUFDREgsSUFBSSxDQUFDSSxJQUFMLENBQVVDLGVBQVYsS0FBOEIsSUFBOUIsR0FDSUMsK0JBQUEsR0FBdUJOLElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxlQURyQyxHQUVJLHVCQUpSO0FBTUUsZUFBRyxFQUFDO0FBTk47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVNFO0FBQUEsbUNBQ0U7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBZ0IsZ0JBQUUsRUFBQyxJQUFuQjtBQUF3QixlQUFDLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBY0U7QUFBQSxvQkFBT0wsSUFBSSxDQUFDSSxJQUFMLENBQVVQO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEY7QUFBQSxzQkFGSjtBQUFBLDhCQW9CRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFUywrQkFBQSxHQUF1Qk4sSUFBSSxDQUFDTyxZQUF0QztBQUFvRCxhQUFHLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkYsZUF1QkU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUMsZUFBaEI7QUFBQSxpQ0FDRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQU0sbUJBQVMsRUFBQyxpQkFBaEI7QUFBQSxrQ0FDRTtBQUFBLHNCQUFJUCxJQUFJLENBQUNRO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJGLGVBK0JFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsbUJBQ0dSLElBQUksQ0FBQ1MsSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RCO0FBQUE7QUFBQSxtQ0FDRTtBQUFBLDhCQUFRQSxHQUFHLENBQUNDLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFHRCxTQUpBLENBREgsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQkYsZUF3Q0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0YsZUF5Q0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxtQkFDR2hCLGNBQWMsQ0FBQyxVQUFELEVBQWEsUUFBYixDQURqQixFQUVHQSxjQUFjLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FGakIsRUFHR0EsY0FBYyxDQUFDLFVBQUQsRUFBYSxRQUFiLENBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpDRixlQThDRSxxRUFBQyx5Q0FBRDtBQUFNLGdCQUFRLEVBQUVPLFFBQWhCO0FBQUEsZ0NBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsY0FBSSxFQUFDLFNBQWhCO0FBQUEsaUNBQ0UscUVBQUMsMENBQUQ7QUFBTyx1QkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsaUNBQ0UscUVBQUMsMkNBQUQ7QUFBUSxvQkFBUSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEyREQsQ0EvREQ7O0tBQU1KLFE7QUFpRVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GZWVkUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYXJ0T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmVlZENhcmQgfSBmcm9tIFwiLi9zdHlsZVwiO1xuXG5jb25zdCBjb21tZW50Q29udGVudCA9ICh1c2VybmFtZSwgbXNnKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLWNvbW1lbnQtdXNlcm5hbWVcIj57dXNlcm5hbWV9PC9zcGFuPiA6IHttc2d9XG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyDqsozsi5zrrLxcbmNvbnN0IEZlZWRQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHBvc3QpO1xuICBjb25zdCBvbkZpbmlzaCA9ICgpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGZWVkQ2FyZFxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1wcm9maWxlXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgcG9zdC51c2VyLnByb2ZpbGVJbWFnZVVybCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IHByb2Nlc3MuZW52LmltYWdlVXJsICsgcG9zdC51c2VyLnByb2ZpbGVJbWFnZVVybFxuICAgICAgICAgICAgICAgICAgICA6IFwiL2ltYWdlcy9ub3Byb2ZpbGUuanBnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzdmc+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIwXCIgY3k9XCIyMFwiIHI9XCIxOFwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj57cG9zdC51c2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtaW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvY2Vzcy5lbnYuaW1hZ2VVcmwgKyBwb3N0LnBvc3RJbWFnZVVybH0gYWx0PVwibWFpbkltYWdlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1saWtlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVlZC1saWtlLWJ0blwiPlxuICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVlZC1saWtlLWNvdW50XCI+XG4gICAgICAgICAgICA8Yj57cG9zdC5saWtlQ291bnR9PC9iPiBsaWtlc1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC10YWdcIj5cbiAgICAgICAgICB7cG9zdC50YWdzLm1hcCgodGFnKSA9PiB7XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3Bhbj4je3RhZy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvPjtcbiAgICAgICAgICB9KX1cblxuICAgICAgICAgIDxzcGFuPiN0YWcxPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkLWNvbnRlbnRcIj7rgrTsmqnsnoXri4jri6Qg44WO44WOPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1jb21tZW50XCI+XG4gICAgICAgICAge2NvbW1lbnRDb250ZW50KFwidXNlcm5hbWVcIiwgXCLrgrTsmqnsnoXri4jri6QuXCIpfVxuICAgICAgICAgIHtjb21tZW50Q29udGVudChcInVzZXJuYW1lXCIsIFwi64K07Jqp7J6F64uI64ukLlwiKX1cbiAgICAgICAgICB7Y29tbWVudENvbnRlbnQoXCJ1c2VybmFtZVwiLCBcIuuCtOyaqeyeheuLiOuLpC5cIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25GaW5pc2h9PlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuuMk+q4gCDri6zquLAuLi5cIiAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uIGh0bWxUeXBlPVwic3VibWl0XCI+6rKM7IucPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRmVlZENhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FeedPost.js\n");

/***/ })

})