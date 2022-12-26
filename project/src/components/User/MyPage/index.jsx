import styled from "styled-components";

import SideBarContainer from "../MyPage/SideBar/Container";
import ProfilContainer from "../MyPage/Profil/Container";

const MyPageComp = () => {
  return (
    <>
      <MyPageBox>
        <SideBarContainer />
        <ProfilContainer />
      </MyPageBox>
    </>
  );
};

export default MyPageComp;

const MyPageBox = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;
