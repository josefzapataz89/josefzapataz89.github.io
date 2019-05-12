webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentes_Master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/Master */ "./componentes/Master.js");
/* harmony import */ var _componentes_Precio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/Precio */ "./componentes/Precio.js");
/* harmony import */ var _componentes_Noticias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/Noticias */ "./componentes/Noticias.js");
/* harmony import */ var _componentes_Eventos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/Eventos */ "./componentes/Eventos.js");


var _jsxFileName = "D:\\react_codes\\udemy\\bitcoinapp\\pages\\index.js";







var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Master__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Precio del BitCoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Precio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Noticias sobre BitCoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Noticias__WEBPACK_IMPORTED_MODULE_6__["default"], {
    noticias: props.noticiasBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Pr\xF3ximos Eventos BitCoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Eventos__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventos: props.eventosBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var precio, jsonPrecio, resPrecio, noticias, jsonNoticias, resNoticias, eventos, jsonEventos, resEventos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD');

        case 2:
          precio = _context.sent;
          _context.next = 5;
          return precio.json();

        case 5:
          jsonPrecio = _context.sent;
          _context.next = 8;
          return jsonPrecio.DISPLAY['BTC']['USD'];

        case 8:
          resPrecio = _context.sent;
          _context.next = 11;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://newsapi.org/v2/everything?q=bitcoin&language=es&apiKey=1926f2bb78fb439896e11f22e100cd7c');

        case 11:
          noticias = _context.sent;
          _context.next = 14;
          return noticias.json();

        case 14:
          jsonNoticias = _context.sent;
          _context.next = 17;
          return jsonNoticias.articles;

        case 17:
          resNoticias = _context.sent;
          _context.next = 20;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=RHG53OLQY3DSVNYHIPMZ&locale=es_ES');

        case 20:
          eventos = _context.sent;
          _context.next = 23;
          return eventos.json();

        case 23:
          jsonEventos = _context.sent;
          _context.next = 26;
          return jsonEventos.events;

        case 26:
          resEventos = _context.sent;
          return _context.abrupt("return", {
            precioBitcoin: resPrecio,
            noticiasBitcoin: resNoticias,
            eventosBitcoin: resEventos
          });

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.69349e254dea73408b7a.hot-update.js.map