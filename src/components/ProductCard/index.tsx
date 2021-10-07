import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';

import { Container } from './styles';

interface CardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  stock: number;
}

export function ProductCard({ id, image, name, price, stock }: CardProps) {
  const { handleAddProduct } = useCart();
  const amount = 1;

  return (
    <Container>
      <img src={image} alt="" />
      <strong>{name}</strong>
      <span>R$ {price}</span>
      <p>Quantidade: {stock}</p>
      <button
        type="button"
        onClick={() => handleAddProduct(id, image, name, price, stock, amount)}
      >
        <FiShoppingCart className="icon" />
        Adicionar ao carrinho
      </button>
    </Container>
  );
}
