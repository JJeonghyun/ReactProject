import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfilComp from "./Comp";

const ProfilContainer = () => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false); // 모달창 띄우기
  const [isAdressModal, setIsAdressModal] = useState(false); // 모달창 띄우기
  const [logEmail, setLogEmail] = useState("");
  const [logFirstName, setLogFirstName] = useState("");
  const [logLastName, setLogLastName] = useState("");
  const [logAddress, setLogAddress] = useState("");
  const [logAddressDetail, setLogAddressDetail] = useState("");
  const [logPhone, setLogPhone] = useState("");

  const modalClick = () => {
    setIsModal(!isModal);
  };
  const addressModalClick = () => {
    setIsAdressModal(!isAdressModal);
  };

  const logInUser = () => {
    axios.post("http://localhost:8080/api/user/logInedUser").then((data) => {
      setLogEmail(data.data.tempUser.userEmail);
      setLogFirstName(data.data.tempUser.userFirstName);
      setLogLastName(data.data.tempUser.userLastName);
      setLogAddress(data.data.tempUser.userAddress);
      setLogAddressDetail(data.data.tempUser.userAddressDetail);
      setLogPhone(data.data.tempUser.userPhone);
    });
  };

  const replaceName = (replaceFirst, replaceLast) => {
    axios
      .post("http://localhost:8080/api/user/replace", {
        firstName: replaceFirst,
        lastName: replaceLast,
      })
      .then((data) => {
        // console.log(data.data);
        if (data.data.status == 200) {
          setIsModal(!isModal);
          logInUser();
        }
      });
  };

  const replaceAddress = (address, addressDetail, phone) => {
    axios
      .post("http://localhost:8080/api/user/replaceAddress", {
        userAddress: address,
        userAddressDetail: addressDetail,
        userPhone: phone,
      })
      .then((data) => {
        // console.log(data.data);
        if (data.data.status == 200) {
          setIsAdressModal(!isAdressModal);
          logInUser();
        }
      });
  };

  const userDelete = (logEmail) => {
    axios
      .post("http://localhost:8080/api/user/userDelete", {
        email: logEmail,
      })
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .then(() => {
        window.location.reload();
      });
  };

  const logOut = () => {
    try {
      axios
        .get("http://localhost:8080/api/user/logout")
        .then((data) => {
          navigate("/");
        })
        .then(() => {
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ProfilComp
      logOut={logOut}
      replaceName={replaceName}
      modalClick={modalClick}
      addressModalClick={addressModalClick}
      logInUser={logInUser}
      logEmail={logEmail}
      logFirstName={logFirstName}
      logLastName={logLastName}
      isModal={isModal}
      isAdressModal={isAdressModal}
      userDelete={userDelete}
      logAddress={logAddress}
      logAddressDetail={logAddressDetail}
      logPhone={logPhone}
      replaceAddress={replaceAddress}
    />
  );
};

export default ProfilContainer;
