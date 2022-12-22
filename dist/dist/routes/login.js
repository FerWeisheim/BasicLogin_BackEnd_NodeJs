"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controllers/login");
const cors = require('cors');
const loginn = (0, express_1.Router)();
loginn.get('/', cors(), login_1.login);
loginn.post('/', cors(), login_1.login);
loginn.post('/new', cors(), login_1.register);
exports.default = loginn;
//# sourceMappingURL=login.js.map