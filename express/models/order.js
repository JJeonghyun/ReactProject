import Sequelize from "sequelize";

export default class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        productName: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        productPrice: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        productImg: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        productAccount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        productHoverImg: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        userEmail: {
          type: Sequelize.STRING(255),
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

  static associate(db) {}
}
