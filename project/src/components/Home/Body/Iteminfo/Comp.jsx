// import Carousel from "react-material-ui-carousel";
import { useEffect, useRef, useState } from "react";
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
  const [style, setStyle] = useState({ marginLeft: `-${current}00%` });
  // const imgSize = document.getElementById("window").style.width;

  const moveSlide = (i, imgSize = 1) => {
    let nextIndex = current + i;
    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.length) nextIndex = 0;
    console.log("들어옴");
    setCurrent(nextIndex);
  };
  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);
  return (
    <div>
      {/* <Carousel autoPlay={false}>
        {imgArr.map((item, index) => (
          <img key={index} src={item.imgAddress} style={{ width: "100%" }} />
        ))}
      </Carousel> */}
      <Fbox>
        <SlideBtn
          onClick={() => {
            moveSlide(-1);
          }}
        >
          &lt;
        </SlideBtn>
        <Window id="window">
          <Fbox style={style}>
            {imgArr.map((item, index) => (
              <img
                key={index}
                src={item.imgAddress}
                style={{ width: "100%" }}
              />
            ))}
          </Fbox>
        </Window>
        <SlideBtn
          onClick={() => {
            moveSlide(1);
          }}
        >
          &gt;
        </SlideBtn>
      </Fbox>
    </div>
  );
};

export default IteminfoComponent;

const Window = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid black;
`;

const Fbox = styled.div`
  display: flex;
  align-items: center;
`;
const SlideBtn = styled.button`
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 100%;
  border: 1px solid black;
  color: white;
  background-color: black;
  font-size: 2rem;
`;
