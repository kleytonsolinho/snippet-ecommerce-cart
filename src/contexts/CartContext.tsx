import { createContext, useState, ReactNode } from 'react';

interface Cart {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext(undefined);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([]);

  function handleAddAmount(newId: number): void {
    const index = cart.indexOf(cart.find(item => item.newId === newId));
    const addAmountItem = [...cart];

    addAmountItem[index].amount += 1;
    addAmountItem[index].subtotal += addAmountItem[index].valor;

    setCart(addAmountItem);
  }

  function handleRemoveAmount(newId: number): void {
    const index = cart.indexOf(cart.find(item => item.newId === newId));
    const removeAmountItem = [...cart];

    if (removeAmountItem[index].amount === 1) {
      handleRemoveProduct(newId);
      return;
    }

    removeAmountItem[index].amount -= 1;
    removeAmountItem[index].subtotal -= removeAmountItem[index].valor;

    setCart(removeAmountItem);
  }

  function handleAddProduct(
    id: Cart,
    image: Cart,
    name: Cart,
    price: Cart,
    stock: Cart,
    amount: number,
  ): void {
    const valor = Number(price);
    const newId = Number(id);
    const subtotal = valor;

    if (cart.length <= 0) {
      const itemCart = { newId, image, name, valor, stock, amount, subtotal };
      setCart([itemCart]);
      return;
    }

    if (cart.find(item => item.newId === newId)) {
      handleAddAmount(newId);
      return;
    }

    const itemCart = { newId, image, name, valor, stock, amount, subtotal };
    setCart([...cart, itemCart]);
  }

  function handleRemoveProduct(newId: number): void {
    const index = cart.indexOf(cart.find(item => item.newId === newId));
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
