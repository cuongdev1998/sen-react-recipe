export const addCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeCart = (index) => {
  return {
    type: "REMOVE_CART",
    payload: index,
  };
};
