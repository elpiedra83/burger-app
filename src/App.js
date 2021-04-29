import React, { useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCardHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onToggleCart={toggleCardHandler} />}
      <Header onToggleCart={toggleCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
