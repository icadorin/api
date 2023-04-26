"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _studentRoutes = require('./routes/studentRoutes'); var _studentRoutes2 = _interopRequireDefault(_studentRoutes);
var _profilePictureRoutes = require('./routes/profilePictureRoutes'); var _profilePictureRoutes2 = _interopRequireDefault(_profilePictureRoutes);

require('./database');

_dotenv2.default.config();

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.midddlewares();
    this.routes();
  }

  midddlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/api', _homeRoutes2.default);
    this.app.use('/api/users/', _userRoutes2.default);
    this.app.use('/api/tokens/', _tokenRoutes2.default);
    this.app.use('/api/students/', _studentRoutes2.default);
    this.app.use('/api/profile_picture/', _profilePictureRoutes2.default);
  }
}

exports. default = new App().app;
