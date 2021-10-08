import { useEffect, useState } from 'react';

import api from '../../services/api.js';

import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';

import { Container, Content, ProductList } from './styles';

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getApi() {
      await api.get('/product').then(response => {
        setProducts(response.data);
      });
    }
    getApi();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <ProductList>
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              stock={product.stock}
            />
          ))}
        </ProductList>
      </Content>
    </Container>
  );
}
