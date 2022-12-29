import RegistComp from "./Comp";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userDB";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

const RegistContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);

  const userFirstName = useSelector((state) =>
    state.userDB.map((item) => item.userFirstName)
  );
  const userLastName = useSelector((state) =>
    state.userDB.map((item) => item.userLastName)
  );
  const userPost = useSelector((state) =>
    state.userDB.map((item) => item.userPost)
  );
  const userAddress = useSelector((state) =>
    state.userDB.map((item) => item.userAddress)
  );
  const userAddressDetail = useSelector((state) =>
    state.userDB.map((item) => item.userAddressDetail)
  );
  const userPhone = useSelector((state) =>
    state.userDB.map((item) => item.userPhone)
  );

  const onRegist = (
    userFirstName,
    userLastName,
    userPost,
    userAddress,
    userAddressDetail,
    userPhone
  ) => {
    dispatch(
      action.regist(
        userFirstName,
        userLastName,
        userPost,
        userAddress,
        userAddressDetail,
        userPhone
      )
    );
  };

  const onRegistEmail = (userEmail, userPw) => {
    axios
      .post("/api/user/regist", {
        userEmail,
        userPw,
        userFirstName,
        userLastName,
        userPost,
        userAddress,
        userAddressDetail,
        userPhone,
      })
      .then((data) => {
        dispatch(
          action.registemail(
            userEmail,
            userPw,
            ...userFirstName,
            ...userLastName,
            ...userPost,
            ...userAddress,
            ...userAddressDetail,
            ...userPhone
          )
        );
        navigate("/login");
      });
  };
  return <RegistComp onRegist={onRegist} onRegistEmail={onRegistEmail} />;
};

export default RegistContainer;
