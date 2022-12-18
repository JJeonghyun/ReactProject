import { Router } from "express";
import multer from "multer";
import fs from "fs";

import Product from "../models/product.js";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploader = multer({ storage: storage });

router.get("/upload", async (req, res) => {
  fs.readdir("/upload", (err, data) => {
    console.log("data : ", data);
    res.send({ data: data });
  });
});

router.post("/upload", uploader.array("product_img", 2), async (req, res) => {
  console.log(req.files);
  console.log("파일 업로드");
  console.log(req.body);
  try {
    const tempUpload = await Product.create({
      productName: req.body.name,
      productImg: req.files[0].filename,
      productHoverImg: req.files[1].filename,
      productModel: req.body.model,
      productCategory: req.body.category,
      productAccount: req.body.account,
      productPrice: req.body.price,
      productInfo: req.body.info,
    });
    res.send({
      productName: req.body.name,
      productImg: req.files[0].filename,
      productHoverImg: req.files[1].filename,
      productModel: req.body.model,
      productCategory: req.body.category,
      productAccount: req.body.account,
      productPrice: req.body.price,
      productInfo: req.body.info,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
