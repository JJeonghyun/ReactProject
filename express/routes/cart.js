import { Router } from "express";
import product from "../data/product.json" assert { type: "json" };
const router = Router();
import Cart from "../models/cart.js";

router.post("/list", async (req, res) => {
  try {
    await Cart.create({
      name: req.body.payload.name,
      price: req.body.payload.price,
      img: req.body.payload.img,
      hoverImg: req.body.payload.hoverImg,
      account: 10,
      // id: ~~~,
    });
    const cartList = await Cart.findAll();
    res.send({ list: cartList });
  } catch (err) {
    console.error(err);
  }
});

export default router;
