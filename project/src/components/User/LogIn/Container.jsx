import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComp from "./Comp";
import { action as infoAction } from "../../../modules/userInfo";
import { action as dbAction } from "../../../modules/userDB";

let tempUser = undefined;

const LogInContainer = () => {
  if (document.cookie) {
    tempUser = JSON.parse(
      window.atob(document.cookie.split("=")[1]?.split(".")[1])
    );
    console.log(tempUser);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userDB);
  const logIned = useSelector((state) => state.userInfo);

  const dbCheck = async () => {
    await axios.get("http://localhost:8080/api/user/list").then((data) => {
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

  const dispatchFunc = (logEmail, logPw) => {
    dispatch(infoAction.logInEmail(logEmail, userList));
    dispatch(infoAction.logInPw(logPw, userList));
  };

  const logIn = () => {
    console.log(logIned);
    if (logIned.logEmail === "" && logIned.logPw === "") {
      return;
    } else {
      axios
        .post("http://localhost:8080/api/user/login", {
          userEmail: logIned.logEmail,
          userPw: logIned.logPw,
          userName: logIned.logName,
          userList: userList,
        })
        .then((data) => {
          console.log(data.data.msg);
          if (data.data.msg === "아이디 생성") {
            navigate("/");
          } else if (data.data.msg === "no ID") {
            alert("no ID");
          } else {
            alert("관리자 생성");
          }
        });
    }
  };

  return (
    <LogInComp
      dbCheck={dbCheck}
      logIn={logIn}
      logEmail={logIned.logEmail}
      logPw={logIned.logPw}
      dispatchFunc={dispatchFunc}
    />
  );
};

export default LogInContainer;
