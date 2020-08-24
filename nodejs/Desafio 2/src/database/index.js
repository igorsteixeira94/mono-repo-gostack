import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Project from '../app/models/Project';

const models = [Project];
// Classe para instanciar o banco de dados
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connections = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connections));
  }
}

export default new Database();
