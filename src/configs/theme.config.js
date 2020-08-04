import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#339E66FF',
    accent: '#f1c40f',
    //surface: ' #90ee90',
    impTextColor: '#339E66FF',
    categoryTabColor: '#078282FF',
  },
};

export default theme;
