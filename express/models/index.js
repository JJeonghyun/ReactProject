"use strict";

import Sequelize from "sequelize";
import Config from "../config/config.js";

import Product from "./product.js";
import User from "./user.js";
import Cart from "./cart.js";
import Order from "./order.js";

const env = process.env.NODE_ENV || "development";
const config = Config[env];
const db = { Product, User, Cart, Order };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Product.init(sequelize);
User.init(sequelize);
Cart.init(sequelize);
Order.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
export { Product, User, Cart, Order };
