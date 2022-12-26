import styled from "styled-components";

const SideBarComp = ({ logOut }) => {
  return (
    <SideBarBox>
      <div className="sideMenuBar">
        <div className="sideNav">
          <p>
            <img src="/imgs/mypage/user.svg" alt="user" />
          </p>
          <p className="icon">운전자 프로필 설정</p>
        </div>
        <div className="sideNav">
          <p>
            <img src="/imgs/mypage/logout.svg" alt="logout" />
          </p>
          <p className="icon" onClick={logOut}>
            로그아웃
          </p>
        </div>
      </div>
    </SideBarBox>
  );
};

export default SideBarComp;

const SideBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 100px auto 0px;
  width: 30%;

  .sideMenuBar {
    width: 300px;
  }
  .sideNav:nth-child(2) {
    margin-top: 30px;
  }
  .sideNav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 18px;
      margin-right: 30px;
    }
    p {
      margin: 0;
    }
    .icon {
      margin: 0;
      font-size: 17px;
      color: rgb(100, 100, 100);
    }
    .icon_on {
      margin: 0;
      font-size: 17px;
      color: rgb(0, 0, 0);
    }
    .icon:hover {
      cursor: pointer;
      color: rgb(0, 0, 0);
    }
  }
`;
