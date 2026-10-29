import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Criar() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const navigate = useNavigate();

  const handleSalvar = (e) => {
    e.preventDefault();
    api.post('/filmes', { nome, genero, ano })
      .then(() => navigate('/'))
      .catch((err) => console.error("Erro ao cadastrar filme:", err));
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3>Cadastrar Novo Filme</h3>
      <form onSubmit={handleSalvar}>
        <div>
          <label>Nome: </label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <br />
        <div>
          <label>Gênero: </label>
          <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} required />
        </div>
        <br />
        <div>
          <label>Ano: </label>
          <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} required />
        </div>
        <br />
        <button type="submit">CRIAR</button>
        <button type="button" onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>
          CANCELAR
        </button>
      </form>
    </div>
  );
}