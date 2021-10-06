import { useContext } from 'react';
import { MyCartContext } from '../contexts/myCart';

export function useCart() {
  const MyCart = useContext(MyCartContext);

  return MyCart;
}
