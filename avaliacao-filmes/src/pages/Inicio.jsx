import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function Inicio() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    api.get('/filmes')
      .then((res) => setFilmes(res.data))
      .catch((err) => console.error("Erro ao buscar filmes:", err));
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      {filmes.map((filme) => (
        <div key={filme.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
          <p><strong>Id:</strong> {filme.id}</p>
          <p>
            <strong>Nome:</strong>{' '}
            <Link to={`/ler/${filme.id}`}>{filme.nome}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}