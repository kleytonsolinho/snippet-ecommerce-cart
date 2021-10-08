import { createContext, useState, ReactNode } from 'react';

import { CartInterface } from '../interfaces';

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext(undefined);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([]);

  function handleAddAmount(id: number): void {
    const index = cart.indexOf(cart.find(item => item.id === id));
    const addAmountItem = [...cart];

    addAmountItem[index].amount += 1;
    addAmountItem[index].subtotal += addAmountItem[index].valor;

    setCart(addAmountItem);
  }

  function handleRemoveAmount(id: number): void {
    const index = cart.indexOf(cart.find(item => item.id === id));
    const removeAmountItem = [...cart];

    if (removeAmountItem[index].amount === 1) {
      handleRemoveProduct(id);
      return;
    }

    removeAmountItem[index].amount -= 1;
    removeAmountItem[index].subtotal -= removeAmountItem[index].valor;

    setCart(removeAmountItem);
  }

  function handleAddProduct(
    oldId: CartInterface,
    image: CartInterface,
    name: CartInterface,
    price: CartInterface,
    stock: CartInterface,
    amount: CartInterface,
  ): void {
    const valor = Number(price);
    const id = Number(oldId);
    const subtotal = valor;

    if (cart.length <= 0) {
      const itemCart = { id, image, name, valor, stock, amount, subtotal };
      setCart([itemCart]);
      return;
    }

    if (cart.find(item => item.id === id)) {
      handleAddAmount(id);
      return;
    }

    const itemCart = { id, image, name, valor, stock, amount, subtotal };
    setCart([...cart, itemCart]);
  }

  function handleRemoveProduct(id: number): void {
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
