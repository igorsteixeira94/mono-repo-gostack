import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

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
      </Navigator>
    </NavigationContainer>
  );
}

export default Router;
