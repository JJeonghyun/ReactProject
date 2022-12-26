import styled from "styled-components";
import { Link } from "react-router-dom";

const BuyComp = ({ logOut }) => {
  return (
    <>
      <SideBarBox>
        <div className="sideMenuBar">
          <div className="sideNav">
            <p className="iconImg">
              <img src="/imgs/mypage/user.svg" alt="user" />
            </p>
            <Link to={"/mypageprofil"}>
              <p className="icon">운전자 프로필 설정</p>
            </Link>
          </div>
          <div className="sideNav">
            <p className="iconImg">
              <img src="/imgs/mypage/bag-check.svg" alt="user" />
            </p>
            <Link to={"/buypage"}>
              <p className="icon">구매내역</p>
            </Link>
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
      <BuyBox>
        <h2>구매내역</h2>
      </BuyBox>
    </>
  );
};

export default BuyComp;

const BuyBox = styled.div`
  width: 70%;
  display: block;
  margin: 100px auto 0px;
  font-size: 15px;
  height: 80vh;
`;
const SideBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 100px auto 0px;
  width: 30%;
  a {
    text-decoration: none;
  }
  .sideMenuBar {
    width: 300px;
  }
  .sideNav:nth-child(2) {
    margin-top: 30px;
  }
  .sideNav:nth-child(3) {
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
