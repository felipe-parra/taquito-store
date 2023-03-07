import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/Cart';
import HomePage from './pages/Home';
import TaquitoDetailPage from './pages/TaquitoDetailPage';

import './styles/tailwind.css'

function App() {
  return (
    <div className="w-screen h-screen bg-black" >

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taquito/:taquitoID/detail" element={<TaquitoDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
