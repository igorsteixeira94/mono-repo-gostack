import React from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ header: (props) => <Header {...props} /> }}>
        <Screen name="Home" component={Home} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
}
