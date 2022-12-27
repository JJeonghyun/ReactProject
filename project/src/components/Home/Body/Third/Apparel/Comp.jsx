import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <div>
            <Link to={`/clothes`}>지금 쇼핑하기</Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="./imgs/apparelImg2.jpg" alt="" />
        </div>
        <div>
          <div>여성의류</div>
          <div>
            <Link to={`/clothes`}>지금 쇼핑하기</Link>
          </div>
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
      @media only screen and (max-width: 1360px) {
        bottom: 4%;
      }
      @media only screen and (max-width: 640px) {
        bottom: -4%;
      }
      @media only screen and (max-width: 405px) {
        bottom: -13%;
      }
      @media only screen and (max-width: 290px) {
        bottom: -32%;
      }
      & > div {
        padding: 5px 0;
        & {
          @media only screen and (max-width: 845px) {
            padding: 0;
            font-size: 15px;
          }
        }
      }
      & > div:last-child {
        border: 3px solid black;
        width: fit-content;
        margin: 0 auto;
        padding: 10px 40px;
        border-radius: 10px;
        @media only screen and (max-width: 845px) {
          padding: 0 15px;
          & > a {
            font-size: 10px;
          }
        }
        & > a {
          text-decoration: none;
          color: black;
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
