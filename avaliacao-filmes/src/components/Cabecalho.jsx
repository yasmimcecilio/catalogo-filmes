import { Link } from 'react-router-dom';
import './Cabecalho.css';

export default function Cabecalho() {
  return (
    <header className="cabecalho-container">
      <h2>CATÁLOGO DE FILMES</h2>
      <nav>
        <ul>
          <li><Link to="/">INÍCIO</Link></li>
          <li><Link to="/criar">CRIAR</Link></li>
          <li><Link to="/alterar">ALTERAR</Link></li>
          <li><Link to="/apagar">APAGAR</Link></li>
        </ul>
      </nav>
    </header>
  );
}