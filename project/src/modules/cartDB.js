import axios from "axios";
import Sweetalert2 from "sweetalert2";
const TYPE = {
  ADD: "cartDB/listAdd",
  REMOVE: "cartDB/listRemove",
};
const listAdd = (name, price, account, img, hoverImg) => {
  return {
    type: TYPE.ADD,
    payload: { name, price, account, img, hoverImg },
  };
};
const listRemove = (index, id) => {
  return {
    type: TYPE.REMOVE,
    payload: { index, id },
  };
};

export const action = { listAdd, listRemove };
export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD: {
      const result = [...state, { ...payload }];
      let data;
      const dbAdd = async function () {
        data = await axios.post("http://localhost:8080/api/cart/list/", {
          payload: { ...payload },
        });
        if (data.data.already) {
          Sweetalert2.fire({
            title: `이미 장바구니에
            담긴 상품입니다.`,
            text: `OK 누르시면
            이전페이지로 돌아갑니다.`,
            icon: "warning",
            denyButtonText: "확인",
          });
        } else {
          Sweetalert2.fire({
            title: `${payload.name}
            상품이 장바구니에 담겼습니다.`,
            text: "OK를 누르시면 이전페이지로 돌아갑니다.",
            icon: "success",
          });
        }
      };
      dbAdd();

      return result;
    }
    case TYPE.REMOVE: {
      const before = state.slice(0, payload.index);
      const after = state.slice(payload.index + 1);
      console.log(payload);

      return [...before, ...after];
    }

    default: {
      return state;
    }
  }
};
