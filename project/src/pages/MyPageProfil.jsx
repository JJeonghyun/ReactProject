import styled from "styled-components";
import Header from "../components/Home/Header";
import ProfilContainer from "../components/User/MyPage/Profil/Container";
import InfoFooter from "../components/User/MyPage/InfoFooter";

const MyPagePage = () => {
  return (
    <>
      <Header />
      <MyPageBox>
        <ProfilContainer />
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
