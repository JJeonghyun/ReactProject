import { useState } from "react";
import styled from "styled-components";

import ButtonComp from "../Button/Component";
import PasswordComp from "../Password/Component";
import circleInfoImg from "./circle-info-solid.svg";

const RegistComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");

  return (
    <RegistBox>
      <p className="step">2/2단계</p>
      <h2 className="create"> 계정 생성하기 </h2>
      <p className="registInfo">이메일</p>
      <input type={"text"} />
      <p className="error">올바른 이메일을 입력하세요</p>
      <div className="passwordInfo">
        <span className="registInfo">비밀번호</span>
        <img src={circleInfoImg} alt="" title="Password Tooltip" />
      </div>
      <span className="pwHover">
        비밀번호는 8자 이상이어야 하며 최소 1개 이상의 숫자와 문자를 포함해야
        합니다.
      </span>
      <PasswordComp />
      <p className="error">
        비밀번호는 8자 이상이어야 하며 숫자 1개 및 글자 1자 이상을 포함해야
        합니다.
      </p>
      <p className="registInfo">비밀번호 확인</p>
      <input type={"password"} />
      <p className="error">비밀번호 일치하지 않습니다</p>
      <ButtonComp className="next">계정 생성하기</ButtonComp>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  .pwHover {
    width: 100%;
    display: none;
  }
  .passwordInfo {
    width: 20%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      width: 20px;
      display: flex;
      align-items: center;
      margin-top: 3px;
      cursor: pointer;
    }
  }
  .passwordInfo > img:hover .pwHover {
    display: block;
  }
  .registInfo {
    display: flex;
    text-align: left;
    margin: 0;
    font-size: 14px;
  }
  .passwordInfo > span:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border: 2px solid rgb(130, 130, 130);
    border-radius: 100%;
    font-size: 10px;
  }
  .agree {
    color: rgb(130, 130, 130);
    font-size: 13px;
  }
`;
