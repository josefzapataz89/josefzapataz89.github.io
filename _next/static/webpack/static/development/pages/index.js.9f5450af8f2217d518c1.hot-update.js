webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Eventos.js":
/*!********************************!*\
  !*** ./componentes/Eventos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Evento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Evento */ "./componentes/Evento.js");
var _jsxFileName = "D:\\react_codes\\udemy\\bitcoinapp\\componentes\\Eventos.js";



var Eventos = function Eventos(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, console.log(props.eventos), props.eventos.map(function (evento) {
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Evento__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: evento.id,
      evento: evento,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.9f5450af8f2217d518c1.hot-update.js.map