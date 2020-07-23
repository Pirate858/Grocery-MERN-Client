import React, { useContext } from 'react';
import Navigation from './src/components/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/configs/theme.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PaperProvider>
    </AuthProvider>
  );
};

export default App;
