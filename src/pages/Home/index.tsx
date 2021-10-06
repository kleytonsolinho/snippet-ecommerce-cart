import { useEffect, useState } from 'react';

import api from '../../services/api.js';

import { Header } from '../../components/Header';
import { Container, ProductList } from './styles';

import { ProductCard } from '../../components/ProductCard';

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
      <ProductList>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </ProductList>
    </Container>
  );
}
