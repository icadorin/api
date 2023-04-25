import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import studentRoutes from './routes/studentRoutes';
import profilePictureRoutes from './routes/profilePictureRoutes';

import './database';

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
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/api', homeRoutes);
    this.app.use('/api/users/', userRoutes);
    this.app.use('/api/tokens/', tokenRoutes);
    this.app.use('/api/students/', studentRoutes);
    this.app.use('/api/profile_picture/', profilePictureRoutes);
  }
}

export default new App().app;
