"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _ProfilePicture = require('../models/ProfilePicture'); var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);

class StudentController {
  async index(req, res) {
    const students = await _Student2.default.findAll({
      attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [_ProfilePicture2.default, 'id', 'DESC']],
      include: {
        model: _ProfilePicture2.default,
        attributes: ['url', 'filename'],
      },
    });

    res.json(students);
  }

  async store(req, res) {
    try {
      const student = await _Student2.default.create(req.body);
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID.'],
        });
      }

      const student = await _Student2.default.findByPk(id, {
        attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [_ProfilePicture2.default, 'id', 'DESC']],
        include: {
          model: _ProfilePicture2.default,
          attributes: ['url', 'filename'],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID.'],
        });
      }

      const student = await _Student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      await student.destroy();

      return res.json({
        excluded: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID.'],
        });
      }

      const student = await _Student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      const updatedStudent = await student.update(req.body);

      return res.json(updatedStudent);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new StudentController();
