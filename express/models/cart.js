// const Sequelize = require("sequelize");
import Sequelize from "sequelize";

export default class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // name: {
        //   type: Sequelize.STRING(255),
        //   allowNull: false,
        // },
        // price: {
        //   type: Sequelize.STRING(20),
        //   allowNull: false,
        // },
        account: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        // img: {
        //   type: Sequelize.STRING(255),
        //   allowNull: false,
        // },
        // hoverImg: {
        //   type: Sequelize.STRING(255),
        //   allowNull: false,
        // },
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
    // db.Cart.belongsTo(db.User, {
    //   foreignKey: "userEmail",
    //   targetKey: "userEmail",
    // });
    db.Cart.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });
    db.Cart.belongsTo(db.Product, { foreignKey: "productId", targetKey: "id" });
  }
}
