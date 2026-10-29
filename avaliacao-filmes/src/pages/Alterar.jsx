import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Alterar() {
  const [buscou, setBuscou] = useState(false);
  const [encontrado, setEncontrado] = useState(false);
  const [searchId, setSearchId] = useState('');
  
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  
  const navigate = useNavigate();

  const handleProcurar = (e) => {
    e.preventDefault();
    api.get(`/filmes/${searchId}`)
      .then((res) => {
        setNome(res.data.nome);
        setGenero(res.data.genero);
        setAno(res.data.ano);
        setEncontrado(true);
        setBuscou(true);
      })
      .catch(() => {
        setEncontrado(false);
        setBuscou(true);
      });
  };

  const handleAlterar = (e) => {
    e.preventDefault();
    api.put(`/filmes/${searchId}`, { nome, genero, ano })
      .then(() => navigate('/'))
      .catch((err) => console.error("Erro ao atualizar filme:", err));
  };

  if (!buscou) {
    return (
      <div style={{ padding: '10px' }}>
        <h3>Alterar Filme</h3>
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
      <h3>Editar Filme (ID: {searchId})</h3>
      <form onSubmit={handleAlterar}>
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
        <button type="submit">ALTERAR</button>
        <button type="button" onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>
          CANCELAR
        </button>
      </form>
    </div>
  );
}