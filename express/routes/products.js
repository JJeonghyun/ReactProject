import { Router } from "express";
import fs from "fs";
import { where } from "sequelize";

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

router.get("/getlist", async (req, res) => {
  try {
    const listUp = await Product.findAll();
    res.send({ list: listUp });
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

router.get("/chargeHome", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "chargeHome"
  );
  res.send({ list: result });
});

router.get("/chargeCar", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "chargeCar"
  );
  res.send({ list: result });
});

router.get("/chargeParts", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "chargeParts"
  );
  res.send({ list: result });
});

router.get("/accBest", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "accBest"
  );
  res.send({ list: result });
});

router.get("/accInteria", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "accInteria"
  );
  res.send({ list: result });
});

router.get("/accOut", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "accOut"
  );
  res.send({ list: result });
});

router.get("/accWheel", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "accWheel"
  );
  res.send({ list: result });
});

router.get("/accParts", async (req, res) => {
  console.log("들어옴");
  const result = productJson.filter(
    (item) => item.productCategory === "accParts"
  );
  res.send({ list: result });
});

router.get("/clothesT", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "clothesT"
  );
  res.send({ list: result });
});

router.get("/clothesSH", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "clothesSH"
  );
  res.send({ list: result });
});

router.get("/clothesJaket", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "clothesJaket"
  );
  res.send({ list: result });
});

router.get("/clothesCap", async (req, res) => {
  const result = productJson.filter(
    (item) => item.productCategory === "clothesCap"
  );
  res.send({ list: result });
});
export default router;
