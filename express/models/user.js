import Sequelize from "sequelize";

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userEmail: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: true,
        },
        userPw: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        userLastName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        userFirstName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        userPost: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
        userAddress: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        userAddressDetail: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        userPhone: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "User",
        tableName: "user",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.belongsToMany(db.Product, {
      through: "userProduct",
      foreignKey: "userId",
    });

    db.User.hasMany(db.Cart, { foreignKey: "userId", sourceKey: "id" });

    db.User.hasMany(db.Order, { foreignKey: "userId", sourceKey: "id" });
  }
}
