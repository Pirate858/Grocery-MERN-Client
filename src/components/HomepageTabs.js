import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import CategoryScreen from '../screens/CategoryScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createMaterialBottomTabNavigator();
const SearchStack = createStackNavigator();
const categoryStack = createStackNavigator();

const HomePage = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Browse" activeColor="#fff" shifting={true}>
      <Tab.Screen
        name="Browse"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Browse',
          tabBarColor: '#009b73',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shopping-search" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={CategoryStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#078282FF',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food-apple" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;

const SearchStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009b73',
      },
      headerTintColor: '#fff',
    }}
  >
    <SearchStack.Screen
      name="Browse"
      component={SearchScreen}
      options={{
        title: 'Search',
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
  </SearchStack.Navigator>
);

const CategoryStackScreen = ({ navigation }) => (
  <categoryStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#078282FF',
      },
      headerTintColor: '#fff',
    }}
  >
    <SearchStack.Screen
      name="Explore"
      component={CategoryScreen}
      options={{
        title: 'Category',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#078282FF"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </categoryStack.Navigator>
);
