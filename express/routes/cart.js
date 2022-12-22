import { Router } from "express";
import jwt from "jsonwebtoken";
import product from "../data/product.json" assert { type: "json" };
import { Cart, User, Product } from "../models/index.js";

const router = Router();

router.post("/list", async (req, res) => {
  try {
    let already = false;
    let temp;
    // const temp = await Cart.findOne({
    // where: { productId: req.body.payload.id },
    // });
    const temptempte = jwt.verify(req.cookies.admin, process.env.JWT_KEY);
    console.log(temptempte);
    // const temp = await Cart.findOne({
    //   where: { userId: temptempte },
    //   include: [
    //     {
    //       model: Product,
    //       attributes: [
    //         "productName",
    //         "productPrice",
    //         "productImg",
    //         "productHoverImg",
    //       ],
    //     },
    //   ],
    // });
    if (!temp) {
      console.log(req.body.payload);
      const cartAdd = await Cart.create({
        account: req.body.payload.account,
      });

      const tempUser = await User.findOne({ where: { userEmail: temptempte } });
      Product.findOne({ where: { productName: req.body.payload.name } });
    } else {
      already = true;
    }

    const cartList = await Cart.findAll();
    res.send({ list: cartList, already: already, name: req.body.payload.name });

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
  }
});

export default router;
