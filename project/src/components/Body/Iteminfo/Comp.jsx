// import Carousel from "react-material-ui-carousel";
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
  return (
    <div>
      {/* <Carousel autoPlay={false}>
        {imgArr.map((item, index) => (
          <img key={index} src={item.imgAddress} style={{ width: "100%" }} />
        ))}
      </Carousel> */}

      <Window></Window>
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
`;
