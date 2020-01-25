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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);

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

 // import Menu from "../../components/Menu";
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
  }, "learn2spell ")), __jsx(ContentContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Link */ "./components/Link/index.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_Link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Input */ "./components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config */ "./config/index.js");









var _jsxFileName = "/home/roland/repos/learn2spell-app/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  margin: auto;\n  width: 500px;\n  padding-top: 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









 // import { Title, Body } from "../components/Text";

 // import { TouchLogin } from "../components/Login";

var LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());

var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      email: "",
      password: "",
      passwordVerification: "",
      submitting: false,
      tips: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "login", function _callee() {
      var _this$props, checkAuth, submitting, _this$state, email, password, tips, response;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, checkAuth = _this$props.checkAuth, submitting = _this$props.submitting;
              _this$state = _this.state, email = _this$state.email, password = _this$state.password;

              if (!submitting) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", false);

            case 4:
              if (!(email.length === 0 && password.length === 0)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", false);

            case 6:
              _this.setState({
                submitting: true
              });

              tips = {};
              _context.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_11___default()({
                url: _config__WEBPACK_IMPORTED_MODULE_18__["default"].api.host + "/auth",
                method: "POST",
                data: {
                  email: email,
                  password: password
                },
                withCredentials: true
              }));

            case 10:
              response = _context.sent;

              _this.setState({
                submitting: false
              });

              if (response.data.error) {
                _context.next = 18;
                break;
              }

              _context.next = 15;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(checkAuth());

            case 15:
              _routes__WEBPACK_IMPORTED_MODULE_13__["Router"].pushRoute("dashboard");
              _context.next = 21;
              break;

            case 18:
              if (response.data.error === "not_registered") {
                tips.email = "Seems like you have the wrong email?";
              }

              if (response.data.error === "incorrect_password") {
                tips.password = "You've got the password wrong";
              }

              if (response.data.error === "not_verified") {
                tips.email = "Looks like you haven't confirmed your email...";
              }

            case 21:
              _this.setState({
                tips: tips
              });

              console.log(response);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChangeEmail", function (ev) {
      _this.setState({
        email: ev.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChangePassword", function (ev) {
      _this.setState({
        password: ev.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onKeyDown", function (event) {
      if (event && event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();

        _this.login();
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signup, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          auth = _this$props2.auth,
          user = _this$props2.user,
          isTouch = _this$props2.isTouch;

      if (auth) {
        _routes__WEBPACK_IMPORTED_MODULE_13__["Router"].pushRoute("dashboard");
      }

      var _this$state2 = this.state,
          email = _this$state2.email,
          password = _this$state2.password,
          submitting = _this$state2.submitting,
          tips = _this$state2.tips;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_15__["default"], {
        auth: auth,
        user: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Login - Jaresume"), __jsx(LoginContainer, {
        onKeyDown: this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Login"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: "Email",
        subLabel: tips.email,
        type: "email",
        onChange: this.onChangeEmail,
        value: email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
        type: "password",
        label: "Password",
        subLabel: tips.password,
        onChange: this.onChangePassword,
        value: password,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
        disabled: submitting,
        onClick: this.login,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Login")), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=login.js.c98fa1c369ed705e2724.hot-update.js.map