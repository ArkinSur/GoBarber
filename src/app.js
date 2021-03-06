import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewwares();
    this.routes();
  }

  middlewwares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
