import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
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
  }
}

export default new App().app;
