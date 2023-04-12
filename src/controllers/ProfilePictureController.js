import multer from 'multer';
import multerConfig from '../config/multerConfig';

import ProfilePicture from '../models/ProfilePicture';

const upload = multer(multerConfig).single('profile_picture');

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
        const profilePicture = await ProfilePicture.create({ originalname, filename, student_id });

        return res.json(profilePicture);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
    });
  }
}

export default new ProfilePictureController();
