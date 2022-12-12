import styled from "styled-components";
import "../../../font/font.css";
const AppageHeader = () => {
  return (
    <>
      <HeaderBox>
        <Logo>tesla</Logo>
        <div>ModelS</div>
        <div>Modle3</div>
        <div>Modelx</div>
        <div>Modely</div>
        <div>cybertruck</div>
      </HeaderBox>
    </>
  );
};
export default AppageHeader;
const HeaderBox = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  opacity: 0.1px;
  border: 1px solid black;
  z-index: 3;
  font-family: "tesla";
`;
const Logo = styled.div`
  display: flex;
  font-size: 24px;
`;
