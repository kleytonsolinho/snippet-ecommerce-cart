import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';
import { EmptyCart } from '../../components/EmptyCart';

import { Header } from '../../components/Header';
import { useCart } from '../../hooks/useCart';

import {
  Container,
  Content,
  ListCart,
  ListHeader,
  ListContent,
  Checkout,
} from './styles';

export function Cart() {
  const { cart, AddQTD, RemoveQTD, handleRemoveProduct, clearCart } = useCart();
  const [vTotal, setvTotal] = useState(0);

  useEffect(() => {
    const total = cart.map(product => product.valor);
    if (total.length >= 1) {
      setvTotal(total.reduce((valorTotal, item) => valorTotal + item));
    } else {
      setvTotal(0);
    }
  }, [cart]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          {cart.length <= 0 ? (
            <EmptyCart />
          ) : (
            <ListCart>
              <ListHeader>
                <ul>
                  <li>Nº</li>
                  <li>PRODUTO</li>
                  <li>NOME</li>
                  <li>QTD</li>
                  <li>SUBTOTAL</li>
                  <li>REMOVER</li>
                </ul>
              </ListHeader>
              <ListContent>
                {cart.map((product, i: number) => {
                  const y: number = i + 1;
                  return (
                    <ul key={product.newId}>
                      <li>
                        <h2>{y}</h2>
                      </li>
                      <li>
                        <img src={product.image} alt="" />
                      </li>
                      <li>
                        <strong>{product.name}</strong>
                      </li>
                      <li>
                        <div className="amount">
                          <button
                            type="button"
                            onClick={() => RemoveQTD(product.newId, i)}
                          >
                            <HiOutlineMinusCircle
                              data-test="remove-btn"
                              className="amount-icon"
                            />
                          </button>
                          <h3>{product.amount}</h3>
                          <button
                            type="button"
                            onClick={() => AddQTD(product.newId)}
                          >
                            <HiOutlinePlusCircle
                              data-test="add-btn"
                              className="amount-icon"
                            />
                          </button>
                        </div>
                      </li>
                      <li>
                        <h3>R$ {product.valor}.00</h3>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleRemoveProduct(i)}
                        >
                          <FiTrash2 className="icon" />
                        </button>
                      </li>
                    </ul>
                  );
                })}
              </ListContent>
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
          )}
        </Content>
      </Container>
    </>
  );
}
