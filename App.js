import React, { useContext } from 'react';
import Navigation from './src/components/Navigation';
import theme from './src/configs/theme.config';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as ItemProvider } from './src/context/ItemContext';
import { Provider as CartProvider } from './src/context/CartContext';

const App = () => {
  return (
    <AuthProvider>
      <ItemProvider>
        <CartProvider>
          <PaperProvider theme={theme}>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          </PaperProvider>
        </CartProvider>
      </ItemProvider>
    </AuthProvider>
  );
};

export default App;
