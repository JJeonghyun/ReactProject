import styled from "styled-components";

import FirstContainer from "./First/Container";
import SecondContainer from "./Second/Container";

const Body = () => {
  return (
    <BodyBox>
      <FirstContainer />
      <SecondContainer />
    </BodyBox>
  );
};

export default Body;

const BodyBox = styled.div`
  width: 100%;
`;
