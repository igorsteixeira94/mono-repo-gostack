import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Loading, Owner, IssuesList, PageAction, IssuesFilter } from './styles';
import Container from '../../Components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    page: 1,
    indexIssues: 0,
    issuesStatus: [
      {
        status: 'all',
        name: 'Todas',
      },
      {
        status: 'open',
        name: 'Abertas',
      },
      {
        status: 'closed',
        name: 'Fechadas',
      },
    ],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { page, issuesStatus, indexIssues } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/${repoName}`),
      api.get(`/${repoName}/issues`, {
        params: {
          state: issuesStatus[indexIssues].status,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { page, issuesStatus, indexIssues } = this.state;
    const issues = await api.get(`/${repoName}/issues`, {
      params: {
        state: issuesStatus[indexIssues].status,
        per_page: 5,
        page,
      },
    });

    this.setState({ issues: issues.data });
  };

  handlePage = async (action) => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.loadIssues();
  };

  handleIssuesStatus = async (index) => {
    await this.setState({ indexIssues: index });

    this.loadIssues();
  };

  render() {
    const {
      repository,
      issues,
      loading,
      page,
      issuesStatus,
      indexIssues,
    } = this.state;

    if (loading) {
      return (
        <Loading>
          Carregando <FaSpinner size={24} color="#fff" />
        </Loading>
      );
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt="" />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssuesFilter>
          {issuesStatus.map((item, index) => (
            <button
              type="button"
              key={index}
              disabled={!!(index === indexIssues)}
              onClick={() => {
                this.handleIssuesStatus(index);
              }}
            >
              {item.name}
            </button>
          ))}
        </IssuesFilter>
        <IssuesList>
          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue.title}
                  </a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>

        <PageAction>
          <button
            type="button"
            onClick={() => {
              this.handlePage('back');
            }}
            disabled={page < 2}
          >
            Voltar
          </button>
          <span>Página {page}</span>
          <button
            type="button"
            onClick={() => {
              this.handlePage('next');
            }}
          >
            Próximo
          </button>
        </PageAction>
      </Container>
    );
  }
}
