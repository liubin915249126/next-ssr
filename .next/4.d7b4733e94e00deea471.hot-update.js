webpackHotUpdate(4,{

/***/ "./utils/withRematch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return function (Component) {
    var ComponentWithRematch = function ComponentWithRematch() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState; // Connect page to redux with connect arguments

      var ConnectedComponent = __WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */].apply(null, connectArgs)(Component); // Wrap with redux Provider with store
      // Create connected page with initialProps

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */], {
        store: store && store.dispatch ? store : getOrCreateStore(initStore, initialState)
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ConnectedComponent, initialProps));
    };

    return ComponentWithRematch;
  };
});

/***/ })

})
//# sourceMappingURL=4.d7b4733e94e00deea471.hot-update.js.map