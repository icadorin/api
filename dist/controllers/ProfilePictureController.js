"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _ProfilePicture = require('../models/ProfilePicture'); var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('profile_picture');

class ProfilePictureController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const profilePicture = await _ProfilePicture2.default.create({ originalname, filename, student_id });

        return res.json(profilePicture);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
    });
  }
}

exports. default = new ProfilePictureController();
