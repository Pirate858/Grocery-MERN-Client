import React, { useEffect, useContext, useState } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { StyleSheet, View, ScrollView } from 'react-native';
import ItemCard from '../components/ItemCard';
import SearchInput from '../components/SearchInput';
import { Context as ItemContext } from '../context/ItemContext';
import Loading from '../components/Loading';
import { AppLoading } from 'expo';

const SearchScreen = () => {
  const insets = useSafeArea();
  const { getItems, state } = useContext(ItemContext);

  const [loading, setLoading] = useState(true);

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
        <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollview}>
          <View style={styles.Container}>
            {state.items.map((item, idx) => (
              <ItemCard key={idx} item={item} />
            ))}
          </View>
        </ScrollView>
      )}
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
