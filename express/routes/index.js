import { Router } from "express";

import product from "./products.js";
import upload from "./upload.js";
import user from "./user.js";
import search from "./search.js";
import cart from "./cart.js";
import order from "./order.js";
const router = Router();

router.use("/product", product);
router.use("/upload", upload);
router.use("/user", user);
router.use("/search", search);
router.use("/cart", cart);
router.use("/order", order);

export default router;
