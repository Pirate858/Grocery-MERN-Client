import React, { useContext, useState, useEffect } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Title, Caption, Button, Snackbar } from 'react-native-paper';
import { Context as CartContext } from '../context/CartContext';

const Item = ({ item, onIncrement, onDecrement }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.imgContainer} source={{ uri: item.photo }} />
      <View>
        <Title style={styles.title}>{item.name}</Title>
        <Caption style={styles.caption}>
          {item.quantity} {item.unitMeasured} * {item.price}
        </Caption>
      </View>
      <View style={{ marginRight: 0, alignItems: 'center' }}>
        <Title>
          {'\u20B9'} {item.quantity * item.price}
        </Title>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button icon="minus" compact onPress={() => onDecrement(item)} />
          <Text>{item.quantity}</Text>
          <Button icon="plus" compact onPress={() => onIncrement(item)} />
        </View>
      </View>
    </View>
  );
};

const CheckoutScreen = () => {
  const insets = useSafeArea();
  const { state, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const [availability, setAvailability] = useState(true);

  const renderItem = ({ item }) => {
    if (item.quantity) {
      return <Item item={item} onIncrement={handleIncrement} onDecrement={handleDecrement} />;
    } else {
      return null;
    }
  };

  const handleIncrement = (item) => {
    if (item.quantity >= item.maxAvailable) {
      setAvailability(false);
    } else {
      addItemToCart(item);
    }
  };

  const handleDecrement = (item) => {
    if (item.quantity < 1) {
      clearItemFromCart(item);
      console.log(state.cartItems);
    } else {
      removeItemFromCart(item);
      console.log(state.cartItems);
    }
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        height: '100%',
      }}
    >
      <Title style={styles.headline}>Ordered Items:</Title>
      <FlatList data={state.cartItems} renderItem={renderItem} keyExtractor={(item) => item._id} />
      <Snackbar
        style={{ marginBottom: 30, backgroundColor: '#000', borderRadius: 20 }}
        visible={!availability}
        onDismiss={() => setAvailability(true)}
        duration={1000}
      >
        Max Quantity reached
      </Snackbar>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  headline: {
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  title: {
    color: '#339E66FF',
    marginRight: 60,
  },
  caption: {
    fontSize: 15,
  },
});
