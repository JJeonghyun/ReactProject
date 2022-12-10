"use strict";

const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {}; // 테이블명 넣고

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 여기에 테이블 init 해야함

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
