import styled from "styled-components";
import { Link } from "react-router-dom";
const BuyComp = ({
  logOut,
  buyList,
  created,
  setTime,
  getTimeList,
  isHiddenModal,
  hiddenModalClick,
}) => {
  return (
    <>
      {isHiddenModal ? (
        <HiddenModalBox>
          <div>
            <div className="sideNav">
              <p className="iconImg">
                <img src="/imgs/mypage/user.svg" alt="user" />
              </p>
              <Link to={"/mypageprofil"}>
                <p className="icon">운전자 프로필 설정</p>
              </Link>
            </div>
            <div className="sideNav" onClick={hiddenModalClick}>
              <p className="iconImg">
                <img src="/imgs/mypage/bag-check.svg" alt="user" />
              </p>
              <Link to={"/mypagebuy"}>
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
        </HiddenModalBox>
      ) : (
        <></>
      )}
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
              <></>
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
        <SideBarHiddenBox>
          <div className="dropMenuBar">
            <div className="sideNav">
              <p>
                <img src="/imgs/mypage/user.svg" alt="user" />
              </p>
              <p className="icon">구매내역</p>
              <p className="iconImg" onClick={hiddenModalClick}>
                <img src="/imgs/mypage/down.svg" alt="down" />
              </p>
            </div>
          </div>
        </SideBarHiddenBox>
        <h2>구매내역</h2>
        <select
          onChange={(e) => {
            setTime(e.target.value);
            getTimeList(e.target.value);
          }}
        >
          {/* <option value={"asd"}>asd</option> */}
          <option value={"전체상품"}>------- 전체상품 -------</option>
          {[...created].map((item, index) => (
            <option value={item} key={index}>
              {new Date(item).toLocaleString()}
            </option>
          ))}
        </select>
        <BoughtItemBox>
          {buyList?.map((item, index) => {
            return (
              <ItemBox key={index}>
                <ItemImg>
                  {item.Product.productImg.includes("/imgs") ? (
                    <img src={`${item.Product.productImg}`} />
                  ) : (
                    <img src={`/upload/${item.Product.productImg}`} />
                  )}
                  <div style={{ display: "block" }}>
                    {item.Product.productName}
                  </div>
                </ItemImg>

                <ItemNumPrice>
                  <ItemPrice>
                    ₩
                    {item.Product.productPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </ItemPrice>
                  <ItemNum>수량 {item.account}개</ItemNum>
                  <>----------</>
                  <div>
                    총 금액:₩
                    {(item.account * item.Product.productPrice)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </ItemNumPrice>
              </ItemBox>
            );
          })}
        </BoughtItemBox>
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
  overflow: auto;

  select {
    width: 200px;
    height: 30px;
    margin-top: 10px;
    text-align: center;
  }

  @media only screen and (max-width: 1199px) {
    h2 {
      display: none;
    }
    select {
      margin-top: 50px;
      width: 200px;
      height: 30px;
      text-align: center;
    }
  }
`;

const ItemNum = styled.div`
  display: flex;
`;
const ItemPrice = styled.div`
  display: flex;
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  :last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
const ItemImg = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  > img {
    width: 10rem;
  }
  gap: 2rem;
  > div {
    @media only screen and (max-width: 1024px) {
      text-overflow: ellipsis;
      font-size: 1rem;
      overflow: hidden;
      white-space: nowrap;
      display: none;
    }

    @media only screen and (max-width: 425px) {
      text-overflow: ellipsis;
      font-size: 1rem;
      overflow: hidden;
      white-space: nowrap;
      display: none;
      width: 110px;
    }
  }
  @media only screen and (max-width: 425px) {
    display: block;
    text-overflow: ellipsis;
    font-size: 1rem;
    overflow: hidden;
    white-space: nowrap;
  }
`;
const ItemNumPrice = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 425px) {
    // display: none;
    margin: auto;
  }
  > div {
    @media only screen and (max-width: 425px) {
      font-size: 10px;
    }
  }
`;
const SideBarBox = styled.div`
  @media only screen and (max-width: 1199px) {
    display: none;
  }
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

const BoughtItemBox = styled.div`
  display: flex;
  margin: 2rem 5rem 3rem 0;
  flex-direction: column;
`;

const HiddenModalBox = styled.div`
  @media only screen and (max-width: 1199px) {
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 250, 0.6);
    backdrop-filter: blur(0.5rem);
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;
    color: rgb(0, 0, 0);
    font-size: 25px;
    a {
      color: rgb(0, 0, 0);
      text-decoration: none;
    }
    img {
      width: 20px;
    }
    .sideNav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0px 20px 30px 50px;
      &:hover {
        background-color: white;
      }
      img {
        width: 22px;
        margin-right: 30px;
      }
      p {
        margin: 0;
      }
    }
    & div {
      display: inline-block;
    }
  }
  display: none;
  @media only screen and (max-width: 465px) {
    font-size: 17px;
  }
`;

const SideBarHiddenBox = styled.div`
  display: none;
  @media only screen and (max-width: 1199px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: auto;
    width: 100%;
    a {
      text-decoration: none;
    }
    .dropMenuBar {
      width: 400px;
      height: 30px;
      overflow-y: hidden;
    }
    .sideNav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 20px;
        margin-right: 30px;
      }
      .iconImg {
        margin-left: 30px;
      }
      p {
        margin: 0;
      }
      .icon {
        margin: 0;
        font-size: 25px;
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
  }
`;
