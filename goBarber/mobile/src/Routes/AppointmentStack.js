import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Confirm from '../pages/Confirm';
import SelectProvider from '../pages/SelectProvider';
import SelectDateTime from '../pages/SelectDateTime';

const Stack = createStackNavigator();

function Routes({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: 'right',
        headerTintColor: '#FFF',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
      initialRouteName="SelectProvider"
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          headerTitle: 'Selecione o prestador',
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" color={tintColor} size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SelectDate"
        component={SelectDateTime}
        options={{
          headerTitle: 'Selecione o horário',
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectProvider');
              }}
            >
              <Icon name="chevron-left" color={tintColor} size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerTitle: 'Confime os dados',
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectDate');
              }}
            >
              <Icon name="chevron-left" color={tintColor} size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
