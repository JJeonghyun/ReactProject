// import axios from "axios";

import RegistComp from "./Comp";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userDB";
// action 만든 곳

const RegistContainer = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.userDB.userEmail);
  const userPw = useSelector((state) => state.userDB.userPw);
  const onClick = (userFirstName, userLastName) => {
    dispatch(action.regist(userFirstName, userLastName, userEmail, userPw));
    // express server 연결
    // axios.post("http://localhost:8080/api/user/regist", {
    //   userId,
    //   userPw,
    //   userName,
    // });
  };
  return <RegistComp onClick={onClick} />;
};

export default RegistContainer;
