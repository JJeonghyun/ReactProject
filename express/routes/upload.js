import { Router } from "express";
import multer from "multer";
import fs from "fs";

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

router.post("/upload", uploader.array("product_img", 2), (req, res) => {
  console.log(req.files);
  console.log("파일 업로드");
  console.log(req.body);

  res.send({
    name: req.body.name,
    productImg: req.files[0].filename,
    productHoverImg: req.files[1].filename,
    model: req.body.model,
    color: req.body.color,
    account: req.body.account,
    price: req.body.price,
    info: req.body.info,
  });
});

export default router;
