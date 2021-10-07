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

interface MyCartProviderProps {
  children: ReactNode;
}

export const MyCartContext = createContext(undefined);

export function MyCartContextProvider({ children }: MyCartProviderProps) {
  const [cart, setCart] = useState([]);

  function AddQTD(newId: number) {
    const addQtd = cart.find(v => v.newId === newId);
    const valor = addQtd.valor / addQtd.amount;
    addQtd.amount += 1;
    addQtd.valor += valor;
    setCart([...cart]);
  }

  function RemoveQTD(newId: number, posicao: number) {
    const removeQtd = cart.find(v => v.newId === newId);

    if (removeQtd.amount === 1) {
      handleRemoveProduct(posicao);
      return;
    }

    const valor = removeQtd.valor / removeQtd.amount;
    removeQtd.amount -= 1;
    removeQtd.valor -= valor;
    setCart([...cart]);
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

    if (cart.length <= 0) {
      const itemCart = { newId, image, name, valor, stock, amount };
      setCart([itemCart]);
      return;
    }

    if (cart.find(v => v.newId === newId)) {
      const addQtd = cart.find(v => v.newId === newId);
      addQtd.amount += 1;
      addQtd.valor += valor;
      return;
    }

    const itemCart = { newId, image, name, valor, stock, amount };
    setCart([...cart, itemCart]);
  }

  function handleRemoveProduct(posicao: number): void {
    const newlistCart = [...cart];

    newlistCart.splice(posicao, 1);
    setCart(newlistCart);
  }

  function clearCart(): void {
    setCart([]);
  }

  return (
    <MyCartContext.Provider
      value={{
        cart,
        setCart,
        AddQTD,
        RemoveQTD,
        handleAddProduct,
        handleRemoveProduct,
        clearCart,
      }}
    >
      {children}
    </MyCartContext.Provider>
  );
}
