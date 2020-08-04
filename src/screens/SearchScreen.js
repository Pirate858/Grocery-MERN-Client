import React, { useEffect, useContext, useState } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Snackbar } from 'react-native-paper';
import ItemCard from '../components/ItemCard';
import SearchInput from '../components/SearchInput';
import { Context as ItemContext } from '../context/ItemContext';
import { Context as CartContext } from '../context/CartContext';

import { AppLoading } from 'expo';

const SearchScreen = () => {
  const insets = useSafeArea();
  const { getItems, state } = useContext(ItemContext);
  const Cart = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  const [availability, setAvailability] = useState(true);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        ...styles.containerStyle,
      }}
    >
      <SearchInput />

      {loading === true ? (
        <AppLoading startAsync={getItems} onFinish={() => setLoading(false)} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollview} alwaysBounceVertical>
          <View style={styles.Container}>
            {state.items.map((item) => {
              const existingQty = Cart.state.cartItems.find((cartItem) => item._id === cartItem._id);
              let qtyChanged = 0;

              if (existingQty) {
                Cart.state.cartItems.map((cartItem) => {
                  if (item._id === cartItem._id) {
                    qtyChanged = cartItem.quantity;
                  }
                });
              }
              return <ItemCard key={item._id} item={item} setAvailability={setAvailability} quantity={qtyChanged} />;
            })}
          </View>
        </ScrollView>
      )}
      <Snackbar
        style={{ marginBottom: 70, backgroundColor: '#000', borderRadius: 20 }}
        visible={!availability}
        onDismiss={() => setAvailability(true)}
        duration={1000}
      >
        Max Quantity reached
      </Snackbar>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  scrollview: {
    height: '100%',
  },
  Container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: 600,
    marginBottom: 50,
    justifyContent: 'center',
  },
});
