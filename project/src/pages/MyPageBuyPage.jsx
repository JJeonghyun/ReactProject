import styled from "styled-components";
import Header from "../components/Home/Header";
import BuyContainer from "../components/User/MyPage/Buy/Container";
import InfoFooter from "../components/User/MyPage/InfoFooter";
import BuyPageContainer from "../components/User/MyPage/BuyPage/Container";
const MyPageBuyPage = () => {
  return (
    <>
      <Header />
      <MyPageBox>
        <BuyContainer>
          <BuyPageContainer />
        </BuyContainer>
      </MyPageBox>
      <InfoFooter />
    </>
  );
};

export default MyPageBuyPage;

const MyPageBox = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;
