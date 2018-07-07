webpackHotUpdate(4,{

/***/ "./utils/withRematch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/liubin/Desktop/github/next-ssr/utils/withRematch.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (Component) {
    var initStore = args[0],
        connectArgs = args.slice(1);
    var CountContainer = __WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */].apply(null, connectArgs)(Component);
    debugger;
    var ProviderComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */], {
      store: initStore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CountContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }));
    return ProviderComponent;
  };
});

/***/ })

})
//# sourceMappingURL=4.cd339664a92821bb1204.hot-update.js.map