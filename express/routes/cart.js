import { Router } from "express";
import jwt from "jsonwebtoken";
import { where } from "sequelize";
import product from "../data/product.json" assert { type: "json" };
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
  console.log(req.body.payload);
  await Cart.destroy({
    where: {
      name: req.body.payload.name,
    },
  });
  res.send({ status: 200, text: "삭제완료" });
});

router.post("/getItem", async (req, res) => {
  console.log(req.body.payload);
  const list = await Cart.findOne({ where: { name: req.body.payload } });
  res.send({ list: list });
});

router.post("/list", async (req, res) => {
  try {
    let already = false;
    const temptempte = jwt.verify(req.cookies.user, process.env.JWT_KEY);
    console.log(temptempte);
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
    console.log(temp);
    if (!temp) {
      console.log(req.body.payload);
      const cartAdd = await Cart.create({
        account: req.body.payload.account,
      });

      tempUser.addCart(cartAdd);
      tempProduct.addCart(cartAdd);
    } else {
      already = true;
    }
    // res.send(temp);
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

    // console.log(req.body.payload.name);
    // const [list, created] = await Cart.findOrCreate({
    //   name: req.body.payload.name,
    // });
    // if (created) {
    //   await Cart.create({
    //     name: req.body.payload.name,
    //     price: req.body.payload.price,
    //     img: req.body.payload.img,
    //     hoverImg: req.body.payload.hoverImg,
    //     account: 10,
    //     // id: ~~~,
    //   });
    //   const cartList = await Cart.findAll();
    //   res.send({ list: cartList });
    // } else {
    //   console.log("중복");
    // }
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

export default router;
