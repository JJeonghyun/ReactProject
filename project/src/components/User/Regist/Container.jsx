// import axios from "axios";

import RegistComp from "./Comp";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userDB";
import { useNavigate } from "react-router";
// action 만든 곳

const RegistContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDB);
  const userFirstName = useSelector((state) =>
    state.userDB.map((item) => item.userFirstName)
  );
  const userLastName = useSelector((state) =>
    state.userDB.map((item) => item.userLastName)
  );
  console.log(user);

  const onRegist = (userFirstName, userLastName) => {
    dispatch(action.regist(userFirstName, userLastName));
    // express server 연결
    // axios.post("http://localhost:8080/api/user/regist", {
    //   userId,
    //   userPw,
    //   userName,
    // });
  };
  const onRegistEmail = (userEmail, userPw) => {
    dispatch(
      action.registemail(userFirstName, userLastName, userEmail, userPw)
    );
    navigate("/login");
  };
  return <RegistComp onRegist={onRegist} onRegistEmail={onRegistEmail} />;
};

export default RegistContainer;
