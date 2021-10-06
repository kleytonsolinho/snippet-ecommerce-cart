import { createContext, useState, ReactNode } from 'react';

interface Cart {
  id: number;
  name: string;
  image: string;
  price: string;
  stock: number;
  createdAt: string;
}

interface MyCartProviderProps {
  children: ReactNode;
}

export const MyCartContext = createContext<Cart[] | any>(undefined);

export function MyCartContextProvider({ children }: MyCartProviderProps) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);

  function handleAddProduct(image: string, name: string, price: string) {
    const itemCart = { image, name, price };
    const valor = Number(price);

    setCart([...cart, itemCart]);
    setTotal([...total, valor]);
  }

  function handleRemoveProduct(posicao: number) {
    const newlistCart = [...cart];
    const totalList = [...total];

    newlistCart.splice(posicao, 1);
    totalList.splice(posicao, 1);
    setCart(newlistCart);
    setTotal(totalList);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <MyCartContext.Provider
      value={{
        cart,
        setCart,
        total,
        handleAddProduct,
        handleRemoveProduct,
        clearCart,
      }}
    >
      {children}
    </MyCartContext.Provider>
  );
}
