import { Router } from "express";
import { where } from "sequelize";

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
    let result = req.query.search;
    let returnValue = await Product.findAll({ where: { productName: result } });
    const listRead = await Product.findAll();
    if (!listRead.length) {
      create();
      if (returnValue == result) {
        console.log("디비에서 찾았다.");
      } else {
        console.log("디비에 없습니다.");
      }
    } else {
      const listRead = await Product.findAll();
      res.send({ returnValue: returnValue });
    }
  } catch (err) {
    console.log(err);
  }

  // console.log("디비에서 찾았다", returnValue);
  // if( returnValue를 돌려서 검색값이랑 같으면 value 넘겨 주고 , 없으면 메세지 넘겨준다. )
});

export default router;
// const result = product.filter(result.toString() == product.name);
// console.log(product);
// const obj = product.json.parse(product);
