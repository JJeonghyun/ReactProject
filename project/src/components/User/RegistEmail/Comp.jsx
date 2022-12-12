import { useState } from "react";
import styled from "styled-components";

import ButtonComp from "../Button/Comp";
import PasswordComp from "../Password/Comp";
import circleInfoImg from "./circle-info-solid.svg";

const RegistComponent = ({ onClick }) => {
  const [userEmail, setEmail] = useState("");
  const [userPw, setPw] = useState("");

  return (
    <RegistBox>
      <p className="step">2/2단계</p>
      <h2 className="create"> 계정 생성하기 </h2>
      <p className="registInfo">이메일</p>
      <input type={"text"} />
      <p className="error">올바른 이메일을 입력하세요</p>
      <div className="passwordInput">
        <p>비밀번호</p>
        <div className="passwordInfo">
          <img src={circleInfoImg} alt="" title="Password Tooltip" />
          <p className="pwHover">
            비밀번호는 8자 이상이어야 하며 최소 1개 이상의 숫자와 문자를
            포함해야 합니다.
          </p>
        </div>
      </div>
      <PasswordComp />
      <p className="error">
        비밀번호는 8자 이상이어야 하며 숫자 1개 및 글자 1자 이상을 포함해야
        합니다.
      </p>
      <p className="registInfo">비밀번호 확인</p>
      <input type={"password"} />
      <p className="error">비밀번호 일치하지 않습니다</p>
      <ButtonComp className="next" onClick={() => {}}>
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
  /* .pwInfo {
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    text-align: center;
    color: rgb(10, 10, 10);
    margin: 0;
  } */

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
  /* .passwordInfo > img {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(170, 170, 170);
    background-color: white;
    font-size: 10px;
    width: 16px;
    height: 16px;
    border: 2px solid rgb(180, 180, 180);
    border-radius: 100%;
    cursor: pointer;
  } */

  .passwordInfo > img {
    width: 20px;
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
