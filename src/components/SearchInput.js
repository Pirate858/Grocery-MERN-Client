import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import theme from '../configs/theme.config';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Type To Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchBar}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 30,
    alignSelf: 'center',
    width: '90%',
  },
});
