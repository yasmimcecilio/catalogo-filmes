import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Apagar() {
  const [buscou, setBuscou] = useState(false);
  const [encontrado, setEncontrado] = useState(false);
  const [searchId, setSearchId] = useState('');
  const [filme, setFilme] = useState(null);
  
  const navigate = useNavigate();

  const handleProcurar = (e) => {
    e.preventDefault();
    api.get(`/filmes/${searchId}`)
      .then((res) => {
        setFilme(res.data);
        setEncontrado(true);
        setBuscou(true);
      })
      .catch(() => {
        setEncontrado(false);
        setBuscou(true);
      });
  };

  const handleApagar = () => {
    api.delete(`/filmes/${searchId}`)
      .then(() => navigate('/'))
      .catch((err) => console.error("Erro ao apagar filme:", err));
  };

  if (!buscou) {
    return (
      <div style={{ padding: '10px' }}>
        <h3>Apagar Filme</h3>
        <form onSubmit={handleProcurar}>
          <label>Digite o ID do Filme: </label>
          <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} required />
          <br /><br />
          <button type="submit">PROCURAR</button>
          <button type="button" onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>
            CANCELAR
          </button>
        </form>
      </div>
    );
  }

  if (!encontrado) {
    return (
      <div style={{ padding: '10px' }}>
        <p>Filme com ID {searchId} não foi encontrado.</p>
        <button onClick={() => navigate('/')}>VOLTAR AO INÍCIO</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '10px' }}>
      <h3>Confirmação de Exclusão</h3>
      <p><strong>Id:</strong> {filme.id}</p>
      <p><strong>Nome:</strong> {filme.nome}</p>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      <br />
      <button onClick={handleApagar} style={{ backgroundColor: 'red', color: 'white' }}>
        APAGAR DEFINITIVAMENTE
      </button>
      <button onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>
        CANCELAR
      </button>
    </div>
  );
}