import axios from "axios";
import Sweetalert2 from "sweetalert2";
const TYPE = {
  ADD: "cartDB/listAdd",
  REMOVE: "cartDB/listRemove",
  SELECT: "cartDB/listSelect",
};
const listAdd = (name, price, account, img, hoverImg) => {
  return {
    type: TYPE.ADD,
    payload: { name, price, account, img, hoverImg },
  };
};
const listRemove = (index, name) => {
  return {
    type: TYPE.REMOVE,
    payload: { index, name },
  };
};
const listSelect = (account, index) => {
  return {
    type: TYPE.SELECT,
    payload: { account, index },
  };
};
export const action = { listAdd, listRemove, listSelect };
export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD: {
      console.log(payload);
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
            title: `${data.data.name}
            상품이 장바구니에 담겼습니다.`,
            text: "OK를 누르시면 이전페이지로 돌아갑니다.",
            icon: "succes",
          });
        }
      };
      dbAdd();

      return result;
    }
    case TYPE.REMOVE: {
      const before = state.slice(0, payload.index);
      const after = state.slice(payload.index + 1);
      const name = payload.name;
      console.log(payload);
      let data;
      const dbRemove = async function () {
        data = await axios.post("http://localhost:8080/api/cart/remove/", {
          payload: { ...payload },
        });
        console.log(data);
      };
      dbRemove();

      return [...before, ...after];
    }
    case TYPE.SELECT: {
      let data;

      const dbGet = async function () {
        data = await axios.post("http://localhost:8080/api/cart/getItem/", {
          payload: { ...payload },
        });
        console.log(data.data.list);

        // tempArr[index]?.account = account;
      };
      dbGet();
      return state;
    }

    default: {
      return state;
    }
  }
};
