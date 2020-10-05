import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();
export default function TabNavigate({ route: { params } }) {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 54,
        },
        tabStyle: {
          alignContent: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          shadowColor: '#00000026',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
        },
        inactiveTintColor: '#999999',
        activeTintColor: '#7D40E7',
      }}
    >
      <Screen
        name="Entregas"
        initialParams={params}
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Meu Perfil"
        initialParams={params}
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
