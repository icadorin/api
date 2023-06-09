"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

class HomeController {
  async index(req, res) {
    res.json(
      {
        rotasPublicas: {
          alunos: `${_appConfig2.default.url}/api/students`,
          usuarios: `${_appConfig2.default.url}/api/users`,
        },
      },
    );
  }
}

exports. default = new HomeController();
