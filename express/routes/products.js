import { Router } from "express";
import fs from "fs";

import productJson from "../data/product.json" assert { type: "json" };
import Product from "../models/product.js";

const router = Router();

router.get("/list", async (req, res) => {
  try {
    const listUp = await Product.findAll();
    if (!listUp.length) {
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
      const listUp = await Product.findAll();
      fs.readdir("./upload", (err, data) => {
        console.log("data : ", data);
        res.send({ data: data, list: listUp });
      });
    } else {
      fs.readdir("./upload", (err, data) => {
        console.log("data : ", data);
        res.send({ data: data, list: listUp });
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/orderlist", async (req, res) => {
  console.log(req.body.order);
  try {
    const listUp = await Product.findAll();
    if (!listUp.length) {
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
      const mainlistUp = await Product.findAll({
        order: [["productPrice", req.body.order]],
        limit: 10,
      });
      res.send({ list: mainlistUp });
    } else {
      const mainlistUp = await Product.findAll({
        order: [["productPrice", req.body.order]],
        limit: 10,
      });
      res.send({ list: mainlistUp });
    }
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

router.get("/charge", async (req, res) => {
  console.log(productJson);
  const result = productJson.filter(
    (item) => item.productCategory === "charge"
  );
  res.send({ list: result });
});

export default router;
