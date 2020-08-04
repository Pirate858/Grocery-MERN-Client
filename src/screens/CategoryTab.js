import React, { useContext, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import grocerApi from '../api/grocersApi';
import { Title, useTheme, Button, Divider, Snackbar } from 'react-native-paper';
import { AppLoading } from 'expo';
import { Context as ItemContext } from '../context/ItemContext';
import { Context as CartContext } from '../context/CartContext';
import Itemcard from '../components/ItemCard';

const HorizontalScroll = ({ category, items, setAvailability }) => {
  const Cart = useContext(CartContext);
  return (
    <>
      {items.map((item) => {
        const existingQty = Cart.state.cartItems.find((cartItem) => item._id === cartItem._id);
        let qtyChanged = 0;

        if (existingQty) {
          Cart.state.cartItems.map((cartItem) => {
            if (item._id === cartItem._id) {
              qtyChanged = cartItem.quantity;
            }
          });
        }
        return (
          item.category === category && (
            <Itemcard key={item._id} item={item} setAvailability={setAvailability} quantity={qtyChanged} />
          )
        );
      })}
    </>
  );
};

const CategoryTab = () => {
  const insets = useSafeArea();
  const theme = useTheme();
  const {
    state: { items },
  } = useContext(ItemContext);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availability, setAvailability] = useState(true);
  const getCategories = async () => {
    const response = await grocerApi.get('/items/category');
    const { data } = response;

    setCategories(data);
  };

  return (
    <View
      style={{
        paddingBottom: insets.bottom,
      }}
    >
      <ScrollView alwaysBounceVertical>
        {loading === true ? (
          <AppLoading startAsync={getCategories} onFinish={() => setLoading(false)} />
        ) : (
          categories.map((category, idx) => (
            <View key={idx}>
              <View style={styles.titleContainer}>
                <Title style={{ color: theme.colors.categoryTabColor }}>{category}</Title>

                <Button
                  uppercase={false}
                  labelStyle={{
                    color: theme.colors.categoryTabColor,
                    fontSize: 12,
                  }}
                  contentStyle={{ justifyContent: 'flex-end' }}
                >
                  View More
                </Button>
              </View>
              <ScrollView horizontal style={styles.horizontalScroll} alwaysBounceHorizontal>
                <HorizontalScroll category={category} items={items} setAvailability={setAvailability} />
              </ScrollView>
              <Divider />
            </View>
          ))
        )}
      </ScrollView>
      <Snackbar
        style={{ marginBottom: 20, backgroundColor: '#000', borderRadius: 20 }}
        visible={!availability}
        onDismiss={() => setAvailability(true)}
        duration={1000}
      >
        Max Quantity reached
      </Snackbar>
    </View>
  );
};

export default CategoryTab;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 10,
  },
  horizontalScroll: {
    width: '100%',
  },
});
