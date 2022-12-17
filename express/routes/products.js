import { Router } from "express";
import productJson from "../data/product.json" assert { type: "json" };

const router = Router();
router.get("/list", async (req, res) => {
  console.log(productJson);

  res.send({ list: productJson });
});

router.get("/charge", async (req, res) => {
  console.log(productJson);
  const result = productJson.filter((item) => item.category === "charge");
  res.send({ list: result });
});

export default router;
