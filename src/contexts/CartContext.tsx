import { createContext, useState, ReactNode } from 'react';

import { CartInterface } from '../interfaces';

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext(undefined);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([]);

  function handleAddAmount(id): void {
    const index = cart.indexOf(cart.find(item => item.id === id));
    const addAmountItem = [...cart];

    addAmountItem[index].amount += 1;
    addAmountItem[index].subtotal += addAmountItem[index].price;

    setCart(addAmountItem);
  }

  function handleRemoveAmount(id): void {
    const index = cart.indexOf(cart.find(item => item.id === id));
    const removeAmountItem = [...cart];

    if (removeAmountItem[index].amount === 1) {
      handleRemoveProduct(id);
      return;
    }

    removeAmountItem[index].amount -= 1;
    removeAmountItem[index].subtotal -= removeAmountItem[index].price;

    setCart(removeAmountItem);
  }

  function handleAddProduct(
    id: CartInterface,
    image: CartInterface,
    name: CartInterface,
    priceStr: CartInterface,
    stock: CartInterface,
    amount: CartInterface,
  ): void {
    const price = Number(priceStr);
    const subtotal = price;

    if (cart.length <= 0) {
      const itemCart = { id, image, name, price, stock, amount, subtotal };
      setCart([itemCart]);
      return;
    }

    if (cart.find(item => item.id === id)) {
      handleAddAmount(id);
      return;
    }

    const itemCart = { id, image, name, price, stock, amount, subtotal };
    setCart([...cart, itemCart]);
  }

  function handleRemoveProduct(id): void {
    const index = cart.indexOf(cart.find(item => item.id === id));
    const newlistCart = [...cart];

    newlistCart.splice(index, 1);
    setCart(newlistCart);
  }

  function handleClearCart(): void {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddAmount,
        handleRemoveAmount,
        handleAddProduct,
        handleRemoveProduct,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
