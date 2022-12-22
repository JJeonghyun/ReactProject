import styled from "styled-components";
import { useState } from "react";

import ButtonComp from "../Button/Comp";
import Captcha from "../Captcha/Comp";

const ForgotComp = () => {
  const [layer, setLayer] = useState(1);
  const [forgotEmail, setforgotEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleEmail = () => {
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(forgotEmail)) {
      setEmailValid(true);
    } else if (!regex.test(forgotEmail) || !forgotEmail.length) {
      setEmailValid(false);
    }
  };
  return (
    <div>
      {layer === 1 ? (
        <ForgotBox>
          <h2>비밀번호 재설정하기</h2>
          <p>Tesla 계정에 연결된 이메일 주소를 입력하시기 바랍니다.</p>
          <p>이메일</p>
          <input
            type={"text"}
            className="emailInput"
            value={forgotEmail}
            onInput={(e) => {
              setforgotEmail(e.target.value);
            }}
            onChange={handleEmail}
          />
          {forgotEmail && !emailValid ? (
            <p className="error">유효한 이메일 주소를 입력하시기 바랍니다.</p>
          ) : (
            <p></p>
          )}
          <Captcha className="captcha" />
          {forgotEmail ? (
            <ButtonComp
              className="next on"
              onClick={() => {
                setLayer((prev) => (prev === 1 ? 2 : 1));
              }}
            >
              제출하기
            </ButtonComp>
          ) : (
            <ButtonComp>제출하기</ButtonComp>
          )}
        </ForgotBox>
      ) : (
        <ForgotBox>
          <h2>새 비밀번호 만들기</h2>
          <p>
            1개의 문자와 숫자를 포함한 최소 8자 이상의 유효한 비밀번호를
            입력합니다
          </p>
          <p>이메일</p>
          <span>{forgotEmail}</span>
          <p>새 비밀번호</p>
          <input type={"password"} />
          <p>새 비밀번호 확정하기</p>
          <input type={"password"} />
          <ButtonComp className="next on">제출하기</ButtonComp>
          <ButtonComp
            onClick={() => {
              setLayer((prev) => (prev === 1 ? 2 : 1));
            }}
          >
            취소
          </ButtonComp>
        </ForgotBox>
      )}
    </div>
  );
};

export default ForgotComp;

const ForgotBox = styled.div`
  width: 100%;
  p {
    margin: 30px 0 0 0;
    font-size: 15px;
  }
  .captcha {
    margin-top: 10px;
  }
`;
