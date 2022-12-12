import styled from "styled-components";
import { useEffect, useState } from "react";
const AppageBody = () => {
  return (
    <>
      <Body></Body>
    </>
  );
};
export default AppageBody;
const Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url("./imgs/Appage/background/Background_modelY.gif");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.88;
`;
