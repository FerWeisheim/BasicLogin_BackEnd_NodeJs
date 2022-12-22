
import {Sequelize} from 'sequelize'

const db = new Sequelize('usuarios','postgres','Motokey',{
    host:    'localhost',
    dialect: 'postgres',
    // logging: false;
})
export default db;