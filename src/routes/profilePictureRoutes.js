import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import profilePictureController from '../controllers/ProfilePictureController';

const router = new Router();

router.post('/', loginRequired, profilePictureController.store);

export default router;
