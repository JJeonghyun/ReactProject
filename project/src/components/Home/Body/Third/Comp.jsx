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
      @media screen and (max-width: 1024px) {
        & > div:first-child {
          font-size: 1.5rem;
        }
      }
      @media screen and (max-width: 700px) {
        & > div:first-child {
          font-size: 1rem;
        }
      }
      @media screen and (max-width: 491px) {
        & > div:first-child {
          margin-bottom: 5px;
        }
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
        @media screen and (max-width: 1024px) {
          & > a {
            font-size: 1rem;
          }
        }
        @media screen and (max-width: 700px) {
          & > a {
            font-size: 0.8rem;
          }
        }
        &:hover {
          background-color: black;
          cursor: pointer;
          & > a {
            color: white;
          }
        }
      }
      @media screen and (max-width: 491px) {
        & > div:last-child {
          padding: 5px 20px;
        }
      }
    }
    @media screen and (max-width: 1024px) {
      &:last-child {
        bottom: 10%;
      }
    }
    @media screen and (max-width: 700px) {
      &:last-child {
        bottom: 5%;
      }
    }
  }
`;
