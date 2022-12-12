import { Router } from "express";
import product from "./products.js";
const router = Router();
router.use("/test", product);

import upload from "./upload.js";

router.use("/upload", upload);

export default router;
