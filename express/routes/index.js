import { Router } from "express";

import product from "./products.js";
import upload from "./upload.js";
import user from "./user.js";
import search from "./search.js";

const router = Router();

router.use("/product", product);
router.use("/upload", upload);
router.use("/user", user);
router.use("/search", search);

export default router;
