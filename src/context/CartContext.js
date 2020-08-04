import createDataContext from './createDataContext';
import grocerAPI from '../api/grocersApi';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add_item':
      return { ...state, cartItems: addOneItem(state.cartItems, action.payload) };
    case 'remove_one_item':
      return { ...state, cartItems: removeOneItem(state.cartItems, action.payload) };
    case 'remove_item':
      return { ...state, cartItems: state.cartItems.filter((cartItem) => cartItem._id !== action.payload._id) };
    default:
      return state;
  }
};

const addItemToCart = (dispatch) => (item) => {
  dispatch({ type: 'add_item', payload: item });
};

const removeItemFromCart = (dispatch) => (item) => {
  dispatch({ type: 'remove_one_item', payload: item });
};

const clearItemFromCart = (dispatch) => (item) => {
  dispatch({ type: 'remove_item', payload: item });
};

//Helpers
const addOneItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToAdd._id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeOneItem = (cartItems, cartItemsToRemove) => {
  return cartItems.map((cartItem) =>
    cartItem._id === cartItemsToRemove._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

export const { Provider, Context } = createDataContext(
  cartReducer,
  { addItemToCart, removeItemFromCart, clearItemFromCart },
  { cartItems: [] }
);
