import { Router } from "express";
import jwt from "jsonwebtoken";
import Cryptojs from "crypto-js";
import db from "../models/index.js";
import { User, Cart, Product, Order } from "../models/index.js";

const router = Router();

router.post("/regist", async (req, res) => {
  try {
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
        userPost: req.body.userPost[0],
        userAddress: req.body.userAddress[0],
        userAddressDetail: req.body.userAddressDetail[0],
        userPhone: req.body.userPhone[0],
      }).then((data) => {
        res.send({ message: "db에 잘 저장됨" });
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ error: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const tempcheck = await db.User.findOne({
      where: {
        userEmail: req.body.userEmail,
      },
    });
    if (!tempcheck) {
      res.send({ status: 402, isLogIn: false });
    } else {
      if (tempcheck.userEmail === "admin@jjjj.com") {
        res.cookie(
          "admin",
          jwt.sign(
            {
              email: req.body.userEmail,
              name: req.body.userName,
            },
            process.env.JWT_KEY,
            { algorithm: "HS256", expiresIn: "300m", issuer: "jjh" }
          )
        );
        res.send({ status: 200, msg: "관리자 생성", isLogIn: true });
      } else if (
        tempcheck.userPw === Cryptojs.SHA256(req.body.userPw).toString()
      ) {
        res.cookie(
          "user",
          jwt.sign(
            {
              email: req.body.userEmail,
            },
            process.env.JWT_KEY,
            { algorithm: "HS256", expiresIn: "30m", issuer: "jjh" }
          )
        );
        res.send({
          email: tempcheck.userEmail,
          firstName: tempcheck.userFirstName,
          lastName: tempcheck.userLastName,
          msg: "로그인 완료",
          isLogIn: true,
        });
      } else {
        res.send({ msg: "no PW", isLogIn: false });
      }
    }
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.clearCookie("admin");
  res.end();
});

router.get("/list", async (req, res) => {
  const list = await db.User.findAll();
  res.send({ list: list });
});

router.post("/forgot", async (req, res) => {
  try {
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

router.post("/logInedUser", async (req, res) => {
  const tempUserInfo = jwt.verify(req.cookies.user, process.env.JWT_KEY);
  const tempUser = await db.User.findOne({
    where: {
      userEmail: tempUserInfo.email,
    },
  });
  res.send({ message: "로그인된 유저 정보", status: 200, tempUser: tempUser });
});

router.post("/replace", (req, res) => {
  const user = jwt.verify(req.cookies.user, process.env.JWT_KEY).email;
  db.User.update(
    { userLastName: req.body.lastName, userFirstName: req.body.firstName },
    { where: { userEmail: user } }
  )
    .then((data) => {
      res.send({
        message: "이름 변경됨",
        status: 200,
        userLastName: req.body.lastName,
        userFirstName: req.body.firstName,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 402 });
    });
});

router.post("/replaceAddress", (req, res) => {
  const user = jwt.verify(req.cookies.user, process.env.JWT_KEY).email;
  db.User.update(
    {
      userPost: req.body.userPost,
      userAddress: req.body.userAddress,
      userAddressDetail: req.body.userAddressDetail,
      userPhone: req.body.userPhone,
    },
    { where: { userEmail: user } }
  )
    .then((data) => {
      res.send({
        message: "주소 및 전화번호 변경됨",
        status: 200,
        userPost: req.body.userPost,
        userAddress: req.body.userAddress,
        userAddressDetail: req.body.userAddressDetail,
        userPhone: req.body.userPhone,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 402 });
    });
});

router.post("/userDelete", async (req, res) => {
  await db.User.destroy({
    where: {
      userEmail: req.body.email,
    },
  })
    .then((data) => {
      res.clearCookie("user");
      res.end();
      res.send({ status: 200, text: "삭제완료" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 402 });
    });
});

router.post("/getUser", async (req, res) => {
  const user = jwt.verify(req.cookies.user, process.env.JWT_KEY);
  const userEmail = await db.User.findAll({
    where: {
      userEmail: user.email,
    },
  });

  res.send([...userEmail]);
});

router.post("/bought", async (req, res) => {
  const user = jwt.verify(req.cookies.user, process.env.JWT_KEY);
  const userEmail = await db.User.findAll({
    where: {
      userEmail: user.email,
    },
  });

  const item = await db.Order.findAll({
    where: {
      userId: userEmail[0].id,
    },
    include: [
      {
        model: Product,
        attributes: ["productName", "productPrice", "productImg"],
      },
    ],
  });

  res.send(item);
});

router.post("/timeList", async (req, res) => {
  const value = req.body.value;

  const item = await db.Order.findAll({
    where: {
      createdAt: value,
    },
    include: [
      {
        model: Product,
        attributes: ["productName", "productPrice", "productImg"],
      },
    ],
  });
  res.send(item);
});

export default router;
