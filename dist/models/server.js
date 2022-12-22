"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../dist/routes/usuario"));
const login_1 = __importDefault(require("../dist/routes/login"));
const connection_1 = __importDefault(require("../dist/db/connection"));
const cors = require('cors');
class server {
    constructor() {
        this.path = {
            usuarios: '/api/usuarios',
            login: '/api/login'
        };
        this.app = (0, express_1.default)();
        this.app.use(cors());
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middelwares();
        this.routes(); //definir mis rutas
    }
    //conectar base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("base conectada");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middelwares() {
        //configuar cors
        this.app.use(cors());
        //lectura del body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.path.login, login_1.default);
        this.app.use(this.path.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => console.log("server en puerto " + this.port));
    }
}
exports.default = server;
//# sourceMappingURL=server.js.map