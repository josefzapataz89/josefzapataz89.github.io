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
  var lista_eventos = props.eventos;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, lista_eventos.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Evento__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      evento: lista_eventos[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.5bd058b587d65cad130e.hot-update.js.map