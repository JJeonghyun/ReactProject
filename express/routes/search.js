import { Router } from "express";

import product from "../data/product.json" assert { type: "json" };
import Product from "../models/product.js";

const router = Router();

router.get("/", async (req, res) => {
  console.log(product);
  try {
    product.forEach((item) => {
      Product.create({
        productName: item.name,
        productModel: item.model,
        productPrice: item.price,
        productNum: item.account,
        productInfo: item.info,
        Img: item.img,
        hoverImg: item.hoverImg,
        // productCategory: item.category,
      });
    });

    const searchResult = req.query.result.search;
    console.log("searchResult", searchResult);
    // const listfilter = Product.findAll((item) => {
    //   item.name === searchResult;
    // });
    const listfilter = await Product.findAll();
    console.log("listfilter", listfilter);

    return res.send({ mainResult: listfilter });
    // const mainResult = product.filter((item) => item.name === searchResult);

    // console.log(mainResult);
    // res.send({ mainResult: mainResult });
  } catch (err) {
    console.error(err);
  }
});

export default router;
// const result = product.filter(result.toString() == product.name);
// console.log(product);
// const obj = product.json.parse(product);
