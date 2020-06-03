const initialState = {
  list: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);

      let quantity = 1;
      const newList = [...state.list];
      const itemCart = {
        id: action.payload.id,
        name: action.payload.name,
        srcImg: action.payload.srcImg,
        qty: quantity,
      };

      const checkExist = state.list.filter((obj) => {
        return obj.id === action.payload.id;
      });
      const indexExist = state.list.findIndex(
        (x) => x.id === action.payload.id
      );
      if (checkExist.length > 0) {
        checkExist[0].qty += 1;
        newList[indexExist].qty = checkExist[0].qty;
        console.log(newList);
        return {
          ...state,
          list: newList,
        };
      } else {
        newList.push(itemCart);
        console.log(newList);

        return {
          ...state,
          list: newList,
        };
      }
    case "REMOVE_CART":
      const indexCurrent = state.list.findIndex((x) => x.id === action.payload);
      if (indexCurrent < 0) return;
      const listCart = [...state.list];
      listCart.splice(indexCurrent, 1);

      return {
        ...state,
        list: listCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
