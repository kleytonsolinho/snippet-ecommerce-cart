import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export function useCart() {
  const MyCart = useContext(CartContext);

  return MyCart;
}
