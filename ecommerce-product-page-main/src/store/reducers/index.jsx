export const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...state, action.payload];
    case "DELETE_CART_ITEM":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
};
