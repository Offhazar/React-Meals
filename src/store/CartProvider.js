import CartContext from './cart-context';
import { useContext } from 'react';
import { useReducer } from 'react';

const defaulState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateItems = state.item.concat(action.item);
    const updateTotalAmount = (state.totalAmount =
      action.item.price * action.item.amount);
    return {
      item: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaulState;
};

const CartProvider = (props) => {
  const [cartState, dispatchState] = useReducer(cartReducer, defaulState);

  const CartCotx = useContext(CartContext);
  const addItemToCartHandler = (item) => {
    dispatchState({ type: 'ADD_ITEM', item: item });
  };

  const removeItemFromHandler = (id) => {
    dispatchState({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
