import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesServer from './components/routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesServer />
    </BrowserRouter>
  );
}

export default App;
