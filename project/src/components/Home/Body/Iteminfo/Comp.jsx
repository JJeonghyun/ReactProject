// import Carousel from "react-material-ui-carousel";
import { useEffect, useRef, useState } from "react";
import "./comp.css";
import styled from "styled-components";
const imgArr = [
  {
    imgAddress: "./imgs/iteminfo/1.jpg",
  },
  {
    imgAddress: "./imgs/iteminfo/2.jpg",
  },
  {
    imgAddress: "./imgs/iteminfo/3.jpg",
  },
];
const IteminfoComponent = () => {
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    transform: `translate(-${current}00%), duration 2s`,
    transitionDuration: `2s`,
  });
  // const imgSize = document.getElementById("window").style.width;

  const moveSlide = (i) => {
    let nextIndex = current + i;
    if (nextIndex < 0) nextIndex = imgArr.length - 1;
    else if (nextIndex >= imgArr.length) nextIndex = 0;
    setCurrent(nextIndex);
  };

  const showSlide = (i) => {
    setCurrent(i);
  };

  useEffect(() => {
    setStyle({
      transform: `translate(-${current}00%)`,
      transitionDuration: `0.5s`,
    });
  }, [current]);
  return (
    <div>
      {/* <Carousel autoPlay={false}>
        {imgArr.map((item, index) => (
          <img key={index} src={item.imgAddress} style={{ width: "100%" }} />
        ))}
      </Carousel> */}

      <Fbox
        onMouseOver={() => {
          [...document.getElementsByClassName("slideBtn")].map(
            (item, index) => {
              item.style.display = "block";
            }
          );
        }}
        onMouseLeave={() => {
          [...document.getElementsByClassName("slideBtn")].map(
            (item, index) => {
              item.style.display = "none";
            }
          );
        }}
      >
        <SlideBtnLeft
          className="slideBtn"
          onClick={() => {
            moveSlide(-1);
          }}
        >
          &lt;
        </SlideBtnLeft>
        <Window id="window">
          <Fbox style={style} transition-duration={"2s"}>
            {imgArr.map((item, index) => (
              <img
                key={index}
                src={item.imgAddress}
                style={{ width: "100%" }}
                className={"img"}
              />
            ))}
          </Fbox>
        </Window>
        <SlideBtnRight
          className="slideBtn"
          onClick={() => {
            moveSlide(1);
          }}
        >
          &gt;
        </SlideBtnRight>
      </Fbox>
      <div className="position">
        {imgArr.map((item, index) => (
          <div
            key={index}
            className={index === current ? "dot current" : "dot"}
          ></div>
        ))}
      </div>

      <div className="imgList">
        {imgArr.map((item, index) => {
          return (
            <img
              key={index}
              src={item.imgAddress}
              style={{ width: "100%" }}
              className={"img"}
              onClick={() => {
                showSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IteminfoComponent;

const Window = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Fbox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const SlideBtnLeft = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 100%;
  border: 1px solid black;
  color: white;
  background-color: black;
  left: 10px;
  position: absolute;
  font-weight: bold;
  display: none;
  opacity: 0.3;
`;

const SlideBtnRight = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 100%;
  border: 1px solid black;
  color: white;
  background-color: black;

  position: absolute;
  right: 10px;
  font-weight: bold;
  display: none;
  opacity: 0.3;
`;

const Dot = styled.div`
  background: lightgray;
  border-radius: 100%;
  height: 10px;
  width: 10px;
`;
const DotCurrent = styled.div`
  background: gray;
  border-radius: 100%;
  height: 10px;
  width: 10px;
`;
