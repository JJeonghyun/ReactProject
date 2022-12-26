import styled from "styled-components";
import "./order.css";
import { Boxbox } from "../../Common";
const OrderComp = ({ totalState, checkOut }) => {
  return (
    <OrderBox>
      <div>
        <h3>주문 요약</h3>
      </div>

      <Fbox>
        <div className="small">배송비</div>
        <div className="small">무료</div>
      </Fbox>
      <Fbox>
        <div>소계</div>
        <div>
          ₩{totalState.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      </Fbox>
      <div className="small">부가세(VAT) 포함 금액</div>
      <div className="agree">
        <div>계속 진행함으로써,</div>
        <div>
          <input type={"checkbox"} name={"agree"} />{" "}
          <a className="agreeLink">개인정보 처리방침</a>을 이해했으며
          동의합니다.
        </div>
        <div>
          <input type={"checkbox"} name={"agree"} />{" "}
          <a className="agreeLink">온라인 액세서리 판매 일반 이용 약관</a>,{" "}
          <a className="agreeLink">이용 약관</a>
        </div>
      </div>
      <div>
        <CheckOutBtn
          onClick={() => {
            checkOut();
          }}
        >
          체크아웃
        </CheckOutBtn>
      </div>
    </OrderBox>
  );
};

export default OrderComp;

const OrderBox = styled.div`
  box-shadow: 0px 5px 15px lightgray;
  display: flex;
  flex-direction: column;
  padding: 2vw;
  font-size: 1.1rem;
  > div {
    margin-bottom: 20px;
  }
  width: 100%;
`;

const Fbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckOutBtn = styled.button`
  width: 100%;
  padding: 0.7rem;
  background-color: #3e6ae1;
  color: white;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
`;
