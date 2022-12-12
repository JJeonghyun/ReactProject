import { useState } from "react";
import { Link } from "react-router-dom";

import ButtonComp from "../Button/Comp";

const LogInComp = ({ onClick }) => {
  const [userEmail, setEmail] = useState("");

  // const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   const emailRegex =
  //     /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  //   const emailCurrent = e.target.value
  //   setEmail(emailCurrent)

  //   if (!emailRegex.test(emailCurrent)) {
  //     setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ')
  //     setIsEmail(false)
  //   } else {
  //     setEmailMessage('올바른 이메일 형식이에요 : )')
  //     setIsEmail(true)
  //   }
  // }, [])

  // useEffect(() => {
  //   setId(userId.length ? userId.match(/[a-z]/gi)?.join("") : "");
  //   if (userId.length < 5) setAbleId(false);
  //   else setAbleId(true);
  // }, [userId]);

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
        value={userEmail}
        onInput={(e) => {
          setEmail(e.target.value);
        }}
      />
      {!userEmail || (
        <p className="error">유효한 이메일 주소를 입력하시기 바랍니다.</p>
      )}
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
            onClick(userEmail);
          }}
        >
          계정 생성하기
        </ButtonComp>
      </Link>
    </div>
  );
};

export default LogInComp;
