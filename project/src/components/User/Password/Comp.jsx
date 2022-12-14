import { useState } from "react";
import styled from "styled-components";

const PasswordComp = ({ logPw, setLogPw, password, setPassword }) => {
  const togglePassword = (e) => {
    setPassword(() => {
      if (!password.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  return (
    <PasswordBox>
      <input
        type={"password"}
        value={logPw}
        onInput={(e) => {
          setLogPw(e.target.value);
        }}
      />
      <img src="/imgs/user/eye.svg" alt="eye no" onClick={togglePassword} />
      <img
        src="/imgs/user/eye-slash.svg"
        alt="eye slash no"
        onClick={() => {}}
      />
    </PasswordBox>
  );
};

export default PasswordComp;

const PasswordBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: 10px 0px 0px 0px;
  input {
    margin: 0;
  }
  img {
    position: absolute;
    margin-left: 310px;
    cursor: pointer;
  }
`;
