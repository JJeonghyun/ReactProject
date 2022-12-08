import styled from "styled-components";

import FirstContainer from "./First/Container";
import SecondContainer from "./Second/Container";
import ThirdContainer from "./Third/Container";
import IteminfoContainer from "./Iteminfo/Container";

const Body = () => {
  return (
    <BodyBox>
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <IteminfoContainer />
    </BodyBox>
  );
};

export default Body;

const BodyBox = styled.div`
  width: 100%;
`;
