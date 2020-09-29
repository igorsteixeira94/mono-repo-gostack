import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  state = {
    stars: [],
    page: 1,
    pageMax: false,
    loading: false,
    refreshing: false,
  };

  async componentDidMount() {
    this.load();
  }

  load = async (page = 1) => {
    this.setState({loading: true});
    const {
      route: {
        params: {user},
      },
    } = this.props;

    const response = await api.get(`${user.login}/starred`, {
      params: {page},
    });
    const lengData = response.data.length;

    if (lengData < 30) {
      this.setState({pageMax: true});
    }

    this.setState({
      stars:
        page >= 2 ? [...this.state.stars, ...response.data] : response.data,
      loading: false,
      page,
      refreshing: false,
    });
  };

  loadMore = () => {
    const {page, pageMax} = this.state;

    if (!pageMax) {
      const newPage = page + 1;

      this.load(newPage);
    }
  };

  refreshList = () => {
    this.setState({refreshing: true});
    this.load();
  };

  handleNavigate = (item) => {
    const {navigation} = this.props;

    navigation.navigate('Repository', {item});
  };

  render() {
    const {stars, loading, refreshing} = this.state;
    const {
      route: {
        params: {user},
      },
    } = this.props;
    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? (
          <ActivityIndicator size={20} color="#7159c1" />
        ) : (
          <Stars
            data={stars}
            onRefresh={this.refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            keyExtractor={(star) => String(star.id)}
            renderItem={({item}) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{uri: item.owner.avatar_url}} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
