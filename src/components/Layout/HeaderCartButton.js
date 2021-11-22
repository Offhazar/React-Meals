import React from 'react';
import { useContext } from 'react/cjs/react.development';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const CartCotx = useContext(CartContext);

  const numberCartItem = CartCotx.item.reduce((cerrNember, item) => {
    return cerrNember + item.amount;
  }, 0);
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>You Cart</span>
      <span className={classes.badge}>{numberCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
