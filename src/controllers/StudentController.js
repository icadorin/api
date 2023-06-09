import Student from '../models/Student';
import ProfilePicture from '../models/ProfilePicture';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [ProfilePicture, 'id', 'DESC']],
      include: {
        model: ProfilePicture,
        attributes: ['url', 'filename'],
      },
    });

    res.json(students);
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);
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

      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [ProfilePicture, 'id', 'DESC']],
        include: {
          model: ProfilePicture,
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

      const student = await Student.findByPk(id);

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

      const student = await Student.findByPk(id);

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

export default new StudentController();
