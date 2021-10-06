import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';

import { Container } from './styles';

interface CardProps {
  image: string;
  name: string;
  price: string;
  stock: number;
}

export function ProductCard({ image, name, price, stock }: CardProps) {
  const { handleAddProduct } = useCart();

  return (
    <Container>
      <img src={image} alt="" />
      <strong>{name}</strong>
      <span>R$ {price}</span>
      <p>Quantidade: {stock}</p>
      <button
        type="button"
        onClick={() => handleAddProduct(image, name, price)}
      >
        <FiShoppingCart className="icon" />
        Adicionar ao carrinho
      </button>
    </Container>
  );
}
