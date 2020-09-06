import Sequelize, { Model } from 'sequelize';

class DeliveryProblems extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      { sequelize, tableName: 'delivery_problems' }
    );
  }

  static associate(models) {
    this.belongsTo(models.Parcel, { foreignKey: 'delivery_id', as: 'parcel' });
  }
}

export default DeliveryProblems;
