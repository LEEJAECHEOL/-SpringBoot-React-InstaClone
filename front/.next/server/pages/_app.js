module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  createAsyncThunk\n} = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n\nexports.logIn = createAsyncThunk(\"user/logIn\", async (data, thunkAPI) => {\n  return await delay(500, {\n    userId: 1,\n    nickname: \"zerocho\"\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3VzZXIuanM/ZDFjZSJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwicmVxdWlyZSIsImV4cG9ydHMiLCJsb2dJbiIsImRhdGEiLCJ0aHVua0FQSSIsImRlbGF5IiwidXNlcklkIiwibmlja25hbWUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFBRUE7QUFBRixJQUF1QkMsbUJBQU8sQ0FBQywwQ0FBRCxDQUFwQzs7QUFFQUMsT0FBTyxDQUFDQyxLQUFSLEdBQWdCSCxnQkFBZ0IsQ0FBQyxZQUFELEVBQWUsT0FBT0ksSUFBUCxFQUFhQyxRQUFiLEtBQTBCO0FBQ3ZFLFNBQU8sTUFBTUMsS0FBSyxDQUFDLEdBQUQsRUFBTTtBQUN0QkMsVUFBTSxFQUFFLENBRGM7QUFFdEJDLFlBQVEsRUFBRTtBQUZZLEdBQU4sQ0FBbEI7QUFJRCxDQUwrQixDQUFoQyIsImZpbGUiOiIuL2FjdGlvbnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY3JlYXRlQXN5bmNUaHVuayB9ID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7XG5cbmV4cG9ydHMubG9nSW4gPSBjcmVhdGVBc3luY1RodW5rKFwidXNlci9sb2dJblwiLCBhc3luYyAoZGF0YSwgdGh1bmtBUEkpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGRlbGF5KDUwMCwge1xuICAgIHVzZXJJZDogMSxcbiAgICBuaWNrbmFtZTogXCJ6ZXJvY2hvXCIsXG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./actions/user.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n\n\nvar _jsxFileName = \"/Users/lee/Desktop/instaClone/front/pages/_app.js\";\n\n\n // _app.js는 pages들의 공통 부분이다.\n// Component는 index.js등의 공통부분을 담당한다. index.js의 리턴부분이 Component로 들어가서 <Component />이 된다.\n\nconst InstaClone = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"InstaClone\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"].withRedux(InstaClone));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiSW5zdGFDbG9uZSIsIkNvbXBvbmVudCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBO0FBQ0E7O0FBQ0EsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQ3BDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQSxrQkFERjtBQVNELENBVkQ7O0FBWWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JILFVBQWxCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuXG4vLyBfYXBwLmpz64qUIHBhZ2Vz65Ok7J2YIOqzte2GtSDrtoDrtoTsnbTri6QuXG4vLyBDb21wb25lbnTripQgaW5kZXguanPrk7HsnZgg6rO17Ya167aA67aE7J2EIOuLtOuLue2VnOuLpC4gaW5kZXguanPsnZgg66as7YS067aA67aE7J20IENvbXBvbmVudOuhnCDrk6TslrTqsIDshJwgPENvbXBvbmVudCAvPuydtCDrkJzri6QuXG5jb25zdCBJbnN0YUNsb25lID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5JbnN0YUNsb25lPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEluc3RhQ2xvbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n\nconst userSlice = __webpack_require__(/*! ./userSlice */ \"./reducers/userSlice.js\");\n\nmodule.exports = (0, _toolkit.combineReducers)({\n  user: userSlice.reducer\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInVzZXJTbGljZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwidXNlciIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsTUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXpCOztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsOEJBQWdCO0FBQy9CQyxNQUFJLEVBQUVKLFNBQVMsQ0FBQ0s7QUFEZSxDQUFoQixDQUFqQiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmNvbnN0IHVzZXJTbGljZSA9IHJlcXVpcmUoXCIuL3VzZXJTbGljZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2VyOiB1c2VyU2xpY2UucmVkdWNlcixcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  createSlice\n} = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n\nconst {\n  logIn\n} = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\");\n\nconst initialState = {};\nconst userSlice = createSlice({\n  name: \"user\",\n  initialState,\n  reducers: {\n    logOut(state, action) {\n      state.data = null;\n    }\n\n  },\n  extraReducers: builder => builder.addCase(logIn.pending, (state, action) => {// state.data = null;\n    // state.isLoggingIn = true;\n  }).addCase(logIn.fulfilled, (state, action) => {// state.data = action.payload;\n    // state.isLoggingIn = false;\n  }).addCase(logIn.rejected, (state, action) => {// state.error = action.payload;\n  })\n});\nmodule.exports = userSlice;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyU2xpY2UuanM/YjkzNyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInJlcXVpcmUiLCJsb2dJbiIsImluaXRpYWxTdGF0ZSIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ091dCIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFBRUE7QUFBRixJQUFrQkMsbUJBQU8sQ0FBQywwQ0FBRCxDQUEvQjs7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBWUQsbUJBQU8sQ0FBQywwQ0FBRCxDQUF6Qjs7QUFFQSxNQUFNRSxZQUFZLEdBQUcsRUFBckI7QUFFQSxNQUFNQyxTQUFTLEdBQUdKLFdBQVcsQ0FBQztBQUM1QkssTUFBSSxFQUFFLE1BRHNCO0FBRTVCRixjQUY0QjtBQUc1QkcsVUFBUSxFQUFFO0FBQ1JDLFVBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCO0FBQ3BCRCxXQUFLLENBQUNFLElBQU4sR0FBYSxJQUFiO0FBQ0Q7O0FBSE8sR0FIa0I7QUFRNUJDLGVBQWEsRUFBR0MsT0FBRCxJQUNiQSxPQUFPLENBQ0pDLE9BREgsQ0FDV1gsS0FBSyxDQUFDWSxPQURqQixFQUMwQixDQUFDTixLQUFELEVBQVFDLE1BQVIsS0FBbUIsQ0FDekM7QUFDQTtBQUNELEdBSkgsRUFLR0ksT0FMSCxDQUtXWCxLQUFLLENBQUNhLFNBTGpCLEVBSzRCLENBQUNQLEtBQUQsRUFBUUMsTUFBUixLQUFtQixDQUMzQztBQUNBO0FBQ0QsR0FSSCxFQVNHSSxPQVRILENBU1dYLEtBQUssQ0FBQ2MsUUFUakIsRUFTMkIsQ0FBQ1IsS0FBRCxFQUFRQyxNQUFSLEtBQW1CLENBQzFDO0FBQ0QsR0FYSDtBQVQwQixDQUFELENBQTdCO0FBdUJBUSxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLFNBQWpCIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlclNsaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjcmVhdGVTbGljZSB9ID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7XG5jb25zdCB7IGxvZ0luIH0gPSByZXF1aXJlKFwiLi4vYWN0aW9ucy91c2VyXCIpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGxvZ091dChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5kYXRhID0gbnVsbDtcbiAgICB9LFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT5cbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShsb2dJbi5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAvLyBzdGF0ZS5kYXRhID0gbnVsbDtcbiAgICAgICAgLy8gc3RhdGUuaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvZ0luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgLy8gc3RhdGUuZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAvLyBzdGF0ZS5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvZ0luLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAvLyBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSksXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyU2xpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reducers__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst createStore = () => {\n  const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"configureStore\"])({\n    reducer: _reducers__WEBPACK_IMPORTED_MODULE_2___default.a,\n    // preloadedState, // 나중에 서버사이드 랜더링 할때 주석 풀 것.\n    middleware: [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"getDefaultMiddleware\"])()]\n  });\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(createStore, {\n  debug: false\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJyb290UmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxNQUFNO0FBQ3hCLFFBQU1DLEtBQUssR0FBR0MsdUVBQWMsQ0FBQztBQUMzQkMsV0FBTyxFQUFFQyxnREFEa0I7QUFFM0I7QUFDQUMsY0FBVSxFQUFFLENBQUMsR0FBR0MsNkVBQW9CLEVBQXhCO0FBSGUsR0FBRCxDQUE1QjtBQUtBLFNBQU9MLEtBQVA7QUFDRCxDQVBEOztBQVNBLE1BQU1NLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ1IsV0FBRCxFQUFjO0FBQ3pDUyxPQUFLO0FBRG9DLENBQWQsQ0FBN0I7QUFJZUYsc0VBQWYiLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG4gICAgLy8gcHJlbG9hZGVkU3RhdGUsIC8vIOuCmOykkeyXkCDshJzrsoTsgqzsnbTrk5wg656c642U66eBIO2VoOuVjCDso7zshJ0g7ZKAIOqygy5cbiAgICBtaWRkbGV3YXJlOiBbLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKV0sXG4gIH0pO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjcmVhdGVTdG9yZSwge1xuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxwbWVudFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });