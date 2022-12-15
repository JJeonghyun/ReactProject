import { useState } from "react";

const ItemComp = () => {
  const [imgArr, setImgArr] = useState([
    { img: "/imgs/secondImg2.jpg", title: "모델 3/Y 자동 차고 개폐기" },
    { img: "/imgs/secondImg3.jpg", title: "모델 3/Y 센터 콘솔 트레이" },
    {
      img: "/imgs/secondImg4.jpg",
      title: "Model Y 전천후 리어 카고 라이너 세트",
    },
    { img: "/imgs/secondImg5.jpg", title: "모델 3/Y 열쇠고리" },
    { img: "/imgs/secondImg6.jpg", title: "모델 Y 전천후 인테리어 라이너" },
    { img: "/imgs/secondImg7.jpg", title: "SAE J1772 충전 어댑터" },
    { img: "/imgs/secondImg8.jpg", title: "월 커넥터" },
    { img: "/imgs/secondImg9.jpg", title: "모델 3/Y 에어 필터" },
    { img: "/imgs/secondImg10.jpg", title: "CCS 콤보 1 어댑터" },
  ]);
  return (
    <>
      {imgArr.map((item, index) => (
        <div key={`innerbox-${index}`}>
          <div key={`imgbox-${index}`}>
            <img key={`img-${index}`} src={item.img} alt="asd" />
          </div>
          <div key={`titlebox-${index}`}>{item.title}</div>
        </div>
      ))}
    </>
  );
};

export default ItemComp;
