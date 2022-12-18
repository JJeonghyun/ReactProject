import { Router } from "express";

import productJson from "../data/product.json" assert { type: "json" };
import Product from "../models/product.js";

const router = Router();

productJson.forEach((item) => {
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
});

router.get("/list", async (req, res) => {
  console.log(productJson);
  try {
    const listUp = await Product.findAll();

    return res.send({ list: listUp });
  } catch (err) {
    console.log(err);
  }
});

router.post("/remove", async (req, res) => {
  await Product.destroy({
    where: {
      productName: req.body.productName,
    },
  });
  res.send({ status: 200, text: "삭제완료" });
});

export default router;
