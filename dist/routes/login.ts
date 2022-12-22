import { Router } from "express";
import {login, register} from '../controllers/login'
const cors = require('cors');
const loginn=Router();

loginn.get('/', cors(), login);
loginn.post('/', cors(),login);
loginn.post('/new', cors(),register);

export default loginn;