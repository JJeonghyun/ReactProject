import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

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
      <Carousel>
        {imgArr.map((item, index) => (
          <img key={index} src={item.imgAddress} style={{ width: "100%" }} />
        ))}
      </Carousel>
    </div>
  );
};

export default IteminfoComponent;
