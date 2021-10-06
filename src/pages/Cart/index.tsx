import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { EmptyCart } from '../../components/EmptyCart';

import { Header } from '../../components/Header';
import { useCart } from '../../hooks/useCart';

import { Container, Content, ListCart, Checkout } from './styles';

export function Cart() {
  const { cart, total, handleRemoveProduct, clearCart } = useCart();
  const [vTotal, setvTotal] = useState(0);

  useEffect(() => {
    if (total.length >= 1) {
      setvTotal(total.reduce((valorTotal, item) => valorTotal + item));
    } else {
      setvTotal(0);
    }
  }, [total]);

  return (
    <>
      <Container>
        <Header />
        {cart.length <= 0 ? (
          <EmptyCart />
        ) : (
          <Content>
            <ListCart>
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>PRODUTO</th>
                  <th>NOME</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th>REMOVER</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, i: number) => {
                  const y: number = i + 1;
                  return (
                    <tr key={y}>
                      <td>
                        <h2>{y}</h2>
                      </td>
                      <td>
                        <img src={product.image} alt="" />
                      </td>
                      <td>
                        <strong>{product.name}</strong>
                      </td>
                      <td>
                        <h3>1</h3>
                      </td>
                      <td>
                        <h3>R$ {product.price}</h3>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleRemoveProduct(i)}
                        >
                          <FiTrash2 className="icon" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <Checkout>
                <div>
                  <Link to="/">
                    <button type="button">
                      <FiArrowLeft className="iconTrash" />
                      Voltar para loja
                    </button>
                  </Link>
                  <button type="button" onClick={() => clearCart()}>
                    <FiTrash2 className="iconTrash" />
                    Limpar Carrinho
                  </button>
                </div>
                <h1>Total: R$ {vTotal},00</h1>
              </Checkout>
            </ListCart>
          </Content>
        )}
      </Container>
    </>
  );
}
