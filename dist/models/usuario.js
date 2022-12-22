"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../dist/db/connection"));
const Usuarios = connection_1.default.define("usuarios", {
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    }
    // createdAt:{
    // type: DataTypes.TIME
    // },
    // updatedAt:{
    //  type: DataTypes.TIME
    // }
});
exports.default = Usuarios;
//# sourceMappingURL=usuario.js.map