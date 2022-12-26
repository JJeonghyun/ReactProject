import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductInfoComp from "./Comp";
import axios from "axios";

const ProductInfoContainer = (state) => {
  const item = state.state.state;
  console.log(state);
  const [itemNum, setItemNum] = useState(1);
  const [products, setProducts] = useState([
    { id: "", model: "", name: "", price: "", num: "", info: "", date: "" },
  ]);

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
          <AddCartBtn className="hangle">장바구니에 추가</AddCartBtn>
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
