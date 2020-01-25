webpackHotUpdate("static/development/pages/login.js",{

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
      route: "settings",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Settings")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "logout",
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
    }, "Logout")));
  } else {
    return __jsx(Menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "login",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Login")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      prefetch: true,
      route: "signup",
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(MenuItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Signup")));
  }
});

/***/ })

})
//# sourceMappingURL=login.js.34e1cbf848e227bf164f.hot-update.js.map