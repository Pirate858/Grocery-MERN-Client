import React, { useContext } from 'react';
import RootStack from './RootStack';
import HomePage from './HomepageTabs';
import CheckoutScreen from '../screens/CheckoutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from '../nav/RootNavigation';
import { Context as AuthContext } from '../context/AuthContext';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer ref={navigationRef}>
      {state.token ? (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="Checkout" component={CheckoutScreen} />
        </Drawer.Navigator>
      ) : (
        <RootStack />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
