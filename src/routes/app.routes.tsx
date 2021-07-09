import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';

const { Navigator, Screen } = createBottomTabNavigator();


const AppRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="Dashboard"
        component={Dashboard}
      />

      <Screen
        name="Cadastrar"
        component={Register}
      />
    </Navigator>
  );
}

export default AppRoutes;
