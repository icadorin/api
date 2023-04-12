import dotenv from 'dotenv';
import express from 'express';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import studentRoutes from './src/routes/studentRoutes';
import profilePictureRoutes from './src/routes/profilePictureRoutes';

import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.midddlewares();
    this.routes();
  }

  midddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/profile_picture/', profilePictureRoutes);
  }
}

export default new App().app;
