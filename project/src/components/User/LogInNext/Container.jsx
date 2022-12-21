import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComp from "./Comp";
import { action as infoAction } from "../../../modules/userInfo";
import { action as dbAction } from "../../../modules/userDB";

const LogInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userArr, setArr] = useState([]);

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
  console.log(logIned);
  console.log(userList);
  const [logEmail, setLogEmail] = useState("");
  const logInCheck = (logPw) => {
    dispatch(infoAction.logInPw(logPw, userList));
  };
  const onLogIn = async () => {
    try {
      await axios
        .post("http://localhost:8080/api/user/login", {
          userEmail: logIned.logEmail,
          userPw: logIned.logPw,
          userName: logIned.logName,
          userList: userList,
        })
        .then((data) => {
          setLogEmail(data.data.logEmail);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (logIned.logName) navigate("/");
  }, [logIned.logName]);

  return (
    <LogInComp
      dbCheck={dbCheck}
      onLogIn={onLogIn}
      logInCheck={logInCheck}
      logEmail={logIned.logEmail}
    />
  );
};

export default LogInContainer;
