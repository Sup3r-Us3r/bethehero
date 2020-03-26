import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import { Container } from './styles';

export default function Login() {
  // States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  // Functions
  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    const response = await api.post('/ongs', data);
    const { id } = response.data;

    try {
      toast.success(`Seu login de acesso: ${id}`);
      history.push('/');
    } catch (err) {
      toast.error('Erro no cadastro, tente novamente');
    }
  }

  return (
    <Container>
      <div>
        <section>
          <img src={logoImage} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para fazer login
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            onChange={(e) => setWhatsapp(e.target.value)}
            value={whatsapp}
          />

          <div>
            <input
              type="text"
              placeholder="Cidade"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <input
              type="text"
              placeholder="UF"
              onChange={(e) => setUf(e.target.value)}
              value={uf}
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
