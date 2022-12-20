import axios from "axios";

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
const listRemove = (index) => {
  return {
    type: TYPE.REMOVE,
    payload: { index },
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
      const result = [...state, { ...payload }];
      let data;
      const dbAdd = async function () {
        data = await axios.post("http://localhost:8080/api/cart/list/", {
          payload: { ...payload },
        });
      };
      dbAdd();
      return result;
    }
    case TYPE.REMOVE: {
      const before = state.slice(0, payload.index);
      const after = state.slice(payload.index + 1);
      return [...before, ...after];
    }
    case TYPE.SELECT: {
      const { account, index } = payload;
      const tempArr = [...state];
      tempArr[index].account = account;
      return tempArr;
    }
    default: {
      return state;
    }
  }
};
