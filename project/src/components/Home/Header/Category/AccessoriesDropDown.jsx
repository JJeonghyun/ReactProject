import "./dropdown.css";
import { useEffect } from "react";
import styled from "styled-components";
const ChargeDropDown = ({ hover, setHover, onClick }) => {
  // document.getElementsByClassName("dropdown")[0].style.color = "blue";

  useEffect(() => {
    if (document.getElementById(hover + "Box"))
      document.getElementById(hover + "Box").style.display = "flex";
    else {
      document.getElementById("chargeBox").style.display = "none";
      document.getElementById("accessoriesBox").style.display = "none";
      document.getElementById("clothesBox").style.display = "none";
    }
  }, [hover]);
  return (
    <div
      id="accessoriesBox"
      onMouseOver={() => {
        setHover("accessories");
      }}
      onMouseLeave={() => {
        setHover("");
      }}
    >
      <Fvbox
        onClick={() => {
          onClick();
        }}
      >
        <div className="itemLinkAcc">Model S</div>
        <div>베스트셀러</div>
        <div>인테리어</div>
        <div>외부</div>
        <div>휠 및 타이어</div>
        <div>플로어 매트</div>
        <div>파츠</div>
        <div>키</div>
      </Fvbox>
      <Fvbox
        onClick={() => {
          onClick();
        }}
      >
        <div className="itemLinkAcc">Model 3</div>
        <div>베스트셀러</div>
        <div>인테리어</div>
        <div>외부</div>
        <div>휠 및 타이어</div>
        <div>플로어 매트</div>
        <div>파츠</div>
        <div>키</div>
      </Fvbox>
      <Fvbox
        onClick={() => {
          onClick();
        }}
      >
        <div className="itemLinkAcc">Model X</div>
        <div>베스트셀러</div>
        <div>인테리어</div>
        <div>외부</div>
        <div>휠 및 타이어</div>
        <div>플로어 매트</div>
        <div>파츠</div>
        <div>키</div>
      </Fvbox>
      <Fvbox
        onClick={() => {
          onClick();
        }}
      >
        <div className="itemLinkAcc">Model Y</div>
        <div>베스트셀러</div>
        <div>인테리어</div>
        <div>외부</div>
        <div>휠 및 타이어</div>
        <div>플로어 매트</div>
        <div>파츠</div>
        <div>키</div>
      </Fvbox>
    </div>
  );
};

export default ChargeDropDown;

const Fbox = styled.div`
  display: flex;
  width: 60%;
`;
const Fvbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  > div {
    margin-left: 25px;
    margin-top: 10px;
    width: 100%;
    cursor: pointer;
  }
`;
const Vbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const ImgName = styled.span`
  padding: 15px;
  text-align: center;
  font-size: 1.4rem;
`;

const ImgZone = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: url("/imgs/wallConnect1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-scale: 1.2;
  height: 300px;
`;
