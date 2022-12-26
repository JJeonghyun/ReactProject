import CategoryComp from "./Comp";
import Swal from "sweetalert2";
const CategoryContainer = ({ scroll }) => {
  const commingSoon = () => {
    Swal.fire({
      title: "개발 예정인 기능입니다.",
      text: "comming soon",
      icon: "error",
    });
  };

  return <CategoryComp scroll={scroll} commingSoon={commingSoon} />;
};

export default CategoryContainer;
