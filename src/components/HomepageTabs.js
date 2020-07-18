import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CategoryScreen from '../screens/CategoryScreen';
import SearchScreen from '../screens/SearchScreen';

const bottomTab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <bottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = focused ? 'food' : 'food-apple-outline';
          } else if (route.name === 'Browse') {
            iconName = focused ? 'shopping-search' : 'search-web';
          }

          return <MaterialCommunityIcons name={iconName} size={24} color="black" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <bottomTab.Screen name="Explore" component={CategoryScreen} />
      <bottomTab.Screen name="Browse" component={SearchScreen} />
    </bottomTab.Navigator>
  );
};

export default HomePage;
