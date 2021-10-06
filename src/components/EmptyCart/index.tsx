import { Link } from 'react-router-dom';
import { FaRegSmileWink } from 'react-icons/fa';

import { Container, Icon } from './styles';

export function EmptyCart() {
  return (
    <Container>
      <Icon>
        <FaRegSmileWink />
      </Icon>
      <div>
        <h1>Oops...</h1>
        <p>Seu carrinho está vazio!</p>
        <Link to="/">
          <button type="button">Começar a comprar!</button>
        </Link>
      </div>
    </Container>
  );
}
