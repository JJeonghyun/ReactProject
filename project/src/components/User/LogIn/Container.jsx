import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComp from "./Comp";
import { action } from "../../../modules/userInfo";
// import axios from "axios";

const LogInContainer = ({ userName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = (userEmail, userPw) => {
    dispatch(action.logIn(userEmail, userPw, userName));

    // axios.post("http://localhost:8080/api/user/login", {
    //   userId,
    //   userPw,
    // });
  };

  useEffect(() => {
    if (userName) navigate("");
  }, [userName]);

  return <LogInComp onClick={onClick} />;
};

export default LogInContainer;
