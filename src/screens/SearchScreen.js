import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Button, Text, Title, useTheme, Caption } from 'react-native-paper';

import SearchInput from '../components/SearchInput';
import { color } from 'react-native-reanimated';

const SearchScreen = () => {
  const insets = useSafeArea();
  const theme = useTheme();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        ...styles.containerStyle,
      }}
    >
      <SearchInput />
      <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollview}>
        <View style={styles.Container}>
          <Card style={styles.cardContainer}>
            <Card.Cover
              source={{
                uri:
                  'https://images.unsplash.com/photo-1594567170531-bb0a139aaba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
              }}
              style={styles.imgContainer}
            />
            <Card.Title title="Tomato" titleStyle={{ color: theme.colors.impTextColor, alignSelf: 'baseline' }} />
            <Card.Content style={{ flex: 1, flexDirection: 'row', marginBottom: 0 }}>
              <Title style={{ color: theme.colors.impTextColor }}>{'\u20B9'}200</Title>
              <Text style={styles.slashedPrice}>{'\u20B9'}400</Text>
            </Card.Content>
            <Card.Actions style={{ alignSelf: 'center', marginLeft: 5 }}>
              <Button icon="plus" />
              <Text>4</Text>
              <Button icon="minus" />
              <Caption>kg</Caption>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
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
  },
  cardContainer: {
    marginLeft: 30,
    marginTop: 25,
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
