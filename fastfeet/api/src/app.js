import 'dotenv/config';
import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.express = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(express.json());
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
