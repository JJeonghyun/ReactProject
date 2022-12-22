// import { computeStyles } from "@popperjs/core";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemComp = ({ mainListUp, orderList }) => {
  useEffect(() => {
    mainListUp("DESC");
  }, []);
  return (
    <>
      {orderList?.map((item, index) => (
        <div key={`innerbox-${index}`}>
          <Link
            to="/info"
            state={{
              name: item.productName,
              price: item.productPrice,
              img: item.productImg,
              hoverImg: item.productHoverImg,
            }}
          >
            {item.productImg.includes("/imgs") ? (
              <div key={`imgbox-${index}`}>
                <img key={`img-${index}`} src={item.productImg} alt="asd" />
              </div>
            ) : (
              <div key={`imgbox-${index}`}>
                <img
                  key={`img-${index}`}
                  src={`http://localhost:8080/upload/${item.productImg}`}
                  alt="asd"
                />
              </div>
            )}
          </Link>
          <div key={`titlebox-${index}`}>{item.productModel}</div>
        </div>
      ))}
    </>
  );
};

export default ItemComp;
