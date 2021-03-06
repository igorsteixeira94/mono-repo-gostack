import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#7159c1'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="Usuários" component={Main} />
        <Stack.Screen
          name="User"
          component={User}
          options={({route}) => ({title: route.params.user.name})}
        />
        <Stack.Screen
          name="Repository"
          component={Repository}
          options={({route}) => ({title: route.params.item.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
