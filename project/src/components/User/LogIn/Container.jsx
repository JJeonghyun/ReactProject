import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComp from "./Comp";
import { action as infoAction as infoAction } from "../../../modules/userInfo";
import { action as dbAction } from "../../../modules/userDB";
import { action as dbAction } from "../../../modules/userDB";

const LogInContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dbCheck = async () => {
    await axios.get("http://localhost:8080/api/user/list").then((data) => {
      console.log(data.data.list);
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

  const userList = useSelector((state) => state.userDB);
  const logIned = useSelector((state) => state.userInfo);

  const dbCheck = async () => {
    await axios.get("http://localhost:8080/api/user/list").then((data) => {
      console.log(data.data.list);
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

  const logIn = async (logEmail, logPw) => {
    dispatch(infoAction.logInEmail(logEmail, userList));
    dispatch(infoAction.logInPw(logPw, userList));
    await axios
      .post("http://localhost:8080/api/user/login", {
        userEmail: logIned.logEmail,
        userPw: logIned.logPw,
        userName: logIned.logName,
        userName: logIned.logName,
        userList: userList,
      })
      .then((data) => {
        console.log(data);
        console.log(
          JSON.parse(window.atob(document.cookie.split("=")[1]?.split(".")[1]))
        );
        if (data.data.userEmail == "admin@jjjj.com") {
          navigate("/admin");
        } else navigate("/");
      });
  };

  return (
    <LogInComp
      dbCheck={dbCheck}
      logIn={logIn}
      logEmail={logIned.logEmail}
      logPw={logIned.logPw}
    />
  );
};

export default LogInContainer;
