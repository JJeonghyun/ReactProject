import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ApparelContainer from "./Apparel/Container";

const ThirdComp = () => {
  const [tempArr, setArr] = useState([
    {
      img: "/imgs/thirdImg1.jpg",
      title: "모델 S 악세서리",
      category: "charge",
    },
    {
      img: "/imgs/thirdImg2.jpg",
      title: "모델 3 악세서리",
      category: "charge",
    },
    {
      img: "/imgs/thirdImg3.jpg",
      title: "모델 X 악세서리",
      category: "charge",
    },
    {
      img: "/imgs/thirdImg4.jpg",
      title: "모델 Y 악세서리",
      category: "charge",
    },
    { img: "/imgs/thirdImg5.jpg", title: "충전 중", category: "acc" },
  ]);
  const [btnName, setName] = useState("지금 쇼핑하기");
  return (
    <>
      {tempArr.map((item, index) => (
        <ThirdBox key={`third-${index}`}>
          <div key={`thirdbox-${index}`}>
            <img
              key={`thirdimg-${index}`}
              src={item.img}
              alt="정현이형은 신이야!"
            />
          </div>
          <div key={`thirdtex-${index}`}>
            <div key={`thirdinner-${index}`}>{item.title}</div>

            <div key={`thirdinner2-${index}`}>
              {" "}
              <Link to={`/${item.category}`}>{btnName}</Link>
            </div>
          </div>
        </ThirdBox>
      ))}
      <ApparelContainer />
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
      & > div:first-child {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 15px;
      }
      & > div:last-child {
        width: fit-content;
        margin: 0 auto;
        background-color: white;
        padding: 10px 45px;
        border-radius: 10px;
        & > a {
          text-decoration: none;
          color: black;
          font-size: 1.3rem;
        }
        &:hover {
          background-color: black;
          cursor: pointer;
          & > a {
            color: white;
          }
        }
      }
    }
  }
`;
