import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonComp from "../Button/Comp";
// import PasswordComp from "../Password/Comp";

const RegistComponent = ({ onClick }) => {
  const [userList, setUserList] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userConfirmPw, setUserConfirmPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  function onRegist() {
    if (userList.find((item) => item.userEmail === userEmail)) return;
    setUserList([...userList, { userEmail, userPw }]);
  }

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(userEmail)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setUserPw(e.target.value);
    // const regex =
    //   /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    // console.log(regex.test(userPw));
    // if (regex.test(userPw)) {
    setPwValid(true);
    // } else {
    //   setPwValid(false);
    // }
  };

  return (
    <RegistBox>
      <p className="step">2/2단계</p>
      <h2 className="create"> 계정 생성하기 </h2>
      <p className="registInfo">이메일</p>
      <input
        type={"text"}
        value={userEmail}
        onInput={(e) => {
          setUserEmail(e.target.value);
        }}
        onChange={handleEmail}
      />
      {!emailValid && userEmail.length > 0 ? (
        <p className="error">올바른 이메일을 입력하세요</p>
      ) : (
        ""
      )}
      <div className="passwordInput">
        <p className="registInfo">비밀번호</p>
        <div className="passwordInfo">
          <img
            src="/imgs/user/circle-info-solid.svg"
            alt=""
            title="Password Tooltip"
          />
        </div>
      </div>
      <input
        type={"password"}
        value={userPw}
        onInput={(e) => {
          setUserPw(e.target.value);
        }}
        onChange={handlePw}
      />
      <p className="pwHover">
        비밀번호는 8자 이상이어야 하며 최소 1개 이상의 숫자와 문자를 포함해야
        합니다.
      </p>
      {(!pwValid || userPw.length < 8) && userPw ? (
        <p className="error">
          비밀번호는 8자 이상이어야 하며 숫자 1개 및 글자 1자 이상을 포함해야
          합니다.
        </p>
      ) : (
        ""
      )}

      <p className="registInfo">비밀번호 확인</p>
      <input
        type={"password"}
        value={userConfirmPw}
        onInput={(e) => {
          setUserConfirmPw(e.target.value);
        }}
      />
      {userPw && userConfirmPw && userPw != userConfirmPw ? (
        <p className="error">비밀번호 일치하지 않습니다</p>
      ) : (
        ""
      )}
      <ButtonComp
        userList={userList}
        setUserList={setUserList}
        className="next"
        onClick={() => {
          if (!(emailValid && pwValid)) return;
          // onClick(userEmail, userPw);
          // onRegist();
        }}
      >
        계정 생성하기
      </ButtonComp>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  .pwHover {
    position: absolute;
    display: none;
    width: 380px;
    padding: 30px 20px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 12px;
    top: 190px;
    left: 300px;
    color: black;
    text-align: left;
    transition: 5s ease-in-out;
    z-index: 1;
  }
  .passwordInput {
    display: flex;
    align-items: center;
  }
  .passwordInfo {
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    text-align: center;
    color: rgb(10, 10, 10);
    margin: 0;
  }
  .passwordInfo > img {
    width: 20px;
    margin-top: 7px;
    cursor: pointer;
  }
  .passwordInfo:hover .pwHover {
    display: block;
  }
  .registInfo {
    display: flex;
    text-align: left;
    margin-top: 20px;
    font-size: 14px;
  }
  .agree {
    color: rgb(130, 130, 130);
    font-size: 13px;
  }
`;
