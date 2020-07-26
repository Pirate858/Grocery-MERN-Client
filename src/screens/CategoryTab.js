import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import grocerApi from '../api/grocersApi';
import { Title, useTheme, Button, Divider } from 'react-native-paper';
import { AppLoading } from 'expo';
import { Context as ItemContext } from '../context/ItemContext';
import Itemcard from '../components/ItemCard';

const HorizontalScroll = ({ category, items }) => {
  return <>{items.map((item, idx) => item.category === category && <Itemcard key={idx} item={item} />)}</>;
};

const CategoryTab = () => {
  const insets = useSafeArea();
  const theme = useTheme();
  const {
    state: { items },
  } = useContext(ItemContext);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCategories = async () => {
    const response = await grocerApi.get('/items/category');
    const { data } = response;

    setCategories(data);
  };

  return (
    <ScrollView
      style={{
        paddingTop: insets.top,
      }}
    >
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
            <ScrollView horizontal style={styles.horizontalScroll}>
              <HorizontalScroll category={category} items={items} />
            </ScrollView>
            <Divider />
          </View>
        ))
      )}
    </ScrollView>
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
