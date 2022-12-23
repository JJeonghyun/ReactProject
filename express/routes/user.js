import { Router } from "express";
import jwt from "jsonwebtoken";
import Cryptojs from "crypto-js";
import db from "../models/index.js";

const router = Router();

router.post("/regist", async (req, res) => {
  try {
    console.log("client 받음", req.body);
    const tempEmail = await db.User.findOne({
      where: { userEmail: req.body.userEmail },
    });
    if (tempEmail) {
      res.send({ message: "ID 줭복" });
      return;
    } else {
      db.User.create({
        userEmail: req.body.userEmail,
        userPw: Cryptojs.SHA256(req.body.userPw).toString(),
        userLastName: req.body.userLastName[0],
        userFirstName: req.body.userFirstName[0],
      }).then((data) => {
        res.send({ message: "db에 잘 저장됨" });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body.userEmail);
  try {
    const tempcheck = await db.User.findOne({
      where: {
        userEmail: req.body.userEmail,
      },
    });
    if (!tempcheck) {
      if (
        req.body.userEmail == process.env.ADMIN_ID &&
        req.body.userPw == process.env.ADMIN_PW
      ) {
        res.cookie(
          "admin",
          jwt.sign(
            {
              email: req.body.userEmail,
              name: req.body.userName,
            },
            process.env.JWT_KEY,
            { algorithm: "HS256", expiresIn: "30m", issuer: "jjh" }
          )
        );
        res.send({ status: 200, msg: "관리자 생성" });
      } else {
        res.send({ status: 402, isLogIn: false });
      }
    } else {
      if (tempcheck.userPw === Cryptojs.SHA256(req.body.userPw).toString()) {
        res.cookie(
          "user",
          jwt.sign(
            {
              email: req.body.userEmail,
              name: req.body.userName,
            },
            process.env.JWT_KEY,
            { algorithm: "HS256", expiresIn: "30m", issuer: "jjh" }
          )
        );
        res.send({ msg: "아이디 생성", isLogIn: true });
      } else {
        res.send({ msg: "no PW", isLogIn: false });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.clearCookie("admin");
  res.clearCookie("admin");
  res.end();
});

router.get("/list", async (req, res) => {
  const list = await db.User.findAll();
  res.send({ list: list });
});

router.post("/forgot", async (req, res) => {
  try {
    console.log(req.body);
    const email = await db.User.findOne({
      where: { userEmail: req.body.email },
    });
    res.send({ userEmail: email.userEmail, status: 200 });
  } catch (err) {
    console.log(err);
    res.send({ message: "없는 정보", status: 402 });
  }
});

router.post("/forgotPw", (req, res) => {
  db.User.update(
    { userPw: Cryptojs.SHA256(req.body.password).toString() },
    { where: { userEmail: req.body.email } }
  )
    .then((data) => {
      res.send({ message: "비밀번호 변경됨", status: 200 });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 402 });
    });
});

export default router;
