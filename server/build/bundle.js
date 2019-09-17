/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(13);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _renderer = __webpack_require__(14);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(17);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
	proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
		opts.headers['x-forwarded-host'] = 'localhost:3000';

		return opts;
	}
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {

	var store = (0, _createStore2.default)(req);

	var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
		var route = _ref.route;

		return route.loadData ? route.loadData(store) : null;
	});

	Promise.all(promises).then(function () {
		res.send((0, _renderer2.default)(req, store));
	});
});

app.listen(3000, function () {
	return console.log('Listening on port 3000');
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(9);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(10);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
	routes: [_extends({}, _HomePage2.default, {
		path: '/',
		exact: true
	}), _extends({}, _UsersListPage2.default, {
		path: '/users'
	})]
})];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(6);

var _Header = __webpack_require__(7);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
	var route = _ref.route;

	return _react2.default.createElement(
		_react2.default.Fragment,
		null,
		_react2.default.createElement(_Header2.default, null),
		(0, _reactRouterConfig.renderRoutes)(route.routes)
	);
};

exports.default = {
	component: App,
	loadData: function loadData(_ref2) {
		var dispatch = _ref2.dispatch;
		return dispatch((0, _actions.fetchCurrentUser)());
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _reactRedux = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
	var auth = _ref.auth;


	var authButton = auth ? _react2.default.createElement(
		"a",
		{ href: "/api/logout" },
		"Logout"
	) : _react2.default.createElement(
		"a",
		{ href: "/api/auth/google" },
		"Login"
	);

	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: "/" },
			"React SSR"
		),
		_react2.default.createElement(
			"div",
			null,
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: "/users" },
				"Users"
			),
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: "/admins" },
				"Admins"
			),
			authButton
		)
	);
};

function mapStateToProps(_ref2) {
	var auth = _ref2.auth;

	return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Home"
        ),
        _react2.default.createElement(
            "button",
            { onClick: function onClick() {
                    return console.log('Hello World');
                } },
            "Click Me"
        )
    );
};

exports.default = {
    component: HomePage
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserListPage = function (_React$Component) {
	_inherits(UserListPage, _React$Component);

	function UserListPage() {
		_classCallCheck(this, UserListPage);

		return _possibleConstructorReturn(this, (UserListPage.__proto__ || Object.getPrototypeOf(UserListPage)).apply(this, arguments));
	}

	_createClass(UserListPage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchUsers();
		}
	}, {
		key: 'renderUsers',
		value: function renderUsers() {
			return this.props.users.map(function (user) {
				return _react2.default.createElement(
					'li',
					{ key: user.id },
					user.name
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h3',
					null,
					'Users List'
				),
				_react2.default.createElement(
					'ul',
					null,
					this.renderUsers()
				)
			);
		}
	}]);

	return UserListPage;
}(_react2.default.Component);

function mapStateToProps(state) {
	return { users: state.users };
}

function loadData(store) {
	return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
	loadData: loadData,
	component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UserListPage)
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
			var res;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return api.get('/users');

						case 2:
							res = _context.sent;


							dispatch({
								type: FETCH_USERS,
								payload: res
							});

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	}();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
			var res;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return api.get('/current_user');

						case 2:
							res = _context2.sent;


							dispatch({
								type: FETCH_CURRENT_USER,
								payload: res
							});

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x4, _x5, _x6) {
			return _ref2.apply(this, arguments);
		};
	}();
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(8);

var _reactRedux = __webpack_require__(11);

var _reactRouterConfig = __webpack_require__(6);

var _serializeJavascript = __webpack_require__(16);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: {} },
			_react2.default.createElement(
				"div",
				null,
				(0, _reactRouterConfig.renderRoutes)(_Routes2.default)
			)
		)
	));

	return "\n\t\t<html>\n\t\t\t<head></head>\n\t\t\t<body>\n\t\t\t\t<div id=\"root\">" + content + "</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n\t\t\t\t</script>\n\t\t\t\t<script src=\"bundle.js\"></script>\n\t\t\t</body>\n\t\t</html>\n\t";
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

var _reduxThunk = __webpack_require__(19);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(20);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
	var api = _axios2.default.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { cookie: req.get('cookie') || '' }
	});

	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(api)));

	return store;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(21);

var _usersReducers = __webpack_require__(22);

var _usersReducers2 = _interopRequireDefault(_usersReducers);

var _authReducer = __webpack_require__(23);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	users: _usersReducers2.default,
	auth: _authReducer2.default
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(12);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_USERS:
			return action.payload.data;
		default:
			return state;
	}
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(12);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_CURRENT_USER:
			return action.payload.data || false;
		default:
			return state;
	}
};

/***/ })
/******/ ]);