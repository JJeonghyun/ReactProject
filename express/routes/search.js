import { Router } from "express";
import product from "../data/product.json" assert { type: "json" };
const router = Router();

router.get("/", (req, res) => {
  try {
    console.log(req.query.result.search);
    const searchResult = req.query.result.search;
    // const mainResult = product.filter(searchResult == product.name);
    const mainResult = product.filter(
      (item) => item.productName === searchResult
    );

    console.log(mainResult);
    res.send({ mainResult: mainResult });
  } catch (err) {
    console.error(err);
  }
});

export default router;
// const result = product.filter(result.toString() == product.name);
// console.log(product);
// const obj = product.json.parse(product);
