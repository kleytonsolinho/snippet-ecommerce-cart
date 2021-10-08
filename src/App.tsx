import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyles } from './styles/global';

import { CartContextProvider } from './contexts/CartContext';

export function App() {
  return (
    <CartContextProvider>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </CartContextProvider>
  );
}
