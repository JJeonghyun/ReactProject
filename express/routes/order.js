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
        },
        {
          model: User,
          attributes: ["userEmail"],
        },
      ],
    });

    for (let i = 0; i < tempCart.length; i++) {
      const orderAdd = await Order.create({ account: tempCart[i].account });

      tempUser.addOrder(orderAdd);
      tempCart[i].Product.addOrder(orderAdd);
      tempCart[i].destroy();
    }
    const tempList = await Order.findAll({ where: { userId: tempUser.id } });

    res.send({ list: tempList });
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
