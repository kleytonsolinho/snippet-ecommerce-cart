import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { ProductCard } from '.';

jest.mock('../../hooks/useCart', () => ({
  useCart() {
    return jest.fn();
  },
}));

describe('ProductCard component', () => {
  it('renders correctly texts on component', () => {
    render(
      <BrowserRouter>
        <ProductCard />
      </BrowserRouter>,
    );
    expect(screen.getByText(/R\$/i)).toBeInTheDocument();
    expect(screen.getByText(/Quantidade:/i)).toBeInTheDocument();
  });

  it('renders correctly button to add to cart', () => {
    render(
      <BrowserRouter>
        <ProductCard />
      </BrowserRouter>,
    );
    const Button = document.querySelector('button');
    expect(Button).toHaveTextContent(/Adicionar ao carrinho/i);
  });
});
