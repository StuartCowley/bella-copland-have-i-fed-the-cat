const CatModel = require('./cat');
const Sequelize = require('sequelize');

const setUpDatabase = () => {
    const connection = new Sequelize("have_i_fed_the_cat_app_db", "root", "password", {
        host: "localhost",
        port: 3307,
        dialect: "mysql"
    })

    const Cat = CatModel(connection, Sequelize);

    connection.sync({alter: true});

    return { Cat };
};

module.exports = setUpDatabase();