import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonComp from "../Button/Comp";
import PasswordComp from "../Password/Comp";

const LogInComp = ({ dbCheck, logIn, dispatchLogEmail, dispatchFuncPw }) => {
  const [logEmail, setLogEmail] = useState("");
  const [logPw, setLogPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [layer, setLayer] = useState(1);
  const [password, setPassword] = useState({
    type: "password",
    visible: false,
  });

  useEffect(() => {
    dbCheck();
  }, []);

  useEffect(() => {
    dispatchLogEmail(logEmail);
  }, [logEmail]);
  useEffect(() => {
    dispatchFuncPw(logPw);
  }, [logPw]);

  const handleEmail = () => {
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(logEmail)) {
      setEmailValid(true);
    } else if (!regex.test(logEmail) || !logEmail.length) {
      setEmailValid(false);
    }
  };
  useEffect(() => {
    dbCheck();
  }, []);

  return (
    <div>
      {layer === 1 ? (
        <div>
          <h2> 로그인 </h2>
          <p className="info">
            이메일주소
            <span title="Email Address Tooltip">
              i
              <span className="infoHover">
                더 이상 이용하지 않는 이메일 주소와 계정이 연결되어 있는 경우,
                Tesla 계정에 로그인하여 계정 설정에서 이메일 주소를
                업데이트하시기 바랍니다.
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
          {logEmail && !emailValid ? (
            <p className="error">유효한 이메일 주소를 입력하시기 바랍니다.</p>
          ) : (
            <></>
          )}
          {emailValid ? (
            <ButtonComp
              className="logIn on"
              onClick={() => {
                setLayer((prev) => (prev === 1 ? 2 : 1));
              }}
            >
              계속하기
            </ButtonComp>
          ) : (
            <ButtonComp>계속하기</ButtonComp>
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
      ) : (
        <LogNextBox>
          <h2> 로그인 </h2>
          {/* {
            <p className="logerror">
              <span className="mark">!</span> 인식할 수 없는 로그인 조합입니다
            </p>
          } */}
          <p className="adress">
            <span className="info">{logEmail}</span>
            <Link to={"/login"}>
              <span className="change">변경하기</span>
            </Link>
          </p>
          <p className="info">비밀번호</p>
          <PasswordComp
            logPw={logPw}
            setLogPw={setLogPw}
            password={password}
            setPassword={setPassword}
          />
          {logPw ? (
            <ButtonComp
              className="logIn on"
              onClick={() => {
                logIn();
              }}
            >
              로그인
            </ButtonComp>
          ) : (
            <ButtonComp className="logIn">로그인</ButtonComp>
          )}
          <Link>
            <p className="forgetpw">비밀번호를 잊으셨나요?</p>
          </Link>
          <div className="hr">
            <hr />
            <p>또는</p>
          </div>
          <Link to={"/regist"}>
            <ButtonComp className="regist">계정 생성하기</ButtonComp>
          </Link>
        </LogNextBox>
      )}
    </div>
  );
};

export default LogInComp;

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
    padding-bottom: 10px;
    font-size: 13px;
    margin-top: 10px;
    color: black;
  }
`;
