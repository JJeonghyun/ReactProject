// const Sequelize = require("sequelize");
import Sequelize from "sequelize";

export default class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        account: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        // 테이블에 대한 기본 설정
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Cart",
        tableName: "cart",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Cart.belongsTo(db.User, {
      foreignKey: "userEmail",
      targetKey: "userEmail",
    });

    db.Cart.belongsTo(db.Product, {
      foreignKey: "productId",
      targetKey: "id",
    });
  }
}
