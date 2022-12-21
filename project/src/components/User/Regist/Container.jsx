import RegistComp from "./Comp";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userDB";
import { useNavigate } from "react-router";

import axios from "axios";

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
  };
  const onRegistEmail = (userEmail, userPw) => {
    axios
      .post("http://localhost:8080/api/user/regist", {
        userEmail,
        userPw,
        userFirstName,
        userLastName,
      })
      .then((data) => {
        console.log(data);
        dispatch(
          action.registemail(
            userEmail,
            userPw,
            ...userFirstName,
            ...userLastName
          )
        );
      })
      .then((data) => {
        console.log(data);
        navigate("/login");
      });
  };
  return <RegistComp onRegist={onRegist} onRegistEmail={onRegistEmail} />;
};

export default RegistContainer;
