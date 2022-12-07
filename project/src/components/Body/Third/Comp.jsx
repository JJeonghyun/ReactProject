import { useState } from "react";
import styled from "styled-components";

const ThirdComp = () => {
  const [tempArr, setArr] = useState([
    { img: "/imgs/thirdImg1.jpg", title: "모델 S 악세서리" },
    { img: "/imgs/thirdImg2.jpg", title: "모델 3 악세서리" },
    { img: "/imgs/thirdImg3.jpg", title: "모델 X 악세서리" },
    { img: "/imgs/thirdImg4.jpg", title: "모델 Y 악세서리" },
    { img: "/imgs/thirdImg5.jpg", title: "충전 중" },
  ]);
  const [btnName, setName] = useState("지금 쇼핑하기");
  return (
    <>
      {tempArr.map((item, index) => (
        <ThirdBox>
          <div key={`thirdbox-${index}`}>
            <img src={item.img} />
          </div>
          <div key={`thirdtex-${index}`}>
            <div key={`thirdinner-${index}`}>{item.title}</div>
            <div key={`thirdinner-${index}`}>{btnName}</div>
          </div>
        </ThirdBox>
      ))}
    </>
  );
};

export default ThirdComp;

const ThirdBox = styled.div`
  position: relative;
  width: 100%;
  & > div {
    width: 100%;
    & > img {
      width: 100%;
      height: 95vh;
    }
    &:last-child {
      position: absolute;
      bottom: 13%;
      color: white;
      & > div {
        text-align: center;
        &:first-child {
          font-size: 2rem;
          margin-bottom: 15px;
        }
        &:last-child {
          padding: 15px 0;
          background-color: white;
          color: black;
          width: 15%;
          margin: 0 auto;
          border-radius: 10px;
        }
      }
    }
  }
`;
