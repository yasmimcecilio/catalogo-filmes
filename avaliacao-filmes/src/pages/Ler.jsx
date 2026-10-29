import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Ler() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    api.get(`/filmes/${id}`)
      .then((res) => setFilme(res.data))
      .catch((err) => console.error("Filme não encontrado:", err));
  }, [id]);

  if (!filme) return <p>Carregando dados do filme...</p>;

  return (
    <div style={{ padding: '10px' }}>
      <h3>Detalhes do Filme</h3>
      <p><strong>Id:</strong> {filme.id}</p>
      <p><strong>Nome:</strong> {filme.nome}</p>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      
      <button onClick={() => navigate('/')}>CANCELAR</button>
    </div>
  );
}