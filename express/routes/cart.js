import { Router } from "express";
import jwt from "jsonwebtoken";

import { Cart, User, Product } from "../models/index.js";

const router = Router();

router.post("/list", async (req, res) => {
  try {
    let already = false;
    const temptempte = jwt.verify(req.cookies.user, process.env.JWT_KEY);
    const tempUser = await User.findOne({
      where: { userEmail: temptempte.email },
    });
    const tempProduct = await Product.findOne({
      where: { productName: req.body.payload.name },
    });

    const temp = await Cart.findOne({
      where: { userId: tempUser.isSoftDeleted, productId: tempProduct.id },
      include: [
        {
          model: Product,
          attributes: [
            "productName",
            "productPrice",
            "productImg",
            "productHoverImg",
          ],
        },
        {
          model: User,
          attributes: ["userEmail"],
        },
      ],
    });
    if (!temp) {
      const cartAdd = await Cart.create({
        account: req.body.payload.account,
      });
      tempUser.addCart(cartAdd);
      tempProduct.addCart(cartAdd);
    } else {
      already = true;
    }

    const cartList = await Cart.findAll({
      where: { userId: tempUser.id },
      include: [
        {
          model: Product,
          attributes: [
            "productName",
            "productPrice",
            "productImg",
            "productHoverImg",
          ],
        },
      ],
    });
    res.send({ list: cartList, already: already });
  } catch (err) {
    console.error(err);
    res.send({ error: err });
  }
});

export default router;
