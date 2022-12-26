import RegistComp from "./Comp";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userDB";
import { useNavigate } from "react-router";
import axios from "axios";

const RegistContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userFirstName = useSelector((state) =>
    state.userDB.map((item) => item.userFirstName)
  );
  const userLastName = useSelector((state) =>
    state.userDB.map((item) => item.userLastName)
  );

  const onRegist = (
    userFirstName,
    userLastName,
    userAddress,
    userAddressDetail,
    userPhone
  ) => {
    dispatch(
      action.regist(
        userFirstName,
        userLastName,
        userAddress,
        userAddressDetail,
        userPhone
      )
    );
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
        dispatch(
          action.registemail(
            userEmail,
            userPw,
            ...userFirstName,
            ...userLastName
          )
        );
        navigate("/login");
      });
  };
  return <RegistComp onRegist={onRegist} onRegistEmail={onRegistEmail} />;
};

export default RegistContainer;
