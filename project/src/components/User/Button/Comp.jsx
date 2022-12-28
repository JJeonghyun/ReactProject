import styled from "styled-components";

const ButtonComp = ({ children, onClick, className }) => {
  return (
    <BtnBox
      className={className}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </BtnBox>
  );
};
export default ButtonComp;

const BtnBox = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &.modalUpdate {
    width: 127px;
    pointer-events: none;
    background-color: #3e6ae1;
    color: white;
    opacity: 0.5;
    margin-bottom: 20px;
    &:hover {
      cursor: not-allowed;
    }
    @media only screen and (max-width: 599px) {
      width: 100%;
    }
  }
  &.modalUpdate.on {
    /* width: 30%; */
    pointer-events: auto;
    opacity: 1;
    background-color: #3e6ae1;
    &:hover {
      cursor: pointer;
    }
    @media only screen and (max-width: 599px) {
      width: 100%;
    }
  }

  &.logIn {
    pointer-events: none;
    background-color: #3e6ae1;
    color: white;
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }
  &.logIn.on {
    pointer-events: auto;
    opacity: 1;
    background-color: #3e6ae1;
    &:hover {
      cursor: pointer;
    }
  }
  &.next {
    pointer-events: none;
    color: white;
    background-color: #3e6ae1;
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }
  &.next.on {
    opacity: 1;
    pointer-events: auto;
    &:hover {
      background-color: #3457b1;
      cursor: pointer;
    }
  }
  &.regist {
    background-color: white;
    border: 3px solid black;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
