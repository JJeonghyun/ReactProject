import { Link } from "react-router-dom";

import styled from "styled-components";
import ButtonComp from "../Button/Component";

const LogInComponent = ({ onClick }) => {
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
      <input title="이 입력란을 작성하세요." className="emailInput" />
      <p className="error">유효한 이메일 주소를 입력하시기 바랍니다.</p>
      <Link to={"/logInNext"}>
        <ButtonComp className="logIn">계속하기</ButtonComp>
      </Link>
      <p className="forget">
        <span>이메일 주소를 잊으셨나요?</span> |
        <span>비밀번호를 잊으셨나요?</span>
      </p>
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
    </div>
  );
};

export default LogInComponent;

const LogInBox = styled.div``;
