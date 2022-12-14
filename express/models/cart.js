// const Sequelize = require("sequelize");
import Sequelize from "sequelize";

export default class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cartModel: {
          type: Sequelize.STRING(100),
          unique: true,
          allowNull: true,
        },
        cartName: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        cartPrice: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        cartNum: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        cartInfo: {
          type: Sequelize.STRING(100),
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

  static associate(db) {}
}
