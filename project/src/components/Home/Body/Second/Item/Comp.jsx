// import { computeStyles } from "@popperjs/core";
import { useEffect, useState } from "react";

const ItemComp = ({ mainListUp, orderList }) => {
  useEffect(() => {
    mainListUp("DESC");
  }, []);
  console.log(orderList);
  return (
    <>
      {orderList?.map((item, index) => (
        <div key={`innerbox-${index}`}>
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
          <div key={`titlebox-${index}`}>{item.productModel}</div>
        </div>
      ))}
    </>
  );
};

export default ItemComp;
