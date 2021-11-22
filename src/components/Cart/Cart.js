import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react/cjs/react.development';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const CartCotx = useContext(CartContext);

  const totalAmount = `$${CartCotx.totalAmount.toFixed(2)}`;
  const hasItems = CartCotx.item.length > 0;
  //   const cartItem = (
  //     <ul className={classes['cart-items']}>
  //       {[
  //         {
  //           id: 'c1',
  //           name: 'sushi',
  //           amount: 2,
  //           price: 12.99,
  //         },
  //       ].map((item) => {
  //         return <li>{item.name}</li>;
  //       })}
  //     </ul>
  //   );

  const cartItem = (
    <ul className={classes['cart-item']}>
      {CartCotx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAd={() => {}}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>
          close
        </button>

        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
