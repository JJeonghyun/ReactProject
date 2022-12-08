import IteminfoContainer from "./Iteminfo/Container";
import styled from "styled-components";
const Body = () => {
  return (
    <>
      <MainBox>
        <IteminfoContainer />
      </MainBox>
    </>
  );
};

export default Body;

const MainBox = styled.div`
  font-family: "tesla";
`;
