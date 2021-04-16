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
/*! exports provided: login, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return join; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n  headers: {\n    \"Content-Type\": \"application/json; charset=utf-8\"\n  }\n};\nconst login = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"createAsyncThunk\"])(\"user/login\", async (data, thunkAPI) => {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"/login\", JSON.stringify(data));\n  localStorage.setItem(\"Authorization\", response.headers.authorization);\n  return response.data;\n});\nconst join = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"createAsyncThunk\"])(\"user/join\", async (data, thunkAPI) => {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"/auth/join\", JSON.stringify(data), config);\n  return response.data;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3VzZXIuanM/ZDFjZSJdLCJuYW1lcyI6WyJjb25maWciLCJoZWFkZXJzIiwibG9naW4iLCJjcmVhdGVBc3luY1RodW5rIiwiZGF0YSIsInRodW5rQVBJIiwicmVzcG9uc2UiLCJheGlvcyIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImF1dGhvcml6YXRpb24iLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsU0FBTyxFQUFFO0FBQ1Asb0JBQWdCO0FBRFQ7QUFESSxDQUFmO0FBTU8sTUFBTUMsS0FBSyxHQUFHQyx5RUFBZ0IsQ0FBQyxZQUFELEVBQWUsT0FBT0MsSUFBUCxFQUFhQyxRQUFiLEtBQTBCO0FBQzVFLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsUUFBWCxFQUFxQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWYsQ0FBckIsQ0FBdkI7QUFDQU8sY0FBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCLEVBQXNDTixRQUFRLENBQUNMLE9BQVQsQ0FBaUJZLGFBQXZEO0FBQ0EsU0FBT1AsUUFBUSxDQUFDRixJQUFoQjtBQUNELENBSm9DLENBQTlCO0FBTUEsTUFBTVUsSUFBSSxHQUFHWCx5RUFBZ0IsQ0FBQyxXQUFELEVBQWMsT0FBT0MsSUFBUCxFQUFhQyxRQUFiLEtBQTBCO0FBQzFFLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWYsQ0FBekIsRUFBK0NKLE1BQS9DLENBQXZCO0FBQ0EsU0FBT00sUUFBUSxDQUFDRixJQUFoQjtBQUNELENBSG1DLENBQTdCIiwiZmlsZSI6Ii4vYWN0aW9ucy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gY3JlYXRlQXN5bmNUaHVuayhcInVzZXIvbG9naW5cIiwgYXN5bmMgKGRhdGEsIHRodW5rQVBJKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQXV0aG9yaXphdGlvblwiLCByZXNwb25zZS5oZWFkZXJzLmF1dGhvcml6YXRpb24pO1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgam9pbiA9IGNyZWF0ZUFzeW5jVGh1bmsoXCJ1c2VyL2pvaW5cIiwgYXN5bmMgKGRhdGEsIHRodW5rQVBJKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIi9hdXRoL2pvaW5cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./actions/user.js\n");

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
eval("\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst userSlice = __webpack_require__(/*! ./userSlice */ \"./reducers/userSlice.js\");\n\n_axios.default.defaults.baseURL = \"http://localhost:8080\";\n_axios.default.defaults.headers.post[\"Content-Type\"] = \"application/json; charset=utf-8\";\nmodule.exports = (0, _toolkit.combineReducers)({\n  user: userSlice.reducer\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInVzZXJTbGljZSIsInJlcXVpcmUiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJwb3N0IiwibW9kdWxlIiwiZXhwb3J0cyIsInVzZXIiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0EsTUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXpCOztBQUVBQyxlQUFNQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsdUJBQXpCO0FBQ0FGLGVBQU1DLFFBQU4sQ0FBZUUsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsY0FBNUIsSUFBOEMsaUNBQTlDO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQiw4QkFBZ0I7QUFDL0JDLE1BQUksRUFBRVQsU0FBUyxDQUFDVTtBQURlLENBQWhCLENBQWpCIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuY29uc3QgdXNlclNsaWNlID0gcmVxdWlyZShcIi4vdXNlclNsaWNlXCIpO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHVzZXI6IHVzZXJTbGljZS5yZWR1Y2VyLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n\nvar _user = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"next/router\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst initialState = {\n  isLoading: false,\n  loginError: null,\n  joinError: null,\n  principal: null\n};\nconst userSlice = (0, _toolkit.createSlice)({\n  name: \"user\",\n  initialState,\n  reducers: {\n    logOut(state, action) {\n      state.data = null;\n    }\n\n  },\n  extraReducers: builder => builder // login request\n  .addCase(_user.login.pending, state => {\n    state.isLoading = true;\n    state.loginError = null;\n  }) // login success\n  .addCase(_user.login.fulfilled, (state, action) => {\n    state.isLoading = false;\n    state.loginError = null;\n\n    _router.default.push(\"/\");\n  }) // login fail\n  .addCase(_user.login.rejected, (state, action) => {\n    state.isLoading = false;\n    state.loginError = \"로그인 실패\";\n  }) // join request\n  .addCase(_user.join.pending, state => {\n    state.isLoading = true;\n  }) // join success\n  .addCase(_user.join.fulfilled, (state, action) => {\n    state.isLoading = false;\n\n    _router.default.push(\"/login\");\n  }) // join fail\n  .addCase(_user.join.rejected, (state, action) => {\n    state.isLoading = false;\n    state.joinError = action.payload;\n  })\n});\nmodule.exports = userSlice;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyU2xpY2UuanM/YjkzNyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJsb2dpbkVycm9yIiwiam9pbkVycm9yIiwicHJpbmNpcGFsIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9nT3V0Iiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwibG9naW4iLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwiUm91dGVyIiwicHVzaCIsInJlamVjdGVkIiwiam9pbiIsInBheWxvYWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxXQUFTLEVBQUUsS0FEUTtBQUVuQkMsWUFBVSxFQUFFLElBRk87QUFHbkJDLFdBQVMsRUFBRSxJQUhRO0FBS25CQyxXQUFTLEVBQUU7QUFMUSxDQUFyQjtBQU9BLE1BQU1DLFNBQVMsR0FBRywwQkFBWTtBQUM1QkMsTUFBSSxFQUFFLE1BRHNCO0FBRTVCTixjQUY0QjtBQUc1Qk8sVUFBUSxFQUFFO0FBQ1JDLFVBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCO0FBQ3BCRCxXQUFLLENBQUNFLElBQU4sR0FBYSxJQUFiO0FBQ0Q7O0FBSE8sR0FIa0I7QUFRNUJDLGVBQWEsRUFBR0MsT0FBRCxJQUNiQSxPQUFPLENBQ0w7QUFESyxHQUVKQyxPQUZILENBRVdDLFlBQU1DLE9BRmpCLEVBRTJCUCxLQUFELElBQVc7QUFDakNBLFNBQUssQ0FBQ1IsU0FBTixHQUFrQixJQUFsQjtBQUNBUSxTQUFLLENBQUNQLFVBQU4sR0FBbUIsSUFBbkI7QUFDRCxHQUxILEVBTUU7QUFORixHQU9HWSxPQVBILENBT1dDLFlBQU1FLFNBUGpCLEVBTzRCLENBQUNSLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMzQ0QsU0FBSyxDQUFDUixTQUFOLEdBQWtCLEtBQWxCO0FBQ0FRLFNBQUssQ0FBQ1AsVUFBTixHQUFtQixJQUFuQjs7QUFDQWdCLG9CQUFPQyxJQUFQLENBQVksR0FBWjtBQUNELEdBWEgsRUFZRTtBQVpGLEdBYUdMLE9BYkgsQ0FhV0MsWUFBTUssUUFiakIsRUFhMkIsQ0FBQ1gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzFDRCxTQUFLLENBQUNSLFNBQU4sR0FBa0IsS0FBbEI7QUFDQVEsU0FBSyxDQUFDUCxVQUFOLEdBQW1CLFFBQW5CO0FBQ0QsR0FoQkgsRUFpQkU7QUFqQkYsR0FrQkdZLE9BbEJILENBa0JXTyxXQUFLTCxPQWxCaEIsRUFrQjBCUCxLQUFELElBQVc7QUFDaENBLFNBQUssQ0FBQ1IsU0FBTixHQUFrQixJQUFsQjtBQUNELEdBcEJILEVBcUJFO0FBckJGLEdBc0JHYSxPQXRCSCxDQXNCV08sV0FBS0osU0F0QmhCLEVBc0IyQixDQUFDUixLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDMUNELFNBQUssQ0FBQ1IsU0FBTixHQUFrQixLQUFsQjs7QUFDQWlCLG9CQUFPQyxJQUFQLENBQVksUUFBWjtBQUNELEdBekJILEVBMEJFO0FBMUJGLEdBMkJHTCxPQTNCSCxDQTJCV08sV0FBS0QsUUEzQmhCLEVBMkIwQixDQUFDWCxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDekNELFNBQUssQ0FBQ1IsU0FBTixHQUFrQixLQUFsQjtBQUNBUSxTQUFLLENBQUNOLFNBQU4sR0FBa0JPLE1BQU0sQ0FBQ1ksT0FBekI7QUFDRCxHQTlCSDtBQVQwQixDQUFaLENBQWxCO0FBMENBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixTQUFqQiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXJTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGpvaW4sIGxvZ2luIH0gZnJvbSBcIi4uL2FjdGlvbnMvdXNlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBsb2dpbkVycm9yOiBudWxsLFxuICBqb2luRXJyb3I6IG51bGwsXG5cbiAgcHJpbmNpcGFsOiBudWxsLFxufTtcbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ1c2VyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dPdXQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuZGF0YSA9IG51bGw7XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+XG4gICAgYnVpbGRlclxuICAgICAgLy8gbG9naW4gcmVxdWVzdFxuICAgICAgLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHN0YXRlLmxvZ2luRXJyb3IgPSBudWxsO1xuICAgICAgfSlcbiAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGxvZ2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxvZ2luRXJyb3IgPSBudWxsO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICB9KVxuICAgICAgLy8gbG9naW4gZmFpbFxuICAgICAgLmFkZENhc2UobG9naW4ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5sb2dpbkVycm9yID0gXCLroZzqt7jsnbgg7Iuk7YyoXCI7XG4gICAgICB9KVxuICAgICAgLy8gam9pbiByZXF1ZXN0XG4gICAgICAuYWRkQ2FzZShqb2luLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC8vIGpvaW4gc3VjY2Vzc1xuICAgICAgLmFkZENhc2Uoam9pbi5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH0pXG4gICAgICAvLyBqb2luIGZhaWxcbiAgICAgIC5hZGRDYXNlKGpvaW4ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5qb2luRXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH0pLFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlclNsaWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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