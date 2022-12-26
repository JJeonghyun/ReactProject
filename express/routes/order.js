import { Router } from "express";
import jwt from "jsonwebtoken";

import { Cart, User, Product, Order } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const tempUserCookie = jwt.verify(req.cookies.user, process.env.JWT_KEY);
    const tempUser = await User.findOne({
      where: { userEmail: tempUserCookie.email },
    });
    const list = await Order.findAll({ where: { userEmail: tempUser.email } });
    res.send({ list: list });
  } catch (error) {
    console.log(error);
  }
});

router.post("/list", async (req, res) => {
  try {
    const tempUserCookie = jwt.verify(req.cookies.user, process.env.JWT_KEY);
    const tempUser = await User.findOne({
      where: { userEmail: tempUserCookie.email },
    });

    const tempCart = await Cart.findAll({
      where: {
        userId: tempUser.id,
      },
      include: [
        {
          model: Product,
          attributes: [
            "productName",
            "productPrice",
            "productAccount",
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
    tempCart.forEach(async (item) => {
      Order.create({
        productName: item.Product.productName,
        productPrice: item.Product.productPrice,
        productAccount: item.Product.productAccount,
        productImg: item.Product.productImg,
        productHoverImg: item.Product.productHoverImg,
        userEmail: item.User.userEmail,
      });
    });
    const orderCreate = await Order.findAll({
      where: { userEmail: tempUser.userEmail },
    });

    res.send({ list: orderCreate });
  } catch (err) {
    console.error(err);
    res.send({ error: err });
  }
});

router.post("/orderremove", async (req, res) => {
  try {
    const tempUserCookie = jwt.verify(req.cookies.user, process.env.JWT_KEY);
    const tempUser = await User.findOne({
      where: { userEmail: tempUserCookie.email },
    });
    await Cart.destroy({
      where: {
        userId: tempUser.id,
      },
    });
    res.send({ status: 200, text: "삭제완료" });
  } catch (error) {
    console.log(error);
    res.send({ status: 404, text: error });
  }
});

export default router;
