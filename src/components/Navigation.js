import React, { useContext } from 'react';
import RootStack from './RootStack';
import HomePage from './HomepageTabs';
import CheckoutScreen from '../screens/CheckoutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../nav/RootNavigation';
import { Context as AuthContext } from '../context/AuthContext';
import DrawerContent from './DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const CheckoutStack = createStackNavigator();

const Navigation = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer ref={navigationRef}>
      {state.token ? (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="Checkout" component={CheckoutStackScreen} />
        </Drawer.Navigator>
      ) : (
        <RootStack />
      )}
    </NavigationContainer>
  );
};

export default Navigation;

const CheckoutStackScreen = ({ navigation }) => (
  <CheckoutStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009b73',
      },
      headerTintColor: '#fff',
    }}
  >
    <CheckoutStack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={{
        title: 'Checkout',
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009b73"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </CheckoutStack.Navigator>
);
