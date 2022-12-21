import { Router } from "express";
import { Op, Sequelize, where } from "sequelize";
import product from "../data/product.json" assert { type: "json" };
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
    let tempArrList = [];
    let result = req.query.search;
    let returnValue = await Product.findAll({ where: { productName: result } });
    const listRead = await Product.findAll();

    if (!listRead.length) {
      create();
    } else {
      const listRead = await Product.findAll({
        where: { productName: { [Op.substring]: result } },
      });
      // for (let i = 0; i < listRead.length; i++) {
      //   let tempName = listRead[i].productName;
      //   if (tempName.includes(result)) {
      //     tempArrList.push(listRead[i]);
      //   } else {
      //   }
      // }
      // res.send({ returnValue: tempArrList });
      res.send({ returnValue: listRead });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
