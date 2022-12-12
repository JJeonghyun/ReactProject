import { Router } from "express";
import product from "./products.js";
const router = Router();
router.use("/test", product);
export default router;
