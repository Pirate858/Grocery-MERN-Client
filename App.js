import React from 'react';
import ResolveAuth from './src/screens/ResolveAuth';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomePage from './src/components/HomepageTabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/configs/theme.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { navigationRef } from './src/nav/RootNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ title: null }}>
              <Stack.Screen name="ResolveAuth" component={ResolveAuth} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="Homepage" component={HomePage} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
