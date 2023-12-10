import dbConfig from "../config/dbConfig.js";
import { Sequelize, DataTypes } from "sequelize";
import accountModel from "./accountModel.js";

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
    }
)


sequelize.authenticate()
    .then(() =>
    {
        console.log(`connect to db`);
    })
    .catch((err) =>
    {
        console.log(`error : ${err}`);
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.accounts = accountModel(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() =>
    {
        console.log("yes re-sync done!");
    })

export default db;