import styled from "styled-components";

const PasswordComp = ({ logPw, setLogPw, password, setPassword, logIn }) => {
  return (
    <PasswordBox>
      <input
        type={password.type}
        value={logPw}
        onInput={(e) => {
          setLogPw(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            logIn(logPw);
          }
        }}
      />
      {password.type === "text" ? (
        <img
          src="/imgs/user/eye.svg"
          alt="eye no"
          onMouseUp={() => {
            setPassword({ type: "password", visible: false });
          }}
        />
      ) : (
        <img
          src="/imgs/user/eye-slash.svg"
          alt="eye slash no"
          onMouseDown={() => {
            setPassword({ type: "text", visible: true });
          }}
        />
      )}
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
