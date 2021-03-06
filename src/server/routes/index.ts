import * as express from "express";

import api from './api'
import auth from './auth/'


const router = express.Router();

router.use(api)
router.use(auth)


export default router;