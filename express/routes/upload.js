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
  fs.readdir("./upload", (err, data) => {
    console.log("data : ", data);
    res.send({ data: data });
  });
});

router.post("/upload", uploader.single("product_img"), (req, res) => {
  console.log(req.file);
  console.log("파일 업로드");
  console.log(req.body);

  res.send({ gdgd: "gdgd" });
});

export default router;
