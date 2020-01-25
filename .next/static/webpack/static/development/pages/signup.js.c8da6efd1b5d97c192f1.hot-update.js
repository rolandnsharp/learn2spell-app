webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/roland/repos/learn2spell-app/components/Layout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 100%;\n  background: yellow;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: black;\n  flex: 0 0 auto;\n  line-height: 50px;\n  display: block;\n  font-weight: bold;\n  padding: 0 20px;\n  text-decoration: none;\n  color: white;\n  font-family: Times New Roman;\n  letter-spacing: 1px;\n  font-weight: 600;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: grey;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // import { Body } from "../../components/Text";


var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject2());
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3()); // const Content = styled.div`
//   height: 100%;
//   background: red;
// `;
// const Footer = styled.div`
//   flex-shrink: 0;
//   background: ${({ theme }) => theme.color.grey.toString()};
//   color: ${({ theme }) => theme.color.grey.darken(0.5).toString()};
//   height: 30px;
//   line-height: 30px;
//   display: flex;
//   justify-content: space-between;
// `;
// const FooterLinks = styled.div`
//   display: flex;
// `;

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      auth = _ref.auth,
      user = _ref.user;

  if (auth === null) {}

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "learn2spell ")), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    auth: auth,
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(ContentContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, children));
});

/***/ })

})
//# sourceMappingURL=signup.js.c8da6efd1b5d97c192f1.hot-update.js.map