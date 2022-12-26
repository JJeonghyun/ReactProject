import styled from "styled-components";
import Header from "../components/Home/Header";
import BuyContainer from "../components/User/MyPage/Buy/Container";
import InfoFooter from "../components/User/MyPage/InfoFooter";

const MyPagePage = () => {
  return (
    <>
      <Header />
      <MyPageBox>
        <BuyContainer />
      </MyPageBox>
      <InfoFooter />
    </>
  );
};

export default MyPagePage;

const MyPageBox = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;
