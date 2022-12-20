import { Router } from "express";
import jwt from "jsonwebtoken";
import Cryptojs from "crypto-js";
// import dbTable from "../models/user";
import db from "../models/index.js";

const router = Router();
// const userArr = [];
// const user = {};

// router.post("/regist", async (req, res) => {
//   if (!userArr.find((item) => item.userEmail == req.body.userEmail))
//     userArr.push(req.body);
//   res.end({ message: "db 들어간다" });
// });

router.post("/regist", (req, res) => {
  console.log("client 받음", req.body);
  db.User.create({
    userEmail: req.body.userEmail,
    userPw: Cryptojs.SHA256(req.body.userPw).toString(),
    userLastName: req.body.userLastName[0],
    userFirstName: req.body.userFirstName[0],
  }).then((data) => {
    res.send({ message: "db에 잘 저장됨" });
  });
});

router.post("/login", async (req, res) => {
  // console.log(req.body.userList);
  // console.log(userArr);
  const tempcheck = userArr.find(
    (item) => item.userEmail === req.body.userEmail
  );
  try {
    if (!tempcheck) {
      res.send({ msg: "ID가 없어요" });
      if (
        //
        req.body.userEmail == process.env.ADMIN_ID &&
        req.body.userPw == process.env.ADMIN_PW
      ) {
        res.cookie(req.body.userEmail, "아임 관리자", {
          expires: new Date(Date.now() + 1000 * 1000),
        });
        res.send({
          status: 200,
          userEmail: req.body.userEmail,
          userLastName: "두둥탁",
          userFirstName: "관리자",
        });
      } else {
        res.send({ status: 402, message: "no ID" });
      }
    } else {
      res.cookie(
        "jjh",
        jwt.sign(
          {
            email: req.body.userEmail,
            pw: Cryptojs.SHA256(req.body.pw).toString(),
            name: req.body.userName,
          },
          process.env.JWT_KEY,
          { algorithm: "HS256", expiresIn: "30m", issuer: "jjh" }
        )
      );
      res.send({
        msg: "아이디 생성",
        userEmail: req.body.userEmail,
        userPw: Cryptojs.SHA256(req.body.pw).toString(),
        userName: req.body.userName,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jjh");
  res.end();
});

export default router;
