import { useState } from "react";
import styled from "styled-components";

const ApparelComp = () => {
  const [cloth, setCloth] = useState([]);
  return (
    <ApparelBox>
      <div>
        <div>
          <img src="./imgs/apparelImg1.jpg" alt="" />
        </div>
        <div>
          <div>남성의류</div>
          <div>지금 쇼핑하기</div>
        </div>
      </div>
      <div>
        <div>
          <img src="./imgs/apparelImg2.jpg" alt="" />
        </div>
        <div>
          <div>여성의류</div>
          <div>지금 쇼핑하기</div>
        </div>
      </div>
    </ApparelBox>
  );
};

export default ApparelComp;

const ApparelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & > div {
    width: 49%;
    position: relative;
    & > div {
      width: 100%;
      & > img {
        width: 100%;
      }
    }
    & > div:last-child {
      position: absolute;
      bottom: 10%;
      text-align: center;
      & > div {
        padding: 5px 0;
      }
      & > div:last-child {
        border: 3px solid black;
        width: fit-content;
        margin: 0 auto;
        padding: 10px 40px;
        border-radius: 10px;
      }
    }
  }
`;
