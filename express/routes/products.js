import { Router } from "express";

import productJson from "../data/product.json" assert { type: "json" };
import Product from "../models/product.js";

const router = Router();

router.get("/list", async (req, res) => {
  console.log(productJson);
  try {
    productJson.forEach((item, index) => {
      Product.create({
        productName: item.name,
        productModel: item.model,
        productPrice: item.price,
        productAccount: item.account,
        productInfo: item.info,
        productImg: item.img,
        productHoverImg: item.hoverImg,
        productCategory: item.category,
      });
      return res.send({ list: productJson });
    });
  } catch (err) {
    console.log(err);
  }
});

export default router;
