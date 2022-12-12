import { Router } from "express";

import product from "./products.js";
import upload from "./upload.js";
import search from "./search.js";

const router = Router();

router.use("/test", product);
router.use("/upload", upload);
router.use("/search", search);

import upload from "./upload.js";

router.use("/upload", upload);

export default router;
