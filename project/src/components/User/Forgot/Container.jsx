import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ForgotComp from "./Comp";

const ForgotContainer = () => {
  const userList = useSelector((state) => state.userDB);
  const navigate = useNavigate();

  const EmailList = async (forgotEmail, setLayer) => {
    await axios
      .post("/api/user/forgot", { email: forgotEmail })
      .then((data) => {
        if (data.data.status == 200) {
          setLayer((prev) => (prev === 1 ? 2 : 1));
        } else {
          alert("이메일 주소를 다시 확인해 주세요");
        }
      });
  };

  const replacePwFunc = async (forgotEmail, replacePw) => {
    await axios
      .post("/api/user/forgotPw", {
        email: forgotEmail,
        password: replacePw,
      })
      .then((data) => {
        if (data.data.status == 200) {
          navigate("/login");
        }
      });
  };

  return (
    <ForgotComp
      EmailList={EmailList}
      userEmail={userList.userEmail}
      userPw={userList.userPw}
      replacePwFunc={replacePwFunc}
    ></ForgotComp>
  );
};

export default ForgotContainer;
