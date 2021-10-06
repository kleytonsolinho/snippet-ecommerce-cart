import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyles } from './styles/global';

import { MyCartContextProvider } from './contexts/myCart';

export function App() {
  return (
    <MyCartContextProvider>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </MyCartContextProvider>
  );
}
