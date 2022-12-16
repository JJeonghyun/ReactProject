import { useState } from "react";
import { Link } from "react-router-dom";

import ButtonComp from "../Button/Comp";

const LogInComp = ({ onClick }) => {
  const [logEmail, setLogEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleEmail = (e) => {
    // setLogEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(logEmail)) {
      setEmailValid(true);
    } else if (!regex.test(logEmail) || !logEmail.length) {
      setEmailValid(false);
    }
  };

  return (
    <div>
      <h2> 로그인 </h2>
      <p className="info">
        이메일주소
        <span title="Email Address Tooltip">
          i
          <span className="infoHover">
            더 이상 이용하지 않는 이메일 주소와 계정이 연결되어 있는 경우, Tesla
            계정에 로그인하여 계정 설정에서 이메일 주소를 업데이트하시기
            바랍니다.
          </span>
        </span>
      </p>
      <input
        title="이 입력란을 작성하세요."
        className="emailInput"
        type={"text"}
        value={logEmail}
        onInput={(e) => {
          setLogEmail(e.target.value);
        }}
        onChange={handleEmail}
      />
      {!emailValid ? (
        <p className="error">유효한 이메일 주소를 입력하시기 바랍니다.</p>
      ) : (
        <></>
      )}
      {emailValid ? (
        <Link to={"/logInNext"}>
          <ButtonComp
            className="logIn on"
            onClick={(e) => {
              onClick(logEmail);
            }}
          >
            계속하기
          </ButtonComp>
        </Link>
      ) : (
        <Link to={"/login"}>
          <ButtonComp>계속하기</ButtonComp>
        </Link>
      )}
      <p className="forget">
        <Link to={"/home"}>
          <span>이메일 주소를 잊으셨나요?</span>
        </Link>{" "}
        |
        <Link to={""}>
          <span>비밀번호를 잊으셨나요?</span>
        </Link>
      </p>
      <div className="hr">
        <hr />
        <p>또는</p>
      </div>
      <Link to={"/regist"}>
        <ButtonComp className="regist">계정 생성하기</ButtonComp>
      </Link>
    </div>
  );
};

export default LogInComp;
