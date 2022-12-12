import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import ButtonComp from "../Button/Comp";

const RegistComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");

  return (
    <RegistBox>
      <p className="step">1/2단계</p>
      <h2 className="create"> 계정 생성하기 </h2>
      <p className="registInfo">이름</p>
      <input title="이 입력란을 작성하세요." />
      <p className="error">
        문자, 공백, 마침표 및 아포스트로피만 포함하여 이름을 입력하세요
      </p>
      <p className="registInfo">성</p>
      <input title="이 입력란을 작성하세요." />
      <p className="error">
        문자, 공백, 마침표 및 아포스트로피만 포함하여 이름을 입력하세요
      </p>
      <p className="registInfo">이미지의 문자를 입력하세요</p>
      <input />
      <p className="agree">
        계속 진행함으로써 Tesla 계정을 만들기 위한 Tesla의 개인정보 처리방침 및
        이용약관을 이해하고 이에 동의합니다.
      </p>
      <Link to={"/registmail"}>
        <ButtonComp className="next">다음</ButtonComp>
      </Link>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  .registInfo {
    display: flex;
    flex-wrap: wrap;
    width: 350px;
    text-align: left;
    color: red(0, 0, 0);
    margin: 0;
    font-size: 14px;
  }
  .agree {
    color: rgb(130, 130, 130);
    font-size: 13px;
  }
`;
