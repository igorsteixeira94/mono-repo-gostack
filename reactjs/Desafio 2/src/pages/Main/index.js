/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Form, ButtonSubmit, List } from './styles';

import Container from '../../Components/Container';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: false,
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      // verifico se já existe algo salvo
      this.setState({ repositories: JSON.parse(repositories) }); // Transformo de JSON para vetor
    }
  }

  // Salvar os dados
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      // se hover modificações no repositories
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = (e) => {
    // Tirar a borda do input caso não tenha nada digitado
    if (this.state.error === true && e.target.value === '') {
      this.setState({ error: false });
    }
    this.setState({ newRepo: e.target.value });
  };

  // Incluir um novo repositorio
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: false });
    try {
      const { newRepo, repositories } = this.state;

      const repositoryExists = repositories.some(
        (repository) => repository.name === newRepo
      );

      if (repositoryExists || newRepo === '') {
        throw new Error('Repositório duplicado');
      }

      const response = await api.get(`/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        error: false,
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { newRepo, loading, repositories, error } = this.state;
    return (
      <Container>
        <h1>
          <FaGithub size={32} />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <ButtonSubmit loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner size={14} color="#fff" />
            ) : (
              <FaPlus size={14} color="#FFF" />
            )}
          </ButtonSubmit>
        </Form>

        <List>
          {repositories.map((repository) => (
            <li key={Math.random()}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
