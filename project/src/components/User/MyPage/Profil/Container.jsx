import axios from "axios";
import { useState } from "react";

import ProfilComp from "./Comp";

const ProfilContainer = ({ replaceFirst, replaceLast }) => {
  const [isModal, setIsModal] = useState(false); // 모달창 띄우기
  const [isAdressModal, setIsAdressModal] = useState(false); // 모달창 띄우기
  const [logEmail, setLogEmail] = useState("");
  const [logFirstName, setLogFirstName] = useState("");
  const [logLastName, setLogLastName] = useState("");

  const modalClick = () => {
    setIsModal(!isModal);
  };
  const adressModalClick = () => {
    setIsAdressModal(!isAdressModal);
  };

  const logInUser = () => {
    axios.post("http://localhost:8080/api/user/logInedUser").then((data) => {
      setLogEmail(data.data.tempUser.userEmail);
      setLogFirstName(data.data.tempUser.userFirstName);
      setLogLastName(data.data.tempUser.userLastName);
    });
  };

  const replaceName = (replaceFirst, replaceLast) => {
    axios
      .post("http://localhost:8080/api/user/replace", {
        logFirstName: replaceFirst,
        logLastName: replaceLast,
      })
      .then((data) => {
        console.log(data.data);
        if (data.data.status == 200) {
          setIsModal(!isModal);
        }
      });
  };

  return (
    <ProfilComp
      replaceName={replaceName}
      modalClick={modalClick}
      adressModalClick={adressModalClick}
      logInUser={logInUser}
      logEmail={logEmail}
      logFirstName={logFirstName}
      logLastName={logLastName}
      isModal={isModal}
      isAdressModal={isAdressModal}
    />
  );
};

export default ProfilContainer;
