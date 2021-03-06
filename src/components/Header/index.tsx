import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';

import { useCart } from '../../hooks/useCart';

import { Container, HeaderContent, Cart, CartWidget } from './styles';

export function Header() {
  const { cart, handleClearCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  function onHover(): void {
    setIsVisible(true);
  }

  function outHover(): void {
    setIsVisible(false);
  }

  return (
    <Container>
      <HeaderContent>
        <h1>
          <Link to="/">TEMdiTUDO Store</Link>
        </h1>
        <Link to="/cart">
          <Cart onMouseEnter={() => onHover()} onMouseLeave={() => outHover()}>
            <div>
              <h3>Meu Carrinho</h3>
              <span>{cart.length} produtos</span>
            </div>
            <FiShoppingCart className="icon" />
          </Cart>
        </Link>
        {isVisible && (
          <CartWidget
            onMouseEnter={() => onHover()}
            onMouseLeave={() => outHover()}
          >
            <ul className="header">
              <li>Prod</li>
              <li>Qtd</li>
              <li>Valor</li>
            </ul>
            <div className="listCart">
              {cart.map(product => (
                <ul key={product.id} className="itens">
                  <li>
                    <img src={product.image} alt="" />
                  </li>
                  <li>{product.amount}</li>
                  <li>R$ {product.price}.00</li>
                </ul>
              ))}
            </div>
            <div className="btns">
              <Link to="/cart">
                <button type="button">
                  <FiShoppingCart className="icon" />
                  Ir pro carrinho
                </button>
              </Link>
              <button type="button" onClick={() => handleClearCart()}>
                <FiTrash2 />
              </button>
            </div>
          </CartWidget>
        )}
      </HeaderContent>
    </Container>
  );
}
