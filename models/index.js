const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

//Connecting to mySQL using sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: "localhost",
        dialect: "mysql",
    }
)

//Verifying if the sequelize is connected successfully
sequelize.authenticate().then(()=> console.log("Connected")).catch((err)=> console.log(err))

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.auth = require("./AuthModel")(sequelize, DataTypes)
db.residents = require("./ResidentModel")(sequelize, DataTypes);
db.events = require("./EventModel")(sequelize, DataTypes);

// db.residents.sync({force: true}).then(()=> console.log("Drop and re-sync db"));
// db.sequelize.sync({force: false}).then(()=> console.log("Drop and re-sync db"))


module.exports = db;