import { Router } from "express";
import jwt from "jsonwebtoken";
import Cryptojs from "crypto-js";

const router = Router();

router.post("/login", async (req, res) => {
  console.log(req.body.userList);
  const tempcheck = req.body.userList.find(
    (item) => item.userEmail === req.body.userEmail
  );
  try {
    if (!tempcheck) {
      res.send({ msg: "ID가 없어요" });
    } else {
      res.cookie(
        "jjh",
        jwt.sign(
          {
            email: req.body.userEmail,
            pw: req.body.userPw,
            name: req.body.userName,
          },
          process.env.JWT_KEY,
          { algorithm: "HS256", expiresIn: "30m", issuer: "jjh" }
        )
      );

      res.send({
        msg: "아이디 생성",
        userEmail: req.body.userEmail,
        userPw: req.body.userPw,
        userName: req.body.userName,
      });
    }
  } catch (err) {
    console.err(err);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jjh");
  res.end();
});

export default router;
