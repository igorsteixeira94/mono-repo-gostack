import 'dotenv/config';
import Youch from 'youch';
import 'express-async-errors';
import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.handleMiddlewareError();
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

  handleMiddlewareError() {
    this.express.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const erros = await new Youch(err, req).toJSON();

        return res.status(500).json(erros);
      }

      return res.status(500).json({ error: 'Internal Server Error' });
    });
  }
}

export default new App().express;
