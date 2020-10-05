import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Dashboard from './Dashboard';

const { Navigator, Screen } = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="SignIn"
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Router;
