import axios from "axios";

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
