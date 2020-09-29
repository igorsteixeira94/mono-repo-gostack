import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {View, ActivityIndicator, Dimensions} from 'react-native';

export default class Repository extends Component {
  state = {
    loading: true,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };

  onLoad = () => {
    this.setState({loading: false});
  };

  render() {
    const {
      route: {
        params: {item},
      },
    } = this.props;
    const {loading, height, width} = this.state;
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: item.html_url}}
          style={{flex: 1}}
          onLoad={() => this.onLoad()}
        />
        {loading && (
          <ActivityIndicator
            size={30}
            color="#7159c1"
            style={{
              position: 'absolute',
              top: height / 2,
              left: width / 2.2,
            }}
          />
        )}
      </View>
    );
  }
}
