import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import AppointmentStack from './AppointmentStack';

const { Navigator, Screen } = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
          backgroundColor: '#8d41a8',
          borderTopColor: '#8d41a8',
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelStyle: {
          fontSize: 16,
          marginLeft: 8,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        inactiveTintColor: 'rgba(255,255,255,0.6)',
        activeTintColor: '#fff',
        activeBackgroundColor: '#8d41a8',
        inactiveBackgroundColor: '#a873ba',
        keyboardHidesTabBar: true,
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color }) => (
            <Icon name="event" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="New"
        component={AppointmentStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Agendar',
          tabBarVisible: false,
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
