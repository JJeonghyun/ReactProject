import styled from "styled-components";
import { Link } from "react-router-dom";
import { Boxbox } from "../../../Common";
import { useEffect } from "react";
const BuyComp = ({ logOut, buyList, created, setTime, getTimeList }) => {
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
        <h2>구매내역</h2>
        <select
          onChange={(e) => {
            setTime(e.target.value);
            getTimeList(e.target.value);
          }}
        >
          {/* <option value={"asd"}>asd</option> */}
          <option value={"전체상품"}>전체상품</option>
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
                  <img src={`${item.Product.productImg}`} />
                  <div>{item.Product.productName}</div>
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
`;
const ItemNumPrice = styled.div`
  display: flex;
  flex-direction: column;
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

const BoughtItemBox = styled.div`
  display: flex;
  margin: 2rem 5rem 3rem 0;
  flex-direction: column;
`;
