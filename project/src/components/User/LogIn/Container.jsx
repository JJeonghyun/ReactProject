import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComp from "./Comp";
import { action } from "../../../modules/userInfo";

const LogInContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userDB);
  const logIned = useSelector((state) => state.userInfo);
  const [logEmail, setLogEmail] = useState("");
  const [logPw, setLogPw] = useState("");

  // const onLogInPw = (logPw) => {
  //   dispatch(action.logInPw(logPw));
  //   axios
  //     .post("http://localhost:8080/api/user/login", {
  //       userPw: logIned.logPw,
  //       userList: userList,
  //     })
  //     .then((data) => {
  //       setLogPw(data.data.logPw);
  //     });
  // };

  // const onLogIn = (logEmail) => {
  //   dispatch(action.logInEmail(logEmail, userList));
  //   axios
  //     .post("http://localhost:8080/api/user/login", {
  //       userEmail: logIned.logEmail,
  //       userList: userList,
  //     })
  //     .then((data) => {
  //       setLogEmail(data.data.logEmail);
  //     });
  // };

  const logIn = (logEmail, logPw) => {
    dispatch(action.logInEmail(logEmail, userList));
    dispatch(action.logInPw(logPw, userList));
    axios
      .post("http://localhost:8080/api/user/login", {
        userEmail: logIned.logEmail,
        userPw: logIned.logPw,
        userList: userList,
      })
      .then((data) => {
        console.log(data);
        if (userList.userEmail === logIned.logEmail) {
          navigate("/");
        }
      });
  };

  // useEffect(() => {
  //   if (logIned.logName) navigate("/");
  // }, [logIned.logName]);

  return (
    <LogInComp
      // onLogIn={onLogIn}
      // onLogInPw={onLogInPw}
      logIn={logIn}
      logEmail={logIned.logEmail}
      logPw={logIned.logPw}
    />
  );
};

export default LogInContainer;
