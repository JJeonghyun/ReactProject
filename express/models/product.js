// const Sequelize = require("sequelize");
import Sequelize from "sequelize";

export default class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        productModel: {
          type: Sequelize.STRING(100),
          unique: true,
          allowNull: true,
        },
        productName: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        productPrice: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        productNum: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        productInfo: {
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
        modelName: "Product",
        tableName: "product",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
}
