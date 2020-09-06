import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import File from '../app/models/File';
import Deliveryman from '../app/models/Deliveryman';
import Parcel from '../app/models/Parcel';
import DeliveryProblems from '../app/models/DeliveryProblems';

const models = [User, Recipient, File, Deliveryman, Parcel, DeliveryProblems];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map((m) => m.associate && m.associate(this.connection.models));
  }
}

export default new Database();
