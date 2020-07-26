import React, { useContext } from 'react';
import Navigation from './src/components/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/configs/theme.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as ItemProvider } from './src/context/ItemContext';

const App = () => {
  return (
    <AuthProvider>
      <ItemProvider>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </ItemProvider>
    </AuthProvider>
  );
};

export default App;
