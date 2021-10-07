import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { EmptyCart } from '.';

describe('Empty component', () => {
  it('renders correctly texts notification', () => {
    render(
      <BrowserRouter>
        <EmptyCart />
      </BrowserRouter>,
    );

    expect(screen.getByText('Oops...')).toBeInTheDocument();
    expect(screen.getByText('Seu carrinho está vazio!')).toBeInTheDocument();
    expect(screen.getByText('Começar a comprar!')).toBeInTheDocument();
  });

  it('renders correctly button to home on click', () => {
    render(
      <BrowserRouter>
        <EmptyCart />
      </BrowserRouter>,
    );
    const Link = document.querySelector('a');
    const Button = document.querySelector('button');
    expect(Link).toHaveAttribute('href', '/');
    expect(Button).toHaveTextContent('Começar a comprar!');
  });
});
