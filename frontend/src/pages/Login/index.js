import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Login() {
  // States
  const [id, setId] = useState('');

  const history = useHistory();

  // Functions
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', { id });
      const { name } = response.data;

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', name);

      history.push('/profile');
    } catch (err) {
      alert('Erro ao fazer login, tente novamente');
    }
  }

  return (
    <Container>
      <section>
        <img src={logoImage} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>

          <input
            type="text"
            placeholder="Sua ID"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <button type="submit">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes" />
    </Container>
  );
}
