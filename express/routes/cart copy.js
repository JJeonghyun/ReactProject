import { Router } from "express";
import { Sequelize, where } from "sequelize";
// import product from "../data/product.json" assert { type: "json" };
const router = Router();

const Op = Sequelize.Op;
import Cart from "../models/cart.js";
import Product from "../models/product.js";
router.post("/", async (req, res) => {
  try {
    const list = await Cart.findAll();
    res.send({ list: list });
  } catch (error) {
    console.log(error);
  }
});

router.post("/remove", async (req, res) => {
  await Cart.destroy({
    where: {
      name: req.body.payload.name,
    },
  });
  res.send({ status: 200, text: "삭제완료" });
});

router.post("/getItem", async (req, res) => {
  const list = await Cart.findOne({ where: { name: req.body.payload } });
  res.send({ list: list });
});

router.post("/list", async (req, res) => {
  try {
    let already = false;
    // const temp = await Cart.findOne({ where: { name: req.body.payload.name } });
    // const productInfo = await Product.findOne({
    //   where: { productName: req.body.payload.name },
    // });

    // const asd = await Cart.findAll({
    //   include: [
    //     {
    //       model: Product,
    //       as: "products",
    //       attributes: ["id"],
    //       required: true,
    //       where: {
    //         id: 5,
    //       },
    //     },
    //   ],
    // });
    let tmepasd;
    tmepasd = await Cart.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });

    const cartList = await Cart.findAll({
      include: {
        model: Product,
        where: { productName: "월 커넥터" },
        attributes: ["id"],
      },
    });

    res.send({
      list: cartList,
      already: already,
      name: req.body.payload.name,
      test: tmepasd,
    });
  } catch (err) {
    console.error(err);
  }
});

export default router;
