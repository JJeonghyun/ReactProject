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
    console.log(tmepasd);
    // const tempCart = await Cart.findOne({});
    // const getCart = await tempCart.getProduct({
    //   where: {
    //     id: 28,
    //   },
    // });
    // if (!temp) {
    //   await Cart.create({
    //     name: productInfo.productName,
    //     price: productInfo.productPrice,
    //     img: productInfo.productImg,
    //     hoverImg: productInfo.productHoverImg,
    //     account: 10,
    //     productId: productInfo.id,
    //   });
    // } else {
    //   already = true;
    // }

    const cartList = await Cart.findAll({
      include: {
        model: Product,
        where: { productName: "월 커넥터" },
        attributes: ["id"],
      },
    });
    // // const sample = await Cart.findOne({});
    // // const sampleAS = await sample.getProduct();
    // // console.log(sampleAS);

    // const cartItem = await Cart.findAll({
    //   include: [
    //     {
    //       model: Product,
    //     },
    //   ],
    // });
    // console.log(cartItem.Products[0]);
    res.send({
      list: cartList,
      already: already,
      name: req.body.payload.name,
      test: tmepasd,
    });

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
