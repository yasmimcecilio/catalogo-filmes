import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Inicio from './pages/Inicio';
import Ler from './pages/Ler';
import Criar from './pages/Criar';
import Alterar from './pages/Alterar';
import Apagar from './pages/Apagar';

export default function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ler/:id" element={<Ler />} />
        <Route path="/criar" element={<Criar />} />
        <Route path="/alterar" element={<Alterar />} />
        <Route path="/apagar" element={<Apagar />} />
      </Routes>
    </BrowserRouter>
  );
}