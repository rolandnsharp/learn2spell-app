webpackHotUpdate("static/development/pages/login.js",{

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
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu/index.js");
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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: black;\n  flex: 0 0 auto;\n  line-height: 50px;\n  display: block;\n  font-weight: bold;\n  padding: 0 20px;\n  text-decoration: none;\n  border-right: 10px solid yellow;\n  color: white;\n  font-family: Times New Roman;\n  letter-spacing: 1px;\n  font-weight: 600;\n  :visited {\n    color: white;\n  }\n  :active {\n    color: white;\n  }\n  :hover {\n    color: yellow;\n  }\n"]);

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
      lineNumber: 69
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "learn2spell "), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    auth: auth,
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx(ContentContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/roland/repos/learn2spell-app/components/Menu/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: blue;\n  font-size: 18px;\n  flex: 0 0 auto;\n  text-decoration: none;\n  justify-content: space-around;\n  margin: 0 10px;\n  color: black;\n  :hover {\n    color: black;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  line-height: 50px;\n  width: 600px;\n  align-content: flex-start;\n  margin-right: 20px;\n  justify-content: flex-end;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Menu = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var auth = props.auth,
      user = props.user;

  if (auth) {
    return __jsx(Menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "dashboard",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Dashboard")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "chat",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Chat")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "browse",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Browse")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "profile",
      params: {
        username: user.username || "na"
      },
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Profile")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "connections",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Connections")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "settings",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Settings")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "logout",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Logout")));
  } else {
    return __jsx(Menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "browse",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Browse")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "chat",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Chat")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "login",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Login")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "signup",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Signup")));
  }
});

/***/ })

})
//# sourceMappingURL=login.js.ce5459283385317f30bd.hot-update.js.map