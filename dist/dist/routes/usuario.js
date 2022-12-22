"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors = require('cors');
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
router.get('/', cors(), usuario_1.getUsuarios);
router.get('/:id', cors(), usuario_1.getUsuario);
router.post('/', cors(), usuario_1.postUsuario);
router.delete('/:id', cors(), usuario_1.deleteUsuarios);
router.put('/:id', cors(), usuario_1.putUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map