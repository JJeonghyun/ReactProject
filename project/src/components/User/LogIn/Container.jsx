import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import LogInComp from "./Comp";
import { action as infoAction } from "../../../modules/userInfo";
import { action as dbAction } from "../../../modules/userDB";

let tempUser = undefined;

const LogInContainer = () => {
  if (document.cookie) {
    tempUser = JSON.parse(
      window.atob(document.cookie.split("=")[1]?.split(".")[1])
    );
  }
  const [isLogIn, setIsLogIn] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userDB);
  const logIned = useSelector((state) => state.userInfo);

  const dbCheck = () => {
    axios.get("/api/user/list").then((data) => {
      data.data.list?.forEach((item) => {
        dispatch(
          dbAction.registemail(
            item.userEmail,
            item.userPw,
            item.userLastName,
            item.userFirstName
          )
        );
      });
    });
  };

  const dispatchLogEmail = (logEmail) => {
    dispatch(infoAction.logInEmail(logEmail, userList));
  };
  const dispatchFuncPw = (logPw) => {
    dispatch(infoAction.logInPw(logPw, userList));
  };

  const logIn = () => {
    if (logIned.logEmail === "" && logIned.logPw === "") {
      return;
    } else {
      axios
        .post("/api/user/login", {
          userEmail: logIned.logEmail,
          userPw: logIned.logPw,
          userFirstName: logIned.logFirstName,
          userLastName: logIned.logLastName,
          userList: userList,
        })
        .then((data) => {
          if (data.data.isLogIn) {
            setIsLogIn(data.data.isLogIn);
            navigate("/");
          } else if (!data.data.isLogIn) {
            setIsLogIn(data.data.isLogIn);
          } else if (data.data.isLogIn && data.data.status == 200) {
            setIsLogIn(data.data.isLogIn);
            navigate("/admin");
          }
        });
    }
  };

  const EmailList = async (logEmail, setLayer) => {
    await axios.post("/api/user/forgot", { email: logEmail }).then((data) => {
      if (data.data.status == 200) {
        setLayer((prev) => (prev === 1 ? 2 : 1));
      } else {
        alert("이메일 주소를 다시 확인해 주세요");
      }
    });
  };

  return (
    <LogInComp
      dbCheck={dbCheck}
      EmailList={EmailList}
      logIn={logIn}
      logEmail={logIned.logEmail}
      logPw={logIned.logPw}
      dispatchLogEmail={dispatchLogEmail}
      dispatchFuncPw={dispatchFuncPw}
      isLogIn={isLogIn}
    />
  );
};

export default LogInContainer;
