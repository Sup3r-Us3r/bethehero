import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import { Container } from './styles';

export default function Login() {
  const history = useHistory();

  // States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  // Function
  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao criar caso, tente novamente');
    }
  }

  return (
    <Container>
      <div>
        <section>
          <img src={logoImage} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Título do caso"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <input
            type="text"
            placeholder="Valor em reais"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
