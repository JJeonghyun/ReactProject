import IteminfoComponent from "./Comp";
import InfoComponent from "./Info";
import styled from "styled-components";
const IteminfoContainer = () => {
  return (
    <MainBox>
      <div>
        <IteminfoComponent />
      </div>
      <div>
        <InfoComponent />
      </div>
    </MainBox>
  );
};

export default IteminfoContainer;

const MainBox = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  padding: 50px;
  > div:first-child {
    width: 60%;
  }

  > div:last-child {
    width: 40%;
  }
`;
