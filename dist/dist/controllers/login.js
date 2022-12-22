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
exports.login = exports.register = void 0;
const usuario_1 = __importDefault(require("../../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const hash = yield bcrypt_1.default.genSalt(10);
    var user = {
        username: username,
        password: yield bcrypt_1.default.hash(password, hash)
    };
    const createUser = yield usuario_1.default.create(user);
    res.json({ createUser });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const existeUser = yield usuario_1.default.findOne({ where: { username } });
    if (existeUser) {
        const passwordCompare = yield bcrypt_1.default.compare(password, existeUser.password);
        if (passwordCompare) {
            return res.status(200).json({
                msg: "ingreso"
            });
        }
        if (!passwordCompare) {
            res.status(400).json({
                msg: "datos incorrectos"
            });
        }
    }
});
exports.login = login;
//# sourceMappingURL=login.js.map