import { Router } from "express";
import productJson from "../data/product.json" assert { type: "json" };

const router = Router();
router.get("/list", async (req, res) => {
  console.log(productJson);
  res.send({ list: productJson });
});

export default router;
