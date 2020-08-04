import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Text, Title, useTheme, Caption } from 'react-native-paper';
import { Context as CartContext } from '../context/CartContext';

const ItemCard = ({ item, setAvailability, quantity }) => {
  const theme = useTheme();
  const { maxAvailable, name, originalPrice, price, photo, unitMeasured } = item;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const handleIncrementClick = () => {
    if (quantity >= maxAvailable) {
      setAvailability(false);
    } else {
      addItemToCart(item);
    }
  };

  const handleDecrementClick = () => {
    if (quantity > 0) {
      removeItemFromCart(item);
    }
  };

  return (
    <Card style={styles.cardContainer}>
      <Card.Cover
        source={{
          uri: photo,
        }}
        style={styles.imgContainer}
      />
      <Card.Title title={name} titleStyle={{ color: theme.colors.impTextColor, alignSelf: 'baseline' }} />
      <Card.Content style={{ flex: 1, flexDirection: 'row', marginBottom: 0 }}>
        <Title style={{ color: theme.colors.impTextColor }}>
          {'\u20B9'}
          {price}
        </Title>
        <Text style={styles.slashedPrice}>
          {'\u20B9'}
          {originalPrice}
        </Text>
      </Card.Content>
      <Card.Actions style={{ alignSelf: 'center', marginLeft: 5, marginBottom: 5 }}>
        {quantity < 1 ? (
          <Button
            icon="cart-arrow-down"
            mode="contained"
            uppercase={false}
            style={{ marginRight: 5, maxHeight: 35 }}
            onPress={handleIncrementClick}
          >
            Buy
          </Button>
        ) : (
          <>
            <Button icon="minus" compact onPress={handleDecrementClick} />
            <Text>{quantity}</Text>
            <Button icon="plus" compact onPress={handleIncrementClick} />
            <Caption style={{ marginRight: 10 }}>{unitMeasured}</Caption>
          </>
        )}
      </Card.Actions>
    </Card>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    maxHeight: 275,
    width: 160,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: '#ebf6f7',
  },

  imgContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: 120,
    marginTop: 15,
    borderBottomColor: 'red',
  },
  slashedPrice: {
    marginLeft: 10,
    marginTop: 8,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
