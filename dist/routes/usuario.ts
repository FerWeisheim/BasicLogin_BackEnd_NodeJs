import {Router} from 'express';
const cors = require('cors');
import {deleteUsuarios, getUsuario, getUsuarios, postUsuario, putUsuario,} from '../controllers/usuario';

const router = Router();

router.get('/', cors(),          getUsuarios);
router.get('/:id', cors(),      getUsuario);
router.post('/',   cors(),      postUsuario);
router.delete('/:id', cors(),   deleteUsuarios);
router.put('/:id',   cors(),    putUsuario);




export default router;
