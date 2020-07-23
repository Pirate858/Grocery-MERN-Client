import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import theme from '../configs/theme.config';
import SearchInput from '../components/SearchInput';

const screenWidth = Math.round(Dimensions.get('window').height);
console.log(screenWidth);

const SearchScreen = () => {
  const insets = useSafeArea();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        ...styles.containerStyle,
      }}
    >
      <SearchInput />
      <ScrollView style={styles.scrollview}>
        <Card elevation={4} style={styles.cardContainer}>
          <Card.Cover
            source={{
              uri:
                'https://images.unsplash.com/photo-1594567170531-bb0a139aaba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
            }}
            style={styles.imgContainer}
          />
          <Card.Title title="Tomato" />
        </Card>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  scrollview: {
    height: '100%',
  },
  cardContainer: {
    marginLeft: 25,
    marginTop: 25,
    minHeight: 200,
    maxWidth: 150,
    borderRadius: 20,
  },

  imgContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    maxHeight: 120,
    marginTop: 10,
  },
});
