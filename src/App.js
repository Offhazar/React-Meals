import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { useState } from 'react';
import CartContext from './store/cart-context';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIshown, setCartIshown] = useState(false);

  const showCartHandler = () => {
    setCartIshown(true);
  };

  const hideCartHandler = () => {
    setCartIshown(false);
  };

  return (
    <CartProvider>
      {cartIshown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
export default App;
