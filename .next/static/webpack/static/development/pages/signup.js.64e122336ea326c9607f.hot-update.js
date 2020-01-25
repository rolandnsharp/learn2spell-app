webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: isValidUsername, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidUsername", function() { return isValidUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Link */ "./components/Link/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Input */ "./components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Text */ "./components/Text/index.js");










var _jsxFileName = "/home/roland/repos/learn2spell-app/pages/signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  margin: auto;\n  width: ", ";\n  padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isValidUsername(str) {
  var code = null;

  for (var i = 0, length = str.length; i < length; i++) {
    code = str.charCodeAt(i);

    if (!(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // upper alpha A-Z
    !(code > 96 && code < 123) && // lower alpha a-z
    !(code === 95)) {
      // underscore _
      return false;
    }
  }

  return true;
}
var SignupContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject(), function (_ref) {
  var isTouch = _ref.isTouch;
  return isTouch ? "100%" : "500px";
}, function (_ref2) {
  var isTouch = _ref2.isTouch;
  return isTouch ? "20px 20px 80px 20px" : "80px 0";
});

var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      email: "",
      password: "",
      passwordVerification: "",
      username: "",
      submitted: false,
      submitting: false,
      valid: false,
      tips: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "signup", function _callee() {
      var _this$state, valid, email, password, username, response;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("try submit");
              _this$state = _this.state, valid = _this$state.valid, email = _this$state.email, password = _this$state.password, username = _this$state.username;

              if (valid) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", false);

            case 4:
              _this.setState({
                submitting: true
              });

              _context.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_12___default()({
                url: _config__WEBPACK_IMPORTED_MODULE_15__["default"].api.host + "/user",
                method: "POST",
                data: {
                  email: email,
                  password: password,
                  username: username.toLowerCase()
                }
              }));

            case 7:
              response = _context.sent;
              console.log(response.data);

              if (response.data.error) {
                if (response.data.error === "email_exists") {
                  _this.setState({
                    submitting: false,
                    valid: false,
                    tips: {
                      email: "This email is already taken =("
                    }
                  });
                }

                if (response.data.error === "username_exists") {
                  _this.setState({
                    submitting: false,
                    valid: false,
                    tips: {
                      username: "This username is already taken =("
                    }
                  });
                }
              } else {
                _this.setState({
                  submitted: true
                });
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "checkValidity", function () {
      var _this$state2 = _this.state,
          email = _this$state2.email,
          username = _this$state2.username,
          password = _this$state2.password;
      console.log(Math.random());
      console.log(validateEmail(email));
      var tips = {};

      if (email.length > 0 && !validateEmail(email)) {
        tips.email = "Not quite an email";
      }

      if (username.length > 0 && !isValidUsername(username)) {
        tips.username = "We only support letters, numbers and _";
      }

      if (password.length > 0 && password.length < 8) {
        tips.password = "Use 8 characters at least";
      }

      var valid = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(tips).length === 0 && email.length > 0 && password.length > 0 && username.length > 0;
      console.log(tips, valid);

      _this.setState({
        tips: tips,
        valid: valid
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeEmail", function (ev) {
      _this.setState({
        email: ev.target.value
      });

      _this.validChecker();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeUsername", function (ev) {
      _this.setState({
        username: ev.target.value
      });

      _this.validChecker();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangePassword", function (ev) {
      _this.setState({
        password: ev.target.value
      });

      _this.validChecker();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onKeyDown", function (event) {
      if (event && event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();

        _this.checkValidity();

        setTimeout(_this.signup, 100);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.validChecker = lodash_debounce__WEBPACK_IMPORTED_MODULE_13___default()(this.checkValidity, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          auth = _this$props.auth,
          user = _this$props.user,
          isTouch = _this$props.isTouch;
      var _this$state3 = this.state,
          email = _this$state3.email,
          username = _this$state3.username,
          password = _this$state3.password,
          submitted = _this$state3.submitted,
          tips = _this$state3.tips,
          valid = _this$state3.valid,
          submitting = _this$state3.submitting;

      if (auth) {
        _routes__WEBPACK_IMPORTED_MODULE_16__["Router"].pushRoute("dashboard");
      }

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_18__["default"], {
        auth: auth,
        user: user,
        isTouch: isTouch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Signup - Jaresume")), __jsx(SignupContainer, {
        isTouch: isTouch,
        onKeyDown: this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, submitted && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Great work! Check your inbox to confirm your account."), !submitted && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_21__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Signup"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Email",
        subLabel: tips.email,
        type: "text",
        onChange: this.onChangeEmail,
        value: email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Username",
        subLabel: tips.username,
        onChange: this.onChangeUsername,
        value: username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Password",
        type: "password",
        subLabel: tips.password,
        onChange: this.onChangePassword,
        value: password,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_20__["default"], {
        disabled: submitting,
        onClick: this.signup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Signup"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_21__["Body"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=signup.js.64e122336ea326c9607f.hot-update.js.map