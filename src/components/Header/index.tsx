import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

import { useCart } from '../../hooks/useCart';

import { Container, Cart, CartWidget } from './styles';

export function Header() {
  const { cart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  function hoverCart() {
    setIsVisible(true);
  }

  function lostHoverCart() {
    setIsVisible(false);
  }

  return (
    <Container>
      <h1>
        <Link to="/">TEMdiTUDO Store</Link>
      </h1>
      <Link to="/cart">
        <Cart
          onMouseEnter={() => hoverCart()}
          onMouseLeave={() => lostHoverCart()}
        >
          <div>
            <h3>Meu Carrinho</h3>
            <span>{cart.length} produtos</span>
          </div>
          <FiShoppingCart className="icon" />
        </Cart>
      </Link>
      {isVisible && (
        <CartWidget
          onMouseEnter={() => hoverCart()}
          onMouseLeave={() => lostHoverCart()}
        >
          <ul className="header">
            <li>Prod</li>
            <li>Qtd</li>
            <li>Valor</li>
          </ul>
          <div>
            {cart.map(product => (
              <ul className="items">
                <li key={product.id}>
                  <li>
                    <img src={product.image} alt="" />
                  </li>
                  <li>1</li>
                  <li>R$ {product.price}</li>
                </li>
              </ul>
            ))}
          </div>
          <Link to="/cart">
            <button type="button">Ir pro carrinho</button>
          </Link>
        </CartWidget>
      )}
    </Container>
  );
}
