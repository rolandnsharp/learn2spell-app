module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/roland/repos/learn2spell-app/components/Button/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding: 20px;
  width: 100%;
  font-size: 18px;
  background: yellow;
  user-select: none;
  transition: 0.3s background;
  cursor: ${({
  disabled
}) => disabled ? "default" : "pointer"};
  text-align: center;
  font-weight: semi-bold;
  :hover {
    background: gray;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    children,
    disabled,
    onClick
  } = props;
  return __jsx(Button, _extends({
    onClick: disabled ? () => {} : onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), children);
});

/***/ }),

/***/ "./components/Input/index.js":
/*!***********************************!*\
  !*** ./components/Input/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/roland/repos/learn2spell-app/components/Input/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-bottom: 30px;
  height: 120px;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  padding: 20px;
  width: 100%;
  font-size: 16px;
  font-size: 20px;
  border-radius: 2px;
  border: 1px solid;
  outline: none;
`;
const InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  color: black;
  font-size: 22px;
  margin-bottom: 10px;
`;
const InputSubLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-top: 5px;
  color: red;
`;
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    label,
    subLabel
  } = props;
  return __jsx(InputContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, label && __jsx(InputLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, label), __jsx(Input, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), subLabel && __jsx(InputSubLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, subLabel));
});

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/roland/repos/learn2spell-app/components/Layout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Menu from "../../components/Menu";
// import { Body } from "../../components/Text";


const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background: grey;
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  background: black;
  flex: 0 0 auto;
  line-height: 50px;
  display: block;
  font-weight: bold;
  padding: 0 20px;
  text-decoration: none;
  border-right: 10px solid yellow;
  color: white;
  font-family: Times New Roman;
  letter-spacing: 1px;
  font-weight: 600;
  :visited {
    color: white;
  }
  :active {
    color: white;
  }
  :hover {
    color: yellow;
  }
`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  min-height: 100%;
  background: yellow;
`; // const Content = styled.div`
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

/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  auth,
  user
}) => {
  if (auth === null) {}

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "learn2spell ")), __jsx(ContentContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, children));
});

/***/ }),

/***/ "./components/Link/index.js":
/*!**********************************!*\
  !*** ./components/Link/index.js ***!
  \**********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/roland/repos/learn2spell-app/components/Link/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const AppLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  color: black;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  z-index: 1;
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    border-bottom: 5px solid yellow;
    z-index: -1;
    transition: border-width 0.15s;
  }
  :hover {
    :after {
      border-bottom: 16px solid yellow;
    }
  }
  :visited {
    color: black;
  }
`;
const LinkSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  position: absolute;
  z-index: 10;
`;
const Link = props => {
  return __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    passHref: true
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx(AppLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, props.children));
};

/***/ }),

/***/ "./components/Text/index.js":
/*!**********************************!*\
  !*** ./components/Text/index.js ***!
  \**********************************/
/*! exports provided: Title, SubTitle, Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTitle", function() { return SubTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/roland/repos/learn2spell-app/components/Text/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const TitleText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  letter-spacing: -0.01em;
`;
const Title = props => {
  const {
    children
  } = props;
  return __jsx(TitleText, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), children);
};
const SubTitleText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-weight: 600;
`;
const SubTitle = props => {
  const {
    children
  } = props;
  return __jsx(SubTitleText, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), children);
};
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  letter-spacing: -0.009em;
`;
const Body = props => {
  const {
    children
  } = props;
  return __jsx(BodyText, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), children);
};

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  api: {
    host: 'http://localhost:3000/' //   host: "https://api.jaresume.com"

  }
});

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Link */ "./components/Link/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Input */ "./components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Text */ "./components/Text/index.js");
var _jsxFileName = "/home/roland/repos/learn2spell-app/pages/signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isValidUsername(str) {
  let code = null;

  for (let i = 0, length = str.length; i < length; i++) {
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
const SignupContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin: auto;
  width: ${({
  isTouch
}) => isTouch ? "100%" : "500px"};
  padding: ${({
  isTouch
}) => isTouch ? "20px 20px 80px 20px" : "80px 0"};
`;
class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: "",
      password: "",
      passwordVerification: "",
      username: "",
      submitted: false,
      submitting: false,
      valid: false,
      tips: {}
    });

    _defineProperty(this, "signup", async () => {
      console.log("try submit");
      const {
        valid,
        email,
        password,
        username
      } = this.state;

      if (!valid) {
        return false;
      }

      this.setState({
        submitting: true
      });
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
        url: _config__WEBPACK_IMPORTED_MODULE_5__["default"].api.host + "/user",
        method: "POST",
        data: {
          email,
          password,
          username: username.toLowerCase()
        }
      });
      console.log(response.data);

      if (response.data.error) {
        if (response.data.error === "email_exists") {
          this.setState({
            submitting: false,
            valid: false,
            tips: {
              email: "This email is already taken =("
            }
          });
        }

        if (response.data.error === "username_exists") {
          this.setState({
            submitting: false,
            valid: false,
            tips: {
              username: "This username is already taken =("
            }
          });
        }
      } else {
        this.setState({
          submitted: true
        });
      }
    });

    _defineProperty(this, "checkValidity", () => {
      const {
        email,
        username,
        password
      } = this.state;
      console.log(Math.random());
      console.log(validateEmail(email));
      const tips = {};

      if (email.length > 0 && !validateEmail(email)) {
        tips.email = "Not quite an email";
      }

      if (username.length > 0 && !isValidUsername(username)) {
        tips.username = "We only support letters, numbers and _";
      }

      if (password.length > 0 && password.length < 8) {
        tips.password = "Use 8 characters at least";
      }

      const valid = Object.keys(tips).length === 0 && email.length > 0 && password.length > 0 && username.length > 0;
      console.log(tips, valid);
      this.setState({
        tips,
        valid
      });
    });

    _defineProperty(this, "onChangeEmail", ev => {
      this.setState({
        email: ev.target.value
      });
      this.validChecker();
    });

    _defineProperty(this, "onChangeUsername", ev => {
      this.setState({
        username: ev.target.value
      });
      this.validChecker();
    });

    _defineProperty(this, "onChangePassword", ev => {
      this.setState({
        password: ev.target.value
      });
      this.validChecker();
    });

    _defineProperty(this, "onKeyDown", event => {
      if (event && event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        this.checkValidity();
        setTimeout(this.signup, 100);
      }
    });
  }

  componentDidMount() {
    this.validChecker = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.checkValidity, 1000);
  }

  render() {
    const {
      auth,
      user,
      isTouch
    } = this.props;
    const {
      email,
      username,
      password,
      submitted,
      tips,
      valid,
      submitting
    } = this.state;

    if (auth) {
      _routes__WEBPACK_IMPORTED_MODULE_6__["Router"].pushRoute("dashboard");
    }

    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      auth: auth,
      user: user,
      isTouch: isTouch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
    }), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_11__["Title"], {
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
    }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "Username",
      subLabel: tips.username,
      onChange: this.onChangeUsername,
      value: username,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_11__["Body"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "Already have an account? ", __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "login")))));
  }

}

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes() //   .add("signup")
.add("login"); //   .add("chat")
//   .add("forgot_password")
//   .add("reset_password")
//   .add("browse")
//   .add("all")
//   .add("new_contact")
//   .add("logout")
//   .add("dashboard")
//   .add("settings")
//   .add("connections")
//   .add("profile", "/:username", "profile")

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/roland/repos/learn2spell-app/pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map