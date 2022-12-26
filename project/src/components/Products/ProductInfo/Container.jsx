import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductInfoComp from "./Comp";
import axios from "axios";
import Sweetalert2 from "sweetalert2";
const ProductInfoContainer = (state) => {
  const item = state.state.state;
  console.log(state);
  const [itemNum, setItemNum] = useState(1);
  const [products, setProducts] = useState([
    { id: "", model: "", name: "", price: "", num: "", info: "", date: "" },
  ]);

  const cartCheckList = async () => {
    const data = await axios.post("http://localhost:8080/api/cart/list/", {
      payload: {
        name: item.name,
        price: item.price,
        account: item.account,
        img: item.img,
        hoverImg: item.hoverImg,
      },
    });

    if (data.data.already) {
      Sweetalert2.fire({
        title: `이미 장바구니에
    담긴 상품입니다.`,
        text: `OK 누르시면
    이전페이지로 돌아갑니다.`,
        icon: "warning",
        denyButtonText: "확인",
      });
    } else {
      Sweetalert2.fire({
        title: `${item.name}
    상품이 장바구니에 담겼습니다.`,
        text: "OK를 누르시면 이전페이지로 돌아갑니다.",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    try {
      async function fetchData() {}
      fetchData();
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <MainBox>
      <Iteminfo>
        <div>
          <div className="itemTitle">
            <ItemModel> {item?.name} </ItemModel>
            <span className="itemName hangle"></span>
          </div>
          <h4 className="itemPrice">
            ₩{item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div>
          <span className="itemNum hangle">수량</span>
          <NumBox>
            <BtnNum
              onClick={() => {
                setItemNum(itemNum - 1);
              }}
            >
              -
            </BtnNum>
            {itemNum}
            <BtnNum
              onClick={() => {
                setItemNum(itemNum + 1);
              }}
            >
              +
            </BtnNum>
          </NumBox>
        </div>
        <div>
          <AddCartBtn
            className="hangle"
            onClick={() => {
              cartCheckList();
            }}
          >
            장바구니에 추가
          </AddCartBtn>
        </div>
      </Iteminfo>
      <ProductInfoComp item={item}></ProductInfoComp>
    </MainBox>
  );
};

export default ProductInfoContainer;

const Fbox = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

const MainBox = styled.div`
  padding: 25px;
  padding-top: 0;
`;

const BtnNum = styled.button`
  width: 20px;
  background: none;
  border: none;
  font-weight: Bold;
  font-size: 20px;
  opacity: 0.4;
`;

const NumBox = styled.div`
  display: flex;
  font-weight: Bold;
  font-size: 20px;
  align-items: center;
  justify-content: flex-start;
  > Button {
    margin-left: 10px;
    margin-right: 10px;
  }
  > Button:first-child {
    margin-left: 0;
  }
`;

const AddCartBtn = styled.button`
  width: 95%;
  padding: 1rem;
  background-color: #3e6ae1;
  color: white;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
`;

const Iteminfo = styled.div`
  > div {
    margin-bottom: 15px;
  }
  > div:last-child {
    margin-bottom: 45px;
  }
`;

const ItemModel = styled.span``;
