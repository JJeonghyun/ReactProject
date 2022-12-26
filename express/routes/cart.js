import { Router } from "express";
import jwt from "jsonwebtoken";

import { Cart, User, Product } from "../models/index.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const list = await Cart.findAll();
    res.send({ list: list });
  } catch (error) {
    console.log(error);
  }
});

router.post("/remove", async (req, res) => {
  try {
    await Cart.destroy({
      where: {
        productId: req.body.payload.productId,
      },
    });
    res.send({ status: 200, text: "삭제완료" });
  } catch (error) {
    console.log(error);
    res.send({ status: 404, text: error });
  }
});

router.post("/userCart", async (req, res) => {
  try {
    const temptempte = jwt.verify(req.cookies.user, process.env.JWT_KEY);
    const tempUser = await User.findOne({
      where: { userEmail: temptempte.email },
    });

    const list = await Cart.findAll({
      where: { userId: tempUser.id },
      include: [
        {
          model: Product,
          attributes: [
            "productName",
            "productPrice",
            "productImg",
            "productHoverImg",
            "productAccount",
          ],
        },
      ],
    });

    res.send({ list: list });
  } catch (err) {
    console.error(err);
    res.send({ error: err });
  }
});

router.post("/accUpdate", async (req, res) => {
  try {
    console.log(req.body.id);
    const list = await Cart.update(
      {
        account: req.body.num,
      },
      {
        where: { productId: req.body.id },
      }
    );

    res.send({ list: "list" });
  } catch (err) {
    console.error(err);
    res.send({ error: err });
  }
});

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
      where: { userId: tempUser.id, productId: tempProduct.id },
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
        account: 1,
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

router.post("/listUp", async (req, res) => {
  try {
    const tempUserCookie = jwt.verify(req.cookies.user, process.env.JWT_KEY);
    const tempUser = await User.findOne({
      where: { userEmail: tempUserCookie.email },
    });
    const list = await Cart.findAll({
      where: { userId: tempUser.id },
      include: [
        {
          model: Product,
          attributes: [
            "productName",
            "productPrice",
            "productImg",
            "productHoverImg",
            "productAccount",
          ],
        },
      ],
    });
    res.send({ list: list });
  } catch (error) {
    console.log(error);
  }
});

export default router;
