import * as express from "express";

import clientEnd from "./routers";

const router = express.Router();


router.use(clientEnd)


export default router;