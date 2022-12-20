import { Router } from "express";
import productJson from "../data/product.json" assert { type: "json" };
import Product from "../models/product.js";

import product from "./products.js";
import upload from "./upload.js";
import user from "./user.js";
import search from "./search.js";
import cart from "./cart.js";
const router = Router();

router.use("/product", product);
router.use("/upload", upload);
router.use("/user", user);
router.use("/search", search);
router.use("/cart", cart);

router.get("/", async (req, res) => {
  try {
    productJson.forEach(async (item) => {
      await Product.create({
        productName: item.productName,
        productModel: item.productModel,
        productPrice: item.productPrice,
        productAccount: item.productAccount,
        productInfo: item.productInfo,
        productImg: item.productImg,
        productHoverImg: item.productHoverImg,
        productCategory: item.productCategory,
      });
    });
  } catch (err) {
    console.log(err);
  }
});
export default router;
