import { Router } from "express";
import { Op } from "sequelize";
// import product from "../data/product.json" assert { type: "json" };
import { dummyData as product } from "../data/product.js";
import Product from "../models/product.js";

const router = Router();
const create = () => {
  product.forEach(async (item) => {
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
};

router.get("/", async (req, res) => {
  try {
    let result = req.query.search;
    let returnValue = await Product.findAll({ where: { productName: result } });
    const listRead = await Product.findAll();

    if (!listRead.length) {
      create();
    } else {
      const listRead = await Product.findAll({
        where: { productName: { [Op.substring]: result } },
      });
      res.send({ returnValue: listRead });
    }
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
});

export default router;
