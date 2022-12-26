import OrderComp from "./OrderComp";
import Sweetalert2 from "sweetalert2";
import axios from "axios";

const OrderContainer = ({ totalState }) => {
  const checkOut = () => {
    console.log("asd");
    const query = 'input[name="agree"]:checked';
    const selectedElems = document.querySelectorAll(query).length;
    const Toast = Sweetalert2.mixin({
      toast: true,
      position: "center-center",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Sweetalert2.stopTimer);
        toast.addEventListener("mouseleave", Sweetalert2.resumeTimer);
      },
    });
    console.log(selectedElems);
    if (selectedElems < 2) {
      Sweetalert2.fire({
        title: `모든 약관에 
        동의해주십시오.`,
        text: `OK 누르시면
        이전페이지로 돌아갑니다.`,
        icon: "warning",
        denyButtonText: "확인",
      });
    } else {
      Sweetalert2.fire({
        title: `구매를 진행하시겠습니까?`,
        text: "다시 되돌릴 수 없습니다. 잔고확인부터하세요.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "승인",
        cancelButtonText: "취소",
      }).then(async (result) => {
        if (result.isConfirmed) {
          axios.post("http://localhost:8080/api/order/list").then((data) => {
            axios.post("http://localhost:8080/api/order/orderremove");
          });
          setTimeout(() => {
            Toast.fire({
              icon: "success",
              title: "누추한 주문이 완료되었습니다 고갱님~",
              text: `[재고가 업데이트되었습니다.]`,
            });
          }, 100);
        }
      });
    }
  };

  return <OrderComp totalState={totalState} checkOut={checkOut} />;
};

export default OrderContainer;
