// Importando paqueterias de terceros
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importación de paginas y estilos
import './App.scss'
import Home from './content/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};
