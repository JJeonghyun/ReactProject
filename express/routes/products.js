import { Router } from "express";
// import { Product } from "../models/index";

const router = Router();
router.post("/", async (req, res) => {
  try {
    console.log("asd");
    res.send();
  } catch (err) {
    console.err(err);
  }
});

export default router;
