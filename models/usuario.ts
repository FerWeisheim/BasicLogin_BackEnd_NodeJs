import {DataTypes} from 'sequelize';
import db from '../dist/db/connection';

const Usuarios = db.define("usuarios",{
     username:{
        type: DataTypes.STRING
     },
     password:{
        type: DataTypes.STRING
     }
      // createdAt:{
      // type: DataTypes.TIME
      // },
      // updatedAt:{
      //  type: DataTypes.TIME
      // }
})
export default Usuarios;
