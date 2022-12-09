import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonComp from "../Button/Component";
import PasswordComp from "../Password/Component";

const LogInComponent = ({ onClick }) => {
  return (
    <LogNextBox>
      <h2> 로그인 </h2>
      <p className="logerror">
        <span className="mark">!</span> 인식할 수 없는 로그인 조합입니다
      </p>
      <p className="adress">
        <span className="info">이메일주소</span>
        <Link to={"/login"}>
          <span className="change">변경하기</span>
        </Link>
      </p>
      <p className="info">비밀번호</p>
      <PasswordComp />
      <ButtonComp className="logIn">로그인</ButtonComp>
      <p className="forgetpw">비밀번호를 잊으셨나요?</p>
      <div className="hr">
        <hr />
        <p>또는</p>
      </div>
      <Link to={"/regist"}>
        <ButtonComp
          className="regist"
          onClick={() => {
            onClick();
          }}
        >
          계정 생성하기
        </ButtonComp>
      </Link>
    </LogNextBox>
  );
};

export default LogInComponent;

const LogNextBox = styled.div`
  .logerror {
    width: 100%;
    height: 60px;
    font-size: 14px;
    background-color: rgb(240, 240, 240);
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin: 10px 0px 10px 0px;
  }
  .mark {
    width: 20px;
    height: 20px;
    background-color: red;
    color: white;
    border-radius: 100%;
    font-size: 12px;
    margin: 0px 10px 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .change {
    color: rgb(100, 100, 100);
    text-decoration: dashed;
    font-size: 14px;
  }
  .adress {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;
  }
  .forgetpw {
    width: 100%;
    text-align: center;
    text-decoration: dashed;
    font-size: 14px;
  }
`;
