import styled from "styled-components";

import eyeImg from "./eye.svg";
import eyeSlashImg from "./eye-slash.svg";

const PasswordComp = () => {
  return (
    <PasswordBox>
      <input type={"password"} />
      <img src={eyeImg} alt="" />
      <img src={eyeSlashImg} alt="" />
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
