import Sequelize from "sequelize";

export default class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        productName: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        productModel: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        productPrice: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        productAccount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        productInfo: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        productImg: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        productHoverImg: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        productCategory: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
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

  static associate(db) {
    db.Product.belongsToMany(db.User, {
      through: "userProduct",
      foreignKey: "productId",
    });
    db.Product.hasMany(db.Cart, {
      foreignKey: "productId",
      sourceKey: "id",
    });

    db.Product.hasMany(db.Order, {
      foreignKey: "productId",
      sourceKey: "id",
    });
  }
}
