import Sequelize from "sequelize";

export default class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        account: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Order",
        tableName: "order",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Order.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });
    db.Order.belongsTo(db.Product, {
      foreignKey: "productId",
      targetKey: "id",
    });
  }
}
