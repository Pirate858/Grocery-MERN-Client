import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Text, Title, useTheme, Caption } from 'react-native-paper';

const ItemCard = ({ item }) => {
  const theme = useTheme();
  const { name, originalPrice, price, photo, unitMeasured } = item;
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
      <Card.Actions style={{ alignSelf: 'center', marginLeft: 5, marginBottom: 10 }}>
        <Button icon="plus" />
        <Text>4</Text>
        <Button icon="minus" />
        <Caption>{unitMeasured}</Caption>
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
    minWidth: 150,
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
